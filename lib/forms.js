'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _variables = require('./variables');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

var forms = {
    fieldset: {
        border: 0,
        margin: 0,
        padding: '0.75em 0'

    },
    form: {
        display: 'block'
    },
    formLabel: {
        display: 'block',
        margin: '0.5em 0 0.2em'
    },
    input: {
        backgroundColor: _variables2.default.backgroundColor,
        border: '1px solid ' + _variables2.default.borderColor,
        borderRadius: _variables2.default.borderRadius,
        boxShadow: 'inset 0 0 3px #ccc',
        color: _variables2.default.fontColor,
        display: 'block',
        lineHeight: 'normal',
        outline: 0,
        padding: '0.5em 0.6em',
        margin: '0.25em 0',
        width: '100%',
        ':active': {
            boxShadow: 'inset 0 0 3px #337ab7'
        },
        ':focus': {
            boxShadow: 'inset 0 0 3px #337ab7'
        }
    },
    legend: {
        borderColor: '#e5e5e5',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        color: _variables2.default.fontColor,
        display: 'block',
        marginBottom: '0.3em',
        padding: '0.3em 0'
    }
};

forms.inputInline = (0, _merge2.default)(forms.input, {
    display: 'inline-block',
    width: 'auto'
});

forms.inputColor = (0, _merge2.default)(forms.input, {
    cursor: 'pointer',
    height: '2.28em',
    padding: '0.2em 0.5em'
});

forms.inputColorInline = (0, _merge2.default)(forms.inputColor, {
    display: 'inline-block',
    width: 'auto'
});

forms.select = (0, _merge2.default)(forms.input, {
    cursor: 'pointer',
    height: '2.28em'
});

forms.selectInline = (0, _merge2.default)(forms.select, {
    display: 'inline-block',
    width: 'auto'
});

forms.selectMultiple = (0, _merge2.default)(forms.input, {
    height: 'auto'
});

forms.selectMultipleInline = (0, _merge2.default)(forms.selectMultiple, {
    display: 'inline-block',
    width: 'auto'
});

forms.textarea = forms.input;
forms.textareaInline = forms.inputInline;

exports.default = forms;
module.exports = exports['default'];