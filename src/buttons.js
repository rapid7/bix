/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import {
    default as getPrefixer
} from "./prefixer";
import utils from "./utils";
import variables from "./variables";

let buttons = {
    button:{
        border:"1px solid " + variables.borderColor,
        backgroundColor:variables.backgroundColor,
        borderRadius:variables.borderRadius,
        color:variables.fontColor,
        cursor:"pointer",
        display:"inline-block",
        fontFamily:"inherit",
        fontSize:12,
        lineHeight:"normal",
        outline:0,
        padding:"0.5em 1em",
        textAlign:"center",
        textDecoration:"none",
        textTransform:"uppercase",
        transition:"background-color " + variables.transitionTiming + " " + variables.transitionEase + ", color " +
        variables.transitionTiming + " " + variables.transitionEase,
        userSelect:"none",
        verticalAlign:"middle",
        whiteSpace:"nowrap",
        ":active":{
            backgroundColor:"#d5d5d5"
        },
        ":focus":{
            backgroundColor:"#d5d5d5"
        },
        ":hover":{
            backgroundColor:"#d5d5d5"
        }
    },
    buttonDisabled:{
        border:0,
        cursor:"not-allowed",
        opacity:0.4
    }
};

buttons.disableButton = function(button) {
    let prefix = getPrefixer();

    return prefix(utils.merge(button, buttons.buttonDisabled, {
        ":active":{
            backgroundColor:button.backgroundColor,
            color:button.color
        },
        ":focus":{
            backgroundColor:button.backgroundColor,
            color:button.color
        },
        ":hover":{
            backgroundColor:button.backgroundColor,
            color:button.color
        }
    }));
};

export default buttons;