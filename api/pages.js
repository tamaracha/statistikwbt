'use strict';
const models = require('./models');
const unless = require('koa-unless');

function *index(){
  const wbt = yield models.Wbt.findOne({path: this.path})
.populate('pages', '-body')
.populate('units', 'title requires')
  .lean().exec();
  this.assert(wbt, 404, 'WBT not found');
  yield this.render('index', wbt);
}
index.unless = unless;
module.exports = index.unless({path: [/\/dist\//, /\/api\//]});
