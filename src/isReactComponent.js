/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import React from 'react';

const isReactComponent = (obj) => {
    return (isFunction(obj) && Object.getPrototypeOf(obj) === React.Component) || (isObject(obj) && obj._reactInternalInstance);
};

export default isReactComponent;
