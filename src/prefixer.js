/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import Prefixer from "inline-style-prefixer";

import utils from "./utils";

let prefixer = new Prefixer(),
    properties = [];

function populatePrefixedProperties() {
    let prefixedProperties = [];

    utils.forIn(prefixer._requiresPrefix, (requiresPrefix, property) => {
        if (requiresPrefix) {
            prefixedProperties[prefixedProperties.length] = property;
        }
    });

    return prefixedProperties;
}

properties = populatePrefixedProperties();

export function getCssPrefix() {
    return prefixer.cssPrefix;
}

export function getJsPrefix() {
    return prefixer.jsPrefix;
}

export function getPrefixedProperties() {
    return properties;
}

export function setPrefixerByUserAgent(userAgent) {
    prefixer = new Prefixer(userAgent);
    properties = populatePrefixedProperties();
}

export default function getPrefixer() {
    return utils.bind(prefixer.prefix, this);
};
