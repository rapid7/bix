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

var cryptoObj = window.crypto || window.msCrypto;

function guid() {
    if (cryptoObj && window.Uint8Array) {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = cryptoObj.getRandomValues(new Uint8Array(1))[0] % 16 | 0,
                v = c === "x" ? r : r & 0x3 | 0x8;

            return v.toString(16);
        });
    }

    var d = new Date().getTime();

    if (window.performance && _utils2["default"].isFunction(window.performance.now)) {
        d += window.performance.now();
    }

    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;

        d = Math.floor(d / 16);

        return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
    });
}

module.exports = exports["default"];