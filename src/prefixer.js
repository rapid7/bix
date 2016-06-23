/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import Prefixer from 'inline-style-prefixer';

let properties = [],
    prefixer;

const populatePrefixedProperties = () => {
    let prefixedProperties = [];

    Object.keys(prefixer._requiresPrefix).forEach((property) => {
        const requiresPrefix = prefixer._requiresPrefix[property];

        if (requiresPrefix) {
            prefixedProperties[prefixedProperties.length] = property;
        }
    });

    return prefixedProperties;
};

export const getCssPrefix = () => {
    return prefixer.cssPrefix;
};

export const getJsPrefix = () => {
    return prefixer.jsPrefix;
};

export const getPrefixedProperties = () => {
    return properties;
};

export const setPrefixerByUserAgent = (userAgent) => {
    prefixer = new Prefixer({
        userAgent
    });

    properties = populatePrefixedProperties();
};

const prefix = (value) => {
    return prefixer.prefix(value);
};

export default prefix;
