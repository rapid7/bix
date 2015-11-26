/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

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
    input:{
        backgroundColor:variables.backgroundColor,
        border:"1px solid " + variables.borderColor,
        borderRadius:variables.borderRadius,
        boxShadow:"inset 0 0 3px #ccc",
        color:variables.fontColor,
        display:"block",
        lineHeight:"normal",
        outline:0,
        padding:"0.5em 0.6em",
        margin:"0.25em 0",
        width:"100%",
        ":active":{
            boxShadow:"inset 0 0 3px #337ab7"
        },
        ":focus":{
            boxShadow:"inset 0 0 3px #337ab7"
        }
    },
    legend:{
        borderColor:"#e5e5e5",
        borderStyle:"solid",
        borderBottomWidth:1,
        color:variables.fontColor,
        display:"block",
        marginBottom:"0.3em",
        padding:"0.3em 0"
    }
};

forms.inputInline = utils.merge(forms.input, {
    display:"inline-block",
    width:"auto"
});

forms.inputColor = utils.merge(forms.input, {
    cursor:"pointer",
    height:"2.28em",
    padding:"0.2em 0.5em"
});

forms.inputColorInline = utils.merge(forms.inputColor, {
    display:"inline-block",
    width:"auto"
});

forms.select = utils.merge(forms.input, {
    cursor:"pointer",
    height:"2.28em"
});

forms.selectInline = utils.merge(forms.select, {
    display:"inline-block",
    width:"auto"
});

forms.selectMultiple = utils.merge(forms.input, {
    height:"auto"
});

forms.selectMultipleInline = utils.merge(forms.selectMultiple, {
    display:"inline-block",
    width:"auto"
});

forms.textarea = forms.input;
forms.textareaInline = forms.inputInline;

export default forms;