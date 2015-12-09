/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

exports.__esModule = true;
exports.getCssPrefix = getCssPrefix;
exports.getJsPrefix = getJsPrefix;
exports.getPrefixedProperties = getPrefixedProperties;
exports.setPrefixerByUserAgent = setPrefixerByUserAgent;
exports["default"] = getPrefixer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _inlineStylePrefixer = require("inline-style-prefixer");

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var properties = [],
    prefixer = undefined;

function populatePrefixedProperties() {
    var prefixedProperties = [];

    _utils2["default"].forIn(prefixer._requiresPrefix, function (requiresPrefix, property) {
        if (requiresPrefix) {
            prefixedProperties[prefixedProperties.length] = property;
        }
    });

    return prefixedProperties;
}

properties = populatePrefixedProperties();

function getCssPrefix() {
    return prefixer.cssPrefix;
}

function getJsPrefix() {
    return prefixer.jsPrefix;
}

function getPrefixedProperties() {
    return properties;
}

function setPrefixerByUserAgent(userAgent) {
    prefixer = new _inlineStylePrefixer2["default"](userAgent);
    properties = populatePrefixedProperties();
}

function getPrefixer() {
    if (!prefixer) {
        setPrefixerByUserAgent();
    }

    return _utils2["default"].bind(prefixer.prefix, this);
}

;