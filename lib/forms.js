/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _reactPrefixer = require("react-prefixer");

var _reactPrefixer2 = _interopRequireDefault(_reactPrefixer);

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var forms = {
    fieldset: {
        border: 0,
        margin: 0,
        padding: "0.75em 0"

    },
    form: {
        display: "block"
    },
    formLabel: {
        display: "block",
        margin: "0.5em 0 0.2em"
    },
    input: _reactPrefixer2["default"]({
        backgroundColor: _variables2["default"].backgroundColor,
        border: "1px solid " + _variables2["default"].borderColor,
        borderRadius: _variables2["default"].borderRadius,
        boxShadow: "inset 0 1px 3px #ddd",
        color: _variables2["default"].fontColor,
        display: "block",
        lineHeight: "normal",
        outline: 0,
        padding: "0.5em 0.6em",
        margin: "0.25em 0",
        width: "100%"
    }),
    legend: {
        borderColor: "#e5e5e5",
        borderStyle: "solid",
        borderBottomWidth: 1,
        color: _variables2["default"].fontColor,
        display: "block",
        marginBottom: "0.3em",
        padding: "0.3em 0"
    },
    readOnly: {
        backgroundColor: _variables2["default"].borderColor,
        color: "#aaa"
    }
};

forms.inputColor = _utils2["default"].merge(forms.input, {
    padding: "0.2em 0.5em"
});

forms.select = _utils2["default"].merge(forms.input, {
    height: "2.25em"
});

forms.selectMultiple = _utils2["default"].merge(forms.input, {
    height: "auto"
});

forms.textarea = forms.input;

exports["default"] = forms;
module.exports = exports["default"];