/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import prefix from "./prefix";
import variables from "./variables";

export default {
    imgCircle:prefix({
        borderRadius:"50%"
    }),
    imgResponsive:{
        display:"block",
        height:"auto",
        maxWidth:"100%"
    },
    imgThumbnail:prefix({
        border:"5px solid " + variables.white,
        borderRadius:variables.borderRadius
    })
};