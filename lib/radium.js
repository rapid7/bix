'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (Element) {
    var _class;

    if ((0, _isReactComponent2.default)(Element)) {
        return (0, _radium2.default)(Element);
    }

    var ValidElement = (0, _react.isValidElement)(Element) ? Element.type : Element;

    var RadiumBixElement = (0, _radium2.default)(_class = function (_Component) {
        _inherits(RadiumBixElement, _Component);

        function RadiumBixElement() {
            _classCallCheck(this, RadiumBixElement);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(RadiumBixElement).apply(this, arguments));
        }

        _createClass(RadiumBixElement, [{
            key: 'render',
            value: function render() {
                var _props = this.props;
                var children = _props.children;
                var style = _props.style;
                var userAgent = _props.userAgent;

                var otherProps = _objectWithoutProperties(_props, ['children', 'style', 'userAgent']);

                var prefixedStyle = (0, _prefixer2.default)(style);

                switch (ValidElement) {
                    case 'area':
                    case 'base':
                    case 'br':
                    case 'col':
                    case 'hr':
                    case 'img':
                    case 'input':
                    case 'keygen':
                    case 'link':
                    case 'menuitem':
                    case 'meta':
                    case 'param':
                    case 'source':
                    case 'track':
                    case 'wbr':
                        return _react2.default.createElement(ValidElement, _extends({
                            radiumConfig: { userAgent: userAgent },
                            style: prefixedStyle
                        }, otherProps));

                    default:
                        return _react2.default.createElement(
                            ValidElement,
                            _extends({
                                radiumConfig: { userAgent: userAgent },
                                style: prefixedStyle
                            }, otherProps),
                            children
                        );
                }
            }
        }]);

        return RadiumBixElement;
    }(_react.Component)) || _class;

    return RadiumBixElement;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _isReactComponent = require('./isReactComponent');

var _isReactComponent2 = _interopRequireDefault(_isReactComponent);

var _prefixer = require('./prefixer');

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*******************************************************************************
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * material contains unpublished, copyrighted work including confidential and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * proprietary information of Rapid7.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ******************************************************************************/

;
module.exports = exports['default'];