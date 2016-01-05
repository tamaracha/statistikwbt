import _ from 'lodash';
export default /*@ngInject*/function test(){
  function points(item, value){
    let choice;
    switch(item.type){
    case 'single':
      choice = _.find(item.choices,{_id: value});
      return choice.correct ? 1 : 0;
    case 'multiple':
      return _.sum(item.choices, function(c){
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
  function runPoints(tests, run){
    return _.sum(tests, function(t){
      if(!t.guess){return 0;}
      const response = _.find(t.guess.responses, {run});
      if(!response){return 0;}
      return points(t.item, response.value);
    });
  }
  function position(tests){
    const pos = [];
    pos[0] = _.chain(tests)
    .map(function(t){
      if(!t.guess || !t.guess.responses || t.guess.responses.length === 0){return 0;}
      return _.chain(t.guess.responses).map('run').max().value();
    })
    .max()
    .value();
    if(pos[0] === 0){
      pos[0] = 1;
      pos[1] = 0;
    }
    else{
      pos[1] = _.sum(tests, function(t){
        return _.chain(t.guess.responses).map('run').include(pos[0]).value() ? 1 : 0;
      });
      if(pos[1] === tests.length){
        pos[0] += 1;
        pos[1] = 0;
      }
    }
    return pos;
  }
  function item(tests, run){
    return _.findIndex(tests, function(t){
      if(!t.guess){return true;}
      return !_.chain(t.guess.responses).map('run').include(run).value();
    });
  }
  function response(type, response, run){
    switch(type){
    case 'single':
      return {
        value: response._id,
        run
      };
    case 'multiple':
      const value = _.transform(response, function(ac, val, key){
        if(val === true){ac.push(key);}
      }, []);
      return {
        value,
        run
      };
    case 'input':
      return {
        value: response,
        run
      };
    }
  }
  function input(item){
    switch(item.type){
    case 'single': return null;
    case 'multiple': return _.transform(item.choices, function(o, c){
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
    position,
    item,
    response,
    input,
    shuffle
  };
}
