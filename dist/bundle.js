(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Cookies = undefined;

	var _stringify = __webpack_require__(1);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Cookies = exports.Cookies = {
		insert: function insert(name, value, hours, path, domain, secure) {
			var len = arguments.length;
			var data = name + "=" + value;

			if (hours) {
				var d = new Date();
				d.setHours(d.getHours() + hours);
				data += "; expires=" + d.toGMTString();
			}
			data += path ? "; path=" + path : "";
			data += domain ? "; domain=" + domain : "";
			data += secure ? "; secure=" + secure : "";

			document.cookie = data;
		},
		query: function query(name) {
			var len = arguments.length;
			if (len == 0) {
				var cs = document.cookie,
				    arr = [],
				    arr2 = [],
				    obj = {};
				arr = cs.split(';');
				// console.log(arr);
				for (var i = 0; i < arr.length; i++) {
					var a = arr[i].split('=');
					var a1 = [a[0].trim(), a[1]];
					arr2.push(a1);
				}
				return (0, _stringify2.default)(arr2);
			} else if (len == 1) {
				var reg = eval("/(?:^|;\\s*)" + name + "=([^=]+)(?:;|$)/");
				return reg.test(document.cookie) ? RegExp.$1 : "";
			}
		},
		remove: function remove(name, path, domain) {
			if (arguments.length == 0) {
				var all = query();
				for (var i = 0; i < all.length; i++) {
					insert(all[i][0], "", -1);
				}
			}

			insert(name, "", -1, path, domain);
		}
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(3)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }
/******/ ])
});
;