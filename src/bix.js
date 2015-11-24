/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import combine from "./combine";
import extend from "./extend";
import isReactComponent from "./isReactComponent";
import {
    getJsPrefix,
    getPrefixedProperties,
    default as getPrefixer,
    setPrefixerByUserAgent
} from "./prefixer";
import radium from "./radium";
import sqwish from "./sqwish";
import unitlessValues from "./unitlessValues";
import utils from "./utils";

// functions to set properties in different ways
const noPxAdded = /(px|vh|vw|em|[%]|ex|cm|mm|in|pt|pc|ch|rem|vmin|vmax)/,
    setProperty = {
    hidden(obj, prop, value) {
        Object.defineProperty(obj,prop,{
            configurable: false,
            enumerable: false,
            value: value,
            writable: true
        });
    },

    permanent(obj, prop, value) {
        Object.defineProperty(obj,prop,{
            configurable: false,
            enumerable: true,
            value: value,
            writable: true
        });
    },

    readonly(obj, prop, value) {
        Object.defineProperty(obj,prop,{
            configurable: false,
            enumerable: false,
            value: value,
            writable: false
        });
    }
};

let bix = Object.create({
    combine,

    extend,

    normalize(...args) {
        if (!args.length || args[0] !== false) {
            require("normalize.css");

            this.stylesheet("bix-defaults", {
                "*, *:after, *:before":{
                    boxSizing:"border-box",
                    position:"relative"
                }
            });
        }

        return this;
    },

    prefix(...styles) {
        let prefix = getPrefixer(),
            prefixedStyles = {};

        utils.forEach(styles, (style) => {
            prefixedStyles = utils.merge(prefixedStyles, prefix(style));
        });

        return prefixedStyles;
    },

    radium,

    render(component) {
        if (isReactComponent(component)) {
            component.forceUpdate();
        } else {
            utils.forIn(this.$$components, (componentObj) => {
                if (componentObj.renderOnResize) {
                    componentObj.component.forceUpdate();
                }
            });
        }
    },

    renderOnResize(component) {
        if (isReactComponent(component)) {
            const name = component.displayName;

            if (this.$$components[name]) {
                this.$$components[name].renderOnResize = true;
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
        if (utils.isUndefined(component)) {
            console.error("Error: no component has been specified.");
            return this;
        }

        if (utils.isString(component)) {
            return this.$$components[component] && this.$$components[component].styles;
        }

        if (utils.isObject(component)) {
            if (utils.isUndefined(component._reactInternalInstance)) {
                console.error("Error: object passed is not a React constructor.");
                return this;
            }

            let name = component.displayName;

            if (utils.isUndefined(name)) {
                console.error("Error: you need to specify a displayName property on your React class if you want to assign styles to bix.");
                return this;
            }

            if (!styles.length) {
                return this.$$components[name] && this.$$components[name].styles;
            }

            if (utils.isUndefined(this.$$components[name])) {
                this.$$components[name] = {};
            }

            this.$$components[name].component = component;

            if (utils.isUndefined(this.$$components[name].styles)) {
                this.$$components[name].styles = {};
            }

            utils.forEach(styles, (style) => {
                this.$$components[name].styles = combine(this.$$components[name].styles, style);
            });
        }

        return this;
    },

    stylesheet(id, ...styles) {
        let prefixedProperties = getPrefixedProperties(),
            jsPrefix = getJsPrefix();

        if (!utils.isString(id) && utils.isObject(id)) {
            if (id.displayName) {
                id = id.displayName;
            } else {
                console.error("Error: the object you passed needs to have a displayName property to create a stylesheet.");
                return this;
            }
        } else {
            if (utils.isUndefined(id)) {
                console.error("Error: generated stylesheets need to be given an id.");
                return this;
            } else if (!utils.isString(id)) {
                console.error("Error: first parameter needs to be either a string or a React class.");
                return this;
            }
        }

        let currentStyles = {},
            styleTag = document.createElement("style"),
            str = "";

        if (utils.isObject(id)) {
            id = id.displayName;

            if (utils.isUndefined(id)) {
                console.error("Error: first parameter needs to be either a string or a React class.");
                return this;
            }
        }

        if (!utils.isUndefined(this.$$stylesheets[id])) {
            styleTag = document.getElementById(id);
            currentStyles = this.$$stylesheets[id];
        }

        styleTag.type = "text/css";
        styleTag.id = id;

        utils.forEach(styles, (block) => {
            if (utils.isObject(block)) {
                utils.forIn(block, (style, key) => {
                    let cleanStyle = {};

                    str += key + "{";

                    utils.forIn(style, (value, prop) => {
                        if (!noPxAdded.test(value) && utils.isNumber(value) && unitlessValues.indexOf(prop) === -1) {
                            value = value + "px";
                        }

                        if (prefixedProperties.indexOf(prop) !== -1) {
                            prop = jsPrefix + prop.charAt(0).toUpperCase() + prop.slice(1);
                        }

                        cleanStyle[prop] = value;
                    });

                    utils.forIn(cleanStyle, (value, prop) => {
                        str += utils.kebabCase(prop) + ":" + value + ";";
                    });

                    str += "}";
                });

                currentStyles = combine(currentStyles, block);
            }
        });

        this.$$stylesheets[id] = currentStyles;
        styleTag.textContent = sqwish(str);

        document.head.appendChild(styleTag);

        return this;
    }
});

setProperty.readonly(bix, "$$components", {});
setProperty.readonly(bix, "$$stylesheets", {});

export default bix;
