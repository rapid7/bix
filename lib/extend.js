/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _prefixer = require("./prefixer");

var _prefixer2 = _interopRequireDefault(_prefixer);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

exports["default"] = function () {
    var _this = this;

    var prefix = _prefixer2["default"]();

    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
    }

    _utils2["default"].forEach(styles, function (style) {
        _utils2["default"].forIn(style, function (value, prop) {
            if (!_utils2["default"].isObject(_this[prop])) {
                _this[prop] = {};
            }

            _this[prop] = _utils2["default"].isFunction(value) ? style : _utils2["default"].merge(_this[prop], prefix(value));
        });
    });

    return this;
};

module.exports = exports["default"];