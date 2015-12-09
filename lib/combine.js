/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _prefixer = require("./prefixer");

var _prefixer2 = _interopRequireDefault(_prefixer);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

exports["default"] = function () {
    var prefix = _prefixer2["default"]();

    var finalStyle = {};

    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
    }

    _utils2["default"].forEach(styles, function (style) {
        finalStyle = _utils2["default"].merge(finalStyle, prefix(style));
    });

    return finalStyle;
};

module.exports = exports["default"];