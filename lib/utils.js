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
        var numObj = parseFloat(obj.toString().replace(/,/g, "."));

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

        var dest;

        if (this.isArray(target)) {
            if (this.isArray(target)) {
                dest = [].concat(target);
            }
        } else {
            dest = {};

            if (target && this.isObject(target) && !this.isFunction(target)) {
                this.forIn(target, function (value, key) {
                    dest[key] = value;
                });
            }
        }

        for (var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            sources[_key2 - 1] = arguments[_key2];
        }

        this.forEach(sources, function (source) {
            if (_this.isArray(source)) {
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
                _this.forIn(source, function (value, key) {
                    if (!_this.isUndefined(value)) {
                        dest[key] = _this.isUndefined(target[key]) || !_this.isObject(value) ? value : _this.merge(target[key], value || {});
                    }
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

    setStatic: function setStatic(element) {
        var _this2 = this;

        if (this.isObject(element)) {
            if (element[":active"]) {
                delete element[":active"];
            }

            if (element[":focus"]) {
                delete element[":focus"];
            }

            if (element[":hover"]) {
                delete element[":hover"];
            }

            this.forIn(element, function (value, key) {
                if (/@media/.test(key)) {
                    delete element[key];
                } else if (_this2.isObject(value)) {
                    element[key] = _this2.setStatic(element[key]);
                }
            });
        }

        return element;
    },

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