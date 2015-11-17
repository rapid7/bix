/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _combine = require("./combine");

var _combine2 = _interopRequireDefault(_combine);

var _extend = require("./extend");

var _extend2 = _interopRequireDefault(_extend);

var _isReactComponent = require("./isReactComponent");

var _isReactComponent2 = _interopRequireDefault(_isReactComponent);

var _prefixer = require("./prefixer");

var _prefixer2 = _interopRequireDefault(_prefixer);

var _radium = require("./radium");

var _radium2 = _interopRequireDefault(_radium);

var _sqwish = require("./sqwish");

var _sqwish2 = _interopRequireDefault(_sqwish);

var _unitlessValues = require("./unitlessValues");

var _unitlessValues2 = _interopRequireDefault(_unitlessValues);

var _utils = require("./utils");

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
            require("normalize.css");

            this.stylesheet("bix-defaults", {
                "*, *:after, *:before": {
                    boxSizing: "border-box",
                    position: "relative"
                }
            });
        }

        return this;
    },

    prefix: function prefix() {
        var prefix = _prefixer2["default"](),
            prefixedStyles = {};

        for (var _len2 = arguments.length, styles = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            styles[_key2] = arguments[_key2];
        }

        _utils2["default"].forEach(styles, function (style) {
            prefixedStyles = _utils2["default"].merge(prefixedStyles, prefix(style));
        });

        return prefixedStyles;
    },

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

    setUserAgent: function setUserAgent(userAgent) {
        _prefixer.setPrefixerByUserAgent(userAgent);

        return this;
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
            var _len3, _styles, _key3;

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

                for (_len3 = _arguments.length, _styles = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                    _styles[_key3 - 1] = _arguments[_key3];
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
        var prefix = _prefixer2["default"]();

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

        for (var _len4 = arguments.length, styles = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            styles[_key4 - 1] = arguments[_key4];
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

                    style = prefix(style);

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