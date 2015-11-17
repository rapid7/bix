/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;
exports.setPrefixerUserAgent = setPrefixerUserAgent;

var _inlineStylePrefixer = require("inline-style-prefixer");

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var prefixer = new _inlineStylePrefixer2["default"]();

function setPrefixerUserAgent(userAgent) {
  prefixer = new _inlineStylePrefixer2["default"](userAgent);
}

exports["default"] = prefixer.prefix;