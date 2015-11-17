/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import Prefixer from "inline-style-prefixer";

let prefixer = new Prefixer();

export function setPrefixerUserAgent(userAgent) {
    prefixer = new Prefixer(userAgent);
}

export default prefixer.prefix;