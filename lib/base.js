'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _prefixer = require('./prefixer');

var _prefixer2 = _interopRequireDefault(_prefixer);

var _variables = require('./variables');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

var DISABLED = {
    cursor: 'not-allowed',
    opacity: 0.4
};

var READONLY = {
    backgroundColor: '#eee',
    color: '#aaa',
    cursor: 'default'
};

var setStatic = function setStatic(element) {
    if ((0, _isObject2.default)(element)) {
        if (element[':active']) {
            delete element[':active'];
        }

        if (element[':focus']) {
            delete element[':focus'];
        }

        if (element[':hover']) {
            delete element[':hover'];
        }

        Object.keys(element).forEach(function (key) {
            var value = element[key];

            if (/@media/.test(key)) {
                delete element[key];
            } else if ((0, _isObject2.default)(value)) {
                element[key] = setStatic(element[key]);
            }
        });
    }

    return element;
};

exports.default = {
    a: {
        color: '#337ab7',
        cursor: 'pointer',
        textDecoration: 'none',
        ':active': {
            color: '#23527c',
            textDecoration: 'underline'
        },
        ':focus': {
            color: '#23527c',
            textDecoration: 'underline'
        },
        ':hover': {
            color: '#23527c',
            textDecoration: 'underline'
        }
    },

    hr: {
        borderColor: '#eee',
        borderStyle: 'solid none',
        borderWidth: '1px 0',
        marginBottom: 10,
        marginTop: 10
    },

    p: {
        margin: '1em 0'
    },

    setDisabled: function setDisabled(element) {
        return setStatic((0, _prefixer2.default)((0, _merge2.default)({}, element, DISABLED)));
    },
    setReadonly: function setReadonly(element) {
        return setStatic((0, _prefixer2.default)((0, _merge2.default)({}, element, READONLY)));
    },


    setStatic: setStatic,

    wrapAll: {
        backgroundColor: _variables2.default.backgroundColor,
        color: _variables2.default.fontColor,
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        fontSize: _variables2.default.fontSize,
        fontWeight: _variables2.default.fontWeight,
        height: 'auto',
        minHeight: '100vh'
    }
};
module.exports = exports['default'];