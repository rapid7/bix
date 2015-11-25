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

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

var buttons = {
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
    },
    buttonDisabled: {
        border: 0,
        cursor: "not-allowed",
        opacity: 0.4
    }
};

buttons.disableButton = function (button) {
    var prefix = _prefixer2["default"]();

    return prefix(_utils2["default"].merge(button, buttons.buttonDisabled, {
        ":active": {
            backgroundColor: button.backgroundColor,
            color: button.color
        },
        ":focus": {
            backgroundColor: button.backgroundColor,
            color: button.color
        },
        ":hover": {
            backgroundColor: button.backgroundColor,
            color: button.color
        }
    }));
};

exports["default"] = buttons;
module.exports = exports["default"];