'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ceil = require('lodash/ceil');

var _ceil2 = _interopRequireDefault(_ceil);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _variables = require('./variables');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headings = {
    h6: {
        display: 'block',
        fontSize: _variables2.default.fontSize,
        fontWeight: _variables2.default.headingFontWeight,
        margin: _variables2.default.headingMargin
    }
}; /*******************************************************************************
    * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
    * material contains unpublished, copyrighted work including confidential and
    * proprietary information of Rapid7.
    ******************************************************************************/

headings.h5 = (0, _merge2.default)(headings.h6, {
    fontSize: (0, _ceil2.default)(_variables2.default.fontSize * 1.25)
});

headings.h4 = (0, _merge2.default)(headings.h6, {
    fontSize: (0, _ceil2.default)(_variables2.default.fontSize * 1.5)
});

headings.h3 = (0, _merge2.default)(headings.h6, {
    fontSize: (0, _ceil2.default)(_variables2.default.fontSize * 1.8)
});

headings.h2 = (0, _merge2.default)(headings.h6, {
    fontSize: (0, _ceil2.default)(_variables2.default.fontSize * 2.35)
});

headings.h1 = (0, _merge2.default)(headings.h6, {
    fontSize: (0, _ceil2.default)(_variables2.default.fontSize * 2.8)
});

exports.default = headings;
module.exports = exports['default'];