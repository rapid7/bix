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

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var dropdowns = {
    dropdownContainer: {
        position: "relative"
    },
    dropdown: _prefix2["default"]({
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
    }),
    dropdownItem: {
        display: "block",
        margin: 0,
        padding: "0.5em 1em",
        whiteSpace: "nowrap",
        ":hover": {
            backgroundColor: "#eee"
        }
    }
};

dropdowns.dropdownRight = _utils2["default"].merge(_utils2["default"].clone(dropdowns.dropdown), {
    left: "auto",
    right: 0
});

dropdowns.dropdownActive = _utils2["default"].merge(_utils2["default"].clone(dropdowns.dropdown), {
    display: "block"
});

dropdowns.dropdownRightActive = _utils2["default"].merge(_utils2["default"].clone(dropdowns.dropdownRight), {
    display: "block"
});

exports["default"] = dropdowns;
module.exports = exports["default"];