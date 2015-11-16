/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import variables from "./variables";

export default {
    a:{
        color:"blue",
        cursor:"pointer",
        textDecoration:"underline"
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