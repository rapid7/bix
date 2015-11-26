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

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var dropdowns = {
    dropdownContainer: {
        display: "inline-block",
        position: "relative",
        verticalAlign: "baseline"
    },
    dropdown: {
        backgroundColor: _variables2["default"].white,
        border: "1px solid #ccc",
        borderRadius: _variables2["default"].borderRadius,
        boxShadow: "2px 2px 2px #ccc",
        color: _variables2["default"].fontColor,
        display: "none",
        left: 0,
        margin: 0,
        padding: 0,
        position: "absolute",
        top: "100%",
        zIndex: 1000
    },
    dropdownItem: {
        backgroundColor: "inherit",
        cursor: "pointer",
        display: "block",
        margin: 0,
        padding: "0.5em 1em",
        transition: "background-color " + _variables2["default"].transitionTiming + " " + _variables2["default"].transitionEase + ", color " + _variables2["default"].transitionTiming + " " + _variables2["default"].transitionEase,
        whiteSpace: "nowrap",
        ":hover": {
            backgroundColor: "#eee"
        }
    }
};

dropdowns.dropdownRight = _utils2["default"].merge(dropdowns.dropdown, {
    left: "auto",
    right: 0
});

dropdowns.dropdownActive = _utils2["default"].merge(dropdowns.dropdown, {
    display: "block"
});

dropdowns.dropdownRightActive = _utils2["default"].merge(dropdowns.dropdownRight, {
    display: "block"
});

exports["default"] = dropdowns;
module.exports = exports["default"];