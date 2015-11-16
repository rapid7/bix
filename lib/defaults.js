/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _base = require("./base");

var _base2 = _interopRequireDefault(_base);

var _buttons = require("./buttons");

var _buttons2 = _interopRequireDefault(_buttons);

var _forms = require("./forms");

var _forms2 = _interopRequireDefault(_forms);

var _grid = require("./grid");

var _grid2 = _interopRequireDefault(_grid);

var _headings = require("./headings");

var _headings2 = _interopRequireDefault(_headings);

var _images = require("./images");

var _images2 = _interopRequireDefault(_images);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var bixDefaults = _utils2["default"].merge(_base2["default"], _buttons2["default"], _forms2["default"], _grid2["default"], _headings2["default"], _images2["default"]);

exports["default"] = bixDefaults;
module.exports = exports["default"];