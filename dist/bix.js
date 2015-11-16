(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["bix"] = factory(require("react"));
	else
		root["bix"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_30__) {
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
	
	var _Object$defineProperty = __webpack_require__(2)["default"];
	
	var _Object$create = __webpack_require__(5)["default"];
	
	var _interopRequireDefault = __webpack_require__(7)["default"];
	
	exports.__esModule = true;
	
	var _combine = __webpack_require__(8);
	
	var _combine2 = _interopRequireDefault(_combine);
	
	var _extend = __webpack_require__(28);
	
	var _extend2 = _interopRequireDefault(_extend);
	
	var _isReactComponent = __webpack_require__(29);
	
	var _isReactComponent2 = _interopRequireDefault(_isReactComponent);
	
	var _prefix = __webpack_require__(9);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	var _radium = __webpack_require__(31);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _sqwish = __webpack_require__(89);
	
	var _sqwish2 = _interopRequireDefault(_sqwish);
	
	var _unitlessValues = __webpack_require__(90);
	
	var _unitlessValues2 = _interopRequireDefault(_unitlessValues);
	
	var _utils = __webpack_require__(15);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	// functions to set properties in different ways
	var setProperty = {
	    hidden: function hidden(obj, prop, value) {
	        _Object$defineProperty(obj, prop, {
	            configurable: false,
	            enumerable: false,
	            value: value,
	            writable: true
	        });
	    },
	
	    permanent: function permanent(obj, prop, value) {
	        _Object$defineProperty(obj, prop, {
	            configurable: false,
	            enumerable: true,
	            value: value,
	            writable: true
	        });
	    },
	
	    readonly: function readonly(obj, prop, value) {
	        _Object$defineProperty(obj, prop, {
	            configurable: false,
	            enumerable: false,
	            value: value,
	            writable: false
	        });
	    }
	};
	
	var bix = _Object$create({
	    application: function application(app) {
	        setProperty.readonly(this, "$$app", app);
	
	        return this;
	    },
	
	    combine: _combine2["default"],
	
	    extend: _extend2["default"],
	
	    normalize: function normalize() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        if (!args.length || args[0] !== false) {
	            __webpack_require__(91);
	
	            this.stylesheet("bix-defaults", {
	                "*, *:after, *:before": {
	                    boxSizing: "border-box",
	                    position: "relative"
	                }
	            });
	        }
	
	        return this;
	    },
	
	    prefix: _prefix2["default"],
	
	    radium: _radium2["default"],
	
	    render: function render(component) {
	        if (!_utils2["default"].isUndefined(this.$$app)) {
	            this.$$app.forceUpdate();
	        } else if (_isReactComponent2["default"](component)) {
	            component.forceUpdate();
	        } else {
	            _utils2["default"].forIn(this.$$components, function (component) {
	                component.forceUpdate();
	            });
	        }
	    },
	
	    styles: function styles(component) {
	        var _this = this,
	            _arguments = arguments;
	
	        if (_utils2["default"].isUndefined(this.$$app) && this.$$appWarn) {
	            console.warn("Warning: You haven't created a root component, which means each component will be managed independently. This is " + "unavoidable if you are using a different library as your application base, however if you are using React + Flux then providing " + "an application will increase performance of bix and is highly advised. You can do this by running bix.application(this) " + "in the componentWillMount() for your root component.");
	
	            this.$$appWarn = false;
	        }
	
	        if (_utils2["default"].isUndefined(component)) {
	            console.error("Error: no component has been specified.");
	            return this;
	        }
	
	        if (_utils2["default"].isString(component)) {
	            return this.$$components[component] && this.$$components[component].styles;
	        }
	
	        if (_utils2["default"].isObject(component)) {
	            var _len2, _styles, _key2;
	
	            var _ret = (function () {
	                if (_utils2["default"].isUndefined(component._reactInternalInstance)) {
	                    console.error("Error: object passed is not a React constructor.");
	                    return {
	                        v: _this
	                    };
	                }
	
	                var name = component.displayName;
	
	                if (_utils2["default"].isUndefined(name)) {
	                    console.error("Error: you need to specify a displayName property on your React class if you want to assign styles to bix.");
	                    return {
	                        v: _this
	                    };
	                }
	
	                for (_len2 = _arguments.length, _styles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                    _styles[_key2 - 1] = _arguments[_key2];
	                }
	
	                if (!_styles.length) {
	                    return {
	                        v: _this.$$components[name] && _this.$$components[name].styles
	                    };
	                }
	
	                if (_utils2["default"].isUndefined(_this.$$components[name])) {
	                    _this.$$components[name] = {};
	                }
	
	                _this.$$components[name].component = component;
	
	                if (_utils2["default"].isUndefined(_this.$$components[name].styles)) {
	                    _this.$$components[name].styles = {};
	                }
	
	                _utils2["default"].forEach(_styles, function (style) {
	                    _this.$$components[name].styles = _combine2["default"](_this.$$components[name].styles, style);
	                });
	            })();
	
	            if (typeof _ret === "object") return _ret.v;
	        }
	
	        return this;
	    },
	
	    stylesheet: function stylesheet(id) {
	        if (!_utils2["default"].isString(id) && _utils2["default"].isObject(id)) {
	            if (id.displayName) {
	                id = id.displayName;
	            } else {
	                console.error("Error: the object you passed needs to have a displayName property to create a stylesheet.");
	                return this;
	            }
	        } else {
	            if (_utils2["default"].isUndefined(id)) {
	                console.error("Error: generated stylesheets need to be given an id.");
	                return this;
	            } else if (!_utils2["default"].isString(id)) {
	                console.error("Error: first parameter needs to be either a string or a React class.");
	                return this;
	            }
	        }
	
	        var currentStyles = {},
	            styleTag = document.createElement("style"),
	            str = "";
	
	        if (_utils2["default"].isObject(id)) {
	            id = id.displayName;
	
	            if (_utils2["default"].isUndefined(id)) {
	                console.error("Error: first parameter needs to be either a string or a React class.");
	                return this;
	            }
	        }
	
	        if (!_utils2["default"].isUndefined(this.$$stylesheets[id])) {
	            styleTag = document.getElementById(id);
	            currentStyles = this.$$stylesheets[id];
	        }
	
	        styleTag.type = "text/css";
	        styleTag.id = id;
	
	        for (var _len3 = arguments.length, styles = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	            styles[_key3 - 1] = arguments[_key3];
	        }
	
	        _utils2["default"].forEach(styles, function (block) {
	            if (_utils2["default"].isObject(block)) {
	                _utils2["default"].forIn(block, function (style, key) {
	                    str += key + "{";
	
	                    _utils2["default"].forIn(style, function (value, prop) {
	                        if (_utils2["default"].isNumber(value) && _unitlessValues2["default"].indexOf(prop) === -1 && !/px/.test(value)) {
	                            style[prop] = value + "px";
	                        }
	                    });
	
	                    style = _prefix2["default"](style);
	
	                    _utils2["default"].forIn(style, function (value, prop) {
	                        str += _utils2["default"].kebabCase(prop) + ":" + value + ";";
	                    });
	
	                    str += "}";
	                });
	
	                currentStyles = _combine2["default"](currentStyles, block);
	            }
	        });
	
	        this.$$stylesheets[id] = currentStyles;
	        styleTag.textContent = _sqwish2["default"](str);
	
	        document.head.appendChild(styleTag);
	
	        return this;
	    }
	});
	
	setProperty.hidden(bix, "$$app");
	setProperty.hidden(bix, "$$appWarn", true);
	setProperty.readonly(bix, "$$components", {});
	setProperty.readonly(bix, "$$stylesheets", {});
	
	exports["default"] = bix;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _interopRequireDefault = __webpack_require__(7)["default"];
	
	exports.__esModule = true;
	
	var _prefix = __webpack_require__(9);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	var _utils = __webpack_require__(15);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	exports["default"] = function () {
	    var finalStyle = {};
	
	    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
	        styles[_key] = arguments[_key];
	    }
	
	    _utils2["default"].forEach(styles, function (style) {
	        finalStyle = _utils2["default"].merge(finalStyle, _prefix2["default"](style));
	    });
	
	    return finalStyle;
	};
	
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _interopRequireDefault = __webpack_require__(7)["default"];
	
	exports.__esModule = true;
	
	var _reactPrefixer = __webpack_require__(10);
	
	var _reactPrefixer2 = _interopRequireDefault(_reactPrefixer);

	exports["default"] = _reactPrefixer2["default"];
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _prefix = __webpack_require__(11);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	var _properties = __webpack_require__(12);
	
	var _properties2 = _interopRequireDefault(_properties);
	
	var _animatableValues = __webpack_require__(13);
	
	var _animatableValues2 = _interopRequireDefault(_animatableValues);
	
	var _CssSupportsPolyfill = __webpack_require__(14);
	
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
/* 11 */
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
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = ["alignContent", "alignItems", "alignSelf", "animation", "animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction", "appearance", "aspectRatio", "backfaceVisibility", "backgroundClip", "borderImage", "borderImageSlice", "boxShadow", "columnCount", "columnFill", "columnGap", "columnRule", "columnRuleColor", "columnRuleStyle", "columnRuleWidth", "columnSpan", "columnWidth", "columns", "flex", "flexBasis", "flexDirection", "flexFlow", "flexGrow", "flexShrink", "flexWrap", "fontFeatureSettings", "fontKearning", "fontVariantLigatures", "justifyContent", "grid", "gridArea", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "gridTemplate", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows", "hyphens", "lineBreak", "perspective", "perspectiveOrigin", "perspectiveOriginX", "perspectiveOriginY", "rubyPosition", "scrollSnapCoordinate", "scrollSnapDestination", "scrollSnapPoints", "scrollSnapPointsX", "scrollSnapPointsY", "scrollSnapType", "tabSize", "textDecoration", "textDecorationColor", "textDecorationLine", "textDecorationStyle", "textOrientation", "textSizeAdjust", "transform", "transition", "transformOrigin", "transformOriginX", "transformOriginY", "transformOriginZ", "transformStyle", "transitionProperty", "transitionDuration", "transitionTimingFunction", "transitionDelay", "userModify", "userSelect"];
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = ["columnCount", "columnGap", "columnRule", "columnRuleColor", "columnRuleWidth", "columns", "flex", "flexBasis", "flexGrow", "flexShrink", "order", "perspective", "perspectiveOrigin", "perspectiveOriginX", "perspectiveOriginY", "scrollSnapCoordinate", "scrollSnapDirection", "textDecoration", "textDecorationColor", "transform", "transformOrigin", "transformOriginX", "transformOriginY", "transformOriginZ", "transformStyle"];
	module.exports = exports["default"];

/***/ },
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _Object$keys = __webpack_require__(16)["default"];
	
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
	
	        return !this.isNaN(numObj) && toString.call(numObj) === "[object Number]";
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
	
	        var dest = {};
	
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(18);
	module.exports = __webpack_require__(24).Object.keys;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(19);
	
	__webpack_require__(21)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(20);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(22)
	  , core    = __webpack_require__(24)
	  , fails   = __webpack_require__(27);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(23)
	  , core      = __webpack_require__(24)
	  , ctx       = __webpack_require__(25)
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
/* 23 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(26);
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
/* 26 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _interopRequireDefault = __webpack_require__(7)["default"];
	
	exports.__esModule = true;
	
	var _prefix = __webpack_require__(9);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	var _utils = __webpack_require__(15);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	exports["default"] = function () {
	    var _this = this;
	
	    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
	        styles[_key] = arguments[_key];
	    }
	
	    _utils2["default"].forEach(styles, function (style) {
	        _utils2["default"].forIn(style, function (value, prop) {
	            if (!_utils2["default"].isObject(_this[prop])) {
	                _this[prop] = {};
	            }
	
	            _this[prop] = _utils2["default"].isFunction(value) ? style : _utils2["default"].merge(_this[prop], _prefix2["default"](value));
	        });
	    });
	
	    return this;
	};
	
	module.exports = exports["default"];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _interopRequireDefault = __webpack_require__(7)["default"];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(30);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(15);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	exports["default"] = function (obj) {
	  return _utils2["default"].isFunction(obj) && Object.getPrototypeOf(obj) === _react2["default"].Component;
	};
	
	module.exports = exports["default"];

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	var _get = __webpack_require__(32)["default"];
	
	var _inherits = __webpack_require__(39)["default"];
	
	var _createClass = __webpack_require__(46)["default"];
	
	var _classCallCheck = __webpack_require__(47)["default"];
	
	var _objectWithoutProperties = __webpack_require__(48)["default"];
	
	var _extends = __webpack_require__(49)["default"];
	
	var _interopRequireDefault = __webpack_require__(7)["default"];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(30);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(54);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _isReactComponent = __webpack_require__(29);
	
	var _isReactComponent2 = _interopRequireDefault(_isReactComponent);
	
	var _prefix = __webpack_require__(9);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	exports["default"] = function (Element) {
	    if (_isReactComponent2["default"](Element)) {
	        return _radium2["default"](Element);
	    }
	
	    if (_react2["default"].isValidElement(Element)) {
	        Element = Element.type;
	    }
	
	    var RadiumBixElement = (function (_React$Component) {
	        _inherits(RadiumBixElement, _React$Component);
	
	        function RadiumBixElement(props) {
	            _classCallCheck(this, _RadiumBixElement);
	
	            _get(Object.getPrototypeOf(_RadiumBixElement.prototype), "constructor", this).call(this, props);
	            this.displayName = "RadiumBixElement";
	        }
	
	        _createClass(RadiumBixElement, [{
	            key: "render",
	            value: function render() {
	                var _props = this.props;
	                var children = _props.children;
	                var style = _props.style;
	
	                var otherProps = _objectWithoutProperties(_props, ["children", "style"]);
	
	                style = _prefix2["default"](style);
	
	                switch (Element) {
	                    case "area":
	                    case "base":
	                    case "br":
	                    case "col":
	                    case "hr":
	                    case "img":
	                    case "input":
	                    case "keygen":
	                    case "link":
	                    case "menuitem":
	                    case "meta":
	                    case "param":
	                    case "source":
	                    case "track":
	                    case "wbr":
	                        return _react2["default"].createElement(Element, _extends({
	                            style: [style]
	                        }, otherProps));
	                    default:
	                        return _react2["default"].createElement(
	                            Element,
	                            _extends({
	                                style: [style]
	                            }, otherProps),
	                            children
	                        );
	                }
	            }
	        }]);
	
	        var _RadiumBixElement = RadiumBixElement;
	        RadiumBixElement = _radium2["default"](RadiumBixElement) || RadiumBixElement;
	        return RadiumBixElement;
	    })(_react2["default"].Component);
	
	    return Radiumbix;
	};
	
	;
	module.exports = exports["default"];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(33)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(34), __esModule: true };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	__webpack_require__(35);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(36);
	
	__webpack_require__(21)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(37)
	  , defined = __webpack_require__(20);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(5)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(40)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	module.exports = __webpack_require__(24).Object.setPrototypeOf;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(22);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(43).set});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(4).getDesc
	  , isObject = __webpack_require__(44)
	  , anObject = __webpack_require__(45);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(25)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(44);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(2)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(50)["default"];
	
	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	module.exports = __webpack_require__(24).Object.assign;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(22);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(53)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(4)
	  , toObject = __webpack_require__(19)
	  , IObject  = __webpack_require__(37);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(27)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _enhancer = __webpack_require__(55);
	
	var _enhancer2 = _interopRequireDefault(_enhancer);
	
	var _plugins = __webpack_require__(63);
	
	var _plugins2 = _interopRequireDefault(_plugins);
	
	var _componentsPrintStyleSheet = __webpack_require__(84);
	
	var _componentsPrintStyleSheet2 = _interopRequireDefault(_componentsPrintStyleSheet);
	
	var _componentsStyle = __webpack_require__(85);
	
	var _componentsStyle2 = _interopRequireDefault(_componentsStyle);
	
	var _getState = __webpack_require__(58);
	
	var _getState2 = _interopRequireDefault(_getState);
	
	var _keyframes = __webpack_require__(88);
	
	var _keyframes2 = _interopRequireDefault(_keyframes);
	
	var _resolveStyles = __webpack_require__(57);
	
	function Radium(ComposedComponent /*: constructor*/) {
	  return _enhancer2['default'](ComposedComponent);
	}
	
	Radium.Plugins = _plugins2['default'];
	Radium.PrintStyleSheet = _componentsPrintStyleSheet2['default'];
	Radium.Style = _componentsStyle2['default'];
	Radium.getState = _getState2['default'];
	Radium.keyframes = _keyframes2['default'];
	Radium.__clearStateForTests = _resolveStyles.__clearStateForTests;
	
	exports['default'] = Radium;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = enhanceWithRadium;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(30);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _resolveStylesJs = __webpack_require__(57);
	
	var _resolveStylesJs2 = _interopRequireDefault(_resolveStylesJs);
	
	var _printStylesJs = __webpack_require__(83);
	
	var _printStylesJs2 = _interopRequireDefault(_printStylesJs);
	
	var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES = ['arguments', 'callee', 'caller', 'length', 'name', 'prototype', 'type'];
	
	var copyProperties = function copyProperties(source, target) {
	  Object.getOwnPropertyNames(source).forEach(function (key) {
	    if (KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key) < 0 && !target.hasOwnProperty(key)) {
	      var descriptor = Object.getOwnPropertyDescriptor(source, key);
	      Object.defineProperty(target, key, descriptor);
	    }
	  });
	};
	
	function enhanceWithRadium(configOrComposedComponent /*: constructor | Function | Object*/) /*: constructor*/ {
	  var config /*:: ?: Object*/ = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  if (typeof configOrComposedComponent !== 'function') {
	    var _ret = (function () {
	      var newConfig = _extends({}, config, configOrComposedComponent);
	      return {
	        v: function (configOrComponent) {
	          return enhanceWithRadium(configOrComponent, newConfig);
	        }
	      };
	    })();
	
	    if (typeof _ret === 'object') return _ret.v;
	  }
	
	  var component /*: Function*/ = configOrComposedComponent;
	  var ComposedComponent /*: constructor*/ = component;
	
	  // Handle stateless components
	  if (!ComposedComponent.render && !ComposedComponent.prototype.render) {
	    ComposedComponent = (function (_Component) {
	      _inherits(_class, _Component);
	
	      function _class() {
	        _classCallCheck(this, _class);
	
	        _Component.apply(this, arguments);
	      }
	
	      _class.prototype.render = function render() {
	        return component(this.props, this.context);
	      };
	
	      return _class;
	    })(_react.Component);
	    ComposedComponent.displayName = component.displayName || component.name;
	  }
	
	  var RadiumEnhancer = (function (_ComposedComponent) {
	    _inherits(RadiumEnhancer, _ComposedComponent);
	
	    function RadiumEnhancer() {
	      _classCallCheck(this, RadiumEnhancer);
	
	      _ComposedComponent.apply(this, arguments);
	
	      this.state = this.state || {};
	      this.state._radiumStyleState = {};
	      this._radiumIsMounted = true;
	
	      if (RadiumEnhancer.printStyleClass) {
	        this.printStyleClass = RadiumEnhancer.printStyleClass;
	      }
	    }
	
	    // Class inheritance uses Object.create and because of __proto__ issues
	    // with IE <10 any static properties of the superclass aren't inherited and
	    // so need to be manually populated.
	    // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-
	
	    RadiumEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (_ComposedComponent.prototype.componentWillUnmount) {
	        _ComposedComponent.prototype.componentWillUnmount.call(this);
	      }
	
	      this._radiumIsMounted = false;
	
	      if (this._radiumMouseUpListener) {
	        this._radiumMouseUpListener.remove();
	      }
	
	      if (this._radiumMediaQueryListenersByQuery) {
	        Object.keys(this._radiumMediaQueryListenersByQuery).forEach(function (query) {
	          this._radiumMediaQueryListenersByQuery[query].remove();
	        }, this);
	      }
	    };
	
	    RadiumEnhancer.prototype.getChildContext = function getChildContext() {
	      var superChildContext = _ComposedComponent.prototype.getChildContext ? _ComposedComponent.prototype.getChildContext : {};
	
	      if (!this.props.radiumConfig) {
	        return superChildContext;
	      }
	
	      return _extends({}, superChildContext, {
	        radiumConfig: this.props.radiumConfig
	      });
	    };
	
	    RadiumEnhancer.prototype.render = function render() {
	      var renderedElement = _ComposedComponent.prototype.render.call(this);
	      var currentConfig = this.props.radiumConfig || this.context.radiumConfig || config;
	
	      if (config && currentConfig !== config) {
	        currentConfig = _extends({}, config, currentConfig);
	      }
	
	      return _resolveStylesJs2['default'](this, renderedElement, currentConfig);
	    };
	
	    return RadiumEnhancer;
	  })(ComposedComponent);
	
	  copyProperties(component, RadiumEnhancer);
	
	  if (process.env.NODE_ENV !== 'production') {
	    // This also fixes React Hot Loader by exposing the original components top
	    // level prototype methods on the Radium enhanced prototype as discussed in
	    // https://github.com/FormidableLabs/radium/issues/219.
	    copyProperties(ComposedComponent.prototype, RadiumEnhancer.prototype);
	  }
	
	  if (RadiumEnhancer.propTypes && RadiumEnhancer.propTypes.style) {
	    RadiumEnhancer.propTypes = _extends({}, RadiumEnhancer.propTypes, {
	      style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object])
	    });
	  }
	
	  RadiumEnhancer.displayName = component.displayName || component.name || 'Component';
	
	  RadiumEnhancer.printStyleClass = _printStylesJs2['default'].addPrintStyles(RadiumEnhancer);
	
	  RadiumEnhancer.contextTypes = _extends({}, RadiumEnhancer.contextTypes, {
	    radiumConfig: _react2['default'].PropTypes.object
	  });
	
	  RadiumEnhancer.childContextTypes = _extends({}, RadiumEnhancer.childContextTypes, {
	    radiumConfig: _react2['default'].PropTypes.object
	  });
	
	  return RadiumEnhancer;
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ },
/* 56 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _getState2 = __webpack_require__(58);
	
	var _getState3 = _interopRequireDefault(_getState2);
	
	var _getStateKey = __webpack_require__(59);
	
	var _getStateKey2 = _interopRequireDefault(_getStateKey);
	
	var _mergeStyles = __webpack_require__(60);
	
	var _mergeStyles2 = _interopRequireDefault(_mergeStyles);
	
	var _plugins = __webpack_require__(63);
	
	var _plugins2 = _interopRequireDefault(_plugins);
	
	var _exenv = __webpack_require__(82);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var _react = __webpack_require__(30);
	
	var _react2 = _interopRequireDefault(_react);
	
	/*:: import type {Config} from './config';*/
	
	var DEFAULT_CONFIG = {
	  plugins: [_plugins2['default'].mergeStyleArray, _plugins2['default'].checkProps, _plugins2['default'].resolveMediaQueries, _plugins2['default'].resolveInteractionStyles, _plugins2['default'].prefix, _plugins2['default'].checkProps]
	};
	
	// Gross
	var globalState = {};
	
	// Declare early for recursive helpers.
	var resolveStyles = ((null /*: any*/) /*: (
	                                        component: any, // ReactComponent, flow+eslint complaining
	                                        renderedElement: any,
	                                        config: Config,
	                                        existingKeyMap?: {[key: string]: bool}
	                                      ) => any*/);
	
	var _resolveChildren = function _resolveChildren(_ref) {
	  var children = _ref.children;
	  var component = _ref.component;
	  var config = _ref.config;
	  var existingKeyMap = _ref.existingKeyMap;
	
	  if (!children) {
	    return children;
	  }
	
	  var childrenType = typeof children;
	
	  if (childrenType === 'string' || childrenType === 'number') {
	    // Don't do anything with a single primitive child
	    return children;
	  }
	
	  if (childrenType === 'function') {
	    // Wrap the function, resolving styles on the result
	    return function () {
	      var result = children.apply(this, arguments);
	      if (_react2['default'].isValidElement(result)) {
	        return resolveStyles(component, result, config, existingKeyMap);
	      }
	      return result;
	    };
	  }
	
	  if (_react2['default'].Children.count(children) === 1 && children.type) {
	    // If a React Element is an only child, don't wrap it in an array for
	    // React.Children.map() for React.Children.only() compatibility.
	    var onlyChild = _react2['default'].Children.only(children);
	    return resolveStyles(component, onlyChild, config, existingKeyMap);
	  }
	
	  return _react2['default'].Children.map(children, function (child) {
	    if (_react2['default'].isValidElement(child)) {
	      return resolveStyles(component, child, config, existingKeyMap);
	    }
	
	    return child;
	  });
	};
	
	// Recurse over props, just like children
	var _resolveProps = function _resolveProps(_ref2) {
	  var component = _ref2.component;
	  var config = _ref2.config;
	  var existingKeyMap = _ref2.existingKeyMap;
	  var props = _ref2.props;
	
	  var newProps = props;
	
	  Object.keys(props).forEach(function (prop) {
	    // We already recurse over children above
	    if (prop === 'children') {
	      return;
	    }
	
	    var propValue = props[prop];
	    if (_react2['default'].isValidElement(propValue)) {
	      newProps = _extends({}, newProps);
	      newProps[prop] = resolveStyles(component, propValue, config, existingKeyMap);
	    }
	  });
	
	  return newProps;
	};
	
	var _buildGetKey = function _buildGetKey(renderedElement, existingKeyMap) {
	  // We need a unique key to correlate state changes due to user interaction
	  // with the rendered element, so we know to apply the proper interactive
	  // styles.
	  var originalKey = typeof renderedElement.ref === 'string' ? renderedElement.ref : renderedElement.key;
	  var key = _getStateKey2['default'](originalKey);
	
	  var alreadyGotKey = false;
	  var getKey = function getKey() {
	    if (alreadyGotKey) {
	      return key;
	    }
	
	    alreadyGotKey = true;
	
	    if (existingKeyMap[key]) {
	      throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.'));
	    }
	
	    existingKeyMap[key] = true;
	
	    return key;
	  };
	
	  return getKey;
	};
	
	var _setStyleState = function _setStyleState(component, key, stateKey, value) {
	  if (!component._radiumIsMounted) {
	    return;
	  }
	
	  var existing = component._lastRadiumState || component.state && component.state._radiumStyleState || {};
	
	  var state = { _radiumStyleState: _extends({}, existing) };
	  state._radiumStyleState[key] = _extends({}, state._radiumStyleState[key]);
	  state._radiumStyleState[key][stateKey] = value;
	
	  component._lastRadiumState = state._radiumStyleState;
	  component.setState(state);
	};
	
	var _runPlugins = function _runPlugins(_ref3) {
	  var component = _ref3.component;
	  var config = _ref3.config;
	  var existingKeyMap = _ref3.existingKeyMap;
	  var props = _ref3.props;
	  var renderedElement = _ref3.renderedElement;
	
	  // Don't run plugins if renderedElement is not a simple ReactDOMElement or has
	  // no style.
	  if (!_react2['default'].isValidElement(renderedElement) || typeof renderedElement.type !== 'string' || !props.style) {
	    return props;
	  }
	
	  var newProps = props;
	
	  var plugins = config.plugins || DEFAULT_CONFIG.plugins;
	
	  var getKey = _buildGetKey(renderedElement, existingKeyMap);
	
	  var newStyle = props.style;
	  plugins.forEach(function (plugin) {
	    var result = plugin({
	      ExecutionEnvironment: _exenv2['default'],
	      componentName: component.constructor.displayName || component.constructor.name,
	      config: config,
	      getComponentField: function getComponentField(key) {
	        return component[key];
	      },
	      getGlobalState: function getGlobalState(key) {
	        return globalState[key];
	      },
	      getState: function getState(stateKey, elementKey) {
	        return _getState3['default'](component.state, elementKey || getKey(), stateKey);
	      },
	      mergeStyles: _mergeStyles2['default'],
	      props: newProps,
	      setState: function setState(stateKey, value, elementKey) {
	        return _setStyleState(component, elementKey || getKey(), stateKey, value);
	      },
	      style: newStyle
	    }) || {};
	
	    newStyle = result.style || newStyle;
	
	    newProps = result.props && Object.keys(result.props).length ? _extends({}, newProps, result.props) : newProps;
	
	    var newComponentFields = result.componentFields || {};
	    Object.keys(newComponentFields).forEach(function (fieldName) {
	      component[fieldName] = newComponentFields[fieldName];
	    });
	
	    var newGlobalState = result.globalState || {};
	    Object.keys(newGlobalState).forEach(function (key) {
	      globalState[key] = newGlobalState[key];
	    });
	  });
	
	  if (newStyle !== props.style) {
	    newProps = _extends({}, newProps, { style: newStyle });
	  }
	
	  return newProps;
	};
	
	// Wrapper around React.cloneElement. To avoid processing the same element
	// twice, whenever we clone an element add a special prop to make sure we don't
	// process this element again.
	var _cloneElement = function _cloneElement(renderedElement, newProps, newChildren) {
	  // Only add flag if this is a normal DOM element
	  if (typeof renderedElement.type === 'string') {
	    newProps = _extends({}, newProps, { _radiumDidResolveStyles: true });
	  }
	
	  return _react2['default'].cloneElement(renderedElement, newProps, newChildren);
	};
	
	//
	// The nucleus of Radium. resolveStyles is called on the rendered elements
	// before they are returned in render. It iterates over the elements and
	// children, rewriting props to add event handlers required to capture user
	// interactions (e.g. mouse over). It also replaces the style prop because it
	// adds in the various interaction styles (e.g. :hover).
	//
	resolveStyles = function (component /*: any*/, // ReactComponent, flow+eslint complaining
	renderedElement /*: any*/, // ReactElement
	config /*: Config*/, existingKeyMap /*:: ?: {[key: string]: boolean}*/) /*: any*/ {
	  if (config === undefined) config = DEFAULT_CONFIG;
	  // ReactElement
	  existingKeyMap = existingKeyMap || {};
	
	  if (!renderedElement ||
	  // Bail if we've already processed this element. This ensures that only the
	  // owner of an element processes that element, since the owner's render
	  // function will be called first (which will always be the case, since you
	  // can't know what else to render until you render the parent component).
	  renderedElement.props && renderedElement.props._radiumDidResolveStyles) {
	    return renderedElement;
	  }
	
	  var newChildren = _resolveChildren({
	    children: renderedElement.props.children,
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap
	  });
	
	  var newProps = _resolveProps({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: renderedElement.props
	  });
	
	  newProps = _runPlugins({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: newProps,
	    renderedElement: renderedElement
	  });
	
	  // If nothing changed, don't bother cloning the element. Might be a bit
	  // wasteful, as we add the sentinal to stop double-processing when we clone.
	  // Assume benign double-processing is better than unneeded cloning.
	  if (newChildren === renderedElement.props.children && newProps === renderedElement.props) {
	    return renderedElement;
	  }
	
	  return _cloneElement(renderedElement, newProps !== renderedElement.props ? newProps : {}, newChildren);
	};
	
	// Only for use by tests
	resolveStyles.__clearStateForTests = function () {
	  globalState = {};
	};
	
	exports['default'] = resolveStyles;
	module.exports = exports['default'];
	// ReactComponent, flow+eslint complaining

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _getStateKey = __webpack_require__(59);
	
	var _getStateKey2 = _interopRequireDefault(_getStateKey);
	
	var getState = function getState(state /*: {_radiumStyleState: {[key: string]: {[value: string]: boolean}}}*/, elementKey /*: string*/, value /*: string*/) /*: any*/ {
	  var key = _getStateKey2['default'](elementKey);
	
	  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
	};
	
	exports['default'] = getState;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	var getStateKey = function getStateKey(elementKey /*: ?string*/) /*: string*/ {
	  return elementKey === null || elementKey === undefined ? 'main' : elementKey.toString();
	};
	
	exports['default'] = getStateKey;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _isPlainObject = __webpack_require__(61);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var shouldMerge = function shouldMerge(value) {
	  // Don't merge objects overriding toString, since they should be converted
	  // to string values.
	  return _isPlainObject2['default'](value) && value.toString === Object.prototype.toString;
	};
	
	// Merge style objects. Deep merge plain object values.
	var mergeStyles = function mergeStyles(styles) {
	  var result = {};
	
	  styles.forEach(function (style) {
	    if (!style || typeof style !== 'object') {
	      return;
	    }
	
	    if (Array.isArray(style)) {
	      style = mergeStyles(style);
	    }
	
	    Object.keys(style).forEach(function (key) {
	      if (shouldMerge(style[key]) && shouldMerge(result[key])) {
	        result[key] = mergeStyles([result[key], style[key]]);
	      } else {
	        result[key] = style[key];
	      }
	    });
	  });
	
	  return result;
	};
	
	exports['default'] = mergeStyles;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(62);
	
	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}
	
	module.exports = function isPlainObject(o) {
	  var ctor,prot;
	  
	  if (isObjectObject(o) === false) return false;
	  
	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;
	  
	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;
	  
	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }
	  
	  // Most likely a plain Object
	  return true;
	};


