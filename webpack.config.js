var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ng-annotate?add!babel!eslint'
      },
      {
        loader: 'style!css',
        test: /\.css$/,
      },
      {
        loader: `jade-html?doctype=html&basedir=${__dirname}/src`,
        test: /\.jade$/,
        exclude: /(node_modules|bower_components)/,
      },
      {
        loader: 'json!yaml',
        test: /\.yml$/,
        exclude: /(node_modules|bower_components)/,
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin()
  ],
  externals: {
    angular: 'angular',
    lodash: '_',
    d3: 'd3',
    MathJax: 'MathJax',
    vega: 'vg'
  }
};
