/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// libraries
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _angularUiRouter = __webpack_require__(3);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	__webpack_require__(4);

	var _angularUiBootstrap = __webpack_require__(5);

	var _angularUiBootstrap2 = _interopRequireDefault(_angularUiBootstrap);

	__webpack_require__(7);

	var _oclazyload = __webpack_require__(8);

	var _oclazyload2 = _interopRequireDefault(_oclazyload);

	var _apiCheck = __webpack_require__(9);

	var _apiCheck2 = _interopRequireDefault(_apiCheck);

	var _angularFormly = __webpack_require__(10);

	var _angularFormly2 = _interopRequireDefault(_angularFormly);

	var _sourceMapAngularFormlyTemplatesBootstrap = __webpack_require__(11);

	var _sourceMapAngularFormlyTemplatesBootstrap2 = _interopRequireDefault(_sourceMapAngularFormlyTemplatesBootstrap);

	__webpack_require__(12);

	var _configJs = __webpack_require__(13);

	var _user = __webpack_require__(165);

	var user = _interopRequireWildcard(_user);

	var _modals = __webpack_require__(169);

	var _modals2 = _interopRequireDefault(_modals);

	var _plot = __webpack_require__(179);

	var _plot2 = _interopRequireDefault(_plot);

	_apiCheck2['default'].globalConfig.disabled = true;
	exports['default'] = _angular2['default'].module('wbt', ['restangular', _angularUiRouter2['default'], 'ui.router.stateHelper', _angularUiBootstrap2['default'], 'ngMessages', 'ngAria', 'ngAnimate', 'ngSanitize', 'ngStorage', _oclazyload2['default'], _angularFormly2['default'], _sourceMapAngularFormlyTemplatesBootstrap2['default'], 'permission', _plot2['default']]).constant('lodash', _lodash2['default']).config(_configJs.config).run(_configJs.run).factory('userInterceptor', user.interceptor).service('user', user.model).directive('userCheck', user.validator).service('modals', _modals2['default']).name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * State-based routing for AngularJS
	 * @version v0.2.15
	 * @link http://angular-ui.github.com/
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

	/* commonjs package manager support (eg componentjs) */
	if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
	  module.exports = 'ui.router';
	}

	(function (window, angular, undefined) {
	/*jshint globalstrict:true*/
	/*global angular:false*/
	'use strict';

	var isDefined = angular.isDefined,
	    isFunction = angular.isFunction,
	    isString = angular.isString,
	    isObject = angular.isObject,
	    isArray = angular.isArray,
	    forEach = angular.forEach,
	    extend = angular.extend,
	    copy = angular.copy;

	function inherit(parent, extra) {
	  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
	}

	function merge(dst) {
	  forEach(arguments, function(obj) {
	    if (obj !== dst) {
	      forEach(obj, function(value, key) {
	        if (!dst.hasOwnProperty(key)) dst[key] = value;
	      });
	    }
	  });
	  return dst;
	}

	/**
	 * Finds the common ancestor path between two states.
	 *
	 * @param {Object} first The first state.
	 * @param {Object} second The second state.
	 * @return {Array} Returns an array of state names in descending order, not including the root.
	 */
	function ancestors(first, second) {
	  var path = [];

	  for (var n in first.path) {
	    if (first.path[n] !== second.path[n]) break;
	    path.push(first.path[n]);
	  }
	  return path;
	}

	/**
	 * IE8-safe wrapper for `Object.keys()`.
	 *
	 * @param {Object} object A JavaScript object.
	 * @return {Array} Returns the keys of the object as an array.
	 */
	function objectKeys(object) {
	  if (Object.keys) {
	    return Object.keys(object);
	  }
	  var result = [];

	  forEach(object, function(val, key) {
	    result.push(key);
	  });
	  return result;
	}

	/**
	 * IE8-safe wrapper for `Array.prototype.indexOf()`.
	 *
	 * @param {Array} array A JavaScript array.
	 * @param {*} value A value to search the array for.
	 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
	 */
	function indexOf(array, value) {
	  if (Array.prototype.indexOf) {
	    return array.indexOf(value, Number(arguments[2]) || 0);
	  }
	  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
	  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

	  if (from < 0) from += len;

	  for (; from < len; from++) {
	    if (from in array && array[from] === value) return from;
	  }
	  return -1;
	}

	/**
	 * Merges a set of parameters with all parameters inherited between the common parents of the
	 * current state and a given destination state.
	 *
	 * @param {Object} currentParams The value of the current state parameters ($stateParams).
	 * @param {Object} newParams The set of parameters which will be composited with inherited params.
	 * @param {Object} $current Internal definition of object representing the current state.
	 * @param {Object} $to Internal definition of object representing state to transition to.
	 */
	function inheritParams(currentParams, newParams, $current, $to) {
	  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

	  for (var i in parents) {
	    if (!parents[i].params) continue;
	    parentParams = objectKeys(parents[i].params);
	    if (!parentParams.length) continue;

	    for (var j in parentParams) {
	      if (indexOf(inheritList, parentParams[j]) >= 0) continue;
	      inheritList.push(parentParams[j]);
	      inherited[parentParams[j]] = currentParams[parentParams[j]];
	    }
	  }
	  return extend({}, inherited, newParams);
	}

	/**
	 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
	 *
	 * @param {Object} a The first object.
	 * @param {Object} b The second object.
	 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
	 *                     it defaults to the list of keys in `a`.
	 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
	 */
	function equalForKeys(a, b, keys) {
	  if (!keys) {
	    keys = [];
	    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
	  }

	  for (var i=0; i<keys.length; i++) {
	    var k = keys[i];
	    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
	  }
	  return true;
	}

	/**
	 * Returns the subset of an object, based on a list of keys.
	 *
	 * @param {Array} keys
	 * @param {Object} values
	 * @return {Boolean} Returns a subset of `values`.
	 */
	function filterByKeys(keys, values) {
	  var filtered = {};

	  forEach(keys, function (name) {
	    filtered[name] = values[name];
	  });
	  return filtered;
	}

	// like _.indexBy
	// when you know that your index values will be unique, or you want last-one-in to win
	function indexBy(array, propName) {
	  var result = {};
	  forEach(array, function(item) {
	    result[item[propName]] = item;
	  });
	  return result;
	}

	// extracted from underscore.js
	// Return a copy of the object only containing the whitelisted properties.
	function pick(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  forEach(keys, function(key) {
	    if (key in obj) copy[key] = obj[key];
	  });
	  return copy;
	}

	// extracted from underscore.js
	// Return a copy of the object omitting the blacklisted properties.
	function omit(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  for (var key in obj) {
	    if (indexOf(keys, key) == -1) copy[key] = obj[key];
	  }
	  return copy;
	}

	function pluck(collection, key) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = isFunction(key) ? key(val) : val[key];
	  });
	  return result;
	}

	function filter(collection, callback) {
	  var array = isArray(collection);
	  var result = array ? [] : {};
	  forEach(collection, function(val, i) {
	    if (callback(val, i)) {
	      result[array ? result.length : i] = val;
	    }
	  });
	  return result;
	}

	function map(collection, callback) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = callback(val, i);
	  });
	  return result;
	}

	/**
	 * @ngdoc overview
	 * @name ui.router.util
	 *
	 * @description
	 * # ui.router.util sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 *
	 */
	angular.module('ui.router.util', ['ng']);

	/**
	 * @ngdoc overview
	 * @name ui.router.router
	 * 
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.router sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 */
	angular.module('ui.router.router', ['ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router.state
	 * 
	 * @requires ui.router.router
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.state sub-module
	 *
	 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 * 
	 */
	angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router
	 *
	 * @requires ui.router.state
	 *
	 * @description
	 * # ui.router
	 * 
	 * ## The main module for ui.router 
	 * There are several sub-modules included with the ui.router module, however only this module is needed
	 * as a dependency within your angular app. The other modules are for organization purposes. 
	 *
	 * The modules are:
	 * * ui.router - the main "umbrella" module
	 * * ui.router.router - 
	 * 
	 * *You'll need to include **only** this module as the dependency within your angular app.*
	 * 
	 * <pre>
	 * <!doctype html>
	 * <html ng-app="myApp">
	 * <head>
	 *   <script src="js/angular.js"></script>
	 *   <!-- Include the ui-router script -->
	 *   <script src="js/angular-ui-router.min.js"></script>
	 *   <script>
	 *     // ...and add 'ui.router' as a dependency
	 *     var myApp = angular.module('myApp', ['ui.router']);
	 *   </script>
	 * </head>
	 * <body>
	 * </body>
	 * </html>
	 * </pre>
	 */
	angular.module('ui.router', ['ui.router.state']);

	angular.module('ui.router.compat', ['ui.router']);

	/**
	 * @ngdoc object
	 * @name ui.router.util.$resolve
	 *
	 * @requires $q
	 * @requires $injector
	 *
	 * @description
	 * Manages resolution of (acyclic) graphs of promises.
	 */
	$Resolve.$inject = ['$q', '$injector'];
	function $Resolve(  $q,    $injector) {
	  
	  var VISIT_IN_PROGRESS = 1,
	      VISIT_DONE = 2,
	      NOTHING = {},
	      NO_DEPENDENCIES = [],
	      NO_LOCALS = NOTHING,
	      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
	  

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#study
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Studies a set of invocables that are likely to be used multiple times.
	   * <pre>
	   * $resolve.study(invocables)(locals, parent, self)
	   * </pre>
	   * is equivalent to
	   * <pre>
	   * $resolve.resolve(invocables, locals, parent, self)
	   * </pre>
	   * but the former is more efficient (in fact `resolve` just calls `study` 
	   * internally).
	   *
	   * @param {object} invocables Invocable objects
	   * @return {function} a function to pass in locals, parent and self
	   */
	  this.study = function (invocables) {
	    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
	    var invocableKeys = objectKeys(invocables || {});
	    
	    // Perform a topological sort of invocables to build an ordered plan
	    var plan = [], cycle = [], visited = {};
	    function visit(value, key) {
	      if (visited[key] === VISIT_DONE) return;
	      
	      cycle.push(key);
	      if (visited[key] === VISIT_IN_PROGRESS) {
	        cycle.splice(0, indexOf(cycle, key));
	        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
	      }
	      visited[key] = VISIT_IN_PROGRESS;
	      
	      if (isString(value)) {
	        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
	      } else {
	        var params = $injector.annotate(value);
	        forEach(params, function (param) {
	          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
	        });
	        plan.push(key, value, params);
	      }
	      
	      cycle.pop();
	      visited[key] = VISIT_DONE;
	    }
	    forEach(invocables, visit);
	    invocables = cycle = visited = null; // plan is all that's required
	    
	    function isResolve(value) {
	      return isObject(value) && value.then && value.$$promises;
	    }
	    
	    return function (locals, parent, self) {
	      if (isResolve(locals) && self === undefined) {
	        self = parent; parent = locals; locals = null;
	      }
	      if (!locals) locals = NO_LOCALS;
	      else if (!isObject(locals)) {
	        throw new Error("'locals' must be an object");
	      }       
	      if (!parent) parent = NO_PARENT;
	      else if (!isResolve(parent)) {
	        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
	      }
	      
	      // To complete the overall resolution, we have to wait for the parent
	      // promise and for the promise for each invokable in our plan.
	      var resolution = $q.defer(),
	          result = resolution.promise,
	          promises = result.$$promises = {},
	          values = extend({}, locals),
	          wait = 1 + plan.length/3,
	          merged = false;
	          
	      function done() {
	        // Merge parent values we haven't got yet and publish our own $$values
	        if (!--wait) {
	          if (!merged) merge(values, parent.$$values); 
	          result.$$values = values;
	          result.$$promises = result.$$promises || true; // keep for isResolve()
	          delete result.$$inheritedValues;
	          resolution.resolve(values);
	        }
	      }
	      
	      function fail(reason) {
	        result.$$failure = reason;
	        resolution.reject(reason);
	      }

	      // Short-circuit if parent has already failed
	      if (isDefined(parent.$$failure)) {
	        fail(parent.$$failure);
	        return result;
	      }
	      
	      if (parent.$$inheritedValues) {
	        merge(values, omit(parent.$$inheritedValues, invocableKeys));
	      }

	      // Merge parent values if the parent has already resolved, or merge
	      // parent promises and wait if the parent resolve is still in progress.
	      extend(promises, parent.$$promises);
	      if (parent.$$values) {
	        merged = merge(values, omit(parent.$$values, invocableKeys));
	        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
	        done();
	      } else {
	        if (parent.$$inheritedValues) {
	          result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
	        }        
	        parent.then(done, fail);
	      }
	      
	      // Process each invocable in the plan, but ignore any where a local of the same name exists.
	      for (var i=0, ii=plan.length; i<ii; i+=3) {
	        if (locals.hasOwnProperty(plan[i])) done();
	        else invoke(plan[i], plan[i+1], plan[i+2]);
	      }
	      
	      function invoke(key, invocable, params) {
	        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
	        var invocation = $q.defer(), waitParams = 0;
	        function onfailure(reason) {
	          invocation.reject(reason);
	          fail(reason);
	        }
	        // Wait for any parameter that we have a promise for (either from parent or from this
	        // resolve; in that case study() will have made sure it's ordered before us in the plan).
	        forEach(params, function (dep) {
	          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
	            waitParams++;
	            promises[dep].then(function (result) {
	              values[dep] = result;
	              if (!(--waitParams)) proceed();
	            }, onfailure);
	          }
	        });
	        if (!waitParams) proceed();
	        function proceed() {
	          if (isDefined(result.$$failure)) return;
	          try {
	            invocation.resolve($injector.invoke(invocable, self, values));
	            invocation.promise.then(function (result) {
	              values[key] = result;
	              done();
	            }, onfailure);
	          } catch (e) {
	            onfailure(e);
	          }
	        }
	        // Publish promise synchronously; invocations further down in the plan may depend on it.
	        promises[key] = invocation.promise;
	      }
	      
	      return result;
	    };
	  };
	  
	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#resolve
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Resolves a set of invocables. An invocable is a function to be invoked via 
	   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
	   * An invocable can either return a value directly,
	   * or a `$q` promise. If a promise is returned it will be resolved and the 
	   * resulting value will be used instead. Dependencies of invocables are resolved 
	   * (in this order of precedence)
	   *
	   * - from the specified `locals`
	   * - from another invocable that is part of this `$resolve` call
	   * - from an invocable that is inherited from a `parent` call to `$resolve` 
	   *   (or recursively
	   * - from any ancestor `$resolve` of that parent).
	   *
	   * The return value of `$resolve` is a promise for an object that contains 
	   * (in this order of precedence)
	   *
	   * - any `locals` (if specified)
	   * - the resolved return values of all injectables
	   * - any values inherited from a `parent` call to `$resolve` (if specified)
	   *
	   * The promise will resolve after the `parent` promise (if any) and all promises 
	   * returned by injectables have been resolved. If any invocable 
	   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
	   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
	   * same error. A rejection of a `parent` promise (if specified) will likewise be 
	   * propagated immediately. Once the `$resolve` promise has been rejected, no 
	   * further invocables will be called.
	   * 
	   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
	   * to throw an error. As a special case, an injectable can depend on a parameter 
	   * with the same name as the injectable, which will be fulfilled from the `parent` 
	   * injectable of the same name. This allows inherited values to be decorated. 
	   * Note that in this case any other injectable in the same `$resolve` with the same
	   * dependency would see the decorated value, not the inherited value.
	   *
	   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
	   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
	   * exception.
	   *
	   * Invocables are invoked eagerly as soon as all dependencies are available. 
	   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
	   *
	   * As a special case, an invocable can be a string, in which case it is taken to 
	   * be a service name to be passed to `$injector.get()`. This is supported primarily 
	   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
	   * routes.
	   *
	   * @param {object} invocables functions to invoke or 
	   * `$injector` services to fetch.
	   * @param {object} locals  values to make available to the injectables
	   * @param {object} parent  a promise returned by another call to `$resolve`.
	   * @param {object} self  the `this` for the invoked methods
	   * @return {object} Promise for an object that contains the resolved return value
	   * of all invocables, as well as any inherited and local values.
	   */
	  this.resolve = function (invocables, locals, parent, self) {
	    return this.study(invocables)(locals, parent, self);
	  };
	}

	angular.module('ui.router.util').service('$resolve', $Resolve);


	/**
	 * @ngdoc object
	 * @name ui.router.util.$templateFactory
	 *
	 * @requires $http
	 * @requires $templateCache
	 * @requires $injector
	 *
	 * @description
	 * Service. Manages loading of templates.
	 */
	$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
	function $TemplateFactory(  $http,   $templateCache,   $injector) {

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromConfig
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a configuration object. 
	   *
	   * @param {object} config Configuration object for which to load a template. 
	   * The following properties are search in the specified order, and the first one 
	   * that is defined is used to create the template:
	   *
	   * @param {string|object} config.template html string template or function to 
	   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
	   * @param {string|object} config.templateUrl url to load or a function returning 
	   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
	   * @param {Function} config.templateProvider function to invoke via 
	   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
	   * @param {object} params  Parameters to pass to the template function.
	   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
	   * via a `templateProvider`. Defaults to `{ params: params }`.
	   *
	   * @return {string|object}  The template html as a string, or a promise for 
	   * that string,or `null` if no template is configured.
	   */
	  this.fromConfig = function (config, params, locals) {
	    return (
	      isDefined(config.template) ? this.fromString(config.template, params) :
	      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
	      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
	      null
	    );
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromString
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a string or a function returning a string.
	   *
	   * @param {string|object} template html template as a string or function that 
	   * returns an html template as a string.
	   * @param {object} params Parameters to pass to the template function.
	   *
	   * @return {string|object} The template html as a string, or a promise for that 
	   * string.
	   */
	  this.fromString = function (template, params) {
	    return isFunction(template) ? template(params) : template;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromUrl
	   * @methodOf ui.router.util.$templateFactory
	   * 
	   * @description
	   * Loads a template from the a URL via `$http` and `$templateCache`.
	   *
	   * @param {string|Function} url url of the template to load, or a function 
	   * that returns a url.
	   * @param {Object} params Parameters to pass to the url function.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromUrl = function (url, params) {
	    if (isFunction(url)) url = url(params);
	    if (url == null) return null;
	    else return $http
	        .get(url, { cache: $templateCache, headers: { Accept: 'text/html' }})
	        .then(function(response) { return response.data; });
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromProvider
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template by invoking an injectable provider function.
	   *
	   * @param {Function} provider Function to invoke via `$injector.invoke`
	   * @param {Object} params Parameters for the template.
	   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
	   * `{ params: params }`.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromProvider = function (provider, params, locals) {
	    return $injector.invoke(provider, null, locals || { params: params });
	  };
	}

	angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

	var $$UMFP; // reference to $UrlMatcherFactoryProvider

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Matches URLs against patterns and extracts named parameters from the path or the search
	 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
	 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
	 * do not influence whether or not a URL is matched, but their values are passed through into
	 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
	 *
	 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
	 * syntax, which optionally allows a regular expression for the parameter to be specified:
	 *
	 * * `':'` name - colon placeholder
	 * * `'*'` name - catch-all placeholder
	 * * `'{' name '}'` - curly placeholder
	 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
	 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
	 *
	 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
	 * must be unique within the pattern (across both path and search parameters). For colon
	 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
	 * number of characters other than '/'. For catch-all placeholders the path parameter matches
	 * any number of characters.
	 *
	 * Examples:
	 *
	 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
	 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
	 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
	 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
	 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
	 * * `'/user/{id:[^/]*}'` - Same as the previous example.
	 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
	 *   parameter consists of 1 to 8 hex digits.
	 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	 *   path into the parameter 'path'.
	 * * `'/files/*path'` - ditto.
	 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
	 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
	 *
	 * @param {string} pattern  The pattern to compile into a matcher.
	 * @param {Object} config  A configuration object hash:
	 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
	 *   an existing UrlMatcher
	 *
	 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
	 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
	 *
	 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
	 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
	 *   non-null) will start with this prefix.
	 *
	 * @property {string} source  The pattern that was passed into the constructor
	 *
	 * @property {string} sourcePath  The path portion of the source property
	 *
	 * @property {string} sourceSearch  The search portion of the source property
	 *
	 * @property {string} regex  The constructed regex that will be used to match against the url when
	 *   it is time to determine which url will match.
	 *
	 * @returns {Object}  New `UrlMatcher` object
	 */
	function UrlMatcher(pattern, config, parentMatcher) {
	  config = extend({ params: {} }, isObject(config) ? config : {});

	  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
	  //   '*' name
	  //   ':' name
	  //   '{' name '}'
	  //   '{' name ':' regexp '}'
	  // The regular expression is somewhat complicated due to the need to allow curly braces
	  // inside the regular expression. The placeholder regexp breaks down as follows:
	  //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
	  //    \{([\w\[\]]+)(?:\:( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
	  //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
	  //    [^{}\\]+                       - anything other than curly braces or backslash
	  //    \\.                            - a backslash escape
	  //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
	  var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      searchPlaceholder = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      compiled = '^', last = 0, m,
	      segments = this.segments = [],
	      parentParams = parentMatcher ? parentMatcher.params : {},
	      params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
	      paramNames = [];

	  function addParameter(id, type, config, location) {
	    paramNames.push(id);
	    if (parentParams[id]) return parentParams[id];
	    if (!/^\w+(-+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
	    if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
	    params[id] = new $$UMFP.Param(id, type, config, location);
	    return params[id];
	  }

	  function quoteRegExp(string, pattern, squash, optional) {
	    var surroundPattern = ['',''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
	    if (!pattern) return result;
	    switch(squash) {
	      case false: surroundPattern = ['(', ')' + (optional ? "?" : "")]; break;
	      case true:  surroundPattern = ['?(', ')?']; break;
	      default:    surroundPattern = ['(' + squash + "|", ')?']; break;
	    }
	    return result + surroundPattern[0] + pattern + surroundPattern[1];
	  }

	  this.source = pattern;

	  // Split into static segments separated by path parameter placeholders.
	  // The number of segments is always 1 more than the number of parameters.
	  function matchDetails(m, isSearch) {
	    var id, regexp, segment, type, cfg, arrayMode;
	    id          = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
	    cfg         = config.params[id];
	    segment     = pattern.substring(last, m.index);
	    regexp      = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);
	    type        = $$UMFP.type(regexp || "string") || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp, config.caseInsensitive ? 'i' : undefined) });
	    return {
	      id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
	    };
	  }

	  var p, param, segment;
	  while ((m = placeholder.exec(pattern))) {
	    p = matchDetails(m, false);
	    if (p.segment.indexOf('?') >= 0) break; // we're into the search part

	    param = addParameter(p.id, p.type, p.cfg, "path");
	    compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
	    segments.push(p.segment);
	    last = placeholder.lastIndex;
	  }
	  segment = pattern.substring(last);

	  // Find any search parameter names and remove them from the last segment
	  var i = segment.indexOf('?');

	  if (i >= 0) {
	    var search = this.sourceSearch = segment.substring(i);
	    segment = segment.substring(0, i);
	    this.sourcePath = pattern.substring(0, last + i);

	    if (search.length > 0) {
	      last = 0;
	      while ((m = searchPlaceholder.exec(search))) {
	        p = matchDetails(m, true);
	        param = addParameter(p.id, p.type, p.cfg, "search");
	        last = placeholder.lastIndex;
	        // check if ?&
	      }
	    }
	  } else {
	    this.sourcePath = pattern;
	    this.sourceSearch = '';
	  }

	  compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
	  segments.push(segment);

	  this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
	  this.prefix = segments[0];
	  this.$$paramNames = paramNames;
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#concat
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns a new matcher for a pattern constructed by appending the path part and adding the
	 * search parameters of the specified pattern to this pattern. The current pattern is not
	 * modified. This can be understood as creating a pattern for URLs that are relative to (or
	 * suffixes of) the current pattern.
	 *
	 * @example
	 * The following two matchers are equivalent:
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').concat('/details?date');
	 * new UrlMatcher('/user/{id}/details?q&date');
	 * </pre>
	 *
	 * @param {string} pattern  The pattern to append.
	 * @param {Object} config  An object hash of the configuration for the matcher.
	 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
	 */
	UrlMatcher.prototype.concat = function (pattern, config) {
	  // Because order of search parameters is irrelevant, we can add our own search
	  // parameters to the end of the new pattern. Parse the new pattern by itself
	  // and then join the bits together, but it's much easier to do this on a string level.
	  var defaultConfig = {
	    caseInsensitive: $$UMFP.caseInsensitive(),
	    strict: $$UMFP.strictMode(),
	    squash: $$UMFP.defaultSquashPolicy()
	  };
	  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
	};

	UrlMatcher.prototype.toString = function () {
	  return this.source;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#exec
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Tests the specified path against this matcher, and returns an object containing the captured
	 * parameter values, or null if the path does not match. The returned object contains the values
	 * of any search parameters that are mentioned in the pattern, but their value may be null if
	 * they are not present in `searchParams`. This means that search parameters are always treated
	 * as optional.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
	 *   x: '1', q: 'hello'
	 * });
	 * // returns { id: 'bob', q: 'hello', r: null }
	 * </pre>
	 *
	 * @param {string} path  The URL path to match, e.g. `$location.path()`.
	 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
	 * @returns {Object}  The captured parameter values.
	 */
	UrlMatcher.prototype.exec = function (path, searchParams) {
	  var m = this.regexp.exec(path);
	  if (!m) return null;
	  searchParams = searchParams || {};

	  var paramNames = this.parameters(), nTotal = paramNames.length,
	    nPath = this.segments.length - 1,
	    values = {}, i, j, cfg, paramName;

	  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

	  function decodePathArray(string) {
	    function reverseString(str) { return str.split("").reverse().join(""); }
	    function unquoteDashes(str) { return str.replace(/\\-/g, "-"); }

	    var split = reverseString(string).split(/-(?!\\)/);
	    var allReversed = map(split, reverseString);
	    return map(allReversed, unquoteDashes).reverse();
	  }

	  for (i = 0; i < nPath; i++) {
	    paramName = paramNames[i];
	    var param = this.params[paramName];
	    var paramVal = m[i+1];
	    // if the param value matches a pre-replace pair, replace the value before decoding.
	    for (j = 0; j < param.replace; j++) {
	      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
	    }
	    if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
	    values[paramName] = param.value(paramVal);
	  }
	  for (/**/; i < nTotal; i++) {
	    paramName = paramNames[i];
	    values[paramName] = this.params[paramName].value(searchParams[paramName]);
	  }

	  return values;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#parameters
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns the names of all path and search parameters of this pattern in an unspecified order.
	 *
	 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
	 *    pattern has no parameters, an empty array is returned.
	 */
	UrlMatcher.prototype.parameters = function (param) {
	  if (!isDefined(param)) return this.$$paramNames;
	  return this.params[param] || null;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#validate
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Checks an object hash of parameters to validate their correctness according to the parameter
	 * types of this `UrlMatcher`.
	 *
	 * @param {Object} params The object hash of parameters to validate.
	 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
	 */
	UrlMatcher.prototype.validates = function (params) {
	  return this.params.$$validates(params);
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#format
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Creates a URL that matches this pattern by substituting the specified values
	 * for the path and search parameters. Null values for path parameters are
	 * treated as empty strings.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
	 * // returns '/user/bob?q=yes'
	 * </pre>
	 *
	 * @param {Object} values  the values to substitute for the parameters in this pattern.
	 * @returns {string}  the formatted URL (path and optionally search part).
	 */
	UrlMatcher.prototype.format = function (values) {
	  values = values || {};
	  var segments = this.segments, params = this.parameters(), paramset = this.params;
	  if (!this.validates(values)) return null;

	  var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

	  function encodeDashes(str) { // Replace dashes with encoded "\-"
	    return encodeURIComponent(str).replace(/-/g, function(c) { return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase(); });
	  }

	  for (i = 0; i < nTotal; i++) {
	    var isPathParam = i < nPath;
	    var name = params[i], param = paramset[name], value = param.value(values[name]);
	    var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
	    var squash = isDefaultValue ? param.squash : false;
	    var encoded = param.type.encode(value);

	    if (isPathParam) {
	      var nextSegment = segments[i + 1];
	      if (squash === false) {
	        if (encoded != null) {
	          if (isArray(encoded)) {
	            result += map(encoded, encodeDashes).join("-");
	          } else {
	            result += encodeURIComponent(encoded);
	          }
	        }
	        result += nextSegment;
	      } else if (squash === true) {
	        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
	        result += nextSegment.match(capture)[1];
	      } else if (isString(squash)) {
	        result += squash + nextSegment;
	      }
	    } else {
	      if (encoded == null || (isDefaultValue && squash !== false)) continue;
	      if (!isArray(encoded)) encoded = [ encoded ];
	      encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
	      result += (search ? '&' : '?') + (name + '=' + encoded);
	      search = true;
	    }
	  }

	  return result;
	};

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:Type
	 *
	 * @description
	 * Implements an interface to define custom parameter types that can be decoded from and encoded to
	 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
	 * objects when matching or formatting URLs, or comparing or validating parameter values.
	 *
	 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
	 * information on registering custom types.
	 *
	 * @param {Object} config  A configuration object which contains the custom type definition.  The object's
	 *        properties will override the default methods and/or pattern in `Type`'s public interface.
	 * @example
	 * <pre>
	 * {
	 *   decode: function(val) { return parseInt(val, 10); },
	 *   encode: function(val) { return val && val.toString(); },
	 *   equals: function(a, b) { return this.is(a) && a === b; },
	 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
	 *   pattern: /\d+/
	 * }
	 * </pre>
	 *
	 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
	 *           coming from a substring of a URL.
	 *
	 * @returns {Object}  Returns a new `Type` object.
	 */
	function Type(config) {
	  extend(this, config);
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#is
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Detects whether a value is of a particular type. Accepts a native (decoded) value
	 * and determines whether it matches the current `Type` object.
	 *
	 * @param {*} val  The value to check.
	 * @param {string} key  Optional. If the type check is happening in the context of a specific
	 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
	 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
	 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
	 */
	Type.prototype.is = function(val, key) {
	  return true;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#encode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
	 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
	 * only needs to be a representation of `val` that has been coerced to a string.
	 *
	 * @param {*} val  The value to encode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
	 */
	Type.prototype.encode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#decode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Converts a parameter value (from URL string or transition param) to a custom/native value.
	 *
	 * @param {string} val  The URL parameter value to decode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {*}  Returns a custom representation of the URL parameter value.
	 */
	Type.prototype.decode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#equals
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Determines whether two decoded values are equivalent.
	 *
	 * @param {*} a  A value to compare against.
	 * @param {*} b  A value to compare against.
	 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
	 */
	Type.prototype.equals = function(a, b) {
	  return a == b;
	};

	Type.prototype.$subPattern = function() {
	  var sub = this.pattern.toString();
	  return sub.substr(1, sub.length - 2);
	};

	Type.prototype.pattern = /.*/;

	Type.prototype.toString = function() { return "{Type:" + this.name + "}"; };

	/** Given an encoded string, or a decoded object, returns a decoded object */
	Type.prototype.$normalize = function(val) {
	  return this.is(val) ? val : this.decode(val);
	};

	/*
	 * Wraps an existing custom Type as an array of Type, depending on 'mode'.
	 * e.g.:
	 * - urlmatcher pattern "/path?{queryParam[]:int}"
	 * - url: "/path?queryParam=1&queryParam=2
	 * - $stateParams.queryParam will be [1, 2]
	 * if `mode` is "auto", then
	 * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
	 * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
	 */
	Type.prototype.$asArray = function(mode, isSearch) {
	  if (!mode) return this;
	  if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");

	  function ArrayType(type, mode) {
	    function bindTo(type, callbackName) {
	      return function() {
	        return type[callbackName].apply(type, arguments);
	      };
	    }

	    // Wrap non-array value as array
	    function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
	    // Unwrap array value for "auto" mode. Return undefined for empty array.
	    function arrayUnwrap(val) {
	      switch(val.length) {
	        case 0: return undefined;
	        case 1: return mode === "auto" ? val[0] : val;
	        default: return val;
	      }
	    }
	    function falsey(val) { return !val; }

	    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
	    function arrayHandler(callback, allTruthyMode) {
	      return function handleArray(val) {
	        val = arrayWrap(val);
	        var result = map(val, callback);
	        if (allTruthyMode === true)
	          return filter(result, falsey).length === 0;
	        return arrayUnwrap(result);
	      };
	    }

	    // Wraps type (.equals) functions to operate on each value of an array
	    function arrayEqualsHandler(callback) {
	      return function handleArray(val1, val2) {
	        var left = arrayWrap(val1), right = arrayWrap(val2);
	        if (left.length !== right.length) return false;
	        for (var i = 0; i < left.length; i++) {
	          if (!callback(left[i], right[i])) return false;
	        }
	        return true;
	      };
	    }

	    this.encode = arrayHandler(bindTo(type, 'encode'));
	    this.decode = arrayHandler(bindTo(type, 'decode'));
	    this.is     = arrayHandler(bindTo(type, 'is'), true);
	    this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
	    this.pattern = type.pattern;
	    this.$normalize = arrayHandler(bindTo(type, '$normalize'));
	    this.name = type.name;
	    this.$arrayMode = mode;
	  }

	  return new ArrayType(this, mode);
	};



	/**
	 * @ngdoc object
	 * @name ui.router.util.$urlMatcherFactory
	 *
	 * @description
	 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
	 * is also available to providers under the name `$urlMatcherFactoryProvider`.
	 */
	function $UrlMatcherFactory() {
	  $$UMFP = this;

	  var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

	  function valToString(val) { return val != null ? val.toString().replace(/\//g, "%2F") : val; }
	  function valFromString(val) { return val != null ? val.toString().replace(/%2F/g, "/") : val; }

	  var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
	    string: {
	      encode: valToString,
	      decode: valFromString,
	      // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
	      // In 0.2.x, string params are optional by default for backwards compat
	      is: function(val) { return val == null || !isDefined(val) || typeof val === "string"; },
	      pattern: /[^/]*/
	    },
	    int: {
	      encode: valToString,
	      decode: function(val) { return parseInt(val, 10); },
	      is: function(val) { return isDefined(val) && this.decode(val.toString()) === val; },
	      pattern: /\d+/
	    },
	    bool: {
	      encode: function(val) { return val ? 1 : 0; },
	      decode: function(val) { return parseInt(val, 10) !== 0; },
	      is: function(val) { return val === true || val === false; },
	      pattern: /0|1/
	    },
	    date: {
	      encode: function (val) {
	        if (!this.is(val))
	          return undefined;
	        return [ val.getFullYear(),
	          ('0' + (val.getMonth() + 1)).slice(-2),
	          ('0' + val.getDate()).slice(-2)
	        ].join("-");
	      },
	      decode: function (val) {
	        if (this.is(val)) return val;
	        var match = this.capture.exec(val);
	        return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
	      },
	      is: function(val) { return val instanceof Date && !isNaN(val.valueOf()); },
	      equals: function (a, b) { return this.is(a) && this.is(b) && a.toISOString() === b.toISOString(); },
	      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
	      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
	    },
	    json: {
	      encode: angular.toJson,
	      decode: angular.fromJson,
	      is: angular.isObject,
	      equals: angular.equals,
	      pattern: /[^/]*/
	    },
	    any: { // does not encode/decode
	      encode: angular.identity,
	      decode: angular.identity,
	      equals: angular.equals,
	      pattern: /.*/
	    }
	  };

	  function getDefaultConfig() {
	    return {
	      strict: isStrictMode,
	      caseInsensitive: isCaseInsensitive
	    };
	  }

	  function isInjectable(value) {
	    return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
	  }

	  /**
	   * [Internal] Get the default value of a parameter, which may be an injectable function.
	   */
	  $UrlMatcherFactory.$$getDefaultValue = function(config) {
	    if (!isInjectable(config.value)) return config.value;
	    if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	    return injector.invoke(config.value);
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URL matching should be case sensitive (the default behavior), or not.
	   *
	   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
	   * @returns {boolean} the current value of caseInsensitive
	   */
	  this.caseInsensitive = function(value) {
	    if (isDefined(value))
	      isCaseInsensitive = value;
	    return isCaseInsensitive;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#strictMode
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URLs should match trailing slashes, or not (the default behavior).
	   *
	   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
	   * @returns {boolean} the current value of strictMode
	   */
	  this.strictMode = function(value) {
	    if (isDefined(value))
	      isStrictMode = value;
	    return isStrictMode;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Sets the default behavior when generating or matching URLs with default parameter values.
	   *
	   * @param {string} value A string that defines the default parameter URL squashing behavior.
	   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
	   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
	   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
	   *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
	   *             the parameter value from the URL and replace it with this string.
	   */
	  this.defaultSquashPolicy = function(value) {
	    if (!isDefined(value)) return defaultSquashPolicy;
	    if (value !== true && value !== false && !isString(value))
	      throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
	    defaultSquashPolicy = value;
	    return value;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#compile
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
	   *
	   * @param {string} pattern  The URL pattern.
	   * @param {Object} config  The config object hash.
	   * @returns {UrlMatcher}  The UrlMatcher.
	   */
	  this.compile = function (pattern, config) {
	    return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#isMatcher
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
	   *
	   * @param {Object} object  The object to perform the type check against.
	   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
	   *          implementing all the same methods.
	   */
	  this.isMatcher = function (o) {
	    if (!isObject(o)) return false;
	    var result = true;

	    forEach(UrlMatcher.prototype, function(val, name) {
	      if (isFunction(val)) {
	        result = result && (isDefined(o[name]) && isFunction(o[name]));
	      }
	    });
	    return result;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#type
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
	   * generate URLs with typed parameters.
	   *
	   * @param {string} name  The type name.
	   * @param {Object|Function} definition   The type definition. See
	   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
	   *        runtime starts.  The result of this function is merged into the existing `definition`.
	   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   *
	   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
	   *
	   * @example
	   * This is a simple example of a custom type that encodes and decodes items from an
	   * array, using the array index as the URL-encoded value:
	   *
	   * <pre>
	   * var list = ['John', 'Paul', 'George', 'Ringo'];
	   *
	   * $urlMatcherFactoryProvider.type('listItem', {
	   *   encode: function(item) {
	   *     // Represent the list item in the URL using its corresponding index
	   *     return list.indexOf(item);
	   *   },
	   *   decode: function(item) {
	   *     // Look up the list item by index
	   *     return list[parseInt(item, 10)];
	   *   },
	   *   is: function(item) {
	   *     // Ensure the item is valid by checking to see that it appears
	   *     // in the list
	   *     return list.indexOf(item) > -1;
	   *   }
	   * });
	   *
	   * $stateProvider.state('list', {
	   *   url: "/list/{item:listItem}",
	   *   controller: function($scope, $stateParams) {
	   *     console.log($stateParams.item);
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * // Changes URL to '/list/3', logs "Ringo" to the console
	   * $state.go('list', { item: "Ringo" });
	   * </pre>
	   *
	   * This is a more complex example of a type that relies on dependency injection to
	   * interact with services, and uses the parameter name from the URL to infer how to
	   * handle encoding and decoding parameter values:
	   *
	   * <pre>
	   * // Defines a custom type that gets a value from a service,
	   * // where each service gets different types of values from
	   * // a backend API:
	   * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
	   *
	   *   // Matches up services to URL parameter names
	   *   var services = {
	   *     user: Users,
	   *     post: Posts
	   *   };
	   *
	   *   return {
	   *     encode: function(object) {
	   *       // Represent the object in the URL using its unique ID
	   *       return object.id;
	   *     },
	   *     decode: function(value, key) {
	   *       // Look up the object by ID, using the parameter
	   *       // name (key) to call the correct service
	   *       return services[key].findById(value);
	   *     },
	   *     is: function(object, key) {
	   *       // Check that object is a valid dbObject
	   *       return angular.isObject(object) && object.id && services[key];
	   *     }
	   *     equals: function(a, b) {
	   *       // Check the equality of decoded objects by comparing
	   *       // their unique IDs
	   *       return a.id === b.id;
	   *     }
	   *   };
	   * });
	   *
	   * // In a config() block, you can then attach URLs with
	   * // type-annotated parameters:
	   * $stateProvider.state('users', {
	   *   url: "/users",
	   *   // ...
	   * }).state('users.item', {
	   *   url: "/{user:dbObject}",
	   *   controller: function($scope, $stateParams) {
	   *     // $stateParams.user will now be an object returned from
	   *     // the Users service
	   *   },
	   *   // ...
	   * });
	   * </pre>
	   */
	  this.type = function (name, definition, definitionFn) {
	    if (!isDefined(definition)) return $types[name];
	    if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

	    $types[name] = new Type(extend({ name: name }, definition));
	    if (definitionFn) {
	      typeQueue.push({ name: name, def: definitionFn });
	      if (!enqueue) flushTypeQueue();
	    }
	    return this;
	  };

	  // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
	  function flushTypeQueue() {
	    while(typeQueue.length) {
	      var type = typeQueue.shift();
	      if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
	      angular.extend($types[type.name], injector.invoke(type.def));
	    }
	  }

	  // Register default types. Store them in the prototype of $types.
	  forEach(defaultTypes, function(type, name) { $types[name] = new Type(extend({name: name}, type)); });
	  $types = inherit($types, {});

	  /* No need to document $get, since it returns this */
	  this.$get = ['$injector', function ($injector) {
	    injector = $injector;
	    enqueue = false;
	    flushTypeQueue();

	    forEach(defaultTypes, function(type, name) {
	      if (!$types[name]) $types[name] = new Type(type);
	    });
	    return this;
	  }];

	  this.Param = function Param(id, type, config, location) {
	    var self = this;
	    config = unwrapShorthand(config);
	    type = getType(config, type, location);
	    var arrayMode = getArrayMode();
	    type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
	    if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
	      config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
	    var isOptional = config.value !== undefined;
	    var squash = getSquashPolicy(config, isOptional);
	    var replace = getReplace(config, arrayMode, isOptional, squash);

	    function unwrapShorthand(config) {
	      var keys = isObject(config) ? objectKeys(config) : [];
	      var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 &&
	                        indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
	      if (isShorthand) config = { value: config };
	      config.$$fn = isInjectable(config.value) ? config.value : function () { return config.value; };
	      return config;
	    }

	    function getType(config, urlType, location) {
	      if (config.type && urlType) throw new Error("Param '"+id+"' has two type configurations.");
	      if (urlType) return urlType;
	      if (!config.type) return (location === "config" ? $types.any : $types.string);
	      return config.type instanceof Type ? config.type : new Type(config.type);
	    }

	    // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
	    function getArrayMode() {
	      var arrayDefaults = { array: (location === "search" ? "auto" : false) };
	      var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
	      return extend(arrayDefaults, arrayParamNomenclature, config).array;
	    }

	    /**
	     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
	     */
	    function getSquashPolicy(config, isOptional) {
	      var squash = config.squash;
	      if (!isOptional || squash === false) return false;
	      if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
	      if (squash === true || isString(squash)) return squash;
	      throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
	    }

	    function getReplace(config, arrayMode, isOptional, squash) {
	      var replace, configuredKeys, defaultPolicy = [
	        { from: "",   to: (isOptional || arrayMode ? undefined : "") },
	        { from: null, to: (isOptional || arrayMode ? undefined : "") }
	      ];
	      replace = isArray(config.replace) ? config.replace : [];
	      if (isString(squash))
	        replace.push({ from: squash, to: undefined });
	      configuredKeys = map(replace, function(item) { return item.from; } );
	      return filter(defaultPolicy, function(item) { return indexOf(configuredKeys, item.from) === -1; }).concat(replace);
	    }

	    /**
	     * [Internal] Get the default value of a parameter, which may be an injectable function.
	     */
	    function $$getDefaultValue() {
	      if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	      var defaultValue = injector.invoke(config.$$fn);
	      if (defaultValue !== null && defaultValue !== undefined && !self.type.is(defaultValue))
	        throw new Error("Default value (" + defaultValue + ") for parameter '" + self.id + "' is not an instance of Type (" + self.type.name + ")");
	      return defaultValue;
	    }

	    /**
	     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
	     * default value, which may be the result of an injectable function.
	     */
	    function $value(value) {
	      function hasReplaceVal(val) { return function(obj) { return obj.from === val; }; }
	      function $replace(value) {
	        var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) { return obj.to; });
	        return replacement.length ? replacement[0] : value;
	      }
	      value = $replace(value);
	      return !isDefined(value) ? $$getDefaultValue() : self.type.$normalize(value);
	    }

	    function toString() { return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}"; }

	    extend(this, {
	      id: id,
	      type: type,
	      location: location,
	      array: arrayMode,
	      squash: squash,
	      replace: replace,
	      isOptional: isOptional,
	      value: $value,
	      dynamic: undefined,
	      config: config,
	      toString: toString
	    });
	  };

	  function ParamSet(params) {
	    extend(this, params || {});
	  }

	  ParamSet.prototype = {
	    $$new: function() {
	      return inherit(this, extend(new ParamSet(), { $$parent: this}));
	    },
	    $$keys: function () {
	      var keys = [], chain = [], parent = this,
	        ignore = objectKeys(ParamSet.prototype);
	      while (parent) { chain.push(parent); parent = parent.$$parent; }
	      chain.reverse();
	      forEach(chain, function(paramset) {
	        forEach(objectKeys(paramset), function(key) {
	            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1) keys.push(key);
	        });
	      });
	      return keys;
	    },
	    $$values: function(paramValues) {
	      var values = {}, self = this;
	      forEach(self.$$keys(), function(key) {
	        values[key] = self[key].value(paramValues && paramValues[key]);
	      });
	      return values;
	    },
	    $$equals: function(paramValues1, paramValues2) {
	      var equal = true, self = this;
	      forEach(self.$$keys(), function(key) {
	        var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
	        if (!self[key].type.equals(left, right)) equal = false;
	      });
	      return equal;
	    },
	    $$validates: function $$validate(paramValues) {
	      var keys = this.$$keys(), i, param, rawVal, normalized, encoded;
	      for (i = 0; i < keys.length; i++) {
	        param = this[keys[i]];
	        rawVal = paramValues[keys[i]];
	        if ((rawVal === undefined || rawVal === null) && param.isOptional)
	          break; // There was no parameter value, but the param is optional
	        normalized = param.type.$normalize(rawVal);
	        if (!param.type.is(normalized))
	          return false; // The value was not of the correct Type, and could not be decoded to the correct Type
	        encoded = param.type.encode(normalized);
	        if (angular.isString(encoded) && !param.type.pattern.exec(encoded))
	          return false; // The value was of the correct type, but when encoded, did not match the Type's regexp
	      }
	      return true;
	    },
	    $$parent: undefined
	  };

	  this.ParamSet = ParamSet;
	}

	// Register as a provider so it's available to other providers
	angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
	angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) { }]);

	/**
	 * @ngdoc object
	 * @name ui.router.router.$urlRouterProvider
	 *
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 * @requires $locationProvider
	 *
	 * @description
	 * `$urlRouterProvider` has the responsibility of watching `$location`. 
	 * When `$location` changes it runs through a list of rules one by one until a 
	 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
	 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
	 *
	 * There are several methods on `$urlRouterProvider` that make it useful to use directly
	 * in your module config.
	 */
	$UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
	function $UrlRouterProvider(   $locationProvider,   $urlMatcherFactory) {
	  var rules = [], otherwise = null, interceptDeferred = false, listener;

	  // Returns a string that is a prefix of all strings matching the RegExp
	  function regExpPrefix(re) {
	    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
	    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
	  }

	  // Interpolates matched values into a String.replace()-style pattern
	  function interpolate(pattern, match) {
	    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
	      return match[what === '$' ? 0 : Number(what)];
	    });
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#rule
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines rules that are used by `$urlRouterProvider` to find matches for
	   * specific URLs.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // Here's an example of how you might allow case insensitive urls
	   *   $urlRouterProvider.rule(function ($injector, $location) {
	   *     var path = $location.path(),
	   *         normalized = path.toLowerCase();
	   *
	   *     if (path !== normalized) {
	   *       return normalized;
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {object} rule Handler function that takes `$injector` and `$location`
	   * services as arguments. You can use them to return a valid path as a string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.rule = function (rule) {
	    if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    rules.push(rule);
	    return this;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouterProvider#otherwise
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines a path that is used when an invalid route is requested.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // if the path doesn't match any of the urls you configured
	   *   // otherwise will take care of routing the user to the
	   *   // specified url
	   *   $urlRouterProvider.otherwise('/index');
	   *
	   *   // Example of using function rule as param
	   *   $urlRouterProvider.otherwise(function ($injector, $location) {
	   *     return '/a/valid/url';
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} rule The url path you want to redirect to or a function 
	   * rule that returns the url path. The function version is passed two params: 
	   * `$injector` and `$location` services, and must return a url string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.otherwise = function (rule) {
	    if (isString(rule)) {
	      var redirect = rule;
	      rule = function () { return redirect; };
	    }
	    else if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    otherwise = rule;
	    return this;
	  };


	  function handleIfMatch($injector, handler, match) {
	    if (!match) return false;
	    var result = $injector.invoke(handler, handler, { $match: match });
	    return isDefined(result) ? result : true;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#when
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Registers a handler for a given url matching. if handle is a string, it is
	   * treated as a redirect, and is interpolated according to the syntax of match
	   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
	   *
	   * If the handler is a function, it is injectable. It gets invoked if `$location`
	   * matches. You have the option of inject the match object as `$match`.
	   *
	   * The handler can return
	   *
	   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
	   *   will continue trying to find another one that matches.
	   * - **string** which is treated as a redirect and passed to `$location.url()`
	   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
	   *     if ($state.$current.navigable !== state ||
	   *         !equalForKeys($match, $stateParams) {
	   *      $state.transitionTo(state, $match, false);
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} what The incoming path that you want to redirect.
	   * @param {string|object} handler The path you want to redirect your user to.
	   */
	  this.when = function (what, handler) {
	    var redirect, handlerIsString = isString(handler);
	    if (isString(what)) what = $urlMatcherFactory.compile(what);

	    if (!handlerIsString && !isFunction(handler) && !isArray(handler))
	      throw new Error("invalid 'handler' in when()");

	    var strategies = {
	      matcher: function (what, handler) {
	        if (handlerIsString) {
	          redirect = $urlMatcherFactory.compile(handler);
	          handler = ['$match', function ($match) { return redirect.format($match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
	        }, {
	          prefix: isString(what.prefix) ? what.prefix : ''
	        });
	      },
	      regex: function (what, handler) {
	        if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

	        if (handlerIsString) {
	          redirect = handler;
	          handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path()));
	        }, {
	          prefix: regExpPrefix(what)
	        });
	      }
	    };

	    var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

	    for (var n in check) {
	      if (check[n]) return this.rule(strategies[n](what, handler));
	    }

	    throw new Error("invalid 'what' in when()");
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#deferIntercept
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Disables (or enables) deferring location change interception.
	   *
	   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
	   * defer a transition but maintain the current URL), call this method at configuration time.
	   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
	   * `$locationChangeSuccess` event handler.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *
	   *   // Prevent $urlRouter from automatically intercepting URL changes;
	   *   // this allows you to configure custom behavior in between
	   *   // location changes and route synchronization:
	   *   $urlRouterProvider.deferIntercept();
	   *
	   * }).run(function ($rootScope, $urlRouter, UserService) {
	   *
	   *   $rootScope.$on('$locationChangeSuccess', function(e) {
	   *     // UserService is an example service for managing user state
	   *     if (UserService.isLoggedIn()) return;
	   *
	   *     // Prevent $urlRouter's default handler from firing
	   *     e.preventDefault();
	   *
	   *     UserService.handleLogin().then(function() {
	   *       // Once the user has logged in, sync the current URL
	   *       // to the router:
	   *       $urlRouter.sync();
	   *     });
	   *   });
	   *
	   *   // Configures $urlRouter's listener *after* your custom listener
	   *   $urlRouter.listen();
	   * });
	   * </pre>
	   *
	   * @param {boolean} defer Indicates whether to defer location change interception. Passing
	            no parameter is equivalent to `true`.
	   */
	  this.deferIntercept = function (defer) {
	    if (defer === undefined) defer = true;
	    interceptDeferred = defer;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouter
	   *
	   * @requires $location
	   * @requires $rootScope
	   * @requires $injector
	   * @requires $browser
	   *
	   * @description
	   *
	   */
	  this.$get = $get;
	  $get.$inject = ['$location', '$rootScope', '$injector', '$browser'];
	  function $get(   $location,   $rootScope,   $injector,   $browser) {

	    var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;

	    function appendBasePath(url, isHtml5, absolute) {
	      if (baseHref === '/') return url;
	      if (isHtml5) return baseHref.slice(0, -1) + url;
	      if (absolute) return baseHref.slice(1) + url;
	      return url;
	    }

	    // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
	    function update(evt) {
	      if (evt && evt.defaultPrevented) return;
	      var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
	      lastPushedUrl = undefined;
	      // TODO: Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
	      //if (ignoreUpdate) return true;

	      function check(rule) {
	        var handled = rule($injector, $location);

	        if (!handled) return false;
	        if (isString(handled)) $location.replace().url(handled);
	        return true;
	      }
	      var n = rules.length, i;

	      for (i = 0; i < n; i++) {
	        if (check(rules[i])) return;
	      }
	      // always check otherwise last to allow dynamic updates to the set of rules
	      if (otherwise) check(otherwise);
	    }

	    function listen() {
	      listener = listener || $rootScope.$on('$locationChangeSuccess', update);
	      return listener;
	    }

	    if (!interceptDeferred) listen();

	    return {
	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#sync
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
	       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
	       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
	       * with the transition by calling `$urlRouter.sync()`.
	       *
	       * @example
	       * <pre>
	       * angular.module('app', ['ui.router'])
	       *   .run(function($rootScope, $urlRouter) {
	       *     $rootScope.$on('$locationChangeSuccess', function(evt) {
	       *       // Halt state change from even starting
	       *       evt.preventDefault();
	       *       // Perform custom logic
	       *       var meetsRequirement = ...
	       *       // Continue with the update and state transition if logic allows
	       *       if (meetsRequirement) $urlRouter.sync();
	       *     });
	       * });
	       * </pre>
	       */
	      sync: function() {
	        update();
	      },

	      listen: function() {
	        return listen();
	      },

	      update: function(read) {
	        if (read) {
	          location = $location.url();
	          return;
	        }
	        if ($location.url() === location) return;

	        $location.url(location);
	        $location.replace();
	      },

	      push: function(urlMatcher, params, options) {
	         var url = urlMatcher.format(params || {});

	        // Handle the special hash param, if needed
	        if (url !== null && params && params['#']) {
	            url += '#' + params['#'];
	        }

	        $location.url(url);
	        lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
	        if (options && options.replace) $location.replace();
	      },

	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#href
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * A URL generation method that returns the compiled URL for a given
	       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
	       *
	       * @example
	       * <pre>
	       * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
	       *   person: "bob"
	       * });
	       * // $bob == "/about/bob";
	       * </pre>
	       *
	       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
	       * @param {object=} params An object of parameter values to fill the matcher's required parameters.
	       * @param {object=} options Options object. The options are:
	       *
	       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	       *
	       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
	       */
	      href: function(urlMatcher, params, options) {
	        if (!urlMatcher.validates(params)) return null;

	        var isHtml5 = $locationProvider.html5Mode();
	        if (angular.isObject(isHtml5)) {
	          isHtml5 = isHtml5.enabled;
	        }
	        
	        var url = urlMatcher.format(params);
	        options = options || {};

	        if (!isHtml5 && url !== null) {
	          url = "#" + $locationProvider.hashPrefix() + url;
	        }

	        // Handle special hash param, if needed
	        if (url !== null && params && params['#']) {
	          url += '#' + params['#'];
	        }

	        url = appendBasePath(url, isHtml5, options.absolute);

	        if (!options.absolute || !url) {
	          return url;
	        }

	        var slash = (!isHtml5 && url ? '/' : ''), port = $location.port();
	        port = (port === 80 || port === 443 ? '' : ':' + port);

	        return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
	      }
	    };
	  }
	}

	angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$stateProvider
	 *
	 * @requires ui.router.router.$urlRouterProvider
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 *
	 * @description
	 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
	 * on state.
	 *
	 * A state corresponds to a "place" in the application in terms of the overall UI and
	 * navigation. A state describes (via the controller / template / view properties) what
	 * the UI looks like and does at that place.
	 *
	 * States often have things in common, and the primary way of factoring out these
	 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
	 * nested states.
	 *
	 * The `$stateProvider` provides interfaces to declare these states for your app.
	 */
	$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
	function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory) {

	  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

	  // Builds state properties from definition passed to registerState()
	  var stateBuilder = {

	    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
	    // state.children = [];
	    // if (parent) parent.children.push(state);
	    parent: function(state) {
	      if (isDefined(state.parent) && state.parent) return findState(state.parent);
	      // regex matches any valid composite state name
	      // would match "contact.list" but not "contacts"
	      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
	      return compositeName ? findState(compositeName[1]) : root;
	    },

	    // inherit 'data' from parent and override by own values (if any)
	    data: function(state) {
	      if (state.parent && state.parent.data) {
	        state.data = state.self.data = extend({}, state.parent.data, state.data);
	      }
	      return state.data;
	    },

	    // Build a URLMatcher if necessary, either via a relative or absolute URL
	    url: function(state) {
	      var url = state.url, config = { params: state.params || {} };

	      if (isString(url)) {
	        if (url.charAt(0) == '^') return $urlMatcherFactory.compile(url.substring(1), config);
	        return (state.parent.navigable || root).url.concat(url, config);
	      }

	      if (!url || $urlMatcherFactory.isMatcher(url)) return url;
	      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
	    },

	    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
	    navigable: function(state) {
	      return state.url ? state : (state.parent ? state.parent.navigable : null);
	    },

	    // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
	    ownParams: function(state) {
	      var params = state.url && state.url.params || new $$UMFP.ParamSet();
	      forEach(state.params || {}, function(config, id) {
	        if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
	      });
	      return params;
	    },

	    // Derive parameters for this state and ensure they're a super-set of parent's parameters
	    params: function(state) {
	      return state.parent && state.parent.params ? extend(state.parent.params.$$new(), state.ownParams) : new $$UMFP.ParamSet();
	    },

	    // If there is no explicit multi-view configuration, make one up so we don't have
	    // to handle both cases in the view directive later. Note that having an explicit
	    // 'views' property will mean the default unnamed view properties are ignored. This
	    // is also a good time to resolve view names to absolute names, so everything is a
	    // straight lookup at link time.
	    views: function(state) {
	      var views = {};

	      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
	        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
	        views[name] = view;
	      });
	      return views;
	    },

	    // Keep a full path from the root down to this state as this is needed for state activation.
	    path: function(state) {
	      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
	    },

	    // Speed up $state.contains() as it's used a lot
	    includes: function(state) {
	      var includes = state.parent ? extend({}, state.parent.includes) : {};
	      includes[state.name] = true;
	      return includes;
	    },

	    $delegates: {}
	  };

	  function isRelative(stateName) {
	    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
	  }

	  function findState(stateOrName, base) {
	    if (!stateOrName) return undefined;

	    var isStr = isString(stateOrName),
	        name  = isStr ? stateOrName : stateOrName.name,
	        path  = isRelative(name);

	    if (path) {
	      if (!base) throw new Error("No reference point given for path '"  + name + "'");
	      base = findState(base);
	      
	      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

	      for (; i < pathLength; i++) {
	        if (rel[i] === "" && i === 0) {
	          current = base;
	          continue;
	        }
	        if (rel[i] === "^") {
	          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
	          current = current.parent;
	          continue;
	        }
	        break;
	      }
	      rel = rel.slice(i).join(".");
	      name = current.name + (current.name && rel ? "." : "") + rel;
	    }
	    var state = states[name];

	    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
	      return state;
	    }
	    return undefined;
	  }

	  function queueState(parentName, state) {
	    if (!queue[parentName]) {
	      queue[parentName] = [];
	    }
	    queue[parentName].push(state);
	  }

	  function flushQueuedChildren(parentName) {
	    var queued = queue[parentName] || [];
	    while(queued.length) {
	      registerState(queued.shift());
	    }
	  }

	  function registerState(state) {
	    // Wrap a new object around the state so we can store our private details easily.
	    state = inherit(state, {
	      self: state,
	      resolve: state.resolve || {},
	      toString: function() { return this.name; }
	    });

	    var name = state.name;
	    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
	    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "'' is already defined");

	    // Get parent name
	    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
	        : (isString(state.parent)) ? state.parent
	        : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name
	        : '';

	    // If parent is not registered yet, add state to queue and register later
	    if (parentName && !states[parentName]) {
	      return queueState(parentName, state.self);
	    }

	    for (var key in stateBuilder) {
	      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
	    }
	    states[name] = state;

	    // Register the state in the global state list and with $urlRouter if necessary.
	    if (!state[abstractKey] && state.url) {
	      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
	        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
	          $state.transitionTo(state, $match, { inherit: true, location: false });
	        }
	      }]);
	    }

	    // Register any queued children
	    flushQueuedChildren(name);

	    return state;
	  }

	  // Checks text to see if it looks like a glob.
	  function isGlob (text) {
	    return text.indexOf('*') > -1;
	  }

	  // Returns true if glob matches current $state name.
	  function doesStateMatchGlob (glob) {
	    var globSegments = glob.split('.'),
	        segments = $state.$current.name.split('.');

	    //match single stars
	    for (var i = 0, l = globSegments.length; i < l; i++) {
	      if (globSegments[i] === '*') {
	        segments[i] = '*';
	      }
	    }

	    //match greedy starts
	    if (globSegments[0] === '**') {
	       segments = segments.slice(indexOf(segments, globSegments[1]));
	       segments.unshift('**');
	    }
	    //match greedy ends
	    if (globSegments[globSegments.length - 1] === '**') {
	       segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
	       segments.push('**');
	    }

	    if (globSegments.length != segments.length) {
	      return false;
	    }

	    return segments.join('') === globSegments.join('');
	  }


	  // Implicit root state that is always active
	  root = registerState({
	    name: '',
	    url: '^',
	    views: null,
	    'abstract': true
	  });
	  root.navigable = null;


	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#decorator
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Allows you to extend (carefully) or override (at your own peril) the 
	   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
	   * to add custom functionality to ui-router, for example inferring templateUrl 
	   * based on the state name.
	   *
	   * When passing only a name, it returns the current (original or decorated) builder
	   * function that matches `name`.
	   *
	   * The builder functions that can be decorated are listed below. Though not all
	   * necessarily have a good use case for decoration, that is up to you to decide.
	   *
	   * In addition, users can attach custom decorators, which will generate new 
	   * properties within the state's internal definition. There is currently no clear 
	   * use-case for this beyond accessing internal states (i.e. $state.$current), 
	   * however, expect this to become increasingly relevant as we introduce additional 
	   * meta-programming features.
	   *
	   * **Warning**: Decorators should not be interdependent because the order of 
	   * execution of the builder functions in non-deterministic. Builder functions 
	   * should only be dependent on the state definition object and super function.
	   *
	   *
	   * Existing builder functions and current return values:
	   *
	   * - **parent** `{object}` - returns the parent state object.
	   * - **data** `{object}` - returns state data, including any inherited data that is not
	   *   overridden by own values (if any).
	   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
	   *   or `null`.
	   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
	   *   navigable).
	   * - **params** `{object}` - returns an array of state params that are ensured to 
	   *   be a super-set of parent's params.
	   * - **views** `{object}` - returns a views object where each key is an absolute view 
	   *   name (i.e. "viewName@stateName") and each value is the config object 
	   *   (template, controller) for the view. Even when you don't use the views object 
	   *   explicitly on a state config, one is still created for you internally.
	   *   So by decorating this builder function you have access to decorating template 
	   *   and controller properties.
	   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
	   *   not including any params defined by ancestor states.
	   * - **path** `{string}` - returns the full path from the root down to this state. 
	   *   Needed for state activation.
	   * - **includes** `{object}` - returns an object that includes every state that 
	   *   would pass a `$state.includes()` test.
	   *
	   * @example
	   * <pre>
	   * // Override the internal 'views' builder with a function that takes the state
	   * // definition, and a reference to the internal function being overridden:
	   * $stateProvider.decorator('views', function (state, parent) {
	   *   var result = {},
	   *       views = parent(state);
	   *
	   *   angular.forEach(views, function (config, name) {
	   *     var autoName = (state.name + '.' + name).replace('.', '/');
	   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
	   *     result[name] = config;
	   *   });
	   *   return result;
	   * });
	   *
	   * $stateProvider.state('home', {
	   *   views: {
	   *     'contact.list': { controller: 'ListController' },
	   *     'contact.item': { controller: 'ItemController' }
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * $state.go('home');
	   * // Auto-populates list and item views with /partials/home/contact/list.html,
	   * // and /partials/home/contact/item.html, respectively.
	   * </pre>
	   *
	   * @param {string} name The name of the builder function to decorate. 
	   * @param {object} func A function that is responsible for decorating the original 
	   * builder function. The function receives two parameters:
	   *
	   *   - `{object}` - state - The state config object.
	   *   - `{object}` - super - The original builder function.
	   *
	   * @return {object} $stateProvider - $stateProvider instance
	   */
	  this.decorator = decorator;
	  function decorator(name, func) {
	    /*jshint validthis: true */
	    if (isString(name) && !isDefined(func)) {
	      return stateBuilder[name];
	    }
	    if (!isFunction(func) || !isString(name)) {
	      return this;
	    }
	    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
	      stateBuilder.$delegates[name] = stateBuilder[name];
	    }
	    stateBuilder[name] = func;
	    return this;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#state
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Registers a state configuration under a given state name. The stateConfig object
	   * has the following acceptable properties.
	   *
	   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
	   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
	   * @param {object} stateConfig State configuration object.
	   * @param {string|function=} stateConfig.template
	   * <a id='template'></a>
	   *   html template as a string or a function that returns
	   *   an html template as a string which should be used by the uiView directives. This property 
	   *   takes precedence over templateUrl.
	   *   
	   *   If `template` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
	   *     applying the current state
	   *
	   * <pre>template:
	   *   "<h1>inline template definition</h1>" +
	   *   "<div ui-view></div>"</pre>
	   * <pre>template: function(params) {
	   *       return "<h1>generated template</h1>"; }</pre>
	   * </div>
	   *
	   * @param {string|function=} stateConfig.templateUrl
	   * <a id='templateUrl'></a>
	   *
	   *   path or function that returns a path to an html
	   *   template that should be used by uiView.
	   *   
	   *   If `templateUrl` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
	   *     applying the current state
	   *
	   * <pre>templateUrl: "home.html"</pre>
	   * <pre>templateUrl: function(params) {
	   *     return myTemplates[params.pageId]; }</pre>
	   *
	   * @param {function=} stateConfig.templateProvider
	   * <a id='templateProvider'></a>
	   *    Provider function that returns HTML content string.
	   * <pre> templateProvider:
	   *       function(MyTemplateService, params) {
	   *         return MyTemplateService.getTemplate(params.pageId);
	   *       }</pre>
	   *
	   * @param {string|function=} stateConfig.controller
	   * <a id='controller'></a>
	   *
	   *  Controller fn that should be associated with newly
	   *   related scope or the name of a registered controller if passed as a string.
	   *   Optionally, the ControllerAs may be declared here.
	   * <pre>controller: "MyRegisteredController"</pre>
	   * <pre>controller:
	   *     "MyRegisteredController as fooCtrl"}</pre>
	   * <pre>controller: function($scope, MyService) {
	   *     $scope.data = MyService.getData(); }</pre>
	   *
	   * @param {function=} stateConfig.controllerProvider
	   * <a id='controllerProvider'></a>
	   *
	   * Injectable provider function that returns the actual controller or string.
	   * <pre>controllerProvider:
	   *   function(MyResolveData) {
	   *     if (MyResolveData.foo)
	   *       return "FooCtrl"
	   *     else if (MyResolveData.bar)
	   *       return "BarCtrl";
	   *     else return function($scope) {
	   *       $scope.baz = "Qux";
	   *     }
	   *   }</pre>
	   *
	   * @param {string=} stateConfig.controllerAs
	   * <a id='controllerAs'></a>
	   * 
	   * A controller alias name. If present the controller will be
	   *   published to scope under the controllerAs name.
	   * <pre>controllerAs: "myCtrl"</pre>
	   *
	   * @param {string|object=} stateConfig.parent
	   * <a id='parent'></a>
	   * Optionally specifies the parent state of this state.
	   *
	   * <pre>parent: 'parentState'</pre>
	   * <pre>parent: parentState // JS variable</pre>
	   *
	   * @param {object=} stateConfig.resolve
	   * <a id='resolve'></a>
	   *
	   * An optional map&lt;string, function&gt; of dependencies which
	   *   should be injected into the controller. If any of these dependencies are promises, 
	   *   the router will wait for them all to be resolved before the controller is instantiated.
	   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
	   *   and the values of the resolved promises are injected into any controllers that reference them.
	   *   If any  of the promises are rejected the $stateChangeError event is fired.
	   *
	   *   The map object is:
	   *   
	   *   - key - {string}: name of dependency to be injected into controller
	   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
	   *     it is injected and return value it treated as dependency. If result is a promise, it is 
	   *     resolved before its value is injected into controller.
	   *
	   * <pre>resolve: {
	   *     myResolve1:
	   *       function($http, $stateParams) {
	   *         return $http.get("/api/foos/"+stateParams.fooID);
	   *       }
	   *     }</pre>
	   *
	   * @param {string=} stateConfig.url
	   * <a id='url'></a>
	   *
	   *   A url fragment with optional parameters. When a state is navigated or
	   *   transitioned to, the `$stateParams` service will be populated with any 
	   *   parameters that were passed.
	   *
	   *   (See {@link ui.router.util.type:UrlMatcher UrlMatcher} `UrlMatcher`} for
	   *   more details on acceptable patterns )
	   *
	   * examples:
	   * <pre>url: "/home"
	   * url: "/users/:userid"
	   * url: "/books/{bookid:[a-zA-Z_-]}"
	   * url: "/books/{categoryid:int}"
	   * url: "/books/{publishername:string}/{categoryid:int}"
	   * url: "/messages?before&after"
	   * url: "/messages?{before:date}&{after:date}"
	   * url: "/messages/:mailboxid?{before:date}&{after:date}"
	   * </pre>
	   *
	   * @param {object=} stateConfig.views
	   * <a id='views'></a>
	   * an optional map&lt;string, object&gt; which defined multiple views, or targets views
	   * manually/explicitly.
	   *
	   * Examples:
	   *
	   * Targets three named `ui-view`s in the parent state's template
	   * <pre>views: {
	   *     header: {
	   *       controller: "headerCtrl",
	   *       templateUrl: "header.html"
	   *     }, body: {
	   *       controller: "bodyCtrl",
	   *       templateUrl: "body.html"
	   *     }, footer: {
	   *       controller: "footCtrl",
	   *       templateUrl: "footer.html"
	   *     }
	   *   }</pre>
	   *
	   * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
	   * <pre>views: {
	   *     'header@top': {
	   *       controller: "msgHeaderCtrl",
	   *       templateUrl: "msgHeader.html"
	   *     }, 'body': {
	   *       controller: "messagesCtrl",
	   *       templateUrl: "messages.html"
	   *     }
	   *   }</pre>
	   *
	   * @param {boolean=} [stateConfig.abstract=false]
	   * <a id='abstract'></a>
	   * An abstract state will never be directly activated,
	   *   but can provide inherited properties to its common children states.
	   * <pre>abstract: true</pre>
	   *
	   * @param {function=} stateConfig.onEnter
	   * <a id='onEnter'></a>
	   *
	   * Callback function for when a state is entered. Good way
	   *   to trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onEnter: function(MyService, $stateParams) {
	   *     MyService.foo($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {function=} stateConfig.onExit
	   * <a id='onExit'></a>
	   *
	   * Callback function for when a state is exited. Good way to
	   *   trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onExit: function(MyService, $stateParams) {
	   *     MyService.cleanup($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {boolean=} [stateConfig.reloadOnSearch=true]
	   * <a id='reloadOnSearch'></a>
	   *
	   * If `false`, will not retrigger the same state
	   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
	   *   Useful for when you'd like to modify $location.search() without triggering a reload.
	   * <pre>reloadOnSearch: false</pre>
	   *
	   * @param {object=} stateConfig.data
	   * <a id='data'></a>
	   *
	   * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
	   *   prototypally inherited.  In other words, adding a data property to a state adds it to
	   *   the entire subtree via prototypal inheritance.
	   *
	   * <pre>data: {
	   *     requiredRole: 'foo'
	   * } </pre>
	   *
	   * @param {object=} stateConfig.params
	   * <a id='params'></a>
	   *
	   * A map which optionally configures parameters declared in the `url`, or
	   *   defines additional non-url parameters.  For each parameter being
	   *   configured, add a configuration object keyed to the name of the parameter.
	   *
	   *   Each parameter configuration object may contain the following properties:
	   *
	   *   - ** value ** - {object|function=}: specifies the default value for this
	   *     parameter.  This implicitly sets this parameter as optional.
	   *
	   *     When UI-Router routes to a state and no value is
	   *     specified for this parameter in the URL or transition, the
	   *     default value will be used instead.  If `value` is a function,
	   *     it will be injected and invoked, and the return value used.
	   *
	   *     *Note*: `undefined` is treated as "no default value" while `null`
	   *     is treated as "the default value is `null`".
	   *
	   *     *Shorthand*: If you only need to configure the default value of the
	   *     parameter, you may use a shorthand syntax.   In the **`params`**
	   *     map, instead mapping the param name to a full parameter configuration
	   *     object, simply set map it to the default parameter value, e.g.:
	   *
	   * <pre>// define a parameter's default value
	   * params: {
	   *     param1: { value: "defaultValue" }
	   * }
	   * // shorthand default values
	   * params: {
	   *     param1: "defaultValue",
	   *     param2: "param2Default"
	   * }</pre>
	   *
	   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
	   *     treated as an array of values.  If you specified a Type, the value will be
	   *     treated as an array of the specified Type.  Note: query parameter values
	   *     default to a special `"auto"` mode.
	   *
	   *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
	   *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
	   *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
	   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
	   *     value (e.g.: `{ foo: '1' }`).
	   *
	   * <pre>params: {
	   *     param1: { array: true }
	   * }</pre>
	   *
	   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
	   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
	   *     configured default squash policy.
	   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
	   *
	   *   There are three squash settings:
	   *
	   *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
	   *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
	   *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
	   *       This can allow for cleaner looking URLs.
	   *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
	   *
	   * <pre>params: {
	   *     param1: {
	   *       value: "defaultId",
	   *       squash: true
	   * } }
	   * // squash "defaultValue" to "~"
	   * params: {
	   *     param1: {
	   *       value: "defaultValue",
	   *       squash: "~"
	   * } }
	   * </pre>
	   *
	   *
	   * @example
	   * <pre>
	   * // Some state name examples
	   *
	   * // stateName can be a single top-level name (must be unique).
	   * $stateProvider.state("home", {});
	   *
	   * // Or it can be a nested state name. This state is a child of the
	   * // above "home" state.
	   * $stateProvider.state("home.newest", {});
	   *
	   * // Nest states as deeply as needed.
	   * $stateProvider.state("home.newest.abc.xyz.inception", {});
	   *
	   * // state() returns $stateProvider, so you can chain state declarations.
	   * $stateProvider
	   *   .state("home", {})
	   *   .state("about", {})
	   *   .state("contacts", {});
	   * </pre>
	   *
	   */
	  this.state = state;
	  function state(name, definition) {
	    /*jshint validthis: true */
	    if (isObject(name)) definition = name;
	    else definition.name = name;
	    registerState(definition);
	    return this;
	  }

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$state
	   *
	   * @requires $rootScope
	   * @requires $q
	   * @requires ui.router.state.$view
	   * @requires $injector
	   * @requires ui.router.util.$resolve
	   * @requires ui.router.state.$stateParams
	   * @requires ui.router.router.$urlRouter
	   *
	   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
	   * you'd like to test against the current active state.
	   * @property {object} current A reference to the state's config object. However 
	   * you passed it in. Useful for accessing custom data.
	   * @property {object} transition Currently pending transition. A promise that'll 
	   * resolve or reject.
	   *
	   * @description
	   * `$state` service is responsible for representing states as well as transitioning
	   * between them. It also provides interfaces to ask for current state or even states
	   * you're coming from.
	   */
	  this.$get = $get;
	  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
	  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $urlRouter,   $location,   $urlMatcherFactory) {

	    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
	    var TransitionPrevented = $q.reject(new Error('transition prevented'));
	    var TransitionAborted = $q.reject(new Error('transition aborted'));
	    var TransitionFailed = $q.reject(new Error('transition failed'));

	    // Handles the case where a state which is the target of a transition is not found, and the user
	    // can optionally retry or defer the transition
	    function handleRedirect(redirect, state, params, options) {
	      /**
	       * @ngdoc event
	       * @name ui.router.state.$state#$stateNotFound
	       * @eventOf ui.router.state.$state
	       * @eventType broadcast on root scope
	       * @description
	       * Fired when a requested state **cannot be found** using the provided state name during transition.
	       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
	       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
	       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
	       * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
	       *
	       * @param {Object} event Event object.
	       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
	       * @param {State} fromState Current state object.
	       * @param {Object} fromParams Current state params.
	       *
	       * @example
	       *
	       * <pre>
	       * // somewhere, assume lazy.state has not been defined
	       * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
	       *
	       * // somewhere else
	       * $scope.$on('$stateNotFound',
	       * function(event, unfoundState, fromState, fromParams){
	       *     console.log(unfoundState.to); // "lazy.state"
	       *     console.log(unfoundState.toParams); // {a:1, b:2}
	       *     console.log(unfoundState.options); // {inherit:false} + default options
	       * })
	       * </pre>
	       */
	      var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);

	      if (evt.defaultPrevented) {
	        $urlRouter.update();
	        return TransitionAborted;
	      }

	      if (!evt.retry) {
	        return null;
	      }

	      // Allow the handler to return a promise to defer state lookup retry
	      if (options.$retry) {
	        $urlRouter.update();
	        return TransitionFailed;
	      }
	      var retryTransition = $state.transition = $q.when(evt.retry);

	      retryTransition.then(function() {
	        if (retryTransition !== $state.transition) return TransitionSuperseded;
	        redirect.options.$retry = true;
	        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
	      }, function() {
	        return TransitionAborted;
	      });
	      $urlRouter.update();

	      return retryTransition;
	    }

	    root.locals = { resolve: null, globals: { $stateParams: {} } };

	    $state = {
	      params: {},
	      current: root.self,
	      $current: root,
	      transition: null
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#reload
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method that force reloads the current state. All resolves are re-resolved,
	     * controllers reinstantiated, and events re-fired.
	     *
	     * @example
	     * <pre>
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     $state.reload();
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>
	     *
	     * @param {string=|object=} state - A state name or a state object, which is the root of the resolves to be re-resolved.
	     * @example
	     * <pre>
	     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item' 
	     * //and current state is 'contacts.detail.item'
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     //will reload 'contact.detail' and 'contact.detail.item' states
	     *     $state.reload('contact.detail');
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>

	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.reload = function reload(state) {
	      return $state.transitionTo($state.current, $stateParams, { reload: state || true, inherit: false, notify: true});
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#go
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Convenience method for transitioning to a new state. `$state.go` calls 
	     * `$state.transitionTo` internally but automatically sets options to 
	     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
	     * This allows you to easily use an absolute or relative to path and specify 
	     * only the parameters you'd like to update (while letting unspecified parameters 
	     * inherit from the currently active ancestor states).
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.go('contact.detail');
	     *   };
	     * });
	     * </pre>
	     * <img src='../ngdoc_assets/StateGoExamples.png'/>
	     *
	     * @param {string} to Absolute state name or relative state path. Some examples:
	     *
	     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
	     * - `$state.go('^')` - will go to a parent state
	     * - `$state.go('^.sibling')` - will go to a sibling state
	     * - `$state.go('.child.grandchild')` - will go to grandchild state
	     *
	     * @param {object=} params A map of the parameters that will be sent to the state, 
	     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
	     * defined parameters. This allows, for example, going to a sibling state that shares parameters
	     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
	     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
	     * will get you all current parameters, etc.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *
	     * @returns {promise} A promise representing the state of the new transition.
	     *
	     * Possible success values:
	     *
	     * - $state.current
	     *
	     * <br/>Possible rejection values:
	     *
	     * - 'transition superseded' - when a newer transition has been started after this one
	     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
	     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
	     *   when a `$stateNotFound` `event.retry` promise errors.
	     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
	     * - *resolve error* - when an error has occurred with a `resolve`
	     *
	     */
	    $state.go = function go(to, params, options) {
	      return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#transitionTo
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
	     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.transitionTo('contact.detail');
	     *   };
	     * });
	     * </pre>
	     *
	     * @param {string} to State name.
	     * @param {object=} toParams A map of the parameters that will be sent to the state,
	     * will populate $stateParams.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false|string=|object=}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *    if String, then will reload the state with the name given in reload, and any children.
	     *    if Object, then a stateObj is expected, will reload the state found in stateObj, and any children.
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.transitionTo = function transitionTo(to, toParams, options) {
	      toParams = toParams || {};
	      options = extend({
	        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
	      }, options || {});

	      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
	      var evt, toState = findState(to, options.relative);

	      // Store the hash param for later (since it will be stripped out by various methods)
	      var hash = toParams['#'];

	      if (!isDefined(toState)) {
	        var redirect = { to: to, toParams: toParams, options: options };
	        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

	        if (redirectResult) {
	          return redirectResult;
	        }

	        // Always retry once if the $stateNotFound was not prevented
	        // (handles either redirect changed or state lazy-definition)
	        to = redirect.to;
	        toParams = redirect.toParams;
	        options = redirect.options;
	        toState = findState(to, options.relative);

	        if (!isDefined(toState)) {
	          if (!options.relative) throw new Error("No such state '" + to + "'");
	          throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
	        }
	      }
	      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
	      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
	      if (!toState.params.$$validates(toParams)) return TransitionFailed;

	      toParams = toState.params.$$values(toParams);
	      to = toState;

	      var toPath = to.path;

	      // Starting from the root of the path, keep all levels that haven't changed
	      var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];

	      if (!options.reload) {
	        while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      } else if (isString(options.reload) || isObject(options.reload)) {
	        if (isObject(options.reload) && !options.reload.name) {
	          throw new Error('Invalid reload state object');
	        }
	        
	        var reloadState = options.reload === true ? fromPath[0] : findState(options.reload);
	        if (options.reload && !reloadState) {
	          throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
	        }

	        while (state && state === fromPath[keep] && state !== reloadState) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      }

	      // If we're going to the same state and all locals are kept, we've got nothing to do.
	      // But clear 'transition', as we still want to cancel any other pending transitions.
	      // TODO: We may not want to bump 'transition' if we're called from a location change
	      // that we've initiated ourselves, because we might accidentally abort a legitimate
	      // transition initiated from code?
	      if (shouldSkipReload(to, toParams, from, fromParams, locals, options)) {
	        if (hash) toParams['#'] = hash;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        if (options.location && to.navigable && to.navigable.url) {
	          $urlRouter.push(to.navigable.url, toParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	          $urlRouter.update(true);
	        }
	        $state.transition = null;
	        return $q.when($state.current);
	      }

	      // Filter parameters before we pass them to event handlers etc.
	      toParams = filterByKeys(to.params.$$keys(), toParams || {});

	      // Broadcast start event and cancel the transition if requested
	      if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeStart
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when the state transition **begins**. You can use `event.preventDefault()`
	         * to prevent the transition from happening and then the transition promise will be
	         * rejected with a `'transition prevented'` value.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         *
	         * @example
	         *
	         * <pre>
	         * $rootScope.$on('$stateChangeStart',
	         * function(event, toState, toParams, fromState, fromParams){
	         *     event.preventDefault();
	         *     // transitionTo() promise will be rejected with
	         *     // a 'transition prevented' error
	         * })
	         * </pre>
	         */
	        if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams).defaultPrevented) {
	          $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
	          $urlRouter.update();
	          return TransitionPrevented;
	        }
	      }

	      // Resolve locals for the remaining states, but don't update any global state just
	      // yet -- if anything fails to resolve the current state needs to remain untouched.
	      // We also set up an inheritance chain for the locals here. This allows the view directive
	      // to quickly look up the correct definition for each view in the current state. Even
	      // though we create the locals object itself outside resolveState(), it is initially
	      // empty and gets filled asynchronously. We need to keep track of the promise for the
	      // (fully resolved) current locals, and pass this down the chain.
	      var resolved = $q.when(locals);

	      for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
	        locals = toLocals[l] = inherit(locals);
	        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
	      }

	      // Once everything is resolved, we are ready to perform the actual transition
	      // and return a promise for the new state. We also keep track of what the
	      // current promise is, so that we can detect overlapping transitions and
	      // keep only the outcome of the last transition.
	      var transition = $state.transition = resolved.then(function () {
	        var l, entering, exiting;

	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Exit 'from' states not kept
	        for (l = fromPath.length - 1; l >= keep; l--) {
	          exiting = fromPath[l];
	          if (exiting.self.onExit) {
	            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
	          }
	          exiting.locals = null;
	        }

	        // Enter 'to' states not kept
	        for (l = keep; l < toPath.length; l++) {
	          entering = toPath[l];
	          entering.locals = toLocals[l];
	          if (entering.self.onEnter) {
	            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
	          }
	        }

	        // Re-add the saved hash before we start returning things
	        if (hash) toParams['#'] = hash;

	        // Run it again, to catch any transitions in callbacks
	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Update globals in $state
	        $state.$current = to;
	        $state.current = to.self;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        $state.transition = null;

	        if (options.location && to.navigable) {
	          $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	        }

	        if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeSuccess
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired once the state transition is **complete**.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         */
	          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
	        }
	        $urlRouter.update(true);

	        return $state.current;
	      }, function (error) {
	        if ($state.transition !== transition) return TransitionSuperseded;

	        $state.transition = null;
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeError
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when an **error occurs** during transition. It's important to note that if you
	         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
	         * they will not throw traditionally. You must listen for this $stateChangeError event to
	         * catch **ALL** errors.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         * @param {Error} error The resolve error object.
	         */
	        evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);

	        if (!evt.defaultPrevented) {
	            $urlRouter.update();
	        }

	        return $q.reject(error);
	      });

	      return transition;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#is
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
	     * but only checks for the full state name. If params is supplied then it will be
	     * tested for strict equality against the current active params object, so all params
	     * must match with none missing and no extras.
	     *
	     * @example
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // absolute name
	     * $state.is('contact.details.item'); // returns true
	     * $state.is(contactDetailItemStateObject); // returns true
	     *
	     * // relative name (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
	     * to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
	     * test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it is the state.
	     */
	    $state.is = function is(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) { return undefined; }
	      if ($state.$current !== state) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#includes
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method to determine if the current active state is equal to or is the child of the
	     * state stateName. If any params are passed then they will be tested for a match as well.
	     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
	     *
	     * @example
	     * Partial and relative names
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // Using partial names
	     * $state.includes("contacts"); // returns true
	     * $state.includes("contacts.details"); // returns true
	     * $state.includes("contacts.details.item"); // returns true
	     * $state.includes("contacts.list"); // returns false
	     * $state.includes("about"); // returns false
	     *
	     * // Using relative names (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
	     * </pre>
	     *
	     * Basic globbing patterns
	     * <pre>
	     * $state.$current.name = 'contacts.details.item.url';
	     *
	     * $state.includes("*.details.*.*"); // returns true
	     * $state.includes("*.details.**"); // returns true
	     * $state.includes("**.item.**"); // returns true
	     * $state.includes("*.details.item.url"); // returns true
	     * $state.includes("*.details.*.url"); // returns true
	     * $state.includes("*.details.*"); // returns false
	     * $state.includes("item.**"); // returns false
	     * </pre>
	     *
	     * @param {string} stateOrName A partial name, relative name, or glob pattern
	     * to be searched for within the current state name.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
	     * that you'd like to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
	     * .includes will test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it does include the state
	     */
	    $state.includes = function includes(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      if (isString(stateOrName) && isGlob(stateOrName)) {
	        if (!doesStateMatchGlob(stateOrName)) {
	          return false;
	        }
	        stateOrName = $state.$current.name;
	      }

	      var state = findState(stateOrName, options.relative);
	      if (!isDefined(state)) { return undefined; }
	      if (!isDefined($state.$current.includes[state.name])) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
	    };


	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#href
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A url generation method that returns the compiled url for the given state populated with the given params.
	     *
	     * @example
	     * <pre>
	     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
	     * @param {object=} params An object of parameter values to fill the state's required parameters.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
	     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
	     *    ancestor with a valid url).
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     * 
	     * @returns {string} compiled state url
	     */
	    $state.href = function href(stateOrName, params, options) {
	      options = extend({
	        lossy:    true,
	        inherit:  true,
	        absolute: false,
	        relative: $state.$current
	      }, options || {});

	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) return null;
	      if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);
	      
	      var nav = (state && options.lossy) ? state.navigable : state;

	      if (!nav || nav.url === undefined || nav.url === null) {
	        return null;
	      }
	      return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys().concat('#'), params || {}), {
	        absolute: options.absolute
	      });
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#get
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Returns the state configuration object for any specific state or all states.
	     *
	     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
	     * the requested state. If not provided, returns an array of ALL state configs.
	     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
	     * @returns {Object|Array} State configuration object or array of all objects.
	     */
	    $state.get = function (stateOrName, context) {
	      if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
	      var state = findState(stateOrName, context || $state.$current);
	      return (state && state.self) ? state.self : null;
	    };

	    function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
	      // Make a restricted $stateParams with only the parameters that apply to this state if
	      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
	      // we also need $stateParams to be available for any $injector calls we make during the
	      // dependency resolution process.
	      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
	      var locals = { $stateParams: $stateParams };

	      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
	      // We're also including $stateParams in this; that way the parameters are restricted
	      // to the set that should be visible to the state, and are independent of when we update
	      // the global $state and $stateParams values.
	      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
	      var promises = [dst.resolve.then(function (globals) {
	        dst.globals = globals;
	      })];
	      if (inherited) promises.push(inherited);

	      function resolveViews() {
	        var viewsPromises = [];

	        // Resolve template and dependencies for all views.
	        forEach(state.views, function (view, name) {
	          var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
	          injectables.$template = [ function () {
	            return $view.load(name, { view: view, locals: dst.globals, params: $stateParams, notify: options.notify }) || '';
	          }];

	          viewsPromises.push($resolve.resolve(injectables, dst.globals, dst.resolve, state).then(function (result) {
	            // References to the controller (only instantiated at link time)
	            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
	              var injectLocals = angular.extend({}, injectables, dst.globals);
	              result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
	            } else {
	              result.$$controller = view.controller;
	            }
	            // Provide access to the state itself for internal use
	            result.$$state = state;
	            result.$$controllerAs = view.controllerAs;
	            dst[name] = result;
	          }));
	        });

	        return $q.all(viewsPromises).then(function(){
	          return dst.globals;
	        });
	      }

	      // Wait for all the promises and then return the activation object
	      return $q.all(promises).then(resolveViews).then(function (values) {
	        return dst;
	      });
	    }

	    return $state;
	  }

	  function shouldSkipReload(to, toParams, from, fromParams, locals, options) {
	    // Return true if there are no differences in non-search (path/object) params, false if there are differences
	    function nonSearchParamsEqual(fromAndToState, fromParams, toParams) {
	      // Identify whether all the parameters that differ between `fromParams` and `toParams` were search params.
	      function notSearchParam(key) {
	        return fromAndToState.params[key].location != "search";
	      }
	      var nonQueryParamKeys = fromAndToState.params.$$keys().filter(notSearchParam);
	      var nonQueryParams = pick.apply({}, [fromAndToState.params].concat(nonQueryParamKeys));
	      var nonQueryParamSet = new $$UMFP.ParamSet(nonQueryParams);
	      return nonQueryParamSet.$$equals(fromParams, toParams);
	    }

	    // If reload was not explicitly requested
	    // and we're transitioning to the same state we're already in
	    // and    the locals didn't change
	    //     or they changed in a way that doesn't merit reloading
	    //        (reloadOnParams:false, or reloadOnSearch.false and only search params changed)
	    // Then return true.
	    if (!options.reload && to === from &&
	      (locals === from.locals || (to.self.reloadOnSearch === false && nonSearchParamsEqual(from, fromParams, toParams)))) {
	      return true;
	    }
	  }
	}

	angular.module('ui.router.state')
	  .value('$stateParams', {})
	  .provider('$state', $StateProvider);


	$ViewProvider.$inject = [];
	function $ViewProvider() {

	  this.$get = $get;
	  /**
	   * @ngdoc object
	   * @name ui.router.state.$view
	   *
	   * @requires ui.router.util.$templateFactory
	   * @requires $rootScope
	   *
	   * @description
	   *
	   */
	  $get.$inject = ['$rootScope', '$templateFactory'];
	  function $get(   $rootScope,   $templateFactory) {
	    return {
	      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
	      /**
	       * @ngdoc function
	       * @name ui.router.state.$view#load
	       * @methodOf ui.router.state.$view
	       *
	       * @description
	       *
	       * @param {string} name name
	       * @param {object} options option object.
	       */
	      load: function load(name, options) {
	        var result, defaults = {
	          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
	        };
	        options = extend(defaults, options);

	        if (options.view) {
	          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
	        }
	        if (result && options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$viewContentLoading
	         * @eventOf ui.router.state.$view
	         * @eventType broadcast on root scope
	         * @description
	         *
	         * Fired once the view **begins loading**, *before* the DOM is rendered.
	         *
	         * @param {Object} event Event object.
	         * @param {Object} viewConfig The view config properties (template, controller, etc).
	         *
	         * @example
	         *
	         * <pre>
	         * $scope.$on('$viewContentLoading',
	         * function(event, viewConfig){
	         *     // Access to all the view config properties.
	         *     // and one special property 'targetView'
	         *     // viewConfig.targetView
	         * });
	         * </pre>
	         */
	          $rootScope.$broadcast('$viewContentLoading', options);
	        }
	        return result;
	      }
	    };
	  }
	}

	angular.module('ui.router.state').provider('$view', $ViewProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$uiViewScrollProvider
	 *
	 * @description
	 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
	 */
	function $ViewScrollProvider() {

	  var useAnchorScroll = false;

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
	   * @methodOf ui.router.state.$uiViewScrollProvider
	   *
	   * @description
	   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
	   * scrolling based on the url anchor.
	   */
	  this.useAnchorScroll = function () {
	    useAnchorScroll = true;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$uiViewScroll
	   *
	   * @requires $anchorScroll
	   * @requires $timeout
	   *
	   * @description
	   * When called with a jqLite element, it scrolls the element into view (after a
	   * `$timeout` so the DOM has time to refresh).
	   *
	   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
	   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
	   */
	  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
	    if (useAnchorScroll) {
	      return $anchorScroll;
	    }

	    return function ($element) {
	      return $timeout(function () {
	        $element[0].scrollIntoView();
	      }, 0, false);
	    };
	  }];
	}

	angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-view
	 *
	 * @requires ui.router.state.$state
	 * @requires $compile
	 * @requires $controller
	 * @requires $injector
	 * @requires ui.router.state.$uiViewScroll
	 * @requires $document
	 *
	 * @restrict ECA
	 *
	 * @description
	 * The ui-view directive tells $state where to place your templates.
	 *
	 * @param {string=} name A view name. The name should be unique amongst the other views in the
	 * same state. You can have views of the same name that live in different states.
	 *
	 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
	 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
	 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
	 * scroll ui-view elements into view when they are populated during a state activation.
	 *
	 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
	 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
	 *
	 * @param {string=} onload Expression to evaluate whenever the view updates.
	 * 
	 * @example
	 * A view can be unnamed or named. 
	 * <pre>
	 * <!-- Unnamed -->
	 * <div ui-view></div> 
	 * 
	 * <!-- Named -->
	 * <div ui-view="viewName"></div>
	 * </pre>
	 *
	 * You can only have one unnamed view within any template (or root html). If you are only using a 
	 * single view and it is unnamed then you can populate it like so:
	 * <pre>
	 * <div ui-view></div> 
	 * $stateProvider.state("home", {
	 *   template: "<h1>HELLO!</h1>"
	 * })
	 * </pre>
	 * 
	 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
	 * config property, by name, in this case an empty name:
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * But typically you'll only use the views property if you name your view or have more than one view 
	 * in the same template. There's not really a compelling reason to name a view if its the only one, 
	 * but you could if you wanted, like so:
	 * <pre>
	 * <div ui-view="main"></div>
	 * </pre> 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "main": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * Really though, you'll use views to set up multiple views:
	 * <pre>
	 * <div ui-view></div>
	 * <div ui-view="chart"></div> 
	 * <div ui-view="data"></div> 
	 * </pre>
	 * 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     },
	 *     "chart": {
	 *       template: "<chart_thing/>"
	 *     },
	 *     "data": {
	 *       template: "<data_thing/>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 *
	 * Examples for `autoscroll`:
	 *
	 * <pre>
	 * <!-- If autoscroll present with no expression,
	 *      then scroll ui-view into view -->
	 * <ui-view autoscroll/>
	 *
	 * <!-- If autoscroll present with valid expression,
	 *      then scroll ui-view into view if expression evaluates to true -->
	 * <ui-view autoscroll='true'/>
	 * <ui-view autoscroll='false'/>
	 * <ui-view autoscroll='scopeVariable'/>
	 * </pre>
	 */
	$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate'];
	function $ViewDirective(   $state,   $injector,   $uiViewScroll,   $interpolate) {

	  function getService() {
	    return ($injector.has) ? function(service) {
	      return $injector.has(service) ? $injector.get(service) : null;
	    } : function(service) {
	      try {
	        return $injector.get(service);
	      } catch (e) {
	        return null;
	      }
	    };
	  }

	  var service = getService(),
	      $animator = service('$animator'),
	      $animate = service('$animate');

	  // Returns a set of DOM manipulation functions based on which Angular version
	  // it should use
	  function getRenderer(attrs, scope) {
	    var statics = function() {
	      return {
	        enter: function (element, target, cb) { target.after(element); cb(); },
	        leave: function (element, cb) { element.remove(); cb(); }
	      };
	    };

	    if ($animate) {
	      return {
	        enter: function(element, target, cb) {
	          var promise = $animate.enter(element, null, target, cb);
	          if (promise && promise.then) promise.then(cb);
	        },
	        leave: function(element, cb) {
	          var promise = $animate.leave(element, cb);
	          if (promise && promise.then) promise.then(cb);
	        }
	      };
	    }

	    if ($animator) {
	      var animate = $animator && $animator(scope, attrs);

	      return {
	        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
	        leave: function(element, cb) { animate.leave(element); cb(); }
	      };
	    }

	    return statics();
	  }

	  var directive = {
	    restrict: 'ECA',
	    terminal: true,
	    priority: 400,
	    transclude: 'element',
	    compile: function (tElement, tAttrs, $transclude) {
	      return function (scope, $element, attrs) {
	        var previousEl, currentEl, currentScope, latestLocals,
	            onloadExp     = attrs.onload || '',
	            autoScrollExp = attrs.autoscroll,
	            renderer      = getRenderer(attrs, scope);

	        scope.$on('$stateChangeSuccess', function() {
	          updateView(false);
	        });
	        scope.$on('$viewContentLoading', function() {
	          updateView(false);
	        });

	        updateView(true);

	        function cleanupLastView() {
	          if (previousEl) {
	            previousEl.remove();
	            previousEl = null;
	          }

	          if (currentScope) {
	            currentScope.$destroy();
	            currentScope = null;
	          }

	          if (currentEl) {
	            renderer.leave(currentEl, function() {
	              previousEl = null;
	            });

	            previousEl = currentEl;
	            currentEl = null;
	          }
	        }

	        function updateView(firstTime) {
	          var newScope,
	              name            = getUiViewName(scope, attrs, $element, $interpolate),
	              previousLocals  = name && $state.$current && $state.$current.locals[name];

	          if (!firstTime && previousLocals === latestLocals) return; // nothing to do
	          newScope = scope.$new();
	          latestLocals = $state.$current.locals[name];

	          var clone = $transclude(newScope, function(clone) {
	            renderer.enter(clone, $element, function onUiViewEnter() {
	              if(currentScope) {
	                currentScope.$emit('$viewContentAnimationEnded');
	              }

	              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
	                $uiViewScroll(clone);
	              }
	            });
	            cleanupLastView();
	          });

	          currentEl = clone;
	          currentScope = newScope;
	          /**
	           * @ngdoc event
	           * @name ui.router.state.directive:ui-view#$viewContentLoaded
	           * @eventOf ui.router.state.directive:ui-view
	           * @eventType emits on ui-view directive scope
	           * @description           *
	           * Fired once the view is **loaded**, *after* the DOM is rendered.
	           *
	           * @param {Object} event Event object.
	           */
	          currentScope.$emit('$viewContentLoaded');
	          currentScope.$eval(onloadExp);
	        }
	      };
	    }
	  };

	  return directive;
	}

	$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
	function $ViewDirectiveFill (  $compile,   $controller,   $state,   $interpolate) {
	  return {
	    restrict: 'ECA',
	    priority: -400,
	    compile: function (tElement) {
	      var initial = tElement.html();
	      return function (scope, $element, attrs) {
	        var current = $state.$current,
	            name = getUiViewName(scope, attrs, $element, $interpolate),
	            locals  = current && current.locals[name];

	        if (! locals) {
	          return;
	        }

	        $element.data('$uiView', { name: name, state: locals.$$state });
	        $element.html(locals.$template ? locals.$template : initial);

	        var link = $compile($element.contents());

	        if (locals.$$controller) {
	          locals.$scope = scope;
	          locals.$element = $element;
	          var controller = $controller(locals.$$controller, locals);
	          if (locals.$$controllerAs) {
	            scope[locals.$$controllerAs] = controller;
	          }
	          $element.data('$ngControllerController', controller);
	          $element.children().data('$ngControllerController', controller);
	        }

	        link(scope);
	      };
	    }
	  };
	}

	/**
	 * Shared ui-view code for both directives:
	 * Given scope, element, and its attributes, return the view's name
	 */
	function getUiViewName(scope, attrs, element, $interpolate) {
	  var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
	  var inherited = element.inheritedData('$uiView');
	  return name.indexOf('@') >= 0 ?  name :  (name + '@' + (inherited ? inherited.state.name : ''));
	}

	angular.module('ui.router.state').directive('uiView', $ViewDirective);
	angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

	function parseStateRef(ref, current) {
	  var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
	  if (preparsed) ref = current + '(' + preparsed[1] + ')';
	  parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
	  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
	  return { state: parsed[1], paramExpr: parsed[3] || null };
	}

	function stateContext(el) {
	  var stateData = el.parent().inheritedData('$uiView');

	  if (stateData && stateData.state && stateData.state.name) {
	    return stateData.state;
	  }
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref
	 *
	 * @requires ui.router.state.$state
	 * @requires $timeout
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated 
	 * URL, the directive will automatically generate & update the `href` attribute via 
	 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking 
	 * the link will trigger a state transition with optional parameters. 
	 *
	 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be 
	 * handled natively by the browser.
	 *
	 * You can also use relative state paths within ui-sref, just like the relative 
	 * paths passed to `$state.go()`. You just need to be aware that the path is relative
	 * to the state that the link lives in, in other words the state that loaded the 
	 * template containing the link.
	 *
	 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
	 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
	 * and `reload`.
	 *
	 * @example
	 * Here's an example of how you'd use ui-sref and how it would compile. If you have the 
	 * following template:
	 * <pre>
	 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
	 *     </li>
	 * </ul>
	 * </pre>
	 * 
	 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
	 * <pre>
	 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
	 *     </li>
	 * </ul>
	 *
	 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
	 * </pre>
	 *
	 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
	 */
	$StateRefDirective.$inject = ['$state', '$timeout'];
	function $StateRefDirective($state, $timeout) {
	  var allowedOptions = ['location', 'inherit', 'reload', 'absolute'];

	  return {
	    restrict: 'A',
	    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	    link: function(scope, element, attrs, uiSrefActive) {
	      var ref = parseStateRef(attrs.uiSref, $state.current.name);
	      var params = null, url = null, base = stateContext(element) || $state.$current;
	      // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
	      var hrefKind = Object.prototype.toString.call(element.prop('href')) === '[object SVGAnimatedString]' ?
	                 'xlink:href' : 'href';
	      var newHref = null, isAnchor = element.prop("tagName").toUpperCase() === "A";
	      var isForm = element[0].nodeName === "FORM";
	      var attr = isForm ? "action" : hrefKind, nav = true;

	      var options = { relative: base, inherit: true };
	      var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};

	      angular.forEach(allowedOptions, function(option) {
	        if (option in optionsOverride) {
	          options[option] = optionsOverride[option];
	        }
	      });

	      var update = function(newVal) {
	        if (newVal) params = angular.copy(newVal);
	        if (!nav) return;

	        newHref = $state.href(ref.state, params, options);

	        var activeDirective = uiSrefActive[1] || uiSrefActive[0];
	        if (activeDirective) {
	          activeDirective.$$addStateInfo(ref.state, params);
	        }
	        if (newHref === null) {
	          nav = false;
	          return false;
	        }
	        attrs.$set(attr, newHref);
	      };

	      if (ref.paramExpr) {
	        scope.$watch(ref.paramExpr, function(newVal, oldVal) {
	          if (newVal !== params) update(newVal);
	        }, true);
	        params = angular.copy(scope.$eval(ref.paramExpr));
	      }
	      update();

	      if (isForm) return;

	      element.bind("click", function(e) {
	        var button = e.which || e.button;
	        if ( !(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target')) ) {
	          // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
	          var transition = $timeout(function() {
	            $state.go(ref.state, params, options);
	          });
	          e.preventDefault();

	          // if the state has no URL, ignore one preventDefault from the <a> directive.
	          var ignorePreventDefaultCount = isAnchor && !newHref ? 1: 0;
	          e.preventDefault = function() {
	            if (ignorePreventDefaultCount-- <= 0)
	              $timeout.cancel(transition);
	          };
	        }
	      });
	    }
	  };
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive working alongside ui-sref to add classes to an element when the
	 * related ui-sref directive's state is active, and removing them when it is inactive.
	 * The primary use-case is to simplify the special appearance of navigation menus
	 * relying on `ui-sref`, by having the "active" state's menu button appear different,
	 * distinguishing it from the inactive menu items.
	 *
	 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
	 * ui-sref-active found at the same level or above the ui-sref will be used.
	 *
	 * Will activate when the ui-sref's target state or any child state is active. If you
	 * need to activate only when the ui-sref target state is active and *not* any of
	 * it's children, then you will use
	 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
	 *
	 * @example
	 * Given the following template:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item">
	 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 *
	 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
	 * the resulting HTML will appear as (note the 'active' class):
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item active">
	 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 * The class name is interpolated **once** during the directives link time (any further changes to the
	 * interpolated value are ignored).
	 *
	 * Multiple classes may be specified in a space-separated format:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active='class1 class2 class3'>
	 *     <a ui-sref="app.user">link</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 */

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active-eq
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
	 * when the exact target state used in the `ui-sref` is active; no child states.
	 *
	 */
	$StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
	function $StateRefActiveDirective($state, $stateParams, $interpolate) {
	  return  {
	    restrict: "A",
	    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
	      var states = [], activeClass;

	      // There probably isn't much point in $observing this
	      // uiSrefActive and uiSrefActiveEq share the same directive object with some
	      // slight difference in logic routing
	      activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || '', false)($scope);

	      // Allow uiSref to communicate with uiSrefActive[Equals]
	      this.$$addStateInfo = function (newState, newParams) {
	        var state = $state.get(newState, stateContext($element));

	        states.push({
	          state: state || { name: newState },
	          params: newParams
	        });

	        update();
	      };

	      $scope.$on('$stateChangeSuccess', update);

	      // Update route state
	      function update() {
	        if (anyMatch()) {
	          $element.addClass(activeClass);
	        } else {
	          $element.removeClass(activeClass);
	        }
	      }

	      function anyMatch() {
	        for (var i = 0; i < states.length; i++) {
	          if (isMatch(states[i].state, states[i].params)) {
	            return true;
	          }
	        }
	        return false;
	      }

	      function isMatch(state, params) {
	        if (typeof $attrs.uiSrefActiveEq !== 'undefined') {
	          return $state.is(state.name, params);
	        } else {
	          return $state.includes(state.name, params);
	        }
	      }
	    }]
	  };
	}

	angular.module('ui.router.state')
	  .directive('uiSref', $StateRefDirective)
	  .directive('uiSrefActive', $StateRefActiveDirective)
	  .directive('uiSrefActiveEq', $StateRefActiveDirective);

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:isState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
	 */
	$IsStateFilter.$inject = ['$state'];
	function $IsStateFilter($state) {
	  var isFilter = function (state) {
	    return $state.is(state);
	  };
	  isFilter.$stateful = true;
	  return isFilter;
	}

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:includedByState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
	 */
	$IncludedByStateFilter.$inject = ['$state'];
	function $IncludedByStateFilter($state) {
	  var includesFilter = function (state) {
	    return $state.includes(state);
	  };
	  includesFilter.$stateful = true;
	  return  includesFilter;
	}

	angular.module('ui.router.state')
	  .filter('isState', $IsStateFilter)
	  .filter('includedByState', $IncludedByStateFilter);
	})(window, window.angular);

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * A helper module for AngularUI Router, which allows you to define your states as an object tree.
	 * @author Mark Lagendijk <mark@lagendijk.info>
	 * @license MIT
	 */
	angular.module('ui.router.stateHelper', [ 'ui.router' ])
	    .provider('stateHelper', ['$stateProvider', function($stateProvider){
	        var self = this;

	        /**
	         * Recursively sets the states using $stateProvider.state.
	         * Child states are defined via a `children` property.
	         *
	         * 1. Recursively calls itself for all descendant states, by traversing the `children` properties.
	         * 2. Converts all the state names to dot notation, of the form `grandfather.father.state`.
	         * 3. Sets `parent` property of the descendant states.
	         *
	         * @param {Object} state - A regular ui.router state object.
	         * @param {Array} [state.children] - An optional array of child states.
	         * @deprecated {Boolean} keepOriginalNames - An optional flag that prevents conversion 
	         *     of names to dot notation if true. (use options.keepOriginalNames instead)
	         * @param {Object} [options] - An optional options object.
	         * @param {Boolean} [options.keepOriginalNames=false] An optional flag that 
	         *     prevents conversion of names to dot notation if true.
	         * @param {Boolean} [options.siblingTraversal=false] An optional flag that 
	         *     adds `nextSibling` and `previousSibling` properties when enabled
	         */
	        this.state = function(state){
	            var args = Array.prototype.slice.apply(arguments);
	            var options = {
	                keepOriginalNames: false,
	                siblingTraversal: false
	            };  

	            if (typeof args[1] === 'boolean') {
	                options.keepOriginalNames = args[1];
	            } 
	            else if (typeof args[1] === 'object') {
	                angular.extend(options, args[1]);
	            }

	            if (!options.keepOriginalNames) {
	                fixStateName(state);
	            }

	            $stateProvider.state(state);

	            if(state.children && state.children.length){
	                state.children.forEach(function(childState){
	                    childState.parent = state;
	                    self.state(childState, options);
	                });

	                if (options.siblingTraversal) {
	                    addSiblings(state);
	                }
	            }

	            return self;
	        };

	        this.setNestedState = this.state;

	        self.$get = angular.noop;

	        /**
	         * Converts the name of a state to dot notation, of the form `grandfather.father.state`.
	         * @param state
	         */
	        function fixStateName(state){
	            if(state.parent){
	                state.name = (angular.isObject(state.parent) ? state.parent.name : state.parent) + '.' + state.name;
	            }
	        }

	        function addSiblings(state) {
	            state.children.forEach(function (childState, idx, array) {
	                if (array[idx + 1]) {
	                    childState.nextSibling = array[idx + 1].name;
	                }
	                if (array[idx - 1]) {
	                    childState.previousSibling = array[idx - 1].name;
	                }
	            });
	        }
	    }]);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	module.exports = 'ui.bootstrap';


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
	 * angular-ui-bootstrap
	 * http://angular-ui.github.io/bootstrap/

	 * Version: 0.13.3 - 2015-08-09
	 * License: MIT
	 */
	angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.transition","ui.bootstrap.typeahead"]);
	angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]);
	angular.module('ui.bootstrap.collapse', [])

	  .directive('collapse', ['$animate', function ($animate) {

	    return {
	      link: function (scope, element, attrs) {
	        function expand() {
	          element.removeClass('collapse')
	            .addClass('collapsing')
	            .attr('aria-expanded', true)
	            .attr('aria-hidden', false);

	          $animate.addClass(element, 'in', {
	            to: { height: element[0].scrollHeight + 'px' }
	          }).then(expandDone);
	        }

	        function expandDone() {
	          element.removeClass('collapsing');
	          element.css({height: 'auto'});
	        }

	        function collapse() {
	          if(! element.hasClass('collapse') && ! element.hasClass('in')) {
	            return collapseDone();
	          }

	          element
	            // IMPORTANT: The height must be set before adding "collapsing" class.
	            // Otherwise, the browser attempts to animate from height 0 (in
	            // collapsing class) to the given height here.
	            .css({height: element[0].scrollHeight + 'px'})
	            // initially all panel collapse have the collapse class, this removal
	            // prevents the animation from jumping to collapsed state
	            .removeClass('collapse')
	            .addClass('collapsing')
	            .attr('aria-expanded', false)
	            .attr('aria-hidden', true);

	          $animate.removeClass(element, 'in', {
	            to: {height: '0'}
	          }).then(collapseDone);
	        }

	        function collapseDone() {
	          element.css({height: '0'}); // Required so that collapse works when animation is disabled
	          element.removeClass('collapsing');
	          element.addClass('collapse');
	        }

	        scope.$watch(attrs.collapse, function (shouldCollapse) {
	          if (shouldCollapse) {
	            collapse();
	          } else {
	            expand();
	          }
	        });
	      }
	    };
	  }]);

	angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

	.constant('accordionConfig', {
	  closeOthers: true
	})

	.controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function ($scope, $attrs, accordionConfig) {

	  // This array keeps track of the accordion groups
	  this.groups = [];

	  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
	  this.closeOthers = function(openGroup) {
	    var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
	    if ( closeOthers ) {
	      angular.forEach(this.groups, function (group) {
	        if ( group !== openGroup ) {
	          group.isOpen = false;
	        }
	      });
	    }
	  };

	  // This is called from the accordion-group directive to add itself to the accordion
	  this.addGroup = function(groupScope) {
	    var that = this;
	    this.groups.push(groupScope);

	    groupScope.$on('$destroy', function (event) {
	      that.removeGroup(groupScope);
	    });
	  };

	  // This is called from the accordion-group directive when to remove itself
	  this.removeGroup = function(group) {
	    var index = this.groups.indexOf(group);
	    if ( index !== -1 ) {
	      this.groups.splice(index, 1);
	    }
	  };

	}])

	// The accordion directive simply sets up the directive controller
	// and adds an accordion CSS class to itself element.
	.directive('accordion', function () {
	  return {
	    restrict: 'EA',
	    controller: 'AccordionController',
	    controllerAs: 'accordion',
	    transclude: true,
	    replace: false,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/accordion/accordion.html';
	    }
	  };
	})

	// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
	.directive('accordionGroup', function() {
	  return {
	    require:'^accordion',         // We need this directive to be inside an accordion
	    restrict:'EA',
	    transclude:true,              // It transcludes the contents of the directive into the template
	    replace: true,                // The element containing the directive will be replaced with the template
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/accordion/accordion-group.html';
	    },
	    scope: {
	      heading: '@',               // Interpolate the heading attribute onto this scope
	      isOpen: '=?',
	      isDisabled: '=?'
	    },
	    controller: function() {
	      this.setHeading = function(element) {
	        this.heading = element;
	      };
	    },
	    link: function(scope, element, attrs, accordionCtrl) {
	      accordionCtrl.addGroup(scope);

	      scope.$watch('isOpen', function(value) {
	        if ( value ) {
	          accordionCtrl.closeOthers(scope);
	        }
	      });

	      scope.toggleOpen = function() {
	        if ( !scope.isDisabled ) {
	          scope.isOpen = !scope.isOpen;
	        }
	      };
	    }
	  };
	})

	// Use accordion-heading below an accordion-group to provide a heading containing HTML
	// <accordion-group>
	//   <accordion-heading>Heading containing HTML - <img src="..."></accordion-heading>
	// </accordion-group>
	.directive('accordionHeading', function() {
	  return {
	    restrict: 'EA',
	    transclude: true,   // Grab the contents to be used as the heading
	    template: '',       // In effect remove this element!
	    replace: true,
	    require: '^accordionGroup',
	    link: function(scope, element, attr, accordionGroupCtrl, transclude) {
	      // Pass the heading to the accordion-group controller
	      // so that it can be transcluded into the right place in the template
	      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
	      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
	    }
	  };
	})

	// Use in the accordion-group template to indicate where you want the heading to be transcluded
	// You must provide the property on the accordion-group controller that will hold the transcluded element
	// <div class="accordion-group">
	//   <div class="accordion-heading" ><a ... accordion-transclude="heading">...</a></div>
	//   ...
	// </div>
	.directive('accordionTransclude', function() {
	  return {
	    require: '^accordionGroup',
	    link: function(scope, element, attr, controller) {
	      scope.$watch(function() { return controller[attr.accordionTransclude]; }, function(heading) {
	        if ( heading ) {
	          element.find('span').html('');
	          element.find('span').append(heading);
	        }
	      });
	    }
	  };
	})

	;

	angular.module('ui.bootstrap.alert', [])

	.controller('AlertController', ['$scope', '$attrs', function ($scope, $attrs) {
	  $scope.closeable = !!$attrs.close;
	  this.close = $scope.close;
	}])

	.directive('alert', function () {
	  return {
	    restrict: 'EA',
	    controller: 'AlertController',
	    controllerAs: 'alert',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/alert/alert.html';
	    },
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@',
	      close: '&'
	    }
	  };
	})

	.directive('dismissOnTimeout', ['$timeout', function($timeout) {
	  return {
	    require: 'alert',
	    link: function(scope, element, attrs, alertCtrl) {
	      $timeout(function(){
	        alertCtrl.close();
	      }, parseInt(attrs.dismissOnTimeout, 10));
	    }
	  };
	}]);

	angular.module('ui.bootstrap.bindHtml', [])

	  .value('$bindHtmlUnsafeSuppressDeprecated', false)

	  .directive('bindHtmlUnsafe', ['$log', '$bindHtmlUnsafeSuppressDeprecated', function ($log, $bindHtmlUnsafeSuppressDeprecated) {
	    return function (scope, element, attr) {
	      if (!$bindHtmlUnsafeSuppressDeprecated) {
	        $log.warn('bindHtmlUnsafe is now deprecated. Use ngBindHtml instead');
	      }
	      element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
	      scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
	        element.html(value || '');
	      });
	    };
	  }]);
	angular.module('ui.bootstrap.buttons', [])

	.constant('buttonConfig', {
	  activeClass: 'active',
	  toggleEvent: 'click'
	})

	.controller('ButtonsController', ['buttonConfig', function(buttonConfig) {
	  this.activeClass = buttonConfig.activeClass || 'active';
	  this.toggleEvent = buttonConfig.toggleEvent || 'click';
	}])

	.directive('btnRadio', function () {
	  return {
	    require: ['btnRadio', 'ngModel'],
	    controller: 'ButtonsController',
	    controllerAs: 'buttons',
	    link: function (scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      //model -> UI
	      ngModelCtrl.$render = function () {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
	      };

	      //ui->model
	      element.bind(buttonsCtrl.toggleEvent, function () {
	        if (attrs.disabled) {
	          return;
	        }

	        var isActive = element.hasClass(buttonsCtrl.activeClass);

	        if (!isActive || angular.isDefined(attrs.uncheckable)) {
	          scope.$apply(function () {
	            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
	            ngModelCtrl.$render();
	          });
	        }
	      });
	    }
	  };
	})

	.directive('btnCheckbox', function () {
	  return {
	    require: ['btnCheckbox', 'ngModel'],
	    controller: 'ButtonsController',
	    controllerAs: 'button',
	    link: function (scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      function getTrueValue() {
	        return getCheckboxValue(attrs.btnCheckboxTrue, true);
	      }

	      function getFalseValue() {
	        return getCheckboxValue(attrs.btnCheckboxFalse, false);
	      }

	      function getCheckboxValue(attributeValue, defaultValue) {
	        var val = scope.$eval(attributeValue);
	        return angular.isDefined(val) ? val : defaultValue;
	      }

	      //model -> UI
	      ngModelCtrl.$render = function () {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
	      };

	      //ui->model
	      element.bind(buttonsCtrl.toggleEvent, function () {
	        if (attrs.disabled) {
	          return;
	        }

	        scope.$apply(function () {
	          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	          ngModelCtrl.$render();
	        });
	      });
	    }
	  };
	});

	/**
	* @ngdoc overview
	* @name ui.bootstrap.carousel
	*
	* @description
	* AngularJS version of an image carousel.
	*
	*/
	angular.module('ui.bootstrap.carousel', [])
	.controller('CarouselController', ['$scope', '$element', '$interval', '$animate', function ($scope, $element, $interval, $animate) {
	  var self = this,
	    slides = self.slides = $scope.slides = [],
	    NEW_ANIMATE = angular.version.minor >= 4,
	    NO_TRANSITION = 'uib-noTransition',
	    SLIDE_DIRECTION = 'uib-slideDirection',
	    currentIndex = -1,
	    currentInterval, isPlaying;
	  self.currentSlide = null;

	  var destroyed = false;
	  /* direction: "prev" or "next" */
	  self.select = $scope.select = function(nextSlide, direction) {
	    var nextIndex = $scope.indexOfSlide(nextSlide);
	    //Decide direction if it's not given
	    if (direction === undefined) {
	      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
	    }
	    //Prevent this user-triggered transition from occurring if there is already one in progress
	    if (nextSlide && nextSlide !== self.currentSlide && !$scope.$currentTransition) {
	      goNext(nextSlide, nextIndex, direction);
	    }
	  };

	  function goNext(slide, index, direction) {
	    // Scope has been destroyed, stop here.
	    if (destroyed) { return; }

	    angular.extend(slide, {direction: direction, active: true});
	    angular.extend(self.currentSlide || {}, {direction: direction, active: false});
	    if ($animate.enabled() && !$scope.noTransition && !$scope.$currentTransition &&
	      slide.$element && self.slides.length > 1) {
	      slide.$element.data(SLIDE_DIRECTION, slide.direction);
	      if (self.currentSlide && self.currentSlide.$element) {
	        self.currentSlide.$element.data(SLIDE_DIRECTION, slide.direction);
	      }

	      $scope.$currentTransition = true;
	      if (NEW_ANIMATE) {
	        $animate.on('addClass', slide.$element, function (element, phase) {
	          if (phase === 'close') {
	            $scope.$currentTransition = null;
	            $animate.off('addClass', element);
	          }
	        });
	      } else {
	        slide.$element.one('$animate:close', function closeFn() {
	          $scope.$currentTransition = null;
	        });
	      }
	    }

	    self.currentSlide = slide;
	    currentIndex = index;

	    //every time you change slides, reset the timer
	    restartTimer();
	  }

	  $scope.$on('$destroy', function () {
	    destroyed = true;
	  });

	  function getSlideByIndex(index) {
	    if (angular.isUndefined(slides[index].index)) {
	      return slides[index];
	    }
	    var i, len = slides.length;
	    for (i = 0; i < slides.length; ++i) {
	      if (slides[i].index == index) {
	        return slides[i];
	      }
	    }
	  }

	  self.getCurrentIndex = function() {
	    if (self.currentSlide && angular.isDefined(self.currentSlide.index)) {
	      return +self.currentSlide.index;
	    }
	    return currentIndex;
	  };

	  /* Allow outside people to call indexOf on slides array */
	  $scope.indexOfSlide = function(slide) {
	    return angular.isDefined(slide.index) ? +slide.index : slides.indexOf(slide);
	  };

	  $scope.next = function() {
	    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

	    if (newIndex === 0 && $scope.noWrap()) {
	      $scope.pause();
	      return;
	    }

	    return self.select(getSlideByIndex(newIndex), 'next');
	  };

	  $scope.prev = function() {
	    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

	    if ($scope.noWrap() && newIndex === slides.length - 1){
	      $scope.pause();
	      return;
	    }

	    return self.select(getSlideByIndex(newIndex), 'prev');
	  };

	  $scope.isActive = function(slide) {
	     return self.currentSlide === slide;
	  };

	  $scope.$watch('interval', restartTimer);
	  $scope.$on('$destroy', resetTimer);

	  function restartTimer() {
	    resetTimer();
	    var interval = +$scope.interval;
	    if (!isNaN(interval) && interval > 0) {
	      currentInterval = $interval(timerFn, interval);
	    }
	  }

	  function resetTimer() {
	    if (currentInterval) {
	      $interval.cancel(currentInterval);
	      currentInterval = null;
	    }
	  }

	  function timerFn() {
	    var interval = +$scope.interval;
	    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
	      $scope.next();
	    } else {
	      $scope.pause();
	    }
	  }

	  $scope.play = function() {
	    if (!isPlaying) {
	      isPlaying = true;
	      restartTimer();
	    }
	  };
	  $scope.pause = function() {
	    if (!$scope.noPause) {
	      isPlaying = false;
	      resetTimer();
	    }
	  };

	  self.addSlide = function(slide, element) {
	    slide.$element = element;
	    slides.push(slide);
	    //if this is the first slide or the slide is set to active, select it
	    if(slides.length === 1 || slide.active) {
	      self.select(slides[slides.length-1]);
	      if (slides.length == 1) {
	        $scope.play();
	      }
	    } else {
	      slide.active = false;
	    }
	  };

	  self.removeSlide = function(slide) {
	    if (angular.isDefined(slide.index)) {
	      slides.sort(function(a, b) {
	        return +a.index > +b.index;
	      });
	    }
	    //get the index of the slide inside the carousel
	    var index = slides.indexOf(slide);
	    slides.splice(index, 1);
	    if (slides.length > 0 && slide.active) {
	      if (index >= slides.length) {
	        self.select(slides[index-1]);
	      } else {
	        self.select(slides[index]);
	      }
	    } else if (currentIndex > index) {
	      currentIndex--;
	    }
	    
	    //clean the currentSlide when no more slide
	    if (slides.length === 0) {
	      self.currentSlide = null;
	    }
	  };

	  $scope.$watch('noTransition', function(noTransition) {
	    $element.data(NO_TRANSITION, noTransition);
	  });

	}])

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.carousel.directive:carousel
	 * @restrict EA
	 *
	 * @description
	 * Carousel is the outer container for a set of image 'slides' to showcase.
	 *
	 * @param {number=} interval The time, in milliseconds, that it will take the carousel to go to the next slide.
	 * @param {boolean=} noTransition Whether to disable transitions on the carousel.
	 * @param {boolean=} noPause Whether to disable pausing on the carousel (by default, the carousel interval pauses on hover).
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <carousel>
	      <slide>
	        <img src="http://placekitten.com/150/150" style="margin:auto;">
	        <div class="carousel-caption">
	          <p>Beautiful!</p>
	        </div>
	      </slide>
	      <slide>
	        <img src="http://placekitten.com/100/150" style="margin:auto;">
	        <div class="carousel-caption">
	          <p>D'aww!</p>
	        </div>
	      </slide>
	    </carousel>
	  </file>
	  <file name="demo.css">
	    .carousel-indicators {
	      top: auto;
	      bottom: 15px;
	    }
	  </file>
	</example>
	 */
	.directive('carousel', [function() {
	  return {
	    restrict: 'EA',
	    transclude: true,
	    replace: true,
	    controller: 'CarouselController',
	    controllerAs: 'carousel',
	    require: 'carousel',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/carousel/carousel.html';
	    },
	    scope: {
	      interval: '=',
	      noTransition: '=',
	      noPause: '=',
	      noWrap: '&'
	    }
	  };
	}])

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.carousel.directive:slide
	 * @restrict EA
	 *
	 * @description
	 * Creates a slide inside a {@link ui.bootstrap.carousel.directive:carousel carousel}.  Must be placed as a child of a carousel element.
	 *
	 * @param {boolean=} active Model binding, whether or not this slide is currently active.
	 * @param {number=} index The index of the slide. The slides will be sorted by this parameter.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	<div ng-controller="CarouselDemoCtrl">
	  <carousel>
	    <slide ng-repeat="slide in slides" active="slide.active" index="$index">
	      <img ng-src="{{slide.image}}" style="margin:auto;">
	      <div class="carousel-caption">
	        <h4>Slide {{$index}}</h4>
	        <p>{{slide.text}}</p>
	      </div>
	    </slide>
	  </carousel>
	  Interval, in milliseconds: <input type="number" ng-model="myInterval">
	  <br />Enter a negative number to stop the interval.
	</div>
	  </file>
	  <file name="script.js">
	function CarouselDemoCtrl($scope) {
	  $scope.myInterval = 5000;
	}
	  </file>
	  <file name="demo.css">
	    .carousel-indicators {
	      top: auto;
	      bottom: 15px;
	    }
	  </file>
	</example>
	*/

	.directive('slide', function() {
	  return {
	    require: '^carousel',
	    restrict: 'EA',
	    transclude: true,
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/carousel/slide.html';
	    },
	    scope: {
	      active: '=?',
	      index: '=?'
	    },
	    link: function (scope, element, attrs, carouselCtrl) {
	      carouselCtrl.addSlide(scope, element);
	      //when the scope is destroyed then remove the slide from the current slides array
	      scope.$on('$destroy', function() {
	        carouselCtrl.removeSlide(scope);
	      });

	      scope.$watch('active', function(active) {
	        if (active) {
	          carouselCtrl.select(scope);
	        }
	      });
	    }
	  };
	})

	.animation('.item', [
	         '$injector', '$animate',
	function ($injector, $animate) {
	  var NO_TRANSITION = 'uib-noTransition',
	    SLIDE_DIRECTION = 'uib-slideDirection',
	    $animateCss = null;

	  if ($injector.has('$animateCss')) {
	    $animateCss = $injector.get('$animateCss');
	  }

	  function removeClass(element, className, callback) {
	    element.removeClass(className);
	    if (callback) {
	      callback();
	    }
	  }

	  return {
	    beforeAddClass: function (element, className, done) {
	      // Due to transclusion, noTransition property is on parent's scope
	      if (className == 'active' && element.parent() &&
	          !element.parent().data(NO_TRANSITION)) {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction == 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element,
	          directionClass + ' ' + direction, done);
	        element.addClass(direction);

	        if ($animateCss) {
	          $animateCss(element, {addClass: directionClass})
	            .start()
	            .done(removeClassFn);
	        } else {
	          $animate.addClass(element, directionClass).then(function () {
	            if (!stopped) {
	              removeClassFn();
	            }
	            done();
	          });
	        }

	        return function () {
	          stopped = true;
	        };
	      }
	      done();
	    },
	    beforeRemoveClass: function (element, className, done) {
	      // Due to transclusion, noTransition property is on parent's scope
	      if (className === 'active' && element.parent() &&
	          !element.parent().data(NO_TRANSITION)) {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction == 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element, directionClass, done);

	        if ($animateCss) {
	          $animateCss(element, {addClass: directionClass})
	            .start()
	            .done(removeClassFn);
	        } else {
	          $animate.addClass(element, directionClass).then(function () {
	            if (!stopped) {
	              removeClassFn();
	            }
	            done();
	          });
	        }
	        return function () {
	          stopped = true;
	        };
	      }
	      done();
	    }
	  };

	}])


	;

	angular.module('ui.bootstrap.dateparser', [])

	.service('dateParser', ['$log', '$locale', 'orderByFilter', function($log, $locale, orderByFilter) {
	  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
	  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

	  this.parsers = {};

	  var formatCodeToRegex = {
	    'yyyy': {
	      regex: '\\d{4}',
	      apply: function(value) { this.year = +value; }
	    },
	    'yy': {
	      regex: '\\d{2}',
	      apply: function(value) { this.year = +value + 2000; }
	    },
	    'y': {
	      regex: '\\d{1,4}',
	      apply: function(value) { this.year = +value; }
	    },
	    'MMMM': {
	      regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
	      apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); }
	    },
	    'MMM': {
	      regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
	      apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); }
	    },
	    'MM': {
	      regex: '0[1-9]|1[0-2]',
	      apply: function(value) { this.month = value - 1; }
	    },
	    'M': {
	      regex: '[1-9]|1[0-2]',
	      apply: function(value) { this.month = value - 1; }
	    },
	    'dd': {
	      regex: '[0-2][0-9]{1}|3[0-1]{1}',
	      apply: function(value) { this.date = +value; }
	    },
	    'd': {
	      regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
	      apply: function(value) { this.date = +value; }
	    },
	    'EEEE': {
	      regex: $locale.DATETIME_FORMATS.DAY.join('|')
	    },
	    'EEE': {
	      regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')
	    },
	    'HH': {
	      regex: '(?:0|1)[0-9]|2[0-3]',
	      apply: function(value) { this.hours = +value; }
	    },
	    'hh': {
	      regex: '0[0-9]|1[0-2]',
	      apply: function(value) { this.hours = +value; }
	    },
	    'H': {
	      regex: '1?[0-9]|2[0-3]',
	      apply: function(value) { this.hours = +value; }
	    },
	    'mm': {
	      regex: '[0-5][0-9]',
	      apply: function(value) { this.minutes = +value; }
	    },
	    'm': {
	      regex: '[0-9]|[1-5][0-9]',
	      apply: function(value) { this.minutes = +value; }
	    },
	    'sss': {
	      regex: '[0-9][0-9][0-9]',
	      apply: function(value) { this.milliseconds = +value; }
	    },
	    'ss': {
	      regex: '[0-5][0-9]',
	      apply: function(value) { this.seconds = +value; }
	    },
	    's': {
	      regex: '[0-9]|[1-5][0-9]',
	      apply: function(value) { this.seconds = +value; }
	    },
	    'a': {
	      regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
	      apply: function(value) {
	        if (this.hours === 12) {
	          this.hours = 0;
	        }

	        if (value === 'PM') {
	          this.hours += 12;
	        }
	      }
	    }
	  };

	  function createParser(format) {
	    var map = [], regex = format.split('');

	    angular.forEach(formatCodeToRegex, function(data, code) {
	      var index = format.indexOf(code);

	      if (index > -1) {
	        format = format.split('');

	        regex[index] = '(' + data.regex + ')';
	        format[index] = '$'; // Custom symbol to define consumed part of format
	        for (var i = index + 1, n = index + code.length; i < n; i++) {
	          regex[i] = '';
	          format[i] = '$';
	        }
	        format = format.join('');

	        map.push({ index: index, apply: data.apply });
	      }
	    });

	    return {
	      regex: new RegExp('^' + regex.join('') + '$'),
	      map: orderByFilter(map, 'index')
	    };
	  }

	  this.parse = function(input, format, baseDate) {
	    if ( !angular.isString(input) || !format ) {
	      return input;
	    }

	    format = $locale.DATETIME_FORMATS[format] || format;
	    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

	    if ( !this.parsers[format] ) {
	      this.parsers[format] = createParser(format);
	    }

	    var parser = this.parsers[format],
	        regex = parser.regex,
	        map = parser.map,
	        results = input.match(regex);

	    if ( results && results.length ) {
	      var fields, dt;
	      if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
	        fields = {
	          year: baseDate.getFullYear(),
	          month: baseDate.getMonth(),
	          date: baseDate.getDate(),
	          hours: baseDate.getHours(),
	          minutes: baseDate.getMinutes(),
	          seconds: baseDate.getSeconds(),
	          milliseconds: baseDate.getMilliseconds()
	        };
	      } else {
	        if (baseDate) {
	          $log.warn('dateparser:', 'baseDate is not a valid date');
	        }
	        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
	      }

	      for( var i = 1, n = results.length; i < n; i++ ) {
	        var mapper = map[i-1];
	        if ( mapper.apply ) {
	          mapper.apply.call(fields, results[i]);
	        }
	      }

	      if ( isValid(fields.year, fields.month, fields.date) ) {
	        dt = new Date(fields.year, fields.month, fields.date, fields.hours, fields.minutes, fields.seconds,
	          fields.milliseconds || 0);
	      }

	      return dt;
	    }
	  };

	  // Check if date is valid for specific month (and year for February).
	  // Month: 0 = Jan, 1 = Feb, etc
	  function isValid(year, month, date) {
	    if (date < 1) {
	      return false;
	    }

	    if ( month === 1 && date > 28) {
	        return date === 29 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
	    }

	    if ( month === 3 || month === 5 || month === 8 || month === 10) {
	        return date < 31;
	    }

	    return true;
	  }
	}]);

	angular.module('ui.bootstrap.position', [])

	/**
	 * A set of utility methods that can be use to retrieve position of DOM elements.
	 * It is meant to be used where we need to absolute-position DOM elements in
	 * relation to other, existing elements (this is the case for tooltips, popovers,
	 * typeahead suggestions etc.).
	 */
	  .factory('$position', ['$document', '$window', function ($document, $window) {

	    function getStyle(el, cssprop) {
	      if (el.currentStyle) { //IE
	        return el.currentStyle[cssprop];
	      } else if ($window.getComputedStyle) {
	        return $window.getComputedStyle(el)[cssprop];
	      }
	      // finally try and get inline style
	      return el.style[cssprop];
	    }

	    /**
	     * Checks if a given element is statically positioned
	     * @param element - raw DOM element
	     */
	    function isStaticPositioned(element) {
	      return (getStyle(element, 'position') || 'static' ) === 'static';
	    }

	    /**
	     * returns the closest, non-statically positioned parentOffset of a given element
	     * @param element
	     */
	    var parentOffsetEl = function (element) {
	      var docDomEl = $document[0];
	      var offsetParent = element.offsetParent || docDomEl;
	      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
	        offsetParent = offsetParent.offsetParent;
	      }
	      return offsetParent || docDomEl;
	    };

	    return {
	      /**
	       * Provides read-only equivalent of jQuery's position function:
	       * http://api.jquery.com/position/
	       */
	      position: function (element) {
	        var elBCR = this.offset(element);
	        var offsetParentBCR = { top: 0, left: 0 };
	        var offsetParentEl = parentOffsetEl(element[0]);
	        if (offsetParentEl != $document[0]) {
	          offsetParentBCR = this.offset(angular.element(offsetParentEl));
	          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
	          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
	        }

	        var boundingClientRect = element[0].getBoundingClientRect();
	        return {
	          width: boundingClientRect.width || element.prop('offsetWidth'),
	          height: boundingClientRect.height || element.prop('offsetHeight'),
	          top: elBCR.top - offsetParentBCR.top,
	          left: elBCR.left - offsetParentBCR.left
	        };
	      },

	      /**
	       * Provides read-only equivalent of jQuery's offset function:
	       * http://api.jquery.com/offset/
	       */
	      offset: function (element) {
	        var boundingClientRect = element[0].getBoundingClientRect();
	        return {
	          width: boundingClientRect.width || element.prop('offsetWidth'),
	          height: boundingClientRect.height || element.prop('offsetHeight'),
	          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
	          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
	        };
	      },

	      /**
	       * Provides coordinates for the targetEl in relation to hostEl
	       */
	      positionElements: function (hostEl, targetEl, positionStr, appendToBody) {

	        var positionStrParts = positionStr.split('-');
	        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';

	        var hostElPos,
	          targetElWidth,
	          targetElHeight,
	          targetElPos;

	        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);

	        targetElWidth = targetEl.prop('offsetWidth');
	        targetElHeight = targetEl.prop('offsetHeight');

	        var shiftWidth = {
	          center: function () {
	            return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
	          },
	          left: function () {
	            return hostElPos.left;
	          },
	          right: function () {
	            return hostElPos.left + hostElPos.width;
	          }
	        };

	        var shiftHeight = {
	          center: function () {
	            return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
	          },
	          top: function () {
	            return hostElPos.top;
	          },
	          bottom: function () {
	            return hostElPos.top + hostElPos.height;
	          }
	        };

	        switch (pos0) {
	          case 'right':
	            targetElPos = {
	              top: shiftHeight[pos1](),
	              left: shiftWidth[pos0]()
	            };
	            break;
	          case 'left':
	            targetElPos = {
	              top: shiftHeight[pos1](),
	              left: hostElPos.left - targetElWidth
	            };
	            break;
	          case 'bottom':
	            targetElPos = {
	              top: shiftHeight[pos0](),
	              left: shiftWidth[pos1]()
	            };
	            break;
	          default:
	            targetElPos = {
	              top: hostElPos.top - targetElHeight,
	              left: shiftWidth[pos1]()
	            };
	            break;
	        }

	        return targetElPos;
	      }
	    };
	  }]);

	angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.position'])

	.value('$datepickerSuppressError', false)

	.constant('datepickerConfig', {
	  formatDay: 'dd',
	  formatMonth: 'MMMM',
	  formatYear: 'yyyy',
	  formatDayHeader: 'EEE',
	  formatDayTitle: 'MMMM yyyy',
	  formatMonthTitle: 'yyyy',
	  datepickerMode: 'day',
	  minMode: 'day',
	  maxMode: 'year',
	  showWeeks: true,
	  startingDay: 0,
	  yearRange: 20,
	  minDate: null,
	  maxDate: null,
	  shortcutPropagation: false
	})

	.controller('DatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$log', 'dateFilter', 'datepickerConfig', '$datepickerSuppressError', function($scope, $attrs, $parse, $interpolate, $log, dateFilter, datepickerConfig, $datepickerSuppressError) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl;

	  // Modes chain
	  this.modes = ['day', 'month', 'year'];

	  // Configuration attributes
	  angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle',
	                   'showWeeks', 'startingDay', 'yearRange', 'shortcutPropagation'], function( key, index ) {
	    self[key] = angular.isDefined($attrs[key]) ? (index < 6 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
	  });

	  // Watchable date attributes
	  angular.forEach(['minDate', 'maxDate'], function( key ) {
	    if ( $attrs[key] ) {
	      $scope.$parent.$watch($parse($attrs[key]), function(value) {
	        self[key] = value ? new Date(value) : null;
	        self.refreshView();
	      });
	    } else {
	      self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
	    }
	  });

	  angular.forEach(['minMode', 'maxMode'], function( key ) {
	    if ( $attrs[key] ) {
	      $scope.$parent.$watch($parse($attrs[key]), function(value) {
	        self[key] = angular.isDefined(value) ? value : $attrs[key];
	        $scope[key] = self[key];
	        if ((key == 'minMode' && self.modes.indexOf( $scope.datepickerMode ) < self.modes.indexOf( self[key] )) || (key == 'maxMode' && self.modes.indexOf( $scope.datepickerMode ) > self.modes.indexOf( self[key] ))) {
	          $scope.datepickerMode = self[key];
	        }
	      });
	    } else {
	      self[key] = datepickerConfig[key] || null;
	      $scope[key] = self[key];
	    }
	  });

	  $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
	  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

	  if(angular.isDefined($attrs.initDate)) {
	    this.activeDate = $scope.$parent.$eval($attrs.initDate) || new Date();
	    $scope.$parent.$watch($attrs.initDate, function(initDate){
	      if(initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)){
	        self.activeDate = initDate;
	        self.refreshView();
	      }
	    });
	  } else {
	    this.activeDate =  new Date();
	  }

	  $scope.isActive = function(dateObject) {
	    if (self.compare(dateObject.date, self.activeDate) === 0) {
	      $scope.activeDateId = dateObject.uid;
	      return true;
	    }
	    return false;
	  };

	  this.init = function( ngModelCtrl_ ) {
	    ngModelCtrl = ngModelCtrl_;

	    ngModelCtrl.$render = function() {
	      self.render();
	    };
	  };

	  this.render = function() {
	    if ( ngModelCtrl.$viewValue ) {
	      var date = new Date( ngModelCtrl.$viewValue ),
	          isValid = !isNaN(date);

	      if ( isValid ) {
	        this.activeDate = date;
	      } else if ( !$datepickerSuppressError ) {
	        $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	      }
	    }
	    this.refreshView();
	  };

	  this.refreshView = function() {
	    if ( this.element ) {
	      this._refreshView();

	      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	      ngModelCtrl.$setValidity('dateDisabled', !date || (this.element && !this.isDisabled(date)));
	    }
	  };

	  this.createDateObject = function(date, format) {
	    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	    return {
	      date: date,
	      label: dateFilter(date, format),
	      selected: model && this.compare(date, model) === 0,
	      disabled: this.isDisabled(date),
	      current: this.compare(date, new Date()) === 0,
	      customClass: this.customClass(date)
	    };
	  };

	  this.isDisabled = function( date ) {
	    return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode})));
	  };

	  this.customClass = function( date ) {
	    return $scope.customClass({date: date, mode: $scope.datepickerMode});
	  };

	  // Split array into smaller arrays
	  this.split = function(arr, size) {
	    var arrays = [];
	    while (arr.length > 0) {
	      arrays.push(arr.splice(0, size));
	    }
	    return arrays;
	  };

	  // Fix a hard-reprodusible bug with timezones
	  // The bug depends on OS, browser, current timezone and current date
	  // i.e.
	  // var date = new Date(2014, 0, 1);
	  // console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
	  // can result in "2013 11 31 23" because of the bug.
	  this.fixTimeZone = function(date) {
	    var hours = date.getHours();
	    date.setHours(hours === 23 ? hours + 2 : 0);
	  };

	  $scope.select = function( date ) {
	    if ( $scope.datepickerMode === self.minMode ) {
	      var dt = ngModelCtrl.$viewValue ? new Date( ngModelCtrl.$viewValue ) : new Date(0, 0, 0, 0, 0, 0, 0);
	      dt.setFullYear( date.getFullYear(), date.getMonth(), date.getDate() );
	      ngModelCtrl.$setViewValue( dt );
	      ngModelCtrl.$render();
	    } else {
	      self.activeDate = date;
	      $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) - 1 ];
	    }
	  };

	  $scope.move = function( direction ) {
	    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
	        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
	    self.activeDate.setFullYear(year, month, 1);
	    self.refreshView();
	  };

	  $scope.toggleMode = function( direction ) {
	    direction = direction || 1;

	    if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
	      return;
	    }

	    $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) + direction ];
	  };

	  // Key event mapper
	  $scope.keys = { 13:'enter', 32:'space', 33:'pageup', 34:'pagedown', 35:'end', 36:'home', 37:'left', 38:'up', 39:'right', 40:'down' };

	  var focusElement = function() {
	    self.element[0].focus();
	  };

	  // Listen for focus requests from popup directive
	  $scope.$on('datepicker.focus', focusElement);

	  $scope.keydown = function( evt ) {
	    var key = $scope.keys[evt.which];

	    if ( !key || evt.shiftKey || evt.altKey ) {
	      return;
	    }

	    evt.preventDefault();
	    if(!self.shortcutPropagation){
	        evt.stopPropagation();
	    }

	    if (key === 'enter' || key === 'space') {
	      if ( self.isDisabled(self.activeDate)) {
	        return; // do nothing
	      }
	      $scope.select(self.activeDate);
	      focusElement();
	    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
	      $scope.toggleMode(key === 'up' ? 1 : -1);
	      focusElement();
	    } else {
	      self.handleKeyDown(key, evt);
	      self.refreshView();
	    }
	  };
	}])

	.directive( 'datepicker', function () {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/datepicker/datepicker.html';
	    },
	    scope: {
	      datepickerMode: '=?',
	      dateDisabled: '&',
	      customClass: '&',
	      shortcutPropagation: '&?'
	    },
	    require: ['datepicker', '^ngModel'],
	    controller: 'DatepickerController',
	    controllerAs: 'datepicker',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      datepickerCtrl.init(ngModelCtrl);
	    }
	  };
	})

	.directive('daypicker', ['dateFilter', function (dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/day.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      scope.showWeeks = ctrl.showWeeks;

	      ctrl.step = { months: 1 };
	      ctrl.element = element;

	      var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	      function getDaysInMonth( year, month ) {
	        return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
	      }

	      function getDates(startDate, n) {
	        var dates = new Array(n), current = new Date(startDate), i = 0, date;
	        while ( i < n ) {
	          date = new Date(current);
	          ctrl.fixTimeZone(date);
	          dates[i++] = date;
	          current.setDate( current.getDate() + 1 );
	        }
	        return dates;
	      }

	      ctrl._refreshView = function() {
	        var year = ctrl.activeDate.getFullYear(),
	          month = ctrl.activeDate.getMonth(),
	          firstDayOfMonth = new Date(year, month, 1),
	          difference = ctrl.startingDay - firstDayOfMonth.getDay(),
	          numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : - difference,
	          firstDate = new Date(firstDayOfMonth);

	        if ( numDisplayedFromPreviousMonth > 0 ) {
	          firstDate.setDate( - numDisplayedFromPreviousMonth + 1 );
	        }

	        // 42 is the number of days on a six-month calendar
	        var days = getDates(firstDate, 42);
	        for (var i = 0; i < 42; i ++) {
	          days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
	            secondary: days[i].getMonth() !== month,
	            uid: scope.uniqueId + '-' + i
	          });
	        }

	        scope.labels = new Array(7);
	        for (var j = 0; j < 7; j++) {
	          scope.labels[j] = {
	            abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
	            full: dateFilter(days[j].date, 'EEEE')
	          };
	        }

	        scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle);
	        scope.rows = ctrl.split(days, 7);

	        if ( scope.showWeeks ) {
	          scope.weekNumbers = [];
	          var thursdayIndex = (4 + 7 - ctrl.startingDay) % 7,
	              numWeeks = scope.rows.length;
	          for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
	            scope.weekNumbers.push(
	              getISO8601WeekNumber( scope.rows[curWeek][thursdayIndex].date ));
	          }
	        }
	      };

	      ctrl.compare = function(date1, date2) {
	        return (new Date( date1.getFullYear(), date1.getMonth(), date1.getDate() ) - new Date( date2.getFullYear(), date2.getMonth(), date2.getDate() ) );
	      };

	      function getISO8601WeekNumber(date) {
	        var checkDate = new Date(date);
	        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
	        var time = checkDate.getTime();
	        checkDate.setMonth(0); // Compare with Jan 1
	        checkDate.setDate(1);
	        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	      }

	      ctrl.handleKeyDown = function( key, evt ) {
	        var date = ctrl.activeDate.getDate();

	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 7;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 7;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
	          ctrl.activeDate.setMonth(month, 1);
	          date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
	        } else if (key === 'home') {
	          date = 1;
	        } else if (key === 'end') {
	          date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
	        }
	        ctrl.activeDate.setDate(date);
	      };

	      ctrl.refreshView();
	    }
	  };
	}])

	.directive('monthpicker', ['dateFilter', function (dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/month.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      ctrl.step = { years: 1 };
	      ctrl.element = element;

	      ctrl._refreshView = function() {
	        var months = new Array(12),
	            year = ctrl.activeDate.getFullYear(),
	            date;

	        for ( var i = 0; i < 12; i++ ) {
	          date = new Date(year, i, 1);
	          ctrl.fixTimeZone(date);
	          months[i] = angular.extend(ctrl.createDateObject(date, ctrl.formatMonth), {
	            uid: scope.uniqueId + '-' + i
	          });
	        }

	        scope.title = dateFilter(ctrl.activeDate, ctrl.formatMonthTitle);
	        scope.rows = ctrl.split(months, 3);
	      };

	      ctrl.compare = function(date1, date2) {
	        return new Date( date1.getFullYear(), date1.getMonth() ) - new Date( date2.getFullYear(), date2.getMonth() );
	      };

	      ctrl.handleKeyDown = function( key, evt ) {
	        var date = ctrl.activeDate.getMonth();

	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 3;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 3;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          var year = ctrl.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
	          ctrl.activeDate.setFullYear(year);
	        } else if (key === 'home') {
	          date = 0;
	        } else if (key === 'end') {
	          date = 11;
	        }
	        ctrl.activeDate.setMonth(date);
	      };

	      ctrl.refreshView();
	    }
	  };
	}])

	.directive('yearpicker', ['dateFilter', function (dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/year.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      var range = ctrl.yearRange;

	      ctrl.step = { years: range };
	      ctrl.element = element;

	      function getStartingYear( year ) {
	        return parseInt((year - 1) / range, 10) * range + 1;
	      }

	      ctrl._refreshView = function() {
	        var years = new Array(range), date;

	        for ( var i = 0, start = getStartingYear(ctrl.activeDate.getFullYear()); i < range; i++ ) {
	          date = new Date(start + i, 0, 1);
	          ctrl.fixTimeZone(date);
	          years[i] = angular.extend(ctrl.createDateObject(date, ctrl.formatYear), {
	            uid: scope.uniqueId + '-' + i
	          });
	        }

	        scope.title = [years[0].label, years[range - 1].label].join(' - ');
	        scope.rows = ctrl.split(years, 5);
	      };

	      ctrl.compare = function(date1, date2) {
	        return date1.getFullYear() - date2.getFullYear();
	      };

	      ctrl.handleKeyDown = function( key, evt ) {
	        var date = ctrl.activeDate.getFullYear();

	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 5;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 5;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          date += (key === 'pageup' ? - 1 : 1) * ctrl.step.years;
	        } else if (key === 'home') {
	          date = getStartingYear( ctrl.activeDate.getFullYear() );
	        } else if (key === 'end') {
	          date = getStartingYear( ctrl.activeDate.getFullYear() ) + range - 1;
	        }
	        ctrl.activeDate.setFullYear(date);
	      };

	      ctrl.refreshView();
	    }
	  };
	}])

	.constant('datepickerPopupConfig', {
	  datepickerPopup: 'yyyy-MM-dd',
	  datepickerPopupTemplateUrl: 'template/datepicker/popup.html',
	  datepickerTemplateUrl: 'template/datepicker/datepicker.html',
	  html5Types: {
	    date: 'yyyy-MM-dd',
	    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
	    'month': 'yyyy-MM'
	  },
	  currentText: 'Today',
	  clearText: 'Clear',
	  closeText: 'Done',
	  closeOnDateSelection: true,
	  appendToBody: false,
	  showButtonBar: true,
	  onOpenFocus: true
	})

	.directive('datepickerPopup', ['$compile', '$parse', '$document', '$rootScope', '$position', 'dateFilter', 'dateParser', 'datepickerPopupConfig', '$timeout',
	function ($compile, $parse, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout) {
	  return {
	    restrict: 'EA',
	    require: 'ngModel',
	    scope: {
	      isOpen: '=?',
	      currentText: '@',
	      clearText: '@',
	      closeText: '@',
	      dateDisabled: '&',
	      customClass: '&'
	    },
	    link: function(scope, element, attrs, ngModel) {
	      var dateFormat,
	          closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection,
	          appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody,
	          onOpenFocus = angular.isDefined(attrs.onOpenFocus) ? scope.$parent.$eval(attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus,
	          datepickerPopupTemplateUrl = angular.isDefined(attrs.datepickerPopupTemplateUrl) ? attrs.datepickerPopupTemplateUrl : datepickerPopupConfig.datepickerPopupTemplateUrl,
	          datepickerTemplateUrl = angular.isDefined(attrs.datepickerTemplateUrl) ? attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;

	      scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;

	      scope.getText = function( key ) {
	        return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
	      };

	      var isHtml5DateInput = false;
	      if (datepickerPopupConfig.html5Types[attrs.type]) {
	        dateFormat = datepickerPopupConfig.html5Types[attrs.type];
	        isHtml5DateInput = true;
	      } else {
	        dateFormat = attrs.datepickerPopup || datepickerPopupConfig.datepickerPopup;
	        attrs.$observe('datepickerPopup', function(value, oldValue) {
	            var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
	            // Invalidate the $modelValue to ensure that formatters re-run
	            // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
	            if (newDateFormat !== dateFormat) {
	              dateFormat = newDateFormat;
	              ngModel.$modelValue = null;

	              if (!dateFormat) {
	                throw new Error('datepickerPopup must have a date format specified.');
	              }
	            }
	        });
	      }

	      if (!dateFormat) {
	        throw new Error('datepickerPopup must have a date format specified.');
	      }

	      if (isHtml5DateInput && attrs.datepickerPopup) {
	        throw new Error('HTML5 date input types do not support custom formats.');
	      }

	      // popup element used to display calendar
	      var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
	      popupEl.attr({
	        'ng-model': 'date',
	        'ng-change': 'dateSelection(date)',
	        'template-url': datepickerPopupTemplateUrl
	      });

	      function cameltoDash( string ){
	        return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
	      }

	      // datepicker element
	      var datepickerEl = angular.element(popupEl.children()[0]);
	      datepickerEl.attr('template-url', datepickerTemplateUrl);

	      if (isHtml5DateInput) {
	        if (attrs.type == 'month') {
	          datepickerEl.attr('datepicker-mode', '"month"');
	          datepickerEl.attr('min-mode', 'month');
	        }
	      }

	      if ( attrs.datepickerOptions ) {
	        var options = scope.$parent.$eval(attrs.datepickerOptions);
	        if(options && options.initDate) {
	          scope.initDate = options.initDate;
	          datepickerEl.attr( 'init-date', 'initDate' );
	          delete options.initDate;
	        }
	        angular.forEach(options, function( value, option ) {
	          datepickerEl.attr( cameltoDash(option), value );
	        });
	      }

	      scope.watchData = {};
	      angular.forEach(['minMode', 'maxMode', 'minDate', 'maxDate', 'datepickerMode', 'initDate', 'shortcutPropagation'], function( key ) {
	        if ( attrs[key] ) {
	          var getAttribute = $parse(attrs[key]);
	          scope.$parent.$watch(getAttribute, function(value){
	            scope.watchData[key] = value;
	          });
	          datepickerEl.attr(cameltoDash(key), 'watchData.' + key);

	          // Propagate changes from datepicker to outside
	          if ( key === 'datepickerMode' ) {
	            var setAttribute = getAttribute.assign;
	            scope.$watch('watchData.' + key, function(value, oldvalue) {
	              if ( angular.isFunction(setAttribute) && value !== oldvalue ) {
	                setAttribute(scope.$parent, value);
	              }
	            });
	          }
	        }
	      });
	      if (attrs.dateDisabled) {
	        datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
	      }

	      if (attrs.showWeeks) {
	        datepickerEl.attr('show-weeks', attrs.showWeeks);
	      }

	      if (attrs.customClass){
	        datepickerEl.attr('custom-class', 'customClass({ date: date, mode: mode })');
	      }

	      function parseDate(viewValue) {
	        if (angular.isNumber(viewValue)) {
	          // presumably timestamp to date object
	          viewValue = new Date(viewValue);
	        }

	        if (!viewValue) {
	          return null;
	        } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
	          return viewValue;
	        } else if (angular.isString(viewValue)) {
	          var date = dateParser.parse(viewValue, dateFormat, scope.date);
	          if (isNaN(date)) {
	            return undefined;
	          } else {
	            return date;
	          }
	        } else {
	          return undefined;
	        }
	      }

	      function validator(modelValue, viewValue) {
	        var value = modelValue || viewValue;

	        if (!attrs.ngRequired && !value) {
	          return true;
	        }

	        if (angular.isNumber(value)) {
	          value = new Date(value);
	        }
	        if (!value) {
	          return true;
	        } else if (angular.isDate(value) && !isNaN(value)) {
	          return true;
	        } else if (angular.isString(value)) {
	          var date = dateParser.parse(value, dateFormat);
	          return !isNaN(date);
	        } else {
	          return false;
	        }
	      }

	      if (!isHtml5DateInput) {
	        // Internal API to maintain the correct ng-invalid-[key] class
	        ngModel.$$parserName = 'date';
	        ngModel.$validators.date = validator;
	        ngModel.$parsers.unshift(parseDate);
	        ngModel.$formatters.push(function (value) {
	          scope.date = value;
	          return ngModel.$isEmpty(value) ? value : dateFilter(value, dateFormat);
	        });
	      }
	      else {
	        ngModel.$formatters.push(function (value) {
	          scope.date = value;
	          return value;
	        });
	      }

	      // Inner change
	      scope.dateSelection = function(dt) {
	        if (angular.isDefined(dt)) {
	          scope.date = dt;
	        }
	        var date = scope.date ? dateFilter(scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
	        element.val(date);
	        ngModel.$setViewValue(date);

	        if ( closeOnDateSelection ) {
	          scope.isOpen = false;
	          element[0].focus();
	        }
	      };

	      // Detect changes in the view from the text box
	      ngModel.$viewChangeListeners.push(function () {
	        scope.date = dateParser.parse(ngModel.$viewValue, dateFormat, scope.date);
	      });

	      var documentClickBind = function(event) {
	        if (scope.isOpen && !element[0].contains(event.target)) {
	          scope.$apply(function() {
	            scope.isOpen = false;
	          });
	        }
	      };

	      var inputKeydownBind = function(evt) {
	        if (evt.which === 27 && scope.isOpen) {
	          evt.preventDefault();
	          evt.stopPropagation();
	          scope.$apply(function() {
	            scope.isOpen = false;
	          });
	          element[0].focus();
	        } else if (evt.which === 40 && !scope.isOpen) {
	          evt.preventDefault();
	          evt.stopPropagation();
	          scope.$apply(function() {
	            scope.isOpen = true;
	          });
	        }
	      };
	      element.bind('keydown', inputKeydownBind);

	      scope.keydown = function(evt) {
	        if (evt.which === 27) {
	          scope.isOpen = false;
	          element[0].focus();
	        }
	      };

	      scope.$watch('isOpen', function(value) {
	        if (value) {
	          scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	          scope.position.top = scope.position.top + element.prop('offsetHeight');

	          $timeout(function() {
	            if (onOpenFocus) {
	              scope.$broadcast('datepicker.focus');
	            }
	            $document.bind('click', documentClickBind);
	          }, 0, false);
	        } else {
	          $document.unbind('click', documentClickBind);
	        }
	      });

	      scope.select = function( date ) {
	        if (date === 'today') {
	          var today = new Date();
	          if (angular.isDate(scope.date)) {
	            date = new Date(scope.date);
	            date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
	          } else {
	            date = new Date(today.setHours(0, 0, 0, 0));
	          }
	        }
	        scope.dateSelection( date );
	      };

	      scope.close = function() {
	        scope.isOpen = false;
	        element[0].focus();
	      };

	      var $popup = $compile(popupEl)(scope);
	      // Prevent jQuery cache memory leak (template is now redundant after linking)
	      popupEl.remove();

	      if ( appendToBody ) {
	        $document.find('body').append($popup);
	      } else {
	        element.after($popup);
	      }

	      scope.$on('$destroy', function() {
	        if (scope.isOpen === true) {
	          if (!$rootScope.$$phase) {
	            scope.$apply(function() {
	              scope.isOpen = false;
	            });
	          }
	        }

	        $popup.remove();
	        element.unbind('keydown', inputKeydownBind);
	        $document.unbind('click', documentClickBind);
	      });
	    }
	  };
	}])

	.directive('datepickerPopupWrap', function() {
	  return {
	    restrict:'EA',
	    replace: true,
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/datepicker/popup.html';
	    }
	  };
	});

	angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])

	.constant('dropdownConfig', {
	  openClass: 'open'
	})

	.service('dropdownService', ['$document', '$rootScope', function($document, $rootScope) {
	  var openScope = null;

	  this.open = function( dropdownScope ) {
	    if ( !openScope ) {
	      $document.bind('click', closeDropdown);
	      $document.bind('keydown', keybindFilter);
	    }

	    if ( openScope && openScope !== dropdownScope ) {
	      openScope.isOpen = false;
	    }

	    openScope = dropdownScope;
	  };

	  this.close = function( dropdownScope ) {
	    if ( openScope === dropdownScope ) {
	      openScope = null;
	      $document.unbind('click', closeDropdown);
	      $document.unbind('keydown', keybindFilter);
	    }
	  };

	  var closeDropdown = function( evt ) {
	    // This method may still be called during the same mouse event that
	    // unbound this event handler. So check openScope before proceeding.
	    if (!openScope) { return; }

	    if( evt && openScope.getAutoClose() === 'disabled' )  { return ; }

	    var toggleElement = openScope.getToggleElement();
	    if ( evt && toggleElement && toggleElement[0].contains(evt.target) ) {
	      return;
	    }

	    var dropdownElement = openScope.getDropdownElement();
	    if (evt && openScope.getAutoClose() === 'outsideClick' &&
	      dropdownElement && dropdownElement[0].contains(evt.target)) {
	      return;
	    }

	    openScope.isOpen = false;

	    if (!$rootScope.$$phase) {
	      openScope.$apply();
	    }
	  };

	  var keybindFilter = function( evt ) {
	    if ( evt.which === 27 ) {
	      openScope.focusToggleElement();
	      closeDropdown();
	    }
	    else if ( openScope.isKeynavEnabled() && /(38|40)/.test(evt.which) && openScope.isOpen ) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      openScope.focusDropdownEntry(evt.which);
	    }
	  };
	}])

	.controller('DropdownController', ['$scope', '$attrs', '$parse', 'dropdownConfig', 'dropdownService', '$animate', '$position', '$document', '$compile', '$templateRequest', function($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate, $position, $document, $compile, $templateRequest) {
	  var self = this,
	    scope = $scope.$new(), // create a child scope so we are not polluting original one
		templateScope,
	    openClass = dropdownConfig.openClass,
	    getIsOpen,
	    setIsOpen = angular.noop,
	    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
	    appendToBody = false,
	    keynavEnabled =false,
	    selectedOption = null;

	  this.init = function( element ) {
	    self.$element = element;

	    if ( $attrs.isOpen ) {
	      getIsOpen = $parse($attrs.isOpen);
	      setIsOpen = getIsOpen.assign;

	      $scope.$watch(getIsOpen, function(value) {
	        scope.isOpen = !!value;
	      });
	    }

	    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
	    keynavEnabled = angular.isDefined($attrs.keyboardNav);

	    if ( appendToBody && self.dropdownMenu ) {
	      $document.find('body').append( self.dropdownMenu );
	      element.on('$destroy', function handleDestroyEvent() {
	        self.dropdownMenu.remove();
	      });
	    }
	  };

	  this.toggle = function( open ) {
	    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
	  };

	  // Allow other directives to watch status
	  this.isOpen = function() {
	    return scope.isOpen;
	  };

	  scope.getToggleElement = function() {
	    return self.toggleElement;
	  };

	  scope.getAutoClose = function() {
	    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
	  };

	  scope.getElement = function() {
	    return self.$element;
	  };

	  scope.isKeynavEnabled = function() {
	    return keynavEnabled;
	  };

	  scope.focusDropdownEntry = function(keyCode) {
	    var elems = self.dropdownMenu ? //If append to body is used.
	      (angular.element(self.dropdownMenu).find('a')) :
	      (angular.element(self.$element).find('ul').eq(0).find('a'));

	    switch (keyCode) {
	      case (40): {
	        if ( !angular.isNumber(self.selectedOption)) {
	          self.selectedOption = 0;
	        } else {
	          self.selectedOption = (self.selectedOption === elems.length -1 ?
	            self.selectedOption :
	            self.selectedOption + 1);
	        }
	        break;
	      }
	      case (38): {
	        if ( !angular.isNumber(self.selectedOption)) {
	          return;
	        } else {
	          self.selectedOption = (self.selectedOption === 0 ?
	            0 :
	            self.selectedOption - 1);
	        }
	        break;
	      }
	    }
	    elems[self.selectedOption].focus();
	  };

	  scope.getDropdownElement = function() {
	    return self.dropdownMenu;
	  };

	  scope.focusToggleElement = function() {
	    if ( self.toggleElement ) {
	      self.toggleElement[0].focus();
	    }
	  };

	  scope.$watch('isOpen', function( isOpen, wasOpen ) {
	    if (appendToBody && self.dropdownMenu) {
	        var pos = $position.positionElements(self.$element, self.dropdownMenu, 'bottom-left', true);
	        var css = {
	            top: pos.top + 'px',
	            display: isOpen ? 'block' : 'none'
	        };

	        var rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
	        if (!rightalign) {
	            css.left = pos.left + 'px';
	            css.right = 'auto';
	        } else {
	            css.left = 'auto';
	            css.right = (window.innerWidth - (pos.left + self.$element.prop('offsetWidth'))) + 'px';
	        }

	        self.dropdownMenu.css(css);
	    }

	    $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass).then(function() {
	        if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
	           toggleInvoker($scope, { open: !!isOpen });
	        }
	    });

	    if ( isOpen ) {
	      if (self.dropdownMenuTemplateUrl) {
	        $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
	          templateScope = scope.$new();
	          $compile(tplContent.trim())(templateScope, function(dropdownElement) {
	            var newEl = dropdownElement;
	            self.dropdownMenu.replaceWith(newEl);
	            self.dropdownMenu = newEl;
	          });
	        });
	      }

	      scope.focusToggleElement();
	      dropdownService.open( scope );
	    } else {
	      if (self.dropdownMenuTemplateUrl) {
	        if (templateScope) {
	          templateScope.$destroy();
	        }
	        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
	        self.dropdownMenu.replaceWith(newEl);
	        self.dropdownMenu = newEl;
	      }

	      dropdownService.close( scope );
	      self.selectedOption = null;
	    }

	    if (angular.isFunction(setIsOpen)) {
	      setIsOpen($scope, isOpen);
	    }
	  });

	  $scope.$on('$locationChangeSuccess', function() {
	    if (scope.getAutoClose() !== 'disabled') {
	      scope.isOpen = false;
	    }
	  });

	  $scope.$on('$destroy', function() {
	    scope.$destroy();
	  });
	}])

	.directive('dropdown', function() {
	  return {
	    controller: 'DropdownController',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      dropdownCtrl.init( element );
	      element.addClass('dropdown');
	    }
	  };
	})

	.directive('dropdownMenu', function() {
	  return {
	    restrict: 'AC',
	    require: '?^dropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl) {
	        return;
	      }
	      var tplUrl = attrs.templateUrl;
	      if (tplUrl) {
	        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
	      }
	      if (!dropdownCtrl.dropdownMenu) {
	        dropdownCtrl.dropdownMenu = element;
	      }
	    }
	  };
	})

	.directive('keyboardNav', function() {
	  return {
	    restrict: 'A',
	    require: '?^dropdown',
	    link: function (scope, element, attrs, dropdownCtrl) {

	      element.bind('keydown', function(e) {

	        if ([38, 40].indexOf(e.which) !== -1) {

	          e.preventDefault();
	          e.stopPropagation();

	          var elems = dropdownCtrl.dropdownMenu.find('a');

	          switch (e.which) {
	            case (40): { // Down
	              if ( !angular.isNumber(dropdownCtrl.selectedOption)) {
	                dropdownCtrl.selectedOption = 0;
	              } else {
	                dropdownCtrl.selectedOption = (dropdownCtrl.selectedOption === elems.length -1 ? dropdownCtrl.selectedOption : dropdownCtrl.selectedOption+1);
	              }

	            }
	            break;
	            case (38): { // Up
	              dropdownCtrl.selectedOption = (dropdownCtrl.selectedOption === 0 ? 0 : dropdownCtrl.selectedOption-1);
	            }
	            break;
	          }
	          elems[dropdownCtrl.selectedOption].focus();
	        }
	      });
	    }

	  };
	})

	.directive('dropdownToggle', function() {
	  return {
	    require: '?^dropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if ( !dropdownCtrl ) {
	        return;
	      }

	      element.addClass('dropdown-toggle');

	      dropdownCtrl.toggleElement = element;

	      var toggleDropdown = function(event) {
	        event.preventDefault();

	        if ( !element.hasClass('disabled') && !attrs.disabled ) {
	          scope.$apply(function() {
	            dropdownCtrl.toggle();
	          });
	        }
	      };

	      element.bind('click', toggleDropdown);

	      // WAI-ARIA
	      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
	      scope.$watch(dropdownCtrl.isOpen, function( isOpen ) {
	        element.attr('aria-expanded', !!isOpen);
	      });

	      scope.$on('$destroy', function() {
	        element.unbind('click', toggleDropdown);
	      });
	    }
	  };
	});

	angular.module('ui.bootstrap.modal', [])

	/**
	 * A helper, internal data structure that acts as a map but also allows getting / removing
	 * elements in the LIFO order
	 */
	  .factory('$$stackedMap', function () {
	    return {
	      createNew: function () {
	        var stack = [];

	        return {
	          add: function (key, value) {
	            stack.push({
	              key: key,
	              value: value
	            });
	          },
	          get: function (key) {
	            for (var i = 0; i < stack.length; i++) {
	              if (key == stack[i].key) {
	                return stack[i];
	              }
	            }
	          },
	          keys: function() {
	            var keys = [];
	            for (var i = 0; i < stack.length; i++) {
	              keys.push(stack[i].key);
	            }
	            return keys;
	          },
	          top: function () {
	            return stack[stack.length - 1];
	          },
	          remove: function (key) {
	            var idx = -1;
	            for (var i = 0; i < stack.length; i++) {
	              if (key == stack[i].key) {
	                idx = i;
	                break;
	              }
	            }
	            return stack.splice(idx, 1)[0];
	          },
	          removeTop: function () {
	            return stack.splice(stack.length - 1, 1)[0];
	          },
	          length: function () {
	            return stack.length;
	          }
	        };
	      }
	    };
	  })

	/**
	 * A helper directive for the $modal service. It creates a backdrop element.
	 */
	  .directive('modalBackdrop', [
	           '$animate', '$injector', '$modalStack',
	  function ($animate ,  $injector,   $modalStack) {
	    var $animateCss = null;

	    if ($injector.has('$animateCss')) {
	      $animateCss = $injector.get('$animateCss');
	    }

	    return {
	      restrict: 'EA',
	      replace: true,
	      templateUrl: 'template/modal/backdrop.html',
	      compile: function (tElement, tAttrs) {
	        tElement.addClass(tAttrs.backdropClass);
	        return linkFn;
	      }
	    };

	    function linkFn(scope, element, attrs) {
	      if (attrs.modalInClass) {
	        if ($animateCss) {
	          $animateCss(element, {
	            addClass: attrs.modalInClass
	          }).start();
	        } else {
	          $animate.addClass(element, attrs.modalInClass);
	        }

	        scope.$on($modalStack.NOW_CLOSING_EVENT, function (e, setIsAsync) {
	          var done = setIsAsync();
	          if ($animateCss) {
	            $animateCss(element, {
	              removeClass: attrs.modalInClass
	            }).start().then(done);
	          } else {
	            $animate.removeClass(element, attrs.modalInClass).then(done);
	          }
	        });
	      }
	    }
	  }])

	  .directive('modalWindow', [
	           '$modalStack', '$q', '$animate', '$injector',
	  function ($modalStack ,  $q ,  $animate,   $injector) {
	    var $animateCss = null;

	    if ($injector.has('$animateCss')) {
	      $animateCss = $injector.get('$animateCss');
	    }

	    return {
	      restrict: 'EA',
	      scope: {
	        index: '@'
	      },
	      replace: true,
	      transclude: true,
	      templateUrl: function(tElement, tAttrs) {
	        return tAttrs.templateUrl || 'template/modal/window.html';
	      },
	      link: function (scope, element, attrs) {
	        element.addClass(attrs.windowClass || '');
	        scope.size = attrs.size;

	        scope.close = function (evt) {
	          var modal = $modalStack.getTop();
	          if (modal && modal.value.backdrop && modal.value.backdrop != 'static' && (evt.target === evt.currentTarget)) {
	            evt.preventDefault();
	            evt.stopPropagation();
	            $modalStack.dismiss(modal.key, 'backdrop click');
	          }
	        };

	        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
	        // We can detect that by using this property in the template associated with this directive and then use
	        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
	        scope.$isRendered = true;

	        // Deferred object that will be resolved when this modal is render.
	        var modalRenderDeferObj = $q.defer();
	        // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
	        // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
	        attrs.$observe('modalRender', function (value) {
	          if (value == 'true') {
	            modalRenderDeferObj.resolve();
	          }
	        });

	        modalRenderDeferObj.promise.then(function () {
	          if (attrs.modalInClass) {
	            if ($animateCss) {
	              $animateCss(element, {
	                addClass: attrs.modalInClass
	              }).start();
	            } else {
	              $animate.addClass(element, attrs.modalInClass);
	            }

	            scope.$on($modalStack.NOW_CLOSING_EVENT, function (e, setIsAsync) {
	              var done = setIsAsync();
	              if ($animateCss) {
	                $animateCss(element, {
	                  removeClass: attrs.modalInClass
	                }).start().then(done);
	              } else {
	                $animate.removeClass(element, attrs.modalInClass).then(done);
	              }
	            });
	          }

	          var inputsWithAutofocus = element[0].querySelectorAll('[autofocus]');
	          /**
	           * Auto-focusing of a freshly-opened modal element causes any child elements
	           * with the autofocus attribute to lose focus. This is an issue on touch
	           * based devices which will show and then hide the onscreen keyboard.
	           * Attempts to refocus the autofocus element via JavaScript will not reopen
	           * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
	           * the modal element if the modal does not contain an autofocus element.
	           */
	          if (inputsWithAutofocus.length) {
	            inputsWithAutofocus[0].focus();
	          } else {
	            element[0].focus();
	          }

	          // Notify {@link $modalStack} that modal is rendered.
	          var modal = $modalStack.getTop();
	          if (modal) {
	            $modalStack.modalRendered(modal.key);
	          }
	        });
	      }
	    };
	  }])

	  .directive('modalAnimationClass', [
	    function () {
	      return {
	        compile: function (tElement, tAttrs) {
	          if (tAttrs.modalAnimation) {
	            tElement.addClass(tAttrs.modalAnimationClass);
	          }
	        }
	      };
	    }])

	  .directive('modalTransclude', function () {
	    return {
	      link: function($scope, $element, $attrs, controller, $transclude) {
	        $transclude($scope.$parent, function(clone) {
	          $element.empty();
	          $element.append(clone);
	        });
	      }
	    };
	  })

	  .factory('$modalStack', [
	             '$animate', '$timeout', '$document', '$compile', '$rootScope',
	             '$q',
	             '$injector',
	             '$$stackedMap',
	    function ($animate ,  $timeout ,  $document ,  $compile ,  $rootScope ,
	              $q,
	              $injector,
	              $$stackedMap) {
	      var $animateCss = null;

	      if ($injector.has('$animateCss')) {
	        $animateCss = $injector.get('$animateCss');
	      }

	      var OPENED_MODAL_CLASS = 'modal-open';

	      var backdropDomEl, backdropScope;
	      var openedWindows = $$stackedMap.createNew();
	      var $modalStack = {
	        NOW_CLOSING_EVENT: 'modal.stack.now-closing'
	      };

	      //Modal focus behavior
	      var focusableElementList;
	      var focusIndex = 0;
	      var tababbleSelector = 'a[href], area[href], input:not([disabled]), ' +
	        'button:not([disabled]),select:not([disabled]), textarea:not([disabled]), ' +
	        'iframe, object, embed, *[tabindex], *[contenteditable=true]';

	      function backdropIndex() {
	        var topBackdropIndex = -1;
	        var opened = openedWindows.keys();
	        for (var i = 0; i < opened.length; i++) {
	          if (openedWindows.get(opened[i]).value.backdrop) {
	            topBackdropIndex = i;
	          }
	        }
	        return topBackdropIndex;
	      }

	      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
	        if (backdropScope) {
	          backdropScope.index = newBackdropIndex;
	        }
	      });

	      function removeModalWindow(modalInstance, elementToReceiveFocus) {

	        var body = $document.find('body').eq(0);
	        var modalWindow = openedWindows.get(modalInstance).value;

	        //clean up the stack
	        openedWindows.remove(modalInstance);

	        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
	          body.toggleClass(modalInstance.openedClass || OPENED_MODAL_CLASS, openedWindows.length() > 0);
	        });
	        checkRemoveBackdrop();

	        //move focus to specified element if available, or else to body
	        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
	          elementToReceiveFocus.focus();
	        } else {
	          body.focus();
	        }
	      }

	      function checkRemoveBackdrop() {
	          //remove backdrop if no longer needed
	          if (backdropDomEl && backdropIndex() == -1) {
	            var backdropScopeRef = backdropScope;
	            removeAfterAnimate(backdropDomEl, backdropScope, function () {
	              backdropScopeRef = null;
	            });
	            backdropDomEl = undefined;
	            backdropScope = undefined;
	          }
	      }

	      function removeAfterAnimate(domEl, scope, done) {
	        var asyncDeferred;
	        var asyncPromise = null;
	        var setIsAsync = function () {
	          if (!asyncDeferred) {
	            asyncDeferred = $q.defer();
	            asyncPromise = asyncDeferred.promise;
	          }

	          return function asyncDone() {
	            asyncDeferred.resolve();
	          };
	        };
	        scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

	        // Note that it's intentional that asyncPromise might be null.
	        // That's when setIsAsync has not been called during the
	        // NOW_CLOSING_EVENT broadcast.
	        return $q.when(asyncPromise).then(afterAnimating);

	        function afterAnimating() {
	          if (afterAnimating.done) {
	            return;
	          }
	          afterAnimating.done = true;

	          if ($animateCss) {
	            $animateCss(domEl, {
	              event: 'leave'
	            }).start().then(function() {
	              domEl.remove();
	            });
	          } else {
	            $animate.leave(domEl);
	          }
	          scope.$destroy();
	          if (done) {
	            done();
	          }
	        }
	      }

	      $document.bind('keydown', function (evt) {
	        if (evt.isDefaultPrevented()) {
	          return evt;
	        }

	        var modal = openedWindows.top();
	        if (modal && modal.value.keyboard) {
	          switch (evt.which){
	            case 27: {
	              evt.preventDefault();
	              $rootScope.$apply(function () {
	                $modalStack.dismiss(modal.key, 'escape key press');
	              });
	              break;
	            }
	            case 9: {
	              $modalStack.loadFocusElementList(modal);
	              var focusChanged = false;
	              if (evt.shiftKey) {
	                if ($modalStack.isFocusInFirstItem(evt)) {
	                  focusChanged = $modalStack.focusLastFocusableElement();
	                }
	              } else {
	                if ($modalStack.isFocusInLastItem(evt)) {
	                  focusChanged = $modalStack.focusFirstFocusableElement();
	                }
	              }

	              if (focusChanged) {
	                evt.preventDefault();
	                evt.stopPropagation();
	              }
	              break;
	            }
	          }
	        }
	      });

	      $modalStack.open = function (modalInstance, modal) {

	        var modalOpener = $document[0].activeElement;

	        openedWindows.add(modalInstance, {
	          deferred: modal.deferred,
	          renderDeferred: modal.renderDeferred,
	          modalScope: modal.scope,
	          backdrop: modal.backdrop,
	          keyboard: modal.keyboard,
	          openedClass: modal.openedClass
	        });

	        var body = $document.find('body').eq(0),
	            currBackdropIndex = backdropIndex();

	        if (currBackdropIndex >= 0 && !backdropDomEl) {
	          backdropScope = $rootScope.$new(true);
	          backdropScope.index = currBackdropIndex;
	          var angularBackgroundDomEl = angular.element('<div modal-backdrop="modal-backdrop"></div>');
	          angularBackgroundDomEl.attr('backdrop-class', modal.backdropClass);
	          if (modal.animation) {
	            angularBackgroundDomEl.attr('modal-animation', 'true');
	          }
	          backdropDomEl = $compile(angularBackgroundDomEl)(backdropScope);
	          body.append(backdropDomEl);
	        }

	        var angularDomEl = angular.element('<div modal-window="modal-window"></div>');
	        angularDomEl.attr({
	          'template-url': modal.windowTemplateUrl,
	          'window-class': modal.windowClass,
	          'size': modal.size,
	          'index': openedWindows.length() - 1,
	          'animate': 'animate'
	        }).html(modal.content);
	        if (modal.animation) {
	          angularDomEl.attr('modal-animation', 'true');
	        }

	        var modalDomEl = $compile(angularDomEl)(modal.scope);
	        openedWindows.top().value.modalDomEl = modalDomEl;
	        openedWindows.top().value.modalOpener = modalOpener;
	        body.append(modalDomEl);
	        body.addClass(modal.openedClass || OPENED_MODAL_CLASS);
	        $modalStack.clearFocusListCache();
	      };

	      function broadcastClosing(modalWindow, resultOrReason, closing) {
	          return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
	      }

	      $modalStack.close = function (modalInstance, result) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.resolve(result);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };

	      $modalStack.dismiss = function (modalInstance, reason) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.reject(reason);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };

	      $modalStack.dismissAll = function (reason) {
	        var topModal = this.getTop();
	        while (topModal && this.dismiss(topModal.key, reason)) {
	          topModal = this.getTop();
	        }
	      };

	      $modalStack.getTop = function () {
	        return openedWindows.top();
	      };

	      $modalStack.modalRendered = function (modalInstance) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow) {
	          modalWindow.value.renderDeferred.resolve();
	        }
	      };

	      $modalStack.focusFirstFocusableElement = function() {
	        if (focusableElementList.length > 0) {
	          focusableElementList[0].focus();
	          return true;
	        }
	        return false;
	      };
	      $modalStack.focusLastFocusableElement = function() {
	        if (focusableElementList.length > 0) {
	          focusableElementList[focusableElementList.length - 1].focus();
	          return true;
	        }
	        return false;
	      };

	      $modalStack.isFocusInFirstItem = function(evt) {
	        if (focusableElementList.length > 0) {
	          return (evt.target || evt.srcElement) == focusableElementList[0];
	        }
	        return false;
	      };

	      $modalStack.isFocusInLastItem = function(evt) {
	        if (focusableElementList.length > 0) {
	          return (evt.target || evt.srcElement) == focusableElementList[focusableElementList.length - 1];
	        }
	        return false;
	      };

	      $modalStack.clearFocusListCache = function() {
	        focusableElementList = [];
	        focusIndex = 0;
	      };

	      $modalStack.loadFocusElementList = function(modalWindow) {
	        if (focusableElementList === undefined || !focusableElementList.length0) {
	          if (modalWindow) {
	            var modalDomE1 = modalWindow.value.modalDomEl;
	            if (modalDomE1 && modalDomE1.length) {
	              focusableElementList = modalDomE1[0].querySelectorAll(tababbleSelector);
	            }
	          }
	        }
	      };

	      return $modalStack;
	    }])

	  .provider('$modal', function () {

	    var $modalProvider = {
	      options: {
	        animation: true,
	        backdrop: true, //can also be false or 'static'
	        keyboard: true
	      },
	      $get: ['$injector', '$rootScope', '$q', '$templateRequest', '$controller', '$modalStack',
	        function ($injector, $rootScope, $q, $templateRequest, $controller, $modalStack) {

	          var $modal = {};

	          function getTemplatePromise(options) {
	            return options.template ? $q.when(options.template) :
	              $templateRequest(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl);
	          }

	          function getResolvePromises(resolves) {
	            var promisesArr = [];
	            angular.forEach(resolves, function (value) {
	              if (angular.isFunction(value) || angular.isArray(value)) {
	                promisesArr.push($q.when($injector.invoke(value)));
	              } else if (angular.isString(value)) {
	                promisesArr.push($q.when($injector.get(value)));
	              }
	            });
	            return promisesArr;
	          }

	          $modal.open = function (modalOptions) {

	            var modalResultDeferred = $q.defer();
	            var modalOpenedDeferred = $q.defer();
	            var modalRenderDeferred = $q.defer();

	            //prepare an instance of a modal to be injected into controllers and returned to a caller
	            var modalInstance = {
	              result: modalResultDeferred.promise,
	              opened: modalOpenedDeferred.promise,
	              rendered: modalRenderDeferred.promise,
	              close: function (result) {
	                return $modalStack.close(modalInstance, result);
	              },
	              dismiss: function (reason) {
	                return $modalStack.dismiss(modalInstance, reason);
	              }
	            };

	            //merge and clean up options
	            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
	            modalOptions.resolve = modalOptions.resolve || {};

	            //verify options
	            if (!modalOptions.template && !modalOptions.templateUrl) {
	              throw new Error('One of template or templateUrl options is required.');
	            }

	            var templateAndResolvePromise =
	              $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));


	            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {

	              var modalScope = (modalOptions.scope || $rootScope).$new();
	              modalScope.$close = modalInstance.close;
	              modalScope.$dismiss = modalInstance.dismiss;

	              modalScope.$on('$destroy', function() {
	                if (!modalScope.$$uibDestructionScheduled) {
	                  modalScope.$dismiss('$uibUnscheduledDestruction');
	                }
	              });

	              var ctrlInstance, ctrlLocals = {};
	              var resolveIter = 1;

	              //controllers
	              if (modalOptions.controller) {
	                ctrlLocals.$scope = modalScope;
	                ctrlLocals.$modalInstance = modalInstance;
	                angular.forEach(modalOptions.resolve, function (value, key) {
	                  ctrlLocals[key] = tplAndVars[resolveIter++];
	                });

	                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
	                if (modalOptions.controllerAs) {
	                  if (modalOptions.bindToController) {
	                    angular.extend(ctrlInstance, modalScope);
	                  }

	                  modalScope[modalOptions.controllerAs] = ctrlInstance;
	                }
	              }

	              $modalStack.open(modalInstance, {
	                scope: modalScope,
	                deferred: modalResultDeferred,
	                renderDeferred: modalRenderDeferred,
	                content: tplAndVars[0],
	                animation: modalOptions.animation,
	                backdrop: modalOptions.backdrop,
	                keyboard: modalOptions.keyboard,
	                backdropClass: modalOptions.backdropClass,
	                windowClass: modalOptions.windowClass,
	                windowTemplateUrl: modalOptions.windowTemplateUrl,
	                size: modalOptions.size,
	                openedClass: modalOptions.openedClass
	              });

	            }, function resolveError(reason) {
	              modalResultDeferred.reject(reason);
	            });

	            templateAndResolvePromise.then(function () {
	              modalOpenedDeferred.resolve(true);
	            }, function (reason) {
	              modalOpenedDeferred.reject(reason);
	            });

	            return modalInstance;
	          };

	          return $modal;
	        }]
	    };

	    return $modalProvider;
	  });

	angular.module('ui.bootstrap.pagination', [])
	.controller('PaginationController', ['$scope', '$attrs', '$parse', function ($scope, $attrs, $parse) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

	  this.init = function(ngModelCtrl_, config) {
	    ngModelCtrl = ngModelCtrl_;
	    this.config = config;

	    ngModelCtrl.$render = function() {
	      self.render();
	    };

	    if ($attrs.itemsPerPage) {
	      $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
	        self.itemsPerPage = parseInt(value, 10);
	        $scope.totalPages = self.calculateTotalPages();
	      });
	    } else {
	      this.itemsPerPage = config.itemsPerPage;
	    }

	    $scope.$watch('totalItems', function() {
	      $scope.totalPages = self.calculateTotalPages();
	    });

	    $scope.$watch('totalPages', function(value) {
	      setNumPages($scope.$parent, value); // Readonly variable

	      if ( $scope.page > value ) {
	        $scope.selectPage(value);
	      } else {
	        ngModelCtrl.$render();
	      }
	    });
	  };

	  this.calculateTotalPages = function() {
	    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
	    return Math.max(totalPages || 0, 1);
	  };

	  this.render = function() {
	    $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
	  };

	  $scope.selectPage = function(page, evt) {
	    if (evt) {
	      evt.preventDefault();
	    }

	    var clickAllowed = !$scope.ngDisabled || !evt;
	    if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
	      if (evt && evt.target) {
	        evt.target.blur();
	      }
	      ngModelCtrl.$setViewValue(page);
	      ngModelCtrl.$render();
	    }
	  };

	  $scope.getText = function( key ) {
	    return $scope[key + 'Text'] || self.config[key + 'Text'];
	  };
	  $scope.noPrevious = function() {
	    return $scope.page === 1;
	  };
	  $scope.noNext = function() {
	    return $scope.page === $scope.totalPages;
	  };
	}])

	.constant('paginationConfig', {
	  itemsPerPage: 10,
	  boundaryLinks: false,
	  directionLinks: true,
	  firstText: 'First',
	  previousText: 'Previous',
	  nextText: 'Next',
	  lastText: 'Last',
	  rotate: true
	})

	.directive('pagination', ['$parse', 'paginationConfig', function($parse, paginationConfig) {
	  return {
	    restrict: 'EA',
	    scope: {
	      totalItems: '=',
	      firstText: '@',
	      previousText: '@',
	      nextText: '@',
	      lastText: '@',
	      ngDisabled:'='
	    },
	    require: ['pagination', '?ngModel'],
	    controller: 'PaginationController',
	    controllerAs: 'pagination',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/pagination/pagination.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }

	      // Setup configuration parameters
	      var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize,
	          rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
	      scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
	      scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;

	      paginationCtrl.init(ngModelCtrl, paginationConfig);

	      if (attrs.maxSize) {
	        scope.$parent.$watch($parse(attrs.maxSize), function(value) {
	          maxSize = parseInt(value, 10);
	          paginationCtrl.render();
	        });
	      }

	      // Create page object used in template
	      function makePage(number, text, isActive) {
	        return {
	          number: number,
	          text: text,
	          active: isActive
	        };
	      }

	      function getPages(currentPage, totalPages) {
	        var pages = [];

	        // Default page limits
	        var startPage = 1, endPage = totalPages;
	        var isMaxSized = ( angular.isDefined(maxSize) && maxSize < totalPages );

	        // recompute if maxSize
	        if ( isMaxSized ) {
	          if ( rotate ) {
	            // Current page is displayed in the middle of the visible ones
	            startPage = Math.max(currentPage - Math.floor(maxSize/2), 1);
	            endPage   = startPage + maxSize - 1;

	            // Adjust if limit is exceeded
	            if (endPage > totalPages) {
	              endPage   = totalPages;
	              startPage = endPage - maxSize + 1;
	            }
	          } else {
	            // Visible pages are paginated with maxSize
	            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

	            // Adjust last page if limit is exceeded
	            endPage = Math.min(startPage + maxSize - 1, totalPages);
	          }
	        }

	        // Add page number links
	        for (var number = startPage; number <= endPage; number++) {
	          var page = makePage(number, number, number === currentPage);
	          pages.push(page);
	        }

	        // Add links to move between page sets
	        if ( isMaxSized && ! rotate ) {
	          if ( startPage > 1 ) {
	            var previousPageSet = makePage(startPage - 1, '...', false);
	            pages.unshift(previousPageSet);
	          }

	          if ( endPage < totalPages ) {
	            var nextPageSet = makePage(endPage + 1, '...', false);
	            pages.push(nextPageSet);
	          }
	        }

	        return pages;
	      }

	      var originalRender = paginationCtrl.render;
	      paginationCtrl.render = function() {
	        originalRender();
	        if (scope.page > 0 && scope.page <= scope.totalPages) {
	          scope.pages = getPages(scope.page, scope.totalPages);
	        }
	      };
	    }
	  };
	}])

	.constant('pagerConfig', {
	  itemsPerPage: 10,
	  previousText: '« Previous',
	  nextText: 'Next »',
	  align: true
	})

	.directive('pager', ['pagerConfig', function(pagerConfig) {
	  return {
	    restrict: 'EA',
	    scope: {
	      totalItems: '=',
	      previousText: '@',
	      nextText: '@'
	    },
	    require: ['pager', '?ngModel'],
	    controller: 'PaginationController',
	    templateUrl: 'template/pagination/pager.html',
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }

	      scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
	      paginationCtrl.init(ngModelCtrl, pagerConfig);
	    }
	  };
	}]);

	/**
	 * The following features are still outstanding: animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, html tooltips, and selector delegation.
	 */
	angular.module( 'ui.bootstrap.tooltip', [ 'ui.bootstrap.position', 'ui.bootstrap.bindHtml' ] )

	/**
	 * The $tooltip service creates tooltip- and popover-like directives as well as
	 * houses global options for them.
	 */
	.provider( '$tooltip', function () {
	  // The default options tooltip and popover.
	  var defaultOptions = {
	    placement: 'top',
	    animation: true,
	    popupDelay: 0,
	    useContentExp: false
	  };

	  // Default hide triggers for each show trigger
	  var triggerMap = {
	    'mouseenter': 'mouseleave',
	    'click': 'click',
	    'focus': 'blur'
	  };

	  // The options specified to the provider globally.
	  var globalOptions = {};

	  /**
	   * `options({})` allows global configuration of all tooltips in the
	   * application.
	   *
	   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
	   *     // place tooltips left instead of top by default
	   *     $tooltipProvider.options( { placement: 'left' } );
	   *   });
	   */
		this.options = function( value ) {
			angular.extend( globalOptions, value );
		};

	  /**
	   * This allows you to extend the set of trigger mappings available. E.g.:
	   *
	   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
	   */
	  this.setTriggers = function setTriggers ( triggers ) {
	    angular.extend( triggerMap, triggers );
	  };

	  /**
	   * This is a helper function for translating camel-case to snake-case.
	   */
	  function snake_case(name){
	    var regexp = /[A-Z]/g;
	    var separator = '-';
	    return name.replace(regexp, function(letter, pos) {
	      return (pos ? separator : '') + letter.toLowerCase();
	    });
	  }

	  /**
	   * Returns the actual instance of the $tooltip service.
	   * TODO support multiple triggers
	   */
	  this.$get = [ '$window', '$compile', '$timeout', '$document', '$position', '$interpolate', '$rootScope', function ( $window, $compile, $timeout, $document, $position, $interpolate, $rootScope ) {
	    return function $tooltip ( type, prefix, defaultTriggerShow, options ) {
	      options = angular.extend( {}, defaultOptions, globalOptions, options );

	      /**
	       * Returns an object of show and hide triggers.
	       *
	       * If a trigger is supplied,
	       * it is used to show the tooltip; otherwise, it will use the `trigger`
	       * option passed to the `$tooltipProvider.options` method; else it will
	       * default to the trigger supplied to this directive factory.
	       *
	       * The hide trigger is based on the show trigger. If the `trigger` option
	       * was passed to the `$tooltipProvider.options` method, it will use the
	       * mapped trigger from `triggerMap` or the passed trigger if the map is
	       * undefined; otherwise, it uses the `triggerMap` value of the show
	       * trigger; else it will just use the show trigger.
	       */
	      function getTriggers ( trigger ) {
	        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
	        var hide = show.map(function(trigger) {
	          return triggerMap[trigger] || trigger;
	        });
	        return {
	          show: show,
	          hide: hide
	        };
	      }

	      var directiveName = snake_case( type );

	      var startSym = $interpolate.startSymbol();
	      var endSym = $interpolate.endSymbol();
	      var template =
	        '<div '+ directiveName +'-popup '+
	          'title="'+startSym+'title'+endSym+'" '+
	          (options.useContentExp ?
	            'content-exp="contentExp()" ' :
	            'content="'+startSym+'content'+endSym+'" ') +
	          'placement="'+startSym+'placement'+endSym+'" '+
	          'popup-class="'+startSym+'popupClass'+endSym+'" '+
	          'animation="animation" '+
	          'is-open="isOpen"'+
	          'origin-scope="origScope" '+
	          '>'+
	        '</div>';

	      return {
	        restrict: 'EA',
	        compile: function (tElem, tAttrs) {
	          var tooltipLinker = $compile( template );

	          return function link ( scope, element, attrs, tooltipCtrl ) {
	            var tooltip;
	            var tooltipLinkedScope;
	            var transitionTimeout;
	            var popupTimeout;
	            var appendToBody = angular.isDefined( options.appendToBody ) ? options.appendToBody : false;
	            var triggers = getTriggers( undefined );
	            var hasEnableExp = angular.isDefined(attrs[prefix+'Enable']);
	            var ttScope = scope.$new(true);
	            var repositionScheduled = false;

	            var positionTooltip = function () {
	              if (!tooltip) { return; }

	              var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
	              ttPosition.top += 'px';
	              ttPosition.left += 'px';

	              // Now set the calculated positioning.
	              tooltip.css( ttPosition );
	            };

	            var positionTooltipAsync = function () {
	              $timeout(positionTooltip, 0, false);
	            };

	            // Set up the correct scope to allow transclusion later
	            ttScope.origScope = scope;

	            // By default, the tooltip is not open.
	            // TODO add ability to start tooltip opened
	            ttScope.isOpen = false;

	            function toggleTooltipBind () {
	              if ( ! ttScope.isOpen ) {
	                showTooltipBind();
	              } else {
	                hideTooltipBind();
	              }
	            }

	            // Show the tooltip with delay if specified, otherwise show it immediately
	            function showTooltipBind() {
	              if(hasEnableExp && !scope.$eval(attrs[prefix+'Enable'])) {
	                return;
	              }

	              prepareTooltip();

	              if ( ttScope.popupDelay ) {
	                // Do nothing if the tooltip was already scheduled to pop-up.
	                // This happens if show is triggered multiple times before any hide is triggered.
	                if (!popupTimeout) {
	                  popupTimeout = $timeout( show, ttScope.popupDelay, false );
	                  popupTimeout.then(function(reposition){reposition();});
	                }
	              } else {
	                show()();
	              }
	            }

	            function hideTooltipBind () {
	              hide();
	              if (!$rootScope.$$phase) {
	                $rootScope.$digest();
	              }
	            }

	            // Show the tooltip popup element.
	            function show() {

	              popupTimeout = null;

	              // If there is a pending remove transition, we must cancel it, lest the
	              // tooltip be mysteriously removed.
	              if ( transitionTimeout ) {
	                $timeout.cancel( transitionTimeout );
	                transitionTimeout = null;
	              }

	              // Don't show empty tooltips.
	              if ( !(options.useContentExp ? ttScope.contentExp() : ttScope.content) ) {
	                return angular.noop;
	              }

	              createTooltip();

	              // Set the initial positioning.
	              tooltip.css({ top: 0, left: 0, display: 'block' });

	              positionTooltip();

	              // And show the tooltip.
	              ttScope.isOpen = true;
	              ttScope.$apply(); // digest required as $apply is not called

	              // Return positioning function as promise callback for correct
	              // positioning after draw.
	              return positionTooltip;
	            }

	            // Hide the tooltip popup element.
	            function hide() {
	              // First things first: we don't show it anymore.
	              ttScope.isOpen = false;

	              //if tooltip is going to be shown after delay, we must cancel this
	              $timeout.cancel( popupTimeout );
	              popupTimeout = null;

	              // And now we remove it from the DOM. However, if we have animation, we
	              // need to wait for it to expire beforehand.
	              // FIXME: this is a placeholder for a port of the transitions library.
	              if ( ttScope.animation ) {
	                if (!transitionTimeout) {
	                  transitionTimeout = $timeout(removeTooltip, 500);
	                }
	              } else {
	                removeTooltip();
	              }
	            }

	            function createTooltip() {
	              // There can only be one tooltip element per directive shown at once.
	              if (tooltip) {
	                removeTooltip();
	              }
	              tooltipLinkedScope = ttScope.$new();
	              tooltip = tooltipLinker(tooltipLinkedScope, function (tooltip) {
	                if ( appendToBody ) {
	                  $document.find( 'body' ).append( tooltip );
	                } else {
	                  element.after( tooltip );
	                }
	              });

	              if (options.useContentExp) {
	                tooltipLinkedScope.$watch('contentExp()', function (val) {
	                  if (!val && ttScope.isOpen) {
	                    hide();
	                  }
	                });
	                
	                tooltipLinkedScope.$watch(function() {
	                  if (!repositionScheduled) {
	                    repositionScheduled = true;
	                    tooltipLinkedScope.$$postDigest(function() {
	                      repositionScheduled = false;
	                      positionTooltipAsync();
	                    });
	                  }
	                });
	                
	              }
	            }

	            function removeTooltip() {
	              transitionTimeout = null;
	              if (tooltip) {
	                tooltip.remove();
	                tooltip = null;
	              }
	              if (tooltipLinkedScope) {
	                tooltipLinkedScope.$destroy();
	                tooltipLinkedScope = null;
	              }
	            }

	            function prepareTooltip() {
	              prepPopupClass();
	              prepPlacement();
	              prepPopupDelay();
	            }

	            ttScope.contentExp = function () {
	              return scope.$eval(attrs[type]);
	            };

	            /**
	             * Observe the relevant attributes.
	             */
	            if (!options.useContentExp) {
	              attrs.$observe( type, function ( val ) {
	                ttScope.content = val;

	                if (!val && ttScope.isOpen) {
	                  hide();
	                } else {
	                  positionTooltipAsync();
	                }
	              });
	            }

	            attrs.$observe( 'disabled', function ( val ) {
	              if (popupTimeout && val) {
	                $timeout.cancel(popupTimeout);
	              }

	              if (val && ttScope.isOpen ) {
	                hide();
	              }
	            });

	            attrs.$observe( prefix+'Title', function ( val ) {
	              ttScope.title = val;
	              positionTooltipAsync();
	            });

	            attrs.$observe( prefix + 'Placement', function () {
	              if (ttScope.isOpen) {
	                $timeout(function () {
	                  prepPlacement();
	                  show()();
	                }, 0, false);
	              }
	            });

	            function prepPopupClass() {
	              ttScope.popupClass = attrs[prefix + 'Class'];
	            }

	            function prepPlacement() {
	              var val = attrs[ prefix + 'Placement' ];
	              ttScope.placement = angular.isDefined( val ) ? val : options.placement;
	            }

	            function prepPopupDelay() {
	              var val = attrs[ prefix + 'PopupDelay' ];
	              var delay = parseInt( val, 10 );
	              ttScope.popupDelay = ! isNaN(delay) ? delay : options.popupDelay;
	            }

	            var unregisterTriggers = function () {
	              triggers.show.forEach(function(trigger) {
	                element.unbind(trigger, showTooltipBind);
	              });
	              triggers.hide.forEach(function(trigger) {
	                element.unbind(trigger, hideTooltipBind);
	              });
	            };

	            function prepTriggers() {
	              var val = attrs[ prefix + 'Trigger' ];
	              unregisterTriggers();

	              triggers = getTriggers( val );

	              triggers.show.forEach(function(trigger, idx) {
	                if (trigger === triggers.hide[idx]) {
	                  element.bind(trigger, toggleTooltipBind);
	                } else if (trigger) {
	                  element.bind(trigger, showTooltipBind);
	                  element.bind(triggers.hide[idx], hideTooltipBind);
	                }
	              });
	            }
	            prepTriggers();

	            var animation = scope.$eval(attrs[prefix + 'Animation']);
	            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

	            var appendToBodyVal = scope.$eval(attrs[prefix + 'AppendToBody']);
	            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

	            // if a tooltip is attached to <body> we need to remove it on
	            // location change as its parent scope will probably not be destroyed
	            // by the change.
	            if ( appendToBody ) {
	              scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess () {
	              if ( ttScope.isOpen ) {
	                hide();
	              }
	            });
	            }

	            // Make sure tooltip is destroyed and removed.
	            scope.$on('$destroy', function onDestroyTooltip() {
	              $timeout.cancel( transitionTimeout );
	              $timeout.cancel( popupTimeout );
	              unregisterTriggers();
	              removeTooltip();
	              ttScope = null;
	            });
	          };
	        }
	      };
	    };
	  }];
	})

	// This is mostly ngInclude code but with a custom scope
	.directive( 'tooltipTemplateTransclude', [
	         '$animate', '$sce', '$compile', '$templateRequest',
	function ($animate ,  $sce ,  $compile ,  $templateRequest) {
	  return {
	    link: function ( scope, elem, attrs ) {
	      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

	      var changeCounter = 0,
	        currentScope,
	        previousElement,
	        currentElement;

	      var cleanupLastIncludeContent = function() {
	        if (previousElement) {
	          previousElement.remove();
	          previousElement = null;
	        }
	        if (currentScope) {
	          currentScope.$destroy();
	          currentScope = null;
	        }
	        if (currentElement) {
	          $animate.leave(currentElement).then(function() {
	            previousElement = null;
	          });
	          previousElement = currentElement;
	          currentElement = null;
	        }
	      };

	      scope.$watch($sce.parseAsResourceUrl(attrs.tooltipTemplateTransclude), function (src) {
	        var thisChangeId = ++changeCounter;

	        if (src) {
	          //set the 2nd param to true to ignore the template request error so that the inner
	          //contents and scope can be cleaned up.
	          $templateRequest(src, true).then(function(response) {
	            if (thisChangeId !== changeCounter) { return; }
	            var newScope = origScope.$new();
	            var template = response;

	            var clone = $compile(template)(newScope, function(clone) {
	              cleanupLastIncludeContent();
	              $animate.enter(clone, elem);
	            });

	            currentScope = newScope;
	            currentElement = clone;

	            currentScope.$emit('$includeContentLoaded', src);
	          }, function() {
	            if (thisChangeId === changeCounter) {
	              cleanupLastIncludeContent();
	              scope.$emit('$includeContentError', src);
	            }
	          });
	          scope.$emit('$includeContentRequested', src);
	        } else {
	          cleanupLastIncludeContent();
	        }
	      });

	      scope.$on('$destroy', cleanupLastIncludeContent);
	    }
	  };
	}])

	/**
	 * Note that it's intentional that these classes are *not* applied through $animate.
	 * They must not be animated as they're expected to be present on the tooltip on
	 * initialization.
	 */
	.directive('tooltipClasses', function () {
	  return {
	    restrict: 'A',
	    link: function (scope, element, attrs) {
	      if (scope.placement) {
	        element.addClass(scope.placement);
	      }
	      if (scope.popupClass) {
	        element.addClass(scope.popupClass);
	      }
	      if (scope.animation()) {
	        element.addClass(attrs.tooltipAnimationClass);
	      }
	    }
	  };
	})

	.directive( 'tooltipPopup', function () {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/tooltip/tooltip-popup.html'
	  };
	})

	.directive( 'tooltip', [ '$tooltip', function ( $tooltip ) {
	  return $tooltip( 'tooltip', 'tooltip', 'mouseenter' );
	}])

	.directive( 'tooltipTemplatePopup', function () {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'template/tooltip/tooltip-template-popup.html'
	  };
	})

	.directive( 'tooltipTemplate', [ '$tooltip', function ( $tooltip ) {
	  return $tooltip('tooltipTemplate', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}])

	.directive( 'tooltipHtmlPopup', function () {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/tooltip/tooltip-html-popup.html'
	  };
	})

	.directive( 'tooltipHtml', [ '$tooltip', function ( $tooltip ) {
	  return $tooltip('tooltipHtml', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}])

	/*
	Deprecated
	*/
	.directive( 'tooltipHtmlUnsafePopup', function () {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
	  };
	})

	.value('tooltipHtmlUnsafeSuppressDeprecated', false)
	.directive( 'tooltipHtmlUnsafe', [
	          '$tooltip', 'tooltipHtmlUnsafeSuppressDeprecated', '$log',
	function ( $tooltip ,  tooltipHtmlUnsafeSuppressDeprecated ,  $log) {
	  if (!tooltipHtmlUnsafeSuppressDeprecated) {
	    $log.warn('tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead.');
	  }
	  return $tooltip( 'tooltipHtmlUnsafe', 'tooltip', 'mouseenter' );
	}]);

	/**
	 * The following features are still outstanding: popup delay, animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, and selector delegatation.
	 */
	angular.module( 'ui.bootstrap.popover', [ 'ui.bootstrap.tooltip' ] )

	.directive( 'popoverTemplatePopup', function () {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { title: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'template/popover/popover-template.html'
	  };
	})

	.directive( 'popoverTemplate', [ '$tooltip', function ( $tooltip ) {
	  return $tooltip( 'popoverTemplate', 'popover', 'click', {
	    useContentExp: true
	  } );
	}])

	.directive( 'popoverHtmlPopup', function () {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { contentExp: '&', title: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/popover/popover-html.html'
	  };
	})

	.directive( 'popoverHtml', [ '$tooltip', function ( $tooltip ) {
	  return $tooltip( 'popoverHtml', 'popover', 'click', {
	    useContentExp: true
	  });
	}])

	.directive( 'popoverPopup', function () {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { title: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/popover/popover.html'
	  };
	})

	.directive( 'popover', [ '$tooltip', function ( $tooltip ) {
	  return $tooltip( 'popover', 'popover', 'click' );
	}]);

	angular.module('ui.bootstrap.progressbar', [])

	.constant('progressConfig', {
	  animate: true,
	  max: 100
	})

	.controller('ProgressController', ['$scope', '$attrs', 'progressConfig', function($scope, $attrs, progressConfig) {
	    var self = this,
	        animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

	    this.bars = [];
	    $scope.max = angular.isDefined($scope.max) ? $scope.max : progressConfig.max;

	    this.addBar = function(bar, element) {
	        if ( !animate ) {
	            element.css({'transition': 'none'});
	        }

	        this.bars.push(bar);

	        bar.max = $scope.max;

	        bar.$watch('value', function( value ) {
	            bar.recalculatePercentage();
	        });

	        bar.recalculatePercentage = function() {
	            bar.percent = +(100 * bar.value / bar.max).toFixed(2);
				
	            var totalPercentage = 0;
	            self.bars.forEach(function (bar) {
	                totalPercentage += bar.percent;
	            });

	            if (totalPercentage > 100) {
	                bar.percent -= totalPercentage - 100;
	            }
	        };

	        bar.$on('$destroy', function() {
	            element = null;
	            self.removeBar(bar);
	        });
	    };

	    this.removeBar = function(bar) {
	        this.bars.splice(this.bars.indexOf(bar), 1);
	    };

	    $scope.$watch('max', function(max) {
	        self.bars.forEach(function (bar) {
	            bar.max = $scope.max;
	            bar.recalculatePercentage();
	        });
	    });
	}])

	.directive('progress', function() {
	    return {
	        restrict: 'EA',
	        replace: true,
	        transclude: true,
	        controller: 'ProgressController',
	        require: 'progress',
	        scope: {
	          max: '=?'
	        },
	        templateUrl: 'template/progressbar/progress.html'
	    };
	})

	.directive('bar', function() {
	    return {
	        restrict: 'EA',
	        replace: true,
	        transclude: true,
	        require: '^progress',
	        scope: {
	            value: '=',
	            type: '@'
	        },
	        templateUrl: 'template/progressbar/bar.html',
	        link: function(scope, element, attrs, progressCtrl) {
	            progressCtrl.addBar(scope, element);
	        }
	    };
	})

	.directive('progressbar', function() {
	    return {
	        restrict: 'EA',
	        replace: true,
	        transclude: true,
	        controller: 'ProgressController',
	        scope: {
	            value: '=',
	            max: '=?',
	            type: '@'
	        },
	        templateUrl: 'template/progressbar/progressbar.html',
	        link: function(scope, element, attrs, progressCtrl) {
	            progressCtrl.addBar(scope, angular.element(element.children()[0]));
	        }
	    };
	});

	angular.module('ui.bootstrap.rating', [])

	.constant('ratingConfig', {
	  max: 5,
	  stateOn: null,
	  stateOff: null,
	  titles : ['one', 'two', 'three', 'four', 'five']
	})

	.controller('RatingController', ['$scope', '$attrs', 'ratingConfig', function($scope, $attrs, ratingConfig) {
	  var ngModelCtrl  = { $setViewValue: angular.noop };

	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;

	    ngModelCtrl.$formatters.push(function(value) {
	      if (angular.isNumber(value) && value << 0 !== value) {
	        value = Math.round(value);
	      }
	      return value;
	    });

	    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
	    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
	    var tmpTitles = angular.isDefined($attrs.titles)  ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles ;    
	    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ?
	      tmpTitles : ratingConfig.titles;
	    
	    var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) :
	                        new Array( angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max );
	    $scope.range = this.buildTemplateObjects(ratingStates);
	  };

	  this.buildTemplateObjects = function(states) {
	    for (var i = 0, n = states.length; i < n; i++) {
	      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(i) }, states[i]);
	    }
	    return states;
	  };
	  
	  this.getTitle = function(index) {
	    if (index >= this.titles.length) {
	      return index + 1;
	    } else {
	      return this.titles[index];
	    }
	  };
	  
	  $scope.rate = function(value) {
	    if ( !$scope.readonly && value >= 0 && value <= $scope.range.length ) {
	      ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue === value ? 0 : value);
	      ngModelCtrl.$render();
	    }
	  };

	  $scope.enter = function(value) {
	    if ( !$scope.readonly ) {
	      $scope.value = value;
	    }
	    $scope.onHover({value: value});
	  };

	  $scope.reset = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.onLeave();
	  };

	  $scope.onKeydown = function(evt) {
	    if (/(37|38|39|40)/.test(evt.which)) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.rate( $scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1) );
	    }
	  };

	  this.render = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	  };
	}])

	.directive('rating', function() {
	  return {
	    restrict: 'EA',
	    require: ['rating', 'ngModel'],
	    scope: {
	      readonly: '=?',
	      onHover: '&',
	      onLeave: '&'
	    },
	    controller: 'RatingController',
	    templateUrl: 'template/rating/rating.html',
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      ratingCtrl.init( ngModelCtrl );
	    }
	  };
	});


	/**
	 * @ngdoc overview
	 * @name ui.bootstrap.tabs
	 *
	 * @description
	 * AngularJS version of the tabs directive.
	 */

	angular.module('ui.bootstrap.tabs', [])

	.controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
	  var ctrl = this,
	      tabs = ctrl.tabs = $scope.tabs = [];

	  ctrl.select = function(selectedTab) {
	    angular.forEach(tabs, function(tab) {
	      if (tab.active && tab !== selectedTab) {
	        tab.active = false;
	        tab.onDeselect();
	      }
	    });
	    selectedTab.active = true;
	    selectedTab.onSelect();
	  };

	  ctrl.addTab = function addTab(tab) {
	    tabs.push(tab);
	    // we can't run the select function on the first tab
	    // since that would select it twice
	    if (tabs.length === 1 && tab.active !== false) {
	      tab.active = true;
	    } else if (tab.active) {
	      ctrl.select(tab);
	    }
	    else {
	      tab.active = false;
	    }
	  };

	  ctrl.removeTab = function removeTab(tab) {
	    var index = tabs.indexOf(tab);
	    //Select a new tab if the tab to be removed is selected and not destroyed
	    if (tab.active && tabs.length > 1 && !destroyed) {
	      //If this is the last tab, select the previous tab. else, the next tab.
	      var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
	      ctrl.select(tabs[newActiveIndex]);
	    }
	    tabs.splice(index, 1);
	  };

	  var destroyed;
	  $scope.$on('$destroy', function() {
	    destroyed = true;
	  });
	}])

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tabset
	 * @restrict EA
	 *
	 * @description
	 * Tabset is the outer container for the tabs directive
	 *
	 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
	 * @param {boolean=} justified Whether or not to use justified styling for the tabs.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <tabset>
	      <tab heading="Tab 1"><b>First</b> Content!</tab>
	      <tab heading="Tab 2"><i>Second</i> Content!</tab>
	    </tabset>
	    <hr />
	    <tabset vertical="true">
	      <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
	      <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
	    </tabset>
	    <tabset justified="true">
	      <tab heading="Justified Tab 1"><b>First</b> Justified Content!</tab>
	      <tab heading="Justified Tab 2"><i>Second</i> Justified Content!</tab>
	    </tabset>
	  </file>
	</example>
	 */
	.directive('tabset', function() {
	  return {
	    restrict: 'EA',
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@'
	    },
	    controller: 'TabsetController',
	    templateUrl: 'template/tabs/tabset.html',
	    link: function(scope, element, attrs) {
	      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
	      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
	    }
	  };
	})

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tab
	 * @restrict EA
	 *
	 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
	 * @param {string=} select An expression to evaluate when the tab is selected.
	 * @param {boolean=} active A binding, telling whether or not this tab is selected.
	 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
	 *
	 * @description
	 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <div ng-controller="TabsDemoCtrl">
	      <button class="btn btn-small" ng-click="items[0].active = true">
	        Select item 1, using active binding
	      </button>
	      <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
	        Enable/disable item 2, using disabled binding
	      </button>
	      <br />
	      <tabset>
	        <tab heading="Tab 1">First Tab</tab>
	        <tab select="alertMe()">
	          <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
	          Second Tab, with alert callback and html heading!
	        </tab>
	        <tab ng-repeat="item in items"
	          heading="{{item.title}}"
	          disabled="item.disabled"
	          active="item.active">
	          {{item.content}}
	        </tab>
	      </tabset>
	    </div>
	  </file>
	  <file name="script.js">
	    function TabsDemoCtrl($scope) {
	      $scope.items = [
	        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
	        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
	      ];

	      $scope.alertMe = function() {
	        setTimeout(function() {
	          alert("You've selected the alert tab!");
	        });
	      };
	    };
	  </file>
	</example>
	 */

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tabHeading
	 * @restrict EA
	 *
	 * @description
	 * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <tabset>
	      <tab>
	        <tab-heading><b>HTML</b> in my titles?!</tab-heading>
	        And some content, too!
	      </tab>
	      <tab>
	        <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
	        That's right.
	      </tab>
	    </tabset>
	  </file>
	</example>
	 */
	.directive('tab', ['$parse', '$log', function($parse, $log) {
	  return {
	    require: '^tabset',
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/tabs/tab.html',
	    transclude: true,
	    scope: {
	      active: '=?',
	      heading: '@',
	      onSelect: '&select', //This callback is called in contentHeadingTransclude
	                          //once it inserts the tab's content into the dom
	      onDeselect: '&deselect'
	    },
	    controller: function() {
	      //Empty controller so other directives can require being 'under' a tab
	    },
	    link: function(scope, elm, attrs, tabsetCtrl, transclude) {
	      scope.$watch('active', function(active) {
	        if (active) {
	          tabsetCtrl.select(scope);
	        }
	      });

	      scope.disabled = false;
	      if ( attrs.disable ) {
	        scope.$parent.$watch($parse(attrs.disable), function(value) {
	          scope.disabled = !! value;
	        });
	      }

	      // Deprecation support of "disabled" parameter
	      // fix(tab): IE9 disabled attr renders grey text on enabled tab #2677
	      // This code is duplicated from the lines above to make it easy to remove once
	      // the feature has been completely deprecated
	      if ( attrs.disabled ) {
	        $log.warn('Use of "disabled" attribute has been deprecated, please use "disable"');
	        scope.$parent.$watch($parse(attrs.disabled), function(value) {
	          scope.disabled = !! value;
	        });
	      }

	      scope.select = function() {
	        if ( !scope.disabled ) {
	          scope.active = true;
	        }
	      };

	      tabsetCtrl.addTab(scope);
	      scope.$on('$destroy', function() {
	        tabsetCtrl.removeTab(scope);
	      });

	      //We need to transclude later, once the content container is ready.
	      //when this link happens, we're inside a tab heading.
	      scope.$transcludeFn = transclude;
	    }
	  };
	}])

	.directive('tabHeadingTransclude', [function() {
	  return {
	    restrict: 'A',
	    require: '^tab',
	    link: function(scope, elm, attrs, tabCtrl) {
	      scope.$watch('headingElement', function updateHeadingElement(heading) {
	        if (heading) {
	          elm.html('');
	          elm.append(heading);
	        }
	      });
	    }
	  };
	}])

	.directive('tabContentTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^tabset',
	    link: function(scope, elm, attrs) {
	      var tab = scope.$eval(attrs.tabContentTransclude);

	      //Now our tab is ready to be transcluded: both the tab heading area
	      //and the tab content area are loaded.  Transclude 'em both.
	      tab.$transcludeFn(tab.$parent, function(contents) {
	        angular.forEach(contents, function(node) {
	          if (isTabHeading(node)) {
	            //Let tabHeadingTransclude know.
	            tab.headingElement = node;
	          } else {
	            elm.append(node);
	          }
	        });
	      });
	    }
	  };
	  function isTabHeading(node) {
	    return node.tagName &&  (
	      node.hasAttribute('tab-heading') ||
	      node.hasAttribute('data-tab-heading') ||
	      node.tagName.toLowerCase() === 'tab-heading' ||
	      node.tagName.toLowerCase() === 'data-tab-heading'
	    );
	  }
	})

	;

	angular.module('ui.bootstrap.timepicker', [])

	.constant('timepickerConfig', {
	  hourStep: 1,
	  minuteStep: 1,
	  showMeridian: true,
	  meridians: null,
	  readonlyInput: false,
	  mousewheel: true,
	  arrowkeys: true,
	  showSpinners: true
	})

	.controller('TimepickerController', ['$scope', '$attrs', '$parse', '$log', '$locale', 'timepickerConfig', function($scope, $attrs, $parse, $log, $locale, timepickerConfig) {
	  var selected = new Date(),
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	      meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;

	  this.init = function( ngModelCtrl_, inputs ) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;

	    ngModelCtrl.$formatters.unshift(function (modelValue) {
	      return modelValue ? new Date( modelValue ) : null;
	    });

	    var hoursInputEl = inputs.eq(0),
	        minutesInputEl = inputs.eq(1);

	    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
	    if ( mousewheel ) {
	      this.setupMousewheelEvents( hoursInputEl, minutesInputEl );
	    }

	    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
	    if (arrowkeys) {
	      this.setupArrowkeyEvents( hoursInputEl, minutesInputEl );
	    }

	    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
	    this.setupInputEvents( hoursInputEl, minutesInputEl );
	  };

	  var hourStep = timepickerConfig.hourStep;
	  if ($attrs.hourStep) {
	    $scope.$parent.$watch($parse($attrs.hourStep), function(value) {
	      hourStep = parseInt(value, 10);
	    });
	  }

	  var minuteStep = timepickerConfig.minuteStep;
	  if ($attrs.minuteStep) {
	    $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
	      minuteStep = parseInt(value, 10);
	    });
	  }

	  var min;
	  $scope.$parent.$watch($parse($attrs.min), function(value) {
	    var dt = new Date(value);
	    min = isNaN(dt) ? undefined : dt;
	  });

	  var max;
	  $scope.$parent.$watch($parse($attrs.max), function(value) {
	    var dt = new Date(value);
	    max = isNaN(dt) ? undefined : dt;
	  });

	  $scope.noIncrementHours = function() {
	    var incrementedSelected = addMinutes(selected, hourStep * 60);
	    return incrementedSelected > max ||
	      (incrementedSelected < selected && incrementedSelected < min);
	  };

	  $scope.noDecrementHours = function() {
	    var decrementedSelected = addMinutes(selected, - hourStep * 60);
	    return decrementedSelected < min ||
	      (decrementedSelected > selected && decrementedSelected > max);
	  };

	  $scope.noIncrementMinutes = function() {
	    var incrementedSelected = addMinutes(selected, minuteStep);
	    return incrementedSelected > max ||
	      (incrementedSelected < selected && incrementedSelected < min);
	  };

	  $scope.noDecrementMinutes = function() {
	    var decrementedSelected = addMinutes(selected, - minuteStep);
	    return decrementedSelected < min ||
	      (decrementedSelected > selected && decrementedSelected > max);
	  };

	  $scope.noToggleMeridian = function() {
	    if (selected.getHours() < 13) {
	      return addMinutes(selected, 12 * 60) > max;
	    } else {
	      return addMinutes(selected, - 12 * 60) < min;
	    }
	  };

	  // 12H / 24H mode
	  $scope.showMeridian = timepickerConfig.showMeridian;
	  if ($attrs.showMeridian) {
	    $scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
	      $scope.showMeridian = !!value;

	      if ( ngModelCtrl.$error.time ) {
	        // Evaluate from template
	        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
	        if (angular.isDefined( hours ) && angular.isDefined( minutes )) {
	          selected.setHours( hours );
	          refresh();
	        }
	      } else {
	        updateTemplate();
	      }
	    });
	  }

	  // Get $scope.hours in 24H mode if valid
	  function getHoursFromTemplate ( ) {
	    var hours = parseInt( $scope.hours, 10 );
	    var valid = ( $scope.showMeridian ) ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
	    if ( !valid ) {
	      return undefined;
	    }

	    if ( $scope.showMeridian ) {
	      if ( hours === 12 ) {
	        hours = 0;
	      }
	      if ( $scope.meridian === meridians[1] ) {
	        hours = hours + 12;
	      }
	    }
	    return hours;
	  }

	  function getMinutesFromTemplate() {
	    var minutes = parseInt($scope.minutes, 10);
	    return ( minutes >= 0 && minutes < 60 ) ? minutes : undefined;
	  }

	  function pad( value ) {
	    return ( angular.isDefined(value) && value.toString().length < 2 ) ? '0' + value : value.toString();
	  }

	  // Respond on mousewheel spin
	  this.setupMousewheelEvents = function( hoursInputEl, minutesInputEl ) {
	    var isScrollingUp = function(e) {
	      if (e.originalEvent) {
	        e = e.originalEvent;
	      }
	      //pick correct delta variable depending on event
	      var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
	      return (e.detail || delta > 0);
	    };

	    hoursInputEl.bind('mousewheel wheel', function(e) {
	      $scope.$apply( (isScrollingUp(e)) ? $scope.incrementHours() : $scope.decrementHours() );
	      e.preventDefault();
	    });

	    minutesInputEl.bind('mousewheel wheel', function(e) {
	      $scope.$apply( (isScrollingUp(e)) ? $scope.incrementMinutes() : $scope.decrementMinutes() );
	      e.preventDefault();
	    });

	  };

	  // Respond on up/down arrowkeys
	  this.setupArrowkeyEvents = function( hoursInputEl, minutesInputEl ) {
	    hoursInputEl.bind('keydown', function(e) {
	      if ( e.which === 38 ) { // up
	        e.preventDefault();
	        $scope.incrementHours();
	        $scope.$apply();
	      }
	      else if ( e.which === 40 ) { // down
	        e.preventDefault();
	        $scope.decrementHours();
	        $scope.$apply();
	      }
	    });

	    minutesInputEl.bind('keydown', function(e) {
	      if ( e.which === 38 ) { // up
	        e.preventDefault();
	        $scope.incrementMinutes();
	        $scope.$apply();
	      }
	      else if ( e.which === 40 ) { // down
	        e.preventDefault();
	        $scope.decrementMinutes();
	        $scope.$apply();
	      }
	    });
	  };

	  this.setupInputEvents = function( hoursInputEl, minutesInputEl ) {
	    if ( $scope.readonlyInput ) {
	      $scope.updateHours = angular.noop;
	      $scope.updateMinutes = angular.noop;
	      return;
	    }

	    var invalidate = function(invalidHours, invalidMinutes) {
	      ngModelCtrl.$setViewValue( null );
	      ngModelCtrl.$setValidity('time', false);
	      if (angular.isDefined(invalidHours)) {
	        $scope.invalidHours = invalidHours;
	      }
	      if (angular.isDefined(invalidMinutes)) {
	        $scope.invalidMinutes = invalidMinutes;
	      }
	    };

	    $scope.updateHours = function() {
	      var hours = getHoursFromTemplate();

	      if ( angular.isDefined(hours) ) {
	        selected.setHours( hours );
	        if (selected < min || selected > max) {
	          invalidate(true);
	        } else {
	          refresh( 'h' );
	        }
	      } else {
	        invalidate(true);
	      }
	    };

	    hoursInputEl.bind('blur', function(e) {
	      if ( !$scope.invalidHours && $scope.hours < 10) {
	        $scope.$apply( function() {
	          $scope.hours = pad( $scope.hours );
	        });
	      }
	    });

	    $scope.updateMinutes = function() {
	      var minutes = getMinutesFromTemplate();

	      if ( angular.isDefined(minutes) ) {
	        selected.setMinutes( minutes );
	        if (selected < min || selected > max) {
	          invalidate(undefined, true);
	        } else {
	          refresh( 'm' );
	        }
	      } else {
	        invalidate(undefined, true);
	      }
	    };

	    minutesInputEl.bind('blur', function(e) {
	      if ( !$scope.invalidMinutes && $scope.minutes < 10 ) {
	        $scope.$apply( function() {
	          $scope.minutes = pad( $scope.minutes );
	        });
	      }
	    });

	  };

	  this.render = function() {
	    var date = ngModelCtrl.$viewValue;

	    if ( isNaN(date) ) {
	      ngModelCtrl.$setValidity('time', false);
	      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	    } else {
	      if ( date ) {
	        selected = date;
	      }

	      if (selected < min || selected > max) {
	        ngModelCtrl.$setValidity('time', false);
	        $scope.invalidHours = true;
	        $scope.invalidMinutes = true;
	      } else {
	        makeValid();
	      }
	      updateTemplate();
	    }
	  };

	  // Call internally when we know that model is valid.
	  function refresh( keyboardChange ) {
	    makeValid();
	    ngModelCtrl.$setViewValue( new Date(selected) );
	    updateTemplate( keyboardChange );
	  }

	  function makeValid() {
	    ngModelCtrl.$setValidity('time', true);
	    $scope.invalidHours = false;
	    $scope.invalidMinutes = false;
	  }

	  function updateTemplate( keyboardChange ) {
	    var hours = selected.getHours(), minutes = selected.getMinutes();

	    if ( $scope.showMeridian ) {
	      hours = ( hours === 0 || hours === 12 ) ? 12 : hours % 12; // Convert 24 to 12 hour system
	    }

	    $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
	    if (keyboardChange !== 'm') {
	      $scope.minutes = pad(minutes);
	    }
	    $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
	  }

	  function addMinutes(date,  minutes) {
	    var dt = new Date(date.getTime() + minutes * 60000);
	    var newDate = new Date(date);
	    newDate.setHours(dt.getHours(), dt.getMinutes());
	    return newDate;
	  }

	  function addMinutesToSelected( minutes ) {
	    selected = addMinutes( selected, minutes );
	    refresh();
	  }
	  
	  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
	    $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;
	  
	  $scope.incrementHours = function() {
	    if (!$scope.noIncrementHours()) {
	      addMinutesToSelected(hourStep * 60);
	    }
	  };
	  $scope.decrementHours = function() {
	    if (!$scope.noDecrementHours()) {
	      addMinutesToSelected(-hourStep * 60);
	    }
	  };
	  $scope.incrementMinutes = function() {
	    if (!$scope.noIncrementMinutes()) {
	      addMinutesToSelected(minuteStep);
	    }
	  };
	  $scope.decrementMinutes = function() {
	    if (!$scope.noDecrementMinutes()) {
	      addMinutesToSelected(-minuteStep);
	    }
	  };
	  $scope.toggleMeridian = function() {
	    if (!$scope.noToggleMeridian()) {
	      addMinutesToSelected(12 * 60 * (selected.getHours() < 12 ? 1 : -1));
	    }
	  };
	}])

	.directive('timepicker', function () {
	  return {
	    restrict: 'EA',
	    require: ['timepicker', '?^ngModel'],
	    controller:'TimepickerController',
	    replace: true,
	    scope: {},
	    templateUrl: 'template/timepicker/timepicker.html',
	    link: function(scope, element, attrs, ctrls) {
	      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if ( ngModelCtrl ) {
	        timepickerCtrl.init( ngModelCtrl, element.find('input') );
	      }
	    }
	  };
	});

	angular.module('ui.bootstrap.transition', [])

	.value('$transitionSuppressDeprecated', false)
	/**
	 * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
	 * @param  {DOMElement} element  The DOMElement that will be animated.
	 * @param  {string|object|function} trigger  The thing that will cause the transition to start:
	 *   - As a string, it represents the css class to be added to the element.
	 *   - As an object, it represents a hash of style attributes to be applied to the element.
	 *   - As a function, it represents a function to be called that will cause the transition to occur.
	 * @return {Promise}  A promise that is resolved when the transition finishes.
	 */
	.factory('$transition', [
	        '$q', '$timeout', '$rootScope', '$log', '$transitionSuppressDeprecated',
	function($q ,  $timeout ,  $rootScope ,  $log ,  $transitionSuppressDeprecated) {

	  if (!$transitionSuppressDeprecated) {
	    $log.warn('$transition is now deprecated. Use $animate from ngAnimate instead.');
	  }

	  var $transition = function(element, trigger, options) {
	    options = options || {};
	    var deferred = $q.defer();
	    var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];

	    var transitionEndHandler = function(event) {
	      $rootScope.$apply(function() {
	        element.unbind(endEventName, transitionEndHandler);
	        deferred.resolve(element);
	      });
	    };

	    if (endEventName) {
	      element.bind(endEventName, transitionEndHandler);
	    }

	    // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
	    $timeout(function() {
	      if ( angular.isString(trigger) ) {
	        element.addClass(trigger);
	      } else if ( angular.isFunction(trigger) ) {
	        trigger(element);
	      } else if ( angular.isObject(trigger) ) {
	        element.css(trigger);
	      }
	      //If browser does not support transitions, instantly resolve
	      if ( !endEventName ) {
	        deferred.resolve(element);
	      }
	    });

	    // Add our custom cancel function to the promise that is returned
	    // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
	    // i.e. it will therefore never raise a transitionEnd event for that transition
	    deferred.promise.cancel = function() {
	      if ( endEventName ) {
	        element.unbind(endEventName, transitionEndHandler);
	      }
	      deferred.reject('Transition cancelled');
	    };

	    return deferred.promise;
	  };

	  // Work out the name of the transitionEnd event
	  var transElement = document.createElement('trans');
	  var transitionEndEventNames = {
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'transitionend',
	    'OTransition': 'oTransitionEnd',
	    'transition': 'transitionend'
	  };
	  var animationEndEventNames = {
	    'WebkitTransition': 'webkitAnimationEnd',
	    'MozTransition': 'animationend',
	    'OTransition': 'oAnimationEnd',
	    'transition': 'animationend'
	  };
	  function findEndEventName(endEventNames) {
	    for (var name in endEventNames){
	      if (transElement.style[name] !== undefined) {
	        return endEventNames[name];
	      }
	    }
	  }
	  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
	  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
	  return $transition;
	}]);

	angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml'])

	/**
	 * A helper service that can parse typeahead's syntax (string provided by users)
	 * Extracted to a separate service for ease of unit testing
	 */
	  .factory('typeaheadParser', ['$parse', function ($parse) {

	  //                      00000111000000000000022200000000000000003333333333333330000000000044000
	  var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;

	  return {
	    parse:function (input) {

	      var match = input.match(TYPEAHEAD_REGEXP);
	      if (!match) {
	        throw new Error(
	          'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
	            ' but got "' + input + '".');
	      }

	      return {
	        itemName:match[3],
	        source:$parse(match[4]),
	        viewMapper:$parse(match[2] || match[1]),
	        modelMapper:$parse(match[1])
	      };
	    }
	  };
	}])

	  .directive('typeahead', ['$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$position', 'typeaheadParser',
	       function ($compile, $parse, $q, $timeout, $document, $window, $rootScope, $position, typeaheadParser) {

	  var HOT_KEYS = [9, 13, 27, 38, 40];
	  var eventDebounceTime = 200;

	  return {
	    require:'ngModel',
	    link:function (originalScope, element, attrs, modelCtrl) {

	      //SUPPORTED ATTRIBUTES (OPTIONS)

	      //minimal no of characters that needs to be entered before typeahead kicks-in
	      var minLength = originalScope.$eval(attrs.typeaheadMinLength);
	      if (!minLength && minLength !== 0) {
	        minLength = 1;
	      }

	      //minimal wait time after last character typed before typeahead kicks-in
	      var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

	      //should it restrict model values to the ones selected from the popup only?
	      var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;

	      //binding to a variable that indicates if matches are being retrieved asynchronously
	      var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

	      //a callback executed when a match is selected
	      var onSelectCallback = $parse(attrs.typeaheadOnSelect);

	      //should it select highlighted popup value when losing focus?
	      var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;

	      //binding to a variable that indicates if there were no results after the query is completed
	      var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;

	      var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

	      var appendToBody =  attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

	      var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

	      //If input matches an item of the list exactly, select it automatically
	      var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;

	      //INTERNAL VARIABLES

	      //model setter executed upon match selection
	      var $setModelValue = $parse(attrs.ngModel).assign;

	      //expressions used by typeahead
	      var parserResult = typeaheadParser.parse(attrs.typeahead);

	      var hasFocus;

	      //Used to avoid bug in iOS webview where iOS keyboard does not fire
	      //mousedown & mouseup events
	      //Issue #3699
	      var selected;

	      //create a child scope for the typeahead directive so we are not polluting original scope
	      //with typeahead-specific data (matches, query etc.)
	      var scope = originalScope.$new();
	      originalScope.$on('$destroy', function(){
	        scope.$destroy();
	      });

	      // WAI-ARIA
	      var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
	      element.attr({
	        'aria-autocomplete': 'list',
	        'aria-expanded': false,
	        'aria-owns': popupId
	      });

	      //pop-up element used to display matches
	      var popUpEl = angular.element('<div typeahead-popup></div>');
	      popUpEl.attr({
	        id: popupId,
	        matches: 'matches',
	        active: 'activeIdx',
	        select: 'select(activeIdx)',
	        'move-in-progress': 'moveInProgress',
	        query: 'query',
	        position: 'position'
	      });
	      //custom item template
	      if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
	        popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
	      }

	      var resetMatches = function() {
	        scope.matches = [];
	        scope.activeIdx = -1;
	        element.attr('aria-expanded', false);
	      };

	      var getMatchId = function(index) {
	        return popupId + '-option-' + index;
	      };

	      // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
	      // This attribute is added or removed automatically when the `activeIdx` changes.
	      scope.$watch('activeIdx', function(index) {
	        if (index < 0) {
	          element.removeAttr('aria-activedescendant');
	        } else {
	          element.attr('aria-activedescendant', getMatchId(index));
	        }
	      });

	      var inputIsExactMatch = function(inputValue, index) {

	        if (scope.matches.length > index && inputValue) {
	          return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
	        }

	        return false;
	      };

	      var getMatchesAsync = function(inputValue) {

	        var locals = {$viewValue: inputValue};
	        isLoadingSetter(originalScope, true);
	        isNoResultsSetter(originalScope, false);
	        $q.when(parserResult.source(originalScope, locals)).then(function(matches) {

	          //it might happen that several async queries were in progress if a user were typing fast
	          //but we are interested only in responses that correspond to the current view value
	          var onCurrentRequest = (inputValue === modelCtrl.$viewValue);
	          if (onCurrentRequest && hasFocus) {
	            if (matches && matches.length > 0) {

	              scope.activeIdx = focusFirst ? 0 : -1;
	              isNoResultsSetter(originalScope, false);
	              scope.matches.length = 0;

	              //transform labels
	              for(var i=0; i<matches.length; i++) {
	                locals[parserResult.itemName] = matches[i];
	                scope.matches.push({
	                  id: getMatchId(i),
	                  label: parserResult.viewMapper(scope, locals),
	                  model: matches[i]
	                });
	              }

	              scope.query = inputValue;
	              //position pop-up with matches - we need to re-calculate its position each time we are opening a window
	              //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
	              //due to other elements being rendered
	              recalculatePosition();

	              element.attr('aria-expanded', true);

	              //Select the single remaining option if user input matches
	              if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
	                scope.select(0);
	              }
	            } else {
	              resetMatches();
	              isNoResultsSetter(originalScope, true);
	            }
	          }
	          if (onCurrentRequest) {
	            isLoadingSetter(originalScope, false);
	          }
	        }, function(){
	          resetMatches();
	          isLoadingSetter(originalScope, false);
	          isNoResultsSetter(originalScope, true);
	        });
	      };

	      // bind events only if appendToBody params exist - performance feature
	      if (appendToBody) {
	        angular.element($window).bind('resize', fireRecalculating);
	        $document.find('body').bind('scroll', fireRecalculating);
	      }

	      // Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	      var timeoutEventPromise;

	      // Default progress type
	      scope.moveInProgress = false;

	      function fireRecalculating() {
	        if(!scope.moveInProgress){
	          scope.moveInProgress = true;
	          scope.$digest();
	        }

	        // Cancel previous timeout
	        if (timeoutEventPromise) {
	          $timeout.cancel(timeoutEventPromise);
	        }

	        // Debounced executing recalculate after events fired
	        timeoutEventPromise = $timeout(function () {
	          // if popup is visible
	          if (scope.matches.length) {
	            recalculatePosition();
	          }

	          scope.moveInProgress = false;
	          scope.$digest();
	        }, eventDebounceTime);
	      }

	      // recalculate actual position and set new values to scope
	      // after digest loop is popup in right position
	      function recalculatePosition() {
	        scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	        scope.position.top += element.prop('offsetHeight');
	      }

	      resetMatches();

	      //we need to propagate user's query so we can higlight matches
	      scope.query = undefined;

	      //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	      var timeoutPromise;

	      var scheduleSearchWithTimeout = function(inputValue) {
	        timeoutPromise = $timeout(function () {
	          getMatchesAsync(inputValue);
	        }, waitTime);
	      };

	      var cancelPreviousTimeout = function() {
	        if (timeoutPromise) {
	          $timeout.cancel(timeoutPromise);
	        }
	      };

	      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
	      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
	      modelCtrl.$parsers.unshift(function (inputValue) {

	        hasFocus = true;

	        if (minLength === 0 || inputValue && inputValue.length >= minLength) {
	          if (waitTime > 0) {
	            cancelPreviousTimeout();
	            scheduleSearchWithTimeout(inputValue);
	          } else {
	            getMatchesAsync(inputValue);
	          }
	        } else {
	          isLoadingSetter(originalScope, false);
	          cancelPreviousTimeout();
	          resetMatches();
	        }

	        if (isEditable) {
	          return inputValue;
	        } else {
	          if (!inputValue) {
	            // Reset in case user had typed something previously.
	            modelCtrl.$setValidity('editable', true);
	            return null;
	          } else {
	            modelCtrl.$setValidity('editable', false);
	            return undefined;
	          }
	        }
	      });

	      modelCtrl.$formatters.push(function (modelValue) {

	        var candidateViewValue, emptyViewValue;
	        var locals = {};

	        // The validity may be set to false via $parsers (see above) if
	        // the model is restricted to selected values. If the model
	        // is set manually it is considered to be valid.
	        if (!isEditable) {
	          modelCtrl.$setValidity('editable', true);
	        }

	        if (inputFormatter) {

	          locals.$model = modelValue;
	          return inputFormatter(originalScope, locals);

	        } else {

	          //it might happen that we don't have enough info to properly render input value
	          //we need to check for this situation and simply return model value if we can't apply custom formatting
	          locals[parserResult.itemName] = modelValue;
	          candidateViewValue = parserResult.viewMapper(originalScope, locals);
	          locals[parserResult.itemName] = undefined;
	          emptyViewValue = parserResult.viewMapper(originalScope, locals);

	          return candidateViewValue!== emptyViewValue ? candidateViewValue : modelValue;
	        }
	      });

	      scope.select = function (activeIdx) {
	        //called from within the $digest() cycle
	        var locals = {};
	        var model, item;

	        selected = true;
	        locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
	        model = parserResult.modelMapper(originalScope, locals);
	        $setModelValue(originalScope, model);
	        modelCtrl.$setValidity('editable', true);
	        modelCtrl.$setValidity('parse', true);

	        onSelectCallback(originalScope, {
	          $item: item,
	          $model: model,
	          $label: parserResult.viewMapper(originalScope, locals)
	        });

	        resetMatches();

	        //return focus to the input element if a match was selected via a mouse click event
	        // use timeout to avoid $rootScope:inprog error
	        $timeout(function() { element[0].focus(); }, 0, false);
	      };

	      //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
	      element.bind('keydown', function (evt) {

	        //typeahead is open and an "interesting" key was pressed
	        if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
	          return;
	        }

	        // if there's nothing selected (i.e. focusFirst) and enter or tab is hit, clear the results
	        if (scope.activeIdx === -1 && (evt.which === 9 || evt.which === 13)) {
	          resetMatches();
	          scope.$digest();
	          return;
	        }

	        evt.preventDefault();

	        if (evt.which === 40) {
	          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
	          scope.$digest();

	        } else if (evt.which === 38) {
	          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
	          scope.$digest();

	        } else if (evt.which === 13 || evt.which === 9) {
	          scope.$apply(function () {
	            scope.select(scope.activeIdx);
	          });

	        } else if (evt.which === 27) {
	          evt.stopPropagation();

	          resetMatches();
	          scope.$digest();
	        }
	      });

	      element.bind('blur', function () {
	        if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
	          selected = true;
	          scope.$apply(function () {
	            scope.select(scope.activeIdx);
	          });
	        }
	        hasFocus = false;
	        selected = false;
	      });

	      // Keep reference to click handler to unbind it.
	      var dismissClickHandler = function (evt) {
	        // Issue #3973
	        // Firefox treats right click as a click on document
	        if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
	          resetMatches();
	          if (!$rootScope.$$phase) {
	            scope.$digest();
	          }
	        }
	      };

	      $document.bind('click', dismissClickHandler);

	      originalScope.$on('$destroy', function(){
	        $document.unbind('click', dismissClickHandler);
	        if (appendToBody) {
	          $popup.remove();
	        }
	        // Prevent jQuery cache memory leak
	        popUpEl.remove();
	      });

	      var $popup = $compile(popUpEl)(scope);

	      if (appendToBody) {
	        $document.find('body').append($popup);
	      } else {
	        element.after($popup);
	      }
	    }
	  };

	}])

	  .directive('typeaheadPopup', function () {
	    return {
	      restrict:'EA',
	      scope:{
	        matches:'=',
	        query:'=',
	        active:'=',
	        position:'&',
	        moveInProgress:'=',
	        select:'&'
	      },
	      replace:true,
	      templateUrl:'template/typeahead/typeahead-popup.html',
	      link:function (scope, element, attrs) {

	        scope.templateUrl = attrs.templateUrl;

	        scope.isOpen = function () {
	          return scope.matches.length > 0;
	        };

	        scope.isActive = function (matchIdx) {
	          return scope.active == matchIdx;
	        };

	        scope.selectActive = function (matchIdx) {
	          scope.active = matchIdx;
	        };

	        scope.selectMatch = function (activeIdx) {
	          scope.select({activeIdx:activeIdx});
	        };
	      }
	    };
	  })

	  .directive('typeaheadMatch', ['$templateRequest', '$compile', '$parse', function ($templateRequest, $compile, $parse) {
	    return {
	      restrict:'EA',
	      scope:{
	        index:'=',
	        match:'=',
	        query:'='
	      },
	      link:function (scope, element, attrs) {
	        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
	        $templateRequest(tplUrl).then(function(tplContent) {
	          $compile(tplContent.trim())(scope, function(clonedElement){
	            element.replaceWith(clonedElement);
	          });
	        });
	      }
	    };
	  }])

	  .filter('typeaheadHighlight', function() {

	    function escapeRegexp(queryToEscape) {
	      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	    }

	    return function(matchItem, query) {
	      return query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
	    };
	  });

	angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/accordion/accordion-group.html",
	    "<div class=\"panel panel-default\" ng-class=\"{'panel-open': isOpen}\">\n" +
	    "  <div class=\"panel-heading\">\n" +
	    "    <h4 class=\"panel-title\">\n" +
	    "      <a href tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\"><span ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
	    "    </h4>\n" +
	    "  </div>\n" +
	    "  <div class=\"panel-collapse collapse\" collapse=\"!isOpen\">\n" +
	    "	  <div class=\"panel-body\" ng-transclude></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/accordion/accordion.html",
	    "<div class=\"panel-group\" ng-transclude></div>");
	}]);

	angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/alert/alert.html",
	    "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissible' : null]\" role=\"alert\">\n" +
	    "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close($event)\">\n" +
	    "        <span aria-hidden=\"true\">&times;</span>\n" +
	    "        <span class=\"sr-only\">Close</span>\n" +
	    "    </button>\n" +
	    "    <div ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/carousel/carousel.html",
	    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
	    "    <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
	    "        <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n" +
	    "    </ol>\n" +
	    "    <div class=\"carousel-inner\" ng-transclude></div>\n" +
	    "    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n" +
	    "    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/carousel/slide.html",
	    "<div ng-class=\"{\n" +
	    "    'active': active\n" +
	    "  }\" class=\"item text-center\" ng-transclude></div>\n" +
	    "");
	}]);

	angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/datepicker.html",
	    "<div ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
	    "  <daypicker ng-switch-when=\"day\" tabindex=\"0\"></daypicker>\n" +
	    "  <monthpicker ng-switch-when=\"month\" tabindex=\"0\"></monthpicker>\n" +
	    "  <yearpicker ng-switch-when=\"year\" tabindex=\"0\"></yearpicker>\n" +
	    "</div>");
	}]);

	angular.module("template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/day.html",
	    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
	    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
	    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/month.html",
	    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/popup.html",
	    "<ul class=\"dropdown-menu\" ng-if=\"isOpen\" style=\"display: block\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
	    "	<li ng-transclude></li>\n" +
	    "	<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\n" +
	    "		<span class=\"btn-group pull-left\">\n" +
	    "			<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select('today')\">{{ getText('current') }}</button>\n" +
	    "			<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText('clear') }}</button>\n" +
	    "		</span>\n" +
	    "		<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText('close') }}</button>\n" +
	    "	</li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/year.html",
	    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"3\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/modal/backdrop.html",
	    "<div class=\"modal-backdrop\"\n" +
	    "     modal-animation-class=\"fade\"\n" +
	    "     modal-in-class=\"in\"\n" +
	    "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" +
	    "></div>\n" +
	    "");
	}]);

	angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/modal/window.html",
	    "<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n" +
	    "    modal-animation-class=\"fade\"\n" +
	    "    modal-in-class=\"in\"\n" +
	    "	ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
	    "    <div class=\"modal-dialog\" ng-class=\"size ? 'modal-' + size : ''\"><div class=\"modal-content\" modal-transclude></div></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/pagination/pager.html",
	    "<ul class=\"pager\">\n" +
	    "  <li ng-class=\"{disabled: noPrevious(), previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-class=\"{disabled: noNext(), next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "</ul>");
	}]);

	angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/pagination/pagination.html",
	    "<ul class=\"pagination\">\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-first\"><a href ng-click=\"selectPage(1, $event)\">{{::getText('first')}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-prev\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-last\"><a href ng-click=\"selectPage(totalPages, $event)\">{{::getText('last')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-html-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-html-unsafe-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" bind-html-unsafe=\"content\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-template-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\"\n" +
	    "    tooltip-template-transclude=\"contentExp()\"\n" +
	    "    tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/popover/popover-html.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/popover/popover-html.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/popover/popover-template.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
	    "      <div class=\"popover-content\"\n" +
	    "        tooltip-template-transclude=\"contentExp()\"\n" +
	    "        tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/popover/popover.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/progressbar/bar.html",
	    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" style=\"min-width: 0;\" ng-transclude></div>\n" +
	    "");
	}]);

	angular.module("template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/progressbar/progress.html",
	    "<div class=\"progress\" ng-transclude></div>");
	}]);

	angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/progressbar/progressbar.html",
	    "<div class=\"progress\">\n" +
	    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" style=\"min-width: 0;\" ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/rating/rating.html",
	    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n" +
	    "    <span ng-repeat-start=\"r in range track by $index\" class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
	    "    <i ng-repeat-end ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\" ng-attr-title=\"{{r.title}}\" ></i>\n" +
	    "</span>\n" +
	    "");
	}]);

	angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tabs/tab.html",
	    "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
	    "  <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
	    "</li>\n" +
	    "");
	}]);

	angular.module("template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tabs/tabset.html",
	    "<div>\n" +
	    "  <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
	    "  <div class=\"tab-content\">\n" +
	    "    <div class=\"tab-pane\" \n" +
	    "         ng-repeat=\"tab in tabs\" \n" +
	    "         ng-class=\"{active: tab.active}\"\n" +
	    "         tab-content-transclude=\"tab\">\n" +
	    "    </div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/timepicker/timepicker.html",
	    "<table>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <td class=\"form-group\" ng-class=\"{'has-error': invalidHours}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\">\n" +
	    "      </td>\n" +
	    "      <td>:</td>\n" +
	    "      <td class=\"form-group\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\">\n" +
	    "      </td>\n" +
	    "      <td ng-show=\"showMeridian\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\n" +
	    "    </tr>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/typeahead/typeahead-match.html",
	    "<a href tabindex=\"-1\" bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></a>\n" +
	    "");
	}]);

	angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/typeahead/typeahead-popup.html",
	    "<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
	    "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\" role=\"option\" id=\"{{::match.id}}\">\n" +
	    "        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
	    "    </li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	!angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(angular, factory) {
	    'use strict';
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(angular) {
	            return factory(angular);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        return factory(angular);
	    }
	}(typeof angular === 'undefined' ? null : angular, function(angular) {

	    'use strict';

	    /**
	     * @ngdoc overview
	     * @name ngStorage
	     */

	    angular.module('ngStorage', [])

	    /**
	     * @ngdoc object
	     * @name ngStorage.$localStorage
	     * @requires $rootScope
	     * @requires $window
	     */

	    .factory('$localStorage', _storageFactory('localStorage'))

	    /**
	     * @ngdoc object
	     * @name ngStorage.$sessionStorage
	     * @requires $rootScope
	     * @requires $window
	     */

	    .factory('$sessionStorage', _storageFactory('sessionStorage'));

	    function _storageFactory(storageType) {
	        return [
	            '$rootScope',
	            '$window',
	            '$log',
	            '$timeout',

	            function(
	                $rootScope,
	                $window,
	                $log,
	                $timeout
	            ){
	                function isStorageSupported(storageType) {

	                    // Some installations of IE, for an unknown reason, throw "SCRIPT5: Error: Access is denied"
	                    // when accessing window.localStorage. This happens before you try to do anything with it. Catch
	                    // that error and allow execution to continue.

	                    // fix 'SecurityError: DOM Exception 18' exception in Desktop Safari, Mobile Safari
	                    // when "Block cookies": "Always block" is turned on
	                    var supported;
	                    try {
	                        supported = $window[storageType];
	                    }
	                    catch (err) {
	                        supported = false;
	                    }

	                    // When Safari (OS X or iOS) is in private browsing mode, it appears as though localStorage
	                    // is available, but trying to call .setItem throws an exception below:
	                    // "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made to add something to storage that exceeded the quota."
	                    if (supported && storageType === 'localStorage') {
	                        var key = '__' + Math.round(Math.random() * 1e7);

	                        try {
	                            localStorage.setItem(key, key);
	                            localStorage.removeItem(key);
	                        }
	                        catch (err) {
	                            supported = false;
	                        }
	                    }

	                    return supported;
	                }

	                // #9: Assign a placeholder object if Web Storage is unavailable to prevent breaking the entire AngularJS app
	                var webStorage = isStorageSupported(storageType) || ($log.warn('This browser does not support Web Storage!'), {setItem: function() {}, getItem: function() {}}),
	                    $storage = {
	                        $default: function(items) {
	                            for (var k in items) {
	                                angular.isDefined($storage[k]) || ($storage[k] = items[k]);
	                            }

	                            return $storage;
	                        },
	                        $reset: function(items) {
	                            for (var k in $storage) {
	                                '$' === k[0] || (delete $storage[k] && webStorage.removeItem('ngStorage-' + k));
	                            }

	                            return $storage.$default(items);
	                        }
	                    },
	                    _last$storage,
	                    _debounce;

	                try {
	                    webStorage = $window[storageType];
	                    webStorage.length;
	                } catch(e) {
	                    $log.warn('This browser does not support Web Storage!');
	                    webStorage = {};
	                }

	                for (var i = 0, l = webStorage.length, k; i < l; i++) {
	                    // #8, #10: `webStorage.key(i)` may be an empty string (or throw an exception in IE9 if `webStorage` is empty)
	                    (k = webStorage.key(i)) && 'ngStorage-' === k.slice(0, 10) && ($storage[k.slice(10)] = angular.fromJson(webStorage.getItem(k)));
	                }

	                _last$storage = angular.copy($storage);

	                $rootScope.$watch(function() {
	                    var temp$storage;
	                    _debounce || (_debounce = $timeout(function() {
	                        _debounce = null;

	                        if (!angular.equals($storage, _last$storage)) {
	                            temp$storage = angular.copy(_last$storage);
	                            angular.forEach($storage, function(v, k) {
	                                angular.isDefined(v) && '$' !== k[0] && webStorage.setItem('ngStorage-' + k, angular.toJson(v));

	                                delete temp$storage[k];
	                            });

	                            for (var k in temp$storage) {
	                                webStorage.removeItem('ngStorage-' + k);
	                            }

	                            _last$storage = angular.copy($storage);
	                        }
	                    }, 100, false));
	                });

	                // #6: Use `$window.addEventListener` instead of `angular.element` to avoid the jQuery-specific `event.originalEvent`
	                'localStorage' === storageType && $window.addEventListener && $window.addEventListener('storage', function(event) {
	                    if ('ngStorage-' === event.key.slice(0, 10)) {
	                        event.newValue ? $storage[event.key.slice(10)] = angular.fromJson(event.newValue) : delete $storage[event.key.slice(10)];

	                        _last$storage = angular.copy($storage);

	                        $rootScope.$apply();
	                    }
	                });

	                return $storage;
	            }
	        ];
	    }

	}));


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * oclazyload - Load modules on demand (lazy load) with angularJS
	 * @version v1.0.4
	 * @link https://github.com/ocombe/ocLazyLoad
	 * @license MIT
	 * @author Olivier Combe <olivier.combe@gmail.com>
	 */
	(function (angular, window) {
	    'use strict';

	    var regModules = ['ng', 'oc.lazyLoad'],
	        regInvokes = {},
	        regConfigs = [],
	        modulesToLoad = [],
	        // modules to load from angular.module or other sources
	    realModules = [],
	        // real modules called from angular.module
	    recordDeclarations = [],
	        broadcast = angular.noop,
	        runBlocks = {},
	        justLoaded = [];

	    var ocLazyLoad = angular.module('oc.lazyLoad', ['ng']);

	    ocLazyLoad.provider('$ocLazyLoad', ["$controllerProvider", "$provide", "$compileProvider", "$filterProvider", "$injector", "$animateProvider", function ($controllerProvider, $provide, $compileProvider, $filterProvider, $injector, $animateProvider) {
	        var modules = {},
	            providers = {
	            $controllerProvider: $controllerProvider,
	            $compileProvider: $compileProvider,
	            $filterProvider: $filterProvider,
	            $provide: $provide, // other things (constant, decorator, provider, factory, service)
	            $injector: $injector,
	            $animateProvider: $animateProvider
	        },
	            debug = false,
	            events = false,
	            moduleCache = [];

	        moduleCache.push = function (value) {
	            if (this.indexOf(value) === -1) {
	                Array.prototype.push.apply(this, arguments);
	            }
	        };

	        this.config = function (config) {
	            // If we want to define modules configs
	            if (angular.isDefined(config.modules)) {
	                if (angular.isArray(config.modules)) {
	                    angular.forEach(config.modules, function (moduleConfig) {
	                        modules[moduleConfig.name] = moduleConfig;
	                    });
	                } else {
	                    modules[config.modules.name] = config.modules;
	                }
	            }

	            if (angular.isDefined(config.debug)) {
	                debug = config.debug;
	            }

	            if (angular.isDefined(config.events)) {
	                events = config.events;
	            }
	        };

	        /**
	         * Get the list of existing registered modules
	         * @param element
	         */
	        this._init = function _init(element) {
	            // this is probably useless now because we override angular.bootstrap
	            if (modulesToLoad.length === 0) {
	                var elements = [element],
	                    names = ['ng:app', 'ng-app', 'x-ng-app', 'data-ng-app'],
	                    NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,
	                    append = function append(elm) {
	                    return elm && elements.push(elm);
	                };

	                angular.forEach(names, function (name) {
	                    names[name] = true;
	                    append(document.getElementById(name));
	                    name = name.replace(':', '\\:');
	                    if (typeof element[0] !== 'undefined' && element[0].querySelectorAll) {
	                        angular.forEach(element[0].querySelectorAll('.' + name), append);
	                        angular.forEach(element[0].querySelectorAll('.' + name + '\\:'), append);
	                        angular.forEach(element[0].querySelectorAll('[' + name + ']'), append);
	                    }
	                });

	                angular.forEach(elements, function (elm) {
	                    if (modulesToLoad.length === 0) {
	                        var className = ' ' + element.className + ' ';
	                        var match = NG_APP_CLASS_REGEXP.exec(className);
	                        if (match) {
	                            modulesToLoad.push((match[2] || '').replace(/\s+/g, ','));
	                        } else {
	                            angular.forEach(elm.attributes, function (attr) {
	                                if (modulesToLoad.length === 0 && names[attr.name]) {
	                                    modulesToLoad.push(attr.value);
	                                }
	                            });
	                        }
	                    }
	                });
	            }

	            if (modulesToLoad.length === 0 && !((window.jasmine || window.mocha) && angular.isDefined(angular.mock))) {
	                console.error('No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.');
	            }

	            var addReg = function addReg(moduleName) {
	                if (regModules.indexOf(moduleName) === -1) {
	                    // register existing modules
	                    regModules.push(moduleName);
	                    var mainModule = angular.module(moduleName);

	                    // register existing components (directives, services, ...)
	                    _invokeQueue(null, mainModule._invokeQueue, moduleName);
	                    _invokeQueue(null, mainModule._configBlocks, moduleName); // angular 1.3+

	                    angular.forEach(mainModule.requires, addReg);
	                }
	            };

	            angular.forEach(modulesToLoad, function (moduleName) {
	                addReg(moduleName);
	            });

	            modulesToLoad = []; // reset for next bootstrap
	            recordDeclarations.pop(); // wait for the next lazy load
	        };

	        /**
	         * Like JSON.stringify but that doesn't throw on circular references
	         * @param obj
	         */
	        var stringify = function stringify(obj) {
	            var cache = [];
	            return JSON.stringify(obj, function (key, value) {
	                if (angular.isObject(value) && value !== null) {
	                    if (cache.indexOf(value) !== -1) {
	                        // Circular reference found, discard key
	                        return;
	                    }
	                    // Store value in our collection
	                    cache.push(value);
	                }
	                return value;
	            });
	        };

	        var hashCode = function hashCode(str) {
	            var hash = 0,
	                i,
	                chr,
	                len;
	            if (str.length == 0) {
	                return hash;
	            }
	            for (i = 0, len = str.length; i < len; i++) {
	                chr = str.charCodeAt(i);
	                hash = (hash << 5) - hash + chr;
	                hash |= 0; // Convert to 32bit integer
	            }
	            return hash;
	        };

	        function _register(providers, registerModules, params) {
	            if (registerModules) {
	                var k,
	                    moduleName,
	                    moduleFn,
	                    tempRunBlocks = [];
	                for (k = registerModules.length - 1; k >= 0; k--) {
	                    moduleName = registerModules[k];
	                    if (!angular.isString(moduleName)) {
	                        moduleName = getModuleName(moduleName);
	                    }
	                    if (!moduleName || justLoaded.indexOf(moduleName) !== -1 || modules[moduleName] && realModules.indexOf(moduleName) === -1) {
	                        continue;
	                    }
	                    // new if not registered
	                    var newModule = regModules.indexOf(moduleName) === -1;
	                    moduleFn = ngModuleFct(moduleName);
	                    if (newModule) {
	                        regModules.push(moduleName);
	                        _register(providers, moduleFn.requires, params);
	                    }
	                    if (moduleFn._runBlocks.length > 0) {
	                        // new run blocks detected! Replace the old ones (if existing)
	                        runBlocks[moduleName] = [];
	                        while (moduleFn._runBlocks.length > 0) {
	                            runBlocks[moduleName].push(moduleFn._runBlocks.shift());
	                        }
	                    }
	                    if (angular.isDefined(runBlocks[moduleName]) && (newModule || params.rerun)) {
	                        tempRunBlocks = tempRunBlocks.concat(runBlocks[moduleName]);
	                    }
	                    _invokeQueue(providers, moduleFn._invokeQueue, moduleName, params.reconfig);
	                    _invokeQueue(providers, moduleFn._configBlocks, moduleName, params.reconfig); // angular 1.3+
	                    broadcast(newModule ? 'ocLazyLoad.moduleLoaded' : 'ocLazyLoad.moduleReloaded', moduleName);
	                    registerModules.pop();
	                    justLoaded.push(moduleName);
	                }
	                // execute the run blocks at the end
	                var instanceInjector = providers.getInstanceInjector();
	                angular.forEach(tempRunBlocks, function (fn) {
	                    instanceInjector.invoke(fn);
	                });
	            }
	        }

	        function _registerInvokeList(args, moduleName) {
	            var invokeList = args[2][0],
	                type = args[1],
	                newInvoke = false;
	            if (angular.isUndefined(regInvokes[moduleName])) {
	                regInvokes[moduleName] = {};
	            }
	            if (angular.isUndefined(regInvokes[moduleName][type])) {
	                regInvokes[moduleName][type] = {};
	            }
	            var onInvoke = function onInvoke(invokeName, signature) {
	                if (!regInvokes[moduleName][type].hasOwnProperty(invokeName)) {
	                    regInvokes[moduleName][type][invokeName] = [];
	                }
	                if (regInvokes[moduleName][type][invokeName].indexOf(signature) === -1) {
	                    newInvoke = true;
	                    regInvokes[moduleName][type][invokeName].push(signature);
	                    broadcast('ocLazyLoad.componentLoaded', [moduleName, type, invokeName]);
	                }
	            };

	            function signature(data) {
	                if (angular.isArray(data)) {
	                    // arrays are objects, we need to test for it first
	                    return hashCode(data.toString());
	                } else if (angular.isObject(data)) {
	                    // constants & values for example
	                    return hashCode(stringify(data));
	                } else {
	                    if (angular.isDefined(data) && data !== null) {
	                        return hashCode(data.toString());
	                    } else {
	                        // null & undefined constants
	                        return data;
	                    }
	                }
	            }

	            if (angular.isString(invokeList)) {
	                onInvoke(invokeList, signature(args[2][1]));
	            } else if (angular.isObject(invokeList)) {
	                angular.forEach(invokeList, function (invoke, key) {
	                    if (angular.isString(invoke)) {
	                        // decorators for example
	                        onInvoke(invoke, signature(invokeList[1]));
	                    } else {
	                        // components registered as object lists {"componentName": function() {}}
	                        onInvoke(key, signature(invoke));
	                    }
	                });
	            } else {
	                return false;
	            }
	            return newInvoke;
	        }

	        function _invokeQueue(providers, queue, moduleName, reconfig) {
	            if (!queue) {
	                return;
	            }

	            var i, len, args, provider;
	            for (i = 0, len = queue.length; i < len; i++) {
	                args = queue[i];
	                if (angular.isArray(args)) {
	                    if (providers !== null) {
	                        if (providers.hasOwnProperty(args[0])) {
	                            provider = providers[args[0]];
	                        } else {
	                            throw new Error('unsupported provider ' + args[0]);
	                        }
	                    }
	                    var isNew = _registerInvokeList(args, moduleName);
	                    if (args[1] !== 'invoke') {
	                        if (isNew && angular.isDefined(provider)) {
	                            provider[args[1]].apply(provider, args[2]);
	                        }
	                    } else {
	                        // config block
	                        var callInvoke = function callInvoke(fct) {
	                            var invoked = regConfigs.indexOf(moduleName + '-' + fct);
	                            if (invoked === -1 || reconfig) {
	                                if (invoked === -1) {
	                                    regConfigs.push(moduleName + '-' + fct);
	                                }
	                                if (angular.isDefined(provider)) {
	                                    provider[args[1]].apply(provider, args[2]);
	                                }
	                            }
	                        };
	                        if (angular.isFunction(args[2][0])) {
	                            callInvoke(args[2][0]);
	                        } else if (angular.isArray(args[2][0])) {
	                            for (var j = 0, jlen = args[2][0].length; j < jlen; j++) {
	                                if (angular.isFunction(args[2][0][j])) {
	                                    callInvoke(args[2][0][j]);
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        }

	        function getModuleName(module) {
	            var moduleName = null;
	            if (angular.isString(module)) {
	                moduleName = module;
	            } else if (angular.isObject(module) && module.hasOwnProperty('name') && angular.isString(module.name)) {
	                moduleName = module.name;
	            }
	            return moduleName;
	        }

	        function moduleExists(moduleName) {
	            if (!angular.isString(moduleName)) {
	                return false;
	            }
	            try {
	                return ngModuleFct(moduleName);
	            } catch (e) {
	                if (/No module/.test(e) || e.message.indexOf('$injector:nomod') > -1) {
	                    return false;
	                }
	            }
	        }

	        this.$get = ["$log", "$rootElement", "$rootScope", "$cacheFactory", "$q", function ($log, $rootElement, $rootScope, $cacheFactory, $q) {
	            var instanceInjector,
	                filesCache = $cacheFactory('ocLazyLoad');

	            if (!debug) {
	                $log = {};
	                $log['error'] = angular.noop;
	                $log['warn'] = angular.noop;
	                $log['info'] = angular.noop;
	            }

	            // Make this lazy because when $get() is called the instance injector hasn't been assigned to the rootElement yet
	            providers.getInstanceInjector = function () {
	                return instanceInjector ? instanceInjector : instanceInjector = $rootElement.data('$injector') || angular.injector();
	            };

	            broadcast = function broadcast(eventName, params) {
	                if (events) {
	                    $rootScope.$broadcast(eventName, params);
	                }
	                if (debug) {
	                    $log.info(eventName, params);
	                }
	            };

	            function reject(e) {
	                var deferred = $q.defer();
	                $log.error(e.message);
	                deferred.reject(e);
	                return deferred.promise;
	            }

	            return {
	                _broadcast: broadcast,

	                _$log: $log,

	                /**
	                 * Returns the files cache used by the loaders to store the files currently loading
	                 * @returns {*}
	                 */
	                _getFilesCache: function getFilesCache() {
	                    return filesCache;
	                },

	                /**
	                 * Let the service know that it should monitor angular.module because files are loading
	                 * @param watch boolean
	                 */
	                toggleWatch: function toggleWatch(watch) {
	                    if (watch) {
	                        recordDeclarations.push(true);
	                    } else {
	                        recordDeclarations.pop();
	                    }
	                },

	                /**
	                 * Let you get a module config object
	                 * @param moduleName String the name of the module
	                 * @returns {*}
	                 */
	                getModuleConfig: function getModuleConfig(moduleName) {
	                    if (!angular.isString(moduleName)) {
	                        throw new Error('You need to give the name of the module to get');
	                    }
	                    if (!modules[moduleName]) {
	                        return null;
	                    }
	                    return angular.copy(modules[moduleName]);
	                },

	                /**
	                 * Let you define a module config object
	                 * @param moduleConfig Object the module config object
	                 * @returns {*}
	                 */
	                setModuleConfig: function setModuleConfig(moduleConfig) {
	                    if (!angular.isObject(moduleConfig)) {
	                        throw new Error('You need to give the module config object to set');
	                    }
	                    modules[moduleConfig.name] = moduleConfig;
	                    return moduleConfig;
	                },

	                /**
	                 * Returns the list of loaded modules
	                 * @returns {string[]}
	                 */
	                getModules: function getModules() {
	                    return regModules;
	                },

	                /**
	                 * Let you check if a module has been loaded into Angular or not
	                 * @param modulesNames String/Object a module name, or a list of module names
	                 * @returns {boolean}
	                 */
	                isLoaded: function isLoaded(modulesNames) {
	                    var moduleLoaded = function moduleLoaded(module) {
	                        var isLoaded = regModules.indexOf(module) > -1;
	                        if (!isLoaded) {
	                            isLoaded = !!moduleExists(module);
	                        }
	                        return isLoaded;
	                    };
	                    if (angular.isString(modulesNames)) {
	                        modulesNames = [modulesNames];
	                    }
	                    if (angular.isArray(modulesNames)) {
	                        var i, len;
	                        for (i = 0, len = modulesNames.length; i < len; i++) {
	                            if (!moduleLoaded(modulesNames[i])) {
	                                return false;
	                            }
	                        }
	                        return true;
	                    } else {
	                        throw new Error('You need to define the module(s) name(s)');
	                    }
	                },

	                /**
	                 * Given a module, return its name
	                 * @param module
	                 * @returns {String}
	                 */
	                _getModuleName: getModuleName,

	                /**
	                 * Returns a module if it exists
	                 * @param moduleName
	                 * @returns {module}
	                 */
	                _getModule: function getModule(moduleName) {
	                    try {
	                        return ngModuleFct(moduleName);
	                    } catch (e) {
	                        // this error message really suxx
	                        if (/No module/.test(e) || e.message.indexOf('$injector:nomod') > -1) {
	                            e.message = 'The module "' + stringify(moduleName) + '" that you are trying to load does not exist. ' + e.message;
	                        }
	                        throw e;
	                    }
	                },

	                /**
	                 * Check if a module exists and returns it if it does
	                 * @param moduleName
	                 * @returns {boolean}
	                 */
	                moduleExists: moduleExists,

	                /**
	                 * Load the dependencies, and might try to load new files depending on the config
	                 * @param moduleName (String or Array of Strings)
	                 * @param localParams
	                 * @returns {*}
	                 * @private
	                 */
	                _loadDependencies: function _loadDependencies(moduleName, localParams) {
	                    var loadedModule,
	                        requires,
	                        diff,
	                        promisesList = [],
	                        self = this;

	                    moduleName = self._getModuleName(moduleName);

	                    if (moduleName === null) {
	                        return $q.when();
	                    } else {
	                        try {
	                            loadedModule = self._getModule(moduleName);
	                        } catch (e) {
	                            return reject(e);
	                        }
	                        // get unloaded requires
	                        requires = self.getRequires(loadedModule);
	                    }

	                    angular.forEach(requires, function (requireEntry) {
	                        // If no configuration is provided, try and find one from a previous load.
	                        // If there isn't one, bail and let the normal flow run
	                        if (angular.isString(requireEntry)) {
	                            var config = self.getModuleConfig(requireEntry);
	                            if (config === null) {
	                                moduleCache.push(requireEntry); // We don't know about this module, but something else might, so push it anyway.
	                                return;
	                            }
	                            requireEntry = config;
	                            // ignore the name because it's probably not a real module name
	                            config.name = undefined;
	                        }

	                        // Check if this dependency has been loaded previously
	                        if (self.moduleExists(requireEntry.name)) {
	                            // compare against the already loaded module to see if the new definition adds any new files
	                            diff = requireEntry.files.filter(function (n) {
	                                return self.getModuleConfig(requireEntry.name).files.indexOf(n) < 0;
	                            });

	                            // If the module was redefined, advise via the console
	                            if (diff.length !== 0) {
	                                self._$log.warn('Module "', moduleName, '" attempted to redefine configuration for dependency. "', requireEntry.name, '"\n Additional Files Loaded:', diff);
	                            }

	                            // Push everything to the file loader, it will weed out the duplicates.
	                            if (angular.isDefined(self.filesLoader)) {
	                                // if a files loader is defined
	                                promisesList.push(self.filesLoader(requireEntry, localParams).then(function () {
	                                    return self._loadDependencies(requireEntry);
	                                }));
	                            } else {
	                                return reject(new Error('Error: New dependencies need to be loaded from external files (' + requireEntry.files + '), but no loader has been defined.'));
	                            }
	                            return;
	                        } else if (angular.isArray(requireEntry)) {
	                            var files = [];
	                            angular.forEach(requireEntry, function (entry) {
	                                // let's check if the entry is a file name or a config name
	                                var config = self.getModuleConfig(entry);
	                                if (config === null) {
	                                    files.push(entry);
	                                } else if (config.files) {
	                                    files = files.concat(config.files);
	                                }
	                            });
	                            if (files.length > 0) {
	                                requireEntry = {
	                                    files: files
	                                };
	                            }
	                        } else if (angular.isObject(requireEntry)) {
	                            if (requireEntry.hasOwnProperty('name') && requireEntry['name']) {
	                                // The dependency doesn't exist in the module cache and is a new configuration, so store and push it.
	                                self.setModuleConfig(requireEntry);
	                                moduleCache.push(requireEntry['name']);
	                            }
	                        }

	                        // Check if the dependency has any files that need to be loaded. If there are, push a new promise to the promise list.
	                        if (angular.isDefined(requireEntry.files) && requireEntry.files.length !== 0) {
	                            if (angular.isDefined(self.filesLoader)) {
	                                // if a files loader is defined
	                                promisesList.push(self.filesLoader(requireEntry, localParams).then(function () {
	                                    return self._loadDependencies(requireEntry);
	                                }));
	                            } else {
	                                return reject(new Error('Error: the module "' + requireEntry.name + '" is defined in external files (' + requireEntry.files + '), but no loader has been defined.'));
	                            }
	                        }
	                    });

	                    // Create a wrapper promise to watch the promise list and resolve it once everything is done.
	                    return $q.all(promisesList);
	                },

	                /**
	                 * Inject new modules into Angular
	                 * @param moduleName
	                 * @param localParams
	                 */
	                inject: function inject(moduleName) {
	                    var localParams = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	                    var self = this,
	                        deferred = $q.defer();
	                    if (angular.isDefined(moduleName) && moduleName !== null) {
	                        if (angular.isArray(moduleName)) {
	                            var promisesList = [];
	                            angular.forEach(moduleName, function (module) {
	                                promisesList.push(self.inject(module));
	                            });
	                            return $q.all(promisesList);
	                        } else {
	                            self._addToLoadList(self._getModuleName(moduleName), true);
	                        }
	                    }
	                    if (modulesToLoad.length > 0) {
	                        var res = modulesToLoad.slice(); // clean copy
	                        var loadNext = function loadNext(moduleName) {
	                            moduleCache.push(moduleName);
	                            self._loadDependencies(moduleName, localParams).then(function success() {
	                                try {
	                                    justLoaded = [];
	                                    _register(providers, moduleCache, localParams);
	                                } catch (e) {
	                                    self._$log.error(e.message);
	                                    deferred.reject(e);
	                                    return;
	                                }

	                                if (modulesToLoad.length > 0) {
	                                    loadNext(modulesToLoad.shift()); // load the next in list
	                                } else {
	                                        deferred.resolve(res); // everything has been loaded, resolve
	                                    }
	                            }, function error(err) {
	                                deferred.reject(err);
	                            });
	                        };

	                        // load the first in list
	                        loadNext(modulesToLoad.shift());
	                    } else {
	                        deferred.resolve();
	                    }
	                    return deferred.promise;
	                },

	                /**
	                 * Get the list of required modules/services/... for this module
	                 * @param module
	                 * @returns {Array}
	                 */
	                getRequires: function getRequires(module) {
	                    var requires = [];
	                    angular.forEach(module.requires, function (requireModule) {
	                        if (regModules.indexOf(requireModule) === -1) {
	                            requires.push(requireModule);
	                        }
	                    });
	                    return requires;
	                },

	                /**
	                 * Invoke the new modules & component by their providers
	                 * @param providers
	                 * @param queue
	                 * @param moduleName
	                 * @param reconfig
	                 * @private
	                 */
	                _invokeQueue: _invokeQueue,

	                /**
	                 * Check if a module has been invoked and registers it if not
	                 * @param args
	                 * @param moduleName
	                 * @returns {boolean} is new
	                 */
	                _registerInvokeList: _registerInvokeList,

	                /**
	                 * Register a new module and loads it, executing the run/config blocks if needed
	                 * @param providers
	                 * @param registerModules
	                 * @param params
	                 * @private
	                 */
	                _register: _register,

	                /**
	                 * Add a module name to the list of modules that will be loaded in the next inject
	                 * @param name
	                 * @param force
	                 * @private
	                 */
	                _addToLoadList: _addToLoadList
	            };
	        }];

	        // Let's get the list of loaded modules & components
	        this._init(angular.element(window.document));
	    }]);

	    var bootstrapFct = angular.bootstrap;
	    angular.bootstrap = function (element, modules, config) {
	        // we use slice to make a clean copy
	        angular.forEach(modules.slice(), function (module) {
	            _addToLoadList(module, true, true);
	        });
	        return bootstrapFct(element, modules, config);
	    };

	    var _addToLoadList = function _addToLoadList(name, force, real) {
	        if ((recordDeclarations.length > 0 || force) && angular.isString(name) && modulesToLoad.indexOf(name) === -1) {
	            modulesToLoad.push(name);
	            if (real) {
	                realModules.push(name);
	            }
	        }
	    };

	    var ngModuleFct = angular.module;
	    angular.module = function (name, requires, configFn) {
	        _addToLoadList(name, false, true);
	        return ngModuleFct(name, requires, configFn);
	    };

	    // CommonJS package manager support:
	    if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
	        module.exports = 'oc.lazyLoad';
	    }
	})(angular, window);
	(function (angular) {
	    'use strict';

	    angular.module('oc.lazyLoad').directive('ocLazyLoad', ["$ocLazyLoad", "$compile", "$animate", "$parse", function ($ocLazyLoad, $compile, $animate, $parse) {
	        return {
	            restrict: 'A',
	            terminal: true,
	            priority: 1000,
	            compile: function compile(element, attrs) {
	                // we store the content and remove it before compilation
	                var content = element[0].innerHTML;
	                element.html('');

	                return function ($scope, $element, $attr) {
	                    var model = $parse($attr.ocLazyLoad);
	                    $scope.$watch(function () {
	                        return model($scope) || $attr.ocLazyLoad; // it can be a module name (string), an object, an array, or a scope reference to any of this
	                    }, function (moduleName) {
	                        if (angular.isDefined(moduleName)) {
	                            $ocLazyLoad.load(moduleName).then(function () {
	                                $animate.enter(content, $element);
	                                var contents = element.contents();
	                                angular.forEach(contents, function (content) {
	                                    if (content.nodeType !== 3) {
	                                        // 3 is a text node
	                                        $compile(content)($scope);
	                                    }
	                                });
	                            });
	                        }
	                    }, true);
	                };
	            }
	        };
	    }]);
	})(angular);
	(function (angular) {
	    'use strict';

	    angular.module('oc.lazyLoad').config(["$provide", function ($provide) {
	        $provide.decorator('$ocLazyLoad', ["$delegate", "$q", "$window", "$interval", function ($delegate, $q, $window, $interval) {
	            var uaCssChecked = false,
	                useCssLoadPatch = false,
	                anchor = $window.document.getElementsByTagName('head')[0] || $window.document.getElementsByTagName('body')[0];

	            /**
	             * Load a js/css file
	             * @param type
	             * @param path
	             * @param params
	             * @returns promise
	             */
	            $delegate.buildElement = function buildElement(type, path, params) {
	                var deferred = $q.defer(),
	                    el,
	                    loaded,
	                    filesCache = $delegate._getFilesCache(),
	                    cacheBuster = function cacheBuster(url) {
	                    var dc = new Date().getTime();
	                    if (url.indexOf('?') >= 0) {
	                        if (url.substring(0, url.length - 1) === '&') {
	                            return url + '_dc=' + dc;
	                        }
	                        return url + '&_dc=' + dc;
	                    } else {
	                        return url + '?_dc=' + dc;
	                    }
	                };

	                // Store the promise early so the file load can be detected by other parallel lazy loads
	                // (ie: multiple routes on one page) a 'true' value isn't sufficient
	                // as it causes false positive load results.
	                if (angular.isUndefined(filesCache.get(path))) {
	                    filesCache.put(path, deferred.promise);
	                }

	                // Switch in case more content types are added later
	                switch (type) {
	                    case 'css':
	                        el = $window.document.createElement('link');
	                        el.type = 'text/css';
	                        el.rel = 'stylesheet';
	                        el.href = params.cache === false ? cacheBuster(path) : path;
	                        break;
	                    case 'js':
	                        el = $window.document.createElement('script');
	                        el.src = params.cache === false ? cacheBuster(path) : path;
	                        break;
	                    default:
	                        filesCache.remove(path);
	                        deferred.reject(new Error('Requested type "' + type + '" is not known. Could not inject "' + path + '"'));
	                        break;
	                }
	                el.onload = el['onreadystatechange'] = function (e) {
	                    if (el['readyState'] && !/^c|loade/.test(el['readyState']) || loaded) return;
	                    el.onload = el['onreadystatechange'] = null;
	                    loaded = 1;
	                    $delegate._broadcast('ocLazyLoad.fileLoaded', path);
	                    deferred.resolve();
	                };
	                el.onerror = function () {
	                    filesCache.remove(path);
	                    deferred.reject(new Error('Unable to load ' + path));
	                };
	                el.async = params.serie ? 0 : 1;

	                var insertBeforeElem = anchor.lastChild;
	                if (params.insertBefore) {
	                    var element = angular.element(angular.isDefined(window.jQuery) ? params.insertBefore : document.querySelector(params.insertBefore));
	                    if (element && element.length > 0) {
	                        insertBeforeElem = element[0];
	                    }
	                }
	                insertBeforeElem.parentNode.insertBefore(el, insertBeforeElem);

	                /*
	                 The event load or readystatechange doesn't fire in:
	                 - iOS < 6       (default mobile browser)
	                 - Android < 4.4 (default mobile browser)
	                 - Safari < 6    (desktop browser)
	                 */
	                if (type == 'css') {
	                    if (!uaCssChecked) {
	                        var ua = $window.navigator.userAgent.toLowerCase();

	                        // iOS < 6
	                        if (/iP(hone|od|ad)/.test($window.navigator.platform)) {
	                            var v = $window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
	                            var iOSVersion = parseFloat([parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)].join('.'));
	                            useCssLoadPatch = iOSVersion < 6;
	                        } else if (ua.indexOf("android") > -1) {
	                            // Android < 4.4
	                            var androidVersion = parseFloat(ua.slice(ua.indexOf("android") + 8));
	                            useCssLoadPatch = androidVersion < 4.4;
	                        } else if (ua.indexOf('safari') > -1) {
	                            var versionMatch = ua.match(/version\/([\.\d]+)/i);
	                            useCssLoadPatch = versionMatch && versionMatch[1] && parseFloat(versionMatch[1]) < 6;
	                        }
	                    }

	                    if (useCssLoadPatch) {
	                        var tries = 1000; // * 20 = 20000 miliseconds
	                        var interval = $interval(function () {
	                            try {
	                                el.sheet.cssRules;
	                                $interval.cancel(interval);
	                                el.onload();
	                            } catch (e) {
	                                if (--tries <= 0) {
	                                    el.onerror();
	                                }
	                            }
	                        }, 20);
	                    }
	                }

	                return deferred.promise;
	            };

	            return $delegate;
	        }]);
	    }]);
	})(angular);
	(function (angular) {
	    'use strict';

	    angular.module('oc.lazyLoad').config(["$provide", function ($provide) {
	        $provide.decorator('$ocLazyLoad', ["$delegate", "$q", function ($delegate, $q) {
	            /**
	             * The function that loads new files
	             * @param config
	             * @param params
	             * @returns {*}
	             */
	            $delegate.filesLoader = function filesLoader(config) {
	                var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	                var cssFiles = [],
	                    templatesFiles = [],
	                    jsFiles = [],
	                    promises = [],
	                    cachePromise = null,
	                    filesCache = $delegate._getFilesCache();

	                $delegate.toggleWatch(true); // start watching angular.module calls

	                angular.extend(params, config);

	                var pushFile = function pushFile(path) {
	                    var file_type = null,
	                        m;
	                    if (angular.isObject(path)) {
	                        file_type = path.type;
	                        path = path.path;
	                    }
	                    cachePromise = filesCache.get(path);
	                    if (angular.isUndefined(cachePromise) || params.cache === false) {

	                        // always check for requirejs syntax just in case
	                        if ((m = /^(css|less|html|htm|js)?(?=!)/.exec(path)) !== null) {
	                            // Detect file type using preceding type declaration (ala requireJS)
	                            file_type = m[1];
	                            path = path.substr(m[1].length + 1, path.length); // Strip the type from the path
	                        }

	                        if (!file_type) {
	                            if ((m = /[.](css|less|html|htm|js)?((\?|#).*)?$/.exec(path)) !== null) {
	                                // Detect file type via file extension
	                                file_type = m[1];
	                            } else if (!$delegate.jsLoader.hasOwnProperty('ocLazyLoadLoader') && $delegate.jsLoader.hasOwnProperty('load')) {
	                                // requirejs
	                                file_type = 'js';
	                            } else {
	                                $delegate._$log.error('File type could not be determined. ' + path);
	                                return;
	                            }
	                        }

	                        if ((file_type === 'css' || file_type === 'less') && cssFiles.indexOf(path) === -1) {
	                            cssFiles.push(path);
	                        } else if ((file_type === 'html' || file_type === 'htm') && templatesFiles.indexOf(path) === -1) {
	                            templatesFiles.push(path);
	                        } else if (file_type === 'js' || jsFiles.indexOf(path) === -1) {
	                            jsFiles.push(path);
	                        } else {
	                            $delegate._$log.error('File type is not valid. ' + path);
	                        }
	                    } else if (cachePromise) {
	                        promises.push(cachePromise);
	                    }
	                };

	                if (params.serie) {
	                    pushFile(params.files.shift());
	                } else {
	                    angular.forEach(params.files, function (path) {
	                        pushFile(path);
	                    });
	                }

	                if (cssFiles.length > 0) {
	                    var cssDeferred = $q.defer();
	                    $delegate.cssLoader(cssFiles, function (err) {
	                        if (angular.isDefined(err) && $delegate.cssLoader.hasOwnProperty('ocLazyLoadLoader')) {
	                            $delegate._$log.error(err);
	                            cssDeferred.reject(err);
	                        } else {
	                            cssDeferred.resolve();
	                        }
	                    }, params);
	                    promises.push(cssDeferred.promise);
	                }

	                if (templatesFiles.length > 0) {
	                    var templatesDeferred = $q.defer();
	                    $delegate.templatesLoader(templatesFiles, function (err) {
	                        if (angular.isDefined(err) && $delegate.templatesLoader.hasOwnProperty('ocLazyLoadLoader')) {
	                            $delegate._$log.error(err);
	                            templatesDeferred.reject(err);
	                        } else {
	                            templatesDeferred.resolve();
	                        }
	                    }, params);
	                    promises.push(templatesDeferred.promise);
	                }

	                if (jsFiles.length > 0) {
	                    var jsDeferred = $q.defer();
	                    $delegate.jsLoader(jsFiles, function (err) {
	                        if (angular.isDefined(err) && $delegate.jsLoader.hasOwnProperty('ocLazyLoadLoader')) {
	                            $delegate._$log.error(err);
	                            jsDeferred.reject(err);
	                        } else {
	                            jsDeferred.resolve();
	                        }
	                    }, params);
	                    promises.push(jsDeferred.promise);
	                }

	                if (promises.length === 0) {
	                    var deferred = $q.defer(),
	                        err = "Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.";
	                    $delegate._$log.error(err);
	                    deferred.reject(err);
	                    return deferred.promise;
	                } else if (params.serie && params.files.length > 0) {
	                    return $q.all(promises).then(function () {
	                        return $delegate.filesLoader(config, params);
	                    });
	                } else {
	                    return $q.all(promises)['finally'](function (res) {
	                        $delegate.toggleWatch(false); // stop watching angular.module calls
	                        return res;
	                    });
	                }
	            };

	            /**
	             * Load a module or a list of modules into Angular
	             * @param module Mixed the name of a predefined module config object, or a module config object, or an array of either
	             * @param params Object optional parameters
	             * @returns promise
	             */
	            $delegate.load = function (originalModule) {
	                var originalParams = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	                var self = this,
	                    config = null,
	                    deferredList = [],
	                    deferred = $q.defer(),
	                    errText;

	                // clean copy
	                var module = angular.copy(originalModule);
	                var params = angular.copy(originalParams);

	                // If module is an array, break it down
	                if (angular.isArray(module)) {
	                    // Resubmit each entry as a single module
	                    angular.forEach(module, function (m) {
	                        deferredList.push(self.load(m, params));
	                    });

	                    // Resolve the promise once everything has loaded
	                    $q.all(deferredList).then(function (res) {
	                        deferred.resolve(res);
	                    }, function (err) {
	                        deferred.reject(err);
	                    });

	                    return deferred.promise;
	                }

	                // Get or Set a configuration depending on what was passed in
	                if (angular.isString(module)) {
	                    config = self.getModuleConfig(module);
	                    if (!config) {
	                        config = {
	                            files: [module]
	                        };
	                    }
	                } else if (angular.isObject(module)) {
	                    // case {type: 'js', path: lazyLoadUrl + 'testModule.fakejs'}
	                    if (angular.isDefined(module.path) && angular.isDefined(module.type)) {
	                        config = {
	                            files: [module]
	                        };
	                    } else {
	                        config = self.setModuleConfig(module);
	                    }
	                }

	                if (config === null) {
	                    var moduleName = self._getModuleName(module);
	                    errText = 'Module "' + (moduleName || 'unknown') + '" is not configured, cannot load.';
	                    $delegate._$log.error(errText);
	                    deferred.reject(new Error(errText));
	                    return deferred.promise;
	                } else {
	                    // deprecated
	                    if (angular.isDefined(config.template)) {
	                        if (angular.isUndefined(config.files)) {
	                            config.files = [];
	                        }
	                        if (angular.isString(config.template)) {
	                            config.files.push(config.template);
	                        } else if (angular.isArray(config.template)) {
	                            config.files.concat(config.template);
	                        }
	                    }
	                }

	                var localParams = angular.extend({}, params, config);

	                // if someone used an external loader and called the load function with just the module name
	                if (angular.isUndefined(config.files) && angular.isDefined(config.name) && $delegate.moduleExists(config.name)) {
	                    return $delegate.inject(config.name, localParams);
	                }

	                $delegate.filesLoader(config, localParams).then(function () {
	                    $delegate.inject(null, localParams).then(function (res) {
	                        deferred.resolve(res);
	                    }, function (err) {
	                        deferred.reject(err);
	                    });
	                }, function (err) {
	                    deferred.reject(err);
	                });

	                return deferred.promise;
	            };

	            // return the patched service
	            return $delegate;
	        }]);
	    }]);
	})(angular);
	(function (angular) {
	    'use strict';

	    angular.module('oc.lazyLoad').config(["$provide", function ($provide) {
	        $provide.decorator('$ocLazyLoad', ["$delegate", "$q", function ($delegate, $q) {
	            /**
	             * cssLoader function
	             * @type Function
	             * @param paths array list of css files to load
	             * @param callback to call when everything is loaded. We use a callback and not a promise
	             * @param params object config parameters
	             * because the user can overwrite cssLoader and it will probably not use promises :(
	             */
	            $delegate.cssLoader = function (paths, callback, params) {
	                var promises = [];
	                angular.forEach(paths, function (path) {
	                    promises.push($delegate.buildElement('css', path, params));
	                });
	                $q.all(promises).then(function () {
	                    callback();
	                }, function (err) {
	                    callback(err);
	                });
	            };
	            $delegate.cssLoader.ocLazyLoadLoader = true;

	            return $delegate;
	        }]);
	    }]);
	})(angular);
	(function (angular) {
	    'use strict';

	    angular.module('oc.lazyLoad').config(["$provide", function ($provide) {
	        $provide.decorator('$ocLazyLoad', ["$delegate", "$q", function ($delegate, $q) {
	            /**
	             * jsLoader function
	             * @type Function
	             * @param paths array list of js files to load
	             * @param callback to call when everything is loaded. We use a callback and not a promise
	             * @param params object config parameters
	             * because the user can overwrite jsLoader and it will probably not use promises :(
	             */
	            $delegate.jsLoader = function (paths, callback, params) {
	                var promises = [];
	                angular.forEach(paths, function (path) {
	                    promises.push($delegate.buildElement('js', path, params));
	                });
	                $q.all(promises).then(function () {
	                    callback();
	                }, function (err) {
	                    callback(err);
	                });
	            };
	            $delegate.jsLoader.ocLazyLoadLoader = true;

	            return $delegate;
	        }]);
	    }]);
	})(angular);
	(function (angular) {
	    'use strict';

	    angular.module('oc.lazyLoad').config(["$provide", function ($provide) {
	        $provide.decorator('$ocLazyLoad', ["$delegate", "$templateCache", "$q", "$http", function ($delegate, $templateCache, $q, $http) {
	            /**
	             * templatesLoader function
	             * @type Function
	             * @param paths array list of css files to load
	             * @param callback to call when everything is loaded. We use a callback and not a promise
	             * @param params object config parameters for $http
	             * because the user can overwrite templatesLoader and it will probably not use promises :(
	             */
	            $delegate.templatesLoader = function (paths, callback, params) {
	                var promises = [],
	                    filesCache = $delegate._getFilesCache();

	                angular.forEach(paths, function (url) {
	                    var deferred = $q.defer();
	                    promises.push(deferred.promise);
	                    $http.get(url, params).success(function (data) {
	                        if (angular.isString(data) && data.length > 0) {
	                            angular.forEach(angular.element(data), function (node) {
	                                if (node.nodeName === 'SCRIPT' && node.type === 'text/ng-template') {
	                                    $templateCache.put(node.id, node.innerHTML);
	                                }
	                            });
	                        }
	                        if (angular.isUndefined(filesCache.get(url))) {
	                            filesCache.put(url, true);
	                        }
	                        deferred.resolve();
	                    }).error(function (err) {
	                        deferred.reject(new Error('Unable to load template file "' + url + '": ' + err));
	                    });
	                });
	                return $q.all(promises).then(function () {
	                    callback();
	                }, function (err) {
	                    callback(err);
	                });
	            };
	            $delegate.templatesLoader.ocLazyLoadLoader = true;

	            return $delegate;
	        }]);
	    }]);
	})(angular);
	// Array.indexOf polyfill for IE8
	if (!Array.prototype.indexOf) {
	    Array.prototype.indexOf = function (searchElement, fromIndex) {
	        var k;

	        // 1. Let O be the result of calling ToObject passing
	        //    the this value as the argument.
	        if (this == null) {
	            throw new TypeError('"this" is null or not defined');
	        }

	        var O = Object(this);

	        // 2. Let lenValue be the result of calling the Get
	        //    internal method of O with the argument "length".
	        // 3. Let len be ToUint32(lenValue).
	        var len = O.length >>> 0;

	        // 4. If len is 0, return -1.
	        if (len === 0) {
	            return -1;
	        }

	        // 5. If argument fromIndex was passed let n be
	        //    ToInteger(fromIndex); else let n be 0.
	        var n = +fromIndex || 0;

	        if (Math.abs(n) === Infinity) {
	            n = 0;
	        }

	        // 6. If n >= len, return -1.
	        if (n >= len) {
	            return -1;
	        }

	        // 7. If n >= 0, then Let k be n.
	        // 8. Else, n<0, Let k be len - abs(n).
	        //    If k is less than 0, then let k be 0.
	        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

	        // 9. Repeat, while k < len
	        while (k < len) {
	            // a. Let Pk be ToString(k).
	            //   This is implicit for LHS operands of the in operator
	            // b. Let kPresent be the result of calling the
	            //    HasProperty internal method of O with argument Pk.
	            //   This step can be combined with c
	            // c. If kPresent is true, then
	            //    i.  Let elementK be the result of calling the Get
	            //        internal method of O with the argument ToString(k).
	            //   ii.  Let same be the result of applying the
	            //        Strict Equality Comparison Algorithm to
	            //        searchElement and elementK.
	            //  iii.  If same is true, return k.
	            if (k in O && O[k] === searchElement) {
	                return k;
	            }
	            k++;
	        }
	        return -1;
	    };
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	//! api-check version 7.5.0 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (http://kent.doddsfamily.us) (ó ì_í)=óò=(ì_í ò)

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define(factory);
		else if(typeof exports === 'object')
			exports["apiCheck"] = factory();
		else
			root["apiCheck"] = factory();
	})(this, function() {
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

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _apiCheck = __webpack_require__(1);

		var _apiCheck2 = _interopRequireDefault(_apiCheck);

		exports['default'] = _apiCheck2['default'];
		module.exports = exports['default'];

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var stringify = __webpack_require__(2);
		var apiCheckUtil = __webpack_require__(3);
		var each = apiCheckUtil.each;
		var isError = apiCheckUtil.isError;
		var t = apiCheckUtil.t;
		var arrayify = apiCheckUtil.arrayify;
		var getCheckerDisplay = apiCheckUtil.getCheckerDisplay;
		var typeOf = apiCheckUtil.typeOf;
		var getError = apiCheckUtil.getError;

		var checkers = __webpack_require__(4);
		var apiCheckApis = getApiCheckApis();

		module.exports = getApiCheckInstance;
		module.exports.VERSION = ("7.5.0");
		module.exports.utils = apiCheckUtil;
		module.exports.globalConfig = {
		  verbose: false,
		  disabled: false
		};

		var apiCheckApiCheck = getApiCheckInstance({
		  output: { prefix: 'apiCheck' }
		});
		module.exports.internalChecker = apiCheckApiCheck;

		each(checkers, function (checker, name) {
		  return module.exports[name] = checker;
		});

		function getApiCheckInstance() {
		  var config = arguments[0] === undefined ? {} : arguments[0];
		  var extraCheckers = arguments[1] === undefined ? {} : arguments[1];

		  /* eslint complexity:[2, 6] */
		  if (apiCheckApiCheck && arguments.length) {
		    apiCheckApiCheck['throw'](apiCheckApis.getApiCheckInstanceCheckers, arguments, {
		      prefix: 'creating an apiCheck instance'
		    });
		  }

		  var additionalProperties = {
		    'throw': getApiCheck(true),
		    warn: getApiCheck(false),
		    getErrorMessage: getErrorMessage,
		    handleErrorMessage: handleErrorMessage,
		    config: {
		      output: config.output || {
		        prefix: '',
		        suffix: '',
		        docsBaseUrl: ''
		      },
		      verbose: config.verbose || false,
		      disabled: config.disabled || false
		    },
		    utils: apiCheckUtil
		  };

		  each(additionalProperties, function (wrapper, name) {
		    return apiCheck[name] = wrapper;
		  });

		  var disabled = apiCheck.disabled || module.exports.globalConfig.disabled;
		  each(checkers.getCheckers(disabled), function (checker, name) {
		    return apiCheck[name] = checker;
		  });
		  each(extraCheckers, function (checker, name) {
		    return apiCheck[name] = checker;
		  });

		  return apiCheck;

		  /**
		   * This is the instance function. Other things are attached to this see additional properties above.
		   * @param api {Array}
		   * @param args {arguments}
		   * @param output {Object}
		   * @returns {Object} - if this has a failed = true property, then it failed
		   */
		  function apiCheck(api, args, output) {
		    /* eslint complexity:[2, 8] */
		    if (apiCheck.config.disabled || module.exports.globalConfig.disabled) {
		      return {
		        apiTypes: {}, argTypes: {},
		        passed: true, message: '',
		        failed: false
		      }; // empty version of what is normally returned
		    }
		    checkApiCheckApi(arguments);
		    if (!Array.isArray(api)) {
		      api = [api];
		      args = [args];
		    } else {
		      // turn arguments into an array
		      args = Array.prototype.slice.call(args);
		    }
		    var messages = checkEnoughArgs(api, args);
		    if (!messages.length) {
		      // this is where we actually go perform the checks.
		      messages = checkApiWithArgs(api, args);
		    }

		    var returnObject = getTypes(api, args);
		    returnObject.args = args;
		    if (messages.length) {
		      returnObject.message = apiCheck.getErrorMessage(api, args, messages, output);
		      returnObject.failed = true;
		      returnObject.passed = false;
		    } else {
		      returnObject.message = '';
		      returnObject.failed = false;
		      returnObject.passed = true;
		    }
		    return returnObject;
		  }

		  /**
		   * checkApiCheckApi, should be read like: check apiCheck api. As in, check the api for apiCheck :-)
		   * @param checkApiArgs
		   */
		  function checkApiCheckApi(checkApiArgs) {
		    var api = checkApiArgs[0];
		    var args = checkApiArgs[1];
		    var isArrayOrArgs = Array.isArray(args) || args && typeof args === 'object' && typeof args.length === 'number';

		    if (Array.isArray(api) && !isArrayOrArgs) {
		      throw new Error(getErrorMessage(api, [args], ['If an array is provided for the api, an array must be provided for the args as well.'], { prefix: 'apiCheck' }));
		    }
		    // dog fooding here
		    var errors = checkApiWithArgs(apiCheckApis.checkApiCheckApi, checkApiArgs);
		    if (errors.length) {
		      var message = apiCheck.getErrorMessage(apiCheckApis.checkApiCheckApi, checkApiArgs, errors, {
		        prefix: 'apiCheck'
		      });
		      apiCheck.handleErrorMessage(message, true);
		    }
		  }

		  function getApiCheck(shouldThrow) {
		    return function apiCheckWrapper(api, args, output) {
		      var result = apiCheck(api, args, output);
		      apiCheck.handleErrorMessage(result.message, shouldThrow);
		      return result; // wont get here if an error is thrown
		    };
		  }

		  function handleErrorMessage(message, shouldThrow) {
		    if (shouldThrow && message) {
		      throw new Error(message);
		    } else if (message) {
		      /* eslint no-console:0 */
		      console.warn(message);
		    }
		  }

		  function getErrorMessage(api, args) {
		    var messages = arguments[2] === undefined ? [] : arguments[2];
		    var output = arguments[3] === undefined ? {} : arguments[3];

		    var gOut = apiCheck.config.output || {};
		    var prefix = getPrefix();
		    var suffix = getSuffix();
		    var url = getUrl();
		    var message = 'apiCheck failed! ' + messages.join(', ');
		    var passedAndShouldHavePassed = '\n\n' + buildMessageFromApiAndArgs(api, args);
		    return ('' + prefix + ' ' + message + ' ' + suffix + ' ' + (url || '') + '' + passedAndShouldHavePassed).trim();

		    function getPrefix() {
		      var p = output.onlyPrefix;
		      if (!p) {
		        p = ('' + (gOut.prefix || '') + ' ' + (output.prefix || '')).trim();
		      }
		      return p;
		    }

		    function getSuffix() {
		      var s = output.onlySuffix;
		      if (!s) {
		        s = ('' + (output.suffix || '') + ' ' + (gOut.suffix || '')).trim();
		      }
		      return s;
		    }

		    function getUrl() {
		      var u = output.url;
		      if (!u) {
		        u = gOut.docsBaseUrl && output.urlSuffix && ('' + gOut.docsBaseUrl + '' + output.urlSuffix).trim();
		      }
		      return u;
		    }
		  }

		  function buildMessageFromApiAndArgs(api, args) {
		    var _getTypes = getTypes(api, args);

		    var apiTypes = _getTypes.apiTypes;
		    var argTypes = _getTypes.argTypes;

		    var copy = Array.prototype.slice.call(args || []);
		    var replacedItems = [];
		    replaceFunctionWithName(copy);
		    var passedArgs = getObjectString(copy);
		    argTypes = getObjectString(argTypes);
		    apiTypes = getObjectString(apiTypes);

		    return generateMessage();

		    // functions

		    function replaceFunctionWithName(obj) {
		      each(obj, function (val, name) {
		        /* eslint complexity:[2, 6] */
		        if (replacedItems.indexOf(val) === -1) {
		          // avoid recursive problems
		          replacedItems.push(val);
		          if (typeof val === 'object') {
		            replaceFunctionWithName(obj);
		          } else if (typeof val === 'function') {
		            obj[name] = val.displayName || val.name || 'anonymous function';
		          }
		        }
		      });
		    }

		    function getObjectString(types) {
		      if (!types || !types.length) {
		        return 'nothing';
		      } else if (types && types.length === 1) {
		        types = types[0];
		      }
		      return stringify(types, null, 2);
		    }

		    function generateMessage() {
		      var n = '\n';
		      var useS = true;
		      if (args && args.length === 1) {
		        if (typeof args[0] === 'object' && args[0] !== null) {
		          useS = !!Object.keys(args[0]).length;
		        } else {
		          useS = false;
		        }
		      }
		      var types = 'type' + (useS ? 's' : '');
		      var newLine = n + n;
		      return 'You passed:' + n + '' + passedArgs + '' + newLine + ('With the ' + types + ':' + n + '' + argTypes + '' + newLine) + ('The API calls for:' + n + '' + apiTypes);
		    }
		  }

		  function getTypes(api, args) {
		    api = arrayify(api);
		    args = arrayify(args);
		    var apiTypes = api.map(function (checker, index) {
		      var specified = module.exports.globalConfig.hasOwnProperty('verbose');
		      return getCheckerDisplay(checker, {
		        terse: specified ? !module.exports.globalConfig.verbose : !apiCheck.config.verbose,
		        obj: args[index],
		        addHelpers: true
		      });
		    });
		    var argTypes = args.map(function (arg) {
		      return getArgDisplay(arg, []);
		    });
		    return { argTypes: argTypes, apiTypes: apiTypes };
		  }
		}

		// STATELESS FUNCTIONS

		/**
		 * This is where the magic happens for actually checking the arguments with the api.
		 * @param api {Array} - checkers
		 * @param args {Array} - and arguments object
		 * @returns {Array}
		 */
		function checkApiWithArgs(api, args) {
		  /* eslint complexity:[2, 7] */
		  var messages = [];
		  var failed = false;
		  var checkerIndex = 0;
		  var argIndex = 0;
		  var arg = undefined,
		      checker = undefined,
		      res = undefined,
		      lastChecker = undefined,
		      argName = undefined,
		      argFailed = undefined,
		      skipPreviousChecker = undefined;
		  /* jshint -W084 */
		  while ((checker = api[checkerIndex++]) && argIndex < args.length) {
		    arg = args[argIndex++];
		    argName = 'Argument ' + argIndex + (checker.isOptional ? ' (optional)' : '');
		    res = checker(arg, 'value', argName);
		    argFailed = isError(res);
		    lastChecker = checkerIndex >= api.length;
		    skipPreviousChecker = checkerIndex > 1 && api[checkerIndex - 1].isOptional;
		    if (argFailed && lastChecker || argFailed && !lastChecker && !checker.isOptional && !skipPreviousChecker) {
		      failed = true;
		      messages.push(getCheckerErrorMessage(res, checker, arg));
		    } else if (argFailed && checker.isOptional) {
		      argIndex--;
		    } else {
		      messages.push('' + t(argName) + ' passed');
		    }
		  }
		  return failed ? messages : [];
		}

		checkerTypeType.type = 'function with __apiCheckData property and `${function.type}` property';
		function checkerTypeType(checkerType, name, location) {
		  var apiCheckDataChecker = checkers.shape({
		    type: checkers.string,
		    optional: checkers.bool
		  });
		  var asFunc = checkers.func.withProperties({ __apiCheckData: apiCheckDataChecker });
		  var asShape = checkers.shape({ __apiCheckData: apiCheckDataChecker });
		  var wrongShape = checkers.oneOfType([asFunc, asShape])(checkerType, name, location);
		  if (isError(wrongShape)) {
		    return wrongShape;
		  }
		  if (typeof checkerType !== 'function' && !checkerType.hasOwnProperty(checkerType.__apiCheckData.type)) {
		    return getError(name, location, checkerTypeType.type);
		  }
		}

		function getCheckerErrorMessage(res, checker, val) {
		  var checkerHelp = getCheckerHelp(checker, val);
		  checkerHelp = checkerHelp ? ' - ' + checkerHelp : '';
		  return res.message + checkerHelp;
		}

		function getCheckerHelp(_ref, val) {
		  var help = _ref.help;

		  if (!help) {
		    return '';
		  }
		  if (typeof help === 'function') {
		    help = help(val);
		  }
		  return help;
		}

		function checkEnoughArgs(api, args) {
		  var requiredArgs = api.filter(function (a) {
		    return !a.isOptional;
		  });
		  if (args.length < requiredArgs.length) {
		    return ['Not enough arguments specified. Requires `' + requiredArgs.length + '`, you passed `' + args.length + '`'];
		  } else {
		    return [];
		  }
		}

		function getArgDisplay(arg, gottenArgs) {
		  /* eslint complexity:[2, 7] */
		  var cName = arg && arg.constructor && arg.constructor.name;
		  var type = typeOf(arg);
		  if (type === 'function') {
		    if (hasKeys()) {
		      var properties = stringify(getDisplayIfNotGotten());
		      return cName + ' (with properties: ' + properties + ')';
		    }
		    return cName;
		  }

		  if (arg === null) {
		    return 'null';
		  }

		  if (type !== 'array' && type !== 'object') {
		    return type;
		  }

		  if (hasKeys()) {
		    return getDisplayIfNotGotten();
		  }

		  return cName;

		  // utility functions
		  function hasKeys() {
		    return arg && Object.keys(arg).length;
		  }

		  function getDisplayIfNotGotten() {
		    if (gottenArgs.indexOf(arg) !== -1) {
		      return '[Circular]';
		    }
		    gottenArgs.push(arg);
		    return getDisplay(arg, gottenArgs);
		  }
		}

		function getDisplay(obj, gottenArgs) {
		  var argDisplay = {};
		  each(obj, function (v, k) {
		    return argDisplay[k] = getArgDisplay(v, gottenArgs);
		  });
		  return argDisplay;
		}

		function getApiCheckApis() {
		  var os = checkers.string.optional;

		  var checkerFnChecker = checkers.func.withProperties({
		    type: checkers.oneOfType([checkers.string, checkerTypeType]).optional,
		    displayName: checkers.string.optional,
		    shortType: checkers.string.optional,
		    notOptional: checkers.bool.optional,
		    notRequired: checkers.bool.optional
		  });

		  var getApiCheckInstanceCheckers = [checkers.shape({
		    output: checkers.shape({
		      prefix: checkers.string.optional,
		      suffix: checkers.string.optional,
		      docsBaseUrl: checkers.string.optional
		    }).strict.optional,
		    verbose: checkers.bool.optional,
		    disabled: checkers.bool.optional
		  }).strict.optional, checkers.objectOf(checkerFnChecker).optional];

		  var checkApiCheckApi = [checkers.typeOrArrayOf(checkerFnChecker), checkers.any.optional, checkers.shape({
		    prefix: os, suffix: os, urlSuffix: os, // appended case
		    onlyPrefix: os, onlySuffix: os, url: os // override case
		  }).strict.optional];

		  return {
		    checkerFnChecker: checkerFnChecker,
		    getApiCheckInstanceCheckers: getApiCheckInstanceCheckers,
		    checkApiCheckApi: checkApiCheckApi
		  };
		}

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		module.exports = stringify;

		function getSerialize (fn, decycle) {
		  var seen = [], keys = [];
		  decycle = decycle || function(key, value) {
		    return '[Circular ' + getPath(value, seen, keys) + ']'
		  };
		  return function(key, value) {
		    var ret = value;
		    if (typeof value === 'object' && value) {
		      if (seen.indexOf(value) !== -1)
		        ret = decycle(key, value);
		      else {
		        seen.push(value);
		        keys.push(key);
		      }
		    }
		    if (fn) ret = fn(key, ret);
		    return ret;
		  }
		}

		function getPath (value, seen, keys) {
		  var index = seen.indexOf(value);
		  var path = [ keys[index] ];
		  for (index--; index >= 0; index--) {
		    if (seen[index][ path[0] ] === value) {
		      value = seen[index];
		      path.unshift(keys[index]);
		    }
		  }
		  return '~' + path.join('.');
		}

		function stringify(obj, fn, spaces, decycle) {
		  return JSON.stringify(obj, getSerialize(fn, decycle), spaces);
		}

		stringify.getSerialize = getSerialize;


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

		var stringify = __webpack_require__(2);
		var checkerHelpers = {
		  addOptional: addOptional, getRequiredVersion: getRequiredVersion, setupChecker: setupChecker, addNullable: addNullable
		};

		module.exports = {
		  each: each, copy: copy, typeOf: typeOf, arrayify: arrayify, getCheckerDisplay: getCheckerDisplay,
		  isError: isError, list: list, getError: getError, nAtL: nAtL, t: t, undef: undef, checkerHelpers: checkerHelpers,
		  noop: noop
		};

		function copy(obj) {
		  var type = typeOf(obj);
		  var daCopy = undefined;
		  if (type === 'array') {
		    daCopy = [];
		  } else if (type === 'object') {
		    daCopy = {};
		  } else {
		    return obj;
		  }
		  each(obj, function (val, key) {
		    daCopy[key] = val; // cannot single-line this because we don't want to abort the each
		  });
		  return daCopy;
		}

		function typeOf(obj) {
		  if (Array.isArray(obj)) {
		    return 'array';
		  } else if (obj instanceof RegExp) {
		    return 'object';
		  } else {
		    return typeof obj;
		  }
		}

		function getCheckerDisplay(checker, options) {
		  /* eslint complexity:[2, 7] */
		  var display = undefined;
		  var short = options && options.short;
		  if (short && checker.shortType) {
		    display = checker.shortType;
		  } else if (!short && typeof checker.type === 'object' || checker.type === 'function') {
		    display = getCheckerType(checker, options);
		  } else {
		    display = getCheckerType(checker, options) || checker.displayName || checker.name;
		  }
		  return display;
		}

		function getCheckerType(_ref, options) {
		  var type = _ref.type;

		  if (typeof type === 'function') {
		    var __apiCheckData = type.__apiCheckData;
		    var typeTypes = type(options);
		    type = _defineProperty({
		      __apiCheckData: __apiCheckData
		    }, __apiCheckData.type, typeTypes);
		  }
		  return type;
		}

		function arrayify(obj) {
		  if (!obj) {
		    return [];
		  } else if (Array.isArray(obj)) {
		    return obj;
		  } else {
		    return [obj];
		  }
		}

		function each(obj, iterator, context) {
		  if (Array.isArray(obj)) {
		    return eachArry.apply(undefined, arguments);
		  } else {
		    return eachObj.apply(undefined, arguments);
		  }
		}

		function eachObj(obj, iterator, context) {
		  var ret;
		  var hasOwn = Object.prototype.hasOwnProperty;
		  for (var key in obj) {
		    if (hasOwn.call(obj, key)) {
		      ret = iterator.call(context, obj[key], key, obj);
		      if (ret === false) {
		        return ret;
		      }
		    }
		  }
		  return true;
		}

		function eachArry(obj, iterator, context) {
		  var ret;
		  var length = obj.length;
		  for (var i = 0; i < length; i++) {
		    ret = iterator.call(context, obj[i], i, obj);
		    if (ret === false) {
		      return ret;
		    }
		  }
		  return true;
		}

		function isError(obj) {
		  return obj instanceof Error;
		}

		function list(arry, join, finalJoin) {
		  arry = arrayify(arry);
		  var copy = arry.slice();
		  var last = copy.pop();
		  if (copy.length === 1) {
		    join = ' ';
		  }
		  return copy.join(join) + ('' + (copy.length ? join + finalJoin : '') + '' + last);
		}

		function getError(name, location, checkerType) {
		  if (typeof checkerType === 'function') {
		    checkerType = checkerType({ short: true });
		  }
		  var stringType = typeof checkerType !== 'object' ? checkerType : stringify(checkerType);
		  return new Error('' + nAtL(name, location) + ' must be ' + t(stringType));
		}

		function nAtL(name, location) {
		  var tName = t(name || 'value');
		  var tLocation = !location ? '' : ' at ' + t(location);
		  return '' + tName + '' + tLocation;
		}

		function t(thing) {
		  return '`' + thing + '`';
		}

		function undef(thing) {
		  return typeof thing === 'undefined';
		}

		/**
		 * This will set up the checker with all of the defaults that most checkers want like required by default and an
		 * optional version
		 * @param checker
		 * @param properties properties to add to the checker
		 * @param disabled - when set to true, this will set the checker to a no-op function
		 */
		function setupChecker(checker, properties, disabled) {
		  /* eslint complexity:[2, 9] */
		  if (disabled) {
		    // swap out the checker for its own copy of noop
		    checker = getNoop();
		    checker.isNoop = true;
		  }

		  if (typeof checker.type === 'string') {
		    checker.shortType = checker.type;
		  }

		  // assign all properties given
		  each(properties, function (prop, name) {
		    return checker[name] = prop;
		  });

		  if (!checker.displayName) {
		    checker.displayName = 'apiCheck ' + t(checker.shortType || checker.type || checker.name) + ' type checker';
		  }

		  if (!checker.notRequired) {
		    checker = getRequiredVersion(checker, disabled);
		  }

		  if (!checker.notNullable) {
		    addNullable(checker, disabled);
		  }

		  if (!checker.notOptional) {
		    addOptional(checker, disabled);
		  }

		  return checker;
		}

		function getRequiredVersion(checker, disabled) {
		  var requiredChecker = disabled ? getNoop() : function requiredChecker(val, name, location, obj) {
		    if (undef(val) && !checker.isOptional) {
		      var tLocation = location ? ' in ' + t(location) : '';
		      var type = getCheckerDisplay(checker, { short: true });
		      var stringType = typeof type !== 'object' ? type : stringify(type);
		      return new Error('Required ' + t(name) + ' not specified' + tLocation + '. Must be ' + t(stringType));
		    } else {
		      return checker(val, name, location, obj);
		    }
		  };
		  copyProps(checker, requiredChecker);
		  requiredChecker.originalChecker = checker;
		  return requiredChecker;
		}

		function addOptional(checker, disabled) {
		  var optionalCheck = disabled ? getNoop() : function optionalCheck(val, name, location, obj) {
		    if (!undef(val)) {
		      return checker(val, name, location, obj);
		    }
		  };
		  // inherit all properties on the original checker
		  copyProps(checker, optionalCheck);

		  optionalCheck.isOptional = true;
		  optionalCheck.displayName = checker.displayName + ' (optional)';
		  optionalCheck.originalChecker = checker;

		  // the magic line that allows you to add .optional to the end of the checkers
		  checker.optional = optionalCheck;

		  fixType(checker, checker.optional);
		}

		function addNullable(checker, disabled) {
		  var nullableCheck = disabled ? getNoop() : function nullableCheck(val, name, location, obj) {
		    if (val !== null) {
		      return checker(val, name, location, obj);
		    }
		  };
		  // inherit all properties on the original checker
		  copyProps(checker, nullableCheck);

		  nullableCheck.isNullable = true;
		  nullableCheck.displayName = checker.displayName + ' (nullable)';
		  nullableCheck.originalChecker = checker;

		  // the magic line that allows you to add .nullable to the end of the checkers
		  checker.nullable = nullableCheck;

		  fixType(checker, checker.nullable);
		  if (!checker.notOptional) {
		    addOptional(checker.nullable, disabled);
		  }
		}

		function fixType(checker, checkerCopy) {
		  // fix type, because it's not a straight copy...
		  // the reason is we need to specify type.__apiCheckData.optional as true for the terse/verbose option.
		  // we also want to add "(optional)" to the types with a string
		  if (typeof checkerCopy.type === 'object') {
		    checkerCopy.type = copy(checkerCopy.type); // make our own copy of this
		  } else if (typeof checkerCopy.type === 'function') {
		    checkerCopy.type = function () {
		      return checker.type.apply(checker, arguments);
		    };
		  } else {
		    checkerCopy.type += ' (optional)';
		    return;
		  }
		  checkerCopy.type.__apiCheckData = copy(checker.type.__apiCheckData) || {}; // and this
		  checkerCopy.type.__apiCheckData.optional = true;
		}

		// UTILS

		function copyProps(src, dest) {
		  each(Object.keys(src), function (key) {
		    return dest[key] = src[key];
		  });
		}

		function noop() {}

		function getNoop() {
		  /* eslint no-shadow:0 */
		  /* istanbul ignore next */
		  return function noop() {};
		}

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var stringify = __webpack_require__(2);

		var _require = __webpack_require__(3);

		var typeOf = _require.typeOf;
		var each = _require.each;
		var copy = _require.copy;
		var getCheckerDisplay = _require.getCheckerDisplay;
		var isError = _require.isError;
		var arrayify = _require.arrayify;
		var list = _require.list;
		var getError = _require.getError;
		var nAtL = _require.nAtL;
		var t = _require.t;
		var checkerHelpers = _require.checkerHelpers;
		var undef = _require.undef;
		var setupChecker = checkerHelpers.setupChecker;

		var checkers = module.exports = getCheckers();
		module.exports.getCheckers = getCheckers;

		function getCheckers(disabled) {
		  return {
		    array: typeOfCheckGetter('Array'),
		    bool: typeOfCheckGetter('Boolean'),
		    number: typeOfCheckGetter('Number'),
		    string: typeOfCheckGetter('String'),
		    func: funcCheckGetter(),
		    object: objectCheckGetter(),

		    emptyObject: emptyObjectCheckGetter(),

		    instanceOf: instanceCheckGetter,
		    oneOf: oneOfCheckGetter,
		    oneOfType: oneOfTypeCheckGetter,

		    arrayOf: arrayOfCheckGetter,
		    objectOf: objectOfCheckGetter,
		    typeOrArrayOf: typeOrArrayOfCheckGetter,

		    range: rangeCheckGetter,
		    lessThan: lessThanCheckGetter,
		    greaterThan: greaterThanCheckGetter,

		    shape: getShapeCheckGetter(),
		    args: argumentsCheckerGetter(),

		    any: anyCheckGetter(),
		    'null': nullCheckGetter()

		  };

		  function typeOfCheckGetter(type) {
		    var lType = type.toLowerCase();
		    return setupChecker(function typeOfCheckerDefinition(val, name, location) {
		      if (typeOf(val) !== lType) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }

		  function funcCheckGetter() {
		    var type = 'Function';
		    var functionChecker = setupChecker(function functionCheckerDefinition(val, name, location) {
		      if (typeOf(val) !== 'function') {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);

		    functionChecker.withProperties = function getWithPropertiesChecker(properties) {
		      var apiError = checkers.objectOf(checkers.func)(properties, 'properties', 'apiCheck.func.withProperties');
		      if (isError(apiError)) {
		        throw apiError;
		      }
		      var shapeChecker = checkers.shape(properties, true);
		      shapeChecker.type.__apiCheckData.type = 'func.withProperties';

		      return setupChecker(function functionWithPropertiesChecker(val, name, location) {
		        var notFunction = checkers.func(val, name, location);
		        if (isError(notFunction)) {
		          return notFunction;
		        }
		        return shapeChecker(val, name, location);
		      }, { type: shapeChecker.type, shortType: 'func.withProperties' }, disabled);
		    };
		    return functionChecker;
		  }

		  function objectCheckGetter() {
		    var type = 'Object';
		    var nullType = 'Object (null ok)';
		    var objectNullOkChecker = setupChecker(function objectNullOkCheckerDefinition(val, name, location) {
		      if (typeOf(val) !== 'object') {
		        return getError(name, location, nullType);
		      }
		    }, { type: nullType }, disabled);

		    var objectChecker = setupChecker(function objectCheckerDefinition(val, name, location) {
		      if (val === null || isError(objectNullOkChecker(val, name, location))) {
		        return getError(name, location, objectChecker.type);
		      }
		    }, { type: type, nullOk: objectNullOkChecker }, disabled);

		    return objectChecker;
		  }

		  function instanceCheckGetter(classToCheck) {
		    return setupChecker(function instanceCheckerDefinition(val, name, location) {
		      if (!(val instanceof classToCheck)) {
		        return getError(name, location, classToCheck.name);
		      }
		    }, { type: classToCheck.name }, disabled);
		  }

		  function oneOfCheckGetter(enums) {
		    var type = {
		      __apiCheckData: { optional: false, type: 'enum' },
		      'enum': enums
		    };
		    var shortType = 'oneOf[' + enums.map(function (enm) {
		      return stringify(enm);
		    }).join(', ') + ']';
		    return setupChecker(function oneOfCheckerDefinition(val, name, location) {
		      if (!enums.some(function (enm) {
		        return enm === val;
		      })) {
		        return getError(name, location, shortType);
		      }
		    }, { type: type, shortType: shortType }, disabled);
		  }

		  function oneOfTypeCheckGetter(typeCheckers) {
		    var checkersDisplay = typeCheckers.map(function (checker) {
		      return getCheckerDisplay(checker, { short: true });
		    });
		    var shortType = 'oneOfType[' + checkersDisplay.join(', ') + ']';
		    function type(options) {
		      if (options && options.short) {
		        return shortType;
		      }
		      return typeCheckers.map(function (checker) {
		        return getCheckerDisplay(checker, options);
		      });
		    }
		    type.__apiCheckData = { optional: false, type: 'oneOfType' };
		    return setupChecker(function oneOfTypeCheckerDefinition(val, name, location) {
		      if (!typeCheckers.some(function (checker) {
		        return !isError(checker(val, name, location));
		      })) {
		        return getError(name, location, shortType);
		      }
		    }, { type: type, shortType: shortType }, disabled);
		  }

		  function arrayOfCheckGetter(checker) {
		    var shortCheckerDisplay = getCheckerDisplay(checker, { short: true });
		    var shortType = 'arrayOf[' + shortCheckerDisplay + ']';

		    function type(options) {
		      if (options && options.short) {
		        return shortType;
		      }
		      return getCheckerDisplay(checker, options);
		    }
		    type.__apiCheckData = { optional: false, type: 'arrayOf' };

		    return setupChecker(function arrayOfCheckerDefinition(val, name, location) {
		      if (isError(checkers.array(val)) || !val.every(function (item) {
		        return !isError(checker(item));
		      })) {
		        return getError(name, location, shortType);
		      }
		    }, { type: type, shortType: shortType }, disabled);
		  }

		  function objectOfCheckGetter(checker) {
		    var checkerDisplay = getCheckerDisplay(checker, { short: true });
		    var shortType = 'objectOf[' + checkerDisplay + ']';

		    function type(options) {
		      if (options && options.short) {
		        return shortType;
		      }
		      return getCheckerDisplay(checker, options);
		    }
		    type.__apiCheckData = { optional: false, type: 'objectOf' };

		    return setupChecker(function objectOfCheckerDefinition(val, name, location) {
		      var notObject = checkers.object(val, name, location);
		      if (isError(notObject)) {
		        return notObject;
		      }
		      var allTypesSuccess = each(val, function (item, key) {
		        if (isError(checker(item, key, name))) {
		          return false;
		        }
		      });
		      if (!allTypesSuccess) {
		        return getError(name, location, shortType);
		      }
		    }, { type: type, shortType: shortType }, disabled);
		  }

		  function typeOrArrayOfCheckGetter(checker) {
		    var checkerDisplay = getCheckerDisplay(checker, { short: true });
		    var shortType = 'typeOrArrayOf[' + checkerDisplay + ']';

		    function type(options) {
		      if (options && options.short) {
		        return shortType;
		      }
		      return getCheckerDisplay(checker, options);
		    }

		    type.__apiCheckData = { optional: false, type: 'typeOrArrayOf' };
		    return setupChecker(function typeOrArrayOfDefinition(val, name, location, obj) {
		      if (isError(checkers.oneOfType([checker, checkers.arrayOf(checker)])(val, name, location, obj))) {
		        return getError(name, location, shortType);
		      }
		    }, { type: type, shortType: shortType }, disabled);
		  }

		  function getShapeCheckGetter() {
		    function shapeCheckGetter(shape, nonObject) {
		      var shapeTypes = {};
		      each(shape, function (checker, prop) {
		        shapeTypes[prop] = getCheckerDisplay(checker);
		      });
		      function type() {
		        var options = arguments[0] === undefined ? {} : arguments[0];

		        var ret = {};
		        var terse = options.terse;
		        var obj = options.obj;
		        var addHelpers = options.addHelpers;

		        var parentRequired = options.required;
		        each(shape, function (checker, prop) {
		          /* eslint complexity:[2, 6] */
		          var specified = obj && obj.hasOwnProperty(prop);
		          var required = undef(parentRequired) ? !checker.isOptional : parentRequired;
		          if (!terse || (specified || !checker.isOptional)) {
		            ret[prop] = getCheckerDisplay(checker, { terse: terse, obj: obj && obj[prop], required: required, addHelpers: addHelpers });
		          }
		          if (addHelpers) {
		            modifyTypeDisplayToHelpOut(ret, prop, specified, checker, required);
		          }
		        });
		        return ret;

		        function modifyTypeDisplayToHelpOut(theRet, prop, specified, checker, required) {
		          if (!specified && required && !checker.isOptional) {
		            var item = 'ITEM';
		            if (checker.type && checker.type.__apiCheckData) {
		              item = checker.type.__apiCheckData.type.toUpperCase();
		            }
		            addHelper('missing', 'MISSING THIS ' + item, ' <-- YOU ARE MISSING THIS');
		          } else if (specified) {
		            var error = checker(obj[prop], prop, null, obj);
		            if (isError(error)) {
		              addHelper('error', 'THIS IS THE PROBLEM: ' + error.message, ' <-- THIS IS THE PROBLEM: ' + error.message);
		            }
		          }

		          function addHelper(property, objectMessage, stringMessage) {
		            if (typeof theRet[prop] === 'string') {
		              theRet[prop] += stringMessage;
		            } else {
		              theRet[prop].__apiCheckData[property] = objectMessage;
		            }
		          }
		        }
		      }

		      type.__apiCheckData = { strict: false, optional: false, type: 'shape' };
		      var shapeChecker = setupChecker(function shapeCheckerDefinition(val, name, location) {
		        /* eslint complexity:[2, 6] */
		        var isObject = !nonObject && checkers.object(val, name, location);
		        if (isError(isObject)) {
		          return isObject;
		        }
		        var shapePropError = undefined;
		        location = location ? location + (name ? '/' : '') : '';
		        name = name || '';
		        each(shape, function (checker, prop) {
		          if (val.hasOwnProperty(prop) || !checker.isOptional) {
		            shapePropError = checker(val[prop], prop, '' + location + '' + name, val);
		            return !isError(shapePropError);
		          }
		        });
		        if (isError(shapePropError)) {
		          return shapePropError;
		        }
		      }, { type: type, shortType: 'shape' }, disabled);

		      function strictType() {
		        return type.apply(undefined, arguments);
		      }

		      strictType.__apiCheckData = copy(shapeChecker.type.__apiCheckData);
		      strictType.__apiCheckData.strict = true;
		      shapeChecker.strict = setupChecker(function strictShapeCheckerDefinition(val, name, location) {
		        var shapeError = shapeChecker(val, name, location);
		        if (isError(shapeError)) {
		          return shapeError;
		        }
		        var allowedProperties = Object.keys(shape);
		        var extraProps = Object.keys(val).filter(function (prop) {
		          return allowedProperties.indexOf(prop) === -1;
		        });
		        if (extraProps.length) {
		          return new Error('' + nAtL(name, location) + ' cannot have extra properties: ' + t(extraProps.join('`, `')) + '.' + ('It is limited to ' + t(allowedProperties.join('`, `'))));
		        }
		      }, { type: strictType, shortType: 'strict shape' }, disabled);

		      return shapeChecker;
		    }

		    shapeCheckGetter.ifNot = function ifNot(otherProps, propChecker) {
		      if (!Array.isArray(otherProps)) {
		        otherProps = [otherProps];
		      }
		      var description = undefined;
		      if (otherProps.length === 1) {
		        description = 'specified only if ' + otherProps[0] + ' is not specified';
		      } else {
		        description = 'specified only if none of the following are specified: [' + list(otherProps, ', ', 'and ') + ']';
		      }
		      var shortType = 'ifNot[' + otherProps.join(', ') + ']';
		      var type = getTypeForShapeChild(propChecker, description, shortType);
		      return setupChecker(function ifNotChecker(prop, propName, location, obj) {
		        var propExists = obj && obj.hasOwnProperty(propName);
		        var otherPropsExist = otherProps.some(function (otherProp) {
		          return obj && obj.hasOwnProperty(otherProp);
		        });
		        if (propExists === otherPropsExist) {
		          return getError(propName, location, type);
		        } else if (propExists) {
		          return propChecker(prop, propName, location, obj);
		        }
		      }, { notRequired: true, type: type, shortType: shortType }, disabled);
		    };

		    shapeCheckGetter.onlyIf = function onlyIf(otherProps, propChecker) {
		      otherProps = arrayify(otherProps);
		      var description = undefined;
		      if (otherProps.length === 1) {
		        description = 'specified only if ' + otherProps[0] + ' is also specified';
		      } else {
		        description = 'specified only if all of the following are specified: [' + list(otherProps, ', ', 'and ') + ']';
		      }
		      var shortType = 'onlyIf[' + otherProps.join(', ') + ']';
		      var type = getTypeForShapeChild(propChecker, description, shortType);
		      return setupChecker(function onlyIfCheckerDefinition(prop, propName, location, obj) {
		        var othersPresent = otherProps.every(function (property) {
		          return obj.hasOwnProperty(property);
		        });
		        if (!othersPresent) {
		          return getError(propName, location, type);
		        } else {
		          return propChecker(prop, propName, location, obj);
		        }
		      }, { type: type, shortType: shortType }, disabled);
		    };

		    shapeCheckGetter.requiredIfNot = function shapeRequiredIfNot(otherProps, propChecker) {
		      if (!Array.isArray(otherProps)) {
		        otherProps = [otherProps];
		      }
		      return getRequiredIfNotChecker(false, otherProps, propChecker);
		    };

		    shapeCheckGetter.requiredIfNot.all = function shapeRequiredIfNotAll(otherProps, propChecker) {
		      if (!Array.isArray(otherProps)) {
		        throw new Error('requiredIfNot.all must be passed an array');
		      }
		      return getRequiredIfNotChecker(true, otherProps, propChecker);
		    };

		    function getRequiredIfNotChecker(all, otherProps, propChecker) {
		      var props = t(otherProps.join(', '));
		      var ifProps = 'if ' + (all ? 'all of' : 'at least one of');
		      var description = 'specified ' + ifProps + ' these are not specified: ' + props + ' (otherwise it\'s optional)';
		      var shortType = 'requiredIfNot' + (all ? '.all' : '') + '[' + otherProps.join(', ') + '}]';
		      var type = getTypeForShapeChild(propChecker, description, shortType);
		      return setupChecker(function shapeRequiredIfNotDefinition(prop, propName, location, obj) {
		        var propExists = obj && obj.hasOwnProperty(propName);
		        var iteration = all ? 'every' : 'some';
		        var otherPropsExist = otherProps[iteration](function (otherProp) {
		          return obj && obj.hasOwnProperty(otherProp);
		        });
		        if (!otherPropsExist && !propExists) {
		          return getError(propName, location, type);
		        } else if (propExists) {
		          return propChecker(prop, propName, location, obj);
		        }
		      }, { type: type, notRequired: true }, disabled);
		    }

		    return shapeCheckGetter;

		    function getTypeForShapeChild(propChecker, description, shortType) {
		      function type(options) {
		        if (options && options.short) {
		          return shortType;
		        }
		        return getCheckerDisplay(propChecker);
		      }
		      type.__apiCheckData = { optional: false, type: 'ifNot', description: description };
		      return type;
		    }
		  }

		  function argumentsCheckerGetter() {
		    var type = 'function arguments';
		    return setupChecker(function argsCheckerDefinition(val, name, location) {
		      if (Array.isArray(val) || isError(checkers.object(val)) || isError(checkers.number(val.length))) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }

		  function anyCheckGetter() {
		    return setupChecker(function anyCheckerDefinition() {}, { type: 'any' }, disabled);
		  }

		  function nullCheckGetter() {
		    var type = 'null';
		    return setupChecker(function nullChecker(val, name, location) {
		      if (val !== null) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }

		  function rangeCheckGetter(min, max) {
		    var type = 'Range (' + min + ' - ' + max + ')';
		    return setupChecker(function rangeChecker(val, name, location) {
		      if (typeof val !== 'number' || val < min || val > max) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }

		  function lessThanCheckGetter(min) {
		    var type = 'lessThan[' + min + ']';
		    return setupChecker(function lessThanChecker(val, name, location) {
		      if (typeof val !== 'number' || val > min) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }

		  function greaterThanCheckGetter(max) {
		    var type = 'greaterThan[' + max + ']';
		    return setupChecker(function greaterThanChecker(val, name, location) {
		      if (typeof val !== 'number' || val < max) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }

		  function emptyObjectCheckGetter() {
		    var type = 'empty object';
		    return setupChecker(function emptyObjectChecker(val, name, location) {
		      if (typeOf(val) !== 'object' || val === null || Object.keys(val).length) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }
		}

		// don't do anything

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	//! angular-formly version 6.23.2 built with ♥ by Astrism <astrisms@gmail.com>, Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(9));
		else if(typeof define === 'function' && define.amd)
			define(["angular", "api-check"], factory);
		else if(typeof exports === 'object')
			exports["ngFormly"] = factory(require("angular"), require("api-check"));
		else
			root["ngFormly"] = factory(root["angular"], root["apiCheck"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__) {
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

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _indexCommon = __webpack_require__(1);

		var _indexCommon2 = _interopRequireDefault(_indexCommon);

		exports['default'] = _indexCommon2['default'];
		module.exports = exports['default'];

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		var _providersFormlyApiCheck = __webpack_require__(5);

		var _providersFormlyApiCheck2 = _interopRequireDefault(_providersFormlyApiCheck);

		var _otherDocsBaseUrl = __webpack_require__(7);

		var _otherDocsBaseUrl2 = _interopRequireDefault(_otherDocsBaseUrl);

		var _providersFormlyUsability = __webpack_require__(8);

		var _providersFormlyUsability2 = _interopRequireDefault(_providersFormlyUsability);

		var _providersFormlyConfig = __webpack_require__(9);

		var _providersFormlyConfig2 = _interopRequireDefault(_providersFormlyConfig);

		var _providersFormlyValidationMessages = __webpack_require__(11);

		var _providersFormlyValidationMessages2 = _interopRequireDefault(_providersFormlyValidationMessages);

		var _servicesFormlyUtil = __webpack_require__(12);

		var _servicesFormlyUtil2 = _interopRequireDefault(_servicesFormlyUtil);

		var _servicesFormlyWarn = __webpack_require__(2);

		var _servicesFormlyWarn2 = _interopRequireDefault(_servicesFormlyWarn);

		var _directivesFormlyCustomValidation = __webpack_require__(13);

		var _directivesFormlyCustomValidation2 = _interopRequireDefault(_directivesFormlyCustomValidation);

		var _directivesFormlyField = __webpack_require__(14);

		var _directivesFormlyField2 = _interopRequireDefault(_directivesFormlyField);

		var _directivesFormlyFocus = __webpack_require__(15);

		var _directivesFormlyFocus2 = _interopRequireDefault(_directivesFormlyFocus);

		var _directivesFormlyForm = __webpack_require__(16);

		var _directivesFormlyForm2 = _interopRequireDefault(_directivesFormlyForm);

		var _runFormlyNgModelAttrsManipulator = __webpack_require__(17);

		var _runFormlyNgModelAttrsManipulator2 = _interopRequireDefault(_runFormlyNgModelAttrsManipulator);

		var _runFormlyCustomTags = __webpack_require__(18);

		var _runFormlyCustomTags2 = _interopRequireDefault(_runFormlyCustomTags);

		var ngModuleName = 'formly';

		exports['default'] = ngModuleName;

		var ngModule = _angularFix2['default'].module(ngModuleName, []);

		ngModule.constant('formlyApiCheck', _providersFormlyApiCheck2['default']);
		ngModule.constant('formlyErrorAndWarningsUrlPrefix', _otherDocsBaseUrl2['default']);
		ngModule.constant('formlyVersion', ("6.23.2")); // <-- webpack variable

		ngModule.provider('formlyUsability', _providersFormlyUsability2['default']);
		ngModule.provider('formlyConfig', _providersFormlyConfig2['default']);

		ngModule.factory('formlyValidationMessages', _providersFormlyValidationMessages2['default']);
		ngModule.factory('formlyUtil', _servicesFormlyUtil2['default']);
		ngModule.factory('formlyWarn', _servicesFormlyWarn2['default']);

		ngModule.directive('formlyCustomValidation', _directivesFormlyCustomValidation2['default']);
		ngModule.directive('formlyField', _directivesFormlyField2['default']);
		ngModule.directive('formlyFocus', _directivesFormlyFocus2['default']);
		ngModule.directive('formlyForm', _directivesFormlyForm2['default']);

		ngModule.run(_runFormlyNgModelAttrsManipulator2['default']);
		ngModule.run(_runFormlyCustomTags2['default']);
		module.exports = exports['default'];

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

		exports['default'] = formlyWarn;

		// @ngInject
		function formlyWarn(formlyConfig, formlyErrorAndWarningsUrlPrefix, $log) {
		  return function warn() {
		    if (!formlyConfig.disableWarnings) {
		      var args = Array.prototype.slice.call(arguments);
		      var warnInfoSlug = args.shift();
		      args.unshift('Formly Warning:');
		      args.push('' + formlyErrorAndWarningsUrlPrefix + warnInfoSlug);
		      $log.warn.apply($log, _toConsumableArray(args));
		    }
		  };
		}
		formlyWarn.$inject = ["formlyConfig", "formlyErrorAndWarningsUrlPrefix", "$log"];
		module.exports = exports['default'];

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		// some versions of angular don't export the angular module properly,
		// so we get it from window in this case.
		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		var angular = __webpack_require__(4);

		/* istanbul ignore next */
		if (!angular.version) {
		  angular = window.angular;
		}
		exports['default'] = angular;
		module.exports = exports['default'];

	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		var _apiCheck = __webpack_require__(6);

		var _apiCheck2 = _interopRequireDefault(_apiCheck);

		var apiCheck = (0, _apiCheck2['default'])({
		  output: {
		    prefix: 'angular-formly:',
		    docsBaseUrl: __webpack_require__(7)
		  }
		});

		function shapeRequiredIfNot(otherProps, propChecker) {
		  if (!_angularFix2['default'].isArray(otherProps)) {
		    otherProps = [otherProps];
		  }
		  var type = 'specified if these are not specified: `' + otherProps.join(', ') + '` (otherwise it\'s optional)';

		  function shapeRequiredIfNotDefinition(prop, propName, location, obj) {
		    var propExists = obj && obj.hasOwnProperty(propName);
		    var otherPropsExist = otherProps.some(function (otherProp) {
		      return obj && obj.hasOwnProperty(otherProp);
		    });
		    if (!otherPropsExist && !propExists) {
		      return apiCheck.utils.getError(propName, location, type);
		    } else if (propExists) {
		      return propChecker(prop, propName, location, obj);
		    }
		  }

		  shapeRequiredIfNotDefinition.type = type;
		  return apiCheck.utils.checkerHelpers.setupChecker(shapeRequiredIfNotDefinition);
		}

		// TODO in 7.0.0 .nullable is available on all checkers
		function nullable(checker) {
		  return apiCheck.oneOfType([apiCheck.oneOf([null]), checker]);
		}

		var formlyExpression = apiCheck.oneOfType([apiCheck.string, apiCheck.func]);
		var specifyWrapperType = nullable(apiCheck.typeOrArrayOf(apiCheck.string));

		var apiCheckProperty = apiCheck.oneOfType([apiCheck.func, apiCheck.objectOf(apiCheck.func)]);

		var apiCheckInstanceProperty = apiCheck.shape.onlyIf('apiCheck', apiCheck.func.withProperties({
		  warn: apiCheck.func,
		  'throw': apiCheck.func,
		  shape: apiCheck.func
		}));

		var apiCheckFunctionProperty = apiCheck.shape.onlyIf('apiCheck', apiCheck.oneOf(['throw', 'warn']));

		var formlyWrapperType = apiCheck.shape({
		  name: shapeRequiredIfNot('types', apiCheck.string).optional,
		  template: apiCheck.shape.ifNot('templateUrl', apiCheck.string).optional,
		  templateUrl: apiCheck.shape.ifNot('template', apiCheck.string).optional,
		  types: apiCheck.typeOrArrayOf(apiCheck.string).optional,
		  overwriteOk: apiCheck.bool.optional,
		  validateOptions: apiCheck.func.optional,
		  apiCheck: apiCheckProperty.optional,
		  apiCheckInstance: apiCheckInstanceProperty.optional,
		  apiCheckFunction: apiCheckFunctionProperty.optional,
		  apiCheckOptions: apiCheck.object.optional
		}).strict;

		var expressionProperties = apiCheck.objectOf(apiCheck.oneOfType([formlyExpression, apiCheck.shape({
		  expression: formlyExpression,
		  message: formlyExpression.optional
		}).strict]));

		var modelChecker = apiCheck.oneOfType([apiCheck.string, apiCheck.object]);

		var templateManipulators = nullable(apiCheck.shape({
		  preWrapper: nullable(apiCheck.arrayOf(apiCheck.func)).optional,
		  postWrapper: nullable(apiCheck.arrayOf(apiCheck.func)).optional
		}).strict);

		var validatorChecker = apiCheck.objectOf(apiCheck.oneOfType([formlyExpression, apiCheck.shape({
		  expression: formlyExpression,
		  message: formlyExpression.optional
		}).strict]));

		var fieldOptionsApiShape = {
		  $$hashKey: apiCheck.any.optional,
		  type: apiCheck.shape.ifNot(['template', 'templateUrl'], apiCheck.string).optional,
		  template: apiCheck.shape.ifNot(['type', 'templateUrl'], apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
		  templateUrl: apiCheck.shape.ifNot(['type', 'template'], apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
		  key: apiCheck.oneOfType([apiCheck.string, apiCheck.number]).optional,
		  model: modelChecker.optional,
		  className: apiCheck.string.optional,
		  id: apiCheck.string.optional,
		  name: apiCheck.string.optional,
		  expressionProperties: expressionProperties.optional,
		  extras: apiCheck.shape({
		    validateOnModelChange: apiCheck.bool.optional,
		    skipNgModelAttrsManipulator: apiCheck.oneOfType([apiCheck.string, apiCheck.bool]).optional
		  }).strict.optional,
		  data: apiCheck.object.optional,
		  templateOptions: apiCheck.object.optional,
		  wrapper: specifyWrapperType.optional,
		  modelOptions: apiCheck.shape({
		    updateOn: apiCheck.string.optional,
		    debounce: apiCheck.oneOfType([apiCheck.objectOf(apiCheck.number), apiCheck.number]).optional,
		    allowInvalid: apiCheck.bool.optional,
		    getterSetter: apiCheck.bool.optional,
		    timezone: apiCheck.string.optional
		  }).optional,
		  watcher: apiCheck.typeOrArrayOf(apiCheck.shape({
		    expression: formlyExpression.optional,
		    listener: formlyExpression
		  })).optional,
		  validators: validatorChecker.optional,
		  asyncValidators: validatorChecker.optional,
		  parsers: apiCheck.arrayOf(formlyExpression).optional,
		  formatters: apiCheck.arrayOf(formlyExpression).optional,
		  noFormControl: apiCheck.bool.optional,
		  hide: apiCheck.bool.optional,
		  hideExpression: formlyExpression.optional,
		  ngModelAttrs: apiCheck.objectOf(apiCheck.shape({
		    expression: apiCheck.shape.ifNot(['value', 'attribute', 'bound'], apiCheck.any).optional,
		    value: apiCheck.shape.ifNot('expression', apiCheck.any).optional,
		    attribute: apiCheck.shape.ifNot('expression', apiCheck.any).optional,
		    bound: apiCheck.shape.ifNot('expression', apiCheck.any).optional
		  }).strict).optional,
		  elementAttributes: apiCheck.objectOf(apiCheck.string).optional,
		  optionsTypes: apiCheck.typeOrArrayOf(apiCheck.string).optional,
		  link: apiCheck.func.optional,
		  controller: apiCheck.oneOfType([apiCheck.string, apiCheck.func, apiCheck.array]).optional,
		  validation: apiCheck.shape({
		    show: nullable(apiCheck.bool).optional,
		    messages: apiCheck.objectOf(formlyExpression).optional,
		    errorExistsAndShouldBeVisible: apiCheck.bool.optional
		  }).optional,
		  formControl: apiCheck.typeOrArrayOf(apiCheck.object).optional,
		  value: apiCheck.func.optional,
		  runExpressions: apiCheck.func.optional,
		  templateManipulators: templateManipulators.optional,
		  resetModel: apiCheck.func.optional,
		  updateInitialValue: apiCheck.func.optional,
		  initialValue: apiCheck.any.optional,
		  defaultValue: apiCheck.any.optional
		};

		var formlyFieldOptions = apiCheck.shape(fieldOptionsApiShape).strict;

		var formOptionsApi = apiCheck.shape({
		  formState: apiCheck.object.optional,
		  resetModel: apiCheck.func.optional,
		  updateInitialValue: apiCheck.func.optional,
		  removeChromeAutoComplete: apiCheck.bool.optional,
		  templateManipulators: templateManipulators.optional,
		  wrapper: specifyWrapperType.optional,
		  fieldTransform: apiCheck.func.optional,
		  data: apiCheck.object.optional
		}).strict;

		var fieldGroup = apiCheck.shape({
		  $$hashKey: apiCheck.any.optional,
		  key: apiCheck.oneOfType([apiCheck.string, apiCheck.number]).optional,
		  // danger. Nested field groups wont get api-checked...
		  fieldGroup: apiCheck.arrayOf(apiCheck.oneOfType([formlyFieldOptions, apiCheck.object])),
		  className: apiCheck.string.optional,
		  options: formOptionsApi.optional,
		  hide: apiCheck.bool.optional,
		  hideExpression: formlyExpression.optional,
		  data: apiCheck.object.optional,
		  model: modelChecker.optional,
		  form: apiCheck.object.optional,
		  elementAttributes: apiCheck.objectOf(apiCheck.string).optional
		}).strict;

		var typeOptionsDefaultOptions = _angularFix2['default'].copy(fieldOptionsApiShape);
		typeOptionsDefaultOptions.key = apiCheck.string.optional;

		var formlyTypeOptions = apiCheck.shape({
		  name: apiCheck.string,
		  template: apiCheck.shape.ifNot('templateUrl', apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
		  templateUrl: apiCheck.shape.ifNot('template', apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
		  controller: apiCheck.oneOfType([apiCheck.func, apiCheck.string, apiCheck.array]).optional,
		  link: apiCheck.func.optional,
		  defaultOptions: apiCheck.oneOfType([apiCheck.func, apiCheck.shape(typeOptionsDefaultOptions)]).optional,
		  'extends': apiCheck.string.optional,
		  wrapper: specifyWrapperType.optional,
		  data: apiCheck.object.optional,
		  validateOptions: apiCheck.func.optional,
		  apiCheck: apiCheckProperty.optional,
		  apiCheckInstance: apiCheckInstanceProperty.optional,
		  apiCheckFunction: apiCheckFunctionProperty.optional,
		  apiCheckOptions: apiCheck.object.optional,
		  overwriteOk: apiCheck.bool.optional
		}).strict;

		_angularFix2['default'].extend(apiCheck, {
		  formlyTypeOptions: formlyTypeOptions, formlyFieldOptions: formlyFieldOptions, formlyExpression: formlyExpression, formlyWrapperType: formlyWrapperType, fieldGroup: fieldGroup, formOptionsApi: formOptionsApi
		});

		exports['default'] = apiCheck;
		module.exports = exports['default'];

	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = "https://github.com/formly-js/angular-formly/blob/" + ("6.23.2") + "/other/ERRORS_AND_WARNINGS.md#";
		module.exports = exports["default"];

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		exports['default'] = formlyUsability;

		// @ngInject
		function formlyUsability(formlyApiCheck, formlyErrorAndWarningsUrlPrefix) {
		  var _this = this;

		  _angularFix2['default'].extend(this, {
		    getFormlyError: getFormlyError,
		    getFieldError: getFieldError,
		    checkWrapper: checkWrapper,
		    checkWrapperTemplate: checkWrapperTemplate,
		    getErrorMessage: getErrorMessage,
		    $get: function $get() {
		      return _this;
		    }
		  });

		  function getFieldError(errorInfoSlug, message, field) {
		    if (arguments.length < 3) {
		      field = message;
		      message = errorInfoSlug;
		      errorInfoSlug = null;
		    }
		    return new Error(getErrorMessage(errorInfoSlug, message) + (' Field definition: ' + _angularFix2['default'].toJson(field)));
		  }

		  function getFormlyError(errorInfoSlug, message) {
		    if (!message) {
		      message = errorInfoSlug;
		      errorInfoSlug = null;
		    }
		    return new Error(getErrorMessage(errorInfoSlug, message));
		  }

		  function getErrorMessage(errorInfoSlug, message) {
		    var url = '';
		    if (errorInfoSlug !== null) {
		      url = '' + formlyErrorAndWarningsUrlPrefix + errorInfoSlug;
		    }
		    return 'Formly Error: ' + message + '. ' + url;
		  }

		  function checkWrapper(wrapper) {
		    formlyApiCheck['throw'](formlyApiCheck.formlyWrapperType, wrapper, {
		      prefix: 'formlyConfig.setWrapper',
		      urlSuffix: 'setwrapper-validation-failed'
		    });
		  }

		  function checkWrapperTemplate(template, additionalInfo) {
		    var formlyTransclude = '<formly-transclude></formly-transclude>';
		    if (template.indexOf(formlyTransclude) === -1) {
		      throw getFormlyError('Template wrapper templates must use "' + formlyTransclude + '" somewhere in them. ' + ('This one does not have "<formly-transclude></formly-transclude>" in it: ' + template) + '\n' + ('Additional information: ' + JSON.stringify(additionalInfo)));
		    }
		  }
		}
		formlyUsability.$inject = ["formlyApiCheck", "formlyErrorAndWarningsUrlPrefix"];
		module.exports = exports['default'];

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		var _otherUtils = __webpack_require__(10);

		var _otherUtils2 = _interopRequireDefault(_otherUtils);

		exports['default'] = formlyConfig;

		// @ngInject
		function formlyConfig(formlyUsabilityProvider, formlyErrorAndWarningsUrlPrefix, formlyApiCheck) {
		  var _this2 = this;

		  var typeMap = {};
		  var templateWrappersMap = {};
		  var defaultWrapperName = 'default';
		  var _this = this;
		  var getError = formlyUsabilityProvider.getFormlyError;

		  _angularFix2['default'].extend(this, {
		    setType: setType,
		    getType: getType,
		    getTypeHeritage: getTypeHeritage,
		    setWrapper: setWrapper,
		    getWrapper: getWrapper,
		    getWrapperByType: getWrapperByType,
		    removeWrapperByName: removeWrapperByName,
		    removeWrappersForType: removeWrappersForType,
		    disableWarnings: false,
		    extras: {
		      disableNgModelAttrsManipulator: false,
		      ngModelAttrsManipulatorPreferUnbound: false,
		      removeChromeAutoComplete: false,
		      defaultHideDirective: 'ng-if',
		      getFieldId: null,
		      explicitAsync: false
		    },
		    templateManipulators: {
		      preWrapper: [],
		      postWrapper: []
		    },
		    $get: function $get() {
		      return _this2;
		    }
		  });

		  function setType(options) {
		    if (_angularFix2['default'].isArray(options)) {
		      var _ret = (function () {
		        var allTypes = [];
		        _angularFix2['default'].forEach(options, function (item) {
		          allTypes.push(setType(item));
		        });
		        return {
		          v: allTypes
		        };
		      })();

		      if (typeof _ret === 'object') return _ret.v;
		    } else if (_angularFix2['default'].isObject(options)) {
		      checkType(options);
		      if (options['extends']) {
		        extendTypeOptions(options);
		      }
		      typeMap[options.name] = options;
		      return typeMap[options.name];
		    } else {
		      throw getError('You must provide an object or array for setType. You provided: ' + JSON.stringify(arguments));
		    }
		  }

		  function checkType(options) {
		    formlyApiCheck['throw'](formlyApiCheck.formlyTypeOptions, options, {
		      prefix: 'formlyConfig.setType',
		      url: 'settype-validation-failed'
		    });
		    checkApiCheck(options);
		    if (!options.overwriteOk) {
		      checkOverwrite(options.name, typeMap, options, 'types');
		    } else {
		      options.overwriteOk = undefined;
		    }
		  }

		  function extendTypeOptions(options) {
		    var extendsType = getType(options['extends'], true, options);
		    extendTypeControllerFunction(options, extendsType);
		    extendTypeLinkFunction(options, extendsType);
		    extendTypeValidateOptionsFunction(options, extendsType);
		    extendTypeDefaultOptions(options, extendsType);
		    _otherUtils2['default'].reverseDeepMerge(options, extendsType);
		    extendTemplate(options, extendsType);
		  }

		  function extendTemplate(options, extendsType) {
		    if (options.template && extendsType.templateUrl) {
		      delete options.templateUrl;
		    } else if (options.templateUrl && extendsType.template) {
		      delete options.template;
		    }
		  }

		  function extendTypeControllerFunction(options, extendsType) {
		    var extendsCtrl = extendsType.controller;
		    if (!_angularFix2['default'].isDefined(extendsCtrl)) {
		      return;
		    }
		    var optionsCtrl = options.controller;
		    if (_angularFix2['default'].isDefined(optionsCtrl)) {
		      options.controller = function ($scope, $controller) {
		        $controller(extendsCtrl, { $scope: $scope });
		        $controller(optionsCtrl, { $scope: $scope });
		      };
		      options.controller.$inject = ['$scope', '$controller'];
		    } else {
		      options.controller = extendsCtrl;
		    }
		  }

		  function extendTypeLinkFunction(options, extendsType) {
		    var extendsFn = extendsType.link;
		    if (!_angularFix2['default'].isDefined(extendsFn)) {
		      return;
		    }
		    var optionsFn = options.link;
		    if (_angularFix2['default'].isDefined(optionsFn)) {
		      options.link = function () {
		        extendsFn.apply(undefined, arguments);
		        optionsFn.apply(undefined, arguments);
		      };
		    } else {
		      options.link = extendsFn;
		    }
		  }

		  function extendTypeValidateOptionsFunction(options, extendsType) {
		    var extendsFn = extendsType.validateOptions;
		    if (!_angularFix2['default'].isDefined(extendsFn)) {
		      return;
		    }
		    var optionsFn = options.validateOptions;
		    var originalDefaultOptions = options.defaultOptions;
		    if (_angularFix2['default'].isDefined(optionsFn)) {
		      options.validateOptions = function (opts) {
		        optionsFn(opts);
		        var mergedOptions = _angularFix2['default'].copy(opts);
		        var defaultOptions = originalDefaultOptions;
		        if (defaultOptions) {
		          if (_angularFix2['default'].isFunction(defaultOptions)) {
		            defaultOptions = defaultOptions(mergedOptions);
		          }
		          _otherUtils2['default'].reverseDeepMerge(mergedOptions, defaultOptions);
		        }
		        extendsFn(mergedOptions);
		      };
		    } else {
		      options.validateOptions = extendsFn;
		    }
		  }

		  function extendTypeDefaultOptions(options, extendsType) {
		    var extendsDO = extendsType.defaultOptions;
		    if (!_angularFix2['default'].isDefined(extendsDO)) {
		      return;
		    }
		    var optionsDO = options.defaultOptions;
		    var optionsDOIsFn = _angularFix2['default'].isFunction(optionsDO);
		    var extendsDOIsFn = _angularFix2['default'].isFunction(extendsDO);
		    if (extendsDOIsFn) {
		      options.defaultOptions = function defaultOptions(opts) {
		        var extendsDefaultOptions = extendsDO(opts);
		        var mergedDefaultOptions = {};
		        _otherUtils2['default'].reverseDeepMerge(mergedDefaultOptions, opts, extendsDefaultOptions);
		        var extenderOptionsDefaultOptions = optionsDO;
		        if (optionsDOIsFn) {
		          extenderOptionsDefaultOptions = extenderOptionsDefaultOptions(mergedDefaultOptions);
		        }
		        _otherUtils2['default'].reverseDeepMerge(extendsDefaultOptions, extenderOptionsDefaultOptions);
		        return extendsDefaultOptions;
		      };
		    } else if (optionsDOIsFn) {
		      options.defaultOptions = function defaultOptions(opts) {
		        var newDefaultOptions = {};
		        _otherUtils2['default'].reverseDeepMerge(newDefaultOptions, opts, extendsDO);
		        return optionsDO(newDefaultOptions);
		      };
		    }
		  }

		  function getType(name, throwError, errorContext) {
		    if (!name) {
		      return undefined;
		    }
		    var type = typeMap[name];
		    if (!type && throwError === true) {
		      throw getError('There is no type by the name of "' + name + '": ' + JSON.stringify(errorContext));
		    } else {
		      return type;
		    }
		  }

		  function getTypeHeritage(parent) {
		    var heritage = [];
		    var type = parent;
		    if (_angularFix2['default'].isString(type)) {
		      type = getType(parent);
		    }
		    parent = type['extends'];
		    while (parent) {
		      type = getType(parent);
		      heritage.push(type);
		      parent = type['extends'];
		    }
		    return heritage;
		  }

		  function setWrapper(_x, _x2) {
		    var _again = true;

		    _function: while (_again) {
		      var options = _x,
		          name = _x2;
		      _again = false;

		      if (_angularFix2['default'].isArray(options)) {
		        return options.map(function (wrapperOptions) {
		          return setWrapper(wrapperOptions);
		        });
		      } else if (_angularFix2['default'].isObject(options)) {
		        options.types = getOptionsTypes(options);
		        options.name = getOptionsName(options, name);
		        checkWrapperAPI(options);
		        templateWrappersMap[options.name] = options;
		        return options;
		      } else if (_angularFix2['default'].isString(options)) {
		        _x = {
		          template: options,
		          name: name
		        };
		        _x2 = undefined;
		        _again = true;
		        continue _function;
		      }
		    }
		  }

		  function getOptionsTypes(options) {
		    if (_angularFix2['default'].isString(options.types)) {
		      return [options.types];
		    }
		    if (!_angularFix2['default'].isDefined(options.types)) {
		      return [];
		    } else {
		      return options.types;
		    }
		  }

		  function getOptionsName(options, name) {
		    return options.name || name || options.types.join(' ') || defaultWrapperName;
		  }

		  function checkWrapperAPI(options) {
		    formlyUsabilityProvider.checkWrapper(options);
		    if (options.template) {
		      formlyUsabilityProvider.checkWrapperTemplate(options.template, options);
		    }
		    checkApiCheck(options);
		    if (!options.overwriteOk) {
		      checkOverwrite(options.name, templateWrappersMap, options, 'templateWrappers');
		    } else {
		      delete options.overwriteOk;
		    }
		    checkWrapperTypes(options);
		  }

		  function checkWrapperTypes(options) {
		    var shouldThrow = !_angularFix2['default'].isArray(options.types) || !options.types.every(_angularFix2['default'].isString);
		    if (shouldThrow) {
		      throw getError('Attempted to create a template wrapper with types that is not a string or an array of strings');
		    }
		  }

		  function checkOverwrite(property, object, newValue, objectName) {
		    if (object.hasOwnProperty(property)) {
		      warn('overwriting-types-or-wrappers', ['Attempting to overwrite ' + property + ' on ' + objectName + ' which is currently', JSON.stringify(object[property]) + ' with ' + JSON.stringify(newValue), 'To supress this warning, specify the property "overwriteOk: true"'].join(' '));
		    }
		  }

		  function checkApiCheck(options) {
		    if (options.apiCheck && !_angularFix2['default'].isFunction(options.apiCheck)) {
		      warn('apicheck-as-an-object-deprecated', 'apiCheck as an object has been deprecated', 'Attempted for type: ' + options.name, options);
		    }
		  }

		  function getWrapper(name) {
		    return templateWrappersMap[name || defaultWrapperName];
		  }

		  function getWrapperByType(type) {
		    /* eslint prefer-const:0 */
		    var wrappers = [];
		    for (var _name in templateWrappersMap) {
		      if (templateWrappersMap.hasOwnProperty(_name)) {
		        if (templateWrappersMap[_name].types && templateWrappersMap[_name].types.indexOf(type) !== -1) {
		          wrappers.push(templateWrappersMap[_name]);
		        }
		      }
		    }
		    return wrappers;
		  }

		  function removeWrapperByName(name) {
		    var wrapper = templateWrappersMap[name];
		    delete templateWrappersMap[name];
		    return wrapper;
		  }

		  function removeWrappersForType(type) {
		    var wrappers = getWrapperByType(type);
		    if (!wrappers) {
		      return undefined;
		    }
		    if (!_angularFix2['default'].isArray(wrappers)) {
		      return removeWrapperByName(wrappers.name);
		    } else {
		      wrappers.forEach(function (wrapper) {
		        return removeWrapperByName(wrapper.name);
		      });
		      return wrappers;
		    }
		  }

		  function warn() {
		    if (!_this.disableWarnings && console.warn) {
		      /* eslint no-console:0 */
		      var args = Array.prototype.slice.call(arguments);
		      var warnInfoSlug = args.shift();
		      args.unshift('Formly Warning:');
		      args.push('' + formlyErrorAndWarningsUrlPrefix + warnInfoSlug);
		      console.warn.apply(console, _toConsumableArray(args));
		    }
		  }
		}
		formlyConfig.$inject = ["formlyUsabilityProvider", "formlyErrorAndWarningsUrlPrefix", "formlyApiCheck"];
		module.exports = exports['default'];

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		exports['default'] = { formlyEval: formlyEval, getFieldId: getFieldId, reverseDeepMerge: reverseDeepMerge, findByNodeName: findByNodeName, arrayify: arrayify, extendFunction: extendFunction, extendArray: extendArray };

		function formlyEval(scope, expression, $modelValue, $viewValue, extraLocals) {
		  if (_angularFix2['default'].isFunction(expression)) {
		    return expression($viewValue, $modelValue, scope, extraLocals);
		  } else {
		    return scope.$eval(expression, _angularFix2['default'].extend({ $viewValue: $viewValue, $modelValue: $modelValue }, extraLocals));
		  }
		}

		function getFieldId(formId, options, index) {
		  if (options.id) {
		    return options.id;
		  }
		  var type = options.type;
		  if (!type && options.template) {
		    type = 'template';
		  } else if (!type && options.templateUrl) {
		    type = 'templateUrl';
		  }

		  return [formId, type, options.key, index].join('_');
		}

		function reverseDeepMerge(dest) {
		  _angularFix2['default'].forEach(arguments, function (src, index) {
		    if (!index) {
		      return;
		    }
		    _angularFix2['default'].forEach(src, function (val, prop) {
		      if (!_angularFix2['default'].isDefined(dest[prop])) {
		        dest[prop] = _angularFix2['default'].copy(val);
		      } else if (objAndSameType(dest[prop], val)) {
		        reverseDeepMerge(dest[prop], val);
		      }
		    });
		  });
		  return dest;
		}

		function objAndSameType(obj1, obj2) {
		  return _angularFix2['default'].isObject(obj1) && _angularFix2['default'].isObject(obj2) && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2);
		}

		// recurse down a node tree to find a node with matching nodeName, for custom tags jQuery.find doesn't work in IE8
		function findByNodeName(el, nodeName) {
		  if (!el.prop) {
		    // not a jQuery or jqLite object -> wrap it
		    el = _angularFix2['default'].element(el);
		  }

		  if (el.prop('nodeName') === nodeName.toUpperCase()) {
		    return el;
		  }

		  var c = el.children();
		  for (var i = 0; c && i < c.length; i++) {
		    var node = findByNodeName(c[i], nodeName);
		    if (node) {
		      return node;
		    }
		  }
		}

		function arrayify(obj) {
		  if (obj && !_angularFix2['default'].isArray(obj)) {
		    obj = [obj];
		  } else if (!obj) {
		    obj = [];
		  }
		  return obj;
		}

		function extendFunction() {
		  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
		    fns[_key] = arguments[_key];
		  }

		  return function extendedFunction() {
		    var args = arguments;
		    fns.forEach(function (fn) {
		      return fn.apply(null, args);
		    });
		  };
		}

		function extendArray(primary, secondary, property) {
		  if (property) {
		    primary = primary[property];
		    secondary = secondary[property];
		  }
		  if (secondary && primary) {
		    _angularFix2['default'].forEach(secondary, function (item) {
		      if (primary.indexOf(item) === -1) {
		        primary.push(item);
		      }
		    });
		    return primary;
		  } else if (secondary) {
		    return secondary;
		  } else {
		    return primary;
		  }
		}
		module.exports = exports['default'];

	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = formlyValidationMessages;

		// @ngInject
		function formlyValidationMessages() {

		  var validationMessages = {
		    addTemplateOptionValueMessage: addTemplateOptionValueMessage,
		    addStringMessage: addStringMessage,
		    messages: {}
		  };

		  return validationMessages;

		  function addTemplateOptionValueMessage(name, prop, prefix, suffix, alternate) {
		    validationMessages.messages[name] = templateOptionValue(prop, prefix, suffix, alternate);
		  }

		  function addStringMessage(name, string) {
		    validationMessages.messages[name] = function () {
		      return string;
		    };
		  }

		  function templateOptionValue(prop, prefix, suffix, alternate) {
		    return function getValidationMessage(viewValue, modelValue, scope) {
		      if (scope.options.templateOptions[prop]) {
		        return prefix + " " + scope.options.templateOptions[prop] + " " + suffix;
		      } else {
		        return alternate;
		      }
		    };
		  }
		}
		module.exports = exports["default"];

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _otherUtils = __webpack_require__(10);

		var _otherUtils2 = _interopRequireDefault(_otherUtils);

		exports['default'] = formlyUtil;

		// @ngInject
		function formlyUtil() {
		  return _otherUtils2['default'];
		}
		module.exports = exports['default'];

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		exports['default'] = formlyCustomValidation;

		// @ngInject
		function formlyCustomValidation(formlyConfig, formlyUtil, $q, formlyWarn) {
		  return {
		    restrict: 'A',
		    require: 'ngModel',
		    link: function formlyCustomValidationLink(scope, el, attrs, ctrl) {
		      var opts = scope.options;
		      var warnedValidators = [];
		      opts.validation.messages = opts.validation.messages || {};
		      _angularFix2['default'].forEach(opts.validation.messages, function (message, key) {
		        opts.validation.messages[key] = function () {
		          return formlyUtil.formlyEval(scope, message, ctrl.$modelValue, ctrl.$viewValue);
		        };
		      });

		      var useNewValidatorsApi = ctrl.hasOwnProperty('$validators') && !attrs.hasOwnProperty('useParsers');
		      _angularFix2['default'].forEach(opts.validators, addValidatorToPipeline.bind(null, false));
		      _angularFix2['default'].forEach(opts.asyncValidators, addValidatorToPipeline.bind(null, true));

		      function addValidatorToPipeline(isAsync, validator, name) {
		        setupMessage(validator, name);
		        validator = _angularFix2['default'].isObject(validator) ? validator.expression : validator;
		        if (useNewValidatorsApi) {
		          setupWithValidators(validator, name, isAsync);
		        } else {
		          setupWithParsers(validator, name, isAsync);
		        }
		      }

		      function setupMessage(validator, name) {
		        var message = validator.message;
		        if (message) {
		          opts.validation.messages[name] = function () {
		            return formlyUtil.formlyEval(scope, message, ctrl.$modelValue, ctrl.$viewValue);
		          };
		        }
		      }

		      function setupWithValidators(validator, name, isAsync) {
		        var isPossiblyAsync = !_angularFix2['default'].isString(validator);
		        var validatorCollection = isPossiblyAsync || isAsync ? '$asyncValidators' : '$validators';

		        // UPDATE IN 7.0.0
		        // this is temporary until we can have a breaking change. Allow people to get the wins of the explicitAsync api
		        if (formlyConfig.extras.explicitAsync && !isAsync) {
		          validatorCollection = '$validators';
		        }

		        ctrl[validatorCollection][name] = function evalValidity(modelValue, viewValue) {
		          var value = formlyUtil.formlyEval(scope, validator, modelValue, viewValue);
		          // UPDATE IN 7.0.0
		          // In the next breaking change, this code should simply return the value
		          if (isAsync) {
		            return value;
		          } else if (isPossiblyAsync && !formlyConfig.extras.explicitAsync) {
		            if (isPromiseLike(value)) {
		              logAsyncValidatorsDeprecationNotice(validator, opts);
		              return value;
		            } else {
		              return value ? $q.when(value) : $q.reject(value);
		            }
		          } else {
		            return value;
		          }
		        };
		      }

		      function setupWithParsers(validator, name, isAsync) {
		        var inFlightValidator = undefined;
		        ctrl.$parsers.unshift(function evalValidityOfParser(viewValue) {
		          var isValid = formlyUtil.formlyEval(scope, validator, ctrl.$modelValue, viewValue);
		          // UPDATE IN 7.0.0
		          // In the next breaking change, rather than checking for isPromiseLike, it should just check for isAsync.

		          if (isAsync || isPromiseLike(isValid)) {
		            if (!isAsync) {
		              logAsyncValidatorsDeprecationNotice(validator, opts);
		            }
		            ctrl.$pending = ctrl.$pending || {};
		            ctrl.$pending[name] = true;
		            inFlightValidator = isValid;
		            isValid.then(function () {
		              if (inFlightValidator === isValid) {
		                ctrl.$setValidity(name, true);
		              }
		            })['catch'](function () {
		              if (inFlightValidator === isValid) {
		                ctrl.$setValidity(name, false);
		              }
		            })['finally'](function () {
		              var $pending = ctrl.$pending || {};
		              if (Object.keys($pending).length === 1) {
		                delete ctrl.$pending;
		              } else {
		                delete ctrl.$pending[name];
		              }
		            });
		          } else {
		            ctrl.$setValidity(name, isValid);
		          }
		          return viewValue;
		        });
		      }

		      function logAsyncValidatorsDeprecationNotice(validator, options) {
		        if (warnedValidators.indexOf(validator) !== -1) {
		          // we've warned about this one before. No spam necessary...
		          return;
		        }
		        warnedValidators.push(validator);
		        formlyWarn('validators-returning-promises-should-use-asyncvalidators', 'Validators returning promises should use asyncValidators instead of validators.', options);
		      }
		    }
		  };

		  function isPromiseLike(obj) {
		    return obj && _angularFix2['default'].isFunction(obj.then);
		  }
		}
		formlyCustomValidation.$inject = ["formlyConfig", "formlyUtil", "$q", "formlyWarn"];
		module.exports = exports['default'];

	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		var _apiCheck = __webpack_require__(6);

		var _apiCheck2 = _interopRequireDefault(_apiCheck);

		exports['default'] = formlyField;

		/**
		 * @ngdoc directive
		 * @name formlyField
		 * @restrict AE
		 */
		// @ngInject
		function formlyField($http, $q, $compile, $templateCache, $interpolate, formlyConfig, formlyValidationMessages, formlyApiCheck, formlyUtil, formlyUsability, formlyWarn) {
		  var arrayify = formlyUtil.arrayify;

		  FormlyFieldController.$inject = ["$scope", "$timeout", "$parse", "$controller"];
		  return {
		    restrict: 'AE',
		    transclude: true,
		    require: '?^formlyForm',
		    scope: {
		      options: '=',
		      model: '=',
		      formId: '@', // TODO remove formId in a breaking release
		      index: '=?',
		      fields: '=?',
		      formState: '=?',
		      formOptions: '=?',
		      form: '=?' // TODO require form in a breaking release
		    },
		    controller: FormlyFieldController,
		    link: fieldLink
		  };

		  // @ngInject
		  function FormlyFieldController($scope, $timeout, $parse, $controller) {
		    /* eslint max-statements:[2, 31] */
		    if ($scope.options.fieldGroup) {
		      setupFieldGroup();
		      return;
		    }

		    var fieldType = getFieldType($scope.options);
		    simplifyLife($scope.options);
		    mergeFieldOptionsWithTypeDefaults($scope.options, fieldType);
		    extendOptionsWithDefaults($scope.options, $scope.index);
		    checkApi($scope.options);
		    // set field id to link labels and fields

		    // initalization
		    setFieldIdAndName();
		    setDefaultValue();
		    setInitialValue();
		    runExpressions();
		    addValidationMessages($scope.options);
		    invokeControllers($scope, $scope.options, fieldType);

		    // function definitions
		    function runExpressions() {
		      // must run on next tick to make sure that the current value is correct.
		      $timeout(function runExpressionsOnNextTick() {
		        var field = $scope.options;
		        var currentValue = valueGetterSetter();
		        _angularFix2['default'].forEach(field.expressionProperties, function runExpression(expression, prop) {
		          var setter = $parse(prop).assign;
		          var promise = $q.when(formlyUtil.formlyEval($scope, expression, currentValue, currentValue));
		          promise.then(function setFieldValue(value) {
		            setter(field, value);
		          });
		        });
		      });
		    }

		    function valueGetterSetter(newVal) {
		      if (!$scope.model || !$scope.options.key) {
		        return undefined;
		      }
		      if (_angularFix2['default'].isDefined(newVal)) {
		        $scope.model[$scope.options.key] = newVal;
		      }
		      return $scope.model[$scope.options.key];
		    }

		    function simplifyLife(options) {
		      // add a few empty objects (if they don't already exist) so you don't have to undefined check everywhere
		      formlyUtil.reverseDeepMerge(options, {
		        extras: {},
		        data: {},
		        templateOptions: {},
		        validation: {}
		      });
		      // create $scope.to so template authors can reference to instead of $scope.options.templateOptions
		      $scope.to = $scope.options.templateOptions;
		      $scope.formOptions = $scope.formOptions || {};
		    }

		    function setFieldIdAndName() {
		      if (_angularFix2['default'].isFunction(formlyConfig.extras.getFieldId)) {
		        $scope.id = formlyConfig.extras.getFieldId($scope.options, $scope.model, $scope);
		      } else {
		        var formName = $scope.form && $scope.form.$name || $scope.formId;
		        $scope.id = formlyUtil.getFieldId(formName, $scope.options, $scope.index);
		      }
		      $scope.options.id = $scope.id;
		      $scope.name = $scope.options.name || $scope.options.id;
		      $scope.options.name = $scope.name;
		    }

		    function setDefaultValue() {
		      if (_angularFix2['default'].isDefined($scope.options.defaultValue) && !_angularFix2['default'].isDefined($scope.model[$scope.options.key])) {
		        $scope.model[$scope.options.key] = $scope.options.defaultValue;
		      }
		    }

		    function setInitialValue() {
		      $scope.options.initialValue = $scope.model && $scope.model[$scope.options.key];
		    }

		    function mergeFieldOptionsWithTypeDefaults(options, type) {
		      if (type) {
		        mergeOptions(options, type.defaultOptions);
		      }
		      var properOrder = arrayify(options.optionsTypes).reverse(); // so the right things are overridden
		      _angularFix2['default'].forEach(properOrder, function (typeName) {
		        mergeOptions(options, formlyConfig.getType(typeName, true, options).defaultOptions);
		      });
		    }

		    function mergeOptions(options, extraOptions) {
		      if (extraOptions) {
		        if (_angularFix2['default'].isFunction(extraOptions)) {
		          extraOptions = extraOptions(options);
		        }
		        formlyUtil.reverseDeepMerge(options, extraOptions);
		      }
		    }

		    function extendOptionsWithDefaults(options, index) {
		      var key = options.key || index || 0;
		      _angularFix2['default'].extend(options, {
		        // attach the key in case the formly-field directive is used directly
		        key: key,
		        value: options.value || valueGetterSetter,
		        runExpressions: runExpressions,
		        resetModel: resetModel,
		        updateInitialValue: updateInitialValue
		      });
		    }

		    function resetModel() {
		      $scope.model[$scope.options.key] = $scope.options.initialValue;
		      if ($scope.options.formControl) {
		        if (_angularFix2['default'].isArray($scope.options.formControl)) {
		          _angularFix2['default'].forEach($scope.options.formControl, function (formControl) {
		            resetFormControl(formControl, true);
		          });
		        } else {
		          resetFormControl($scope.options.formControl);
		        }
		      }
		    }

		    function resetFormControl(formControl, isMultiNgModel) {
		      if (!isMultiNgModel) {
		        formControl.$setViewValue($scope.model[$scope.options.key]);
		      }

		      formControl.$render();
		      formControl.$setUntouched();
		      formControl.$setPristine();

		      // To prevent breaking change requiring a digest to reset $viewModel
		      if (!$scope.$root.$$phase) {
		        $scope.$digest();
		      }
		    }

		    function updateInitialValue() {
		      $scope.options.initialValue = $scope.model[$scope.options.key];
		    }

		    function addValidationMessages(options) {
		      options.validation.messages = options.validation.messages || {};
		      _angularFix2['default'].forEach(formlyValidationMessages.messages, function createFunctionForMessage(expression, name) {
		        if (!options.validation.messages[name]) {
		          options.validation.messages[name] = function evaluateMessage(viewValue, modelValue, scope) {
		            return formlyUtil.formlyEval(scope, expression, modelValue, viewValue);
		          };
		        }
		      });
		    }

		    function invokeControllers(scope) {
		      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
		      var type = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

		      _angularFix2['default'].forEach([type.controller, options.controller], function (controller) {
		        if (controller) {
		          $controller(controller, { $scope: scope });
		        }
		      });
		    }

		    function setupFieldGroup() {
		      $scope.options.options = $scope.options.options || {};
		      $scope.options.options.formState = $scope.formState;
		    }
		  }

		  // link function
		  function fieldLink(scope, el, attrs, formlyFormCtrl) {
		    if (scope.options.fieldGroup) {
		      setFieldGroupTemplate();
		      return;
		    }

		    // watch the field model (if exists) if there is no parent formly-form directive (that would watch it instead)
		    if (!formlyFormCtrl && scope.options.model) {
		      scope.$watch('options.model', function () {
		        return scope.options.runExpressions();
		      }, true);
		    }

		    addAttributes();
		    addClasses();

		    var type = getFieldType(scope.options);
		    var args = arguments;
		    var thusly = this;
		    var fieldCount = 0;
		    var fieldManipulators = getManipulators(scope.options, scope.formOptions);
		    getFieldTemplate(scope.options).then(runManipulators(fieldManipulators.preWrapper)).then(transcludeInWrappers(scope.options, scope.formOptions)).then(runManipulators(fieldManipulators.postWrapper)).then(setElementTemplate).then(watchFormControl).then(callLinkFunctions)['catch'](function (error) {
		      formlyWarn('there-was-a-problem-setting-the-template-for-this-field', 'There was a problem setting the template for this field ', scope.options, error);
		    });

		    function setFieldGroupTemplate() {
		      checkFieldGroupApi(scope.options);
		      el.addClass('formly-field-group');
		      var extraAttributes = '';
		      if (scope.options.elementAttributes) {
		        extraAttributes = Object.keys(scope.options.elementAttributes).map(function (key) {
		          return key + '="' + scope.options.elementAttributes[key] + '"';
		        }).join(' ');
		      }
		      var modelValue = 'model';
		      scope.options.form = scope.form;
		      if (scope.options.key) {
		        modelValue = 'model[\'' + scope.options.key + '\']';
		      }
		      setElementTemplate('\n          <formly-form model="' + modelValue + '"\n                       fields="options.fieldGroup"\n                       options="options.options"\n                       form="options.form"\n                       class="' + scope.options.className + '"\n                       ' + extraAttributes + '\n                       is-field-group>\n          </formly-form>\n        ');
		    }

		    function addAttributes() {
		      if (scope.options.elementAttributes) {
		        el.attr(scope.options.elementAttributes);
		      }
		    }

		    function addClasses() {
		      if (scope.options.className) {
		        el.addClass(scope.options.className);
		      }
		      if (scope.options.type) {
		        el.addClass('formly-field-' + scope.options.type);
		      }
		    }

		    function setElementTemplate(templateString) {
		      el.html(asHtml(templateString));
		      $compile(el.contents())(scope);
		      return templateString;
		    }

		    function watchFormControl(templateString) {
		      var stopWatchingShowError = _angularFix2['default'].noop;
		      if (scope.options.noFormControl) {
		        return;
		      }
		      var templateEl = _angularFix2['default'].element('<div>' + templateString + '</div>');
		      var ngModelNodes = templateEl[0].querySelectorAll('[ng-model],[data-ng-model]');

		      if (ngModelNodes.length) {
		        _angularFix2['default'].forEach(ngModelNodes, function (ngModelNode) {
		          fieldCount++;
		          watchFieldNameOrExistence(ngModelNode.getAttribute('name'));
		        });
		      }

		      function watchFieldNameOrExistence(name) {
		        var nameExpressionRegex = /\{\{(.*?)}}/;
		        var nameExpression = nameExpressionRegex.exec(name);
		        if (nameExpression) {
		          name = $interpolate(name)(scope);
		        }
		        watchFieldExistence(name);
		      }

		      function watchFieldExistence(name) {
		        scope.$watch('form["' + name + '"]', function formControlChange(formControl) {
		          if (formControl) {
		            if (fieldCount > 1) {
		              if (!scope.options.formControl) {
		                scope.options.formControl = [];
		              }
		              scope.options.formControl.push(formControl);
		            } else {
		              scope.options.formControl = formControl;
		            }
		            scope.fc = scope.options.formControl; // shortcut for template authors
		            stopWatchingShowError();
		            addShowMessagesWatcher();
		            addParsers();
		            addFormatters();
		          }
		        });
		      }

		      function addShowMessagesWatcher() {
		        stopWatchingShowError = scope.$watch(function watchShowValidationChange() {
		          var customExpression = formlyConfig.extras.errorExistsAndShouldBeVisibleExpression;
		          var options = scope.options;
		          var fc = scope.fc;

		          if (!fc.$invalid) {
		            return false;
		          } else if (typeof options.validation.show === 'boolean') {
		            return options.validation.show;
		          } else if (customExpression) {
		            return formlyUtil.formlyEval(scope, customExpression, fc.$modelValue, fc.$viewValue);
		          } else {
		            var noTouchedButDirty = _angularFix2['default'].isUndefined(fc.$touched) && fc.$dirty;
		            return scope.fc.$touched || noTouchedButDirty;
		          }
		        }, function onShowValidationChange(show) {
		          scope.options.validation.errorExistsAndShouldBeVisible = show;
		          scope.showError = show; // shortcut for template authors
		        });
		      }

		      function addParsers() {
		        setParsersOrFormatters('parsers');
		      }

		      function addFormatters() {
		        setParsersOrFormatters('formatters');
		      }

		      function setParsersOrFormatters(which) {
		        var originalThingProp = 'originalParser';
		        if (which === 'formatters') {
		          originalThingProp = 'originalFormatter';
		        }

		        // init with type's parsers
		        var things = getThingsFromType(type);

		        // get optionsTypes things
		        things = formlyUtil.extendArray(things, getThingsFromOptionsTypes(scope.options.optionsTypes));

		        // get field's things
		        things = formlyUtil.extendArray(things, scope.options[which]);

		        // convert things into formlyExpression things
		        _angularFix2['default'].forEach(things, function (thing, index) {
		          things[index] = getFormlyExpressionThing(thing);
		        });

		        var ngModelCtrls = scope.fc;
		        if (!_angularFix2['default'].isArray(ngModelCtrls)) {
		          ngModelCtrls = [ngModelCtrls];
		        }

		        _angularFix2['default'].forEach(ngModelCtrls, function (ngModelCtrl) {
		          var _ngModelCtrl;

		          ngModelCtrl['$' + which] = (_ngModelCtrl = ngModelCtrl['$' + which]).concat.apply(_ngModelCtrl, _toConsumableArray(things));
		        });

		        function getThingsFromType(theType) {
		          if (!theType) {
		            return [];
		          }
		          if (_angularFix2['default'].isString(theType)) {
		            theType = formlyConfig.getType(theType, true, scope.options);
		          }
		          var typeThings = [];

		          // get things from parent
		          if (theType['extends']) {
		            typeThings = formlyUtil.extendArray(typeThings, getThingsFromType(theType['extends']));
		          }

		          // get own type's things
		          typeThings = formlyUtil.extendArray(typeThings, getDefaultOptionsProperty(theType, which, []));

		          // get things from optionsTypes
		          typeThings = formlyUtil.extendArray(typeThings, getThingsFromOptionsTypes(getDefaultOptionsOptionsTypes(theType)));

		          return typeThings;
		        }

		        function getThingsFromOptionsTypes() {
		          var optionsTypes = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

		          var optionsTypesThings = [];
		          _angularFix2['default'].forEach(_angularFix2['default'].copy(arrayify(optionsTypes)).reverse(), function (optionsTypeName) {
		            optionsTypesThings = formlyUtil.extendArray(optionsTypesThings, getThingsFromType(optionsTypeName));
		          });
		          return optionsTypesThings;
		        }

		        function getFormlyExpressionThing(thing) {
		          formlyExpressionParserOrFormatterFunction[originalThingProp] = thing;
		          return formlyExpressionParserOrFormatterFunction;

		          function formlyExpressionParserOrFormatterFunction($viewValue) {
		            var $modelValue = scope.options.value();
		            return formlyUtil.formlyEval(scope, thing, $modelValue, $viewValue);
		          }
		        }
		      }
		    }

		    function callLinkFunctions() {
		      if (type && type.link) {
		        type.link.apply(thusly, args);
		      }
		      if (scope.options.link) {
		        scope.options.link.apply(thusly, args);
		      }
		    }

		    function runManipulators(manipulators) {
		      return function runManipulatorsOnTemplate(templateToManipulate) {
		        var chain = $q.when(templateToManipulate);
		        _angularFix2['default'].forEach(manipulators, function (manipulator) {
		          chain = chain.then(function (template) {
		            return $q.when(manipulator(template, scope.options, scope)).then(function (newTemplate) {
		              return _angularFix2['default'].isString(newTemplate) ? newTemplate : asHtml(newTemplate);
		            });
		          });
		        });
		        return chain;
		      };
		    }
		  }

		  // sort-of stateless util functions
		  function asHtml(el) {
		    var wrapper = _angularFix2['default'].element('<a></a>');
		    return wrapper.append(el).html();
		  }

		  function getFieldType(options) {
		    return options.type && formlyConfig.getType(options.type);
		  }

		  function getManipulators(options, formOptions) {
		    var preWrapper = [];
		    var postWrapper = [];
		    addManipulators(options.templateManipulators);
		    addManipulators(formOptions.templateManipulators);
		    addManipulators(formlyConfig.templateManipulators);
		    return { preWrapper: preWrapper, postWrapper: postWrapper };

		    function addManipulators(manipulators) {
		      /* eslint-disable */ // it doesn't understand this :-(

		      var _ref = manipulators || {};

		      var _ref$preWrapper = _ref.preWrapper;
		      var pre = _ref$preWrapper === undefined ? [] : _ref$preWrapper;
		      var _ref$postWrapper = _ref.postWrapper;
		      var post = _ref$postWrapper === undefined ? [] : _ref$postWrapper;

		      preWrapper = preWrapper.concat(pre);
		      postWrapper = postWrapper.concat(post);
		      /* eslint-enable */
		    }
		  }

		  function getFieldTemplate(options) {
		    function fromOptionsOrType(key, fieldType) {
		      if (_angularFix2['default'].isDefined(options[key])) {
		        return options[key];
		      } else if (fieldType && _angularFix2['default'].isDefined(fieldType[key])) {
		        return fieldType[key];
		      }
		    }

		    var type = formlyConfig.getType(options.type, true, options);
		    var template = fromOptionsOrType('template', type);
		    var templateUrl = fromOptionsOrType('templateUrl', type);
		    if (_angularFix2['default'].isUndefined(template) && !templateUrl) {
		      throw formlyUsability.getFieldError('type-type-has-no-template', 'Type \'' + options.type + '\' has not template. On element:', options);
		    }

		    return getTemplate(templateUrl || template, _angularFix2['default'].isUndefined(template), options);
		  }

		  function getTemplate(template, isUrl, options) {
		    var templatePromise = undefined;
		    if (_angularFix2['default'].isFunction(template)) {
		      templatePromise = $q.when(template(options));
		    } else {
		      templatePromise = $q.when(template);
		    }

		    if (!isUrl) {
		      return templatePromise;
		    } else {
		      var _ret = (function () {
		        var httpOptions = { cache: $templateCache };
		        return {
		          v: templatePromise.then(function (url) {
		            return $http.get(url, httpOptions);
		          }).then(function (response) {
		            return response.data;
		          })['catch'](function handleErrorGettingATemplate(error) {
		            formlyWarn('problem-loading-template-for-templateurl', 'Problem loading template for ' + template, error);
		          })
		        };
		      })();

		      if (typeof _ret === 'object') return _ret.v;
		    }
		  }

		  function transcludeInWrappers(options, formOptions) {
		    var wrapper = getWrapperOption(options, formOptions);

		    return function transcludeTemplate(template) {
		      if (!wrapper.length) {
		        return $q.when(template);
		      }

		      wrapper.forEach(function (aWrapper) {
		        formlyUsability.checkWrapper(aWrapper, options);
		        aWrapper.validateOptions && aWrapper.validateOptions(options);
		        runApiCheck(aWrapper, options);
		      });
		      var promises = wrapper.map(function (w) {
		        return getTemplate(w.template || w.templateUrl, !w.template);
		      });
		      return $q.all(promises).then(function (wrappersTemplates) {
		        wrappersTemplates.forEach(function (wrapperTemplate, index) {
		          formlyUsability.checkWrapperTemplate(wrapperTemplate, wrapper[index]);
		        });
		        wrappersTemplates.reverse(); // wrapper 0 is wrapped in wrapper 1 and so on...
		        var totalWrapper = wrappersTemplates.shift();
		        wrappersTemplates.forEach(function (wrapperTemplate) {
		          totalWrapper = doTransclusion(totalWrapper, wrapperTemplate);
		        });
		        return doTransclusion(totalWrapper, template);
		      });
		    };
		  }

		  function doTransclusion(wrapper, template) {
		    var superWrapper = _angularFix2['default'].element('<a></a>'); // this allows people not have to have a single root in wrappers
		    superWrapper.append(wrapper);
		    var transcludeEl = superWrapper.find('formly-transclude');
		    if (!transcludeEl.length) {
		      // try it using our custom find function
		      transcludeEl = formlyUtil.findByNodeName(superWrapper, 'formly-transclude');
		    }
		    transcludeEl.replaceWith(template);
		    return superWrapper.html();
		  }

		  function getWrapperOption(options, formOptions) {
		    /* eslint complexity:[2, 6] */
		    var wrapper = options.wrapper;
		    // explicit null means no wrapper
		    if (wrapper === null) {
		      return [];
		    }

		    // nothing specified means use the default wrapper for the type
		    if (!wrapper) {
		      // get all wrappers that specify they apply to this type
		      wrapper = arrayify(formlyConfig.getWrapperByType(options.type));
		    } else {
		      wrapper = arrayify(wrapper).map(formlyConfig.getWrapper);
		    }

		    // get all wrappers for that the type specified that it uses.
		    var type = formlyConfig.getType(options.type, true, options);
		    if (type && type.wrapper) {
		      var typeWrappers = arrayify(type.wrapper).map(formlyConfig.getWrapper);
		      wrapper = wrapper.concat(typeWrappers);
		    }

		    // add form wrappers
		    if (formOptions.wrapper) {
		      var formWrappers = arrayify(formOptions.wrapper).map(formlyConfig.getWrapper);
		      wrapper = wrapper.concat(formWrappers);
		    }

		    // add the default wrapper last
		    var defaultWrapper = formlyConfig.getWrapper();
		    if (defaultWrapper) {
		      wrapper.push(defaultWrapper);
		    }
		    return wrapper;
		  }

		  function checkApi(options) {
		    formlyApiCheck['throw'](formlyApiCheck.formlyFieldOptions, options, {
		      prefix: 'formly-field directive',
		      url: 'formly-field-directive-validation-failed'
		    });
		    // validate with the type
		    var type = options.type && formlyConfig.getType(options.type);
		    if (type) {
		      if (type.validateOptions) {
		        type.validateOptions(options);
		      }
		      runApiCheck(type, options, true);
		    }
		    if (options.expressionProperties && options.expressionProperties.hide) {
		      formlyWarn('dont-use-expressionproperties.hide-use-hideexpression-instead', 'You have specified `hide` in `expressionProperties`. Use `hideExpression` instead', options);
		    }
		  }

		  function checkFieldGroupApi(options) {
		    formlyApiCheck['throw'](formlyApiCheck.fieldGroup, options, {
		      prefix: 'formly-field directive',
		      url: 'formly-field-directive-validation-failed'
		    });
		  }

		  function runApiCheck(_ref2, options, forType) {
		    var apiCheck = _ref2.apiCheck;
		    var apiCheckInstance = _ref2.apiCheckInstance;
		    var apiCheckFunction = _ref2.apiCheckFunction;
		    var apiCheckOptions = _ref2.apiCheckOptions;

		    runApiCheckForType(apiCheck, apiCheckInstance, apiCheckFunction, apiCheckOptions, options);
		    if (forType && options.type) {
		      _angularFix2['default'].forEach(formlyConfig.getTypeHeritage(options.type), function (type) {
		        runApiCheckForType(type.apiCheck, type.apiCheckInstance, type.apiCheckFunction, type.apiCheckOptions, options);
		      });
		    }
		  }

		  function runApiCheckForType(apiCheck, apiCheckInstance, apiCheckFunction, apiCheckOptions, options) {
		    /* eslint complexity:[2, 9] */
		    if (!apiCheck) {
		      return;
		    }
		    var instance = apiCheckInstance || formlyConfig.extras.apiCheckInstance || formlyApiCheck;
		    if (instance.config.disabled || _apiCheck2['default'].globalConfig.disabled) {
		      return;
		    }
		    var fn = apiCheckFunction || 'warn';
		    if (_angularFix2['default'].isFunction(apiCheck)) {
		      // this is the new API
		      var checkerObjects = apiCheck(instance);
		      _angularFix2['default'].forEach(checkerObjects, function (shape, name) {
		        var checker = instance.shape(shape);
		        var checkOptions = _angularFix2['default'].extend({
		          prefix: 'formly-field type ' + options.type + ' for property ' + name,
		          url: formlyApiCheck.config.output.docsBaseUrl + 'formly-field-type-apicheck-failed'
		        }, apiCheckOptions);
		        instance[fn](checker, options[name], checkOptions);
		      });
		    } else {
		      // TODO this is the deprecated API. Remove this in a breaking change.
		      var checker = instance.shape(apiCheck);
		      var checkOptions = apiCheckOptions || {
		        prefix: 'formly-field type ' + options.type,
		        url: formlyApiCheck.config.output.docsBaseUrl + 'formly-field-type-apicheck-failed'
		      };
		      instance[fn](checker, options, checkOptions);
		    }
		  }
		}
		formlyField.$inject = ["$http", "$q", "$compile", "$templateCache", "$interpolate", "formlyConfig", "formlyValidationMessages", "formlyApiCheck", "formlyUtil", "formlyUsability", "formlyWarn"];

		// Stateless util functions
		function getDefaultOptionsOptionsTypes(type) {
		  return getDefaultOptionsProperty(type, 'optionsTypes', []);
		}

		function getDefaultOptionsProperty(type, prop, defaultValue) {
		  return type.defaultOptions && type.defaultOptions[prop] || defaultValue;
		}
		module.exports = exports['default'];

	/***/ },
	/* 15 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		exports['default'] = formlyFocus;

		// @ngInject
		function formlyFocus($timeout, $document) {
		  return {
		    restrict: 'A',
		    link: function formlyFocusLink(scope, element, attrs) {
		      var previousEl = null;
		      var el = element[0];
		      var doc = $document[0];
		      attrs.$observe('formlyFocus', function respondToFocusExpressionChange(value) {
		        /* eslint no-bitwise:0 */ // I know what I'm doing. I promise...
		        if (value === 'true') {
		          $timeout(function setElementFocus() {
		            previousEl = doc.activeElement;
		            el.focus();
		          }, ~ ~attrs.focusWait);
		        } else if (value === 'false') {
		          if (doc.activeElement === el) {
		            el.blur();
		            if (attrs.hasOwnProperty('refocus') && previousEl) {
		              previousEl.focus();
		            }
		          }
		        }
		      });
		    }
		  };
		}
		formlyFocus.$inject = ["$timeout", "$document"];
		module.exports = exports['default'];

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		var _slice = Array.prototype.slice;

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		exports['default'] = formlyForm;

		/**
		 * @ngdoc directive
		 * @name formlyForm
		 * @restrict E
		 */
		// @ngInject
		function formlyForm(formlyUsability, formlyWarn, $parse, formlyConfig, $interpolate) {
		  var currentFormId = 1;
		  FormlyFormController.$inject = ["$scope", "formlyApiCheck", "formlyUtil"];
		  return {
		    restrict: 'E',
		    template: formlyFormGetTemplate,
		    replace: true,
		    transclude: true,
		    scope: {
		      fields: '=',
		      model: '=',
		      form: '=?',
		      options: '=?'
		    },
		    controller: FormlyFormController,
		    link: formlyFormLink
		  };

		  function formlyFormGetTemplate(el, attrs) {
		    var rootEl = getRootEl();
		    var fieldRootEl = getFieldRootEl();
		    var formId = 'formly_' + currentFormId++;
		    var parentFormAttributes = '';
		    if (attrs.hasOwnProperty('isFieldGroup') && el.parent().parent().hasClass('formly')) {
		      parentFormAttributes = copyAttributes(el.parent().parent()[0].attributes);
		    }
		    return '\n        <' + rootEl + ' class="formly"\n                 name="' + getFormName() + '"\n                 role="form" ' + parentFormAttributes + '>\n          <' + fieldRootEl + ' formly-field\n               ng-repeat="field in fields ' + getTrackBy() + '"\n               ' + getHideDirective() + '="!field.hide"\n               class="formly-field"\n               options="field"\n               model="field.model || model"\n               fields="fields"\n               form="theFormlyForm"\n               form-id="' + getFormName() + '"\n               form-state="options.formState"\n               form-options="options"\n               index="$index">\n          </' + fieldRootEl + '>\n          <div ng-transclude class="' + getTranscludeClass() + '"></div>\n        </' + rootEl + '>\n      ';

		    function getRootEl() {
		      return attrs.rootEl || 'ng-form';
		    }

		    function getFieldRootEl() {
		      return attrs.fieldRootEl || 'div';
		    }

		    function getHideDirective() {
		      return attrs.hideDirective || formlyConfig.extras.defaultHideDirective || 'ng-if';
		    }

		    function getTrackBy() {
		      if (!attrs.trackBy) {
		        return '';
		      } else {
		        return 'track by ' + attrs.trackBy;
		      }
		    }

		    function getFormName() {
		      var formName = formId;
		      var bindName = attrs.bindName;
		      if (bindName) {
		        if (_angularFix2['default'].version.minor < 3) {
		          throw formlyUsability.getFormlyError('bind-name attribute on formly-form not allowed in < angular 1.3');
		        }
		        // we can do a one-time binding here because we know we're in 1.3.x territory
		        formName = $interpolate.startSymbol() + '::\'formly_\' + ' + bindName + $interpolate.endSymbol();
		      }
		      return formName;
		    }

		    function getTranscludeClass() {
		      return attrs.transcludeClass || '';
		    }

		    function copyAttributes(attributes) {
		      var excluded = ['model', 'form', 'fields', 'options', 'name', 'role', 'class', 'data-model', 'data-form', 'data-fields', 'data-options', 'data-name'];
		      var arrayAttrs = [];
		      _angularFix2['default'].forEach(attributes, function (_ref) {
		        var nodeName = _ref.nodeName;
		        var value = _ref.value;

		        if (nodeName !== 'undefined' && excluded.indexOf(nodeName) === -1) {
		          arrayAttrs.push(toKebabCase(nodeName) + '="' + value + '"');
		        }
		      });
		      return arrayAttrs.join(' ');
		    }
		  }

		  // @ngInject
		  function FormlyFormController($scope, formlyApiCheck, formlyUtil) {
		    setupOptions();
		    $scope.model = $scope.model || {};
		    setupFields();

		    // watch the model and evaluate watch expressions that depend on it.
		    $scope.$watch('model', onModelOrFormStateChange, true);
		    if ($scope.options.formState) {
		      $scope.$watch('options.formState', onModelOrFormStateChange, true);
		    }

		    function onModelOrFormStateChange() {
		      _angularFix2['default'].forEach($scope.fields, function runFieldExpressionProperties(field, index) {
		        var model = field.model || $scope.model;
		        field.runExpressions && field.runExpressions();
		        if (field.hideExpression) {
		          // can't use hide with expressionProperties reliably
		          var val = model[field.key];
		          field.hide = evalCloseToFormlyExpression(field.hideExpression, val, field, index);
		        }
		        if (field.extras && field.extras.validateOnModelChange && field.formControl) {
		          field.formControl.$validate();
		        }
		      });
		    }

		    function setupFields() {
		      $scope.fields = $scope.fields || [];
		      var fieldTransform = $scope.options.fieldTransform || formlyConfig.extras.fieldTransform;

		      if (fieldTransform) {
		        $scope.fields = fieldTransform($scope.fields, $scope.model, $scope.options, $scope.form);
		        if (!$scope.fields) {
		          throw formlyUsability.getFormlyError('fieldTransform must return an array of fields');
		        }
		      }

		      setupModels();

		      _angularFix2['default'].forEach($scope.fields, attachKey); // attaches a key based on the index if a key isn't specified
		      _angularFix2['default'].forEach($scope.fields, setupWatchers); // setup watchers for all fields
		    }

		    function setupOptions() {
		      formlyApiCheck['throw']([formlyApiCheck.formOptionsApi.optional], [$scope.options], { prefix: 'formly-form options check' });
		      $scope.options = $scope.options || {};
		      $scope.options.formState = $scope.options.formState || {};

		      _angularFix2['default'].extend($scope.options, {
		        updateInitialValue: updateInitialValue,
		        resetModel: resetModel
		      });
		    }

		    function updateInitialValue() {
		      _angularFix2['default'].forEach($scope.fields, function (field) {
		        if (isFieldGroup(field) && field.options) {
		          field.options.updateInitialValue();
		        } else {
		          field.updateInitialValue();
		        }
		      });
		    }

		    function resetModel() {
		      _angularFix2['default'].forEach($scope.fields, function (field) {
		        if (isFieldGroup(field) && field.options) {
		          field.options.resetModel();
		        } else if (field.resetModel) {
		          field.resetModel();
		        }
		      });
		    }

		    function setupModels() {
		      // a set of field models that are already watched (the $scope.model will have its own watcher)
		      var watchedModels = [$scope.model];

		      _angularFix2['default'].forEach($scope.fields, function (field) {
		        initModel(field);

		        if (field.model && watchedModels.indexOf(field.model) === -1) {
		          $scope.$watch(function () {
		            return field.model;
		          }, onModelOrFormStateChange, true);
		          watchedModels.push(field.model);
		        }
		      });
		    }

		    function initModel(field) {
		      if (_angularFix2['default'].isString(field.model)) {
		        var expression = field.model;
		        var index = $scope.fields.indexOf(field);
		        field.model = evalCloseToFormlyExpression(expression, undefined, field, index);
		        if (!field.model) {
		          throw formlyUsability.getFieldError('field-model-must-be-initialized', 'Field model must be initialized. When specifying a model as a string for a field, the result of the' + ' expression must have been initialized ahead of time.', field);
		        }
		      }
		    }

		    function attachKey(field, index) {
		      if (!isFieldGroup(field)) {
		        field.key = field.key || index || 0;
		      }
		    }

		    function setupWatchers(field, index) {
		      if (isFieldGroup(field) || !_angularFix2['default'].isDefined(field.watcher)) {
		        return;
		      }
		      var watchers = field.watcher;
		      if (!_angularFix2['default'].isArray(watchers)) {
		        watchers = [watchers];
		      }
		      _angularFix2['default'].forEach(watchers, function setupWatcher(watcher) {
		        if (!_angularFix2['default'].isDefined(watcher.listener)) {
		          throw formlyUsability.getFieldError('all-field-watchers-must-have-a-listener', 'All field watchers must have a listener', field);
		        }
		        var watchExpression = getWatchExpression(watcher, field, index);
		        var watchListener = getWatchListener(watcher, field, index);

		        var type = watcher.type || '$watch';
		        watcher.stopWatching = $scope[type](watchExpression, watchListener, watcher.watchDeep);
		      });
		    }

		    function getWatchExpression(watcher, field, index) {
		      var watchExpression = watcher.expression || 'model[\'' + field.key + '\']';
		      if (_angularFix2['default'].isFunction(watchExpression)) {
		        (function () {
		          // wrap the field's watch expression so we can call it with the field as the first arg
		          // and the stop function as the last arg as a helper
		          var originalExpression = watchExpression;
		          watchExpression = function formlyWatchExpression() {
		            var args = modifyArgs.apply(undefined, [watcher, index].concat(_slice.call(arguments)));
		            return originalExpression.apply(undefined, _toConsumableArray(args));
		          };
		          watchExpression.displayName = 'Formly Watch Expression for field for ' + field.key;
		        })();
		      }
		      return watchExpression;
		    }

		    function getWatchListener(watcher, field, index) {
		      var watchListener = watcher.listener;
		      if (_angularFix2['default'].isFunction(watchListener)) {
		        (function () {
		          // wrap the field's watch listener so we can call it with the field as the first arg
		          // and the stop function as the last arg as a helper
		          var originalListener = watchListener;
		          watchListener = function formlyWatchListener() {
		            var args = modifyArgs.apply(undefined, [watcher, index].concat(_slice.call(arguments)));
		            return originalListener.apply(undefined, _toConsumableArray(args));
		          };
		          watchListener.displayName = 'Formly Watch Listener for field for ' + field.key;
		        })();
		      }
		      return watchListener;
		    }

		    function modifyArgs(watcher, index) {
		      for (var _len = arguments.length, originalArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		        originalArgs[_key - 2] = arguments[_key];
		      }

		      return [$scope.fields[index]].concat(originalArgs, [watcher.stopWatching]);
		    }

		    function evalCloseToFormlyExpression(expression, val, field, index) {
		      var extraLocals = getFormlyFieldLikeLocals(field, index);
		      return formlyUtil.formlyEval($scope, expression, val, val, extraLocals);
		    }

		    function getFormlyFieldLikeLocals(field, index) {
		      // this makes it closer to what a regular formlyExpression would be
		      return {
		        options: field,
		        index: index,
		        formState: $scope.options.formState,
		        formId: $scope.formId
		      };
		    }
		  }

		  function formlyFormLink(scope, el, attrs) {
		    setFormController();
		    fixChromeAutocomplete();

		    function setFormController() {
		      var formId = attrs.name;
		      scope.formId = formId;
		      scope.theFormlyForm = scope[formId];
		      if (attrs.form) {
		        var getter = $parse(attrs.form);
		        var setter = getter.assign;
		        var parentForm = getter(scope.$parent);
		        if (parentForm) {
		          scope.theFormlyForm = parentForm;
		          if (scope[formId]) {
		            scope.theFormlyForm.$removeControl(scope[formId]);
		          }

		          // this next line is probably one of the more dangerous things that angular-formly does to improve the
		          // API for angular-formly forms. It ensures that the NgModelControllers inside of formly-form will be
		          // attached to the form that is passed to formly-form rather than the one that formly-form creates
		          // this is necessary because it's confusing to have a step between the form you pass in
		          // and the fields in that form. It also is because angular doesn't propagate properties like $submitted down
		          // to children forms :-( This line was added to solve this issue:
		          // https://github.com/formly-js/angular-formly/issues/287
		          // luckily, this is how the formController has been accessed by the NgModelController since angular 1.0.0
		          // so I expect it will remain this way for the life of angular 1.x
		          el.removeData('$formController');
		        } else {
		          setter(scope.$parent, scope[formId]);
		        }
		      }
		      if (!scope.theFormlyForm && !formlyConfig.disableWarnings) {
		        /* eslint no-console:0 */
		        formlyWarn('formly-form-has-no-formcontroller', 'Your formly-form does not have a `form` property. Many functions of the form (like validation) may not work', el, scope);
		      }
		    }

		    /*
		     * chrome autocomplete lameness
		     * see https://code.google.com/p/chromium/issues/detail?id=468153#c14
		     * ლ(ಠ益ಠლ)   (╯°□°)╯︵ ┻━┻    (◞‸◟；)
		     */
		    function fixChromeAutocomplete() {
		      var global = formlyConfig.extras.removeChromeAutoComplete === true;
		      var offInstance = scope.options && scope.options.removeChromeAutoComplete === false;
		      var onInstance = scope.options && scope.options.removeChromeAutoComplete === true;
		      if (global && !offInstance || onInstance) {
		        var input = document.createElement('input');
		        input.setAttribute('autocomplete', 'address-level4');
		        input.setAttribute('hidden', 'true');
		        el[0].appendChild(input);
		      }
		    }
		  }

		  // stateless util functions
		  function toKebabCase(string) {
		    if (string) {
		      return string.replace(/([A-Z])/g, function ($1) {
		        return '-' + $1.toLowerCase();
		      });
		    } else {
		      return '';
		    }
		  }

		  function isFieldGroup(field) {
		    return field && !!field.fieldGroup;
		  }
		}
		formlyForm.$inject = ["formlyUsability", "formlyWarn", "$parse", "formlyConfig", "$interpolate"];
		module.exports = exports['default'];

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		exports['default'] = addFormlyNgModelAttrsManipulator;

		// @ngInject
		function addFormlyNgModelAttrsManipulator(formlyConfig, $interpolate, formlyWarn) {
		  if (formlyConfig.extras.disableNgModelAttrsManipulator) {
		    return;
		  }
		  formlyConfig.templateManipulators.preWrapper.push(ngModelAttrsManipulator);

		  function ngModelAttrsManipulator(template, options, scope) {
		    var node = document.createElement('div');
		    var skip = getSkip(options);
		    if (skip === true) {
		      return template;
		    }
		    node.innerHTML = template;

		    var modelNodes = getNgModelNodes(node, skip);
		    if (!modelNodes || !modelNodes.length) {
		      return template;
		    }

		    addIfNotPresent(modelNodes, 'id', scope.id);
		    addIfNotPresent(modelNodes, 'name', scope.name || scope.id);

		    addValidation();
		    addModelOptions();
		    addTemplateOptionsAttrs();

		    return node.innerHTML;

		    function addValidation() {
		      if (_angularFix2['default'].isDefined(options.validators) || _angularFix2['default'].isDefined(options.validation.messages)) {
		        addIfNotPresent(modelNodes, 'formly-custom-validation', '');
		      }
		    }

		    function addModelOptions() {
		      if (_angularFix2['default'].isDefined(options.modelOptions)) {
		        addIfNotPresent(modelNodes, 'ng-model-options', 'options.modelOptions');
		        if (options.modelOptions.getterSetter) {
		          _angularFix2['default'].forEach(modelNodes, function (modelNode) {
		            modelNode.setAttribute('ng-model', 'options.value');
		          });
		        }
		      }
		    }

		    function addTemplateOptionsAttrs() {
		      if (!options.templateOptions && !options.expressionProperties) {
		        // no need to run these if there are no templateOptions or expressionProperties
		        return;
		      }
		      var to = options.templateOptions || {};
		      var ep = options.expressionProperties || {};

		      var ngModelAttributes = getBuiltInAttributes();

		      // extend with the user's specifications winning
		      _angularFix2['default'].extend(ngModelAttributes, options.ngModelAttrs);

		      // Feel free to make this more simple :-)
		      _angularFix2['default'].forEach(ngModelAttributes, function (val, name) {
		        /* eslint complexity:[2, 14] */
		        var attrVal = undefined,
		            attrName = undefined;
		        var ref = 'options.templateOptions[\'' + name + '\']';
		        var toVal = to[name];
		        var epVal = getEpValue(ep, name);

		        var inTo = _angularFix2['default'].isDefined(toVal);
		        var inEp = _angularFix2['default'].isDefined(epVal);
		        if (val.value) {
		          // I realize this looks backwards, but it's right, trust me...
		          attrName = val.value;
		          attrVal = name;
		        } else if (val.expression && inTo) {
		          attrName = val.expression;
		          if (_angularFix2['default'].isString(to[name])) {
		            attrVal = '$eval(' + ref + ')';
		          } else if (_angularFix2['default'].isFunction(to[name])) {
		            attrVal = ref + '(model[options.key], options, this, $event)';
		          } else {
		            throw new Error('options.templateOptions.' + name + ' must be a string or function: ' + JSON.stringify(options));
		          }
		        } else if (val.bound && inEp) {
		          attrName = val.bound;
		          attrVal = ref;
		        } else if ((val.attribute || val.boolean) && inEp) {
		          attrName = val.attribute || val.boolean;
		          attrVal = '' + $interpolate.startSymbol() + ref + $interpolate.endSymbol();
		        } else if (val.attribute && inTo) {
		          attrName = val.attribute;
		          attrVal = toVal;
		        } else if (val.boolean) {
		          if (inTo && !inEp && toVal) {
		            attrName = val.boolean;
		            attrVal = true;
		          } else {
		            /* eslint no-empty:0 */
		            // empty to illustrate that a boolean will not be added via val.bound
		            // if you want it added via val.bound, then put it in expressionProperties
		          }
		        } else if (val.bound && inTo) {
		            attrName = val.bound;
		            attrVal = ref;
		          }

		        if (_angularFix2['default'].isDefined(attrName) && _angularFix2['default'].isDefined(attrVal)) {
		          addIfNotPresent(modelNodes, attrName, attrVal);
		        }
		      });
		    }
		  }

		  // Utility functions
		  function getNgModelNodes(node, skip) {
		    var selectorNot = _angularFix2['default'].isString(skip) ? ':not(' + skip + ')' : '';
		    var skipNot = ':not([formly-skip-ng-model-attrs-manipulator])';
		    var query = '[ng-model]' + selectorNot + skipNot + ', [data-ng-model]' + selectorNot + skipNot;
		    try {
		      return node.querySelectorAll(query);
		    } catch (e) {
		      //this code is needed for IE8, as it does not support the CSS3 ':not' selector
		      //it should be removed when IE8 support is dropped
		      return getNgModelNodesFallback(node, skip);
		    }
		  }

		  function getNgModelNodesFallback(node, skip) {
		    var allNgModelNodes = node.querySelectorAll('[ng-model], [data-ng-model]');
		    var matchingNgModelNodes = [];

		    //make sure this array is compatible with NodeList type by adding an 'item' function
		    matchingNgModelNodes.item = function (i) {
		      return this[i];
		    };

		    for (var i = 0; i < allNgModelNodes.length; i++) {
		      var ngModelNode = allNgModelNodes[i];
		      if (!ngModelNode.hasAttribute('formly-skip-ng-model-attrs-manipulator') && (_angularFix2['default'].isString(skip) || !nodeMatches(ngModelNode, skip))) {

		        matchingNgModelNodes.push(ngModelNode);
		      }
		    }

		    return matchingNgModelNodes;
		  }

		  function nodeMatches(node, selector) {
		    var div = document.createElement('div');
		    div.innerHTML = node.outerHTML;
		    return div.querySelector(selector);
		  }

		  function getSkip(options) {
		    // UPDATE IN 7.0.0
		    var skip = options.extras && options.extras.skipNgModelAttrsManipulator;
		    if (!_angularFix2['default'].isDefined(skip)) {
		      skip = options.data && options.data.skipNgModelAttrsManipulator;
		      if (_angularFix2['default'].isDefined(skip)) {
		        formlyWarn('skipngmodelattrsmanipulator-moved', 'The skipNgModelAttrsManipulator property has been moved from the `data` property to the `extras` property', options);
		      }
		    }
		    return skip;
		  }

		  function getBuiltInAttributes() {
		    var ngModelAttributes = {
		      focus: {
		        attribute: 'formly-focus'
		      }
		    };
		    var boundOnly = [];
		    var bothBooleanAndBound = ['required', 'disabled'];
		    var bothAttributeAndBound = ['pattern', 'minlength'];
		    var expressionOnly = ['change', 'keydown', 'keyup', 'keypress', 'click', 'focus', 'blur'];
		    var attributeOnly = ['placeholder', 'min', 'max', 'tabindex', 'type'];
		    if (formlyConfig.extras.ngModelAttrsManipulatorPreferUnbound) {
		      bothAttributeAndBound.push('maxlength');
		    } else {
		      boundOnly.push('maxlength');
		    }

		    _angularFix2['default'].forEach(boundOnly, function (item) {
		      ngModelAttributes[item] = { bound: 'ng-' + item };
		    });

		    _angularFix2['default'].forEach(bothBooleanAndBound, function (item) {
		      ngModelAttributes[item] = { boolean: item, bound: 'ng-' + item };
		    });

		    _angularFix2['default'].forEach(bothAttributeAndBound, function (item) {
		      ngModelAttributes[item] = { attribute: item, bound: 'ng-' + item };
		    });

		    _angularFix2['default'].forEach(expressionOnly, function (item) {
		      var propName = 'on' + item.substr(0, 1).toUpperCase() + item.substr(1);
		      ngModelAttributes[propName] = { expression: 'ng-' + item };
		    });

		    _angularFix2['default'].forEach(attributeOnly, function (item) {
		      ngModelAttributes[item] = { attribute: item };
		    });
		    return ngModelAttributes;
		  }

		  function getEpValue(ep, name) {
		    return ep['templateOptions.' + name] || ep['templateOptions[\'' + name + '\']'] || ep['templateOptions["' + name + '"]'];
		  }

		  function addIfNotPresent(nodes, attr, val) {
		    _angularFix2['default'].forEach(nodes, function (node) {
		      if (!node.getAttribute(attr)) {
		        node.setAttribute(attr, val);
		      }
		    });
		  }
		}
		addFormlyNgModelAttrsManipulator.$inject = ["formlyConfig", "$interpolate", "formlyWarn"];
		module.exports = exports['default'];

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		exports['default'] = addCustomTags;

		// @ngInject
		function addCustomTags($document) {
		  if ($document && $document.get) {
		    (function () {
		      // IE8 check ->
		      // http://stackoverflow.com/questions/10964966/detect-ie-version-prior-to-v9-in-javascript/10965203#10965203
		      var document = $document.get(0);
		      var div = document.createElement('div');
		      div.innerHTML = '<!--[if lt IE 9]><i></i><![endif]-->';
		      var isIeLessThan9 = div.getElementsByTagName('i').length === 1;

		      if (isIeLessThan9) {
		        // add the custom elements that we need for formly
		        var customElements = ['formly-field', 'formly-form', 'formly-custom-validation', 'formly-focus', 'formly-transpose'];
		        _angularFix2['default'].forEach(customElements, function (el) {
		          document.createElement(el);
		        });
		      }
		    })();
		  }
		}
		addCustomTags.$inject = ["$document"];
		module.exports = exports['default'];

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// angular-formly-templates-bootstrap version 6.0.0 built with ♥ by Astrism <astrisms@gmail.com>, Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(10), __webpack_require__(9), __webpack_require__(1));
		else if(typeof define === 'function' && define.amd)
			define(["angular-formly", "api-check", "angular"], factory);
		else if(typeof exports === 'object')
			exports["ngFormlyTemplatesBootstrap"] = factory(require("angular-formly"), require("api-check"), require("angular"));
		else
			root["ngFormlyTemplatesBootstrap"] = factory(root["ngFormly"], root["apiCheck"], root["angular"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		module.exports = __webpack_require__(11);

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addCheckboxType);
		
		  function addCheckboxType(formlyConfigProvider) {
		    formlyConfigProvider.setType({
		      name: 'multiCheckbox',
		      template: __webpack_require__(21),
		      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
		      apiCheck: function apiCheck(check) {
		        return {
		          templateOptions: {
		            options: check.arrayOf(check.object),
		            labelProp: check.string.optional,
		            valueProp: check.string.optional
		          }
		        };
		      },
		      defaultOptions: {
		        noFormControl: false,
		        ngModelAttrs: {
		          required: {
		            attribute: '',
		            bound: ''
		          }
		        }
		      },
		      controller: /* @ngInject */["$scope", function controller($scope) {
		        var to = $scope.to;
		        var opts = $scope.options;
		        $scope.multiCheckbox = {
		          checked: [],
		          change: setModel
		        };
		
		        // initialize the checkboxes check property
		        $scope.$watch('model', function modelWatcher(newModelValue) {
		          var modelValue, valueProp;
		
		          if (Object.keys(newModelValue).length) {
		            modelValue = newModelValue[opts.key];
		
		            $scope.$watch('to.options', function optionsWatcher(newOptionsValues) {
		              if (newOptionsValues && Array.isArray(newOptionsValues) && Array.isArray(modelValue)) {
		                valueProp = to.valueProp || 'value';
		                for (var index = 0; index < newOptionsValues.length; index++) {
		                  $scope.multiCheckbox.checked[index] = modelValue.indexOf(newOptionsValues[index][valueProp]) !== -1;
		                }
		              }
		            });
		          }
		        }, true);
		
		        function checkValidity(expressionValue) {
		          var valid;
		
		          if ($scope.to.required) {
		            valid = angular.isArray($scope.model[opts.key]) && $scope.model[opts.key].length > 0 && expressionValue;
		
		            $scope.fc.$setValidity('required', valid);
		          }
		        }
		
		        function setModel() {
		          $scope.model[opts.key] = [];
		          angular.forEach($scope.multiCheckbox.checked, function (checkbox, index) {
		            if (checkbox) {
		              $scope.model[opts.key].push(to.options[index][to.valueProp || 'value']);
		            }
		          });
		
		          // Must make sure we mark as touched because only the last checkbox due to a bug in angular.
		          $scope.fc.$setTouched();
		          checkValidity(true);
		        }
		
		        if (opts.expressionProperties && opts.expressionProperties['templateOptions.required']) {
		          $scope.$watch(function () {
		            return $scope.to.required;
		          }, function (newValue) {
		            checkValidity(newValue);
		          });
		        }
		
		        if ($scope.to.required) {
		          var unwatchFormControl = $scope.$watch('fc', function (newValue) {
		            if (!newValue) {
		              return;
		            }
		            checkValidity(true);
		            unwatchFormControl();
		          });
		        }
		      }]
		    });
		  }
		  addCheckboxType.$inject = ["formlyConfigProvider"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		// some versions of angular don't export the angular module properly,
		// so we get it from window in this case.
		'use strict';
		
		var angular = __webpack_require__(8);
		if (!angular.version) {
		  angular = window.angular;
		}
		module.exports = angular;

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addWrappers);
		
		  function addWrappers(formlyConfigProvider) {
		    formlyConfigProvider.setWrapper([{
		      name: 'bootstrapLabel',
		      template: __webpack_require__(17),
		      apiCheck: function apiCheck(check) {
		        return {
		          templateOptions: {
		            label: check.string,
		            required: check.bool.optional
		          }
		        };
		      }
		    }, { name: 'bootstrapHasError', template: __webpack_require__(18) }]);
		  }
		  addWrappers.$inject = ["formlyConfigProvider"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  __webpack_require__(10)(ngModule);
		  __webpack_require__(1)(ngModule);
		  __webpack_require__(12)(ngModule);
		  __webpack_require__(9)(ngModule);
		  __webpack_require__(13)(ngModule);
		  __webpack_require__(14)(ngModule);
		};
		
		module.exports = exports['default'];

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		var _addons = __webpack_require__(15);
		
		var _addons2 = _interopRequireDefault(_addons);
		
		var _description = __webpack_require__(16);
		
		var _description2 = _interopRequireDefault(_description);
		
		exports['default'] = function (ngModule) {
		  (0, _addons2['default'])(ngModule);
		  (0, _description2['default'])(ngModule);
		};
		
		module.exports = exports['default'];

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addRadioType);
		
		  function addRadioType(formlyConfigProvider) {
		    formlyConfigProvider.setType({
		      name: 'radio',
		      template: __webpack_require__(19),
		      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
		      defaultOptions: {
		        noFormControl: false
		      },
		      apiCheck: function apiCheck(check) {
		        return {
		          templateOptions: {
		            options: check.arrayOf(check.object),
		            labelProp: check.string.optional,
		            valueProp: check.string.optional
		          }
		        };
		      }
		    });
		  }
		  addRadioType.$inject = ["formlyConfigProvider"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addCheckboxType);
		
		  function addCheckboxType(formlyConfigProvider) {
		    formlyConfigProvider.setType({
		      name: 'checkbox',
		      template: __webpack_require__(20),
		      wrapper: ['bootstrapHasError'],
		      apiCheck: function apiCheck(check) {
		        return {
		          templateOptions: {
		            label: check.string
		          }
		        };
		      }
		    });
		  }
		  addCheckboxType.$inject = ["formlyConfigProvider"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		var ngModuleName = 'formlyBootstrap';
		var angular = __webpack_require__(4);
		var ngModule = angular.module(ngModuleName, [__webpack_require__(2)]);
		ngModule.constant('formlyBootstrapApiCheck', __webpack_require__(3)({
		  output: {
		    prefix: 'angular-formly-bootstrap'
		  }
		}));
		ngModule.constant('formlyBootstrapVersion', ("6.0.0"));
		
		__webpack_require__(5)(ngModule);
		__webpack_require__(6)(ngModule);
		__webpack_require__(7)(ngModule);
		
		exports['default'] = ngModuleName;
		module.exports = exports['default'];

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addInputType);
		
		  function addInputType(formlyConfigProvider) {
		    formlyConfigProvider.setType({
		      name: 'input',
		      template: '<input class="form-control" ng-model="model[options.key]">',
		      wrapper: ['bootstrapLabel', 'bootstrapHasError']
		    });
		  }
		  addInputType.$inject = ["formlyConfigProvider"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addSelectType);
		
		  var template = '<select class="form-control" ng-model="model[options.key]"></select>';
		
		  function addSelectType(formlyConfigProvider) {
		    formlyConfigProvider.setType({
		      name: 'select',
		      template: template,
		      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
		      defaultOptions: function defaultOptions(options) {
		        /* jshint maxlen:195 */
		        var ngOptions = options.templateOptions.ngOptions || 'option[to.valueProp || \'value\'] as option[to.labelProp || \'name\'] group by option[to.groupProp || \'group\'] for option in to.options';
		        return {
		          ngModelAttrs: _defineProperty({}, ngOptions, {
		            value: 'ng-options'
		          })
		        };
		      },
		      apiCheck: function apiCheck(check) {
		        return {
		          templateOptions: {
		            options: check.arrayOf(check.object),
		            labelProp: check.string.optional,
		            valueProp: check.string.optional,
		            groupProp: check.string.optional
		          }
		        };
		      }
		    });
		  }
		  addSelectType.$inject = ["formlyConfigProvider"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addTextareaType);
		
		  function addTextareaType(formlyConfigProvider) {
		    formlyConfigProvider.setType({
		      name: 'textarea',
		      template: '<textarea class="form-control" ng-model="model[options.key]"></textarea>',
		      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
		      defaultOptions: {
		        ngModelAttrs: {
		          rows: { attribute: 'rows' },
		          cols: { attribute: 'cols' }
		        }
		      },
		      apiCheck: function apiCheck(check) {
		        return {
		          templateOptions: {
		            rows: check.number.optional,
		            cols: check.number.optional
		          }
		        };
		      }
		    });
		  }
		  addTextareaType.$inject = ["formlyConfigProvider"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.run(addAddonsManipulator);
		
		  function addAddonsManipulator(formlyConfig, formlyBootstrapApiCheck) {
		    var addonTemplate = __webpack_require__(22);
		    var addonChecker = formlyBootstrapApiCheck.shape({
		      'class': formlyBootstrapApiCheck.string.optional,
		      text: formlyBootstrapApiCheck.string.optional,
		      onClick: formlyBootstrapApiCheck.func.optional
		    }).strict.optional;
		    var api = formlyBootstrapApiCheck.shape({
		      templateOptions: formlyBootstrapApiCheck.shape({
		        addonLeft: addonChecker,
		        addonRight: addonChecker
		      })
		    });
		    formlyConfig.templateManipulators.preWrapper.push(function (template, options) {
		      if (!options.templateOptions.addonLeft && !options.templateOptions.addonRight) {
		        return template;
		      }
		      formlyBootstrapApiCheck.warn([api], [options]);
		      return addonTemplate.replace('<formly-transclude></formly-transclude>', template);
		    });
		  }
		  addAddonsManipulator.$inject = ["formlyConfig", "formlyBootstrapApiCheck"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.run(addDescriptionManipulator);
		
		  function addDescriptionManipulator(formlyConfig) {
		    formlyConfig.templateManipulators.preWrapper.push(function ariaDescribedBy(template, options, scope) {
		      if (angular.isDefined(options.templateOptions.description)) {
		        var el = document.createElement('div');
		        el.appendChild(angular.element(template)[0]);
		        el.appendChild(angular.element('<p id="' + scope.id + '_description"' + 'class="help-block"' + 'ng-if="to.description">' + '{{to.description}}' + '</p>')[0]);
		        var modelEls = angular.element(el.querySelectorAll('[ng-model]'));
		        if (modelEls) {
		          modelEls.attr('aria-describedby', scope.id + '_description');
		        }
		        return el.innerHTML;
		      } else {
		        return template;
		      }
		    });
		  }
		  addDescriptionManipulator.$inject = ["formlyConfig"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = "<div>\n  <label for=\"{{id}}\" class=\"control-label\" ng-if=\"to.label\">\n    {{to.label}}\n    {{to.required ? '*' : ''}}\n  </label>\n  <formly-transclude></formly-transclude>\n</div>\n"

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = "<div class=\"form-group\" ng-class=\"{'has-error': showError}\">\n  <formly-transclude></formly-transclude>\n</div>\n"

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"radio\">\n    <label>\n      <input type=\"radio\"\n             id=\"{{id + '_'+ $index}}\"\n             tabindex=\"0\"\n             ng-value=\"option[to.valueProp || 'value']\"\n             ng-model=\"model[options.key]\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"

	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = "<div class=\"checkbox\">\n\t<label>\n\t\t<input type=\"checkbox\"\n           class=\"formly-field-checkbox\"\n\t\t       ng-model=\"model[options.key]\">\n\t\t{{to.label}}\n\t\t{{to.required ? '*' : ''}}\n\t</label>\n</div>\n"

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\"\n             id=\"{{id + '_'+ $index}}\"\n             ng-model=\"multiCheckbox.checked[$index]\"\n             ng-change=\"multiCheckbox.change()\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = "<div ng-class=\"{'input-group': to.addonLeft || to.addonRight}\">\n    <div class=\"input-group-addon\"\n         ng-if=\"to.addonLeft\"\n         ng-style=\"{cursor: to.addonLeft.onClick ? 'pointer' : 'inherit'}\"\n         ng-click=\"to.addonLeft.onClick(options, this)\">\n        <i class=\"{{to.addonLeft.class}}\" ng-if=\"to.addonLeft.class\"></i>\n        <span ng-if=\"to.addonLeft.text\">{{to.addonLeft.text}}</span>\n    </div>\n    <formly-transclude></formly-transclude>\n    <div class=\"input-group-addon\"\n         ng-if=\"to.addonRight\"\n         ng-style=\"{cursor: to.addonRight.onClick ? 'pointer' : 'inherit'}\"\n         ng-click=\"to.addonRight.onClick(options, this)\">\n        <i class=\"{{to.addonRight.class}}\" ng-if=\"to.addonRight.class\"></i>\n        <span ng-if=\"to.addonRight.text\">{{to.addonRight.text}}</span>\n    </div>\n</div>\n"

	/***/ }
	/******/ ])
	});
	;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * angular-permission
	 * Route permission and access control as simple as it can get
	 * @version v0.3.1 - 2015-07-07
	 * @link http://www.rafaelvidaurre.com
	 * @author Rafael Vidaurre <narzerus@gmail.com>
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

	(function () {
	  'use strict';

	  angular.module('permission', ['ui.router'])
	    .run(['$rootScope', 'Permission', '$state', '$q',
	    function ($rootScope, Permission, $state, $q) {
	      $rootScope.$on('$stateChangeStart',
	      function (event, toState, toParams, fromState, fromParams) {
	        if (toState.$$finishAuthorize) {
	          return;
	        }

	        // If there are permissions set then prevent default and attempt to authorize
	        var permissions;
	        if (toState.data && toState.data.permissions) {
	          permissions = toState.data.permissions;
	        } else if (toState.permissions) {
	          /**
	          * This way of defining permissions will be depracated in v1. Should use
	          * `data` key instead
	          */
	          console.log('Deprecation Warning: permissions should be set inside the `data` key ');
	          console.log('Setting permissions for a state outside `data` will be depracated in' +
	            ' version 1');
	          permissions = toState.permissions;
	        }

	        if (permissions) {
	          event.preventDefault();
	          toState = angular.extend({'$$finishAuthorize': true}, toState);

	          if ($rootScope.$broadcast('$stateChangePermissionStart', toState, toParams).defaultPrevented) {
	            return;
	          }

	          Permission.authorize(permissions, toParams).then(function () {
	            // If authorized, use call state.go without triggering the event.
	            // Then trigger $stateChangeSuccess manually to resume the rest of the process
	            // Note: This is a pseudo-hacky fix which should be fixed in future ui-router versions
	            if (!$rootScope.$broadcast('$stateChangeStart', toState, toParams, fromState, fromParams).defaultPrevented) {
	              $rootScope.$broadcast('$stateChangePermissionAccepted', toState, toParams);

	              $state.go(toState.name, toParams, {notify: false}).then(function() {
	                $rootScope
	                  .$broadcast('$stateChangeSuccess', toState, toParams, fromState, fromParams);
	              });
	            }
	          }, function () {
	            if (!$rootScope.$broadcast('$stateChangeStart', toState, toParams, fromState, fromParams).defaultPrevented) {
	              $rootScope.$broadcast('$stateChangePermissionDenied', toState, toParams);

	              var redirectTo = permissions.redirectTo;
	              var result;

	              if (angular.isFunction(redirectTo)) {
	                redirectTo = redirectTo();

	                $q.when(redirectTo).then(function (newState) {
	                  if (newState) {
	                    $state.go(newState, toParams);
	                  }
	                });

	              } else {
	                if (redirectTo) {
	                  $state.go(redirectTo, toParams);
	                }
	              }
	            }
	          });
	        }
	      });
	    }]);
	}());

	(function () {
	  'use strict';

	  angular.module('permission')
	    .provider('Permission', function () {
	      var roleValidationConfig = {};
	      var validateRoleDefinitionParams = function (roleName, validationFunction) {
	        if (!angular.isString(roleName)) {
	          throw new Error('Role name must be a string');
	        }
	        if (!angular.isFunction(validationFunction)) {
	          throw new Error('Validation function not provided correctly');
	        }
	      };

	      var validateManyRolesDefinitionParams = function(roles, validationFunction) {
	        if (!angular.isArray(roles)) {
	          throw new Error('Roles must be an array');
	        } else {
	          for(var i = 0; i < roles.length; i++) {
	            validateRoleDefinitionParams(roles[i], validationFunction);
	          }
	        }
	      };

	      this.defineRole = function (roleName, validationFunction) {
	        /**
	          This method is only available in config-time, and cannot access services, as they are
	          not yet injected anywere which makes this kinda useless.
	          Should remove if we cannot find a use for it.
	        **/
	        validateRoleDefinitionParams(roleName, validationFunction);
	        roleValidationConfig[roleName] = validationFunction;

	        return this;
	      };

	      this.$get = ['$q', function ($q) {
	        var Permission = {
	          _promiseify: function (value) {
	            /**
	              Converts a value into a promise, if the value is truthy it resolves it, otherwise
	              it rejects it
	            **/
	            if (value && angular.isFunction(value.then)) {
	              return value;
	            }

	            var deferred = $q.defer();
	            if (value) {
	              deferred.resolve();
	            } else {
	              deferred.reject();
	            }
	            return deferred.promise;
	          },
	          _validateRoleMap: function (roleMap) {
	            if (typeof(roleMap) !== 'object' || roleMap instanceof Array) {
	              throw new Error('Role map has to be an object');
	            }
	            if (roleMap.only === undefined && roleMap.except === undefined) {
	              throw new Error('Either "only" or "except" keys must me defined');
	            }
	            if (roleMap.only) {
	              if (!(roleMap.only instanceof Array)) {
	                throw new Error('Array of roles expected');
	              }
	            } else if (roleMap.except) {
	              if (!(roleMap.except instanceof Array)) {
	                throw new Error('Array of roles expected');
	              }
	            }
	          },
	          _findMatchingRole: function (rolesArray, toParams) {
	            var roles = angular.copy(rolesArray);
	            var deferred = $q.defer();
	            var currentRole = roles.shift();

	            // If no roles left to validate reject promise
	            if (!currentRole) {
	              deferred.reject();
	              return deferred.promise;
	            }
	            // Validate role definition exists
	            if (!angular.isFunction(Permission.roleValidations[currentRole])) {
	              throw new Error('undefined role or invalid role validation');
	            }

	            var validatingRole = Permission.roleValidations[currentRole](toParams, currentRole);
	            validatingRole = Permission._promiseify(validatingRole);

	            validatingRole.then(function () {
	              deferred.resolve();
	            }, function () {
	              Permission._findMatchingRole(roles, toParams).then(function () {
	                deferred.resolve();
	              }, function () {
	                deferred.reject();
	              });
	            });

	            return deferred.promise;
	          },
	          defineRole: function (roleName, validationFunction) {
	            /**
	              Service-available version of defineRole, the callback passed here lives in the
	              scope where it is defined and therefore can interact with other modules
	            **/
	            validateRoleDefinitionParams(roleName, validationFunction);
	            roleValidationConfig[roleName] = validationFunction;

	            return Permission;
	          },
	          defineManyRoles: function(roles, validationFunction) {
	            validateManyRolesDefinitionParams(roles, validationFunction);

	            var definedPermissions = Permission;
	            for(var i = 0; i < roles.length; i++) {
	               definedPermissions = definedPermissions.defineRole(roles[i], validationFunction);
	            }

	            return definedPermissions;
	          },
	          resolveIfMatch: function (rolesArray, toParams) {
	            var roles = angular.copy(rolesArray);
	            var deferred = $q.defer();
	            Permission._findMatchingRole(roles, toParams).then(function () {
	              // Found role match
	              deferred.resolve();
	            }, function () {
	              // No match
	              deferred.reject();
	            });
	            return deferred.promise;
	          },
	          rejectIfMatch: function (roles, toParams) {
	            var deferred = $q.defer();
	            Permission._findMatchingRole(roles, toParams).then(function () {
	              // Role found
	              deferred.reject();
	            }, function () {
	              // Role not found
	              deferred.resolve();
	            });
	            return deferred.promise;
	          },
	          roleValidations: roleValidationConfig,
	          authorize: function (roleMap, toParams) {
	            // Validate input
	            Permission._validateRoleMap(roleMap);

	            var authorizing;

	            if (roleMap.only) {
	              authorizing = Permission.resolveIfMatch(roleMap.only, toParams);
	            } else {
	              authorizing = Permission.rejectIfMatch(roleMap.except, toParams);
	            }

	            return authorizing;
	          }
	        };

	        return Permission;
	      }];
	    });

	}());


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.config = config;
	exports.run = run;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _main = __webpack_require__(14);

	var _main2 = _interopRequireDefault(_main);

	var _formly = __webpack_require__(153);

	/*@ngInject*/
	function config($locationProvider, $compileProvider, $httpProvider, $urlRouterProvider, RestangularProvider, stateHelperProvider, formlyConfigProvider) {
	  $locationProvider.html5Mode(true);
	  $compileProvider.debugInfoEnabled(false);
	  $httpProvider.interceptors.push('userInterceptor');
	  $httpProvider.defaults.paramSerializer = '$httpParamSerializerJQLike';
	  RestangularProvider.setBaseUrl('api');
	  RestangularProvider.setRestangularFields({
	    id: '_id'
	  });
	  stateHelperProvider.state(_main2['default']);
	  $urlRouterProvider.otherwise('/home');
	  formlyConfigProvider.disableWarnings = true;
	  formlyConfigProvider.setWrapper(_formly.wrappers);
	  formlyConfigProvider.setType(_formly.types);
	}
	config.$inject = ["$locationProvider", "$compileProvider", "$httpProvider", "$urlRouterProvider", "RestangularProvider", "stateHelperProvider", "formlyConfigProvider"];

	/*@ngInject*/
	function run($rootScope, $state, $stateParams, Permission, user, modals, formlyValidationMessages) {
	  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
	    $rootScope.prevState = fromState;
	    $rootScope.prevParams = fromParams;
	  });
	  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
	    console.error(error); // eslint-disable-line no-console
	  });
	  $rootScope.$on('$stateChangePermissionDenied', function (event, toState, toParams) {
	    modals.login().result.then(function () {
	      $state.go(toState.name, toParams);
	    }, function () {
	      if ($rootScope.prevState.name === '') {
	        $state.go('main.home');
	      }
	    });
	  });
	  Permission.defineRole('anonymous', function () {
	    if (!user.authenticated) {
	      return true;
	    }
	    return false;
	  });
	  formlyValidationMessages.addStringMessage('json', 'JSON ist invalid');
	  formlyValidationMessages.addTemplateOptionValueMessage('minlength', 'minlength', 'Bitte mindestens', 'Zeichen eingeben');
	  formlyValidationMessages.addTemplateOptionValueMessage('maxlength', 'maxlength', 'Bitte höchstens', 'Zeichen eingeben');
	  formlyValidationMessages.addTemplateOptionValueMessage('required', 'label', '', 'ist erforderlich');
	  formlyValidationMessages.messages.email = function ($viewValue) {
	    return $viewValue + ' ist keine gültige E-Mail-Adresse';
	  };
	}
	run.$inject = ["$rootScope", "$state", "$stateParams", "Permission", "user", "modals", "formlyValidationMessages"];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mainJade = __webpack_require__(15);

	var _mainJade2 = _interopRequireDefault(_mainJade);

	var _mainControllerJs = __webpack_require__(16);

	var _mainControllerJs2 = _interopRequireDefault(_mainControllerJs);

	var _home = __webpack_require__(17);

	var _home2 = _interopRequireDefault(_home);

	var _contact = __webpack_require__(19);

	var _contact2 = _interopRequireDefault(_contact);

	var _software = __webpack_require__(21);

	var _software2 = _interopRequireDefault(_software);

	var _content = __webpack_require__(23);

	var _content2 = _interopRequireDefault(_content);

	var _download = __webpack_require__(107);

	var _download2 = _interopRequireDefault(_download);

	var _register = __webpack_require__(110);

	var _register2 = _interopRequireDefault(_register);

	var _author = __webpack_require__(113);

	var _author2 = _interopRequireDefault(_author);

	exports['default'] = {
	  name: 'main',
	  url: '',
	  abstract: true,
	  template: _mainJade2['default'],
	  controller: _mainControllerJs2['default'],
	  controllerAs: 'main',
	  children: [_home2['default'], _contact2['default'], _software2['default'], _content2['default'], _download2['default'], _register2['default'], _author2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports='<nav role="navigation" class="navbar navbar-inverse navbar-static-top"><div class="container-fluid"><div class="navbar-header"><button type="button" ng-click="main.menuCollapse=!main.menuCollapse" aria-controls="mainnav" aria-expanded="{{!main.menuCollapse}}" aria-label="{{main.menuCollapse ? \'Men\xFC ausklappen\' : \'Men\xFC einklappen\'}}" class="navbar-toggle collapsed"><span class="fa fa-bars"></span></button><a data-ui-sref=".home" class="navbar-brand"><span class="fa fa-home"></span> Statistik f\xFCr Jedermann</a></div><div id="mainnav" data-collapse="main.menuCollapse" class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-left"><li data-ui-sref-active="active"><a data-ui-sref=".content"><span class="fa fa-book"></span> Inhalte</a></li><li data-ui-sref-active="active"><a data-ui-sref=".author"><span class="fa fa-pencil"></span> Authorenmodus</a></li><li data-ui-sref-active="active"><a data-ui-sref=".download"><span class="fa fa-download"></span> Download</a></li><li data-ui-sref-active="active"><a data-ui-sref=".software"><span class="fa fa-calculator"></span> Statistiksoftware</a></li><li data-ui-sref-active="active"><a data-ui-sref=".contact"><span class="fa fa-support"></span> Kontakt</a></li></ul><ul ng-if="!main.user.authenticated" class="nav navbar-nav navbar-right"><li><button type="button" data-ng-click="main.modals.login()"><span class="fa fa-sign-in"></span> Anmelden</button></li><li data-ui-sref-active="active"><a data-ui-sref=".register"><span class="fa fa-user-plus"></span> registrieren</a></li></ul><ul data-ng-if="main.user.authenticated" class="nav navbar-nav navbar-right"><li><span class="fa fa-user"></span> {{main.user.data.profile.nickname||main.user.data.email}}</li><li><button type="button" data-ng-click="::main.user.inauthenticate()"><span aria-hidden="true" class="fa fa-sign-out"></span> Abmelden</button></li></ul></div></div></nav><div ui-view class="container"></div>'

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var MainCtrl = function MainCtrl($state, $stateParams, user, modals) {
	  _classCallCheck(this, MainCtrl);

	  this.$state = $state;
	  this.$stateParams = $stateParams;
	  this.user = user;
	  this.modals = modals;
	  this.ngModelOptions = {
	    updateOn: 'default blur',
	    debounce: {
	      'default': 500,
	      blur: 0
	    }
	  };
	};
	MainCtrl.$inject = ["$state", "$stateParams", "user", "modals"];

	exports['default'] = MainCtrl;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _homeJade = __webpack_require__(18);

	var _homeJade2 = _interopRequireDefault(_homeJade);

	exports['default'] = {
	  name: 'home',
	  url: '/home',
	  template: _homeJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports='<div class="jumbo-tron"><h2>Willkommen!</h2><h3>Das erwartet dich hier</h3><p>Hier kannst du die Grundlagen der psychologischen Statistik kennenlernen und dir eine Vorstellung davon erschlie\xDFen, wie und warum Statistik in der Forschung eingesetzt wird, was sie Leisten kann und was ihre Grenzen sind.. Falls du einfach nur die Inhalte deiner Statistikvorlesung etwas wiederholen m\xF6chtest oder gerade in der Klausur durchgefallen bist, laden wir dich genauso herzlich ein wie die Statistikanf\xE4nger.</p><p>Es gibt hier Lernkapitel, die sich jeweils mit einem bestimmten Themengebiet besch\xE4ftigen. Es gibt keine festgelegte Reihenfolge bei der Bearbeitung und du brauchst nicht alles von Anfang bis Ende durchzulesen, was hier zu finden ist. Manche Kapitel haben jedoch andere als Abh\xE4ngigkeiten. Bearbeite am besten zuerst die Abh\xE4ngigkeiten, bevor du ein solches Kapitel bearbeitest. Ein Kapitel besteht aus den Kernartikeln, die jeweils durch Zus\xE4tze erg\xE4nzt sind . Du kannst relativ flexibel entscheiden, ob und welche Zus\xE4tze du lesen m\xF6chtest.</p><dl class="dl-horizontal"><dt>Aufgaben</dt><dd>Die Einheit ist abgeschlossen, wenn du alle Aufgaben bearbeitet hast.</dd><dt>Beispiele</dt><dd>Wenn du mehr Hilfestellung oder Veranschaulichung brauchst, kannst du dir die Beispiele ansehen.</dd><dt>Extras</dt><dd>theoretischere Hintergrundinformationen, f\xFCr den Fall, dass du noch Luft hast und es genauer wissen m\xF6chtest</dd></dl><h3>Deine Mitarbeit ist gefragt</h3><p>Du hast die M\xF6glichkeit, Kapitel kurz mittels Rating zu bewerten, die du abgeschlossen hast. Mache bitte gro\xDFz\xFCgigen Gebrauch davon. Die Ratings k\xF6nnen beliebig oft ge\xE4ndert werden, du kannst also frei von der Leber weg bewerten.</p><p>Wir m\xF6chten nachvollziehen, ob und wie sich deine Selbsteinsch\xE4tzung deiner Statistikkenntnisse durch die Benutzung dieser Webseite ver\xE4ndert. Deswegen kannst du nicht nur Bewertungen abgeben, sondern auch deine aktuellen Statistikkenntnisse einsch\xE4tzen. Tue dies z.B., wenn du gerade ein Kapitel beendet hast oder wenn es dir gerade einf\xE4llt.</p><p ng-if="!main.user.authenticated"><a data-ui-sref="^.register" class="btn btn-primary">jetzt registrieren und anfangen.</a></p></div>'

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _contactJade = __webpack_require__(20);

	var _contactJade2 = _interopRequireDefault(_contactJade);

	exports['default'] = {
	  name: 'contact',
	  url: '/contact',
	  template: _contactJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports='<h2>Kontakt</h2><p>Anfragen zu inhaltlichen Themen, technischen Schwierigkeiten, Feedback/Kritik und Anregungen sind bitte an <a href="mailto:webmaster@t-cook.de">webmaster@t-cook.de </a>zu richten. Ich werde mich dann bald des Problems annehmen. Es kann den Vorgang beschleunigen, den Nutzernamen mit anzugeben oder die Anfrage mit der E-Mail-Adresse zu schicken, die im Profil angegeben wurde.</p>'

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _softwareJade = __webpack_require__(22);

	var _softwareJade2 = _interopRequireDefault(_softwareJade);

	exports['default'] = {
	  name: 'software',
	  url: '/software',
	  template: _softwareJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports='<h2>Statistiksoftware Excel</h2><p>Mit Excel l\xE4sst sich schon einiges an statistischen Auswertungen erreichen. Es folgen ein paar Grundlagen dar\xFCber, wie man mit Excel viel Rechnerei computergest\xFCtzt durchf\xFChren kann. Es wird ein Excel 2013 zugrunde gelegt. Gr\xF6\xDFtenteils sollte das hier Beschriebene aber auch in \xE4lteren Versionen verf\xFCgbar sein.</p><accordion><accordion-group is-open="true" heading="Formeln"><p>Formeln k\xF6nnen die Grundrechenarten auf Zahlen anwenden und einer Zelle kann man eine Formel zuweisen, statt einfach direkt eine Zahl in die Zelle einzutragen. Eine Zelle mit Formel zeigt das berechnete Ergebnis als Wert an. Markiere die Zelle, in der das Ergebnis erscheinen soll und trage die Formel dort ein. Formeln beginnen mit einem Gleichheitszeichen und werden mit der Return- oder Tabtaste ausgef\xFChrt. Durch das Gleichheitszeichen wei\xDF Excel, dass es die Eingabe als Formel interpretieren soll und nicht als normalen Wert. Mit den Grundrechenoperatoren (+, -, * und /) kann man nun Rechnungen auf Grundschulniveau konstruieren. Das ist sehr bequem, wenn das formulieren schneller geht als das Rechnen, z.B. bei der Anzahl von Sekunden: <kbd>=60*60*24*7</kbd> f\xFChrt zu 604.800.</p></accordion-group><accordion-group heading="Referenzieren"><p>In Formeln kann man nicht nur die zu verrechnenden Zahlen direkt eingeben, sondern stattdessen auch die Koordinaten der Zellen, in denen die Zahlen stehen: =a1+b1*c1. Die Spalten werden von links nach rechts mit Buchstaben bezeichnet, Zeilen von oben nach unten mit Nummern. In einer Koordinate kommt zuerst die Spalte, dann die Zeile. Die Zelle in der dritten Spalte von links und der zweiten Zeile von oben hei\xDFt z.B. C2. Das Angenehme dabei ist: \xC4ndert sich der Wert einer solchen referenzierten Zelle, wird die Formel neu berechnet und der Wert der mit Formel versehenen Zelle stimmt immer.</p></accordion-group><accordion-group heading="Zellbereiche ausf\xFCllen"><p>Excel interpretiert die Koordinaten in einer Formel als relativ, bezogen auf die Formelzelle. Verschiebt man die Zelle mit der Formel z.B. um eine Spalte nach rechts, werden auch die Koordinaten in der Formel so ge\xE4ndert, als h\xE4tten sich die referenzierten Zellen mit verschoben. Um wirklich absolute Koordinaten zu erhalten, die an ihre Spalte bzw. Zeile fixiert sind, wird dem Buchstaben oder der Nummer ein Dollarzeichen vorangestellt. =$b$3 w\xE4re vollst\xE4ndig fixiert, =$b3 hingegen nur auf der Spalte. Ein Vorzug der relativen Schreibweise ist, dass man die Formel kopieren und auf eine ganze Spalte oder Zeile anwenden kann.</p><p>Beispiel: Es gibt Spalte a und b, und 20 Zeilen. Man m\xF6chte eine Spalte c erstellen, indem man in jeder Zeile den Wert aus Spalte b von dem aus Spalte a subtrahiert. Hierzu schreibt man in Zelle c1: =a1-b1. Nun kopiert man Zelle c1, markiert Zellen c2\u2014c20 und f\xFCgt die kopierte Zelle ein. Die Referenzen passen sich an die Zeilen an, in denen die Formeln stehen.</p></accordion-group><accordion-group heading="Funktionen"><p>Funktionen fassen komplexere Rechenoperationen unter einem Funktionsnamen zusammen. Sie werden mit Eingabewerten (Parametern) gef\xFCttert und geben einen Ausgabewert zur\xFCck, der aufgrund der Parameter berechnet wird. Funktionen erscheinen in Formeln, k\xF6nnen entweder deren einziger Bestandteil sein oder noch von Rechenoperatoren umgeben sein: =Funktionsname(Parameter1;Parameter2;\u2026). Die Funktion zur Berechnung der Summe hei\xDFt naheliegenderweise Summe. Um die Summe aus C2 und C3 zu berechnen, lautet der Funktionsaufruf: summe(C2;C3). Diese Aufgabe w\xE4re nat\xFCrlich mit einem direkten Formelaufruf schneller erledigt; Funktionen entfalten ihr Potential erst bei komplexeren Berechnungen wie auch Statistik.</p></accordion-group><accordion-group heading="Bereiche referenzieren"><p>Um die Summenfunktion doch noch zu rehabilitieren, kann als Parameter statt einzelner Zellen ein Zellbereich \xFCbergeben werden. Bereiche werden notiert, indem die Zellbez\xFCge f\xFCr Anfangs- und Endzelle durch einen Doppelpunkt getrennt werden: =Summe(C3:C6) entspricht =summe(c3;c4;c5;c6). Bereiche k\xF6nnen auch zweidimensional sein: c2:d4 entspricht C2, C3, C4, D2, D3 und D4. So kann man mit der Summenfunktion und Bereichsreferenzierung auch Summen \xFCber gr\xF6\xDFere Bereiche bilden, was allein mit Formeln sehr viel Tipparbeit und fehleranf\xE4lliger w\xE4re.</p></accordion-group><accordion-group heading="Funktionsbibliothek"><p>Im Men\xFC unter Formeln > Funktionsbibliothek > Mehr Funktionen > Statistisch gibt es Funktionen speziell f\xFCr statistische Berechnungen. Man muss die in Excel implementierten Funktionen also nicht auswendig eingeben, sondern kann sie aus dem Men\xFC heraus ausw\xE4hlen.</p></accordion-group></accordion>'

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _contentJade = __webpack_require__(24);

	var _contentJade2 = _interopRequireDefault(_contentJade);

	var _contentControllerJs = __webpack_require__(25);

	var _contentControllerJs2 = _interopRequireDefault(_contentControllerJs);

	var _unit = __webpack_require__(26);

	var _unit2 = _interopRequireDefault(_unit);

	exports['default'] = {
	  name: 'content',
	  url: '/content',
	  template: _contentJade2['default'],
	  controller: _contentControllerJs2['default'],
	  controllerAs: 'content',
	  data: {
	    permissions: {
	      except: ['anonymous']
	    }
	  },
	  resolve: {
	    units: /*@ngInject*/["Restangular", function units(Restangular) {
	      var query = {
	        projections: 'title requires',
	        options: { sort: 'position' }
	      };
	      return Restangular.all('units').getList(query);
	    }],
	    markdown: /*@ngInject*/["$q", "$ocLazyLoad", function markdown($q, $ocLazyLoad) {
	      return $q(function (resolve) {
	        __webpack_require__.e/* nsure */(1, function () {
	          var md = __webpack_require__(41);
	          return resolve($ocLazyLoad.inject(md));
	        });
	      });
	    }]
	  },
	  children: [_unit2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports='<nav role="navigation" class="row"><div class="col-xs-12"><ul class="nav nav-pills"><li ng-repeat="unit in content.units track by unit._id" data-ui-sref-active="active"><a data-ui-sref=".unit.description({unit: unit._id})" data-ng-bind="unit.title" data-ng-class="{\'text-success\': main.user.complete(unit._id), \'text-primary\': main.user.requiresComplete(unit.requires)&amp;&amp;!main.user.complete(unit._id), \'text-warning\': !main.user.requiresComplete(unit.requires)&amp;&amp;!main.user.complete(unit._id)}"></a></li></ul></div></nav><section class="row"><div data-ui-view class="col-xs-12"><h2>Wozu \xFCberhaupt Statistik?</h2><p>Psychologie leistet einen enormen Beitrag zur Gestaltung wirksamer Unterrichtsmethoden, Diagnostik und Interventionen, Marketing/Werbung, Personalauswahl und -Entwicklung, Produktdesign (Ergonomie), und weiteren Anwendungsbereichen, in denen Wissen \xFCber das Erleben und Verhalten des Menschen unabdingbar ist. Wie kommen wir aber zu diesem Wissen?</p><dl><dt>Fragestellung/Annahmen</dt><dd>Es werden Annahmen zu einem Thema aufgestellt, die sich \xFCberpr\xFCfen lassen und nach der \xDCberpr\xFCfung widerlegt oder best\xE4tigt sind. Solche Annahmen m\xFCssen widerlegbar sein, sonst bringt sie einfach keinen Erkenntnisgewinn. Das Sprichwort \u201EWenn der Hahn kr\xE4ht auf dem Mist, \xE4ndert sich das wetter oder es bleibt, wie es ist.\u201C trifft immer zu, wie das Wetter auch sein mag und es gibt keine M\xF6glichkeit, es zu widerlegen. Hingegen ist \u201EWenn der Fuchs heult, wird der Mond scheinen\u201C widerlegbar. Tats\xE4chlich verifizieren kann man solche universellen Annahmen nicht, sondern h\xF6chstens falsifizieren. Deshalb ist bei wissenschaftlichen Annahmen die Falsifizierbarkeit sehr wichtig und bezeichnend f\xFCr eine gute Annahme. Besonders etablierte Erkenntnisse haben im Grunde \u201Enur\u201C zahlreichen Falsifizierungsversuchen widerstanden. Das sind Situationen, deren Ausgang f\xFCr oder gegen die Annahme spricht. Dass die Sonne morgens aufgeht, wird jeden Morgen gepr\xFCft und wurde bisher nicht widerlegt. Es ist also eine empirisch gut fundierte, vorl\xE4ufig akzeptierte Annahme. Hier zeigt sich schon, dass der bin\xE4re Wahrheitsbegriff von wahr und unwahr zu etwas kontinuierlicherem wird.</dd><dt>Empirie</dt><dd>In Experimenten, Felduntersuchungen usw. werden Informationen \xFCber menschliches Erleben oder Verhalten gesammelt, die f\xFCr oder gegen die Annahme sprechen. Dies kann sehr schwierig sein, wenn z.B. viele andere Annahmen die gesammelten Beobachtungen ebenso gut erkl\xE4ren k\xF6nnten wie die aktuell gepr\xFCfte. Eine Annahme \xFCber Geschlechterunterschiede kann nur dann untersucht werden, wenn zwischen den beiden Gruppen m\xF6glichst nur der Geschlechterunterschied besteht.</dd><dt>Statistik</dt><dd>Gemachte Beobachtungen werden als Messwerte ausgedr\xFCckt. Dadurch ist es m\xF6glich, sie auf logisch-mathematischer Ebene zu beschreiben, zusammenzufassen und Annahmen zu pr\xFCfen. Man l\xE4sst also die Inhaltlichen Aspekte vorerst mal beiseite und arbeitet mit den Werten. Das ist z.B. n\xF6tig, weil Menschen sich nie in Bezug auf eine Annahme genau gleich verhalten. Man hat es also mit Tendenzen zu tun, die sich erst mittels Statistik extrahieren lassen.</dd><dt>Interpretation</dt><dd>Die statistischen Ergebnisse werden im Hinblick auf die Annahme interpretiert. Trifft die Annahme den Ergebnissen zufolge zu oder nicht? Gen\xFCgend so gepr\xFCfte Annahmen k\xF6nnen zu einer Theorie integriert werden. Theorien sind sozusagen die vorl\xE4ufigen \u201EWahrheiten\u201C dar\xFCber, wie die Welt funktioniert. Zumindest k\xF6nnen sie weitere konkrete Beobachtungen vorhersagen und sie erkl\xE4ren. Von konkreten Beobachtungen auf andere Beobachtungen zu schlie\xDFen, ist nicht m\xF6glich. Theorien sind in st\xE4ndiger Weiterentwicklung begriffen und werden stetig verbessert und verfeinert. Aus einer Theorie ergeben sich wiederum Annahmen, die man empirisch-statistisch pr\xFCfen kann um die Theorie zu testen.</dd></dl><h3>Warum dieser Umweg \xFCber die Statistik?</h3><h4>Objektivit\xE4t und Transparenz</h4><p>Es gibt nat\xFCrlich bessere und weniger gute Wege zu einer wissenschaftlichen Erkenntnis, aber der jeweilige Weg ist mit durch Statistik objektiv und transparent. Es ist also f\xFCr jeden klar nachvollziehbar, wie man von Einzelbeobachtungen zu einem statistischen Ergebnis gelangt ist. Dies gilt ebenso auch f\xFCr die Empirie, wo klar ersichtlich sein muss, wie die Beobachtungen zustande kamen. Vor allem aber lie\xDFe sich ohne Statistik kein verwertbares Ergebnis gewinnen, das sich hinsichtlich der gepr\xFCften Fragestellung interpretieren lie\xDFe.</p><h4>Qualit\xE4t und Verantwortung</h4><p>Durch Empirie und Statistik wird die Qualit\xE4t von Theorien gesteigert. Selbst wenn eine Theorie nicht jeden Einzelfall korrekt vorhersagen kann, erbringt diese systematische Vorgehensweise die besten Trefferquoten. Die Psychologie hat das ziel , durch sinnvolle Methodenwahl m\xF6glichst gute Theorien hervorzubringen und somit m\xF6glichst gute Vorhersagen zu liefern. Die Naturwissenschaften arbeiten empirisch und sicher h\xE4tten Sie ein Problem damit, wenn Maschinen oder Autos pl\xF6tzlich nicht mehr aufgrund m\xF6glichst sicherer und objektiver Erkenntnisse konstruiert w\xFCrden, sondern nach rein subjektivem Gutd\xFCnken (Ich baue, wie es mir gef\xE4llt). W\xFCrden Sie freiwillig ein solches Auto fahren? Warum sollte dies in der Psychologie anders sein, nur weil jeder gern seine private Psychologie pflegt? Erst so bekommt die Psychologie als Wissenschaft \xFCberhaupt einen Sinn. Wegen dieses hohen Anspruchs greifen viele Fachgebiete auf psychologische Befunde zur\xFCck, woraus der Psychologie wiederum eine gro\xDFe Verantwortung gegen\xFCber diesen Fachgebieten erw\xE4chst und gegen\xFCber den dabei involvierten Menschen. Durch fahrl\xE4ssige Behauptungen \xFCber kognitive, soziale und emotionale Entwicklung, Lernprozesse und die daraus abgeleitete Qualit\xE4t bestimmter Unterrichtsmethoden oder Therapieformen k\xF6nnten andere menschen wie Patienten, Mitarbeiter oder Sch\xFCler eine Fehlbehandlung erfahren, weil sich Personaler, Lehrer oder Berater auf diese Behauptungen verlassen.</p></div></section>'

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*@ngInject*/
	var ContentCtrl = function ContentCtrl(units) {
	  _classCallCheck(this, ContentCtrl);

	  this.units = units;
	};
	ContentCtrl.$inject = ["units"];

	exports["default"] = ContentCtrl;
	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(27);

	var _unitJade = __webpack_require__(31);

	var _unitJade2 = _interopRequireDefault(_unitJade);

	var _unitControllerJs = __webpack_require__(32);

	var _unitControllerJs2 = _interopRequireDefault(_unitControllerJs);

	var _description = __webpack_require__(33);

	var _description2 = _interopRequireDefault(_description);

	var _test = __webpack_require__(35);

	var _test2 = _interopRequireDefault(_test);

	var _topic = __webpack_require__(38);

	var _topic2 = _interopRequireDefault(_topic);

	//import test from './test';

	exports['default'] = {
	  name: 'unit',
	  url: '/:unit',
	  template: _unitJade2['default'],
	  controller: _unitControllerJs2['default'],
	  controllerAs: 'unit',
	  abstract: true,
	  resolve: {
	    unit: /*@ngInject*/["Restangular", "$stateParams", function unit(Restangular, $stateParams) {
	      var query = {
	        projections: 'title subtitle description requires topics._id topics.title'
	      };
	      return Restangular.one('units', $stateParams.unit).get(query);
	    }]
	  },
	  children: [_description2['default'], _test2['default'], _topic2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(29)();
	// imports


	// module
	exports.push([module.id, ".subkapitel {\n  background-color: #E9EAED;\n  box-shadow: 0px 1px 1px #888888;\n  line-height: 2em;\n}", ""]);

	// exports


/***/ },
/* 29 */
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
/* 30 */
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
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

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

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
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
/* 31 */
/***/ function(module, exports) {

	module.exports='<header class="row"><div class="col-sm-4"><h2><a ui-sref=".description" ng-bind="unit.unit.title"></a></h2></div><div class="col-sm-8"><h2 ng-bind="unit.unit.subtitle"></h2></div></header><div class="row"><nav class="col-sm-4"><ul class="nav nav-pills nav-stacked"><li ng-repeat="topic in unit.unit.topics track by topic._id" ui-sref-active="active"><a ui-sref=".topic({topic: topic._id})" ng-bind="topic.title"></a></li><li data-ui-sref-active="active"><a data-ui-sref="main.content.unit.test">Test</a></li></ul></nav><main data-ui-view class="col-sm-8 subkapitel"></main></div>'

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _ = __webpack_require__(2);
	/*@ngInject*/
	var UnitCtrl = (function () {
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
	})();

	exports['default'] = UnitCtrl;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _descriptionJade = __webpack_require__(34);

	var _descriptionJade2 = _interopRequireDefault(_descriptionJade);

	exports['default'] = {
	  name: 'description',
	  url: '',
	  template: _descriptionJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports='<h3>Beschreibung</h3><div markdown="unit.unit.description"></div><h4>Voraussetzungen</h4><p ng-if="unit.unit.requires.length===0">Es gibt keine Voraussetzungen.</p><ul ng-if="unit.unit.requires.length&gt;0" class="list-unstyled"><li ng-repeat="r in unit.requires"><a ng-bind="r.title" ui-sref=".({unit: r._id})"></a></li></ul>'

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _testJade = __webpack_require__(36);

	var _testJade2 = _interopRequireDefault(_testJade);

	var _testControllerJs = __webpack_require__(37);

	var _testControllerJs2 = _interopRequireDefault(_testControllerJs);

	exports['default'] = {
	  name: 'test',
	  url: '/test',
	  template: _testJade2['default'],
	  controller: _testControllerJs2['default'],
	  controllerAs: 'test',
	  resolve: {
	    tests: /*@ngInject*/["Restangular", "$stateParams", function tests(Restangular, $stateParams) {
	      var query = {
	        conditions: { unit: $stateParams.unit },
	        mode: 'exercise'
	      };
	      return Restangular.all('tests').getList(query);
	    }]
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports='<h3>Testaufgaben</h3><div collapse="test.intro" ng-init="test.intro=true"><p>Es folgen ein paar Testaufgaben, mit deren Hilfe du dein erworbenes Wissen \xFCber dieses Kapitel pr\xFCfen und festigen kannst. Es gibt mehrere Aufgabentypen:</p><dl class="dl-horizontal"><dt>Einfachauswahl</dt><dd>Eine der angebotenen Antwortm\xF6glichkeiten ist korrekt. F\xFCr die korrekte Beantwortung bekommst du einen Punkt.</dd><dt>Mehrfachauswahl</dt><dd>Jede der angebotenen Aussagen ist entweder korrekt oder falsch und muss explizit mittels Kontrollk\xE4stchen beantwortet werden. Jede korrekt ab- bzw. angew\xE4hlte Aussage bringt dir einen Punkt, man kann also maximal so viele Punkte bekommen wie es Aussagen in einer Aufgabe gibt. Punktabzug bei Fehlern gibt es nicht.</dd><dt>Ausf\xFCllen</dt><dd>Es gibt keine Antwortoptionen, sondern du musst eine kurze L\xF6sung selbst generieren, z.B. eine Rechenaufgabe usw.</dd></dl><p>Auf deine Antwort bekommst du ein Feedback. Bei Auswahl-Aufgaben kannst du auch dann noch die anderen Antworten anw\xE4hlen um deren Feedback zu sehen, dies wird dann aber nicht mehr als deine Antwort gewertet.</p></div><div role="toolbar" class="toolbar"><button ng-class="{\'active\': !test.intro}" ng-click="test.intro=!test.intro" aria-pressed="{{!test.intro}}" class="btn btn-info">Info</button><button ng-click="test.reset()" class="btn btn-default">Test neu starten</button></div><div class="progress"><div aria-valuenow="{{test.done}}" aria-valuemin="0" aria-valuemax="{{test.max}}" role="progressbar" ng-style="{\'width\': test.done/test.max*100+\'%\'}" class="progress-bar progress-bar-info">bearbeitet: {{test.done}}/{{test.max}}</div><div aria-valuenow="{{test.sumPoints}}" aria-valuemin="0" aria-valuemax="{{test.maxPoints}}" role="progressbar" ng-style="{\'width\': test.sumPoints/test.maxPoints*100+\'%\'}" class="progress-bar progress-bar-success">Punkte: {{test.sumPoints}}/{{test.maxPoints}}</div></div><p ng-hide="test.current">Es gibt noch keine Testaufgaben f\xFCr dieses Kapitel.</p><form novalidate name="test.form" ng-show="test.current" ng-submit="test.submit()" ng-switch="test.current.type"><div ng-switch-when="input" ng-class="{\'has-success\': test.form.$submitted&amp;&amp;test.form.item.$valid, \'has-error\': test.form.$submitted&amp;&amp;test.form.item.$invalid}" class="form-group"><label for="item" ng-bind="test.current.text" class="control-label"></label><input id="item" type="text" name="item" ng-model="test.input" class="form-control"><p ng-bind="test.output" class="help-block"></p></div><div ng-switch-when="single" ng-class="{\'has-success\': test.form.$submitted&amp;&amp;test.form.item.$valid, \'has-error\': test.form.$submitted&amp;&amp;test.form.item.$invalid}" class="form-group"><label ng-bind="test.current.text"></label><div ng-repeat="c in test.current.choices track by c._id" class="radio"><label><input type="radio" name="item" ng-value="c" ng-model="test.input"> {{c.text}}</label></div><p ng-bind="test.input.feedback" ng-show="test.form.$submitted" class="help-block"></p></div><div ng-switch-when="multiple" class="form-group"><label ng-bind="test.current.text"></label><div ng-repeat="c in test.current.choices track by c._id" ng-class="{\'has-success\': test.form.$submitted&amp;&amp;!!c.checked===c.correct, \'has-error\': test.form.$submitted&amp;&amp;!!c.checked!==c.correct}"><div class="checkbox"><label><input type="checkbox" name="item" ng-model="c.checked"> {{c.text}}</label></div><p ng-bind="c.feedback" ng-show="test.form.$submitted" class="help-block"></p></div></div><div class="form-group"><input type="submit" value="Antwort abschicken" ng-hide="test.form.$submitted"><input type="button" value="N\xE4chste Aufgabe" ng-click="test.next()" ng-show="test.form.$submitted&amp;&amp;test.done&lt;test.max"></div></form>'

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	/*@ngInject*/
	var TestCtrl = (function () {
	  function TestCtrl(Restangular, tests, unit, user) {
	    _classCallCheck(this, TestCtrl);

	    this.originalTests = tests.plain();
	    this.Guesses = Restangular.all('guesses');
	    this.unit = unit;
	    this.user = user;
	    this.init();
	  }
	  TestCtrl.$inject = ["Restangular", "tests", "unit", "user"];

	  _createClass(TestCtrl, [{
	    key: 'init',
	    value: function init() {
	      if (this.originalTests.length === 0) {
	        this.tests = {
	          done: [],
	          todo: []
	        };
	        return;
	      }
	      var lengths = _lodash2['default'].map(this.originalTests, function (test) {
	        return test.guess ? test.guess.responses.length : 0;
	      });
	      this.count = _lodash2['default'].min(lengths);
	      this.tests = _lodash2['default'].groupBy(this.originalTests, function (test) {
	        if (this.count === 0) {
	          return test.guess ? 'done' : 'todo';
	        } else if (this.count > 0) {
	          return test.guess.responses.length > this.count ? 'done' : 'todo';
	        }
	      }, this);
	      if (!this.tests.done) {
	        this.tests.done = [];
	      }
	      this.current = this.tests.todo[0].item;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.init();
	      this.form.$setPristine();
	      this.form.$submitted = false;
	    }
	  }, {
	    key: 'postSubmit',
	    value: function postSubmit(data) {
	      this.tests.todo[0].guess.responses.push(data);
	      this.tests.done.push(this.tests.todo[0]);
	      this.tests.todo.shift();
	      if (this.done === this.max) {
	        return this.user.addUnit(this.unit._id);
	      }
	    }
	  }, {
	    key: 'submit',
	    value: function submit() {
	      var _this = this;

	      var response = {};
	      switch (this.current.type) {
	        case 'single':
	          if (!this.input) {
	            return;
	          }
	          this.form.item.$setValidity('correct', this.input.correct);
	          response.value = this.input._id;
	          break;
	        case 'input':
	          if (!this.input) {
	            return;
	          }
	          var choice = _lodash2['default'].find(this.current.choices, { text: this.input });
	          if (choice) {
	            this.form.item.$setValidity('correct', choice.correct);
	            this.output = choice.feedback;
	          } else {
	            this.form.item.$setValidity('correct', false);
	            this.output = 'Falsch';
	          }
	          response.value = this.input;
	          break;
	        case 'multiple':
	          response.value = _lodash2['default'].transform(this.current.choices, function (res, c) {
	            if (c.checked) {
	              res.push(c._id);
	            }
	          }, [], this);
	      }
	      if (this.tests.todo[0].guess) {
	        this.Guesses.one(this.tests.todo[0].guess._id).all('responses').post(response).then(function (data) {
	          _this.postSubmit(data);
	        });
	      } else {
	        var guess = {
	          test: this.tests.todo[0].item._id,
	          responses: [response]
	        };
	        this.Guesses.post(guess).then(function (data) {
	          _this.postSubmit(data);
	        });
	      }
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      this.input = null;
	      this.output = null;
	      this.current = this.tests.todo[0].item;
	      this.form.$submitted = false;
	      this.form.$setPristine();
	    }
	  }, {
	    key: 'max',
	    get: function get() {
	      return this.originalTests.length;
	    }
	  }, {
	    key: 'done',
	    get: function get() {
	      return this.tests.done.length;
	    }
	  }, {
	    key: 'maxPoints',
	    get: function get() {
	      return _lodash2['default'].reduce(this.originalTests, function (sum, test) {
	        switch (test.item.type) {
	          case 'single':
	            sum = sum + 1;
	            break;
	          case 'multiple':
	            sum = sum + test.item.choices.length;
	            break;
	          case 'input':
	            sum = sum + 1;
	            break;
	        }
	        return sum;
	      }, 0);
	    }
	  }, {
	    key: 'sumPoints',
	    get: function get() {
	      return _lodash2['default'].reduce(this.tests.done, function (sum, test) {
	        if (!test.guess) {
	          return sum;
	        }
	        var item = test.item;
	        var response = test.guess.responses[test.guess.responses.length - 1];
	        var choice = undefined;
	        switch (item.type) {
	          case 'single':
	            choice = _lodash2['default'].find(item.choices, { _id: response.value });
	            if (choice.correct) {
	              sum = sum + 1;
	            }
	            break;
	          case 'multiple':
	            _lodash2['default'].each(item.choices, function (c) {
	              var checked = _lodash2['default'].contains(response.value, c._id);
	              if (checked === c.correct) {
	                sum = sum + 1;
	              }
	            }, this);
	            break;
	          case 'input':
	            choice = _lodash2['default'].find(item.choices, { text: response.value });
	            if (choice.correct) {
	              sum = sum + 1;
	            }
	            break;
	        }
	        return sum;
	      }, 0, this);
	    }
	  }]);

	  return TestCtrl;
	})();

	exports['default'] = TestCtrl;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _topicJade = __webpack_require__(39);

	var _topicJade2 = _interopRequireDefault(_topicJade);

	var _topicControllerJs = __webpack_require__(40);

	var _topicControllerJs2 = _interopRequireDefault(_topicControllerJs);

	exports['default'] = {
	  name: 'topic',
	  url: '/:topic',
	  template: _topicJade2['default'],
	  controller: _topicControllerJs2['default'],
	  controllerAs: 'topic',
	  resolve: {
	    topic: /*@ngInject*/["Restangular", "$stateParams", function topic(Restangular, $stateParams) {
	      return Restangular.one('units', $stateParams.unit).one('topics', $stateParams.topic).get();
	    }]
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports='<h3 data-ng-bind="topic.topic.subtitle ? topic.topic.title+\': \'+topic.topic.subtitle : topic.topic.title"></h3><div markdown="topic.topic.body" math-jax></div><div role="toolbar" class="btn-toolbar"><div class="btn-group"><div dropdown is-open="status.examples" data-ng-if="topic.topic.examples.length&gt;0" class="btn-group"><button type="button" dropdown-toggle class="btn btn-default dropdown-toggle">Beispiele<span class="caret"></span></button><ul class="dropdown-menu"><li data-ng-repeat="example in topic.topic.examples"><a data-ui-sref=".example({example: example.title})" ng-bind="example.title" class="btn btn-default"></a></li></ul></div><div dropdown is-open="status.extras" data-ng-if="topic.topic.extras.length&gt;0" class="btn-group"><button type="button" dropdown-toggle class="btn btn-default dropdown-toggle">Extras<span class="caret"></span></button><ul class="dropdown-menu"><li data-ng-repeat="extra in topic.topic.extras"><a data-ui-sref=".extra({extra: extra.title})" data-ng-bind="extra.title" class="btn btn-default"></a></li></ul></div></div><div data-ng-if="main.user.authenticated" class="btn-group"><button type="button" ng-click="main.modals.akzeptanz()" class="btn btn-default">Kapitel bewerten</button><button type="button" data-ng-click="main.modals.fsk()" class="btn btn-default">Statistikkenntnisse einsch\xE4tzen</button></div></div><section data-ui-view></section>'

/***/ },
/* 40 */
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

	exports["default"] = topicCtrl;
	module.exports = exports["default"];

/***/ },
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _downloadJade = __webpack_require__(108);

	var _downloadJade2 = _interopRequireDefault(_downloadJade);

	var _downloadControllerJs = __webpack_require__(109);

	var _downloadControllerJs2 = _interopRequireDefault(_downloadControllerJs);

	exports['default'] = {
	  name: 'download',
	  url: '/download',
	  template: _downloadJade2['default'],
	  controller: _downloadControllerJs2['default'],
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
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports='<h2>Download</h2><p>Falls du die Inhalte dieser Webseite gern als Textdokument archivieren m\xF6chtest, kannst du hier ein Dokument mit den von dir bearbeiteten Kapiteln herunterladen. Du kannst zwischen ein paar Formaten w\xE4hlen und einstellen, welche Bestandteile du haben m\xF6chtest.</p><form novalidate name="downloads.form" method="get" action="api/downloads" class="form-horizontal"><input type="hidden" name="token" ng-value="main.user.token"><div class="form-group"><label class="col-xs-2">Schnellauswahl</label><div class="col-xs-10"><div role="toolbar" class="toolbar"><div class="btn-group"><button id="showunits" ng-click="download.show.units=!download.show.units" aria-expanded="{{download.show.units}}" class="btn btn-default">Kapitel<span ng-class="download.show.units ? \'fa-caret-square-o-up\' : \'fa-caret-square-o-down\'" aria-hidden="true" class="fa"></span></button><div id="unitgroup" ng-show="download.show.units" role="group" aria-labelledby="showunits" class="btn-group"><button ng-click="download.selectUnits(true)" class="btn btn-default">Alle</button><button ng-click="download.selectUnits(false)" class="btn btn-default">keine</button></div></div><div class="btn-group"><button id="showcontent" ng-click="download.show.contents=!download.show.contents" aria-expanded="{{download.show.contents}}" class="btn btn-default">Inhalte<span ng-class="download.show.contents ? \'fa-caret-square-o-up\' : \'fa-caret-square-o-down\'" aria-hidden="true" class="fa"></span></button><div ng-show="download.show.contents" role="group" aria-labelledby="showcontent" class="btn-group"><button ng-click="download.selectContents(true)" class="btn btn-default">Alle</button><button ng-click="download.selectContents(false)" class="btn btn-default">keine</button></div></div></div></div></div><formly-form model="download.data" fields="download.fields" form="download.form"><div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" value="Download" ng-class="{\'btn-primary\': undefined.$valid,\'btn-danger\': undefined.$invalid&&undefined.$touched}" ng-disabled="undefined.$invalid" class="btn"></div></div></formly-form></form>'

/***/ },
/* 109 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var DownloadController = (function () {
	  function DownloadController(units, lodash) {
	    _classCallCheck(this, DownloadController);

	    this.units = units.plain();
	    this.lodash = lodash;
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
	  DownloadController.$inject = ["units", "lodash"];

	  _createClass(DownloadController, [{
	    key: 'selectUnits',
	    value: function selectUnits(val) {
	      this.data.units = val ? this.lodash.map(this.units, '_id') : [];
	    }
	  }, {
	    key: 'selectContents',
	    value: function selectContents(val) {
	      this.data.contents = val ? ['body', 'examples', 'extras'] : [];
	    }
	  }]);

	  return DownloadController;
	})();

	exports['default'] = DownloadController;
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _registerJade = __webpack_require__(111);

	var _registerJade2 = _interopRequireDefault(_registerJade);

	var _registerControllerJs = __webpack_require__(112);

	var _registerControllerJs2 = _interopRequireDefault(_registerControllerJs);

	exports['default'] = {
	  name: 'register',
	  url: '/register',
	  template: _registerJade2['default'],
	  controller: _registerControllerJs2['default'],
	  controllerAs: 'register'
	};
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports='<h2>Registrieren</h2><form novalidate role="form" name="register.form" ng-submit="register.register()" class="form-horizontal"><formly-form model="register.model" fields="register.fields" form="register.form" options="register.formOptions"><p>Mit der Registrierung erkl\xE4rst du dich mit folgenden Punkten einverstanden:</p><ul><li>Wir behandeln deine Eingaben anonym und vertraulich.</li><li>Neben deinen explizit gemachten Angaben werden deine Bewegungen teilweise mit erfasst um dich nicht zus\xE4tzlich nach deiner Verweildauer, den von dir angefurften Inhalten o.\xC4. fragen zu m\xFCssen.</li><li>Zu Forschungszwecken werten wir alle Nutzerdaten wissenschaftlich aus.</li><li>Wir behalten uns das Recht vor, dich zu Forschungszwecken \xFCber deine hier angegebene E-Mail-Adresse kontaktieren zu k\xF6nnen.</li></ul><div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" value="Registrieren" ng-class="{\'btn-primary\': undefined.$valid,\'btn-danger\': undefined.$invalid&&undefined.$touched}" ng-disabled="undefined.$invalid" class="btn"></div></div></formly-form></form>'

/***/ },
/* 112 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var RegisterCtrl = (function () {
	  function RegisterCtrl(user, $state, $q, Restangular) {
	    _classCallCheck(this, RegisterCtrl);

	    function getSubjects(val) {
	      return Restangular.all('subjects').getList({ search: val });
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
	        maxlength: 30,
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
	          'default': 500
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
	        }]
	      }
	    }];
	  }
	  RegisterCtrl.$inject = ["user", "$state", "$q", "Restangular"];

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
	})();

	exports['default'] = RegisterCtrl;
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _authorJade = __webpack_require__(114);

	var _authorJade2 = _interopRequireDefault(_authorJade);

	var _units = __webpack_require__(115);

	var _units2 = _interopRequireDefault(_units);

	var _vega = __webpack_require__(149);

	var _vega2 = _interopRequireDefault(_vega);

	exports['default'] = {
	  name: 'author',
	  url: '/author',
	  template: _authorJade2['default'],
	  data: {
	    permissions: {
	      except: ['anonymous']
	    }
	  },
	  resolve: {
	    markdown: /*@ngInject*/["$q", "$ocLazyLoad", function markdown($q, $ocLazyLoad) {
	      return $q(function (resolve) {
	        __webpack_require__.e/* nsure */(1/* duplicate */, function () {
	          var md = __webpack_require__(41);
	          return resolve($ocLazyLoad.inject(md));
	        });
	      });
	    }],
	    breadcrumb: /*@ngInject*/["$q", "$ocLazyLoad", function breadcrumb($q, $ocLazyLoad) {
	      return $q(function (resolve) {
	        __webpack_require__.e/* nsure */(4, function () {
	          __webpack_require__(152);
	          return resolve($ocLazyLoad.inject('ncy-angular-breadcrumb'));
	        });
	      });
	    }]
	  },
	  ncyBreadcrumb: {
	    label: 'Autorentool'
	  },
	  children: [_units2['default'], _vega2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports='<div class="row"><div class="col-xs-12"><div ncy-breadcrumb></div><h2>Authorenmodus</h2><ul ng-hide="main.user.data.role===\'user\'" class="nav nav-tabs"><li ui-sref-active="active"><a ui-sref=".units.new">Kapitel</a></li><li ui-sref-active="active"><a ui-sref=".vega">Vega</a></li></ul><div ui-view><p ng-if="!main.user.authenticated" class="text-warning">Willkommen beim Autorenmodus. Der Autorenmodus kann nur genutzt werden, wenn man angemeldet und Autor ist. Du bist gerade nicht angemeldet.</p><ng-switch on="main.user.data.role"><p ng-switch-when="author" class="text-success">Willkommen beim Autorenmodus. Du geh\xF6rst zu den Autoren dieses WBT und kannst hier seine Inhalte editieren.</p><p ng-switch-when="user" class="text-warning">Willkommen beim Autorenmodus. Du bist leider kein Autor und kannst keine Inhalte bearbeiten. Bitte wende dich an uns, falls du Autor werden m\xF6chtest.</p></ng-switch></div></div></div>'

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _unitsJade = __webpack_require__(116);

	var _unitsJade2 = _interopRequireDefault(_unitsJade);

	var _unitsControllerJs = __webpack_require__(117);

	var _unitsControllerJs2 = _interopRequireDefault(_unitsControllerJs);

	var _new = __webpack_require__(118);

	var _new2 = _interopRequireDefault(_new);

	var _unit = __webpack_require__(121);

	var _unit2 = _interopRequireDefault(_unit);

	exports['default'] = {
	  name: 'units',
	  url: '/units',
	  template: _unitsJade2['default'],
	  controller: _unitsControllerJs2['default'],
	  controllerAs: 'units',
	  abstract: true,
	  resolve: {
	    units: /*@ngInject*/["Restangular", function units(Restangular) {
	      var query = {
	        projections: 'title',
	        options: { sort: 'position' }
	      };
	      return Restangular.all('units').getList(query);
	    }]
	  },
	  children: [_new2['default'], _unit2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports='<h3><button type="button" ng-click="units.collapse=!units.collapse" class="btn btn-default"><span ng-class="units.collapse ? \'fa-toggle-off\' : \'fa-toggle-on\'" aria-hidden="true" class="fa"></span> {{units.collapse ? \'einblenden\' : \'ausblenden\'}}</button><br><span>Kapitel\xFCbersicht</span></h3><div collapse="units.collapse"><form novalidate name="unitsForm" class="form-horizontal"><div class="form-group"><label for="selectUnit" class="col-xs-2 control-label">Kapitel</label><div class="col-xs-10"><select id="selectUnit" name="selectUnit" ng-model="units.selected" ng-options="u.title for u in units.units track by u._id" ng-change="units.select()" class="form-control"><option value="">Neues Kapitel</option></select></div></div><div ng-if="units.selected" class="form-group"><div class="col-xs-offset-2 col-xs-10"><div class="button-group"><a ui-sref="main.content.unit.description({unit: units.selected._id})" class="btn btn-primary">Anschauen</a><button type="button" ng-click="units.remove()" class="btn btn-danger">L\xF6schen</button></div></div></div></form></div><div ui-view></div>'

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	/*@ngInject*/
	var UnitsController = (function () {
	  function UnitsController(units, $state) {
	    _classCallCheck(this, UnitsController);

	    this.units = units;
	    this.$state = $state;
	    this.collapse = false;
	    this.init();
	  }
	  UnitsController.$inject = ["units", "$state"];

	  _createClass(UnitsController, [{
	    key: 'init',
	    value: function init() {
	      if (this.$state.params.unit) {
	        this.selected = _lodash2['default'].find(this.units, { _id: this.$state.params.unit });
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
	    key: 'save',
	    value: function save(newUnit) {
	      var _this = this;

	      return this.units.post(newUnit).then(function (unit) {
	        _this.units.push(unit);
	        _this.selected = unit;
	        _this.select();
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var _this2 = this;

	      return this.selected.remove().then(function () {
	        _lodash2['default'].remove(_this2.units, { _id: _this2.selected._id });
	        _this2.selected = null;
	        _this2.select();
	      });
	    }
	  }]);

	  return UnitsController;
	})();

	exports['default'] = UnitsController;
	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _newJade = __webpack_require__(119);

	var _newJade2 = _interopRequireDefault(_newJade);

	var _newController = __webpack_require__(120);

	var _newController2 = _interopRequireDefault(_newController);

	exports['default'] = {
	  name: 'new',
	  url: '/new',
	  controller: _newController2['default'],
	  controllerAs: 'new',
	  template: _newJade2['default'],
	  ncyBreadcrumb: {
	    label: 'Neues Kapitel'
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports='<h3 ng-init="units.selected=null">Neues Kapitel anlegen</h3><form novalidate name="new.form" ng-submit="units.save(new.unit)" class="form-horizontal"><formly-form model="new.unit" fields="new.fields" form="new.form"><div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" value="Anlegen" ng-class="{\'btn-primary\': new.form.$valid,\'btn-danger\': new.form.$invalid&&new.form.$touched}" ng-disabled="new.form.$invalid" class="btn"></div></div></formly-form></form>'

/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var NewController = function NewController($scope) {
	  var _this = this;

	  _classCallCheck(this, NewController);

	  this.unit = {};
	  this.fields = [{
	    key: 'title',
	    type: 'horizontalInput',
	    templateOptions: {
	      type: 'text',
	      label: 'Titel',
	      placeholder: 'Titel des Kapitels',
	      required: true
	    }
	  }, {
	    key: 'subtitle',
	    type: 'horizontalInput',
	    templateOptions: {
	      type: 'text',
	      label: 'Untertitel',
	      placeholder: 'Untertitel des Kapitels'
	    }
	  }, {
	    key: 'requires',
	    type: 'horizontalMultiCheckbox',
	    templateOptions: {
	      label: 'Voraussetzungen',
	      labelProp: 'title',
	      valueProp: '_id'
	    }
	  }, {
	    key: 'description',
	    type: 'horizontalMarkdownArea',
	    templateOptions: {
	      label: 'Beschreibung',
	      required: true,
	      placeholder: 'hier Beschreibungstext eingeben'
	    }
	  }];
	  $scope.$watchCollection('units.units', function (val) {
	    _this.fields[2].templateOptions.options = val;
	  }, true);
	};
	NewController.$inject = ["$scope"];

	exports['default'] = NewController;
	module.exports = exports['default'];

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _unitJade = __webpack_require__(122);

	var _unitJade2 = _interopRequireDefault(_unitJade);

	var _unitController = __webpack_require__(123);

	var _unitController2 = _interopRequireDefault(_unitController);

	var _basics = __webpack_require__(124);

	var _basics2 = _interopRequireDefault(_basics);

	var _topics = __webpack_require__(127);

	var _topics2 = _interopRequireDefault(_topics);

	var _tests = __webpack_require__(142);

	var _tests2 = _interopRequireDefault(_tests);

	exports['default'] = {
	  name: 'unit',
	  url: '/:unit',
	  template: _unitJade2['default'],
	  controller: _unitController2['default'],
	  controllerAs: 'unit',
	  abstract: true,
	  resolve: {
	    jsonpatch: /*@ngInject*/["$q", function jsonpatch($q) {
	      return $q(function (resolve, reject) {
	        __webpack_require__.e/* nsure */(3, function () {
	          var jsonpatch = __webpack_require__(148);
	          return jsonpatch ? resolve(jsonpatch) : reject('jsonpatch not loaded');
	        });
	      });
	    }],
	    unit: /*@ngInject*/["Restangular", "$stateParams", function unit(Restangular, $stateParams) {
	      var query = { projections: 'title subtitle description requires' };
	      return Restangular.one('units', $stateParams.unit).get(query);
	    }]
	  },
	  children: [_basics2['default'], _topics2['default'], _tests2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports='<h3 ng-bind="unit.unit.title"></h3><ul class="nav nav-tabs"><li ui-sref-active="active"><a ui-sref=".basics">Grunddaten</a></li><li ui-sref-active="active"><a ui-sref=".topics.new">Subkapitel</a></li><li ui-sref-active="active"><a ui-sref=".tests">Testaufgaben</a></li></ul><div ui-view></div>'

/***/ },
/* 123 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var UnitCtrl = function UnitCtrl(jsonpatch, unit, $scope) {
	  var _this = this;

	  _classCallCheck(this, UnitCtrl);

	  this.unit = unit.plain();
	  this.patches = [];
	  this.error = null;
	  $scope.$watch('unit.unit', function (val, oldVal) {
	    _this.patches = jsonpatch.compare(oldVal, val);
	    if (_this.patches.length === 0) {
	      return;
	    }
	    return unit.patch(_this.patches).then(function () {
	      _this.patches = [];
	      _this.error = null;
	    }, function (e) {
	      _this.error = e;
	      _this.recover = oldVal;
	    });
	  }, true);
	};
	UnitCtrl.$inject = ["jsonpatch", "unit", "$scope"];

	exports['default'] = UnitCtrl;
	module.exports = exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _basicsJade = __webpack_require__(125);

	var _basicsJade2 = _interopRequireDefault(_basicsJade);

	var _basicsController = __webpack_require__(126);

	var _basicsController2 = _interopRequireDefault(_basicsController);

	exports['default'] = {
	  name: 'basics',
	  url: '',
	  template: _basicsJade2['default'],
	  controller: _basicsController2['default'],
	  controllerAs: 'basics',
	  ncyBreadcrumb: {
	    label: '{{unit.unit.title}} — Grunddaten'
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports='<form novalidate name="basics.form" class="form-horizontal"><formly-form model="unit.unit" fields="basics.fields" form="basics.form"></formly-form><div ng-if="unit.patches.length===0" role="alert" class="alert alert-success">alles hochgeladen</div><div ng-if="unit.patches.length&gt;0" role="alert" class="alert alert-info">lade \xC4nderungen hoch</div><div ng-if="unit.error" role="alert" class="alert alert-danger"><button type="button" ng-click="unit.unit=unit.recover">r\xFCckg\xE4ngig</button><span>Fehler beim Hochladen</span></div></form>'

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	/*@ngInject*/
	var BasicsController = function BasicsController($scope, unit) {
	  var _this = this;

	  _classCallCheck(this, BasicsController);

	  var modelOptions = {
	    updateOn: 'default blur',
	    debounce: {
	      'default': 500,
	      blur: 0
	    }
	  };
	  this.fields = [{
	    key: '_id',
	    type: 'horizontalStatic',
	    templateOptions: {
	      label: 'ID'
	    }
	  }, {
	    key: 'title',
	    type: 'horizontalInput',
	    modelOptions: modelOptions,
	    templateOptions: {
	      type: 'text',
	      label: 'Titel',
	      placeholder: 'Titel des Kapitels',
	      required: true
	    }
	  }, {
	    key: 'subtitle',
	    type: 'horizontalInput',
	    modelOptions: modelOptions,
	    templateOptions: {
	      type: 'text',
	      label: 'Untertitel',
	      placeholder: 'Untertitel des Kapitels'
	    }
	  }, {
	    key: 'requires',
	    type: 'horizontalMultiCheckbox',
	    modelOptions: modelOptions,
	    templateOptions: {
	      label: 'Voraussetzungen',
	      valueProp: '_id',
	      labelProp: 'title'
	    }
	  }, {
	    key: 'description',
	    type: 'horizontalMarkdownArea',
	    modelOptions: modelOptions,
	    templateOptions: {
	      label: 'Beschreibung',
	      required: true,
	      placeholder: 'Beschreibungstext'
	    }
	  }];
	  $scope.$watchCollection('units.units', function (val) {
	    _this.fields[3].templateOptions.options = _lodash2['default'].reject(val, { _id: unit._id });
	  }, true);
	};
	BasicsController.$inject = ["$scope", "unit"];

	exports['default'] = BasicsController;
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _topicsJade = __webpack_require__(128);

	var _topicsJade2 = _interopRequireDefault(_topicsJade);

	var _topicsController = __webpack_require__(129);

	var _topicsController2 = _interopRequireDefault(_topicsController);

	var _new = __webpack_require__(130);

	var _new2 = _interopRequireDefault(_new);

	var _topic = __webpack_require__(133);

	var _topic2 = _interopRequireDefault(_topic);

	exports['default'] = {
	  name: 'topics',
	  url: '/topics',
	  template: _topicsJade2['default'],
	  controller: _topicsController2['default'],
	  controllerAs: 'topics',
	  abstract: true,
	  resolve: {
	    topics: /*@ngInject*/["Restangular", "$stateParams", function topics(Restangular, $stateParams) {
	      var query = { projections: 'topics.title topics._id' };
	      return Restangular.one('units', $stateParams.unit).all('topics').getList(query);
	    }]
	  },
	  children: [_new2['default'], _topic2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports='<button type="button" ng-click="topics.collapse=!topics.collapse" ng-bind="topics.collapse ? \'Subkapitel\xFCbersicht einblenden\' : \'Subkapitel\xFCbersicht ausblenden\'" class="btn btn-default"></button><div collapse="topics.collapse"><form novalidate name="topics.form" class="form-horizontal"><div class="form-group"><label for="selectTopic" class="col-xs-2 control-label">Subkapitel</label><div class="col-xs-10"><select id="selectTopic" ng-options="t.title for t in topics.topics track by t._id" ng-model="topics.selected" ng-change="topics.select()" class="form-control"><option value="">Neues Subkapitel</option></select></div></div><div ng-if="topics.selected" class="form-group"><div class="col-xs-offset-2 col-xs-10"><div class="button-group"><button type="button" ng-click="topics.moveUp()">hoch</button><button type="button" ng-click="topics.moveDown()">runter</button><button type="button" ng-click="topics.remove()">l\xF6schen</button></div></div></div></form></div><ui-view></ui-view>'

/***/ },
/* 129 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var TopicsCtrl = (function () {
	  function TopicsCtrl(topics, $state, lodash) {
	    _classCallCheck(this, TopicsCtrl);

	    this.topics = topics;
	    this.$state = $state;
	    this.lodash = lodash;
	    this.selected = null;
	    this.collapse = false;
	    this.init();
	  }
	  TopicsCtrl.$inject = ["topics", "$state", "lodash"];

	  _createClass(TopicsCtrl, [{
	    key: 'init',
	    value: function init() {
	      if (this.$state.params.topic) {
	        this.selected = this.lodash.find(this.topics, { _id: this.$state.params.topic });
	      }
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      if (this.selected) {
	        this.$state.go('main.author.units.unit.topics.topic.basics', { topic: this.selected._id });
	      } else {
	        this.$state.go('main.author.units.topics.topic.new');
	      }
	    }
	  }, {
	    key: 'save',
	    value: function save(newTopic) {
	      var _this = this;

	      return this.topics.post(newTopic).then(function (topic) {
	        _this.topics.push(topic);
	        _this.selected = topic;
	        _this.select();
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var _this2 = this;

	      if (this.selected) {
	        return this.selected.remove().then(function () {
	          _this2.lodash.remove(_this2.topics, { _id: _this2.selected._id });
	          _this2.selected = null;
	          _this2.select();
	        }, function (e) {
	          _this2.error = e;
	        });
	      }
	    }
	  }, {
	    key: 'moveUp',
	    value: function moveUp() {
	      var _this3 = this;

	      return this.topics.patch({
	        action: 'move',
	        'dir': 'up',
	        topic: this.selected._id
	      }).then(function (topics) {
	        _this3.topics = topics;
	      }, function (e) {
	        _this3.error = e;
	      });
	    }
	  }, {
	    key: 'moveDown',
	    value: function moveDown() {
	      var _this4 = this;

	      return this.topics.patch({
	        action: 'move',
	        'dir': 'down',
	        topic: this.selected._id
	      }).then(function (topics) {
	        _this4.topics = topics;
	      }, function (e) {
	        _this4.error = e;
	      });
	    }
	  }]);

	  return TopicsCtrl;
	})();

	exports['default'] = TopicsCtrl;
	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _newJade = __webpack_require__(131);

	var _newJade2 = _interopRequireDefault(_newJade);

	var _newController = __webpack_require__(132);

	var _newController2 = _interopRequireDefault(_newController);

	exports['default'] = {
	  name: 'new',
	  url: '/new',
	  template: _newJade2['default'],
	  controller: _newController2['default'],
	  controllerAs: 'new'
	};
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports='<h3>Neues Subkapitel anlegen</h3><form novalidate name="new.form" ng-submit="topics.save(new.topic)" class="form-horizontal"><formly-form model="new.topic" fields="new.fields" form="new.form"><div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" value="Erstellen" ng-class="{\'btn-primary\': new.form.$valid,\'btn-danger\': new.form.$invalid&&new.form.$touched}" ng-disabled="new.form.$invalid" class="btn"></div></div></formly-form></form>'

/***/ },
/* 132 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var NewController = function NewController() {
	  _classCallCheck(this, NewController);

	  this.topic = {};
	  this.fields = [{
	    key: 'title',
	    type: 'horizontalInput',
	    templateOptions: {
	      type: 'text',
	      label: 'titel',
	      required: true,
	      placeholder: 'Titel des Subkapitels'
	    }
	  }, {
	    key: 'subtitle',
	    type: 'horizontalInput',
	    templateOptions: {
	      type: 'text',
	      label: 'Untertitel',
	      placeholder: 'Untertitel des Subkapitels'
	    }
	  }, {
	    key: 'body',
	    type: 'horizontalMarkdownArea',
	    templateOptions: {
	      label: 'Text',
	      required: true,
	      placeholder: 'hier Text des Subkapitels eingeben'
	    }
	  }];
	};

	exports['default'] = NewController;
	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _topicJade = __webpack_require__(134);

	var _topicJade2 = _interopRequireDefault(_topicJade);

	var _topicControllerJs = __webpack_require__(135);

	var _topicControllerJs2 = _interopRequireDefault(_topicControllerJs);

	var _basics = __webpack_require__(136);

	var _basics2 = _interopRequireDefault(_basics);

	var _examples = __webpack_require__(138);

	var _examples2 = _interopRequireDefault(_examples);

	var _extras = __webpack_require__(140);

	var _extras2 = _interopRequireDefault(_extras);

	exports['default'] = {
	  name: 'topic',
	  url: '/:topic',
	  template: _topicJade2['default'],
	  controller: _topicControllerJs2['default'],
	  controllerAs: 'topic',
	  abstract: true,
	  resolve: {
	    topic: /*@ngInject*/["Restangular", "$stateParams", function topic(Restangular, $stateParams) {
	      return Restangular.one('units', $stateParams.unit).one('topics', $stateParams.topic).get();
	    }]
	  },
	  children: [_basics2['default'], _examples2['default'], _extras2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports='<h3 ng-bind="topic.topic.title"></h3><ul class="nav nav-tabs"><li ui-sref-active="active"><a ui-sref=".basics">Grunddaten</a></li><li ui-sref-active="active"><a ui-sref=".examples">Beispiele</a></li><li ui-sref-active="active"><a ui-sref=".extras">Extras</a></li></ul><ui-view></ui-view>'

/***/ },
/* 135 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var TopicCtrl = function TopicCtrl($scope, jsonpatch, topic) {
	  var _this = this;

	  _classCallCheck(this, TopicCtrl);

	  var modelOptions = {
	    updateOn: 'default blur',
	    debounce: {
	      'default': 500,
	      blur: 0
	    }
	  };
	  this.topic = topic.plain();
	  this.patches = [];
	  this.error = null;
	  this.topicFields = [{
	    key: '_id',
	    type: 'horizontalStatic',
	    templateOptions: {
	      label: 'ID'
	    }
	  }, {
	    key: 'title',
	    type: 'horizontalInput',
	    templateOptions: {
	      type: 'text',
	      required: true,
	      label: 'Titel',
	      placeholder: 'Titel des Subkapitels'
	    },
	    modelOptions: modelOptions
	  }, {
	    key: 'subtitle',
	    type: 'horizontalInput',
	    templateOptions: {
	      type: 'text',
	      label: 'Untertitel',
	      placeholder: 'Untertitel des Subkapitels'
	    },
	    modelOptions: modelOptions
	  }, {
	    key: 'body',
	    type: 'horizontalMarkdownArea',
	    templateOptions: {
	      required: true,
	      label: 'Text',
	      placeholder: 'Hier Text des Subkapitels eingeben'
	    },
	    modelOptions: modelOptions
	  }];
	  $scope.$watch('topic.topic', function (val, oldVal) {
	    _this.patches = jsonpatch.compare(oldVal, val);
	    if (_this.patches.length > 0) {
	      return topic.patch(_this.patches).then(function () {
	        _this.patches = [];
	        _this.error = null;
	      }, function (e) {
	        _this.error = e;
	        _this.recover = oldVal;
	      });
	    }
	  }, true);
	};
	TopicCtrl.$inject = ["$scope", "jsonpatch", "topic"];

	exports['default'] = TopicCtrl;
	module.exports = exports['default'];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _basicsJade = __webpack_require__(137);

	var _basicsJade2 = _interopRequireDefault(_basicsJade);

	exports['default'] = {
	  name: 'basics',
	  url: '/basics',
	  template: _basicsJade2['default'],
	  ncyBreadcrumb: { label: '{{topic.topic.title}} — Grunddaten' }
	};
	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports='<form novalidate name="basicsForm" class="form-horizontal"><formly-form model="topic.topic" fields="topic.topicFields" form="topic.topicForm"></formly-form></form><div ng-if="topic.patches.length===0" role="alert" class="alert alert-success">alles hochgeladen</div><div ng-if="topic.patches.length&gt;0" role="alert" class="alert alert-info">lade \xC4nderungen hoch</div><div ng-if="topic.error" role="alert" class="alert alert-danger"><button type="button" ng-click="topic.topic=topic.recover">r\xFCckg\xE4ngig</button><span>Fehler beim Hochladen</span></div>'

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _examplesJade = __webpack_require__(139);

	var _examplesJade2 = _interopRequireDefault(_examplesJade);

	exports['default'] = {
	  name: 'examples',
	  url: '/examples',
	  template: _examplesJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports='<p>Beispiele</p>'

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _extrasJade = __webpack_require__(141);

	var _extrasJade2 = _interopRequireDefault(_extrasJade);

	exports['default'] = {
	  name: 'extras',
	  url: '/extras',
	  template: _extrasJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports='<p>Extras</p>'

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _testsJade = __webpack_require__(143);

	var _testsJade2 = _interopRequireDefault(_testsJade);

	var _testsControllerJs = __webpack_require__(144);

	var _testsControllerJs2 = _interopRequireDefault(_testsControllerJs);

	exports['default'] = {
	  name: 'tests',
	  url: '/tests',
	  template: _testsJade2['default'],
	  controller: _testsControllerJs2['default'],
	  controllerAs: 'tests',
	  ncyBreadcrumb: {
	    label: '{{unit.unit.title}} — Testaufgaben'
	  },
	  resolve: {
	    ngTagsInput: /*@ngInject*/["$q", "$ocLazyLoad", function ngTagsInput($q, $ocLazyLoad) {
	      return $q(function (resolve, reject) {
	        __webpack_require__.e/* nsure */(2, function () {
	          try {
	            __webpack_require__(145);
	            __webpack_require__(147);
	          } catch (e) {
	            return reject('ngTagsInput not loaded');
	          }
	          return resolve($ocLazyLoad.load({ name: 'ngTagsInput' }));
	        });
	      });
	    }],
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
	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports='<h3>Testaufgaben</h3><p ng-if="tests.tests.length===0">Noch keine Testaufgaben hinzugef\xFCgt</p><form novalidate name="tests.testsForm" ng-if="tests.tests.length&gt;0" class="form-horizontal"><div class="form-group"><label for="selectTest" class="col-xs-2 control-label">Aufgabe</label><div class="col-xs-10"><select id="selectTest" name="selectTest" ng-model="tests.selected" ng-options="v.text for v in tests.tests" class="form-control"><option value="">Neue Aufgabe</option></select></div></div></form><form novalidate ng-if="tests.selected" ng-submit="tests.update()" class="form-horizontal"><formly-form model="tests.selected" fields="tests.fields" form="tests.testForm"><div class="form-group"><div class="col-xs-offset-2 col-xs-10"><input type="button" value="L\xF6schen" ng-click="tests.remove()" class="btn btn-danger"><input type="submit" value="Aktualisieren" ng-class="{\'btn-primary\': tests.testForm.$valid, \'btn-danger\': tests.testForm.$invalid}" class="btn"></div></div></formly-form></form><form novalidate name="tests.newTestForm" ng-submit="tests.create()" ng-if="!tests.selected" class="form-horizontal"><formly-form model="tests.newTest" fields="tests.newFields" form="tests.newTestForm"><div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" value="Erstellen" ng-class="{\'btn-primary\': tests.newTestForm.$valid,\'btn-danger\': tests.newTestForm.$invalid&&tests.newTestForm.$touched}" ng-disabled="tests.newTestForm.$invalid" class="btn"></div></div></formly-form></form>'

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	/*@ngInject*/
	var TestsCtrl = (function () {
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
	            placeholder: 'Lösung',
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
	            placeholder: '*lob*'
	          }
	        }]
	      }
	    }, {
	      key: 'tags',
	      template: '<tags-input ng-model="model[options.key]"></tags-input>',
	      wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError'],
	      templateOptions: {
	        label: 'Tags'
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
	        _lodash2['default'].merge(_this2.selected, data);
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
	        _lodash2['default'].remove(_this3.tests, { _id: _this3.selected._id });
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
	})();

	exports['default'] = TestsCtrl;
	module.exports = exports['default'];

/***/ },
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _vegaJade = __webpack_require__(150);

	var _vegaJade2 = _interopRequireDefault(_vegaJade);

	var _vegaController = __webpack_require__(151);

	var _vegaController2 = _interopRequireDefault(_vegaController);

	exports['default'] = {
	  name: 'vega',
	  url: '/vega',
	  template: _vegaJade2['default'],
	  controller: _vegaController2['default'],
	  controllerAs: 'vega',
	  resolve: {
	    specs: /*@ngInject*/["Restangular", function specs(Restangular) {
	      var query = {
	        projections: 'name'
	      };
	      return Restangular.all('vega').getList(query);
	    }]
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports='<h3>Vega</h3><div class="row"><div class="col-xs-12"><form novalidate name="vega.specsForm" role="form" class="form-horizontal"><div class="form-group"><label for="selectSpec" class="col-xs-2 control-label">Vega-Spec</label><div class="col-xs-10"><select id="selectSpec" ng-options="spec._id as spec.name for spec in vega.specs" ng-model="vega.selected" ng-change="vega.getSpec()" class="form-control"><option value="">Neue Spec</option></select></div></div></form></div></div><div class="row"><div class="col-sm-6"><form novalidate name="vega.form" ng-submit="vega.save()" class="form-horizontal"><formly-form model="vega.model" fields="vega.fields" form="vega.form" options="vega.formOptions"><div class="form-group"><div class="col-xs-offset-2 col-xs-10"><input type="button" value="L\xF6schen" ng-click="vega.remove()" ng-if="vega.selected" class="btn btn-danger"><input type="submit" value="{{vega.selected ? \'Aktualisieren\' : \'Erstellen\'}}" ng-class="{\'btn-primary\': vega.form.$valid, \'btn-danger\': vega.form.$invalid}" class="btn"></div></div></formly-form></form></div><div class="col-sm-6"><ng-vega vega-spec="vega.model.spec" vega-renderer="vega.formOptions.formState.renderer"></ng-vega></div></div>'

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	/*@ngInject*/
	var VegaCtrl = (function () {
	  function VegaCtrl(specs) {
	    _classCallCheck(this, VegaCtrl);

	    this.specs = specs;
	    this.model = {
	      source: {
	        method: 'POST',
	        params: {}
	      }
	    };
	    this.formOptions = {
	      formState: {
	        renderer: 'svg'
	      }
	    };
	    var modelOptions = {
	      updateOn: 'default blur',
	      debounce: {
	        'default': 300,
	        blur: 0
	      }
	    };
	    this.fields = [{
	      key: '_id',
	      type: 'horizontalStatic',
	      templateOptions: {
	        label: 'ID'
	      },
	      hideExpression: '!model[options.key]'
	    }, {
	      key: 'name',
	      type: 'horizontalInput',
	      templateOptions: {
	        label: 'Name',
	        type: 'text',
	        required: true,
	        placeholder: 'Bezeichnung für diese Grafik'
	      }
	    }, {
	      key: 'source',
	      fieldGroup: [{
	        key: 'url',
	        type: 'horizontalInput',
	        templateOptions: {
	          label: 'Opencpu-URL',
	          type: 'url',
	          required: true,
	          placeholder: 'library/stats/r/mean'
	        },
	        modelOptions: modelOptions,
	        ngModelAttrs: {
	          'opencpu': {
	            value: 'opencpu'
	          }
	        }
	      }, {
	        key: 'method',
	        type: 'horizontalRadioInline',
	        templateOptions: {
	          label: 'Methode',
	          options: [{
	            name: 'get',
	            value: 'GET'
	          }, {
	            name: 'post',
	            value: 'POST'
	          }]
	        },
	        modelOptions: modelOptions
	      }, {
	        key: 'params',
	        type: 'horizontalTextarea',
	        templateOptions: {
	          label: 'Parameter',
	          json: true
	        },
	        modelOptions: modelOptions
	      }]
	    }, {
	      key: 'spec',
	      type: 'horizontalTextarea',
	      templateOptions: {
	        label: 'Spec',
	        required: true,
	        json: true
	      },
	      modelOptions: modelOptions
	    }, {
	      key: 'fields',
	      type: 'horizontalTextarea',
	      templateOptions: {
	        label: 'Steuerelemente',
	        required: true,
	        json: true
	      },
	      modelOptions: modelOptions
	    }, {
	      key: 'renderer',
	      model: this.formOptions.formState,
	      type: 'horizontalRadioInline',
	      templateOptions: {
	        label: 'Renderer',
	        options: [{
	          name: 'Canvas',
	          value: 'canvas'
	        }, {
	          name: 'SVG',
	          value: 'svg'
	        }]
	      }
	    }];
	  }
	  VegaCtrl.$inject = ["specs"];

	  _createClass(VegaCtrl, [{
	    key: 'save',
	    value: function save() {
	      var _this = this;

	      if (!this.selected) {
	        this.specs.post(this.model).then(function (data) {
	          _this.model = data;
	          _this.specs.push(data);
	          _this.selected = data._id;
	        }, function (e) {
	          _this.error = e;
	        });
	      } else {
	        this.model.put().then(function (data) {
	          _this.model = data;
	        }, function (e) {
	          _this.error = e;
	        });
	      }
	    }
	  }, {
	    key: 'getSpec',
	    value: function getSpec() {
	      var _this2 = this;

	      if (!this.selected) {
	        this.model = {
	          spec: {}
	        };
	      } else {
	        this.specs.get(this.selected).then(function (data) {
	          _this2.model = data;
	        }, function (e) {
	          _this2.error = e;
	        });
	      }
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var _this3 = this;

	      if (this.selected) {
	        this.model.remove().then(function () {
	          _lodash2['default'].remove(_this3.specs, { _id: _this3.selected });
	          _this3.selected = '';
	          _this3.model = {};
	        }, function (e) {
	          _this3.error = e;
	        });
	      }
	    }
	  }]);

	  return VegaCtrl;
	})();

	exports['default'] = VegaCtrl;
	module.exports = exports['default'];

/***/ },
/* 152 */,
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// wrappers
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var wrappers = [{
	  name: 'horizontalBootstrapLabel',
	  template: __webpack_require__(154)
	}, {
	  name: 'bootstrapHasError',
	  template: __webpack_require__(155),
	  overwriteOk: true
	}];

	exports.wrappers = wrappers;
	// types
	var types = [{
	  name: 'horizontalInput',
	  'extends': 'input',
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
	}, {
	  name: 'horizontalStatic',
	  template: '<p class="form-control-static" ng-bind="model[options.key]"></p>',
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError'],
	  noFormControl: true
	}, {
	  name: 'horizontalCheckbox',
	  'extends': 'checkbox',
	  template: __webpack_require__(156),
	  wrapper: 'bootstrapHasError'
	}, {
	  name: 'horizontalMultiCheckbox',
	  'extends': 'multiCheckbox',
	  template: __webpack_require__(157),
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
	}, {
	  name: 'horizontalMultiCheckboxInline',
	  'extends': 'horizontalMultiCheckbox',
	  template: __webpack_require__(158)
	}, {
	  name: 'horizontalTextarea',
	  'extends': 'textarea',
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
	  'extends': 'horizontalTextarea',
	  template: __webpack_require__(159)
	}, {
	  name: 'horizontalRadio',
	  'extends': 'radio',
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
	}, {
	  name: 'horizontalRadioInline',
	  'extends': 'horizontalRadio',
	  template: __webpack_require__(160)
	}, {
	  name: 'repeatSection',
	  template: __webpack_require__(161),
	  controller: __webpack_require__(162)
	}, {
	  name: 'horizontalTypeahead',
	  'extends': 'horizontalInput',
	  template: __webpack_require__(163),
	  defaultOptions: function defaultOptions(options) {
	    var _ngModelAttrs;

	    var typeahead = options.templateOptions.typeahead || 'option[to.valueProp || \'value\'] as option[to.labelProp || \'name\'] for option in to.options | filter : $viewValue | limitTo: 8';
	    return {
	      ngModelAttrs: (_ngModelAttrs = {}, _defineProperty(_ngModelAttrs, typeahead, {
	        value: 'typeahead'
	      }), _defineProperty(_ngModelAttrs, 'options.templateOptions.tws', {
	        value: 'typeahead-wait-ms'
	      }), _defineProperty(_ngModelAttrs, 'options.templateOptions.tml', {
	        value: 'typeahead-min-length'
	      }), _ngModelAttrs)
	    };
	  }
	}, {
	  name: 'horizontalRating',
	  template: __webpack_require__(164),
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
	exports.types = types;

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports='<label for="{{::id}}" ng-bind="to.required ? to.label+\' *\' : to.label" class="col-xs-2 control-label"></label><div class="col-xs-10"><formly-transclude></formly-transclude><span ng-messages="fc.$error" ng-if="showError" class="help-block"><span ng-repeat="(name, message) in options.validation.messages" role="alert" ng-message-exp="::name">{{::message(fc.$viewValue,fc.$modelValue,this)}}</span></span></div>'

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports='<div ng-class="{\'has-error\': showError, \'has-success\': fc.$valid}" class="form-group"><formly-transclude></formly-transclude></div>'

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports='<div class="col-xs-offset-2 col-xs-10"><div class="checkbox"><label><input type="checkbox" ng-model="model[options.key]"> {{to.label}}</label></div></div>'

/***/ },
/* 157 */
/***/ function(module, exports) {

	module.exports='<div ng-repeat="(key, option) in to.options" class="checkbox"><label><input type="checkbox" id="{{id + \'_\'+ $index}}" ng-model="multiCheckbox.checked[$index]" ng-change="multiCheckbox.change()" name="{{options.key}}" ng-value="option[to.valueProp||\'value\']"> {{option[to.labelProp || \'name\']}}</label></div>'

/***/ },
/* 158 */
/***/ function(module, exports) {

	module.exports='<label ng-repeat="(key, option) in to.options" class="checkbox-inline"><input type="checkbox" id="{{id + \'_\'+ $index}}" ng-model="multiCheckbox.checked[$index]" ng-change="multiCheckbox.change()" name="{{options.key}}" ng-value="option[to.valueProp||\'value\']"> {{option[to.labelProp || \'name\']}}</label>'

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports='<div class="row"><div class="col-xs-12"><ul class="nav nav-tabs"><li ng-class="{\'active\': \'both\'}[view]"><button type="button" ng-click="view=\'markdown\'" ng-init="view=\'markdown\'" class="btn btn-default">Markdown</button></li><li ng-class="{\'active\': \'both\'}[view]"><button type="button" ng-click="view=\'preview\'" class="btn btn-default">Vorschau</button></li><li ng-class="{\'active\': \'both\'}[view]"><button type="button" ng-click="view=\'both\'" class="btn btn-default">nebeneinander</button></li></ul></div></div><div ng-switch="view" class="row"><div ng-switch-when="markdown" class="col-xs-12"><textarea ng-model="model[options.key]" class="form-control"></textarea></div><div ng-switch-when="preview" markdown="model[options.key]" math-jax class="col-xs-12"></div><div ng-switch-when="both" class="col-xs-6"><textarea ng-model="model[options.key]" class="form-control"></textarea></div><div ng-switch-when="both" markdown="model[options.key]" math-jax class="col-xs-6"></div></div>'

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports='<label ng-repeat="option in to.options" class="radio-inline"><input type="radio" id="{{id+\'_\'+$index}}" name="{{options.key}}" ng-value="option[to.valueProp||\'value\']" ng-model="model[options.key]"><span ng-if="option.icon" ng-class="\'fa-\'+option.icon" class="fa"></span> {{option[to.labelProp||\'name\']}}</label>'

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports='<h4 ng-bind="to.label"></h4><div ng-repeat="element in model[options.key]" ng-init="fields = copyFields(to.fields)" class="repeatsection"><formly-form fields="fields" model="element" bind-name="\'formly_ng_repeat\' + index + $parent.$index"></formly-form><div class="form-group"><div class="col-xs-offset-2 col-xs-10"><button ng-click="model[options.key].splice($index, 1)" class="btn btn-sm btn-danger">L\xF6schen</button></div></div><hr></div><div class="form-group"><div class="col-xs-offset-2 col-xs-10"><button type="button" ng-click="addNew()" ng-bind="to.btnText" class="btn btn-primary"></button></div></div>'

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	exports['default'] = /*@ngInject*/["$scope", function ($scope) {
	  function copyFields(fields) {
	    return _angular2['default'].copy(fields);
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
	}];

	module.exports = exports['default'];

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports='<input type="text" ng-model="model[options.key]">'

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports='<label ng-bind="to.label" class="col-xs-8 control-label"></label><div class="col-xs-4"><rating ng-model="model[options.key]"></rating></div>'

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _userInterceptor = __webpack_require__(166);

	var _userInterceptor2 = _interopRequireDefault(_userInterceptor);

	var _userModel = __webpack_require__(167);

	var _userModel2 = _interopRequireDefault(_userModel);

	var _userCheckValidator = __webpack_require__(168);

	var _userCheckValidator2 = _interopRequireDefault(_userCheckValidator);

	exports['default'] = {
	  interceptor: _userInterceptor2['default'],
	  model: _userModel2['default'],
	  validator: _userCheckValidator2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 166 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = userInterceptor;
	/*@ngInject*/
	function userInterceptor($localStorage) {
	  function request(config) {
	    if (config.headers.authorization) {
	      return config;
	    }
	    if ($localStorage.token) {
	      config.headers.authorization = 'bearer ' + $localStorage.token;
	    }
	    return config;
	  }
	  return { request: request };
	}
	userInterceptor.$inject = ["$localStorage"];

	module.exports = exports['default'];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _ = __webpack_require__(2);
	/*@ngInject*/
	var user = (function () {
	  function user(Restangular, $localStorage, $window, $q) {
	    _classCallCheck(this, user);

	    this.Users = Restangular.all('users');
	    this.Token = Restangular.one('tokens', 'new');
	    this.$storage = $localStorage;
	    this.$q = $q;
	    this.$window = $window;
	    this.data = null;
	    this.init();
	  }
	  user.$inject = ["Restangular", "$localStorage", "$window", "$q"];

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

	      return this.$q(function (resolve, reject) {
	        if (!_this.authenticated) {
	          _this.inauthenticate();
	          return reject('inauthenticated');
	        }
	        return resolve(_this.Users.get(_this.$storage._id));
	      }).then(function (data) {
	        _this.data = data;
	        return data;
	      });
	    }
	  }, {
	    key: 'authenticate',
	    value: function authenticate(form, init) {
	      var _this2 = this;

	      return this.$q(function (resolve, reject) {
	        var name = form.email;
	        var pass = form.password;
	        if (!name || !pass) {
	          return reject('missing credentials');
	        }
	        var str = _this2.$window.btoa(name + ':' + pass);
	        var authorization = 'basic ' + str;
	        return resolve(_this2.Token.get(null, { authorization: authorization }));
	      }).then(function (data) {
	        _this2.authenticated = data;
	        if (init) {
	          return _this2.init();
	        }
	        return data;
	      });
	    }
	  }, {
	    key: 'inauthenticate',
	    value: function inauthenticate() {
	      this.$storage.$reset();
	      this.data = null;
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

	      var included = _.includes(this.data.done, id);
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
	      return _.some(this.data.done, { unit: unit });
	    }
	  }, {
	    key: 'requiresComplete',
	    value: function requiresComplete(requires) {
	      if (!this.authenticated) {
	        return false;
	      }
	      return _.every(requires, function (val) {
	        return _.some(this.data.done, { unit: val });
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
	    key: 'authenticated',
	    get: function get() {
	      return this.$storage._id && this.$storage.token ? true : false;
	    },
	    set: function set(data) {
	      this.$storage.token = data.token;
	      this.$storage._id = data._id;
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
	  }]);

	  return user;
	})();

	exports['default'] = user;
	module.exports = exports['default'];

/***/ },
/* 168 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = userCheckValidator;
	/*@ngInject*/
	function userCheckValidator($q, user) {
	  function link(scope, el, attrs, c) {
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

	module.exports = exports['default'];

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _login2 = __webpack_require__(170);

	var _login3 = _interopRequireDefault(_login2);

	var _fsk2 = __webpack_require__(173);

	var _fsk3 = _interopRequireDefault(_fsk2);

	var _akzeptanz2 = __webpack_require__(176);

	var _akzeptanz3 = _interopRequireDefault(_akzeptanz2);

	/*@ngInject*/
	var modals = (function () {
	  function modals($modal) {
	    _classCallCheck(this, modals);

	    this.$modal = $modal;
	  }
	  modals.$inject = ["$modal"];

	  _createClass(modals, [{
	    key: 'login',
	    value: function login() {
	      return this.$modal.open(_login3['default']);
	    }
	  }, {
	    key: 'fsk',
	    value: function fsk() {
	      return this.$modal.open(_fsk3['default']);
	    }
	  }, {
	    key: 'akzeptanz',
	    value: function akzeptanz() {
	      return this.$modal.open(_akzeptanz3['default']);
	    }
	  }]);

	  return modals;
	})();

	exports['default'] = modals;
	module.exports = exports['default'];

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _loginJade = __webpack_require__(171);

	var _loginJade2 = _interopRequireDefault(_loginJade);

	var _loginControllerJs = __webpack_require__(172);

	var _loginControllerJs2 = _interopRequireDefault(_loginControllerJs);

	exports['default'] = {
	  template: _loginJade2['default'],
	  controller: _loginControllerJs2['default'],
	  controllerAs: 'login',
	  animation: false
	};
	module.exports = exports['default'];

/***/ },
/* 171 */
/***/ function(module, exports) {

	module.exports='<div class="modal-header"><h3>Anmelden</h3></div><div class="modal-body"><form role="form" novalidate name="login.loginForm" class="form-horizontal"><formly-form model="login.data" fields="login.loginFields" form="login.loginForm"></formly-form></form></div><div class="modal-footer"><input type="button" value="abbrechen" data-ng-click="login.cancel()" class="btn btn-default"><input type="button" ng-click="login.login()" ng-class="{\'btn-primary\': login.loginForm.$valid, \'btn-danger\': login.loginForm.$invalid}" value="anmelden" ng-disabled="login.loginForm.$invalid" class="btn"></div>'

/***/ },
/* 172 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var LoginCtrl = (function () {
	  function LoginCtrl(user, $modalInstance) {
	    _classCallCheck(this, LoginCtrl);

	    this.user = user;
	    this.$modalInstance = $modalInstance;
	    this.data = {};
	    this.loginFields = [{
	      key: 'email',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'email',
	        label: 'E-Mail',
	        required: true,
	        placeholder: 'name@provider.com',
	        maxlength: 20
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
	        debounce: { 'default': 500, blur: 0 }
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
	  LoginCtrl.$inject = ["user", "$modalInstance"];

	  _createClass(LoginCtrl, [{
	    key: 'login',
	    value: function login() {
	      var _this = this;

	      return this.user.authenticate(this.data, true).then(function (data) {
	        return _this.$modalInstance.close(data);
	      }, function (e) {
	        _this.message = e.data;
	        return e;
	      });
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      this.$modalInstance.dismiss('cancel');
	    }
	  }]);

	  return LoginCtrl;
	})();

	exports['default'] = LoginCtrl;
	module.exports = exports['default'];

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fskJade = __webpack_require__(174);

	var _fskJade2 = _interopRequireDefault(_fskJade);

	var _fskControllerJs = __webpack_require__(175);

	var _fskControllerJs2 = _interopRequireDefault(_fskControllerJs);

	exports['default'] = {
	  template: _fskJade2['default'],
	  controller: _fskControllerJs2['default'],
	  controllerAs: 'fsk',
	  size: 'lg'
	};
	module.exports = exports['default'];

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports='<div class="modal-header"><h3>Selbsteinsch\xE4tzung deiner Statistikkenntnisse</h3></div><div class="modal-body"><form name="sesskoForm" novalidate data-ng-if="fsk.user.data.fsk.length===0"><div class="form-group"><p><strong>Ich bin f\xFCr Statistik \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="1" data-ng-model="fsk.sessko[0]"> nicht begabt</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'2\' data-ng-model="fsk.sessko[0]"> 2</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'3\' data-ng-model="fsk.sessko[0]"> 3</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'4\' data-ng-model="fsk.sessko[0]"> 4</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'5\' data-ng-model="fsk.sessko[0]"> 5</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="6" data-ng-model="fsk.sessko[0]"> sehr begabt</label></div><div class="form-group"><p><strong>Neues zu lernen in Statistik, f\xE4llt mir \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="1" data-ng-model="fsk.sessko[1]"> schwer</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'2\' data-ng-model="fsk.sessko[1]"> 2</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'3\' data-ng-model="fsk.sessko[1]"> 3</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'4\' data-ng-model="fsk.sessko[1]"> 4</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'5\' data-ng-model="fsk.sessko[1]"> 5</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="6" data-ng-model="fsk.sessko[1]"> leicht</label></div><div class="form-group"><p><strong>Ich bin in Statistik \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="1" data-ng-model="fsk.sessko[2]"> nicht intelligent</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'2\' data-ng-model="fsk.sessko[2]"> 2</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'3\' data-ng-model="fsk.sessko[2]"> 3</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'4\' data-ng-model="fsk.sessko[2]"> 4</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'5\' data-ng-model="fsk.sessko[2]"> 5</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="6" data-ng-model="fsk.sessko[2]"> sehr inntelligent</label></div><div class="form-group"><p><strong>Meine statistikbezogenen F\xE4higkeiten sind \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="1" data-ng-model="fsk.sessko[3]"> niedrig</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'2\' data-ng-model="fsk.sessko[3]"> 2</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'3\' data-ng-model="fsk.sessko[3]"> 3</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'4\' data-ng-model="fsk.sessko[3]"> 4</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'5\' data-ng-model="fsk.sessko[3]"> 5</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="6" data-ng-model="fsk.sessko[3]"> hoch</label></div><div class="form-group"><p><strong>Statistische Aufgaben fallen mir \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="1" data-ng-model="fsk.sessko[4]"> schwer</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'2\' data-ng-model="fsk.sessko[4]"> 2</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'3\' data-ng-model="fsk.sessko[4]"> 3</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'4\' data-ng-model="fsk.sessko[4]"> 4</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'5\' data-ng-model="fsk.sessko[4]"> 5</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="6" data-ng-model="fsk.sessko[4]"> leicht</label></div></form><form novalidate name="sesskoForm2" data-ng-if="fsk.user.data.fsk.length&gt;0"><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs halte ich meine Begabung f\xFCr Statistik jetzt f\xFCr \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="1" data-ng-model="fsk.sessko[0]"> geringer als zuvor</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'2\' data-ng-model="fsk.sessko[0]"> 2</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'3\' data-ng-model="fsk.sessko[0]"> 3</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'4\' data-ng-model="fsk.sessko[0]"> 4</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'5\' data-ng-model="fsk.sessko[0]"> 5</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="6" data-ng-model="fsk.sessko[0]"> h\xF6her als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs f\xE4llt mir das Lernen von neuen statistischen Inhalten jetzt \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="1" data-ng-model="fsk.sessko[1]"> schwerer als zuvor</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'2\' data-ng-model="fsk.sessko[1]"> 2</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'3\' data-ng-model="fsk.sessko[1]"> 3</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'4\' data-ng-model="fsk.sessko[1]"> 4</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'5\' data-ng-model="fsk.sessko[1]"> 5</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="6" data-ng-model="fsk.sessko[1]"> leichter als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs komme ich mit den Anforderungen in Statistik \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="1" data-ng-model="fsk.sessko[2]"> schlechter zurecht als zuvor</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'2\' data-ng-model="fsk.sessko[2]"> 2</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'3\' data-ng-model="fsk.sessko[2]"> 3</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'4\' data-ng-model="fsk.sessko[2]"> 4</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'5\' data-ng-model="fsk.sessko[2]"> 5</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="6" data-ng-model="fsk.sessko[2]"> besser zurecht als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs bin ich jetzt \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="1" data-ng-model="fsk.sessko[3]"> schlechter in Statistik als zuvor</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'2\' data-ng-model="fsk.sessko[3]"> 2</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'3\' data-ng-model="fsk.sessko[3]"> 3</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'4\' data-ng-model="fsk.sessko[3]"> 4</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'5\' data-ng-model="fsk.sessko[3]"> 5</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="6" data-ng-model="fsk.sessko[3]"> besser in Statistik als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs fallen mir jetzt die Aufgaben in Statistik \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="1" data-ng-model="fsk.sessko[4]"> schwerer als zuvor</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'2\' data-ng-model="fsk.sessko[4]"> 2</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'3\' data-ng-model="fsk.sessko[4]"> 3</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'4\' data-ng-model="fsk.sessko[4]"> 4</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'5\' data-ng-model="fsk.sessko[4]"> 5</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="6" data-ng-model="fsk.sessko[4]"> leichter als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs halte ich meine statistikbezogenen F\xE4higkeiten f\xFCr \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value="1" data-ng-model="fsk.sessko[5]"> niedriger als zuvor</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'2\' data-ng-model="fsk.sessko[5]"> 2</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'3\' data-ng-model="fsk.sessko[5]"> 3</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'4\' data-ng-model="fsk.sessko[5]"> 4</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'5\' data-ng-model="fsk.sessko[5]"> 5</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value="6" data-ng-model="fsk.sessko[5]"> h\xF6her als zuvor</label></div></form></div><div class="modal-footer"><input type="button" data-ng-click="fsk.cancel()" value="Abbrechen" class="btn btn-default"><input type="button" data-ng-click="fsk.ok()" value="Abschicken" class="btn btn-primary"></div>'

/***/ },
/* 175 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var FskCtrl = (function () {
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
	})();

	exports['default'] = FskCtrl;
	module.exports = exports['default'];

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _akzeptanzJade = __webpack_require__(177);

	var _akzeptanzJade2 = _interopRequireDefault(_akzeptanzJade);

	var _akzeptanzControllerJs = __webpack_require__(178);

	var _akzeptanzControllerJs2 = _interopRequireDefault(_akzeptanzControllerJs);

	exports['default'] = {
	  template: _akzeptanzJade2['default'],
	  controller: _akzeptanzControllerJs2['default'],
	  controllerAs: 'akzeptanz',
	  animation: false,
	  resolve: {
	    summary: /*@ngInject*/["Restangular", "$stateParams", function summary(Restangular, $stateParams) {
	      return Restangular.one('units', $stateParams.unit).one('summaries', 'akzeptanz').get();
	    }]
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports='<div class="modal-header"><h3 class="modal-title">Kapitel bewerten</h3></div><div class="modal-body"><p>Stufe die folgenden drei Aussagen mittels der Sternchen ein (1 Stern: trifft nicht auf mich zu, 5 Sterne: trifft voll auf mich zu). Du kannst deine Wertungen beliebig oft \xE4ndern.</p><formly-form model="akzeptanz.summary" fields="akzeptanz.fields" form="akzeptanz.form" class="form-horizontal"></formly-form></div><div class="modal-footer"><button type="button" ng-click="akzeptanz.cancel()" class="btn btn-default">Abbrechen</button><button type="button" ng-click="akzeptanz.ok()" class="btn btn-primary">Kommentar abschicken</button></div>'

/***/ },
/* 178 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
	var akzeptanzCtrl = (function () {
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
	})();

	exports['default'] = akzeptanzCtrl;
	module.exports = exports['default'];

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _ngVega = __webpack_require__(180);

	var _ngVega2 = _interopRequireDefault(_ngVega);

	var _jsonDirective = __webpack_require__(182);

	var _jsonDirective2 = _interopRequireDefault(_jsonDirective);

	var _opencpuDirective = __webpack_require__(183);

	var _opencpuDirective2 = _interopRequireDefault(_opencpuDirective);

	var _graphGraph = __webpack_require__(184);

	var _graphGraph2 = _interopRequireDefault(_graphGraph);

	exports['default'] = _angular2['default'].module('plot', []).constant('opencpu', 'https://public.opencpu.org/ocpu/').directive('ngVega', _ngVega2['default']).directive('json', _jsonDirective2['default']).directive('opencpu', _opencpuDirective2['default']).directive('graph', _graphGraph2['default']).name;
	module.exports = exports['default'];

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = ngVegaDirective;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _vega = __webpack_require__(181);

	var _vega2 = _interopRequireDefault(_vega);

	/*@ngInject*/
	function ngVegaDirective() {
	  function link(scope, el) {
	    var view = undefined;
	    function parse(spec) {
	      if (spec) {
	        _vega2['default'].parse.spec(spec, function (chart) {
	          var obj = {
	            el: el[0],
	            renderer: scope.renderer || 'svg'
	          };
	          if (scope.data) {
	            obj.data = scope.data;
	          }
	          view = chart(obj).update();
	        });
	      }
	    }
	    parse(scope.spec);
	    var specClean = scope.$watch('spec', parse, true);
	    function updateData(data) {
	      if (data) {
	        if (view) {
	          view.data(data).update().render();
	        } else {
	          parse(scope.spec);
	        }
	      }
	    }
	    var dataClean = scope.$watch('data', updateData, true);
	    function updateRenderer(renderer) {
	      if (renderer) {
	        if (view) {
	          view.renderer(renderer).update();
	        } else {
	          parse(scope.spec);
	        }
	      }
	    }
	    var rendererClean = scope.$watch('renderer', updateRenderer);
	    scope.$on('$destroy', function () {
	      specClean();
	      dataClean();
	      rendererClean();
	    });
	  }
	  return {
	    restrict: 'E',
	    scope: {
	      data: '=vegaData',
	      spec: '=vegaSpec',
	      renderer: '=vegaRenderer'
	    },
	    link: link
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 181 */
/***/ function(module, exports) {

	module.exports = vg;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = jsonDirective;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	/*@ngInject*/
	function jsonDirective() {
	  function link(scope, el, attrs, ctrl) {
	    var lastValid = undefined;
	    function parse(val) {
	      if (!val || val.trim() === '') {
	        return undefined;
	      }
	      try {
	        lastValid = _angular2['default'].fromJson(val);
	        ctrl.$setValidity('json', true);
	      } catch (e) {
	        ctrl.$setValidity('json', false);
	      }
	      return lastValid;
	    }
	    function format(val) {
	      return _angular2['default'].toJson(val, true);
	    }
	    ctrl.$parsers.push(parse);
	    ctrl.$formatters.unshift(format);
	    el.bind('blur', function () {
	      el.val(format(ctrl.$modelValue));
	      ctrl.$setValidity('json', true);
	      scope.$apply();
	    });
	    var clean = scope.$watch(attrs.ngModel, function (val, oldVal) {
	      lastValid = lastValid || val;
	      if (val !== oldVal) {
	        ctrl.$setViewValue(format(val));
	        ctrl.$render();
	      }
	    }, true);
	    scope.$on('$destroy', clean);
	  }
	  return {
	    restrict: 'A',
	    require: 'ngModel',
	    link: link
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 183 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = opencpuDirective;
	/*@ngInject*/
	function opencpuDirective(opencpu) {
	  function link(scope, el, attrs, ctrl) {
	    var lastValid = undefined;
	    function parse(val) {
	      if (!val || val.trim() === '') {
	        return undefined;
	      }
	      try {
	        lastValid = opencpu + val;
	        ctrl.$setValidity('opencpu', true);
	      } catch (e) {
	        ctrl.$setValidity('opencpu', false);
	      }
	      return lastValid;
	    }
	    function format(val) {
	      if (!val) {
	        return undefined;
	      }
	      return val.slice(opencpu.length);
	    }
	    ctrl.$parsers.push(parse);
	    ctrl.$formatters.unshift(format);
	    el.bind('blur', function () {
	      el.val(format(ctrl.$modelValue));
	      ctrl.$setValidity('json', true);
	      scope.$apply();
	    });
	    scope.$watch(attrs.ngModel, function (val, oldVal) {
	      lastValid = lastValid || val;
	      if (val !== oldVal) {
	        ctrl.$setViewValue(format(val));
	        ctrl.$render();
	      }
	    }, true);
	  }
	  return {
	    restrict: 'A',
	    require: 'ngModel',
	    link: link
	  };
	}
	opencpuDirective.$inject = ["opencpu"];

	module.exports = exports['default'];

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	/*@ngInject*/
	var GraphCtrl = (function () {
	  function GraphCtrl($http, opencpu) {
	    var _this = this;

	    _classCallCheck(this, GraphCtrl);

	    this.$http = $http;
	    this.opencpu = opencpu;
	    this.data = {};
	    this.renderer = 'svg';
	    this.getSpecFields().then(function () {
	      return _this.getData();
	    });
	  }
	  GraphCtrl.$inject = ["$http", "opencpu"];

	  _createClass(GraphCtrl, [{
	    key: 'getData',
	    value: function getData() {
	      var _this2 = this;

	      return this.$http(this.source).then(function (data) {
	        _this2.data = _angular2['default'].fromJson(data);
	      }, function (e) {
	        _this2.error = e;
	      });
	    }
	  }, {
	    key: 'getSpecFields',
	    value: function getSpecFields() {
	      var _this3 = this;

	      return this.$http.get('api/vega/' + this.value).success(function (data) {
	        _this3.fields = data.fields;
	        _this3.spec = data.spec;
	        _this3.source = data.source;
	      }).error(function (e) {
	        _this3.error = e;
	      });
	    }
	  }]);

	  return GraphCtrl;
	})();

	exports['default'] = /*@ngInject*/function () {
	  function link(scope) {
	    var clean = scope.$watchCollection('graph.source.params', function (val) {
	      if (_lodash2['default'].size(val) > 0) {
	        scope.graph.getData();
	      }
	    });
	    scope.$on('$destroy', clean);
	  }
	  return {
	    restrict: 'A',
	    scope: {
	      value: '@graph'
	    },
	    controller: GraphCtrl,
	    controllerAs: 'graph',
	    bindToController: true,
	    template: __webpack_require__(185),
	    link: link
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports='<div class="row"><div class="col-xs-4"><formly-form model="graph.source.params" fields="graph.fields" form="graph.form"></formly-form></div><div class="col-xs-8"><ng-vega vega-spec="graph.spec" vega-data="graph.data" vega-renderer="graph.renderer"></ng-vega></div></div>'

/***/ }
/******/ ]);