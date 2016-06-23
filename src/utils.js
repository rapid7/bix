/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

const hasDocument = () => {
  return typeof document !== 'undefined';
};

const hasWindow = () => {
  return typeof window !== 'undefined';
};

export default {
    hasDocument,
    hasWindow
};
