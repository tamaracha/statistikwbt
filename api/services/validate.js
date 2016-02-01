'use strict';
const _=require('mongoose-validator');
const some = require('lodash/some');
const $ = module.exports={};

$.emailValidator = _({
  validator: 'isEmail',
  message: 'not a valid email address'
});

$.notEmpty = _(
  {
    validator: function(options){
      return options.length>0;
    },
    message: 'must contain at least one option'
  },
  {
    validator: function(options){
      return some(options,'correct');
    },
    message: 'at least one option must be correct'
  }
);
