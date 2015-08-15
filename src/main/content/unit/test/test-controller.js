import _ from 'lodash';
export default /*@ngInject*/class TestCtrl{
  constructor(Restangular,tests,unit,user){
    this.originalTests = tests.plain();
    this.Guesses = Restangular.all('guesses');
    this.unit = unit;
    this.user = user;
    this.init();
  }
  init(){
    if(this.originalTests.length === 0){
      this.tests = {
        done: [],
        todo: []
      };
      return;
    }
    const lengths = _.map(this.originalTests,function(test){
      return test.guess ? test.guess.responses.length : 0;
    });
    this.count = _.min(lengths);
    this.tests = _.groupBy(this.originalTests,function(test){
      if(this.count === 0){
        return test.guess ? 'done' : 'todo';
      }
      else if (this.count > 0){
        return test.guess.responses.length > this.count ? 'done' : 'todo';
      }
    },this);
    if(!this.tests.done){
      this.tests.done = [];
    }
    this.current = this.tests.todo[0].item;
  }
  reset(){
    this.init();
    this.form.$setPristine();
    this.form.$submitted = false;
  }
  get max(){
    return this.originalTests.length;
  }
  get done(){
    return this.tests.done.length;
  }
  get maxPoints(){
    return _.reduce(this.originalTests,function(sum,test){
      switch(test.item.type){
      case 'single':
        sum = sum + 1;
        break;
      case 'multiple':
        sum = sum + test.item.choices.length;
        break;
      case 'input':
        sum = sum + 1;
        break;
      }
      return sum;
    },0);
  }
  get sumPoints(){
    return _.reduce(this.tests.done,function(sum,test){
      if(!test.guess){
        return sum;
      }
      const item = test.item;
      const response = test.guess.responses[test.guess.responses.length - 1];
      let choice;
      switch(item.type){
      case 'single':
        choice = _.find(item.choices,{_id: response.value});
        if(choice.correct){
          sum = sum + 1;
        }
        break;
      case 'multiple':
        _.each(item.choices,function(c){
          const checked = _.contains(response.value,c._id);
          if(checked === c.correct){
            sum = sum + 1;
          }
        },this);
        break;
      case 'input':
        choice = _.find(item.choices,{text: response.value});
        if(choice.correct){
          sum = sum + 1;
        }
        break;
      }
      return sum;
    },0,this);
  }
  postSubmit(data){
    this.tests.todo[0].guess.responses.push(data);
    this.tests.done.push(this.tests.todo[0]);
    this.tests.todo.shift();
    if(this.done === this.max){
      return this.user.addUnit(this.unit._id);
    }
  }
  submit(){
    const response = {};
    switch(this.current.type){
    case 'single':
      if(!this.input){
        return;
      }
      this.form.item.$setValidity('correct',this.input.correct);
      response.value = this.input._id;
      break;
    case 'input':
      if(!this.input){
        return;
      }
      const choice = _.find(this.current.choices,{text: this.input});
      if(choice){
        this.form.item.$setValidity('correct',choice.correct);
        this.output = choice.feedback;
      }
      else{
        this.form.item.$setValidity('correct',false);
        this.output = 'Falsch';
      }
      response.value = this.input;
      break;
    case 'multiple':
      response.value = _.transform(this.current.choices,function(res,c){
        if(c.checked){
          res.push(c._id);
        }
      },[],this);
    }
    if(this.tests.todo[0].guess){
      this.Guesses.one(this.tests.todo[0].guess._id).all('responses').post(response)
      .then((data) => {
        this.postSubmit(data);
      });
    }
    else{
      const guess = {
        test: this.tests.todo[0].item._id,
        responses: [response]
      };
      this.Guesses.post(guess)
      .then((data) => {
        this.postSubmit(data);
      });
    }
  }
  next(){
    this.input = null;
    this.output = null;
    this.current = this.tests.todo[0].item;
    this.form.$submitted = false;
    this.form.$setPristine();
  }
}
