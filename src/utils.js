/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

const toString = Object.prototype.toString;

export default {
    ceil(value) {
        return Math.ceil(value);
    },

    forEach(arr, cb) {
        if (!this.isArray(arr) && !this.isArguments(arr)) {
            console.error("Error: first parameter needs to be an array.");
            return;
        }

        if (this.isArguments(arr)) {
            arr = Array.prototype.slice.call(arr);
        }

        let i = 0,
            len = arr.length;

        for (; i < len; i++) {
            if (cb(arr[i], i, arr) === false) {
                break;
            }
        }
    },

    forIn(obj, cb) {
        if (this.isUndefined(obj)) {
            obj = {};
        }

        if (!this.isObject(obj) || this.isFunction(obj)) {
            console.error("Error: first parameter needs to be an object.");
            return;
        }

        this.forEach(Object.keys(obj), (key) => {
            return cb(obj[key], key, obj);
        });
    },

    isArguments(obj) {
        return !this.isNull(obj) && (toString.call(obj) === "[object Arguments]" || (this.isObject(obj) && "callee" in obj));
    },

    isArray(obj) {
        return toString.call(obj) === "[object Array]";
    },

    isDate(obj) {
        return toString.call(obj) === "[object Date]";
    },

    isFinite(obj) {
        return obj !== Infinity && obj !== -Infinity && !this.isNaN(obj);
    },

    isFunction(obj) {
        return toString.call(obj) === "[object Function]" || typeof obj === "function";
    },

    isNaN(obj) {
        return obj !== obj;
    },

    isNull(obj) {
        return obj === null;
    },

    isNumber(obj) {
        obj = obj.toString().replace(/,/g, ".");

        if (/[%]/.test(obj)) {
            return false;
        }

        let numObj = parseFloat(obj);

        return !this.isNaN(numObj) && toString.call(numObj) === "[object Number]";
    },

    isObject(obj) {
        var type = typeof obj;

        return type === "function" || type === "object" && !!obj;
    },

    isString(obj) {
        return toString.call(obj) === "[object String]";
    },

    isUndefined(obj) {
        return obj === void 0;
    },

    kebabCase(str) {
        return str.replace(/([A-Z])/g, ($1) => {
            return "-"+$1.toLowerCase();
        });
    },

    merge(target, ...sources) {
        var dest = {};

        this.forEach(sources, (source) => {
            if (this.isArray(source)) {
                if (!this.isArray(target)) {
                    console.error("Error: Trying to merge array with non-array.");
                    return dest;
                }

                dest = [].concat(target || []);

                this.forEach(source, (item,i) => {
                    if (this.isUndefined(dest[i])) {
                        dest[i] = item;
                    } else if (this.isObject(item) && !this.isFunction(item)) {
                        dest[i] = this.merge(target[i],item);
                    } else {
                        if (target.indexOf(item) === -1) {
                            dest[i] = item;
                        }
                    }
                });
            } else {
                if (target && this.isObject(target) && !this.isFunction(target)) {
                    this.forIn(target, (value,key) => {
                        dest[key] = value;
                    });
                }

                this.forIn(source, (value,key) => {
                    dest[key] = this.isUndefined(target) ||
                    this.isUndefined(target[key]) ||
                    (!this.isObject(value) &&
                    !this.isUndefined(value)) ? value : this.merge(target[key], value || {});
                });
            }
        });

        return dest;
    },

    parseInt(value, radix) {
        return parseInt(value, radix || 10);
    },

    unique(arr) {
        let seen = {},
            out = [],
            j = 0;

        this.forEach(arr, (item) => {
            if (seen[item] !== 1) {
                seen[item] = 1;
                out[j++] = item;
            }
        });

        return out;
    }
};