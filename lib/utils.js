'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

var hasDocument = function hasDocument() {
  return typeof document !== 'undefined';
};

var hasWindow = function hasWindow() {
  return typeof window !== 'undefined';
};

exports.hasDocument = hasDocument;
exports.hasWindow = hasWindow;
exports.default = {
  hasDocument: hasDocument,
  hasWindow: hasWindow
};