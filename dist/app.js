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
	
	__webpack_require__(12);
	
	var _config = __webpack_require__(13);
	
	var _user = __webpack_require__(192);
	
	var user = _interopRequireWildcard(_user);
	
	var _modals = __webpack_require__(199);
	
	var _modals2 = _interopRequireDefault(_modals);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_apiCheck2.default.globalConfig.disabled = true; // libraries
	
	exports.default = _angular2.default.module('wbt', ['restangular', _angularUiRouter2.default, 'ui.router.stateHelper', _angularUiBootstrap2.default, 'ngMessages', 'ngAria', 'ngAnimate', 'ngSanitize', _ngstorage2.default.name, _oclazyload2.default, _angularFormly2.default, _angularFormlyTemplatesBootstrap2.default, 'permission', 'api']).config(_config.config).run(_config.run).factory('api', /*@ngInject*/["API", function (API) {
	  return new API('api');
	}]).factory('userInterceptor', user.interceptor).service('user', user.model).directive('userCheck', user.validator).service('modals', _modals2.default).name;

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
	
	            return API;
	        })();
	
	        return API;
	    }]);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	exports.run = run;
	
	var _main = __webpack_require__(14);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _formly = __webpack_require__(180);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main = __webpack_require__(15);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _mainController = __webpack_require__(16);
	
	var _mainController2 = _interopRequireDefault(_mainController);
	
	var _home = __webpack_require__(18);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _contact = __webpack_require__(20);
	
	var _contact2 = _interopRequireDefault(_contact);
	
	var _impressum = __webpack_require__(22);
	
	var _impressum2 = _interopRequireDefault(_impressum);
	
	var _content = __webpack_require__(24);
	
	var _content2 = _interopRequireDefault(_content);
	
	var _download = __webpack_require__(42);
	
	var _download2 = _interopRequireDefault(_download);
	
	var _register = __webpack_require__(45);
	
	var _register2 = _interopRequireDefault(_register);
	
	var _author = __webpack_require__(48);
	
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
	    markdown: /*@ngInject*/["$q", "$ocLazyLoad", function markdown($q, $ocLazyLoad) {
	      return $q(function (resolve) {
	        __webpack_require__.e/* nsure */(4, function () {
	          var md = __webpack_require__(97);
	          return resolve($ocLazyLoad.inject(md));
	        });
	      });
	    }],
	    meta: /*@ngInject*/["api", function meta(api) {
	      return api.getMeta();
	    }]
	  },
	  children: [_home2.default, _contact2.default, _impressum2.default, _content2.default, _download2.default, _register2.default, _author2.default]
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	var path = 'dist/main/main.jade';
	var html = "<nav role=\"navigation\" class=\"navbar navbar-inverse navbar-static-top\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" ng-click=\"main.menuCollapse=!main.menuCollapse\" aria-controls=\"mainnav\" aria-expanded=\"{{!main.menuCollapse}}\" aria-label=\"{{main.menuCollapse ? 'Menü ausklappen' : 'Menü einklappen'}}\" class=\"navbar-toggle collapsed\"><span class=\"fa fa-bars\"></span></button><a data-ui-sref=\".home\" class=\"navbar-brand\"><span ng-class=\"main.items.home.icon || 'fa-home'\" class=\"fa\"></span> {{main.items.home.menu || 'Statistik für Jedermann'}}</a></div><div id=\"mainnav\" uib-collapse=\"main.menuCollapse\" class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav navbar-left\"><li ui-sref-active=\"active\" ng-repeat=\"i in main.meta | filter : {_id: '!home', active: true}\"><a ui-sref=\".{{i._id}}\"><span ng-if=\"i.icon\" ng-class=\"'fa'+i.icon\" class=\"fa\"></span><span ng-bind=\"i.menu\"></span></a></li></ul><ul ng-if=\"!main.user.authenticated\" class=\"nav navbar-nav navbar-right\"><li><button type=\"button\" ng-click=\"main.user.login()\"><span class=\"fa fa-sign-in\"></span> Anmelden</button></li><li data-ui-sref-active=\"active\"><a data-ui-sref=\".register\"><span class=\"fa fa-user-plus\"></span> registrieren</a></li></ul><ul data-ng-if=\"main.user.authenticated\" class=\"nav navbar-nav navbar-right\"><li><span class=\"fa fa-user\"></span> {{main.user.data.profile.nickname||main.user.data.email}}</li><li><button type=\"button\" data-ng-click=\"::main.user.inauthenticate()\"><span aria-hidden=\"true\" class=\"fa fa-sign-out\"></span> Abmelden</button></li></ul></div></div></nav><div ui-view class=\"container\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(17);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainCtrl = /*@ngInject*/["$state", "$stateParams", "user", "modals", "meta", function MainCtrl($state, $stateParams, user, modals, meta) {
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
	}];
	
	exports.default = MainCtrl;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _home = __webpack_require__(19);
	
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
/* 19 */
/***/ function(module, exports) {

	var path = 'dist/main/home/home.jade';
	var html = "<div class=\"jumbo-tron\"><h2 ng-bind=\"home.meta.title\"></h2><div markdown=\"home.meta.body\"></div></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _contact = __webpack_require__(21);
	
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
/* 21 */
/***/ function(module, exports) {

	var path = 'dist/main/contact/contact.jade';
	var html = "<h2 ng-bind=\"contact.meta.title\"></h2><div markdown=\"contact.meta.body\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _impressum = __webpack_require__(23);
	
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
/* 23 */
/***/ function(module, exports) {

	var path = 'dist/main/impressum/impressum.jade';
	var html = "<h2 ng-bind=\"impressum.meta.title\"></h2><div markdown=\"impressum.meta.body\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _content = __webpack_require__(25);
	
	var _content2 = _interopRequireDefault(_content);
	
	var _contentController = __webpack_require__(26);
	
	var _contentController2 = _interopRequireDefault(_contentController);
	
	var _unit = __webpack_require__(27);
	
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
/* 25 */
/***/ function(module, exports) {

	var path = 'dist/main/content/content.jade';
	var html = "<nav role=\"navigation\" class=\"row\"><div class=\"col-xs-12\"><ul class=\"nav nav-pills\"><li ng-repeat=\"unit in content.units track by unit._id\" ui-sref-active=\"active\"><a ui-sref=\".unit.description({unit: unit._id})\" ng-bind=\"unit.title\" ng-class=\"{'text-success': main.user.complete(unit._id), 'text-primary': main.user.requiresComplete(unit.requires)&amp;&amp;!main.user.complete(unit._id), 'text-warning': !main.user.requiresComplete(unit.requires)&amp;&amp;!main.user.complete(unit._id)}\"></a></li></ul></div></nav><section class=\"row\"><div ui-view class=\"col-xs-12\"><div markdown=\"content.meta.body\"></div></div></section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ContentCtrl = /*@ngInject*/["units", "meta", function ContentCtrl(units, meta) {
	  _classCallCheck(this, ContentCtrl);
	
	  this.units = units;
	  this.meta = meta;
	}];
	
	exports.default = ContentCtrl;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(28);
	
	var _unit = __webpack_require__(32);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _unitController = __webpack_require__(33);
	
	var _unitController2 = _interopRequireDefault(_unitController);
	
	var _description = __webpack_require__(34);
	
	var _description2 = _interopRequireDefault(_description);
	
	var _test = __webpack_require__(36);
	
	var _test2 = _interopRequireDefault(_test);
	
	var _topic = __webpack_require__(39);
	
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
	        projections: 'title subtitle description requires topics._id topics.title',
	        _id: $stateParams.unit
	      };
	      return api.getUnitsBy_id(query);
	    }]
	  },
	  children: [_description2.default, _test2.default, _topic2.default]
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(30)();
	// imports
	
	
	// module
	exports.push([module.id, ".subkapitel {\n  background-color: #E9EAED;\n  box-shadow: 0px 1px 1px #888888;\n  line-height: 2em;\n}", ""]);
	
	// exports


