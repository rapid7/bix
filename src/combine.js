/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import {
    default as getPrefixer
} from "./prefixer";
import utils from "./utils";

let prefix = getPrefixer().prefix;

export default function(...styles) {
    let finalStyle = {};

    utils.forEach(styles, (style) => {
        finalStyle = utils.merge(finalStyle, prefix(style));
    });

    return finalStyle;
}