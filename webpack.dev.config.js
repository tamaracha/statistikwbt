'use strict';
const config = require('./webpack.config.js');
config.devServer = {
  port: 9000,
  host: 'localhost',
  inline: true,
  proxy: {
    '*': 'http://localhost:3000/'
  }
};
module.exports = config;
