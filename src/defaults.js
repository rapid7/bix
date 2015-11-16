/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import base from "./base";
import buttons from "./buttons";
import forms from "./forms";
import grid from "./grid";
import headings from "./headings";
import images from "./images";
import utils from "./utils";

const bixDefaults = utils.merge(
    base,
    buttons,
    forms,
    grid,
    headings,
    images
);

export default bixDefaults;