/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import merge from 'lodash/merge';

import prefix from './prefixer';

const combine = (...styles) => {
    let finalStyle = {};

    styles.forEach((style) => {
        finalStyle = merge({}, finalStyle, prefix(style));
    });

    return finalStyle;
};

export default combine;