/***/ },
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ function(module, exports) {

	var path = 'dist/main/content/unit/unit.jade';
	var html = "<header class=\"row\"><div class=\"col-sm-4\"><h2><a ui-sref=\".description\" ng-bind=\"unit.unit.title\"></a></h2></div><div class=\"col-sm-8\"><h2 ng-bind=\"unit.unit.subtitle\"></h2></div></header><div class=\"row\"><nav class=\"col-sm-4\"><ul class=\"nav nav-pills nav-stacked\"><li ng-repeat=\"topic in unit.unit.topics track by topic._id\" ui-sref-active=\"active\"><a ui-sref=\".topic({topic: topic._id})\" ng-bind=\"topic.title\"></a></li><li data-ui-sref-active=\"active\"><a data-ui-sref=\"main.content.unit.test\">Test</a></li></ul></nav><main data-ui-view class=\"col-sm-8 subkapitel\"></main></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _ = __webpack_require__(17);
	
	var UnitCtrl = /*@ngInject*/(function () {
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
	
	exports.default = UnitCtrl;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _description = __webpack_require__(35);
	
	var _description2 = _interopRequireDefault(_description);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'description',
	  url: '',
	  templateUrl: _description2.default
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var path = 'dist/main/content/unit/description/description.jade';
	var html = "<h3>Beschreibung</h3><div markdown=\"unit.unit.description\" math-jax></div><h4>Voraussetzungen</h4><p ng-if=\"unit.unit.requires.length===0\">Es gibt keine Voraussetzungen.</p><ul ng-if=\"unit.unit.requires.length&gt;0\" class=\"list-unstyled\"><li ng-repeat=\"r in unit.requires track by r._id\"><a ng-bind=\"r.title\" ui-sref=\".({unit: r._id})\"></a></li></ul>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _test = __webpack_require__(37);
	
	var _test2 = _interopRequireDefault(_test);
	
	var _testController = __webpack_require__(38);
	
	var _testController2 = _interopRequireDefault(_testController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'test',
	  url: '/test',
	  templateUrl: _test2.default,
	  controller: _testController2.default,
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

/***/ },
/* 37 */
/***/ function(module, exports) {

	var path = 'dist/main/content/unit/test/test.jade';
	var html = "<h3>Testaufgaben</h3><div collapse=\"test.intro\" ng-init=\"test.intro=true\"><p>Es folgen ein paar Testaufgaben, mit deren Hilfe du dein erworbenes Wissen über dieses Kapitel prüfen und festigen kannst. Es gibt mehrere Aufgabentypen:</p><dl class=\"dl-horizontal\"><dt>Einfachauswahl</dt><dd>Eine der angebotenen Antwortmöglichkeiten ist korrekt. Für die korrekte Beantwortung bekommst du einen Punkt.</dd><dt>Mehrfachauswahl</dt><dd>Jede der angebotenen Aussagen ist entweder korrekt oder falsch und muss explizit mittels Kontrollkästchen beantwortet werden. Jede korrekt ab- bzw. angewählte Aussage bringt dir einen Punkt, man kann also maximal so viele Punkte bekommen wie es Aussagen in einer Aufgabe gibt. Punktabzug bei Fehlern gibt es nicht.</dd><dt>Ausfüllen</dt><dd>Es gibt keine Antwortoptionen, sondern du musst eine kurze Lösung selbst generieren, z.B. eine Rechenaufgabe usw.</dd></dl><p>Auf deine Antwort bekommst du ein Feedback. Bei Auswahl-Aufgaben kannst du auch dann noch die anderen Antworten anwählen um deren Feedback zu sehen, dies wird dann aber nicht mehr als deine Antwort gewertet.</p></div><div role=\"toolbar\" class=\"toolbar\"><button ng-class=\"{'active': !test.intro}\" ng-click=\"test.intro=!test.intro\" aria-pressed=\"{{!test.intro}}\" class=\"btn btn-info\">Info</button><button ng-click=\"test.reset()\" class=\"btn btn-default\">Test neu starten</button></div><div class=\"progress\"><div aria-valuenow=\"{{test.done}}\" aria-valuemin=\"0\" aria-valuemax=\"{{test.max}}\" role=\"progressbar\" ng-style=\"{'width': test.done/test.max*100+'%'}\" class=\"progress-bar progress-bar-info\">bearbeitet: {{test.done}}/{{test.max}}</div><div aria-valuenow=\"{{test.sumPoints}}\" aria-valuemin=\"0\" aria-valuemax=\"{{test.maxPoints}}\" role=\"progressbar\" ng-style=\"{'width': test.sumPoints/test.maxPoints*100+'%'}\" class=\"progress-bar progress-bar-success\">Punkte: {{test.sumPoints}}/{{test.maxPoints}}</div></div><p ng-hide=\"test.current\">Es gibt noch keine Testaufgaben für dieses Kapitel.</p><form novalidate name=\"test.form\" ng-show=\"test.current\" ng-submit=\"test.submit()\" ng-switch=\"test.current.type\"><div ng-switch-when=\"input\" ng-class=\"{'has-success': test.form.$submitted&amp;&amp;test.form.item.$valid, 'has-error': test.form.$submitted&amp;&amp;test.form.item.$invalid}\" class=\"form-group\"><label for=\"item\" ng-bind=\"test.current.text\" class=\"control-label\"></label><input id=\"item\" type=\"text\" name=\"item\" ng-model=\"test.input\" class=\"form-control\"><p ng-bind=\"test.output\" class=\"help-block\"></p></div><div ng-switch-when=\"single\" ng-class=\"{'has-success': test.form.$submitted&amp;&amp;test.form.item.$valid, 'has-error': test.form.$submitted&amp;&amp;test.form.item.$invalid}\" class=\"form-group\"><label ng-bind=\"test.current.text\"></label><div ng-repeat=\"c in test.current.choices track by c._id\" class=\"radio\"><label><input type=\"radio\" name=\"item\" ng-value=\"c\" ng-model=\"test.input\"> {{c.text}}</label></div><p ng-bind=\"test.input.feedback\" ng-show=\"test.form.$submitted\" class=\"help-block\"></p></div><div ng-switch-when=\"multiple\" class=\"form-group\"><label ng-bind=\"test.current.text\"></label><div ng-repeat=\"c in test.current.choices track by c._id\" ng-class=\"{'has-success': test.form.$submitted&amp;&amp;!!c.checked===c.correct, 'has-error': test.form.$submitted&amp;&amp;!!c.checked!==c.correct}\"><div class=\"checkbox\"><label><input type=\"checkbox\" name=\"item\" ng-model=\"c.checked\"> {{c.text}}</label></div><p ng-bind=\"c.feedback\" ng-show=\"test.form.$submitted\" class=\"help-block\"></p></div></div><div class=\"form-group\"><input type=\"submit\" value=\"Antwort abschicken\" ng-hide=\"test.form.$submitted\"><input type=\"button\" value=\"Nächste Aufgabe\" ng-click=\"test.next()\" ng-show=\"test.form.$submitted&amp;&amp;test.done&lt;test.max\"></div></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(17);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TestCtrl = /*@ngInject*/(function () {
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
	      var lengths = _lodash2.default.map(this.originalTests, function (test) {
	        return test.guess ? test.guess.responses.length : 0;
	      });
	      this.count = _lodash2.default.min(lengths);
	      this.tests = _lodash2.default.groupBy(this.originalTests, function (test) {
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
	          var choice = _lodash2.default.find(this.current.choices, { text: this.input });
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
	          response.value = _lodash2.default.transform(this.current.choices, function (res, c) {
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
	      return _lodash2.default.reduce(this.originalTests, function (sum, test) {
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
	      return _lodash2.default.reduce(this.tests.done, function (sum, test) {
	        if (!test.guess) {
	          return sum;
	        }
	        var item = test.item;
	        var response = test.guess.responses[test.guess.responses.length - 1];
	        var choice = undefined;
	        switch (item.type) {
	          case 'single':
	            choice = _lodash2.default.find(item.choices, { _id: response.value });
	            if (choice.correct) {
	              sum = sum + 1;
	            }
	            break;
	          case 'multiple':
	            _lodash2.default.each(item.choices, function (c) {
	              var checked = _lodash2.default.contains(response.value, c._id);
	              if (checked === c.correct) {
	                sum = sum + 1;
	              }
	            }, this);
	            break;
	          case 'input':
	            choice = _lodash2.default.find(item.choices, { text: response.value });
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
	
	exports.default = TestCtrl;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _topic = __webpack_require__(40);
	
	var _topic2 = _interopRequireDefault(_topic);
	
	var _topicController = __webpack_require__(41);
	
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
/* 40 */
/***/ function(module, exports) {

	var path = 'dist/main/content/unit/topic/topic.jade';
	var html = "<h3 data-ng-bind=\"topic.topic.subtitle ? topic.topic.title+': '+topic.topic.subtitle : topic.topic.title\"></h3><div markdown=\"topic.topic.body\" math-jax></div><div role=\"toolbar\" class=\"btn-toolbar\"><div class=\"btn-group\"><div dropdown is-open=\"status.examples\" data-ng-if=\"topic.topic.examples.length&gt;0\" class=\"btn-group\"><button type=\"button\" dropdown-toggle class=\"btn btn-default dropdown-toggle\">Beispiele<span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li data-ng-repeat=\"example in topic.topic.examples\"><a data-ui-sref=\".example({example: example.title})\" ng-bind=\"example.title\" class=\"btn btn-default\"></a></li></ul></div><div dropdown is-open=\"status.extras\" data-ng-if=\"topic.topic.extras.length&gt;0\" class=\"btn-group\"><button type=\"button\" dropdown-toggle class=\"btn btn-default dropdown-toggle\">Extras<span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li data-ng-repeat=\"extra in topic.topic.extras\"><a data-ui-sref=\".extra({extra: extra.title})\" data-ng-bind=\"extra.title\" class=\"btn btn-default\"></a></li></ul></div></div><div data-ng-if=\"main.user.authenticated\" class=\"btn-group\"><button type=\"button\" ng-click=\"main.modals.akzeptanz()\" class=\"btn btn-default\">Kapitel bewerten</button><button type=\"button\" data-ng-click=\"main.modals.fsk()\" class=\"btn btn-default\">Statistikkenntnisse einschätzen</button></div></div><section data-ui-view></section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var topicCtrl = /*@ngInject*/["topic", function topicCtrl(topic) {
	  _classCallCheck(this, topicCtrl);
	
	  this.topic = topic;
	}];
	
	exports.default = topicCtrl;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _download = __webpack_require__(43);
	
	var _download2 = _interopRequireDefault(_download);
	
	var _downloadController = __webpack_require__(44);
	
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
/* 43 */
/***/ function(module, exports) {

	var path = 'dist/main/download/download.jade';
	var html = "<h2>Download</h2><p>Falls du die Inhalte dieser Webseite gern als Textdokument archivieren möchtest, kannst du hier ein Dokument mit den von dir bearbeiteten Kapiteln herunterladen. Du kannst zwischen ein paar Formaten wählen und einstellen, welche Bestandteile du haben möchtest.</p><form novalidate name=\"downloads.form\" method=\"get\" action=\"api/downloads\" class=\"form-horizontal\"><input type=\"hidden\" name=\"token\" ng-value=\"main.user.token\"><div class=\"form-group\"><label class=\"col-xs-2\">Schnellauswahl</label><div class=\"col-xs-10\"><div role=\"toolbar\" class=\"toolbar\"><div class=\"btn-group\"><button id=\"showunits\" ng-click=\"download.show.units=!download.show.units\" aria-expanded=\"{{download.show.units}}\" class=\"btn btn-default\">Kapitel<span ng-class=\"download.show.units ? 'fa-caret-square-o-up' : 'fa-caret-square-o-down'\" aria-hidden=\"true\" class=\"fa\"></span></button><div id=\"unitgroup\" ng-show=\"download.show.units\" role=\"group\" aria-labelledby=\"showunits\" class=\"btn-group\"><button ng-click=\"download.selectUnits(true)\" class=\"btn btn-default\">Alle</button><button ng-click=\"download.selectUnits(false)\" class=\"btn btn-default\">keine</button></div></div><div class=\"btn-group\"><button id=\"showcontent\" ng-click=\"download.show.contents=!download.show.contents\" aria-expanded=\"{{download.show.contents}}\" class=\"btn btn-default\">Inhalte<span ng-class=\"download.show.contents ? 'fa-caret-square-o-up' : 'fa-caret-square-o-down'\" aria-hidden=\"true\" class=\"fa\"></span></button><div ng-show=\"download.show.contents\" role=\"group\" aria-labelledby=\"showcontent\" class=\"btn-group\"><button ng-click=\"download.selectContents(true)\" class=\"btn btn-default\">Alle</button><button ng-click=\"download.selectContents(false)\" class=\"btn btn-default\">keine</button></div></div></div></div></div><formly-form model=\"download.data\" fields=\"download.fields\" form=\"download.form\"><div class=\"form-group\"><div class=\"col-xs-2-offset col-xs-10\"><input type=\"submit\" value=\"Download\" ng-class=\"{'btn-primary': undefined.$valid,'btn-danger': undefined.$invalid&&undefined.$touched}\" ng-disabled=\"undefined.$invalid\" class=\"btn\"></div></div></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DownloadController = /*@ngInject*/(function () {
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
	      this.data.units = val ? this._.map(this.units, '_id') : [];
	    }
	  }, {
	    key: 'selectContents',
	    value: function selectContents(val) {
	      this.data.contents = val ? ['body', 'examples', 'extras'] : [];
	    }
	  }]);
	
	  return DownloadController;
	})();
	
	exports.default = DownloadController;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _register = __webpack_require__(46);
	
	var _register2 = _interopRequireDefault(_register);
	
	var _registerController = __webpack_require__(47);
	
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
/* 46 */
/***/ function(module, exports) {

	var path = 'dist/main/register/register.jade';
	var html = "<h2>Registrieren</h2><form novalidate role=\"form\" name=\"register.form\" ng-submit=\"register.register()\" class=\"form-horizontal\"><formly-form model=\"register.model\" fields=\"register.fields\" form=\"register.form\" options=\"register.formOptions\"><p>Mit der Registrierung erklärst du dich mit folgenden Punkten einverstanden:</p><ul><li>Wir behandeln deine Eingaben anonym und vertraulich.</li><li>Neben deinen explizit gemachten Angaben werden deine Bewegungen teilweise mit erfasst um dich nicht zusätzlich nach deiner Verweildauer, den von dir angesurften Inhalten o.Ä. fragen zu müssen.</li><li>Zu Forschungszwecken werten wir alle Nutzerdaten wissenschaftlich aus.</li><li>Wir behalten uns das Recht vor, dich zu Forschungszwecken über deine hier angegebene E-Mail-Adresse kontaktieren zu können.</li></ul><div class=\"form-group\"><div class=\"col-xs-2-offset col-xs-10\"><input type=\"submit\" value=\"Registrieren\" ng-class=\"{'btn-primary': undefined.$valid,'btn-danger': undefined.$invalid&&undefined.$touched}\" ng-disabled=\"undefined.$invalid\" class=\"btn\"></div></div></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RegisterCtrl = /*@ngInject*/(function () {
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
	
	exports.default = RegisterCtrl;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _author = __webpack_require__(49);
	
	var _author2 = _interopRequireDefault(_author);
	
	var _meta = __webpack_require__(50);
	
	var _meta2 = _interopRequireDefault(_meta);
	
	var _units = __webpack_require__(57);
	
	var _units2 = _interopRequireDefault(_units);
	
	var _images = __webpack_require__(89);
	
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
	          __webpack_require__(96);
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
/* 49 */
/***/ function(module, exports) {

	var path = 'dist/main/author/author.jade';
	var html = "<div class=\"row\"><div class=\"col-xs-12\"><div ncy-breadcrumb></div><h2>Authorenmodus</h2><ul ng-hide=\"main.user.data.role==='user'\" class=\"nav nav-tabs\"><li ui-sref-active=\"active\"><a ui-sref=\".meta\">Meta</a></li><li ui-sref-active=\"active\"><a ui-sref=\".units.new\">Kapitel</a></li><li ui-sref-active=\"active\"><a ui-sref=\".images\">Bilder</a></li></ul><div ui-view><p ng-if=\"!main.user.authenticated\" class=\"text-danger\">Willkommen beim Autorenmodus. Der Autorenmodus kann nur genutzt werden, wenn man angemeldet und Autor ist. Du bist gerade nicht angemeldet.</p><ng-switch on=\"main.user.data.role\"><p ng-switch-when=\"author\" class=\"text-success\">Willkommen beim Autorenmodus. Du gehörst zu den Autoren dieses WBT und kannst hier seine Inhalte editieren.</p><p ng-switch-when=\"user\" class=\"text-warning\">Willkommen beim Autorenmodus. Du bist leider kein Autor und kannst keine Inhalte bearbeiten. Bitte wende dich an uns, falls du Autor werden möchtest.</p></ng-switch></div></div></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _item = __webpack_require__(51);
	
	var _item2 = _interopRequireDefault(_item);
	
	var _meta = __webpack_require__(55);
	
	var _meta2 = _interopRequireDefault(_meta);
	
	var _metaController = __webpack_require__(56);
	
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _item = __webpack_require__(52);
	
	var _item2 = _interopRequireDefault(_item);
	
	var _itemController = __webpack_require__(53);
	
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
	        __webpack_require__.e/* nsure */(1, function () {
	          var jsonpatch = __webpack_require__(54);
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
/* 52 */
/***/ function(module, exports) {

	var path = 'dist/main/author/meta/item/item.jade';
	var html = "<h4 ng-bind=\"::main.items[$stateParams.meta].title\"></h4><form novalidate name=\"item.form\" class=\"form-horizontal\"><formly-form form=\"item.form\" model=\"item.item\" fields=\"item.fields\"></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(17);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ItemController = /*@ngInject*/["item", "$scope", "jsonpatch", "api", function ItemController(item, $scope, jsonpatch, api) {
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
	}];
	
	exports.default = ItemController;

/***/ },
/* 54 */,
/* 55 */
/***/ function(module, exports) {

	var path = 'dist/main/author/meta/meta.jade';
	var html = "<h3>Meta</h3><ul class=\"nav nav-tabs\"><li ng-repeat=\"(i, v) in main.items\" ui-sref-active=\"active\"><a ui-sref=\".item({meta: i})\" ng-bind=\"::v.menu\"></a></li></ul><div ui-view><p>Hier kannst du Metainformationen für das WBT anpassen. Startseite, Kontakthinweis und Impressum können hier angepasste Texte bekommen und in der Navigation aktiviert oder deaktiviert werden.</p></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MetaController = /*@ngInject*/function MetaController() {
	  _classCallCheck(this, MetaController);
	};
	
	exports.default = MetaController;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _units = __webpack_require__(58);
	
	var _units2 = _interopRequireDefault(_units);
	
	var _unitsController = __webpack_require__(59);
	
	var _unitsController2 = _interopRequireDefault(_unitsController);
	
	var _new = __webpack_require__(62);
	
	var _new2 = _interopRequireDefault(_new);
	
	var _unit = __webpack_require__(65);
	
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
	    units: /*@ngInject*/["Restangular", function units(Restangular) {
	      var query = {
	        projections: 'title',
	        options: { sort: 'position' }
	      };
	      return Restangular.all('units').getList(query);
	    }]
	  },
	  children: [_new2.default, _unit2.default]
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/units.jade';
	var html = "<h3><button type=\"button\" ng-click=\"units.collapse=!units.collapse\" class=\"btn btn-default\"><span ng-class=\"units.collapse ? 'fa-toggle-off' : 'fa-toggle-on'\" aria-hidden=\"true\" class=\"fa\"></span> {{units.collapse ? 'einblenden' : 'ausblenden'}}</button><br><span>Kapitelübersicht</span></h3><div uib-collapse=\"units.collapse\"><form novalidate name=\"unitsForm\" class=\"form-horizontal\"><div class=\"form-group\"><label for=\"selectUnit\" class=\"col-xs-2 control-label\">Kapitel</label><div class=\"col-xs-10\"><select id=\"selectUnit\" name=\"selectUnit\" ng-model=\"units.selected\" ng-options=\"u.title for u in units.units track by u._id\" ng-change=\"units.select()\" class=\"form-control\"><option value=\"\">Neues Kapitel</option></select></div></div><div ng-if=\"units.selected\" class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><div class=\"button-group\"><a ui-sref=\"main.content.unit.description({unit: units.selected._id})\" class=\"btn btn-primary\">Anschauen</a><button type=\"button\" ng-click=\"units.remove()\" class=\"btn btn-danger\">Löschen</button></div></div></div></form></div><div ui-view></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(17);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _removeModal = __webpack_require__(60);
	
	var _removeModal2 = _interopRequireDefault(_removeModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UnitsController = /*@ngInject*/(function () {
	  function UnitsController(units, $scope, $state, $uibModal) {
	    _classCallCheck(this, UnitsController);
	
	    this.units = units;
	    this.$state = $state;
	    this.$uibModal = $uibModal;
	    this.removeModal = (0, _removeModal2.default)($scope);
	    this.collapse = false;
	    this.init();
	  }
	  UnitsController.$inject = ["units", "$scope", "$state", "$uibModal"];
	
	  _createClass(UnitsController, [{
	    key: 'init',
	    value: function init() {
	      if (this.$state.params.unit) {
	        this.selected = _lodash2.default.find(this.units, { _id: this.$state.params.unit });
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
	
	      return this.$uibModal.open(this.removeModal).result.then(function () {
	        return _this2.selected.remove();
	      }).then(function () {
	        _lodash2.default.remove(_this2.units, { _id: _this2.selected._id });
	        _this2.selected = null;
	        _this2.select();
	      });
	    }
	  }]);
	
	  return UnitsController;
	})();
	
	exports.default = UnitsController;

/***/ },
/* 60 */
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
	
	var _removeModal = __webpack_require__(61);
	
	var _removeModal2 = _interopRequireDefault(_removeModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 61 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/remove-modal/remove-modal.jade';
	var html = "<div class=\"modal-header\"><h3>Löschen von Inhalten</h3></div><div class=\"modal-body\"><p ng-if=\"main.$state.includes('main.author.images')\">Möchtest du dieses Bild wirklich vom Server löschen? Falls ja, entferne es bitte ggf. auch umgehend aus den Texten des WBT.</p><p ng-if=\"main.$state.is('main.author.units.unit.basics')\">Möchtest du wirklich das Kapitel „{{units.selected.title}}“ löschen?</p><p ng-if=\"main.$state.is('main.author.units.unit.topics.topic.basics')\">Möchtest du wirklich das Subkapitel „{{topics.selected.title}}“ löschen?</p></div><div class=\"modal-footer\"><input type=\"button\" ng-click=\"$close()\" value=\"Ja\"><input type=\"button\" ng-click=\"$dismiss()\" value=\"Nein\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _new = __webpack_require__(63);
	
	var _new2 = _interopRequireDefault(_new);
	
	var _newController = __webpack_require__(64);
	
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
/* 63 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/new/new.jade';
	var html = "<h3 ng-init=\"units.selected=null\">Neues Kapitel anlegen</h3><form novalidate name=\"new.form\" ng-submit=\"units.save(new.unit)\" class=\"form-horizontal\"><formly-form model=\"new.unit\" fields=\"new.fields\" form=\"new.form\"><div class=\"form-group\"><div class=\"col-xs-2-offset col-xs-10\"><input type=\"submit\" value=\"Anlegen\" ng-class=\"{'btn-primary': new.form.$valid,'btn-danger': new.form.$invalid&&new.form.$touched}\" ng-disabled=\"new.form.$invalid\" class=\"btn\"></div></div></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewController = /*@ngInject*/["$scope", function NewController($scope) {
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
	}];
	
	exports.default = NewController;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _unit = __webpack_require__(66);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _unitController = __webpack_require__(67);
	
	var _unitController2 = _interopRequireDefault(_unitController);
	
	var _basics = __webpack_require__(68);
	
	var _basics2 = _interopRequireDefault(_basics);
	
	var _topics = __webpack_require__(71);
	
	var _topics2 = _interopRequireDefault(_topics);
	
	var _tests = __webpack_require__(86);
	
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
	          var jsonpatch = __webpack_require__(54);
	          return jsonpatch ? resolve(jsonpatch) : reject('jsonpatch not loaded');
	        });
	      });
	    }],
	    unit: /*@ngInject*/["Restangular", "$stateParams", function unit(Restangular, $stateParams) {
	      var query = { projections: 'title subtitle description requires' };
	      return Restangular.one('units', $stateParams.unit).get(query);
	    }]
	  },
	  children: [_basics2.default, _topics2.default, _tests2.default]
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/unit.jade';
	var html = "<h3 ng-bind=\"unit.unit.title\"></h3><ul class=\"nav nav-tabs\"><li ui-sref-active=\"active\"><a ui-sref=\".basics\">Grunddaten</a></li><li ui-sref-active=\"active\"><a ui-sref=\".topics.new\">Subkapitel</a></li><li ui-sref-active=\"active\"><a ui-sref=\".tests\">Testaufgaben</a></li></ul><div ui-view></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UnitCtrl = /*@ngInject*/["jsonpatch", "unit", "$scope", function UnitCtrl(jsonpatch, unit, $scope) {
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
	}];
	
	exports.default = UnitCtrl;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _basics = __webpack_require__(69);
	
	var _basics2 = _interopRequireDefault(_basics);
	
	var _basicsController = __webpack_require__(70);
	
	var _basicsController2 = _interopRequireDefault(_basicsController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'basics',
	  url: '',
	  templateUrl: _basics2.default,
	  controller: _basicsController2.default,
	  controllerAs: 'basics',
	  ncyBreadcrumb: {
	    label: '{{unit.unit.title}} — Grunddaten'
	  }
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/basics/basics.jade';
	var html = "<form novalidate name=\"basics.form\" class=\"form-horizontal\"><formly-form model=\"unit.unit\" fields=\"basics.fields\" form=\"basics.form\"></formly-form><div ng-if=\"unit.patches.length===0\" role=\"alert\" class=\"alert alert-success\">alles hochgeladen</div><div ng-if=\"unit.patches.length&gt;0\" role=\"alert\" class=\"alert alert-info\">lade Änderungen hoch</div><div ng-if=\"unit.error\" role=\"alert\" class=\"alert alert-danger\"><button type=\"button\" ng-click=\"unit.unit=unit.recover\">rückgängig</button><span>Fehler beim Hochladen</span></div></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(17);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BasicsController = /*@ngInject*/["$scope", "unit", function BasicsController($scope, unit) {
	  var _this = this;
	
	  _classCallCheck(this, BasicsController);
	
	  var modelOptions = {
	    updateOn: 'default blur',
	    debounce: {
	      default: 500,
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
	    _this.fields[3].templateOptions.options = _lodash2.default.reject(val, { _id: unit._id });
	  }, true);
	}];
	
	exports.default = BasicsController;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _topics = __webpack_require__(72);
	
	var _topics2 = _interopRequireDefault(_topics);
	
	var _topicsController = __webpack_require__(73);
	
	var _topicsController2 = _interopRequireDefault(_topicsController);
	
	var _new = __webpack_require__(74);
	
	var _new2 = _interopRequireDefault(_new);
	
	var _topic = __webpack_require__(77);
	
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
	    topics: /*@ngInject*/["Restangular", "$stateParams", function topics(Restangular, $stateParams) {
	      var query = { projections: 'topics.title topics._id' };
	      return Restangular.one('units', $stateParams.unit).all('topics').getList(query);
	    }]
	  },
	  children: [_new2.default, _topic2.default]
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/topics/topics.jade';
	var html = "<button type=\"button\" ng-click=\"topics.collapse=!topics.collapse\" ng-bind=\"topics.collapse ? 'Subkapitelübersicht einblenden' : 'Subkapitelübersicht ausblenden'\" class=\"btn btn-default\"></button><div uib-collapse=\"topics.collapse\"><form novalidate name=\"topics.form\" class=\"form-horizontal\"><div class=\"form-group\"><label for=\"selectTopic\" class=\"col-xs-2 control-label\">Subkapitel</label><div class=\"col-xs-10\"><select id=\"selectTopic\" ng-options=\"t.title for t in topics.topics track by t._id\" ng-model=\"topics.selected\" ng-change=\"topics.select()\" class=\"form-control\"><option value=\"\">Neues Subkapitel</option></select></div></div><div ng-if=\"topics.selected\" class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><div class=\"button-group\"><button type=\"button\" ng-click=\"topics.moveUp()\">hoch</button><button type=\"button\" ng-click=\"topics.moveDown()\">runter</button><button type=\"button\" ng-click=\"topics.remove()\">löschen</button></div></div></div></form></div><ui-view></ui-view>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(17);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _removeModal = __webpack_require__(60);
	
	var _removeModal2 = _interopRequireDefault(_removeModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TopicsCtrl = /*@ngInject*/(function () {
	  function TopicsCtrl(topics, $state, $scope, $uibModal, Restangular, unit) {
	    _classCallCheck(this, TopicsCtrl);
	
	    this.Restangular = Restangular;
	    this.unit = unit;
	    this.topics = topics;
	    this.$state = $state;
	    this.$uibModal = $uibModal;
	    this.removeModal = (0, _removeModal2.default)($scope);
	    this.selected = null;
	    this.collapse = false;
	    this.init();
	  }
	  TopicsCtrl.$inject = ["topics", "$state", "$scope", "$uibModal", "Restangular", "unit"];
	
	  _createClass(TopicsCtrl, [{
	    key: 'init',
	    value: function init() {
	      if (this.$state.params.topic) {
	        this.selected = _lodash2.default.find(this.topics, { _id: this.$state.params.topic });
	      }
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
	        return this.$uibModal.open(this.removeModal).result.then(function () {
	          return _this2.selected.remove();
	        }).then(function () {
	          _lodash2.default.remove(_this2.topics, { _id: _this2.selected._id });
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
	        _this3.topics = _this3.Restangular.restangularizeCollection(_this3.unit, topics, 'topics');
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
	        _this4.topics = _this4.Restangular.restangularizeCollection(_this4.unit, topics, 'topics');
	      }, function (e) {
	        _this4.error = e;
	      });
	    }
	  }]);
	
	  return TopicsCtrl;
	})();
	
	exports.default = TopicsCtrl;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _new = __webpack_require__(75);
	
	var _new2 = _interopRequireDefault(_new);
	
	var _newController = __webpack_require__(76);
	
	var _newController2 = _interopRequireDefault(_newController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'new',
	  url: '/new',
	  templateUrl: _new2.default,
	  controller: _newController2.default,
	  controllerAs: 'new'
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/topics/new/new.jade';
	var html = "<h3>Neues Subkapitel anlegen</h3><form novalidate name=\"new.form\" ng-submit=\"topics.save(new.topic)\" class=\"form-horizontal\"><formly-form model=\"new.topic\" fields=\"new.fields\" form=\"new.form\"><div class=\"form-group\"><div class=\"col-xs-2-offset col-xs-10\"><input type=\"submit\" value=\"Erstellen\" ng-class=\"{'btn-primary': new.form.$valid,'btn-danger': new.form.$invalid&&new.form.$touched}\" ng-disabled=\"new.form.$invalid\" class=\"btn\"></div></div></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewController = /*@ngInject*/function NewController() {
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
	
	exports.default = NewController;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _topic = __webpack_require__(78);
	
	var _topic2 = _interopRequireDefault(_topic);
	
	var _topicController = __webpack_require__(79);
	
	var _topicController2 = _interopRequireDefault(_topicController);
	
	var _basics = __webpack_require__(80);
	
	var _basics2 = _interopRequireDefault(_basics);
	
	var _examples = __webpack_require__(82);
	
	var _examples2 = _interopRequireDefault(_examples);
	
	var _extras = __webpack_require__(84);
	
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
	    topic: /*@ngInject*/["Restangular", "$stateParams", function topic(Restangular, $stateParams) {
	      return Restangular.one('units', $stateParams.unit).one('topics', $stateParams.topic).get();
	    }]
	  },
	  children: [_basics2.default, _examples2.default, _extras2.default]
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/topics/topic/topic.jade';
	var html = "<h3 ng-bind=\"topic.topic.title\"></h3><ul class=\"nav nav-tabs\"><li ui-sref-active=\"active\"><a ui-sref=\".basics\">Grunddaten</a></li><li ui-sref-active=\"active\"><a ui-sref=\".examples\">Beispiele</a></li><li ui-sref-active=\"active\"><a ui-sref=\".extras\">Extras</a></li></ul><ui-view></ui-view>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TopicCtrl = /*@ngInject*/["$scope", "jsonpatch", "topic", function TopicCtrl($scope, jsonpatch, topic) {
	  var _this = this;
	
	  _classCallCheck(this, TopicCtrl);
	
	  var modelOptions = {
	    updateOn: 'default blur',
	    debounce: {
	      default: 500,
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
	}];
	
	exports.default = TopicCtrl;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _basics = __webpack_require__(81);
	
	var _basics2 = _interopRequireDefault(_basics);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'basics',
	  url: '/basics',
	  templateUrl: _basics2.default,
	  ncyBreadcrumb: { label: '{{topic.topic.title}} — Grunddaten' }
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/topics/topic/basics/basics.jade';
	var html = "<form novalidate name=\"basicsForm\" class=\"form-horizontal\"><formly-form model=\"topic.topic\" fields=\"topic.topicFields\" form=\"topic.topicForm\"></formly-form></form><div ng-if=\"topic.patches.length===0\" role=\"alert\" class=\"alert alert-success\">alles hochgeladen</div><div ng-if=\"topic.patches.length&gt;0\" role=\"alert\" class=\"alert alert-info\">lade Änderungen hoch</div><div ng-if=\"topic.error\" role=\"alert\" class=\"alert alert-danger\"><button type=\"button\" ng-click=\"topic.topic=topic.recover\">rückgängig</button><span>Fehler beim Hochladen</span></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _examples = __webpack_require__(83);
	
	var _examples2 = _interopRequireDefault(_examples);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'examples',
	  url: '/examples',
	  templateUrl: _examples2.default
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/topics/topic/examples/examples.jade';
	var html = "<p>Beispiele</p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extras = __webpack_require__(85);
	
	var _extras2 = _interopRequireDefault(_extras);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'extras',
	  url: '/extras',
	  templateUrl: _extras2.default
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/topics/topic/extras/extras.jade';
	var html = "<p>Extras</p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tests = __webpack_require__(87);
	
	var _tests2 = _interopRequireDefault(_tests);
	
	var _testsController = __webpack_require__(88);
	
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
/* 87 */
/***/ function(module, exports) {

	var path = 'dist/main/author/units/unit/tests/tests.jade';
	var html = "<h3>Testaufgaben</h3><p ng-if=\"tests.tests.length===0\">Noch keine Testaufgaben hinzugefügt</p><form novalidate name=\"tests.testsForm\" ng-if=\"tests.tests.length&gt;0\" class=\"form-horizontal\"><div class=\"form-group\"><label for=\"selectTest\" class=\"col-xs-2 control-label\">Aufgabe</label><div class=\"col-xs-10\"><select id=\"selectTest\" name=\"selectTest\" ng-model=\"tests.selected\" ng-options=\"v.text for v in tests.tests\" class=\"form-control\"><option value=\"\">Neue Aufgabe</option></select></div></div></form><form novalidate ng-if=\"tests.selected\" ng-submit=\"tests.update()\" class=\"form-horizontal\"><formly-form model=\"tests.selected\" fields=\"tests.fields\" form=\"tests.testForm\"><div class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><input type=\"button\" value=\"Löschen\" ng-click=\"tests.remove()\" class=\"btn btn-danger\"><input type=\"submit\" value=\"Aktualisieren\" ng-class=\"{'btn-primary': tests.testForm.$valid, 'btn-danger': tests.testForm.$invalid}\" class=\"btn\"></div></div></formly-form></form><form novalidate name=\"tests.newTestForm\" ng-submit=\"tests.create()\" ng-if=\"!tests.selected\" class=\"form-horizontal\"><formly-form model=\"tests.newTest\" fields=\"tests.newFields\" form=\"tests.newTestForm\"><div class=\"form-group\"><div class=\"col-xs-2-offset col-xs-10\"><input type=\"submit\" value=\"Erstellen\" ng-class=\"{'btn-primary': tests.newTestForm.$valid,'btn-danger': tests.newTestForm.$invalid&&tests.newTestForm.$touched}\" ng-disabled=\"tests.newTestForm.$invalid\" class=\"btn\"></div></div></formly-form></form>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(17);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TestsCtrl = /*@ngInject*/(function () {
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
	      type: 'horizontalInput',
	      templateOptions: {
	        label: 'Tags',
	        type: 'text',
	        list: true
	      },
	      ngModelAttrs: {
	        list: {
	          attribute: 'ng-list'
	        }
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
	})();
	
	exports.default = TestsCtrl;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _image = __webpack_require__(90);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _images = __webpack_require__(93);
	
	var _images2 = _interopRequireDefault(_images);
	
	var _imagesController = __webpack_require__(94);
	
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
	          __webpack_require__(95);
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _image = __webpack_require__(91);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _imageController = __webpack_require__(92);
	
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
/* 91 */
/***/ function(module, exports) {

	var path = 'dist/main/author/images/image/image.jade';
	var html = "<h3 ng-bind=\"image.image.filename\"></h3><div class=\"form-inline\"><div class=\"checkbox\"><label><input type=\"checkbox\" ng-model=\"image.caption\"> mit Unterschrift</label></div></div><div markdown=\"image.caption ? image.mdfigcaption : image.mdfig\"></div><uib-accordion><uib-accordion-group heading=\"Bild einbinden\" is-open=\"true\"><dl class=\"dl-horizontal\"><dt>mit Bildunterschrift</dt><dd><pre ng-bind=\"image.mdfigcaption\"></pre></dd><dt>normal</dt><dd><pre ng-bind=\"image.mdfig\"></pre></dd></dl></uib-accordion-group><uib-accordion-group heading=\"Bild editieren\"><form novalidate name=\"image.form\" class=\"form-horizontal\"><div class=\"form-group\"><label for=\"imageInput\" class=\"col-xs-2\">Bild ersetzen</label><div class=\"col-xs-10\"><input id=\"imageInput\" type=\"file\" nv-file-select uploader=\"image.uploader\" name=\"imageInput\"><span ng-if=\"image.uploader.queue.length&gt;0\" ng-bind=\"image.uploader.queue[image.uploader.queue.length-1].file.name\" class=\"help-block\"></span></div></div><div class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><div class=\"btn-group\"><button ng-if=\"image.uploader.queue.length&gt;0\" ng-click=\"image.uploader.uploadItem(image.uploader.queue.length-1)\" class=\"btn btn-primary\">Bild updaten</button><button ng-click=\"image.remove()\" class=\"btn btn-warning\">Bild löschen</button></div></div></div></form></uib-accordion-group></uib-accordion>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(17);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _removeModal = __webpack_require__(60);
	
	var _removeModal2 = _interopRequireDefault(_removeModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewController = /*@ngInject*/(function () {
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
	    this.mdfigcaption = '~[Beispielunterschrift](api/images/' + this.image._id + ')';
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
	})();
	
	exports.default = NewController;

/***/ },
/* 93 */
/***/ function(module, exports) {

	var path = 'dist/main/author/images/images.jade';
	var html = "<div class=\"row\"><div class=\"col-xs-6\"><h3>Bilder suchen</h3><form novalidate name=\"images.form\" class=\"form-horizontal\"><formly-form fields=\"images.fields\" form=\"images.form\" model=\"images.searchTerms\"><div class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><button ng-click=\"images.search()\" class=\"btn btn-info\">Ohne Eingabe suchen</button></div></div><div class=\"form-group\"><label for=\"file\" class=\"col-xs-2\">Bild hinzufügen</label><div class=\"col-xs-10\"><input type=\"file\" nv-file-select multiple accept=\"image/*\" uploader=\"images.uploader\"></div></div></formly-form></form><table ng-if=\"images.uploader.queue.length&gt;0\" class=\"table\"><thead><tr><th>Name</th><th>Fortschritt</th><th>Hochladen</th><th>Löschen</th></tr></thead><tbody><tr ng-repeat=\"i in images.uploader.queue\"><td ng-bind=\"i.file.name\"></td><td><uib-progressbar type=\"success\" value=\"i.progress\"></uib-progressbar></td><td><button ng-click=\"i.upload()\" class=\"btn btn-primary\"><span aria-hidden=\"true\" class=\"fa fa-upload\"></span><span class=\"sr-only\">Hochladen</span></button></td><td><button ng-click=\"i.remove()\" class=\"btn btn-warning\"><span aria-hidden=\"true\" class=\"fa fa-remove\"></span><span class=\"sr-only\">Löschen</span></button></td></tr><tr><td>Gesamt</td><td><uib-progressbar type=\"success\" value=\"images.uploader.progress\"></uib-progressbar></td><td><button ng-click=\"images.uploader.uploadAll()\" class=\"btn btn-primary\"><span aria-hidden=\"true\" class=\"fa fa-upload\"></span><span class=\"sr-only\">Hochladen</span></button></td><td><button ng-click=\"images.uploader.clearQueue()\" class=\"btn btn-warning\"><span aria-hidden=\"true\" class=\"fa fa-remove\"></span><span class=\"sr-only\">Löschen</span></button></td></tr></tbody></table><div uib-collapse=\"images.images.length===0\"><h3>{{images.images.length}} Treffer</h3><ul class=\"nav nav-pills\"><li ui-sref-active=\"active\" ng-repeat=\"i in images.images\"><a ui-sref=\".image({image: i._id})\" ng-bind=\"i.filename\"></a></li></ul></div></div><ui-view class=\"col-xs-6\"></ui-view></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ImagesController = /*@ngInject*/(function () {
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
	})();
	
	exports.default = ImagesController;

/***/ },
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
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// wrappers
	var wrappers = exports.wrappers = [{
	  name: 'horizontalBootstrapLabel',
	  templateUrl: __webpack_require__(181)
	}, {
	  name: 'bootstrapHasError',
	  templateUrl: __webpack_require__(182),
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
	  templateUrl: __webpack_require__(183),
	  wrapper: 'bootstrapHasError'
	}, {
	  name: 'horizontalMultiCheckbox',
	  extends: 'multiCheckbox',
	  templateUrl: __webpack_require__(184),
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
	}, {
	  name: 'horizontalMultiCheckboxInline',
	  extends: 'horizontalMultiCheckbox',
	  templateUrl: __webpack_require__(185)
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
	  templateUrl: __webpack_require__(186)
	}, {
	  name: 'horizontalRadio',
	  extends: 'radio',
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
	}, {
	  name: 'horizontalRadioInline',
	  extends: 'horizontalRadio',
	  templateUrl: __webpack_require__(187)
	}, {
	  name: 'repeatSection',
	  templateUrl: __webpack_require__(188),
	  controller: __webpack_require__(189)
	}, {
	  name: 'horizontalTypeahead',
	  extends: 'horizontalInput',
	  templateUrl: __webpack_require__(190),
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
	  templateUrl: __webpack_require__(191),
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
/* 181 */
/***/ function(module, exports) {

	var path = 'dist/formly/wrappers/horizontal-bootstrap-label.jade';
	var html = "<label for=\"{{::id}}\" ng-bind=\"to.required ? to.label+' *' : to.label\" class=\"col-xs-2 control-label\"></label><div class=\"col-xs-10\"><formly-transclude></formly-transclude><span ng-messages=\"fc.$error\" ng-if=\"showError\" class=\"help-block\"><span ng-repeat=\"(name, message) in options.validation.messages\" role=\"alert\" ng-message-exp=\"::name\">{{::message(fc.$viewValue,fc.$modelValue,this)}}</span></span></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 182 */
/***/ function(module, exports) {

	var path = 'dist/formly/wrappers/bootstrap-has-error.jade';
	var html = "<div ng-class=\"{'has-error': showError, 'has-success': fc.$valid}\" class=\"form-group\"><formly-transclude></formly-transclude></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 183 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-checkbox.jade';
	var html = "<div class=\"col-xs-offset-2 col-xs-10\"><div class=\"checkbox\"><label><input type=\"checkbox\" ng-model=\"model[options.key]\"> {{to.label}}</label></div></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 184 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-multi-checkbox.jade';
	var html = "<div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\"><label><input type=\"checkbox\" id=\"{{id + '_'+ $index}}\" ng-model=\"multiCheckbox.checked[$index]\" ng-change=\"multiCheckbox.change()\" name=\"{{options.key}}\" ng-value=\"option[to.valueProp||'value']\"> {{option[to.labelProp || 'name']}}</label></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 185 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-multi-checkbox-inline.jade';
	var html = "<label ng-repeat=\"(key, option) in to.options\" class=\"checkbox-inline\"><input type=\"checkbox\" id=\"{{id + '_'+ $index}}\" ng-model=\"multiCheckbox.checked[$index]\" ng-change=\"multiCheckbox.change()\" name=\"{{options.key}}\" ng-value=\"option[to.valueProp||'value']\"> {{option[to.labelProp || 'name']}}</label>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 186 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-markdown-area.jade';
	var html = "<div class=\"row\"><div class=\"col-xs-12\"><ul class=\"nav nav-tabs\"><li ng-class=\"{'active': 'both'}[view]\"><button type=\"button\" ng-click=\"view='markdown'\" ng-init=\"view='markdown'\" class=\"btn btn-default\">Markdown</button></li><li ng-class=\"{'active': 'both'}[view]\"><button type=\"button\" ng-click=\"view='preview'\" class=\"btn btn-default\">Vorschau</button></li><li ng-class=\"{'active': 'both'}[view]\"><button type=\"button\" ng-click=\"view='both'\" class=\"btn btn-default\">nebeneinander</button></li></ul></div></div><div ng-switch=\"view\" class=\"row\"><div ng-switch-when=\"markdown\" class=\"col-xs-12\"><textarea ng-model=\"model[options.key]\" class=\"form-control\"></textarea></div><div ng-switch-when=\"preview\" markdown=\"model[options.key]\" math-jax class=\"col-xs-12\"></div><div ng-switch-when=\"both\" class=\"col-xs-6\"><textarea ng-model=\"model[options.key]\" class=\"form-control\"></textarea></div><div ng-switch-when=\"both\" markdown=\"model[options.key]\" math-jax class=\"col-xs-6\"></div></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 187 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-radio-inline.jade';
	var html = "<label ng-repeat=\"option in to.options\" class=\"radio-inline\"><input type=\"radio\" id=\"{{id+'_'+$index}}\" name=\"{{options.key}}\" ng-value=\"option[to.valueProp||'value']\" ng-model=\"model[options.key]\"><span ng-if=\"option.icon\" ng-class=\"'fa-'+option.icon\" class=\"fa\"></span> {{option[to.labelProp||'name']}}</label>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 188 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/repeat-section.jade';
	var html = "<h4 ng-bind=\"to.label\"></h4><div ng-repeat=\"element in model[options.key]\" ng-init=\"fields = copyFields(to.fields)\" class=\"repeatsection\"><formly-form fields=\"fields\" model=\"element\" bind-name=\"'formly_ng_repeat' + index + $parent.$index\"></formly-form><div class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><button ng-click=\"model[options.key].splice($index, 1)\" class=\"btn btn-sm btn-danger\">Löschen</button></div></div><hr></div><div class=\"form-group\"><div class=\"col-xs-offset-2 col-xs-10\"><button type=\"button\" ng-click=\"addNew()\" ng-bind=\"to.btnText\" class=\"btn btn-primary\"></button></div></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = /*@ngInject*/["$scope", function ($scope) {
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
	}];
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 190 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-typeahead.jade';
	var html = "<input type=\"{{to.type || 'text'}}\" ng-model=\"model[options.key]\">";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 191 */
/***/ function(module, exports) {

	var path = 'dist/formly/types/horizontal-rating.jade';
	var html = "<label ng-bind=\"to.label\" class=\"col-xs-8 control-label\"></label><div class=\"col-xs-4\"><rating ng-model=\"model[options.key]\"></rating></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validator = exports.model = exports.interceptor = undefined;
	
	var _userInterceptor = __webpack_require__(193);
	
	var _userInterceptor2 = _interopRequireDefault(_userInterceptor);
	
	var _userModel = __webpack_require__(194);
	
	var _userModel2 = _interopRequireDefault(_userModel);
	
	var _userCheckValidator = __webpack_require__(198);
	
	var _userCheckValidator2 = _interopRequireDefault(_userCheckValidator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.interceptor = _userInterceptor2.default;
	exports.model = _userModel2.default;
	exports.validator = _userCheckValidator2.default;

/***/ },
/* 193 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = userInterceptor;
	/*@ngInject*/function userInterceptor($localStorage) {
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

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(17);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _login = __webpack_require__(195);
	
	var _login2 = _interopRequireDefault(_login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var user = /*@ngInject*/(function () {
	  function user(Restangular, $localStorage, $window, $q, $uibModal) {
	    _classCallCheck(this, user);
	
	    this.Users = Restangular.all('users');
	    this.Token = Restangular.one('tokens', 'new');
	    this.$storage = $localStorage;
	    this.$q = $q;
	    this.$window = $window;
	    this.$uibModal = $uibModal;
	    this.data = null;
	    this.init();
	  }
	  user.$inject = ["Restangular", "$localStorage", "$window", "$q", "$uibModal"];
	
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
	    key: 'authenticated',
	    get: function get() {
	      return this.$storage._id && this.$storage.token ? true : false;
	    },
	    set: function set(data) {
	      this.$storage.token = data.token;
	      this.$storage._id = data._id;
	      this.$storage.role = data.role;
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
	})();
	
	exports.default = user;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _login = __webpack_require__(196);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _loginController = __webpack_require__(197);
	
	var _loginController2 = _interopRequireDefault(_loginController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  templateUrl: _login2.default,
	  controller: _loginController2.default,
	  controllerAs: 'login'
	};

/***/ },
/* 196 */
/***/ function(module, exports) {

	var path = 'dist/user/login/login.jade';
	var html = "<div class=\"modal-header\"><h3>Anmelden</h3></div><div class=\"modal-body\"><form role=\"form\" novalidate name=\"login.loginForm\" class=\"form-horizontal\"><formly-form model=\"login.data\" fields=\"login.loginFields\" form=\"login.loginForm\"></formly-form></form></div><div class=\"modal-footer\"><input type=\"button\" value=\"abbrechen\" data-ng-click=\"login.cancel()\" class=\"btn btn-default\"><input type=\"button\" ng-click=\"login.login()\" ng-class=\"{'btn-primary': login.loginForm.$valid, 'btn-danger': login.loginForm.$invalid}\" value=\"anmelden\" ng-disabled=\"login.loginForm.$invalid\" class=\"btn\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 197 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LoginController = /*@ngInject*/(function () {
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
	})();
	
	exports.default = LoginController;

/***/ },
/* 198 */
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
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _fsk2 = __webpack_require__(200);
	
	var _fsk3 = _interopRequireDefault(_fsk2);
	
	var _akzeptanz2 = __webpack_require__(203);
	
	var _akzeptanz3 = _interopRequireDefault(_akzeptanz2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var modals = /*@ngInject*/(function () {
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
	})();
	
	exports.default = modals;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _fsk = __webpack_require__(201);
	
	var _fsk2 = _interopRequireDefault(_fsk);
	
	var _fskController = __webpack_require__(202);
	
	var _fskController2 = _interopRequireDefault(_fskController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  templateUrl: _fsk2.default,
	  controller: _fskController2.default,
	  controllerAs: 'fsk',
	  size: 'lg'
	};

/***/ },
/* 201 */
/***/ function(module, exports) {

	var path = 'dist/modals/fsk/fsk.jade';
	var html = "<div class=\"modal-header\"><h3>Selbsteinschätzung deiner Statistikkenntnisse</h3></div><div class=\"modal-body\"><form name=\"sesskoForm\" novalidate data-ng-if=\"fsk.user.data.fsk.length===0\"><div class=\"form-group\"><p><strong>Ich bin für Statistik …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[0]\"> nicht begabt</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='2' data-ng-model=\"fsk.sessko[0]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='3' data-ng-model=\"fsk.sessko[0]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='4' data-ng-model=\"fsk.sessko[0]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='5' data-ng-model=\"fsk.sessko[0]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[0]\"> sehr begabt</label></div><div class=\"form-group\"><p><strong>Neues zu lernen in Statistik, fällt mir …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[1]\"> schwer</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='2' data-ng-model=\"fsk.sessko[1]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='3' data-ng-model=\"fsk.sessko[1]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='4' data-ng-model=\"fsk.sessko[1]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='5' data-ng-model=\"fsk.sessko[1]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[1]\"> leicht</label></div><div class=\"form-group\"><p><strong>Ich bin in Statistik …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[2]\"> nicht intelligent</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='2' data-ng-model=\"fsk.sessko[2]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='3' data-ng-model=\"fsk.sessko[2]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='4' data-ng-model=\"fsk.sessko[2]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='5' data-ng-model=\"fsk.sessko[2]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[2]\"> sehr inntelligent</label></div><div class=\"form-group\"><p><strong>Meine statistikbezogenen Fähigkeiten sind …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[3]\"> niedrig</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='2' data-ng-model=\"fsk.sessko[3]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='3' data-ng-model=\"fsk.sessko[3]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='4' data-ng-model=\"fsk.sessko[3]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='5' data-ng-model=\"fsk.sessko[3]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[3]\"> hoch</label></div><div class=\"form-group\"><p><strong>Statistische Aufgaben fallen mir …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[4]\"> schwer</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='2' data-ng-model=\"fsk.sessko[4]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='3' data-ng-model=\"fsk.sessko[4]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='4' data-ng-model=\"fsk.sessko[4]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='5' data-ng-model=\"fsk.sessko[4]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[4]\"> leicht</label></div></form><form novalidate name=\"sesskoForm2\" data-ng-if=\"fsk.user.data.fsk.length&gt;0\"><div class=\"form-group\"><p><strong>Nach der Bearbeitung des WBTs halte ich meine Begabung für Statistik jetzt für …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[0]\"> geringer als zuvor</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='2' data-ng-model=\"fsk.sessko[0]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='3' data-ng-model=\"fsk.sessko[0]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='4' data-ng-model=\"fsk.sessko[0]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value='5' data-ng-model=\"fsk.sessko[0]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko1\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[0]\"> höher als zuvor</label></div><div class=\"form-group\"><p><strong>Nach der Bearbeitung des WBTs fällt mir das Lernen von neuen statistischen Inhalten jetzt …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[1]\"> schwerer als zuvor</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='2' data-ng-model=\"fsk.sessko[1]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='3' data-ng-model=\"fsk.sessko[1]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='4' data-ng-model=\"fsk.sessko[1]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value='5' data-ng-model=\"fsk.sessko[1]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko2\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[1]\"> leichter als zuvor</label></div><div class=\"form-group\"><p><strong>Nach der Bearbeitung des WBTs komme ich mit den Anforderungen in Statistik …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[2]\"> schlechter zurecht als zuvor</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='2' data-ng-model=\"fsk.sessko[2]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='3' data-ng-model=\"fsk.sessko[2]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='4' data-ng-model=\"fsk.sessko[2]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value='5' data-ng-model=\"fsk.sessko[2]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko3\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[2]\"> besser zurecht als zuvor</label></div><div class=\"form-group\"><p><strong>Nach der Bearbeitung des WBTs bin ich jetzt …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[3]\"> schlechter in Statistik als zuvor</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='2' data-ng-model=\"fsk.sessko[3]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='3' data-ng-model=\"fsk.sessko[3]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='4' data-ng-model=\"fsk.sessko[3]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value='5' data-ng-model=\"fsk.sessko[3]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko4\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[3]\"> besser in Statistik als zuvor</label></div><div class=\"form-group\"><p><strong>Nach der Bearbeitung des WBTs fallen mir jetzt die Aufgaben in Statistik …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[4]\"> schwerer als zuvor</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='2' data-ng-model=\"fsk.sessko[4]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='3' data-ng-model=\"fsk.sessko[4]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='4' data-ng-model=\"fsk.sessko[4]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value='5' data-ng-model=\"fsk.sessko[4]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko5\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[4]\"> leichter als zuvor</label></div><div class=\"form-group\"><p><strong>Nach der Bearbeitung des WBTs halte ich meine statistikbezogenen Fähigkeiten für …</strong></p><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko6\" data-ng-value=\"1\" data-ng-model=\"fsk.sessko[5]\"> niedriger als zuvor</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko6\" data-ng-value='2' data-ng-model=\"fsk.sessko[5]\"> 2</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko6\" data-ng-value='3' data-ng-model=\"fsk.sessko[5]\"> 3</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko6\" data-ng-value='4' data-ng-model=\"fsk.sessko[5]\"> 4</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko6\" data-ng-value='5' data-ng-model=\"fsk.sessko[5]\"> 5</label><label class=\"radio-inline\"><input type=\"radio\" name=\"sessko6\" data-ng-value=\"6\" data-ng-model=\"fsk.sessko[5]\"> höher als zuvor</label></div></form></div><div class=\"modal-footer\"><input type=\"button\" data-ng-click=\"fsk.cancel()\" value=\"Abbrechen\" class=\"btn btn-default\"><input type=\"button\" data-ng-click=\"fsk.ok()\" value=\"Abschicken\" class=\"btn btn-primary\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 202 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	
	exports.default = FskCtrl;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _akzeptanz = __webpack_require__(204);
	
	var _akzeptanz2 = _interopRequireDefault(_akzeptanz);
	
	var _akzeptanzController = __webpack_require__(205);
	
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
/* 204 */
/***/ function(module, exports) {

	var path = 'dist/modals/akzeptanz/akzeptanz.jade';
	var html = "<div class=\"modal-header\"><h3 class=\"modal-title\">Kapitel bewerten</h3></div><div class=\"modal-body\"><p>Stufe die folgenden drei Aussagen mittels der Sternchen ein (1 Stern: trifft nicht auf mich zu, 5 Sterne: trifft voll auf mich zu). Du kannst deine Wertungen beliebig oft ändern.</p><formly-form model=\"akzeptanz.summary\" fields=\"akzeptanz.fields\" form=\"akzeptanz.form\" class=\"form-horizontal\"></formly-form></div><div class=\"modal-footer\"><button type=\"button\" ng-click=\"akzeptanz.cancel()\" class=\"btn btn-default\">Abbrechen</button><button type=\"button\" ng-click=\"akzeptanz.ok()\" class=\"btn btn-primary\">Kommentar abschicken</button></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 205 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
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
	
	var akzeptanzCtrl = /*@ngInject*/(function () {
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
	
	exports.default = akzeptanzCtrl;

/***/ }
]);
//# sourceMappingURL=app.js.map