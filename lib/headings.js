/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var headings = {
    h6: {
        display: "block",
        fontSize: _variables2["default"].fontSize,
        fontWeight: _variables2["default"].headingFontWeight,
        margin: _variables2["default"].headingMargin
    }
};

headings.h5 = _utils2["default"].merge(headings.h6, {
    fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.25)
});

headings.h4 = _utils2["default"].merge(headings.h6, {
    fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.5)
});

headings.h3 = _utils2["default"].merge(headings.h6, {
    fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 1.8)
});

headings.h2 = _utils2["default"].merge(headings.h6, {
    fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2.35)
});

headings.h1 = _utils2["default"].merge(headings.h6, {
    fontSize: _utils2["default"].ceil(_variables2["default"].fontSize * 2.8)
});

exports["default"] = headings;
module.exports = exports["default"];