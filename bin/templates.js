#! /usr/bin/env node
'use strict';
const userArgs = require('yargs')
.usage('Kompiliert dot templates')
.help('help','Zeigt diesen Hilfetext an')
.version(function(){
  return require('../package').version;
})
.argv;
require('dot').process({
  path: 'src',
  destination: 'dist',
  templateSettings: {strip: false}
});
