#! /usr/bin/env node
'use strict';
const setup = require('./setup');
const view = require('./view');
require('yargs')
.command('setup', 'Richtet ein neues WBT ein', setup.builder, setup.handler)
.command('view', 'Liest die Klicks eines WBT aus', view.builder, view.handler)
.command('watch', 'Liest die Video-Events eines WBT aus')
.usage('Das administrative WBT-Tool')
.help()
.version(function(){
  return require('../package').version;
})
.completion()
.argv;
