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

var disabled = {
    cursor: "not-allowed",
    opacity: 0.4
};

var readonly = {
    backgroundColor: "#eee",
    color: "#aaa",
    cursor: "default"
};

exports["default"] = {
    a: {
        color: "#337ab7",
        cursor: "pointer",
        textDecoration: "none",
        ":active": {
            color: "#23527c",
            textDecoration: "underline"
        },
        ":focus": {
            color: "#23527c",
            textDecoration: "underline"
        },
        ":hover": {
            color: "#23527c",
            textDecoration: "underline"
        }
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

    setDisabled: function setDisabled(element) {
        var prefix = _prefixer2["default"]();

        return _utils2["default"].setStatic(prefix(_utils2["default"].merge(element, disabled)));
    },

    setReadonly: function setReadonly(element) {
        var prefix = _prefixer2["default"]();

        return _utils2["default"].setStatic(prefix(_utils2["default"].merge(element, readonly)));
    },

    setStatic: _utils2["default"].setStatic,

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