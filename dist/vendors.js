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
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		4:0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
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
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".app.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	module.exports = __webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	
	module.exports = 'ui.bootstrap';


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
	 * angular-ui-bootstrap
	 * http://angular-ui.github.io/bootstrap/
	
	 * Version: 1.0.0 - 2016-01-08
	 * License: MIT
	 */
	angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.debounce","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]);
	angular.module("ui.bootstrap.tpls", ["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/popup.html","uib/template/datepicker/year.html","uib/template/modal/backdrop.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]);
	angular.module('ui.bootstrap.collapse', [])
	
	  .directive('uibCollapse', ['$animate', '$injector', function($animate, $injector) {
	    var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
	    return {
	      link: function(scope, element, attrs) {
	        if (!scope.$eval(attrs.uibCollapse)) {
	          element.addClass('in')
	            .addClass('collapse')
	            .css({height: 'auto'});
	        }
	
	        function expand() {
	          element.removeClass('collapse')
	            .addClass('collapsing')
	            .attr('aria-expanded', true)
	            .attr('aria-hidden', false);
	
	          if ($animateCss) {
	            $animateCss(element, {
	              addClass: 'in',
	              easing: 'ease',
	              to: { height: element[0].scrollHeight + 'px' }
	            }).start()['finally'](expandDone);
	          } else {
	            $animate.addClass(element, 'in', {
	              to: { height: element[0].scrollHeight + 'px' }
	            }).then(expandDone);
	          }
	        }
	
	        function expandDone() {
	          element.removeClass('collapsing')
	            .addClass('collapse')
	            .css({height: 'auto'});
	        }
	
	        function collapse() {
	          if (!element.hasClass('collapse') && !element.hasClass('in')) {
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
	
	          if ($animateCss) {
	            $animateCss(element, {
	              removeClass: 'in',
	              to: {height: '0'}
	            }).start()['finally'](collapseDone);
	          } else {
	            $animate.removeClass(element, 'in', {
	              to: {height: '0'}
	            }).then(collapseDone);
	          }
	        }
	
	        function collapseDone() {
	          element.css({height: '0'}); // Required so that collapse works when animation is disabled
	          element.removeClass('collapsing')
	            .addClass('collapse');
	        }
	
	        scope.$watch(attrs.uibCollapse, function(shouldCollapse) {
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
	
	.constant('uibAccordionConfig', {
	  closeOthers: true
	})
	
	.controller('UibAccordionController', ['$scope', '$attrs', 'uibAccordionConfig', function($scope, $attrs, accordionConfig) {
	  // This array keeps track of the accordion groups
	  this.groups = [];
	
	  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
	  this.closeOthers = function(openGroup) {
	    var closeOthers = angular.isDefined($attrs.closeOthers) ?
	      $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
	    if (closeOthers) {
	      angular.forEach(this.groups, function(group) {
	        if (group !== openGroup) {
	          group.isOpen = false;
	        }
	      });
	    }
	  };
	
	  // This is called from the accordion-group directive to add itself to the accordion
	  this.addGroup = function(groupScope) {
	    var that = this;
	    this.groups.push(groupScope);
	
	    groupScope.$on('$destroy', function(event) {
	      that.removeGroup(groupScope);
	    });
	  };
	
	  // This is called from the accordion-group directive when to remove itself
	  this.removeGroup = function(group) {
	    var index = this.groups.indexOf(group);
	    if (index !== -1) {
	      this.groups.splice(index, 1);
	    }
	  };
	}])
	
	// The accordion directive simply sets up the directive controller
	// and adds an accordion CSS class to itself element.
	.directive('uibAccordion', function() {
	  return {
	    controller: 'UibAccordionController',
	    controllerAs: 'accordion',
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/accordion/accordion.html';
	    }
	  };
	})
	
	// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
	.directive('uibAccordionGroup', function() {
	  return {
	    require: '^uibAccordion',         // We need this directive to be inside an accordion
	    transclude: true,              // It transcludes the contents of the directive into the template
	    replace: true,                // The element containing the directive will be replaced with the template
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/accordion/accordion-group.html';
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
	
	      scope.openClass = attrs.openClass || 'panel-open';
	      scope.panelClass = attrs.panelClass || 'panel-default';
	      scope.$watch('isOpen', function(value) {
	        element.toggleClass(scope.openClass, !!value);
	        if (value) {
	          accordionCtrl.closeOthers(scope);
	        }
	      });
	
	      scope.toggleOpen = function($event) {
	        if (!scope.isDisabled) {
	          if (!$event || $event.which === 32) {
	            scope.isOpen = !scope.isOpen;
	          }
	        }
	      };
	    }
	  };
	})
	
	// Use accordion-heading below an accordion-group to provide a heading containing HTML
	.directive('uibAccordionHeading', function() {
	  return {
	    transclude: true,   // Grab the contents to be used as the heading
	    template: '',       // In effect remove this element!
	    replace: true,
	    require: '^uibAccordionGroup',
	    link: function(scope, element, attrs, accordionGroupCtrl, transclude) {
	      // Pass the heading to the accordion-group controller
	      // so that it can be transcluded into the right place in the template
	      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
	      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
	    }
	  };
	})
	
	// Use in the accordion-group template to indicate where you want the heading to be transcluded
	// You must provide the property on the accordion-group controller that will hold the transcluded element
	.directive('uibAccordionTransclude', function() {
	  return {
	    require: '^uibAccordionGroup',
	    link: function(scope, element, attrs, controller) {
	      scope.$watch(function() { return controller[attrs.uibAccordionTransclude]; }, function(heading) {
	        if (heading) {
	          element.find('span').html('');
	          element.find('span').append(heading);
	        }
	      });
	    }
	  };
	});
	
	angular.module('ui.bootstrap.alert', [])
	
	.controller('UibAlertController', ['$scope', '$attrs', '$interpolate', '$timeout', function($scope, $attrs, $interpolate, $timeout) {
	  $scope.closeable = !!$attrs.close;
	
	  var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
	    $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;
	
	  if (dismissOnTimeout) {
	    $timeout(function() {
	      $scope.close();
	    }, parseInt(dismissOnTimeout, 10));
	  }
	}])
	
	.directive('uibAlert', function() {
	  return {
	    controller: 'UibAlertController',
	    controllerAs: 'alert',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/alert/alert.html';
	    },
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@',
	      close: '&'
	    }
	  };
	});
	
	angular.module('ui.bootstrap.buttons', [])
	
	.constant('uibButtonConfig', {
	  activeClass: 'active',
	  toggleEvent: 'click'
	})
	
	.controller('UibButtonsController', ['uibButtonConfig', function(buttonConfig) {
	  this.activeClass = buttonConfig.activeClass || 'active';
	  this.toggleEvent = buttonConfig.toggleEvent || 'click';
	}])
	
	.directive('uibBtnRadio', ['$parse', function($parse) {
	  return {
	    require: ['uibBtnRadio', 'ngModel'],
	    controller: 'UibButtonsController',
	    controllerAs: 'buttons',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      var uncheckableExpr = $parse(attrs.uibUncheckable);
	
	      element.find('input').css({display: 'none'});
	
	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
	      };
	
	      //ui->model
	      element.on(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }
	
	        var isActive = element.hasClass(buttonsCtrl.activeClass);
	
	        if (!isActive || angular.isDefined(attrs.uncheckable)) {
	          scope.$apply(function() {
	            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
	            ngModelCtrl.$render();
	          });
	        }
	      });
	
	      if (attrs.uibUncheckable) {
	        scope.$watch(uncheckableExpr, function(uncheckable) {
	          attrs.$set('uncheckable', uncheckable ? '' : null);
	        });
	      }
	    }
	  };
	}])
	
	.directive('uibBtnCheckbox', function() {
	  return {
	    require: ['uibBtnCheckbox', 'ngModel'],
	    controller: 'UibButtonsController',
	    controllerAs: 'button',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      element.find('input').css({display: 'none'});
	
	      function getTrueValue() {
	        return getCheckboxValue(attrs.btnCheckboxTrue, true);
	      }
	
	      function getFalseValue() {
	        return getCheckboxValue(attrs.btnCheckboxFalse, false);
	      }
	
	      function getCheckboxValue(attribute, defaultValue) {
	        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
	      }
	
	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
	      };
	
	      //ui->model
	      element.on(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }
	
	        scope.$apply(function() {
	          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	          ngModelCtrl.$render();
	        });
	      });
	    }
	  };
	});
	
	angular.module('ui.bootstrap.carousel', [])
	
	.controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function($scope, $element, $interval, $timeout, $animate) {
	  var self = this,
	    slides = self.slides = $scope.slides = [],
	    SLIDE_DIRECTION = 'uib-slideDirection',
	    currentIndex = -1,
	    currentInterval, isPlaying, bufferedTransitions = [];
	  self.currentSlide = null;
	
	  var destroyed = false;
	
	  self.addSlide = function(slide, element) {
	    slide.$element = element;
	    slides.push(slide);
	    //if this is the first slide or the slide is set to active, select it
	    if (slides.length === 1 || slide.active) {
	      if ($scope.$currentTransition) {
	        $scope.$currentTransition = null;
	      }
	
	      self.select(slides[slides.length - 1]);
	      if (slides.length === 1) {
	        $scope.play();
	      }
	    } else {
	      slide.active = false;
	    }
	  };
	
	  self.getCurrentIndex = function() {
	    if (self.currentSlide && angular.isDefined(self.currentSlide.index)) {
	      return +self.currentSlide.index;
	    }
	    return currentIndex;
	  };
	
	  self.next = $scope.next = function() {
	    var newIndex = (self.getCurrentIndex() + 1) % slides.length;
	
	    if (newIndex === 0 && $scope.noWrap()) {
	      $scope.pause();
	      return;
	    }
	
	    return self.select(getSlideByIndex(newIndex), 'next');
	  };
	
	  self.prev = $scope.prev = function() {
	    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;
	
	    if ($scope.noWrap() && newIndex === slides.length - 1) {
	      $scope.pause();
	      return;
	    }
	
	    return self.select(getSlideByIndex(newIndex), 'prev');
	  };
	
	  self.removeSlide = function(slide) {
	    if (angular.isDefined(slide.index)) {
	      slides.sort(function(a, b) {
	        return +a.index > +b.index;
	      });
	    }
	
	    var bufferedIndex = bufferedTransitions.indexOf(slide);
	    if (bufferedIndex !== -1) {
	      bufferedTransitions.splice(bufferedIndex, 1);
	    }
	    //get the index of the slide inside the carousel
	    var index = slides.indexOf(slide);
	    slides.splice(index, 1);
	    $timeout(function() {
	      if (slides.length > 0 && slide.active) {
	        if (index >= slides.length) {
	          self.select(slides[index - 1]);
	        } else {
	          self.select(slides[index]);
	        }
	      } else if (currentIndex > index) {
	        currentIndex--;
	      }
	    });
	
	    //clean the currentSlide when no more slide
	    if (slides.length === 0) {
	      self.currentSlide = null;
	      clearBufferedTransitions();
	    }
	  };
	
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
	    } else if (nextSlide && nextSlide !== self.currentSlide && $scope.$currentTransition) {
	      bufferedTransitions.push(nextSlide);
	    }
	  };
	
	  /* Allow outside people to call indexOf on slides array */
	  $scope.indexOfSlide = function(slide) {
	    return angular.isDefined(slide.index) ? +slide.index : slides.indexOf(slide);
	  };
	
	  $scope.isActive = function(slide) {
	    return self.currentSlide === slide;
	  };
	
	  $scope.pause = function() {
	    if (!$scope.noPause) {
	      isPlaying = false;
	      resetTimer();
	    }
	  };
	
	  $scope.play = function() {
	    if (!isPlaying) {
	      isPlaying = true;
	      restartTimer();
	    }
	  };
	
	  $scope.$on('$destroy', function() {
	    destroyed = true;
	    resetTimer();
	  });
	
	  $scope.$watch('noTransition', function(noTransition) {
	    $animate.enabled($element, !noTransition);
	  });
	
	  $scope.$watch('interval', restartTimer);
	
	  $scope.$watchCollection('slides', resetTransition);
	
	  function clearBufferedTransitions() {
	    while (bufferedTransitions.length) {
	      bufferedTransitions.shift();
	    }
	  }
	
	  function getSlideByIndex(index) {
	    if (angular.isUndefined(slides[index].index)) {
	      return slides[index];
	    }
	    for (var i = 0, l = slides.length; i < l; ++i) {
	      if (slides[i].index === index) {
	        return slides[i];
	      }
	    }
	  }
	
	  function goNext(slide, index, direction) {
	    if (destroyed) { return; }
	
	    angular.extend(slide, {direction: direction, active: true});
	    angular.extend(self.currentSlide || {}, {direction: direction, active: false});
	    if ($animate.enabled($element) && !$scope.$currentTransition &&
	      slide.$element && self.slides.length > 1) {
	      slide.$element.data(SLIDE_DIRECTION, slide.direction);
	      if (self.currentSlide && self.currentSlide.$element) {
	        self.currentSlide.$element.data(SLIDE_DIRECTION, slide.direction);
	      }
	
	      $scope.$currentTransition = true;
	      $animate.on('addClass', slide.$element, function(element, phase) {
	        if (phase === 'close') {
	          $scope.$currentTransition = null;
	          $animate.off('addClass', element);
	          if (bufferedTransitions.length) {
	            var nextSlide = bufferedTransitions.pop();
	            var nextIndex = $scope.indexOfSlide(nextSlide);
	            var nextDirection = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
	            clearBufferedTransitions();
	
	            goNext(nextSlide, nextIndex, nextDirection);
	          }
	        }
	      });
	    }
	
	    self.currentSlide = slide;
	    currentIndex = index;
	
	    //every time you change slides, reset the timer
	    restartTimer();
	  }
	
	  function resetTimer() {
	    if (currentInterval) {
	      $interval.cancel(currentInterval);
	      currentInterval = null;
	    }
	  }
	
	  function resetTransition(slides) {
	    if (!slides.length) {
	      $scope.$currentTransition = null;
	      clearBufferedTransitions();
	    }
	  }
	
	  function restartTimer() {
	    resetTimer();
	    var interval = +$scope.interval;
	    if (!isNaN(interval) && interval > 0) {
	      currentInterval = $interval(timerFn, interval);
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
	}])
	
	.directive('uibCarousel', function() {
	  return {
	    transclude: true,
	    replace: true,
	    controller: 'UibCarouselController',
	    controllerAs: 'carousel',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/carousel/carousel.html';
	    },
	    scope: {
	      interval: '=',
	      noTransition: '=',
	      noPause: '=',
	      noWrap: '&'
	    }
	  };
	})
	
	.directive('uibSlide', function() {
	  return {
	    require: '^uibCarousel',
	    transclude: true,
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/carousel/slide.html';
	    },
	    scope: {
	      active: '=?',
	      actual: '=?',
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
	
	.animation('.item', ['$animateCss',
	function($animateCss) {
	  var SLIDE_DIRECTION = 'uib-slideDirection';
	
	  function removeClass(element, className, callback) {
	    element.removeClass(className);
	    if (callback) {
	      callback();
	    }
	  }
	
	  return {
	    beforeAddClass: function(element, className, done) {
	      if (className === 'active') {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction === 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element,
	          directionClass + ' ' + direction, done);
	        element.addClass(direction);
	
	        $animateCss(element, {addClass: directionClass})
	          .start()
	          .done(removeClassFn);
	
	        return function() {
	          stopped = true;
	        };
	      }
	      done();
	    },
	    beforeRemoveClass: function (element, className, done) {
	      if (className === 'active') {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction === 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element, directionClass, done);
	
	        $animateCss(element, {addClass: directionClass})
	          .start()
	          .done(removeClassFn);
	
	        return function() {
	          stopped = true;
	        };
	      }
	      done();
	    }
	  };
	}]);
	
	angular.module('ui.bootstrap.dateparser', [])
	
	.service('uibDateParser', ['$log', '$locale', 'orderByFilter', function($log, $locale, orderByFilter) {
	  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
	  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	
	  var localeId;
	  var formatCodeToRegex;
	
	  this.init = function() {
	    localeId = $locale.id;
	
	    this.parsers = {};
	
	    formatCodeToRegex = [
	      {
	        key: 'yyyy',
	        regex: '\\d{4}',
	        apply: function(value) { this.year = +value; }
	      },
	      {
	        key: 'yy',
	        regex: '\\d{2}',
	        apply: function(value) { this.year = +value + 2000; }
	      },
	      {
	        key: 'y',
	        regex: '\\d{1,4}',
	        apply: function(value) { this.year = +value; }
	      },
	      {
	        key: 'M!',
	        regex: '0?[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; }
	      },
	      {
	        key: 'MMMM',
	        regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
	        apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); }
	      },
	      {
	        key: 'MMM',
	        regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
	        apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); }
	      },
	      {
	        key: 'MM',
	        regex: '0[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; }
	      },
	      {
	        key: 'M',
	        regex: '[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; }
	      },
	      {
	        key: 'd!',
	        regex: '[0-2]?[0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; }
	      },
	      {
	        key: 'dd',
	        regex: '[0-2][0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; }
	      },
	      {
	        key: 'd',
	        regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; }
	      },
	      {
	        key: 'EEEE',
	        regex: $locale.DATETIME_FORMATS.DAY.join('|')
	      },
	      {
	        key: 'EEE',
	        regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')
	      },
	      {
	        key: 'HH',
	        regex: '(?:0|1)[0-9]|2[0-3]',
	        apply: function(value) { this.hours = +value; }
	      },
	      {
	        key: 'hh',
	        regex: '0[0-9]|1[0-2]',
	        apply: function(value) { this.hours = +value; }
	      },
	      {
	        key: 'H',
	        regex: '1?[0-9]|2[0-3]',
	        apply: function(value) { this.hours = +value; }
	      },
	      {
	        key: 'h',
	        regex: '[0-9]|1[0-2]',
	        apply: function(value) { this.hours = +value; }
	      },
	      {
	        key: 'mm',
	        regex: '[0-5][0-9]',
	        apply: function(value) { this.minutes = +value; }
	      },
	      {
	        key: 'm',
	        regex: '[0-9]|[1-5][0-9]',
	        apply: function(value) { this.minutes = +value; }
	      },
	      {
	        key: 'sss',
	        regex: '[0-9][0-9][0-9]',
	        apply: function(value) { this.milliseconds = +value; }
	      },
	      {
	        key: 'ss',
	        regex: '[0-5][0-9]',
	        apply: function(value) { this.seconds = +value; }
	      },
	      {
	        key: 's',
	        regex: '[0-9]|[1-5][0-9]',
	        apply: function(value) { this.seconds = +value; }
	      },
	      {
	        key: 'a',
	        regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
	        apply: function(value) {
	          if (this.hours === 12) {
	            this.hours = 0;
	          }
	
	          if (value === 'PM') {
	            this.hours += 12;
	          }
	        }
	      },
	      {
	        key: 'Z',
	        regex: '[+-]\\d{4}',
	        apply: function(value) {
	          var matches = value.match(/([+-])(\d{2})(\d{2})/),
	            sign = matches[1],
	            hours = matches[2],
	            minutes = matches[3];
	          this.hours += toInt(sign + hours);
	          this.minutes += toInt(sign + minutes);
	        }
	      },
	      {
	        key: 'ww',
	        regex: '[0-4][0-9]|5[0-3]'
	      },
	      {
	        key: 'w',
	        regex: '[0-9]|[1-4][0-9]|5[0-3]'
	      },
	      {
	        key: 'GGGG',
	        regex: $locale.DATETIME_FORMATS.ERANAMES.join('|').replace(/\s/g, '\\s')
	      },
	      {
	        key: 'GGG',
	        regex: $locale.DATETIME_FORMATS.ERAS.join('|')
	      },
	      {
	        key: 'GG',
	        regex: $locale.DATETIME_FORMATS.ERAS.join('|')
	      },
	      {
	        key: 'G',
	        regex: $locale.DATETIME_FORMATS.ERAS.join('|')
	      }
	    ];
	  };
	
	  this.init();
	
	  function createParser(format) {
	    var map = [], regex = format.split('');
	
	    // check for literal values
	    var quoteIndex = format.indexOf('\'');
	    if (quoteIndex > -1) {
	      var inLiteral = false;
	      format = format.split('');
	      for (var i = quoteIndex; i < format.length; i++) {
	        if (inLiteral) {
	          if (format[i] === '\'') {
	            if (i + 1 < format.length && format[i+1] === '\'') { // escaped single quote
	              format[i+1] = '$';
	              regex[i+1] = '';
	            } else { // end of literal
	              regex[i] = '';
	              inLiteral = false;
	            }
	          }
	          format[i] = '$';
	        } else {
	          if (format[i] === '\'') { // start of literal
	            format[i] = '$';
	            regex[i] = '';
	            inLiteral = true;
	          }
	        }
	      }
	
	      format = format.join('');
	    }
	
	    angular.forEach(formatCodeToRegex, function(data) {
	      var index = format.indexOf(data.key);
	
	      if (index > -1) {
	        format = format.split('');
	
	        regex[index] = '(' + data.regex + ')';
	        format[index] = '$'; // Custom symbol to define consumed part of format
	        for (var i = index + 1, n = index + data.key.length; i < n; i++) {
	          regex[i] = '';
	          format[i] = '$';
	        }
	        format = format.join('');
	
	        map.push({
	          index: index,
	          apply: data.apply,
	          matcher: data.regex
	        });
	      }
	    });
	
	    return {
	      regex: new RegExp('^' + regex.join('') + '$'),
	      map: orderByFilter(map, 'index')
	    };
	  }
	
	  this.parse = function(input, format, baseDate) {
	    if (!angular.isString(input) || !format) {
	      return input;
	    }
	
	    format = $locale.DATETIME_FORMATS[format] || format;
	    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');
	
	    if ($locale.id !== localeId) {
	      this.init();
	    }
	
	    if (!this.parsers[format]) {
	      this.parsers[format] = createParser(format);
	    }
	
	    var parser = this.parsers[format],
	        regex = parser.regex,
	        map = parser.map,
	        results = input.match(regex),
	        tzOffset = false;
	    if (results && results.length) {
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
	
	      for (var i = 1, n = results.length; i < n; i++) {
	        var mapper = map[i - 1];
	        if (mapper.matcher === 'Z') {
	          tzOffset = true;
	        }
	
	        if (mapper.apply) {
	          mapper.apply.call(fields, results[i]);
	        }
	      }
	
	      var datesetter = tzOffset ? Date.prototype.setUTCFullYear :
	        Date.prototype.setFullYear;
	      var timesetter = tzOffset ? Date.prototype.setUTCHours :
	        Date.prototype.setHours;
	
	      if (isValid(fields.year, fields.month, fields.date)) {
	        if (angular.isDate(baseDate) && !isNaN(baseDate.getTime()) && !tzOffset) {
	          dt = new Date(baseDate);
	          datesetter.call(dt, fields.year, fields.month, fields.date);
	          timesetter.call(dt, fields.hours, fields.minutes,
	            fields.seconds, fields.milliseconds);
	        } else {
	          dt = new Date(0);
	          datesetter.call(dt, fields.year, fields.month, fields.date);
	          timesetter.call(dt, fields.hours || 0, fields.minutes || 0,
	            fields.seconds || 0, fields.milliseconds || 0);
	        }
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
	
	    if (month === 1 && date > 28) {
	      return date === 29 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
	    }
	
	    if (month === 3 || month === 5 || month === 8 || month === 10) {
	      return date < 31;
	    }
	
	    return true;
	  }
	
	  function toInt(str) {
	    return parseInt(str, 10);
	  }
	
	  this.toTimezone = toTimezone;
	  this.fromTimezone = fromTimezone;
	  this.timezoneToOffset = timezoneToOffset;
	  this.addDateMinutes = addDateMinutes;
	  this.convertTimezoneToLocal = convertTimezoneToLocal;
	  
	  function toTimezone(date, timezone) {
	    return date && timezone ? convertTimezoneToLocal(date, timezone) : date;
	  }
	
	  function fromTimezone(date, timezone) {
	    return date && timezone ? convertTimezoneToLocal(date, timezone, true) : date;
	  }
	
	  //https://github.com/angular/angular.js/blob/4daafd3dbe6a80d578f5a31df1bb99c77559543e/src/Angular.js#L1207
	  function timezoneToOffset(timezone, fallback) {
	    var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
	    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
	  }
	
	  function addDateMinutes(date, minutes) {
	    date = new Date(date.getTime());
	    date.setMinutes(date.getMinutes() + minutes);
	    return date;
	  }
	
	  function convertTimezoneToLocal(date, timezone, reverse) {
	    reverse = reverse ? -1 : 1;
	    var timezoneOffset = timezoneToOffset(timezone, date.getTimezoneOffset());
	    return addDateMinutes(date, reverse * (timezoneOffset - date.getTimezoneOffset()));
	  }
	}]);
	
	// Avoiding use of ng-class as it creates a lot of watchers when a class is to be applied to
	// at most one element.
	angular.module('ui.bootstrap.isClass', [])
	.directive('uibIsClass', [
	         '$animate',
	function ($animate) {
	  //                    11111111          22222222
	  var ON_REGEXP = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/;
	  //                    11111111           22222222
	  var IS_REGEXP = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;
	
	  var dataPerTracked = {};
	
	  return {
	    restrict: 'A',
	    compile: function (tElement, tAttrs) {
	      var linkedScopes = [];
	      var instances = [];
	      var expToData = {};
	      var lastActivated = null;
	      var onExpMatches = tAttrs.uibIsClass.match(ON_REGEXP);
	      var onExp = onExpMatches[2];
	      var expsStr = onExpMatches[1];
	      var exps = expsStr.split(',');
	
	      return linkFn;
	
	      function linkFn(scope, element, attrs) {
	        linkedScopes.push(scope);
	        instances.push({
	          scope: scope,
	          element: element
	        });
	
	        exps.forEach(function (exp, k) {
	          addForExp(exp, scope);
	        });
	
	        scope.$on('$destroy', removeScope);
	      }
	
	      function addForExp(exp, scope) {
	        var matches = exp.match(IS_REGEXP);
	        var clazz = scope.$eval(matches[1]);
	        var compareWithExp = matches[2];
	        var data = expToData[exp];
	        if (!data) {
	          var watchFn = function (compareWithVal) {
	            var newActivated = null;
	            instances.some(function (instance) {
	              var thisVal = instance.scope.$eval(onExp);
	              if (thisVal === compareWithVal) {
	                newActivated = instance;
	                return true;
	              }
	            });
	            if (data.lastActivated !== newActivated) {
	              if (data.lastActivated) {
	                $animate.removeClass(data.lastActivated.element, clazz);
	              }
	              if (newActivated) {
	                $animate.addClass(newActivated.element, clazz);
	              }
	              data.lastActivated = newActivated;
	            }
	          };
	          expToData[exp] = data = {
	            lastActivated: null,
	            scope: scope,
	            watchFn: watchFn,
	            compareWithExp: compareWithExp,
	            watcher: scope.$watch(compareWithExp, watchFn)
	          };
	        }
	        data.watchFn(scope.$eval(compareWithExp));
	      }
	
	      function removeScope(e) {
	        var removedScope = e.targetScope;
	        var index = linkedScopes.indexOf(removedScope);
	        linkedScopes.splice(index, 1);
	        instances.splice(index, 1);
	        if (linkedScopes.length) {
	          var newWatchScope = linkedScopes[0];
	          angular.forEach(expToData, function (data) {
	            if (data.scope === removedScope) {
	              data.watcher = newWatchScope.$watch(data.compareWithExp, data.watchFn);
	              data.scope = newWatchScope;
	            }
	          });
	        }
	        else {
	          expToData = {};
	        }
	      }
	    }
	  };
	}]);
	angular.module('ui.bootstrap.position', [])
	
	/**
	 * A set of utility methods for working with the DOM.
	 * It is meant to be used where we need to absolute-position elements in
	 * relation to another element (this is the case for tooltips, popovers,
	 * typeahead suggestions etc.).
	 */
	  .factory('$uibPosition', ['$document', '$window', function($document, $window) {
	    /**
	     * Used by scrollbarWidth() function to cache scrollbar's width.
	     * Do not access this variable directly, use scrollbarWidth() instead.
	     */
	    var SCROLLBAR_WIDTH;
	    var OVERFLOW_REGEX = {
	      normal: /(auto|scroll)/,
	      hidden: /(auto|scroll|hidden)/
	    };
	    var PLACEMENT_REGEX = {
	      auto: /\s?auto?\s?/i,
	      primary: /^(top|bottom|left|right)$/,
	      secondary: /^(top|bottom|left|right|center)$/,
	      vertical: /^(top|bottom)$/
	    };
	
	    return {
	
	      /**
	       * Provides a raw DOM element from a jQuery/jQLite element.
	       *
	       * @param {element} elem - The element to convert.
	       *
	       * @returns {element} A HTML element.
	       */
	      getRawNode: function(elem) {
	        return elem[0] || elem;
	      },
	
	      /**
	       * Provides a parsed number for a style property.  Strips
	       * units and casts invalid numbers to 0.
	       *
	       * @param {string} value - The style value to parse.
	       *
	       * @returns {number} A valid number.
	       */
	      parseStyle: function(value) {
	        value = parseFloat(value);
	        return isFinite(value) ? value : 0;
	      },
	
	      /**
	       * Provides the closest positioned ancestor.
	       *
	       * @param {element} element - The element to get the offest parent for.
	       *
	       * @returns {element} The closest positioned ancestor.
	       */
	      offsetParent: function(elem) {
	        elem = this.getRawNode(elem);
	
	        var offsetParent = elem.offsetParent || $document[0].documentElement;
	
	        function isStaticPositioned(el) {
	          return ($window.getComputedStyle(el).position || 'static') === 'static';
	        }
	
	        while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
	          offsetParent = offsetParent.offsetParent;
	        }
	
	        return offsetParent || $document[0].documentElement;
	      },
	
	      /**
	       * Provides the scrollbar width, concept from TWBS measureScrollbar()
	       * function in https://github.com/twbs/bootstrap/blob/master/js/modal.js
	       *
	       * @returns {number} The width of the browser scollbar.
	       */
	      scrollbarWidth: function() {
	        if (angular.isUndefined(SCROLLBAR_WIDTH)) {
	          var scrollElem = angular.element('<div style="position: absolute; top: -9999px; width: 50px; height: 50px; overflow: scroll;"></div>');
	          $document.find('body').append(scrollElem);
	          SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
	          SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
	          scrollElem.remove();
	        }
	
	        return SCROLLBAR_WIDTH;
	      },
	
	      /**
	       * Provides the closest scrollable ancestor.
	       * A port of the jQuery UI scrollParent method:
	       * https://github.com/jquery/jquery-ui/blob/master/ui/scroll-parent.js
	       *
	       * @param {element} elem - The element to find the scroll parent of.
	       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
	       *   default is false.
	       *
	       * @returns {element} A HTML element.
	       */
	      scrollParent: function(elem, includeHidden) {
	        elem = this.getRawNode(elem);
	
	        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
	        var documentEl = $document[0].documentElement;
	        var elemStyle = $window.getComputedStyle(elem);
	        var excludeStatic = elemStyle.position === 'absolute';
	        var scrollParent = elem.parentElement || documentEl;
	
	        if (scrollParent === documentEl || elemStyle.position === 'fixed') {
	          return documentEl;
	        }
	
	        while (scrollParent.parentElement && scrollParent !== documentEl) {
	          var spStyle = $window.getComputedStyle(scrollParent);
	          if (excludeStatic && spStyle.position !== 'static') {
	            excludeStatic = false;
	          }
	
	          if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
	            break;
	          }
	          scrollParent = scrollParent.parentElement;
	        }
	
	        return scrollParent;
	      },
	
	      /**
	       * Provides read-only equivalent of jQuery's position function:
	       * http://api.jquery.com/position/ - distance to closest positioned
	       * ancestor.  Does not account for margins by default like jQuery position.
	       *
	       * @param {element} elem - The element to caclulate the position on.
	       * @param {boolean=} [includeMargins=false] - Should margins be accounted
	       * for, default is false.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**width**: the width of the element</li>
	       *     <li>**height**: the height of the element</li>
	       *     <li>**top**: distance to top edge of offset parent</li>
	       *     <li>**left**: distance to left edge of offset parent</li>
	       *   </ul>
	       */
	      position: function(elem, includeMagins) {
	        elem = this.getRawNode(elem);
	
	        var elemOffset = this.offset(elem);
	        if (includeMagins) {
	          var elemStyle = $window.getComputedStyle(elem);
	          elemOffset.top -= this.parseStyle(elemStyle.marginTop);
	          elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
	        }
	        var parent = this.offsetParent(elem);
	        var parentOffset = {top: 0, left: 0};
	
	        if (parent !== $document[0].documentElement) {
	          parentOffset = this.offset(parent);
	          parentOffset.top += parent.clientTop - parent.scrollTop;
	          parentOffset.left += parent.clientLeft - parent.scrollLeft;
	        }
	
	        return {
	          width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
	          height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
	          top: Math.round(elemOffset.top - parentOffset.top),
	          left: Math.round(elemOffset.left - parentOffset.left)
	        };
	      },
	
	      /**
	       * Provides read-only equivalent of jQuery's offset function:
	       * http://api.jquery.com/offset/ - distance to viewport.  Does
	       * not account for borders, margins, or padding on the body
	       * element.
	       *
	       * @param {element} elem - The element to calculate the offset on.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**width**: the width of the element</li>
	       *     <li>**height**: the height of the element</li>
	       *     <li>**top**: distance to top edge of viewport</li>
	       *     <li>**right**: distance to bottom edge of viewport</li>
	       *   </ul>
	       */
	      offset: function(elem) {
	        elem = this.getRawNode(elem);
	
	        var elemBCR = elem.getBoundingClientRect();
	        return {
	          width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
	          height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
	          top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
	          left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
	        };
	      },
	
	      /**
	       * Provides offset distance to the closest scrollable ancestor
	       * or viewport.  Accounts for border and scrollbar width.
	       *
	       * Right and bottom dimensions represent the distance to the
	       * respective edge of the viewport element.  If the element
	       * edge extends beyond the viewport, a negative value will be
	       * reported.
	       *
	       * @param {element} elem - The element to get the viewport offset for.
	       * @param {boolean=} [useDocument=false] - Should the viewport be the document element instead
	       * of the first scrollable element, default is false.
	       * @param {boolean=} [includePadding=true] - Should the padding on the offset parent element
	       * be accounted for, default is true.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**top**: distance to the top content edge of viewport element</li>
	       *     <li>**bottom**: distance to the bottom content edge of viewport element</li>
	       *     <li>**left**: distance to the left content edge of viewport element</li>
	       *     <li>**right**: distance to the right content edge of viewport element</li>
	       *   </ul>
	       */
	      viewportOffset: function(elem, useDocument, includePadding) {
	        elem = this.getRawNode(elem);
	        includePadding = includePadding !== false ? true : false;
	
	        var elemBCR = elem.getBoundingClientRect();
	        var offsetBCR = {top: 0, left: 0, bottom: 0, right: 0};
	
	        var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
	        var offsetParentBCR = offsetParent.getBoundingClientRect();
	
	        offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
	        offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
	        if (offsetParent === $document[0].documentElement) {
	          offsetBCR.top += $window.pageYOffset;
	          offsetBCR.left += $window.pageXOffset;
	        }
	        offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
	        offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;
	
	        if (includePadding) {
	          var offsetParentStyle = $window.getComputedStyle(offsetParent);
	          offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
	          offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
	          offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
	          offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
	        }
	
	        return {
	          top: Math.round(elemBCR.top - offsetBCR.top),
	          bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
	          left: Math.round(elemBCR.left - offsetBCR.left),
	          right: Math.round(offsetBCR.right - elemBCR.right)
	        };
	      },
	
	      /**
	       * Provides an array of placement values parsed from a placement string.
	       * Along with the 'auto' indicator, supported placement strings are:
	       *   <ul>
	       *     <li>top: element on top, horizontally centered on host element.</li>
	       *     <li>top-left: element on top, left edge aligned with host element left edge.</li>
	       *     <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
	       *     <li>bottom: element on bottom, horizontally centered on host element.</li>
	       *     <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
	       *     <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
	       *     <li>left: element on left, vertically centered on host element.</li>
	       *     <li>left-top: element on left, top edge aligned with host element top edge.</li>
	       *     <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
	       *     <li>right: element on right, vertically centered on host element.</li>
	       *     <li>right-top: element on right, top edge aligned with host element top edge.</li>
	       *     <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
	       *   </ul>
	       * A placement string with an 'auto' indicator is expected to be
	       * space separated from the placement, i.e: 'auto bottom-left'  If
	       * the primary and secondary placement values do not match 'top,
	       * bottom, left, right' then 'top' will be the primary placement and
	       * 'center' will be the secondary placement.  If 'auto' is passed, true
	       * will be returned as the 3rd value of the array.
	       *
	       * @param {string} placement - The placement string to parse.
	       *
	       * @returns {array} An array with the following values
	       * <ul>
	       *   <li>**[0]**: The primary placement.</li>
	       *   <li>**[1]**: The secondary placement.</li>
	       *   <li>**[2]**: If auto is passed: true, else undefined.</li>
	       * </ul>
	       */
	      parsePlacement: function(placement) {
	        var autoPlace = PLACEMENT_REGEX.auto.test(placement);
	        if (autoPlace) {
	          placement = placement.replace(PLACEMENT_REGEX.auto, '');
	        }
	
	        placement = placement.split('-');
	
	        placement[0] = placement[0] || 'top';
	        if (!PLACEMENT_REGEX.primary.test(placement[0])) {
	          placement[0] = 'top';
	        }
	
	        placement[1] = placement[1] || 'center';
	        if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
	          placement[1] = 'center';
	        }
	
	        if (autoPlace) {
	          placement[2] = true;
	        } else {
	          placement[2] = false;
	        }
	
	        return placement;
	      },
	
	      /**
	       * Provides coordinates for an element to be positioned relative to
	       * another element.  Passing 'auto' as part of the placement parameter
	       * will enable smart placement - where the element fits. i.e:
	       * 'auto left-top' will check to see if there is enough space to the left
	       * of the hostElem to fit the targetElem, if not place right (same for secondary
	       * top placement).  Available space is calculated using the viewportOffset
	       * function.
	       *
	       * @param {element} hostElem - The element to position against.
	       * @param {element} targetElem - The element to position.
	       * @param {string=} [placement=top] - The placement for the targetElem,
	       *   default is 'top'. 'center' is assumed as secondary placement for
	       *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
	       *   <ul>
	       *     <li>top</li>
	       *     <li>top-right</li>
	       *     <li>top-left</li>
	       *     <li>bottom</li>
	       *     <li>bottom-left</li>
	       *     <li>bottom-right</li>
	       *     <li>left</li>
	       *     <li>left-top</li>
	       *     <li>left-bottom</li>
	       *     <li>right</li>
	       *     <li>right-top</li>
	       *     <li>right-bottom</li>
	       *   </ul>
	       * @param {boolean=} [appendToBody=false] - Should the top and left values returned
	       *   be calculated from the body element, default is false.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**top**: Value for targetElem top.</li>
	       *     <li>**left**: Value for targetElem left.</li>
	       *     <li>**placement**: The resolved placement.</li>
	       *   </ul>
	       */
	      positionElements: function(hostElem, targetElem, placement, appendToBody) {
	        hostElem = this.getRawNode(hostElem);
	        targetElem = this.getRawNode(targetElem);
	
	        // need to read from prop to support tests.
	        var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
	        var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');
	
	        placement = this.parsePlacement(placement);
	
	        var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
	        var targetElemPos = {top: 0, left: 0, placement: ''};
	
	        if (placement[2]) {
	          var viewportOffset = this.viewportOffset(hostElem);
	
	          var targetElemStyle = $window.getComputedStyle(targetElem);
	          var adjustedSize = {
	            width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
	            height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
	          };
	
	          placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' :
	                         placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' :
	                         placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' :
	                         placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' :
	                         placement[0];
	
	          placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' :
	                         placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' :
	                         placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' :
	                         placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' :
	                         placement[1];
	
	          if (placement[1] === 'center') {
	            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	              var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
	              if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
	                placement[1] = 'left';
	              } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
	                placement[1] = 'right';
	              }
	            } else {
	              var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
	              if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
	                placement[1] = 'top';
	              } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
	                placement[1] = 'bottom';
	              }
	            }
	          }
	        }
	
	        switch (placement[0]) {
	          case 'top':
	            targetElemPos.top = hostElemPos.top - targetHeight;
	            break;
	          case 'bottom':
	            targetElemPos.top = hostElemPos.top + hostElemPos.height;
	            break;
	          case 'left':
	            targetElemPos.left = hostElemPos.left - targetWidth;
	            break;
	          case 'right':
	            targetElemPos.left = hostElemPos.left + hostElemPos.width;
	            break;
	        }
	
	        switch (placement[1]) {
	          case 'top':
	            targetElemPos.top = hostElemPos.top;
	            break;
	          case 'bottom':
	            targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
	            break;
	          case 'left':
	            targetElemPos.left = hostElemPos.left;
	            break;
	          case 'right':
	            targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
	            break;
	          case 'center':
	            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	              targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
	            } else {
	              targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
	            }
	            break;
	        }
	
	        targetElemPos.top = Math.round(targetElemPos.top);
	        targetElemPos.left = Math.round(targetElemPos.left);
	        targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];
	
	        return targetElemPos;
	      },
	
	      /**
	      * Provides a way for positioning tooltip & dropdown
	      * arrows when using placement options beyond the standard
	      * left, right, top, or bottom.
	      *
	      * @param {element} elem - The tooltip/dropdown element.
	      * @param {string} placement - The placement for the elem.
	      */
	      positionArrow: function(elem, placement) {
	        elem = this.getRawNode(elem);
	
	        var isTooltip = true;
	
	        var innerElem = elem.querySelector('.tooltip-inner');
	        if (!innerElem) {
	          isTooltip = false;
	          innerElem = elem.querySelector('.popover-inner');
	        }
	        if (!innerElem) {
	          return;
	        }
	
	        var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
	        if (!arrowElem) {
	          return;
	        }
	
	        placement = this.parsePlacement(placement);
	        if (placement[1] === 'center') {
	          // no adjustment necessary - just reset styles
	          angular.element(arrowElem).css({top: '', bottom: '', right: '', left: '', margin: ''});
	          return;
	        }
	
	        var borderProp = 'border-' + placement[0] + '-width';
	        var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];
	
	        var borderRadiusProp = 'border-';
	        if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	          borderRadiusProp += placement[0] + '-' + placement[1];
	        } else {
	          borderRadiusProp += placement[1] + '-' + placement[0];
	        }
	        borderRadiusProp += '-radius';
	        var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];
	
	        var arrowCss = {
	          top: 'auto',
	          bottom: 'auto',
	          left: 'auto',
	          right: 'auto',
	          margin: 0
	        };
	
	        switch (placement[0]) {
	          case 'top':
	            arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
	            break;
	          case 'bottom':
	            arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
	            break;
	          case 'left':
	            arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
	            break;
	          case 'right':
	            arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
	            break;
	        }
	
	        arrowCss[placement[1]] = borderRadius;
	
	        angular.element(arrowElem).css(arrowCss);
	      }
	    };
	  }]);
	
	angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.isClass', 'ui.bootstrap.position'])
	
	.value('$datepickerSuppressError', false)
	
	.constant('uibDatepickerConfig', {
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
	  yearRows: 4,
	  yearColumns: 5,
	  minDate: null,
	  maxDate: null,
	  shortcutPropagation: false,
	  ngModelOptions: {}
	})
	
	.controller('UibDatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerSuppressError', 'uibDateParser',
	  function($scope, $attrs, $parse, $interpolate, $log, dateFilter, datepickerConfig, $datepickerSuppressError, dateParser) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl;
	      ngModelOptions = {};
	
	  // Modes chain
	  this.modes = ['day', 'month', 'year'];
	
	  // Interpolated configuration attributes
	  angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle'], function(key) {
	    self[key] = angular.isDefined($attrs[key]) ? $interpolate($attrs[key])($scope.$parent) : datepickerConfig[key];
	  });
	
	  // Evaled configuration attributes
	  angular.forEach(['showWeeks', 'startingDay', 'yearRows', 'yearColumns', 'shortcutPropagation'], function(key) {
	    self[key] = angular.isDefined($attrs[key]) ? $scope.$parent.$eval($attrs[key]) : datepickerConfig[key];
	  });
	
	  // Watchable date attributes
	  angular.forEach(['minDate', 'maxDate'], function(key) {
	    if ($attrs[key]) {
	      $scope.$parent.$watch($attrs[key], function(value) {
	        self[key] = value ? angular.isDate(value) ? dateParser.fromTimezone(new Date(value), ngModelOptions.timezone) : new Date(dateFilter(value, 'medium')) : null;
	        self.refreshView();
	      });
	    } else {
	      self[key] = datepickerConfig[key] ? dateParser.fromTimezone(new Date(datepickerConfig[key]), ngModelOptions.timezone) : null;
	    }
	  });
	
	  angular.forEach(['minMode', 'maxMode'], function(key) {
	    if ($attrs[key]) {
	      $scope.$parent.$watch($attrs[key], function(value) {
	        self[key] = $scope[key] = angular.isDefined(value) ? value : $attrs[key];
	        if (key === 'minMode' && self.modes.indexOf($scope.datepickerMode) < self.modes.indexOf(self[key]) ||
	          key === 'maxMode' && self.modes.indexOf($scope.datepickerMode) > self.modes.indexOf(self[key])) {
	          $scope.datepickerMode = self[key];
	        }
	      });
	    } else {
	      self[key] = $scope[key] = datepickerConfig[key] || null;
	    }
	  });
	
	  $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
	  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);
	
	  if (angular.isDefined($attrs.initDate)) {
	    this.activeDate = dateParser.fromTimezone($scope.$parent.$eval($attrs.initDate), ngModelOptions.timezone) || new Date();
	    $scope.$parent.$watch($attrs.initDate, function(initDate) {
	      if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
	        self.activeDate = dateParser.fromTimezone(initDate, ngModelOptions.timezone);
	        self.refreshView();
	      }
	    });
	  } else {
	    this.activeDate = new Date();
	  }
	
	  $scope.disabled = angular.isDefined($attrs.disabled) || false;
	  if (angular.isDefined($attrs.ngDisabled)) {
	    $scope.$parent.$watch($attrs.ngDisabled, function(disabled) {
	      $scope.disabled = disabled;
	      self.refreshView();
	    });
	  }
	
	  $scope.isActive = function(dateObject) {
	    if (self.compare(dateObject.date, self.activeDate) === 0) {
	      $scope.activeDateId = dateObject.uid;
	      return true;
	    }
	    return false;
	  };
	
	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelOptions = ngModelCtrl_.$options || datepickerConfig.ngModelOptions;
	
	    if (ngModelCtrl.$modelValue) {
	      this.activeDate = ngModelCtrl.$modelValue;
	    }
	
	    ngModelCtrl.$render = function() {
	      self.render();
	    };
	  };
	
	  this.render = function() {
	    if (ngModelCtrl.$viewValue) {
	      var date = new Date(ngModelCtrl.$viewValue),
	          isValid = !isNaN(date);
	
	      if (isValid) {
	        this.activeDate = dateParser.fromTimezone(date, ngModelOptions.timezone);
	      } else if (!$datepickerSuppressError) {
	        $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	      }
	    }
	    this.refreshView();
	  };
	
	  this.refreshView = function() {
	    if (this.element) {
	      $scope.selectedDt = null;
	      this._refreshView();
	      if ($scope.activeDt) {
	        $scope.activeDateId = $scope.activeDt.uid;
	      }
	
	      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	      date = dateParser.fromTimezone(date, ngModelOptions.timezone);
	      ngModelCtrl.$setValidity('dateDisabled', !date ||
	        this.element && !this.isDisabled(date));
	    }
	  };
	
	  this.createDateObject = function(date, format) {
	    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	    model = dateParser.fromTimezone(model, ngModelOptions.timezone);
	    var dt = {
	      date: date,
	      label: dateFilter(date, format),
	      selected: model && this.compare(date, model) === 0,
	      disabled: this.isDisabled(date),
	      current: this.compare(date, new Date()) === 0,
	      customClass: this.customClass(date) || null
	    };
	
	    if (model && this.compare(date, model) === 0) {
	      $scope.selectedDt = dt;
	    }
	
	    if (self.activeDate && this.compare(dt.date, self.activeDate) === 0) {
	      $scope.activeDt = dt;
	    }
	
	    return dt;
	  };
	
	  this.isDisabled = function(date) {
	    return $scope.disabled ||
	      this.minDate && this.compare(date, this.minDate) < 0 ||
	      this.maxDate && this.compare(date, this.maxDate) > 0 ||
	      $attrs.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode});
	  };
	
	  this.customClass = function(date) {
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
	
	  $scope.select = function(date) {
	    if ($scope.datepickerMode === self.minMode) {
	      var dt = ngModelCtrl.$viewValue ? dateParser.fromTimezone(new Date(ngModelCtrl.$viewValue), ngModelOptions.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);
	      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	      dt = dateParser.toTimezone(dt, ngModelOptions.timezone);
	      ngModelCtrl.$setViewValue(dt);
	      ngModelCtrl.$render();
	    } else {
	      self.activeDate = date;
	      $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) - 1];
	    }
	  };
	
	  $scope.move = function(direction) {
	    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
	        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
	    self.activeDate.setFullYear(year, month, 1);
	    self.refreshView();
	  };
	
	  $scope.toggleMode = function(direction) {
	    direction = direction || 1;
	
	    if ($scope.datepickerMode === self.maxMode && direction === 1 ||
	      $scope.datepickerMode === self.minMode && direction === -1) {
	      return;
	    }
	
	    $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) + direction];
	  };
	
	  // Key event mapper
	  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };
	
	  var focusElement = function() {
	    self.element[0].focus();
	  };
	
	  // Listen for focus requests from popup directive
	  $scope.$on('uib:datepicker.focus', focusElement);
	
	  $scope.keydown = function(evt) {
	    var key = $scope.keys[evt.which];
	
	    if (!key || evt.shiftKey || evt.altKey || $scope.disabled) {
	      return;
	    }
	
	    evt.preventDefault();
	    if (!self.shortcutPropagation) {
	      evt.stopPropagation();
	    }
	
	    if (key === 'enter' || key === 'space') {
	      if (self.isDisabled(self.activeDate)) {
	        return; // do nothing
	      }
	      $scope.select(self.activeDate);
	    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
	      $scope.toggleMode(key === 'up' ? 1 : -1);
	    } else {
	      self.handleKeyDown(key, evt);
	      self.refreshView();
	    }
	  };
	}])
	
	.controller('UibDaypickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	  this.step = { months: 1 };
	  this.element = $element;
	  function getDaysInMonth(year, month) {
	    return month === 1 && year % 4 === 0 &&
	      (year % 100 !== 0 || year % 400 === 0) ? 29 : DAYS_IN_MONTH[month];
	  }
	
	  this.init = function(ctrl) {
	    angular.extend(ctrl, this);
	    scope.showWeeks = ctrl.showWeeks;
	    ctrl.refreshView();
	  };
	
	  this.getDates = function(startDate, n) {
	    var dates = new Array(n), current = new Date(startDate), i = 0, date;
	    while (i < n) {
	      date = new Date(current);
	      dates[i++] = date;
	      current.setDate(current.getDate() + 1);
	    }
	    return dates;
	  };
	
	  this._refreshView = function() {
	    var year = this.activeDate.getFullYear(),
	      month = this.activeDate.getMonth(),
	      firstDayOfMonth = new Date(this.activeDate);
	
	    firstDayOfMonth.setFullYear(year, month, 1);
	
	    var difference = this.startingDay - firstDayOfMonth.getDay(),
	      numDisplayedFromPreviousMonth = difference > 0 ?
	        7 - difference : - difference,
	      firstDate = new Date(firstDayOfMonth);
	
	    if (numDisplayedFromPreviousMonth > 0) {
	      firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
	    }
	
	    // 42 is the number of days on a six-week calendar
	    var days = this.getDates(firstDate, 42);
	    for (var i = 0; i < 42; i ++) {
	      days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
	        secondary: days[i].getMonth() !== month,
	        uid: scope.uniqueId + '-' + i
	      });
	    }
	
	    scope.labels = new Array(7);
	    for (var j = 0; j < 7; j++) {
	      scope.labels[j] = {
	        abbr: dateFilter(days[j].date, this.formatDayHeader),
	        full: dateFilter(days[j].date, 'EEEE')
	      };
	    }
	
	    scope.title = dateFilter(this.activeDate, this.formatDayTitle);
	    scope.rows = this.split(days, 7);
	
	    if (scope.showWeeks) {
	      scope.weekNumbers = [];
	      var thursdayIndex = (4 + 7 - this.startingDay) % 7,
	          numWeeks = scope.rows.length;
	      for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
	        scope.weekNumbers.push(
	          getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
	      }
	    }
	  };
	
	  this.compare = function(date1, date2) {
	    var _date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
	    var _date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
	    _date1.setFullYear(date1.getFullYear());
	    _date2.setFullYear(date2.getFullYear());
	    return _date1 - _date2;
	  };
	
	  function getISO8601WeekNumber(date) {
	    var checkDate = new Date(date);
	    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
	    var time = checkDate.getTime();
	    checkDate.setMonth(0); // Compare with Jan 1
	    checkDate.setDate(1);
	    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	  }
	
	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getDate();
	
	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - 7;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + 7;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      var month = this.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
	      this.activeDate.setMonth(month, 1);
	      date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date);
	    } else if (key === 'home') {
	      date = 1;
	    } else if (key === 'end') {
	      date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth());
	    }
	    this.activeDate.setDate(date);
	  };
	}])
	
	.controller('UibMonthpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  this.step = { years: 1 };
	  this.element = $element;
	
	  this.init = function(ctrl) {
	    angular.extend(ctrl, this);
	    ctrl.refreshView();
	  };
	
	  this._refreshView = function() {
	    var months = new Array(12),
	        year = this.activeDate.getFullYear(),
	        date;
	
	    for (var i = 0; i < 12; i++) {
	      date = new Date(this.activeDate);
	      date.setFullYear(year, i, 1);
	      months[i] = angular.extend(this.createDateObject(date, this.formatMonth), {
	        uid: scope.uniqueId + '-' + i
	      });
	    }
	
	    scope.title = dateFilter(this.activeDate, this.formatMonthTitle);
	    scope.rows = this.split(months, 3);
	  };
	
	  this.compare = function(date1, date2) {
	    var _date1 = new Date(date1.getFullYear(), date1.getMonth());
	    var _date2 = new Date(date2.getFullYear(), date2.getMonth());
	    _date1.setFullYear(date1.getFullYear());
	    _date2.setFullYear(date2.getFullYear());
	    return _date1 - _date2;
	  };
	
	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getMonth();
	
	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - 3;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + 3;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      var year = this.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
	      this.activeDate.setFullYear(year);
	    } else if (key === 'home') {
	      date = 0;
	    } else if (key === 'end') {
	      date = 11;
	    }
	    this.activeDate.setMonth(date);
	  };
	}])
	
	.controller('UibYearpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  var columns, range;
	  this.element = $element;
	
	  function getStartingYear(year) {
	    return parseInt((year - 1) / range, 10) * range + 1;
	  }
	
	  this.yearpickerInit = function() {
	    columns = this.yearColumns;
	    range = this.yearRows * columns;
	    this.step = { years: range };
	  };
	
	  this._refreshView = function() {
	    var years = new Array(range), date;
	
	    for (var i = 0, start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) {
	      date = new Date(this.activeDate);
	      date.setFullYear(start + i, 0, 1);
	      years[i] = angular.extend(this.createDateObject(date, this.formatYear), {
	        uid: scope.uniqueId + '-' + i
	      });
	    }
	
	    scope.title = [years[0].label, years[range - 1].label].join(' - ');
	    scope.rows = this.split(years, columns);
	    scope.columns = columns;
	  };
	
	  this.compare = function(date1, date2) {
	    return date1.getFullYear() - date2.getFullYear();
	  };
	
	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getFullYear();
	
	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - columns;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + columns;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      date += (key === 'pageup' ? - 1 : 1) * range;
	    } else if (key === 'home') {
	      date = getStartingYear(this.activeDate.getFullYear());
	    } else if (key === 'end') {
	      date = getStartingYear(this.activeDate.getFullYear()) + range - 1;
	    }
	    this.activeDate.setFullYear(date);
	  };
	}])
	
	.directive('uibDatepicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/datepicker.html';
	    },
	    scope: {
	      datepickerMode: '=?',
	      dateDisabled: '&',
	      customClass: '&',
	      shortcutPropagation: '&?'
	    },
	    require: ['uibDatepicker', '^ngModel'],
	    controller: 'UibDatepickerController',
	    controllerAs: 'datepicker',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      datepickerCtrl.init(ngModelCtrl);
	    }
	  };
	})
	
	.directive('uibDaypicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/day.html';
	    },
	    require: ['^uibDatepicker', 'uibDaypicker'],
	    controller: 'UibDaypickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0],
	        daypickerCtrl = ctrls[1];
	
	      daypickerCtrl.init(datepickerCtrl);
	    }
	  };
	})
	
	.directive('uibMonthpicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/month.html';
	    },
	    require: ['^uibDatepicker', 'uibMonthpicker'],
	    controller: 'UibMonthpickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0],
	        monthpickerCtrl = ctrls[1];
	
	      monthpickerCtrl.init(datepickerCtrl);
	    }
	  };
	})
	
	.directive('uibYearpicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/year.html';
	    },
	    require: ['^uibDatepicker', 'uibYearpicker'],
	    controller: 'UibYearpickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var ctrl = ctrls[0];
	      angular.extend(ctrl, ctrls[1]);
	      ctrl.yearpickerInit();
	
	      ctrl.refreshView();
	    }
	  };
	})
	
	.constant('uibDatepickerPopupConfig', {
	  datepickerPopup: 'yyyy-MM-dd',
	  datepickerPopupTemplateUrl: 'uib/template/datepicker/popup.html',
	  datepickerTemplateUrl: 'uib/template/datepicker/datepicker.html',
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
	  onOpenFocus: true,
	  altInputFormats: []
	})
	
	.controller('UibDatepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatepickerPopupConfig', '$timeout', 'uibDatepickerConfig',
	function(scope, element, attrs, $compile, $parse, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout, datepickerConfig) {
	  var self = this;
	  var cache = {},
	    isHtml5DateInput = false;
	  var dateFormat, closeOnDateSelection, appendToBody, onOpenFocus,
	    datepickerPopupTemplateUrl, datepickerTemplateUrl, popupEl, datepickerEl,
	    ngModel, ngModelOptions, $popup, altInputFormats;
	
	  scope.watchData = {};
	
	  this.init = function(_ngModel_) {
	    ngModel = _ngModel_;
	    ngModelOptions = _ngModel_.$options || datepickerConfig.ngModelOptions;
	    closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection;
	    appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;
	    onOpenFocus = angular.isDefined(attrs.onOpenFocus) ? scope.$parent.$eval(attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
	    datepickerPopupTemplateUrl = angular.isDefined(attrs.datepickerPopupTemplateUrl) ? attrs.datepickerPopupTemplateUrl : datepickerPopupConfig.datepickerPopupTemplateUrl;
	    datepickerTemplateUrl = angular.isDefined(attrs.datepickerTemplateUrl) ? attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;
	    altInputFormats = angular.isDefined(attrs.altInputFormats) ? scope.$parent.$eval(attrs.altInputFormats) : datepickerPopupConfig.altInputFormats;
	
	    scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;
	
	    if (datepickerPopupConfig.html5Types[attrs.type]) {
	      dateFormat = datepickerPopupConfig.html5Types[attrs.type];
	      isHtml5DateInput = true;
	    } else {
	      dateFormat = attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
	      attrs.$observe('uibDatepickerPopup', function(value, oldValue) {
	          var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
	          // Invalidate the $modelValue to ensure that formatters re-run
	          // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
	          if (newDateFormat !== dateFormat) {
	            dateFormat = newDateFormat;
	            ngModel.$modelValue = null;
	
	            if (!dateFormat) {
	              throw new Error('uibDatepickerPopup must have a date format specified.');
	            }
	          }
	      });
	    }
	
	    if (!dateFormat) {
	      throw new Error('uibDatepickerPopup must have a date format specified.');
	    }
	
	    if (isHtml5DateInput && attrs.uibDatepickerPopup) {
	      throw new Error('HTML5 date input types do not support custom formats.');
	    }
	
	    // popup element used to display calendar
	    popupEl = angular.element('<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>');
	    scope.ngModelOptions = angular.copy(ngModelOptions);
	    scope.ngModelOptions.timezone = null;
	    popupEl.attr({
	      'ng-model': 'date',
	      'ng-model-options': 'ngModelOptions',
	      'ng-change': 'dateSelection(date)',
	      'template-url': datepickerPopupTemplateUrl
	    });
	
	    // datepicker element
	    datepickerEl = angular.element(popupEl.children()[0]);
	    datepickerEl.attr('template-url', datepickerTemplateUrl);
	
	    if (isHtml5DateInput) {
	      if (attrs.type === 'month') {
	        datepickerEl.attr('datepicker-mode', '"month"');
	        datepickerEl.attr('min-mode', 'month');
	      }
	    }
	
	    if (attrs.datepickerOptions) {
	      var options = scope.$parent.$eval(attrs.datepickerOptions);
	      if (options && options.initDate) {
	        scope.initDate = dateParser.fromTimezone(options.initDate, ngModelOptions.timezone);
	        datepickerEl.attr('init-date', 'initDate');
	        delete options.initDate;
	      }
	      angular.forEach(options, function(value, option) {
	        datepickerEl.attr(cameltoDash(option), value);
	      });
	    }
	
	    angular.forEach(['minMode', 'maxMode'], function(key) {
	      if (attrs[key]) {
	        scope.$parent.$watch(function() { return attrs[key]; }, function(value) {
	          scope.watchData[key] = value;
	        });
	        datepickerEl.attr(cameltoDash(key), 'watchData.' + key);
	      }
	    });
	
	    angular.forEach(['datepickerMode', 'shortcutPropagation'], function(key) {
	      if (attrs[key]) {
	        var getAttribute = $parse(attrs[key]);
	        var propConfig = {
	          get: function() {
	            return getAttribute(scope.$parent);
	          }
	        };
	
	        datepickerEl.attr(cameltoDash(key), 'watchData.' + key);
	
	        // Propagate changes from datepicker to outside
	        if (key === 'datepickerMode') {
	          var setAttribute = getAttribute.assign;
	          propConfig.set = function(v) {
	            setAttribute(scope.$parent, v);
	          };
	        }
	
	        Object.defineProperty(scope.watchData, key, propConfig);
	      }
	    });
	
	    angular.forEach(['minDate', 'maxDate', 'initDate'], function(key) {
	      if (attrs[key]) {
	        var getAttribute = $parse(attrs[key]);
	
	        scope.$parent.$watch(getAttribute, function(value) {
	          if (key === 'minDate' || key === 'maxDate') {
	            cache[key] = angular.isDate(value) ? dateParser.fromTimezone(new Date(value), ngModelOptions.timezone) : new Date(dateFilter(value, 'medium'));
	          }
	
	          scope.watchData[key] = cache[key] || dateParser.fromTimezone(new Date(value), ngModelOptions.timezone);
	        });
	
	        datepickerEl.attr(cameltoDash(key), 'watchData.' + key);
	      }
	    });
	
	    if (attrs.dateDisabled) {
	      datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
	    }
	
	    angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle', 'showWeeks', 'startingDay', 'yearRows', 'yearColumns'], function(key) {
	      if (angular.isDefined(attrs[key])) {
	        datepickerEl.attr(cameltoDash(key), attrs[key]);
	      }
	    });
	
	    if (attrs.customClass) {
	      datepickerEl.attr('custom-class', 'customClass({ date: date, mode: mode })');
	    }
	
	    if (!isHtml5DateInput) {
	      // Internal API to maintain the correct ng-invalid-[key] class
	      ngModel.$$parserName = 'date';
	      ngModel.$validators.date = validator;
	      ngModel.$parsers.unshift(parseDate);
	      ngModel.$formatters.push(function(value) {
	        if (ngModel.$isEmpty(value)) {
	          scope.date = value;
	          return value;
	        }
	        scope.date = dateParser.fromTimezone(value, ngModelOptions.timezone);
	        return dateFilter(scope.date, dateFormat);
	      });
	    } else {
	      ngModel.$formatters.push(function(value) {
	        scope.date = dateParser.fromTimezone(value, ngModelOptions.timezone);
	        return value;
	      });
	    }
	
	    // Detect changes in the view from the text box
	    ngModel.$viewChangeListeners.push(function() {
	      scope.date = parseDateString(ngModel.$viewValue);
	    });
	
	    element.bind('keydown', inputKeydownBind);
	
	    $popup = $compile(popupEl)(scope);
	    // Prevent jQuery cache memory leak (template is now redundant after linking)
	    popupEl.remove();
	
	    if (appendToBody) {
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
	  };
	
	  scope.getText = function(key) {
	    return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
	  };
	
	  scope.isDisabled = function(date) {
	    if (date === 'today') {
	      date = new Date();
	    }
	
	    return scope.watchData.minDate && scope.compare(date, cache.minDate) < 0 ||
	      scope.watchData.maxDate && scope.compare(date, cache.maxDate) > 0;
	  };
	
	  scope.compare = function(date1, date2) {
	    return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
	  };
	
	  // Inner change
	  scope.dateSelection = function(dt) {
	    if (angular.isDefined(dt)) {
	      scope.date = dt;
	    }
	    var date = scope.date ? dateFilter(scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
	    element.val(date);
	    ngModel.$setViewValue(date);
	
	    if (closeOnDateSelection) {
	      scope.isOpen = false;
	      element[0].focus();
	    }
	  };
	
	  scope.keydown = function(evt) {
	    if (evt.which === 27) {
	      evt.stopPropagation();
	      scope.isOpen = false;
	      element[0].focus();
	    }
	  };
	
	  scope.select = function(date) {
	    if (date === 'today') {
	      var today = new Date();
	      if (angular.isDate(scope.date)) {
	        date = new Date(scope.date);
	        date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
	      } else {
	        date = new Date(today.setHours(0, 0, 0, 0));
	      }
	    }
	    scope.dateSelection(date);
	  };
	
	  scope.close = function() {
	    scope.isOpen = false;
	    element[0].focus();
	  };
	
	  scope.disabled = angular.isDefined(attrs.disabled) || false;
	  if (attrs.ngDisabled) {
	    scope.$parent.$watch($parse(attrs.ngDisabled), function(disabled) {
	      scope.disabled = disabled;
	    });
	  }
	
	  scope.$watch('isOpen', function(value) {
	    if (value) {
	      if (!scope.disabled) {
	        scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	        scope.position.top = scope.position.top + element.prop('offsetHeight');
	
	        $timeout(function() {
	          if (onOpenFocus) {
	            scope.$broadcast('uib:datepicker.focus');
	          }
	          $document.bind('click', documentClickBind);
	        }, 0, false);
	      } else {
	        scope.isOpen = false;
	      }
	    } else {
	      $document.unbind('click', documentClickBind);
	    }
	  });
	
	  function cameltoDash(string) {
	    return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
	  }
	
	  function parseDateString(viewValue) {
	    var date = dateParser.parse(viewValue, dateFormat, scope.date);
	    if (isNaN(date)) {
	      for (var i = 0; i < altInputFormats.length; i++) {
	        date = dateParser.parse(viewValue, altInputFormats[i], scope.date);
	        if (!isNaN(date)) {
	          return date;
	        }
	      }
	    }
	    return date;
	  }
	
	  function parseDate(viewValue) {
	    if (angular.isNumber(viewValue)) {
	      // presumably timestamp to date object
	      viewValue = new Date(viewValue);
	    }
	
	    if (!viewValue) {
	      return null;
	    }
	
	    if (angular.isDate(viewValue) && !isNaN(viewValue)) {
	      return viewValue;
	    }
	
	    if (angular.isString(viewValue)) {
	      var date = parseDateString(viewValue);
	      if (!isNaN(date)) {
	        return dateParser.toTimezone(date, ngModelOptions.timezone);
	      }
	    }
	
	    return ngModel.$options && ngModel.$options.allowInvalid ? viewValue : undefined;
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
	    }
	
	    if (angular.isDate(value) && !isNaN(value)) {
	      return true;
	    }
	
	    if (angular.isString(value)) {
	      return !isNaN(parseDateString(viewValue));
	    }
	
	    return false;
	  }
	
	  function documentClickBind(event) {
	    if (!scope.isOpen && scope.disabled) {
	      return;
	    }
	
	    var popup = $popup[0];
	    var dpContainsTarget = element[0].contains(event.target);
	    // The popup node may not be an element node
	    // In some browsers (IE) only element nodes have the 'contains' function
	    var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
	    if (scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
	      scope.$apply(function() {
	        scope.isOpen = false;
	      });
	    }
	  }
	
	  function inputKeydownBind(evt) {
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
	  }
	}])
	
	.directive('uibDatepickerPopup', function() {
	  return {
	    require: ['ngModel', 'uibDatepickerPopup'],
	    controller: 'UibDatepickerPopupController',
	    scope: {
	      isOpen: '=?',
	      currentText: '@',
	      clearText: '@',
	      closeText: '@',
	      dateDisabled: '&',
	      customClass: '&'
	    },
	    link: function(scope, element, attrs, ctrls) {
	      var ngModel = ctrls[0],
	        ctrl = ctrls[1];
	
	      ctrl.init(ngModel);
	    }
	  };
	})
	
	.directive('uibDatepickerPopupWrap', function() {
	  return {
	    replace: true,
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/popup.html';
	    }
	  };
	});
	
	angular.module('ui.bootstrap.debounce', [])
	/**
	 * A helper, internal service that debounces a function
	 */
	  .factory('$$debounce', ['$timeout', function($timeout) {
	    return function(callback, debounceTime) {
	      var timeoutPromise;
	
	      return function() {
	        var self = this;
	        var args = Array.prototype.slice.call(arguments);
	        if (timeoutPromise) {
	          $timeout.cancel(timeoutPromise);
	        }
	
	        timeoutPromise = $timeout(function() {
	          callback.apply(self, args);
	        }, debounceTime);
	      };
	    };
	  }]);
	
	angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])
	
	.constant('uibDropdownConfig', {
	  appendToOpenClass: 'uib-dropdown-open',
	  openClass: 'open'
	})
	
	.service('uibDropdownService', ['$document', '$rootScope', function($document, $rootScope) {
	  var openScope = null;
	
	  this.open = function(dropdownScope) {
	    if (!openScope) {
	      $document.on('click', closeDropdown);
	      $document.on('keydown', keybindFilter);
	    }
	
	    if (openScope && openScope !== dropdownScope) {
	      openScope.isOpen = false;
	    }
	
	    openScope = dropdownScope;
	  };
	
	  this.close = function(dropdownScope) {
	    if (openScope === dropdownScope) {
	      openScope = null;
	      $document.off('click', closeDropdown);
	      $document.off('keydown', keybindFilter);
	    }
	  };
	
	  var closeDropdown = function(evt) {
	    // This method may still be called during the same mouse event that
	    // unbound this event handler. So check openScope before proceeding.
	    if (!openScope) { return; }
	
	    if (evt && openScope.getAutoClose() === 'disabled') { return; }
	
	    if (evt && evt.which === 3) { return; }
	
	    var toggleElement = openScope.getToggleElement();
	    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
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
	
	  var keybindFilter = function(evt) {
	    if (evt.which === 27) {
	      openScope.focusToggleElement();
	      closeDropdown();
	    } else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      openScope.focusDropdownEntry(evt.which);
	    }
	  };
	}])
	
	.controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
	  var self = this,
	    scope = $scope.$new(), // create a child scope so we are not polluting original one
	    templateScope,
	    appendToOpenClass = dropdownConfig.appendToOpenClass,
	    openClass = dropdownConfig.openClass,
	    getIsOpen,
	    setIsOpen = angular.noop,
	    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
	    appendToBody = false,
	    appendTo = null,
	    keynavEnabled = false,
	    selectedOption = null,
	    body = $document.find('body');
	
	  $element.addClass('dropdown');
	
	  this.init = function() {
	    if ($attrs.isOpen) {
	      getIsOpen = $parse($attrs.isOpen);
	      setIsOpen = getIsOpen.assign;
	
	      $scope.$watch(getIsOpen, function(value) {
	        scope.isOpen = !!value;
	      });
	    }
	
	    if (angular.isDefined($attrs.dropdownAppendTo)) {
	      var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
	      if (appendToEl) {
	        appendTo = angular.element(appendToEl);
	      }
	    }
	
	    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
	    keynavEnabled = angular.isDefined($attrs.keyboardNav);
	
	    if (appendToBody && !appendTo) {
	      appendTo = body;
	    }
	
	    if (appendTo && self.dropdownMenu) {
	      appendTo.append(self.dropdownMenu);
	      $element.on('$destroy', function handleDestroyEvent() {
	        self.dropdownMenu.remove();
	      });
	    }
	  };
	
	  this.toggle = function(open) {
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
	    return $element;
	  };
	
	  scope.isKeynavEnabled = function() {
	    return keynavEnabled;
	  };
	
	  scope.focusDropdownEntry = function(keyCode) {
	    var elems = self.dropdownMenu ? //If append to body is used.
	      angular.element(self.dropdownMenu).find('a') :
	      $element.find('ul').eq(0).find('a');
	
	    switch (keyCode) {
	      case 40: {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = 0;
	        } else {
	          self.selectedOption = self.selectedOption === elems.length - 1 ?
	            self.selectedOption :
	            self.selectedOption + 1;
	        }
	        break;
	      }
	      case 38: {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = elems.length - 1;
	        } else {
	          self.selectedOption = self.selectedOption === 0 ?
	            0 : self.selectedOption - 1;
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
	    if (self.toggleElement) {
	      self.toggleElement[0].focus();
	    }
	  };
	
	  scope.$watch('isOpen', function(isOpen, wasOpen) {
	    if (appendTo && self.dropdownMenu) {
	      var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true),
	        css,
	        rightalign;
	
	      css = {
	        top: pos.top + 'px',
	        display: isOpen ? 'block' : 'none'
	      };
	
	      rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
	      if (!rightalign) {
	        css.left = pos.left + 'px';
	        css.right = 'auto';
	      } else {
	        css.left = 'auto';
	        css.right = window.innerWidth -
	          (pos.left + $element.prop('offsetWidth')) + 'px';
	      }
	
	      // Need to adjust our positioning to be relative to the appendTo container
	      // if it's not the body element
	      if (!appendToBody) {
	        var appendOffset = $position.offset(appendTo);
	
	        css.top = pos.top - appendOffset.top + 'px';
	
	        if (!rightalign) {
	          css.left = pos.left - appendOffset.left + 'px';
	        } else {
	          css.right = window.innerWidth -
	            (pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
	        }
	      }
	
	      self.dropdownMenu.css(css);
	    }
	
	    var openContainer = appendTo ? appendTo : $element;
	
	    $animate[isOpen ? 'addClass' : 'removeClass'](openContainer, appendTo ? appendToOpenClass : openClass).then(function() {
	      if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
	        toggleInvoker($scope, { open: !!isOpen });
	      }
	    });
	
	    if (isOpen) {
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
	      uibDropdownService.open(scope);
	    } else {
	      if (self.dropdownMenuTemplateUrl) {
	        if (templateScope) {
	          templateScope.$destroy();
	        }
	        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
	        self.dropdownMenu.replaceWith(newEl);
	        self.dropdownMenu = newEl;
	      }
	
	      uibDropdownService.close(scope);
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
	}])
	
	.directive('uibDropdown', function() {
	  return {
	    controller: 'UibDropdownController',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      dropdownCtrl.init();
	    }
	  };
	})
	
	.directive('uibDropdownMenu', function() {
	  return {
	    restrict: 'A',
	    require: '?^uibDropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
	        return;
	      }
	
	      element.addClass('dropdown-menu');
	
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
	
	.directive('uibDropdownToggle', function() {
	  return {
	    require: '?^uibDropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl) {
	        return;
	      }
	
	      element.addClass('dropdown-toggle');
	
	      dropdownCtrl.toggleElement = element;
	
	      var toggleDropdown = function(event) {
	        event.preventDefault();
	
	        if (!element.hasClass('disabled') && !attrs.disabled) {
	          scope.$apply(function() {
	            dropdownCtrl.toggle();
	          });
	        }
	      };
	
	      element.bind('click', toggleDropdown);
	
	      // WAI-ARIA
	      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
	      scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
	        element.attr('aria-expanded', !!isOpen);
	      });
	
	      scope.$on('$destroy', function() {
	        element.unbind('click', toggleDropdown);
	      });
	    }
	  };
	});
	
	angular.module('ui.bootstrap.stackedMap', [])
	/**
	 * A helper, internal data structure that acts as a map but also allows getting / removing
	 * elements in the LIFO order
	 */
	  .factory('$$stackedMap', function() {
	    return {
	      createNew: function() {
	        var stack = [];
	
	        return {
	          add: function(key, value) {
	            stack.push({
	              key: key,
	              value: value
	            });
	          },
	          get: function(key) {
	            for (var i = 0; i < stack.length; i++) {
	              if (key === stack[i].key) {
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
	          top: function() {
	            return stack[stack.length - 1];
	          },
	          remove: function(key) {
	            var idx = -1;
	            for (var i = 0; i < stack.length; i++) {
	              if (key === stack[i].key) {
	                idx = i;
	                break;
	              }
	            }
	            return stack.splice(idx, 1)[0];
	          },
	          removeTop: function() {
	            return stack.splice(stack.length - 1, 1)[0];
	          },
	          length: function() {
	            return stack.length;
	          }
	        };
	      }
	    };
	  });
	angular.module('ui.bootstrap.modal', ['ui.bootstrap.stackedMap'])
	/**
	 * A helper, internal data structure that stores all references attached to key
	 */
	  .factory('$$multiMap', function() {
	    return {
	      createNew: function() {
	        var map = {};
	
	        return {
	          entries: function() {
	            return Object.keys(map).map(function(key) {
	              return {
	                key: key,
	                value: map[key]
	              };
	            });
	          },
	          get: function(key) {
	            return map[key];
	          },
	          hasKey: function(key) {
	            return !!map[key];
	          },
	          keys: function() {
	            return Object.keys(map);
	          },
	          put: function(key, value) {
	            if (!map[key]) {
	              map[key] = [];
	            }
	
	            map[key].push(value);
	          },
	          remove: function(key, value) {
	            var values = map[key];
	
	            if (!values) {
	              return;
	            }
	
	            var idx = values.indexOf(value);
	
	            if (idx !== -1) {
	              values.splice(idx, 1);
	            }
	
	            if (!values.length) {
	              delete map[key];
	            }
	          }
	        };
	      }
	    };
	  })
	
	/**
	 * Pluggable resolve mechanism for the modal resolve resolution
	 * Supports UI Router's $resolve service
	 */
	  .provider('$uibResolve', function() {
	    var resolve = this;
	    this.resolver = null;
	
	    this.setResolver = function(resolver) {
	      this.resolver = resolver;
	    };
	
	    this.$get = ['$injector', '$q', function($injector, $q) {
	      var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
	      return {
	        resolve: function(invocables, locals, parent, self) {
	          if (resolver) {
	            return resolver.resolve(invocables, locals, parent, self);
	          }
	
	          var promises = [];
	
	          angular.forEach(invocables, function(value) {
	            if (angular.isFunction(value) || angular.isArray(value)) {
	              promises.push($q.resolve($injector.invoke(value)));
	            } else if (angular.isString(value)) {
	              promises.push($q.resolve($injector.get(value)));
	            } else {
	              promises.push($q.resolve(value));
	            }
	          });
	
	          return $q.all(promises).then(function(resolves) {
	            var resolveObj = {};
	            var resolveIter = 0;
	            angular.forEach(invocables, function(value, key) {
	              resolveObj[key] = resolves[resolveIter++];
	            });
	
	            return resolveObj;
	          });
	        }
	      };
	    }];
	  })
	
	/**
	 * A helper directive for the $modal service. It creates a backdrop element.
	 */
	  .directive('uibModalBackdrop', ['$animateCss', '$injector', '$uibModalStack',
	  function($animateCss, $injector, $modalStack) {
	    return {
	      replace: true,
	      templateUrl: 'uib/template/modal/backdrop.html',
	      compile: function(tElement, tAttrs) {
	        tElement.addClass(tAttrs.backdropClass);
	        return linkFn;
	      }
	    };
	
	    function linkFn(scope, element, attrs) {
	      if (attrs.modalInClass) {
	        $animateCss(element, {
	          addClass: attrs.modalInClass
	        }).start();
	
	        scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	          var done = setIsAsync();
	          if (scope.modalOptions.animation) {
	            $animateCss(element, {
	              removeClass: attrs.modalInClass
	            }).start().then(done);
	          } else {
	            done();
	          }
	        });
	      }
	    }
	  }])
	
	  .directive('uibModalWindow', ['$uibModalStack', '$q', '$animate', '$animateCss', '$document',
	  function($modalStack, $q, $animate, $animateCss, $document) {
	    return {
	      scope: {
	        index: '@'
	      },
	      replace: true,
	      transclude: true,
	      templateUrl: function(tElement, tAttrs) {
	        return tAttrs.templateUrl || 'uib/template/modal/window.html';
	      },
	      link: function(scope, element, attrs) {
	        element.addClass(attrs.windowClass || '');
	        element.addClass(attrs.windowTopClass || '');
	        scope.size = attrs.size;
	
	        scope.close = function(evt) {
	          var modal = $modalStack.getTop();
	          if (modal && modal.value.backdrop &&
	            modal.value.backdrop !== 'static' &&
	            evt.target === evt.currentTarget) {
	            evt.preventDefault();
	            evt.stopPropagation();
	            $modalStack.dismiss(modal.key, 'backdrop click');
	          }
	        };
	
	        // moved from template to fix issue #2280
	        element.on('click', scope.close);
	
	        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
	        // We can detect that by using this property in the template associated with this directive and then use
	        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
	        scope.$isRendered = true;
	
	        // Deferred object that will be resolved when this modal is render.
	        var modalRenderDeferObj = $q.defer();
	        // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
	        // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
	        attrs.$observe('modalRender', function(value) {
	          if (value === 'true') {
	            modalRenderDeferObj.resolve();
	          }
	        });
	
	        modalRenderDeferObj.promise.then(function() {
	          var animationPromise = null;
	
	          if (attrs.modalInClass) {
	            animationPromise = $animateCss(element, {
	              addClass: attrs.modalInClass
	            }).start();
	
	            scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
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
	
	
	          $q.when(animationPromise).then(function() {
	            /**
	             * If something within the freshly-opened modal already has focus (perhaps via a
	             * directive that causes focus). then no need to try and focus anything.
	             */
	            if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
	              var inputWithAutofocus = element[0].querySelector('[autofocus]');
	              /**
	               * Auto-focusing of a freshly-opened modal element causes any child elements
	               * with the autofocus attribute to lose focus. This is an issue on touch
	               * based devices which will show and then hide the onscreen keyboard.
	               * Attempts to refocus the autofocus element via JavaScript will not reopen
	               * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
	               * the modal element if the modal does not contain an autofocus element.
	               */
	              if (inputWithAutofocus) {
	                inputWithAutofocus.focus();
	              } else {
	                element[0].focus();
	              }
	            }
	          });
	
	          // Notify {@link $modalStack} that modal is rendered.
	          var modal = $modalStack.getTop();
	          if (modal) {
	            $modalStack.modalRendered(modal.key);
	          }
	        });
	      }
	    };
	  }])
	
	  .directive('uibModalAnimationClass', function() {
	    return {
	      compile: function(tElement, tAttrs) {
	        if (tAttrs.modalAnimation) {
	          tElement.addClass(tAttrs.uibModalAnimationClass);
	        }
	      }
	    };
	  })
	
	  .directive('uibModalTransclude', function() {
	    return {
	      link: function(scope, element, attrs, controller, transclude) {
	        transclude(scope.$parent, function(clone) {
	          element.empty();
	          element.append(clone);
	        });
	      }
	    };
	  })
	
	  .factory('$uibModalStack', ['$animate', '$animateCss', '$document',
	    '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap',
	    function($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap) {
	      var OPENED_MODAL_CLASS = 'modal-open';
	
	      var backdropDomEl, backdropScope;
	      var openedWindows = $$stackedMap.createNew();
	      var openedClasses = $$multiMap.createNew();
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
	        var modalWindow = openedWindows.get(modalInstance).value;
	        var appendToElement = modalWindow.appendTo;
	
	        //clean up the stack
	        openedWindows.remove(modalInstance);
	
	        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
	          var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
	          openedClasses.remove(modalBodyClass, modalInstance);
	          appendToElement.toggleClass(modalBodyClass, openedClasses.hasKey(modalBodyClass));
	          toggleTopWindowClass(true);
	        });
	        checkRemoveBackdrop();
	
	        //move focus to specified element if available, or else to body
	        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
	          elementToReceiveFocus.focus();
	        } else if (appendToElement.focus) {
	          appendToElement.focus();
	        }
	      }
	
	      // Add or remove "windowTopClass" from the top window in the stack
	      function toggleTopWindowClass(toggleSwitch) {
	        var modalWindow;
	
	        if (openedWindows.length() > 0) {
	          modalWindow = openedWindows.top().value;
	          modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
	        }
	      }
	
	      function checkRemoveBackdrop() {
	        //remove backdrop if no longer needed
	        if (backdropDomEl && backdropIndex() === -1) {
	          var backdropScopeRef = backdropScope;
	          removeAfterAnimate(backdropDomEl, backdropScope, function() {
	            backdropScopeRef = null;
	          });
	          backdropDomEl = undefined;
	          backdropScope = undefined;
	        }
	      }
	
	      function removeAfterAnimate(domEl, scope, done, closedDeferred) {
	        var asyncDeferred;
	        var asyncPromise = null;
	        var setIsAsync = function() {
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
	
	          $animateCss(domEl, {
	            event: 'leave'
	          }).start().then(function() {
	            domEl.remove();
	            if (closedDeferred) {
	              closedDeferred.resolve();
	            }
	          });
	
	          scope.$destroy();
	          if (done) {
	            done();
	          }
	        }
	      }
	
	      $document.on('keydown', keydownListener);
	
	      $rootScope.$on('$destroy', function() {
	        $document.off('keydown', keydownListener);
	      });
	
	      function keydownListener(evt) {
	        if (evt.isDefaultPrevented()) {
	          return evt;
	        }
	
	        var modal = openedWindows.top();
	        if (modal) {
	          switch (evt.which) {
	            case 27: {
	              if (modal.value.keyboard) {
	                evt.preventDefault();
	                $rootScope.$apply(function() {
	                  $modalStack.dismiss(modal.key, 'escape key press');
	                });
	              }
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
	      }
	
	      $modalStack.open = function(modalInstance, modal) {
	        var modalOpener = $document[0].activeElement,
	          modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;
	
	        toggleTopWindowClass(false);
	
	        openedWindows.add(modalInstance, {
	          deferred: modal.deferred,
	          renderDeferred: modal.renderDeferred,
	          closedDeferred: modal.closedDeferred,
	          modalScope: modal.scope,
	          backdrop: modal.backdrop,
	          keyboard: modal.keyboard,
	          openedClass: modal.openedClass,
	          windowTopClass: modal.windowTopClass,
	          animation: modal.animation,
	          appendTo: modal.appendTo
	        });
	
	        openedClasses.put(modalBodyClass, modalInstance);
	
	        var appendToElement = modal.appendTo,
	            currBackdropIndex = backdropIndex();
	
	        if (!appendToElement.length) {
	          throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
	        }
	
	        if (currBackdropIndex >= 0 && !backdropDomEl) {
	          backdropScope = $rootScope.$new(true);
	          backdropScope.modalOptions = modal;
	          backdropScope.index = currBackdropIndex;
	          backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
	          backdropDomEl.attr('backdrop-class', modal.backdropClass);
	          if (modal.animation) {
	            backdropDomEl.attr('modal-animation', 'true');
	          }
	          $compile(backdropDomEl)(backdropScope);
	          $animate.enter(backdropDomEl, appendToElement);
	        }
	
	        var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
	        angularDomEl.attr({
	          'template-url': modal.windowTemplateUrl,
	          'window-class': modal.windowClass,
	          'window-top-class': modal.windowTopClass,
	          'size': modal.size,
	          'index': openedWindows.length() - 1,
	          'animate': 'animate'
	        }).html(modal.content);
	        if (modal.animation) {
	          angularDomEl.attr('modal-animation', 'true');
	        }
	
	        $animate.enter(angularDomEl, appendToElement)
	          .then(function() {
	            $compile(angularDomEl)(modal.scope);
	            $animate.addClass(appendToElement, modalBodyClass);
	          });
	
	        openedWindows.top().value.modalDomEl = angularDomEl;
	        openedWindows.top().value.modalOpener = modalOpener;
	
	        $modalStack.clearFocusListCache();
	      };
	
	      function broadcastClosing(modalWindow, resultOrReason, closing) {
	        return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
	      }
	
	      $modalStack.close = function(modalInstance, result) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.resolve(result);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };
	
	      $modalStack.dismiss = function(modalInstance, reason) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.reject(reason);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };
	
	      $modalStack.dismissAll = function(reason) {
	        var topModal = this.getTop();
	        while (topModal && this.dismiss(topModal.key, reason)) {
	          topModal = this.getTop();
	        }
	      };
	
	      $modalStack.getTop = function() {
	        return openedWindows.top();
	      };
	
	      $modalStack.modalRendered = function(modalInstance) {
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
	          return (evt.target || evt.srcElement) === focusableElementList[0];
	        }
	        return false;
	      };
	
	      $modalStack.isFocusInLastItem = function(evt) {
	        if (focusableElementList.length > 0) {
	          return (evt.target || evt.srcElement) === focusableElementList[focusableElementList.length - 1];
	        }
	        return false;
	      };
	
	      $modalStack.clearFocusListCache = function() {
	        focusableElementList = [];
	        focusIndex = 0;
	      };
	
	      $modalStack.loadFocusElementList = function(modalWindow) {
	        if (focusableElementList === undefined || !focusableElementList.length) {
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
	
	  .provider('$uibModal', function() {
	    var $modalProvider = {
	      options: {
	        animation: true,
	        backdrop: true, //can also be false or 'static'
	        keyboard: true
	      },
	      $get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$uibResolve', '$uibModalStack',
	        function ($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
	          var $modal = {};
	
	          function getTemplatePromise(options) {
	            return options.template ? $q.when(options.template) :
	              $templateRequest(angular.isFunction(options.templateUrl) ?
	                options.templateUrl() : options.templateUrl);
	          }
	
	          var promiseChain = null;
	          $modal.getPromiseChain = function() {
	            return promiseChain;
	          };
	
	          $modal.open = function(modalOptions) {
	            var modalResultDeferred = $q.defer();
	            var modalOpenedDeferred = $q.defer();
	            var modalClosedDeferred = $q.defer();
	            var modalRenderDeferred = $q.defer();
	
	            //prepare an instance of a modal to be injected into controllers and returned to a caller
	            var modalInstance = {
	              result: modalResultDeferred.promise,
	              opened: modalOpenedDeferred.promise,
	              closed: modalClosedDeferred.promise,
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
	            modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);
	
	            //verify options
	            if (!modalOptions.template && !modalOptions.templateUrl) {
	              throw new Error('One of template or templateUrl options is required.');
	            }
	
	            var templateAndResolvePromise =
	              $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);
	
	            function resolveWithTemplate() {
	              return templateAndResolvePromise;
	            }
	
	            // Wait for the resolution of the existing promise chain.
	            // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
	            // Then add to $modalStack and resolve opened.
	            // Finally clean up the chain variable if no subsequent modal has overwritten it.
	            var samePromise;
	            samePromise = promiseChain = $q.all([promiseChain])
	              .then(resolveWithTemplate, resolveWithTemplate)
	              .then(function resolveSuccess(tplAndVars) {
	                var providedScope = modalOptions.scope || $rootScope;
	
	                var modalScope = providedScope.$new();
	                modalScope.$close = modalInstance.close;
	                modalScope.$dismiss = modalInstance.dismiss;
	
	                modalScope.$on('$destroy', function() {
	                  if (!modalScope.$$uibDestructionScheduled) {
	                    modalScope.$dismiss('$uibUnscheduledDestruction');
	                  }
	                });
	
	                var ctrlInstance, ctrlLocals = {};
	
	                //controllers
	                if (modalOptions.controller) {
	                  ctrlLocals.$scope = modalScope;
	                  ctrlLocals.$uibModalInstance = modalInstance;
	                  angular.forEach(tplAndVars[1], function(value, key) {
	                    ctrlLocals[key] = value;
	                  });
	
	                  ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
	                  if (modalOptions.controllerAs) {
	                    if (modalOptions.bindToController) {
	                      ctrlInstance.$close = modalScope.$close;
	                      ctrlInstance.$dismiss = modalScope.$dismiss;
	                      angular.extend(ctrlInstance, providedScope);
	                    }
	
	                    modalScope[modalOptions.controllerAs] = ctrlInstance;
	                  }
	                }
	
	                $modalStack.open(modalInstance, {
	                  scope: modalScope,
	                  deferred: modalResultDeferred,
	                  renderDeferred: modalRenderDeferred,
	                  closedDeferred: modalClosedDeferred,
	                  content: tplAndVars[0],
	                  animation: modalOptions.animation,
	                  backdrop: modalOptions.backdrop,
	                  keyboard: modalOptions.keyboard,
	                  backdropClass: modalOptions.backdropClass,
	                  windowTopClass: modalOptions.windowTopClass,
	                  windowClass: modalOptions.windowClass,
	                  windowTemplateUrl: modalOptions.windowTemplateUrl,
	                  size: modalOptions.size,
	                  openedClass: modalOptions.openedClass,
	                  appendTo: modalOptions.appendTo
	                });
	                modalOpenedDeferred.resolve(true);
	
	            }, function resolveError(reason) {
	              modalOpenedDeferred.reject(reason);
	              modalResultDeferred.reject(reason);
	            })['finally'](function() {
	              if (promiseChain === samePromise) {
	                promiseChain = null;
	              }
	            });
	
	            return modalInstance;
	          };
	
	          return $modal;
	        }
	      ]
	    };
	
	    return $modalProvider;
	  });
	
	angular.module('ui.bootstrap.paging', [])
	/**
	 * Helper internal service for generating common controller code between the
	 * pager and pagination components
	 */
	.factory('uibPaging', ['$parse', function($parse) {
	  return {
	    create: function(ctrl, $scope, $attrs) {
	      ctrl.setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
	      ctrl.ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl
	
	      ctrl.init = function(ngModelCtrl, config) {
	        ctrl.ngModelCtrl = ngModelCtrl;
	        ctrl.config = config;
	
	        ngModelCtrl.$render = function() {
	          ctrl.render();
	        };
	
	        if ($attrs.itemsPerPage) {
	          $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
	            ctrl.itemsPerPage = parseInt(value, 10);
	            $scope.totalPages = ctrl.calculateTotalPages();
	            ctrl.updatePage();
	          });
	        } else {
	          ctrl.itemsPerPage = config.itemsPerPage;
	        }
	
	        $scope.$watch('totalItems', function(newTotal, oldTotal) {
	          if (angular.isDefined(newTotal) || newTotal !== oldTotal) {
	            $scope.totalPages = ctrl.calculateTotalPages();
	            ctrl.updatePage();
	          }
	        });
	      };
	
	      ctrl.calculateTotalPages = function() {
	        var totalPages = ctrl.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / ctrl.itemsPerPage);
	        return Math.max(totalPages || 0, 1);
	      };
	
	      ctrl.render = function() {
	        $scope.page = parseInt(ctrl.ngModelCtrl.$viewValue, 10) || 1;
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
	          ctrl.ngModelCtrl.$setViewValue(page);
	          ctrl.ngModelCtrl.$render();
	        }
	      };
	
	      $scope.getText = function(key) {
	        return $scope[key + 'Text'] || ctrl.config[key + 'Text'];
	      };
	
	      $scope.noPrevious = function() {
	        return $scope.page === 1;
	      };
	
	      $scope.noNext = function() {
	        return $scope.page === $scope.totalPages;
	      };
	
	      ctrl.updatePage = function() {
	        ctrl.setNumPages($scope.$parent, $scope.totalPages); // Readonly variable
	
	        if ($scope.page > $scope.totalPages) {
	          $scope.selectPage($scope.totalPages);
	        } else {
	          ctrl.ngModelCtrl.$render();
	        }
	      };
	    }
	  };
	}]);
	
	angular.module('ui.bootstrap.pager', ['ui.bootstrap.paging'])
	
	.controller('UibPagerController', ['$scope', '$attrs', 'uibPaging', 'uibPagerConfig', function($scope, $attrs, uibPaging, uibPagerConfig) {
	  $scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uibPagerConfig.align;
	
	  uibPaging.create(this, $scope, $attrs);
	}])
	
	.constant('uibPagerConfig', {
	  itemsPerPage: 10,
	  previousText: '« Previous',
	  nextText: 'Next »',
	  align: true
	})
	
	.directive('uibPager', ['uibPagerConfig', function(uibPagerConfig) {
	  return {
	    scope: {
	      totalItems: '=',
	      previousText: '@',
	      nextText: '@',
	      ngDisabled: '='
	    },
	    require: ['uibPager', '?ngModel'],
	    controller: 'UibPagerController',
	    controllerAs: 'pager',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/pager/pager.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      if (!ngModelCtrl) {
	        return; // do nothing if no ng-model
	      }
	
	      paginationCtrl.init(ngModelCtrl, uibPagerConfig);
	    }
	  };
	}]);
	
	angular.module('ui.bootstrap.pagination', ['ui.bootstrap.paging'])
	.controller('UibPaginationController', ['$scope', '$attrs', '$parse', 'uibPaging', 'uibPaginationConfig', function($scope, $attrs, $parse, uibPaging, uibPaginationConfig) {
	  var ctrl = this;
	  // Setup configuration parameters
	  var maxSize = angular.isDefined($attrs.maxSize) ? $scope.$parent.$eval($attrs.maxSize) : uibPaginationConfig.maxSize,
	    rotate = angular.isDefined($attrs.rotate) ? $scope.$parent.$eval($attrs.rotate) : uibPaginationConfig.rotate,
	    forceEllipses = angular.isDefined($attrs.forceEllipses) ? $scope.$parent.$eval($attrs.forceEllipses) : uibPaginationConfig.forceEllipses,
	    boundaryLinkNumbers = angular.isDefined($attrs.boundaryLinkNumbers) ? $scope.$parent.$eval($attrs.boundaryLinkNumbers) : uibPaginationConfig.boundaryLinkNumbers;
	  $scope.boundaryLinks = angular.isDefined($attrs.boundaryLinks) ? $scope.$parent.$eval($attrs.boundaryLinks) : uibPaginationConfig.boundaryLinks;
	  $scope.directionLinks = angular.isDefined($attrs.directionLinks) ? $scope.$parent.$eval($attrs.directionLinks) : uibPaginationConfig.directionLinks;
	
	  uibPaging.create(this, $scope, $attrs);
	
	  if ($attrs.maxSize) {
	    $scope.$parent.$watch($parse($attrs.maxSize), function(value) {
	      maxSize = parseInt(value, 10);
	      ctrl.render();
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
	    var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;
	
	    // recompute if maxSize
	    if (isMaxSized) {
	      if (rotate) {
	        // Current page is displayed in the middle of the visible ones
	        startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
	        endPage = startPage + maxSize - 1;
	
	        // Adjust if limit is exceeded
	        if (endPage > totalPages) {
	          endPage = totalPages;
	          startPage = endPage - maxSize + 1;
	        }
	      } else {
	        // Visible pages are paginated with maxSize
	        startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;
	
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
	    if (isMaxSized && maxSize > 0 && (!rotate || forceEllipses || boundaryLinkNumbers)) {
	      if (startPage > 1) {
	        if (!boundaryLinkNumbers || startPage > 3) { //need ellipsis for all options unless range is too close to beginning
	        var previousPageSet = makePage(startPage - 1, '...', false);
	        pages.unshift(previousPageSet);
	      }
	        if (boundaryLinkNumbers) {
	          if (startPage === 3) { //need to replace ellipsis when the buttons would be sequential
	            var secondPageLink = makePage(2, '2', false);
	            pages.unshift(secondPageLink);
	          }
	          //add the first page
	          var firstPageLink = makePage(1, '1', false);
	          pages.unshift(firstPageLink);
	        }
	      }
	
	      if (endPage < totalPages) {
	        if (!boundaryLinkNumbers || endPage < totalPages - 2) { //need ellipsis for all options unless range is too close to end
	        var nextPageSet = makePage(endPage + 1, '...', false);
	        pages.push(nextPageSet);
	      }
	        if (boundaryLinkNumbers) {
	          if (endPage === totalPages - 2) { //need to replace ellipsis when the buttons would be sequential
	            var secondToLastPageLink = makePage(totalPages - 1, totalPages - 1, false);
	            pages.push(secondToLastPageLink);
	          }
	          //add the last page
	          var lastPageLink = makePage(totalPages, totalPages, false);
	          pages.push(lastPageLink);
	        }
	      }
	    }
	    return pages;
	  }
	
	  var originalRender = this.render;
	  this.render = function() {
	    originalRender();
	    if ($scope.page > 0 && $scope.page <= $scope.totalPages) {
	      $scope.pages = getPages($scope.page, $scope.totalPages);
	    }
	  };
	}])
	
	.constant('uibPaginationConfig', {
	  itemsPerPage: 10,
	  boundaryLinks: false,
	  boundaryLinkNumbers: false,
	  directionLinks: true,
	  firstText: 'First',
	  previousText: 'Previous',
	  nextText: 'Next',
	  lastText: 'Last',
	  rotate: true,
	  forceEllipses: false
	})
	
	.directive('uibPagination', ['$parse', 'uibPaginationConfig', function($parse, uibPaginationConfig) {
	  return {
	    scope: {
	      totalItems: '=',
	      firstText: '@',
	      previousText: '@',
	      nextText: '@',
	      lastText: '@',
	      ngDisabled:'='
	    },
	    require: ['uibPagination', '?ngModel'],
	    controller: 'UibPaginationController',
	    controllerAs: 'pagination',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/pagination/pagination.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }
	
	      paginationCtrl.init(ngModelCtrl, uibPaginationConfig);
	    }
	  };
	}]);
	
	/**
	 * The following features are still outstanding: animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, html tooltips, and selector delegation.
	 */
	angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.stackedMap'])
	
	/**
	 * The $tooltip service creates tooltip- and popover-like directives as well as
	 * houses global options for them.
	 */
	.provider('$uibTooltip', function() {
	  // The default options tooltip and popover.
	  var defaultOptions = {
	    placement: 'top',
	    placementClassPrefix: '',
	    animation: true,
	    popupDelay: 0,
	    popupCloseDelay: 0,
	    useContentExp: false
	  };
	
	  // Default hide triggers for each show trigger
	  var triggerMap = {
	    'mouseenter': 'mouseleave',
	    'click': 'click',
	    'outsideClick': 'outsideClick',
	    'focus': 'blur',
	    'none': ''
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
		this.options = function(value) {
			angular.extend(globalOptions, value);
		};
	
	  /**
	   * This allows you to extend the set of trigger mappings available. E.g.:
	   *
	   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
	   */
	  this.setTriggers = function setTriggers(triggers) {
	    angular.extend(triggerMap, triggers);
	  };
	
	  /**
	   * This is a helper function for translating camel-case to snake_case.
	   */
	  function snake_case(name) {
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
	  this.$get = ['$window', '$compile', '$timeout', '$document', '$uibPosition', '$interpolate', '$rootScope', '$parse', '$$stackedMap', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
	    var openedTooltips = $$stackedMap.createNew();
	    $document.on('keypress', keypressListener);
	
	    $rootScope.$on('$destroy', function() {
	      $document.off('keypress', keypressListener);
	    });
	
	    function keypressListener(e) {
	      if (e.which === 27) {
	        var last = openedTooltips.top();
	        if (last) {
	          last.value.close();
	          openedTooltips.removeTop();
	          last = null;
	        }
	      }
	    }
	
	    return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
	      options = angular.extend({}, defaultOptions, globalOptions, options);
	
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
	      function getTriggers(trigger) {
	        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
	        var hide = show.map(function(trigger) {
	          return triggerMap[trigger] || trigger;
	        });
	        return {
	          show: show,
	          hide: hide
	        };
	      }
	
	      var directiveName = snake_case(ttType);
	
	      var startSym = $interpolate.startSymbol();
	      var endSym = $interpolate.endSymbol();
	      var template =
	        '<div '+ directiveName + '-popup '+
	          'title="' + startSym + 'title' + endSym + '" '+
	          (options.useContentExp ?
	            'content-exp="contentExp()" ' :
	            'content="' + startSym + 'content' + endSym + '" ') +
	          'placement="' + startSym + 'placement' + endSym + '" '+
	          'popup-class="' + startSym + 'popupClass' + endSym + '" '+
	          'animation="animation" ' +
	          'is-open="isOpen"' +
	          'origin-scope="origScope" ' +
	          'style="visibility: hidden; display: block; top: -9999px; left: -9999px;"' +
	          '>' +
	        '</div>';
	
	      return {
	        compile: function(tElem, tAttrs) {
	          var tooltipLinker = $compile(template);
	
	          return function link(scope, element, attrs, tooltipCtrl) {
	            var tooltip;
	            var tooltipLinkedScope;
	            var transitionTimeout;
	            var showTimeout;
	            var hideTimeout;
	            var positionTimeout;
	            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
	            var triggers = getTriggers(undefined);
	            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
	            var ttScope = scope.$new(true);
	            var repositionScheduled = false;
	            var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
	            var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
	            var observers = [];
	
	            var positionTooltip = function() {
	              // check if tooltip exists and is not empty
	              if (!tooltip || !tooltip.html()) { return; }
	
	              if (!positionTimeout) {
	                positionTimeout = $timeout(function() {
	                  // Reset the positioning.
	                  tooltip.css({ top: 0, left: 0 });
	
	                  // Now set the calculated positioning.
	                  var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
	                  tooltip.css({ top: ttPosition.top + 'px', left: ttPosition.left + 'px', visibility: 'visible' });
	
	                  // If the placement class is prefixed, still need
	                  // to remove the TWBS standard class.
	                  if (options.placementClassPrefix) {
	                    tooltip.removeClass('top bottom left right');
	                  }
	
	                  tooltip.removeClass(
	                    options.placementClassPrefix + 'top ' +
	                    options.placementClassPrefix + 'top-left ' +
	                    options.placementClassPrefix + 'top-right ' +
	                    options.placementClassPrefix + 'bottom ' +
	                    options.placementClassPrefix + 'bottom-left ' +
	                    options.placementClassPrefix + 'bottom-right ' +
	                    options.placementClassPrefix + 'left ' +
	                    options.placementClassPrefix + 'left-top ' +
	                    options.placementClassPrefix + 'left-bottom ' +
	                    options.placementClassPrefix + 'right ' +
	                    options.placementClassPrefix + 'right-top ' +
	                    options.placementClassPrefix + 'right-bottom');
	
	                  var placement = ttPosition.placement.split('-');
	                  tooltip.addClass(placement[0], options.placementClassPrefix + ttPosition.placement);
	                  $position.positionArrow(tooltip, ttPosition.placement);
	
	                  positionTimeout = null;
	                }, 0, false);
	              }
	            };
	
	            // Set up the correct scope to allow transclusion later
	            ttScope.origScope = scope;
	
	            // By default, the tooltip is not open.
	            // TODO add ability to start tooltip opened
	            ttScope.isOpen = false;
	            openedTooltips.add(ttScope, {
	              close: hide
	            });
	
	            function toggleTooltipBind() {
	              if (!ttScope.isOpen) {
	                showTooltipBind();
	              } else {
	                hideTooltipBind();
	              }
	            }
	
	            // Show the tooltip with delay if specified, otherwise show it immediately
	            function showTooltipBind() {
	              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
	                return;
	              }
	
	              cancelHide();
	              prepareTooltip();
	
	              if (ttScope.popupDelay) {
	                // Do nothing if the tooltip was already scheduled to pop-up.
	                // This happens if show is triggered multiple times before any hide is triggered.
	                if (!showTimeout) {
	                  showTimeout = $timeout(show, ttScope.popupDelay, false);
	                }
	              } else {
	                show();
	              }
	            }
	
	            function hideTooltipBind() {
	              cancelShow();
	
	              if (ttScope.popupCloseDelay) {
	                if (!hideTimeout) {
	                  hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
	                }
	              } else {
	                hide();
	              }
	            }
	
	            // Show the tooltip popup element.
	            function show() {
	              cancelShow();
	              cancelHide();
	
	              // Don't show empty tooltips.
	              if (!ttScope.content) {
	                return angular.noop;
	              }
	
	              createTooltip();
	
	              // And show the tooltip.
	              ttScope.$evalAsync(function() {
	                ttScope.isOpen = true;
	                assignIsOpen(true);
	                positionTooltip();
	              });
	            }
	
	            function cancelShow() {
	              if (showTimeout) {
	                $timeout.cancel(showTimeout);
	                showTimeout = null;
	              }
	
	              if (positionTimeout) {
	                $timeout.cancel(positionTimeout);
	                positionTimeout = null;
	              }
	            }
	
	            // Hide the tooltip popup element.
	            function hide() {
	              if (!ttScope) {
	                return;
	              }
	
	              // First things first: we don't show it anymore.
	              ttScope.$evalAsync(function() {
	                ttScope.isOpen = false;
	                assignIsOpen(false);
	                // And now we remove it from the DOM. However, if we have animation, we
	                // need to wait for it to expire beforehand.
	                // FIXME: this is a placeholder for a port of the transitions library.
	                // The fade transition in TWBS is 150ms.
	                if (ttScope.animation) {
	                  if (!transitionTimeout) {
	                    transitionTimeout = $timeout(removeTooltip, 150, false);
	                  }
	                } else {
	                  removeTooltip();
	                }
	              });
	            }
	
	            function cancelHide() {
	              if (hideTimeout) {
	                $timeout.cancel(hideTimeout);
	                hideTimeout = null;
	              }
	              if (transitionTimeout) {
	                $timeout.cancel(transitionTimeout);
	                transitionTimeout = null;
	              }
	            }
	
	            function createTooltip() {
	              // There can only be one tooltip element per directive shown at once.
	              if (tooltip) {
	                return;
	              }
	
	              tooltipLinkedScope = ttScope.$new();
	              tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
	                if (appendToBody) {
	                  $document.find('body').append(tooltip);
	                } else {
	                  element.after(tooltip);
	                }
	              });
	
	              prepObservers();
	            }
	
	            function removeTooltip() {
	              cancelShow();
	              cancelHide();
	              unregisterObservers();
	
	              if (tooltip) {
	                tooltip.remove();
	                tooltip = null;
	              }
	              if (tooltipLinkedScope) {
	                tooltipLinkedScope.$destroy();
	                tooltipLinkedScope = null;
	              }
	            }
	
	            /**
	             * Set the initial scope values. Once
	             * the tooltip is created, the observers
	             * will be added to keep things in sync.
	             */
	            function prepareTooltip() {
	              ttScope.title = attrs[prefix + 'Title'];
	              if (contentParse) {
	                ttScope.content = contentParse(scope);
	              } else {
	                ttScope.content = attrs[ttType];
	              }
	
	              ttScope.popupClass = attrs[prefix + 'Class'];
	              ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;
	
	              var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
	              var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
	              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
	              ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
	            }
	
	            function assignIsOpen(isOpen) {
	              if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
	                isOpenParse.assign(scope, isOpen);
	              }
	            }
	
	            ttScope.contentExp = function() {
	              return ttScope.content;
	            };
	
	            /**
	             * Observe the relevant attributes.
	             */
	            attrs.$observe('disabled', function(val) {
	              if (val) {
	                cancelShow();
	              }
	
	              if (val && ttScope.isOpen) {
	                hide();
	              }
	            });
	
	            if (isOpenParse) {
	              scope.$watch(isOpenParse, function(val) {
	                if (ttScope && !val === ttScope.isOpen) {
	                  toggleTooltipBind();
	                }
	              });
	            }
	
	            function prepObservers() {
	              observers.length = 0;
	
	              if (contentParse) {
	                observers.push(
	                  scope.$watch(contentParse, function(val) {
	                    ttScope.content = val;
	                    if (!val && ttScope.isOpen) {
	                      hide();
	                    }
	                  })
	                );
	
	                observers.push(
	                  tooltipLinkedScope.$watch(function() {
	                    if (!repositionScheduled) {
	                      repositionScheduled = true;
	                      tooltipLinkedScope.$$postDigest(function() {
	                        repositionScheduled = false;
	                        if (ttScope && ttScope.isOpen) {
	                          positionTooltip();
	                        }
	                      });
	                    }
	                  })
	                );
	              } else {
	                observers.push(
	                  attrs.$observe(ttType, function(val) {
	                    ttScope.content = val;
	                    if (!val && ttScope.isOpen) {
	                      hide();
	                    } else {
	                      positionTooltip();
	                    }
	                  })
	                );
	              }
	
	              observers.push(
	                attrs.$observe(prefix + 'Title', function(val) {
	                  ttScope.title = val;
	                  if (ttScope.isOpen) {
	                    positionTooltip();
	                  }
	                })
	              );
	
	              observers.push(
	                attrs.$observe(prefix + 'Placement', function(val) {
	                  ttScope.placement = val ? val : options.placement;
	                  if (ttScope.isOpen) {
	                    positionTooltip();
	                  }
	                })
	              );
	            }
	
	            function unregisterObservers() {
	              if (observers.length) {
	                angular.forEach(observers, function(observer) {
	                  observer();
	                });
	                observers.length = 0;
	              }
	            }
	
	            // hide tooltips/popovers for outsideClick trigger
	            function bodyHideTooltipBind(e) {
	              if (!ttScope || !ttScope.isOpen || !tooltip) {
	                return;
	              }
	              // make sure the tooltip/popover link or tool tooltip/popover itself were not clicked
	              if (!element[0].contains(e.target) && !tooltip[0].contains(e.target)) {
	                hideTooltipBind();
	              }
	            }
	
	            var unregisterTriggers = function() {
	              triggers.show.forEach(function(trigger) {
	                if (trigger === 'outsideClick') {
	                  element.off('click', toggleTooltipBind);
	                } else {
	                  element.off(trigger, showTooltipBind);
	                  element.off(trigger, toggleTooltipBind);
	                }
	              });
	              triggers.hide.forEach(function(trigger) {
	                if (trigger === 'outsideClick') {
	                  $document.off('click', bodyHideTooltipBind);
	                } else {
	                  element.off(trigger, hideTooltipBind);
	                }
	              });
	            };
	
	            function prepTriggers() {
	              var val = attrs[prefix + 'Trigger'];
	              unregisterTriggers();
	
	              triggers = getTriggers(val);
	
	              if (triggers.show !== 'none') {
	                triggers.show.forEach(function(trigger, idx) {
	                  if (trigger === 'outsideClick') {
	                    element.on('click', toggleTooltipBind);
	                    $document.on('click', bodyHideTooltipBind);
	                  } else if (trigger === triggers.hide[idx]) {
	                    element.on(trigger, toggleTooltipBind);
	                  } else if (trigger) {
	                    element.on(trigger, showTooltipBind);
	                    element.on(triggers.hide[idx], hideTooltipBind);
	                  }
	
	                  element.on('keypress', function(e) {
	                    if (e.which === 27) {
	                      hideTooltipBind();
	                    }
	                  });
	                });
	              }
	            }
	
	            prepTriggers();
	
	            var animation = scope.$eval(attrs[prefix + 'Animation']);
	            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;
	
	            var appendToBodyVal;
	            var appendKey = prefix + 'AppendToBody';
	            if (appendKey in attrs && attrs[appendKey] === undefined) {
	              appendToBodyVal = true;
	            } else {
	              appendToBodyVal = scope.$eval(attrs[appendKey]);
	            }
	
	            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;
	
	            // if a tooltip is attached to <body> we need to remove it on
	            // location change as its parent scope will probably not be destroyed
	            // by the change.
	            if (appendToBody) {
	              scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
	                if (ttScope.isOpen) {
	                  hide();
	                }
	              });
	            }
	
	            // Make sure tooltip is destroyed and removed.
	            scope.$on('$destroy', function onDestroyTooltip() {
	              unregisterTriggers();
	              removeTooltip();
	              openedTooltips.remove(ttScope);
	              ttScope = null;
	            });
	          };
	        }
	      };
	    };
	  }];
	})
	
	// This is mostly ngInclude code but with a custom scope
	.directive('uibTooltipTemplateTransclude', [
	         '$animate', '$sce', '$compile', '$templateRequest',
	function ($animate, $sce, $compile, $templateRequest) {
	  return {
	    link: function(scope, elem, attrs) {
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
	
	      scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function(src) {
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
	.directive('uibTooltipClasses', ['$uibPosition', function($uibPosition) {
	  return {
	    restrict: 'A',
	    link: function(scope, element, attrs) {
	      // need to set the primary position so the
	      // arrow has space during position measure.
	      // tooltip.positionTooltip()
	      if (scope.placement) {
	        // // There are no top-left etc... classes
	        // // in TWBS, so we need the primary position.
	        var position = $uibPosition.parsePlacement(scope.placement);
	        element.addClass(position[0]);
	      } else {
	        element.addClass('top');
	      }
	
	      if (scope.popupClass) {
	        element.addClass(scope.popupClass);
	      }
	
	      if (scope.animation()) {
	        element.addClass(attrs.tooltipAnimationClass);
	      }
	    }
	  };
	}])
	
	.directive('uibTooltipPopup', function() {
	  return {
	    replace: true,
	    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-popup.html'
	  };
	})
	
	.directive('uibTooltip', [ '$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltip', 'tooltip', 'mouseenter');
	}])
	
	.directive('uibTooltipTemplatePopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-template-popup.html'
	  };
	})
	
	.directive('uibTooltipTemplate', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltipTemplate', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}])
	
	.directive('uibTooltipHtmlPopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-html-popup.html'
	  };
	})
	
	.directive('uibTooltipHtml', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltipHtml', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}]);
	
	/**
	 * The following features are still outstanding: popup delay, animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, and selector delegatation.
	 */
	angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip'])
	
	.directive('uibPopoverTemplatePopup', function() {
	  return {
	    replace: true,
	    scope: { title: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'uib/template/popover/popover-template.html'
	  };
	})
	
	.directive('uibPopoverTemplate', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {
	    useContentExp: true
	  });
	}])
	
	.directive('uibPopoverHtmlPopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', title: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/popover/popover-html.html'
	  };
	})
	
	.directive('uibPopoverHtml', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopoverHtml', 'popover', 'click', {
	    useContentExp: true
	  });
	}])
	
	.directive('uibPopoverPopup', function() {
	  return {
	    replace: true,
	    scope: { title: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/popover/popover.html'
	  };
	})
	
	.directive('uibPopover', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopover', 'popover', 'click');
	}]);
	
	angular.module('ui.bootstrap.progressbar', [])
	
	.constant('uibProgressConfig', {
	  animate: true,
	  max: 100
	})
	
	.controller('UibProgressController', ['$scope', '$attrs', 'uibProgressConfig', function($scope, $attrs, progressConfig) {
	  var self = this,
	      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;
	
	  this.bars = [];
	  $scope.max = angular.isDefined($scope.max) ? $scope.max : progressConfig.max;
	
	  this.addBar = function(bar, element, attrs) {
	    if (!animate) {
	      element.css({'transition': 'none'});
	    }
	
	    this.bars.push(bar);
	
	    bar.max = $scope.max;
	    bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';
	
	    bar.$watch('value', function(value) {
	      bar.recalculatePercentage();
	    });
	
	    bar.recalculatePercentage = function() {
	      var totalPercentage = self.bars.reduce(function(total, bar) {
	        bar.percent = +(100 * bar.value / bar.max).toFixed(2);
	        return total + bar.percent;
	      }, 0);
	
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
	    this.bars.forEach(function (bar) {
	      bar.recalculatePercentage();
	    });
	  };
	
	  $scope.$watch('max', function(max) {
	    self.bars.forEach(function(bar) {
	      bar.max = $scope.max;
	      bar.recalculatePercentage();
	    });
	  });
	}])
	
	.directive('uibProgress', function() {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'UibProgressController',
	    require: 'uibProgress',
	    scope: {
	      max: '=?'
	    },
	    templateUrl: 'uib/template/progressbar/progress.html'
	  };
	})
	
	.directive('uibBar', function() {
	  return {
	    replace: true,
	    transclude: true,
	    require: '^uibProgress',
	    scope: {
	      value: '=',
	      type: '@'
	    },
	    templateUrl: 'uib/template/progressbar/bar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, element, attrs);
	    }
	  };
	})
	
	.directive('uibProgressbar', function() {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'UibProgressController',
	    scope: {
	      value: '=',
	      max: '=?',
	      type: '@'
	    },
	    templateUrl: 'uib/template/progressbar/progressbar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title});
	    }
	  };
	});
	
	angular.module('ui.bootstrap.rating', [])
	
	.constant('uibRatingConfig', {
	  max: 5,
	  stateOn: null,
	  stateOff: null,
	  titles : ['one', 'two', 'three', 'four', 'five']
	})
	
	.controller('UibRatingController', ['$scope', '$attrs', 'uibRatingConfig', function($scope, $attrs, ratingConfig) {
	  var ngModelCtrl = { $setViewValue: angular.noop };
	
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
	    var tmpTitles = angular.isDefined($attrs.titles) ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles ;
	    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ?
	      tmpTitles : ratingConfig.titles;
	
	    var ratingStates = angular.isDefined($attrs.ratingStates) ?
	      $scope.$parent.$eval($attrs.ratingStates) :
	      new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
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
	    }
	
	    return this.titles[index];
	  };
	
	  $scope.rate = function(value) {
	    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
	      ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue === value ? 0 : value);
	      ngModelCtrl.$render();
	    }
	  };
	
	  $scope.enter = function(value) {
	    if (!$scope.readonly) {
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
	      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
	    }
	  };
	
	  this.render = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	  };
	}])
	
	.directive('uibRating', function() {
	  return {
	    require: ['uibRating', 'ngModel'],
	    scope: {
	      readonly: '=?',
	      onHover: '&',
	      onLeave: '&'
	    },
	    controller: 'UibRatingController',
	    templateUrl: 'uib/template/rating/rating.html',
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      ratingCtrl.init(ngModelCtrl);
	    }
	  };
	});
	
	angular.module('ui.bootstrap.tabs', [])
	
	.controller('UibTabsetController', ['$scope', function ($scope) {
	  var ctrl = this,
	      tabs = ctrl.tabs = $scope.tabs = [];
	
	  ctrl.select = function(selectedTab) {
	    angular.forEach(tabs, function(tab) {
	      if (tab.active && tab !== selectedTab) {
	        tab.active = false;
	        tab.onDeselect();
	        selectedTab.selectCalled = false;
	      }
	    });
	    selectedTab.active = true;
	    // only call select if it has not already been called
	    if (!selectedTab.selectCalled) {
	      selectedTab.onSelect();
	      selectedTab.selectCalled = true;
	    }
	  };
	
	  ctrl.addTab = function addTab(tab) {
	    tabs.push(tab);
	    // we can't run the select function on the first tab
	    // since that would select it twice
	    if (tabs.length === 1 && tab.active !== false) {
	      tab.active = true;
	    } else if (tab.active) {
	      ctrl.select(tab);
	    } else {
	      tab.active = false;
	    }
	  };
	
	  ctrl.removeTab = function removeTab(tab) {
	    var index = tabs.indexOf(tab);
	    //Select a new tab if the tab to be removed is selected and not destroyed
	    if (tab.active && tabs.length > 1 && !destroyed) {
	      //If this is the last tab, select the previous tab. else, the next tab.
	      var newActiveIndex = index === tabs.length - 1 ? index - 1 : index + 1;
	      ctrl.select(tabs[newActiveIndex]);
	    }
	    tabs.splice(index, 1);
	  };
	
	  var destroyed;
	  $scope.$on('$destroy', function() {
	    destroyed = true;
	  });
	}])
	
	.directive('uibTabset', function() {
	  return {
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@'
	    },
	    controller: 'UibTabsetController',
	    templateUrl: 'uib/template/tabs/tabset.html',
	    link: function(scope, element, attrs) {
	      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
	      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
	    }
	  };
	})
	
	.directive('uibTab', ['$parse', function($parse) {
	  return {
	    require: '^uibTabset',
	    replace: true,
	    templateUrl: 'uib/template/tabs/tab.html',
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
	    controllerAs: 'tab',
	    link: function(scope, elm, attrs, tabsetCtrl, transclude) {
	      scope.$watch('active', function(active) {
	        if (active) {
	          tabsetCtrl.select(scope);
	        }
	      });
	
	      scope.disabled = false;
	      if (attrs.disable) {
	        scope.$parent.$watch($parse(attrs.disable), function(value) {
	          scope.disabled = !! value;
	        });
	      }
	
	      scope.select = function() {
	        if (!scope.disabled) {
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
	
	.directive('uibTabHeadingTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^uibTab',
	    link: function(scope, elm) {
	      scope.$watch('headingElement', function updateHeadingElement(heading) {
	        if (heading) {
	          elm.html('');
	          elm.append(heading);
	        }
	      });
	    }
	  };
	})
	
	.directive('uibTabContentTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^uibTabset',
	    link: function(scope, elm, attrs) {
	      var tab = scope.$eval(attrs.uibTabContentTransclude);
	
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
	    return node.tagName && (
	      node.hasAttribute('uib-tab-heading') ||
	      node.hasAttribute('data-uib-tab-heading') ||
	      node.hasAttribute('x-uib-tab-heading') ||
	      node.tagName.toLowerCase() === 'uib-tab-heading' ||
	      node.tagName.toLowerCase() === 'data-uib-tab-heading' ||
	      node.tagName.toLowerCase() === 'x-uib-tab-heading'
	    );
	  }
	});
	
	angular.module('ui.bootstrap.timepicker', [])
	
	.constant('uibTimepickerConfig', {
	  hourStep: 1,
	  minuteStep: 1,
	  secondStep: 1,
	  showMeridian: true,
	  showSeconds: false,
	  meridians: null,
	  readonlyInput: false,
	  mousewheel: true,
	  arrowkeys: true,
	  showSpinners: true
	})
	
	.controller('UibTimepickerController', ['$scope', '$element', '$attrs', '$parse', '$log', '$locale', 'uibTimepickerConfig', function($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig) {
	  var selected = new Date(),
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	      meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;
	
	  $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0;
	  $element.removeAttr('tabindex');
	
	  this.init = function(ngModelCtrl_, inputs) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;
	
	    ngModelCtrl.$formatters.unshift(function(modelValue) {
	      return modelValue ? new Date(modelValue) : null;
	    });
	
	    var hoursInputEl = inputs.eq(0),
	        minutesInputEl = inputs.eq(1),
	        secondsInputEl = inputs.eq(2);
	
	    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
	
	    if (mousewheel) {
	      this.setupMousewheelEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	    }
	
	    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
	    if (arrowkeys) {
	      this.setupArrowkeyEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	    }
	
	    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
	    this.setupInputEvents(hoursInputEl, minutesInputEl, secondsInputEl);
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
	
	  var disabled = false;
	  if ($attrs.ngDisabled) {
	    $scope.$parent.$watch($parse($attrs.ngDisabled), function(value) {
	      disabled = value;
	    });
	  }
	
	  $scope.noIncrementHours = function() {
	    var incrementedSelected = addMinutes(selected, hourStep * 60);
	    return disabled || incrementedSelected > max ||
	      incrementedSelected < selected && incrementedSelected < min;
	  };
	
	  $scope.noDecrementHours = function() {
	    var decrementedSelected = addMinutes(selected, -hourStep * 60);
	    return disabled || decrementedSelected < min ||
	      decrementedSelected > selected && decrementedSelected > max;
	  };
	
	  $scope.noIncrementMinutes = function() {
	    var incrementedSelected = addMinutes(selected, minuteStep);
	    return disabled || incrementedSelected > max ||
	      incrementedSelected < selected && incrementedSelected < min;
	  };
	
	  $scope.noDecrementMinutes = function() {
	    var decrementedSelected = addMinutes(selected, -minuteStep);
	    return disabled || decrementedSelected < min ||
	      decrementedSelected > selected && decrementedSelected > max;
	  };
	
	  $scope.noIncrementSeconds = function() {
	    var incrementedSelected = addSeconds(selected, secondStep);
	    return disabled || incrementedSelected > max ||
	      incrementedSelected < selected && incrementedSelected < min;
	  };
	
	  $scope.noDecrementSeconds = function() {
	    var decrementedSelected = addSeconds(selected, -secondStep);
	    return disabled || decrementedSelected < min ||
	      decrementedSelected > selected && decrementedSelected > max;
	  };
	
	  $scope.noToggleMeridian = function() {
	    if (selected.getHours() < 12) {
	      return disabled || addMinutes(selected, 12 * 60) > max;
	    }
	
	    return disabled || addMinutes(selected, -12 * 60) < min;
	  };
	
	  var secondStep = timepickerConfig.secondStep;
	  if ($attrs.secondStep) {
	    $scope.$parent.$watch($parse($attrs.secondStep), function(value) {
	      secondStep = parseInt(value, 10);
	    });
	  }
	
	  $scope.showSeconds = timepickerConfig.showSeconds;
	  if ($attrs.showSeconds) {
	    $scope.$parent.$watch($parse($attrs.showSeconds), function(value) {
	      $scope.showSeconds = !!value;
	    });
	  }
	
	  // 12H / 24H mode
	  $scope.showMeridian = timepickerConfig.showMeridian;
	  if ($attrs.showMeridian) {
	    $scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
	      $scope.showMeridian = !!value;
	
	      if (ngModelCtrl.$error.time) {
	        // Evaluate from template
	        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
	        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	          selected.setHours(hours);
	          refresh();
	        }
	      } else {
	        updateTemplate();
	      }
	    });
	  }
	
	  // Get $scope.hours in 24H mode if valid
	  function getHoursFromTemplate() {
	    var hours = parseInt($scope.hours, 10);
	    var valid = $scope.showMeridian ? hours > 0 && hours < 13 :
	      hours >= 0 && hours < 24;
	    if (!valid) {
	      return undefined;
	    }
	
	    if ($scope.showMeridian) {
	      if (hours === 12) {
	        hours = 0;
	      }
	      if ($scope.meridian === meridians[1]) {
	        hours = hours + 12;
	      }
	    }
	    return hours;
	  }
	
	  function getMinutesFromTemplate() {
	    var minutes = parseInt($scope.minutes, 10);
	    return minutes >= 0 && minutes < 60 ? minutes : undefined;
	  }
	
	  function getSecondsFromTemplate() {
	    var seconds = parseInt($scope.seconds, 10);
	    return seconds >= 0 && seconds < 60 ? seconds : undefined;
	  }
	
	  function pad(value) {
	    if (value === null) {
	      return '';
	    }
	
	    return angular.isDefined(value) && value.toString().length < 2 ?
	      '0' + value : value.toString();
	  }
	
	  // Respond on mousewheel spin
	  this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
	    var isScrollingUp = function(e) {
	      if (e.originalEvent) {
	        e = e.originalEvent;
	      }
	      //pick correct delta variable depending on event
	      var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
	      return e.detail || delta > 0;
	    };
	
	    hoursInputEl.bind('mousewheel wheel', function(e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
	      }
	      e.preventDefault();
	    });
	
	    minutesInputEl.bind('mousewheel wheel', function(e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
	      }
	      e.preventDefault();
	    });
	
	     secondsInputEl.bind('mousewheel wheel', function(e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementSeconds() : $scope.decrementSeconds());
	      }
	      e.preventDefault();
	    });
	  };
	
	  // Respond on up/down arrowkeys
	  this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
	    hoursInputEl.bind('keydown', function(e) {
	      if (!disabled) {
	        if (e.which === 38) { // up
	          e.preventDefault();
	          $scope.incrementHours();
	          $scope.$apply();
	        } else if (e.which === 40) { // down
	          e.preventDefault();
	          $scope.decrementHours();
	          $scope.$apply();
	        }
	      }
	    });
	
	    minutesInputEl.bind('keydown', function(e) {
	      if (!disabled) {
	        if (e.which === 38) { // up
	          e.preventDefault();
	          $scope.incrementMinutes();
	          $scope.$apply();
	        } else if (e.which === 40) { // down
	          e.preventDefault();
	          $scope.decrementMinutes();
	          $scope.$apply();
	        }
	      }
	    });
	
	    secondsInputEl.bind('keydown', function(e) {
	      if (!disabled) {
	        if (e.which === 38) { // up
	          e.preventDefault();
	          $scope.incrementSeconds();
	          $scope.$apply();
	        } else if (e.which === 40) { // down
	          e.preventDefault();
	          $scope.decrementSeconds();
	          $scope.$apply();
	        }
	      }
	    });
	  };
	
	  this.setupInputEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
	    if ($scope.readonlyInput) {
	      $scope.updateHours = angular.noop;
	      $scope.updateMinutes = angular.noop;
	      $scope.updateSeconds = angular.noop;
	      return;
	    }
	
	    var invalidate = function(invalidHours, invalidMinutes, invalidSeconds) {
	      ngModelCtrl.$setViewValue(null);
	      ngModelCtrl.$setValidity('time', false);
	      if (angular.isDefined(invalidHours)) {
	        $scope.invalidHours = invalidHours;
	      }
	
	      if (angular.isDefined(invalidMinutes)) {
	        $scope.invalidMinutes = invalidMinutes;
	      }
	
	      if (angular.isDefined(invalidSeconds)) {
	        $scope.invalidSeconds = invalidSeconds;
	      }
	    };
	
	    $scope.updateHours = function() {
	      var hours = getHoursFromTemplate(),
	        minutes = getMinutesFromTemplate();
	
	      ngModelCtrl.$setDirty();
	
	      if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	        selected.setHours(hours);
	        selected.setMinutes(minutes);
	        if (selected < min || selected > max) {
	          invalidate(true);
	        } else {
	          refresh('h');
	        }
	      } else {
	        invalidate(true);
	      }
	    };
	
	    hoursInputEl.bind('blur', function(e) {
	      ngModelCtrl.$setTouched();
	      if ($scope.hours === null || $scope.hours === '') {
	        invalidate(true);
	      } else if (!$scope.invalidHours && $scope.hours < 10) {
	        $scope.$apply(function() {
	          $scope.hours = pad($scope.hours);
	        });
	      }
	    });
	
	    $scope.updateMinutes = function() {
	      var minutes = getMinutesFromTemplate(),
	        hours = getHoursFromTemplate();
	
	      ngModelCtrl.$setDirty();
	
	      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
	        selected.setHours(hours);
	        selected.setMinutes(minutes);
	        if (selected < min || selected > max) {
	          invalidate(undefined, true);
	        } else {
	          refresh('m');
	        }
	      } else {
	        invalidate(undefined, true);
	      }
	    };
	
	    minutesInputEl.bind('blur', function(e) {
	      ngModelCtrl.$setTouched();
	      if ($scope.minutes === null) {
	        invalidate(undefined, true);
	      } else if (!$scope.invalidMinutes && $scope.minutes < 10) {
	        $scope.$apply(function() {
	          $scope.minutes = pad($scope.minutes);
	        });
	      }
	    });
	
	    $scope.updateSeconds = function() {
	      var seconds = getSecondsFromTemplate();
	
	      ngModelCtrl.$setDirty();
	
	      if (angular.isDefined(seconds)) {
	        selected.setSeconds(seconds);
	        refresh('s');
	      } else {
	        invalidate(undefined, undefined, true);
	      }
	    };
	
	    secondsInputEl.bind('blur', function(e) {
	      if (!$scope.invalidSeconds && $scope.seconds < 10) {
	        $scope.$apply( function() {
	          $scope.seconds = pad($scope.seconds);
	        });
	      }
	    });
	
	  };
	
	  this.render = function() {
	    var date = ngModelCtrl.$viewValue;
	
	    if (isNaN(date)) {
	      ngModelCtrl.$setValidity('time', false);
	      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	    } else {
	      if (date) {
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
	  function refresh(keyboardChange) {
	    makeValid();
	    ngModelCtrl.$setViewValue(new Date(selected));
	    updateTemplate(keyboardChange);
	  }
	
	  function makeValid() {
	    ngModelCtrl.$setValidity('time', true);
	    $scope.invalidHours = false;
	    $scope.invalidMinutes = false;
	    $scope.invalidSeconds = false;
	  }
	
	  function updateTemplate(keyboardChange) {
	    if (!ngModelCtrl.$modelValue) {
	      $scope.hours = null;
	      $scope.minutes = null;
	      $scope.seconds = null;
	      $scope.meridian = meridians[0];
	    } else {
	      var hours = selected.getHours(),
	        minutes = selected.getMinutes(),
	        seconds = selected.getSeconds();
	
	      if ($scope.showMeridian) {
	        hours = hours === 0 || hours === 12 ? 12 : hours % 12; // Convert 24 to 12 hour system
	      }
	
	      $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
	      if (keyboardChange !== 'm') {
	        $scope.minutes = pad(minutes);
	      }
	      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
	
	      if (keyboardChange !== 's') {
	        $scope.seconds = pad(seconds);
	      }
	      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
	    }
	  }
	
	  function addSecondsToSelected(seconds) {
	    selected = addSeconds(selected, seconds);
	    refresh();
	  }
	
	  function addMinutes(selected, minutes) {
	    return addSeconds(selected, minutes*60);
	  }
	
	  function addSeconds(date, seconds) {
	    var dt = new Date(date.getTime() + seconds * 1000);
	    var newDate = new Date(date);
	    newDate.setHours(dt.getHours(), dt.getMinutes(), dt.getSeconds());
	    return newDate;
	  }
	
	  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
	    $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;
	
	  $scope.incrementHours = function() {
	    if (!$scope.noIncrementHours()) {
	      addSecondsToSelected(hourStep * 60 * 60);
	    }
	  };
	
	  $scope.decrementHours = function() {
	    if (!$scope.noDecrementHours()) {
	      addSecondsToSelected(-hourStep * 60 * 60);
	    }
	  };
	
	  $scope.incrementMinutes = function() {
	    if (!$scope.noIncrementMinutes()) {
	      addSecondsToSelected(minuteStep * 60);
	    }
	  };
	
	  $scope.decrementMinutes = function() {
	    if (!$scope.noDecrementMinutes()) {
	      addSecondsToSelected(-minuteStep * 60);
	    }
	  };
	
	  $scope.incrementSeconds = function() {
	    if (!$scope.noIncrementSeconds()) {
	      addSecondsToSelected(secondStep);
	    }
	  };
	
	  $scope.decrementSeconds = function() {
	    if (!$scope.noDecrementSeconds()) {
	      addSecondsToSelected(-secondStep);
	    }
	  };
	
	  $scope.toggleMeridian = function() {
	    var minutes = getMinutesFromTemplate(),
	        hours = getHoursFromTemplate();
	
	    if (!$scope.noToggleMeridian()) {
	      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
	        addSecondsToSelected(12 * 60 * (selected.getHours() < 12 ? 60 : -60));
	      } else {
	        $scope.meridian = $scope.meridian === meridians[0] ? meridians[1] : meridians[0];
	      }
	    }
	  };
	
	  $scope.blur = function() {
	    ngModelCtrl.$setTouched();
	  };
	}])
	
	.directive('uibTimepicker', function() {
	  return {
	    require: ['uibTimepicker', '?^ngModel'],
	    controller: 'UibTimepickerController',
	    controllerAs: 'timepicker',
	    replace: true,
	    scope: {},
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/timepicker/timepicker.html';
	    },
	    link: function(scope, element, attrs, ctrls) {
	      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      if (ngModelCtrl) {
	        timepickerCtrl.init(ngModelCtrl, element.find('input'));
	      }
	    }
	  };
	});
	
	angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.debounce', 'ui.bootstrap.position'])
	
	/**
	 * A helper service that can parse typeahead's syntax (string provided by users)
	 * Extracted to a separate service for ease of unit testing
	 */
	  .factory('uibTypeaheadParser', ['$parse', function($parse) {
	    //                      00000111000000000000022200000000000000003333333333333330000000000044000
	    var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
	    return {
	      parse: function(input) {
	        var match = input.match(TYPEAHEAD_REGEXP);
	        if (!match) {
	          throw new Error(
	            'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
	              ' but got "' + input + '".');
	        }
	
	        return {
	          itemName: match[3],
	          source: $parse(match[4]),
	          viewMapper: $parse(match[2] || match[1]),
	          modelMapper: $parse(match[1])
	        };
	      }
	    };
	  }])
	
	  .controller('UibTypeaheadController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$$debounce', '$uibPosition', 'uibTypeaheadParser',
	    function(originalScope, element, attrs, $compile, $parse, $q, $timeout, $document, $window, $rootScope, $$debounce, $position, typeaheadParser) {
	    var HOT_KEYS = [9, 13, 27, 38, 40];
	    var eventDebounceTime = 200;
	    var modelCtrl, ngModelOptions;
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
	    originalScope.$watch(attrs.typeaheadEditable, function (newVal) {
	      isEditable = newVal !== false;
	    });
	
	    //binding to a variable that indicates if matches are being retrieved asynchronously
	    var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;
	
	    //a callback executed when a match is selected
	    var onSelectCallback = $parse(attrs.typeaheadOnSelect);
	
	    //should it select highlighted popup value when losing focus?
	    var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;
	
	    //binding to a variable that indicates if there were no results after the query is completed
	    var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;
	
	    var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;
	
	    var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;
	
	    var appendTo = attrs.typeaheadAppendTo ?
	      originalScope.$eval(attrs.typeaheadAppendTo) : null;
	
	    var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;
	
	    //If input matches an item of the list exactly, select it automatically
	    var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;
	
	    //binding to a variable that indicates if dropdown is open
	    var isOpenSetter = $parse(attrs.typeaheadIsOpen).assign || angular.noop;
	
	    var showHint = originalScope.$eval(attrs.typeaheadShowHint) || false;
	
	    //INTERNAL VARIABLES
	
	    //model setter executed upon match selection
	    var parsedModel = $parse(attrs.ngModel);
	    var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
	    var $setModelValue = function(scope, newValue) {
	      if (angular.isFunction(parsedModel(originalScope)) &&
	        ngModelOptions && ngModelOptions.$options && ngModelOptions.$options.getterSetter) {
	        return invokeModelSetter(scope, {$$$p: newValue});
	      }
	
	      return parsedModel.assign(scope, newValue);
	    };
	
	    //expressions used by typeahead
	    var parserResult = typeaheadParser.parse(attrs.uibTypeahead);
	
	    var hasFocus;
	
	    //Used to avoid bug in iOS webview where iOS keyboard does not fire
	    //mousedown & mouseup events
	    //Issue #3699
	    var selected;
	
	    //create a child scope for the typeahead directive so we are not polluting original scope
	    //with typeahead-specific data (matches, query etc.)
	    var scope = originalScope.$new();
	    var offDestroy = originalScope.$on('$destroy', function() {
	      scope.$destroy();
	    });
	    scope.$on('$destroy', offDestroy);
	
	    // WAI-ARIA
	    var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
	    element.attr({
	      'aria-autocomplete': 'list',
	      'aria-expanded': false,
	      'aria-owns': popupId
	    });
	
	    var inputsContainer, hintInputElem;
	    //add read-only input to show hint
	    if (showHint) {
	      inputsContainer = angular.element('<div></div>');
	      inputsContainer.css('position', 'relative');
	      element.after(inputsContainer);
	      hintInputElem = element.clone();
	      hintInputElem.attr('placeholder', '');
	      hintInputElem.val('');
	      hintInputElem.css({
	        'position': 'absolute',
	        'top': '0px',
	        'left': '0px',
	        'border-color': 'transparent',
	        'box-shadow': 'none',
	        'opacity': 1,
	        'background': 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)',
	        'color': '#999'
	      });
	      element.css({
	        'position': 'relative',
	        'vertical-align': 'top',
	        'background-color': 'transparent'
	      });
	      inputsContainer.append(hintInputElem);
	      hintInputElem.after(element);
	    }
	
	    //pop-up element used to display matches
	    var popUpEl = angular.element('<div uib-typeahead-popup></div>');
	    popUpEl.attr({
	      id: popupId,
	      matches: 'matches',
	      active: 'activeIdx',
	      select: 'select(activeIdx, evt)',
	      'move-in-progress': 'moveInProgress',
	      query: 'query',
	      position: 'position',
	      'assign-is-open': 'assignIsOpen(isOpen)',
	      debounce: 'debounceUpdate'
	    });
	    //custom item template
	    if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
	      popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
	    }
	
	    if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
	      popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
	    }
	
	    var resetHint = function() {
	      if (showHint) {
	        hintInputElem.val('');
	      }
	    };
	
	    var resetMatches = function() {
	      scope.matches = [];
	      scope.activeIdx = -1;
	      element.attr('aria-expanded', false);
	      resetHint();
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
	
	    var getMatchesAsync = function(inputValue, evt) {
	      var locals = {$viewValue: inputValue};
	      isLoadingSetter(originalScope, true);
	      isNoResultsSetter(originalScope, false);
	      $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
	        //it might happen that several async queries were in progress if a user were typing fast
	        //but we are interested only in responses that correspond to the current view value
	        var onCurrentRequest = inputValue === modelCtrl.$viewValue;
	        if (onCurrentRequest && hasFocus) {
	          if (matches && matches.length > 0) {
	            scope.activeIdx = focusFirst ? 0 : -1;
	            isNoResultsSetter(originalScope, false);
	            scope.matches.length = 0;
	
	            //transform labels
	            for (var i = 0; i < matches.length; i++) {
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
	              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
	                $$debounce(function() {
	                  scope.select(0, evt);
	                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
	              } else {
	                scope.select(0, evt);
	              }
	            }
	
	            if (showHint) {
	              var firstLabel = scope.matches[0].label;
	              if (inputValue.length > 0 && firstLabel.slice(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()) {
	                hintInputElem.val(inputValue + firstLabel.slice(inputValue.length));
	              }
	              else {
	                hintInputElem.val('');
	              }
	            }
	          } else {
	            resetMatches();
	            isNoResultsSetter(originalScope, true);
	          }
	        }
	        if (onCurrentRequest) {
	          isLoadingSetter(originalScope, false);
	        }
	      }, function() {
	        resetMatches();
	        isLoadingSetter(originalScope, false);
	        isNoResultsSetter(originalScope, true);
	      });
	    };
	
	    // bind events only if appendToBody params exist - performance feature
	    if (appendToBody) {
	      angular.element($window).on('resize', fireRecalculating);
	      $document.find('body').on('scroll', fireRecalculating);
	    }
	
	    // Declare the debounced function outside recalculating for
	    // proper debouncing
	    var debouncedRecalculate = $$debounce(function() {
	      // if popup is visible
	      if (scope.matches.length) {
	        recalculatePosition();
	      }
	
	      scope.moveInProgress = false;
	    }, eventDebounceTime);
	
	    // Default progress type
	    scope.moveInProgress = false;
	
	    function fireRecalculating() {
	      if (!scope.moveInProgress) {
	        scope.moveInProgress = true;
	        scope.$digest();
	      }
	
	      debouncedRecalculate();
	    }
	
	    // recalculate actual position and set new values to scope
	    // after digest loop is popup in right position
	    function recalculatePosition() {
	      scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	      scope.position.top += element.prop('offsetHeight');
	    }
	
	    //we need to propagate user's query so we can higlight matches
	    scope.query = undefined;
	
	    //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	    var timeoutPromise;
	
	    var scheduleSearchWithTimeout = function(inputValue) {
	      timeoutPromise = $timeout(function() {
	        getMatchesAsync(inputValue);
	      }, waitTime);
	    };
	
	    var cancelPreviousTimeout = function() {
	      if (timeoutPromise) {
	        $timeout.cancel(timeoutPromise);
	      }
	    };
	
	    resetMatches();
	
	    scope.assignIsOpen = function (isOpen) {
	      isOpenSetter(originalScope, isOpen);
	    };
	
	    scope.select = function(activeIdx, evt) {
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
	        $label: parserResult.viewMapper(originalScope, locals),
	        $event: evt
	      });
	
	      resetMatches();
	
	      //return focus to the input element if a match was selected via a mouse click event
	      // use timeout to avoid $rootScope:inprog error
	      if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
	        $timeout(function() { element[0].focus(); }, 0, false);
	      }
	    };
	
	    //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
	    element.on('keydown', function(evt) {
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
	
	      switch (evt.which) {
	        case 9:
	        case 13:
	          scope.$apply(function () {
	            if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
	              $$debounce(function() {
	                scope.select(scope.activeIdx, evt);
	              }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
	            } else {
	              scope.select(scope.activeIdx, evt);
	            }
	          });
	          break;
	        case 27:
	          evt.stopPropagation();
	
	          resetMatches();
	          scope.$digest();
	          break;
	        case 38:
	          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
	          scope.$digest();
	          popUpEl.find('li')[scope.activeIdx].scrollIntoView(false);
	          break;
	        case 40:
	          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
	          scope.$digest();
	          popUpEl.find('li')[scope.activeIdx].scrollIntoView(false);
	          break;
	      }
	    });
	
	    element.bind('focus', function (evt) {
	      hasFocus = true;
	      if (minLength === 0 && !modelCtrl.$viewValue) {
	        $timeout(function() {
	          getMatchesAsync(modelCtrl.$viewValue, evt);
	        }, 0);
	      }
	    });
	
	    element.bind('blur', function(evt) {
	      if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
	        selected = true;
	        scope.$apply(function() {
	          if (angular.isObject(scope.debounceUpdate) && angular.isNumber(scope.debounceUpdate.blur)) {
	            $$debounce(function() {
	              scope.select(scope.activeIdx, evt);
	            }, scope.debounceUpdate.blur);
	          } else {
	            scope.select(scope.activeIdx, evt);
	          }
	        });
	      }
	      if (!isEditable && modelCtrl.$error.editable) {
	        modelCtrl.$viewValue = '';
	        element.val('');
	      }
	      hasFocus = false;
	      selected = false;
	    });
	
	    // Keep reference to click handler to unbind it.
	    var dismissClickHandler = function(evt) {
	      // Issue #3973
	      // Firefox treats right click as a click on document
	      if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
	        resetMatches();
	        if (!$rootScope.$$phase) {
	          scope.$digest();
	        }
	      }
	    };
	
	    $document.on('click', dismissClickHandler);
	
	    originalScope.$on('$destroy', function() {
	      $document.off('click', dismissClickHandler);
	      if (appendToBody || appendTo) {
	        $popup.remove();
	      }
	
	      if (appendToBody) {
	        angular.element($window).off('resize', fireRecalculating);
	        $document.find('body').off('scroll', fireRecalculating);
	      }
	      // Prevent jQuery cache memory leak
	      popUpEl.remove();
	
	      if (showHint) {
	          inputsContainer.remove();
	      }
	    });
	
	    var $popup = $compile(popUpEl)(scope);
	
	    if (appendToBody) {
	      $document.find('body').append($popup);
	    } else if (appendTo) {
	      angular.element(appendTo).eq(0).append($popup);
	    } else {
	      element.after($popup);
	    }
	
	    this.init = function(_modelCtrl, _ngModelOptions) {
	      modelCtrl = _modelCtrl;
	      ngModelOptions = _ngModelOptions;
	
	      scope.debounceUpdate = modelCtrl.$options && $parse(modelCtrl.$options.debounce)(originalScope);
	
	      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
	      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
	      modelCtrl.$parsers.unshift(function(inputValue) {
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
	        }
	
	        if (!inputValue) {
	          // Reset in case user had typed something previously.
	          modelCtrl.$setValidity('editable', true);
	          return null;
	        }
	
	        modelCtrl.$setValidity('editable', false);
	        return undefined;
	      });
	
	      modelCtrl.$formatters.push(function(modelValue) {
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
	        }
	
	        //it might happen that we don't have enough info to properly render input value
	        //we need to check for this situation and simply return model value if we can't apply custom formatting
	        locals[parserResult.itemName] = modelValue;
	        candidateViewValue = parserResult.viewMapper(originalScope, locals);
	        locals[parserResult.itemName] = undefined;
	        emptyViewValue = parserResult.viewMapper(originalScope, locals);
	
	        return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
	      });
	    };
	  }])
	
	  .directive('uibTypeahead', function() {
	    return {
	      controller: 'UibTypeaheadController',
	      require: ['ngModel', '^?ngModelOptions', 'uibTypeahead'],
	      link: function(originalScope, element, attrs, ctrls) {
	        ctrls[2].init(ctrls[0], ctrls[1]);
	      }
	    };
	  })
	
	  .directive('uibTypeaheadPopup', ['$$debounce', function($$debounce) {
	    return {
	      scope: {
	        matches: '=',
	        query: '=',
	        active: '=',
	        position: '&',
	        moveInProgress: '=',
	        select: '&',
	        assignIsOpen: '&',
	        debounce: '&'
	      },
	      replace: true,
	      templateUrl: function(element, attrs) {
	        return attrs.popupTemplateUrl || 'uib/template/typeahead/typeahead-popup.html';
	      },
	      link: function(scope, element, attrs) {
	        scope.templateUrl = attrs.templateUrl;
	
	        scope.isOpen = function() {
	          var isDropdownOpen = scope.matches.length > 0;
	          scope.assignIsOpen({ isOpen: isDropdownOpen });
	          return isDropdownOpen;
	        };
	
	        scope.isActive = function(matchIdx) {
	          return scope.active === matchIdx;
	        };
	
	        scope.selectActive = function(matchIdx) {
	          scope.active = matchIdx;
	        };
	
	        scope.selectMatch = function(activeIdx, evt) {
	          var debounce = scope.debounce();
	          if (angular.isNumber(debounce) || angular.isObject(debounce)) {
	            $$debounce(function() {
	              scope.select({activeIdx: activeIdx, evt: evt});
	            }, angular.isNumber(debounce) ? debounce : debounce['default']);
	          } else {
	            scope.select({activeIdx: activeIdx, evt: evt});
	          }
	        };
	      }
	    };
	  }])
	
	  .directive('uibTypeaheadMatch', ['$templateRequest', '$compile', '$parse', function($templateRequest, $compile, $parse) {
	    return {
	      scope: {
	        index: '=',
	        match: '=',
	        query: '='
	      },
	      link: function(scope, element, attrs) {
	        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'uib/template/typeahead/typeahead-match.html';
	        $templateRequest(tplUrl).then(function(tplContent) {
	          var tplEl = angular.element(tplContent.trim());
	          element.replaceWith(tplEl);
	          $compile(tplEl)(scope);
	        });
	      }
	    };
	  }])
	
	  .filter('uibTypeaheadHighlight', ['$sce', '$injector', '$log', function($sce, $injector, $log) {
	    var isSanitizePresent;
	    isSanitizePresent = $injector.has('$sanitize');
	
	    function escapeRegexp(queryToEscape) {
	      // Regex: capture the whole query string and replace it with the string that will be used to match
	      // the results, for example if the capture is "a" the result will be \a
	      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	    }
	
	    function containsHtml(matchItem) {
	      return /<.*>/g.test(matchItem);
	    }
	
	    return function(matchItem, query) {
	      if (!isSanitizePresent && containsHtml(matchItem)) {
	        $log.warn('Unsafe use of typeahead please use ngSanitize'); // Warn the user about the danger
	      }
	      matchItem = query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
	      if (!isSanitizePresent) {
	        matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
	      }
	      return matchItem;
	    };
	  }]);
	
	angular.module("uib/template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/accordion/accordion-group.html",
	    "<div class=\"panel\" ng-class=\"panelClass || 'panel-default'\">\n" +
	    "  <div class=\"panel-heading\" ng-keypress=\"toggleOpen($event)\">\n" +
	    "    <h4 class=\"panel-title\">\n" +
	    "      <div tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\"><span ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></div>\n" +
	    "    </h4>\n" +
	    "  </div>\n" +
	    "  <div class=\"panel-collapse collapse\" uib-collapse=\"!isOpen\">\n" +
	    "	  <div class=\"panel-body\" ng-transclude></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("uib/template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/accordion/accordion.html",
	    "<div class=\"panel-group\" ng-transclude></div>");
	}]);
	
	angular.module("uib/template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/alert/alert.html",
	    "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissible' : null]\" role=\"alert\">\n" +
	    "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close({$event: $event})\">\n" +
	    "        <span aria-hidden=\"true\">&times;</span>\n" +
	    "        <span class=\"sr-only\">Close</span>\n" +
	    "    </button>\n" +
	    "    <div ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/carousel/carousel.html",
	    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
	    "  <div class=\"carousel-inner\" ng-transclude></div>\n" +
	    "  <a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\">\n" +
	    "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
	    "    <span class=\"sr-only\">previous</span>\n" +
	    "  </a>\n" +
	    "  <a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\">\n" +
	    "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
	    "    <span class=\"sr-only\">next</span>\n" +
	    "  </a>\n" +
	    "  <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
	    "    <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" +
	    "      <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" +
	    "    </li>\n" +
	    "  </ol>\n" +
	    "</div>");
	}]);
	
	angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/carousel/slide.html",
	    "<div ng-class=\"{\n" +
	    "    'active': active\n" +
	    "  }\" class=\"item text-center\" ng-transclude></div>\n" +
	    "");
	}]);
	
	angular.module("uib/template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/datepicker.html",
	    "<div class=\"uib-datepicker\" ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
	    "  <uib-daypicker ng-switch-when=\"day\" tabindex=\"0\"></uib-daypicker>\n" +
	    "  <uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\"></uib-monthpicker>\n" +
	    "  <uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\"></uib-yearpicker>\n" +
	    "</div>");
	}]);
	
	angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/day.html",
	    "<table class=\"uib-daypicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
	    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"uib-weeks\" ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
	    "      <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=\"gridcell\"\n" +
	    "        id=\"{{::dt.uid}}\"\n" +
	    "        ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default btn-sm\"\n" +
	    "          uib-is-class=\"\n" +
	    "            'btn-info' for selectedDt,\n" +
	    "            'active' for activeDt\n" +
	    "            on dt\"\n" +
	    "          ng-click=\"select(dt.date)\"\n" +
	    "          ng-disabled=\"::dt.disabled\"\n" +
	    "          tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);
	
	angular.module("uib/template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/month.html",
	    "<table class=\"uib-monthpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"uib-months\" ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row\" class=\"uib-month text-center\" role=\"gridcell\"\n" +
	    "        id=\"{{::dt.uid}}\"\n" +
	    "        ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n" +
	    "          uib-is-class=\"\n" +
	    "            'btn-info' for selectedDt,\n" +
	    "            'active' for activeDt\n" +
	    "            on dt\"\n" +
	    "          ng-click=\"select(dt.date)\"\n" +
	    "          ng-disabled=\"::dt.disabled\"\n" +
	    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);
	
	angular.module("uib/template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/popup.html",
	    "<ul class=\"uib-datepicker-popup dropdown-menu\" dropdown-nested ng-if=\"isOpen\" style=\"display: block\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
	    "	<li ng-transclude></li>\n" +
	    "	<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\" class=\"uib-button-bar\">\n" +
	    "		<span class=\"btn-group pull-left\">\n" +
	    "			<button type=\"button\" class=\"btn btn-sm btn-info uib-datepicker-current\" ng-click=\"select('today')\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
	    "			<button type=\"button\" class=\"btn btn-sm btn-danger uib-clear\" ng-click=\"select(null)\">{{ getText('clear') }}</button>\n" +
	    "		</span>\n" +
	    "		<button type=\"button\" class=\"btn btn-sm btn-success pull-right uib-close\" ng-click=\"close()\">{{ getText('close') }}</button>\n" +
	    "	</li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	
	angular.module("uib/template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/year.html",
	    "<table class=\"uib-yearpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"{{::columns - 2}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"uib-years\" ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row\" class=\"uib-year text-center\" role=\"gridcell\"\n" +
	    "        id=\"{{::dt.uid}}\"\n" +
	    "        ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n" +
	    "          uib-is-class=\"\n" +
	    "            'btn-info' for selectedDt,\n" +
	    "            'active' for activeDt\n" +
	    "            on dt\"\n" +
	    "          ng-click=\"select(dt.date)\"\n" +
	    "          ng-disabled=\"::dt.disabled\"\n" +
	    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);
	
	angular.module("uib/template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/modal/backdrop.html",
	    "<div class=\"modal-backdrop\"\n" +
	    "     uib-modal-animation-class=\"fade\"\n" +
	    "     modal-in-class=\"in\"\n" +
	    "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" +
	    "></div>\n" +
	    "");
	}]);
	
	angular.module("uib/template/modal/window.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/modal/window.html",
	    "<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n" +
	    "    uib-modal-animation-class=\"fade\"\n" +
	    "    modal-in-class=\"in\"\n" +
	    "    ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\">\n" +
	    "    <div class=\"modal-dialog\" ng-class=\"size ? 'modal-' + size : ''\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("uib/template/pager/pager.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/pager/pager.html",
	    "<ul class=\"pager\">\n" +
	    "  <li ng-class=\"{disabled: noPrevious()||ngDisabled, previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-class=\"{disabled: noNext()||ngDisabled, next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	
	angular.module("uib/template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/pagination/pager.html",
	    "<ul class=\"pager\">\n" +
	    "  <li ng-class=\"{disabled: noPrevious()||ngDisabled, previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-class=\"{disabled: noNext()||ngDisabled, next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	
	angular.module("uib/template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/pagination/pagination.html",
	    "<ul class=\"pagination\">\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-first\"><a href ng-click=\"selectPage(1, $event)\">{{::getText('first')}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-prev\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-last\"><a href ng-click=\"selectPage(totalPages, $event)\">{{::getText('last')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	
	angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-html-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-template-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\"\n" +
	    "    uib-tooltip-template-transclude=\"contentExp()\"\n" +
	    "    tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/popover/popover-html.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
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
	
	angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/popover/popover-template.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
	    "      <div class=\"popover-content\"\n" +
	    "        uib-tooltip-template-transclude=\"contentExp()\"\n" +
	    "        tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/popover/popover.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
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
	
	angular.module("uib/template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/progressbar/bar.html",
	    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
	    "");
	}]);
	
	angular.module("uib/template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/progressbar/progress.html",
	    "<div class=\"progress\" ng-transclude aria-labelledby=\"{{::title}}\"></div>");
	}]);
	
	angular.module("uib/template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/progressbar/progressbar.html",
	    "<div class=\"progress\">\n" +
	    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("uib/template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/rating/rating.html",
	    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n" +
	    "    <span ng-repeat-start=\"r in range track by $index\" class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
	    "    <i ng-repeat-end ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\" ng-attr-title=\"{{r.title}}\" aria-valuetext=\"{{r.title}}\"></i>\n" +
	    "</span>\n" +
	    "");
	}]);
	
	angular.module("uib/template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tabs/tab.html",
	    "<li ng-class=\"{active: active, disabled: disabled}\" class=\"uib-tab\">\n" +
	    "  <div ng-click=\"select()\" uib-tab-heading-transclude>{{heading}}</div>\n" +
	    "</li>\n" +
	    "");
	}]);
	
	angular.module("uib/template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tabs/tabset.html",
	    "<div>\n" +
	    "  <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
	    "  <div class=\"tab-content\">\n" +
	    "    <div class=\"tab-pane\" \n" +
	    "         ng-repeat=\"tab in tabs\" \n" +
	    "         ng-class=\"{active: tab.active}\"\n" +
	    "         uib-tab-content-transclude=\"tab\">\n" +
	    "    </div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("uib/template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/timepicker/timepicker.html",
	    "<table class=\"uib-timepicker\">\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td class=\"uib-increment hours\"><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td class=\"uib-increment minutes\"><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
	    "      <td ng-show=\"showSeconds\" class=\"uib-increment seconds\"><a ng-click=\"incrementSeconds()\" ng-class=\"{disabled: noIncrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <td class=\"form-group uib-time hours\" ng-class=\"{'has-error': invalidHours}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" placeholder=\"HH\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"disabled\" ng-blur=\"blur()\">\n" +
	    "      </td>\n" +
	    "      <td class=\"uib-separator\">:</td>\n" +
	    "      <td class=\"form-group uib-time minutes\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" placeholder=\"MM\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"disabled\" ng-blur=\"blur()\">\n" +
	    "      </td>\n" +
	    "      <td ng-show=\"showSeconds\" class=\"uib-separator\">:</td>\n" +
	    "      <td class=\"form-group uib-time seconds\" ng-class=\"{'has-error': invalidSeconds}\" ng-show=\"showSeconds\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" ng-model=\"seconds\" ng-change=\"updateSeconds()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"disabled\" ng-blur=\"blur()\">\n" +
	    "      </td>\n" +
	    "      <td ng-show=\"showMeridian\" class=\"uib-time am-pm\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\" ng-disabled=\"noToggleMeridian()\" tabindex=\"{{::tabindex}}\">{{meridian}}</button></td>\n" +
	    "    </tr>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td class=\"uib-decrement hours\"><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td class=\"uib-decrement minutes\"><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
	    "      <td ng-show=\"showSeconds\" class=\"uib-decrement seconds\"><a ng-click=\"decrementSeconds()\" ng-class=\"{disabled: noDecrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);
	
	angular.module("uib/template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/typeahead/typeahead-match.html",
	    "<a href tabindex=\"-1\" ng-bind-html=\"match.label | uibTypeaheadHighlight:query\"></a>\n" +
	    "");
	}]);
	
	angular.module("uib/template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/typeahead/typeahead-popup.html",
	    "<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
	    "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index, $event)\" role=\"option\" id=\"{{::match.id}}\">\n" +
	    "        <div uib-typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
	    "    </li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	angular.module('ui.bootstrap.carousel').run(function() {!angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'); })

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  'use strict';
	
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (root.hasOwnProperty('angular')) {
	    // Browser globals (root is window), we don't register it.
	    factory(root.angular);
	  } else if (typeof exports === 'object') {
	    module.exports = factory(require('angular'));
	  }
	}(this , function (angular) {
	    'use strict';
	
	    // In cases where Angular does not get passed or angular is a truthy value
	    // but misses .module we can fall back to using window.
	    angular = (angular && angular.module ) ? angular : window.angular;
	
	    /**
	     * @ngdoc overview
	     * @name ngStorage
	     */
	
	    return angular.module('ngStorage', [])
	
	    /**
	     * @ngdoc object
	     * @name ngStorage.$localStorage
	     * @requires $rootScope
	     * @requires $window
	     */
	
	    .provider('$localStorage', _storageProvider('localStorage'))
	
	    /**
	     * @ngdoc object
	     * @name ngStorage.$sessionStorage
	     * @requires $rootScope
	     * @requires $window
	     */
	
	    .provider('$sessionStorage', _storageProvider('sessionStorage'));
	
	    function _storageProvider(storageType) {
	        return function () {
	          var storageKeyPrefix = 'ngStorage-';
	
	          this.setKeyPrefix = function (prefix) {
	            if (typeof prefix !== 'string') {
	              throw new TypeError('[ngStorage] - ' + storageType + 'Provider.setKeyPrefix() expects a String.');
	            }
	            storageKeyPrefix = prefix;
	          };
	
	          var serializer = angular.toJson;
	          var deserializer = angular.fromJson;
	
	          this.setSerializer = function (s) {
	            if (typeof s !== 'function') {
	              throw new TypeError('[ngStorage] - ' + storageType + 'Provider.setSerializer expects a function.');
	            }
	
	            serializer = s;
	          };
	
	          this.setDeserializer = function (d) {
	            if (typeof d !== 'function') {
	              throw new TypeError('[ngStorage] - ' + storageType + 'Provider.setDeserializer expects a function.');
	            }
	
	            deserializer = d;
	          };
	
	          // Note: This is not very elegant at all.
	          this.get = function (key) {
	            return deserializer(window[storageType].getItem(storageKeyPrefix + key));
	          };
	
	          // Note: This is not very elegant at all.
	          this.set = function (key, value) {
	            return window[storageType].setItem(storageKeyPrefix + key, serializer(value));
	          };
	
	          this.$get = [
	              '$rootScope',
	              '$window',
	              '$log',
	              '$timeout',
	              '$document',
	
	              function(
	                  $rootScope,
	                  $window,
	                  $log,
	                  $timeout,
	                  $document
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
	
	                // The magic number 10 is used which only works for some keyPrefixes...
	                // See https://github.com/gsklee/ngStorage/issues/137
	                var prefixLength = storageKeyPrefix.length;
	
	                // #9: Assign a placeholder object if Web Storage is unavailable to prevent breaking the entire AngularJS app
	                var webStorage = isStorageSupported(storageType) || ($log.warn('This browser does not support Web Storage!'), {setItem: angular.noop, getItem: angular.noop, removeItem: angular.noop}),
	                    $storage = {
	                        $default: function(items) {
	                            for (var k in items) {
	                                angular.isDefined($storage[k]) || ($storage[k] = angular.copy(items[k]) );
	                            }
	
	                            $storage.$sync();
	                            return $storage;
	                        },
	                        $reset: function(items) {
	                            for (var k in $storage) {
	                                '$' === k[0] || (delete $storage[k] && webStorage.removeItem(storageKeyPrefix + k));
	                            }
	
	                            return $storage.$default(items);
	                        },
	                        $sync: function () {
	                            for (var i = 0, l = webStorage.length, k; i < l; i++) {
	                                // #8, #10: `webStorage.key(i)` may be an empty string (or throw an exception in IE9 if `webStorage` is empty)
	                                (k = webStorage.key(i)) && storageKeyPrefix === k.slice(0, prefixLength) && ($storage[k.slice(prefixLength)] = deserializer(webStorage.getItem(k)));
	                            }
	                        },
	                        $apply: function() {
	                            var temp$storage;
	
	                            _debounce = null;
	
	                            if (!angular.equals($storage, _last$storage)) {
	                                temp$storage = angular.copy(_last$storage);
	                                angular.forEach($storage, function(v, k) {
	                                    if (angular.isDefined(v) && '$' !== k[0]) {
	                                        webStorage.setItem(storageKeyPrefix + k, serializer(v));
	                                        delete temp$storage[k];
	                                    }
	                                });
	
	                                for (var k in temp$storage) {
	                                    webStorage.removeItem(storageKeyPrefix + k);
	                                }
	
	                                _last$storage = angular.copy($storage);
	                            }
	                        }
	                    },
	                    _last$storage,
	                    _debounce;
	
	                $storage.$sync();
	
	                _last$storage = angular.copy($storage);
	
	                $rootScope.$watch(function() {
	                    _debounce || (_debounce = $timeout($storage.$apply, 100, false));
	                });
	
	                // #6: Use `$window.addEventListener` instead of `angular.element` to avoid the jQuery-specific `event.originalEvent`
	                $window.addEventListener && $window.addEventListener('storage', function(event) {
	                    if (!event.key) {
	                      return;
	                    }
	
	                    // Reference doc.
	                    var doc = $document[0];
	
	                    if ( (!doc.hasFocus || !doc.hasFocus()) && storageKeyPrefix === event.key.slice(0, prefixLength) ) {
	                        event.newValue ? $storage[event.key.slice(prefixLength)] = deserializer(event.newValue) : delete $storage[event.key.slice(prefixLength)];
	
	                        _last$storage = angular.copy($storage);
	
	                        $rootScope.$apply();
	                    }
	                });
	
	                $window.addEventListener && $window.addEventListener('beforeunload', function() {
	                    $storage.$apply();
	                });
	
	                return $storage;
	              }
	          ];
	      };
	    }
	
	}));


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * oclazyload - Load modules on demand (lazy load) with angularJS
	 * @version v1.0.9
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
	            moduleCache = [],
	            modulePromises = {};
	
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
	            try {
	                return JSON.stringify(obj);
	            } catch (e) {
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
	            }
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
	            var onInvoke = function onInvoke(invokeName, invoke) {
	                if (!regInvokes[moduleName][type].hasOwnProperty(invokeName)) {
	                    regInvokes[moduleName][type][invokeName] = [];
	                }
	                if (checkHashes(invoke, regInvokes[moduleName][type][invokeName])) {
	                    newInvoke = true;
	                    regInvokes[moduleName][type][invokeName].push(invoke);
	                    broadcast('ocLazyLoad.componentLoaded', [moduleName, type, invokeName]);
	                }
	            };
	
	            function checkHashes(potentialNew, invokes) {
	                var isNew = true,
	                    newHash;
	                if (invokes.length) {
	                    newHash = signature(potentialNew);
	                    angular.forEach(invokes, function (invoke) {
	                        isNew = isNew && signature(invoke) !== newHash;
	                    });
	                }
	                return isNew;
	            }
	
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
	                onInvoke(invokeList, args[2][1]);
	            } else if (angular.isObject(invokeList)) {
	                angular.forEach(invokeList, function (invoke, key) {
	                    if (angular.isString(invoke)) {
	                        // decorators for example
	                        onInvoke(invoke, invokeList[1]);
	                    } else {
	                        // components registered as object lists {"componentName": function() {}}
	                        onInvoke(key, invoke);
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
	                 * @param real
	                 */
	                inject: function inject(moduleName) {
	                    var localParams = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	                    var real = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	                    var self = this,
	                        deferred = $q.defer();
	                    if (angular.isDefined(moduleName) && moduleName !== null) {
	                        if (angular.isArray(moduleName)) {
	                            var promisesList = [];
	                            angular.forEach(moduleName, function (module) {
	                                promisesList.push(self.inject(module, localParams, real));
	                            });
	                            return $q.all(promisesList);
	                        } else {
	                            self._addToLoadList(self._getModuleName(moduleName), true, real);
	                        }
	                    }
	                    if (modulesToLoad.length > 0) {
	                        var res = modulesToLoad.slice(); // clean copy
	                        var loadNext = function loadNext(moduleName) {
	                            moduleCache.push(moduleName);
	                            modulePromises[moduleName] = deferred.promise;
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
	                    } else if (localParams && localParams.name && modulePromises[localParams.name]) {
	                        return modulePromises[localParams.name];
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
	                _addToLoadList: _addToLoadList,
	
	                /**
	                 * Unregister modules (you shouldn't have to use this)
	                 * @param modules
	                 */
	                _unregister: function _unregister(modules) {
	                    if (angular.isDefined(modules)) {
	                        if (angular.isArray(modules)) {
	                            angular.forEach(modules, function (module) {
	                                regInvokes[module] = undefined;
	                            });
	                        }
	                    }
	                }
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
	
	    angular.module('oc.lazyLoad').directive('ocLazyLoad', ["$ocLazyLoad", "$compile", "$animate", "$parse", "$timeout", function ($ocLazyLoad, $compile, $animate, $parse, $timeout) {
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
	                                // Attach element contents to DOM and then compile them.
	                                // This prevents an issue where IE invalidates saved element objects (HTMLCollections)
	                                // of the compiled contents when attaching to the parent DOM.
	                                $animate.enter(content, $element);
	                                // get the new content & compile it
	                                $compile($element.contents())($scope);
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
	                            } else if (!$delegate.jsLoader.hasOwnProperty('ocLazyLoadLoader') && $delegate.jsLoader.hasOwnProperty('requirejs')) {
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
	                        if (angular.isDefined(err) && ($delegate.jsLoader.hasOwnProperty("ocLazyLoadLoader") || $delegate.jsLoader.hasOwnProperty("requirejs"))) {
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
	                    return $delegate.inject(config.name, localParams, true);
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	//! api-check version 7.5.5 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (http://kent.doddsfamily.us) (ó ì_í)=óò=(ì_í ò)
	
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
		module.exports.VERSION = ("7.5.5");
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
		  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		  var extraCheckers = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
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
		   * @param {Array} api - the checkers to check with
		   * @param {Array} args - the args to check
		   * @param {Object} output - output options
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
		   * @param {Array} checkApiArgs - args provided to apiCheck function
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
		    var messages = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
		    var output = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
		    var gOut = apiCheck.config.output || {};
		    var prefix = getPrefix();
		    var suffix = getSuffix();
		    var url = getUrl();
		    var message = 'apiCheck failed! ' + messages.join(', ');
		    var passedAndShouldHavePassed = '\n\n' + buildMessageFromApiAndArgs(api, args);
		    return (prefix + ' ' + message + ' ' + suffix + ' ' + (url || '') + passedAndShouldHavePassed).trim();
	
		    function getPrefix() {
		      var p = output.onlyPrefix;
		      if (!p) {
		        p = ((gOut.prefix || '') + ' ' + (output.prefix || '')).trim();
		      }
		      return p;
		    }
	
		    function getSuffix() {
		      var s = output.onlySuffix;
		      if (!s) {
		        s = ((output.suffix || '') + ' ' + (gOut.suffix || '')).trim();
		      }
		      return s;
		    }
	
		    function getUrl() {
		      var u = output.url;
		      if (!u) {
		        u = gOut.docsBaseUrl && output.urlSuffix && ('' + gOut.docsBaseUrl + output.urlSuffix).trim();
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
		      return 'You passed:' + n + passedArgs + newLine + ('With the ' + types + ':' + n + argTypes + newLine) + ('The API calls for:' + n + apiTypes);
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
		 * @param {Array} api - checkers
		 * @param  {Array} args - and arguments object
		 * @returns {Array} - the error messages
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
		      messages.push(t(argName) + ' passed');
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
	
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
		    return eachArry(obj, iterator, context);
		  } else {
		    return eachObj(obj, iterator, context);
		  }
		}
	
		function eachObj(obj, iterator, context) {
		  var ret = undefined;
		  var hasOwn = Object.prototype.hasOwnProperty;
		  /* eslint prefer-const:0 */ // some weird eslint bug?
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
		  var ret = undefined;
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
		  return copy.join(join) + ('' + (copy.length ? join + finalJoin : '') + last);
		}
	
		function getError(name, location, checkerType) {
		  if (typeof checkerType === 'function') {
		    checkerType = checkerType({ short: true });
		  }
		  var stringType = typeof checkerType !== 'object' ? checkerType : stringify(checkerType);
		  return new Error(nAtL(name, location) + ' must be ' + t(stringType));
		}
	
		function nAtL(name, location) {
		  var tName = t(name || 'value');
		  var tLocation = !location ? '' : ' at ' + t(location);
		  return '' + tName + tLocation;
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
		 *
		 * @param {Function} checker - the checker to setup with properties
		 * @param {Object} properties - properties to add to the checker
		 * @param {boolean} disabled - when set to true, this will set the checker to a no-op function
		 * @returns {Function} checker - the setup checker
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
		        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
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
		            shapePropError = checker(val[prop], prop, '' + location + name, val);
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
		          return new Error(nAtL(name, location) + ' cannot have extra properties: ' + t(extraProps.join('`, `')) + '.' + ('It is limited to ' + t(allowedProperties.join('`, `'))));
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
		    return setupChecker(function anyCheckerDefinition() {
		      // don't do anything
		    }, { type: 'any' }, disabled);
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
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	* angular-formly JavaScript Library v7.3.9
	*
	* @license MIT (http://license.angular-formly.com)
	*
	* built with ♥ by Astrism <astrisms@gmail.com>, Kent C. Dodds <kent@doddsfamily.us>
	* (ó ì_í)=óò=(ì_í ò)
	*/
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(8));
		else if(typeof define === 'function' && define.amd)
			define(["angular", "api-check"], factory);
		else if(typeof exports === 'object')
			exports["ngFormly"] = factory(require("angular"), require("api-check"));
		else
			root["ngFormly"] = factory(root["angular"], root["apiCheck"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
	
		var _angularFix = __webpack_require__(2);
	
		var _angularFix2 = _interopRequireDefault(_angularFix);
	
		var _providersFormlyApiCheck = __webpack_require__(4);
	
		var _providersFormlyApiCheck2 = _interopRequireDefault(_providersFormlyApiCheck);
	
		var _otherDocsBaseUrl = __webpack_require__(6);
	
		var _otherDocsBaseUrl2 = _interopRequireDefault(_otherDocsBaseUrl);
	
		var _providersFormlyUsability = __webpack_require__(7);
	
		var _providersFormlyUsability2 = _interopRequireDefault(_providersFormlyUsability);
	
		var _providersFormlyConfig = __webpack_require__(8);
	
		var _providersFormlyConfig2 = _interopRequireDefault(_providersFormlyConfig);
	
		var _providersFormlyValidationMessages = __webpack_require__(10);
	
		var _providersFormlyValidationMessages2 = _interopRequireDefault(_providersFormlyValidationMessages);
	
		var _servicesFormlyUtil = __webpack_require__(11);
	
		var _servicesFormlyUtil2 = _interopRequireDefault(_servicesFormlyUtil);
	
		var _servicesFormlyWarn = __webpack_require__(12);
	
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
		ngModule.constant('formlyVersion', ("7.3.9")); // <-- webpack variable
	
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
	/***/ function(module, exports, __webpack_require__) {
	
		// some versions of angular don't export the angular module properly,
		// so we get it from window in this case.
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		var angular = __webpack_require__(3);
	
		/* istanbul ignore next */
		if (!angular.version) {
		  angular = window.angular;
		}
		exports['default'] = angular;
		module.exports = exports['default'];
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		var _angularFix = __webpack_require__(2);
	
		var _angularFix2 = _interopRequireDefault(_angularFix);
	
		var _apiCheck = __webpack_require__(5);
	
		var _apiCheck2 = _interopRequireDefault(_apiCheck);
	
		var apiCheck = (0, _apiCheck2['default'])({
		  output: {
		    prefix: 'angular-formly:',
		    docsBaseUrl: __webpack_require__(6)
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
	
		var formlyExpression = apiCheck.oneOfType([apiCheck.string, apiCheck.func]);
		var specifyWrapperType = apiCheck.typeOrArrayOf(apiCheck.string).nullable;
	
		var apiCheckProperty = apiCheck.func;
	
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
	
		var templateManipulators = apiCheck.shape({
		  preWrapper: apiCheck.arrayOf(apiCheck.func).nullable.optional,
		  postWrapper: apiCheck.arrayOf(apiCheck.func).nullable.optional
		}).strict.nullable;
	
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
		  originalModel: modelChecker.optional,
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
		  ngModelElAttrs: apiCheck.objectOf(apiCheck.string).optional,
		  ngModelAttrs: apiCheck.objectOf(apiCheck.shape({
		    statement: apiCheck.shape.ifNot(['value', 'attribute', 'bound', 'boolean'], apiCheck.any).optional,
		    value: apiCheck.shape.ifNot('statement', apiCheck.any).optional,
		    attribute: apiCheck.shape.ifNot('statement', apiCheck.any).optional,
		    bound: apiCheck.shape.ifNot('statement', apiCheck.any).optional,
		    boolean: apiCheck.shape.ifNot('statement', apiCheck.any).optional
		  }).strict).optional,
		  elementAttributes: apiCheck.objectOf(apiCheck.string).optional,
		  optionsTypes: apiCheck.typeOrArrayOf(apiCheck.string).optional,
		  link: apiCheck.func.optional,
		  controller: apiCheck.oneOfType([apiCheck.string, apiCheck.func, apiCheck.array]).optional,
		  validation: apiCheck.shape({
		    show: apiCheck.bool.nullable.optional,
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
		  fieldTransform: apiCheck.oneOfType([apiCheck.func, apiCheck.array]).optional,
		  data: apiCheck.object.optional
		}).strict;
	
		var fieldGroup = apiCheck.shape({
		  $$hashKey: apiCheck.any.optional,
		  key: apiCheck.oneOfType([apiCheck.string, apiCheck.number]).optional,
		  // danger. Nested field groups wont get api-checked...
		  fieldGroup: apiCheck.arrayOf(apiCheck.oneOfType([formlyFieldOptions, apiCheck.object])),
		  className: apiCheck.string.optional,
		  options: formOptionsApi.optional,
		  templateOptions: apiCheck.object.optional,
		  wrapper: specifyWrapperType.optional,
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
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = "https://github.com/formly-js/angular-formly/blob/" + ("7.3.9") + "/other/ERRORS_AND_WARNINGS.md#";
		module.exports = exports["default"];
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		var _angularFix = __webpack_require__(2);
	
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
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
		var _angularFix = __webpack_require__(2);
	
		var _angularFix2 = _interopRequireDefault(_angularFix);
	
		var _otherUtils = __webpack_require__(9);
	
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
		      fieldTransform: [],
		      ngModelAttrsManipulatorPreferUnbound: false,
		      removeChromeAutoComplete: false,
		      defaultHideDirective: 'ng-if',
		      getFieldId: null
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
	
		  function extendTypeDefaultOptions(options, extendsType) {
		    var extendsDO = extendsType.defaultOptions;
		    if (!_angularFix2['default'].isDefined(extendsDO)) {
		      return;
		    }
		    var optionsDO = options.defaultOptions;
		    var optionsDOIsFn = _angularFix2['default'].isFunction(optionsDO);
		    var extendsDOIsFn = _angularFix2['default'].isFunction(extendsDO);
		    if (extendsDOIsFn) {
		      options.defaultOptions = function defaultOptions(opts, scope) {
		        var extendsDefaultOptions = extendsDO(opts, scope);
		        var mergedDefaultOptions = {};
		        _otherUtils2['default'].reverseDeepMerge(mergedDefaultOptions, opts, extendsDefaultOptions);
		        var extenderOptionsDefaultOptions = optionsDO;
		        if (optionsDOIsFn) {
		          extenderOptionsDefaultOptions = extenderOptionsDefaultOptions(mergedDefaultOptions, scope);
		        }
		        _otherUtils2['default'].reverseDeepMerge(extendsDefaultOptions, extenderOptionsDefaultOptions);
		        return extendsDefaultOptions;
		      };
		    } else if (optionsDOIsFn) {
		      options.defaultOptions = function defaultOptions(opts, scope) {
		        var newDefaultOptions = {};
		        _otherUtils2['default'].reverseDeepMerge(newDefaultOptions, opts, extendsDO);
		        return optionsDO(newDefaultOptions, scope);
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
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		var _angularFix = __webpack_require__(2);
	
		var _angularFix2 = _interopRequireDefault(_angularFix);
	
		exports['default'] = {
		  containsSelector: containsSelector, containsSpecialChar: containsSpecialChar, formlyEval: formlyEval, getFieldId: getFieldId, reverseDeepMerge: reverseDeepMerge, findByNodeName: findByNodeName,
		  arrayify: arrayify, extendFunction: extendFunction, extendArray: extendArray, startsWith: startsWith, contains: contains
		};
	
		function containsSelector(string) {
		  return containsSpecialChar(string, '.') || containsSpecialChar(string, '[') && containsSpecialChar(string, ']');
		}
	
		function containsSpecialChar(a, b) {
		  if (!a || !a.indexOf) {
		    return false;
		  }
		  return a.indexOf(b) !== -1;
		}
	
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
	
		function startsWith(str, search) {
		  if (_angularFix2['default'].isString(str) && _angularFix2['default'].isString(search)) {
		    return str.length >= search.length && str.substring(0, search.length) === search;
		  } else {
		    return false;
		  }
		}
	
		function contains(str, search) {
		  if (_angularFix2['default'].isString(str) && _angularFix2['default'].isString(search)) {
		    return str.length >= search.length && str.indexOf(search) !== -1;
		  } else {
		    return false;
		  }
		}
		module.exports = exports['default'];
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		exports['default'] = formlyValidationMessages;
	
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
		      if (typeof scope.options.templateOptions[prop] !== 'undefined') {
		        return prefix + ' ' + scope.options.templateOptions[prop] + ' ' + suffix;
		      } else {
		        return alternate;
		      }
		    };
		  }
		}
		module.exports = exports['default'];
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		var _otherUtils = __webpack_require__(9);
	
		var _otherUtils2 = _interopRequireDefault(_otherUtils);
	
		exports['default'] = formlyUtil;
	
		// @ngInject
		function formlyUtil() {
		  return _otherUtils2['default'];
		}
		module.exports = exports['default'];
	
	/***/ },
	/* 12 */
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
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		var _angularFix = __webpack_require__(2);
	
		var _angularFix2 = _interopRequireDefault(_angularFix);
	
		exports['default'] = formlyCustomValidation;
	
		// @ngInject
		function formlyCustomValidation(formlyUtil) {
		  return {
		    restrict: 'A',
		    require: 'ngModel',
		    link: function formlyCustomValidationLink(scope, el, attrs, ctrl) {
		      var opts = scope.options;
		      opts.validation.messages = opts.validation.messages || {};
		      _angularFix2['default'].forEach(opts.validation.messages, function (message, key) {
		        opts.validation.messages[key] = function () {
		          return formlyUtil.formlyEval(scope, message, ctrl.$modelValue, ctrl.$viewValue);
		        };
		      });
	
		      var useNewValidatorsApi = ctrl.hasOwnProperty('$validators') && !attrs.hasOwnProperty('useParsers');
		      _angularFix2['default'].forEach(opts.validators, _angularFix2['default'].bind(null, addValidatorToPipeline, false));
		      _angularFix2['default'].forEach(opts.asyncValidators, _angularFix2['default'].bind(null, addValidatorToPipeline, true));
	
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
		        var validatorCollection = isAsync ? '$asyncValidators' : '$validators';
	
		        ctrl[validatorCollection][name] = function evalValidity(modelValue, viewValue) {
		          return formlyUtil.formlyEval(scope, validator, modelValue, viewValue);
		        };
		      }
	
		      function setupWithParsers(validator, name, isAsync) {
		        var inFlightValidator = undefined;
		        ctrl.$parsers.unshift(function evalValidityOfParser(viewValue) {
		          var isValid = formlyUtil.formlyEval(scope, validator, ctrl.$modelValue, viewValue);
		          if (isAsync) {
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
		    }
		  };
		}
		formlyCustomValidation.$inject = ["formlyUtil"];
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
	
		var _angularFix = __webpack_require__(2);
	
		var _angularFix2 = _interopRequireDefault(_angularFix);
	
		var _apiCheck = __webpack_require__(5);
	
		var _apiCheck2 = _interopRequireDefault(_apiCheck);
	
		exports['default'] = formlyField;
	
		/**
		 * @ngdoc directive
		 * @name formlyField
		 * @restrict AE
		 */
		// @ngInject
		function formlyField($http, $q, $compile, $templateCache, $interpolate, formlyConfig, formlyApiCheck, formlyUtil, formlyUsability, formlyWarn) {
		  var arrayify = formlyUtil.arrayify;
	
		  FormlyFieldController.$inject = ["$scope", "$timeout", "$parse", "$controller", "formlyValidationMessages"];
		  return {
		    restrict: 'AE',
		    transclude: true,
		    require: '?^formlyForm',
		    scope: {
		      options: '=',
		      model: '=',
		      originalModel: '=?',
		      formId: '@', // TODO remove formId in a breaking release
		      index: '=?',
		      fields: '=?',
		      formState: '=?',
		      formOptions: '=?',
		      form: '=?' },
		    // TODO require form in a breaking release
		    controller: FormlyFieldController,
		    link: fieldLink
		  };
	
		  // @ngInject
		  function FormlyFieldController($scope, $timeout, $parse, $controller, formlyValidationMessages) {
		    /* eslint max-statements:[2, 32] */
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
		      return $timeout(function runExpressionsOnNextTick() {
		        var field = $scope.options;
		        var currentValue = valueGetterSetter();
		        _angularFix2['default'].forEach(field.expressionProperties, function runExpression(expression, prop) {
		          var setter = $parse(prop).assign;
		          var promise = $q.when(formlyUtil.formlyEval($scope, expression, currentValue, currentValue));
		          promise.then(function setFieldValue(value) {
		            setter(field, value);
		          });
		        });
		      }, 0, false);
		    }
	
		    function valueGetterSetter(newVal) {
		      if (!$scope.model || !$scope.options.key) {
		        return undefined;
		      }
		      if (_angularFix2['default'].isDefined(newVal)) {
		        parseSet($scope.options.key, $scope.model, newVal);
		      }
		      return parseGet($scope.options.key, $scope.model);
		    }
	
		    function shouldNotUseParseKey(key) {
		      return _angularFix2['default'].isNumber(key) || !formlyUtil.containsSelector(key);
		    }
	
		    function parseSet(key, model, newVal) {
		      // If either of these are null/undefined then just return undefined
		      if (!key || !model) {
		        return;
		      }
		      // If we are working with a number then $parse wont work, default back to the old way for now
		      if (shouldNotUseParseKey(key)) {
		        // TODO: Fix this so we can get several levels instead of just one with properties that are numeric
		        model[key] = newVal;
		      } else {
		        var setter = $parse($scope.options.key).assign;
		        if (setter) {
		          setter($scope.model, newVal);
		        }
		      }
		    }
	
		    function parseGet(key, model) {
		      // If either of these are null/undefined then just return undefined
		      if (!key || !model) {
		        return undefined;
		      }
	
		      // If we are working with a number then $parse wont work, default back to the old way for now
		      if (shouldNotUseParseKey(key)) {
		        // TODO: Fix this so we can get several levels instead of just one with properties that are numeric
		        return model[key];
		      } else {
		        return $parse(key)(model);
		      }
		    }
	
		    function simplifyLife(options) {
		      // add a few empty objects (if they don't already exist) so you don't have to undefined check everywhere
		      formlyUtil.reverseDeepMerge(options, {
		        originalModel: options.model,
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
		      if (_angularFix2['default'].isDefined($scope.options.defaultValue) && !_angularFix2['default'].isDefined(parseGet($scope.options.key, $scope.model))) {
		        parseSet($scope.options.key, $scope.model, $scope.options.defaultValue);
		      }
		    }
	
		    function setInitialValue() {
		      $scope.options.initialValue = $scope.model && parseGet($scope.options.key, $scope.model);
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
		          extraOptions = extraOptions(options, $scope);
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
		      parseSet($scope.options.key, $scope.model, $scope.options.initialValue);
		      if ($scope.options.formControl) {
		        if (_angularFix2['default'].isArray($scope.options.formControl)) {
		          _angularFix2['default'].forEach($scope.options.formControl, function (formControl) {
		            resetFormControl(formControl, true);
		          });
		        } else {
		          resetFormControl($scope.options.formControl);
		        }
		      }
		      if ($scope.form) {
		        $scope.form.$setUntouched && $scope.form.$setUntouched();
		        $scope.form.$setPristine();
		      }
		    }
	
		    function resetFormControl(formControl, isMultiNgModel) {
		      if (!isMultiNgModel) {
		        formControl.$setViewValue(parseGet($scope.options.key, $scope.model));
		      }
	
		      formControl.$render();
		      formControl.$setUntouched && formControl.$setUntouched();
		      formControl.$setPristine();
	
		      // To prevent breaking change requiring a digest to reset $viewModel
		      if (!$scope.$root.$$phase) {
		        $scope.$digest();
		      }
		    }
	
		    function updateInitialValue() {
		      $scope.options.initialValue = parseGet($scope.options.key, $scope.model);
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
		      $scope.to = $scope.options.templateOptions;
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
		      getTemplate('\n          <formly-form model="' + modelValue + '"\n                       fields="options.fieldGroup"\n                       options="options.options"\n                       form="options.form"\n                       class="' + scope.options.className + '"\n                       ' + extraAttributes + '\n                       is-field-group>\n          </formly-form>\n        ').then(transcludeInWrappers(scope.options, scope.formOptions)).then(setElementTemplate);
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
		          var formControls = arrayify(scope.fc);
		          if (!formControls.some(function (fc) {
		            return fc.$invalid;
		          })) {
		            return false;
		          } else if (typeof options.validation.show === 'boolean') {
		            return options.validation.show;
		          } else if (customExpression) {
		            return formControls.some(function (fc) {
		              return formlyUtil.formlyEval(scope, customExpression, fc.$modelValue, fc.$viewValue);
		            });
		          } else {
		            return formControls.some(function (fc) {
		              var noTouchedButDirty = _angularFix2['default'].isUndefined(fc.$touched) && fc.$dirty;
		              return fc.$touched || noTouchedButDirty;
		            });
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
		        var ctrl = scope.fc;
		        var formWasPristine = scope.form.$pristine;
		        if (scope.options.formatters) {
		          (function () {
		            var value = ctrl.$modelValue;
		            ctrl.$formatters.forEach(function (formatter) {
		              value = formatter(value);
		            });
	
		            ctrl.$setViewValue(value);
		            ctrl.$render();
		            ctrl.$setPristine();
		            if (formWasPristine) {
		              scope.form.$setPristine();
		            }
		          })();
		        }
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
		      throw formlyUsability.getFieldError('type-type-has-no-template', 'Type \'' + options.type + '\' has no template. On element:', options);
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
		      var _ret2 = (function () {
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
	
		      if (typeof _ret2 === 'object') return _ret2.v;
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
		  }
		}
		formlyField.$inject = ["$http", "$q", "$compile", "$templateCache", "$interpolate", "formlyConfig", "formlyApiCheck", "formlyUtil", "formlyUsability", "formlyWarn"];
	
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
	
		var _angularFix = __webpack_require__(2);
	
		var _angularFix2 = _interopRequireDefault(_angularFix);
	
		exports['default'] = formlyForm;
	
		/**
		 * @ngdoc directive
		 * @name formlyForm
		 * @restrict AE
		 */
		// @ngInject
		function formlyForm(formlyUsability, formlyWarn, $parse, formlyConfig, $interpolate) {
		  var currentFormId = 1;
		  FormlyFormController.$inject = ["$scope", "formlyApiCheck", "formlyUtil"];
		  return {
		    restrict: 'AE',
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
		    return '\n        <' + rootEl + ' class="formly"\n                 name="' + getFormName() + '"\n                 role="form" ' + parentFormAttributes + '>\n          <' + fieldRootEl + ' formly-field\n               ng-repeat="field in fields ' + getTrackBy() + '"\n               ' + getHideDirective() + '="!field.hide"\n               class="formly-field"\n               options="field"\n               model="field.model || model"\n               original-model="model"\n               fields="fields"\n               form="theFormlyForm"\n               form-id="' + getFormName() + '"\n               form-state="options.formState"\n               form-options="options"\n               index="$index">\n          </' + fieldRootEl + '>\n          <div ng-transclude class="' + getTranscludeClass() + '"></div>\n        </' + rootEl + '>\n      ';
	
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
		        var promise = field.runExpressions && field.runExpressions();
		        if (field.hideExpression) {
		          // can't use hide with expressionProperties reliably
		          var val = model[field.key];
		          field.hide = evalCloseToFormlyExpression(field.hideExpression, val, field, index);
		        }
		        if (field.extras && field.extras.validateOnModelChange && field.formControl) {
		          var validate = field.formControl.$validate;
		          if (promise) {
		            promise.then(validate);
		          } else {
		            validate();
		          }
		        }
		      });
		    }
	
		    function setupFields() {
		      $scope.fields = $scope.fields || [];
	
		      checkDeprecatedOptions($scope.options);
	
		      var fieldTransforms = $scope.options.fieldTransform || formlyConfig.extras.fieldTransform;
	
		      if (!_angularFix2['default'].isArray(fieldTransforms)) {
		        fieldTransforms = [fieldTransforms];
		      }
	
		      _angularFix2['default'].forEach(fieldTransforms, function transformFields(fieldTransform) {
		        if (fieldTransform) {
		          $scope.fields = fieldTransform($scope.fields, $scope.model, $scope.options, $scope.form);
		          if (!$scope.fields) {
		            throw formlyUsability.getFormlyError('fieldTransform must return an array of fields');
		          }
		        }
		      });
	
		      setupModels();
	
		      _angularFix2['default'].forEach($scope.fields, attachKey); // attaches a key based on the index if a key isn't specified
		      _angularFix2['default'].forEach($scope.fields, setupWatchers); // setup watchers for all fields
		    }
	
		    function checkDeprecatedOptions(options) {
		      if (formlyConfig.extras.fieldTransform && _angularFix2['default'].isFunction(formlyConfig.extras.fieldTransform)) {
		        formlyWarn('fieldtransform-as-a-function-deprecated', 'fieldTransform as a function has been deprecated.', 'Attempted for formlyConfig.extras: ' + formlyConfig.extras.fieldTransform.name, formlyConfig.extras);
		      } else if (options.fieldTransform && _angularFix2['default'].isFunction(options.fieldTransform)) {
		        formlyWarn('fieldtransform-as-a-function-deprecated', 'fieldTransform as a function has been deprecated.', 'Attempted for form', options);
		      }
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
	
		      if ($scope.options.formState) {
		        // $scope.options.formState will have its own watcher
		        watchedModels.push($scope.options.formState);
		      }
	
		      _angularFix2['default'].forEach($scope.fields, function (field) {
		        var isNewModel = initModel(field);
	
		        if (field.model && isNewModel && watchedModels.indexOf(field.model) === -1) {
		          $scope.$watch(function () {
		            return field.model;
		          }, onModelOrFormStateChange, true);
		          watchedModels.push(field.model);
		        }
		      });
		    }
	
		    function initModel(field) {
		      var isNewModel = true;
	
		      if (_angularFix2['default'].isString(field.model)) {
		        var expression = field.model;
		        var index = $scope.fields.indexOf(field);
	
		        isNewModel = !refrencesCurrentlyWatchedModel(expression);
	
		        field.model = evalCloseToFormlyExpression(expression, undefined, field, index);
		        if (!field.model) {
		          throw formlyUsability.getFieldError('field-model-must-be-initialized', 'Field model must be initialized. When specifying a model as a string for a field, the result of the' + ' expression must have been initialized ahead of time.', field);
		        }
		      }
		      return isNewModel;
		    }
	
		    function refrencesCurrentlyWatchedModel(expression) {
		      return ['model', 'formState'].some(function (item) {
		        return formlyUtil.startsWith(expression, item + '.') || formlyUtil.startsWith(expression, item + '[');
		      });
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
		      var watchExpression = watcher.expression || 'model[\'' + field.key.toString().split('.').join('\'][\'') + '\']';
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
	
		var _angularFix = __webpack_require__(2);
	
		var _angularFix2 = _interopRequireDefault(_angularFix);
	
		var _otherUtils = __webpack_require__(9);
	
		exports['default'] = addFormlyNgModelAttrsManipulator;
	
		// @ngInject
		function addFormlyNgModelAttrsManipulator(formlyConfig, $interpolate) {
		  if (formlyConfig.extras.disableNgModelAttrsManipulator) {
		    return;
		  }
		  formlyConfig.templateManipulators.preWrapper.push(ngModelAttrsManipulator);
	
		  function ngModelAttrsManipulator(template, options, scope) {
		    var node = document.createElement('div');
		    var skip = options.extras && options.extras.skipNgModelAttrsManipulator;
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
		    alterNgModelAttr();
		    addModelOptions();
		    addTemplateOptionsAttrs();
		    addNgModelElAttrs();
	
		    return node.innerHTML;
	
		    function addValidation() {
		      if (_angularFix2['default'].isDefined(options.validators) || _angularFix2['default'].isDefined(options.validation.messages)) {
		        addIfNotPresent(modelNodes, 'formly-custom-validation', '');
		      }
		    }
	
		    function alterNgModelAttr() {
		      if (isPropertyAccessor(options.key)) {
		        addRegardlessOfPresence(modelNodes, 'ng-model', 'model.' + options.key);
		      }
		    }
	
		    function addModelOptions() {
		      if (_angularFix2['default'].isDefined(options.modelOptions)) {
		        addIfNotPresent(modelNodes, 'ng-model-options', 'options.modelOptions');
		        if (options.modelOptions.getterSetter) {
		          addRegardlessOfPresence(modelNodes, 'ng-model', 'options.value');
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
		        } else if (val.statement && inTo) {
		          attrName = val.statement;
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
	
		    function addNgModelElAttrs() {
		      _angularFix2['default'].forEach(options.ngModelElAttrs, function (val, name) {
		        addRegardlessOfPresence(modelNodes, name, val);
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
		      if (!ngModelNode.hasAttribute('formly-skip-ng-model-attrs-manipulator') && !(_angularFix2['default'].isString(skip) && nodeMatches(ngModelNode, skip))) {
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
	
		  function getBuiltInAttributes() {
		    var ngModelAttributes = {
		      focus: {
		        attribute: 'formly-focus'
		      }
		    };
		    var boundOnly = [];
		    var bothBooleanAndBound = ['required', 'disabled'];
		    var bothAttributeAndBound = ['pattern', 'minlength'];
		    var statementOnly = ['change', 'keydown', 'keyup', 'keypress', 'click', 'focus', 'blur'];
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
	
		    _angularFix2['default'].forEach(statementOnly, function (item) {
		      var propName = 'on' + item.substr(0, 1).toUpperCase() + item.substr(1);
		      ngModelAttributes[propName] = { statement: 'ng-' + item };
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
	
		  function addRegardlessOfPresence(nodes, attr, val) {
		    _angularFix2['default'].forEach(nodes, function (node) {
		      node.setAttribute(attr, val);
		    });
		  }
	
		  function isPropertyAccessor(key) {
		    return (0, _otherUtils.contains)(key, '.') || (0, _otherUtils.contains)(key, '[') && (0, _otherUtils.contains)(key, ']');
		  }
		}
		addFormlyNgModelAttrsManipulator.$inject = ["formlyConfig", "$interpolate"];
		module.exports = exports['default'];
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		var _angularFix = __webpack_require__(2);
	
		var _angularFix2 = _interopRequireDefault(_angularFix);
	
		exports['default'] = addCustomTags;
	
		// @ngInject
		function addCustomTags($document) {
		  // IE8 check ->
		  // https://msdn.microsoft.com/en-us/library/cc196988(v=vs.85).aspx
		  if ($document && $document.documentMode < 9) {
		    (function () {
		      var document = $document.get(0);
		      // add the custom elements that we need for formly
		      var customElements = ['formly-field', 'formly-form'];
		      _angularFix2['default'].forEach(customElements, function (el) {
		        document.createElement(el);
		      });
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	//! angular-formly-templates-bootstrap version 6.2.0 built with ♥ by Astrism <astrisms@gmail.com>, Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(9), __webpack_require__(8));
		else if(typeof define === 'function' && define.amd)
			define(["angular", "angular-formly", "api-check"], factory);
		else if(typeof exports === 'object')
			exports["ngFormlyTemplatesBootstrap"] = factory(require("angular"), require("angular-formly"), require("api-check"));
		else
			root["ngFormlyTemplatesBootstrap"] = factory(root["angular"], root["ngFormly"], root["apiCheck"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
	
		module.exports = __webpack_require__(1);
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		var ngModuleName = 'formlyBootstrap';
		var angular = __webpack_require__(2);
		var ngModule = angular.module(ngModuleName, [__webpack_require__(4)]);
		ngModule.constant('formlyBootstrapApiCheck', __webpack_require__(5)({
		  output: {
		    prefix: 'angular-formly-bootstrap'
		  }
		}));
		ngModule.constant('formlyBootstrapVersion', ("6.2.0"));
	
		__webpack_require__(6)(ngModule);
		__webpack_require__(9)(ngModule);
		__webpack_require__(19)(ngModule);
	
		exports['default'] = ngModuleName;
		module.exports = exports['default'];
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		// some versions of angular don't export the angular module properly,
		// so we get it from window in this case.
		'use strict';
	
		var angular = __webpack_require__(3);
		if (!angular.version) {
		  angular = window.angular;
		}
		module.exports = angular;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
	
	/***/ },
	/* 6 */
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
		      template: __webpack_require__(7),
		      apiCheck: function apiCheck(check) {
		        return {
		          templateOptions: {
		            label: check.string.optional,
		            required: check.bool.optional,
		            labelSrOnly: check.bool.optional
		          }
		        };
		      }
		    }, { name: 'bootstrapHasError', template: __webpack_require__(8) }]);
		  }
		  addWrappers.$inject = ["formlyConfigProvider"];
		};
	
		module.exports = exports['default'];
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		module.exports = "<div>\n  <label for=\"{{id}}\" class=\"control-label {{to.labelSrOnly ? 'sr-only' : ''}}\" ng-if=\"to.label\">\n    {{to.label}}\n    {{to.required ? '*' : ''}}\n  </label>\n  <formly-transclude></formly-transclude>\n</div>\n"
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		module.exports = "<div class=\"form-group\" ng-class=\"{'has-error': showError}\">\n  <formly-transclude></formly-transclude>\n</div>\n"
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		exports['default'] = function (ngModule) {
		  __webpack_require__(10)(ngModule);
		  __webpack_require__(12)(ngModule);
		  __webpack_require__(14)(ngModule);
		  __webpack_require__(15)(ngModule);
		  __webpack_require__(17)(ngModule);
		  __webpack_require__(18)(ngModule);
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
		      template: __webpack_require__(11),
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
	/***/ function(module, exports) {
	
		module.exports = "<div class=\"checkbox\">\n\t<label>\n\t\t<input type=\"checkbox\"\n           class=\"formly-field-checkbox\"\n\t\t       ng-model=\"model[options.key]\">\n\t\t{{to.label}}\n\t\t{{to.required ? '*' : ''}}\n\t</label>\n</div>\n"
	
	/***/ },
	/* 12 */
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
		      template: __webpack_require__(13),
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
	/* 13 */
	/***/ function(module, exports) {
	
		module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\"\n             id=\"{{id + '_'+ $index}}\"\n             ng-model=\"multiCheckbox.checked[$index]\"\n             ng-change=\"multiCheckbox.change()\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"
	
	/***/ },
	/* 14 */
	/***/ function(module, exports) {
	
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
	/* 15 */
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
		      template: __webpack_require__(16),
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
	/* 16 */
	/***/ function(module, exports) {
	
		module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"radio\">\n    <label>\n      <input type=\"radio\"\n             id=\"{{id + '_'+ $index}}\"\n             tabindex=\"0\"\n             ng-value=\"option[to.valueProp || 'value']\"\n             ng-model=\"model[options.key]\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"
	
	/***/ },
	/* 17 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
		            value: options.templateOptions.optionsAttr || 'ng-options'
		          })
		        };
		      },
		      apiCheck: function apiCheck(check) {
		        return {
		          templateOptions: {
		            options: check.arrayOf(check.object),
		            optionsAttr: check.string.optional,
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
	/* 18 */
	/***/ function(module, exports) {
	
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
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		var _addons = __webpack_require__(20);
	
		var _addons2 = _interopRequireDefault(_addons);
	
		var _description = __webpack_require__(22);
	
		var _description2 = _interopRequireDefault(_description);
	
		exports['default'] = function (ngModule) {
		  (0, _addons2['default'])(ngModule);
		  (0, _description2['default'])(ngModule);
		};
	
		module.exports = exports['default'];
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		exports['default'] = function (ngModule) {
		  ngModule.run(addAddonsManipulator);
	
		  function addAddonsManipulator(formlyConfig, formlyBootstrapApiCheck) {
		    var addonTemplate = __webpack_require__(21);
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
	/* 21 */
	/***/ function(module, exports) {
	
		module.exports = "<div ng-class=\"{'input-group': to.addonLeft || to.addonRight}\">\n    <div class=\"input-group-addon\"\n         ng-if=\"to.addonLeft\"\n         ng-style=\"{cursor: to.addonLeft.onClick ? 'pointer' : 'inherit'}\"\n         ng-click=\"to.addonLeft.onClick(options, this)\">\n        <i class=\"{{to.addonLeft.class}}\" ng-if=\"to.addonLeft.class\"></i>\n        <span ng-if=\"to.addonLeft.text\">{{to.addonLeft.text}}</span>\n    </div>\n    <formly-transclude></formly-transclude>\n    <div class=\"input-group-addon\"\n         ng-if=\"to.addonRight\"\n         ng-style=\"{cursor: to.addonRight.onClick ? 'pointer' : 'inherit'}\"\n         ng-click=\"to.addonRight.onClick(options, this)\">\n        <i class=\"{{to.addonRight.class}}\" ng-if=\"to.addonRight.class\"></i>\n        <span ng-if=\"to.addonRight.text\">{{to.addonRight.text}}</span>\n    </div>\n</div>\n"
	
	/***/ },
	/* 22 */
	/***/ function(module, exports) {
	
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
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * angular-permission
	 * Route permission and access control as simple as it can get
	 * @version v1.1.1 - 2015-11-09
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
	            Permission.roleValidations[roleName] = validationFunction;
	
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


/***/ }
/******/ ]);
//# sourceMappingURL=vendors.js.map