/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import isObject from 'lodash/isObject';
import merge from 'lodash/merge';

import prefix from './prefixer';
import variables from './variables';

const DISABLED = {
    cursor: 'not-allowed',
    opacity: 0.4
};

const READONLY = {
    backgroundColor: '#eee',
    color: '#aaa',
    cursor:'default'
};

const setStatic = (element) => {
    if (isObject(element)) {
        if (element[':active']) {
            delete element[':active'];
        }

        if (element[':focus']) {
            delete element[':focus'];
        }

        if (element[':hover']) {
            delete element[':hover'];
        }

        Object.keys(element).forEach((key) => {
            const value = element[key];

            if (/@media/.test(key)) {
                delete element[key];
            } else if (isObject(value)) {
                element[key] = setStatic(element[key]);
            }
        });
    }

    return element;
};

export default {
    a:{
        color:'#337ab7',
        cursor:'pointer',
        textDecoration:'none',
        ':active':{
            color:'#23527c',
            textDecoration:'underline'
        },
        ':focus':{
            color:'#23527c',
            textDecoration:'underline'
        },
        ':hover':{
            color:'#23527c',
            textDecoration:'underline'
        }
    },

    hr:{
        borderColor:'#eee',
        borderStyle:'solid none',
        borderWidth:'1px 0',
        marginBottom:10,
        marginTop:10
    },

    p:{
        margin:'1em 0'
    },

    setDisabled(element) {
        return setStatic(prefix(merge(element, DISABLED)));
    },

    setReadonly(element) {
        return setStatic(prefix(merge(element, READONLY)));
    },

    setStatic,

    wrapAll:{
        backgroundColor:variables.backgroundColor,
        color:variables.fontColor,
        fontFamily:'Helvetica Neue, Helvetica, Arial, sans-serif',
        fontSize:variables.fontSize,
        fontWeight:variables.fontWeight,
        height:'auto',
        minHeight:'100vh'
    }
};
