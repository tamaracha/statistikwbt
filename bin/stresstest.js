#! /usr/bin/env node
'use strict';

require('yargs')
.usage('Tool zur Datenanalyse und Export für WBTs')
.help('help','Zeigt diesen Hilfetext an')
.version(function(){
  return require('../package').version;
})
.command('view', 'Liest die Klicks für einen bestimmten Benutzer aus', require('./view'))
/*
.command('watch', 'Liest die Video-Events für einen bestimmten Benutzer aus', watch)
*/
.argv;
