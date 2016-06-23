/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import merge from 'lodash/merge';

import variables from './variables';

let dropdowns = {
    dropdownContainer:{
        display:'inline-block',
        position:'relative',
        verticalAlign:'baseline'
    },
    dropdown:{
        backgroundColor:variables.white,
        border:'1px solid #ccc',
        borderRadius:variables.borderRadius,
        boxShadow:'2px 2px 2px #ccc',
        color:variables.fontColor,
        display:'none',
        left:0,
        margin:0,
        padding:0,
        position:'absolute',
        top:'100%',
        zIndex:1000
    },
    dropdownItem:{
        backgroundColor:'inherit',
        cursor:'pointer',
        display:'block',
        margin:0,
        padding:'0.5em 1em',
        transition:'background-color ' + variables.transitionTiming + ' ' + variables.transitionEase + ', color ' +
            variables.transitionTiming + ' ' + variables.transitionEase,
        whiteSpace:'nowrap',
        ':hover':{
            backgroundColor:'#eee'
        }
    }
};

dropdowns.dropdownRight = merge({}, dropdowns.dropdown, {
    left:'auto',
    right:0
});

dropdowns.dropdownActive = merge({}, dropdowns.dropdown, {
    display:'block'
});

dropdowns.dropdownRightActive = merge({}, dropdowns.dropdownRight, {
    display:'block'
});

export default dropdowns;
