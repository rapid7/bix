/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import merge from 'lodash/merge';

import prefix from './prefixer';

export default function(...styles) {
  styles.forEach((style) => {
    Object.keys(style).forEach((property) => {
      const value = style[property];

      if (!isObject(this[property])) {
        this[property] = {};
      }

      this[property] = isFunction(value) ? value : merge(this[property], prefix(value));
    });
  });

  return this;
}
