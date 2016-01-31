import _ from 'lodash';
export default function test(){
  function points(item, value){
    let choice;
    switch(item.type){
    case 'single':
      choice = _.find(item.choices,{_id: value});
      return choice.correct ? 1 : 0;
    case 'multiple':
      return _.sumBy(item.choices, function(c){
        return _.include(value,c._id) === c.correct ? 1 : 0;
      });
    case 'input':
      choice = _.find(item.choices,{text: value});
      if(!choice){return 0;}
      return choice.correct ? 1 : 0;
    }
  }
  function maxPoints(item){
    switch(item.type){
    case 'single': return 1;
    case 'multiple': return item.choices.length;
    case 'input': return 1;
    }
  }
  function runPoints(tests, guess){
    return _.sumBy(tests, function(t){
      if(guess.length === 0){return 0;}
      const response = _.find(guess.responses, {test: t._id});
      if(!response){return 0;}
      return points(t, response.value);
    });
  }
  function item(tests, guess){
    return _.findIndex(tests, function(t){
      const response = _.find(guess.responses, {test: t._id});
      return response ? false : true;
    });
  }
  function response(test, response){
    switch(test.type){
    case 'single':
      return {
        test: test._id,
        value: response._id
      };
    case 'multiple':
      const value = _.transform(response, function(ac, val, key){
        if(val === true){ac.push(key);}
      }, []);
      return {
        test: test._id,
        value
      };
    case 'input':
      return {
        test: test._id,
        value: response
      };
    }
  }
  function input(test){
    switch(test.type){
    case 'single': return null;
    case 'multiple': return _.transform(test.choices, function(o, c){
      o[c._id] = false;
    },{});
    case 'input': return '';
    }
  }
  function shuffle(unit){
    return _.transform(unit.test.shuffle, function(o, val){
      o[val] = true;
    }, {});
  }
  return {
    points,
    maxPoints,
    runPoints,
    item,
    response,
    input,
    shuffle
  };
}
