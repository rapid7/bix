/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

exports["default"] = {
    button: {
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
    }
};
module.exports = exports["default"];