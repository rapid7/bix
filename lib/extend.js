'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  styles.forEach(function (style) {
    Object.keys(style).forEach(function (property) {
      var value = style[property];

      if (!(0, _isObject2.default)(_this[property])) {
        _this[property] = {};
      }

      _this[property] = (0, _isFunction2.default)(value) ? value : (0, _merge2.default)({}, _this[property], (0, _prefixer2.default)(value));
    });
  });

  return this;
};

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _prefixer = require('./prefixer');

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default']; /*******************************************************************************
                                      * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
                                      * material contains unpublished, copyrighted work including confidential and
                                      * proprietary information of Rapid7.
                                      ******************************************************************************/