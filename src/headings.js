/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import ceil from 'lodash/ceil';
import merge from 'lodash/merge';

import variables from './variables';

let headings = {
    h6:{
        display: 'block',
        fontSize: variables.fontSize,
        fontWeight: variables.headingFontWeight,
        margin: variables.headingMargin
    }
};

headings.h5 = merge({}, headings.h6, {
    fontSize: ceil(variables.fontSize * 1.25)
});

headings.h4 = merge({}, headings.h6, {
    fontSize: ceil(variables.fontSize * 1.5)
});

headings.h3 = merge({}, headings.h6, {
    fontSize: ceil(variables.fontSize * 1.8)
});

headings.h2 = merge({}, headings.h6, {
    fontSize: ceil(variables.fontSize * 2.35)
});

headings.h1 = merge({}, headings.h6, {
    fontSize: ceil(variables.fontSize * 2.8)
});

export default headings;
