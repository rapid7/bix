/***************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA.
 * All rights reserved. This material contains unpublished, copyrighted
 * work including confidential and proprietary information of Rapid7.
 **************************************************************************/

"use strict";

exports.__esModule = true;
exports["default"] = guid;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

/**
 *
 * @todo import crypto and use getRandomBytes
 */
var getRandomValues = _utils2["default"].hasWindow() ? (window.crypto || window.msCrypto).getRandomValues : undefined;
var performance = _utils2["default"].hasWindow() ? window.performance : undefined;

function guid() {
    if (getRandomValues && Uint8Array) {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = getRandomValues(new Uint8Array(1))[0] % 16 | 0,
                v = c === "x" ? r : r & 0x3 | 0x8;

            return v.toString(16);
        });
    }

    var d = new Date().getTime();

    if (performance && _utils2["default"].isFunction(performance.now)) {
        d += window.performance.now();
    }

    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;

        d = Math.floor(d / 16);

        return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
    });
}

module.exports = exports["default"];