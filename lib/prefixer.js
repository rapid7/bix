'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setPrefixerByUserAgent = exports.getPrefixedProperties = exports.getJsPrefix = exports.getCssPrefix = undefined;

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = [],
    prefixer = void 0; /*******************************************************************************
                        * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
                        * material contains unpublished, copyrighted work including confidential and
                        * proprietary information of Rapid7.
                        ******************************************************************************/

var populatePrefixedProperties = function populatePrefixedProperties() {
    var prefixedProperties = [];

    Object.keys(prefixer._requiresPrefix).forEach(function (property) {
        var requiresPrefix = prefixer._requiresPrefix[property];

        if (requiresPrefix) {
            prefixedProperties[prefixedProperties.length] = property;
        }
    });

    return prefixedProperties;
};

var getCssPrefix = exports.getCssPrefix = function getCssPrefix() {
    return prefixer.cssPrefix;
};

var getJsPrefix = exports.getJsPrefix = function getJsPrefix() {
    return prefixer.jsPrefix;
};

var getPrefixedProperties = exports.getPrefixedProperties = function getPrefixedProperties() {
    return properties;
};

var setPrefixerByUserAgent = exports.setPrefixerByUserAgent = function setPrefixerByUserAgent(userAgent) {
    prefixer = new _inlineStylePrefixer2.default({
        userAgent: userAgent
    });

    properties = populatePrefixedProperties();
};

var prefix = function prefix(value) {
    return prefixer.prefix(value);
};

exports.default = prefix;