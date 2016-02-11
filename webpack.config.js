'use strict';
const path = require('path');
const webpack=require('webpack');
const assets = require('assets-webpack-plugin');
const prod = process.env.NODE_ENV === 'production';
const config = {
  entry: {
    app: './src'
  },
  output: {
    //filename: 'app.js',
    //path: './dist',
    //publicPath: 'dist/',
    path: path.join(__dirname, "dist"),
    publicPath: "dist/",
    filename: "app.[hash].js",
    chunkFilename: "chunk.[chunkhash].js"
  },
  module: {
    preLoaders: [
      {
        loader: 'source-map',
        include: [/angular-file-upload/]
      }
    ],
    noParse: [
      /angular-file-upload/
    ],
    loaders: [
      {
        loader: 'babel?presets[]=es2015!eslint',
        test: /\.js$/,
        exclude: /(node_modules|bower_components|api.js|angular-locale)/
      },
      {
        loader: 'style!css',
        test: /\.css$/
      },
      {
        loader: `ngtemplate?relativeTo=src/&prefix=dist/!template-html?engine=jade&doctype=html&basedir=${__dirname}/src`,
        test: /\.jade$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: 'json',
        test: /\.json$/
      },
      {
        loader: 'json!yaml',
        test: /\.yml$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  externals: {
    angular: 'angular',
    MathJax: 'MathJax',
    lodash: '_',
    $: '$'
  },
  devtool: 'source-map',
  plugins: [
    new assets({
      path: 'dist',
      filename: 'assets.json'
    })
  ]
};
if(prod){
  config.entry.vendors = [
    'angular-ui-router',
    'angular-ui-router.statehelper',
    'angular-ui-bootstrap',
    'oclazyload',
    'api-check',
    'angular-formly',
    'angular-formly-templates-bootstrap',
    'ngstorage',
    'angular-permission',
    './src/angular-locale_de-de'
  ];
  config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.optimize.DedupePlugin()
  );
}
module.exports = config;
