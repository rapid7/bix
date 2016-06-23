'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReactComponent = function isReactComponent(obj) {
  return (0, _isFunction2.default)(obj) && Object.getPrototypeOf(obj) === _react2.default.Component || (0, _isObject2.default)(obj) && obj._reactInternalInstance;
}; /*******************************************************************************
    * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
    * material contains unpublished, copyrighted work including confidential and
    * proprietary information of Rapid7.
    ******************************************************************************/

exports.default = isReactComponent;
module.exports = exports['default'];