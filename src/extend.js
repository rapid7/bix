/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import {
    default as getPrefixer
} from "./prefixer";
import utils from "./utils";

export default function(...styles) {
    let prefix = getPrefixer();

    utils.forEach(styles, (style) => {
        utils.forIn(style, (value, prop) => {
            if (!utils.isObject(this[prop])) {
                this[prop] = {};
            }

            this[prop] = utils.isFunction(value) ? value : utils.merge(this[prop], prefix(value));
        });
    });

    return this;
}