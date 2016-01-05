import _ from 'lodash';
export default /*@ngInject*/class TestCtrl{
  constructor(test, $http, tests, unit){
    this.$http = $http;
    this.test = test;
    this.tests = tests;
    this.shuffle = this.test.shuffle(unit);
    this.count = 0;
    const position = this.test.position(this.tests);
    this.run = position[0];
    this.item = this.test.item(this.tests, this.run);
    this.count = position[1];
    if(this.shuffle.items){
      this.tests = _.shuffle(this.tests);
    }
    if(this.shuffle.choices && this.tests[this.item].item.type !== 'input'){
      this.tests[this.item].item.choices = _.shuffle(this.tests[this.item].item.choices);
    }
    this.score = {
      max: 0,
      runs: []
    };
    this.score.max = _.chain(this.tests).map('item').sum(this.test.maxPoints).value();
    for(let i = 0; i < this.run; i++){
      this.score.runs[i] = this.test.runPoints(this.tests, i+1);
    }
    this.response = this.test.input(this.tests[this.item].item);
    this.output = null;
  }
  submit(){
    const item = this.tests[this.item];
    const response = this.test.response(item.item.type, this.response, this.run);
    let p;
    if(!item.guess){
      const guess = {
        test: item.item._id,
        responses: [response]
      };
      p = this.$http.post('api/guesses',guess)
      .then(
        (res) => {
          this.tests[this.item].guess = res.data;
          return res;
        },
        (e) => {
          return e;
        }
      );
    }
    else{
      p = this.$http.post(`api/guesses/${item.guess._id}/responses`,response)
      .then(
        (res) => {
          this.tests[this.item].guess.responses.push(res.data);
          return res;
        },
        (e) => {
          return e;
        }
      );
    }
    return p.then(
      () => {
        this.score.runs[this.run-1] += this.test.points(item.item, response.value);
        if(item.item.type === 'input'){
          this.output = _.find(item.item.choices,{text: response.value});
          if(!this.output){
            this.output = {
              correct: false,
              feedback: 'Diese Antwort ist leider falsch'
            };
          }
        }
        this.count+=1;
      },
      (e) => {
        this.e = e;
      }
    );
  }
  next(){
    if(this.count === this.tests.length){
      this.run += 1;
      this.score.runs[this.run-1] = 0;
      this.count = 0;
      if(this.shuffle.items){
        this.tests = _.shuffle(this.tests);
      }
    }
    this.item = this.test.item(this.tests, this.run);
    if(this.shuffle.choices && this.tests[this.item].item.type !== 'input'){
      this.tests[this.item].item.choices = _.shuffle(this.tests[this.item].item.choices);
    }
    this.response = this.test.input(this.tests[this.item].item);
    this.output = null;
    this.form.$submitted = false;
    this.form.$setPristine();
  }
}