/***/ },
/* 62 */
/***/ function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object'
	    && !Array.isArray(val);
	};


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/** @flow */
	/* eslint-disable block-scoped-const */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _checkPropsPlugin = __webpack_require__(64);
	
	var _checkPropsPlugin2 = _interopRequireDefault(_checkPropsPlugin);
	
	var _mergeStyleArrayPlugin = __webpack_require__(65);
	
	var _mergeStyleArrayPlugin2 = _interopRequireDefault(_mergeStyleArrayPlugin);
	
	var _prefixPlugin = __webpack_require__(66);
	
	var _prefixPlugin2 = _interopRequireDefault(_prefixPlugin);
	
	var _resolveInteractionStylesPlugin = __webpack_require__(79);
	
	var _resolveInteractionStylesPlugin2 = _interopRequireDefault(_resolveInteractionStylesPlugin);
	
	var _resolveMediaQueriesPlugin = __webpack_require__(81);
	
	var _resolveMediaQueriesPlugin2 = _interopRequireDefault(_resolveMediaQueriesPlugin);
	
	/*:: import type {Config} from '../config';*/
	/*:: export type PluginConfig = {
	  // May not be readable if code has been minified
	  componentName: string,
	
	  // The Radium configuration
	  config: Config,
	
	  // Retrieve the value of a field on the component
	  getComponentField: (key: string) => any,
	
	  // Retrieve the value of a field global to the Radium module
	  // Used so that tests can easily clear global state.
	  getGlobalState: (key: string) => any,
	
	  // Retrieve the value of some state specific to the rendered element.
	  // Requires the element to have a unique key or ref or for an element key
	  // to be passed in.
	  getState: (stateKey: string, elementKey?: string) => any,
	
	  // Access to the mergeStyles utility
	  mergeStyles: (styles: Array<Object>) => Object,
	
	  // The props of the rendered element. This can be changed by each plugin,
	  // and successive plugins will see the result of previous plugins.
	  props: Object,
	
	  // Calls setState on the component with the given key and value.
	  // By default this is specific to the rendered element, but you can override
	  // by passing in the `elementKey` parameter.
	  setState: (stateKey: string, value: any, elementKey?: string) => void,
	
	  // The style prop of the rendered element. This can be changed by each plugin,
	  // and successive plugins will see the result of previous plugins. Kept
	  // separate from `props` for ease of use.
	  style: Object,
	
	  // uses the exenv npm module
	  ExecutionEnvironment: {
	    canUseEventListeners: bool,
	    canUseDOM: bool,
	  }
	};*/
	/*:: export type PluginResult = ?{
	  // Merged into the component directly. Useful for storing things for which you
	  // don't need to re-render, event subscriptions, for instance.
	  componentFields?: Object,
	
	  // Merged into a Radium controlled global state object. Use this instead of
	  // module level state for ease of clearing state between tests.
	  globalState?: Object,
	
	  // Merged into the rendered element's props.
	  props?: Object,
	
	  // Replaces (not merged into) the rendered element's style property.
	  style?: Object,
	};*/exports['default'] = {
	  checkProps: _checkPropsPlugin2['default'],
	  mergeStyleArray: _mergeStyleArrayPlugin2['default'],
	  prefix: _prefixPlugin2['default'],
	  resolveInteractionStyles: _resolveInteractionStylesPlugin2['default'],
	  resolveMediaQueries: _resolveMediaQueriesPlugin2['default']
	};
	module.exports = exports['default'];
	
	// May not be readable if code has been minified
	
	// The Radium configuration
	
	// Retrieve the value of a field on the component
	
	// Retrieve the value of a field global to the Radium module
	// Used so that tests can easily clear global state.
	
	// Retrieve the value of some state specific to the rendered element.
	// Requires the element to have a unique key or ref or for an element key
	// to be passed in.
	
	// Access to the mergeStyles utility
	
	// The props of the rendered element. This can be changed by each plugin,
	// and successive plugins will see the result of previous plugins.
	
	// Calls setState on the component with the given key and value.
	// By default this is specific to the rendered element, but you can override
	// by passing in the `elementKey` parameter.
	
	// The style prop of the rendered element. This can be changed by each plugin,
	// and successive plugins will see the result of previous plugins. Kept
	// separate from `props` for ease of use.
	
	// uses the exenv npm module
	
	// Merged into the component directly. Useful for storing things for which you
	// don't need to re-render, event subscriptions, for instance.
	
	// Merged into a Radium controlled global state object. Use this instead of
	// module level state for ease of clearing state between tests.
	
	// Merged into the rendered element's props.
	
	// Replaces (not merged into) the rendered element's style property.

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/*:: import type {PluginConfig, PluginResult} from '.';*/
	
	var checkProps = (function () {} /*: any*/);
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    // Warn if you use longhand and shorthand properties in the same style
	    // object.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties
	
	    var shorthandPropertyExpansions = {
	      'background': ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
	      'border': ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
	      'borderImage': ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
	      'borderRadius': ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
	      'font': ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
	      'listStyle': ['listStyleImage', 'listStylePosition', 'listStyleType'],
	      'margin': ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
	      'padding': ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
	      'transition': ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
	    };
	
	    checkProps = function (config /*: PluginConfig*/) /*: PluginResult*/ {
	      var componentName = config.componentName;
	      var style = config.style;
	
	      if (typeof style !== 'object' || !style) {
	        return;
	      }
	
	      var styleKeys = Object.keys(style);
	      styleKeys.forEach(function (styleKey) {
	        if (Array.isArray(shorthandPropertyExpansions[styleKey]) && shorthandPropertyExpansions[styleKey].some(function (sp) {
	          return styleKeys.indexOf(sp) !== -1;
	        })) {
	          if (process.env.NODE_ENV !== 'production') {
	            /* eslint-disable no-console */
	            console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + componentName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
	            /* eslint-enable no-console */
	          }
	        }
	      });
	
	      styleKeys.forEach(function (k) {
	        return checkProps(_extends({}, config, { style: style[k] }));
	      });
	      return;
	    };
	  })();
	}
	
	exports['default'] = checkProps;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ },
/* 65 */
/***/ function(module, exports) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
	// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
	/*:: import type {PluginConfig, PluginResult} from '.';*/var mergeStyleArrayPlugin = function mergeStyleArrayPlugin(_ref /*: PluginConfig*/) /*: PluginResult*/ {
	  var style = _ref.style;
	  var mergeStyles = _ref.mergeStyles;
	
	  var newStyle = Array.isArray(style) ? mergeStyles(style) : style;
	  return { style: newStyle };
	};
	
	exports['default'] = mergeStyleArrayPlugin;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = prefixPlugin;
	
	var _prefixer = __webpack_require__(67);
	
	/*:: import type {PluginConfig, PluginResult} from '.';*/
	function prefixPlugin(_ref /*: PluginConfig*/) /*: PluginResult*/ {
	  var componentName = _ref.componentName;
	  var config = _ref.config;
	  var style = _ref.style;
	
	  var newStyle = _prefixer.getPrefixedStyle(style, componentName, config.userAgent);
	  return { style: newStyle };
	}
	
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Based on https://github.com/jsstyles/css-vendor, but without having to
	 * convert between different cases all the time.
	 *
	 * @flow
	 */
	
	'use strict';
	
	exports.__esModule = true;
	exports.getPrefixedStyle = getPrefixedStyle;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _inlineStylePrefixer = __webpack_require__(68);
	
	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);
	
	function transformValues(style) {
	  return Object.keys(style).reduce(function (newStyle, key) {
	    var value = style[key];
	    if (Array.isArray(value)) {
	      value = value.join(';' + key + ':');
	    }
	    newStyle[key] = value;
	    return newStyle;
	  }, {});
	}
	
	var lastUserAgent = undefined;
	var prefixer = undefined;
	
	// Returns a new style object with vendor prefixes added to property names
	// and values.
	
	function getPrefixedStyle(style /*: Object*/, componentName /*: ?string*/, userAgent /*:: ?: ?string*/) /*: Object*/ {
	  var actualUserAgent = userAgent || global && global.navigator && global.navigator.userAgent;
	
	  if (!actualUserAgent) {
	    throw new Error('Radium: userAgent must be supplied for server-side rendering. See ' + 'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium ' + 'for more information.');
	  }
	
	  if (!prefixer || actualUserAgent !== lastUserAgent) {
	    prefixer = new _inlineStylePrefixer2['default'](actualUserAgent);
	    lastUserAgent = actualUserAgent;
	  }
	
	  var prefixedStyle = prefixer.prefix(style);
	  var prefixedStyleWithFallbacks = transformValues(prefixedStyle);
	  return prefixedStyleWithFallbacks;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _getBrowserInformation = __webpack_require__(69);
	
	var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);
	
	var _caniuseData = __webpack_require__(71);
	
	var _caniuseData2 = _interopRequireDefault(_caniuseData);
	
	var _Plugins = __webpack_require__(72);
	
	var _Plugins2 = _interopRequireDefault(_Plugins);
	
	var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;
	
	var Prefixer = (function () {
	  /**
	   * Instantiante a new prefixer.
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   */
	
	  function Prefixer() {
	    var _this = this;
	
	    var userAgent = arguments.length <= 0 || arguments[0] === undefined ? defaultUserAgent : arguments[0];
	
	    _classCallCheck(this, Prefixer);
	
	    this._userAgent = userAgent;
	    this._browserInfo = (0, _getBrowserInformation2['default'])(userAgent);
	
	    this.cssPrefix = this._browserInfo.prefix.CSS;
	    this.jsPrefix = this._browserInfo.prefix.inline;
	
	    var data = _caniuseData2['default'][this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        result[name] = true;
	        return result;
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      this._hasPropsRequiringPrefix = false;
	
	      // TODO warn only in dev mode
	      console.warn('Your userAgent seems to be not supported by inline-style-prefixer. Feel free to open an issue.');
	    }
	  }
	
	  // helper to capitalize strings
	
	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and valeus
	   */
	
	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;
	
	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }
	
	      styles = assign({}, styles);
	
	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recursively loop through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + caplitalizeString(property)] = value;
	            delete styles[property];
	          }
	
	          // resolve plugins
	          _Plugins2['default'].forEach(function (plugin) {
	            assign(styles, plugin(property, value, _this2._browserInfo, styles));
	          });
	        }
	      });
	
	      return styles;
	    }
	  }]);
	
	  return Prefixer;
	})();
	
	exports['default'] = Prefixer;
	var caplitalizeString = function caplitalizeString(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};
	
	// leight polyfill for Object.assign
	var assign = function assign(base, extend) {
	  extend && Object.keys(extend).forEach(function (key) {
	    return base[key] = extend[key];
	  });
	  return extend;
	};
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _bowser = __webpack_require__(70);
	
	var _bowser2 = _interopRequireDefault(_bowser);
	
	var vendorPrefixes = {
	  'Webkit': ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen'],
	  'Moz': ['firefox', 'seamonkey', 'sailfish'],
	  'ms': ['msie', 'msedge']
	};
	
	var browsers = {
	  'chrome': [['chrome'], ['phantom'], ['webos'], ['blackberry'], ['bada'], ['tizenn']],
	  'safari': [['safari']],
	  'firefox': [['firefox'], ['seamonkey'], ['sailfish']],
	  'ie': [['msie'], ['msedge']],
	  'opera': [['opera']],
	  'ios_saf': [['ios', 'mobile'], ['ios', 'tablet']],
	  'ie_mob': [['windowsphone', 'mobile', 'msie'], ['windowsphone', 'tablet', 'msie'], ['windowsphone', 'mobile', 'msedge'], ['windowsphone', 'tablet', 'msedge']],
	  'op_mini': [['opera', 'mobile'], ['opera', 'tablet']],
	  'and_chr': [['android', 'chrome', 'mobile'], ['android', 'chrome', 'tablet']],
	  'and_uc': [['android', 'mobile'], ['android', 'mobile']],
	  'android': [['android', 'mobile'], ['android', 'mobile']]
	};
	
	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */
	
	exports['default'] = function (userAgent) {
	  var info = _bowser2['default']._detect(userAgent);
	
	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          CSS: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });
	
	  var name = '';
	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });
	
	  info.browser = name;
	  return info;
	};
	
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Bowser - a browser detector
	  * https://github.com/ded/bowser
	  * MIT License | (c) Dustin Diaz 2015
	  */
	
	!function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	}('bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */
	
	  var t = true
	
	  function detect(ua) {
	
	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }
	
	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }
	
	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , chromeBook = /CrOS/.test(ua)
	      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , result
	
	    if (/opera|opr/i.test(ua)) {
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/windows phone/i.test(ua)) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeBook) {
	      result = {
	        name: 'Chrome'
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (/sailfish/i.test(ua)) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (/silk/i.test(ua)) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	      , version: versionIdentifier
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/(web|hpw)os/i.test(ua)) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (/tizen/i.test(ua)) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/safari/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      , version: versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }
	
	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      result.name = result.name || "Webkit"
	      result.webkit = t
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }
	
	    // set OS flags for platforms that have multiple browsers
	    if (!result.msedge && (android || result.silk)) {
	      result.android = t
	    } else if (iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    }
	
	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }
	
	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (tablet || iosdevice == 'ipad' || (android && (osMajorVersion == 3 || (osMajorVersion == 4 && !mobile))) || result.silk) {
	      result.tablet = t
	    } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || result.blackberry || result.webos || result.bada) {
	      result.mobile = t
	    }
	
	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
	        (result.chrome && result.version >= 20) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        ) {
	      result.c = t
	    } else result.x = t
	
	    return result
	  }
	
	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '')
	
	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }
	
	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;
	
	  return bowser
	});


