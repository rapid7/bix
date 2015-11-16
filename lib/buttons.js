/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _prefix = require("./prefix");

var _prefix2 = _interopRequireDefault(_prefix);

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

var buttons = {
    button: _prefix2["default"]({
        border: "1px solid " + _variables2["default"].borderColor,
        backgroundColor: _variables2["default"].backgroundColor,
        borderRadius: _variables2["default"].borderRadius,
        color: _variables2["default"].fontColor,
        cursor: "pointer",
        display: "inline-block",
        fontFamily: "inherit",
        fontSize: 12,
        lineHeight: "normal",
        outline: 0,
        padding: "0.5em 1em",
        textAlign: "center",
        textDecoration: "none",
        textTransform: "uppercase",
        transition: "background-color " + _variables2["default"].transitionTiming + " " + _variables2["default"].transitionEase + ", color " + _variables2["default"].transitionTiming + " " + _variables2["default"].transitionEase,
        userSelect: "none",
        verticalAlign: "middle",
        whiteSpace: "nowrap",
        ":active": {
            backgroundColor: "#d5d5d5"
        },
        ":focus": {
            backgroundColor: "#d5d5d5"
        },
        ":hover": {
            backgroundColor: "#d5d5d5"
        }
    }),
    buttonDisabled: _prefix2["default"]({
        border: 0,
        cursor: "not-allowed",
        opacity: 0.4
    })
};

exports["default"] = buttons;
module.exports = exports["default"];