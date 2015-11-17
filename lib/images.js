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

exports["default"] = {
    imgCircle: {
        borderRadius: "50%"
    },
    imgResponsive: {
        display: "block",
        height: "auto",
        maxWidth: "100%"
    },
    imgThumbnail: {
        border: "5px solid " + _variables2["default"].white,
        borderRadius: _variables2["default"].borderRadius
    }
};
module.exports = exports["default"];