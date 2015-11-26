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

var disabled = {
    cursor: "not-allowed",
    opacity: 0.4
};

var readonly = {
    backgroundColor: "#eee",
    color: "#aaa",
    cursor:"default"
};

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

        let disabledElement = prefix(utils.merge(element, disabled));

        delete disabledElement[":active"];
        delete disabledElement[":focus"];
        delete disabledElement[":hover"];

        return disabledElement;
    },
    setReadonly(element) {
        const prefix = getPrefixer();

        let readonlyElement = prefix(utils.merge(element, readonly));

        delete readonlyElement[":active"];
        delete readonlyElement[":focus"];
        delete readonlyElement[":hover"];

        return readonlyElement;
    },
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