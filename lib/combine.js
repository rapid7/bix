/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var _reactPrefixer = require("react-prefixer");

var _reactPrefixer2 = _interopRequireDefault(_reactPrefixer);

exports["default"] = function () {
    var finalStyle = {};

    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
    }

    _utils2["default"].forEach(styles, function (style) {
        finalStyle = _utils2["default"].merge(finalStyle, _reactPrefixer2["default"](style));
    });

    return finalStyle;
};

module.exports = exports["default"];