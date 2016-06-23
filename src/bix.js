/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import bind from 'lodash/bind';
import isNumber from 'lodash/isNumber';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import isUndefined from 'lodash/isUndefined';
import kebabCase from 'lodash/kebabCase';
import merge from 'lodash/merge';
import mincss from 'min.css';

import combine from './combine';
import extend from './extend';
import isReactComponent from './isReactComponent';
import guid from './guid';
import normalize from './normalize';
import prefix, {
    getJsPrefix,
    getPrefixedProperties,
    setPrefixerByUserAgent
} from './prefixer';
import radium from './radium';
import unitlessValues from './unitlessValues';
import {
    hasDocument,
    hasWindow
} from './utils';

const OBJECT_KEYS = Object.keys;

// functions to set properties in different ways
const NO_PX_ADDED = /(px|vh|vw|em|[%]|ex|cm|mm|in|pt|pc|ch|rem|vmin|vmax)/;

const setReadOnlyProperty = (object, property, value) => {
    Object.defineProperty(object, property, {
        configurable: false,
        enumerable: false,
        value: value,
        writable: false
    });
};

let bixPrototype = {
        combine,

        extend,

        normalize(...args) {
            if (!args.length || args[0] !== false) {
                this.stylesheet('normalize-css', normalize);

                this.stylesheet('bix-defaults', {
                    '*, *:after, *:before':{
                        boxSizing:'border-box',
                        position:'relative'
                    }
                });
            }

            return this;
        },

        prefix(...styles) {
            let prefixedStyles = {};

            styles.forEach((style) => {
                prefixedStyles = merge(prefixedStyles, prefix(style));
            });

            return prefixedStyles;
        },

        radium,

        render(component) {
            if (isReactComponent(component)) {
                component.forceUpdate();
            } else {
                for (let componentObj of this.$$components) {
                    if (componentObj.renderOnResize && isReactComponent(componentObj.component)) {
                        componentObj.component.forceUpdate();
                    }
                }
            }
        },

        renderOnResize(component) {
            if (isReactComponent(component)) {
                const name = component.displayName;

                if (this.$$components[name]) {
                    this.$$components[name].renderOnResize = true;
                    this.$$components[name].component = component;
                } else {
                    this.$$components[name] = {
                        component,
                        renderOnResize:true,
                        styles:{}
                    };
                }
            }

            return this;
        },

        setUserAgent(userAgent) {
            setPrefixerByUserAgent(userAgent);

            return this;
        },

        styles(component, ...styles) {
            if (isUndefined(component)) {
                /* eslint-disable no-console */
                console.error('Error: no component has been specified.');
                /* eslint-enable */

                return this;
            }

            if (isString(component)) {
                return this.$$components[component] && this.$$components[component].styles;
            }

            if (isObject(component)) {
                if (isUndefined(component._reactInternalInstance)) {
                    /* eslint-disable no-console */
                    console.error('Error: object passed is not a React constructor.');
                    /* eslint-enable */

                    return this;
                }

                const name = component.displayName;

                if (isUndefined(name)) {
                    /* eslint-disable no-console */
                    console.error('Error: you need to specify a displayName property on your React class if you want to assign styles to bix.');
                    /* eslint-enable */

                    return this;
                }

                if (!styles.length) {
                    return this.$$components[name] && this.$$components[name].styles;
                }

                if (isUndefined(this.$$components[name])) {
                    this.$$components[name] = {};
                }

                this.$$components[name].component = component;

                if (isUndefined(this.$$components[name].styles)) {
                    this.$$components[name].styles = {};
                }

                styles.forEach((style) => {
                    this.$$components[name].styles = combine(this.$$components[name].styles, style);
                });
            }

            return this;
        },

        stylesheet(id, ...styles) {
            if (hasDocument()) {
                const prefixedProperties = getPrefixedProperties();
                const jsPrefix = getJsPrefix();

                if (!isString(id) && isObject(id)) {
                    if (id.displayName) {
                        id = id.displayName;
                    } else {
                        /* eslint-disable no-console */
                        console.error('Error: the object you passed needs to have a displayName property to create a stylesheet.');
                        /* eslint-enable */

                        return this;
                    }
                } else {
                    if (isUndefined(id)) {
                        /* eslint-disable no-console */
                        console.error('Error: generated stylesheets need to be given an id.');
                        /* eslint-enable */

                        return this;
                    } else if (!isString(id)) {
                        /* eslint-disable no-console */
                        console.error('Error: first parameter needs to be either a string or a React class.');
                        /* eslint-enable */

                        return this;
                    }
                }

                let currentStyles = {},
                    styleTag = document.createElement('style'),
                    str = '';

                if (isObject(id)) {
                    id = id.displayName;

                    if (isUndefined(id)) {
                        /* eslint-disable no-console */
                        console.error('Error: first parameter needs to be either a string or a React class.');
                        /* eslint-enable */

                        return this;
                    }
                }

                if (!isUndefined(this.$$stylesheets[id])) {
                    styleTag = document.getElementById(id);
                    currentStyles = this.$$stylesheets[id];
                }

                styleTag.type = 'text/css';
                styleTag.id = id;

                styles.forEach((block) => {
                    if (isObject(block)) {
                        OBJECT_KEYS(block).forEach((key) => {
                            const style = block[key];

                            let cleanStyle = {};

                            str += key + '{';

                            OBJECT_KEYS(style).forEach((prop) => {
                                let value = style[prop];

                                if (!NO_PX_ADDED.test(value) && isNumber(value) && unitlessValues.indexOf(prop) === -1) {
                                    value = `${value}px`;
                                }

                                if (prefixedProperties.indexOf(prop) !== -1) {
                                    prop = jsPrefix + prop.charAt(0).toUpperCase() + prop.slice(1);
                                }

                                cleanStyle[prop] = value;
                            });

                            OBJECT_KEYS(cleanStyle).forEach((prop) => {
                                str += `-${kebabCase(prop)}:${cleanStyle[prop]};`;
                            });

                            str += '}';
                        });

                        currentStyles = combine(currentStyles, block);
                    }
                });

                this.$$stylesheets[id] = currentStyles;
                
                styleTag.textContent = mincss(str);

                document.head.appendChild(styleTag);

                return this;
            }
        }
    };

Object.defineProperty(bixPrototype, 'guid', {
    get() {
        const newGuid = guid();

        if (this.$$guids.indexOf(newGuid) === -1) {
            this.$$guids.push(newGuid);
            return newGuid;
        }

        return this.guid;
    }
});

let bix = Object.create(bixPrototype);

function delayRenderOnResize() {
    if (hasWindow()) {
        window.setTimeout(bind(bix.render, bix), 1);
    }
}

if (hasWindow()) {
    setPrefixerByUserAgent();

    window.addEventListener('resize', delayRenderOnResize);
}

setReadOnlyProperty(bix, '$$components', {});
setReadOnlyProperty(bix, '$$guids', []);
setReadOnlyProperty(bix, '$$stylesheets', {});

export default bix;
