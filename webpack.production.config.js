'use strict';
const webpack=require('webpack');
const config = require('./webpack.config.js');
config.output.filename = 'bundle.min.js';
config.plugins = [
  new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
],
module.exports = config;
