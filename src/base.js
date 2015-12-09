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

const DISABLED = {
    cursor: "not-allowed",
    opacity: 0.4
};

const READONLY = {
    backgroundColor: "#eee",
    color: "#aaa",
    cursor:"default"
};

function setStatic(element) {
    if (utils.isObject(element)) {
        if (element[":active"]) {
            delete element[":active"];
        }

        if (element[":focus"]) {
            delete element[":focus"];
        }

        if (element[":hover"]) {
            delete element[":hover"];
        }

        utils.forIn(element, (value, key) => {
            if (/@media/.test(key)) {
                delete element[key];
            } else if (utils.isObject(value)) {
                element[key] = setStatic(element[key]);
            }
        });
    }

    return element;
}

export default {
    a:{
        color:"#337ab7",
        cursor:"pointer",
        textDecoration:"none",
        ":active":{
            color:"#23527c",
            textDecoration:"underline"
        },
        ":focus":{
            color:"#23527c",
            textDecoration:"underline"
        },
        ":hover":{
            color:"#23527c",
            textDecoration:"underline"
        }
    },

    hr:{
        borderColor:"#eee",
        borderStyle:"solid none",
        borderWidth:"1px 0",
        marginBottom:10,
        marginTop:10
    },

    p:{
        margin:"1em 0"
    },

    setDisabled(element) {
        const prefix = getPrefixer();

        return setStatic(prefix(utils.merge(element, DISABLED)));
    },

    setReadonly(element) {
        const prefix = getPrefixer();

        return setStatic(prefix(utils.merge(element, READONLY)));
    },

    setStatic,

    wrapAll:{
        backgroundColor:variables.backgroundColor,
        color:variables.fontColor,
        fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize:variables.fontSize,
        fontWeight:variables.fontWeight,
        height:"auto",
        minHeight:"100vh"
    }
};