/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import Prefixer from "inline-style-prefixer";

import utils from "./utils";

let prefixer = new Prefixer();

export function setPrefixerByUserAgent(userAgent) {
    prefixer = new Prefixer(userAgent);
}

export default function getPrefixer() {
    return utils.bind(prefixer.prefix, this);
};