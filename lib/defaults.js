'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _buttons = require('./buttons');

var _buttons2 = _interopRequireDefault(_buttons);

var _dropdowns = require('./dropdowns');

var _dropdowns2 = _interopRequireDefault(_dropdowns);

var _forms = require('./forms');

var _forms2 = _interopRequireDefault(_forms);

var _grid = require('./grid');

var _grid2 = _interopRequireDefault(_grid);

var _headings = require('./headings');

var _headings2 = _interopRequireDefault(_headings);

var _images = require('./images');

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

var bixDefaults = (0, _merge2.default)(_base2.default, _buttons2.default, _dropdowns2.default, _forms2.default, _grid2.default, _headings2.default, _images2.default);

exports.default = bixDefaults;
module.exports = exports['default'];