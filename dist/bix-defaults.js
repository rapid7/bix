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
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _base = __webpack_require__(2);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _buttons = __webpack_require__(4);
	
	var _buttons2 = _interopRequireDefault(_buttons);
	
	var _dropdowns = __webpack_require__(5);
	
	var _dropdowns2 = _interopRequireDefault(_dropdowns);
	
	var _forms = __webpack_require__(7);
	
	var _forms2 = _interopRequireDefault(_forms);
	
	var _grid = __webpack_require__(8);
	
	var _grid2 = _interopRequireDefault(_grid);
	
	var _headings = __webpack_require__(9);
	
	var _headings2 = _interopRequireDefault(_headings);
	
	var _images = __webpack_require__(10);
	
	var _images2 = _interopRequireDefault(_images);
	
	var _utils = __webpack_require__(6);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var bixDefaults = _utils2["default"].merge(_base2["default"], _buttons2["default"], _dropdowns2["default"], _forms2["default"], _grid2["default"], _headings2["default"], _images2["default"]);
	
	exports["default"] = bixDefaults;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _variables = __webpack_require__(3);
	
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
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _variables = __webpack_require__(3);
	
	var _variables2 = _interopRequireDefault(_variables);
	
	var buttons = {
	    button: {
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
	    },
	    buttonDisabled: {
	        border: 0,
	        cursor: "not-allowed",
	        opacity: 0.4
	    }
	};
	
	exports["default"] = buttons;
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
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _variables = __webpack_require__(3);
	
	var _variables2 = _interopRequireDefault(_variables);
	
	var _utils = __webpack_require__(6);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var dropdowns = {
	    dropdownContainer: {
	        position: "relative"
	    },
	    dropdown: {
	        backgroundColor: _variables2["default"].white,
	        border: "1px solid #ccc",
	        borderRadius: _variables2["default"].borderRadius,
	        boxShadow: "2px 2px 2px #ccc",
	        color: _variables2["default"].fontColor,
	        display: "none",
	        left: 0,
	        margin: 0,
	        padding: 0,
	        position: "absolute",
	        top: "100%",
	        zIndex: 1000
	    },
	    dropdownItem: {
	        display: "block",
	        margin: 0,
	        padding: "0.5em 1em",
	        whiteSpace: "nowrap",
	        ":hover": {
	            backgroundColor: "#eee"
	        }
	    }
	};
	
	dropdowns.dropdownRight = _utils2["default"].merge(dropdowns.dropdown, {
	    left: "auto",
	    right: 0
	});
	
	dropdowns.dropdownActive = _utils2["default"].merge(dropdowns.dropdown, {
	    display: "block"
	});
	
	dropdowns.dropdownRightActive = _utils2["default"].merge(dropdowns.dropdownRight, {
	    display: "block"
	});
	
	exports["default"] = dropdowns;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	var toString = Object.prototype.toString;
	
	exports["default"] = {
	    bind: function bind(fn, thisArg) {
	        return function bindWrapper() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }
	
	            return fn.apply(thisArg, args);
	        };
	    },
	
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
	
	        this.forEach(Object.keys(obj), function (key) {
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
	
	        for (var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	            sources[_key2 - 1] = arguments[_key2];
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _variables = __webpack_require__(3);
	
	var _variables2 = _interopRequireDefault(_variables);
	
	var _utils = __webpack_require__(6);
	
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
	    input: {
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
	    },
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(6);
	
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
	    columnFlex: {
	        flexGrow: 1,
	        flexShrink: 1
	    },
	    columnFlexFixed: {
	        flexGrow: 0,
	        flexShrink: 0
	    },
	    columnFlexGrow: {
	        flexGrow: 1,
	        flexShrink: 0
	    },
	    columnFlexShrink: {
	        flexGrow: 0,
	        flexShrink: 1
	    },
	    containerFixed: {
	        display: "block",
	        marginLeft: "auto",
	        marginRight: "auto"
	    },
	    containerFlex: {
	        alignContent: "stretch",
	        alignItems: "stretch",
	        display: "flex",
	        flexDirection: "row",
	        width: "100%"
	    }
	};
	
	grid.container = function (width) {
	    return _utils2["default"].merge(grid.containerFixed, {
	        width: width || "100%"
	    });
	};
	
	grid.containerFull = _utils2["default"].merge(grid.containerFixed, {
	    width: "100%"
	});
	
	grid.rowFlex = _utils2["default"].merge(grid.containerFlex, {
	    flexWrap: "nowrap"
	});
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _variables = __webpack_require__(3);
	
	var _variables2 = _interopRequireDefault(_variables);
	
	var _utils = __webpack_require__(6);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _variables = __webpack_require__(3);
	
	var _variables2 = _interopRequireDefault(_variables);
	
	exports["default"] = {
	    imgCircle: {
	        borderRadius: "50%"
	    },
	    imgResponsive: {
	        display: "block",
	        height: "auto",
	        maxWidth: "100%"
	    },
	    imgThumbnail: {
	        border: "5px solid " + _variables2["default"].white,
	        borderRadius: _variables2["default"].borderRadius
	    }
	};
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=bix-defaults.js.map