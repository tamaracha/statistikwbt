webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(2);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	__webpack_require__(3);
	
	var _angularUiBootstrap = __webpack_require__(4);
	
	var _angularUiBootstrap2 = _interopRequireDefault(_angularUiBootstrap);
	
	var _ngstorage = __webpack_require__(6);
	
	var _ngstorage2 = _interopRequireDefault(_ngstorage);
	
	var _oclazyload = __webpack_require__(7);
	
	var _oclazyload2 = _interopRequireDefault(_oclazyload);
	
	var _apiCheck = __webpack_require__(8);
	
	var _apiCheck2 = _interopRequireDefault(_apiCheck);
	
	var _angularFormly = __webpack_require__(9);
	
	var _angularFormly2 = _interopRequireDefault(_angularFormly);
	
	var _angularFormlyTemplatesBootstrap = __webpack_require__(10);
	
	var _angularFormlyTemplatesBootstrap2 = _interopRequireDefault(_angularFormlyTemplatesBootstrap);
	
	__webpack_require__(11);
	
	var _wbtText = __webpack_require__(12);
	
	var _wbtText2 = _interopRequireDefault(_wbtText);
	
	__webpack_require__(13);
	
	var _youtube = __webpack_require__(14);
	
	var _youtube2 = _interopRequireDefault(_youtube);
	
	var _config = __webpack_require__(17);
	
	var _user = __webpack_require__(118);
	
	var user = _interopRequireWildcard(_user);
	
	var _modals = __webpack_require__(128);
	
	var _modals2 = _interopRequireDefault(_modals);
	
	var _testService = __webpack_require__(135);
	
	var _testService2 = _interopRequireDefault(_testService);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_apiCheck2.default.globalConfig.disabled = true; // libraries
	
	/**
	 * @module wbt
	 */
	exports.default = _angular2.default.module('wbt', ['restangular', _angularUiRouter2.default, 'ui.router.stateHelper', _angularUiBootstrap2.default, 'ngMessages', 'ngAria', 'ngAnimate', 'ngSanitize', _ngstorage2.default.name, _oclazyload2.default, _angularFormly2.default, _angularFormlyTemplatesBootstrap2.default, 'permission', _wbtText2.default, 'api', _youtube2.default]).config(_config.config).run(_config.run).factory('api', /*@ngInject*/["API", "$localStorage", function (API, $localStorage) {
	  var api = new API('api');
	  api.setToken($localStorage.token);
	  return api;
	}]).factory('userInterceptor', user.interceptor).service('user', user.model).directive('userCheck', user.validator).service('modals', _modals2.default).factory('test', _testService2.default).name;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1));
		else if(typeof define === 'function' && define.amd)
			define(["angular"], factory);
		else if(typeof exports === 'object')
			exports["wbtText"] = factory(require("angular"));
		else
			root["wbtText"] = factory(root["angular"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _angular = __webpack_require__(1);
	
		var _angular2 = _interopRequireDefault(_angular);
	
		var _markdownIt = __webpack_require__(2);
	
		var _markdownIt2 = _interopRequireDefault(_markdownIt);
	
		var _markdownProvider = __webpack_require__(71);
	
		var _markdownProvider2 = _interopRequireDefault(_markdownProvider);
	
		var _markdownDirective = __webpack_require__(72);
	
		var _markdownDirective2 = _interopRequireDefault(_markdownDirective);
	
		var _markedDirective = __webpack_require__(73);
	
		var _markedDirective2 = _interopRequireDefault(_markedDirective);
	
		var _markdownItDeflist = __webpack_require__(75);
	
		var _markdownItDeflist2 = _interopRequireDefault(_markdownItDeflist);
	
		var _babelPresetsEs2015MarkdownItDecorate = __webpack_require__(76);
	
		var _babelPresetsEs2015MarkdownItDecorate2 = _interopRequireDefault(_babelPresetsEs2015MarkdownItDecorate);
	
		var _markdownItFootnote = __webpack_require__(77);
	
		var _markdownItFootnote2 = _interopRequireDefault(_markdownItFootnote);
	
		var _markdownItMark = __webpack_require__(78);
	
		var _markdownItMark2 = _interopRequireDefault(_markdownItMark);
	
		var _figure = __webpack_require__(79);
	
		var _figure2 = _interopRequireDefault(_figure);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		module.exports = _angular2.default.module('wbt.text', ['ngSanitize']).constant('markdownit', _markdownIt2.default).provider('markdown', _markdownProvider2.default).config( /*@ngInject*/["markdownProvider", function (markdownProvider) {
		  markdownProvider.plugins = [_markdownItDeflist2.default, _babelPresetsEs2015MarkdownItDecorate2.default, _markdownItFootnote2.default, _markdownItMark2.default, _figure2.default];
		}]).directive('markdown', _markdownDirective2.default).directive('marked', _markedDirective2.default).name;
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
	
		module.exports = __webpack_require__(3);
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Main perser class
	
		'use strict';
	
	
		var utils        = __webpack_require__(4);
		var helpers      = __webpack_require__(18);
		var Renderer     = __webpack_require__(22);
		var ParserCore   = __webpack_require__(23);
		var ParserBlock  = __webpack_require__(33);
		var ParserInline = __webpack_require__(48);
		var LinkifyIt    = __webpack_require__(64);
		var mdurl        = __webpack_require__(8);
		var punycode     = __webpack_require__(66);
	
	
		var config = {
		  'default': __webpack_require__(68),
		  zero: __webpack_require__(69),
		  commonmark: __webpack_require__(70)
		};
	
		////////////////////////////////////////////////////////////////////////////////
		//
		// This validator can prohibit more than really needed to prevent XSS. It's a
		// tradeoff to keep code simple and to be secure by default.
		//
		// If you need different setup - override validator method as you wish. Or
		// replace it with dummy function and use external sanitizer.
		//
	
		var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
		var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
	
		function validateLink(url) {
		  // url should be normalized at this point, and existing entities are decoded
		  var str = url.trim().toLowerCase();
	
		  return BAD_PROTO_RE.test(str) ? (GOOD_DATA_RE.test(str) ? true : false) : true;
		}
	
		////////////////////////////////////////////////////////////////////////////////
	
	
		var RECODE_HOSTNAME_FOR = [ 'http:', 'https:', 'mailto:' ];
	
		function normalizeLink(url) {
		  var parsed = mdurl.parse(url, true);
	
		  if (parsed.hostname) {
		    // Encode hostnames in urls like:
		    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
		    //
		    // We don't encode unknown schemas, because it's likely that we encode
		    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
		    //
		    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
		      try {
		        parsed.hostname = punycode.toASCII(parsed.hostname);
		      } catch (er) { /**/ }
		    }
		  }
	
		  return mdurl.encode(mdurl.format(parsed));
		}
	
		function normalizeLinkText(url) {
		  var parsed = mdurl.parse(url, true);
	
		  if (parsed.hostname) {
		    // Encode hostnames in urls like:
		    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
		    //
		    // We don't encode unknown schemas, because it's likely that we encode
		    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
		    //
		    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
		      try {
		        parsed.hostname = punycode.toUnicode(parsed.hostname);
		      } catch (er) { /**/ }
		    }
		  }
	
		  return mdurl.decode(mdurl.format(parsed));
		}
	
	
		/**
		 * class MarkdownIt
		 *
		 * Main parser/renderer class.
		 *
		 * ##### Usage
		 *
		 * ```javascript
		 * // node.js, "classic" way:
		 * var MarkdownIt = require('markdown-it'),
		 *     md = new MarkdownIt();
		 * var result = md.render('# markdown-it rulezz!');
		 *
		 * // node.js, the same, but with sugar:
		 * var md = require('markdown-it')();
		 * var result = md.render('# markdown-it rulezz!');
		 *
		 * // browser without AMD, added to "window" on script load
		 * // Note, there are no dash.
		 * var md = window.markdownit();
		 * var result = md.render('# markdown-it rulezz!');
		 * ```
		 *
		 * Single line rendering, without paragraph wrap:
		 *
		 * ```javascript
		 * var md = require('markdown-it')();
		 * var result = md.renderInline('__markdown-it__ rulezz!');
		 * ```
		 **/
	
		/**
		 * new MarkdownIt([presetName, options])
		 * - presetName (String): optional, `commonmark` / `zero`
		 * - options (Object)
		 *
		 * Creates parser instanse with given config. Can be called without `new`.
		 *
		 * ##### presetName
		 *
		 * MarkdownIt provides named presets as a convenience to quickly
		 * enable/disable active syntax rules and options for common use cases.
		 *
		 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
		 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
		 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
		 *   similar to GFM, used when no preset name given. Enables all available rules,
		 *   but still without html, typographer & autolinker.
		 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
		 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
		 *   For example, when you need only `bold` and `italic` markup and nothing else.
		 *
		 * ##### options:
		 *
		 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
		 *   That's not safe! You may need external sanitizer to protect output from XSS.
		 *   It's better to extend features via plugins, instead of enabling HTML.
		 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
		 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
		 *   world you will need HTML output.
		 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
		 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
		 *   Can be useful for external highlighters.
		 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
		 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
		 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
		 *   quotes beautification (smartquotes).
		 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
		 *   pairs, when typographer enabled and smartquotes on. For example, you can
		 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
		 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
		 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
		 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
		 *   return empty string if the source was not changed and should be escaped externaly.
		 *
		 * ##### Example
		 *
		 * ```javascript
		 * // commonmark mode
		 * var md = require('markdown-it')('commonmark');
		 *
		 * // default mode
		 * var md = require('markdown-it')();
		 *
		 * // enable everything
		 * var md = require('markdown-it')({
		 *   html: true,
		 *   linkify: true,
		 *   typographer: true
		 * });
		 * ```
		 *
		 * ##### Syntax highlighting
		 *
		 * ```js
		 * var hljs = require('highlight.js') // https://highlightjs.org/
		 *
		 * var md = require('markdown-it')({
		 *   highlight: function (str, lang) {
		 *     if (lang && hljs.getLanguage(lang)) {
		 *       try {
		 *         return hljs.highlight(lang, str).value;
		 *       } catch (__) {}
		 *     }
		 *
		 *     try {
		 *       return hljs.highlightAuto(str).value;
		 *     } catch (__) {}
		 *
		 *     return ''; // use external default escaping
		 *   }
		 * });
		 * ```
		 **/
		function MarkdownIt(presetName, options) {
		  if (!(this instanceof MarkdownIt)) {
		    return new MarkdownIt(presetName, options);
		  }
	
		  if (!options) {
		    if (!utils.isString(presetName)) {
		      options = presetName || {};
		      presetName = 'default';
		    }
		  }
	
		  /**
		   * MarkdownIt#inline -> ParserInline
		   *
		   * Instance of [[ParserInline]]. You may need it to add new rules when
		   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
		   * [[MarkdownIt.enable]].
		   **/
		  this.inline = new ParserInline();
	
		  /**
		   * MarkdownIt#block -> ParserBlock
		   *
		   * Instance of [[ParserBlock]]. You may need it to add new rules when
		   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
		   * [[MarkdownIt.enable]].
		   **/
		  this.block = new ParserBlock();
	
		  /**
		   * MarkdownIt#core -> Core
		   *
		   * Instance of [[Core]] chain executor. You may need it to add new rules when
		   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
		   * [[MarkdownIt.enable]].
		   **/
		  this.core = new ParserCore();
	
		  /**
		   * MarkdownIt#renderer -> Renderer
		   *
		   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
		   * rules for new token types, generated by plugins.
		   *
		   * ##### Example
		   *
		   * ```javascript
		   * var md = require('markdown-it')();
		   *
		   * function myToken(tokens, idx, options, env, self) {
		   *   //...
		   *   return result;
		   * };
		   *
		   * md.renderer.rules['my_token'] = myToken
		   * ```
		   *
		   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
		   **/
		  this.renderer = new Renderer();
	
		  /**
		   * MarkdownIt#linkify -> LinkifyIt
		   *
		   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
		   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
		   * rule.
		   **/
		  this.linkify = new LinkifyIt();
	
		  /**
		   * MarkdownIt#validateLink(url) -> Boolean
		   *
		   * Link validation function. CommonMark allows too much in links. By default
		   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
		   * except some embedded image types.
		   *
		   * You can change this behaviour:
		   *
		   * ```javascript
		   * var md = require('markdown-it')();
		   * // enable everything
		   * md.validateLink = function () { return true; }
		   * ```
		   **/
		  this.validateLink = validateLink;
	
		  /**
		   * MarkdownIt#normalizeLink(url) -> String
		   *
		   * Function used to encode link url to a machine-readable format,
		   * which includes url-encoding, punycode, etc.
		   **/
		  this.normalizeLink = normalizeLink;
	
		  /**
		   * MarkdownIt#normalizeLinkText(url) -> String
		   *
		   * Function used to decode link url to a human-readable format`
		   **/
		  this.normalizeLinkText = normalizeLinkText;
	
	
		  // Expose utils & helpers for easy acces from plugins
	
		  /**
		   * MarkdownIt#utils -> utils
		   *
		   * Assorted utility functions, useful to write plugins. See details
		   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
		   **/
		  this.utils = utils;
	
		  /**
		   * MarkdownIt#helpers -> helpers
		   *
		   * Link components parser functions, useful to write plugins. See details
		   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
		   **/
		  this.helpers = helpers;
	
	
		  this.options = {};
		  this.configure(presetName);
	
		  if (options) { this.set(options); }
		}
	
	
		/** chainable
		 * MarkdownIt.set(options)
		 *
		 * Set parser options (in the same format as in constructor). Probably, you
		 * will never need it, but you can change options after constructor call.
		 *
		 * ##### Example
		 *
		 * ```javascript
		 * var md = require('markdown-it')()
		 *             .set({ html: true, breaks: true })
		 *             .set({ typographer, true });
		 * ```
		 *
		 * __Note:__ To achieve the best possible performance, don't modify a
		 * `markdown-it` instance options on the fly. If you need multiple configurations
		 * it's best to create multiple instances and initialize each with separate
		 * config.
		 **/
		MarkdownIt.prototype.set = function (options) {
		  utils.assign(this.options, options);
		  return this;
		};
	
	
		/** chainable, internal
		 * MarkdownIt.configure(presets)
		 *
		 * Batch load of all options and compenent settings. This is internal method,
		 * and you probably will not need it. But if you with - see available presets
		 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
		 *
		 * We strongly recommend to use presets instead of direct config loads. That
		 * will give better compatibility with next versions.
		 **/
		MarkdownIt.prototype.configure = function (presets) {
		  var self = this, presetName;
	
		  if (utils.isString(presets)) {
		    presetName = presets;
		    presets = config[presetName];
		    if (!presets) { throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name'); }
		  }
	
		  if (!presets) { throw new Error('Wrong `markdown-it` preset, can\'t be empty'); }
	
		  if (presets.options) { self.set(presets.options); }
	
		  if (presets.components) {
		    Object.keys(presets.components).forEach(function (name) {
		      if (presets.components[name].rules) {
		        self[name].ruler.enableOnly(presets.components[name].rules);
		      }
		      if (presets.components[name].rules2) {
		        self[name].ruler2.enableOnly(presets.components[name].rules2);
		      }
		    });
		  }
		  return this;
		};
	
	
		/** chainable
		 * MarkdownIt.enable(list, ignoreInvalid)
		 * - list (String|Array): rule name or list of rule names to enable
		 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
		 *
		 * Enable list or rules. It will automatically find appropriate components,
		 * containing rules with given names. If rule not found, and `ignoreInvalid`
		 * not set - throws exception.
		 *
		 * ##### Example
		 *
		 * ```javascript
		 * var md = require('markdown-it')()
		 *             .enable(['sub', 'sup'])
		 *             .disable('smartquotes');
		 * ```
		 **/
		MarkdownIt.prototype.enable = function (list, ignoreInvalid) {
		  var result = [];
	
		  if (!Array.isArray(list)) { list = [ list ]; }
	
		  [ 'core', 'block', 'inline' ].forEach(function (chain) {
		    result = result.concat(this[chain].ruler.enable(list, true));
		  }, this);
	
		  result = result.concat(this.inline.ruler2.enable(list, true));
	
		  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });
	
		  if (missed.length && !ignoreInvalid) {
		    throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
		  }
	
		  return this;
		};
	
	
		/** chainable
		 * MarkdownIt.disable(list, ignoreInvalid)
		 * - list (String|Array): rule name or list of rule names to disable.
		 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
		 *
		 * The same as [[MarkdownIt.enable]], but turn specified rules off.
		 **/
		MarkdownIt.prototype.disable = function (list, ignoreInvalid) {
		  var result = [];
	
		  if (!Array.isArray(list)) { list = [ list ]; }
	
		  [ 'core', 'block', 'inline' ].forEach(function (chain) {
		    result = result.concat(this[chain].ruler.disable(list, true));
		  }, this);
	
		  result = result.concat(this.inline.ruler2.disable(list, true));
	
		  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });
	
		  if (missed.length && !ignoreInvalid) {
		    throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
		  }
		  return this;
		};
	
	
		/** chainable
		 * MarkdownIt.use(plugin, params)
		 *
		 * Load specified plugin with given params into current parser instance.
		 * It's just a sugar to call `plugin(md, params)` with curring.
		 *
		 * ##### Example
		 *
		 * ```javascript
		 * var iterator = require('markdown-it-for-inline');
		 * var md = require('markdown-it')()
		 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
		 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
		 *             });
		 * ```
		 **/
		MarkdownIt.prototype.use = function (plugin /*, params, ... */) {
		  var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
		  plugin.apply(plugin, args);
		  return this;
		};
	
	
		/** internal
		 * MarkdownIt.parse(src, env) -> Array
		 * - src (String): source string
		 * - env (Object): environment sandbox
		 *
		 * Parse input string and returns list of block tokens (special token type
		 * "inline" will contain list of inline tokens). You should not call this
		 * method directly, until you write custom renderer (for example, to produce
		 * AST).
		 *
		 * `env` is used to pass data between "distributed" rules and return additional
		 * metadata like reference info, needed for the renderer. It also can be used to
		 * inject data in specific cases. Usually, you will be ok to pass `{}`,
		 * and then pass updated object to renderer.
		 **/
		MarkdownIt.prototype.parse = function (src, env) {
		  var state = new this.core.State(src, this, env);
	
		  this.core.process(state);
	
		  return state.tokens;
		};
	
	
		/**
		 * MarkdownIt.render(src [, env]) -> String
		 * - src (String): source string
		 * - env (Object): environment sandbox
		 *
		 * Render markdown string into html. It does all magic for you :).
		 *
		 * `env` can be used to inject additional metadata (`{}` by default).
		 * But you will not need it with high probability. See also comment
		 * in [[MarkdownIt.parse]].
		 **/
		MarkdownIt.prototype.render = function (src, env) {
		  env = env || {};
	
		  return this.renderer.render(this.parse(src, env), this.options, env);
		};
	
	
		/** internal
		 * MarkdownIt.parseInline(src, env) -> Array
		 * - src (String): source string
		 * - env (Object): environment sandbox
		 *
		 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
		 * block tokens list with the single `inline` element, containing parsed inline
		 * tokens in `children` property. Also updates `env` object.
		 **/
		MarkdownIt.prototype.parseInline = function (src, env) {
		  var state = new this.core.State(src, this, env);
	
		  state.inlineMode = true;
		  this.core.process(state);
	
		  return state.tokens;
		};
	
	
		/**
		 * MarkdownIt.renderInline(src [, env]) -> String
		 * - src (String): source string
		 * - env (Object): environment sandbox
		 *
		 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
		 * will NOT be wrapped into `<p>` tags.
		 **/
		MarkdownIt.prototype.renderInline = function (src, env) {
		  env = env || {};
	
		  return this.renderer.render(this.parseInline(src, env), this.options, env);
		};
	
	
		module.exports = MarkdownIt;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Utilities
		//
		'use strict';
	
	
		function _class(obj) { return Object.prototype.toString.call(obj); }
	
		function isString(obj) { return _class(obj) === '[object String]'; }
	
		var _hasOwnProperty = Object.prototype.hasOwnProperty;
	
		function has(object, key) {
		  return _hasOwnProperty.call(object, key);
		}
	
		// Merge objects
		//
		function assign(obj /*from1, from2, from3, ...*/) {
		  var sources = Array.prototype.slice.call(arguments, 1);
	
		  sources.forEach(function (source) {
		    if (!source) { return; }
	
		    if (typeof source !== 'object') {
		      throw new TypeError(source + 'must be object');
		    }
	
		    Object.keys(source).forEach(function (key) {
		      obj[key] = source[key];
		    });
		  });
	
		  return obj;
		}
	
		// Remove element from array and put another array at those position.
		// Useful for some operations with tokens
		function arrayReplaceAt(src, pos, newElements) {
		  return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
		}
	
		////////////////////////////////////////////////////////////////////////////////
	
		function isValidEntityCode(c) {
		  /*eslint no-bitwise:0*/
		  // broken sequence
		  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
		  // never used
		  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
		  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
		  // control codes
		  if (c >= 0x00 && c <= 0x08) { return false; }
		  if (c === 0x0B) { return false; }
		  if (c >= 0x0E && c <= 0x1F) { return false; }
		  if (c >= 0x7F && c <= 0x9F) { return false; }
		  // out of range
		  if (c > 0x10FFFF) { return false; }
		  return true;
		}
	
		function fromCodePoint(c) {
		  /*eslint no-bitwise:0*/
		  if (c > 0xffff) {
		    c -= 0x10000;
		    var surrogate1 = 0xd800 + (c >> 10),
		        surrogate2 = 0xdc00 + (c & 0x3ff);
	
		    return String.fromCharCode(surrogate1, surrogate2);
		  }
		  return String.fromCharCode(c);
		}
	
	
		var UNESCAPE_MD_RE  = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
		var ENTITY_RE       = /&([a-z#][a-z0-9]{1,31});/gi;
		var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');
	
		var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
	
		var entities = __webpack_require__(5);
	
		function replaceEntityPattern(match, name) {
		  var code = 0;
	
		  if (has(entities, name)) {
		    return entities[name];
		  }
	
		  if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
		    code = name[1].toLowerCase() === 'x' ?
		      parseInt(name.slice(2), 16)
		    :
		      parseInt(name.slice(1), 10);
		    if (isValidEntityCode(code)) {
		      return fromCodePoint(code);
		    }
		  }
	
		  return match;
		}
	
		/*function replaceEntities(str) {
		  if (str.indexOf('&') < 0) { return str; }
	
		  return str.replace(ENTITY_RE, replaceEntityPattern);
		}*/
	
		function unescapeMd(str) {
		  if (str.indexOf('\\') < 0) { return str; }
		  return str.replace(UNESCAPE_MD_RE, '$1');
		}
	
		function unescapeAll(str) {
		  if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) { return str; }
	
		  return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
		    if (escaped) { return escaped; }
		    return replaceEntityPattern(match, entity);
		  });
		}
	
		////////////////////////////////////////////////////////////////////////////////
	
		var HTML_ESCAPE_TEST_RE = /[&<>"]/;
		var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
		var HTML_REPLACEMENTS = {
		  '&': '&amp;',
		  '<': '&lt;',
		  '>': '&gt;',
		  '"': '&quot;'
		};
	
		function replaceUnsafeChar(ch) {
		  return HTML_REPLACEMENTS[ch];
		}
	
		function escapeHtml(str) {
		  if (HTML_ESCAPE_TEST_RE.test(str)) {
		    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
		  }
		  return str;
		}
	
		////////////////////////////////////////////////////////////////////////////////
	
		var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
	
		function escapeRE (str) {
		  return str.replace(REGEXP_ESCAPE_RE, '\\$&');
		}
	
		////////////////////////////////////////////////////////////////////////////////
	
		function isSpace(code) {
		  switch (code) {
		    case 0x09:
		    case 0x20:
		      return true;
		  }
		  return false;
		}
	
		// Zs (unicode class) || [\t\f\v\r\n]
		function isWhiteSpace(code) {
		  if (code >= 0x2000 && code <= 0x200A) { return true; }
		  switch (code) {
		    case 0x09: // \t
		    case 0x0A: // \n
		    case 0x0B: // \v
		    case 0x0C: // \f
		    case 0x0D: // \r
		    case 0x20:
		    case 0xA0:
		    case 0x1680:
		    case 0x202F:
		    case 0x205F:
		    case 0x3000:
		      return true;
		  }
		  return false;
		}
	
		////////////////////////////////////////////////////////////////////////////////
	
		/*eslint-disable max-len*/
		var UNICODE_PUNCT_RE = __webpack_require__(7);
	
		// Currently without astral characters support.
		function isPunctChar(ch) {
		  return UNICODE_PUNCT_RE.test(ch);
		}
	
	
		// Markdown ASCII punctuation characters.
		//
		// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
		// http://spec.commonmark.org/0.15/#ascii-punctuation-character
		//
		// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
		//
		function isMdAsciiPunct(ch) {
		  switch (ch) {
		    case 0x21/* ! */:
		    case 0x22/* " */:
		    case 0x23/* # */:
		    case 0x24/* $ */:
		    case 0x25/* % */:
		    case 0x26/* & */:
		    case 0x27/* ' */:
		    case 0x28/* ( */:
		    case 0x29/* ) */:
		    case 0x2A/* * */:
		    case 0x2B/* + */:
		    case 0x2C/* , */:
		    case 0x2D/* - */:
		    case 0x2E/* . */:
		    case 0x2F/* / */:
		    case 0x3A/* : */:
		    case 0x3B/* ; */:
		    case 0x3C/* < */:
		    case 0x3D/* = */:
		    case 0x3E/* > */:
		    case 0x3F/* ? */:
		    case 0x40/* @ */:
		    case 0x5B/* [ */:
		    case 0x5C/* \ */:
		    case 0x5D/* ] */:
		    case 0x5E/* ^ */:
		    case 0x5F/* _ */:
		    case 0x60/* ` */:
		    case 0x7B/* { */:
		    case 0x7C/* | */:
		    case 0x7D/* } */:
		    case 0x7E/* ~ */:
		      return true;
		    default:
		      return false;
		  }
		}
	
		// Hepler to unify [reference labels].
		//
		function normalizeReference(str) {
		  // use .toUpperCase() instead of .toLowerCase()
		  // here to avoid a conflict with Object.prototype
		  // members (most notably, `__proto__`)
		  return str.trim().replace(/\s+/g, ' ').toUpperCase();
		}
	
		////////////////////////////////////////////////////////////////////////////////
	
		// Re-export libraries commonly used in both markdown-it and its plugins,
		// so plugins won't have to depend on them explicitly, which reduces their
		// bundled size (e.g. a browser build).
		//
		exports.lib                 = {};
		exports.lib.mdurl           = __webpack_require__(8);
		exports.lib.ucmicro         = __webpack_require__(13);
	
		exports.assign              = assign;
		exports.isString            = isString;
		exports.has                 = has;
		exports.unescapeMd          = unescapeMd;
		exports.unescapeAll         = unescapeAll;
		exports.isValidEntityCode   = isValidEntityCode;
		exports.fromCodePoint       = fromCodePoint;
		// exports.replaceEntities     = replaceEntities;
		exports.escapeHtml          = escapeHtml;
		exports.arrayReplaceAt      = arrayReplaceAt;
		exports.isSpace             = isSpace;
		exports.isWhiteSpace        = isWhiteSpace;
		exports.isMdAsciiPunct      = isMdAsciiPunct;
		exports.isPunctChar         = isPunctChar;
		exports.escapeRE            = escapeRE;
		exports.normalizeReference  = normalizeReference;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		// HTML5 entities map: { name -> utf16string }
		//
		'use strict';
	
		/*eslint quotes:0*/
		module.exports = __webpack_require__(6);
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		module.exports = {
			"Aacute": "Á",
			"aacute": "á",
			"Abreve": "Ă",
			"abreve": "ă",
			"ac": "∾",
			"acd": "∿",
			"acE": "∾̳",
			"Acirc": "Â",
			"acirc": "â",
			"acute": "´",
			"Acy": "А",
			"acy": "а",
			"AElig": "Æ",
			"aelig": "æ",
			"af": "⁡",
			"Afr": "𝔄",
			"afr": "𝔞",
			"Agrave": "À",
			"agrave": "à",
			"alefsym": "ℵ",
			"aleph": "ℵ",
			"Alpha": "Α",
			"alpha": "α",
			"Amacr": "Ā",
			"amacr": "ā",
			"amalg": "⨿",
			"amp": "&",
			"AMP": "&",
			"andand": "⩕",
			"And": "⩓",
			"and": "∧",
			"andd": "⩜",
			"andslope": "⩘",
			"andv": "⩚",
			"ang": "∠",
			"ange": "⦤",
			"angle": "∠",
			"angmsdaa": "⦨",
			"angmsdab": "⦩",
			"angmsdac": "⦪",
			"angmsdad": "⦫",
			"angmsdae": "⦬",
			"angmsdaf": "⦭",
			"angmsdag": "⦮",
			"angmsdah": "⦯",
			"angmsd": "∡",
			"angrt": "∟",
			"angrtvb": "⊾",
			"angrtvbd": "⦝",
			"angsph": "∢",
			"angst": "Å",
			"angzarr": "⍼",
			"Aogon": "Ą",
			"aogon": "ą",
			"Aopf": "𝔸",
			"aopf": "𝕒",
			"apacir": "⩯",
			"ap": "≈",
			"apE": "⩰",
			"ape": "≊",
			"apid": "≋",
			"apos": "'",
			"ApplyFunction": "⁡",
			"approx": "≈",
			"approxeq": "≊",
			"Aring": "Å",
			"aring": "å",
			"Ascr": "𝒜",
			"ascr": "𝒶",
			"Assign": "≔",
			"ast": "*",
			"asymp": "≈",
			"asympeq": "≍",
			"Atilde": "Ã",
			"atilde": "ã",
			"Auml": "Ä",
			"auml": "ä",
			"awconint": "∳",
			"awint": "⨑",
			"backcong": "≌",
			"backepsilon": "϶",
			"backprime": "‵",
			"backsim": "∽",
			"backsimeq": "⋍",
			"Backslash": "∖",
			"Barv": "⫧",
			"barvee": "⊽",
			"barwed": "⌅",
			"Barwed": "⌆",
			"barwedge": "⌅",
			"bbrk": "⎵",
			"bbrktbrk": "⎶",
			"bcong": "≌",
			"Bcy": "Б",
			"bcy": "б",
			"bdquo": "„",
			"becaus": "∵",
			"because": "∵",
			"Because": "∵",
			"bemptyv": "⦰",
			"bepsi": "϶",
			"bernou": "ℬ",
			"Bernoullis": "ℬ",
			"Beta": "Β",
			"beta": "β",
			"beth": "ℶ",
			"between": "≬",
			"Bfr": "𝔅",
			"bfr": "𝔟",
			"bigcap": "⋂",
			"bigcirc": "◯",
			"bigcup": "⋃",
			"bigodot": "⨀",
			"bigoplus": "⨁",
			"bigotimes": "⨂",
			"bigsqcup": "⨆",
			"bigstar": "★",
			"bigtriangledown": "▽",
			"bigtriangleup": "△",
			"biguplus": "⨄",
			"bigvee": "⋁",
			"bigwedge": "⋀",
			"bkarow": "⤍",
			"blacklozenge": "⧫",
			"blacksquare": "▪",
			"blacktriangle": "▴",
			"blacktriangledown": "▾",
			"blacktriangleleft": "◂",
			"blacktriangleright": "▸",
			"blank": "␣",
			"blk12": "▒",
			"blk14": "░",
			"blk34": "▓",
			"block": "█",
			"bne": "=⃥",
			"bnequiv": "≡⃥",
			"bNot": "⫭",
			"bnot": "⌐",
			"Bopf": "𝔹",
			"bopf": "𝕓",
			"bot": "⊥",
			"bottom": "⊥",
			"bowtie": "⋈",
			"boxbox": "⧉",
			"boxdl": "┐",
			"boxdL": "╕",
			"boxDl": "╖",
			"boxDL": "╗",
			"boxdr": "┌",
			"boxdR": "╒",
			"boxDr": "╓",
			"boxDR": "╔",
			"boxh": "─",
			"boxH": "═",
			"boxhd": "┬",
			"boxHd": "╤",
			"boxhD": "╥",
			"boxHD": "╦",
			"boxhu": "┴",
			"boxHu": "╧",
			"boxhU": "╨",
			"boxHU": "╩",
			"boxminus": "⊟",
			"boxplus": "⊞",
			"boxtimes": "⊠",
			"boxul": "┘",
			"boxuL": "╛",
			"boxUl": "╜",
			"boxUL": "╝",
			"boxur": "└",
			"boxuR": "╘",
			"boxUr": "╙",
			"boxUR": "╚",
			"boxv": "│",
			"boxV": "║",
			"boxvh": "┼",
			"boxvH": "╪",
			"boxVh": "╫",
			"boxVH": "╬",
			"boxvl": "┤",
			"boxvL": "╡",
			"boxVl": "╢",
			"boxVL": "╣",
			"boxvr": "├",
			"boxvR": "╞",
			"boxVr": "╟",
			"boxVR": "╠",
			"bprime": "‵",
			"breve": "˘",
			"Breve": "˘",
			"brvbar": "¦",
			"bscr": "𝒷",
			"Bscr": "ℬ",
			"bsemi": "⁏",
			"bsim": "∽",
			"bsime": "⋍",
			"bsolb": "⧅",
			"bsol": "\\",
			"bsolhsub": "⟈",
			"bull": "•",
			"bullet": "•",
			"bump": "≎",
			"bumpE": "⪮",
			"bumpe": "≏",
			"Bumpeq": "≎",
			"bumpeq": "≏",
			"Cacute": "Ć",
			"cacute": "ć",
			"capand": "⩄",
			"capbrcup": "⩉",
			"capcap": "⩋",
			"cap": "∩",
			"Cap": "⋒",
			"capcup": "⩇",
			"capdot": "⩀",
			"CapitalDifferentialD": "ⅅ",
			"caps": "∩︀",
			"caret": "⁁",
			"caron": "ˇ",
			"Cayleys": "ℭ",
			"ccaps": "⩍",
			"Ccaron": "Č",
			"ccaron": "č",
			"Ccedil": "Ç",
			"ccedil": "ç",
			"Ccirc": "Ĉ",
			"ccirc": "ĉ",
			"Cconint": "∰",
			"ccups": "⩌",
			"ccupssm": "⩐",
			"Cdot": "Ċ",
			"cdot": "ċ",
			"cedil": "¸",
			"Cedilla": "¸",
			"cemptyv": "⦲",
			"cent": "¢",
			"centerdot": "·",
			"CenterDot": "·",
			"cfr": "𝔠",
			"Cfr": "ℭ",
			"CHcy": "Ч",
			"chcy": "ч",
			"check": "✓",
			"checkmark": "✓",
			"Chi": "Χ",
			"chi": "χ",
			"circ": "ˆ",
			"circeq": "≗",
			"circlearrowleft": "↺",
			"circlearrowright": "↻",
			"circledast": "⊛",
			"circledcirc": "⊚",
			"circleddash": "⊝",
			"CircleDot": "⊙",
			"circledR": "®",
			"circledS": "Ⓢ",
			"CircleMinus": "⊖",
			"CirclePlus": "⊕",
			"CircleTimes": "⊗",
			"cir": "○",
			"cirE": "⧃",
			"cire": "≗",
			"cirfnint": "⨐",
			"cirmid": "⫯",
			"cirscir": "⧂",
			"ClockwiseContourIntegral": "∲",
			"CloseCurlyDoubleQuote": "”",
			"CloseCurlyQuote": "’",
			"clubs": "♣",
			"clubsuit": "♣",
			"colon": ":",
			"Colon": "∷",
			"Colone": "⩴",
			"colone": "≔",
			"coloneq": "≔",
			"comma": ",",
			"commat": "@",
			"comp": "∁",
			"compfn": "∘",
			"complement": "∁",
			"complexes": "ℂ",
			"cong": "≅",
			"congdot": "⩭",
			"Congruent": "≡",
			"conint": "∮",
			"Conint": "∯",
			"ContourIntegral": "∮",
			"copf": "𝕔",
			"Copf": "ℂ",
			"coprod": "∐",
			"Coproduct": "∐",
			"copy": "©",
			"COPY": "©",
			"copysr": "℗",
			"CounterClockwiseContourIntegral": "∳",
			"crarr": "↵",
			"cross": "✗",
			"Cross": "⨯",
			"Cscr": "𝒞",
			"cscr": "𝒸",
			"csub": "⫏",
			"csube": "⫑",
			"csup": "⫐",
			"csupe": "⫒",
			"ctdot": "⋯",
			"cudarrl": "⤸",
			"cudarrr": "⤵",
			"cuepr": "⋞",
			"cuesc": "⋟",
			"cularr": "↶",
			"cularrp": "⤽",
			"cupbrcap": "⩈",
			"cupcap": "⩆",
			"CupCap": "≍",
			"cup": "∪",
			"Cup": "⋓",
			"cupcup": "⩊",
			"cupdot": "⊍",
			"cupor": "⩅",
			"cups": "∪︀",
			"curarr": "↷",
			"curarrm": "⤼",
			"curlyeqprec": "⋞",
			"curlyeqsucc": "⋟",
			"curlyvee": "⋎",
			"curlywedge": "⋏",
			"curren": "¤",
			"curvearrowleft": "↶",
			"curvearrowright": "↷",
			"cuvee": "⋎",
			"cuwed": "⋏",
			"cwconint": "∲",
			"cwint": "∱",
			"cylcty": "⌭",
			"dagger": "†",
			"Dagger": "‡",
			"daleth": "ℸ",
			"darr": "↓",
			"Darr": "↡",
			"dArr": "⇓",
			"dash": "‐",
			"Dashv": "⫤",
			"dashv": "⊣",
			"dbkarow": "⤏",
			"dblac": "˝",
			"Dcaron": "Ď",
			"dcaron": "ď",
			"Dcy": "Д",
			"dcy": "д",
			"ddagger": "‡",
			"ddarr": "⇊",
			"DD": "ⅅ",
			"dd": "ⅆ",
			"DDotrahd": "⤑",
			"ddotseq": "⩷",
			"deg": "°",
			"Del": "∇",
			"Delta": "Δ",
			"delta": "δ",
			"demptyv": "⦱",
			"dfisht": "⥿",
			"Dfr": "𝔇",
			"dfr": "𝔡",
			"dHar": "⥥",
			"dharl": "⇃",
			"dharr": "⇂",
			"DiacriticalAcute": "´",
			"DiacriticalDot": "˙",
			"DiacriticalDoubleAcute": "˝",
			"DiacriticalGrave": "`",
			"DiacriticalTilde": "˜",
			"diam": "⋄",
			"diamond": "⋄",
			"Diamond": "⋄",
			"diamondsuit": "♦",
			"diams": "♦",
			"die": "¨",
			"DifferentialD": "ⅆ",
			"digamma": "ϝ",
			"disin": "⋲",
			"div": "÷",
			"divide": "÷",
			"divideontimes": "⋇",
			"divonx": "⋇",
			"DJcy": "Ђ",
			"djcy": "ђ",
			"dlcorn": "⌞",
			"dlcrop": "⌍",
			"dollar": "$",
			"Dopf": "𝔻",
			"dopf": "𝕕",
			"Dot": "¨",
			"dot": "˙",
			"DotDot": "⃜",
			"doteq": "≐",
			"doteqdot": "≑",
			"DotEqual": "≐",
			"dotminus": "∸",
			"dotplus": "∔",
			"dotsquare": "⊡",
			"doublebarwedge": "⌆",
			"DoubleContourIntegral": "∯",
			"DoubleDot": "¨",
			"DoubleDownArrow": "⇓",
			"DoubleLeftArrow": "⇐",
			"DoubleLeftRightArrow": "⇔",
			"DoubleLeftTee": "⫤",
			"DoubleLongLeftArrow": "⟸",
			"DoubleLongLeftRightArrow": "⟺",
			"DoubleLongRightArrow": "⟹",
			"DoubleRightArrow": "⇒",
			"DoubleRightTee": "⊨",
			"DoubleUpArrow": "⇑",
			"DoubleUpDownArrow": "⇕",
			"DoubleVerticalBar": "∥",
			"DownArrowBar": "⤓",
			"downarrow": "↓",
			"DownArrow": "↓",
			"Downarrow": "⇓",
			"DownArrowUpArrow": "⇵",
			"DownBreve": "̑",
			"downdownarrows": "⇊",
			"downharpoonleft": "⇃",
			"downharpoonright": "⇂",
			"DownLeftRightVector": "⥐",
			"DownLeftTeeVector": "⥞",
			"DownLeftVectorBar": "⥖",
			"DownLeftVector": "↽",
			"DownRightTeeVector": "⥟",
			"DownRightVectorBar": "⥗",
			"DownRightVector": "⇁",
			"DownTeeArrow": "↧",
			"DownTee": "⊤",
			"drbkarow": "⤐",
			"drcorn": "⌟",
			"drcrop": "⌌",
			"Dscr": "𝒟",
			"dscr": "𝒹",
			"DScy": "Ѕ",
			"dscy": "ѕ",
			"dsol": "⧶",
			"Dstrok": "Đ",
			"dstrok": "đ",
			"dtdot": "⋱",
			"dtri": "▿",
			"dtrif": "▾",
			"duarr": "⇵",
			"duhar": "⥯",
			"dwangle": "⦦",
			"DZcy": "Џ",
			"dzcy": "џ",
			"dzigrarr": "⟿",
			"Eacute": "É",
			"eacute": "é",
			"easter": "⩮",
			"Ecaron": "Ě",
			"ecaron": "ě",
			"Ecirc": "Ê",
			"ecirc": "ê",
			"ecir": "≖",
			"ecolon": "≕",
			"Ecy": "Э",
			"ecy": "э",
			"eDDot": "⩷",
			"Edot": "Ė",
			"edot": "ė",
			"eDot": "≑",
			"ee": "ⅇ",
			"efDot": "≒",
			"Efr": "𝔈",
			"efr": "𝔢",
			"eg": "⪚",
			"Egrave": "È",
			"egrave": "è",
			"egs": "⪖",
			"egsdot": "⪘",
			"el": "⪙",
			"Element": "∈",
			"elinters": "⏧",
			"ell": "ℓ",
			"els": "⪕",
			"elsdot": "⪗",
			"Emacr": "Ē",
			"emacr": "ē",
			"empty": "∅",
			"emptyset": "∅",
			"EmptySmallSquare": "◻",
			"emptyv": "∅",
			"EmptyVerySmallSquare": "▫",
			"emsp13": " ",
			"emsp14": " ",
			"emsp": " ",
			"ENG": "Ŋ",
			"eng": "ŋ",
			"ensp": " ",
			"Eogon": "Ę",
			"eogon": "ę",
			"Eopf": "𝔼",
			"eopf": "𝕖",
			"epar": "⋕",
			"eparsl": "⧣",
			"eplus": "⩱",
			"epsi": "ε",
			"Epsilon": "Ε",
			"epsilon": "ε",
			"epsiv": "ϵ",
			"eqcirc": "≖",
			"eqcolon": "≕",
			"eqsim": "≂",
			"eqslantgtr": "⪖",
			"eqslantless": "⪕",
			"Equal": "⩵",
			"equals": "=",
			"EqualTilde": "≂",
			"equest": "≟",
			"Equilibrium": "⇌",
			"equiv": "≡",
			"equivDD": "⩸",
			"eqvparsl": "⧥",
			"erarr": "⥱",
			"erDot": "≓",
			"escr": "ℯ",
			"Escr": "ℰ",
			"esdot": "≐",
			"Esim": "⩳",
			"esim": "≂",
			"Eta": "Η",
			"eta": "η",
			"ETH": "Ð",
			"eth": "ð",
			"Euml": "Ë",
			"euml": "ë",
			"euro": "€",
			"excl": "!",
			"exist": "∃",
			"Exists": "∃",
			"expectation": "ℰ",
			"exponentiale": "ⅇ",
			"ExponentialE": "ⅇ",
			"fallingdotseq": "≒",
			"Fcy": "Ф",
			"fcy": "ф",
			"female": "♀",
			"ffilig": "ﬃ",
			"fflig": "ﬀ",
			"ffllig": "ﬄ",
			"Ffr": "𝔉",
			"ffr": "𝔣",
			"filig": "ﬁ",
			"FilledSmallSquare": "◼",
			"FilledVerySmallSquare": "▪",
			"fjlig": "fj",
			"flat": "♭",
			"fllig": "ﬂ",
			"fltns": "▱",
			"fnof": "ƒ",
			"Fopf": "𝔽",
			"fopf": "𝕗",
			"forall": "∀",
			"ForAll": "∀",
			"fork": "⋔",
			"forkv": "⫙",
			"Fouriertrf": "ℱ",
			"fpartint": "⨍",
			"frac12": "½",
			"frac13": "⅓",
			"frac14": "¼",
			"frac15": "⅕",
			"frac16": "⅙",
			"frac18": "⅛",
			"frac23": "⅔",
			"frac25": "⅖",
			"frac34": "¾",
			"frac35": "⅗",
			"frac38": "⅜",
			"frac45": "⅘",
			"frac56": "⅚",
			"frac58": "⅝",
			"frac78": "⅞",
			"frasl": "⁄",
			"frown": "⌢",
			"fscr": "𝒻",
			"Fscr": "ℱ",
			"gacute": "ǵ",
			"Gamma": "Γ",
			"gamma": "γ",
			"Gammad": "Ϝ",
			"gammad": "ϝ",
			"gap": "⪆",
			"Gbreve": "Ğ",
			"gbreve": "ğ",
			"Gcedil": "Ģ",
			"Gcirc": "Ĝ",
			"gcirc": "ĝ",
			"Gcy": "Г",
			"gcy": "г",
			"Gdot": "Ġ",
			"gdot": "ġ",
			"ge": "≥",
			"gE": "≧",
			"gEl": "⪌",
			"gel": "⋛",
			"geq": "≥",
			"geqq": "≧",
			"geqslant": "⩾",
			"gescc": "⪩",
			"ges": "⩾",
			"gesdot": "⪀",
			"gesdoto": "⪂",
			"gesdotol": "⪄",
			"gesl": "⋛︀",
			"gesles": "⪔",
			"Gfr": "𝔊",
			"gfr": "𝔤",
			"gg": "≫",
			"Gg": "⋙",
			"ggg": "⋙",
			"gimel": "ℷ",
			"GJcy": "Ѓ",
			"gjcy": "ѓ",
			"gla": "⪥",
			"gl": "≷",
			"glE": "⪒",
			"glj": "⪤",
			"gnap": "⪊",
			"gnapprox": "⪊",
			"gne": "⪈",
			"gnE": "≩",
			"gneq": "⪈",
			"gneqq": "≩",
			"gnsim": "⋧",
			"Gopf": "𝔾",
			"gopf": "𝕘",
			"grave": "`",
			"GreaterEqual": "≥",
			"GreaterEqualLess": "⋛",
			"GreaterFullEqual": "≧",
			"GreaterGreater": "⪢",
			"GreaterLess": "≷",
			"GreaterSlantEqual": "⩾",
			"GreaterTilde": "≳",
			"Gscr": "𝒢",
			"gscr": "ℊ",
			"gsim": "≳",
			"gsime": "⪎",
			"gsiml": "⪐",
			"gtcc": "⪧",
			"gtcir": "⩺",
			"gt": ">",
			"GT": ">",
			"Gt": "≫",
			"gtdot": "⋗",
			"gtlPar": "⦕",
			"gtquest": "⩼",
			"gtrapprox": "⪆",
			"gtrarr": "⥸",
			"gtrdot": "⋗",
			"gtreqless": "⋛",
			"gtreqqless": "⪌",
			"gtrless": "≷",
			"gtrsim": "≳",
			"gvertneqq": "≩︀",
			"gvnE": "≩︀",
			"Hacek": "ˇ",
			"hairsp": " ",
			"half": "½",
			"hamilt": "ℋ",
			"HARDcy": "Ъ",
			"hardcy": "ъ",
			"harrcir": "⥈",
			"harr": "↔",
			"hArr": "⇔",
			"harrw": "↭",
			"Hat": "^",
			"hbar": "ℏ",
			"Hcirc": "Ĥ",
			"hcirc": "ĥ",
			"hearts": "♥",
			"heartsuit": "♥",
			"hellip": "…",
			"hercon": "⊹",
			"hfr": "𝔥",
			"Hfr": "ℌ",
			"HilbertSpace": "ℋ",
			"hksearow": "⤥",
			"hkswarow": "⤦",
			"hoarr": "⇿",
			"homtht": "∻",
			"hookleftarrow": "↩",
			"hookrightarrow": "↪",
			"hopf": "𝕙",
			"Hopf": "ℍ",
			"horbar": "―",
			"HorizontalLine": "─",
			"hscr": "𝒽",
			"Hscr": "ℋ",
			"hslash": "ℏ",
			"Hstrok": "Ħ",
			"hstrok": "ħ",
			"HumpDownHump": "≎",
			"HumpEqual": "≏",
			"hybull": "⁃",
			"hyphen": "‐",
			"Iacute": "Í",
			"iacute": "í",
			"ic": "⁣",
			"Icirc": "Î",
			"icirc": "î",
			"Icy": "И",
			"icy": "и",
			"Idot": "İ",
			"IEcy": "Е",
			"iecy": "е",
			"iexcl": "¡",
			"iff": "⇔",
			"ifr": "𝔦",
			"Ifr": "ℑ",
			"Igrave": "Ì",
			"igrave": "ì",
			"ii": "ⅈ",
			"iiiint": "⨌",
			"iiint": "∭",
			"iinfin": "⧜",
			"iiota": "℩",
			"IJlig": "Ĳ",
			"ijlig": "ĳ",
			"Imacr": "Ī",
			"imacr": "ī",
			"image": "ℑ",
			"ImaginaryI": "ⅈ",
			"imagline": "ℐ",
			"imagpart": "ℑ",
			"imath": "ı",
			"Im": "ℑ",
			"imof": "⊷",
			"imped": "Ƶ",
			"Implies": "⇒",
			"incare": "℅",
			"in": "∈",
			"infin": "∞",
			"infintie": "⧝",
			"inodot": "ı",
			"intcal": "⊺",
			"int": "∫",
			"Int": "∬",
			"integers": "ℤ",
			"Integral": "∫",
			"intercal": "⊺",
			"Intersection": "⋂",
			"intlarhk": "⨗",
			"intprod": "⨼",
			"InvisibleComma": "⁣",
			"InvisibleTimes": "⁢",
			"IOcy": "Ё",
			"iocy": "ё",
			"Iogon": "Į",
			"iogon": "į",
			"Iopf": "𝕀",
			"iopf": "𝕚",
			"Iota": "Ι",
			"iota": "ι",
			"iprod": "⨼",
			"iquest": "¿",
			"iscr": "𝒾",
			"Iscr": "ℐ",
			"isin": "∈",
			"isindot": "⋵",
			"isinE": "⋹",
			"isins": "⋴",
			"isinsv": "⋳",
			"isinv": "∈",
			"it": "⁢",
			"Itilde": "Ĩ",
			"itilde": "ĩ",
			"Iukcy": "І",
			"iukcy": "і",
			"Iuml": "Ï",
			"iuml": "ï",
			"Jcirc": "Ĵ",
			"jcirc": "ĵ",
			"Jcy": "Й",
			"jcy": "й",
			"Jfr": "𝔍",
			"jfr": "𝔧",
			"jmath": "ȷ",
			"Jopf": "𝕁",
			"jopf": "𝕛",
			"Jscr": "𝒥",
			"jscr": "𝒿",
			"Jsercy": "Ј",
			"jsercy": "ј",
			"Jukcy": "Є",
			"jukcy": "є",
			"Kappa": "Κ",
			"kappa": "κ",
			"kappav": "ϰ",
			"Kcedil": "Ķ",
			"kcedil": "ķ",
			"Kcy": "К",
			"kcy": "к",
			"Kfr": "𝔎",
			"kfr": "𝔨",
			"kgreen": "ĸ",
			"KHcy": "Х",
			"khcy": "х",
			"KJcy": "Ќ",
			"kjcy": "ќ",
			"Kopf": "𝕂",
			"kopf": "𝕜",
			"Kscr": "𝒦",
			"kscr": "𝓀",
			"lAarr": "⇚",
			"Lacute": "Ĺ",
			"lacute": "ĺ",
			"laemptyv": "⦴",
			"lagran": "ℒ",
			"Lambda": "Λ",
			"lambda": "λ",
			"lang": "⟨",
			"Lang": "⟪",
			"langd": "⦑",
			"langle": "⟨",
			"lap": "⪅",
			"Laplacetrf": "ℒ",
			"laquo": "«",
			"larrb": "⇤",
			"larrbfs": "⤟",
			"larr": "←",
			"Larr": "↞",
			"lArr": "⇐",
			"larrfs": "⤝",
			"larrhk": "↩",
			"larrlp": "↫",
			"larrpl": "⤹",
			"larrsim": "⥳",
			"larrtl": "↢",
			"latail": "⤙",
			"lAtail": "⤛",
			"lat": "⪫",
			"late": "⪭",
			"lates": "⪭︀",
			"lbarr": "⤌",
			"lBarr": "⤎",
			"lbbrk": "❲",
			"lbrace": "{",
			"lbrack": "[",
			"lbrke": "⦋",
			"lbrksld": "⦏",
			"lbrkslu": "⦍",
			"Lcaron": "Ľ",
			"lcaron": "ľ",
			"Lcedil": "Ļ",
			"lcedil": "ļ",
			"lceil": "⌈",
			"lcub": "{",
			"Lcy": "Л",
			"lcy": "л",
			"ldca": "⤶",
			"ldquo": "“",
			"ldquor": "„",
			"ldrdhar": "⥧",
			"ldrushar": "⥋",
			"ldsh": "↲",
			"le": "≤",
			"lE": "≦",
			"LeftAngleBracket": "⟨",
			"LeftArrowBar": "⇤",
			"leftarrow": "←",
			"LeftArrow": "←",
			"Leftarrow": "⇐",
			"LeftArrowRightArrow": "⇆",
			"leftarrowtail": "↢",
			"LeftCeiling": "⌈",
			"LeftDoubleBracket": "⟦",
			"LeftDownTeeVector": "⥡",
			"LeftDownVectorBar": "⥙",
			"LeftDownVector": "⇃",
			"LeftFloor": "⌊",
			"leftharpoondown": "↽",
			"leftharpoonup": "↼",
			"leftleftarrows": "⇇",
			"leftrightarrow": "↔",
			"LeftRightArrow": "↔",
			"Leftrightarrow": "⇔",
			"leftrightarrows": "⇆",
			"leftrightharpoons": "⇋",
			"leftrightsquigarrow": "↭",
			"LeftRightVector": "⥎",
			"LeftTeeArrow": "↤",
			"LeftTee": "⊣",
			"LeftTeeVector": "⥚",
			"leftthreetimes": "⋋",
			"LeftTriangleBar": "⧏",
			"LeftTriangle": "⊲",
			"LeftTriangleEqual": "⊴",
			"LeftUpDownVector": "⥑",
			"LeftUpTeeVector": "⥠",
			"LeftUpVectorBar": "⥘",
			"LeftUpVector": "↿",
			"LeftVectorBar": "⥒",
			"LeftVector": "↼",
			"lEg": "⪋",
			"leg": "⋚",
			"leq": "≤",
			"leqq": "≦",
			"leqslant": "⩽",
			"lescc": "⪨",
			"les": "⩽",
			"lesdot": "⩿",
			"lesdoto": "⪁",
			"lesdotor": "⪃",
			"lesg": "⋚︀",
			"lesges": "⪓",
			"lessapprox": "⪅",
			"lessdot": "⋖",
			"lesseqgtr": "⋚",
			"lesseqqgtr": "⪋",
			"LessEqualGreater": "⋚",
			"LessFullEqual": "≦",
			"LessGreater": "≶",
			"lessgtr": "≶",
			"LessLess": "⪡",
			"lesssim": "≲",
			"LessSlantEqual": "⩽",
			"LessTilde": "≲",
			"lfisht": "⥼",
			"lfloor": "⌊",
			"Lfr": "𝔏",
			"lfr": "𝔩",
			"lg": "≶",
			"lgE": "⪑",
			"lHar": "⥢",
			"lhard": "↽",
			"lharu": "↼",
			"lharul": "⥪",
			"lhblk": "▄",
			"LJcy": "Љ",
			"ljcy": "љ",
			"llarr": "⇇",
			"ll": "≪",
			"Ll": "⋘",
			"llcorner": "⌞",
			"Lleftarrow": "⇚",
			"llhard": "⥫",
			"lltri": "◺",
			"Lmidot": "Ŀ",
			"lmidot": "ŀ",
			"lmoustache": "⎰",
			"lmoust": "⎰",
			"lnap": "⪉",
			"lnapprox": "⪉",
			"lne": "⪇",
			"lnE": "≨",
			"lneq": "⪇",
			"lneqq": "≨",
			"lnsim": "⋦",
			"loang": "⟬",
			"loarr": "⇽",
			"lobrk": "⟦",
			"longleftarrow": "⟵",
			"LongLeftArrow": "⟵",
			"Longleftarrow": "⟸",
			"longleftrightarrow": "⟷",
			"LongLeftRightArrow": "⟷",
			"Longleftrightarrow": "⟺",
			"longmapsto": "⟼",
			"longrightarrow": "⟶",
			"LongRightArrow": "⟶",
			"Longrightarrow": "⟹",
			"looparrowleft": "↫",
			"looparrowright": "↬",
			"lopar": "⦅",
			"Lopf": "𝕃",
			"lopf": "𝕝",
			"loplus": "⨭",
			"lotimes": "⨴",
			"lowast": "∗",
			"lowbar": "_",
			"LowerLeftArrow": "↙",
			"LowerRightArrow": "↘",
			"loz": "◊",
			"lozenge": "◊",
			"lozf": "⧫",
			"lpar": "(",
			"lparlt": "⦓",
			"lrarr": "⇆",
			"lrcorner": "⌟",
			"lrhar": "⇋",
			"lrhard": "⥭",
			"lrm": "‎",
			"lrtri": "⊿",
			"lsaquo": "‹",
			"lscr": "𝓁",
			"Lscr": "ℒ",
			"lsh": "↰",
			"Lsh": "↰",
			"lsim": "≲",
			"lsime": "⪍",
			"lsimg": "⪏",
			"lsqb": "[",
			"lsquo": "‘",
			"lsquor": "‚",
			"Lstrok": "Ł",
			"lstrok": "ł",
			"ltcc": "⪦",
			"ltcir": "⩹",
			"lt": "<",
			"LT": "<",
			"Lt": "≪",
			"ltdot": "⋖",
			"lthree": "⋋",
			"ltimes": "⋉",
			"ltlarr": "⥶",
			"ltquest": "⩻",
			"ltri": "◃",
			"ltrie": "⊴",
			"ltrif": "◂",
			"ltrPar": "⦖",
			"lurdshar": "⥊",
			"luruhar": "⥦",
			"lvertneqq": "≨︀",
			"lvnE": "≨︀",
			"macr": "¯",
			"male": "♂",
			"malt": "✠",
			"maltese": "✠",
			"Map": "⤅",
			"map": "↦",
			"mapsto": "↦",
			"mapstodown": "↧",
			"mapstoleft": "↤",
			"mapstoup": "↥",
			"marker": "▮",
			"mcomma": "⨩",
			"Mcy": "М",
			"mcy": "м",
			"mdash": "—",
			"mDDot": "∺",
			"measuredangle": "∡",
			"MediumSpace": " ",
			"Mellintrf": "ℳ",
			"Mfr": "𝔐",
			"mfr": "𝔪",
			"mho": "℧",
			"micro": "µ",
			"midast": "*",
			"midcir": "⫰",
			"mid": "∣",
			"middot": "·",
			"minusb": "⊟",
			"minus": "−",
			"minusd": "∸",
			"minusdu": "⨪",
			"MinusPlus": "∓",
			"mlcp": "⫛",
			"mldr": "…",
			"mnplus": "∓",
			"models": "⊧",
			"Mopf": "𝕄",
			"mopf": "𝕞",
			"mp": "∓",
			"mscr": "𝓂",
			"Mscr": "ℳ",
			"mstpos": "∾",
			"Mu": "Μ",
			"mu": "μ",
			"multimap": "⊸",
			"mumap": "⊸",
			"nabla": "∇",
			"Nacute": "Ń",
			"nacute": "ń",
			"nang": "∠⃒",
			"nap": "≉",
			"napE": "⩰̸",
			"napid": "≋̸",
			"napos": "ŉ",
			"napprox": "≉",
			"natural": "♮",
			"naturals": "ℕ",
			"natur": "♮",
			"nbsp": " ",
			"nbump": "≎̸",
			"nbumpe": "≏̸",
			"ncap": "⩃",
			"Ncaron": "Ň",
			"ncaron": "ň",
			"Ncedil": "Ņ",
			"ncedil": "ņ",
			"ncong": "≇",
			"ncongdot": "⩭̸",
			"ncup": "⩂",
			"Ncy": "Н",
			"ncy": "н",
			"ndash": "–",
			"nearhk": "⤤",
			"nearr": "↗",
			"neArr": "⇗",
			"nearrow": "↗",
			"ne": "≠",
			"nedot": "≐̸",
			"NegativeMediumSpace": "​",
			"NegativeThickSpace": "​",
			"NegativeThinSpace": "​",
			"NegativeVeryThinSpace": "​",
			"nequiv": "≢",
			"nesear": "⤨",
			"nesim": "≂̸",
			"NestedGreaterGreater": "≫",
			"NestedLessLess": "≪",
			"NewLine": "\n",
			"nexist": "∄",
			"nexists": "∄",
			"Nfr": "𝔑",
			"nfr": "𝔫",
			"ngE": "≧̸",
			"nge": "≱",
			"ngeq": "≱",
			"ngeqq": "≧̸",
			"ngeqslant": "⩾̸",
			"nges": "⩾̸",
			"nGg": "⋙̸",
			"ngsim": "≵",
			"nGt": "≫⃒",
			"ngt": "≯",
			"ngtr": "≯",
			"nGtv": "≫̸",
			"nharr": "↮",
			"nhArr": "⇎",
			"nhpar": "⫲",
			"ni": "∋",
			"nis": "⋼",
			"nisd": "⋺",
			"niv": "∋",
			"NJcy": "Њ",
			"njcy": "њ",
			"nlarr": "↚",
			"nlArr": "⇍",
			"nldr": "‥",
			"nlE": "≦̸",
			"nle": "≰",
			"nleftarrow": "↚",
			"nLeftarrow": "⇍",
			"nleftrightarrow": "↮",
			"nLeftrightarrow": "⇎",
			"nleq": "≰",
			"nleqq": "≦̸",
			"nleqslant": "⩽̸",
			"nles": "⩽̸",
			"nless": "≮",
			"nLl": "⋘̸",
			"nlsim": "≴",
			"nLt": "≪⃒",
			"nlt": "≮",
			"nltri": "⋪",
			"nltrie": "⋬",
			"nLtv": "≪̸",
			"nmid": "∤",
			"NoBreak": "⁠",
			"NonBreakingSpace": " ",
			"nopf": "𝕟",
			"Nopf": "ℕ",
			"Not": "⫬",
			"not": "¬",
			"NotCongruent": "≢",
			"NotCupCap": "≭",
			"NotDoubleVerticalBar": "∦",
			"NotElement": "∉",
			"NotEqual": "≠",
			"NotEqualTilde": "≂̸",
			"NotExists": "∄",
			"NotGreater": "≯",
			"NotGreaterEqual": "≱",
			"NotGreaterFullEqual": "≧̸",
			"NotGreaterGreater": "≫̸",
			"NotGreaterLess": "≹",
			"NotGreaterSlantEqual": "⩾̸",
			"NotGreaterTilde": "≵",
			"NotHumpDownHump": "≎̸",
			"NotHumpEqual": "≏̸",
			"notin": "∉",
			"notindot": "⋵̸",
			"notinE": "⋹̸",
			"notinva": "∉",
			"notinvb": "⋷",
			"notinvc": "⋶",
			"NotLeftTriangleBar": "⧏̸",
			"NotLeftTriangle": "⋪",
			"NotLeftTriangleEqual": "⋬",
			"NotLess": "≮",
			"NotLessEqual": "≰",
			"NotLessGreater": "≸",
			"NotLessLess": "≪̸",
			"NotLessSlantEqual": "⩽̸",
			"NotLessTilde": "≴",
			"NotNestedGreaterGreater": "⪢̸",
			"NotNestedLessLess": "⪡̸",
			"notni": "∌",
			"notniva": "∌",
			"notnivb": "⋾",
			"notnivc": "⋽",
			"NotPrecedes": "⊀",
			"NotPrecedesEqual": "⪯̸",
			"NotPrecedesSlantEqual": "⋠",
			"NotReverseElement": "∌",
			"NotRightTriangleBar": "⧐̸",
			"NotRightTriangle": "⋫",
			"NotRightTriangleEqual": "⋭",
			"NotSquareSubset": "⊏̸",
			"NotSquareSubsetEqual": "⋢",
			"NotSquareSuperset": "⊐̸",
			"NotSquareSupersetEqual": "⋣",
			"NotSubset": "⊂⃒",
			"NotSubsetEqual": "⊈",
			"NotSucceeds": "⊁",
			"NotSucceedsEqual": "⪰̸",
			"NotSucceedsSlantEqual": "⋡",
			"NotSucceedsTilde": "≿̸",
			"NotSuperset": "⊃⃒",
			"NotSupersetEqual": "⊉",
			"NotTilde": "≁",
			"NotTildeEqual": "≄",
			"NotTildeFullEqual": "≇",
			"NotTildeTilde": "≉",
			"NotVerticalBar": "∤",
			"nparallel": "∦",
			"npar": "∦",
			"nparsl": "⫽⃥",
			"npart": "∂̸",
			"npolint": "⨔",
			"npr": "⊀",
			"nprcue": "⋠",
			"nprec": "⊀",
			"npreceq": "⪯̸",
			"npre": "⪯̸",
			"nrarrc": "⤳̸",
			"nrarr": "↛",
			"nrArr": "⇏",
			"nrarrw": "↝̸",
			"nrightarrow": "↛",
			"nRightarrow": "⇏",
			"nrtri": "⋫",
			"nrtrie": "⋭",
			"nsc": "⊁",
			"nsccue": "⋡",
			"nsce": "⪰̸",
			"Nscr": "𝒩",
			"nscr": "𝓃",
			"nshortmid": "∤",
			"nshortparallel": "∦",
			"nsim": "≁",
			"nsime": "≄",
			"nsimeq": "≄",
			"nsmid": "∤",
			"nspar": "∦",
			"nsqsube": "⋢",
			"nsqsupe": "⋣",
			"nsub": "⊄",
			"nsubE": "⫅̸",
			"nsube": "⊈",
			"nsubset": "⊂⃒",
			"nsubseteq": "⊈",
			"nsubseteqq": "⫅̸",
			"nsucc": "⊁",
			"nsucceq": "⪰̸",
			"nsup": "⊅",
			"nsupE": "⫆̸",
			"nsupe": "⊉",
			"nsupset": "⊃⃒",
			"nsupseteq": "⊉",
			"nsupseteqq": "⫆̸",
			"ntgl": "≹",
			"Ntilde": "Ñ",
			"ntilde": "ñ",
			"ntlg": "≸",
			"ntriangleleft": "⋪",
			"ntrianglelefteq": "⋬",
			"ntriangleright": "⋫",
			"ntrianglerighteq": "⋭",
			"Nu": "Ν",
			"nu": "ν",
			"num": "#",
			"numero": "№",
			"numsp": " ",
			"nvap": "≍⃒",
			"nvdash": "⊬",
			"nvDash": "⊭",
			"nVdash": "⊮",
			"nVDash": "⊯",
			"nvge": "≥⃒",
			"nvgt": ">⃒",
			"nvHarr": "⤄",
			"nvinfin": "⧞",
			"nvlArr": "⤂",
			"nvle": "≤⃒",
			"nvlt": "<⃒",
			"nvltrie": "⊴⃒",
			"nvrArr": "⤃",
			"nvrtrie": "⊵⃒",
			"nvsim": "∼⃒",
			"nwarhk": "⤣",
			"nwarr": "↖",
			"nwArr": "⇖",
			"nwarrow": "↖",
			"nwnear": "⤧",
			"Oacute": "Ó",
			"oacute": "ó",
			"oast": "⊛",
			"Ocirc": "Ô",
			"ocirc": "ô",
			"ocir": "⊚",
			"Ocy": "О",
			"ocy": "о",
			"odash": "⊝",
			"Odblac": "Ő",
			"odblac": "ő",
			"odiv": "⨸",
			"odot": "⊙",
			"odsold": "⦼",
			"OElig": "Œ",
			"oelig": "œ",
			"ofcir": "⦿",
			"Ofr": "𝔒",
			"ofr": "𝔬",
			"ogon": "˛",
			"Ograve": "Ò",
			"ograve": "ò",
			"ogt": "⧁",
			"ohbar": "⦵",
			"ohm": "Ω",
			"oint": "∮",
			"olarr": "↺",
			"olcir": "⦾",
			"olcross": "⦻",
			"oline": "‾",
			"olt": "⧀",
			"Omacr": "Ō",
			"omacr": "ō",
			"Omega": "Ω",
			"omega": "ω",
			"Omicron": "Ο",
			"omicron": "ο",
			"omid": "⦶",
			"ominus": "⊖",
			"Oopf": "𝕆",
			"oopf": "𝕠",
			"opar": "⦷",
			"OpenCurlyDoubleQuote": "“",
			"OpenCurlyQuote": "‘",
			"operp": "⦹",
			"oplus": "⊕",
			"orarr": "↻",
			"Or": "⩔",
			"or": "∨",
			"ord": "⩝",
			"order": "ℴ",
			"orderof": "ℴ",
			"ordf": "ª",
			"ordm": "º",
			"origof": "⊶",
			"oror": "⩖",
			"orslope": "⩗",
			"orv": "⩛",
			"oS": "Ⓢ",
			"Oscr": "𝒪",
			"oscr": "ℴ",
			"Oslash": "Ø",
			"oslash": "ø",
			"osol": "⊘",
			"Otilde": "Õ",
			"otilde": "õ",
			"otimesas": "⨶",
			"Otimes": "⨷",
			"otimes": "⊗",
			"Ouml": "Ö",
			"ouml": "ö",
			"ovbar": "⌽",
			"OverBar": "‾",
			"OverBrace": "⏞",
			"OverBracket": "⎴",
			"OverParenthesis": "⏜",
			"para": "¶",
			"parallel": "∥",
			"par": "∥",
			"parsim": "⫳",
			"parsl": "⫽",
			"part": "∂",
			"PartialD": "∂",
			"Pcy": "П",
			"pcy": "п",
			"percnt": "%",
			"period": ".",
			"permil": "‰",
			"perp": "⊥",
			"pertenk": "‱",
			"Pfr": "𝔓",
			"pfr": "𝔭",
			"Phi": "Φ",
			"phi": "φ",
			"phiv": "ϕ",
			"phmmat": "ℳ",
			"phone": "☎",
			"Pi": "Π",
			"pi": "π",
			"pitchfork": "⋔",
			"piv": "ϖ",
			"planck": "ℏ",
			"planckh": "ℎ",
			"plankv": "ℏ",
			"plusacir": "⨣",
			"plusb": "⊞",
			"pluscir": "⨢",
			"plus": "+",
			"plusdo": "∔",
			"plusdu": "⨥",
			"pluse": "⩲",
			"PlusMinus": "±",
			"plusmn": "±",
			"plussim": "⨦",
			"plustwo": "⨧",
			"pm": "±",
			"Poincareplane": "ℌ",
			"pointint": "⨕",
			"popf": "𝕡",
			"Popf": "ℙ",
			"pound": "£",
			"prap": "⪷",
			"Pr": "⪻",
			"pr": "≺",
			"prcue": "≼",
			"precapprox": "⪷",
			"prec": "≺",
			"preccurlyeq": "≼",
			"Precedes": "≺",
			"PrecedesEqual": "⪯",
			"PrecedesSlantEqual": "≼",
			"PrecedesTilde": "≾",
			"preceq": "⪯",
			"precnapprox": "⪹",
			"precneqq": "⪵",
			"precnsim": "⋨",
			"pre": "⪯",
			"prE": "⪳",
			"precsim": "≾",
			"prime": "′",
			"Prime": "″",
			"primes": "ℙ",
			"prnap": "⪹",
			"prnE": "⪵",
			"prnsim": "⋨",
			"prod": "∏",
			"Product": "∏",
			"profalar": "⌮",
			"profline": "⌒",
			"profsurf": "⌓",
			"prop": "∝",
			"Proportional": "∝",
			"Proportion": "∷",
			"propto": "∝",
			"prsim": "≾",
			"prurel": "⊰",
			"Pscr": "𝒫",
			"pscr": "𝓅",
			"Psi": "Ψ",
			"psi": "ψ",
			"puncsp": " ",
			"Qfr": "𝔔",
			"qfr": "𝔮",
			"qint": "⨌",
			"qopf": "𝕢",
			"Qopf": "ℚ",
			"qprime": "⁗",
			"Qscr": "𝒬",
			"qscr": "𝓆",
			"quaternions": "ℍ",
			"quatint": "⨖",
			"quest": "?",
			"questeq": "≟",
			"quot": "\"",
			"QUOT": "\"",
			"rAarr": "⇛",
			"race": "∽̱",
			"Racute": "Ŕ",
			"racute": "ŕ",
			"radic": "√",
			"raemptyv": "⦳",
			"rang": "⟩",
			"Rang": "⟫",
			"rangd": "⦒",
			"range": "⦥",
			"rangle": "⟩",
			"raquo": "»",
			"rarrap": "⥵",
			"rarrb": "⇥",
			"rarrbfs": "⤠",
			"rarrc": "⤳",
			"rarr": "→",
			"Rarr": "↠",
			"rArr": "⇒",
			"rarrfs": "⤞",
			"rarrhk": "↪",
			"rarrlp": "↬",
			"rarrpl": "⥅",
			"rarrsim": "⥴",
			"Rarrtl": "⤖",
			"rarrtl": "↣",
			"rarrw": "↝",
			"ratail": "⤚",
			"rAtail": "⤜",
			"ratio": "∶",
			"rationals": "ℚ",
			"rbarr": "⤍",
			"rBarr": "⤏",
			"RBarr": "⤐",
			"rbbrk": "❳",
			"rbrace": "}",
			"rbrack": "]",
			"rbrke": "⦌",
			"rbrksld": "⦎",
			"rbrkslu": "⦐",
			"Rcaron": "Ř",
			"rcaron": "ř",
			"Rcedil": "Ŗ",
			"rcedil": "ŗ",
			"rceil": "⌉",
			"rcub": "}",
			"Rcy": "Р",
			"rcy": "р",
			"rdca": "⤷",
			"rdldhar": "⥩",
			"rdquo": "”",
			"rdquor": "”",
			"rdsh": "↳",
			"real": "ℜ",
			"realine": "ℛ",
			"realpart": "ℜ",
			"reals": "ℝ",
			"Re": "ℜ",
			"rect": "▭",
			"reg": "®",
			"REG": "®",
			"ReverseElement": "∋",
			"ReverseEquilibrium": "⇋",
			"ReverseUpEquilibrium": "⥯",
			"rfisht": "⥽",
			"rfloor": "⌋",
			"rfr": "𝔯",
			"Rfr": "ℜ",
			"rHar": "⥤",
			"rhard": "⇁",
			"rharu": "⇀",
			"rharul": "⥬",
			"Rho": "Ρ",
			"rho": "ρ",
			"rhov": "ϱ",
			"RightAngleBracket": "⟩",
			"RightArrowBar": "⇥",
			"rightarrow": "→",
			"RightArrow": "→",
			"Rightarrow": "⇒",
			"RightArrowLeftArrow": "⇄",
			"rightarrowtail": "↣",
			"RightCeiling": "⌉",
			"RightDoubleBracket": "⟧",
			"RightDownTeeVector": "⥝",
			"RightDownVectorBar": "⥕",
			"RightDownVector": "⇂",
			"RightFloor": "⌋",
			"rightharpoondown": "⇁",
			"rightharpoonup": "⇀",
			"rightleftarrows": "⇄",
			"rightleftharpoons": "⇌",
			"rightrightarrows": "⇉",
			"rightsquigarrow": "↝",
			"RightTeeArrow": "↦",
			"RightTee": "⊢",
			"RightTeeVector": "⥛",
			"rightthreetimes": "⋌",
			"RightTriangleBar": "⧐",
			"RightTriangle": "⊳",
			"RightTriangleEqual": "⊵",
			"RightUpDownVector": "⥏",
			"RightUpTeeVector": "⥜",
			"RightUpVectorBar": "⥔",
			"RightUpVector": "↾",
			"RightVectorBar": "⥓",
			"RightVector": "⇀",
			"ring": "˚",
			"risingdotseq": "≓",
			"rlarr": "⇄",
			"rlhar": "⇌",
			"rlm": "‏",
			"rmoustache": "⎱",
			"rmoust": "⎱",
			"rnmid": "⫮",
			"roang": "⟭",
			"roarr": "⇾",
			"robrk": "⟧",
			"ropar": "⦆",
			"ropf": "𝕣",
			"Ropf": "ℝ",
			"roplus": "⨮",
			"rotimes": "⨵",
			"RoundImplies": "⥰",
			"rpar": ")",
			"rpargt": "⦔",
			"rppolint": "⨒",
			"rrarr": "⇉",
			"Rrightarrow": "⇛",
			"rsaquo": "›",
			"rscr": "𝓇",
			"Rscr": "ℛ",
			"rsh": "↱",
			"Rsh": "↱",
			"rsqb": "]",
			"rsquo": "’",
			"rsquor": "’",
			"rthree": "⋌",
			"rtimes": "⋊",
			"rtri": "▹",
			"rtrie": "⊵",
			"rtrif": "▸",
			"rtriltri": "⧎",
			"RuleDelayed": "⧴",
			"ruluhar": "⥨",
			"rx": "℞",
			"Sacute": "Ś",
			"sacute": "ś",
			"sbquo": "‚",
			"scap": "⪸",
			"Scaron": "Š",
			"scaron": "š",
			"Sc": "⪼",
			"sc": "≻",
			"sccue": "≽",
			"sce": "⪰",
			"scE": "⪴",
			"Scedil": "Ş",
			"scedil": "ş",
			"Scirc": "Ŝ",
			"scirc": "ŝ",
			"scnap": "⪺",
			"scnE": "⪶",
			"scnsim": "⋩",
			"scpolint": "⨓",
			"scsim": "≿",
			"Scy": "С",
			"scy": "с",
			"sdotb": "⊡",
			"sdot": "⋅",
			"sdote": "⩦",
			"searhk": "⤥",
			"searr": "↘",
			"seArr": "⇘",
			"searrow": "↘",
			"sect": "§",
			"semi": ";",
			"seswar": "⤩",
			"setminus": "∖",
			"setmn": "∖",
			"sext": "✶",
			"Sfr": "𝔖",
			"sfr": "𝔰",
			"sfrown": "⌢",
			"sharp": "♯",
			"SHCHcy": "Щ",
			"shchcy": "щ",
			"SHcy": "Ш",
			"shcy": "ш",
			"ShortDownArrow": "↓",
			"ShortLeftArrow": "←",
			"shortmid": "∣",
			"shortparallel": "∥",
			"ShortRightArrow": "→",
			"ShortUpArrow": "↑",
			"shy": "­",
			"Sigma": "Σ",
			"sigma": "σ",
			"sigmaf": "ς",
			"sigmav": "ς",
			"sim": "∼",
			"simdot": "⩪",
			"sime": "≃",
			"simeq": "≃",
			"simg": "⪞",
			"simgE": "⪠",
			"siml": "⪝",
			"simlE": "⪟",
			"simne": "≆",
			"simplus": "⨤",
			"simrarr": "⥲",
			"slarr": "←",
			"SmallCircle": "∘",
			"smallsetminus": "∖",
			"smashp": "⨳",
			"smeparsl": "⧤",
			"smid": "∣",
			"smile": "⌣",
			"smt": "⪪",
			"smte": "⪬",
			"smtes": "⪬︀",
			"SOFTcy": "Ь",
			"softcy": "ь",
			"solbar": "⌿",
			"solb": "⧄",
			"sol": "/",
			"Sopf": "𝕊",
			"sopf": "𝕤",
			"spades": "♠",
			"spadesuit": "♠",
			"spar": "∥",
			"sqcap": "⊓",
			"sqcaps": "⊓︀",
			"sqcup": "⊔",
			"sqcups": "⊔︀",
			"Sqrt": "√",
			"sqsub": "⊏",
			"sqsube": "⊑",
			"sqsubset": "⊏",
			"sqsubseteq": "⊑",
			"sqsup": "⊐",
			"sqsupe": "⊒",
			"sqsupset": "⊐",
			"sqsupseteq": "⊒",
			"square": "□",
			"Square": "□",
			"SquareIntersection": "⊓",
			"SquareSubset": "⊏",
			"SquareSubsetEqual": "⊑",
			"SquareSuperset": "⊐",
			"SquareSupersetEqual": "⊒",
			"SquareUnion": "⊔",
			"squarf": "▪",
			"squ": "□",
			"squf": "▪",
			"srarr": "→",
			"Sscr": "𝒮",
			"sscr": "𝓈",
			"ssetmn": "∖",
			"ssmile": "⌣",
			"sstarf": "⋆",
			"Star": "⋆",
			"star": "☆",
			"starf": "★",
			"straightepsilon": "ϵ",
			"straightphi": "ϕ",
			"strns": "¯",
			"sub": "⊂",
			"Sub": "⋐",
			"subdot": "⪽",
			"subE": "⫅",
			"sube": "⊆",
			"subedot": "⫃",
			"submult": "⫁",
			"subnE": "⫋",
			"subne": "⊊",
			"subplus": "⪿",
			"subrarr": "⥹",
			"subset": "⊂",
			"Subset": "⋐",
			"subseteq": "⊆",
			"subseteqq": "⫅",
			"SubsetEqual": "⊆",
			"subsetneq": "⊊",
			"subsetneqq": "⫋",
			"subsim": "⫇",
			"subsub": "⫕",
			"subsup": "⫓",
			"succapprox": "⪸",
			"succ": "≻",
			"succcurlyeq": "≽",
			"Succeeds": "≻",
			"SucceedsEqual": "⪰",
			"SucceedsSlantEqual": "≽",
			"SucceedsTilde": "≿",
			"succeq": "⪰",
			"succnapprox": "⪺",
			"succneqq": "⪶",
			"succnsim": "⋩",
			"succsim": "≿",
			"SuchThat": "∋",
			"sum": "∑",
			"Sum": "∑",
			"sung": "♪",
			"sup1": "¹",
			"sup2": "²",
			"sup3": "³",
			"sup": "⊃",
			"Sup": "⋑",
			"supdot": "⪾",
			"supdsub": "⫘",
			"supE": "⫆",
			"supe": "⊇",
			"supedot": "⫄",
			"Superset": "⊃",
			"SupersetEqual": "⊇",
			"suphsol": "⟉",
			"suphsub": "⫗",
			"suplarr": "⥻",
			"supmult": "⫂",
			"supnE": "⫌",
			"supne": "⊋",
			"supplus": "⫀",
			"supset": "⊃",
			"Supset": "⋑",
			"supseteq": "⊇",
			"supseteqq": "⫆",
			"supsetneq": "⊋",
			"supsetneqq": "⫌",
			"supsim": "⫈",
			"supsub": "⫔",
			"supsup": "⫖",
			"swarhk": "⤦",
			"swarr": "↙",
			"swArr": "⇙",
			"swarrow": "↙",
			"swnwar": "⤪",
			"szlig": "ß",
			"Tab": "\t",
			"target": "⌖",
			"Tau": "Τ",
			"tau": "τ",
			"tbrk": "⎴",
			"Tcaron": "Ť",
			"tcaron": "ť",
			"Tcedil": "Ţ",
			"tcedil": "ţ",
			"Tcy": "Т",
			"tcy": "т",
			"tdot": "⃛",
			"telrec": "⌕",
			"Tfr": "𝔗",
			"tfr": "𝔱",
			"there4": "∴",
			"therefore": "∴",
			"Therefore": "∴",
			"Theta": "Θ",
			"theta": "θ",
			"thetasym": "ϑ",
			"thetav": "ϑ",
			"thickapprox": "≈",
			"thicksim": "∼",
			"ThickSpace": "  ",
			"ThinSpace": " ",
			"thinsp": " ",
			"thkap": "≈",
			"thksim": "∼",
			"THORN": "Þ",
			"thorn": "þ",
			"tilde": "˜",
			"Tilde": "∼",
			"TildeEqual": "≃",
			"TildeFullEqual": "≅",
			"TildeTilde": "≈",
			"timesbar": "⨱",
			"timesb": "⊠",
			"times": "×",
			"timesd": "⨰",
			"tint": "∭",
			"toea": "⤨",
			"topbot": "⌶",
			"topcir": "⫱",
			"top": "⊤",
			"Topf": "𝕋",
			"topf": "𝕥",
			"topfork": "⫚",
			"tosa": "⤩",
			"tprime": "‴",
			"trade": "™",
			"TRADE": "™",
			"triangle": "▵",
			"triangledown": "▿",
			"triangleleft": "◃",
			"trianglelefteq": "⊴",
			"triangleq": "≜",
			"triangleright": "▹",
			"trianglerighteq": "⊵",
			"tridot": "◬",
			"trie": "≜",
			"triminus": "⨺",
			"TripleDot": "⃛",
			"triplus": "⨹",
			"trisb": "⧍",
			"tritime": "⨻",
			"trpezium": "⏢",
			"Tscr": "𝒯",
			"tscr": "𝓉",
			"TScy": "Ц",
			"tscy": "ц",
			"TSHcy": "Ћ",
			"tshcy": "ћ",
			"Tstrok": "Ŧ",
			"tstrok": "ŧ",
			"twixt": "≬",
			"twoheadleftarrow": "↞",
			"twoheadrightarrow": "↠",
			"Uacute": "Ú",
			"uacute": "ú",
			"uarr": "↑",
			"Uarr": "↟",
			"uArr": "⇑",
			"Uarrocir": "⥉",
			"Ubrcy": "Ў",
			"ubrcy": "ў",
			"Ubreve": "Ŭ",
			"ubreve": "ŭ",
			"Ucirc": "Û",
			"ucirc": "û",
			"Ucy": "У",
			"ucy": "у",
			"udarr": "⇅",
			"Udblac": "Ű",
			"udblac": "ű",
			"udhar": "⥮",
			"ufisht": "⥾",
			"Ufr": "𝔘",
			"ufr": "𝔲",
			"Ugrave": "Ù",
			"ugrave": "ù",
			"uHar": "⥣",
			"uharl": "↿",
			"uharr": "↾",
			"uhblk": "▀",
			"ulcorn": "⌜",
			"ulcorner": "⌜",
			"ulcrop": "⌏",
			"ultri": "◸",
			"Umacr": "Ū",
			"umacr": "ū",
			"uml": "¨",
			"UnderBar": "_",
			"UnderBrace": "⏟",
			"UnderBracket": "⎵",
			"UnderParenthesis": "⏝",
			"Union": "⋃",
			"UnionPlus": "⊎",
			"Uogon": "Ų",
			"uogon": "ų",
			"Uopf": "𝕌",
			"uopf": "𝕦",
			"UpArrowBar": "⤒",
			"uparrow": "↑",
			"UpArrow": "↑",
			"Uparrow": "⇑",
			"UpArrowDownArrow": "⇅",
			"updownarrow": "↕",
			"UpDownArrow": "↕",
			"Updownarrow": "⇕",
			"UpEquilibrium": "⥮",
			"upharpoonleft": "↿",
			"upharpoonright": "↾",
			"uplus": "⊎",
			"UpperLeftArrow": "↖",
			"UpperRightArrow": "↗",
			"upsi": "υ",
			"Upsi": "ϒ",
			"upsih": "ϒ",
			"Upsilon": "Υ",
			"upsilon": "υ",
			"UpTeeArrow": "↥",
			"UpTee": "⊥",
			"upuparrows": "⇈",
			"urcorn": "⌝",
			"urcorner": "⌝",
			"urcrop": "⌎",
			"Uring": "Ů",
			"uring": "ů",
			"urtri": "◹",
			"Uscr": "𝒰",
			"uscr": "𝓊",
			"utdot": "⋰",
			"Utilde": "Ũ",
			"utilde": "ũ",
			"utri": "▵",
			"utrif": "▴",
			"uuarr": "⇈",
			"Uuml": "Ü",
			"uuml": "ü",
			"uwangle": "⦧",
			"vangrt": "⦜",
			"varepsilon": "ϵ",
			"varkappa": "ϰ",
			"varnothing": "∅",
			"varphi": "ϕ",
			"varpi": "ϖ",
			"varpropto": "∝",
			"varr": "↕",
			"vArr": "⇕",
			"varrho": "ϱ",
			"varsigma": "ς",
			"varsubsetneq": "⊊︀",
			"varsubsetneqq": "⫋︀",
			"varsupsetneq": "⊋︀",
			"varsupsetneqq": "⫌︀",
			"vartheta": "ϑ",
			"vartriangleleft": "⊲",
			"vartriangleright": "⊳",
			"vBar": "⫨",
			"Vbar": "⫫",
			"vBarv": "⫩",
			"Vcy": "В",
			"vcy": "в",
			"vdash": "⊢",
			"vDash": "⊨",
			"Vdash": "⊩",
			"VDash": "⊫",
			"Vdashl": "⫦",
			"veebar": "⊻",
			"vee": "∨",
			"Vee": "⋁",
			"veeeq": "≚",
			"vellip": "⋮",
			"verbar": "|",
			"Verbar": "‖",
			"vert": "|",
			"Vert": "‖",
			"VerticalBar": "∣",
			"VerticalLine": "|",
			"VerticalSeparator": "❘",
			"VerticalTilde": "≀",
			"VeryThinSpace": " ",
			"Vfr": "𝔙",
			"vfr": "𝔳",
			"vltri": "⊲",
			"vnsub": "⊂⃒",
			"vnsup": "⊃⃒",
			"Vopf": "𝕍",
			"vopf": "𝕧",
			"vprop": "∝",
			"vrtri": "⊳",
			"Vscr": "𝒱",
			"vscr": "𝓋",
			"vsubnE": "⫋︀",
			"vsubne": "⊊︀",
			"vsupnE": "⫌︀",
			"vsupne": "⊋︀",
			"Vvdash": "⊪",
			"vzigzag": "⦚",
			"Wcirc": "Ŵ",
			"wcirc": "ŵ",
			"wedbar": "⩟",
			"wedge": "∧",
			"Wedge": "⋀",
			"wedgeq": "≙",
			"weierp": "℘",
			"Wfr": "𝔚",
			"wfr": "𝔴",
			"Wopf": "𝕎",
			"wopf": "𝕨",
			"wp": "℘",
			"wr": "≀",
			"wreath": "≀",
			"Wscr": "𝒲",
			"wscr": "𝓌",
			"xcap": "⋂",
			"xcirc": "◯",
			"xcup": "⋃",
			"xdtri": "▽",
			"Xfr": "𝔛",
			"xfr": "𝔵",
			"xharr": "⟷",
			"xhArr": "⟺",
			"Xi": "Ξ",
			"xi": "ξ",
			"xlarr": "⟵",
			"xlArr": "⟸",
			"xmap": "⟼",
			"xnis": "⋻",
			"xodot": "⨀",
			"Xopf": "𝕏",
			"xopf": "𝕩",
			"xoplus": "⨁",
			"xotime": "⨂",
			"xrarr": "⟶",
			"xrArr": "⟹",
			"Xscr": "𝒳",
			"xscr": "𝓍",
			"xsqcup": "⨆",
			"xuplus": "⨄",
			"xutri": "△",
			"xvee": "⋁",
			"xwedge": "⋀",
			"Yacute": "Ý",
			"yacute": "ý",
			"YAcy": "Я",
			"yacy": "я",
			"Ycirc": "Ŷ",
			"ycirc": "ŷ",
			"Ycy": "Ы",
			"ycy": "ы",
			"yen": "¥",
			"Yfr": "𝔜",
			"yfr": "𝔶",
			"YIcy": "Ї",
			"yicy": "ї",
			"Yopf": "𝕐",
			"yopf": "𝕪",
			"Yscr": "𝒴",
			"yscr": "𝓎",
			"YUcy": "Ю",
			"yucy": "ю",
			"yuml": "ÿ",
			"Yuml": "Ÿ",
			"Zacute": "Ź",
			"zacute": "ź",
			"Zcaron": "Ž",
			"zcaron": "ž",
			"Zcy": "З",
			"zcy": "з",
			"Zdot": "Ż",
			"zdot": "ż",
			"zeetrf": "ℨ",
			"ZeroWidthSpace": "​",
			"Zeta": "Ζ",
			"zeta": "ζ",
			"zfr": "𝔷",
			"Zfr": "ℨ",
			"ZHcy": "Ж",
			"zhcy": "ж",
			"zigrarr": "⇝",
			"zopf": "𝕫",
			"Zopf": "ℤ",
			"Zscr": "𝒵",
			"zscr": "𝓏",
			"zwj": "‍",
			"zwnj": "‌"
		};
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		module.exports=/[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDE38-\uDE3D]|\uD805[\uDCC6\uDDC1-\uDDC9\uDE41-\uDE43]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F/
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
	
		module.exports.encode = __webpack_require__(9);
		module.exports.decode = __webpack_require__(10);
		module.exports.format = __webpack_require__(11);
		module.exports.parse  = __webpack_require__(12);
	
	
	/***/ },
	/* 9 */
	/***/ function(module, exports) {
	
		
		'use strict';
	
	
		var encodeCache = {};
	
	
		// Create a lookup array where anything but characters in `chars` string
		// and alphanumeric chars is percent-encoded.
		//
		function getEncodeCache(exclude) {
		  var i, ch, cache = encodeCache[exclude];
		  if (cache) { return cache; }
	
		  cache = encodeCache[exclude] = [];
	
		  for (i = 0; i < 128; i++) {
		    ch = String.fromCharCode(i);
	
		    if (/^[0-9a-z]$/i.test(ch)) {
		      // always allow unencoded alphanumeric characters
		      cache.push(ch);
		    } else {
		      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
		    }
		  }
	
		  for (i = 0; i < exclude.length; i++) {
		    cache[exclude.charCodeAt(i)] = exclude[i];
		  }
	
		  return cache;
		}
	
	
		// Encode unsafe characters with percent-encoding, skipping already
		// encoded sequences.
		//
		//  - string       - string to encode
		//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
		//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
		//
		function encode(string, exclude, keepEscaped) {
		  var i, l, code, nextCode, cache,
		      result = '';
	
		  if (typeof exclude !== 'string') {
		    // encode(string, keepEscaped)
		    keepEscaped  = exclude;
		    exclude = encode.defaultChars;
		  }
	
		  if (typeof keepEscaped === 'undefined') {
		    keepEscaped = true;
		  }
	
		  cache = getEncodeCache(exclude);
	
		  for (i = 0, l = string.length; i < l; i++) {
		    code = string.charCodeAt(i);
	
		    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
		      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
		        result += string.slice(i, i + 3);
		        i += 2;
		        continue;
		      }
		    }
	
		    if (code < 128) {
		      result += cache[code];
		      continue;
		    }
	
		    if (code >= 0xD800 && code <= 0xDFFF) {
		      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
		        nextCode = string.charCodeAt(i + 1);
		        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
		          result += encodeURIComponent(string[i] + string[i + 1]);
		          i++;
		          continue;
		        }
		      }
		      result += '%EF%BF%BD';
		      continue;
		    }
	
		    result += encodeURIComponent(string[i]);
		  }
	
		  return result;
		}
	
		encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
		encode.componentChars = "-_.!~*'()";
	
	
		module.exports = encode;
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
		
		'use strict';
	
	
		/* eslint-disable no-bitwise */
	
		var decodeCache = {};
	
		function getDecodeCache(exclude) {
		  var i, ch, cache = decodeCache[exclude];
		  if (cache) { return cache; }
	
		  cache = decodeCache[exclude] = [];
	
		  for (i = 0; i < 128; i++) {
		    ch = String.fromCharCode(i);
		    cache.push(ch);
		  }
	
		  for (i = 0; i < exclude.length; i++) {
		    ch = exclude.charCodeAt(i);
		    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
		  }
	
		  return cache;
		}
	
	
		// Decode percent-encoded string.
		//
		function decode(string, exclude) {
		  var cache;
	
		  if (typeof exclude !== 'string') {
		    exclude = decode.defaultChars;
		  }
	
		  cache = getDecodeCache(exclude);
	
		  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
		    var i, l, b1, b2, b3, b4, chr,
		        result = '';
	
		    for (i = 0, l = seq.length; i < l; i += 3) {
		      b1 = parseInt(seq.slice(i + 1, i + 3), 16);
	
		      if (b1 < 0x80) {
		        result += cache[b1];
		        continue;
		      }
	
		      if ((b1 & 0xE0) === 0xC0 && (i + 3 < l)) {
		        // 110xxxxx 10xxxxxx
		        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
	
		        if ((b2 & 0xC0) === 0x80) {
		          chr = ((b1 << 6) & 0x7C0) | (b2 & 0x3F);
	
		          if (chr < 0x80) {
		            result += '\ufffd\ufffd';
		          } else {
		            result += String.fromCharCode(chr);
		          }
	
		          i += 3;
		          continue;
		        }
		      }
	
		      if ((b1 & 0xF0) === 0xE0 && (i + 6 < l)) {
		        // 1110xxxx 10xxxxxx 10xxxxxx
		        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
		        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
	
		        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
		          chr = ((b1 << 12) & 0xF000) | ((b2 << 6) & 0xFC0) | (b3 & 0x3F);
	
		          if (chr < 0x800 || (chr >= 0xD800 && chr <= 0xDFFF)) {
		            result += '\ufffd\ufffd\ufffd';
		          } else {
		            result += String.fromCharCode(chr);
		          }
	
		          i += 6;
		          continue;
		        }
		      }
	
		      if ((b1 & 0xF8) === 0xF0 && (i + 9 < l)) {
		        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
		        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
		        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
		        b4 = parseInt(seq.slice(i + 10, i + 12), 16);
	
		        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
		          chr = ((b1 << 18) & 0x1C0000) | ((b2 << 12) & 0x3F000) | ((b3 << 6) & 0xFC0) | (b4 & 0x3F);
	
		          if (chr < 0x10000 || chr > 0x10FFFF) {
		            result += '\ufffd\ufffd\ufffd\ufffd';
		          } else {
		            chr -= 0x10000;
		            result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
		          }
	
		          i += 9;
		          continue;
		        }
		      }
	
		      result += '\ufffd';
		    }
	
		    return result;
		  });
		}
	
	
		decode.defaultChars   = ';/?:@&=+$,#';
		decode.componentChars = '';
	
	
		module.exports = decode;
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports) {
	
		
		'use strict';
	
	
		module.exports = function format(url) {
		  var result = '';
	
		  result += url.protocol || '';
		  result += url.slashes ? '//' : '';
		  result += url.auth ? url.auth + '@' : '';
	
		  if (url.hostname && url.hostname.indexOf(':') !== -1) {
		    // ipv6 address
		    result += '[' + url.hostname + ']';
		  } else {
		    result += url.hostname || '';
		  }
	
		  result += url.port ? ':' + url.port : '';
		  result += url.pathname || '';
		  result += url.search || '';
		  result += url.hash || '';
	
		  return result;
		};
	
	
	/***/ },
	/* 12 */
	/***/ function(module, exports) {
	
		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
		'use strict';
	
		//
		// Changes from joyent/node:
		//
		// 1. No leading slash in paths,
		//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
		//
		// 2. Backslashes are not replaced with slashes,
		//    so `http:\\example.org\` is treated like a relative path
		//
		// 3. Trailing colon is treated like a part of the path,
		//    i.e. in `http://example.org:foo` pathname is `:foo`
		//
		// 4. Nothing is URL-encoded in the resulting object,
		//    (in joyent/node some chars in auth and paths are encoded)
		//
		// 5. `url.parse()` does not have `parseQueryString` argument
		//
		// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
		//    which can be constructed using other parts of the url.
		//
	
	
		function Url() {
		  this.protocol = null;
		  this.slashes = null;
		  this.auth = null;
		  this.port = null;
		  this.hostname = null;
		  this.hash = null;
		  this.search = null;
		  this.pathname = null;
		}
	
		// Reference: RFC 3986, RFC 1808, RFC 2396
	
		// define these here so at least they only have to be
		// compiled once on the first module load.
		var protocolPattern = /^([a-z0-9.+-]+:)/i,
		    portPattern = /:[0-9]*$/,
	
		    // Special case for a simple path URL
		    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
	
		    // RFC 2396: characters reserved for delimiting URLs.
		    // We actually just auto-escape these.
		    delims = [ '<', '>', '"', '`', ' ', '\r', '\n', '\t' ],
	
		    // RFC 2396: characters not allowed for various reasons.
		    unwise = [ '{', '}', '|', '\\', '^', '`' ].concat(delims),
	
		    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
		    autoEscape = [ '\'' ].concat(unwise),
		    // Characters that are never ever allowed in a hostname.
		    // Note that any invalid chars are also handled, but these
		    // are the ones that are *expected* to be seen, so we fast-path
		    // them.
		    nonHostChars = [ '%', '/', '?', ';', '#' ].concat(autoEscape),
		    hostEndingChars = [ '/', '?', '#' ],
		    hostnameMaxLen = 255,
		    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
		    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
		    // protocols that can allow "unsafe" and "unwise" chars.
		    /* eslint-disable no-script-url */
		    // protocols that never have a hostname.
		    hostlessProtocol = {
		      'javascript': true,
		      'javascript:': true
		    },
		    // protocols that always contain a // bit.
		    slashedProtocol = {
		      'http': true,
		      'https': true,
		      'ftp': true,
		      'gopher': true,
		      'file': true,
		      'http:': true,
		      'https:': true,
		      'ftp:': true,
		      'gopher:': true,
		      'file:': true
		    };
		    /* eslint-enable no-script-url */
	
		function urlParse(url, slashesDenoteHost) {
		  if (url && url instanceof Url) { return url; }
	
		  var u = new Url();
		  u.parse(url, slashesDenoteHost);
		  return u;
		}
	
		Url.prototype.parse = function(url, slashesDenoteHost) {
		  var i, l, lowerProto, hec, slashes,
		      rest = url;
	
		  // trim before proceeding.
		  // This is to support parse stuff like "  http://foo.com  \n"
		  rest = rest.trim();
	
		  if (!slashesDenoteHost && url.split('#').length === 1) {
		    // Try fast path regexp
		    var simplePath = simplePathPattern.exec(rest);
		    if (simplePath) {
		      this.pathname = simplePath[1];
		      if (simplePath[2]) {
		        this.search = simplePath[2];
		      }
		      return this;
		    }
		  }
	
		  var proto = protocolPattern.exec(rest);
		  if (proto) {
		    proto = proto[0];
		    lowerProto = proto.toLowerCase();
		    this.protocol = proto;
		    rest = rest.substr(proto.length);
		  }
	
		  // figure out if it's got a host
		  // user@server is *always* interpreted as a hostname, and url
		  // resolution will treat //foo/bar as host=foo,path=bar because that's
		  // how the browser resolves relative URLs.
		  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
		    slashes = rest.substr(0, 2) === '//';
		    if (slashes && !(proto && hostlessProtocol[proto])) {
		      rest = rest.substr(2);
		      this.slashes = true;
		    }
		  }
	
		  if (!hostlessProtocol[proto] &&
		      (slashes || (proto && !slashedProtocol[proto]))) {
	
		    // there's a hostname.
		    // the first instance of /, ?, ;, or # ends the host.
		    //
		    // If there is an @ in the hostname, then non-host chars *are* allowed
		    // to the left of the last @ sign, unless some host-ending character
		    // comes *before* the @-sign.
		    // URLs are obnoxious.
		    //
		    // ex:
		    // http://a@b@c/ => user:a@b host:c
		    // http://a@b?@c => user:a host:c path:/?@c
	
		    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
		    // Review our test case against browsers more comprehensively.
	
		    // find the first instance of any hostEndingChars
		    var hostEnd = -1;
		    for (i = 0; i < hostEndingChars.length; i++) {
		      hec = rest.indexOf(hostEndingChars[i]);
		      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
		        hostEnd = hec;
		      }
		    }
	
		    // at this point, either we have an explicit point where the
		    // auth portion cannot go past, or the last @ char is the decider.
		    var auth, atSign;
		    if (hostEnd === -1) {
		      // atSign can be anywhere.
		      atSign = rest.lastIndexOf('@');
		    } else {
		      // atSign must be in auth portion.
		      // http://a@b/c@d => host:b auth:a path:/c@d
		      atSign = rest.lastIndexOf('@', hostEnd);
		    }
	
		    // Now we have a portion which is definitely the auth.
		    // Pull that off.
		    if (atSign !== -1) {
		      auth = rest.slice(0, atSign);
		      rest = rest.slice(atSign + 1);
		      this.auth = auth;
		    }
	
		    // the host is the remaining to the left of the first non-host char
		    hostEnd = -1;
		    for (i = 0; i < nonHostChars.length; i++) {
		      hec = rest.indexOf(nonHostChars[i]);
		      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
		        hostEnd = hec;
		      }
		    }
		    // if we still have not hit it, then the entire thing is a host.
		    if (hostEnd === -1) {
		      hostEnd = rest.length;
		    }
	
		    if (rest[hostEnd - 1] === ':') { hostEnd--; }
		    var host = rest.slice(0, hostEnd);
		    rest = rest.slice(hostEnd);
	
		    // pull out port.
		    this.parseHost(host);
	
		    // we've indicated that there is a hostname,
		    // so even if it's empty, it has to be present.
		    this.hostname = this.hostname || '';
	
		    // if hostname begins with [ and ends with ]
		    // assume that it's an IPv6 address.
		    var ipv6Hostname = this.hostname[0] === '[' &&
		        this.hostname[this.hostname.length - 1] === ']';
	
		    // validate a little.
		    if (!ipv6Hostname) {
		      var hostparts = this.hostname.split(/\./);
		      for (i = 0, l = hostparts.length; i < l; i++) {
		        var part = hostparts[i];
		        if (!part) { continue; }
		        if (!part.match(hostnamePartPattern)) {
		          var newpart = '';
		          for (var j = 0, k = part.length; j < k; j++) {
		            if (part.charCodeAt(j) > 127) {
		              // we replace non-ASCII char with a temporary placeholder
		              // we need this to make sure size of hostname is not
		              // broken by replacing non-ASCII by nothing
		              newpart += 'x';
		            } else {
		              newpart += part[j];
		            }
		          }
		          // we test again with ASCII char only
		          if (!newpart.match(hostnamePartPattern)) {
		            var validParts = hostparts.slice(0, i);
		            var notHost = hostparts.slice(i + 1);
		            var bit = part.match(hostnamePartStart);
		            if (bit) {
		              validParts.push(bit[1]);
		              notHost.unshift(bit[2]);
		            }
		            if (notHost.length) {
		              rest = notHost.join('.') + rest;
		            }
		            this.hostname = validParts.join('.');
		            break;
		          }
		        }
		      }
		    }
	
		    if (this.hostname.length > hostnameMaxLen) {
		      this.hostname = '';
		    }
	
		    // strip [ and ] from the hostname
		    // the host field still retains them, though
		    if (ipv6Hostname) {
		      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
		    }
		  }
	
		  // chop off from the tail first.
		  var hash = rest.indexOf('#');
		  if (hash !== -1) {
		    // got a fragment string.
		    this.hash = rest.substr(hash);
		    rest = rest.slice(0, hash);
		  }
		  var qm = rest.indexOf('?');
		  if (qm !== -1) {
		    this.search = rest.substr(qm);
		    rest = rest.slice(0, qm);
		  }
		  if (rest) { this.pathname = rest; }
		  if (slashedProtocol[lowerProto] &&
		      this.hostname && !this.pathname) {
		    this.pathname = '';
		  }
	
		  return this;
		};
	
		Url.prototype.parseHost = function(host) {
		  var port = portPattern.exec(host);
		  if (port) {
		    port = port[0];
		    if (port !== ':') {
		      this.port = port.substr(1);
		    }
		    host = host.substr(0, host.length - port.length);
		  }
		  if (host) { this.hostname = host; }
		};
	
		module.exports = urlParse;
	
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		module.exports.Any = __webpack_require__(14);
		module.exports.Cc  = __webpack_require__(15);
		module.exports.Cf  = __webpack_require__(16);
		module.exports.P   = __webpack_require__(7);
		module.exports.Z   = __webpack_require__(17);
	
	
	/***/ },
	/* 14 */
	/***/ function(module, exports) {
	
		module.exports=/[\0-\uD7FF\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF]/
	
	/***/ },
	/* 15 */
	/***/ function(module, exports) {
	
		module.exports=/[\0-\x1F\x7F-\x9F]/
	
	/***/ },
	/* 16 */
	/***/ function(module, exports) {
	
		module.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
	
	/***/ },
	/* 17 */
	/***/ function(module, exports) {
	
		module.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Just a shortcut for bulk export
		'use strict';
	
	
		exports.parseLinkLabel       = __webpack_require__(19);
		exports.parseLinkDestination = __webpack_require__(20);
		exports.parseLinkTitle       = __webpack_require__(21);
	
	
	/***/ },
	/* 19 */
	/***/ function(module, exports) {
	
		// Parse link label
		//
		// this function assumes that first character ("[") already matches;
		// returns the end of the label
		//
		'use strict';
	
		module.exports = function parseLinkLabel(state, start, disableNested) {
		  var level, found, marker, prevPos,
		      labelEnd = -1,
		      max = state.posMax,
		      oldPos = state.pos;
	
		  state.pos = start + 1;
		  level = 1;
	
		  while (state.pos < max) {
		    marker = state.src.charCodeAt(state.pos);
		    if (marker === 0x5D /* ] */) {
		      level--;
		      if (level === 0) {
		        found = true;
		        break;
		      }
		    }
	
		    prevPos = state.pos;
		    state.md.inline.skipToken(state);
		    if (marker === 0x5B /* [ */) {
		      if (prevPos === state.pos - 1) {
		        // increase level if we find text `[`, which is not a part of any token
		        level++;
		      } else if (disableNested) {
		        state.pos = oldPos;
		        return -1;
		      }
		    }
		  }
	
		  if (found) {
		    labelEnd = state.pos;
		  }
	
		  // restore old state
		  state.pos = oldPos;
	
		  return labelEnd;
		};
	
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Parse link destination
		//
		'use strict';
	
	
		var unescapeAll   = __webpack_require__(4).unescapeAll;
	
	
		module.exports = function parseLinkDestination(str, pos, max) {
		  var code, level,
		      lines = 0,
		      start = pos,
		      result = {
		        ok: false,
		        pos: 0,
		        lines: 0,
		        str: ''
		      };
	
		  if (str.charCodeAt(pos) === 0x3C /* < */) {
		    pos++;
		    while (pos < max) {
		      code = str.charCodeAt(pos);
		      if (code === 0x0A /* \n */) { return result; }
		      if (code === 0x3E /* > */) {
		        result.pos = pos + 1;
		        result.str = unescapeAll(str.slice(start + 1, pos));
		        result.ok = true;
		        return result;
		      }
		      if (code === 0x5C /* \ */ && pos + 1 < max) {
		        pos += 2;
		        continue;
		      }
	
		      pos++;
		    }
	
		    // no closing '>'
		    return result;
		  }
	
		  // this should be ... } else { ... branch
	
		  level = 0;
		  while (pos < max) {
		    code = str.charCodeAt(pos);
	
		    if (code === 0x20) { break; }
	
		    // ascii control characters
		    if (code < 0x20 || code === 0x7F) { break; }
	
		    if (code === 0x5C /* \ */ && pos + 1 < max) {
		      pos += 2;
		      continue;
		    }
	
		    if (code === 0x28 /* ( */) {
		      level++;
		      if (level > 1) { break; }
		    }
	
		    if (code === 0x29 /* ) */) {
		      level--;
		      if (level < 0) { break; }
		    }
	
		    pos++;
		  }
	
		  if (start === pos) { return result; }
	
		  result.str = unescapeAll(str.slice(start, pos));
		  result.lines = lines;
		  result.pos = pos;
		  result.ok = true;
		  return result;
		};
	
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Parse link title
		//
		'use strict';
	
	
		var unescapeAll = __webpack_require__(4).unescapeAll;
	
	
		module.exports = function parseLinkTitle(str, pos, max) {
		  var code,
		      marker,
		      lines = 0,
		      start = pos,
		      result = {
		        ok: false,
		        pos: 0,
		        lines: 0,
		        str: ''
		      };
	
		  if (pos >= max) { return result; }
	
		  marker = str.charCodeAt(pos);
	
		  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return result; }
	
		  pos++;
	
		  // if opening marker is "(", switch it to closing marker ")"
		  if (marker === 0x28) { marker = 0x29; }
	
		  while (pos < max) {
		    code = str.charCodeAt(pos);
		    if (code === marker) {
		      result.pos = pos + 1;
		      result.lines = lines;
		      result.str = unescapeAll(str.slice(start + 1, pos));
		      result.ok = true;
		      return result;
		    } else if (code === 0x0A) {
		      lines++;
		    } else if (code === 0x5C /* \ */ && pos + 1 < max) {
		      pos++;
		      if (str.charCodeAt(pos) === 0x0A) {
		        lines++;
		      }
		    }
	
		    pos++;
		  }
	
		  return result;
		};
	
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		/**
		 * class Renderer
		 *
		 * Generates HTML from parsed token stream. Each instance has independent
		 * copy of rules. Those can be rewritten with ease. Also, you can add new
		 * rules if you create plugin and adds new token types.
		 **/
		'use strict';
	
	
		var assign          = __webpack_require__(4).assign;
		var unescapeAll     = __webpack_require__(4).unescapeAll;
		var escapeHtml      = __webpack_require__(4).escapeHtml;
	
	
		////////////////////////////////////////////////////////////////////////////////
	
		var default_rules = {};
	
	
		default_rules.code_inline = function (tokens, idx /*, options, env */) {
		  return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
		};
	
	
		default_rules.code_block = function (tokens, idx /*, options, env */) {
		  return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>\n';
		};
	
	
		default_rules.fence = function (tokens, idx, options, env, slf) {
		  var token = tokens[idx],
		      info = token.info ? unescapeAll(token.info).trim() : '',
		      langName = '',
		      highlighted;
	
		  if (info) {
		    langName = info.split(/\s+/g)[0];
		    token.attrPush([ 'class', options.langPrefix + langName ]);
		  }
	
		  if (options.highlight) {
		    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
		  } else {
		    highlighted = escapeHtml(token.content);
		  }
	
		  return  '<pre><code' + slf.renderAttrs(token) + '>'
		        + highlighted
		        + '</code></pre>\n';
		};
	
	
		default_rules.image = function (tokens, idx, options, env, slf) {
		  var token = tokens[idx];
	
		  // "alt" attr MUST be set, even if empty. Because it's mandatory and
		  // should be placed on proper position for tests.
		  //
		  // Replace content with actual value
	
		  token.attrs[token.attrIndex('alt')][1] =
		    slf.renderInlineAsText(token.children, options, env);
	
		  return slf.renderToken(tokens, idx, options);
		};
	
	
		default_rules.hardbreak = function (tokens, idx, options /*, env */) {
		  return options.xhtmlOut ? '<br />\n' : '<br>\n';
		};
		default_rules.softbreak = function (tokens, idx, options /*, env */) {
		  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
		};
	
	
		default_rules.text = function (tokens, idx /*, options, env */) {
		  return escapeHtml(tokens[idx].content);
		};
	
	
		default_rules.html_block = function (tokens, idx /*, options, env */) {
		  return tokens[idx].content;
		};
		default_rules.html_inline = function (tokens, idx /*, options, env */) {
		  return tokens[idx].content;
		};
	
	
		/**
		 * new Renderer()
		 *
		 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
		 **/
		function Renderer() {
	
		  /**
		   * Renderer#rules -> Object
		   *
		   * Contains render rules for tokens. Can be updated and extended.
		   *
		   * ##### Example
		   *
		   * ```javascript
		   * var md = require('markdown-it')();
		   *
		   * md.renderer.rules.strong_open  = function () { return '<b>'; };
		   * md.renderer.rules.strong_close = function () { return '</b>'; };
		   *
		   * var result = md.renderInline(...);
		   * ```
		   *
		   * Each rule is called as independed static function with fixed signature:
		   *
		   * ```javascript
		   * function my_token_render(tokens, idx, options, env, renderer) {
		   *   // ...
		   *   return renderedHTML;
		   * }
		   * ```
		   *
		   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
		   * for more details and examples.
		   **/
		  this.rules = assign({}, default_rules);
		}
	
	
		/**
		 * Renderer.renderAttrs(token) -> String
		 *
		 * Render token attributes to string.
		 **/
		Renderer.prototype.renderAttrs = function renderAttrs(token) {
		  var i, l, result;
	
		  if (!token.attrs) { return ''; }
	
		  result = '';
	
		  for (i = 0, l = token.attrs.length; i < l; i++) {
		    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
		  }
	
		  return result;
		};
	
	
		/**
		 * Renderer.renderToken(tokens, idx, options) -> String
		 * - tokens (Array): list of tokens
		 * - idx (Numbed): token index to render
		 * - options (Object): params of parser instance
		 *
		 * Default token renderer. Can be overriden by custom function
		 * in [[Renderer#rules]].
		 **/
		Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
		  var nextToken,
		      result = '',
		      needLf = false,
		      token = tokens[idx];
	
		  // Tight list paragraphs
		  if (token.hidden) {
		    return '';
		  }
	
		  // Insert a newline between hidden paragraph and subsequent opening
		  // block-level tag.
		  //
		  // For example, here we should insert a newline before blockquote:
		  //  - a
		  //    >
		  //
		  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
		    result += '\n';
		  }
	
		  // Add token name, e.g. `<img`
		  result += (token.nesting === -1 ? '</' : '<') + token.tag;
	
		  // Encode attributes, e.g. `<img src="foo"`
		  result += this.renderAttrs(token);
	
		  // Add a slash for self-closing tags, e.g. `<img src="foo" /`
		  if (token.nesting === 0 && options.xhtmlOut) {
		    result += ' /';
		  }
	
		  // Check if we need to add a newline after this tag
		  if (token.block) {
		    needLf = true;
	
		    if (token.nesting === 1) {
		      if (idx + 1 < tokens.length) {
		        nextToken = tokens[idx + 1];
	
		        if (nextToken.type === 'inline' || nextToken.hidden) {
		          // Block-level tag containing an inline tag.
		          //
		          needLf = false;
	
		        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
		          // Opening tag + closing tag of the same type. E.g. `<li></li>`.
		          //
		          needLf = false;
		        }
		      }
		    }
		  }
	
		  result += needLf ? '>\n' : '>';
	
		  return result;
		};
	
	
		/**
		 * Renderer.renderInline(tokens, options, env) -> String
		 * - tokens (Array): list on block tokens to renter
		 * - options (Object): params of parser instance
		 * - env (Object): additional data from parsed input (references, for example)
		 *
		 * The same as [[Renderer.render]], but for single token of `inline` type.
		 **/
		Renderer.prototype.renderInline = function (tokens, options, env) {
		  var type,
		      result = '',
		      rules = this.rules;
	
		  for (var i = 0, len = tokens.length; i < len; i++) {
		    type = tokens[i].type;
	
		    if (typeof rules[type] !== 'undefined') {
		      result += rules[type](tokens, i, options, env, this);
		    } else {
		      result += this.renderToken(tokens, i, options);
		    }
		  }
	
		  return result;
		};
	
	
		/** internal
		 * Renderer.renderInlineAsText(tokens, options, env) -> String
		 * - tokens (Array): list on block tokens to renter
		 * - options (Object): params of parser instance
		 * - env (Object): additional data from parsed input (references, for example)
		 *
		 * Special kludge for image `alt` attributes to conform CommonMark spec.
		 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
		 * instead of simple escaping.
		 **/
		Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
		  var result = '',
		      rules = this.rules;
	
		  for (var i = 0, len = tokens.length; i < len; i++) {
		    if (tokens[i].type === 'text') {
		      result += rules.text(tokens, i, options, env, this);
		    } else if (tokens[i].type === 'image') {
		      result += this.renderInlineAsText(tokens[i].children, options, env);
		    }
		  }
	
		  return result;
		};
	
	
		/**
		 * Renderer.render(tokens, options, env) -> String
		 * - tokens (Array): list on block tokens to renter
		 * - options (Object): params of parser instance
		 * - env (Object): additional data from parsed input (references, for example)
		 *
		 * Takes token stream and generates HTML. Probably, you will never need to call
		 * this method directly.
		 **/
		Renderer.prototype.render = function (tokens, options, env) {
		  var i, len, type,
		      result = '',
		      rules = this.rules;
	
		  for (i = 0, len = tokens.length; i < len; i++) {
		    type = tokens[i].type;
	
		    if (type === 'inline') {
		      result += this.renderInline(tokens[i].children, options, env);
		    } else if (typeof rules[type] !== 'undefined') {
		      result += rules[tokens[i].type](tokens, i, options, env, this);
		    } else {
		      result += this.renderToken(tokens, i, options, env);
		    }
		  }
	
		  return result;
		};
	
		module.exports = Renderer;
	
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		/** internal
		 * class Core
		 *
		 * Top-level rules executor. Glues block/inline parsers and does intermediate
		 * transformations.
		 **/
		'use strict';
	
	
		var Ruler  = __webpack_require__(24);
	
	
		var _rules = [
		  [ 'normalize',      __webpack_require__(25)      ],
		  [ 'block',          __webpack_require__(26)          ],
		  [ 'inline',         __webpack_require__(27)         ],
		  [ 'linkify',        __webpack_require__(28)        ],
		  [ 'replacements',   __webpack_require__(29)   ],
		  [ 'smartquotes',    __webpack_require__(30)    ]
		];
	
	
		/**
		 * new Core()
		 **/
		function Core() {
		  /**
		   * Core#ruler -> Ruler
		   *
		   * [[Ruler]] instance. Keep configuration of core rules.
		   **/
		  this.ruler = new Ruler();
	
		  for (var i = 0; i < _rules.length; i++) {
		    this.ruler.push(_rules[i][0], _rules[i][1]);
		  }
		}
	
	
		/**
		 * Core.process(state)
		 *
		 * Executes core chain rules.
		 **/
		Core.prototype.process = function (state) {
		  var i, l, rules;
	
		  rules = this.ruler.getRules('');
	
		  for (i = 0, l = rules.length; i < l; i++) {
		    rules[i](state);
		  }
		};
	
		Core.prototype.State = __webpack_require__(31);
	
	
		module.exports = Core;
	
	
	/***/ },
	/* 24 */
	/***/ function(module, exports) {
	
		/**
		 * class Ruler
		 *
		 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
		 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
		 *
		 * - keep rules in defined order
		 * - assign the name to each rule
		 * - enable/disable rules
		 * - add/replace rules
		 * - allow assign rules to additional named chains (in the same)
		 * - cacheing lists of active rules
		 *
		 * You will not need use this class directly until write plugins. For simple
		 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
		 * [[MarkdownIt.use]].
		 **/
		'use strict';
	
	
		/**
		 * new Ruler()
		 **/
		function Ruler() {
		  // List of added rules. Each element is:
		  //
		  // {
		  //   name: XXX,
		  //   enabled: Boolean,
		  //   fn: Function(),
		  //   alt: [ name2, name3 ]
		  // }
		  //
		  this.__rules__ = [];
	
		  // Cached rule chains.
		  //
		  // First level - chain name, '' for default.
		  // Second level - diginal anchor for fast filtering by charcodes.
		  //
		  this.__cache__ = null;
		}
	
		////////////////////////////////////////////////////////////////////////////////
		// Helper methods, should not be used directly
	
	
		// Find rule index by name
		//
		Ruler.prototype.__find__ = function (name) {
		  for (var i = 0; i < this.__rules__.length; i++) {
		    if (this.__rules__[i].name === name) {
		      return i;
		    }
		  }
		  return -1;
		};
	
	
		// Build rules lookup cache
		//
		Ruler.prototype.__compile__ = function () {
		  var self = this;
		  var chains = [ '' ];
	
		  // collect unique names
		  self.__rules__.forEach(function (rule) {
		    if (!rule.enabled) { return; }
	
		    rule.alt.forEach(function (altName) {
		      if (chains.indexOf(altName) < 0) {
		        chains.push(altName);
		      }
		    });
		  });
	
		  self.__cache__ = {};
	
		  chains.forEach(function (chain) {
		    self.__cache__[chain] = [];
		    self.__rules__.forEach(function (rule) {
		      if (!rule.enabled) { return; }
	
		      if (chain && rule.alt.indexOf(chain) < 0) { return; }
	
		      self.__cache__[chain].push(rule.fn);
		    });
		  });
		};
	
	
		/**
		 * Ruler.at(name, fn [, options])
		 * - name (String): rule name to replace.
		 * - fn (Function): new rule function.
		 * - options (Object): new rule options (not mandatory).
		 *
		 * Replace rule by name with new function & options. Throws error if name not
		 * found.
		 *
		 * ##### Options:
		 *
		 * - __alt__ - array with names of "alternate" chains.
		 *
		 * ##### Example
		 *
		 * Replace existing typorgapher replacement rule with new one:
		 *
		 * ```javascript
		 * var md = require('markdown-it')();
		 *
		 * md.core.ruler.at('replacements', function replace(state) {
		 *   //...
		 * });
		 * ```
		 **/
		Ruler.prototype.at = function (name, fn, options) {
		  var index = this.__find__(name);
		  var opt = options || {};
	
		  if (index === -1) { throw new Error('Parser rule not found: ' + name); }
	
		  this.__rules__[index].fn = fn;
		  this.__rules__[index].alt = opt.alt || [];
		  this.__cache__ = null;
		};
	
	
		/**
		 * Ruler.before(beforeName, ruleName, fn [, options])
		 * - beforeName (String): new rule will be added before this one.
		 * - ruleName (String): name of added rule.
		 * - fn (Function): rule function.
		 * - options (Object): rule options (not mandatory).
		 *
		 * Add new rule to chain before one with given name. See also
		 * [[Ruler.after]], [[Ruler.push]].
		 *
		 * ##### Options:
		 *
		 * - __alt__ - array with names of "alternate" chains.
		 *
		 * ##### Example
		 *
		 * ```javascript
		 * var md = require('markdown-it')();
		 *
		 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
		 *   //...
		 * });
		 * ```
		 **/
		Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
		  var index = this.__find__(beforeName);
		  var opt = options || {};
	
		  if (index === -1) { throw new Error('Parser rule not found: ' + beforeName); }
	
		  this.__rules__.splice(index, 0, {
		    name: ruleName,
		    enabled: true,
		    fn: fn,
		    alt: opt.alt || []
		  });
	
		  this.__cache__ = null;
		};
	
	
		/**
		 * Ruler.after(afterName, ruleName, fn [, options])
		 * - afterName (String): new rule will be added after this one.
		 * - ruleName (String): name of added rule.
		 * - fn (Function): rule function.
		 * - options (Object): rule options (not mandatory).
		 *
		 * Add new rule to chain after one with given name. See also
		 * [[Ruler.before]], [[Ruler.push]].
		 *
		 * ##### Options:
		 *
		 * - __alt__ - array with names of "alternate" chains.
		 *
		 * ##### Example
		 *
		 * ```javascript
		 * var md = require('markdown-it')();
		 *
		 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
		 *   //...
		 * });
		 * ```
		 **/
		Ruler.prototype.after = function (afterName, ruleName, fn, options) {
		  var index = this.__find__(afterName);
		  var opt = options || {};
	
		  if (index === -1) { throw new Error('Parser rule not found: ' + afterName); }
	
		  this.__rules__.splice(index + 1, 0, {
		    name: ruleName,
		    enabled: true,
		    fn: fn,
		    alt: opt.alt || []
		  });
	
		  this.__cache__ = null;
		};
	
		/**
		 * Ruler.push(ruleName, fn [, options])
		 * - ruleName (String): name of added rule.
		 * - fn (Function): rule function.
		 * - options (Object): rule options (not mandatory).
		 *
		 * Push new rule to the end of chain. See also
		 * [[Ruler.before]], [[Ruler.after]].
		 *
		 * ##### Options:
		 *
		 * - __alt__ - array with names of "alternate" chains.
		 *
		 * ##### Example
		 *
		 * ```javascript
		 * var md = require('markdown-it')();
		 *
		 * md.core.ruler.push('my_rule', function replace(state) {
		 *   //...
		 * });
		 * ```
		 **/
		Ruler.prototype.push = function (ruleName, fn, options) {
		  var opt = options || {};
	
		  this.__rules__.push({
		    name: ruleName,
		    enabled: true,
		    fn: fn,
		    alt: opt.alt || []
		  });
	
		  this.__cache__ = null;
		};
	
	
		/**
		 * Ruler.enable(list [, ignoreInvalid]) -> Array
		 * - list (String|Array): list of rule names to enable.
		 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
		 *
		 * Enable rules with given names. If any rule name not found - throw Error.
		 * Errors can be disabled by second param.
		 *
		 * Returns list of found rule names (if no exception happened).
		 *
		 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
		 **/
		Ruler.prototype.enable = function (list, ignoreInvalid) {
		  if (!Array.isArray(list)) { list = [ list ]; }
	
		  var result = [];
	
		  // Search by name and enable
		  list.forEach(function (name) {
		    var idx = this.__find__(name);
	
		    if (idx < 0) {
		      if (ignoreInvalid) { return; }
		      throw new Error('Rules manager: invalid rule name ' + name);
		    }
		    this.__rules__[idx].enabled = true;
		    result.push(name);
		  }, this);
	
		  this.__cache__ = null;
		  return result;
		};
	
	
		/**
		 * Ruler.enableOnly(list [, ignoreInvalid])
		 * - list (String|Array): list of rule names to enable (whitelist).
		 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
		 *
		 * Enable rules with given names, and disable everything else. If any rule name
		 * not found - throw Error. Errors can be disabled by second param.
		 *
		 * See also [[Ruler.disable]], [[Ruler.enable]].
		 **/
		Ruler.prototype.enableOnly = function (list, ignoreInvalid) {
		  if (!Array.isArray(list)) { list = [ list ]; }
	
		  this.__rules__.forEach(function (rule) { rule.enabled = false; });
	
		  this.enable(list, ignoreInvalid);
		};
	
	
		/**
		 * Ruler.disable(list [, ignoreInvalid]) -> Array
		 * - list (String|Array): list of rule names to disable.
		 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
		 *
		 * Disable rules with given names. If any rule name not found - throw Error.
		 * Errors can be disabled by second param.
		 *
		 * Returns list of found rule names (if no exception happened).
		 *
		 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
		 **/
		Ruler.prototype.disable = function (list, ignoreInvalid) {
		  if (!Array.isArray(list)) { list = [ list ]; }
	
		  var result = [];
	
		  // Search by name and disable
		  list.forEach(function (name) {
		    var idx = this.__find__(name);
	
		    if (idx < 0) {
		      if (ignoreInvalid) { return; }
		      throw new Error('Rules manager: invalid rule name ' + name);
		    }
		    this.__rules__[idx].enabled = false;
		    result.push(name);
		  }, this);
	
		  this.__cache__ = null;
		  return result;
		};
	
	
		/**
		 * Ruler.getRules(chainName) -> Array
		 *
		 * Return array of active functions (rules) for given chain name. It analyzes
		 * rules configuration, compiles caches if not exists and returns result.
		 *
		 * Default chain name is `''` (empty string). It can't be skipped. That's
		 * done intentionally, to keep signature monomorphic for high speed.
		 **/
		Ruler.prototype.getRules = function (chainName) {
		  if (this.__cache__ === null) {
		    this.__compile__();
		  }
	
		  // Chain can be empty, if rules disabled. But we still have to return Array.
		  return this.__cache__[chainName] || [];
		};
	
		module.exports = Ruler;
	
	
	/***/ },
	/* 25 */
	/***/ function(module, exports) {
	
		// Normalize input string
	
		'use strict';
	
	
		var NEWLINES_RE  = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
		var NULL_RE      = /\u0000/g;
	
	
		module.exports = function inline(state) {
		  var str;
	
		  // Normalize newlines
		  str = state.src.replace(NEWLINES_RE, '\n');
	
		  // Replace NULL characters
		  str = str.replace(NULL_RE, '\uFFFD');
	
		  state.src = str;
		};
	
	
	/***/ },
	/* 26 */
	/***/ function(module, exports) {
	
		'use strict';
	
	
		module.exports = function block(state) {
		  var token;
	
		  if (state.inlineMode) {
		    token          = new state.Token('inline', '', 0);
		    token.content  = state.src;
		    token.map      = [ 0, 1 ];
		    token.children = [];
		    state.tokens.push(token);
		  } else {
		    state.md.block.parse(state.src, state.md, state.env, state.tokens);
		  }
		};
	
	
	/***/ },
	/* 27 */
	/***/ function(module, exports) {
	
		'use strict';
	
		module.exports = function inline(state) {
		  var tokens = state.tokens, tok, i, l;
	
		  // Parse inlines
		  for (i = 0, l = tokens.length; i < l; i++) {
		    tok = tokens[i];
		    if (tok.type === 'inline') {
		      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
		    }
		  }
		};
	
	
	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Replace link-like texts with link nodes.
		//
		// Currently restricted by `md.validateLink()` to http/https/ftp
		//
		'use strict';
	
	
		var arrayReplaceAt = __webpack_require__(4).arrayReplaceAt;
	
	
		function isLinkOpen(str) {
		  return /^<a[>\s]/i.test(str);
		}
		function isLinkClose(str) {
		  return /^<\/a\s*>/i.test(str);
		}
	
	
		module.exports = function linkify(state) {
		  var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos,
		      level, htmlLinkLevel, url, fullUrl, urlText,
		      blockTokens = state.tokens,
		      links;
	
		  if (!state.md.options.linkify) { return; }
	
		  for (j = 0, l = blockTokens.length; j < l; j++) {
		    if (blockTokens[j].type !== 'inline' ||
		        !state.md.linkify.pretest(blockTokens[j].content)) {
		      continue;
		    }
	
		    tokens = blockTokens[j].children;
	
		    htmlLinkLevel = 0;
	
		    // We scan from the end, to keep position when new tags added.
		    // Use reversed logic in links start/end match
		    for (i = tokens.length - 1; i >= 0; i--) {
		      currentToken = tokens[i];
	
		      // Skip content of markdown links
		      if (currentToken.type === 'link_close') {
		        i--;
		        while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
		          i--;
		        }
		        continue;
		      }
	
		      // Skip content of html tag links
		      if (currentToken.type === 'html_inline') {
		        if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
		          htmlLinkLevel--;
		        }
		        if (isLinkClose(currentToken.content)) {
		          htmlLinkLevel++;
		        }
		      }
		      if (htmlLinkLevel > 0) { continue; }
	
		      if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {
	
		        text = currentToken.content;
		        links = state.md.linkify.match(text);
	
		        // Now split string to nodes
		        nodes = [];
		        level = currentToken.level;
		        lastPos = 0;
	
		        for (ln = 0; ln < links.length; ln++) {
	
		          url = links[ln].url;
		          fullUrl = state.md.normalizeLink(url);
		          if (!state.md.validateLink(fullUrl)) { continue; }
	
		          urlText = links[ln].text;
	
		          // Linkifier might send raw hostnames like "example.com", where url
		          // starts with domain name. So we prepend http:// in those cases,
		          // and remove it afterwards.
		          //
		          if (!links[ln].schema) {
		            urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
		          } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
		            urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
		          } else {
		            urlText = state.md.normalizeLinkText(urlText);
		          }
	
		          pos = links[ln].index;
	
		          if (pos > lastPos) {
		            token         = new state.Token('text', '', 0);
		            token.content = text.slice(lastPos, pos);
		            token.level   = level;
		            nodes.push(token);
		          }
	
		          token         = new state.Token('link_open', 'a', 1);
		          token.attrs   = [ [ 'href', fullUrl ] ];
		          token.level   = level++;
		          token.markup  = 'linkify';
		          token.info    = 'auto';
		          nodes.push(token);
	
		          token         = new state.Token('text', '', 0);
		          token.content = urlText;
		          token.level   = level;
		          nodes.push(token);
	
		          token         = new state.Token('link_close', 'a', -1);
		          token.level   = --level;
		          token.markup  = 'linkify';
		          token.info    = 'auto';
		          nodes.push(token);
	
		          lastPos = links[ln].lastIndex;
		        }
		        if (lastPos < text.length) {
		          token         = new state.Token('text', '', 0);
		          token.content = text.slice(lastPos);
		          token.level   = level;
		          nodes.push(token);
		        }
	
		        // replace current node
		        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
		      }
		    }
		  }
		};
	
	
	/***/ },
	/* 29 */
	/***/ function(module, exports) {
	
		// Simple typographyc replacements
		//
		// (c) (C) → ©
		// (tm) (TM) → ™
		// (r) (R) → ®
		// +- → ±
		// (p) (P) -> §
		// ... → … (also ?.... → ?.., !.... → !..)
		// ???????? → ???, !!!!! → !!!, `,,` → `,`
		// -- → &ndash;, --- → &mdash;
		//
		'use strict';
	
		// TODO:
		// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
		// - miltiplication 2 x 4 -> 2 × 4
	
		var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
	
		// Workaround for phantomjs - need regex without /g flag,
		// or root check will fail every second time
		var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;
	
		var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
		var SCOPED_ABBR = {
		  'c': '©',
		  'r': '®',
		  'p': '§',
		  'tm': '™'
		};
	
		function replaceFn(match, name) {
		  return SCOPED_ABBR[name.toLowerCase()];
		}
	
		function replace_scoped(inlineTokens) {
		  var i, token;
	
		  for (i = inlineTokens.length - 1; i >= 0; i--) {
		    token = inlineTokens[i];
		    if (token.type === 'text') {
		      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
		    }
		  }
		}
	
		function replace_rare(inlineTokens) {
		  var i, token;
	
		  for (i = inlineTokens.length - 1; i >= 0; i--) {
		    token = inlineTokens[i];
		    if (token.type === 'text') {
		      if (RARE_RE.test(token.content)) {
		        token.content = token.content
		                    .replace(/\+-/g, '±')
		                    // .., ..., ....... -> …
		                    // but ?..... & !..... -> ?.. & !..
		                    .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
		                    .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
		                    // em-dash
		                    .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2')
		                    // en-dash
		                    .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2')
		                    .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
		      }
		    }
		  }
		}
	
	
		module.exports = function replace(state) {
		  var blkIdx;
	
		  if (!state.md.options.typographer) { return; }
	
		  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
	
		    if (state.tokens[blkIdx].type !== 'inline') { continue; }
	
		    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
		      replace_scoped(state.tokens[blkIdx].children);
		    }
	
		    if (RARE_RE.test(state.tokens[blkIdx].content)) {
		      replace_rare(state.tokens[blkIdx].children);
		    }
	
		  }
		};
	
	
	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Convert straight quotation marks to typographic ones
		//
		'use strict';
	
	
		var isWhiteSpace   = __webpack_require__(4).isWhiteSpace;
		var isPunctChar    = __webpack_require__(4).isPunctChar;
		var isMdAsciiPunct = __webpack_require__(4).isMdAsciiPunct;
	
		var QUOTE_TEST_RE = /['"]/;
		var QUOTE_RE = /['"]/g;
		var APOSTROPHE = '\u2019'; /* ’ */
	
	
		function replaceAt(str, index, ch) {
		  return str.substr(0, index) + ch + str.substr(index + 1);
		}
	
		function process_inlines(tokens, state) {
		  var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar,
		      isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace,
		      canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
	
		  stack = [];
	
		  for (i = 0; i < tokens.length; i++) {
		    token = tokens[i];
	
		    thisLevel = tokens[i].level;
	
		    for (j = stack.length - 1; j >= 0; j--) {
		      if (stack[j].level <= thisLevel) { break; }
		    }
		    stack.length = j + 1;
	
		    if (token.type !== 'text') { continue; }
	
		    text = token.content;
		    pos = 0;
		    max = text.length;
	
		    /*eslint no-labels:0,block-scoped-var:0*/
		    OUTER:
		    while (pos < max) {
		      QUOTE_RE.lastIndex = pos;
		      t = QUOTE_RE.exec(text);
		      if (!t) { break; }
	
		      canOpen = canClose = true;
		      pos = t.index + 1;
		      isSingle = (t[0] === "'");
	
		      // treat begin/end of the line as a whitespace
		      lastChar = t.index - 1 >= 0 ? text.charCodeAt(t.index - 1) : 0x20;
		      nextChar = pos < max ? text.charCodeAt(pos) : 0x20;
	
		      isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
		      isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
	
		      isLastWhiteSpace = isWhiteSpace(lastChar);
		      isNextWhiteSpace = isWhiteSpace(nextChar);
	
		      if (isNextWhiteSpace) {
		        canOpen = false;
		      } else if (isNextPunctChar) {
		        if (!(isLastWhiteSpace || isLastPunctChar)) {
		          canOpen = false;
		        }
		      }
	
		      if (isLastWhiteSpace) {
		        canClose = false;
		      } else if (isLastPunctChar) {
		        if (!(isNextWhiteSpace || isNextPunctChar)) {
		          canClose = false;
		        }
		      }
	
		      if (nextChar === 0x22 /* " */ && t[0] === '"') {
		        if (lastChar >= 0x30 /* 0 */ && lastChar <= 0x39 /* 9 */) {
		          // special case: 1"" - count first quote as an inch
		          canClose = canOpen = false;
		        }
		      }
	
		      if (canOpen && canClose) {
		        // treat this as the middle of the word
		        canOpen = false;
		        canClose = isNextPunctChar;
		      }
	
		      if (!canOpen && !canClose) {
		        // middle of word
		        if (isSingle) {
		          token.content = replaceAt(token.content, t.index, APOSTROPHE);
		        }
		        continue;
		      }
	
		      if (canClose) {
		        // this could be a closing quote, rewind the stack to get a match
		        for (j = stack.length - 1; j >= 0; j--) {
		          item = stack[j];
		          if (stack[j].level < thisLevel) { break; }
		          if (item.single === isSingle && stack[j].level === thisLevel) {
		            item = stack[j];
	
		            if (isSingle) {
		              openQuote = state.md.options.quotes[2];
		              closeQuote = state.md.options.quotes[3];
		            } else {
		              openQuote = state.md.options.quotes[0];
		              closeQuote = state.md.options.quotes[1];
		            }
	
		            // replace token.content *before* tokens[item.token].content,
		            // because, if they are pointing at the same token, replaceAt
		            // could mess up indices when quote length != 1
		            token.content = replaceAt(token.content, t.index, closeQuote);
		            tokens[item.token].content = replaceAt(
		              tokens[item.token].content, item.pos, openQuote);
	
		            pos += closeQuote.length - 1;
		            if (item.token === i) { pos += openQuote.length - 1; }
	
		            text = token.content;
		            max = text.length;
	
		            stack.length = j;
		            continue OUTER;
		          }
		        }
		      }
	
		      if (canOpen) {
		        stack.push({
		          token: i,
		          pos: t.index,
		          single: isSingle,
		          level: thisLevel
		        });
		      } else if (canClose && isSingle) {
		        token.content = replaceAt(token.content, t.index, APOSTROPHE);
		      }
		    }
		  }
		}
	
	
		module.exports = function smartquotes(state) {
		  /*eslint max-depth:0*/
		  var blkIdx;
	
		  if (!state.md.options.typographer) { return; }
	
		  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
	
		    if (state.tokens[blkIdx].type !== 'inline' ||
		        !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
		      continue;
		    }
	
		    process_inlines(state.tokens[blkIdx].children, state);
		  }
		};
	
	
	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Core state object
		//
		'use strict';
	
		var Token = __webpack_require__(32);
	
	
		function StateCore(src, md, env) {
		  this.src = src;
		  this.env = env;
		  this.tokens = [];
		  this.inlineMode = false;
		  this.md = md; // link to parser instance
		}
	
		// re-export Token class to use in core rules
		StateCore.prototype.Token = Token;
	
	
		module.exports = StateCore;
	
	
	/***/ },
	/* 32 */
	/***/ function(module, exports) {
	
		// Token class
	
		'use strict';
	
	
		/**
		 * class Token
		 **/
	
		/**
		 * new Token(type, tag, nesting)
		 *
		 * Create new token and fill passed properties.
		 **/
		function Token(type, tag, nesting) {
		  /**
		   * Token#type -> String
		   *
		   * Type of the token (string, e.g. "paragraph_open")
		   **/
		  this.type     = type;
	
		  /**
		   * Token#tag -> String
		   *
		   * html tag name, e.g. "p"
		   **/
		  this.tag      = tag;
	
		  /**
		   * Token#attrs -> Array
		   *
		   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
		   **/
		  this.attrs    = null;
	
		  /**
		   * Token#map -> Array
		   *
		   * Source map info. Format: `[ line_begin, line_end ]`
		   **/
		  this.map      = null;
	
		  /**
		   * Token#nesting -> Number
		   *
		   * Level change (number in {-1, 0, 1} set), where:
		   *
		   * -  `1` means the tag is opening
		   * -  `0` means the tag is self-closing
		   * - `-1` means the tag is closing
		   **/
		  this.nesting  = nesting;
	
		  /**
		   * Token#level -> Number
		   *
		   * nesting level, the same as `state.level`
		   **/
		  this.level    = 0;
	
		  /**
		   * Token#children -> Array
		   *
		   * An array of child nodes (inline and img tokens)
		   **/
		  this.children = null;
	
		  /**
		   * Token#content -> String
		   *
		   * In a case of self-closing tag (code, html, fence, etc.),
		   * it has contents of this tag.
		   **/
		  this.content  = '';
	
		  /**
		   * Token#markup -> String
		   *
		   * '*' or '_' for emphasis, fence string for fence, etc.
		   **/
		  this.markup   = '';
	
		  /**
		   * Token#info -> String
		   *
		   * fence infostring
		   **/
		  this.info     = '';
	
		  /**
		   * Token#meta -> Object
		   *
		   * A place for plugins to store an arbitrary data
		   **/
		  this.meta     = null;
	
		  /**
		   * Token#block -> Boolean
		   *
		   * True for block-level tokens, false for inline tokens.
		   * Used in renderer to calculate line breaks
		   **/
		  this.block    = false;
	
		  /**
		   * Token#hidden -> Boolean
		   *
		   * If it's true, ignore this element when rendering. Used for tight lists
		   * to hide paragraphs.
		   **/
		  this.hidden   = false;
		}
	
	
		/**
		 * Token.attrIndex(name) -> Number
		 *
		 * Search attribute index by name.
		 **/
		Token.prototype.attrIndex = function attrIndex(name) {
		  var attrs, i, len;
	
		  if (!this.attrs) { return -1; }
	
		  attrs = this.attrs;
	
		  for (i = 0, len = attrs.length; i < len; i++) {
		    if (attrs[i][0] === name) { return i; }
		  }
		  return -1;
		};
	
	
		/**
		 * Token.attrPush(attrData)
		 *
		 * Add `[ name, value ]` attribute to list. Init attrs if necessary
		 **/
		Token.prototype.attrPush = function attrPush(attrData) {
		  if (this.attrs) {
		    this.attrs.push(attrData);
		  } else {
		    this.attrs = [ attrData ];
		  }
		};
	
	
		module.exports = Token;
	
	
	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {
	
		/** internal
		 * class ParserBlock
		 *
		 * Block-level tokenizer.
		 **/
		'use strict';
	
	
		var Ruler           = __webpack_require__(24);
	
	
		var _rules = [
		  // First 2 params - rule name & source. Secondary array - list of rules,
		  // which can be terminated by this one.
		  [ 'table',      __webpack_require__(34),      [ 'paragraph', 'reference' ] ],
		  [ 'code',       __webpack_require__(35) ],
		  [ 'fence',      __webpack_require__(36),      [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
		  [ 'blockquote', __webpack_require__(37), [ 'paragraph', 'reference', 'list' ] ],
		  [ 'hr',         __webpack_require__(38),         [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
		  [ 'list',       __webpack_require__(39),       [ 'paragraph', 'reference', 'blockquote' ] ],
		  [ 'reference',  __webpack_require__(40) ],
		  [ 'heading',    __webpack_require__(41),    [ 'paragraph', 'reference', 'blockquote' ] ],
		  [ 'lheading',   __webpack_require__(42) ],
		  [ 'html_block', __webpack_require__(43), [ 'paragraph', 'reference', 'blockquote' ] ],
		  [ 'paragraph',  __webpack_require__(46) ]
		];
	
	
		/**
		 * new ParserBlock()
		 **/
		function ParserBlock() {
		  /**
		   * ParserBlock#ruler -> Ruler
		   *
		   * [[Ruler]] instance. Keep configuration of block rules.
		   **/
		  this.ruler = new Ruler();
	
		  for (var i = 0; i < _rules.length; i++) {
		    this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
		  }
		}
	
	
		// Generate tokens for input range
		//
		ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
		  var ok, i,
		      rules = this.ruler.getRules(''),
		      len = rules.length,
		      line = startLine,
		      hasEmptyLines = false,
		      maxNesting = state.md.options.maxNesting;
	
		  while (line < endLine) {
		    state.line = line = state.skipEmptyLines(line);
		    if (line >= endLine) { break; }
	
		    // Termination condition for nested calls.
		    // Nested calls currently used for blockquotes & lists
		    if (state.sCount[line] < state.blkIndent) { break; }
	
		    // If nesting level exceeded - skip tail to the end. That's not ordinary
		    // situation and we should not care about content.
		    if (state.level >= maxNesting) {
		      state.line = endLine;
		      break;
		    }
	
		    // Try all possible rules.
		    // On success, rule should:
		    //
		    // - update `state.line`
		    // - update `state.tokens`
		    // - return true
	
		    for (i = 0; i < len; i++) {
		      ok = rules[i](state, line, endLine, false);
		      if (ok) { break; }
		    }
	
		    // set state.tight iff we had an empty line before current tag
		    // i.e. latest empty line should not count
		    state.tight = !hasEmptyLines;
	
		    // paragraph might "eat" one newline after it in nested lists
		    if (state.isEmpty(state.line - 1)) {
		      hasEmptyLines = true;
		    }
	
		    line = state.line;
	
		    if (line < endLine && state.isEmpty(line)) {
		      hasEmptyLines = true;
		      line++;
	
		      // two empty lines should stop the parser in list mode
		      if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) { break; }
		      state.line = line;
		    }
		  }
		};
	
	
		/**
		 * ParserBlock.parse(str, md, env, outTokens)
		 *
		 * Process input string and push block tokens into `outTokens`
		 **/
		ParserBlock.prototype.parse = function (src, md, env, outTokens) {
		  var state;
	
		  if (!src) { return []; }
	
		  state = new this.State(src, md, env, outTokens);
	
		  this.tokenize(state, state.line, state.lineMax);
		};
	
	
		ParserBlock.prototype.State = __webpack_require__(47);
	
	
		module.exports = ParserBlock;
	
	
	/***/ },
	/* 34 */
	/***/ function(module, exports) {
	
		// GFM table, non-standard
	
		'use strict';
	
	
		function getLine(state, line) {
		  var pos = state.bMarks[line] + state.blkIndent,
		      max = state.eMarks[line];
	
		  return state.src.substr(pos, max - pos);
		}
	
		function escapedSplit(str) {
		  var result = [],
		      pos = 0,
		      max = str.length,
		      ch,
		      escapes = 0,
		      lastPos = 0,
		      backTicked = false,
		      lastBackTick = 0;
	
		  ch  = str.charCodeAt(pos);
	
		  while (pos < max) {
		    if (ch === 0x60/* ` */ && (escapes % 2 === 0)) {
		      backTicked = !backTicked;
		      lastBackTick = pos;
		    } else if (ch === 0x7c/* | */ && (escapes % 2 === 0) && !backTicked) {
		      result.push(str.substring(lastPos, pos));
		      lastPos = pos + 1;
		    } else if (ch === 0x5c/* \ */) {
		      escapes++;
		    } else {
		      escapes = 0;
		    }
	
		    pos++;
	
		    // If there was an un-closed backtick, go back to just after
		    // the last backtick, but as if it was a normal character
		    if (pos === max && backTicked) {
		      backTicked = false;
		      pos = lastBackTick + 1;
		    }
	
		    ch = str.charCodeAt(pos);
		  }
	
		  result.push(str.substring(lastPos));
	
		  return result;
		}
	
	
		module.exports = function table(state, startLine, endLine, silent) {
		  var ch, lineText, pos, i, nextLine, rows, token,
		      aligns, t, tableLines, tbodyLines;
	
		  // should have at least three lines
		  if (startLine + 2 > endLine) { return false; }
	
		  nextLine = startLine + 1;
	
		  if (state.sCount[nextLine] < state.blkIndent) { return false; }
	
		  // first character of the second line should be '|' or '-'
	
		  pos = state.bMarks[nextLine] + state.tShift[nextLine];
		  if (pos >= state.eMarks[nextLine]) { return false; }
	
		  ch = state.src.charCodeAt(pos);
		  if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */) { return false; }
	
		  lineText = getLine(state, startLine + 1);
		  if (!/^[-:| ]+$/.test(lineText)) { return false; }
	
		  rows = lineText.split('|');
		  if (rows.length < 2) { return false; }
		  aligns = [];
		  for (i = 0; i < rows.length; i++) {
		    t = rows[i].trim();
		    if (!t) {
		      // allow empty columns before and after table, but not in between columns;
		      // e.g. allow ` |---| `, disallow ` ---||--- `
		      if (i === 0 || i === rows.length - 1) {
		        continue;
		      } else {
		        return false;
		      }
		    }
	
		    if (!/^:?-+:?$/.test(t)) { return false; }
		    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
		      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
		    } else if (t.charCodeAt(0) === 0x3A/* : */) {
		      aligns.push('left');
		    } else {
		      aligns.push('');
		    }
		  }
	
		  lineText = getLine(state, startLine).trim();
		  if (lineText.indexOf('|') === -1) { return false; }
		  rows = escapedSplit(lineText.replace(/^\||\|$/g, ''));
		  if (aligns.length !== rows.length) { return false; }
		  if (silent) { return true; }
	
		  token     = state.push('table_open', 'table', 1);
		  token.map = tableLines = [ startLine, 0 ];
	
		  token     = state.push('thead_open', 'thead', 1);
		  token.map = [ startLine, startLine + 1 ];
	
		  token     = state.push('tr_open', 'tr', 1);
		  token.map = [ startLine, startLine + 1 ];
	
		  for (i = 0; i < rows.length; i++) {
		    token          = state.push('th_open', 'th', 1);
		    token.map      = [ startLine, startLine + 1 ];
		    if (aligns[i]) {
		      token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
		    }
	
		    token          = state.push('inline', '', 0);
		    token.content  = rows[i].trim();
		    token.map      = [ startLine, startLine + 1 ];
		    token.children = [];
	
		    token          = state.push('th_close', 'th', -1);
		  }
	
		  token     = state.push('tr_close', 'tr', -1);
		  token     = state.push('thead_close', 'thead', -1);
	
		  token     = state.push('tbody_open', 'tbody', 1);
		  token.map = tbodyLines = [ startLine + 2, 0 ];
	
		  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
		    if (state.sCount[nextLine] < state.blkIndent) { break; }
	
		    lineText = getLine(state, nextLine).trim();
		    if (lineText.indexOf('|') === -1) { break; }
		    rows = escapedSplit(lineText.replace(/^\||\|$/g, ''));
	
		    // set number of columns to number of columns in header row
		    rows.length = aligns.length;
	
		    token = state.push('tr_open', 'tr', 1);
		    for (i = 0; i < rows.length; i++) {
		      token          = state.push('td_open', 'td', 1);
		      if (aligns[i]) {
		        token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
		      }
	
		      token          = state.push('inline', '', 0);
		      token.content  = rows[i] ? rows[i].trim() : '';
		      token.children = [];
	
		      token          = state.push('td_close', 'td', -1);
		    }
		    token = state.push('tr_close', 'tr', -1);
		  }
		  token = state.push('tbody_close', 'tbody', -1);
		  token = state.push('table_close', 'table', -1);
	
		  tableLines[1] = tbodyLines[1] = nextLine;
		  state.line = nextLine;
		  return true;
		};
	
	
	/***/ },
	/* 35 */
	/***/ function(module, exports) {
	
		// Code block (4 spaces padded)
	
		'use strict';
	
	
		module.exports = function code(state, startLine, endLine/*, silent*/) {
		  var nextLine, last, token;
	
		  if (state.sCount[startLine] - state.blkIndent < 4) { return false; }
	
		  last = nextLine = startLine + 1;
	
		  while (nextLine < endLine) {
		    if (state.isEmpty(nextLine)) {
		      nextLine++;
		      continue;
		    }
		    if (state.sCount[nextLine] - state.blkIndent >= 4) {
		      nextLine++;
		      last = nextLine;
		      continue;
		    }
		    break;
		  }
	
		  state.line = nextLine;
	
		  token         = state.push('code_block', 'code', 0);
		  token.content = state.getLines(startLine, last, 4 + state.blkIndent, true);
		  token.map     = [ startLine, state.line ];
	
		  return true;
		};
	
	
	/***/ },
	/* 36 */
	/***/ function(module, exports) {
	
		// fences (``` lang, ~~~ lang)
	
		'use strict';
	
	
		module.exports = function fence(state, startLine, endLine, silent) {
		  var marker, len, params, nextLine, mem, token, markup,
		      haveEndMarker = false,
		      pos = state.bMarks[startLine] + state.tShift[startLine],
		      max = state.eMarks[startLine];
	
		  if (pos + 3 > max) { return false; }
	
		  marker = state.src.charCodeAt(pos);
	
		  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
		    return false;
		  }
	
		  // scan marker length
		  mem = pos;
		  pos = state.skipChars(pos, marker);
	
		  len = pos - mem;
	
		  if (len < 3) { return false; }
	
		  markup = state.src.slice(mem, pos);
		  params = state.src.slice(pos, max);
	
		  if (params.indexOf('`') >= 0) { return false; }
	
		  // Since start is found, we can report success here in validation mode
		  if (silent) { return true; }
	
		  // search end of block
		  nextLine = startLine;
	
		  for (;;) {
		    nextLine++;
		    if (nextLine >= endLine) {
		      // unclosed block should be autoclosed by end of document.
		      // also block seems to be autoclosed by end of parent
		      break;
		    }
	
		    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
		    max = state.eMarks[nextLine];
	
		    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
		      // non-empty line with negative indent should stop the list:
		      // - ```
		      //  test
		      break;
		    }
	
		    if (state.src.charCodeAt(pos) !== marker) { continue; }
	
		    if (state.sCount[nextLine] - state.blkIndent >= 4) {
		      // closing fence should be indented less than 4 spaces
		      continue;
		    }
	
		    pos = state.skipChars(pos, marker);
	
		    // closing code fence must be at least as long as the opening one
		    if (pos - mem < len) { continue; }
	
		    // make sure tail has spaces only
		    pos = state.skipSpaces(pos);
	
		    if (pos < max) { continue; }
	
		    haveEndMarker = true;
		    // found!
		    break;
		  }
	
		  // If a fence has heading spaces, they should be removed from its inner block
		  len = state.sCount[startLine];
	
		  state.line = nextLine + (haveEndMarker ? 1 : 0);
	
		  token         = state.push('fence', 'code', 0);
		  token.info    = params;
		  token.content = state.getLines(startLine + 1, nextLine, len, true);
		  token.markup  = markup;
		  token.map     = [ startLine, state.line ];
	
		  return true;
		};
	
	
	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Block quotes
	
		'use strict';
	
		var isSpace = __webpack_require__(4).isSpace;
	
	
		module.exports = function blockquote(state, startLine, endLine, silent) {
		  var nextLine, lastLineEmpty, oldTShift, oldSCount, oldBMarks, oldIndent, oldParentType, lines, initial, offset, ch,
		      terminatorRules, token,
		      i, l, terminate,
		      pos = state.bMarks[startLine] + state.tShift[startLine],
		      max = state.eMarks[startLine];
	
		  // check the block quote marker
		  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }
	
		  // we know that it's going to be a valid blockquote,
		  // so no point trying to find the end of it in silent mode
		  if (silent) { return true; }
	
		  // skip one optional space (but not tab, check cmark impl) after '>'
		  if (state.src.charCodeAt(pos) === 0x20) { pos++; }
	
		  oldIndent = state.blkIndent;
		  state.blkIndent = 0;
	
		  // skip spaces after ">" and re-calculate offset
		  initial = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]);
	
		  oldBMarks = [ state.bMarks[startLine] ];
		  state.bMarks[startLine] = pos;
	
		  while (pos < max) {
		    ch = state.src.charCodeAt(pos);
	
		    if (isSpace(ch)) {
		      if (ch === 0x09) {
		        offset += 4 - offset % 4;
		      } else {
		        offset++;
		      }
		    } else {
		      break;
		    }
	
		    pos++;
		  }
	
		  lastLineEmpty = pos >= max;
	
		  oldSCount = [ state.sCount[startLine] ];
		  state.sCount[startLine] = offset - initial;
	
		  oldTShift = [ state.tShift[startLine] ];
		  state.tShift[startLine] = pos - state.bMarks[startLine];
	
		  terminatorRules = state.md.block.ruler.getRules('blockquote');
	
		  // Search the end of the block
		  //
		  // Block ends with either:
		  //  1. an empty line outside:
		  //     ```
		  //     > test
		  //
		  //     ```
		  //  2. an empty line inside:
		  //     ```
		  //     >
		  //     test
		  //     ```
		  //  3. another tag
		  //     ```
		  //     > test
		  //      - - -
		  //     ```
		  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
		    if (state.sCount[nextLine] < oldIndent) { break; }
	
		    pos = state.bMarks[nextLine] + state.tShift[nextLine];
		    max = state.eMarks[nextLine];
	
		    if (pos >= max) {
		      // Case 1: line is not inside the blockquote, and this line is empty.
		      break;
		    }
	
		    if (state.src.charCodeAt(pos++) === 0x3E/* > */) {
		      // This line is inside the blockquote.
	
		      // skip one optional space (but not tab, check cmark impl) after '>'
		      if (state.src.charCodeAt(pos) === 0x20) { pos++; }
	
		      // skip spaces after ">" and re-calculate offset
		      initial = offset = state.sCount[nextLine] + pos - (state.bMarks[nextLine] + state.tShift[nextLine]);
	
		      oldBMarks.push(state.bMarks[nextLine]);
		      state.bMarks[nextLine] = pos;
	
		      while (pos < max) {
		        ch = state.src.charCodeAt(pos);
	
		        if (isSpace(ch)) {
		          if (ch === 0x09) {
		            offset += 4 - offset % 4;
		          } else {
		            offset++;
		          }
		        } else {
		          break;
		        }
	
		        pos++;
		      }
	
		      lastLineEmpty = pos >= max;
	
		      oldSCount.push(state.sCount[nextLine]);
		      state.sCount[nextLine] = offset - initial;
	
		      oldTShift.push(state.tShift[nextLine]);
		      state.tShift[nextLine] = pos - state.bMarks[nextLine];
		      continue;
		    }
	
		    // Case 2: line is not inside the blockquote, and the last line was empty.
		    if (lastLineEmpty) { break; }
	
		    // Case 3: another tag found.
		    terminate = false;
		    for (i = 0, l = terminatorRules.length; i < l; i++) {
		      if (terminatorRules[i](state, nextLine, endLine, true)) {
		        terminate = true;
		        break;
		      }
		    }
		    if (terminate) { break; }
	
		    oldBMarks.push(state.bMarks[nextLine]);
		    oldTShift.push(state.tShift[nextLine]);
		    oldSCount.push(state.sCount[nextLine]);
	
		    // A negative indentation means that this is a paragraph continuation
		    //
		    state.sCount[nextLine] = -1;
		  }
	
		  oldParentType = state.parentType;
		  state.parentType = 'blockquote';
	
		  token        = state.push('blockquote_open', 'blockquote', 1);
		  token.markup = '>';
		  token.map    = lines = [ startLine, 0 ];
	
		  state.md.block.tokenize(state, startLine, nextLine);
	
		  token        = state.push('blockquote_close', 'blockquote', -1);
		  token.markup = '>';
	
		  state.parentType = oldParentType;
		  lines[1] = state.line;
	
		  // Restore original tShift; this might not be necessary since the parser
		  // has already been here, but just to make sure we can do that.
		  for (i = 0; i < oldTShift.length; i++) {
		    state.bMarks[i + startLine] = oldBMarks[i];
		    state.tShift[i + startLine] = oldTShift[i];
		    state.sCount[i + startLine] = oldSCount[i];
		  }
		  state.blkIndent = oldIndent;
	
		  return true;
		};
	
	
	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Horizontal rule
	
		'use strict';
	
		var isSpace = __webpack_require__(4).isSpace;
	
	
		module.exports = function hr(state, startLine, endLine, silent) {
		  var marker, cnt, ch, token,
		      pos = state.bMarks[startLine] + state.tShift[startLine],
		      max = state.eMarks[startLine];
	
		  marker = state.src.charCodeAt(pos++);
	
		  // Check hr marker
		  if (marker !== 0x2A/* * */ &&
		      marker !== 0x2D/* - */ &&
		      marker !== 0x5F/* _ */) {
		    return false;
		  }
	
		  // markers can be mixed with spaces, but there should be at least 3 of them
	
		  cnt = 1;
		  while (pos < max) {
		    ch = state.src.charCodeAt(pos++);
		    if (ch !== marker && !isSpace(ch)) { return false; }
		    if (ch === marker) { cnt++; }
		  }
	
		  if (cnt < 3) { return false; }
	
		  if (silent) { return true; }
	
		  state.line = startLine + 1;
	
		  token        = state.push('hr', 'hr', 0);
		  token.map    = [ startLine, state.line ];
		  token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
	
		  return true;
		};
	
	
	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Lists
	
		'use strict';
	
		var isSpace = __webpack_require__(4).isSpace;
	
	
		// Search `[-+*][\n ]`, returns next pos arter marker on success
		// or -1 on fail.
		function skipBulletListMarker(state, startLine) {
		  var marker, pos, max, ch;
	
		  pos = state.bMarks[startLine] + state.tShift[startLine];
		  max = state.eMarks[startLine];
	
		  marker = state.src.charCodeAt(pos++);
		  // Check bullet
		  if (marker !== 0x2A/* * */ &&
		      marker !== 0x2D/* - */ &&
		      marker !== 0x2B/* + */) {
		    return -1;
		  }
	
		  if (pos < max) {
		    ch = state.src.charCodeAt(pos);
	
		    if (!isSpace(ch)) {
		      // " -test " - is not a list item
		      return -1;
		    }
		  }
	
		  return pos;
		}
	
		// Search `\d+[.)][\n ]`, returns next pos arter marker on success
		// or -1 on fail.
		function skipOrderedListMarker(state, startLine) {
		  var ch,
		      start = state.bMarks[startLine] + state.tShift[startLine],
		      pos = start,
		      max = state.eMarks[startLine];
	
		  // List marker should have at least 2 chars (digit + dot)
		  if (pos + 1 >= max) { return -1; }
	
		  ch = state.src.charCodeAt(pos++);
	
		  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }
	
		  for (;;) {
		    // EOL -> fail
		    if (pos >= max) { return -1; }
	
		    ch = state.src.charCodeAt(pos++);
	
		    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {
	
		      // List marker should have no more than 9 digits
		      // (prevents integer overflow in browsers)
		      if (pos - start >= 10) { return -1; }
	
		      continue;
		    }
	
		    // found valid marker
		    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
		      break;
		    }
	
		    return -1;
		  }
	
	
		  if (pos < max) {
		    ch = state.src.charCodeAt(pos);
	
		    if (!isSpace(ch)) {
		      // " 1.test " - is not a list item
		      return -1;
		    }
		  }
		  return pos;
		}
	
		function markTightParagraphs(state, idx) {
		  var i, l,
		      level = state.level + 2;
	
		  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
		    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
		      state.tokens[i + 2].hidden = true;
		      state.tokens[i].hidden = true;
		      i += 2;
		    }
		  }
		}
	
	
		module.exports = function list(state, startLine, endLine, silent) {
		  var nextLine,
		      initial,
		      offset,
		      indent,
		      oldTShift,
		      oldIndent,
		      oldLIndent,
		      oldTight,
		      oldParentType,
		      start,
		      posAfterMarker,
		      ch,
		      pos,
		      max,
		      indentAfterMarker,
		      markerValue,
		      markerCharCode,
		      isOrdered,
		      contentStart,
		      listTokIdx,
		      prevEmptyEnd,
		      listLines,
		      itemLines,
		      tight = true,
		      terminatorRules,
		      token,
		      i, l, terminate;
	
		  // Detect list type and position after marker
		  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
		    isOrdered = true;
		  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
		    isOrdered = false;
		  } else {
		    return false;
		  }
	
		  // We should terminate list on style change. Remember first one to compare.
		  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
	
		  // For validation mode we can terminate immediately
		  if (silent) { return true; }
	
		  // Start list
		  listTokIdx = state.tokens.length;
	
		  if (isOrdered) {
		    start = state.bMarks[startLine] + state.tShift[startLine];
		    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));
	
		    token       = state.push('ordered_list_open', 'ol', 1);
		    if (markerValue !== 1) {
		      token.attrs = [ [ 'start', markerValue ] ];
		    }
	
		  } else {
		    token       = state.push('bullet_list_open', 'ul', 1);
		  }
	
		  token.map    = listLines = [ startLine, 0 ];
		  token.markup = String.fromCharCode(markerCharCode);
	
		  //
		  // Iterate list items
		  //
	
		  nextLine = startLine;
		  prevEmptyEnd = false;
		  terminatorRules = state.md.block.ruler.getRules('list');
	
		  while (nextLine < endLine) {
		    pos = posAfterMarker;
		    max = state.eMarks[nextLine];
	
		    initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);
	
		    while (pos < max) {
		      ch = state.src.charCodeAt(pos);
	
		      if (isSpace(ch)) {
		        if (ch === 0x09) {
		          offset += 4 - offset % 4;
		        } else {
		          offset++;
		        }
		      } else {
		        break;
		      }
	
		      pos++;
		    }
	
		    contentStart = pos;
	
		    if (contentStart >= max) {
		      // trimming space in "-    \n  3" case, indent is 1 here
		      indentAfterMarker = 1;
		    } else {
		      indentAfterMarker = offset - initial;
		    }
	
		    // If we have more than 4 spaces, the indent is 1
		    // (the rest is just indented code block)
		    if (indentAfterMarker > 4) { indentAfterMarker = 1; }
	
		    // "  -  test"
		    //  ^^^^^ - calculating total length of this thing
		    indent = initial + indentAfterMarker;
	
		    // Run subparser & write tokens
		    token        = state.push('list_item_open', 'li', 1);
		    token.markup = String.fromCharCode(markerCharCode);
		    token.map    = itemLines = [ startLine, 0 ];
	
		    oldIndent = state.blkIndent;
		    oldTight = state.tight;
		    oldTShift = state.tShift[startLine];
		    oldLIndent = state.sCount[startLine];
		    oldParentType = state.parentType;
		    state.blkIndent = indent;
		    state.tight = true;
		    state.parentType = 'list';
		    state.tShift[startLine] = contentStart - state.bMarks[startLine];
		    state.sCount[startLine] = offset;
	
		    state.md.block.tokenize(state, startLine, endLine, true);
	
		    // If any of list item is tight, mark list as tight
		    if (!state.tight || prevEmptyEnd) {
		      tight = false;
		    }
		    // Item become loose if finish with empty line,
		    // but we should filter last element, because it means list finish
		    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);
	
		    state.blkIndent = oldIndent;
		    state.tShift[startLine] = oldTShift;
		    state.sCount[startLine] = oldLIndent;
		    state.tight = oldTight;
		    state.parentType = oldParentType;
	
		    token        = state.push('list_item_close', 'li', -1);
		    token.markup = String.fromCharCode(markerCharCode);
	
		    nextLine = startLine = state.line;
		    itemLines[1] = nextLine;
		    contentStart = state.bMarks[startLine];
	
		    if (nextLine >= endLine) { break; }
	
		    if (state.isEmpty(nextLine)) {
		      break;
		    }
	
		    //
		    // Try to check if list is terminated or continued.
		    //
		    if (state.sCount[nextLine] < state.blkIndent) { break; }
	
		    // fail if terminating block found
		    terminate = false;
		    for (i = 0, l = terminatorRules.length; i < l; i++) {
		      if (terminatorRules[i](state, nextLine, endLine, true)) {
		        terminate = true;
		        break;
		      }
		    }
		    if (terminate) { break; }
	
		    // fail if list has another type
		    if (isOrdered) {
		      posAfterMarker = skipOrderedListMarker(state, nextLine);
		      if (posAfterMarker < 0) { break; }
		    } else {
		      posAfterMarker = skipBulletListMarker(state, nextLine);
		      if (posAfterMarker < 0) { break; }
		    }
	
		    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
		  }
	
		  // Finilize list
		  if (isOrdered) {
		    token = state.push('ordered_list_close', 'ol', -1);
		  } else {
		    token = state.push('bullet_list_close', 'ul', -1);
		  }
		  token.markup = String.fromCharCode(markerCharCode);
	
		  listLines[1] = nextLine;
		  state.line = nextLine;
	
		  // mark paragraphs tight if needed
		  if (tight) {
		    markTightParagraphs(state, listTokIdx);
		  }
	
		  return true;
		};
	
	
	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
	
		var parseLinkDestination = __webpack_require__(20);
		var parseLinkTitle       = __webpack_require__(21);
		var normalizeReference   = __webpack_require__(4).normalizeReference;
		var isSpace              = __webpack_require__(4).isSpace;
	
	
		module.exports = function reference(state, startLine, _endLine, silent) {
		  var ch,
		      destEndPos,
		      destEndLineNo,
		      endLine,
		      href,
		      i,
		      l,
		      label,
		      labelEnd,
		      res,
		      start,
		      str,
		      terminate,
		      terminatorRules,
		      title,
		      lines = 0,
		      pos = state.bMarks[startLine] + state.tShift[startLine],
		      max = state.eMarks[startLine],
		      nextLine = startLine + 1;
	
		  if (state.src.charCodeAt(pos) !== 0x5B/* [ */) { return false; }
	
		  // Simple check to quickly interrupt scan on [link](url) at the start of line.
		  // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
		  while (++pos < max) {
		    if (state.src.charCodeAt(pos) === 0x5D /* ] */ &&
		        state.src.charCodeAt(pos - 1) !== 0x5C/* \ */) {
		      if (pos + 1 === max) { return false; }
		      if (state.src.charCodeAt(pos + 1) !== 0x3A/* : */) { return false; }
		      break;
		    }
		  }
	
		  endLine = state.lineMax;
	
		  // jump line-by-line until empty one or EOF
		  terminatorRules = state.md.block.ruler.getRules('reference');
	
		  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
		    // this would be a code block normally, but after paragraph
		    // it's considered a lazy continuation regardless of what's there
		    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }
	
		    // quirk for blockquotes, this line should already be checked by that rule
		    if (state.sCount[nextLine] < 0) { continue; }
	
		    // Some tags can terminate paragraph without empty line.
		    terminate = false;
		    for (i = 0, l = terminatorRules.length; i < l; i++) {
		      if (terminatorRules[i](state, nextLine, endLine, true)) {
		        terminate = true;
		        break;
		      }
		    }
		    if (terminate) { break; }
		  }
	
		  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
		  max = str.length;
	
		  for (pos = 1; pos < max; pos++) {
		    ch = str.charCodeAt(pos);
		    if (ch === 0x5B /* [ */) {
		      return false;
		    } else if (ch === 0x5D /* ] */) {
		      labelEnd = pos;
		      break;
		    } else if (ch === 0x0A /* \n */) {
		      lines++;
		    } else if (ch === 0x5C /* \ */) {
		      pos++;
		      if (pos < max && str.charCodeAt(pos) === 0x0A) {
		        lines++;
		      }
		    }
		  }
	
		  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return false; }
	
		  // [label]:   destination   'title'
		  //         ^^^ skip optional whitespace here
		  for (pos = labelEnd + 2; pos < max; pos++) {
		    ch = str.charCodeAt(pos);
		    if (ch === 0x0A) {
		      lines++;
		    } else if (isSpace(ch)) {
		      /*eslint no-empty:0*/
		    } else {
		      break;
		    }
		  }
	
		  // [label]:   destination   'title'
		  //            ^^^^^^^^^^^ parse this
		  res = parseLinkDestination(str, pos, max);
		  if (!res.ok) { return false; }
	
		  href = state.md.normalizeLink(res.str);
		  if (!state.md.validateLink(href)) { return false; }
	
		  pos = res.pos;
		  lines += res.lines;
	
		  // save cursor state, we could require to rollback later
		  destEndPos = pos;
		  destEndLineNo = lines;
	
		  // [label]:   destination   'title'
		  //                       ^^^ skipping those spaces
		  start = pos;
		  for (; pos < max; pos++) {
		    ch = str.charCodeAt(pos);
		    if (ch === 0x0A) {
		      lines++;
		    } else if (isSpace(ch)) {
		      /*eslint no-empty:0*/
		    } else {
		      break;
		    }
		  }
	
		  // [label]:   destination   'title'
		  //                          ^^^^^^^ parse this
		  res = parseLinkTitle(str, pos, max);
		  if (pos < max && start !== pos && res.ok) {
		    title = res.str;
		    pos = res.pos;
		    lines += res.lines;
		  } else {
		    title = '';
		    pos = destEndPos;
		    lines = destEndLineNo;
		  }
	
		  // skip trailing spaces until the rest of the line
		  while (pos < max) {
		    ch = str.charCodeAt(pos);
		    if (!isSpace(ch)) { break; }
		    pos++;
		  }
	
		  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
		    if (title) {
		      // garbage at the end of the line after title,
		      // but it could still be a valid reference if we roll back
		      title = '';
		      pos = destEndPos;
		      lines = destEndLineNo;
		      while (pos < max) {
		        ch = str.charCodeAt(pos);
		        if (!isSpace(ch)) { break; }
		        pos++;
		      }
		    }
		  }
	
		  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
		    // garbage at the end of the line
		    return false;
		  }
	
		  label = normalizeReference(str.slice(1, labelEnd));
		  if (!label) {
		    // CommonMark 0.20 disallows empty labels
		    return false;
		  }
	
		  // Reference can not terminate anything. This check is for safety only.
		  /*istanbul ignore if*/
		  if (silent) { return true; }
	
		  if (typeof state.env.references === 'undefined') {
		    state.env.references = {};
		  }
		  if (typeof state.env.references[label] === 'undefined') {
		    state.env.references[label] = { title: title, href: href };
		  }
	
		  state.line = startLine + lines + 1;
		  return true;
		};
	
	
	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {
	
		// heading (#, ##, ...)
	
		'use strict';
	
		var isSpace = __webpack_require__(4).isSpace;
	
	
		module.exports = function heading(state, startLine, endLine, silent) {
		  var ch, level, tmp, token,
		      pos = state.bMarks[startLine] + state.tShift[startLine],
		      max = state.eMarks[startLine];
	
		  ch  = state.src.charCodeAt(pos);
	
		  if (ch !== 0x23/* # */ || pos >= max) { return false; }
	
		  // count heading level
		  level = 1;
		  ch = state.src.charCodeAt(++pos);
		  while (ch === 0x23/* # */ && pos < max && level <= 6) {
		    level++;
		    ch = state.src.charCodeAt(++pos);
		  }
	
		  if (level > 6 || (pos < max && ch !== 0x20/* space */)) { return false; }
	
		  if (silent) { return true; }
	
		  // Let's cut tails like '    ###  ' from the end of string
	
		  max = state.skipSpacesBack(max, pos);
		  tmp = state.skipCharsBack(max, 0x23, pos); // #
		  if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
		    max = tmp;
		  }
	
		  state.line = startLine + 1;
	
		  token        = state.push('heading_open', 'h' + String(level), 1);
		  token.markup = '########'.slice(0, level);
		  token.map    = [ startLine, state.line ];
	
		  token          = state.push('inline', '', 0);
		  token.content  = state.src.slice(pos, max).trim();
		  token.map      = [ startLine, state.line ];
		  token.children = [];
	
		  token        = state.push('heading_close', 'h' + String(level), -1);
		  token.markup = '########'.slice(0, level);
	
		  return true;
		};
	
	
	/***/ },
	/* 42 */
	/***/ function(module, exports) {
	
		// lheading (---, ===)
	
		'use strict';
	
	
		module.exports = function lheading(state, startLine, endLine/*, silent*/) {
		  var marker, pos, max, token, level,
		      next = startLine + 1;
	
		  if (next >= endLine) { return false; }
		  if (state.sCount[next] < state.blkIndent) { return false; }
	
		  // Scan next line
	
		  if (state.sCount[next] - state.blkIndent > 3) { return false; }
	
		  pos = state.bMarks[next] + state.tShift[next];
		  max = state.eMarks[next];
	
		  if (pos >= max) { return false; }
	
		  marker = state.src.charCodeAt(pos);
	
		  if (marker !== 0x2D/* - */ && marker !== 0x3D/* = */) { return false; }
	
		  pos = state.skipChars(pos, marker);
	
		  pos = state.skipSpaces(pos);
	
		  if (pos < max) { return false; }
	
		  pos = state.bMarks[startLine] + state.tShift[startLine];
	
		  state.line = next + 1;
		  level = (marker === 0x3D/* = */ ? 1 : 2);
	
		  token          = state.push('heading_open', 'h' + String(level), 1);
		  token.markup   = String.fromCharCode(marker);
		  token.map      = [ startLine, state.line ];
	
		  token          = state.push('inline', '', 0);
		  token.content  = state.src.slice(pos, state.eMarks[startLine]).trim();
		  token.map      = [ startLine, state.line - 1 ];
		  token.children = [];
	
		  token          = state.push('heading_close', 'h' + String(level), -1);
		  token.markup   = String.fromCharCode(marker);
	
		  return true;
		};
	
	
	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
	
		// HTML block
	
		'use strict';
	
	
		var block_names = __webpack_require__(44);
		var HTML_OPEN_CLOSE_TAG_RE = __webpack_require__(45).HTML_OPEN_CLOSE_TAG_RE;
	
		// An array of opening and corresponding closing sequences for html tags,
		// last argument defines whether it can terminate a paragraph or not
		//
		var HTML_SEQUENCES = [
		  [ /^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true ],
		  [ /^<!--/,        /-->/,   true ],
		  [ /^<\?/,         /\?>/,   true ],
		  [ /^<![A-Z]/,     />/,     true ],
		  [ /^<!\[CDATA\[/, /\]\]>/, true ],
		  [ new RegExp('^</?(' + block_names.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true ],
		  [ new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'),  /^$/, false ]
		];
	
	
		module.exports = function html_block(state, startLine, endLine, silent) {
		  var i, nextLine, token, lineText,
		      pos = state.bMarks[startLine] + state.tShift[startLine],
		      max = state.eMarks[startLine];
	
		  if (!state.md.options.html) { return false; }
	
		  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }
	
		  lineText = state.src.slice(pos, max);
	
		  for (i = 0; i < HTML_SEQUENCES.length; i++) {
		    if (HTML_SEQUENCES[i][0].test(lineText)) { break; }
		  }
	
		  if (i === HTML_SEQUENCES.length) { return false; }
	
		  if (silent) {
		    // true if this sequence can be a terminator, false otherwise
		    return HTML_SEQUENCES[i][2];
		  }
	
		  nextLine = startLine + 1;
	
		  // If we are here - we detected HTML block.
		  // Let's roll down till block end.
		  if (!HTML_SEQUENCES[i][1].test(lineText)) {
		    for (; nextLine < endLine; nextLine++) {
		      if (state.sCount[nextLine] < state.blkIndent) { break; }
	
		      pos = state.bMarks[nextLine] + state.tShift[nextLine];
		      max = state.eMarks[nextLine];
		      lineText = state.src.slice(pos, max);
	
		      if (HTML_SEQUENCES[i][1].test(lineText)) {
		        if (lineText.length !== 0) { nextLine++; }
		        break;
		      }
		    }
		  }
	
		  state.line = nextLine;
	
		  token         = state.push('html_block', '', 0);
		  token.map     = [ startLine, nextLine ];
		  token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
	
		  return true;
		};
	
	
	/***/ },
	/* 44 */
	/***/ function(module, exports) {
	
		// List of valid html blocks names, accorting to commonmark spec
		// http://jgm.github.io/CommonMark/spec.html#html-blocks
	
		'use strict';
	
	
		module.exports = [
		  'address',
		  'article',
		  'aside',
		  'base',
		  'basefont',
		  'blockquote',
		  'body',
		  'caption',
		  'center',
		  'col',
		  'colgroup',
		  'dd',
		  'details',
		  'dialog',
		  'dir',
		  'div',
		  'dl',
		  'dt',
		  'fieldset',
		  'figcaption',
		  'figure',
		  'footer',
		  'form',
		  'frame',
		  'frameset',
		  'h1',
		  'head',
		  'header',
		  'hr',
		  'html',
		  'iframe',
		  'legend',
		  'li',
		  'link',
		  'main',
		  'menu',
		  'menuitem',
		  'meta',
		  'nav',
		  'noframes',
		  'ol',
		  'optgroup',
		  'option',
		  'p',
		  'param',
		  'pre',
		  'section',
		  'source',
		  'title',
		  'summary',
		  'table',
		  'tbody',
		  'td',
		  'tfoot',
		  'th',
		  'thead',
		  'title',
		  'tr',
		  'track',
		  'ul'
		];
	
	
	/***/ },
	/* 45 */
	/***/ function(module, exports) {
	
		// Regexps to match html elements
	
		'use strict';
	
		var attr_name     = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
	
		var unquoted      = '[^"\'=<>`\\x00-\\x20]+';
		var single_quoted = "'[^']*'";
		var double_quoted = '"[^"]*"';
	
		var attr_value  = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';
	
		var attribute   = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';
	
		var open_tag    = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
	
		var close_tag   = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
		var comment     = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
		var processing  = '<[?].*?[?]>';
		var declaration = '<![A-Z]+\\s+[^>]*>';
		var cdata       = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
	
		var HTML_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment +
		                        '|' + processing + '|' + declaration + '|' + cdata + ')');
		var HTML_OPEN_CLOSE_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');
	
		module.exports.HTML_TAG_RE = HTML_TAG_RE;
		module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;
	
	
	/***/ },
	/* 46 */
	/***/ function(module, exports) {
	
		// Paragraph
	
		'use strict';
	
	
		module.exports = function paragraph(state, startLine/*, endLine*/) {
		  var content, terminate, i, l, token,
		      nextLine = startLine + 1,
		      terminatorRules = state.md.block.ruler.getRules('paragraph'),
		      endLine = state.lineMax;
	
		  // jump line-by-line until empty one or EOF
		  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
		    // this would be a code block normally, but after paragraph
		    // it's considered a lazy continuation regardless of what's there
		    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }
	
		    // quirk for blockquotes, this line should already be checked by that rule
		    if (state.sCount[nextLine] < 0) { continue; }
	
		    // Some tags can terminate paragraph without empty line.
		    terminate = false;
		    for (i = 0, l = terminatorRules.length; i < l; i++) {
		      if (terminatorRules[i](state, nextLine, endLine, true)) {
		        terminate = true;
		        break;
		      }
		    }
		    if (terminate) { break; }
		  }
	
		  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
	
		  state.line = nextLine;
	
		  token          = state.push('paragraph_open', 'p', 1);
		  token.map      = [ startLine, state.line ];
	
		  token          = state.push('inline', '', 0);
		  token.content  = content;
		  token.map      = [ startLine, state.line ];
		  token.children = [];
	
		  token          = state.push('paragraph_close', 'p', -1);
	
		  return true;
		};
	
	
	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Parser state class
	
		'use strict';
	
		var Token = __webpack_require__(32);
		var isSpace = __webpack_require__(4).isSpace;
	
	
		function StateBlock(src, md, env, tokens) {
		  var ch, s, start, pos, len, indent, offset, indent_found;
	
		  this.src = src;
	
		  // link to parser instance
		  this.md     = md;
	
		  this.env = env;
	
		  //
		  // Internal state vartiables
		  //
	
		  this.tokens = tokens;
	
		  this.bMarks = [];  // line begin offsets for fast jumps
		  this.eMarks = [];  // line end offsets for fast jumps
		  this.tShift = [];  // offsets of the first non-space characters (tabs not expanded)
		  this.sCount = [];  // indents for each line (tabs expanded)
	
		  // block parser variables
		  this.blkIndent  = 0; // required block content indent
		                       // (for example, if we are in list)
		  this.line       = 0; // line index in src
		  this.lineMax    = 0; // lines count
		  this.tight      = false;  // loose/tight mode for lists
		  this.parentType = 'root'; // if `list`, block parser stops on two newlines
		  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)
	
		  this.level = 0;
	
		  // renderer
		  this.result = '';
	
		  // Create caches
		  // Generate markers.
		  s = this.src;
		  indent_found = false;
	
		  for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
		    ch = s.charCodeAt(pos);
	
		    if (!indent_found) {
		      if (isSpace(ch)) {
		        indent++;
	
		        if (ch === 0x09) {
		          offset += 4 - offset % 4;
		        } else {
		          offset++;
		        }
		        continue;
		      } else {
		        indent_found = true;
		      }
		    }
	
		    if (ch === 0x0A || pos === len - 1) {
		      if (ch !== 0x0A) { pos++; }
		      this.bMarks.push(start);
		      this.eMarks.push(pos);
		      this.tShift.push(indent);
		      this.sCount.push(offset);
	
		      indent_found = false;
		      indent = 0;
		      offset = 0;
		      start = pos + 1;
		    }
		  }
	
		  // Push fake entry to simplify cache bounds checks
		  this.bMarks.push(s.length);
		  this.eMarks.push(s.length);
		  this.tShift.push(0);
		  this.sCount.push(0);
	
		  this.lineMax = this.bMarks.length - 1; // don't count last fake line
		}
	
		// Push new token to "stream".
		//
		StateBlock.prototype.push = function (type, tag, nesting) {
		  var token = new Token(type, tag, nesting);
		  token.block = true;
	
		  if (nesting < 0) { this.level--; }
		  token.level = this.level;
		  if (nesting > 0) { this.level++; }
	
		  this.tokens.push(token);
		  return token;
		};
	
		StateBlock.prototype.isEmpty = function isEmpty(line) {
		  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
		};
	
		StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
		  for (var max = this.lineMax; from < max; from++) {
		    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
		      break;
		    }
		  }
		  return from;
		};
	
		// Skip spaces from given position.
		StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
		  var ch;
	
		  for (var max = this.src.length; pos < max; pos++) {
		    ch = this.src.charCodeAt(pos);
		    if (!isSpace(ch)) { break; }
		  }
		  return pos;
		};
	
		// Skip spaces from given position in reverse.
		StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
		  if (pos <= min) { return pos; }
	
		  while (pos > min) {
		    if (!isSpace(this.src.charCodeAt(--pos))) { return pos + 1; }
		  }
		  return pos;
		};
	
		// Skip char codes from given position
		StateBlock.prototype.skipChars = function skipChars(pos, code) {
		  for (var max = this.src.length; pos < max; pos++) {
		    if (this.src.charCodeAt(pos) !== code) { break; }
		  }
		  return pos;
		};
	
		// Skip char codes reverse from given position - 1
		StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
		  if (pos <= min) { return pos; }
	
		  while (pos > min) {
		    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
		  }
		  return pos;
		};
	
		// cut lines range from source.
		StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
		  var i, lineIndent, ch, first, last, queue, lineStart,
		      line = begin;
	
		  if (begin >= end) {
		    return '';
		  }
	
		  queue = new Array(end - begin);
	
		  for (i = 0; line < end; line++, i++) {
		    lineIndent = 0;
		    lineStart = first = this.bMarks[line];
	
		    if (line + 1 < end || keepLastLF) {
		      // No need for bounds check because we have fake entry on tail.
		      last = this.eMarks[line] + 1;
		    } else {
		      last = this.eMarks[line];
		    }
	
		    while (first < last && lineIndent < indent) {
		      ch = this.src.charCodeAt(first);
	
		      if (isSpace(ch)) {
		        if (ch === 0x09) {
		          lineIndent += 4 - lineIndent % 4;
		        } else {
		          lineIndent++;
		        }
		      } else if (first - lineStart < this.tShift[line]) {
		        // patched tShift masked characters to look like spaces (blockquotes, list markers)
		        lineIndent++;
		      } else {
		        break;
		      }
	
		      first++;
		    }
	
		    queue[i] = this.src.slice(first, last);
		  }
	
		  return queue.join('');
		};
	
		// re-export Token class to use in block rules
		StateBlock.prototype.Token = Token;
	
	
		module.exports = StateBlock;
	
	
	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {
	
		/** internal
		 * class ParserInline
		 *
		 * Tokenizes paragraph content.
		 **/
		'use strict';
	
	
		var Ruler           = __webpack_require__(24);
	
	
		////////////////////////////////////////////////////////////////////////////////
		// Parser rules
	
		var _rules = [
		  [ 'text',            __webpack_require__(49) ],
		  [ 'newline',         __webpack_require__(50) ],
		  [ 'escape',          __webpack_require__(51) ],
		  [ 'backticks',       __webpack_require__(52) ],
		  [ 'strikethrough',   __webpack_require__(53).tokenize ],
		  [ 'emphasis',        __webpack_require__(54).tokenize ],
		  [ 'link',            __webpack_require__(55) ],
		  [ 'image',           __webpack_require__(56) ],
		  [ 'autolink',        __webpack_require__(57) ],
		  [ 'html_inline',     __webpack_require__(59) ],
		  [ 'entity',          __webpack_require__(60) ]
		];
	
		var _rules2 = [
		  [ 'balance_pairs',   __webpack_require__(61) ],
		  [ 'strikethrough',   __webpack_require__(53).postProcess ],
		  [ 'emphasis',        __webpack_require__(54).postProcess ],
		  [ 'text_collapse',   __webpack_require__(62) ]
		];
	
	
		/**
		 * new ParserInline()
		 **/
		function ParserInline() {
		  var i;
	
		  /**
		   * ParserInline#ruler -> Ruler
		   *
		   * [[Ruler]] instance. Keep configuration of inline rules.
		   **/
		  this.ruler = new Ruler();
	
		  for (i = 0; i < _rules.length; i++) {
		    this.ruler.push(_rules[i][0], _rules[i][1]);
		  }
	
		  /**
		   * ParserInline#ruler2 -> Ruler
		   *
		   * [[Ruler]] instance. Second ruler used for post-processing
		   * (e.g. in emphasis-like rules).
		   **/
		  this.ruler2 = new Ruler();
	
		  for (i = 0; i < _rules2.length; i++) {
		    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
		  }
		}
	
	
		// Skip single token by running all rules in validation mode;
		// returns `true` if any rule reported success
		//
		ParserInline.prototype.skipToken = function (state) {
		  var i, pos = state.pos,
		      rules = this.ruler.getRules(''),
		      len = rules.length,
		      maxNesting = state.md.options.maxNesting,
		      cache = state.cache;
	
	
		  if (typeof cache[pos] !== 'undefined') {
		    state.pos = cache[pos];
		    return;
		  }
	
		  /*istanbul ignore else*/
		  if (state.level < maxNesting) {
		    for (i = 0; i < len; i++) {
		      if (rules[i](state, true)) {
		        cache[pos] = state.pos;
		        return;
		      }
		    }
		  }
	
		  state.pos++;
		  cache[pos] = state.pos;
		};
	
	
		// Generate tokens for input range
		//
		ParserInline.prototype.tokenize = function (state) {
		  var ok, i,
		      rules = this.ruler.getRules(''),
		      len = rules.length,
		      end = state.posMax,
		      maxNesting = state.md.options.maxNesting;
	
		  while (state.pos < end) {
		    // Try all possible rules.
		    // On success, rule should:
		    //
		    // - update `state.pos`
		    // - update `state.tokens`
		    // - return true
	
		    if (state.level < maxNesting) {
		      for (i = 0; i < len; i++) {
		        ok = rules[i](state, false);
		        if (ok) { break; }
		      }
		    }
	
		    if (ok) {
		      if (state.pos >= end) { break; }
		      continue;
		    }
	
		    state.pending += state.src[state.pos++];
		  }
	
		  if (state.pending) {
		    state.pushPending();
		  }
		};
	
	
		/**
		 * ParserInline.parse(str, md, env, outTokens)
		 *
		 * Process input string and push inline tokens into `outTokens`
		 **/
		ParserInline.prototype.parse = function (str, md, env, outTokens) {
		  var i, rules, len;
		  var state = new this.State(str, md, env, outTokens);
	
		  this.tokenize(state);
	
		  rules = this.ruler2.getRules('');
		  len = rules.length;
	
		  for (i = 0; i < len; i++) {
		    rules[i](state);
		  }
		};
	
	
		ParserInline.prototype.State = __webpack_require__(63);
	
	
		module.exports = ParserInline;
	
	
	/***/ },
	/* 49 */
	/***/ function(module, exports) {
	
		// Skip text characters for text token, place those to pending buffer
		// and increment current pos
	
		'use strict';
	
	
		// Rule to skip pure text
		// '{}$%@~+=:' reserved for extentions
	
		// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
	
		// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
		// http://spec.commonmark.org/0.15/#ascii-punctuation-character
		function isTerminatorChar(ch) {
		  switch (ch) {
		    case 0x0A/* \n */:
		    case 0x21/* ! */:
		    case 0x23/* # */:
		    case 0x24/* $ */:
		    case 0x25/* % */:
		    case 0x26/* & */:
		    case 0x2A/* * */:
		    case 0x2B/* + */:
		    case 0x2D/* - */:
		    case 0x3A/* : */:
		    case 0x3C/* < */:
		    case 0x3D/* = */:
		    case 0x3E/* > */:
		    case 0x40/* @ */:
		    case 0x5B/* [ */:
		    case 0x5C/* \ */:
		    case 0x5D/* ] */:
		    case 0x5E/* ^ */:
		    case 0x5F/* _ */:
		    case 0x60/* ` */:
		    case 0x7B/* { */:
		    case 0x7D/* } */:
		    case 0x7E/* ~ */:
		      return true;
		    default:
		      return false;
		  }
		}
	
		module.exports = function text(state, silent) {
		  var pos = state.pos;
	
		  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
		    pos++;
		  }
	
		  if (pos === state.pos) { return false; }
	
		  if (!silent) { state.pending += state.src.slice(state.pos, pos); }
	
		  state.pos = pos;
	
		  return true;
		};
	
		// Alternative implementation, for memory.
		//
		// It costs 10% of performance, but allows extend terminators list, if place it
		// to `ParcerInline` property. Probably, will switch to it sometime, such
		// flexibility required.
	
		/*
		var TERMINATOR_RE = /[\n!#$%&*+\-:<=>@[\\\]^_`{}~]/;
	
		module.exports = function text(state, silent) {
		  var pos = state.pos,
		      idx = state.src.slice(pos).search(TERMINATOR_RE);
	
		  // first char is terminator -> empty text
		  if (idx === 0) { return false; }
	
		  // no terminator -> text till end of string
		  if (idx < 0) {
		    if (!silent) { state.pending += state.src.slice(pos); }
		    state.pos = state.src.length;
		    return true;
		  }
	
		  if (!silent) { state.pending += state.src.slice(pos, pos + idx); }
	
		  state.pos += idx;
	
		  return true;
		};*/
	
	
	/***/ },
	/* 50 */
	/***/ function(module, exports) {
	
		// Proceess '\n'
	
		'use strict';
	
		module.exports = function newline(state, silent) {
		  var pmax, max, pos = state.pos;
	
		  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }
	
		  pmax = state.pending.length - 1;
		  max = state.posMax;
	
		  // '  \n' -> hardbreak
		  // Lookup in pending chars is bad practice! Don't copy to other rules!
		  // Pending string is stored in concat mode, indexed lookups will cause
		  // convertion to flat mode.
		  if (!silent) {
		    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
		      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
		        state.pending = state.pending.replace(/ +$/, '');
		        state.push('hardbreak', 'br', 0);
		      } else {
		        state.pending = state.pending.slice(0, -1);
		        state.push('softbreak', 'br', 0);
		      }
	
		    } else {
		      state.push('softbreak', 'br', 0);
		    }
		  }
	
		  pos++;
	
		  // skip heading spaces for next line
		  while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }
	
		  state.pos = pos;
		  return true;
		};
	
	
	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Proceess escaped chars and hardbreaks
	
		'use strict';
	
		var isSpace = __webpack_require__(4).isSpace;
	
		var ESCAPED = [];
	
		for (var i = 0; i < 256; i++) { ESCAPED.push(0); }
	
		'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
		  .split('').forEach(function(ch) { ESCAPED[ch.charCodeAt(0)] = 1; });
	
	
		module.exports = function escape(state, silent) {
		  var ch, pos = state.pos, max = state.posMax;
	
		  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }
	
		  pos++;
	
		  if (pos < max) {
		    ch = state.src.charCodeAt(pos);
	
		    if (ch < 256 && ESCAPED[ch] !== 0) {
		      if (!silent) { state.pending += state.src[pos]; }
		      state.pos += 2;
		      return true;
		    }
	
		    if (ch === 0x0A) {
		      if (!silent) {
		        state.push('hardbreak', 'br', 0);
		      }
	
		      pos++;
		      // skip leading whitespaces from next line
		      while (pos < max) {
		        ch = state.src.charCodeAt(pos);
		        if (!isSpace(ch)) { break; }
		        pos++;
		      }
	
		      state.pos = pos;
		      return true;
		    }
		  }
	
		  if (!silent) { state.pending += '\\'; }
		  state.pos++;
		  return true;
		};
	
	
	/***/ },
	/* 52 */
	/***/ function(module, exports) {
	
		// Parse backticks
	
		'use strict';
	
		module.exports = function backtick(state, silent) {
		  var start, max, marker, matchStart, matchEnd, token,
		      pos = state.pos,
		      ch = state.src.charCodeAt(pos);
	
		  if (ch !== 0x60/* ` */) { return false; }
	
		  start = pos;
		  pos++;
		  max = state.posMax;
	
		  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }
	
		  marker = state.src.slice(start, pos);
	
		  matchStart = matchEnd = pos;
	
		  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
		    matchEnd = matchStart + 1;
	
		    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }
	
		    if (matchEnd - matchStart === marker.length) {
		      if (!silent) {
		        token         = state.push('code_inline', 'code', 0);
		        token.markup  = marker;
		        token.content = state.src.slice(pos, matchStart)
		                                 .replace(/[ \n]+/g, ' ')
		                                 .trim();
		      }
		      state.pos = matchEnd;
		      return true;
		    }
		  }
	
		  if (!silent) { state.pending += marker; }
		  state.pos += marker.length;
		  return true;
		};
	
	
	/***/ },
	/* 53 */
	/***/ function(module, exports) {
	
		// ~~strike through~~
		//
		'use strict';
	
	
		// Insert each marker as a separate text token, and add it to delimiter list
		//
		module.exports.tokenize = function strikethrough(state, silent) {
		  var i, scanned, token, len, ch,
		      start = state.pos,
		      marker = state.src.charCodeAt(start);
	
		  if (silent) { return false; }
	
		  if (marker !== 0x7E/* ~ */) { return false; }
	
		  scanned = state.scanDelims(state.pos, true);
		  len = scanned.length;
		  ch = String.fromCharCode(marker);
	
		  if (len < 2) { return false; }
	
		  if (len % 2) {
		    token         = state.push('text', '', 0);
		    token.content = ch;
		    len--;
		  }
	
		  for (i = 0; i < len; i += 2) {
		    token         = state.push('text', '', 0);
		    token.content = ch + ch;
	
		    state.delimiters.push({
		      marker: marker,
		      jump:   i,
		      token:  state.tokens.length - 1,
		      level:  state.level,
		      end:    -1,
		      open:   scanned.can_open,
		      close:  scanned.can_close
		    });
		  }
	
		  state.pos += scanned.length;
	
		  return true;
		};
	
	
		// Walk through delimiter list and replace text tokens with tags
		//
		module.exports.postProcess = function strikethrough(state) {
		  var i, j,
		      startDelim,
		      endDelim,
		      token,
		      loneMarkers = [],
		      delimiters = state.delimiters,
		      max = state.delimiters.length;
	
		  for (i = 0; i < max; i++) {
		    startDelim = delimiters[i];
	
		    if (startDelim.marker !== 0x7E/* ~ */) {
		      continue;
		    }
	
		    if (startDelim.end === -1) {
		      continue;
		    }
	
		    endDelim = delimiters[startDelim.end];
	
		    token         = state.tokens[startDelim.token];
		    token.type    = 's_open';
		    token.tag     = 's';
		    token.nesting = 1;
		    token.markup  = '~~';
		    token.content = '';
	
		    token         = state.tokens[endDelim.token];
		    token.type    = 's_close';
		    token.tag     = 's';
		    token.nesting = -1;
		    token.markup  = '~~';
		    token.content = '';
	
		    if (state.tokens[endDelim.token - 1].type === 'text' &&
		        state.tokens[endDelim.token - 1].content === '~') {
	
		      loneMarkers.push(endDelim.token - 1);
		    }
		  }
	
		  // If a marker sequence has an odd number of characters, it's splitted
		  // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
		  // start of the sequence.
		  //
		  // So, we have to move all those markers after subsequent s_close tags.
		  //
		  while (loneMarkers.length) {
		    i = loneMarkers.pop();
		    j = i + 1;
	
		    while (j < state.tokens.length && state.tokens[j].type === 's_close') {
		      j++;
		    }
	
		    j--;
	
		    if (i !== j) {
		      token = state.tokens[j];
		      state.tokens[j] = state.tokens[i];
		      state.tokens[i] = token;
		    }
		  }
		};
	
	
	/***/ },
	/* 54 */
	/***/ function(module, exports) {
	
		// Process *this* and _that_
		//
		'use strict';
	
	
		// Insert each marker as a separate text token, and add it to delimiter list
		//
		module.exports.tokenize = function emphasis(state, silent) {
		  var i, scanned, token,
		      start = state.pos,
		      marker = state.src.charCodeAt(start);
	
		  if (silent) { return false; }
	
		  if (marker !== 0x5F /* _ */ && marker !== 0x2A /* * */) { return false; }
	
		  scanned = state.scanDelims(state.pos, marker === 0x2A);
	
		  for (i = 0; i < scanned.length; i++) {
		    token         = state.push('text', '', 0);
		    token.content = String.fromCharCode(marker);
	
		    state.delimiters.push({
		      // Char code of the starting marker (number).
		      //
		      marker: marker,
	
		      // An amount of characters before this one that's equivalent to
		      // current one. In plain English: if this delimiter does not open
		      // an emphasis, neither do previous `jump` characters.
		      //
		      // Used to skip sequences like "*****" in one step, for 1st asterisk
		      // value will be 0, for 2nd it's 1 and so on.
		      //
		      jump:   i,
	
		      // A position of the token this delimiter corresponds to.
		      //
		      token:  state.tokens.length - 1,
	
		      // Token level.
		      //
		      level:  state.level,
	
		      // If this delimiter is matched as a valid opener, `end` will be
		      // equal to its position, otherwise it's `-1`.
		      //
		      end:    -1,
	
		      // Boolean flags that determine if this delimiter could open or close
		      // an emphasis.
		      //
		      open:   scanned.can_open,
		      close:  scanned.can_close
		    });
		  }
	
		  state.pos += scanned.length;
	
		  return true;
		};
	
	
		// Walk through delimiter list and replace text tokens with tags
		//
		module.exports.postProcess = function emphasis(state) {
		  var i,
		      startDelim,
		      endDelim,
		      token,
		      ch,
		      isStrong,
		      delimiters = state.delimiters,
		      max = state.delimiters.length;
	
		  for (i = 0; i < max; i++) {
		    startDelim = delimiters[i];
	
		    if (startDelim.marker !== 0x5F/* _ */ && startDelim.marker !== 0x2A/* * */) {
		      continue;
		    }
	
		    // Process only opening markers
		    if (startDelim.end === -1) {
		      continue;
		    }
	
		    endDelim = delimiters[startDelim.end];
	
		    // If the next delimiter has the same marker and is adjacent to this one,
		    // merge those into one strong delimiter.
		    //
		    // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
		    //
		    isStrong = i + 1 < max &&
		               delimiters[i + 1].end === startDelim.end - 1 &&
		               delimiters[i + 1].token === startDelim.token + 1 &&
		               delimiters[startDelim.end - 1].token === endDelim.token - 1 &&
		               delimiters[i + 1].marker === startDelim.marker;
	
		    ch = String.fromCharCode(startDelim.marker);
	
		    token         = state.tokens[startDelim.token];
		    token.type    = isStrong ? 'strong_open' : 'em_open';
		    token.tag     = isStrong ? 'strong' : 'em';
		    token.nesting = 1;
		    token.markup  = isStrong ? ch + ch : ch;
		    token.content = '';
	
		    token         = state.tokens[endDelim.token];
		    token.type    = isStrong ? 'strong_close' : 'em_close';
		    token.tag     = isStrong ? 'strong' : 'em';
		    token.nesting = -1;
		    token.markup  = isStrong ? ch + ch : ch;
		    token.content = '';
	
		    if (isStrong) {
		      state.tokens[delimiters[i + 1].token].content = '';
		      state.tokens[delimiters[startDelim.end - 1].token].content = '';
		      i++;
		    }
		  }
		};
	
	
	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Process [link](<to> "stuff")
	
		'use strict';
	
		var parseLinkLabel       = __webpack_require__(19);
		var parseLinkDestination = __webpack_require__(20);
		var parseLinkTitle       = __webpack_require__(21);
		var normalizeReference   = __webpack_require__(4).normalizeReference;
		var isSpace              = __webpack_require__(4).isSpace;
	
	
		module.exports = function link(state, silent) {
		  var attrs,
		      code,
		      label,
		      labelEnd,
		      labelStart,
		      pos,
		      res,
		      ref,
		      title,
		      token,
		      href = '',
		      oldPos = state.pos,
		      max = state.posMax,
		      start = state.pos;
	
		  if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) { return false; }
	
		  labelStart = state.pos + 1;
		  labelEnd = parseLinkLabel(state, state.pos, true);
	
		  // parser failed to find ']', so it's not a valid link
		  if (labelEnd < 0) { return false; }
	
		  pos = labelEnd + 1;
		  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
		    //
		    // Inline link
		    //
	
		    // [link](  <href>  "title"  )
		    //        ^^ skipping these spaces
		    pos++;
		    for (; pos < max; pos++) {
		      code = state.src.charCodeAt(pos);
		      if (!isSpace(code) && code !== 0x0A) { break; }
		    }
		    if (pos >= max) { return false; }
	
		    // [link](  <href>  "title"  )
		    //          ^^^^^^ parsing link destination
		    start = pos;
		    res = parseLinkDestination(state.src, pos, state.posMax);
		    if (res.ok) {
		      href = state.md.normalizeLink(res.str);
		      if (state.md.validateLink(href)) {
		        pos = res.pos;
		      } else {
		        href = '';
		      }
		    }
	
		    // [link](  <href>  "title"  )
		    //                ^^ skipping these spaces
		    start = pos;
		    for (; pos < max; pos++) {
		      code = state.src.charCodeAt(pos);
		      if (!isSpace(code) && code !== 0x0A) { break; }
		    }
	
		    // [link](  <href>  "title"  )
		    //                  ^^^^^^^ parsing link title
		    res = parseLinkTitle(state.src, pos, state.posMax);
		    if (pos < max && start !== pos && res.ok) {
		      title = res.str;
		      pos = res.pos;
	
		      // [link](  <href>  "title"  )
		      //                         ^^ skipping these spaces
		      for (; pos < max; pos++) {
		        code = state.src.charCodeAt(pos);
		        if (!isSpace(code) && code !== 0x0A) { break; }
		      }
		    } else {
		      title = '';
		    }
	
		    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
		      state.pos = oldPos;
		      return false;
		    }
		    pos++;
		  } else {
		    //
		    // Link reference
		    //
		    if (typeof state.env.references === 'undefined') { return false; }
	
		    // [foo]  [bar]
		    //      ^^ optional whitespace (can include newlines)
		    for (; pos < max; pos++) {
		      code = state.src.charCodeAt(pos);
		      if (!isSpace(code) && code !== 0x0A) { break; }
		    }
	
		    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
		      start = pos + 1;
		      pos = parseLinkLabel(state, pos);
		      if (pos >= 0) {
		        label = state.src.slice(start, pos++);
		      } else {
		        pos = labelEnd + 1;
		      }
		    } else {
		      pos = labelEnd + 1;
		    }
	
		    // covers label === '' and label === undefined
		    // (collapsed reference link and shortcut reference link respectively)
		    if (!label) { label = state.src.slice(labelStart, labelEnd); }
	
		    ref = state.env.references[normalizeReference(label)];
		    if (!ref) {
		      state.pos = oldPos;
		      return false;
		    }
		    href = ref.href;
		    title = ref.title;
		  }
	
		  //
		  // We found the end of the link, and know for a fact it's a valid link;
		  // so all that's left to do is to call tokenizer.
		  //
		  if (!silent) {
		    state.pos = labelStart;
		    state.posMax = labelEnd;
	
		    token        = state.push('link_open', 'a', 1);
		    token.attrs  = attrs = [ [ 'href', href ] ];
		    if (title) {
		      attrs.push([ 'title', title ]);
		    }
	
		    state.md.inline.tokenize(state);
	
		    token        = state.push('link_close', 'a', -1);
		  }
	
		  state.pos = pos;
		  state.posMax = max;
		  return true;
		};
	
	
	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Process ![image](<src> "title")
	
		'use strict';
	
		var parseLinkLabel       = __webpack_require__(19);
		var parseLinkDestination = __webpack_require__(20);
		var parseLinkTitle       = __webpack_require__(21);
		var normalizeReference   = __webpack_require__(4).normalizeReference;
		var isSpace              = __webpack_require__(4).isSpace;
	
	
		module.exports = function image(state, silent) {
		  var attrs,
		      code,
		      label,
		      labelEnd,
		      labelStart,
		      pos,
		      ref,
		      res,
		      title,
		      token,
		      tokens,
		      start,
		      href = '',
		      oldPos = state.pos,
		      max = state.posMax;
	
		  if (state.src.charCodeAt(state.pos) !== 0x21/* ! */) { return false; }
		  if (state.src.charCodeAt(state.pos + 1) !== 0x5B/* [ */) { return false; }
	
		  labelStart = state.pos + 2;
		  labelEnd = parseLinkLabel(state, state.pos + 1, false);
	
		  // parser failed to find ']', so it's not a valid link
		  if (labelEnd < 0) { return false; }
	
		  pos = labelEnd + 1;
		  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
		    //
		    // Inline link
		    //
	
		    // [link](  <href>  "title"  )
		    //        ^^ skipping these spaces
		    pos++;
		    for (; pos < max; pos++) {
		      code = state.src.charCodeAt(pos);
		      if (!isSpace(code) && code !== 0x0A) { break; }
		    }
		    if (pos >= max) { return false; }
	
		    // [link](  <href>  "title"  )
		    //          ^^^^^^ parsing link destination
		    start = pos;
		    res = parseLinkDestination(state.src, pos, state.posMax);
		    if (res.ok) {
		      href = state.md.normalizeLink(res.str);
		      if (state.md.validateLink(href)) {
		        pos = res.pos;
		      } else {
		        href = '';
		      }
		    }
	
		    // [link](  <href>  "title"  )
		    //                ^^ skipping these spaces
		    start = pos;
		    for (; pos < max; pos++) {
		      code = state.src.charCodeAt(pos);
		      if (!isSpace(code) && code !== 0x0A) { break; }
		    }
	
		    // [link](  <href>  "title"  )
		    //                  ^^^^^^^ parsing link title
		    res = parseLinkTitle(state.src, pos, state.posMax);
		    if (pos < max && start !== pos && res.ok) {
		      title = res.str;
		      pos = res.pos;
	
		      // [link](  <href>  "title"  )
		      //                         ^^ skipping these spaces
		      for (; pos < max; pos++) {
		        code = state.src.charCodeAt(pos);
		        if (!isSpace(code) && code !== 0x0A) { break; }
		      }
		    } else {
		      title = '';
		    }
	
		    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
		      state.pos = oldPos;
		      return false;
		    }
		    pos++;
		  } else {
		    //
		    // Link reference
		    //
		    if (typeof state.env.references === 'undefined') { return false; }
	
		    // [foo]  [bar]
		    //      ^^ optional whitespace (can include newlines)
		    for (; pos < max; pos++) {
		      code = state.src.charCodeAt(pos);
		      if (!isSpace(code) && code !== 0x0A) { break; }
		    }
	
		    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
		      start = pos + 1;
		      pos = parseLinkLabel(state, pos);
		      if (pos >= 0) {
		        label = state.src.slice(start, pos++);
		      } else {
		        pos = labelEnd + 1;
		      }
		    } else {
		      pos = labelEnd + 1;
		    }
	
		    // covers label === '' and label === undefined
		    // (collapsed reference link and shortcut reference link respectively)
		    if (!label) { label = state.src.slice(labelStart, labelEnd); }
	
		    ref = state.env.references[normalizeReference(label)];
		    if (!ref) {
		      state.pos = oldPos;
		      return false;
		    }
		    href = ref.href;
		    title = ref.title;
		  }
	
		  //
		  // We found the end of the link, and know for a fact it's a valid link;
		  // so all that's left to do is to call tokenizer.
		  //
		  if (!silent) {
		    state.md.inline.parse(
		      state.src.slice(labelStart, labelEnd),
		      state.md,
		      state.env,
		      tokens = []
		    );
	
		    token          = state.push('image', 'img', 0);
		    token.attrs    = attrs = [ [ 'src', href ], [ 'alt', '' ] ];
		    token.children = tokens;
		    if (title) {
		      attrs.push([ 'title', title ]);
		    }
		  }
	
		  state.pos = pos;
		  state.posMax = max;
		  return true;
		};
	
	
	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Process autolinks '<protocol:...>'
	
		'use strict';
	
		var url_schemas = __webpack_require__(58);
	
	
		/*eslint max-len:0*/
		var EMAIL_RE    = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
		var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
	
	
		module.exports = function autolink(state, silent) {
		  var tail, linkMatch, emailMatch, url, fullUrl, token,
		      pos = state.pos;
	
		  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }
	
		  tail = state.src.slice(pos);
	
		  if (tail.indexOf('>') < 0) { return false; }
	
		  if (AUTOLINK_RE.test(tail)) {
		    linkMatch = tail.match(AUTOLINK_RE);
	
		    if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) { return false; }
	
		    url = linkMatch[0].slice(1, -1);
		    fullUrl = state.md.normalizeLink(url);
		    if (!state.md.validateLink(fullUrl)) { return false; }
	
		    if (!silent) {
		      token         = state.push('link_open', 'a', 1);
		      token.attrs   = [ [ 'href', fullUrl ] ];
		      token.markup  = 'autolink';
		      token.info    = 'auto';
	
		      token         = state.push('text', '', 0);
		      token.content = state.md.normalizeLinkText(url);
	
		      token         = state.push('link_close', 'a', -1);
		      token.markup  = 'autolink';
		      token.info    = 'auto';
		    }
	
		    state.pos += linkMatch[0].length;
		    return true;
		  }
	
		  if (EMAIL_RE.test(tail)) {
		    emailMatch = tail.match(EMAIL_RE);
	
		    url = emailMatch[0].slice(1, -1);
		    fullUrl = state.md.normalizeLink('mailto:' + url);
		    if (!state.md.validateLink(fullUrl)) { return false; }
	
		    if (!silent) {
		      token         = state.push('link_open', 'a', 1);
		      token.attrs   = [ [ 'href', fullUrl ] ];
		      token.markup  = 'autolink';
		      token.info    = 'auto';
	
		      token         = state.push('text', '', 0);
		      token.content = state.md.normalizeLinkText(url);
	
		      token         = state.push('link_close', 'a', -1);
		      token.markup  = 'autolink';
		      token.info    = 'auto';
		    }
	
		    state.pos += emailMatch[0].length;
		    return true;
		  }
	
		  return false;
		};
	
	
	/***/ },
	/* 58 */
	/***/ function(module, exports) {
	
		// List of valid url schemas, accorting to commonmark spec
		// http://jgm.github.io/CommonMark/spec.html#autolinks
	
		'use strict';
	
	
		module.exports = [
		  'coap',
		  'doi',
		  'javascript',
		  'aaa',
		  'aaas',
		  'about',
		  'acap',
		  'cap',
		  'cid',
		  'crid',
		  'data',
		  'dav',
		  'dict',
		  'dns',
		  'file',
		  'ftp',
		  'geo',
		  'go',
		  'gopher',
		  'h323',
		  'http',
		  'https',
		  'iax',
		  'icap',
		  'im',
		  'imap',
		  'info',
		  'ipp',
		  'iris',
		  'iris.beep',
		  'iris.xpc',
		  'iris.xpcs',
		  'iris.lwz',
		  'ldap',
		  'mailto',
		  'mid',
		  'msrp',
		  'msrps',
		  'mtqp',
		  'mupdate',
		  'news',
		  'nfs',
		  'ni',
		  'nih',
		  'nntp',
		  'opaquelocktoken',
		  'pop',
		  'pres',
		  'rtsp',
		  'service',
		  'session',
		  'shttp',
		  'sieve',
		  'sip',
		  'sips',
		  'sms',
		  'snmp',
		  'soap.beep',
		  'soap.beeps',
		  'tag',
		  'tel',
		  'telnet',
		  'tftp',
		  'thismessage',
		  'tn3270',
		  'tip',
		  'tv',
		  'urn',
		  'vemmi',
		  'ws',
		  'wss',
		  'xcon',
		  'xcon-userid',
		  'xmlrpc.beep',
		  'xmlrpc.beeps',
		  'xmpp',
		  'z39.50r',
		  'z39.50s',
		  'adiumxtra',
		  'afp',
		  'afs',
		  'aim',
		  'apt',
		  'attachment',
		  'aw',
		  'beshare',
		  'bitcoin',
		  'bolo',
		  'callto',
		  'chrome',
		  'chrome-extension',
		  'com-eventbrite-attendee',
		  'content',
		  'cvs',
		  'dlna-playsingle',
		  'dlna-playcontainer',
		  'dtn',
		  'dvb',
		  'ed2k',
		  'facetime',
		  'feed',
		  'finger',
		  'fish',
		  'gg',
		  'git',
		  'gizmoproject',
		  'gtalk',
		  'hcp',
		  'icon',
		  'ipn',
		  'irc',
		  'irc6',
		  'ircs',
		  'itms',
		  'jar',
		  'jms',
		  'keyparc',
		  'lastfm',
		  'ldaps',
		  'magnet',
		  'maps',
		  'market',
		  'message',
		  'mms',
		  'ms-help',
		  'msnim',
		  'mumble',
		  'mvn',
		  'notes',
		  'oid',
		  'palm',
		  'paparazzi',
		  'platform',
		  'proxy',
		  'psyc',
		  'query',
		  'res',
		  'resource',
		  'rmi',
		  'rsync',
		  'rtmp',
		  'secondlife',
		  'sftp',
		  'sgn',
		  'skype',
		  'smb',
		  'soldat',
		  'spotify',
		  'ssh',
		  'steam',
		  'svn',
		  'teamspeak',
		  'things',
		  'udp',
		  'unreal',
		  'ut2004',
		  'ventrilo',
		  'view-source',
		  'webcal',
		  'wtai',
		  'wyciwyg',
		  'xfire',
		  'xri',
		  'ymsgr'
		];
	
	
	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Process html tags
	
		'use strict';
	
	
		var HTML_TAG_RE = __webpack_require__(45).HTML_TAG_RE;
	
	
		function isLetter(ch) {
		  /*eslint no-bitwise:0*/
		  var lc = ch | 0x20; // to lower case
		  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
		}
	
	
		module.exports = function html_inline(state, silent) {
		  var ch, match, max, token,
		      pos = state.pos;
	
		  if (!state.md.options.html) { return false; }
	
		  // Check start
		  max = state.posMax;
		  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
		      pos + 2 >= max) {
		    return false;
		  }
	
		  // Quick fail on second char
		  ch = state.src.charCodeAt(pos + 1);
		  if (ch !== 0x21/* ! */ &&
		      ch !== 0x3F/* ? */ &&
		      ch !== 0x2F/* / */ &&
		      !isLetter(ch)) {
		    return false;
		  }
	
		  match = state.src.slice(pos).match(HTML_TAG_RE);
		  if (!match) { return false; }
	
		  if (!silent) {
		    token         = state.push('html_inline', '', 0);
		    token.content = state.src.slice(pos, pos + match[0].length);
		  }
		  state.pos += match[0].length;
		  return true;
		};
	
	
	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Process html entity - &#123;, &#xAF;, &quot;, ...
	
		'use strict';
	
		var entities          = __webpack_require__(5);
		var has               = __webpack_require__(4).has;
		var isValidEntityCode = __webpack_require__(4).isValidEntityCode;
		var fromCodePoint     = __webpack_require__(4).fromCodePoint;
	
	
		var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
		var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;
	
	
		module.exports = function entity(state, silent) {
		  var ch, code, match, pos = state.pos, max = state.posMax;
	
		  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }
	
		  if (pos + 1 < max) {
		    ch = state.src.charCodeAt(pos + 1);
	
		    if (ch === 0x23 /* # */) {
		      match = state.src.slice(pos).match(DIGITAL_RE);
		      if (match) {
		        if (!silent) {
		          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
		          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
		        }
		        state.pos += match[0].length;
		        return true;
		      }
		    } else {
		      match = state.src.slice(pos).match(NAMED_RE);
		      if (match) {
		        if (has(entities, match[1])) {
		          if (!silent) { state.pending += entities[match[1]]; }
		          state.pos += match[0].length;
		          return true;
		        }
		      }
		    }
		  }
	
		  if (!silent) { state.pending += '&'; }
		  state.pos++;
		  return true;
		};
	
	
	/***/ },
	/* 61 */
	/***/ function(module, exports) {
	
		// For each opening emphasis-like marker find a matching closing one
		//
		'use strict';
	
	
		module.exports = function link_pairs(state) {
		  var i, j, lastDelim, currDelim,
		      delimiters = state.delimiters,
		      max = state.delimiters.length;
	
		  for (i = 0; i < max; i++) {
		    lastDelim = delimiters[i];
	
		    if (!lastDelim.close) { continue; }
	
		    j = i - lastDelim.jump - 1;
	
		    while (j >= 0) {
		      currDelim = delimiters[j];
	
		      if (currDelim.open &&
		          currDelim.marker === lastDelim.marker &&
		          currDelim.end < 0 &&
		          currDelim.level === lastDelim.level) {
	
		        lastDelim.jump = i - j;
		        lastDelim.open = false;
		        currDelim.end  = i;
		        currDelim.jump = 0;
		        break;
		      }
	
		      j -= currDelim.jump + 1;
		    }
		  }
		};
	
	
	/***/ },
	/* 62 */
	/***/ function(module, exports) {
	
		// Merge adjacent text nodes into one, and re-calculate all token levels
		//
		'use strict';
	
	
		module.exports = function text_collapse(state) {
		  var curr, last,
		      level = 0,
		      tokens = state.tokens,
		      max = state.tokens.length;
	
		  for (curr = last = 0; curr < max; curr++) {
		    // re-calculate levels
		    level += tokens[curr].nesting;
		    tokens[curr].level = level;
	
		    if (tokens[curr].type === 'text' &&
		        curr + 1 < max &&
		        tokens[curr + 1].type === 'text') {
	
		      // collapse two adjacent text nodes
		      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
		    } else {
		      if (curr !== last) { tokens[last] = tokens[curr]; }
	
		      last++;
		    }
		  }
	
		  if (curr !== last) {
		    tokens.length = last;
		  }
		};
	
	
	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Inline parser state
	
		'use strict';
	
	
		var Token          = __webpack_require__(32);
		var isWhiteSpace   = __webpack_require__(4).isWhiteSpace;
		var isPunctChar    = __webpack_require__(4).isPunctChar;
		var isMdAsciiPunct = __webpack_require__(4).isMdAsciiPunct;
	
	
		function StateInline(src, md, env, outTokens) {
		  this.src = src;
		  this.env = env;
		  this.md = md;
		  this.tokens = outTokens;
	
		  this.pos = 0;
		  this.posMax = this.src.length;
		  this.level = 0;
		  this.pending = '';
		  this.pendingLevel = 0;
	
		  this.cache = {};        // Stores { start: end } pairs. Useful for backtrack
		                          // optimization of pairs parse (emphasis, strikes).
	
		  this.delimiters = [];   // Emphasis-like delimiters
		}
	
	
		// Flush pending text
		//
		StateInline.prototype.pushPending = function () {
		  var token = new Token('text', '', 0);
		  token.content = this.pending;
		  token.level = this.pendingLevel;
		  this.tokens.push(token);
		  this.pending = '';
		  return token;
		};
	
	
		// Push new token to "stream".
		// If pending text exists - flush it as text token
		//
		StateInline.prototype.push = function (type, tag, nesting) {
		  if (this.pending) {
		    this.pushPending();
		  }
	
		  var token = new Token(type, tag, nesting);
	
		  if (nesting < 0) { this.level--; }
		  token.level = this.level;
		  if (nesting > 0) { this.level++; }
	
		  this.pendingLevel = this.level;
		  this.tokens.push(token);
		  return token;
		};
	
	
		// Scan a sequence of emphasis-like markers, and determine whether
		// it can start an emphasis sequence or end an emphasis sequence.
		//
		//  - start - position to scan from (it should point at a valid marker);
		//  - canSplitWord - determine if these markers can be found inside a word
		//
		StateInline.prototype.scanDelims = function (start, canSplitWord) {
		  var pos = start, lastChar, nextChar, count, can_open, can_close,
		      isLastWhiteSpace, isLastPunctChar,
		      isNextWhiteSpace, isNextPunctChar,
		      left_flanking = true,
		      right_flanking = true,
		      max = this.posMax,
		      marker = this.src.charCodeAt(start);
	
		  // treat beginning of the line as a whitespace
		  lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20;
	
		  while (pos < max && this.src.charCodeAt(pos) === marker) { pos++; }
	
		  count = pos - start;
	
		  // treat end of the line as a whitespace
		  nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20;
	
		  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
		  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
	
		  isLastWhiteSpace = isWhiteSpace(lastChar);
		  isNextWhiteSpace = isWhiteSpace(nextChar);
	
		  if (isNextWhiteSpace) {
		    left_flanking = false;
		  } else if (isNextPunctChar) {
		    if (!(isLastWhiteSpace || isLastPunctChar)) {
		      left_flanking = false;
		    }
		  }
	
		  if (isLastWhiteSpace) {
		    right_flanking = false;
		  } else if (isLastPunctChar) {
		    if (!(isNextWhiteSpace || isNextPunctChar)) {
		      right_flanking = false;
		    }
		  }
	
		  if (!canSplitWord) {
		    can_open  = left_flanking  && (!right_flanking || isLastPunctChar);
		    can_close = right_flanking && (!left_flanking  || isNextPunctChar);
		  } else {
		    can_open  = left_flanking;
		    can_close = right_flanking;
		  }
	
		  return {
		    can_open:  can_open,
		    can_close: can_close,
		    length:    count
		  };
		};
	
	
		// re-export Token class to use in block rules
		StateInline.prototype.Token = Token;
	
	
		module.exports = StateInline;
	
	
	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
	
		////////////////////////////////////////////////////////////////////////////////
		// Helpers
	
		// Merge objects
		//
		function assign(obj /*from1, from2, from3, ...*/) {
		  var sources = Array.prototype.slice.call(arguments, 1);
	
		  sources.forEach(function (source) {
		    if (!source) { return; }
	
		    Object.keys(source).forEach(function (key) {
		      obj[key] = source[key];
		    });
		  });
	
		  return obj;
		}
	
		function _class(obj) { return Object.prototype.toString.call(obj); }
		function isString(obj) { return _class(obj) === '[object String]'; }
		function isObject(obj) { return _class(obj) === '[object Object]'; }
		function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
		function isFunction(obj) { return _class(obj) === '[object Function]'; }
	
	
		function escapeRE (str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }
	
		////////////////////////////////////////////////////////////////////////////////
	
	
		var defaultOptions = {
		  fuzzyLink: true,
		  fuzzyEmail: true,
		  fuzzyIP: false
		};
	
	
		function isOptionsObj(obj) {
		  return Object.keys(obj || {}).reduce(function (acc, k) {
		    return acc || defaultOptions.hasOwnProperty(k);
		  }, false);
		}
	
	
		var defaultSchemas = {
		  'http:': {
		    validate: function (text, pos, self) {
		      var tail = text.slice(pos);
	
		      if (!self.re.http) {
		        // compile lazily, because "host"-containing variables can change on tlds update.
		        self.re.http =  new RegExp(
		          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
		        );
		      }
		      if (self.re.http.test(tail)) {
		        return tail.match(self.re.http)[0].length;
		      }
		      return 0;
		    }
		  },
		  'https:':  'http:',
		  'ftp:':    'http:',
		  '//':      {
		    validate: function (text, pos, self) {
		      var tail = text.slice(pos);
	
		      if (!self.re.no_http) {
		      // compile lazily, becayse "host"-containing variables can change on tlds update.
		        self.re.no_http =  new RegExp(
		          '^' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
		        );
		      }
	
		      if (self.re.no_http.test(tail)) {
		        // should not be `://`, that protects from errors in protocol name
		        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
		        return tail.match(self.re.no_http)[0].length;
		      }
		      return 0;
		    }
		  },
		  'mailto:': {
		    validate: function (text, pos, self) {
		      var tail = text.slice(pos);
	
		      if (!self.re.mailto) {
		        self.re.mailto =  new RegExp(
		          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
		        );
		      }
		      if (self.re.mailto.test(tail)) {
		        return tail.match(self.re.mailto)[0].length;
		      }
		      return 0;
		    }
		  }
		};
	
		/*eslint-disable max-len*/
	
		// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
		var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';
	
		// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
		var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');
	
		/*eslint-enable max-len*/
	
		////////////////////////////////////////////////////////////////////////////////
	
		function resetScanCache(self) {
		  self.__index__ = -1;
		  self.__text_cache__   = '';
		}
	
		function createValidator(re) {
		  return function (text, pos) {
		    var tail = text.slice(pos);
	
		    if (re.test(tail)) {
		      return tail.match(re)[0].length;
		    }
		    return 0;
		  };
		}
	
		function createNormalizer() {
		  return function (match, self) {
		    self.normalize(match);
		  };
		}
	
		// Schemas compiler. Build regexps.
		//
		function compile(self) {
	
		  // Load & clone RE patterns.
		  var re = self.re = assign({}, __webpack_require__(65));
	
		  // Define dynamic patterns
		  var tlds = self.__tlds__.slice();
	
		  if (!self.__tlds_replaced__) {
		    tlds.push(tlds_2ch_src_re);
		  }
		  tlds.push(re.src_xn);
	
		  re.src_tlds = tlds.join('|');
	
		  function untpl(tpl) { return tpl.replace('%TLDS%', re.src_tlds); }
	
		  re.email_fuzzy      = RegExp(untpl(re.tpl_email_fuzzy), 'i');
		  re.link_fuzzy       = RegExp(untpl(re.tpl_link_fuzzy), 'i');
		  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
		  re.host_fuzzy_test  = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');
	
		  //
		  // Compile each schema
		  //
	
		  var aliases = [];
	
		  self.__compiled__ = {}; // Reset compiled data
	
		  function schemaError(name, val) {
		    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
		  }
	
		  Object.keys(self.__schemas__).forEach(function (name) {
		    var val = self.__schemas__[name];
	
		    // skip disabled methods
		    if (val === null) { return; }
	
		    var compiled = { validate: null, link: null };
	
		    self.__compiled__[name] = compiled;
	
		    if (isObject(val)) {
		      if (isRegExp(val.validate)) {
		        compiled.validate = createValidator(val.validate);
		      } else if (isFunction(val.validate)) {
		        compiled.validate = val.validate;
		      } else {
		        schemaError(name, val);
		      }
	
		      if (isFunction(val.normalize)) {
		        compiled.normalize = val.normalize;
		      } else if (!val.normalize) {
		        compiled.normalize = createNormalizer();
		      } else {
		        schemaError(name, val);
		      }
	
		      return;
		    }
	
		    if (isString(val)) {
		      aliases.push(name);
		      return;
		    }
	
		    schemaError(name, val);
		  });
	
		  //
		  // Compile postponed aliases
		  //
	
		  aliases.forEach(function (alias) {
		    if (!self.__compiled__[self.__schemas__[alias]]) {
		      // Silently fail on missed schemas to avoid errons on disable.
		      // schemaError(alias, self.__schemas__[alias]);
		      return;
		    }
	
		    self.__compiled__[alias].validate =
		      self.__compiled__[self.__schemas__[alias]].validate;
		    self.__compiled__[alias].normalize =
		      self.__compiled__[self.__schemas__[alias]].normalize;
		  });
	
		  //
		  // Fake record for guessed links
		  //
		  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };
	
		  //
		  // Build schema condition
		  //
		  var slist = Object.keys(self.__compiled__)
		                      .filter(function(name) {
		                        // Filter disabled & fake schemas
		                        return name.length > 0 && self.__compiled__[name];
		                      })
		                      .map(escapeRE)
		                      .join('|');
		  // (?!_) cause 1.5x slowdown
		  self.re.schema_test   = RegExp('(^|(?!_)(?:>|' + re.src_ZPCc + '))(' + slist + ')', 'i');
		  self.re.schema_search = RegExp('(^|(?!_)(?:>|' + re.src_ZPCc + '))(' + slist + ')', 'ig');
	
		  self.re.pretest       = RegExp(
		                            '(' + self.re.schema_test.source + ')|' +
		                            '(' + self.re.host_fuzzy_test.source + ')|' +
		                            '@',
		                            'i');
	
		  //
		  // Cleanup
		  //
	
		  resetScanCache(self);
		}
	
		/**
		 * class Match
		 *
		 * Match result. Single element of array, returned by [[LinkifyIt#match]]
		 **/
		function Match(self, shift) {
		  var start = self.__index__,
		      end   = self.__last_index__,
		      text  = self.__text_cache__.slice(start, end);
	
		  /**
		   * Match#schema -> String
		   *
		   * Prefix (protocol) for matched string.
		   **/
		  this.schema    = self.__schema__.toLowerCase();
		  /**
		   * Match#index -> Number
		   *
		   * First position of matched string.
		   **/
		  this.index     = start + shift;
		  /**
		   * Match#lastIndex -> Number
		   *
		   * Next position after matched string.
		   **/
		  this.lastIndex = end + shift;
		  /**
		   * Match#raw -> String
		   *
		   * Matched string.
		   **/
		  this.raw       = text;
		  /**
		   * Match#text -> String
		   *
		   * Notmalized text of matched string.
		   **/
		  this.text      = text;
		  /**
		   * Match#url -> String
		   *
		   * Normalized url of matched string.
		   **/
		  this.url       = text;
		}
	
		function createMatch(self, shift) {
		  var match = new Match(self, shift);
	
		  self.__compiled__[match.schema].normalize(match, self);
	
		  return match;
		}
	
	
		/**
		 * class LinkifyIt
		 **/
	
		/**
		 * new LinkifyIt(schemas, options)
		 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
		 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
		 *
		 * Creates new linkifier instance with optional additional schemas.
		 * Can be called without `new` keyword for convenience.
		 *
		 * By default understands:
		 *
		 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
		 * - "fuzzy" links and emails (example.com, foo@bar.com).
		 *
		 * `schemas` is an object, where each key/value describes protocol/rule:
		 *
		 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
		 *   for example). `linkify-it` makes shure that prefix is not preceeded with
		 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
		 * - __value__ - rule to check tail after link prefix
		 *   - _String_ - just alias to existing rule
		 *   - _Object_
		 *     - _validate_ - validator function (should return matched length on success),
		 *       or `RegExp`.
		 *     - _normalize_ - optional function to normalize text & url of matched result
		 *       (for example, for @twitter mentions).
		 *
		 * `options`:
		 *
		 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
		 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
		 *   like version numbers. Default `false`.
		 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
		 *
		 **/
		function LinkifyIt(schemas, options) {
		  if (!(this instanceof LinkifyIt)) {
		    return new LinkifyIt(schemas, options);
		  }
	
		  if (!options) {
		    if (isOptionsObj(schemas)) {
		      options = schemas;
		      schemas = {};
		    }
		  }
	
		  this.__opts__           = assign({}, defaultOptions, options);
	
		  // Cache last tested result. Used to skip repeating steps on next `match` call.
		  this.__index__          = -1;
		  this.__last_index__     = -1; // Next scan position
		  this.__schema__         = '';
		  this.__text_cache__     = '';
	
		  this.__schemas__        = assign({}, defaultSchemas, schemas);
		  this.__compiled__       = {};
	
		  this.__tlds__           = tlds_default;
		  this.__tlds_replaced__  = false;
	
		  this.re = {};
	
		  compile(this);
		}
	
	
		/** chainable
		 * LinkifyIt#add(schema, definition)
		 * - schema (String): rule name (fixed pattern prefix)
		 * - definition (String|RegExp|Object): schema definition
		 *
		 * Add new rule definition. See constructor description for details.
		 **/
		LinkifyIt.prototype.add = function add(schema, definition) {
		  this.__schemas__[schema] = definition;
		  compile(this);
		  return this;
		};
	
	
		/** chainable
		 * LinkifyIt#set(options)
		 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
		 *
		 * Set recognition options for links without schema.
		 **/
		LinkifyIt.prototype.set = function set(options) {
		  this.__opts__ = assign(this.__opts__, options);
		  return this;
		};
	
	
		/**
		 * LinkifyIt#test(text) -> Boolean
		 *
		 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
		 **/
		LinkifyIt.prototype.test = function test(text) {
		  // Reset scan cache
		  this.__text_cache__ = text;
		  this.__index__      = -1;
	
		  if (!text.length) { return false; }
	
		  var m, ml, me, len, shift, next, re, tld_pos, at_pos;
	
		  // try to scan for link with schema - that's the most simple rule
		  if (this.re.schema_test.test(text)) {
		    re = this.re.schema_search;
		    re.lastIndex = 0;
		    while ((m = re.exec(text)) !== null) {
		      len = this.testSchemaAt(text, m[2], re.lastIndex);
		      if (len) {
		        this.__schema__     = m[2];
		        this.__index__      = m.index + m[1].length;
		        this.__last_index__ = m.index + m[0].length + len;
		        break;
		      }
		    }
		  }
	
		  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
		    // guess schemaless links
		    tld_pos = text.search(this.re.host_fuzzy_test);
		    if (tld_pos >= 0) {
		      // if tld is located after found link - no need to check fuzzy pattern
		      if (this.__index__ < 0 || tld_pos < this.__index__) {
		        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
	
		          shift = ml.index + ml[1].length;
	
		          if (this.__index__ < 0 || shift < this.__index__) {
		            this.__schema__     = '';
		            this.__index__      = shift;
		            this.__last_index__ = ml.index + ml[0].length;
		          }
		        }
		      }
		    }
		  }
	
		  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
		    // guess schemaless emails
		    at_pos = text.indexOf('@');
		    if (at_pos >= 0) {
		      // We can't skip this check, because this cases are possible:
		      // 192.168.1.1@gmail.com, my.in@example.com
		      if ((me = text.match(this.re.email_fuzzy)) !== null) {
	
		        shift = me.index + me[1].length;
		        next  = me.index + me[0].length;
	
		        if (this.__index__ < 0 || shift < this.__index__ ||
		            (shift === this.__index__ && next > this.__last_index__)) {
		          this.__schema__     = 'mailto:';
		          this.__index__      = shift;
		          this.__last_index__ = next;
		        }
		      }
		    }
		  }
	
		  return this.__index__ >= 0;
		};
	
	
		/**
		 * LinkifyIt#pretest(text) -> Boolean
		 *
		 * Very quick check, that can give false positives. Returns true if link MAY BE
		 * can exists. Can be used for speed optimization, when you need to check that
		 * link NOT exists.
		 **/
		LinkifyIt.prototype.pretest = function pretest(text) {
		  return this.re.pretest.test(text);
		};
	
	
		/**
		 * LinkifyIt#testSchemaAt(text, name, position) -> Number
		 * - text (String): text to scan
		 * - name (String): rule (schema) name
		 * - position (Number): text offset to check from
		 *
		 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
		 * at given position. Returns length of found pattern (0 on fail).
		 **/
		LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
		  // If not supported schema check requested - terminate
		  if (!this.__compiled__[schema.toLowerCase()]) {
		    return 0;
		  }
		  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
		};
	
	
		/**
		 * LinkifyIt#match(text) -> Array|null
		 *
		 * Returns array of found link descriptions or `null` on fail. We strongly
		 * to use [[LinkifyIt#test]] first, for best speed.
		 *
		 * ##### Result match description
		 *
		 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
		 *   protocol-neutral  links.
		 * - __index__ - offset of matched text
		 * - __lastIndex__ - index of next char after mathch end
		 * - __raw__ - matched text
		 * - __text__ - normalized text
		 * - __url__ - link, generated from matched text
		 **/
		LinkifyIt.prototype.match = function match(text) {
		  var shift = 0, result = [];
	
		  // Try to take previous element from cache, if .test() called before
		  if (this.__index__ >= 0 && this.__text_cache__ === text) {
		    result.push(createMatch(this, shift));
		    shift = this.__last_index__;
		  }
	
		  // Cut head if cache was used
		  var tail = shift ? text.slice(shift) : text;
	
		  // Scan string until end reached
		  while (this.test(tail)) {
		    result.push(createMatch(this, shift));
	
		    tail = tail.slice(this.__last_index__);
		    shift += this.__last_index__;
		  }
	
		  if (result.length) {
		    return result;
		  }
	
		  return null;
		};
	
	
		/** chainable
		 * LinkifyIt#tlds(list [, keepOld]) -> this
		 * - list (Array): list of tlds
		 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
		 *
		 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
		 * to avoid false positives. By default this algorythm used:
		 *
		 * - hostname with any 2-letter root zones are ok.
		 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
		 *   are ok.
		 * - encoded (`xn--...`) root zones are ok.
		 *
		 * If list is replaced, then exact match for 2-chars root zones will be checked.
		 **/
		LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
		  list = Array.isArray(list) ? list : [ list ];
	
		  if (!keepOld) {
		    this.__tlds__ = list.slice();
		    this.__tlds_replaced__ = true;
		    compile(this);
		    return this;
		  }
	
		  this.__tlds__ = this.__tlds__.concat(list)
		                                  .sort()
		                                  .filter(function(el, idx, arr) {
		                                    return el !== arr[idx - 1];
		                                  })
		                                  .reverse();
	
		  compile(this);
		  return this;
		};
	
		/**
		 * LinkifyIt#normalize(match)
		 *
		 * Default normalizer (if schema does not define it's own).
		 **/
		LinkifyIt.prototype.normalize = function normalize(match) {
	
		  // Do minimal possible changes by default. Need to collect feedback prior
		  // to move forward https://github.com/markdown-it/linkify-it/issues/1
	
		  if (!match.schema) { match.url = 'http://' + match.url; }
	
		  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
		    match.url = 'mailto:' + match.url;
		  }
		};
	
	
		module.exports = LinkifyIt;
	
	
	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		// Use direct extract instead of `regenerate` to reduse browserified size
		var src_Any = exports.src_Any = __webpack_require__(14).source;
		var src_Cc  = exports.src_Cc = __webpack_require__(15).source;
		var src_Z   = exports.src_Z  = __webpack_require__(17).source;
		var src_P   = exports.src_P  = __webpack_require__(7).source;
	
		// \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
		var src_ZPCc = exports.src_ZPCc = [ src_Z, src_P, src_Cc ].join('|');
	
		// \p{\Z\Cc} (white spaces + control)
		var src_ZCc = exports.src_ZCc = [ src_Z, src_Cc ].join('|');
	
		// All possible word characters (everything without punctuation, spaces & controls)
		// Defined via punctuation & spaces to save space
		// Should be something like \p{\L\N\S\M} (\w but without `_`)
		var src_pseudo_letter       = '(?:(?!' + src_ZPCc + ')' + src_Any + ')';
		// The same as abothe but without [0-9]
		var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';
	
		////////////////////////////////////////////////////////////////////////////////
	
		var src_ip4 = exports.src_ip4 =
	
		  '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';
	
		exports.src_auth    = '(?:(?:(?!' + src_ZCc + ').)+@)?';
	
		var src_port = exports.src_port =
	
		  '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';
	
		var src_host_terminator = exports.src_host_terminator =
	
		  '(?=$|' + src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + src_ZPCc + '))';
	
		var src_path = exports.src_path =
	
		  '(?:' +
		    '[/?#]' +
		      '(?:' +
		        '(?!' + src_ZCc + '|[()[\\]{}.,"\'?!\\-]).|' +
		        '\\[(?:(?!' + src_ZCc + '|\\]).)*\\]|' +
		        '\\((?:(?!' + src_ZCc + '|[)]).)*\\)|' +
		        '\\{(?:(?!' + src_ZCc + '|[}]).)*\\}|' +
		        '\\"(?:(?!' + src_ZCc + '|["]).)+\\"|' +
		        "\\'(?:(?!" + src_ZCc + "|[']).)+\\'|" +
		        "\\'(?=" + src_pseudo_letter + ').|' +  // allow `I'm_king` if no pair found
		        '\\.{2,3}[a-zA-Z0-9%/]|' + // github has ... in commit range links. Restrict to
		                                   // - english
		                                   // - percent-encoded
		                                   // - parts of file path
		                                   // until more examples found.
		        '\\.(?!' + src_ZCc + '|[.]).|' +
		        '\\-(?!--(?:[^-]|$))(?:-*)|' +  // `---` => long dash, terminate
		        '\\,(?!' + src_ZCc + ').|' +      // allow `,,,` in paths
		        '\\!(?!' + src_ZCc + '|[!]).|' +
		        '\\?(?!' + src_ZCc + '|[?]).' +
		      ')+' +
		    '|\\/' +
		  ')?';
	
		var src_email_name = exports.src_email_name =
	
		  '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+';
	
		var src_xn = exports.src_xn =
	
		  'xn--[a-z0-9\\-]{1,59}';
	
		// More to read about domain names
		// http://serverfault.com/questions/638260/
	
		var src_domain_root = exports.src_domain_root =
	
		  // Can't have digits and dashes
		  '(?:' +
		    src_xn +
		    '|' +
		    src_pseudo_letter_non_d + '{1,63}' +
		  ')';
	
		var src_domain = exports.src_domain =
	
		  '(?:' +
		    src_xn +
		    '|' +
		    '(?:' + src_pseudo_letter + ')' +
		    '|' +
		    // don't allow `--` in domain names, because:
		    // - that can conflict with markdown &mdash; / &ndash;
		    // - nobody use those anyway
		    '(?:' + src_pseudo_letter + '(?:-(?!-)|' + src_pseudo_letter + '){0,61}' + src_pseudo_letter + ')' +
		  ')';
	
		var src_host = exports.src_host =
	
		  '(?:' +
		    src_ip4 +
		  '|' +
		    '(?:(?:(?:' + src_domain + ')\\.)*' + src_domain_root + ')' +
		  ')';
	
		var tpl_host_fuzzy = exports.tpl_host_fuzzy =
	
		  '(?:' +
		    src_ip4 +
		  '|' +
		    '(?:(?:(?:' + src_domain + ')\\.)+(?:%TLDS%))' +
		  ')';
	
		var tpl_host_no_ip_fuzzy = exports.tpl_host_no_ip_fuzzy =
	
		  '(?:(?:(?:' + src_domain + ')\\.)+(?:%TLDS%))';
	
		exports.src_host_strict =
	
		  src_host + src_host_terminator;
	
		var tpl_host_fuzzy_strict = exports.tpl_host_fuzzy_strict =
	
		  tpl_host_fuzzy + src_host_terminator;
	
		exports.src_host_port_strict =
	
		  src_host + src_port + src_host_terminator;
	
		var tpl_host_port_fuzzy_strict = exports.tpl_host_port_fuzzy_strict =
	
		  tpl_host_fuzzy + src_port + src_host_terminator;
	
		var tpl_host_port_no_ip_fuzzy_strict = exports.tpl_host_port_no_ip_fuzzy_strict =
	
		  tpl_host_no_ip_fuzzy + src_port + src_host_terminator;
	
	
		////////////////////////////////////////////////////////////////////////////////
		// Main rules
	
		// Rude test fuzzy links by host, for quick deny
		exports.tpl_host_fuzzy_test =
	
		  'localhost|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + src_ZPCc + '|$))';
	
		exports.tpl_email_fuzzy =
	
		    '(^|>|' + src_ZCc + ')(' + src_email_name + '@' + tpl_host_fuzzy_strict + ')';
	
		exports.tpl_link_fuzzy =
		    // Fuzzy link can't be prepended with .:/\- and non punctuation.
		    // but can start with > (markdown blockquote)
		    '(^|(?![.:/\\-_@])(?:[$+<=>^`|]|' + src_ZPCc + '))' +
		    '((?![$+<=>^`|])' + tpl_host_port_fuzzy_strict + src_path + ')';
	
		exports.tpl_link_no_ip_fuzzy =
		    // Fuzzy link can't be prepended with .:/\- and non punctuation.
		    // but can start with > (markdown blockquote)
		    '(^|(?![.:/\\-_@])(?:[$+<=>^`|]|' + src_ZPCc + '))' +
		    '((?![$+<=>^`|])' + tpl_host_port_no_ip_fuzzy_strict + src_path + ')';
	
	
	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
		;(function(root) {
	
			/** Detect free variables */
			var freeExports = typeof exports == 'object' && exports &&
				!exports.nodeType && exports;
			var freeModule = typeof module == 'object' && module &&
				!module.nodeType && module;
			var freeGlobal = typeof global == 'object' && global;
			if (
				freeGlobal.global === freeGlobal ||
				freeGlobal.window === freeGlobal ||
				freeGlobal.self === freeGlobal
			) {
				root = freeGlobal;
			}
	
			/**
			 * The `punycode` object.
			 * @name punycode
			 * @type Object
			 */
			var punycode,
	
			/** Highest positive signed 32-bit float value */
			maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
	
			/** Bootstring parameters */
			base = 36,
			tMin = 1,
			tMax = 26,
			skew = 38,
			damp = 700,
			initialBias = 72,
			initialN = 128, // 0x80
			delimiter = '-', // '\x2D'
	
			/** Regular expressions */
			regexPunycode = /^xn--/,
			regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
			regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
	
			/** Error messages */
			errors = {
				'overflow': 'Overflow: input needs wider integers to process',
				'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
				'invalid-input': 'Invalid input'
			},
	
			/** Convenience shortcuts */
			baseMinusTMin = base - tMin,
			floor = Math.floor,
			stringFromCharCode = String.fromCharCode,
	
			/** Temporary variable */
			key;
	
			/*--------------------------------------------------------------------------*/
	
			/**
			 * A generic error utility function.
			 * @private
			 * @param {String} type The error type.
			 * @returns {Error} Throws a `RangeError` with the applicable error message.
			 */
			function error(type) {
				throw RangeError(errors[type]);
			}
	
			/**
			 * A generic `Array#map` utility function.
			 * @private
			 * @param {Array} array The array to iterate over.
			 * @param {Function} callback The function that gets called for every array
			 * item.
			 * @returns {Array} A new array of values returned by the callback function.
			 */
			function map(array, fn) {
				var length = array.length;
				var result = [];
				while (length--) {
					result[length] = fn(array[length]);
				}
				return result;
			}
	
			/**
			 * A simple `Array#map`-like wrapper to work with domain name strings or email
			 * addresses.
			 * @private
			 * @param {String} domain The domain name or email address.
			 * @param {Function} callback The function that gets called for every
			 * character.
			 * @returns {Array} A new string of characters returned by the callback
			 * function.
			 */
			function mapDomain(string, fn) {
				var parts = string.split('@');
				var result = '';
				if (parts.length > 1) {
					// In email addresses, only the domain name should be punycoded. Leave
					// the local part (i.e. everything up to `@`) intact.
					result = parts[0] + '@';
					string = parts[1];
				}
				// Avoid `split(regex)` for IE8 compatibility. See #17.
				string = string.replace(regexSeparators, '\x2E');
				var labels = string.split('.');
				var encoded = map(labels, fn).join('.');
				return result + encoded;
			}
	
			/**
			 * Creates an array containing the numeric code points of each Unicode
			 * character in the string. While JavaScript uses UCS-2 internally,
			 * this function will convert a pair of surrogate halves (each of which
			 * UCS-2 exposes as separate characters) into a single code point,
			 * matching UTF-16.
			 * @see `punycode.ucs2.encode`
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode.ucs2
			 * @name decode
			 * @param {String} string The Unicode input string (UCS-2).
			 * @returns {Array} The new array of code points.
			 */
			function ucs2decode(string) {
				var output = [],
				    counter = 0,
				    length = string.length,
				    value,
				    extra;
				while (counter < length) {
					value = string.charCodeAt(counter++);
					if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
						// high surrogate, and there is a next character
						extra = string.charCodeAt(counter++);
						if ((extra & 0xFC00) == 0xDC00) { // low surrogate
							output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
						} else {
							// unmatched surrogate; only append this code unit, in case the next
							// code unit is the high surrogate of a surrogate pair
							output.push(value);
							counter--;
						}
					} else {
						output.push(value);
					}
				}
				return output;
			}
	
			/**
			 * Creates a string based on an array of numeric code points.
			 * @see `punycode.ucs2.decode`
			 * @memberOf punycode.ucs2
			 * @name encode
			 * @param {Array} codePoints The array of numeric code points.
			 * @returns {String} The new Unicode string (UCS-2).
			 */
			function ucs2encode(array) {
				return map(array, function(value) {
					var output = '';
					if (value > 0xFFFF) {
						value -= 0x10000;
						output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
						value = 0xDC00 | value & 0x3FF;
					}
					output += stringFromCharCode(value);
					return output;
				}).join('');
			}
	
			/**
			 * Converts a basic code point into a digit/integer.
			 * @see `digitToBasic()`
			 * @private
			 * @param {Number} codePoint The basic numeric code point value.
			 * @returns {Number} The numeric value of a basic code point (for use in
			 * representing integers) in the range `0` to `base - 1`, or `base` if
			 * the code point does not represent a value.
			 */
			function basicToDigit(codePoint) {
				if (codePoint - 48 < 10) {
					return codePoint - 22;
				}
				if (codePoint - 65 < 26) {
					return codePoint - 65;
				}
				if (codePoint - 97 < 26) {
					return codePoint - 97;
				}
				return base;
			}
	
			/**
			 * Converts a digit/integer into a basic code point.
			 * @see `basicToDigit()`
			 * @private
			 * @param {Number} digit The numeric value of a basic code point.
			 * @returns {Number} The basic code point whose value (when used for
			 * representing integers) is `digit`, which needs to be in the range
			 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
			 * used; else, the lowercase form is used. The behavior is undefined
			 * if `flag` is non-zero and `digit` has no uppercase form.
			 */
			function digitToBasic(digit, flag) {
				//  0..25 map to ASCII a..z or A..Z
				// 26..35 map to ASCII 0..9
				return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
			}
	
			/**
			 * Bias adaptation function as per section 3.4 of RFC 3492.
			 * http://tools.ietf.org/html/rfc3492#section-3.4
			 * @private
			 */
			function adapt(delta, numPoints, firstTime) {
				var k = 0;
				delta = firstTime ? floor(delta / damp) : delta >> 1;
				delta += floor(delta / numPoints);
				for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
					delta = floor(delta / baseMinusTMin);
				}
				return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
			}
	
			/**
			 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
			 * symbols.
			 * @memberOf punycode
			 * @param {String} input The Punycode string of ASCII-only symbols.
			 * @returns {String} The resulting string of Unicode symbols.
			 */
			function decode(input) {
				// Don't use UCS-2
				var output = [],
				    inputLength = input.length,
				    out,
				    i = 0,
				    n = initialN,
				    bias = initialBias,
				    basic,
				    j,
				    index,
				    oldi,
				    w,
				    k,
				    digit,
				    t,
				    /** Cached calculation results */
				    baseMinusT;
	
				// Handle the basic code points: let `basic` be the number of input code
				// points before the last delimiter, or `0` if there is none, then copy
				// the first basic code points to the output.
	
				basic = input.lastIndexOf(delimiter);
				if (basic < 0) {
					basic = 0;
				}
	
				for (j = 0; j < basic; ++j) {
					// if it's not a basic code point
					if (input.charCodeAt(j) >= 0x80) {
						error('not-basic');
					}
					output.push(input.charCodeAt(j));
				}
	
				// Main decoding loop: start just after the last delimiter if any basic code
				// points were copied; start at the beginning otherwise.
	
				for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {
	
					// `index` is the index of the next character to be consumed.
					// Decode a generalized variable-length integer into `delta`,
					// which gets added to `i`. The overflow checking is easier
					// if we increase `i` as we go, then subtract off its starting
					// value at the end to obtain `delta`.
					for (oldi = i, w = 1, k = base; /* no condition */; k += base) {
	
						if (index >= inputLength) {
							error('invalid-input');
						}
	
						digit = basicToDigit(input.charCodeAt(index++));
	
						if (digit >= base || digit > floor((maxInt - i) / w)) {
							error('overflow');
						}
	
						i += digit * w;
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
	
						if (digit < t) {
							break;
						}
	
						baseMinusT = base - t;
						if (w > floor(maxInt / baseMinusT)) {
							error('overflow');
						}
	
						w *= baseMinusT;
	
					}
	
					out = output.length + 1;
					bias = adapt(i - oldi, out, oldi == 0);
	
					// `i` was supposed to wrap around from `out` to `0`,
					// incrementing `n` each time, so we'll fix that now:
					if (floor(i / out) > maxInt - n) {
						error('overflow');
					}
	
					n += floor(i / out);
					i %= out;
	
					// Insert `n` at position `i` of the output
					output.splice(i++, 0, n);
	
				}
	
				return ucs2encode(output);
			}
	
			/**
			 * Converts a string of Unicode symbols (e.g. a domain name label) to a
			 * Punycode string of ASCII-only symbols.
			 * @memberOf punycode
			 * @param {String} input The string of Unicode symbols.
			 * @returns {String} The resulting Punycode string of ASCII-only symbols.
			 */
			function encode(input) {
				var n,
				    delta,
				    handledCPCount,
				    basicLength,
				    bias,
				    j,
				    m,
				    q,
				    k,
				    t,
				    currentValue,
				    output = [],
				    /** `inputLength` will hold the number of code points in `input`. */
				    inputLength,
				    /** Cached calculation results */
				    handledCPCountPlusOne,
				    baseMinusT,
				    qMinusT;
	
				// Convert the input in UCS-2 to Unicode
				input = ucs2decode(input);
	
				// Cache the length
				inputLength = input.length;
	
				// Initialize the state
				n = initialN;
				delta = 0;
				bias = initialBias;
	
				// Handle the basic code points
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue < 0x80) {
						output.push(stringFromCharCode(currentValue));
					}
				}
	
				handledCPCount = basicLength = output.length;
	
				// `handledCPCount` is the number of code points that have been handled;
				// `basicLength` is the number of basic code points.
	
				// Finish the basic string - if it is not empty - with a delimiter
				if (basicLength) {
					output.push(delimiter);
				}
	
				// Main encoding loop:
				while (handledCPCount < inputLength) {
	
					// All non-basic code points < n have been handled already. Find the next
					// larger one:
					for (m = maxInt, j = 0; j < inputLength; ++j) {
						currentValue = input[j];
						if (currentValue >= n && currentValue < m) {
							m = currentValue;
						}
					}
	
					// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
					// but guard against overflow
					handledCPCountPlusOne = handledCPCount + 1;
					if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
						error('overflow');
					}
	
					delta += (m - n) * handledCPCountPlusOne;
					n = m;
	
					for (j = 0; j < inputLength; ++j) {
						currentValue = input[j];
	
						if (currentValue < n && ++delta > maxInt) {
							error('overflow');
						}
	
						if (currentValue == n) {
							// Represent delta as a generalized variable-length integer
							for (q = delta, k = base; /* no condition */; k += base) {
								t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
								if (q < t) {
									break;
								}
								qMinusT = q - t;
								baseMinusT = base - t;
								output.push(
									stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
								);
								q = floor(qMinusT / baseMinusT);
							}
	
							output.push(stringFromCharCode(digitToBasic(q, 0)));
							bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
							delta = 0;
							++handledCPCount;
						}
					}
	
					++delta;
					++n;
	
				}
				return output.join('');
			}
	
			/**
			 * Converts a Punycode string representing a domain name or an email address
			 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
			 * it doesn't matter if you call it on a string that has already been
			 * converted to Unicode.
			 * @memberOf punycode
			 * @param {String} input The Punycoded domain name or email address to
			 * convert to Unicode.
			 * @returns {String} The Unicode representation of the given Punycode
			 * string.
			 */
			function toUnicode(input) {
				return mapDomain(input, function(string) {
					return regexPunycode.test(string)
						? decode(string.slice(4).toLowerCase())
						: string;
				});
			}
	
			/**
			 * Converts a Unicode string representing a domain name or an email address to
			 * Punycode. Only the non-ASCII parts of the domain name will be converted,
			 * i.e. it doesn't matter if you call it with a domain that's already in
			 * ASCII.
			 * @memberOf punycode
			 * @param {String} input The domain name or email address to convert, as a
			 * Unicode string.
			 * @returns {String} The Punycode representation of the given domain name or
			 * email address.
			 */
			function toASCII(input) {
				return mapDomain(input, function(string) {
					return regexNonASCII.test(string)
						? 'xn--' + encode(string)
						: string;
				});
			}
	
			/*--------------------------------------------------------------------------*/
	
			/** Define the public API */
			punycode = {
				/**
				 * A string representing the current Punycode.js version number.
				 * @memberOf punycode
				 * @type String
				 */
				'version': '1.3.2',
				/**
				 * An object of methods to convert from JavaScript's internal character
				 * representation (UCS-2) to Unicode code points, and back.
				 * @see <https://mathiasbynens.be/notes/javascript-encoding>
				 * @memberOf punycode
				 * @type Object
				 */
				'ucs2': {
					'decode': ucs2decode,
					'encode': ucs2encode
				},
				'decode': decode,
				'encode': encode,
				'toASCII': toASCII,
				'toUnicode': toUnicode
			};
	
			/** Expose `punycode` */
			// Some AMD build optimizers, like r.js, check for specific condition patterns
			// like the following:
			if (
				true
			) {
				!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
					return punycode;
				}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else if (freeExports && freeModule) {
				if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
					freeModule.exports = punycode;
				} else { // in Narwhal or RingoJS v0.7.0-
					for (key in punycode) {
						punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
					}
				}
			} else { // in Rhino or a web browser
				root.punycode = punycode;
			}
	
		}(this));
	
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)(module), (function() { return this; }())))
	
	/***/ },
	/* 67 */
	/***/ function(module, exports) {
	
		module.exports = function(module) {
			if(!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		}
	
	
	/***/ },
	/* 68 */
	/***/ function(module, exports) {
	
		// markdown-it default options
	
		'use strict';
	
	
		module.exports = {
		  options: {
		    html:         false,        // Enable HTML tags in source
		    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
		    breaks:       false,        // Convert '\n' in paragraphs into <br>
		    langPrefix:   'language-',  // CSS language prefix for fenced blocks
		    linkify:      false,        // autoconvert URL-like texts to links
	
		    // Enable some language-neutral replacements + quotes beautification
		    typographer:  false,
	
		    // Double + single quotes replacement pairs, when typographer enabled,
		    // and smartquotes on. Could be either a String or an Array.
		    //
		    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
		    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
		    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */
	
		    // Highlighter function. Should return escaped HTML,
		    // or '' if input not changed
		    //
		    // function (/*str, lang*/) { return ''; }
		    //
		    highlight: null,
	
		    maxNesting:   20            // Internal protection, recursion limit
		  },
	
		  components: {
	
		    core: {},
		    block: {},
		    inline: {}
		  }
		};
	
	
	/***/ },
	/* 69 */
	/***/ function(module, exports) {
	
		// "Zero" preset, with nothing enabled. Useful for manual configuring of simple
		// modes. For example, to parse bold/italic only.
	
		'use strict';
	
	
		module.exports = {
		  options: {
		    html:         false,        // Enable HTML tags in source
		    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
		    breaks:       false,        // Convert '\n' in paragraphs into <br>
		    langPrefix:   'language-',  // CSS language prefix for fenced blocks
		    linkify:      false,        // autoconvert URL-like texts to links
	
		    // Enable some language-neutral replacements + quotes beautification
		    typographer:  false,
	
		    // Double + single quotes replacement pairs, when typographer enabled,
		    // and smartquotes on. Could be either a String or an Array.
		    //
		    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
		    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
		    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */
	
		    // Highlighter function. Should return escaped HTML,
		    // or '' if input not changed
		    //
		    // function (/*str, lang*/) { return ''; }
		    //
		    highlight: null,
	
		    maxNesting:   20            // Internal protection, recursion limit
		  },
	
		  components: {
	
		    core: {
		      rules: [
		        'normalize',
		        'block',
		        'inline'
		      ]
		    },
	
		    block: {
		      rules: [
		        'paragraph'
		      ]
		    },
	
		    inline: {
		      rules: [
		        'text'
		      ],
		      rules2: [
		        'balance_pairs',
		        'text_collapse'
		      ]
		    }
		  }
		};
	
	
	/***/ },
	/* 70 */
	/***/ function(module, exports) {
	
		// Commonmark default options
	
		'use strict';
	
	
		module.exports = {
		  options: {
		    html:         true,         // Enable HTML tags in source
		    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
		    breaks:       false,        // Convert '\n' in paragraphs into <br>
		    langPrefix:   'language-',  // CSS language prefix for fenced blocks
		    linkify:      false,        // autoconvert URL-like texts to links
	
		    // Enable some language-neutral replacements + quotes beautification
		    typographer:  false,
	
		    // Double + single quotes replacement pairs, when typographer enabled,
		    // and smartquotes on. Could be either a String or an Array.
		    //
		    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
		    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
		    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */
	
		    // Highlighter function. Should return escaped HTML,
		    // or '' if input not changed
		    //
		    // function (/*str, lang*/) { return ''; }
		    //
		    highlight: null,
	
		    maxNesting:   20            // Internal protection, recursion limit
		  },
	
		  components: {
	
		    core: {
		      rules: [
		        'normalize',
		        'block',
		        'inline'
		      ]
		    },
	
		    block: {
		      rules: [
		        'blockquote',
		        'code',
		        'fence',
		        'heading',
		        'hr',
		        'html_block',
		        'lheading',
		        'list',
		        'reference',
		        'paragraph'
		      ]
		    },
	
		    inline: {
		      rules: [
		        'autolink',
		        'backticks',
		        'emphasis',
		        'entity',
		        'escape',
		        'html_inline',
		        'image',
		        'link',
		        'newline',
		        'text'
		      ],
		      rules2: [
		        'balance_pairs',
		        'emphasis',
		        'text_collapse'
		      ]
		    }
		  }
		};
	
	
	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _angular = __webpack_require__(1);
	
		var _angular2 = _interopRequireDefault(_angular);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
		/*@ngInject*/
		var MarkdownProvider = (function () {
		  function MarkdownProvider(markdownit) {
		    _classCallCheck(this, MarkdownProvider);
	
		    this.config = {
		      preset: 'default',
		      options: {
		        html: true,
		        typographer: true,
		        quotes: '„“‚‘',
		        breaks: true
		      },
		      plugins: []
		    };
		    this.markdownit = markdownit;
		  }
		  MarkdownProvider.$inject = ["markdownit"];
	
		  _createClass(MarkdownProvider, [{
		    key: 'use',
		    value: function use(val) {
		      this.config.plugins.push(val);
		      return this;
		    }
		  }, {
		    key: '$get',
		    value: function $get() {
		      var md = this.markdownit(this.config.preset, this.config.options);
		      _angular2.default.forEach(this.config.plugins, function (plugin) {
		        md.use(plugin);
		      });
		      return md;
		    }
		  }, {
		    key: 'preset',
		    get: function get() {
		      return this.config.preset;
		    },
		    set: function set(val) {
		      this.config.preset = val;
		      return this;
		    }
		  }, {
		    key: 'options',
		    get: function get() {
		      return this.config.options;
		    },
		    set: function set(val) {
		      _angular2.default.extend(this.config.options, val);
		      return this;
		    }
		  }, {
		    key: 'plugins',
		    get: function get() {
		      return this.config.plugins;
		    },
		    set: function set(val) {
		      this.config.plugins = val;
		      return this;
		    }
		  }]);
	
		  return MarkdownProvider;
		})();
	
		exports.default = MarkdownProvider;
	
	/***/ },
	/* 72 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = markdownDirective;
		/*@ngInject*/function markdownDirective($window, markdown, $compile) {
		  function link(scope, el, attrs) {
		    function render() {
		      var text = scope.$eval(attrs.markdown) || el.text() || '';
		      var html = markdown.render(text);
		      el.html(html);
		      $compile(el.contents())(scope);
		      if ($window.MathJax && attrs.hasOwnProperty('mathJax')) {
		        $window.MathJax.Hub.Queue(['Typeset', $window.MathJax.Hub, el[0]]);
		      }
		    }
		    render();
		    if (attrs.markdown) {
		      var clean = scope.$watch(attrs.markdown, function () {
		        render();
		      });
		      scope.$on('$destroy', clean);
		    }
		  }
		  return {
		    restrict: 'AE',
		    scope: false,
		    link: link
		  };
		}
		markdownDirective.$inject = ["$window", "markdown", "$compile"];
	
	/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = markedDirective;
	
		var _marked = __webpack_require__(74);
	
		var _marked2 = _interopRequireDefault(_marked);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		/*@ngInject*/function markedDirective() {
		  function controller() {
		    this.mode = 'markdown';
		  }
		  return {
		    restrict: 'E',
		    scope: {
		      markdown: '=text',
		      label: '@'
		    },
		    templateUrl: _marked2.default,
		    controller: controller,
		    controllerAs: 'marked',
		    bindToController: true
		  };
		}
	
	/***/ },
	/* 74 */
	/***/ function(module, exports) {
	
		var path = '/Users/tamara/Documents/Entwicklung/wbt-text/src/marked.jade';
		var html = "<div class=\"row\"><div class=\"col-sm-12\"><h3 ng-bind=\"marked.label\"></h3><ul class=\"nav nav-tabs\"><li ng-class=\"{'active': 'markdown'}[marked.mode]\"><button type=\"button\" ng-click=\"marked.mode='write'\" class=\"btn btn-default\">Markdown</button></li><li ng-class=\"{'active': 'preview'}[marked.mode]\"><button type=\"button\" ng-click=\"marked.mode='preview'\" class=\"btn btn-default\">Vorschau</button></li><li ng-class=\"{'active': 'both'}[marked.mode]\"><button type=\"button\" ng-click=\"marked.mode='both'\" class=\"btn btn-default\">nebeneinander</button></li></ul></div></div><div ng-switch=\"marked.mode\" class=\"row\"><div ng-switch-when=\"markdown\" class=\"col-sm-12\"><textarea ng-model=\"marked.markdown\" class=\"form-control\"></textarea></div><div ng-switch-when=\"preview\" markdown=\"marked.markdown\" editor class=\"col-sm-12\"></div><div ng-switch-when=\"both\" class=\"col-sm-6\"><textarea ng-model=\"marked.markdown\" class=\"form-control\"></textarea></div><div ng-switch-when=\"both\" markdown=\"marked.markdown\" editor class=\"col-sm-6\"></div></div>";
		window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
		module.exports = path;
	
	/***/ },
	/* 75 */
	/***/ function(module, exports) {
	
		// Process definition lists
		//
		'use strict';
	
	
		module.exports = function deflist_plugin(md) {
		  var isSpace = md.utils.isSpace;
	
		  // Search `[:~][\n ]`, returns next pos after marker on success
		  // or -1 on fail.
		  function skipMarker(state, line) {
		    var pos, marker,
		        start = state.bMarks[line] + state.tShift[line],
		        max = state.eMarks[line];
	
		    if (start >= max) { return -1; }
	
		    // Check bullet
		    marker = state.src.charCodeAt(start++);
		    if (marker !== 0x7E/* ~ */ && marker !== 0x3A/* : */) { return -1; }
	
		    pos = state.skipSpaces(start);
	
		    // require space after ":"
		    if (start === pos) { return -1; }
	
		    // no empty definitions, e.g. "  : "
		    if (pos >= max) { return -1; }
	
		    return start;
		  }
	
		  function markTightParagraphs(state, idx) {
		    var i, l,
		        level = state.level + 2;
	
		    for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
		      if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
		        state.tokens[i + 2].hidden = true;
		        state.tokens[i].hidden = true;
		        i += 2;
		      }
		    }
		  }
	
		  function deflist(state, startLine, endLine, silent) {
		    var ch,
		        contentStart,
		        ddLine,
		        dtLine,
		        itemLines,
		        listLines,
		        listTokIdx,
		        max,
		        nextLine,
		        offset,
		        oldDDIndent,
		        oldIndent,
		        oldParentType,
		        oldSCount,
		        oldTShift,
		        oldTight,
		        pos,
		        prevEmptyEnd,
		        tight,
		        token;
	
		    if (silent) {
		      // quirk: validation mode validates a dd block only, not a whole deflist
		      if (state.ddIndent < 0) { return false; }
		      return skipMarker(state, startLine) >= 0;
		    }
	
		    nextLine = startLine + 1;
		    if (state.isEmpty(nextLine)) {
		      if (++nextLine > endLine) { return false; }
		    }
	
		    if (state.sCount[nextLine] < state.blkIndent) { return false; }
		    contentStart = skipMarker(state, nextLine);
		    if (contentStart < 0) { return false; }
	
		    // Start list
		    listTokIdx = state.tokens.length;
	
		    token     = state.push('dl_open', 'dl', 1);
		    token.map = listLines = [ startLine, 0 ];
	
		    //
		    // Iterate list items
		    //
	
		    dtLine = startLine;
		    ddLine = nextLine;
	
		    // One definition list can contain multiple DTs,
		    // and one DT can be followed by multiple DDs.
		    //
		    // Thus, there is two loops here, and label is
		    // needed to break out of the second one
		    //
		    /*eslint no-labels:0,block-scoped-var:0*/
		    OUTER:
		    for (;;) {
		      tight = true;
		      prevEmptyEnd = false;
	
		      token          = state.push('dt_open', 'dt', 1);
		      token.map      = [ dtLine, dtLine ];
	
		      token          = state.push('inline', '', 0);
		      token.map      = [ dtLine, dtLine ];
		      token.content  = state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim();
		      token.children = [];
	
		      token          = state.push('dt_close', 'dt', -1);
	
		      for (;;) {
		        token     = state.push('dd_open', 'dd', 1);
		        token.map = itemLines = [ nextLine, 0 ];
	
		        pos = contentStart;
		        max = state.eMarks[ddLine];
		        offset = state.sCount[ddLine] + contentStart - (state.bMarks[ddLine] + state.tShift[ddLine]);
	
		        while (pos < max) {
		          ch = state.src.charCodeAt(pos);
	
		          if (isSpace(ch)) {
		            if (ch === 0x09) {
		              offset += 4 - offset % 4;
		            } else {
		              offset++;
		            }
		          } else {
		            break;
		          }
	
		          pos++;
		        }
	
		        contentStart = pos;
	
		        oldTight = state.tight;
		        oldDDIndent = state.ddIndent;
		        oldIndent = state.blkIndent;
		        oldTShift = state.tShift[ddLine];
		        oldSCount = state.sCount[ddLine];
		        oldParentType = state.parentType;
		        state.blkIndent = state.ddIndent = state.sCount[ddLine] + 2;
		        state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
		        state.sCount[ddLine] = offset;
		        state.tight = true;
		        state.parentType = 'deflist';
	
		        state.md.block.tokenize(state, ddLine, endLine, true);
	
		        // If any of list item is tight, mark list as tight
		        if (!state.tight || prevEmptyEnd) {
		          tight = false;
		        }
		        // Item become loose if finish with empty line,
		        // but we should filter last element, because it means list finish
		        prevEmptyEnd = (state.line - ddLine) > 1 && state.isEmpty(state.line - 1);
	
		        state.tShift[ddLine] = oldTShift;
		        state.sCount[ddLine] = oldSCount;
		        state.tight = oldTight;
		        state.parentType = oldParentType;
		        state.blkIndent = oldIndent;
		        state.ddIndent = oldDDIndent;
	
		        token = state.push('dd_close', 'dd', -1);
	
		        itemLines[1] = nextLine = state.line;
	
		        if (nextLine >= endLine) { break OUTER; }
	
		        if (state.sCount[nextLine] < state.blkIndent) { break OUTER; }
		        contentStart = skipMarker(state, nextLine);
		        if (contentStart < 0) { break; }
	
		        ddLine = nextLine;
	
		        // go to the next loop iteration:
		        // insert DD tag and repeat checking
		      }
	
		      if (nextLine >= endLine) { break; }
		      dtLine = nextLine;
	
		      if (state.isEmpty(dtLine)) { break; }
		      if (state.sCount[dtLine] < state.blkIndent) { break; }
	
		      ddLine = dtLine + 1;
		      if (ddLine >= endLine) { break; }
		      if (state.isEmpty(ddLine)) { ddLine++; }
		      if (ddLine >= endLine) { break; }
	
		      if (state.sCount[ddLine] < state.blkIndent) { break; }
		      contentStart = skipMarker(state, ddLine);
		      if (contentStart < 0) { break; }
	
		      // go to the next loop iteration:
		      // insert DT and DD tags and repeat checking
		    }
	
		    // Finilize list
		    token = state.push('dl_close', 'dl', -1);
	
		    listLines[1] = nextLine;
	
		    state.line = nextLine;
	
		    // mark paragraphs tight if needed
		    if (tight) {
		      markTightParagraphs(state, listTokIdx);
		    }
	
		    return true;
		  }
	
	
		  md.block.ruler.before('paragraph', 'deflist', deflist, { alt: [ 'paragraph', 'reference' ] });
		};
	
	
	/***/ },
	/* 76 */
	/***/ function(module, exports) {
	
		'use strict';
		/* eslint-disable no-cond-assign */
	
		var tagExpr = /^<!-- ?\{(?:([a-z0-9]+)(\^[0-9]*)?: ?)?(.*)\} ?-->\n?$/;
	
		module.exports = function attributes(md) {
		  md.core.ruler.push('curly_attributes', curlyAttrs);
		};
	
		/*
		 * List of tag -> token type mappings. Eg, `<li>` is `list_item_open`.
		 */
	
		var opening = {
		  li: ['list_item'],
		  ul: ['bullet_list'],
		  p: ['paragraph'],
		  ol: ['ordered_list'],
		  blockquote: ['blockquote'],
		  h1: ['heading'],
		  h2: ['heading'],
		  h3: ['heading'],
		  h4: ['heading'],
		  h5: ['heading'],
		  h6: ['heading'],
		  a: ['link'],
		  code: ['code_inline', 'code_block', 'fence']
		};
	
		var selfClosing = {
		  hr: true,
		  image: true
		};
	
		/**
		 * ...
		 */
	
		function curlyAttrs(state) {
		  var tokens = state.tokens;
		  var omissions = [];
		  var parent, m;
		  var stack = { len: 0, contents: [], types: {} };
	
		  tokens.forEach(function (token, i) {
		    // Save breadcrumbs so html_block will pick it up
		    if (isOpener(token.type) || selfClosing[token.type]) {
		      spush(stack, token);
		    }
	
		    // "# Hello\n<!--{.classname}-->"
		    // ...sequence of [heading_open, inline, heading_close, html_block]
		    if (token.type === 'html_block') {
		      m = token.content.match(tagExpr);
		      if (!m) return;
	
		      parent = findParent(stack, m[1], m[2]);
		      if (parent && applyToToken(parent, m[3])) {
		        omissions.unshift(i);
		      }
		    }
	
		    // "# Hello <!--{.classname} -->"
		    // { type: 'inline', children: { ..., '<!--{...}-->' } }
		    if (token.type === 'inline') {
		      curlyInline(token.children, stack);
		    }
		  });
	
		  // Remove <!--...--> html_block tokens
		  omissions.forEach(function (idx) {
		    tokens.splice(idx, 1);
		  });
		}
	
		/**
		 * Internal: checks in a token type is a block opener
		 */
	
		function isOpener(type) {
		  return type.match(/_(open|start)$/) || type === 'fence' || type === 'code_block';
		}
	
		/**
		 * Internal: Run through inline and stuff
		 */
	
		function curlyInline(children, stack) {
		  var lastText, m, parent;
	
		  // Keep a list of sub-tokens to be removed
		  var omissions = [];
	
		  children.forEach(function (child, i) {
		    if (isOpener(child.type) || selfClosing[child.type] || child.type === 'code_inline') {
		      spush(stack, child);
		    }
	
		    // Decorate tags are found
		    if (m = child.content.match(tagExpr)) {
		      var tag = m[1];
		      var depth = m[2];
		      var attrs = m[3];
	
		      // Remove the comment, then remove the extra space
		      parent = findParent(stack, tag, depth);
		      if (parent && applyToToken(parent, attrs)) {
		        omissions.unshift(i);
		        if (lastText) trimRight(lastText, 'content');
		      }
		    }
	
		    if (child.type === 'text') lastText = child;
		  });
	
		  // Remove them in a separate step so we don't
		  omissions.forEach(function (idx) {
		    children.splice(idx, 1);
		  });
		}
	
		/**
		 * Private: given a list of tokens `list` and `lastParent`, find the one that
		 * matches `tag`.
		 */
	
		function findParent(stack, tag, depth) {
		  if (!tag) return stack.last;
	
		  if (depth === '^') {
		    depth = 1;
		  } else if (typeof depth === 'string') {
		    /* '^2' */
		    depth = +depth.substr(1);
		  } else {
		    depth = 0;
		  }
	
		  var targets = opening[tag.toLowerCase()] || [tag.toLowerCase()];
	
		  var target = targets.filter(function (target) {
		    return stack.types[target];
		  });
	
		  var list = stack.types[target];
		  if (!list) return; // Can't find tag `tag`
	
		  return list[list.length - 1 - depth];
		}
	
		/**
		 * Private: trim the right
		 */
	
		function trimRight(obj, attr) {
		  obj[attr] = obj[attr].replace(/\s*$/, '');
		}
	
		/**
		 * Private: apply tag to token
		 *
		 *     applyToToken(token, '.classname')
		 */
	
		function applyToToken(token, attrs) {
		  var m;
		  var todo = [];
	
		  while (attrs.length > 0) {
		    if (m = attrs.match(/^\s*\.([a-zA-Z0-9\-\_]+)/)) {
		      todo.push(['class', m[1], { append: true }]);
		      shift();
		    } else if (m = attrs.match(/^\s*\#([a-zA-Z0-9\-\_]+)/)) {
		      todo.push(['id', m[1]]);
		      shift();
		    } else if (m = attrs.match(/^\s*([a-zA-Z0-9\-\_]+)="([^"]*)"/)) {
		      todo.push([m[1], m[2]]);
		      shift();
		    } else if (m = attrs.match(/^\s*([a-zA-Z0-9\-\_]+)='([^']*)'/)) {
		      todo.push([m[1], m[2]]);
		      shift();
		    } else if (m = attrs.match(/^\s*([a-zA-Z0-9\-\_]+)=([^ ]*)/)) {
		      todo.push([m[1], m[2]]);
		      shift();
		    } else if (m = attrs.match(/^\s+/)) {
		      shift();
		    } else {
		      return;
		    }
		  }
	
		  todo.forEach(function (args) {
		    setAttr.apply(this, [token].concat(args));
		  });
		  return true;
	
		  function shift() {
		    attrs = attrs.substr(m[0].length);
		  }
		}
	
		/**
		 * Private: sets an attribute `attr` to `value` in a token. If `options.append`
		 * is true, append to the old value instead of overwriting it.
		 */
	
		function setAttr(token, attr, value, options) {
		  var idx = token.attrIndex(attr);
	
		  if (idx === -1) {
		    token.attrPush([attr, value]);
		  } else if (options && options.append) {
		    token.attrs[idx][1] = token.attrs[idx][1] + ' ' + value;
		  } else {
		    token.attrs[idx][1] = value;
		  }
		}
	
		/**
		 * Private: pushes a token to the stack
		 */
	
		function spush(stack, token) {
		  var type = token.type.replace(/_(open|start)$/, '');
		  if (!stack.types[type]) {
		    stack.types[type] = [];
		  }
		  stack.types[type].push(token);
		  stack.last = token;
		}
	
	/***/ },
	/* 77 */
	/***/ function(module, exports) {
	
		// Process footnotes
		//
		'use strict';
	
		////////////////////////////////////////////////////////////////////////////////
		// Renderer partials
	
		function _footnote_ref(tokens, idx) {
		  var n = Number(tokens[idx].meta.id + 1).toString();
		  var id = 'fnref' + n;
		  if (tokens[idx].meta.subId > 0) {
		    id += ':' + tokens[idx].meta.subId;
		  }
		  return '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + ']</a></sup>';
		}
		function _footnote_block_open(tokens, idx, options) {
		  return (options.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n') +
		         '<section class="footnotes">\n' +
		         '<ol class="footnotes-list">\n';
		}
		function _footnote_block_close() {
		  return '</ol>\n</section>\n';
		}
		function _footnote_open(tokens, idx) {
		  var id = Number(tokens[idx].meta.id + 1).toString();
		  return '<li id="fn' + id + '"  class="footnote-item">';
		}
		function _footnote_close() {
		  return '</li>\n';
		}
		function _footnote_anchor(tokens, idx) {
		  var n = Number(tokens[idx].meta.id + 1).toString();
		  var id = 'fnref' + n;
		  if (tokens[idx].meta.subId > 0) {
		    id += ':' + tokens[idx].meta.subId;
		  }
		  return ' <a href="#' + id + '" class="footnote-backref">\u21a9</a>'; /* ↩ */
		}
	
		////////////////////////////////////////////////////////////////////////////////
	
	
		module.exports = function sub_plugin(md) {
		  var parseLinkLabel = md.helpers.parseLinkLabel,
		      isSpace = md.utils.isSpace;
	
		  md.renderer.rules.footnote_ref          = _footnote_ref;
		  md.renderer.rules.footnote_block_open   = _footnote_block_open;
		  md.renderer.rules.footnote_block_close  = _footnote_block_close;
		  md.renderer.rules.footnote_open         = _footnote_open;
		  md.renderer.rules.footnote_close        = _footnote_close;
		  md.renderer.rules.footnote_anchor       = _footnote_anchor;
	
		  // Process footnote block definition
		  function footnote_def(state, startLine, endLine, silent) {
		    var oldBMark, oldTShift, oldSCount, oldParentType, pos, label, token,
		        initial, offset, ch, posAfterColon,
		        start = state.bMarks[startLine] + state.tShift[startLine],
		        max = state.eMarks[startLine];
	
		    // line should be at least 5 chars - "[^x]:"
		    if (start + 4 > max) { return false; }
	
		    if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
		    if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
	
		    for (pos = start + 2; pos < max; pos++) {
		      if (state.src.charCodeAt(pos) === 0x20) { return false; }
		      if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
		        break;
		      }
		    }
	
		    if (pos === start + 2) { return false; } // no empty footnote labels
		    if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 0x3A /* : */) { return false; }
		    if (silent) { return true; }
		    pos++;
	
		    if (!state.env.footnotes) { state.env.footnotes = {}; }
		    if (!state.env.footnotes.refs) { state.env.footnotes.refs = {}; }
		    label = state.src.slice(start + 2, pos - 2);
		    state.env.footnotes.refs[':' + label] = -1;
	
		    token       = new state.Token('footnote_reference_open', '', 1);
		    token.meta  = { label: label };
		    token.level = state.level++;
		    state.tokens.push(token);
	
		    oldBMark = state.bMarks[startLine];
		    oldTShift = state.tShift[startLine];
		    oldSCount = state.sCount[startLine];
		    oldParentType = state.parentType;
	
		    posAfterColon = pos;
		    initial = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]);
	
		    while (pos < max) {
		      ch = state.src.charCodeAt(pos);
	
		      if (isSpace(ch)) {
		        if (ch === 0x09) {
		          offset += 4 - offset % 4;
		        } else {
		          offset++;
		        }
		      } else {
		        break;
		      }
	
		      pos++;
		    }
	
		    state.tShift[startLine] = pos - posAfterColon;
		    state.sCount[startLine] = offset - initial;
	
		    state.bMarks[startLine] = posAfterColon;
		    state.blkIndent += 4;
		    state.parentType = 'footnote';
	
		    if (state.sCount[startLine] < state.blkIndent) {
		      state.sCount[startLine] += state.blkIndent;
		    }
	
		    state.md.block.tokenize(state, startLine, endLine, true);
	
		    state.parentType = oldParentType;
		    state.blkIndent -= 4;
		    state.tShift[startLine] = oldTShift;
		    state.sCount[startLine] = oldSCount;
		    state.bMarks[startLine] = oldBMark;
	
		    token       = new state.Token('footnote_reference_close', '', -1);
		    token.level = --state.level;
		    state.tokens.push(token);
	
		    return true;
		  }
	
		  // Process inline footnotes (^[...])
		  function footnote_inline(state, silent) {
		    var labelStart,
		        labelEnd,
		        footnoteId,
		        token,
		        tokens,
		        max = state.posMax,
		        start = state.pos;
	
		    if (start + 2 >= max) { return false; }
		    if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
		    if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }
	
		    labelStart = start + 2;
		    labelEnd = parseLinkLabel(state, start + 1);
	
		    // parser failed to find ']', so it's not a valid note
		    if (labelEnd < 0) { return false; }
	
		    // We found the end of the link, and know for a fact it's a valid link;
		    // so all that's left to do is to call tokenizer.
		    //
		    if (!silent) {
		      if (!state.env.footnotes) { state.env.footnotes = {}; }
		      if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
		      footnoteId = state.env.footnotes.list.length;
	
		      state.md.inline.parse(
		        state.src.slice(labelStart, labelEnd),
		        state.md,
		        state.env,
		        tokens = []
		      );
	
		      token      = state.push('footnote_ref', '', 0);
		      token.meta = { id: footnoteId };
	
		      state.env.footnotes.list[footnoteId] = { tokens: tokens };
		    }
	
		    state.pos = labelEnd + 1;
		    state.posMax = max;
		    return true;
		  }
	
		  // Process footnote references ([^...])
		  function footnote_ref(state, silent) {
		    var label,
		        pos,
		        footnoteId,
		        footnoteSubId,
		        token,
		        max = state.posMax,
		        start = state.pos;
	
		    // should be at least 4 chars - "[^x]"
		    if (start + 3 > max) { return false; }
	
		    if (!state.env.footnotes || !state.env.footnotes.refs) { return false; }
		    if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
		    if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
	
		    for (pos = start + 2; pos < max; pos++) {
		      if (state.src.charCodeAt(pos) === 0x20) { return false; }
		      if (state.src.charCodeAt(pos) === 0x0A) { return false; }
		      if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
		        break;
		      }
		    }
	
		    if (pos === start + 2) { return false; } // no empty footnote labels
		    if (pos >= max) { return false; }
		    pos++;
	
		    label = state.src.slice(start + 2, pos - 1);
		    if (typeof state.env.footnotes.refs[':' + label] === 'undefined') { return false; }
	
		    if (!silent) {
		      if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
	
		      if (state.env.footnotes.refs[':' + label] < 0) {
		        footnoteId = state.env.footnotes.list.length;
		        state.env.footnotes.list[footnoteId] = { label: label, count: 0 };
		        state.env.footnotes.refs[':' + label] = footnoteId;
		      } else {
		        footnoteId = state.env.footnotes.refs[':' + label];
		      }
	
		      footnoteSubId = state.env.footnotes.list[footnoteId].count;
		      state.env.footnotes.list[footnoteId].count++;
	
		      token      = state.push('footnote_ref', '', 0);
		      token.meta = { id: footnoteId, subId: footnoteSubId };
		    }
	
		    state.pos = pos;
		    state.posMax = max;
		    return true;
		  }
	
		  // Glue footnote tokens to end of token stream
		  function footnote_tail(state) {
		    var i, l, j, t, lastParagraph, list, token, tokens, current, currentLabel,
		        insideRef = false,
		        refTokens = {};
	
		    if (!state.env.footnotes) { return; }
	
		    state.tokens = state.tokens.filter(function(tok) {
		      if (tok.type === 'footnote_reference_open') {
		        insideRef = true;
		        current = [];
		        currentLabel = tok.meta.label;
		        return false;
		      }
		      if (tok.type === 'footnote_reference_close') {
		        insideRef = false;
		        // prepend ':' to avoid conflict with Object.prototype members
		        refTokens[':' + currentLabel] = current;
		        return false;
		      }
		      if (insideRef) { current.push(tok); }
		      return !insideRef;
		    });
	
		    if (!state.env.footnotes.list) { return; }
		    list = state.env.footnotes.list;
	
		    token = new state.Token('footnote_block_open', '', 1);
		    state.tokens.push(token);
	
		    for (i = 0, l = list.length; i < l; i++) {
		      token      = new state.Token('footnote_open', '', 1);
		      token.meta = { id: i };
		      state.tokens.push(token);
	
		      if (list[i].tokens) {
		        tokens = [];
	
		        token          = new state.Token('paragraph_open', 'p', 1);
		        token.block    = true;
		        tokens.push(token);
	
		        token          = new state.Token('inline', '', 0);
		        token.children = list[i].tokens;
		        token.content  = '';
		        tokens.push(token);
	
		        token          = new state.Token('paragraph_close', 'p', -1);
		        token.block    = true;
		        tokens.push(token);
	
		      } else if (list[i].label) {
		        tokens = refTokens[':' + list[i].label];
		      }
	
		      state.tokens = state.tokens.concat(tokens);
		      if (state.tokens[state.tokens.length - 1].type === 'paragraph_close') {
		        lastParagraph = state.tokens.pop();
		      } else {
		        lastParagraph = null;
		      }
	
		      t = list[i].count > 0 ? list[i].count : 1;
		      for (j = 0; j < t; j++) {
		        token      = new state.Token('footnote_anchor', '', 0);
		        token.meta = { id: i, subId: j };
		        state.tokens.push(token);
		      }
	
		      if (lastParagraph) {
		        state.tokens.push(lastParagraph);
		      }
	
		      token = new state.Token('footnote_close', '', -1);
		      state.tokens.push(token);
		    }
	
		    token = new state.Token('footnote_block_close', '', -1);
		    state.tokens.push(token);
		  }
	
		  md.block.ruler.before('reference', 'footnote_def', footnote_def, { alt: [ 'paragraph', 'reference' ] });
		  md.inline.ruler.after('image', 'footnote_inline', footnote_inline);
		  md.inline.ruler.after('footnote_inline', 'footnote_ref', footnote_ref);
		  md.core.ruler.after('inline', 'footnote_tail', footnote_tail);
		};
	
	
	/***/ },
	/* 78 */
	/***/ function(module, exports) {
	
		'use strict';
	
	
		module.exports = function ins_plugin(md) {
		  // Insert each marker as a separate text token, and add it to delimiter list
		  //
		  function tokenize(state, silent) {
		    var i, scanned, token, len, ch,
		        start = state.pos,
		        marker = state.src.charCodeAt(start);
	
		    if (silent) { return false; }
	
		    if (marker !== 0x3D/* = */) { return false; }
	
		    scanned = state.scanDelims(state.pos, true);
		    len = scanned.length;
		    ch = String.fromCharCode(marker);
	
		    if (len < 2) { return false; }
	
		    if (len % 2) {
		      token         = state.push('text', '', 0);
		      token.content = ch;
		      len--;
		    }
	
		    for (i = 0; i < len; i += 2) {
		      token         = state.push('text', '', 0);
		      token.content = ch + ch;
	
		      state.delimiters.push({
		        marker: marker,
		        jump:   i,
		        token:  state.tokens.length - 1,
		        level:  state.level,
		        end:    -1,
		        open:   scanned.can_open,
		        close:  scanned.can_close
		      });
		    }
	
		    state.pos += scanned.length;
	
		    return true;
		  }
	
	
		  // Walk through delimiter list and replace text tokens with tags
		  //
		  function postProcess(state) {
		    var i, j,
		        startDelim,
		        endDelim,
		        token,
		        loneMarkers = [],
		        delimiters = state.delimiters,
		        max = state.delimiters.length;
	
		    for (i = 0; i < max; i++) {
		      startDelim = delimiters[i];
	
		      if (startDelim.marker !== 0x3D/* = */) {
		        continue;
		      }
	
		      if (startDelim.end === -1) {
		        continue;
		      }
	
		      endDelim = delimiters[startDelim.end];
	
		      token         = state.tokens[startDelim.token];
		      token.type    = 'mark_open';
		      token.tag     = 'mark';
		      token.nesting = 1;
		      token.markup  = '==';
		      token.content = '';
	
		      token         = state.tokens[endDelim.token];
		      token.type    = 'mark_close';
		      token.tag     = 'mark';
		      token.nesting = -1;
		      token.markup  = '==';
		      token.content = '';
	
		      if (state.tokens[endDelim.token - 1].type === 'text' &&
		          state.tokens[endDelim.token - 1].content === '=') {
	
		        loneMarkers.push(endDelim.token - 1);
		      }
		    }
	
		    // If a marker sequence has an odd number of characters, it's splitted
		    // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
		    // start of the sequence.
		    //
		    // So, we have to move all those markers after subsequent s_close tags.
		    //
		    while (loneMarkers.length) {
		      i = loneMarkers.pop();
		      j = i + 1;
	
		      while (j < state.tokens.length && state.tokens[j].type === 'mark_close') {
		        j++;
		      }
	
		      j--;
	
		      if (i !== j) {
		        token = state.tokens[j];
		        state.tokens[j] = state.tokens[i];
		        state.tokens[i] = token;
		      }
		    }
		  }
	
		  md.inline.ruler.before('emphasis', 'mark', tokenize);
		  md.inline.ruler2.before('emphasis', 'mark', postProcess);
		};
	
	
	/***/ },
	/* 79 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = figure_plugin;
		function figure(state, line, endline, silent) {
		  if (!state.isEmpty(line + 1)) {
		    return false;
		  }
		  var src = state.getLines(line, line + 1).trim();
		  var patt = /!\[([^\]]*)\]\(([^\)]*)\)/;
		  var res = src.match(patt);
		  if (!res) {
		    return false;
		  }
		  state.line = line + 2;
		  if (silent) {
		    return true;
		  }
		  var token = state.push('paragraph_open', 'figure', 1);
		  token.map = [line, line + 1];
		  token = state.push('inline', 0);
		  token.content = src;
		  token.children = [];
		  token = state.push('paragraph_open', 'figcaption', 1);
		  token.map = [line, line + 1];
		  token = state.push('inline', 0);
		  token.content = res[1];
		  token.children = [];
		  state.push('paragraph_close', 'figcaption', -1);
		  state.push('paragraph_close', 'figure', -1);
		  return true;
		}
	
		function figure_plugin(md) {
		  md.block.ruler.before('paragraph', 'figure', figure);
		}
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 13 */
/***/ function(module, exports) {

	/*jshint -W069 */
	/*global angular:false */
	angular.module('api', [])
	    .factory('API', ['$q', '$http', '$rootScope', function($q, $http, $rootScope) {
	        'use strict';
	
	        /**
	         * Verarbeitet AJAX-Requests vom Frontend, liefert Inhalte aus, regelt Benutzeranmeldung, überwacht Benutzeraktivitäten
	
	         * @class API
	         * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
	         * @param {string} [domainOrOptions.domain] - The project domain
	         * @param {string} [domainOrOptions.cache] - An angularjs cache implementation
	         * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
	         * @param {string} [cache] - An angularjs cache implementation
	         */
	        var API = (function() {
	            function API(options, cache) {
	                var domain = (typeof options === 'object') ? options.domain : options;
	                this.domain = typeof(domain) === 'string' ? domain : '';
	                if (this.domain.length === 0) {
	                    throw new Error('Domain parameter must be specified as a string.');
	                }
	                cache = cache || ((typeof options === 'object') ? options.cache : cache);
	                this.cache = cache;
	                this.token = (typeof options === 'object') ? (options.token ? options.token : {}) : {};
	            }
	
	            API.prototype.$on = function($scope, path, handler) {
	                var url = domain + path;
	                $scope.$on(url, function() {
	                    handler();
	                });
	                return this;
	            };
	
	            API.prototype.$broadcast = function(path) {
	                var url = domain + path;
	                //cache.remove(url);
	                $rootScope.$broadcast(url);
	                return this;
	            };
	
	            API.transformRequest = function(obj) {
	                var str = [];
	                for (var p in obj) {
	                    var val = obj[p];
	                    if (angular.isArray(val)) {
	                        val.forEach(function(val) {
	                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(val));
	                        });
	                    } else {
	                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(val));
	                    }
	                }
	                return str.join("&");
	            };
	
	            /**
	             * Set Token
	             * @method
	             * @name API#setToken
	             * @param {string} value - token's value
	             * @param {string} headerOrQueryName - the header or query name to send the token at
	             * @param {boolean} isQuery - true if send the token as query param, otherwise, send as header param
	             *
	             */
	            API.prototype.setToken = function(value, headerOrQueryName, isQuery) {
	                this.token.value = value;
	                this.token.headerOrQueryName = headerOrQueryName;
	                this.token.isQuery = isQuery;
	            };
	
	            /**
	             * 
	             * @method
	             * @name API#postComments
	             * @param {} comment - Verarbeitet AJAX-Requests vom Frontend, liefert Inhalte aus, regelt Benutzeranmeldung, überwacht Benutzeraktivitäten
	
	             * 
	             */
	            API.prototype.postComments = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/comments';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                if (parameters['comment'] !== undefined) {
	                    body = parameters['comment'];
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'POST',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#getMeta
	             * @param {string} conditions - Item filtering for mongoose
	             * @param {string} projections - Field filtering for mongoose
	             * @param {string} options - Options for mongoose
	             * 
	             */
	            API.prototype.getMeta = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/meta';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                if (parameters['conditions'] !== undefined) {
	                    queryParameters['conditions'] = parameters['conditions'];
	                }
	
	                if (parameters['projections'] !== undefined) {
	                    queryParameters['projections'] = parameters['projections'];
	                }
	
	                if (parameters['options'] !== undefined) {
	                    queryParameters['options'] = parameters['options'];
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var cached = parameters.$cache && parameters.$cache.get(url);
	                if (cached !== undefined && parameters.$refresh !== true) {
	                    deferred.resolve(cached);
	                    return deferred.promise;
	                }
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'GET',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#postMeta
	             * @param {} meta - A meta item to create
	             * 
	             */
	            API.prototype.postMeta = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/meta';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                if (parameters['meta'] !== undefined) {
	                    body = parameters['meta'];
	                }
	
	                if (parameters['meta'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: meta'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'POST',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#getMetaBy_id
	             * @param {string} _id - A meta item _id, which is a string
	             * 
	             */
	            API.prototype.getMetaBy_id = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/meta/{_id}';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                path = path.replace('{_id}', parameters['_id']);
	
	                if (parameters['_id'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: _id'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var cached = parameters.$cache && parameters.$cache.get(url);
	                if (cached !== undefined && parameters.$refresh !== true) {
	                    deferred.resolve(cached);
	                    return deferred.promise;
	                }
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'GET',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#patchMetaBy_id
	             * @param {} patches - An array of JSON patch documents
	             * @param {string} _id - A meta item _id, which is a string
	             * 
	             */
	            API.prototype.patchMetaBy_id = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/meta/{_id}';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                if (parameters['patches'] !== undefined) {
	                    body = parameters['patches'];
	                }
	
	                if (parameters['patches'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: patches'));
	                    return deferred.promise;
	                }
	
	                path = path.replace('{_id}', parameters['_id']);
	
	                if (parameters['_id'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: _id'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'PATCH',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#deleteMetaBy_id
	             * @param {string} _id - A meta item _id, which is a string
	             * 
	             */
	            API.prototype.deleteMetaBy_id = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/meta/{_id}';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                path = path.replace('{_id}', parameters['_id']);
	
	                if (parameters['_id'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: _id'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'DELETE',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#getUnits
	             * @param {string} conditions - Item filtering for mongoose
	             * @param {string} projections - Field filtering for mongoose
	             * @param {string} options - Options for mongoose
	             * 
	             */
	            API.prototype.getUnits = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/units';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                if (parameters['conditions'] !== undefined) {
	                    queryParameters['conditions'] = parameters['conditions'];
	                }
	
	                if (parameters['projections'] !== undefined) {
	                    queryParameters['projections'] = parameters['projections'];
	                }
	
	                if (parameters['options'] !== undefined) {
	                    queryParameters['options'] = parameters['options'];
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var cached = parameters.$cache && parameters.$cache.get(url);
	                if (cached !== undefined && parameters.$refresh !== true) {
	                    deferred.resolve(cached);
	                    return deferred.promise;
	                }
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'GET',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * Create a new unit
	             * @method
	             * @name API#postUnits
	             * @param {} unit - A new unit document to store
	             * 
	             */
	            API.prototype.postUnits = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/units';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                if (parameters['unit'] !== undefined) {
	                    body = parameters['unit'];
	                }
	
	                if (parameters['unit'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: unit'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'POST',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#getUnitsBy_id
	             * @param {string} _id - Mongodb _id
	             * 
	             */
	            API.prototype.getUnitsBy_id = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/units/{_id}';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                path = path.replace('{_id}', parameters['_id']);
	
	                if (parameters['_id'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: _id'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var cached = parameters.$cache && parameters.$cache.get(url);
	                if (cached !== undefined && parameters.$refresh !== true) {
	                    deferred.resolve(cached);
	                    return deferred.promise;
	                }
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'GET',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#patchUnitsBy_id
	             * @param {} patches - An array of JSON patch documents
	             * @param {string} _id - Mongodb _id
	             * 
	             */
	            API.prototype.patchUnitsBy_id = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/units/{_id}';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                if (parameters['patches'] !== undefined) {
	                    body = parameters['patches'];
	                }
	
	                if (parameters['patches'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: patches'));
	                    return deferred.promise;
	                }
	
	                path = path.replace('{_id}', parameters['_id']);
	
	                if (parameters['_id'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: _id'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'PATCH',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#deleteUnitsBy_id
	             * @param {string} _id - Mongodb _id
	             * 
	             */
	            API.prototype.deleteUnitsBy_id = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/units/{_id}';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                path = path.replace('{_id}', parameters['_id']);
	
	                if (parameters['_id'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: _id'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'DELETE',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#headUsers
	             * @param {string} email - The email to check for existence
	             * 
	             */
	            API.prototype.headUsers = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/users';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                if (parameters['email'] !== undefined) {
	                    queryParameters['email'] = parameters['email'];
	                }
	
	                if (parameters['email'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: email'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'HEAD',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#postUsers
	             * @param {} user - A new user document to store
	             * 
	             */
	            API.prototype.postUsers = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/users';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                if (parameters['user'] !== undefined) {
	                    body = parameters['user'];
	                }
	
	                if (parameters['user'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: user'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'POST',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#getUsersBy_id
	             * @param {string} _id - Mongodb _id
	             * 
	             */
	            API.prototype.getUsersBy_id = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/users/{_id}';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                path = path.replace('{_id}', parameters['_id']);
	
	                if (parameters['_id'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: _id'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var cached = parameters.$cache && parameters.$cache.get(url);
	                if (cached !== undefined && parameters.$refresh !== true) {
	                    deferred.resolve(cached);
	                    return deferred.promise;
	                }
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'GET',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#patchUsersBy_id
	             * @param {} patches - An array of JSON patch documents
	             * @param {string} _id - Mongodb _id
	             * 
	             */
	            API.prototype.patchUsersBy_id = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/users/{_id}';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                if (parameters['patches'] !== undefined) {
	                    body = parameters['patches'];
	                }
	
	                if (parameters['patches'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: patches'));
	                    return deferred.promise;
	                }
	
	                path = path.replace('{_id}', parameters['_id']);
	
	                if (parameters['_id'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: _id'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'PATCH',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#deleteUsersBy_id
	             * @param {string} _id - Mongodb _id
	             * 
	             */
	            API.prototype.deleteUsersBy_id = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/users/{_id}';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                path = path.replace('{_id}', parameters['_id']);
	
	                if (parameters['_id'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: _id'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'DELETE',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#getUsersBy_idEmailsByType
	             * @param {string} _id - Mongodb _id
	             * @param {string} type - Email type
	             * 
	             */
	            API.prototype.getUsersBy_idEmailsByType = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/users/{_id}/emails/{type}';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                path = path.replace('{_id}', parameters['_id']);
	
	                if (parameters['_id'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: _id'));
	                    return deferred.promise;
	                }
	
	                path = path.replace('{type}', parameters['type']);
	
	                if (parameters['type'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: type'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var cached = parameters.$cache && parameters.$cache.get(url);
	                if (cached !== undefined && parameters.$refresh !== true) {
	                    deferred.resolve(cached);
	                    return deferred.promise;
	                }
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'GET',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#putUsersBy_idPassword
	             * @param {} data - old and new password
	             * @param {string} _id - Mongodb _id
	             * 
	             */
	            API.prototype.putUsersBy_idPassword = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/users/{_id}/password';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                if (parameters['data'] !== undefined) {
	                    body = parameters['data'];
	                }
	
	                path = path.replace('{_id}', parameters['_id']);
	
	                if (parameters['_id'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: _id'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'PUT',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#getSubjects
	             * @param {string} search - a string to search for
	             * 
	             */
	            API.prototype.getSubjects = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/subjects';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                if (parameters['search'] !== undefined) {
	                    queryParameters['search'] = parameters['search'];
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var cached = parameters.$cache && parameters.$cache.get(url);
	                if (cached !== undefined && parameters.$refresh !== true) {
	                    deferred.resolve(cached);
	                    return deferred.promise;
	                }
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'GET',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	            /**
	             * 
	             * @method
	             * @name API#postWatches
	             * @param {} message - Verarbeitet AJAX-Requests vom Frontend, liefert Inhalte aus, regelt Benutzeranmeldung, überwacht Benutzeraktivitäten
	
	             * 
	             */
	            API.prototype.postWatches = function(parameters) {
	                if (parameters === undefined) {
	                    parameters = {};
	                }
	                var deferred = $q.defer();
	
	                var domain = this.domain;
	                var path = '/watches';
	
	                var body;
	                var queryParameters = {};
	                var headers = {};
	                var form = {};
	
	                if (this.token.isQuery) {
	                    queryParameters[this.token.headerOrQueryName] = this.token.value;
	                } else if (this.token.headerOrQueryName) {
	                    headers[this.token.headerOrQueryName] = this.token.value;
	                } else {
	                    headers['Authorization'] = 'Bearer ' + this.token.value;
	                }
	
	                if (parameters['message'] !== undefined) {
	                    body = parameters['message'];
	                }
	
	                if (parameters['message'] === undefined) {
	                    deferred.reject(new Error('Missing required  parameter: message'));
	                    return deferred.promise;
	                }
	
	                if (parameters.$queryParameters) {
	                    Object.keys(parameters.$queryParameters)
	                        .forEach(function(parameterName) {
	                            var parameter = parameters.$queryParameters[parameterName];
	                            queryParameters[parameterName] = parameter;
	                        });
	                }
	
	                var url = domain + path;
	                var options = {
	                    timeout: parameters.$timeout,
	                    method: 'POST',
	                    url: url,
	                    params: queryParameters,
	                    data: body,
	                    headers: headers
	                };
	                if (Object.keys(form).length > 0) {
	                    options.data = form;
	                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	                    options.transformRequest = API.transformRequest;
	                }
	                $http(options)
	                    .success(function(data, status, headers, config) {
	                        deferred.resolve(data);
	                        if (parameters.$cache !== undefined) {
	                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
	                        }
	                    })
	                    .error(function(data, status, headers, config) {
	                        deferred.reject({
	                            status: status,
	                            headers: headers,
	                            config: config,
	                            body: data
	                        });
	                    });
	
	                return deferred.promise;
	            };
	
	            return API;
	        })();
	
	        return API;
	    }]);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _youtubeDirective = __webpack_require__(15);
	
	var _youtubeDirective2 = _interopRequireDefault(_youtubeDirective);
	
	var _youtubeService = __webpack_require__(16);
	
	var _youtubeService2 = _interopRequireDefault(_youtubeService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('wbt.youtube', []).directive('youtube', _youtubeDirective2.default).factory('youtube', _youtubeService2.default).name;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = youtubeDirective;
	/*@ngInject*/function youtubeDirective($window, youtube, api) {
	  function link(scope, element) {
	    var tag = document.createElement('script');
	    tag.src = 'https://www.youtube.com/iframe_api';
	    var firstScriptTag = document.getElementsByTagName('script')[0];
	    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	    var player = undefined;
	    youtube.onReady(function () {
	      player = setupPlayer(scope, element);
	    });
	    function setupPlayer(scope, element) {
	      var options = {
	        playerVars: {
	          autoplay: 0,
	          html5: 1,
	          modestbranding: 1,
	          showinfo: 1,
	          controls: 1
	        },
	        height: scope.height,
	        width: scope.width,
	        videoId: scope.videoid,
	        events: {
	          onStateChange: onStateChange
	        }
	      };
	      if (scope.list && scope.listType) {
	        options.playerVars.list = scope.list;
	        options.playerVars.listType = scope.listType;
	        delete options.videoId;
	      }
	      if (scope.theme) {
	        options.theme = scope.theme;
	      }
	      if (scope.color) {
	        options.color = scope.color;
	      }
	      return new $window.YT.Player(element.children()[0], options);
	    }
	    function onStateChange(event) {
	      var message = {
	        time: player.getCurrentTime()
	      };
	      switch (event.data) {
	        case $window.YT.PlayerState.PLAYING:
	          message.state = 'PLAYING';
	          break;
	        case $window.YT.PlayerState.ENDED:
	          message.state = 'ENDED';
	          break;
	        case $window.YT.PlayerState.UNSTARTED:
	          message.state = 'NOT PLAYING';
	          break;
	        case $window.YT.PlayerState.PAUSED:
	          message.state = 'PAUSED';
	          break;
	      }
	      if (!message.state) {
	        return;
	      }
	      if (scope.list && scope.listType) {
	        message.type = 'list';
	        message.listType = scope.listType;
	        message.list = scope.list;
	      } else {
	        message.type = 'video';
	        message.video = scope.videoid;
	      }
	      return api.postWatches({ message: message });
	    }
	  }
	  return {
	    restrict: 'E',
	    scope: {
	      height: '@',
	      width: '@',
	      videoid: '@',
	      list: '@',
	      listType: '@'
	    },
	    template: '<div></div>',
	    link: link
	  };
	}
	youtubeDirective.$inject = ["$window", "youtube", "api"];

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = youtubeService;
	/*@ngInject*/function youtubeService($q, $window) {
	  var deferred = $q.defer();
	  var apiReady = deferred.promise;
	  $window.onYouTubeIframeAPIReady = function () {
	    deferred.resolve();
	  };
	  return {
	    onReady: function onReady(callback) {
	      apiReady.then(callback);
	    }
	  };
	}
	youtubeService.$inject = ["$q", "$window"];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	exports.run = run;
	
	var _main = __webpack_require__(18);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _formly = __webpack_require__(106);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*@ngInject*/function config($locationProvider, $compileProvider, $httpProvider, $urlRouterProvider, stateHelperProvider, formlyConfigProvider, RestangularProvider) {
	  $locationProvider.html5Mode(true);
	  $compileProvider.debugInfoEnabled(false);
	  $httpProvider.interceptors.push('userInterceptor');
	  $httpProvider.defaults.paramSerializer = '$httpParamSerializerJQLike';
	  RestangularProvider.setBaseUrl('api');
	  RestangularProvider.setRestangularFields({
	    id: '_id'
	  });
	  stateHelperProvider.state(_main2.default);
	  $urlRouterProvider.otherwise('/home');
	  formlyConfigProvider.disableWarnings = true;
	  formlyConfigProvider.setWrapper(_formly.wrappers);
	  formlyConfigProvider.setType(_formly.types);
	}
	config.$inject = ["$locationProvider", "$compileProvider", "$httpProvider", "$urlRouterProvider", "stateHelperProvider", "formlyConfigProvider", "RestangularProvider"];
	
	/*@ngInject*/function run($rootScope, $state, $stateParams, Permission, user, formlyValidationMessages) {
	  $rootScope.$state = $state;
	  $rootScope.$stateParams = $stateParams;
	  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
	    $rootScope.prevState = fromState;
	    $rootScope.prevParams = fromParams;
	  });
	  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
	    console.error(error); // eslint-disable-line no-console
	  });
	  $rootScope.$on('$stateChangePermissionDenied', function (event, toState, toParams) {
	    user.login().result.then(function () {
	      $state.go(toState.name, toParams);
	    }, function () {
	      if ($rootScope.prevState.name === '') {
	        $state.go('main.home');
	      }
	    });
	  });
	  Permission.defineRole('anonymous', function () {
	    return !user.authenticated;
	  });
	  Permission.defineRole('user', function () {
	    return user.role === 'user';
	  });
	  Permission.defineRole('author', function () {
	    return user.role === 'author' ? true : false;
	  });
	  formlyValidationMessages.addStringMessage('json', 'JSON ist invalid');
	  formlyValidationMessages.addTemplateOptionValueMessage('minlength', 'minlength', 'Bitte mindestens', 'Zeichen eingeben');
	  formlyValidationMessages.addTemplateOptionValueMessage('maxlength', 'maxlength', 'Bitte höchstens', 'Zeichen eingeben');
	  formlyValidationMessages.addTemplateOptionValueMessage('required', 'label', '', 'ist erforderlich');
	  formlyValidationMessages.messages.email = function ($viewValue) {
	    return $viewValue + ' ist keine gültige E-Mail-Adresse';
	  };
	}
	run.$inject = ["$rootScope", "$state", "$stateParams", "Permission", "user", "formlyValidationMessages"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main = __webpack_require__(19);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _mainController = __webpack_require__(20);
	
	var _mainController2 = _interopRequireDefault(_mainController);
	
	var _home = __webpack_require__(22);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _contact = __webpack_require__(24);
	
	var _contact2 = _interopRequireDefault(_contact);
	
	var _impressum = __webpack_require__(26);
	
	var _impressum2 = _interopRequireDefault(_impressum);
	
	var _content = __webpack_require__(28);
	
	var _content2 = _interopRequireDefault(_content);
	
	var _download = __webpack_require__(46);
	
	var _download2 = _interopRequireDefault(_download);
	
	var _register = __webpack_require__(49);
	
	var _register2 = _interopRequireDefault(_register);
	
	var _user = __webpack_require__(52);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _author = __webpack_require__(59);
	
	var _author2 = _interopRequireDefault(_author);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'main',
	  url: '',
	  abstract: true,
	  templateUrl: _main2.default,
	  controller: _mainController2.default,
	  controllerAs: 'main',
	  resolve: {
	    meta: /*@ngInject*/["api", function meta(api) {
	      return api.getMeta();
	    }]
	  },
	  children: [_home2.default, _contact2.default, _impressum2.default, _content2.default, _download2.default, _register2.default, _user2.default, _author2.default]
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var path = 'dist/main/main.jade';
	var html = "<nav role=\"navigation\" class=\"navbar navbar-inverse navbar-static-top\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" ng-click=\"main.menuCollapse=!main.menuCollapse\" aria-controls=\"mainnav\" aria-expanded=\"{{!main.menuCollapse}}\" aria-label=\"{{main.menuCollapse ? 'Menü ausklappen' : 'Menü einklappen'}}\" class=\"navbar-toggle collapsed\"><span class=\"fa fa-bars\"></span></button><a data-ui-sref=\".home\" class=\"navbar-brand\"><span ng-class=\"main.items.home.icon || 'fa-home'\" class=\"fa\"></span> {{main.items.home.menu || 'Statistik für Jedermann'}}</a></div><div id=\"mainnav\" uib-collapse=\"main.menuCollapse\" class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav navbar-left\"><li ui-sref-active=\"active\" ng-repeat=\"i in main.meta | filter : {_id: '!home', active: true}\"><a ui-sref=\".{{i._id}}\"><span ng-if=\"i.icon\" ng-class=\"'fa'+i.icon\" class=\"fa\"></span><span ng-bind=\"i.menu\"></span></a></li></ul><ul ng-if=\"!main.user.authenticated\" class=\"nav navbar-nav navbar-right\"><li><button type=\"button\" ng-click=\"main.user.login()\"><span class=\"fa fa-sign-in\"></span> Anmelden</button></li><li data-ui-sref-active=\"active\"><a data-ui-sref=\".register\"><span class=\"fa fa-user-plus\"></span> registrieren</a></li></ul><ul data-ng-if=\"main.user.authenticated\" class=\"nav navbar-nav navbar-right\"><li><a ui-sref=\"main.user\"><span class=\"fa fa-user\"></span> {{main.user.data.profile.nickname||main.user.data.email}}</a></li><li><button type=\"button\" data-ng-click=\"::main.user.inauthenticate()\"><span aria-hidden=\"true\" class=\"fa fa-sign-out\"></span> Abmelden</button></li></ul></div></div></nav><div ui-view class=\"container\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(21);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var MainCtrl = function MainCtrl($state, $stateParams, user, modals, meta) {
	  _classCallCheck(this, MainCtrl);
	
	  this.$state = $state;
	  this.$stateParams = $stateParams;
	  this.user = user;
	  this.modals = modals;
	  this.ngModelOptions = {
	    updateOn: 'default blur',
	    debounce: {
	      default: 500,
	      blur: 0
	    }
	  };
	  this.meta = meta;
	  this.items = _lodash2.default.indexBy(meta, '_id');
	};
	MainCtrl.$inject = ["$state", "$stateParams", "user", "modals", "meta"];
	
	exports.default = MainCtrl;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _home = __webpack_require__(23);
	
	var _home2 = _interopRequireDefault(_home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'home',
	  url: '/home',
	  templateUrl: _home2.default,
	  controller: /*@ngInject*/["meta", function controller(meta) {
	    this.meta = meta;
	  }],
	  controllerAs: 'home',
	  resolve: {
	    meta: /*@ngInject*/["api", function meta(api) {
	      return api.getMetaBy_id({ _id: 'home' });
	    }]
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	var path = 'dist/main/home/home.jade';
	var html = "<div class=\"jumbo-tron\"><h2 ng-bind=\"home.meta.title\"></h2><div markdown=\"home.meta.body\"></div></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _contact = __webpack_require__(25);
	
	var _contact2 = _interopRequireDefault(_contact);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'contact',
	  url: '/contact',
	  templateUrl: _contact2.default,
	  controller: /*@ngInject*/["meta", function controller(meta) {
	    this.meta = meta;
	  }],
	  controllerAs: 'contact',
	  resolve: {
	    meta: /*@ngInject*/["api", function meta(api) {
	      return api.getMetaBy_id({ _id: 'contact' });
	    }]
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var path = 'dist/main/contact/contact.jade';
	var html = "<h2 ng-bind=\"contact.meta.title\"></h2><div markdown=\"contact.meta.body\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _impressum = __webpack_require__(27);
	
	var _impressum2 = _interopRequireDefault(_impressum);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'impressum',
	  url: '/impressum',
	  templateUrl: _impressum2.default,
	  controller: /*@ngInject*/["meta", function controller(meta) {
	    this.meta = meta;
	  }],
	  controllerAs: 'impressum',
	  resolve: {
	    meta: /*@ngInject*/["api", function meta(api) {
	      return api.getMetaBy_id({ _id: 'impressum' });
	    }]
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	var path = 'dist/main/impressum/impressum.jade';
	var html = "<h2 ng-bind=\"impressum.meta.title\"></h2><div markdown=\"impressum.meta.body\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _content = __webpack_require__(29);
	
	var _content2 = _interopRequireDefault(_content);
	
	var _contentController = __webpack_require__(30);
	
	var _contentController2 = _interopRequireDefault(_contentController);
	
	var _unit = __webpack_require__(31);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'content',
	  url: '/content',
	  templateUrl: _content2.default,
	  controller: _contentController2.default,
	  controllerAs: 'content',
	  data: {
	    permissions: {
	      except: ['anonymous']
	    }
	  },
	  resolve: {
	    units: /*@ngInject*/["api", function units(api) {
	      var query = {
	        projections: 'title requires',
	        options: { sort: 'position' }
	      };
	      return api.getUnits(query);
	    }],
	    meta: /*@ngInject*/["api", function meta(api) {
	      return api.getMetaBy_id({ _id: 'content' });
	    }]
	  },
	  children: [_unit2.default]
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	var path = 'dist/main/content/content.jade';
	var html = "<nav role=\"navigation\" class=\"row\"><div class=\"col-xs-12\"><ul class=\"nav nav-pills\"><li ng-repeat=\"unit in content.units track by unit._id\" ui-sref-active=\"active\"><a ui-sref=\".unit.description({unit: unit._id})\" ng-bind=\"unit.title\" ng-class=\"{'text-success': main.user.complete(unit._id), 'text-primary': main.user.requiresComplete(unit.requires)&amp;&amp;!main.user.complete(unit._id), 'text-warning': !main.user.requiresComplete(unit.requires)&amp;&amp;!main.user.complete(unit._id)}\"></a></li></ul></div></nav><section class=\"row\"><div ui-view class=\"col-xs-12\"><div markdown=\"content.meta.body\"></div></div></section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var ContentCtrl = function ContentCtrl(units, meta) {
	  _classCallCheck(this, ContentCtrl);
	
	  this.units = units;
	  this.meta = meta;
	};
	ContentCtrl.$inject = ["units", "meta"];
	
	exports.default = ContentCtrl;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(32);
	
	var _unit = __webpack_require__(36);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _unitController = __webpack_require__(37);
	
	var _unitController2 = _interopRequireDefault(_unitController);
	
	var _description = __webpack_require__(38);
	
	var _description2 = _interopRequireDefault(_description);
	
	var _test = __webpack_require__(40);
	
	var _test2 = _interopRequireDefault(_test);
	
	var _topic = __webpack_require__(43);
	
	var _topic2 = _interopRequireDefault(_topic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import test from './test';
	
	exports.default = {
	  name: 'unit',
	  url: '/:unit',
	  templateUrl: _unit2.default,
	  controller: _unitController2.default,
	  controllerAs: 'unit',
	  abstract: true,
	  resolve: {
	    unit: /*@ngInject*/["api", "$stateParams", function unit(api, $stateParams) {
	      var query = {
	        projections: 'title subtitle description requires topics._id topics.title test',
	        _id: $stateParams.unit
	      };
	      return api.getUnitsBy_id(query);
	    }]
	  },
	  children: [_description2.default, _test2.default, _topic2.default]
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./subkapitel.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./subkapitel.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, ".subkapitel {\n  background-color: #E9EAED;\n  box-shadow: 0px 1px 1px #888888;\n  line-height: 2em;\n}", ""]);
	
	// exports


/***/ },
/* 34 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 36 */
/***/ function(module, exports) {

	var path = 'dist/main/content/unit/unit.jade';
	var html = "<header class=\"row\"><div class=\"col-sm-4\"><h2><a ui-sref=\".description\" ng-bind=\"unit.unit.title\"></a></h2></div><div class=\"col-sm-8\"><h2 ng-bind=\"unit.unit.subtitle\"></h2></div></header><div class=\"row\"><nav class=\"col-sm-4\"><ul class=\"nav nav-pills nav-stacked\"><li ng-repeat=\"topic in unit.unit.topics track by topic._id\" ui-sref-active=\"active\"><a ui-sref=\".topic({topic: topic._id})\" ng-bind=\"topic.title\"></a></li><li ng-if=\"unit.unit.test.active\" data-ui-sref-active=\"active\"><a data-ui-sref=\"main.content.unit.test\">Test</a></li></ul></nav><main data-ui-view class=\"col-sm-8 subkapitel\"></main></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _ = __webpack_require__(21);
	/*@ngInject*/
	var UnitCtrl = function () {
	  function UnitCtrl(unit, units) {
	    _classCallCheck(this, UnitCtrl);
	
	    this.unit = unit;
	    this.units = units;
	  }
	  UnitCtrl.$inject = ["unit", "units"];
	
	  _createClass(UnitCtrl, [{
	    key: 'requires',
	    get: function get() {
	      return _.transform(this.unit.requires, function (result, r) {
	        var unit = _.find(this.units, { _id: r });
	        if (unit) {
	          result.push(unit);
	        }
	      }, [], this);
	    }
	  }]);
	
	  return UnitCtrl;
	}();
	
	exports.default = UnitCtrl;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _description = __webpack_require__(39);
	
	var _description2 = _interopRequireDefault(_description);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'description',
	  url: '',
	  templateUrl: _description2.default
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	var path = 'dist/main/content/unit/description/description.jade';
	var html = "<div markdown=\"unit.unit.description\" math-jax></div><h4 ng-hide=\"unit.unit.requires.length===0\">Voraussetzungen</h4><ul ng-hide=\"unit.unit.requires.length===0\" class=\"list-unstyled\"><li ng-repeat=\"r in unit.requires track by r._id\"><a ng-bind=\"r.title\" ui-sref=\".({unit: r._id})\"></a></li></ul>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _test = __webpack_require__(41);
	
	var _test2 = _interopRequireDefault(_test);
	
	var _testController = __webpack_require__(42);
	
	var _testController2 = _interopRequireDefault(_testController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'test',
	  url: '/test',
	  templateUrl: _test2.default,
	  controller: _testController2.default,
	  controllerAs: 'test',
	  resolve: {
	    tests: /*@ngInject*/["$http", "$stateParams", function tests($http, $stateParams) {
	      return $http.get(['api', 'units', $stateParams.unit, 'summaries', 'test'].join('/'));
	    }]
	  }
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	var path = 'dist/main/content/unit/test/test.jade';
	var html = "<h3>Testaufgaben, Durchgang {{test.run}}</h3><uib-progressbar type=\"info\" value=\"test.count\" max=\"test.tests.length\" title=\"Fortschritt\">{{test.count}}/{{test.tests.length}}</uib-progressbar><uib-progressbar type=\"success\" value=\"test.score.current\" max=\"test.score.max\" title=\"Punkte\">{{test.score.current}}/{{test.score.max}}</uib-progressbar><uib-tabset justified=\"true\"><uib-tab heading=\"Aufgaben\" active=\"true\"><h4>Aufgabe {{test.form.$submitted ? test.count : test.count+1}}</h4><div markdown=\"test.tests[test.item].text\"></div><form novalidate name=\"test.form\" ng-switch=\"test.tests[test.item].type\" ng-submit=\"test.submit()\"><div ng-switch-when=\"input\" ng-class=\"{'has-success': test.form.$submitted&amp;&amp;test.output.correct, 'has-error': test.form.$submitted&amp;&amp;!test.output.correct}\" class=\"form-group\"><label for=\"item\">Antwort</label><input id=\"item\" type=\"text\" name=\"item\" ng-model=\"test.response\" class=\"form-control\"><p ng-bind=\"test.output.feedback\" class=\"help-block\"></p></div><div ng-switch-when=\"single\" ng-class=\"{'has-success': test.form.$submitted&amp;&amp;test.response.correct, 'has-error': test.form.$submitted&amp;&amp;!test.response.correct}\" class=\"form-group\"><div ng-repeat=\"c in test.tests[test.item].choices track by c._id\" class=\"radio\"><label><input type=\"radio\" name=\"item\" ng-value=\"c\" ng-model=\"test.response\"> {{c.text}}</label></div><p ng-bind=\"test.response.feedback\" ng-show=\"test.form.$submitted\" class=\"help-block\"></p></div><div ng-switch-when=\"multiple\" class=\"form-group\"><div ng-repeat=\"c in test.tests[test.item].choices track by c._id\" ng-class=\"{'has-success': test.form.$submitted&amp;&amp;!!test.response[c._id]===c.correct, 'has-error': test.form.$submitted&amp;&amp;!!test.response[c._id]!==c.correct}\"><div class=\"checkbox\"><label><input type=\"checkbox\" name=\"{{'item'+$index}}\" ng-model=\"test.response[c._id]\"> {{c.text}}</label></div><p ng-bind=\"c.feedback\" ng-show=\"test.form.$submitted\" class=\"help-block\"></p></div></div><div class=\"form-group\"><button type=\"submit\" ng-if=\"!test.form.$submitted\" ng-class=\"{'btn-primary': test.form.$valid, 'btn-disabled': test.form.$invalid}\" ng-disabled=\"test.form.$invalid\" class=\"btn\">Antwort abschicken</button><button type=\"button\" ng-if=\"test.form.$submitted\" ng-click=\"test.next()\" ng-bind=\"test.count === test.tests.length ? 'Test wiederholen' : 'Nächste Aufgabe'\" class=\"btn btn-default\"></button></div></form></uib-tab><uib-tab heading=\"Verlauf\" onselect=\"test.guesses()\"><table class=\"table\"><thead><tr><th>Durchgang</th><th>Punkte</th></tr></thead><tbody><tr><th colspan=\"2\">Abgeschlossen</th></tr><tr ng-if=\"test.run &gt; 1\" ng-repeat=\"i in test.score.runs | limitTo : test.run-1 track by $index\"><th ng-bind=\"$index+1\"></th><td ng-bind=\"i\"></td></tr><tr ng-if=\"test.count &gt; 0\"><th colspan=\"2\">Aktuell ({{test.count}} Aufgaben abgeschlossen)</th></tr><tr ng-if=\"test.count &gt; 0\"><th ng-bind=\"test.run\"></th><td ng-bind=\"test.score.runs[test.run-1]\"></td></tr><tr ng-if=\"test.count + test.run === 1\"><td colspan=\"2\">Du hast diesen Test noch nie gestartet.</td></tr></tbody></table></uib-tab><uib-tab heading=\"Infos\"><h4>Aufgabentypen</h4><dl class=\"dl-horizontal\"><dt>Einfachauswahl</dt><dd>Eine der angebotenen Antwortmöglichkeiten ist korrekt. Für die korrekte Beantwortung bekommst du einen Punkt.</dd><dt>Mehrfachauswahl</dt><dd>Jede der angebotenen Aussagen ist entweder korrekt oder falsch und muss explizit mittels Kontrollkästchen beantwortet werden. Jede korrekt ab- bzw. angewählte Aussage bringt dir einen Punkt, man kann also maximal so viele Punkte bekommen wie es Aussagen in einer Aufgabe gibt. Punktabzug bei Fehlern gibt es nicht.</dd><dt>Ausfüllen</dt><dd>Es gibt keine Antwortoptionen, sondern du musst eine kurze Lösung selbst generieren, z.B. eine Rechenaufgabe usw.</dd></dl><h4>Feedback</h4><p>Auf deine Antwort bekommst du ein Feedback. Bei Auswahl-Aufgaben kannst du auch dann noch die anderen Antworten anwählen um deren Feedback zu sehen, dies wird dann aber nicht mehr als deine Antwort gewertet.</p></uib-tab></uib-tabset>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(21);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var TestCtrl = function () {
	  function TestCtrl(test, $http, tests, unit) {
	    _classCallCheck(this, TestCtrl);
	
	    this.$http = $http;
	    this.test = test;
	    this.unit = unit;
	    this.shuffle = test.shuffle(unit);
	    this.init(tests);
	  }
	  TestCtrl.$inject = ["test", "$http", "tests", "unit"];
	
	  _createClass(TestCtrl, [{
	    key: 'init',
	    value: function init(tests) {
	      this.tests = tests.data.tests;
	      if (this.shuffle.items) {
	        this.tests = _lodash2.default.shuffle(this.tests);
	      }
	      this.guess = tests.data.guess;
	      this.run = tests.data.run;
	      this.count = this.guess.responses.length;
	      this.item = this.test.item(this.tests, this.guess);
	      if (this.shuffle.choices) {
	        this.tests[this.item].choices = _lodash2.default.shuffle(this.tests[this.item].choices);
	      }
	      this.score = {
	        max: _lodash2.default.sum(this.tests, this.test.maxPoints) || 0,
	        current: this.test.runPoints(this.tests, this.guess)
	      };
	      this.response = this.test.input(this.tests[this.item]);
	      this.output = null;
	    }
	  }, {
	    key: 'submit',
	    value: function submit() {
	      var _this = this;
	
	      var item = this.tests[this.item];
	      var response = this.test.response(item, this.response);
	      return this.$http.post('api/guesses/' + this.guess._id + '/responses', response).then(function (res) {
	        _this.guess.responses.push(res.data);
	        _this.score.current += _this.test.points(item, response.value);
	        if (item.type === 'input') {
	          _this.output = _lodash2.default.find(item.choices, { text: response.value });
	          if (!_this.output) {
	            _this.output = {
	              correct: false,
	              feedback: 'Diese Antwort ist leider falsch'
	            };
	          }
	        }
	        _this.count += 1;
	        return res;
	      }, function (e) {
	        _this.error = e;
	        return e;
	      });
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      var _this2 = this;
	
	      this.form.$submitted = false;
	      this.form.$setPristine();
	      if (this.count === this.tests.length) {
	        return this.$http.get('api/units/' + this.unit._id + '/summaries/test').then(function (res) {
	          _this2.init(res);
	          return res;
	        }, function (e) {
	          _this2.error = e;
	          return e;
	        });
	      } else {
	        this.item = this.test.item(this.tests, this.guess);
	        if (this.shuffle.choices) {
	          this.tests[this.item].choices = _lodash2.default.shuffle(this.tests[this.item].choices);
	        }
	        this.response = this.test.input(this.tests[this.item]);
	        this.output = null;
	      }
	    }
	  }]);
	
	  return TestCtrl;
	}();
	
	exports.default = TestCtrl;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _topic = __webpack_require__(44);
	
	var _topic2 = _interopRequireDefault(_topic);
	
	var _topicController = __webpack_require__(45);
	
	var _topicController2 = _interopRequireDefault(_topicController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'topic',
	  url: '/:topic',
	  templateUrl: _topic2.default,
	  controller: _topicController2.default,
	  controllerAs: 'topic',
	  resolve: {
	    topic: /*@ngInject*/["Restangular", "$stateParams", function topic(Restangular, $stateParams) {
	      return Restangular.one('units', $stateParams.unit).one('topics', $stateParams.topic).get();
	    }]
	  }
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var path = 'dist/main/content/unit/topic/topic.jade';
	var html = "<h3 data-ng-bind=\"topic.topic.subtitle ? topic.topic.title+': '+topic.topic.subtitle : topic.topic.title\"></h3><div markdown=\"topic.topic.body\" math-jax></div><div role=\"toolbar\" class=\"btn-toolbar\"><div class=\"btn-group\"><div dropdown is-open=\"status.examples\" data-ng-if=\"topic.topic.examples.length&gt;0\" class=\"btn-group\"><button type=\"button\" dropdown-toggle class=\"btn btn-default dropdown-toggle\">Beispiele<span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li data-ng-repeat=\"example in topic.topic.examples\"><a data-ui-sref=\".example({example: example.title})\" ng-bind=\"example.title\" class=\"btn btn-default\"></a></li></ul></div><div dropdown is-open=\"status.extras\" data-ng-if=\"topic.topic.extras.length&gt;0\" class=\"btn-group\"><button type=\"button\" dropdown-toggle class=\"btn btn-default dropdown-toggle\">Extras<span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li data-ng-repeat=\"extra in topic.topic.extras\"><a data-ui-sref=\".extra({extra: extra.title})\" data-ng-bind=\"extra.title\" class=\"btn btn-default\"></a></li></ul></div></div><div data-ng-if=\"main.user.authenticated\" class=\"btn-group\"><button type=\"button\" ng-click=\"main.modals.akzeptanz()\" class=\"btn btn-default\">Kapitel bewerten</button><button type=\"button\" data-ng-click=\"main.modals.fsk()\" class=\"btn btn-default\">Statistikkenntnisse einschätzen</button></div></div><section data-ui-view></section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var topicCtrl = function topicCtrl(topic) {
	  _classCallCheck(this, topicCtrl);
	
	  this.topic = topic;
	};
	topicCtrl.$inject = ["topic"];
	
	exports.default = topicCtrl;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _download = __webpack_require__(47);
	
	var _download2 = _interopRequireDefault(_download);
	
	var _downloadController = __webpack_require__(48);
	
	var _downloadController2 = _interopRequireDefault(_downloadController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'download',
	  url: '/download',
	  templateUrl: _download2.default,
	  controller: _downloadController2.default,
	  controllerAs: 'download',
	  data: {
	    permissions: {
	      except: ['anonymous']
	    }
	  },
	  resolve: {
	    units: /*@ngInject*/["Restangular", function units(Restangular) {
	      var query = {
	        projections: 'title'
	      };
	      return Restangular.all('units').getList(query);
	    }]
	  }
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	var path = 'dist/main/download/download.jade';
	var html = "<h2>Download</h2><p>Falls du die Inhalte dieser Webseite gern als Textdokument archivieren möchtest, kannst du hier ein Dokument mit den von dir bearbeiteten Kapiteln herunterladen. Du kannst zwischen ein paar Formaten wählen und einstellen, welche Bestandteile du haben möchtest.</p><form novalidate name=\"downloads.form\" method=\"get\" action=\"api/downloads\" class=\"form-horizontal\"><input type=\"hidden\" name=\"token\" ng-value=\"main.user.token\"><div class=\"form-group\"><label class=\"col-xs-2\">Schnellauswahl</label><div class=\"col-xs-10\"><div role=\"toolbar\" class=\"toolbar\"><div class=\"btn-group\"><button id=\"showunits\" type=\"button\" ng-click=\"download.show.units=!download.show.units\" aria-expanded=\"{{download.show.units}}\" class=\"btn btn-default\">Kapitel<span ng-class=\"download.show.units ? 'fa-caret-square-o-up' : 'fa-caret-square-o-down'\" aria-hidden=\"true\" class=\"fa\"></span></button><div id=\"unitgroup\" ng-show=\"download.show.units\" role=\"group\" aria-labelledby=\"showunits\" class=\"btn-group\"><button type=\"button\" ng-click=\"download.selectUnits(true)\" class=\"btn btn-default\">Alle</button><button type=\"button\" ng-click=\"download.selectUnits(false)\" class=\"btn btn-default\">keine</button></div></div><div class=\"btn-group\"><button id=\"showcontent\" type=\"button\" ng-click=\"download.show.contents=!download.show.contents\" aria-expanded=\"{{download.show.contents}}\" class=\"btn btn-default\">Inhalte<span ng-class=\"download.show.contents ? 'fa-caret-square-o-up' : 'fa-caret-square-o-down'\" aria-hidden=\"true\" class=\"fa\"></span></button><div ng-show=\"download.show.contents\" role=\"group\" aria-labelledby=\"showcontent\" class=\"btn-group\"><button type=\"button\" ng-click=\"download.selectContents(true)\" class=\"btn btn-default\">Alle</button><button type=\"button\" ng-click=\"download.selectContents(false)\" class=\"btn btn-default\">keine</button></div></div></div></div></div><formly-form model=\"download.data\" fields=\"download.fields\" form=\"download.form\"><div class=\"form-group\"><div class=\"col-xs-2-offset col-xs-10\"><input type=\"submit\" value=\"Download\" ng-class=\"{'btn-primary': undefined.$valid,'btn-danger': undefined.$invalid&&undefined.$touched}\" ng-disabled=\"undefined.$invalid\" class=\"btn\"></div></div></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(21);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var DownloadController = function () {
	  function DownloadController(units) {
	    _classCallCheck(this, DownloadController);
	
	    this.units = units.plain();
	    this.data = {
	      contents: ['body'],
	      format: 'rtf'
	    };
	    this.show = {
	      units: false,
	      contents: false
	    };
	    this.fields = [{
	      key: 'units',
	      type: 'horizontalMultiCheckbox',
	      templateOptions: {
	        label: 'Kapitel',
	        options: units,
	        valueProp: '_id',
	        labelProp: 'title'
	      }
	    }, {
	      key: 'contents',
	      type: 'horizontalMultiCheckboxInline',
	      templateOptions: {
	        label: 'Inhalte',
	        options: [{
	          name: 'Kerntexte',
	          value: 'body'
	        }, {
	          name: 'Beispiele',
	          value: 'examples'
	        }, {
	          name: 'Extras',
	          value: 'extras'
	        }]
	      }
	    }, {
	      key: 'format',
	      type: 'horizontalRadioInline',
	      templateOptions: {
	        label: 'DateiFormat',
	        options: [{
	          name: 'MS Word',
	          icon: 'file-word-o',
	          value: 'docx'
	        }, {
	          name: 'RTF',
	          icon: 'file-text-o',
	          value: 'rtf'
	        }, {
	          name: 'Epub (E-Book)',
	          icon: 'book',
	          value: 'epub'
	        }, {
	          name: 'Markdown',
	          icon: 'file-text-o',
	          value: 'markdown'
	        }, {
	          name: 'LaTeX',
	          icon: 'file-code-o',
	          value: 'latex'
	        }]
	      }
	    }];
	  }
	  DownloadController.$inject = ["units"];
	
	  _createClass(DownloadController, [{
	    key: 'selectUnits',
	    value: function selectUnits(val) {
	      this.data.units = val ? _lodash2.default.map(this.units, '_id') : [];
	    }
	  }, {
	    key: 'selectContents',
	    value: function selectContents(val) {
	      this.data.contents = val ? ['body', 'examples', 'extras'] : [];
	    }
	  }]);
	
	  return DownloadController;
	}();
	
	exports.default = DownloadController;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _register = __webpack_require__(50);
	
	var _register2 = _interopRequireDefault(_register);
	
	var _registerController = __webpack_require__(51);
	
	var _registerController2 = _interopRequireDefault(_registerController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'register',
	  url: '/register',
	  templateUrl: _register2.default,
	  controller: _registerController2.default,
	  controllerAs: 'register'
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	var path = 'dist/main/register/register.jade';
	var html = "<h2>Registrieren</h2><form novalidate role=\"form\" name=\"register.form\" ng-submit=\"register.register()\" class=\"form-horizontal\"><formly-form model=\"register.model\" fields=\"register.fields\" form=\"register.form\" options=\"register.formOptions\"><p>Mit der Registrierung erklärst du dich mit folgenden Punkten einverstanden:</p><ul><li>Wir behandeln deine Eingaben anonym und vertraulich.</li><li>Neben deinen explizit gemachten Angaben werden deine Bewegungen teilweise mit erfasst um dich nicht zusätzlich nach deiner Verweildauer, den von dir angesurften Inhalten o.Ä. fragen zu müssen.</li><li>Zu Forschungszwecken werten wir alle Nutzerdaten wissenschaftlich aus.</li><li>Wir behalten uns das Recht vor, dich zu Forschungszwecken über deine hier angegebene E-Mail-Adresse kontaktieren zu können.</li></ul><div class=\"form-group\"><div class=\"col-xs-2-offset col-xs-10\"><input type=\"submit\" value=\"Registrieren\" ng-class=\"{'btn-primary': undefined.$valid,'btn-danger': undefined.$invalid&&undefined.$touched}\" ng-disabled=\"undefined.$invalid\" class=\"btn\"></div></div></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var RegisterCtrl = function () {
	  function RegisterCtrl(user, $state, $q, api) {
	    _classCallCheck(this, RegisterCtrl);
	
	    function getSubjects(val) {
	      return api.getSubjects({
	        search: val
	      });
	    }
	    this.user = user;
	    this.$state = $state;
	    this.formOptions = {
	      formState: {
	        showPassword: false
	      }
	    };
	    this.model = {
	      role: 'user',
	      profile: {}
	    };
	    this.fields = [{
	      key: 'email',
	      type: 'horizontalInput',
	      templateOptions: {
	        label: 'E-Mail-Adresse',
	        type: 'email',
	        required: true,
	        maxlength: 50,
	        placeholder: 'name@provider.com'
	      },
	      ngModelAttrs: {
	        'available': {
	          value: 'user-check'
	        }
	      },
	      validation: {
	        messages: {
	          'userCheck': '$viewValue+" wurde schon registriert"'
	        }
	      },
	      modelOptions: {
	        updateOn: 'default blur',
	        debounce: {
	          blur: 0,
	          default: 500
	        }
	      }
	    }, {
	      key: 'password',
	      type: 'horizontalInput',
	      templateOptions: {
	        label: 'Passwort',
	        type: 'password',
	        minlength: 8,
	        required: true,
	        placeholder: 'unlösbar'
	      },
	      expressionProperties: {
	        'templateOptions.type': 'formState.showPassword ? "text" : "password"'
	      }
	    }, {
	      key: 'showPassword',
	      model: this.formOptions.formState,
	      type: 'horizontalCheckbox',
	      templateOptions: {
	        label: 'Passwort einblenden'
	      }
	    }, {
	      key: 'nickname',
	      model: 'model.profile',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'text',
	        label: 'Nickname',
	        maxlength: 20
	      }
	    }, {
	      key: 'age',
	      model: 'model.profile',
	      type: 'horizontalInput',
	      templateOptions: {
	        label: 'Alter',
	        required: true,
	        type: 'number',
	        placeholder: 20,
	        min: 0,
	        max: 100,
	        step: 1
	      }
	    }, {
	      key: 'sex',
	      model: 'model.profile',
	      type: 'horizontalRadioInline',
	      templateOptions: {
	        label: 'Geschlecht',
	        required: true,
	        options: [{
	          name: 'männlich',
	          value: 'male'
	        }, {
	          name: 'weiblich',
	          value: 'female'
	        }]
	      }
	    }, {
	      key: 'subject',
	      model: 'model.profile',
	      type: 'horizontalTypeahead',
	      templateOptions: {
	        label: 'Studiengang',
	        required: true,
	        type: 'text',
	        placeholder: 'hier Studiengang eingeben und auswählen',
	        options: getSubjects,
	        tml: 3,
	        tws: 300,
	        typeahead: 'subject.name for subject in to.options($viewValue)'
	      }
	    }, {
	      key: 'reasons',
	      model: 'model.profile',
	      type: 'horizontalMultiCheckbox',
	      templateOptions: {
	        label: 'Registrierungsgründe',
	        options: [{
	          name: 'Interesse für das Thema',
	          value: 'interesse'
	        }, {
	          name: 'Langeweile, Zeitvertreib, zufällig reingestolpert',
	          value: 'langeweile'
	        }, {
	          name: 'Vor- oder Nachbereitung für Klausur/Vorlesung',
	          value: 'klausur'
	        }, {
	          name: 'Ich bin Autor',
	          value: 'author'
	        }]
	      }
	    }];
	  }
	  RegisterCtrl.$inject = ["user", "$state", "$q", "api"];
	
	  _createClass(RegisterCtrl, [{
	    key: 'register',
	    value: function register() {
	      var _this = this;
	
	      return this.user.create(this.model).then(function () {
	        return _this.user.authenticate(_this.model, false).then(function () {
	          _this.$state.go('^.home');
	        });
	      }, function (e) {
	        _this.error = e;
	      });
	    }
	  }]);
	
	  return RegisterCtrl;
	}();
	
	exports.default = RegisterCtrl;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _user = __webpack_require__(53);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _userController = __webpack_require__(54);
	
	var _userController2 = _interopRequireDefault(_userController);
	
	var _profile = __webpack_require__(55);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'user',
	  url: '/user',
	  templateUrl: _user2.default,
	  controller: _userController2.default,
	  controllerAs: 'user',
	  data: {
	    permissions: {
	      except: ['anonymous']
	    }
	  },
	  children: [_profile2.default]
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	var path = 'dist/main/user/user.jade';
	var html = "<div class=\"row\"><div class=\"col-xs-12\"><h2 ng-bind=\"main.user.data.profile.nickname||main.user.data.email\"></h2><ul class=\"nav nav-tabs\"><li ui-sref-active=\"active\"><a ui-sref=\".profile\">Profil</a></li></ul><ui-view></ui-view></div></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var UserController = function UserController() {
	  _classCallCheck(this, UserController);
	};
	
	exports.default = UserController;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _profile = __webpack_require__(56);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _profileController = __webpack_require__(57);
	
	var _profileController2 = _interopRequireDefault(_profileController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'profile',
	  url: '/profile',
	  templateUrl: _profile2.default,
	  controller: _profileController2.default,
	  controllerAs: 'profile',
	  resolve: {
	    jsonpatch: /*@ngInject*/["$q", function jsonpatch($q) {
	      return $q(function (resolve, reject) {
	        __webpack_require__.e/* nsure */(1, function () {
	          var jsonpatch = __webpack_require__(58);
	          return jsonpatch ? resolve(jsonpatch) : reject('jsonpatch not loaded');
	        });
	      });
	    }]
	  }
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	var path = 'dist/main/user/profile/profile.jade';
	var html = "<h3>Profil</h3><p ng-if=\"!main.user.authenticated\">Nicht angemeldet</p><form novalidate name=\"profile.form\" ng-if=\"main.user.authenticated\" class=\"form-horizontal\"><formly-form model=\"main.user.data\" fields=\"profile.fields\" form=\"profile.form\"><div class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><input type=\"button\" ng-click=\"main.user.changePassword()\" value=\"Passwort ändern\" class=\"btn btn-warning\"></div></div></formly-form><div ng-if=\"profile.patches.length===0\" role=\"alert\" class=\"alert alert-success\">alles aktualisiert</div><div ng-if=\"profile.patches.length&gt;0\" role=\"alert\" class=\"alert alert-info\">aktualisiere…</div><div ng-if=\"profile.error\" role=\"alert\" class=\"alert alert-danger\">Fehler beim Aktualisieren</div></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var ProfileController = function ProfileController(api, user, $scope, jsonpatch) {
	  var _this = this;
	
	  _classCallCheck(this, ProfileController);
	
	  function getSubjects(val) {
	    return api.getSubjects({
	      search: val
	    });
	  }
	  var modelOptions = {
	    updateOn: 'default blur',
	    debounce: {
	      default: 500,
	      blur: 0
	    }
	  };
	  this.patches = [];
	  this.error = null;
	  this.fields = [{
	    key: 'profile.nickname',
	    type: 'horizontalInput',
	    modelOptions: modelOptions,
	    templateOptions: {
	      type: 'text',
	      label: 'Nickname',
	      maxlength: 20
	    }
	  }, {
	    key: 'profile.age',
	    type: 'horizontalInput',
	    modelOptions: modelOptions,
	    templateOptions: {
	      type: 'number',
	      label: 'Alter',
	      min: 20,
	      max: 100,
	      step: 1
	    }
	  }, {
	    key: 'profile.sex',
	    type: 'horizontalRadioInline',
	    modelOptions: modelOptions,
	    templateOptions: {
	      label: 'Geschlecht',
	      options: [{
	        name: 'männlich',
	        value: 'male'
	      }, {
	        name: 'weiblich',
	        value: 'female'
	      }]
	    }
	  }, {
	    key: 'profile.subject',
	    type: 'horizontalTypeahead',
	    modelOptions: modelOptions,
	    templateOptions: {
	      type: 'text',
	      label: 'Studiengang',
	      options: getSubjects,
	      tml: 3,
	      tws: 300,
	      typeahead: 'subject.name for subject in to.options($viewValue)'
	    }
	  }];
	  $scope.$watch('main.user.data', function (val, oldVal) {
	    _this.patches = jsonpatch.compare(oldVal, val);
	    if (_this.patches.length === 0) {
	      return;
	    }
	    return api.patchUsersBy_id({
	      _id: user._id,
	      patches: _this.patches
	    }).then(function () {
	      _this.patches = [];
	    }, function (e) {
	      _this.error = e;
	    });
	  }, true);
	};
	ProfileController.$inject = ["api", "user", "$scope", "jsonpatch"];
	
	exports.default = ProfileController;

/***/ },
/* 58 */,
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _author = __webpack_require__(60);
	
	var _author2 = _interopRequireDefault(_author);
	
	var _meta = __webpack_require__(61);
	
	var _meta2 = _interopRequireDefault(_meta);
	
	var _units = __webpack_require__(67);
	
	var _units2 = _interopRequireDefault(_units);
	
	var _images = __webpack_require__(98);
	
	var _images2 = _interopRequireDefault(_images);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'author',
	  url: '/author',
	  templateUrl: _author2.default,
	  data: {
	    permissions: {
	      only: ['author']
	    }
	  },
	  resolve: {
	    breadcrumb: /*@ngInject*/["$q", "$ocLazyLoad", function breadcrumb($q, $ocLazyLoad) {
	      return $q(function (resolve) {
	        __webpack_require__.e/* nsure */(3, function () {
	          __webpack_require__(105);
	          return resolve($ocLazyLoad.inject('ncy-angular-breadcrumb'));
	        });
	      });
	    }]
	  },
	  ncyBreadcrumb: {
	    label: 'Autorentool'
	  },
	  children: [_meta2.default, _units2.default, _images2.default]
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	var path = 'dist/main/author/author.jade';
	var html = "<div class=\"row\"><div class=\"col-xs-12\"><!--div(ncy-breadcrumb)--><h2>Authorenmodus</h2><ul ng-hide=\"main.user.data.role==='user'\" class=\"nav nav-tabs\"><li ui-sref-active=\"active\"><a ui-sref=\".meta\">Meta</a></li><li ui-sref-active=\"active\"><a ui-sref=\".units.new\">Kapitel</a></li><li ui-sref-active=\"active\"><a ui-sref=\".images\">Bilder</a></li></ul><div ui-view><p ng-if=\"!main.user.authenticated\" class=\"text-danger\">Willkommen beim Autorenmodus. Der Autorenmodus kann nur genutzt werden, wenn man angemeldet und Autor ist. Du bist gerade nicht angemeldet.</p><ng-switch on=\"main.user.data.role\"><p ng-switch-when=\"author\" class=\"text-success\">Willkommen beim Autorenmodus. Du gehörst zu den Autoren dieses WBT und kannst hier seine Inhalte editieren.</p><p ng-switch-when=\"user\" class=\"text-warning\">Willkommen beim Autorenmodus. Du bist leider kein Autor und kannst keine Inhalte bearbeiten. Bitte wende dich an uns, falls du Autor werden möchtest.</p></ng-switch></div></div></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _item = __webpack_require__(62);
	
	var _item2 = _interopRequireDefault(_item);
	
	var _meta = __webpack_require__(65);
	
	var _meta2 = _interopRequireDefault(_meta);
	
	var _metaController = __webpack_require__(66);
	
	var _metaController2 = _interopRequireDefault(_metaController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'meta',
	  url: '/meta',
	  templateUrl: _meta2.default,
	  controller: _metaController2.default,
	  controllerAs: 'meta',
	  ncyBreadcrumb: {
	    label: 'Meta'
	  },
	  children: [_item2.default]
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _item = __webpack_require__(63);
	
	var _item2 = _interopRequireDefault(_item);
	
	var _itemController = __webpack_require__(64);
	
	var _itemController2 = _interopRequireDefault(_itemController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'item',
	  url: '/:meta',
	  templateUrl: _item2.default,
	  controller: _itemController2.default,
	  controllerAs: 'item',
	  ncyBreadcrumb: {
	    label: '{{main.items[$stateParams.meta].menu}}'
	  },
	  resolve: {
	    jsonpatch: /*@ngInject*/["$q", function jsonpatch($q) {
	      return $q(function (resolve, reject) {
	        __webpack_require__.e/* nsure */(1/* duplicate */, function () {
	          var jsonpatch = __webpack_require__(58);
	          return jsonpatch ? resolve(jsonpatch) : reject('jsonpatch not loaded');
	        });
	      });
	    }],
	    item: /*@ngInject*/["api", "$stateParams", function item(api, $stateParams) {
	      return api.getMetaBy_id({ _id: $stateParams.meta });
	    }]
	  }
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	var path = 'dist/main/author/meta/item/item.jade';
	var html = "<h4 ng-bind=\"::main.items[$stateParams.meta].title\"></h4><form novalidate name=\"item.form\" class=\"form-horizontal\"><formly-form form=\"item.form\" model=\"item.item\" fields=\"item.fields\"></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(21);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var ItemController = function ItemController(item, $scope, jsonpatch, api) {
	  var _this = this;
	
	  _classCallCheck(this, ItemController);
	
	  var modelOptions = {
	    updateOn: 'default blur',
	    debounce: {
	      default: 500,
	      blur: 0
	    }
	  };
	  this.item = item;
	  this.patches = [];
	  this.error = null;
	  this.fields = [{
	    type: 'horizontalInput',
	    key: 'title',
	    modelOptions: modelOptions,
	    templateOptions: {
	      label: 'Titel',
	      type: 'text',
	      placeholder: 'Titel dieser Metaseite'
	    }
	  }, {
	    key: 'menu',
	    type: 'horizontalInput',
	    modelOptions: modelOptions,
	    templateOptions: {
	      label: 'Menüeintrag',
	      type: 'text',
	      placeholder: 'Name des Navigationslinks'
	    }
	  }, {
	    key: 'icon',
	    type: 'horizontalInput',
	    modelOptions: modelOptions,
	    templateOptions: {
	      label: 'Menü-Icon'
	    }
	  }, {
	    key: 'active',
	    type: 'horizontalCheckbox',
	    modelOptions: modelOptions,
	    templateOptions: {
	      label: 'Im Menü anzeigen'
	    }
	  }, {
	    key: 'body',
	    type: 'horizontalMarkdownArea',
	    hide: _lodash2.default.includes(['download', 'author'], this.item._id),
	    modelOptions: modelOptions,
	    templateOptions: {
	      label: 'Inhalt'
	    }
	  }];
	  $scope.$watch('item.item', function (val, oldVal) {
	    _this.patches = jsonpatch.compare(oldVal, val);
	    if (_this.patches.length === 0) {
	      return;
	    }
	    return api.patchMetaBy_id({
	      _id: item._id,
	      patches: _this.patches
	    }).then(function () {
	      _this.patches = [];
	      var index = _lodash2.default.findIndex($scope.main.meta, { _id: val._id });
	      $scope.main.meta[index] = val;
	      $scope.main.items[val._id] = val;
	    }, function (e) {
	      _this.error = e;
	    });
	  }, true);
	};
	ItemController.$inject = ["item", "$scope", "jsonpatch", "api"];
	
	exports.default = ItemController;

/***/ },
/* 65 */
/***/ function(module, exports) {

	var path = 'dist/main/author/meta/meta.jade';
	var html = "<h3>Meta</h3><ul class=\"nav nav-tabs\"><li ng-repeat=\"(i, v) in main.items\" ui-sref-active=\"active\"><a ui-sref=\".item({meta: i})\" ng-bind=\"::v.menu\"></a></li></ul><div ui-view><p>Hier kannst du Metainformationen für das WBT anpassen. Startseite, Kontakthinweis und Impressum können hier angepasste Texte bekommen und in der Navigation aktiviert oder deaktiviert werden.</p></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var MetaController = function MetaController() {
	  _classCallCheck(this, MetaController);
	};
	
	exports.default = MetaController;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _units = __webpack_require__(68);
	
	var _units2 = _interopRequireDefault(_units);
	
	var _unitsController = __webpack_require__(69);
	
	var _unitsController2 = _interopRequireDefault(_unitsController);
	
	var _new = __webpack_require__(72);
	
	var _new2 = _interopRequireDefault(_new);
	
	var _unit = __webpack_require__(75);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'units',
	  url: '/units',
	  templateUrl: _units2.default,
	  controller: _unitsController2.default,
	  controllerAs: 'units',
	  abstract: true,
	  resolve: {
	    units: /*@ngInject*/["$http", function units($http) {
	      var query = {
	        projections: 'title',
	        options: { sort: 'position' }
	      };
	      return $http.get('api/units', query);
	    }]
	  },
	  children: [_new2.default, _unit2.default]
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/units.jade';
	var html = "<div uib-collapse=\"units.collapse\"><form novalidate name=\"units.form\" class=\"form-horizontal\"><div class=\"form-group\"><label for=\"selectUnit\" class=\"col-xs-2 control-label\">Kapitel</label><div class=\"col-xs-10\"><select id=\"selectUnit\" name=\"selectUnit\" ng-model=\"units.selected\" ng-options=\"u.title for u in units.units track by u._id\" ng-change=\"units.select()\" class=\"form-control\"><option value=\"\">Neues Kapitel</option></select></div></div><div ng-if=\"units.selected\" class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><div class=\"button-group\"><a ui-sref=\"main.content.unit.description({unit: units.selected._id})\" class=\"btn btn-link\">Anschauen</a><button type=\"button\" ng-click=\"units.remove()\" class=\"btn btn-danger\"><span class=\"fa fa-times\"></span><span>Löschen</span></button></div></div></div></form></div><h3><span ng-bind=\"units.selected ? units.selected.title : 'Neues Kapitel anlegen'\"></span><button type=\"button\" ng-click=\"units.collapse=!units.collapse\" class=\"btn btn-default\"><span ng-class=\"units.collapse ? 'fa-toggle-off' : 'fa-toggle-on'\" aria-hidden=\"true\" class=\"fa\"></span>Übersicht {{units.collapse ? 'einblenden' : 'ausblenden'}}</button></h3><div ui-view></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(21);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _removeModal = __webpack_require__(70);
	
	var _removeModal2 = _interopRequireDefault(_removeModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var UnitsController = function () {
	  function UnitsController(units, $scope, $state, $uibModal, $http) {
	    var _this = this;
	
	    _classCallCheck(this, UnitsController);
	
	    this.units = units.data;
	    this.$state = $state;
	    this.$uibModal = $uibModal;
	    this.removeModal = (0, _removeModal2.default)($scope);
	    this.$http = $http;
	    this.collapse = false;
	    this.init();
	    this.modelOptions = {
	      updateOn: 'default blur',
	      debounce: {
	        default: 500,
	        blur: 0
	      }
	    };
	    this.fields = [{
	      key: 'title',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'text',
	        label: 'Titel',
	        placeholder: 'Titel des Kapitels',
	        required: true
	      },
	      modelOptions: this.modelOptions
	    }, {
	      key: 'subtitle',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'text',
	        label: 'Untertitel',
	        placeholder: 'Untertitel des Kapitels'
	      },
	      modelOptions: this.modelOptions
	    }, {
	      key: 'requires',
	      type: 'horizontalMultiCheckbox',
	      templateOptions: {
	        label: 'Voraussetzungen',
	        labelProp: 'title',
	        valueProp: '_id'
	      },
	      modelOptions: this.modelOptions
	    }, {
	      key: 'active',
	      type: 'horizontalCheckbox',
	      templateOptions: {
	        label: 'Test für dieses Kapitel aktivieren'
	      },
	      modelOptions: this.modelOptions
	    }, {
	      key: 'shuffle',
	      type: 'horizontalMultiCheckbox',
	      modelOptions: this.modelOptions,
	      templateOptions: {
	        label: 'Zufällige Reihenfolge',
	        options: [{
	          name: 'Aufgaben',
	          value: 'items'
	        }, {
	          name: 'Antwortoptionen bei Wahlaufgaben',
	          value: 'choices'
	        }]
	      }
	    }, {
	      key: 'description',
	      type: 'horizontalMarkdownArea',
	      modelOptions: this.modelOptions,
	      templateOptions: {
	        label: 'Beschreibung',
	        required: true,
	        placeholder: 'hier Beschreibungstext eingeben'
	      }
	    }];
	    function watcher() {
	      return $scope.units.selected ? _lodash2.default.reject($scope.units.units, { _id: $scope.units.selected._id }) : $scope.units.units;
	    }
	    $scope.$watchCollection(watcher, function (val) {
	      _this.fields[2].templateOptions.options = val;
	    });
	  }
	  UnitsController.$inject = ["units", "$scope", "$state", "$uibModal", "$http"];
	
	  _createClass(UnitsController, [{
	    key: 'init',
	    value: function init() {
	      if (this.$state.params.unit) {
	        this.selected = _lodash2.default.find(this.units, { _id: this.$state.params.unit });
	      } else {
	        this.selected = null;
	      }
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      if (this.selected) {
	        this.$state.go('main.author.units.unit.basics', { unit: this.selected._id });
	      } else {
	        this.$state.go('main.author.units.new');
	      }
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var _this2 = this;
	
	      if (!this.selected) {
	        return;
	      }
	      return this.$uibModal.open(this.removeModal).result.then(function () {
	        return _this2.$http.delete('api/units/' + _this2.selected._id);
	      }).then(function () {
	        _lodash2.default.remove(_this2.units, { _id: _this2.selected._id });
	        _this2.selected = null;
	        _this2.select();
	      }, function (e) {
	        _this2.error = e;
	      });
	    }
	  }]);
	
	  return UnitsController;
	}();
	
	exports.default = UnitsController;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (scope) {
	  return {
	    templateUrl: _removeModal2.default,
	    scope: scope
	  };
	};
	
	var _removeModal = __webpack_require__(71);
	
	var _removeModal2 = _interopRequireDefault(_removeModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 71 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/remove-modal/remove-modal.jade';
	var html = "<div class=\"modal-header\"><h3>Löschen von Inhalten</h3></div><div class=\"modal-body\"><p ng-if=\"main.$state.includes('main.author.images')\">Möchtest du dieses Bild wirklich vom Server löschen? Falls ja, entferne es bitte ggf. auch umgehend aus den Texten des WBT.</p><p ng-if=\"main.$state.is('main.author.units.unit.basics')\">Möchtest du wirklich das Kapitel „{{units.selected.title}}“ löschen?</p><p ng-if=\"main.$state.is('main.author.units.unit.topics.topic.basics')\">Möchtest du wirklich das Subkapitel „{{topics.selected.title}}“ löschen?</p></div><div class=\"modal-footer\"><input type=\"button\" ng-click=\"$close()\" value=\"Ja\"><input type=\"button\" ng-click=\"$dismiss()\" value=\"Nein\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _new = __webpack_require__(73);
	
	var _new2 = _interopRequireDefault(_new);
	
	var _newController = __webpack_require__(74);
	
	var _newController2 = _interopRequireDefault(_newController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'new',
	  url: '/new',
	  controller: _newController2.default,
	  controllerAs: 'new',
	  templateUrl: _new2.default,
	  ncyBreadcrumb: {
	    label: 'Neues Kapitel'
	  }
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/new/new.jade';
	var html = "<form novalidate name=\"new.form\" ng-submit=\"new.save()\" class=\"form-horizontal\"><formly-form model=\"new.unit\" fields=\"units.fields\" form=\"new.form\"><div class=\"form-group\"><div class=\"col-xs-2-offset col-xs-10\"><input type=\"submit\" value=\"Anlegen\" ng-class=\"{'btn-primary': new.form.$valid,'btn-danger': new.form.$invalid&&new.form.$touched}\" ng-disabled=\"new.form.$invalid\" class=\"btn\"></div></div></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var NewController = function () {
	  function NewController($scope, $http) {
	    _classCallCheck(this, NewController);
	
	    this.$scope = $scope;
	    this.$http = $http;
	    this.unit = { test: {} };
	    $scope.units.fields[3].model = this.unit.test;
	    $scope.units.fields[4].model = this.unit.test;
	  }
	  NewController.$inject = ["$scope", "$http"];
	
	  _createClass(NewController, [{
	    key: 'save',
	    value: function save() {
	      var _this = this;
	
	      return this.$http.post('api/units', this.unit).then(function (res) {
	        _this.$scope.units.units.push(res.data);
	        _this.$scope.units.selected = res.data;
	        _this.$scope.units.select();
	      }, function (e) {
	        _this.error = e;
	      });
	    }
	  }]);
	
	  return NewController;
	}();
	
	exports.default = NewController;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _unit = __webpack_require__(76);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _unitController = __webpack_require__(77);
	
	var _unitController2 = _interopRequireDefault(_unitController);
	
	var _basics = __webpack_require__(78);
	
	var _basics2 = _interopRequireDefault(_basics);
	
	var _topics = __webpack_require__(80);
	
	var _topics2 = _interopRequireDefault(_topics);
	
	var _tests = __webpack_require__(95);
	
	var _tests2 = _interopRequireDefault(_tests);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'unit',
	  url: '/:unit',
	  templateUrl: _unit2.default,
	  controller: _unitController2.default,
	  controllerAs: 'unit',
	  abstract: true,
	  resolve: {
	    jsonpatch: /*@ngInject*/["$q", function jsonpatch($q) {
	      return $q(function (resolve, reject) {
	        __webpack_require__.e/* nsure */(1/* duplicate */, function () {
	          var jsonpatch = __webpack_require__(58);
	          return jsonpatch ? resolve(jsonpatch) : reject('jsonpatch not loaded');
	        });
	      });
	    }],
	    unit: /*@ngInject*/["$http", "$stateParams", function unit($http, $stateParams) {
	      var query = {
	        projections: '-comments -topics -views -akzeptanz'
	      };
	      return $http.get('api/units/' + $stateParams.unit, query);
	    }]
	  },
	  children: [_basics2.default, _topics2.default, _tests2.default]
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/unit.jade';
	var html = "<uib-alert type=\"info\" ng-if=\"unit.patches.length&gt;0 &amp;&amp; !unit.unit.error\" role=\"alert\"><span class=\"fa fa-spinner fa-spin\"></span><span>lade Änderungen hoch…</span></uib-alert><uib-alert ng-if=\"unit.error &amp;&amp; unit.error.status === 404\">Dieses Kapitel konnte nicht gefunden werden. Es wurde möglicherweise von einem anderen Autor gelöscht.</uib-alert><uib-alert ng-if=\"unit.error &amp;&amp; unit.error.status === 412\" role=\"alert\">Dieses Kapitel wurde zwischenzeitlich von einem anderen Autor geändert. Mittels Refresh erhältst du die aktuelle Version.</uib-alert><ul class=\"nav nav-tabs\"><li ui-sref-active=\"active\"><a ui-sref=\".basics\">Grunddaten</a></li><li ui-sref-active=\"active\"><a ui-sref=\".topics.new\">Subkapitel</a></li><li ui-sref-active=\"active\"><a ui-sref=\".tests\">Testaufgaben</a></li></ul><div ui-view></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(21);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var UnitCtrl = function UnitCtrl(jsonpatch, unit, $scope, $http) {
	  var _this = this;
	
	  _classCallCheck(this, UnitCtrl);
	
	  this.unit = unit.data;
	  this.patches = [];
	  this.error = null;
	  $scope.units.fields[3].model = this.unit.test;
	  $scope.units.fields[4].model = this.unit.test;
	  function watcher() {
	    return _lodash2.default.pick($scope.unit.unit, ['_id', 'title', 'subtitle', 'description', 'requires', 'test']);
	  }
	  $scope.$watch(watcher, function (val, oldVal) {
	    _this.patches = jsonpatch.compare(oldVal, val);
	    if (_this.patches.length === 0) {
	      return;
	    }
	    return $http.patch('api/units/' + _this.unit._id, _this.patches, { headers: { 'if-unmodified-since': _this.unit.updatedAt } }).then(function (res) {
	      _this.patches = [];
	      var lmh = res.headers('last-modified');
	      if (lmh) {
	        _this.unit.updatedAt = lmh;
	      }
	      _this.error = null;
	    }, function (e) {
	      _this.error = e;
	    });
	  }, true);
	};
	UnitCtrl.$inject = ["jsonpatch", "unit", "$scope", "$http"];
	
	exports.default = UnitCtrl;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _basics = __webpack_require__(79);
	
	var _basics2 = _interopRequireDefault(_basics);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'basics',
	  url: '',
	  templateUrl: _basics2.default,
	  ncyBreadcrumb: {
	    label: '{{unit.unit.title}} — Grunddaten'
	  }
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/basics/basics.jade';
	var html = "<form novalidate name=\"unit.form\" class=\"form-horizontal\"><formly-form model=\"unit.unit\" fields=\"units.fields\" form=\"unit.form\"></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _topics = __webpack_require__(81);
	
	var _topics2 = _interopRequireDefault(_topics);
	
	var _topicsController = __webpack_require__(82);
	
	var _topicsController2 = _interopRequireDefault(_topicsController);
	
	var _new = __webpack_require__(83);
	
	var _new2 = _interopRequireDefault(_new);
	
	var _topic = __webpack_require__(86);
	
	var _topic2 = _interopRequireDefault(_topic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'topics',
	  url: '/topics',
	  templateUrl: _topics2.default,
	  controller: _topicsController2.default,
	  controllerAs: 'topics',
	  abstract: true,
	  resolve: {
	    topics: /*@ngInject*/["$http", "$stateParams", function topics($http, $stateParams) {
	      var query = { projections: 'topics.title topics._id' };
	      return $http.get('api/units/' + $stateParams.unit + '/topics', query);
	    }]
	  },
	  children: [_new2.default, _topic2.default]
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/topics/topics.jade';
	var html = "<div uib-collapse=\"topics.collapse\"><form novalidate name=\"topics.form\" class=\"form-horizontal\"><div class=\"form-group\"><label for=\"selectTopic\" class=\"col-xs-2 control-label\">Subkapitel</label><div class=\"col-xs-10\"><select id=\"selectTopic\" ng-options=\"t.title for t in topics.topics track by t._id\" ng-model=\"topics.selected\" ng-change=\"topics.select()\" class=\"form-control\"><option value=\"\">Neues Subkapitel</option></select></div></div><div ng-if=\"topics.selected\" class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><div class=\"button-group\"><a ui-sref=\"main.content.unit.topic({unit: units.selected._id, topic: topics.selected._id})\" class=\"btn btn-link\">Anschauen</a><button type=\"button\" ng-click=\"topics.move('up')\"><span class=\"fa fa-arrow-up\"></span><span>hoch</span></button><button type=\"button\" ng-click=\"topics.move('down')\"><span class=\"fa fa-arrow-down\"></span><span>runter</span></button><button type=\"button\" ng-click=\"topics.remove()\" class=\"btn btn-danger\"><span class=\"fa fa-times\"></span><span>löschen</span></button></div></div></div></form></div><h3><span ng-bind=\"topics.selected ? topics.selected.title : 'Neues Subkapitel anlegen'\"></span><button type=\"button\" ng-click=\"topics.collapse=!topics.collapse\" class=\"btn btn-default\"><span ng-class=\"topics.collapse ? 'fa-toggle-on' : 'fa-toggle-off'\" aria-hidden=\"true\" class=\"fa fa-toggle\"></span><span>Übersicht {{topics.collapse ? 'einblenden' : 'ausblenden'}}</span></button></h3><ui-view></ui-view>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(21);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _removeModal = __webpack_require__(70);
	
	var _removeModal2 = _interopRequireDefault(_removeModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var TopicsCtrl = function () {
	  function TopicsCtrl(topics, $state, $scope, $uibModal, $http) {
	    _classCallCheck(this, TopicsCtrl);
	
	    this.$http = $http;
	    this.topics = topics.data;
	    this.$state = $state;
	    this.$uibModal = $uibModal;
	    this.removeModal = (0, _removeModal2.default)($scope);
	    this.selected = null;
	    this.collapse = false;
	    this.init();
	    this.fields = [{
	      key: 'title',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'text',
	        required: true,
	        label: 'Titel',
	        placeholder: 'Titel des Subkapitels'
	      },
	      modelOptions: $scope.units.modelOptions
	    }, {
	      key: 'subtitle',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'text',
	        label: 'Untertitel',
	        placeholder: 'Untertitel des Subkapitels'
	      },
	      modelOptions: $scope.units.modelOptions
	    }, {
	      key: 'body',
	      type: 'horizontalMarkdownArea',
	      templateOptions: {
	        required: true,
	        label: 'Text',
	        placeholder: 'Hier Text des Subkapitels eingeben'
	      },
	      modelOptions: $scope.units.modelOptions
	    }];
	  }
	  TopicsCtrl.$inject = ["topics", "$state", "$scope", "$uibModal", "$http"];
	
	  _createClass(TopicsCtrl, [{
	    key: 'init',
	    value: function init() {
	      if (!this.$state.params.topic) {
	        return;
	      }
	      this.selected = _lodash2.default.find(this.topics, { _id: this.$state.params.topic });
	      return this.selected;
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      if (this.selected) {
	        this.$state.go('main.author.units.unit.topics.topic.basics', { topic: this.selected._id });
	      } else {
	        this.$state.go('main.author.units.unit.topics.new');
	      }
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var _this = this;
	
	      if (!this.selected) {
	        return;
	      }
	      return this.$uibModal.open(this.removeModal).result.then(function () {
	        return _this.$http.delete('api/units/' + _this.$state.params.unit + '/topics/' + _this.selected._id);
	      }).then(function () {
	        _lodash2.default.remove(_this.topics, { _id: _this.selected._id });
	        _this.selected = null;
	        _this.select();
	      }, function (e) {
	        _this.error = e;
	      });
	    }
	  }, {
	    key: 'move',
	    value: function move(dir) {
	      var _this2 = this;
	
	      return this.$http.patch('api/units/' + this.$state.params.unit + '/topics', {
	        action: 'move',
	        dir: dir,
	        topic: this.selected._id
	      }).then(function (topics) {
	        _this2.topics = topics.data;
	      }, function (e) {
	        _this2.error = e;
	      });
	    }
	  }]);
	
	  return TopicsCtrl;
	}();
	
	exports.default = TopicsCtrl;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _new = __webpack_require__(84);
	
	var _new2 = _interopRequireDefault(_new);
	
	var _newController = __webpack_require__(85);
	
	var _newController2 = _interopRequireDefault(_newController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'new',
	  url: '/new',
	  templateUrl: _new2.default,
	  controller: _newController2.default,
	  controllerAs: 'new',
	  ncyBreadcrumb: {
	    label: 'Neues Subkapitel'
	  }
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/topics/new/new.jade';
	var html = "<form novalidate name=\"new.form\" ng-submit=\"new.save()\" class=\"form-horizontal\"><formly-form model=\"new.topic\" fields=\"topics.fields\" form=\"new.form\"><div class=\"form-group\"><div class=\"col-xs-2-offset col-xs-10\"><input type=\"submit\" value=\"Erstellen\" ng-class=\"{'btn-primary': new.form.$valid,'btn-danger': new.form.$invalid&&new.form.$touched}\" ng-disabled=\"new.form.$invalid\" class=\"btn\"></div></div></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var NewController = function () {
	  function NewController($scope, $http, $state) {
	    _classCallCheck(this, NewController);
	
	    this.$scope = $scope;
	    this.$http = $http;
	    this.$state = $state;
	    this.topic = {};
	  }
	  NewController.$inject = ["$scope", "$http", "$state"];
	
	  _createClass(NewController, [{
	    key: 'save',
	    value: function save() {
	      var _this = this;
	
	      return this.$http.post('api/units/' + this.$state.params.unit + '/topics', this.topic).then(function (topic) {
	        _this.$scope.topics.topics.push(topic.data);
	        _this.$scope.topics.selected = topic.data;
	        _this.$state.go('main.author.units.unit.topics.topic.basics', { topic: topic.data._id });
	        _this.error = null;
	      }, function (e) {
	        _this.error = e;
	      });
	    }
	  }]);
	
	  return NewController;
	}();
	
	exports.default = NewController;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _topic = __webpack_require__(87);
	
	var _topic2 = _interopRequireDefault(_topic);
	
	var _topicController = __webpack_require__(88);
	
	var _topicController2 = _interopRequireDefault(_topicController);
	
	var _basics = __webpack_require__(89);
	
	var _basics2 = _interopRequireDefault(_basics);
	
	var _examples = __webpack_require__(91);
	
	var _examples2 = _interopRequireDefault(_examples);
	
	var _extras = __webpack_require__(93);
	
	var _extras2 = _interopRequireDefault(_extras);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'topic',
	  url: '/:topic',
	  templateUrl: _topic2.default,
	  controller: _topicController2.default,
	  controllerAs: 'topic',
	  abstract: true,
	  resolve: {
	    topic: /*@ngInject*/["$http", "$stateParams", function topic($http, $stateParams) {
	      return $http.get('api/units/' + $stateParams.unit + '/topics/' + $stateParams.topic);
	    }]
	  },
	  children: [_basics2.default, _examples2.default, _extras2.default]
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/topics/topic/topic.jade';
	var html = "<uib-alert type=\"info\" ng-if=\"topic.patches.length&gt;0 &amp;&amp; !topic.error\" role=\"alert\"><span class=\"fa fa-spinner fa-spin\"></span><span>lade Änderungen hoch…</span></uib-alert><uib-alert ng-if=\"topic.error &amp;&amp; topic.error.status === 404\" role=\"alert\">Dieses (Sub)kapitel konnte nicht gefunden werden. Es wurde möglicherweise von einem anderen Autor gelöscht.</uib-alert><uib-alert ng-if=\"topic.error &amp;&amp; topic.error.status === 412\" role=\"alert\">Dieses Subkapitel wurde zwischenzeitlich von einem anderen Autor geändert. Mittels Refresh erhältst du die aktuelle Version.</uib-alert><ul class=\"nav nav-tabs\"><li ui-sref-active=\"active\"><a ui-sref=\".basics\">Grunddaten</a></li><li ui-sref-active=\"active\"><a ui-sref=\".examples\">Beispiele</a></li><li ui-sref-active=\"active\"><a ui-sref=\".extras\">Extras</a></li></ul><ui-view></ui-view>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(21);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var TopicController = function TopicController($scope, jsonpatch, topic, $http, $stateParams) {
	  var _this = this;
	
	  _classCallCheck(this, TopicController);
	
	  this.topic = topic.data;
	  this.patches = [];
	  this.error = null;
	  function watcher() {
	    return _lodash2.default.omit($scope.topic.topic, 'updatedAt');
	  }
	  $scope.$watch(watcher, function (val, oldVal) {
	    _this.patches = jsonpatch.compare(oldVal, val);
	    if (_this.patches.length > 0) {
	      return $http.patch('api/units/' + $stateParams.unit + '/topics/' + $stateParams.topic, _this.patches, { headers: { 'if-unmodified-since': _this.topic.updatedAt } }).then(function (res) {
	        _this.patches = [];
	        _this.error = null;
	        var lmh = res.headers('last-modified');
	        if (lmh) {
	          _this.topic.updatedAt = lmh;
	        }
	      }, function (e) {
	        _this.error = e;
	      });
	    }
	  }, true);
	};
	TopicController.$inject = ["$scope", "jsonpatch", "topic", "$http", "$stateParams"];
	
	exports.default = TopicController;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _basics = __webpack_require__(90);
	
	var _basics2 = _interopRequireDefault(_basics);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'basics',
	  url: '/basics',
	  templateUrl: _basics2.default,
	  ncyBreadcrumb: { label: '{{topic.topic.title}} — Grunddaten' }
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/topics/topic/basics/basics.jade';
	var html = "<form novalidate name=\"topic.form\" class=\"form-horizontal\"><formly-form model=\"topic.topic\" fields=\"topics.fields\" form=\"topic.form\"></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _examples = __webpack_require__(92);
	
	var _examples2 = _interopRequireDefault(_examples);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'examples',
	  url: '/examples',
	  templateUrl: _examples2.default
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/topics/topic/examples/examples.jade';
	var html = "<p>Beispiele</p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extras = __webpack_require__(94);
	
	var _extras2 = _interopRequireDefault(_extras);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'extras',
	  url: '/extras',
	  templateUrl: _extras2.default
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/topics/topic/extras/extras.jade';
	var html = "<p>Extras</p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tests = __webpack_require__(96);
	
	var _tests2 = _interopRequireDefault(_tests);
	
	var _testsController = __webpack_require__(97);
	
	var _testsController2 = _interopRequireDefault(_testsController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'tests',
	  url: '/tests',
	  templateUrl: _tests2.default,
	  controller: _testsController2.default,
	  controllerAs: 'tests',
	  ncyBreadcrumb: {
	    label: '{{unit.unit.title}} — Testaufgaben'
	  },
	  resolve: {
	    tests: /*@ngInject*/["Restangular", "$stateParams", function tests(Restangular, $stateParams) {
	      var query = {
	        conditions: {
	          unit: $stateParams.unit
	        }
	      };
	      return Restangular.all('tests').getList(query);
	    }]
	  }
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/tests/tests.jade';
	var html = "<h3>Testaufgaben</h3><p ng-if=\"tests.tests.length===0\">Noch keine Testaufgaben hinzugefügt</p><form novalidate name=\"tests.testsForm\" ng-if=\"tests.tests.length&gt;0\" class=\"form-horizontal\"><div class=\"form-group\"><label for=\"selectTest\" class=\"col-xs-2 control-label\">Aufgabe</label><div class=\"col-xs-10\"><select id=\"selectTest\" name=\"selectTest\" ng-model=\"tests.selected\" ng-options=\"v.text for v in tests.tests\" class=\"form-control\"><option value=\"\">Neue Aufgabe</option></select></div></div></form><form novalidate ng-if=\"tests.selected\" ng-submit=\"tests.update()\" class=\"form-horizontal\"><formly-form model=\"tests.selected\" fields=\"tests.fields\" form=\"tests.testForm\"><div class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><input type=\"button\" value=\"Löschen\" ng-click=\"tests.remove()\" class=\"btn btn-danger\"><input type=\"submit\" value=\"Aktualisieren\" ng-if=\"tests.testForm.$dirty\" ng-class=\"{'btn-primary': tests.testForm.$valid, 'btn-danger': tests.testForm.$invalid}\" class=\"btn\"></div></div></formly-form></form><form novalidate name=\"tests.newTestForm\" ng-submit=\"tests.create()\" ng-if=\"!tests.selected\" class=\"form-horizontal\"><formly-form model=\"tests.newTest\" fields=\"tests.newFields\" form=\"tests.newTestForm\"><div class=\"form-group\"><div class=\"col-xs-2-offset col-xs-10\"><input type=\"submit\" value=\"Erstellen\" ng-class=\"{'btn-primary': tests.newTestForm.$valid,'btn-danger': tests.newTestForm.$invalid&&tests.newTestForm.$touched}\" ng-disabled=\"tests.newTestForm.$invalid\" class=\"btn\"></div></div></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(21);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var TestsCtrl = function () {
	  function TestsCtrl(tests, $stateParams) {
	    _classCallCheck(this, TestsCtrl);
	
	    this.$stateParams = $stateParams;
	    this.tests = tests;
	    this.newTest = this.newDefaults;
	    this.error = null;
	    this.newFields = [{
	      type: 'horizontalMarkdownArea',
	      key: 'text',
	      templateOptions: {
	        label: 'Aufgabenstamm',
	        required: true,
	        placeholder: 'Frage oder Aussage'
	      }
	    }, {
	      type: 'horizontalRadioInline',
	      key: 'type',
	      templateOptions: {
	        label: 'Aufgabenformat',
	        options: [{
	          name: 'Multiple-Choice',
	          value: 'multiple'
	        }, {
	          name: 'Single-Choice',
	          value: 'single'
	        }, {
	          name: 'Eingabe',
	          value: 'input'
	        }],
	        required: true
	      }
	    }, {
	      type: 'repeatSection',
	      key: 'choices',
	      templateOptions: {
	        btnText: 'Antwortoption hinzufügen',
	        label: 'Antwortoptionen',
	        fields: [{
	          type: 'horizontalInput',
	          key: 'text',
	          templateOptions: {
	            type: 'text',
	            label: 'Antwort',
	            placeholder: 'Antwort',
	            required: true
	          }
	        }, {
	          key: 'correct',
	          type: 'horizontalCheckbox',
	          templateOptions: {
	            label: 'Korrekt'
	          }
	        }, {
	          key: 'feedback',
	          type: 'horizontalInput',
	          templateOptions: {
	            label: 'Feedback',
	            type: 'text',
	            required: true,
	            placeholder: 'Information über Korrektheit dieser Antwort, welche Antwort sonst korrekt wäre und warum diese Antwort (nicht) korrekt ist'
	          }
	        }]
	      }
	    }];
	    this.fields = [{
	      key: '_id',
	      type: 'horizontalStatic',
	      templateOptions: {
	        label: 'ID'
	      }
	    }];
	    this.fields = this.fields.concat(this.newFields);
	  }
	  TestsCtrl.$inject = ["tests", "$stateParams"];
	
	  _createClass(TestsCtrl, [{
	    key: 'create',
	    value: function create() {
	      var _this = this;
	
	      return this.tests.post(this.newTest).then(function (data) {
	        _this.tests.push(data);
	        _this.newTest = _this.newDefaults;
	        _this.newTestForm.$setPristine();
	      }, function (e) {
	        _this.error = e;
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var _this2 = this;
	
	      return this.selected.clone().put().then(function (data) {
	        _lodash2.default.merge(_this2.selected, data);
	        _this2.testForm.$setPristine();
	      }, function (e) {
	        _this2.error = e;
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var _this3 = this;
	
	      return this.selected.remove().then(function () {
	        _lodash2.default.remove(_this3.tests, { _id: _this3.selected._id });
	        _this3.selected = null;
	      }, function (e) {
	        _this3.error = e;
	      });
	    }
	  }, {
	    key: 'newDefaults',
	    get: function get() {
	      return {
	        tags: [],
	        choices: [],
	        unit: this.$stateParams.unit
	      };
	    }
	  }]);
	
	  return TestsCtrl;
	}();
	
	exports.default = TestsCtrl;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _image = __webpack_require__(99);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _images = __webpack_require__(102);
	
	var _images2 = _interopRequireDefault(_images);
	
	var _imagesController = __webpack_require__(103);
	
	var _imagesController2 = _interopRequireDefault(_imagesController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'images',
	  url: '/images',
	  templateUrl: _images2.default,
	  controller: _imagesController2.default,
	  controllerAs: 'images',
	  resolve: {
	    upload: /*@ngInject*/["$q", "$ocLazyLoad", function upload($q, $ocLazyLoad) {
	      return $q(function (resolve) {
	        __webpack_require__.e/* nsure */(2, function () {
	          __webpack_require__(104);
	          return resolve($ocLazyLoad.inject('angularFileUpload'));
	        });
	      });
	    }]
	  },
	  ncyBreadcrumb: {
	    label: 'Bilder'
	  },
	  children: [_image2.default]
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _image = __webpack_require__(100);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _imageController = __webpack_require__(101);
	
	var _imageController2 = _interopRequireDefault(_imageController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'image',
	  url: '/:image',
	  templateUrl: _image2.default,
	  controller: _imageController2.default,
	  controllerAs: 'image',
	  resolve: {
	    image: /*@ngInject*/["Restangular", "$stateParams", function image(Restangular, $stateParams) {
	      return Restangular.all('images').get($stateParams.image, { metadata: true });
	    }]
	  },
	  ncyBreadcrumb: {
	    label: '{{image.image.filename}}'
	  }
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	var path = 'dist/main/author/images/image/image.jade';
	var html = "<h3 ng-bind=\"image.image.filename\"></h3><div markdown=\"image.mdfig\"></div><uib-accordion><uib-accordion-group heading=\"Bild einbinden\" is-open=\"true\"><pre ng-bind=\"image.mdfig\"></pre><p>Erscheint das Bild allein für sich in einem Absatz, erscheint der Text zwischen den eckigen Klammern als Bildunterschrift.</p></uib-accordion-group><uib-accordion-group heading=\"Bild editieren\"><form novalidate name=\"image.form\" class=\"form-horizontal\"><div class=\"form-group\"><label for=\"imageInput\" class=\"col-xs-2\">Bild ersetzen</label><div class=\"col-xs-10\"><input id=\"imageInput\" type=\"file\" nv-file-select uploader=\"image.uploader\" name=\"imageInput\"><span ng-if=\"image.uploader.queue.length&gt;0\" ng-bind=\"image.uploader.queue[image.uploader.queue.length-1].file.name\" class=\"help-block\"></span></div></div><div class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><div class=\"btn-group\"><button ng-if=\"image.uploader.queue.length&gt;0\" ng-click=\"image.uploader.uploadItem(image.uploader.queue.length-1)\" class=\"btn btn-primary\">Bild updaten</button><button ng-click=\"image.remove()\" class=\"btn btn-warning\">Bild löschen</button></div></div></div></form></uib-accordion-group></uib-accordion>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(21);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _removeModal = __webpack_require__(70);
	
	var _removeModal2 = _interopRequireDefault(_removeModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var NewController = function () {
	  function NewController(image, FileUploader, $localStorage, $scope, $uibModal, $state) {
	    var _this = this;
	
	    _classCallCheck(this, NewController);
	
	    this.image = image;
	    this.$scope = $scope;
	    this.uploader = new FileUploader({
	      url: 'api/images/' + image._id,
	      method: 'PUT',
	      onBeforeUploadItem: function onBeforeUploadItem(i) {
	        i.headers['Authorization'] = 'bearer ' + $localStorage.token;
	        return i;
	      },
	      onSuccessItem: function onSuccessItem(i, res) {
	        _lodash2.default.assign(_this.image, res);
	        if ($scope.images.images.length > 0) {
	          var index = _lodash2.default.findIndex($scope.images.images, { _id: res._id });
	          _lodash2.default.assign($scope.images.images[index], res);
	        }
	        return i;
	      }
	    });
	    this.mdfig = '![Alt-Text](api/images/' + this.image._id + ')';
	    this.$uibModal = $uibModal;
	    this.removeModal = (0, _removeModal2.default)($scope);
	    this.$state = $state;
	  }
	  NewController.$inject = ["image", "FileUploader", "$localStorage", "$scope", "$uibModal", "$state"];
	
	  _createClass(NewController, [{
	    key: 'remove',
	    value: function remove() {
	      var _this2 = this;
	
	      return this.$uibModal.open(this.removeModal).result.then(function () {
	        return _this2.image.remove();
	      }).then(function () {
	        _lodash2.default.remove(_this2.$scope.images.images, { _id: _this2.image._id });
	        return _this2.$state.go('.^');
	      });
	    }
	  }]);
	
	  return NewController;
	}();
	
	exports.default = NewController;

/***/ },
/* 102 */
/***/ function(module, exports) {

	var path = 'dist/main/author/images/images.jade';
	var html = "<div class=\"row\"><div class=\"col-xs-6\"><h3>Bilder suchen</h3><form novalidate name=\"images.form\" class=\"form-horizontal\"><formly-form fields=\"images.fields\" form=\"images.form\" model=\"images.searchTerms\"><div class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><button ng-click=\"images.search()\" class=\"btn btn-info\">Ohne Eingabe suchen</button></div></div><div class=\"form-group\"><label for=\"file\" class=\"col-xs-2\">Bild hinzufügen</label><div class=\"col-xs-10\"><input type=\"file\" nv-file-select multiple accept=\"image/*\" uploader=\"images.uploader\"></div></div></formly-form></form><table ng-if=\"images.uploader.queue.length&gt;0\" class=\"table\"><thead><tr><th>Name</th><th>Fortschritt</th><th>Hochladen</th><th>Löschen</th></tr></thead><tbody><tr ng-repeat=\"i in images.uploader.queue\"><td ng-bind=\"i.file.name\"></td><td><uib-progressbar type=\"success\" value=\"i.progress\"></uib-progressbar></td><td><button ng-click=\"i.upload()\" class=\"btn btn-primary\"><span aria-hidden=\"true\" class=\"fa fa-upload\"></span><span class=\"sr-only\">Hochladen</span></button></td><td><button ng-click=\"i.remove()\" class=\"btn btn-warning\"><span aria-hidden=\"true\" class=\"fa fa-remove\"></span><span class=\"sr-only\">Löschen</span></button></td></tr><tr><td>Gesamt</td><td><uib-progressbar type=\"success\" value=\"images.uploader.progress\"></uib-progressbar></td><td><button ng-click=\"images.uploader.uploadAll()\" class=\"btn btn-primary\"><span aria-hidden=\"true\" class=\"fa fa-upload\"></span><span class=\"sr-only\">Hochladen</span></button></td><td><button ng-click=\"images.uploader.clearQueue()\" class=\"btn btn-warning\"><span aria-hidden=\"true\" class=\"fa fa-remove\"></span><span class=\"sr-only\">Löschen</span></button></td></tr></tbody></table><div uib-collapse=\"images.images.length===0\"><h3>{{images.images.length}} Treffer</h3><ul class=\"nav nav-pills\"><li ui-sref-active=\"active\" ng-repeat=\"i in images.images\"><a ui-sref=\".image({image: i._id})\" ng-bind=\"i.filename\"></a></li></ul></div></div><ui-view class=\"col-xs-6\"></ui-view></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var ImagesController = function () {
	  function ImagesController($scope, FileUploader, Restangular, $localStorage) {
	    var _this = this;
	
	    _classCallCheck(this, ImagesController);
	
	    this.images = Restangular.all('images');
	    this.searchTerms = {};
	    this.uploader = new FileUploader({
	      url: 'api/images',
	      onBeforeUploadItem: function onBeforeUploadItem(i) {
	        i.headers['Authorization'] = 'bearer ' + $localStorage.token;
	        return i;
	      }
	    });
	    this.fields = [{
	      type: 'horizontalInput',
	      key: 'search',
	      templateOptions: {
	        label: 'Suche',
	        type: 'search'
	      },
	      modelOptions: {
	        updateOn: 'default blur',
	        debounce: {
	          default: 300,
	          blur: 0
	        }
	      }
	    }, {
	      type: 'horizontalCheckbox',
	      key: 'me',
	      templateOptions: {
	        label: 'Nur von mir hochgeladen'
	      }
	    }];
	    $scope.$watchCollection('images.searchTerms', function (val, oldVal) {
	      if (val === oldVal) {
	        return;
	      }
	      _this.search();
	    });
	  }
	  ImagesController.$inject = ["$scope", "FileUploader", "Restangular", "$localStorage"];
	
	  _createClass(ImagesController, [{
	    key: 'search',
	    value: function search() {
	      var _this2 = this;
	
	      return this.images.getList(this.searchTerms).then(function (data) {
	        _this2.images = data;
	        return data;
	      });
	    }
	  }]);
	
	  return ImagesController;
	}();
	
	exports.default = ImagesController;

/***/ },
/* 104 */,
/* 105 */,
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// wrappers
	var wrappers = exports.wrappers = [{
	  name: 'horizontalBootstrapLabel',
	  templateUrl: __webpack_require__(107)
	}, {
	  name: 'bootstrapHasError',
	  templateUrl: __webpack_require__(108),
	  overwriteOk: true
	}];
	
	// types
	var types = exports.types = [{
	  name: 'horizontalInput',
	  extends: 'input',
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
	}, {
	  name: 'horizontalStatic',
	  template: '<p class="form-control-static" ng-bind="model[options.key]"></p>',
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError'],
	  noFormControl: true
	}, {
	  name: 'horizontalCheckbox',
	  extends: 'checkbox',
	  templateUrl: __webpack_require__(109),
	  wrapper: 'bootstrapHasError'
	}, {
	  name: 'horizontalMultiCheckbox',
	  extends: 'multiCheckbox',
	  templateUrl: __webpack_require__(110),
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
	}, {
	  name: 'horizontalMultiCheckboxInline',
	  extends: 'horizontalMultiCheckbox',
	  templateUrl: __webpack_require__(111)
	}, {
	  name: 'horizontalTextarea',
	  extends: 'textarea',
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError'],
	  defaultOptions: {
	    ngModelAttrs: {
	      json: {
	        attribute: 'json',
	        bound: 'json'
	      }
	    }
	  }
	}, {
	  name: 'horizontalMarkdownArea',
	  extends: 'horizontalTextarea',
	  templateUrl: __webpack_require__(112)
	}, {
	  name: 'horizontalRadio',
	  extends: 'radio',
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
	}, {
	  name: 'horizontalRadioInline',
	  extends: 'horizontalRadio',
	  templateUrl: __webpack_require__(113)
	}, {
	  name: 'repeatSection',
	  templateUrl: __webpack_require__(114),
	  controller: __webpack_require__(115).default
	}, {
	  name: 'horizontalTypeahead',
	  extends: 'horizontalInput',
	  templateUrl: __webpack_require__(116),
	  defaultOptions: function defaultOptions(options) {
	    var _ngModelAttrs;
	
	    var typeahead = options.templateOptions.typeahead || 'option[to.valueProp || \'value\'] as option[to.labelProp || \'name\'] for option in to.options | filter : $viewValue | limitTo: 8';
	    return {
	      ngModelAttrs: (_ngModelAttrs = {}, _defineProperty(_ngModelAttrs, typeahead, {
	        value: 'uib-typeahead'
	      }), _defineProperty(_ngModelAttrs, 'tws', {
	        attribute: 'typeahead-wait-ms'
	      }), _defineProperty(_ngModelAttrs, 'tml', {
	        attribute: 'typeahead-min-length'
	      }), _ngModelAttrs)
	    };
	  }
	}, {
	  name: 'horizontalRating',
	  templateUrl: __webpack_require__(117),
	  wrapper: ['bootstrapHasError'],
	  defaultOptions: {
	    noFormControl: true,
	    ngModelAttrs: {
	      'textValue': {
	        attribute: 'aria-valuetext'
	      },
	      'label': {
	        attribute: 'aria-label'
	      }
	    },
	    expressionProperties: {
	      'templateOptions.textValue': 'to.labels[$viewValue]'
	    }
	  }
	}];

/***/ },
/* 107 */
/***/ function(module, exports) {

	var path = 'dist/formly/wrappers/horizontal-bootstrap-label.jade';
	var html = "<label for=\"{{::id}}\" ng-bind=\"to.required ? to.label+' *' : to.label\" class=\"col-xs-2 control-label\"></label><div class=\"col-xs-10\"><formly-transclude></formly-transclude><span ng-messages=\"fc.$error\" ng-if=\"showError\" class=\"help-block\"><span ng-repeat=\"(name, message) in options.validation.messages\" role=\"alert\" ng-message-exp=\"::name\">{{::message(fc.$viewValue,fc.$modelValue,this)}}</span></span></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 108 */
/***/ function(module, exports) {

	var path = 'dist/formly/wrappers/bootstrap-has-error.jade';
	var html = "<div ng-class=\"{'has-error': showError, 'has-success': fc.$valid}\" class=\"form-group\"><formly-transclude></formly-transclude></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 109 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-checkbox.jade';
	var html = "<div class=\"col-xs-offset-2 col-xs-10\"><div class=\"checkbox\"><label><input type=\"checkbox\" ng-model=\"model[options.key]\"> {{to.label}}</label></div></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 110 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-multi-checkbox.jade';
	var html = "<div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\"><label><input type=\"checkbox\" id=\"{{id + '_'+ $index}}\" ng-model=\"multiCheckbox.checked[$index]\" ng-change=\"multiCheckbox.change()\" name=\"{{options.key}}\" ng-value=\"option[to.valueProp||'value']\"> {{option[to.labelProp || 'name']}}</label></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 111 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-multi-checkbox-inline.jade';
	var html = "<label ng-repeat=\"(key, option) in to.options\" class=\"checkbox-inline\"><input type=\"checkbox\" id=\"{{id + '_'+ $index}}\" ng-model=\"multiCheckbox.checked[$index]\" ng-change=\"multiCheckbox.change()\" name=\"{{options.key}}\" ng-value=\"option[to.valueProp||'value']\"> {{option[to.labelProp || 'name']}}</label>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 112 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-markdown-area.jade';
	var html = "<div class=\"row\"><div class=\"col-xs-12\"><ul class=\"nav nav-tabs\"><li ng-class=\"{'active': 'both'}[view]\"><button type=\"button\" ng-click=\"view='markdown'\" ng-init=\"view='markdown'\" class=\"btn btn-default\">Markdown</button></li><li ng-class=\"{'active': 'both'}[view]\"><button type=\"button\" ng-click=\"view='preview'\" class=\"btn btn-default\">Vorschau</button></li><li ng-class=\"{'active': 'both'}[view]\"><button type=\"button\" ng-click=\"view='both'\" class=\"btn btn-default\">nebeneinander</button></li></ul></div></div><div ng-switch=\"view\" class=\"row\"><div ng-switch-when=\"markdown\" class=\"col-xs-12\"><textarea ng-model=\"model[options.key]\" class=\"form-control\"></textarea></div><div ng-switch-when=\"preview\" markdown=\"model[options.key]\" math-jax class=\"col-xs-12\"></div><div ng-switch-when=\"both\" class=\"col-xs-6\"><textarea ng-model=\"model[options.key]\" class=\"form-control\"></textarea></div><div ng-switch-when=\"both\" markdown=\"model[options.key]\" math-jax class=\"col-xs-6\"></div></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 113 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-radio-inline.jade';
	var html = "<label ng-repeat=\"option in to.options\" class=\"radio-inline\"><input type=\"radio\" id=\"{{id+'_'+$index}}\" name=\"{{options.key}}\" ng-value=\"option[to.valueProp||'value']\" ng-model=\"model[options.key]\"><span ng-if=\"option.icon\" ng-class=\"'fa-'+option.icon\" class=\"fa\"></span> {{option[to.labelProp||'name']}}</label>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 114 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/repeat-section.jade';
	var html = "<h4 ng-bind=\"to.label\"></h4><div ng-repeat=\"element in model[options.key]\" ng-init=\"fields = copyFields(to.fields)\" class=\"repeatsection\"><formly-form fields=\"fields\" model=\"element\" bind-name=\"'formly_ng_repeat' + index + $parent.$index\"></formly-form><div class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><button ng-click=\"model[options.key].splice($index, 1)\" class=\"btn btn-sm btn-danger\">Löschen</button></div></div><hr></div><div class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><button type=\"button\" ng-click=\"addNew()\" ng-bind=\"to.btnText\" class=\"btn btn-primary\"></button></div></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = repeatSectionController;
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*@ngInject*/function repeatSectionController($scope) {
	  function copyFields(fields) {
	    return _angular2.default.copy(fields);
	  }
	  function addNew() {
	    $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
	    var repeatsection = $scope.model[$scope.options.key];
	    //let lastSection = repeatsection[repeatsection.length - 1];
	    var newsection = {};
	    repeatsection.push(newsection);
	  }
	  $scope.formOptions = { formState: $scope.formState };
	  $scope.addNew = addNew;
	  $scope.copyFields = copyFields;
	}
	repeatSectionController.$inject = ["$scope"];

/***/ },
/* 116 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-typeahead.jade';
	var html = "<input type=\"{{to.type || 'text'}}\" ng-model=\"model[options.key]\">";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 117 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-rating.jade';
	var html = "<label ng-bind=\"to.label\" class=\"col-xs-8 control-label\"></label><div class=\"col-xs-4\"><rating ng-model=\"model[options.key]\"></rating></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validator = exports.model = exports.interceptor = undefined;
	
	var _userInterceptor = __webpack_require__(119);
	
	var _userInterceptor2 = _interopRequireDefault(_userInterceptor);
	
	var _userModel = __webpack_require__(120);
	
	var _userModel2 = _interopRequireDefault(_userModel);
	
	var _userCheckValidator = __webpack_require__(127);
	
	var _userCheckValidator2 = _interopRequireDefault(_userCheckValidator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.interceptor = _userInterceptor2.default;
	exports.model = _userModel2.default;
	exports.validator = _userCheckValidator2.default;

/***/ },
/* 119 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = userInterceptor;
	/*@ngInject*/function userInterceptor($localStorage) {
	  function request(config) {
	    if (config.headers.Authorization) {
	      return config;
	    }
	    if ($localStorage.token) {
	      config.headers.Authorization = 'bearer ' + $localStorage.token;
	    }
	    return config;
	  }
	  return { request: request };
	}
	userInterceptor.$inject = ["$localStorage"];

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(21);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _login = __webpack_require__(121);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _changePassword = __webpack_require__(124);
	
	var _changePassword2 = _interopRequireDefault(_changePassword);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var user = function () {
	  function user(Restangular, $localStorage, $window, $q, $uibModal, api) {
	    _classCallCheck(this, user);
	
	    this.api = api;
	    this.Users = Restangular.all('users');
	    this.Token = Restangular.one('tokens', 'new');
	    this.$storage = $localStorage;
	    this.$q = $q;
	    this.$window = $window;
	    this.$uibModal = $uibModal;
	    this.data = null;
	    this.init();
	  }
	  user.$inject = ["Restangular", "$localStorage", "$window", "$q", "$uibModal", "api"];
	
	  _createClass(user, [{
	    key: 'check',
	    value: function check(name, value) {
	      var query = {};
	      query[name] = value;
	      return this.Users.head(query);
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      if (!this.authenticated) {
	        return this.inauthenticate();
	      }
	      return this.Users.get(this.$storage._id).then(function (data) {
	        _this.data = data;
	        return data;
	      }, function (e) {
	        _this.inauthenticate();
	        return e;
	      });
	    }
	  }, {
	    key: 'basicAuth',
	    value: function basicAuth(form) {
	      var name = form.email;
	      var pass = form.password;
	      if (!name || !pass) {
	        throw Error('missing credentials');
	      }
	      var str = this.$window.btoa(name + ':' + pass);
	      return 'basic ' + str;
	    }
	  }, {
	    key: 'authenticate',
	    value: function authenticate(form, init) {
	      var _this2 = this;
	
	      var Authorization = this.basicAuth(form);
	      return this.Token.get(null, { Authorization: Authorization }).then(function (data) {
	        _this2.authenticated = data;
	        if (!init) {
	          return data;
	        }
	        return _this2.init();
	      });
	    }
	  }, {
	    key: 'inauthenticate',
	    value: function inauthenticate() {
	      this.$storage.$reset();
	      this.data = null;
	      this.api.token.value = null;
	    }
	  }, {
	    key: 'create',
	    value: function create(form) {
	      var _this3 = this;
	
	      return this.Users.post(form).then(function (data) {
	        _this3.data = data;
	        return data;
	      });
	    }
	  }, {
	    key: 'addUnit',
	    value: function addUnit(id) {
	      var _this4 = this;
	
	      var included = _lodash2.default.includes(this.data.done, id);
	      if (included) {
	        return;
	      }
	      var item = {
	        unit: id
	      };
	      this.data.all('done').post(item).then(function (data) {
	        _this4.data.done.push(data);
	      });
	    }
	  }, {
	    key: 'complete',
	    value: function complete(unit) {
	      if (!this.authenticated) {
	        return false;
	      }
	      return _lodash2.default.some(this.data.done, { unit: unit });
	    }
	  }, {
	    key: 'requiresComplete',
	    value: function requiresComplete(requires) {
	      if (!this.authenticated) {
	        return false;
	      }
	      return _lodash2.default.every(requires, function (val) {
	        return _lodash2.default.some(this.data.done, { unit: val });
	      }, this);
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var _this5 = this;
	
	      return this.data.remove().then(function () {
	        return _this5.inauthenticate();
	      });
	    }
	  }, {
	    key: 'login',
	    value: function login() {
	      return this.$uibModal.open(_login2.default);
	    }
	  }, {
	    key: 'changePassword',
	    value: function changePassword() {
	      return this.$uibModal.open(_changePassword2.default);
	    }
	  }, {
	    key: 'authenticated',
	    get: function get() {
	      return this.$storage._id && this.$storage.token ? true : false;
	    },
	    set: function set(data) {
	      this.$storage.token = data.token;
	      this.$storage._id = data._id;
	      this.$storage.role = data.role;
	      this.api.setToken(data.token);
	    }
	  }, {
	    key: '_id',
	    get: function get() {
	      return this.$storage._id;
	    }
	  }, {
	    key: 'token',
	    get: function get() {
	      return this.$storage.token;
	    }
	  }, {
	    key: 'role',
	    get: function get() {
	      return this.$storage.role;
	    }
	  }]);
	
	  return user;
	}();
	
	exports.default = user;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _login = __webpack_require__(122);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _loginController = __webpack_require__(123);
	
	var _loginController2 = _interopRequireDefault(_loginController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  templateUrl: _login2.default,
	  controller: _loginController2.default,
	  controllerAs: 'login'
	};

/***/ },
/* 122 */
/***/ function(module, exports) {

	var path = 'dist/user/login/login.jade';
	var html = "<div class=\"modal-header\"><h3>Anmelden</h3></div><div class=\"modal-body\"><form role=\"form\" novalidate name=\"login.loginForm\" class=\"form-horizontal\"><formly-form model=\"login.data\" fields=\"login.loginFields\" form=\"login.loginForm\"></formly-form></form></div><div class=\"modal-footer\"><input type=\"button\" value=\"abbrechen\" data-ng-click=\"login.cancel()\" class=\"btn btn-default\"><input type=\"button\" ng-click=\"login.login()\" ng-class=\"{'btn-primary': login.loginForm.$valid, 'btn-danger': login.loginForm.$invalid}\" value=\"anmelden\" ng-disabled=\"login.loginForm.$invalid\" class=\"btn\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 123 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var LoginController = function () {
	  function LoginController(user, $uibModalInstance) {
	    _classCallCheck(this, LoginController);
	
	    this.user = user;
	    this.$uibModalInstance = $uibModalInstance;
	    this.data = {};
	    this.loginFields = [{
	      key: 'email',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'email',
	        label: 'E-Mail',
	        required: true,
	        placeholder: 'name@provider.com',
	        maxlength: 50
	      },
	      validation: {
	        messages: {
	          'userCheck': '$viewValue+" ist kein registrierter Benutzer"'
	        }
	      },
	      ngModelAttrs: {
	        'exists': {
	          value: 'user-check'
	        }
	      },
	      modelOptions: {
	        updateOn: 'default blur',
	        debounce: { default: 500, blur: 0 }
	      }
	    }, {
	      key: 'password',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'password',
	        label: 'Passwort',
	        required: true,
	        placeholder: 'unlösbar',
	        minlength: 8
	      }
	    }];
	  }
	  LoginController.$inject = ["user", "$uibModalInstance"];
	
	  _createClass(LoginController, [{
	    key: 'login',
	    value: function login() {
	      var _this = this;
	
	      return this.user.authenticate(this.data, true).then(function (data) {
	        return _this.$uibModalInstance.close(data);
	      }, function (e) {
	        _this.message = e.data;
	        return e;
	      });
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      this.$uibModalInstance.dismiss('cancel');
	    }
	  }]);
	
	  return LoginController;
	}();
	
	exports.default = LoginController;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _changePassword = __webpack_require__(125);
	
	var _changePassword2 = _interopRequireDefault(_changePassword);
	
	var _changePasswordController = __webpack_require__(126);
	
	var _changePasswordController2 = _interopRequireDefault(_changePasswordController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  templateUrl: _changePassword2.default,
	  controller: _changePasswordController2.default,
	  controllerAs: 'changePassword'
	};

/***/ },
/* 125 */
/***/ function(module, exports) {

	var path = 'dist/user/change-password/change-password.jade';
	var html = "<div class=\"modal-header\"><h3>Passwort ändern</h3></div><div class=\"modal-body\"><form novalidate name=\"changePassword.form\" class=\"form-horizontal\"><formly-form model=\"changePassword.data\" fields=\"changePassword.fields\" form=\"changePassword.form\" options=\"changePassword.formOptions\"></formly-form></form></div><div class=\"modal-footer\"><input type=\"button\" value=\"abbrechen\" ng-click=\"changePassword.cancel()\" class=\"btn btn-default\"><input type=\"button\" ng-click=\"changePassword.change()\" ng-class=\"{'btn-primary': changePassword.form.$valid, 'btn-danger': changePassword.form.$invalid}\" value=\"Ändern\" ng-disabled=\"changePassword.form.$invalid\" class=\"btn\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 126 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var ChangePasswordController = function () {
	  function ChangePasswordController(user, api, $uibModalInstance) {
	    _classCallCheck(this, ChangePasswordController);
	
	    this.user = user;
	    this.api = api;
	    this.$uibModalInstance = $uibModalInstance;
	    this.data = {};
	    this.formOptions = {
	      formState: {
	        showPasswords: false
	      }
	    };
	    this.fields = [{
	      key: 'old',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'password',
	        label: 'Altes Passwort',
	        required: true,
	        placeholder: 'unlösbar',
	        minlength: 8
	      },
	      expressionProperties: {
	        'templateOptions.type': 'formState.showPasswords ? "text" : "password"'
	      }
	    }, {
	      key: 'new',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'password',
	        label: 'Neues Passwort',
	        required: true,
	        placeholder: 'unlösbar',
	        minlength: 8
	      },
	      expressionProperties: {
	        'templateOptions.type': 'formState.showPasswords ? "text" : "password"'
	      }
	    }, {
	      key: 'showPasswords',
	      model: this.formOptions.formState,
	      type: 'horizontalCheckbox',
	      templateOptions: {
	        label: 'Passwörter einblenden'
	      }
	    }];
	  }
	  ChangePasswordController.$inject = ["user", "api", "$uibModalInstance"];
	
	  _createClass(ChangePasswordController, [{
	    key: 'change',
	    value: function change() {
	      var _this = this;
	
	      return this.api.putUsersBy_idPassword({
	        _id: this.user._id,
	        data: this.data
	      }).then(function (data) {
	        return _this.$uibModalInstance.close(data);
	      }, function (e) {
	        _this.message = e.data;
	        return e;
	      });
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      this.$uibModalInstance.dismiss('cancel');
	    }
	  }]);
	
	  return ChangePasswordController;
	}();
	
	exports.default = ChangePasswordController;

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = userCheckValidator;
	/*@ngInject*/function userCheckValidator($q, user) {
	  function link(scope, el, attrs, c) {
	    c.$parsers.push(function (value) {
	      return value.toLowerCase();
	    });
	    c.$asyncValidators.userCheck = function (value) {
	      var promise = user.check('email', value);
	      switch (attrs.userCheck) {
	        case 'available':
	          return promise.then(function () {
	            return $q.reject('exists');
	          }, function () {
	            return true;
	          });
	        case 'exists':
	          return promise;
	      }
	    };
	  }
	  return {
	    require: 'ngModel',
	    restrict: 'A',
	    link: link
	  };
	}
	userCheckValidator.$inject = ["$q", "user"];

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _fsk2 = __webpack_require__(129);
	
	var _fsk3 = _interopRequireDefault(_fsk2);
	
	var _akzeptanz2 = __webpack_require__(132);
	
	var _akzeptanz3 = _interopRequireDefault(_akzeptanz2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*@ngInject*/
	var modals = function () {
	  function modals($uibModal) {
	    _classCallCheck(this, modals);
	
	    this.$uibModal = $uibModal;
	  }
	  modals.$inject = ["$uibModal"];
	
	  _createClass(modals, [{
	    key: 'fsk',
	    value: function fsk() {
	      return this.$uibModal.open(_fsk3.default);
	    }
	  }, {
	    key: 'akzeptanz',
	    value: function akzeptanz() {
	      return this.$uibModal.open(_akzeptanz3.default);
	    }
	  }]);
	
	  return modals;
	}();
	
	exports.default = modals;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _fsk = __webpack_require__(130);
	
	var _fsk2 = _interopRequireDefault(_fsk);
	
	var _fskController = __webpack_require__(131);
	
	var _fskController2 = _interopRequireDefault(_fskController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  templateUrl: _fsk2.default,
	  controller: _fskController2.default,
	  controllerAs: 'fsk',
	  size: 'lg'
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	var path = 'dist/modals/fsk/fsk.jade';
	var html = "<div class=\"modal-header\"><h3>Selbsteinschätzung deiner Statistikkenntnisse</h3></div><div class=\"modal-body\"><form name=\"sesskoForm\" novalidate data-ng-if=\"fsk.user.data.fsk.length===0\"><div class=\"form-group\"><p><strong>Ich bin für Statistik …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[0]\"> nicht begabt</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='2' data-ng-model=\"fsk.sessko[0]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='3' data-ng-model=\"fsk.sessko[0]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='4' data-ng-model=\"fsk.sessko[0]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='5' data-ng-model=\"fsk.sessko[0]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[0]\"> sehr begabt</label></div><div class=\"form-group\"><p><strong>Neues zu lernen in Statistik, fällt mir …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[1]\"> schwer</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='2' data-ng-model=\"fsk.sessko[1]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='3' data-ng-model=\"fsk.sessko[1]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='4' data-ng-model=\"fsk.sessko[1]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='5' data-ng-model=\"fsk.sessko[1]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[1]\"> leicht</label></div><div class=\"form-group\"><p><strong>Ich bin in Statistik …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[2]\"> nicht intelligent</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='2' data-ng-model=\"fsk.sessko[2]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='3' data-ng-model=\"fsk.sessko[2]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='4' data-ng-model=\"fsk.sessko[2]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='5' data-ng-model=\"fsk.sessko[2]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[2]\"> sehr inntelligent</label></div><div class=\"form-group\"><p><strong>Meine statistikbezogenen Fähigkeiten sind …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[3]\"> niedrig</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='2' data-ng-model=\"fsk.sessko[3]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='3' data-ng-model=\"fsk.sessko[3]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='4' data-ng-model=\"fsk.sessko[3]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='5' data-ng-model=\"fsk.sessko[3]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[3]\"> hoch</label></div><div class=\"form-group\"><p><strong>Statistische Aufgaben fallen mir …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[4]\"> schwer</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='2' data-ng-model=\"fsk.sessko[4]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='3' data-ng-model=\"fsk.sessko[4]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='4' data-ng-model=\"fsk.sessko[4]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='5' data-ng-model=\"fsk.sessko[4]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[4]\"> leicht</label></div></form><form novalidate name=\"sesskoForm2\" data-ng-if=\"fsk.user.data.fsk.length&gt;0\"><div class=\"form-group\"><p><strong>Nach der Bearbeitung des WBTs halte ich meine Begabung für Statistik jetzt für …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[0]\"> geringer als zuvor</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='2' data-ng-model=\"fsk.sessko[0]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='3' data-ng-model=\"fsk.sessko[0]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='4' data-ng-model=\"fsk.sessko[0]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='5' data-ng-model=\"fsk.sessko[0]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[0]\"> höher als zuvor</label></div><div class=\"form-group\"><p><strong>Nach der Bearbeitung des WBTs fällt mir das Lernen von neuen statistischen Inhalten jetzt …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[1]\"> schwerer als zuvor</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='2' data-ng-model=\"fsk.sessko[1]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='3' data-ng-model=\"fsk.sessko[1]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='4' data-ng-model=\"fsk.sessko[1]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='5' data-ng-model=\"fsk.sessko[1]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[1]\"> leichter als zuvor</label></div><div class=\"form-group\"><p><strong>Nach der Bearbeitung des WBTs komme ich mit den Anforderungen in Statistik …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[2]\"> schlechter zurecht als zuvor</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='2' data-ng-model=\"fsk.sessko[2]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='3' data-ng-model=\"fsk.sessko[2]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='4' data-ng-model=\"fsk.sessko[2]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='5' data-ng-model=\"fsk.sessko[2]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[2]\"> besser zurecht als zuvor</label></div><div class=\"form-group\"><p><strong>Nach der Bearbeitung des WBTs bin ich jetzt …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[3]\"> schlechter in Statistik als zuvor</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='2' data-ng-model=\"fsk.sessko[3]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='3' data-ng-model=\"fsk.sessko[3]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='4' data-ng-model=\"fsk.sessko[3]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='5' data-ng-model=\"fsk.sessko[3]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[3]\"> besser in Statistik als zuvor</label></div><div class=\"form-group\"><p><strong>Nach der Bearbeitung des WBTs fallen mir jetzt die Aufgaben in Statistik …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[4]\"> schwerer als zuvor</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='2' data-ng-model=\"fsk.sessko[4]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='3' data-ng-model=\"fsk.sessko[4]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='4' data-ng-model=\"fsk.sessko[4]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='5' data-ng-model=\"fsk.sessko[4]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[4]\"> leichter als zuvor</label></div><div class=\"form-group\"><p><strong>Nach der Bearbeitung des WBTs halte ich meine statistikbezogenen Fähigkeiten für …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko6\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[5]\"> niedriger als zuvor</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko6\" data-ng-value='2' data-ng-model=\"fsk.sessko[5]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko6\" data-ng-value='3' data-ng-model=\"fsk.sessko[5]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko6\" data-ng-value='4' data-ng-model=\"fsk.sessko[5]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko6\" data-ng-value='5' data-ng-model=\"fsk.sessko[5]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko6\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[5]\"> höher als zuvor</label></div></form></div><div class=\"modal-footer\"><input type=\"button\" data-ng-click=\"fsk.cancel()\" value=\"Abbrechen\" class=\"btn btn-default\"><input type=\"button\" data-ng-click=\"fsk.ok()\" value=\"Abschicken\" class=\"btn btn-primary\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 131 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FskCtrl = function () {
	  function FskCtrl(Restangular, $modalInstance) {
	    _classCallCheck(this, FskCtrl);
	
	    this.$modalInstance = $modalInstance;
	    this.sessko = [];
	  }
	
	  _createClass(FskCtrl, [{
	    key: 'ok',
	    value: function ok() {
	      return this.Restangular.all('fsk').post(this.sessko).then(this.$modalInstance.close);
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      return this.$modalInstance.dismiss();
	    }
	  }]);
	
	  return FskCtrl;
	}();
	
	exports.default = FskCtrl;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _akzeptanz = __webpack_require__(133);
	
	var _akzeptanz2 = _interopRequireDefault(_akzeptanz);
	
	var _akzeptanzController = __webpack_require__(134);
	
	var _akzeptanzController2 = _interopRequireDefault(_akzeptanzController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  templateUrl: _akzeptanz2.default,
	  controller: _akzeptanzController2.default,
	  controllerAs: 'akzeptanz',
	  animation: false,
	  resolve: {
	    summary: /*@ngInject*/["Restangular", "$stateParams", function summary(Restangular, $stateParams) {
	      return Restangular.one('units', $stateParams.unit).one('summaries', 'akzeptanz').get();
	    }]
	  }
	};

/***/ },
/* 133 */
/***/ function(module, exports) {

	var path = 'dist/modals/akzeptanz/akzeptanz.jade';
	var html = "<div class=\"modal-header\"><h3 class=\"modal-title\">Kapitel bewerten</h3></div><div class=\"modal-body\"><p>Stufe die folgenden drei Aussagen mittels der Sternchen ein (1 Stern: trifft nicht auf mich zu, 5 Sterne: trifft voll auf mich zu). Du kannst deine Wertungen beliebig oft ändern.</p><formly-form model=\"akzeptanz.summary\" fields=\"akzeptanz.fields\" form=\"akzeptanz.form\" class=\"form-horizontal\"></formly-form></div><div class=\"modal-footer\"><button type=\"button\" ng-click=\"akzeptanz.cancel()\" class=\"btn btn-default\">Abbrechen</button><button type=\"button\" ng-click=\"akzeptanz.ok()\" class=\"btn btn-primary\">Kommentar abschicken</button></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 134 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var /*@ngInject*/RatingCtrl = function RatingCtrl($scope, Restangular, $stateParams) {
	  _classCallCheck(this, RatingCtrl);
	
	  $scope.rate = function () {
	    var rating = {
	      name: $scope.options.key,
	      unit: $stateParams.unit,
	      value: $scope.model[$scope.options.key]
	    };
	    return Restangular.all('ratings').post(rating);
	  };
	};
	RatingCtrl.$inject = ["$scope", "Restangular", "$stateParams"];
	
	/*@ngInject*/
	var akzeptanzCtrl = function () {
	  function akzeptanzCtrl($modalInstance, summary, Restangular, $stateParams) {
	    _classCallCheck(this, akzeptanzCtrl);
	
	    var labels = ['keine Antwort', 'stimme nicht zu', 'stimme weniger zu', 'stimme teilweise zu', 'stimme eher zu', 'stimme zu'];
	    this.$modalInstance = $modalInstance;
	    this.summary = summary;
	    this.$stateParams = $stateParams;
	    this.Comments = Restangular.all('comments');
	    this.fields = [{
	      key: 'motivation',
	      type: 'horizontalRating',
	      templateOptions: {
	        label: 'Die Bearbeitung dieses Kapitels war für mich sehr motivierend, weiterzumachen viel mir leicht.',
	        labels: labels,
	        onChange: 'rate()'
	      },
	      controller: RatingCtrl
	    }, {
	      key: 'success',
	      type: 'horizontalRating',
	      templateOptions: {
	        label: 'Ich habe das Gefühl, einiges über das thema dazugelernt zu haben.',
	        labels: labels,
	        onChange: 'rate()'
	      },
	      controller: RatingCtrl
	    }, {
	      key: 'usability',
	      type: 'horizontalRating',
	      templateOptions: {
	        label: 'Die Webseite lässt sich gut bedienen und es ist klar, was ich als nächstes tun soll.',
	        labels: labels,
	        onChange: 'rate()'
	      },
	      controller: RatingCtrl
	    }, {
	      key: 'comment',
	      type: 'horizontalTextarea',
	      templateOptions: {
	        label: 'Kommentar',
	        placeholder: 'Ergänzungen, Kritik oder Anmerkungen, die du noch loswerden möchtest'
	      }
	    }];
	  }
	  akzeptanzCtrl.$inject = ["$modalInstance", "summary", "Restangular", "$stateParams"];
	
	  _createClass(akzeptanzCtrl, [{
	    key: 'ok',
	    value: function ok() {
	      var _this = this;
	
	      return this.Comments.post({
	        unit: this.$stateParams.unit,
	        value: this.summary.comment
	      }).then(function (data) {
	        _this.$modalInstance.close(data);
	      });
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      return this.$modalInstance.dismiss('cancel');
	    }
	  }]);
	
	  return akzeptanzCtrl;
	}();
	
	exports.default = akzeptanzCtrl;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = test;
	
	var _lodash = __webpack_require__(21);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*@ngInject*/function test() {
	  function points(item, value) {
	    var choice = undefined;
	    switch (item.type) {
	      case 'single':
	        choice = _lodash2.default.find(item.choices, { _id: value });
	        return choice.correct ? 1 : 0;
	      case 'multiple':
	        return _lodash2.default.sum(item.choices, function (c) {
	          return _lodash2.default.include(value, c._id) === c.correct ? 1 : 0;
	        });
	      case 'input':
	        choice = _lodash2.default.find(item.choices, { text: value });
	        if (!choice) {
	          return 0;
	        }
	        return choice.correct ? 1 : 0;
	    }
	  }
	  function maxPoints(item) {
	    switch (item.type) {
	      case 'single':
	        return 1;
	      case 'multiple':
	        return item.choices.length;
	      case 'input':
	        return 1;
	    }
	  }
	  function runPoints(tests, guess) {
	    return _lodash2.default.sum(tests, function (t) {
	      if (guess.length === 0) {
	        return 0;
	      }
	      var response = _lodash2.default.find(guess.responses, { test: t._id });
	      if (!response) {
	        return 0;
	      }
	      return points(t, response.value);
	    });
	  }
	  function item(tests, guess) {
	    return _lodash2.default.findIndex(tests, function (t) {
	      var response = _lodash2.default.find(guess.responses, { test: t._id });
	      return response ? false : true;
	    });
	  }
	  function response(test, response) {
	    switch (test.type) {
	      case 'single':
	        return {
	          test: test._id,
	          value: response._id
	        };
	      case 'multiple':
	        var value = _lodash2.default.transform(response, function (ac, val, key) {
	          if (val === true) {
	            ac.push(key);
	          }
	        }, []);
	        return {
	          test: test._id,
	          value: value
	        };
	      case 'input':
	        return {
	          test: test._id,
	          value: response
	        };
	    }
	  }
	  function input(test) {
	    switch (test.type) {
	      case 'single':
	        return null;
	      case 'multiple':
	        return _lodash2.default.transform(test.choices, function (o, c) {
	          o[c._id] = false;
	        }, {});
	      case 'input':
	        return '';
	    }
	  }
	  function shuffle(unit) {
	    return _lodash2.default.transform(unit.test.shuffle, function (o, val) {
	      o[val] = true;
	    }, {});
	  }
	  return {
	    points: points,
	    maxPoints: maxPoints,
	    runPoints: runPoints,
	    item: item,
	    response: response,
	    input: input,
	    shuffle: shuffle
	  };
	}

/***/ }
]);
//# sourceMappingURL=app.js.map