/***/ },
/* 71 */
/***/ function(module, exports) {

	var caniuseData = {"chrome":{"backfaceVisibility":35,"perspective":35,"perspectiveOrigin":35,"transform":35,"transformOrigin":35,"transformStyle":35,"transformOriginX":35,"transformOriginY":35,"animation":42,"animationDelay":42,"animationDirection":42,"animationFillMode":42,"animationDuration":42,"anmationIterationCount":42,"animationName":42,"animationPlayState":42,"animationTimingFunction":42,"appearance":48,"userSelect":48,"fontKerning":32,"textEmphasisPosition":48,"textEmphasis":48,"textEmphasisStyle":48,"textEmphasisColor":48,"boxDecorationBreak":48,"clipPath":48,"maskImage":48,"maskMode":48,"maskRepeat":48,"maskPosition":48,"maskClip":48,"maskOrigin":48,"maskSize":48,"maskComposite":48,"mask":48,"maskBorderSource":48,"maskBorderMode":48,"maskBorderSlice":48,"maskBorderWidth":48,"maskBorderOutset":48,"maskBorderRepeat":48,"maskBorder":48,"maskType":48,"textDecorationStyle":48,"textDecorationSkip":48,"textDecorationLine":48,"textDecorationColor":48,"filter":48,"fontFeatureSettings":48,"breakAfter":48,"breakBefore":48,"breakInside":48,"columnCount":48,"columnFill":48,"columnGap":48,"columnRule":48,"columnRuleColor":48,"columnRuleStyle":48,"columnRuleWidth":48,"columns":48,"columnSpan":48,"columnWidth":48},"safari":{"flex":8,"flexBasis":8,"flexDirection":8,"flexGrow":8,"flexFlow":8,"flexShrink":8,"alignContent":8,"alignItems":8,"alignSelf":8,"justifyContent":8,"order":8,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"backfaceVisibility":8,"perspective":8,"perspectiveOrigin":8,"transform":8,"transformOrigin":8,"transformStyle":8,"transformOriginX":8,"transformOriginY":8,"animation":8,"animationDelay":8,"animationDirection":8,"animationFillMode":8,"animationDuration":8,"anmationIterationCount":8,"animationName":8,"animationPlayState":8,"animationTimingFunction":8,"appearance":9,"userSelect":9,"backdropFilter":9,"fontKerning":9,"scrollSnapType":9,"scrollSnapPointsX":9,"scrollSnapPointsY":9,"scrollSnapDestination":9,"scrollSnapCoordinate":9,"textEmphasisPosition":7,"textEmphasis":7,"textEmphasisStyle":7,"textEmphasisColor":7,"boxDecorationBreak":9,"clipPath":9,"maskImage":9,"maskMode":9,"maskRepeat":9,"maskPosition":9,"maskClip":9,"maskOrigin":9,"maskSize":9,"maskComposite":9,"mask":9,"maskBorderSource":9,"maskBorderMode":9,"maskBorderSlice":9,"maskBorderWidth":9,"maskBorderOutset":9,"maskBorderRepeat":9,"maskBorder":9,"maskType":9,"textDecorationStyle":9,"textDecorationSkip":9,"textDecorationLine":9,"textDecorationColor":9,"shapeImageThreshold":9,"shapeImageMargin":9,"shapeImageOutside":9,"filter":9,"hyphens":9,"flowInto":9,"flowFrom":9,"breakBefore":8,"breakAfter":8,"breakInside":8,"regionFragment":9,"columnCount":8,"columnFill":8,"columnGap":8,"columnRule":8,"columnRuleColor":8,"columnRuleStyle":8,"columnRuleWidth":8,"columns":8,"columnSpan":8,"columnWidth":8},"firefox":{"appearance":43,"userSelect":43,"boxSizing":28,"textAlignLast":43,"textDecorationStyle":35,"textDecorationSkip":35,"textDecorationLine":35,"textDecorationColor":35,"tabSize":43,"hyphens":42,"fontFeatureSettings":33,"breakAfter":43,"breakBefore":43,"breakInside":43,"columnCount":43,"columnFill":43,"columnGap":43,"columnRule":43,"columnRuleColor":43,"columnRuleStyle":43,"columnRuleWidth":43,"columns":43,"columnSpan":43,"columnWidth":43},"opera":{"flex":16,"flexBasis":16,"flexDirection":16,"flexGrow":16,"flexFlow":16,"flexShrink":16,"alignContent":16,"alignItems":16,"alignSelf":16,"justifyContent":16,"order":16,"backfaceVisibility":22,"perspective":22,"perspectiveOrigin":22,"transform":22,"transformOrigin":22,"transformStyle":22,"transformOriginX":22,"transformOriginY":22,"animation":29,"animationDelay":29,"animationDirection":29,"animationFillMode":29,"animationDuration":29,"anmationIterationCount":29,"animationName":29,"animationPlayState":29,"animationTimingFunction":29,"appearance":34,"userSelect":34,"fontKerning":19,"textEmphasisPosition":34,"textEmphasis":34,"textEmphasisStyle":34,"textEmphasisColor":34,"boxDecorationBreak":34,"clipPath":34,"maskImage":34,"maskMode":34,"maskRepeat":34,"maskPosition":34,"maskClip":34,"maskOrigin":34,"maskSize":34,"maskComposite":34,"mask":34,"maskBorderSource":34,"maskBorderMode":34,"maskBorderSlice":34,"maskBorderWidth":34,"maskBorderOutset":34,"maskBorderRepeat":34,"maskBorder":34,"maskType":34,"filter":34,"fontFeatureSettings":34,"breakAfter":34,"breakBefore":34,"breakInside":34,"columnCount":34,"columnFill":34,"columnGap":34,"columnRule":34,"columnRuleColor":34,"columnRuleStyle":34,"columnRuleWidth":34,"columns":34,"columnSpan":34,"columnWidth":34},"ie":{"gridAutoColumns":11,"touchAction":10,"flex":10,"grid":11,"gridColumnStart":11,"flowInto":11,"gridTemplateAreas":11,"gridAutoFlow":11,"wrapMargin":11,"breakAfter":11,"scrollSnapCoordinate":11,"gridArea":11,"regionFragment":11,"breakInside":11,"scrollSnapPointsY":11,"gridRow":11,"gridTemplate":11,"flowFrom":11,"flexFlow":10,"gridTemplateRows":11,"gridAutoRows":11,"hyphens":11,"scrollSnapPointsX":11,"flexDirection":10,"columnGap":11,"gridRowEnd":11,"gridRowStart":11,"gridColumn":11,"scrollSnapDestination":11,"gridTemplateColumns":11,"scrollSnapType":11,"rowGap":11,"userSelect":11,"wrapFlow":11,"breakBefore":11,"wrapThrough":11,"gridGap":11,"textSizeAdjust":11},"ios_saf":{"flex":8.1,"flexBasis":8.1,"flexDirection":8.1,"flexGrow":8.1,"flexFlow":8.1,"flexShrink":8.1,"alignContent":8.1,"alignItems":8.1,"alignSelf":8.1,"justifyContent":8.1,"order":8.1,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"backfaceVisibility":8.1,"perspective":8.1,"perspectiveOrigin":8.1,"transform":8.1,"transformOrigin":8.1,"transformStyle":8.1,"transformOriginX":8.1,"transformOriginY":8.1,"animation":8.1,"animationDelay":8.1,"animationDirection":8.1,"animationFillMode":8.1,"animationDuration":8.1,"anmationIterationCount":8.1,"animationName":8.1,"animationPlayState":8.1,"animationTimingFunction":8.1,"appearance":9,"userSelect":9,"backdropFilter":9,"fontKerning":9,"scrollSnapType":9,"scrollSnapPointsX":9,"scrollSnapPointsY":9,"scrollSnapDestination":9,"scrollSnapCoordinate":9,"boxDecorationBreak":9,"clipPath":9,"maskImage":9,"maskMode":9,"maskRepeat":9,"maskPosition":9,"maskClip":9,"maskOrigin":9,"maskSize":9,"maskComposite":9,"mask":9,"maskBorderSource":9,"maskBorderMode":9,"maskBorderSlice":9,"maskBorderWidth":9,"maskBorderOutset":9,"maskBorderRepeat":9,"maskBorder":9,"maskType":9,"textSizeAdjust":9,"textDecorationStyle":9,"textDecorationSkip":9,"textDecorationLine":9,"textDecorationColor":9,"shapeImageThreshold":9,"shapeImageMargin":9,"shapeImageOutside":9,"filter":9,"hyphens":9,"flowInto":9,"flowFrom":9,"breakBefore":8.1,"breakAfter":8.1,"breakInside":8.1,"regionFragment":9,"columnCount":8.1,"columnFill":8.1,"columnGap":8.1,"columnRule":8.1,"columnRuleColor":8.1,"columnRuleStyle":8.1,"columnRuleWidth":8.1,"columns":8.1,"columnSpan":8.1,"columnWidth":8.1},"android":{"borderImage":4.2,"borderImageOutset":4.2,"borderImageRepeat":4.2,"borderImageSlice":4.2,"borderImageSource":4.2,"borderImageWidth":4.2,"flex":4.2,"flexBasis":4.2,"flexDirection":4.2,"flexGrow":4.2,"flexFlow":4.2,"flexShrink":4.2,"alignContent":4.2,"alignItems":4.2,"alignSelf":4.2,"justifyContent":4.2,"order":4.2,"transition":4.2,"transitionDelay":4.2,"transitionDuration":4.2,"transitionProperty":4.2,"transitionTimingFunction":4.2,"backfaceVisibility":4.4,"perspective":4.4,"perspectiveOrigin":4.4,"transform":4.4,"transformOrigin":4.4,"transformStyle":4.4,"transformOriginX":4.4,"transformOriginY":4.4,"animation":4.4,"animationDelay":4.4,"animationDirection":4.4,"animationFillMode":4.4,"animationDuration":4.4,"anmationIterationCount":4.4,"animationName":4.4,"animationPlayState":4.4,"animationTimingFunction":4.4,"appearance":44,"userSelect":44,"fontKerning":4.4,"textEmphasisPosition":44,"textEmphasis":44,"textEmphasisStyle":44,"textEmphasisColor":44,"boxDecorationBreak":44,"clipPath":44,"maskImage":44,"maskMode":44,"maskRepeat":44,"maskPosition":44,"maskClip":44,"maskOrigin":44,"maskSize":44,"maskComposite":44,"mask":44,"maskBorderSource":44,"maskBorderMode":44,"maskBorderSlice":44,"maskBorderWidth":44,"maskBorderOutset":44,"maskBorderRepeat":44,"maskBorder":44,"maskType":44,"filter":44,"fontFeatureSettings":44,"breakAfter":44,"breakBefore":44,"breakInside":44,"columnCount":44,"columnFill":44,"columnGap":44,"columnRule":44,"columnRuleColor":44,"columnRuleStyle":44,"columnRuleWidth":44,"columns":44,"columnSpan":44,"columnWidth":44},"and_chr":{},"and_uc":{"flex":9.9,"flexBasis":9.9,"flexDirection":9.9,"flexGrow":9.9,"flexFlow":9.9,"flexShrink":9.9,"alignContent":9.9,"alignItems":9.9,"alignSelf":9.9,"justifyContent":9.9,"order":9.9,"transition":9.9,"transitionDelay":9.9,"transitionDuration":9.9,"transitionProperty":9.9,"transitionTimingFunction":9.9,"backfaceVisibility":9.9,"perspective":9.9,"perspectiveOrigin":9.9,"transform":9.9,"transformOrigin":9.9,"transformStyle":9.9,"transformOriginX":9.9,"transformOriginY":9.9,"animation":9.9,"animationDelay":9.9,"animationDirection":9.9,"animationFillMode":9.9,"animationDuration":9.9,"anmationIterationCount":9.9,"animationName":9.9,"animationPlayState":9.9,"animationTimingFunction":9.9,"appearance":9.9,"userSelect":9.9,"fontKerning":9.9,"textEmphasisPosition":9.9,"textEmphasis":9.9,"textEmphasisStyle":9.9,"textEmphasisColor":9.9,"maskImage":9.9,"maskMode":9.9,"maskRepeat":9.9,"maskPosition":9.9,"maskClip":9.9,"maskOrigin":9.9,"maskSize":9.9,"maskComposite":9.9,"mask":9.9,"maskBorderSource":9.9,"maskBorderMode":9.9,"maskBorderSlice":9.9,"maskBorderWidth":9.9,"maskBorderOutset":9.9,"maskBorderRepeat":9.9,"maskBorder":9.9,"maskType":9.9,"textSizeAdjust":9.9,"filter":9.9,"hyphens":9.9,"flowInto":9.9,"flowFrom":9.9,"breakBefore":9.9,"breakAfter":9.9,"breakInside":9.9,"regionFragment":9.9,"fontFeatureSettings":9.9,"columnCount":9.9,"columnFill":9.9,"columnGap":9.9,"columnRule":9.9,"columnRuleColor":9.9,"columnRuleStyle":9.9,"columnRuleWidth":9.9,"columns":9.9,"columnSpan":9.9,"columnWidth":9.9},"op_mini":{"borderImage":5,"borderImageOutset":5,"borderImageRepeat":5,"borderImageSlice":5,"borderImageSource":5,"borderImageWidth":5,"tabSize":5,"objectFit":5,"objectPosition":5}}; module.exports = caniuseData

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _pluginsCursor = __webpack_require__(73);
	
	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);
	
	var _pluginsFlex = __webpack_require__(74);
	
	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);
	
	var _pluginsSizing = __webpack_require__(75);
	
	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);
	
	var _pluginsGradient = __webpack_require__(76);
	
	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);
	
	//special flexbox specifications
	
	var _pluginsFlexboxIE = __webpack_require__(77);
	
	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);
	
	var _pluginsFlexboxOld = __webpack_require__(78);
	
	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);
	
	exports['default'] = [_pluginsCursor2['default'], _pluginsFlex2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default']];
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var values = ['zoom-in', 'zoom-out', 'grab', 'grabbing'];
	
	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;
	
	  if (property === 'cursor' && values.indexOf(value) > -1 && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var values = ['flex', 'inline-flex'];
	
	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;
	
	  if (property === 'display' && values.indexOf(value) > -1 && (browser === 'chrome' && (version < 29 || version > 20) || (browser === 'safari' || browser === 'ios_saf') && (version < 9 || version > 6) || browser === 'opera' && (version == 15 || version == 16))) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = ['maxHeight', 'maxWidth', 'width', 'height', 'columnWidth', 'minWidth', 'minHeight'];
	var values = ['min-content', 'max-content', 'fill-available', 'fit-content', 'contain-floats'];
	
	exports['default'] = function (property, value, _ref2) {
	  var prefix = _ref2.prefix;
	
	  /**
	   * This actually is only available with prefixes
	   * NOTE: This might change in the feature
	   */
	  if (properties.indexOf(property) > -1 && values.indexOf(value) > -1) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = ['background', 'backgroundImage'];
	var values = ['linear-gradient', 'radial-gradient', 'repeating-linear-gradient', 'repeating-radial-gradient'];
	
	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;
	
	  if (properties.indexOf(property) > -1 && values.indexOf(value) > -1 && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'flex': '-ms-flexbox',
	  'inline-flex': '-ms-inline-flexbox'
	};
	
	var alternativeProps = {
	  'alignContent': 'msFlexLinePack',
	  'alignSelf': 'msFlexItemAlign',
	  'alignItems': 'msFlexAlign',
	  'justifyContent': 'msFlexPack',
	  'order': 'msFlexOrder',
	  'flexGrow': 'msFlexPositive',
	  'flexShrink': 'msFlexNegative',
	  'flexBasis': 'msPreferredSize'
	};
	
	var properties = Object.keys(alternativeProps).concat('display');
	
	exports['default'] = function (property, value, _ref2, styles) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	
	  if (properties.indexOf(property) > -1 && ((browser === 'ie_mob' || browser === 'ie') && version == 10)) {
	    delete styles[property];
	    return _defineProperty({}, alternativeProps[property] || property, alternativeValues[value] || value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  'wrap': 'multiple',
	  'flex': 'box',
	  'inline-flex': 'inline-box'
	};
	
	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};
	
	var properties = Object.keys(alternativeProps).concat(['alignContent', 'alignSelf', 'display', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection']);
	
	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;
	
	  if (properties.indexOf(property) > -1 && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (property === 'flexDirection') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: prefix.CSS + alternativeValues[value]
	      };
	    }
	    return _defineProperty({}, alternativeProps[property] || property, alternativeValues[value] || value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/** @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mouseUpListener = __webpack_require__(80);
	
	var _mouseUpListener2 = _interopRequireDefault(_mouseUpListener);
	
	/*:: import type {PluginConfig, PluginResult} from '.';*/
	
	var _isInteractiveStyleField = function _isInteractiveStyleField(styleFieldName) {
	  return styleFieldName === ':hover' || styleFieldName === ':active' || styleFieldName === ':focus';
	};
	
	var resolveInteractionStyles = function resolveInteractionStyles(config /*: PluginConfig*/) /*: PluginResult*/ {
	  var ExecutionEnvironment = config.ExecutionEnvironment;
	  var getComponentField = config.getComponentField;
	  var getState = config.getState;
	  var mergeStyles = config.mergeStyles;
	  var props = config.props;
	  var setState = config.setState;
	  var style = config.style;
	
	  var newComponentFields = {};
	  var newProps = {};
	
	  // Only add handlers if necessary
	  if (style[':hover']) {
	    (function () {
	      // Always call the existing handler if one is already defined.
	      // This code, and the very similar ones below, could be abstracted a bit
	      // more, but it hurts readability IMO.
	      var existingOnMouseEnter = props.onMouseEnter;
	      newProps.onMouseEnter = function (e) {
	        existingOnMouseEnter && existingOnMouseEnter(e);
	        setState(':hover', true);
	      };
	
	      var existingOnMouseLeave = props.onMouseLeave;
	      newProps.onMouseLeave = function (e) {
	        existingOnMouseLeave && existingOnMouseLeave(e);
	        setState(':hover', false);
	      };
	    })();
	  }
	
	  if (style[':active']) {
	    (function () {
	      var existingOnMouseDown = props.onMouseDown;
	      newProps.onMouseDown = function (e) {
	        existingOnMouseDown && existingOnMouseDown(e);
	        newComponentFields._lastMouseDown = Date.now();
	        setState(':active', 'viamousedown');
	      };
	
	      var existingOnKeyDown = props.onKeyDown;
	      newProps.onKeyDown = function (e) {
	        existingOnKeyDown && existingOnKeyDown(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', 'viakeydown');
	        }
	      };
	
	      var existingOnKeyUp = props.onKeyUp;
	      newProps.onKeyUp = function (e) {
	        existingOnKeyUp && existingOnKeyUp(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', false);
	        }
	      };
	    })();
	  }
	
	  if (style[':focus']) {
	    (function () {
	      var existingOnFocus = props.onFocus;
	      newProps.onFocus = function (e) {
	        existingOnFocus && existingOnFocus(e);
	        setState(':focus', true);
	      };
	
	      var existingOnBlur = props.onBlur;
	      newProps.onBlur = function (e) {
	        existingOnBlur && existingOnBlur(e);
	        setState(':focus', false);
	      };
	    })();
	  }
	
	  if (style[':active'] && !getComponentField('_radiumMouseUpListener') && ExecutionEnvironment.canUseEventListeners) {
	    newComponentFields._radiumMouseUpListener = _mouseUpListener2['default'].subscribe(function () {
	      Object.keys(getComponentField('state')._radiumStyleState).forEach(function (key) {
	        if (getState(':active', key) === 'viamousedown') {
	          setState(':active', false, key);
	        }
	      });
	    });
	  }
	
	  // Merge the styles in the order they were defined
	  var interactionStyles = Object.keys(style).filter(function (name) {
	    return _isInteractiveStyleField(name) && getState(name);
	  }).map(function (name) {
	    return style[name];
	  });
	
	  var newStyle = mergeStyles([style].concat(interactionStyles));
	
	  // Remove interactive styles
	  newStyle = Object.keys(newStyle).reduce(function (styleWithoutInteractions, name) {
	    if (!_isInteractiveStyleField(name)) {
	      styleWithoutInteractions[name] = newStyle[name];
	    }
	    return styleWithoutInteractions;
	  }, {});
	
	  return {
	    componentFields: newComponentFields,
	    props: newProps,
	    style: newStyle
	  };
	};
	
	exports['default'] = resolveInteractionStyles;
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	var _callbacks = [];
	var _mouseUpListenerIsActive = false;
	
	function _handleMouseUp() {
	  _callbacks.forEach(function (callback) {
	    callback();
	  });
	}
	
	var subscribe = function subscribe(callback /*: () => void*/) /*: {remove: () => void}*/ {
	  if (_callbacks.indexOf(callback) === -1) {
	    _callbacks.push(callback);
	  }
	
	  if (!_mouseUpListenerIsActive) {
	    window.addEventListener('mouseup', _handleMouseUp);
	    _mouseUpListenerIsActive = true;
	  }
	
	  return {
	    remove: function remove() {
	      var index = _callbacks.indexOf(callback);
	      _callbacks.splice(index, 1);
	
	      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
	        window.removeEventListener('mouseup', _handleMouseUp);
	        _mouseUpListenerIsActive = false;
	      }
	    }
	  };
	};
	
	exports['default'] = {
	  subscribe: subscribe,
	  __triggerForTests: _handleMouseUp
	};
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports) {

	/** @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = resolveMediaQueries;
	
	/*:: import type {MatchMediaType} from '../config';*/
	/*:: import type {PluginConfig, PluginResult} from '.';*/
	
	var _windowMatchMedia = undefined;
	var _getWindowMatchMedia = function _getWindowMatchMedia(ExecutionEnvironment) {
	  if (_windowMatchMedia === undefined) {
	    _windowMatchMedia = !!ExecutionEnvironment.canUseDOM && !!window && !!window.matchMedia && function (mediaQueryString) {
	      return window.matchMedia(mediaQueryString);
	    } || null;
	  }
	  return _windowMatchMedia;
	};
	
	function resolveMediaQueries(_ref /*: PluginConfig*/) /*: PluginResult*/ {
	  var ExecutionEnvironment = _ref.ExecutionEnvironment;
	  var getComponentField = _ref.getComponentField;
	  var getGlobalState = _ref.getGlobalState;
	  var config = _ref.config;
	  var mergeStyles = _ref.mergeStyles;
	  var setState = _ref.setState;
	  var style = _ref.style;
	
	  var newComponentFields = {};
	  var newStyle = style;
	  var matchMedia /*: ?MatchMediaType*/ = config.matchMedia || _getWindowMatchMedia(ExecutionEnvironment);
	  if (!matchMedia) {
	    return newStyle;
	  }
	
	  var mediaQueryListByQueryString = getGlobalState('mediaQueryListByQueryString') || {};
	
	  Object.keys(style).filter(function (name) {
	    return name.indexOf('@media') === 0;
	  }).map(function (query) {
	    var mediaQueryStyles = style[query];
	    query = query.replace('@media ', '');
	
	    // Create a global MediaQueryList if one doesn't already exist
	    var mql = mediaQueryListByQueryString[query];
	    if (!mql && matchMedia) {
	      mediaQueryListByQueryString[query] = mql = matchMedia(query);
	    }
	
	    var listenersByQuery = getComponentField('_radiumMediaQueryListenersByQuery');
	
	    if (!listenersByQuery || !listenersByQuery[query]) {
	      (function () {
	        var listener = function listener() {
	          return setState(query, mql.matches, '_all');
	        };
	        mql.addListener(listener);
	        newComponentFields._radiumMediaQueryListenersByQuery = _extends({}, listenersByQuery);
	        newComponentFields._radiumMediaQueryListenersByQuery[query] = {
	          remove: function remove() {
	            mql.removeListener(listener);
	          }
	        };
	      })();
	    }
	
	    // Apply media query states
	    if (mql.matches) {
	      newStyle = mergeStyles([newStyle, mediaQueryStyles]);
	    }
	  });
	
	  // Remove media queries
	  newStyle = Object.keys(newStyle).reduce(function (styleWithoutMedia, key) {
	    if (key.indexOf('@media') !== 0) {
	      styleWithoutMedia[key] = newStyle[key];
	    }
	    return styleWithoutMedia;
	  }, {});
	
	  return {
	    componentFields: newComponentFields,
	    globalState: { mediaQueryListByQueryString: mediaQueryListByQueryString },
	    style: newStyle
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ },
/* 83 */
/***/ function(module, exports) {

	/* @flow */
	
	"use strict";
	
	exports.__esModule = true;
	var allPrintStyles = {};
	var listeners = [];
	
	function subscribe(listener /*: () => void*/) /*: {remove: () => void}*/ {
	  if (listeners.indexOf(listener) === -1) {
	    listeners.push(listener);
	  }
	
	  return {
	    remove: function remove() {
	      var listenerIndex = listeners.indexOf(listener);
	
	      if (listenerIndex > -1) {
	        listeners.splice(listenerIndex, 1);
	      }
	    }
	  };
	}
	
	function _emitChange() {
	  listeners.forEach(function (listener) {
	    return listener();
	  });
	}
	
	function _appendImportantToEachValue(styleObj) {
	  var importantStyleObj = {};
	
	  Object.keys(styleObj).forEach(function (key) {
	    var value = styleObj[key];
	
	    // This breaks unitless values but they'll be deprecated soon anyway
	    // https://github.com/facebook/react/issues/1873
	    value = value + " !important";
	    importantStyleObj[key] = value;
	  });
	
	  return importantStyleObj;
	}
	
	function addPrintStyles(Component /*: constructor*/) {
	  if (!Component.printStyles) {
	    return;
	  }
	
	  var printStyleClass = {};
	
	  Object.keys(Component.printStyles).forEach(function (key) {
	    var styles = Component.printStyles[key];
	    var className = "Radium-" + Component.displayName + "-" + key;
	    allPrintStyles["." + className] = _appendImportantToEachValue(styles);
	    printStyleClass[key] = className;
	  });
	
	  // Allows for lazy loading of JS that then calls Radium to update the
	  // print styles
	  _emitChange();
	  return printStyleClass;
	}
	
	function getPrintStyles() /*: Object*/ {
	  return allPrintStyles;
	}
	
	exports["default"] = {
	  addPrintStyles: addPrintStyles,
	  getPrintStyles: getPrintStyles,
	  subscribe: subscribe
	};
	module.exports = exports["default"];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(30);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styleJs = __webpack_require__(85);
	
	var _styleJs2 = _interopRequireDefault(_styleJs);
	
	var _printStylesJs = __webpack_require__(83);
	
	var _printStylesJs2 = _interopRequireDefault(_printStylesJs);
	
	var PrintStyle = _react2['default'].createClass({
	  displayName: 'PrintStyle',
	
	  getInitialState: function getInitialState() {
	    return this._getStylesState();
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.subscription = _printStylesJs2['default'].subscribe(this._onChange);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.subscription.remove();
	  },
	
	  _onChange: function _onChange() {
	    this.setState(this._getStylesState());
	  },
	
	  _getStylesState: function _getStylesState() {
	    return {
	      styles: _printStylesJs2['default'].getPrintStyles()
	    };
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(_styleJs2['default'], { rules: {
	        mediaQueries: {
	          print: this.state.styles
	        }
	      } });
	  }
	});
	
	exports['default'] = PrintStyle;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _camelCasePropsToDashCase = __webpack_require__(86);
	
	var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);
	
	var _createMarkupForStyles = __webpack_require__(87);
	
	var _createMarkupForStyles2 = _interopRequireDefault(_createMarkupForStyles);
	
	var _prefixer = __webpack_require__(67);
	
	var _react = __webpack_require__(30);
	
	var _react2 = _interopRequireDefault(_react);
	
	var buildCssString = function buildCssString(selector /*: string*/, rules /*: Object*/, userAgent /*: ?string*/) /*: string*/ {
	  if (!selector || !rules) {
	    return '';
	  }
	
	  var prefixedRules = _prefixer.getPrefixedStyle(rules, 'Style', userAgent);
	  var cssPrefixedRules = _camelCasePropsToDashCase2['default'](prefixedRules);
	  var serializedRules = _createMarkupForStyles2['default'](cssPrefixedRules);
	
	  return selector + '{' + serializedRules + '}';
	};
	
	var Style = _react2['default'].createClass({
	  displayName: 'Style',
	
	  propTypes: {
	    rules: _react2['default'].PropTypes.object,
	    scopeSelector: _react2['default'].PropTypes.string
	  },
	
	  contextTypes: {
	    radiumConfig: _react2['default'].PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() /*: {scopeSelector: string}*/ {
	    return {
	      prefix: _prefixer.getPrefixedStyle,
	      scopeSelector: ''
	    };
	  },
	
	  _buildStyles: function _buildStyles(styles /*: Object*/) /*: string*/ {
	    var _this = this;
	
	    return Object.keys(styles).reduce(function (accumulator, selector) {
	      var rules = styles[selector];
	
	      if (selector === 'mediaQueries') {
	        accumulator += _this._buildMediaQueryString(rules);
	      } else {
	        var completeSelector = (_this.props.scopeSelector ? _this.props.scopeSelector + ' ' : '') + selector;
	        accumulator += buildCssString(completeSelector, rules, _this.context && _this.context.radiumConfig && _this.context.radiumConfig.userAgent);
	      }
	
	      return accumulator;
	    }, '');
	  },
	
	  _buildMediaQueryString: function _buildMediaQueryString(stylesByMediaQuery /*: {[mediaQuery: string]: Object}*/) /*: string*/ {
	    var _this2 = this;
	
	    var contextMediaQueries = this._getContextMediaQueries();
	    var mediaQueryString = '';
	
	    Object.keys(stylesByMediaQuery).forEach(function (query) {
	      var completeQuery = contextMediaQueries[query] ? contextMediaQueries[query] : query;
	      mediaQueryString += '@media ' + completeQuery + '{' + _this2._buildStyles(stylesByMediaQuery[query]) + '}';
	    });
	
	    return mediaQueryString;
	  },
	
	  _getContextMediaQueries: function _getContextMediaQueries() /*: {[mediaQuery: string]: Object}*/ {
	    var _this3 = this;
	
	    var contextMediaQueries = {};
	    if (this.context && this.context.mediaQueries) {
	      Object.keys(this.context.mediaQueries).forEach(function (query) {
	        contextMediaQueries[query] = _this3.context.mediaQueries[query].media;
	      });
	    }
	
	    return contextMediaQueries;
	  },
	
	  render: function render() /*: ?ReactElement*/ {
	    if (!this.props.rules) {
	      return null;
	    }
	
	    var styles = this._buildStyles(this.props.rules);
	
	    return _react2['default'].createElement('style', { dangerouslySetInnerHTML: { __html: styles } });
	  }
	});
	
	exports['default'] = Style;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	var _camelCaseRegex = /([a-z])?([A-Z])/g;
	var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
	  return (p1 || '') + '-' + p2.toLowerCase();
	};
	var _camelCaseToDashCase = function _camelCaseToDashCase(s) {
	  return s.replace(_camelCaseRegex, _camelCaseReplacer);
	};
	
	var camelCasePropsToDashCase = function camelCasePropsToDashCase(prefixedStyle /*: Object*/) /*: Object*/ {
	  // Since prefix is expected to work on inline style objects, we must
	  // translate the keys to dash case for rendering to CSS.
	  return Object.keys(prefixedStyle).reduce(function (result, key) {
	    result[_camelCaseToDashCase(key)] = prefixedStyle[key];
	    return result;
	  }, {});
	};
	
	exports['default'] = camelCasePropsToDashCase;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	var createMarkupForStyles = function createMarkupForStyles(style /*: Object*/) /*: string*/ {
	  var spaces /*: string*/ = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	
	  return Object.keys(style).map(function (property) {
	    return spaces + property + ': ' + style[property] + ';';
	  }).join('\n');
	};
	
	exports['default'] = createMarkupForStyles;
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = keyframes;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _camelCasePropsToDashCase = __webpack_require__(86);
	
	var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);
	
	var _createMarkupForStyles = __webpack_require__(87);
	
	var _createMarkupForStyles2 = _interopRequireDefault(_createMarkupForStyles);
	
	var _prefixer = __webpack_require__(67);
	
	var _exenv = __webpack_require__(82);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var isAnimationSupported = false;
	var keyframesPrefixed = 'keyframes';
	
	if (_exenv2['default'].canUseDOM) {
	  (function () {
	    // Animation feature detection and keyframes prefixing from MDN:
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Detecting_CSS_animation_support
	    var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
	    var element = (document.createElement('div') /*: any*/);
	
	    if (element.style.animationName !== undefined) {
	      isAnimationSupported = true;
	    } else {
	      domPrefixes.some(function (prefix) {
	        if (element.style[prefix + 'AnimationName'] !== undefined) {
	          keyframesPrefixed = '-' + prefix.toLowerCase() + '-keyframes';
	          isAnimationSupported = true;
	          return true;
	        }
	        return false;
	      });
	    }
	  })();
	}
	
	var animationIndex = 1;
	var animationStyleSheet = null;
	
	if (isAnimationSupported) {
	  animationStyleSheet = (document.createElement('style') /*: any*/);
	  document.head.appendChild(animationStyleSheet);
	}
	
	// Simple animation helper that injects CSS into a style object containing the
	// keyframes, and returns a string with the generated animation name.
	
	function keyframes(keyframeRules /*: {[percentage: string]: {[key: string]: string|number}}*/, componentName /*:: ?: string*/) /*: string*/ {
	  var prefix /*: (style: Object, componentName: ?string) => Object*/ = arguments.length <= 2 || arguments[2] === undefined ? _prefixer.getPrefixedStyle : arguments[2];
	
	  var name = 'Animation' + animationIndex;
	  animationIndex += 1;
	
	  if (!isAnimationSupported) {
	    return name;
	  }
	
	  var rule = '@' + keyframesPrefixed + ' ' + name + ' {\n' + Object.keys(keyframeRules).map(function (percentage) {
	    var props = keyframeRules[percentage];
	    var prefixedProps = prefix(props, componentName);
	    var cssPrefixedProps = _camelCasePropsToDashCase2['default'](prefixedProps);
	    var serializedProps = _createMarkupForStyles2['default'](cssPrefixedProps, '  ');
	    return '  ' + percentage + ' {\n  ' + serializedProps + '\n  }';
	  }).join('\n') + '\n}\n';
	
	  // for flow
	  /* istanbul ignore next */
	  if (!animationStyleSheet) {
	    throw new Error('keyframes not initialized properly');
	  }
	
	  animationStyleSheet.sheet.insertRule(rule, animationStyleSheet.sheet.cssRules.length);
	  return name;
	}
	
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	/*!
	 * Sqwish - a CSS Compressor
	 * Copyright Dustin Diaz 2011
	 * https://github.com/ded/sqwish
	 * License MIT
	 */
	
	"use strict";
	
	var _interopRequireDefault = __webpack_require__(7)["default"];
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(15);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function strict_css(css) {
	    // now some super fun funky shit where we remove duplicate declarations
	    // into combined rules
	
	    // store global dict of all rules
	    var ruleList = {},
	        rules = css.match(/([^{]+\{[^}]+\})+?/g);
	
	    // lets find the dups
	    _utils2["default"].forEach(rules, function (rule) {
	        // break rule into selector|declaration parts
	        var parts = rule.match(/([^{]+)\{([^}]+)/),
	            selector = parts[1],
	            declarations = parts[2];
	
	        // start new list if it wasn't created already
	        if (!ruleList[selector]) {
	            ruleList[selector] = [];
	        }
	
	        declarations = declarations.split(";");
	
	        // filter out duplicate properties
	        ruleList[selector] = ruleList[selector].filter(function (decl) {
	            var prop = decl.match(/[^:]+/)[0];
	
	            // pre-existing properties are not wanted anymore
	            return !declarations.some(function (dec) {
	                // must include "^" as to not confuse "color" with "border-color" etc.
	                return dec.match(new RegExp("^" + prop.replace(/[-\/\^$*+?.()|[]{}]/g, "\$&") + ":"));
	            });
	        });
	
	        // latter takes presedence :)
	        ruleList[selector] = ruleList[selector].concat(declarations);
	
	        // still dups? just in case
	        ruleList[selector] = _utils2["default"].unique(ruleList[selector]);
	    });
	
	    // reset css because we"re gonna recreate the whole shabang.
	    css = "";
	
	    _utils2["default"].forIn(ruleList, function (value, selector) {
	        var joinedRuleList = value.join(";");
	
	        css += selector + "{" + joinedRuleList.replace(/;$/, "") + "}";
	    });
	
	    return css;
	}
	
	function sqwish(css, strict) {
	    // allow /*! bla */ style comments to retain copyrights etc.
	    var comments = css.match(/\/\*![\s\S]+?\*\//g);
	
	    css = css.trim() // give it a solid trimming to start
	
	    // comments
	    .replace(/\/\*[\s\S]+?\*\//g, "")
	
	    // line breaks and carriage returns
	    .replace(/[\n\r]/g, "")
	
	    // space between selectors, declarations, properties and values
	    .replace(/\s*([:;,{}])\s*/g, "$1")
	
	    // replace multiple spaces with single spaces
	    .replace(/\s+/g, " ")
	
	    // space between last declaration and end of rule
	    // also remove trailing semi-colons on last declaration
	    .replace(/;}/g, "}")
	
	    // this is important
	    .replace(/\s+(!important)/g, "$1")
	
	    // convert longhand hex to shorthand hex
	    .replace(/#([a-fA-F0-9])\1([a-fA-F0-9])\2([a-fA-F0-9])\3(?![a-fA-F0-9])/g, "#$1$2$3")
	    // Restore Microsoft longhand hex
	    .replace(/(Microsoft[^;}]*)#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])(?![a-fA-F0-9])/g, "$1#$2$2$3$3$4$4")
	
	    // replace longhand values with shorthand "5px 5px 5px 5px" => "5px"
	    .replace(/\b(\d+[a-z]{2}) \1 \1 \1/gi, "$1")
	
	    // replace double-specified longhand values with shorthand "5px 2px 5px 2px" => "5px 2px"
	    .replace(/\b(\d+[a-z]{2}) (\d+[a-z]{2}) \1 \2/gi, "$1 $2")
	
	    // replace 0px with 0
	    .replace(/([\s|:])[0]+px/g, "$10");
	
	    if (strict) {
	        css = strict_css(css);
	    }
	
	    // put back in copyrights
	    if (comments) {
	        comments = comments ? comments.join("\n") : "";
	        css = comments + "\n" + css;
	    }
	
	    return css;
	}
	
	exports["default"] = function (css, strict) {
	    return sqwish(css, strict);
	};
	
	module.exports = exports["default"];

/***/ },
/* 90 */
/***/ function(module, exports) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = ["columnCount", "columns", "counterIncrement", "counterReset", "flexGrow", "flexShrink", "fontWeight", "lineHeight", "opacity", "order", "pitchRange", "richness", "stress", "volume", "zIndex"];
	module.exports = exports["default"];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(94)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../css-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(93)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 93 */
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
/* 94 */
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
		if(true) {
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


/***/ }
/******/ ])
});
;
//# sourceMappingURL=bix.js.map