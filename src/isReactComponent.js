/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import React from "react";

import utils from "./utils";

export default function(obj) {
    return (utils.isFunction(obj) && Object.getPrototypeOf(obj) === React.Component) ||
        (utils.isObject(obj) && obj._reactInternalInstance);
}