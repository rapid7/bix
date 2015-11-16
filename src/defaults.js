/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import base from "./base";
import buttons from "./buttons";
import extend from "./extend";
import forms from "./forms";
import grid from "./grid";
import headings from "./headings";
import images from "./images";

const bixDefaults = extend(
    base,
    buttons,
    forms,
    grid,
    headings,
    images
);

export default bixDefaults;