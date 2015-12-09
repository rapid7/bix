/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _isReactComponent = require("./isReactComponent");

var _isReactComponent2 = _interopRequireDefault(_isReactComponent);

var _prefixer = require("./prefixer");

var _prefixer2 = _interopRequireDefault(_prefixer);

exports["default"] = function (Element) {
    var prefix = _prefixer2["default"]();

    if (_isReactComponent2["default"](Element)) {
        return _radium2["default"](Element);
    }

    if (_react2["default"].isValidElement(Element)) {
        Element = Element.type;
    }

    var RadiumBixElement = (function (_React$Component) {
        _inherits(RadiumBixElement, _React$Component);

        function RadiumBixElement(props) {
            _classCallCheck(this, _RadiumBixElement);

            _get(Object.getPrototypeOf(_RadiumBixElement.prototype), "constructor", this).call(this, props);
            this.displayName = "RadiumBixElement";
        }

        _createClass(RadiumBixElement, [{
            key: "render",
            value: function render() {
                var _props = this.props;
                var children = _props.children;
                var style = _props.style;
                var userAgent = _props.userAgent;

                var otherProps = _objectWithoutProperties(_props, ["children", "style", "userAgent"]);

                style = prefix(style);

                switch (Element) {
                    case "area":
                    case "base":
                    case "br":
                    case "col":
                    case "hr":
                    case "img":
                    case "input":
                    case "keygen":
                    case "link":
                    case "menuitem":
                    case "meta":
                    case "param":
                    case "source":
                    case "track":
                    case "wbr":
                        return _react2["default"].createElement(Element, _extends({
                            style: [style]
                        }, otherProps));
                    default:
                        return _react2["default"].createElement(
                            Element,
                            _extends({
                                radiumConfig: { userAgent: userAgent },
                                style: [style]
                            }, otherProps),
                            children
                        );
                }
            }
        }]);

        var _RadiumBixElement = RadiumBixElement;
        RadiumBixElement = _radium2["default"](RadiumBixElement) || RadiumBixElement;
        return RadiumBixElement;
    })(_react2["default"].Component);

    return RadiumBixElement;
};

;
module.exports = exports["default"];