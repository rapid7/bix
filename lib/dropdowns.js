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

var dropdowns = {
    dropdownContainer: {
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'baseline'
    },
    dropdown: {
        backgroundColor: _variables2.default.white,
        border: '1px solid #ccc',
        borderRadius: _variables2.default.borderRadius,
        boxShadow: '2px 2px 2px #ccc',
        color: _variables2.default.fontColor,
        display: 'none',
        left: 0,
        margin: 0,
        padding: 0,
        position: 'absolute',
        top: '100%',
        zIndex: 1000
    },
    dropdownItem: {
        backgroundColor: 'inherit',
        cursor: 'pointer',
        display: 'block',
        margin: 0,
        padding: '0.5em 1em',
        transition: 'background-color ' + _variables2.default.transitionTiming + ' ' + _variables2.default.transitionEase + ', color ' + _variables2.default.transitionTiming + ' ' + _variables2.default.transitionEase,
        whiteSpace: 'nowrap',
        ':hover': {
            backgroundColor: '#eee'
        }
    }
};

dropdowns.dropdownRight = (0, _merge2.default)({}, dropdowns.dropdown, {
    left: 'auto',
    right: 0
});

dropdowns.dropdownActive = (0, _merge2.default)({}, dropdowns.dropdown, {
    display: 'block'
});

dropdowns.dropdownRightActive = (0, _merge2.default)({}, dropdowns.dropdownRight, {
    display: 'block'
});

exports.default = dropdowns;
module.exports = exports['default'];