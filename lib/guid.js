'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @todo import crypto and use getRandomBytes
 */
/***************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA.
 * All rights reserved. This material contains unpublished, copyrighted
 * work including confidential and proprietary information of Rapid7.
 **************************************************************************/

var cryptoObj = _utils2.default.hasWindow() ? window.crypto || window.msCrypto : undefined;
var performance = _utils2.default.hasWindow() ? window.performance : undefined;

var guid = function guid() {
    if (cryptoObj && Uint8Array) {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = cryptoObj.getRandomValues(new Uint8Array(1))[0] % 16 | 0,
                v = c === 'x' ? r : r & 0x3 | 0x8;

            return v.toString(16);
        });
    }

    var d = new Date().getTime();

    if (performance && (0, _isFunction2.default)(performance.now)) {
        d += performance.now();
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;

        d = Math.floor(d / 16);

        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
};

exports.default = guid;
module.exports = exports['default'];