'use strict';
const webpack=require('webpack');
const compression = require('compression-webpack-plugin');
const html = require('html-webpack-plugin');
const jade = require('jade');
const prod = process.env.NODE_ENV === 'production';
const base = prod ? '/statistikwbt/' : '/statistikwbt_dev/';
const config = {
  entry: {
    app: './src',
    vendors: [
      'angular-ui-router',
      'angular-ui-router.statehelper',
      'angular-ui-bootstrap',
      'oclazyload',
      'api-check',
      'angular-formly',
      'source-map!angular-formly-templates-bootstrap',
      'angular-permission',
      'ngstorage'
    ]
  },
  output: {
    filename: 'app.js',
    path: './dist',
    publicPath: base+'dist/'
  },
  module: {
    loaders: [
      {
        loader: 'ng-annotate?add!babel!eslint',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/
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
        loader: 'json!yaml',
        test: /\.yml$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  externals: {
    angular: 'angular',
    lodash: '_',
    d3: 'd3',
    MathJax: 'MathJax',
    vega: 'vg'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new html({
      title: 'Statistik für Jedermann',
      templateContent: jade.compileFile(__dirname+'/src/index.jade'),
      inject: 'head',
      base,
      prod,
      versions: {
        angular: '1.4.4',
        bootstrap: '3.3.5',
        d3: '3.5.6',
        fontAwesome: '4.4.0',
        lodash: '3.10.1',
        restangular: '1.5.1',
        vega: '2.0.6'
      }
    })
  ],
  devServer: {
    port: 9000,
    host: 'localhost',
    proxy: {
      '*': {
        target: 'http://localhost:3000',
        rewrite: function(req){
          req.url = req.url.replace(base,'/');
        }
      }
    }
  }
};
if(prod){
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new compression()
  );
}
module.exports = config;
