'use strict';
const webpack=require('webpack');
const compression = require('compression-webpack-plugin');
const html = require('html-webpack-plugin');
const jade = require('jade');
const prod = process.env.NODE_ENV === 'production';
const basename = require('path').basename(__dirname);
const base = prod ? `/${basename}/` : `/${basename}_dev/`;
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
      'angular-formly-templates-bootstrap',
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
        loader: 'ng-annotate?add!babel?presets[]=es2015!eslint',
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
    MathJax: 'MathJax'
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
        angular: '1.4.7',
        bootstrap: '3.3.5',
        fontAwesome: '4.4.0',
        lodash: '3.10.1',
        restangular: '1.5.1',
      }
    })
  ],
  devtool: 'source-map',
  devServer: {
    port: 9000,
    host: '0.0.0.0',
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
