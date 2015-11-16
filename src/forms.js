/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import prefix from "react-prefixer";
import variables from "./variables";
import utils from "./utils";

let forms = {
    fieldset:{
        border:0,
        margin:0,
        padding:"0.75em 0"

    },
    form:{
        display:"block"
    },
    formLabel:{
        display:"block",
        margin:"0.5em 0 0.2em"
    },
    input:prefix({
        backgroundColor:variables.backgroundColor,
        border:"1px solid " + variables.borderColor,
        borderRadius:variables.borderRadius,
        boxShadow:"inset 0 1px 3px #ddd",
        color:variables.fontColor,
        display:"block",
        lineHeight:"normal",
        outline:0,
        padding:"0.5em 0.6em",
        margin:"0.25em 0",
        width:"100%"
    }),
    legend:{
        borderColor:"#e5e5e5",
        borderStyle:"solid",
        borderBottomWidth:1,
        color:variables.fontColor,
        display:"block",
        marginBottom:"0.3em",
        padding:"0.3em 0"
    },
    readOnly:{
        backgroundColor:variables.borderColor,
        color:"#aaa"
    }
};

forms.inputColor = utils.merge(forms.input, {
    padding:"0.2em 0.5em"
});

forms.select = utils.merge(forms.input, {
    height:"2.25em"
});

forms.selectMultiple = utils.merge(forms.input, {
    height:"auto"
});

forms.textarea = forms.input;

export default forms;