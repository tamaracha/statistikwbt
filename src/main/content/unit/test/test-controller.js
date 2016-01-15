import _ from 'lodash';
export default /*@ngInject*/class TestCtrl{
  constructor(test, $http, tests, unit, $window, user){
    this.$http = $http;
    this.test = test;
    this.unit = unit;
    this.shuffle = test.shuffle(unit);
    this.$window = $window;
    this.user = user;
    this.init(tests);
    this.feedback = {
      right: 'Korrekt',
      wrong: 'Leider nicht korrekt'
    };
  }
  init(tests){
    this.tests = tests.data.tests;
    if(this.shuffle.items){this.tests = _.shuffle(this.tests);}
    this.guess = tests.data.guess;
    this.run = tests.data.run;
    this.count = this.guess.responses.length;
    this.item = this.test.item(this.tests, this.guess);
    if(this.shuffle.choices){
      this.tests[this.item].choices = _.shuffle(this.tests[this.item].choices);
    }
    this.score = {
      max: _.sum(this.tests, this.test.maxPoints) || 0,
      current: this.test.runPoints(this.tests, this.guess)
    };
    this.response = this.test.input(this.tests[this.item]);
    this.output = null;
  }
  submit(){
    const item = this.tests[this.item];
    const response = this.test.response(item, this.response);
    const config = {
      method: 'POST',
      url: `api/guesses/${this.guess._id}/responses`,
      data: response,
      headers: {'if-unmodified-since': this.guess.updatedAt}
    };
    return this.$http(config)
    .then(
      (res) => {
        this.guess.responses.push(res.data);
        this.guess.updatedAt = res.headers('last-modified');
        this.score.current += this.test.points(item, response.value);
        if(item.type === 'input'){
          this.output = _.find(item.choices,{text: response.value});
          if(!this.output){
            this.output = {
              correct: false,
              feedback: 'Diese Antwort ist leider falsch'
            };
          }
        }
        this.count+=1;
        if(this.count === this.tests.length){
          return this.user.addUnit(this.unit._id);
        }
        return res;
      },
      (e) => {
        this.error = e;
        this.form.$submitted = false;
        return e;
      }
    );
  }
  next(){
    this.form.$submitted = false;
    this.form.$setPristine();
    if(this.count === this.tests.length){
      return this.$http.get('api/units/'+this.unit._id+'/summaries/test')
      .then(
        (res) => {
          this.init(res);
          return res;
        },
        (e) => {
          this.error = e;
          return e;
        }
      );
    }
    else{
      this.item = this.test.item(this.tests, this.guess);
      if(this.shuffle.choices){
        this.tests[this.item].choices = _.shuffle(this.tests[this.item].choices);
      }
      this.response = this.test.input(this.tests[this.item]);
      this.output = null;
    }
  }
  getGuesses(){
    const config = {
      method: 'GET',
      url: 'api/guesses',
      params: {
        conditions: {unit: this.unit._id}
      }
    };
    return this.$http(config)
    .then(
      (res) => {
        this.guesses = res.data;
        function points(guess, i){
          this.guesses[i].score = this.test.runPoints(this.tests, guess);
        }
        _.each(this.guesses, _.bind(points, this));
        if(this.guesses[this.guesses.length-1].responses.length < this.tests.length){
          this.guesses.pop();
        }
        return res;
      },
      (e) => {
        this.error = e;
        return e;
      }
    );
  }
  reload(){
    return this.$window.location.reload();
  }
}
