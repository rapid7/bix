'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /*******************************************************************************
                                                                                                                                                                                                                                                   * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
                                                                                                                                                                                                                                                   * material contains unpublished, copyrighted work including confidential and
                                                                                                                                                                                                                                                   * proprietary information of Rapid7.
                                                                                                                                                                                                                                                   ******************************************************************************/

var _bind = require('lodash/bind');

var _bind2 = _interopRequireDefault(_bind);

var _isNumber = require('lodash/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isUndefined = require('lodash/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _kebabCase = require('lodash/kebabCase');

var _kebabCase2 = _interopRequireDefault(_kebabCase);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _min = require('min.css');

var _min2 = _interopRequireDefault(_min);

var _combine = require('./combine');

var _combine2 = _interopRequireDefault(_combine);

var _extend = require('./extend');

var _extend2 = _interopRequireDefault(_extend);

var _isReactComponent = require('./isReactComponent');

var _isReactComponent2 = _interopRequireDefault(_isReactComponent);

var _guid = require('./guid');

var _guid2 = _interopRequireDefault(_guid);

var _normalize2 = require('./normalize');

var _normalize3 = _interopRequireDefault(_normalize2);

var _prefixer = require('./prefixer');

var _prefixer2 = _interopRequireDefault(_prefixer);

var _radium = require('./radium');

var _radium2 = _interopRequireDefault(_radium);

var _unitlessValues = require('./unitlessValues');

var _unitlessValues2 = _interopRequireDefault(_unitlessValues);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OBJECT_KEYS = Object.keys;

// functions to set properties in different ways
var NO_PX_ADDED = /(px|vh|vw|em|[%]|ex|cm|mm|in|pt|pc|ch|rem|vmin|vmax)/;

var setReadOnlyProperty = function setReadOnlyProperty(object, property, value) {
    Object.defineProperty(object, property, {
        configurable: false,
        enumerable: false,
        value: value,
        writable: false
    });
};

var bixPrototype = {
    combine: _combine2.default,

    extend: _extend2.default,

    normalize: function normalize() {
        if (!arguments.length || (arguments.length <= 0 ? undefined : arguments[0]) !== false) {
            this.stylesheet('normalize-css', _normalize3.default);

            this.stylesheet('bix-defaults', {
                '*, *:after, *:before': {
                    boxSizing: 'border-box',
                    position: 'relative'
                }
            });
        }

        return this;
    },
    prefix: function prefix() {
        var prefixedStyles = {};

        for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
            styles[_key] = arguments[_key];
        }

        styles.forEach(function (style) {
            prefixedStyles = (0, _merge2.default)({}, prefixedStyles, (0, _prefixer2.default)(style));
        });

        return prefixedStyles;
    },


    radium: _radium2.default,

    render: function render(component) {
        var _this = this;

        if ((0, _isReactComponent2.default)(component)) {
            component.forceUpdate();
        } else {
            Object.keys(this.$$components).forEach(function (key) {
                var componentObj = _this.$$components[key];

                if (componentObj.renderOnResize && (0, _isReactComponent2.default)(componentObj.component)) {
                    componentObj.component.forceUpdate();
                }
            });
        }
    },
    renderOnResize: function renderOnResize(component) {
        if ((0, _isReactComponent2.default)(component)) {
            var name = component.displayName;

            if (this.$$components[name]) {
                this.$$components[name].renderOnResize = true;
                this.$$components[name].component = component;
            } else {
                this.$$components[name] = {
                    component: component,
                    renderOnResize: true,
                    styles: {}
                };
            }
        }

        return this;
    },
    setUserAgent: function setUserAgent(userAgent) {
        (0, _prefixer.setPrefixerByUserAgent)(userAgent);

        return this;
    },
    styles: function styles(component) {
        var _this2 = this,
            _arguments = arguments;

        if ((0, _isUndefined2.default)(component)) {
            /* eslint-disable no-console */
            console.error('Error: no component has been specified.');
            /* eslint-enable */

            return this;
        }

        if ((0, _isString2.default)(component)) {
            return this.$$components[component] && this.$$components[component].styles;
        }

        if ((0, _isObject2.default)(component)) {
            var _len2, _styles, _key2;

            var _ret = function () {
                if ((0, _isUndefined2.default)(component._reactInternalInstance)) {
                    /* eslint-disable no-console */
                    console.error('Error: object passed is not a React constructor.');
                    /* eslint-enable */

                    return {
                        v: _this2
                    };
                }

                var name = component.displayName;

                if ((0, _isUndefined2.default)(name)) {
                    /* eslint-disable no-console */
                    console.error('Error: you need to specify a displayName property on your React class if you want to assign styles to bix.');
                    /* eslint-enable */

                    return {
                        v: _this2
                    };
                }

                for (_len2 = _arguments.length, _styles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    _styles[_key2 - 1] = _arguments[_key2];
                }

                if (!_styles.length) {
                    return {
                        v: _this2.$$components[name] && _this2.$$components[name].styles
                    };
                }

                if ((0, _isUndefined2.default)(_this2.$$components[name])) {
                    _this2.$$components[name] = {};
                }

                _this2.$$components[name].component = component;

                if ((0, _isUndefined2.default)(_this2.$$components[name].styles)) {
                    _this2.$$components[name].styles = {};
                }

                _styles.forEach(function (style) {
                    _this2.$$components[name].styles = (0, _combine2.default)(_this2.$$components[name].styles, style);
                });
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }

        return this;
    },
    stylesheet: function stylesheet(id) {
        var _this3 = this,
            _arguments2 = arguments;

        if ((0, _utils.hasDocument)()) {
            var _len3, styles, _key3;

            var _ret2 = function () {
                var prefixedProperties = (0, _prefixer.getPrefixedProperties)();
                var jsPrefix = (0, _prefixer.getJsPrefix)();

                if (!(0, _isString2.default)(id) && (0, _isObject2.default)(id)) {
                    if (id.displayName) {
                        id = id.displayName;
                    } else {
                        /* eslint-disable no-console */
                        console.error('Error: the object you passed needs to have a displayName property to create a stylesheet.');
                        /* eslint-enable */

                        return {
                            v: _this3
                        };
                    }
                } else {
                    if ((0, _isUndefined2.default)(id)) {
                        /* eslint-disable no-console */
                        console.error('Error: generated stylesheets need to be given an id.');
                        /* eslint-enable */

                        return {
                            v: _this3
                        };
                    } else if (!(0, _isString2.default)(id)) {
                        /* eslint-disable no-console */
                        console.error('Error: first parameter needs to be either a string or a React class.');
                        /* eslint-enable */

                        return {
                            v: _this3
                        };
                    }
                }

                var currentStyles = {},
                    styleTag = document.createElement('style'),
                    str = '';

                if ((0, _isObject2.default)(id)) {
                    id = id.displayName;

                    if ((0, _isUndefined2.default)(id)) {
                        /* eslint-disable no-console */
                        console.error('Error: first parameter needs to be either a string or a React class.');
                        /* eslint-enable */

                        return {
                            v: _this3
                        };
                    }
                }

                if (!(0, _isUndefined2.default)(_this3.$$stylesheets[id])) {
                    styleTag = document.getElementById(id);
                    currentStyles = _this3.$$stylesheets[id];
                }

                styleTag.type = 'text/css';
                styleTag.id = id;

                for (_len3 = _arguments2.length, styles = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                    styles[_key3 - 1] = _arguments2[_key3];
                }

                styles.forEach(function (block) {
                    if ((0, _isObject2.default)(block)) {
                        OBJECT_KEYS(block).forEach(function (key) {
                            var style = block[key];

                            var cleanStyle = {};

                            str += key + '{';

                            OBJECT_KEYS(style).forEach(function (prop) {
                                var value = style[prop];

                                if (!NO_PX_ADDED.test(value) && (0, _isNumber2.default)(value) && _unitlessValues2.default.indexOf(prop) === -1) {
                                    value = value + 'px';
                                }

                                if (prefixedProperties.indexOf(prop) !== -1) {
                                    prop = jsPrefix + prop.charAt(0).toUpperCase() + prop.slice(1);
                                }

                                cleanStyle[prop] = value;
                            });

                            OBJECT_KEYS(cleanStyle).forEach(function (prop) {
                                str += '-' + (0, _kebabCase2.default)(prop) + ':' + cleanStyle[prop] + ';';
                            });

                            str += '}';
                        });

                        currentStyles = (0, _combine2.default)(currentStyles, block);
                    }
                });

                _this3.$$stylesheets[id] = currentStyles;

                styleTag.textContent = (0, _min2.default)(str);

                document.head.appendChild(styleTag);

                return {
                    v: _this3
                };
            }();

            if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
        }
    }
};

Object.defineProperty(bixPrototype, 'guid', {
    get: function get() {
        var newGuid = (0, _guid2.default)();

        if (this.$$guids.indexOf(newGuid) === -1) {
            this.$$guids.push(newGuid);
            return newGuid;
        }

        return this.guid;
    }
});

var bix = Object.create(bixPrototype);

function delayRenderOnResize() {
    if ((0, _utils.hasWindow)()) {
        window.setTimeout((0, _bind2.default)(bix.render, bix), 1);
    }
}

if ((0, _utils.hasWindow)()) {
    (0, _prefixer.setPrefixerByUserAgent)();

    window.addEventListener('resize', delayRenderOnResize);
}

setReadOnlyProperty(bix, '$$components', {});
setReadOnlyProperty(bix, '$$guids', []);
setReadOnlyProperty(bix, '$$stylesheets', {});

exports.default = bix;
module.exports = exports['default'];