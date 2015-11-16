(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bixDefaults"] = factory();
	else
		root["bixDefaults"] = factory();
})(this, function() {
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _interopRequireDefault = __webpack_require__(2)["default"];
	
	exports.__esModule = true;
	
	var _base = __webpack_require__(3);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _buttons = __webpack_require__(5);
	
	var _buttons2 = _interopRequireDefault(_buttons);
	
	var _forms = __webpack_require__(11);
	
	var _forms2 = _interopRequireDefault(_forms);
	
	var _grid = __webpack_require__(25);
	
	var _grid2 = _interopRequireDefault(_grid);
	
	var _headings = __webpack_require__(26);
	
	var _headings2 = _interopRequireDefault(_headings);
	
	var _images = __webpack_require__(27);
	
	var _images2 = _interopRequireDefault(_images);
	
	var _utils = __webpack_require__(12);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var bixDefaults = _utils2["default"].merge(_base2["default"], _buttons2["default"], _forms2["default"], _grid2["default"], _headings2["default"], _images2["default"]);
	
	exports["default"] = bixDefaults;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _interopRequireDefault = __webpack_require__(2)["default"];
	
	exports.__esModule = true;
	
	var _variables = __webpack_require__(4);
	
	var _variables2 = _interopRequireDefault(_variables);
	
	exports["default"] = {
	    a: {
	        color: "blue",
	        cursor: "pointer",
	        textDecoration: "underline"
	    },
	    hr: {
	        borderColor: "#eee",
	        borderStyle: "solid none",
	        borderWidth: "1px 0",
	        marginBottom: 10,
	        marginTop: 10
	    },
	    p: {
	        margin: "1em 0"
	    },
	    wrapAll: {
	        backgroundColor: _variables2["default"].backgroundColor,
	        color: _variables2["default"].fontColor,
	        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	        fontSize: _variables2["default"].fontSize,
	        fontWeight: _variables2["default"].fontWeight,
	        height: "auto",
	        minHeight: "100vh"
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	    black: "#111",
	    backgroundColor: "#fff",
	    borderRadius: 3,
	    borderColor: "#ccc",
	    colorDanger: "#d9534f",
	    colorInfo: "#5bc0de",
	    colorPrimary: "#337ab7",
	    colorSuccess: "#5cb85c",
	    colorWarning: "#f0ad4e",
	    fontColor: "#444",
	    fontSize: 13,
	    fontWeight: 400,
	    gutter: 30,
	    headingFontWeight: 400,
	    headingMargin: "1em 0 0.5em",
	    transitionEase: "ease-in-out",
	    transitionTiming: "150ms",
	    white: "#fff"
	};
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _interopRequireDefault = __webpack_require__(2)["default"];
	
	exports.__esModule = true;
	
	var _reactPrefixer = __webpack_require__(6);
	
	var _reactPrefixer2 = _interopRequireDefault(_reactPrefixer);
	
	var _variables = __webpack_require__(4);
	
	var _variables2 = _interopRequireDefault(_variables);
	
	var buttons = {
	    button: _reactPrefixer2["default"]({
	        border: "1px solid " + _variables2["default"].borderColor,
	        backgroundColor: _variables2["default"].backgroundColor,
	        borderRadius: _variables2["default"].borderRadius,
	        color: _variables2["default"].fontColor,
	        cursor: "pointer",
	        display: "inline-block",
	        fontFamily: "inherit",
	        fontSize: 12,
	        lineHeight: "normal",
	        outline: 0,
	        padding: "0.5em 1em",
	        textAlign: "center",
	        textDecoration: "none",
	        textTransform: "uppercase",
	        transition: "background-color " + _variables2["default"].transitionTiming + " " + _variables2["default"].transitionEase + ", color " + _variables2["default"].transitionTiming + " " + _variables2["default"].transitionEase,
	        userSelect: "none",
	        verticalAlign: "middle",
	        whiteSpace: "nowrap",
	        ":active": {
	            backgroundColor: "#d5d5d5"
	        },
	        ":focus": {
	            backgroundColor: "#d5d5d5"
	        },
	        ":hover": {
	            backgroundColor: "#d5d5d5"
	        }
	    }),
	    buttonDisabled: _reactPrefixer2["default"]({
	        border: 0,
	        cursor: "not-allowed",
	        opacity: 0.4
	    })
	};
	
	exports["default"] = buttons;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _prefix = __webpack_require__(7);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	var _properties = __webpack_require__(8);
	
	var _properties2 = _interopRequireDefault(_properties);
	
	var _animatableValues = __webpack_require__(9);
	
	var _animatableValues2 = _interopRequireDefault(_animatableValues);
	
	var _CssSupportsPolyfill = __webpack_require__(10);
	
	var _CssSupportsPolyfill2 = _interopRequireDefault(_CssSupportsPolyfill);
	
	function camelToKebab(str) {
	    return str.replace(/\W+/g, "-").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
	}
	
	function applyPrefixes(obj) {
	    if (typeof obj === "object" && !!obj) {
	        Object.keys(obj).forEach(function (key) {
	            var realKey = key;
	
	            if (typeof obj[key] === "object" && !!obj[key]) {
	                obj[key] = applyPrefixes(obj[key]);
	            } else if (_properties2["default"].indexOf(key) !== -1 && !(0, _CssSupportsPolyfill2["default"])(camelToKebab(key))) {
	                var value = obj[key];
	
	                realKey = _prefix2["default"].js + key.charAt(0).toUpperCase() + key.slice(1);
	
	                delete obj[key];
	                obj[realKey] = value;
	            }
	
	            if (realKey === "display" && obj[realKey] === "flex" && !(0, _CssSupportsPolyfill2["default"])("display", "flex")) {
	                obj[realKey] = _prefix2["default"] === "ms" ? "-ms-flexbox" : _prefix2["default"].css + "flex";
	            }
	
	            if (key === "transition") {
	                _animatableValues2["default"].forEach(function (animatableValue) {
	                    var kebabValue = camelToKebab(animatableValue);
	
	                    if (!(0, _CssSupportsPolyfill2["default"])(kebabValue)) {
	                        var re = new RegExp(kebabValue, "g");
	
	                        obj[realKey] = obj[realKey].replace(re, _prefix2["default"].css + kebabValue);
	                    }
	                });
	            }
	        });
	    }
	
	    return obj;
	}
	
	exports["default"] = applyPrefixes;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var styles = window.getComputedStyle(document.documentElement, ""),
	    prefix = Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/)[1] || styles.OLink === "" && ["", "o"],
	    ret = {
	    css: "-" + prefix + "-",
	    js: prefix
	};
	
	if (ret.js !== "ms") {
	    ret.js = ret.js.charAt(0).toUpperCase() + ret.js.slice(1);
	}
	
	exports["default"] = ret;
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = ["alignContent", "alignItems", "alignSelf", "animation", "animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction", "appearance", "aspectRatio", "backfaceVisibility", "backgroundClip", "borderImage", "borderImageSlice", "boxShadow", "columnCount", "columnFill", "columnGap", "columnRule", "columnRuleColor", "columnRuleStyle", "columnRuleWidth", "columnSpan", "columnWidth", "columns", "flex", "flexBasis", "flexDirection", "flexFlow", "flexGrow", "flexShrink", "flexWrap", "fontFeatureSettings", "fontKearning", "fontVariantLigatures", "justifyContent", "grid", "gridArea", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "gridTemplate", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows", "hyphens", "lineBreak", "perspective", "perspectiveOrigin", "perspectiveOriginX", "perspectiveOriginY", "rubyPosition", "scrollSnapCoordinate", "scrollSnapDestination", "scrollSnapPoints", "scrollSnapPointsX", "scrollSnapPointsY", "scrollSnapType", "tabSize", "textDecoration", "textDecorationColor", "textDecorationLine", "textDecorationStyle", "textOrientation", "textSizeAdjust", "transform", "transition", "transformOrigin", "transformOriginX", "transformOriginY", "transformOriginZ", "transformStyle", "transitionProperty", "transitionDuration", "transitionTimingFunction", "transitionDelay", "userModify", "userSelect"];
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = ["columnCount", "columnGap", "columnRule", "columnRuleColor", "columnRuleWidth", "columns", "flex", "flexBasis", "flexGrow", "flexShrink", "order", "perspective", "perspectiveOrigin", "perspectiveOriginX", "perspectiveOriginY", "scrollSnapCoordinate", "scrollSnapDirection", "textDecoration", "textDecorationColor", "transform", "transformOrigin", "transformOriginX", "transformOriginY", "transformOriginZ", "transformStyle"];
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var el = document.createElement("div"),
	    camelRe = /-([a-z]|[0-9])/ig,
	    support,
	    camel;
	
	exports["default"] = function (prop, value) {
	    // If no value is supplied, use "inherit"
	    value = arguments.length === 2 ? value : "inherit";
	
	    // Try the native standard method first
	    if ("CSS" in window && "supports" in window.CSS) {
	        return window.CSS.supports(prop, value);
	    }
	
	    // Check Opera's native method
	    if ("supportsCSS" in window) {
	        return window.supportsCSS(prop, value);
	    }
	
	    // Convert to camel-case for DOM interactions
	    camel = prop.replace(camelRe, function (all, letter) {
	        return (letter + "").toUpperCase();
	    });
	
	    // Check if the property is supported
	    support = camel in el.style;
	
	    // Assign the property and value to invoke
	    // the CSS interpreter
	    el.style.cssText = prop + ":" + value;
	
	    // Ensure both the property and value are
	    // supported and return
	    return support && el.style[camel] !== "";
	};
	
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _interopRequireDefault = __webpack_require__(2)["default"];
	
	exports.__esModule = true;
	
	var _reactPrefixer = __webpack_require__(6);
	
	var _reactPrefixer2 = _interopRequireDefault(_reactPrefixer);
	
	var _variables = __webpack_require__(4);
	
	var _variables2 = _interopRequireDefault(_variables);
	
	var _utils = __webpack_require__(12);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var forms = {
	    fieldset: {
	        border: 0,
	        margin: 0,
	        padding: "0.75em 0"
	
	    },
	    form: {
	        display: "block"
	    },
	    formLabel: {
	        display: "block",
	        margin: "0.5em 0 0.2em"
	    },
	    input: _reactPrefixer2["default"]({
	        backgroundColor: _variables2["default"].backgroundColor,
	        border: "1px solid " + _variables2["default"].borderColor,
	        borderRadius: _variables2["default"].borderRadius,
	        boxShadow: "inset 0 1px 3px #ddd",
	        color: _variables2["default"].fontColor,
	        display: "block",
	        lineHeight: "normal",
	        outline: 0,
	        padding: "0.5em 0.6em",
	        margin: "0.25em 0",
	        width: "100%"
	    }),
	    legend: {
	        borderColor: "#e5e5e5",
	        borderStyle: "solid",
	        borderBottomWidth: 1,
	        color: _variables2["default"].fontColor,
	        display: "block",
	        marginBottom: "0.3em",
	        padding: "0.3em 0"
	    },
	    readOnly: {
	        backgroundColor: _variables2["default"].borderColor,
	        color: "#aaa"
	    }
	};
	
	forms.inputColor = _utils2["default"].merge(forms.input, {
	    padding: "0.2em 0.5em"
	});
	
	forms.select = _utils2["default"].merge(forms.input, {
	    height: "2.25em"
	});
	
	forms.selectMultiple = _utils2["default"].merge(forms.input, {
	    height: "auto"
	});
	
	forms.textarea = forms.input;
	
	exports["default"] = forms;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _Object$keys = __webpack_require__(13)["default"];
	
	exports.__esModule = true;
	var toString = Object.prototype.toString;
	
	exports["default"] = {
	    ceil: function ceil(value) {
	        return Math.ceil(value);
	    },
	
	    forEach: function forEach(arr, cb) {
	        if (!this.isArray(arr) && !this.isArguments(arr)) {
	            console.error("Error: first parameter needs to be an array.");
	            return;
	        }
	
	        if (this.isArguments(arr)) {
	            arr = Array.prototype.slice.call(arr);
	        }
	
	        var i = 0,
	            len = arr.length;
	
	        for (; i < len; i++) {
	            if (cb(arr[i], i, arr) === false) {
	                break;
	            }
	        }
	    },
	
	    forIn: function forIn(obj, cb) {
	        if (this.isUndefined(obj)) {
	            obj = {};
	        }
	
	        if (!this.isObject(obj) || this.isFunction(obj)) {
	            console.error("Error: first parameter needs to be an object.");
	            return;
	        }
	
	        this.forEach(_Object$keys(obj), function (key) {
	            return cb(obj[key], key, obj);
	        });
	    },
	
	    isArguments: function isArguments(obj) {
	        return !this.isNull(obj) && (toString.call(obj) === "[object Arguments]" || this.isObject(obj) && "callee" in obj);
	    },
	
	    isArray: function isArray(obj) {
	        return toString.call(obj) === "[object Array]";
	    },
	
	    isDate: function isDate(obj) {
	        return toString.call(obj) === "[object Date]";
	    },
	
	    isFinite: function isFinite(obj) {
	        return obj !== Infinity && obj !== -Infinity && !this.isNaN(obj);
	    },
	
	    isFunction: function isFunction(obj) {
	        return toString.call(obj) === "[object Function]" || typeof obj === "function";
	    },
	
	    isNaN: function isNaN(obj) {
	        return obj !== obj;
	    },
	
	    isNull: function isNull(obj) {
	        return obj === null;
	    },
	
	    isNumber: function isNumber(obj) {
	        obj = obj.toString().replace(/,/g, ".");
	
	        if (/[%]/.test(obj)) {
	            return false;
	        }
	
	        var numObj = parseFloat(obj);
	
	        return !this.isNaN(numObj) && toString.call(obj) === "[object Number]";
	    },
	
	    isObject: function isObject(obj) {
	        var type = typeof obj;
	
	        return type === "function" || type === "object" && !!obj;
	    },
	
	    isString: function isString(obj) {
	        return toString.call(obj) === "[object String]";
	    },
	
	    isUndefined: function isUndefined(obj) {
	        return obj === void 0;
	    },
	
	    kebabCase: function kebabCase(str) {
	        return str.replace(/([A-Z])/g, function ($1) {
	            return "-" + $1.toLowerCase();
	        });
	    },
	
	    merge: function merge(target) {
	        var _this = this;
	
	        var dest;
	
	        for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            sources[_key - 1] = arguments[_key];
	        }
	
	        this.forEach(sources, function (source) {
	            if (_this.isArray(source)) {
	                if (!_this.isArray(target)) {
	                    console.error("Error: Trying to merge array with non-array.");
	                    return dest;
	                }
	
	                dest = [].concat(target || []);
	
	                _this.forEach(source, function (item, i) {
	                    if (_this.isUndefined(dest[i])) {
	                        dest[i] = item;
	                    } else if (_this.isObject(item) && !_this.isFunction(item)) {
	                        dest[i] = _this.merge(target[i], item);
	                    } else {
	                        if (target.indexOf(item) === -1) {
	                            dest[i] = item;
	                        }
	                    }
	                });
	            } else {
	                dest = {};
	
	                if (target && _this.isObject(target) && !_this.isFunction(target)) {
	                    _this.forIn(target, function (value, key) {
	                        dest[key] = value;
	                    });
	                }
	
	                _this.forIn(source, function (value, key) {
	                    dest[key] = _this.isUndefined(target) || _this.isUndefined(target[key]) || !_this.isObject(value) && !_this.isUndefined(value) ? value : _this.merge(target[key], value || {});
	                });
	            }
	        });
	
	        return dest;
	    },
	
	    parseInt: (function (_parseInt) {
	        function parseInt(_x, _x2) {
	            return _parseInt.apply(this, arguments);
	        }
	
	        parseInt.toString = function () {
	            return _parseInt.toString();
	        };
	
	        return parseInt;
	    })(function (value, radix) {
	        return parseInt(value, radix || 10);
	    }),
	
	    unique: function unique(arr) {
	        var seen = {},
	            out = [],
	            j = 0;
	
	        this.forEach(arr, function (item) {
	            if (seen[item] !== 1) {
	                seen[item] = 1;
	                out[j++] = item;
	            }
	        });
	
	        return out;
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(15);
	module.exports = __webpack_require__(21).Object.keys;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(16);
	
	__webpack_require__(18)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(17);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(19)
	  , core    = __webpack_require__(21)
	  , fails   = __webpack_require__(24);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , core      = __webpack_require__(21)
	  , ctx       = __webpack_require__(22)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 20 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 21 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(23);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _interopRequireDefault = __webpack_require__(2)["default"];
	
	exports.__esModule = true;
	
	var _reactPrefixer = __webpack_require__(6);
	
	var _reactPrefixer2 = _interopRequireDefault(_reactPrefixer);
	
	var _utils = __webpack_require__(12);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var grid = {
	    column: function column(width) {
	        var numDenom;
	
	        if (/((\d*)\/(\d*))/.test(width)) {
	            numDenom = width.split("/");
	            width = 100 * (parseInt(numDenom[0]) / parseInt(numDenom[1])) + "%";
	        }
	
	        return {
	            display: "inline-block",
	            minHeight: 1,
	            width: width || "100%",
	            verticalAlign: "top"
	        };
	    },
	    columnFlex: _reactPrefixer2["default"]({
	        flexGrow: 1,
	        flexShrink: 1
	    }),
	    columnFlexFixed: _reactPrefixer2["default"]({
	        flexGrow: 0,
	        flexShrink: 0
	    }),
	    columnFlexGrow: _reactPrefixer2["default"]({
	        flexGrow: 1,
	        flexShrink: 0
	    }),
	    columnFlexShrink: _reactPrefixer2["default"]({
	        flexGrow: 0,
	        flexShrink: 1
	    }),
	    container: {
	        display: "block",
	        marginLeft: "auto",
	        marginRight: "auto"
	    },
	    containerFlex: _reactPrefixer2["default"]({
	        alignContent: "stretch",
	        alignItems: "stretch",
	        display: "flex",
	        flexDirection: "row",
	        width: "100%"
	    })
	};
	
	grid.container = function (width) {
	    return _utils2["default"].merge(grid.containerFixed, {
	        width: width || "100%"
	    });
	};
	
	grid.containerFull = _utils2["default"].merge(grid.containerFixed, {
	    width: "100%"
	});
	
	grid.rowFlex = _utils2["default"].merge(grid.containerFlex, _reactPrefixer2["default"]({
	    flexWrap: "nowrap"
	}));
	
	grid.column_1_12 = grid.column("1/12");
	grid.column_1_10 = grid.column("1/10");
	grid.column_1_8 = grid.column("1/8");
	grid.column_1_6 = grid.column_2_12 = grid.column("1/6");
	grid.column_1_5 = grid.column_2_10 = grid.column("1/5");
	grid.column_1_4 = grid.column_2_8 = grid.column_3_12 = grid.column("1/4");
	grid.column_3_10 = grid.column("3/10");
	grid.column_1_3 = grid.column_2_6 = grid.column_4_12 = grid.column("4/12");
	grid.column_3_8 = grid.column("3/8");
	grid.column_5_12 = grid.column("5/12");
	grid.column_2_5 = grid.column_4_10 = grid.column("2/5");
	grid.column_1_2 = grid.column_2_4 = grid.column_3_6 = grid.column_4_8 = grid.column_5_10 = grid.column_6_12 = grid.column("6/12");
	grid.column_7_12 = grid.column("7/12");
	grid.column_5_8 = grid.column("5/8");
	grid.column_3_5 = grid.column_6_10 = grid.column("3/5");
	grid.column_2_3 = grid.column_4_6 = grid.column_8_12 = grid.column("2/3");
	grid.column_7_10 = grid.column("7/10");
	grid.column_3_4 = grid.column_6_8 = grid.column_9_12 = grid.column("3/4");
	grid.column_4_5 = grid.column_8_10 = grid.column("4/5");
	grid.column_5_6 = grid.column_10_12 = grid.column("5/6");
	grid.column_7_8 = grid.column("7/8");
	grid.column_9_10 = grid.column("9/10");
	grid.column_11_12 = grid.column("11/12");
	grid.columnFull = grid.column("100%");
	
	exports["default"] = grid;
	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _interopRequireDefault = __webpack_require__(2)["default"];
	
	exports.__esModule = true;
	
	var _variables = __webpack_require__(4);
	
	var _variables2 = _interopRequireDefault(_variables);
	
	var _utils = __webpack_require__(12);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var headings = {
	    h6: {
	        display: "block",
	        fontSize: _variables2["default"].fontSize,
	        fontWeight: _variables2["default"].headingFontWeight,
	        margin: _variables2["default"].headingMargin
	    }
	};
	
	headings.h5 = _utils2["default"].merge(headings.h6, {
	    fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.25)
	});
	
	headings.h4 = _utils2["default"].merge(headings.h6, {
	    fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.5)
	});
	
	headings.h3 = _utils2["default"].merge(headings.h6, {
	    fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.8)
	});
	
	headings.h2 = _utils2["default"].merge(headings.h6, {
	    fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2.35)
	});
	
	headings.h1 = _utils2["default"].merge(headings.h6, {
	    fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2.8)
	});
	
	exports["default"] = headings;
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _interopRequireDefault = __webpack_require__(2)["default"];
	
	exports.__esModule = true;
	
	var _reactPrefixer = __webpack_require__(6);
	
	var _reactPrefixer2 = _interopRequireDefault(_reactPrefixer);
	
	var _variables = __webpack_require__(4);
	
	var _variables2 = _interopRequireDefault(_variables);
	
	exports["default"] = {
	    imgCircle: _reactPrefixer2["default"]({
	        borderRadius: "50%"
	    }),
	    imgResponsive: {
	        display: "block",
	        height: "auto",
	        maxWidth: "100%"
	    },
	    imgThumbnail: _reactPrefixer2["default"]({
	        border: "5px solid " + _variables2["default"].white,
	        borderRadius: _variables2["default"].borderRadius
	    })
	};
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=bix-defaults.js.map