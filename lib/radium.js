/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _objectWithoutProperties = require("babel-runtime/helpers/object-without-properties")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _isReactComponent = require("./isReactComponent");

var _isReactComponent2 = _interopRequireDefault(_isReactComponent);

var _prefix = require("./prefix");

var _prefix2 = _interopRequireDefault(_prefix);

exports["default"] = function (Element) {
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

                var otherProps = _objectWithoutProperties(_props, ["children", "style"]);

                style = _prefix2["default"](style);

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