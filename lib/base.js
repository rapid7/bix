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
    a: {
        color: "blue",
        cursor: "pointer",
        textDecoration: "underline"
    },
    hr: {
        borderColor: "#eee",
        borderStyle: "solid none",
        borderWidth: "1px 0",
        marginBottom: 10,
        marginTop: 10
    },
    p: {
        margin: "1em 0"
    },
    wrapAll: {
        backgroundColor: _variables2["default"].backgroundColor,
        color: _variables2["default"].fontColor,
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: _variables2["default"].fontSize,
        fontWeight: _variables2["default"].fontWeight,
        height: "auto",
        minHeight: "100vh"
    }
};
module.exports = exports["default"];