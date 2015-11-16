/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

var _Object$keys = require("babel-runtime/core-js/object/keys")["default"];

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