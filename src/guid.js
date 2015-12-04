/***************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA.
 * All rights reserved. This material contains unpublished, copyrighted
 * work including confidential and proprietary information of Rapid7.
 **************************************************************************/

import utils from "./utils";

const cryptoObj = window.crypto || window.msCrypto;

export default function guid() {
    if (cryptoObj && window.Uint8Array) {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            let r = cryptoObj.getRandomValues(new Uint8Array(1))[0] % 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);

            return v.toString(16);
        });
    }

    let d = new Date().getTime();

    if (window.performance && utils.isFunction(window.performance.now)) {
        d += window.performance.now();
    }

    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        let r = (d + Math.random() * 16) % 16 | 0;

        d = Math.floor(d / 16);

        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
