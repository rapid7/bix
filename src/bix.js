/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import combine from "./combine";
import extend from "./extend";
import isReactComponent from "./isReactComponent";
import {
    default as getPrefixer,
    setPrefixerByUserAgent
} from "./prefixer";
import radium from "./radium";
import sqwish from "./sqwish";
import unitlessValues from "./unitlessValues";
import utils from "./utils";

// functions to set properties in different ways
const setProperty = {
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

let prefix = getPrefixer().prefix,
    bix = Object.create({
    application(app) {
        setProperty.readonly(this, "$$app", app);

        return this;
    },

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
        let prefixedStyles = {};

        utils.forEach(styles, (style) => {
            prefixedStyles = utils.merge(prefixedStyles, prefix(style));
        });

        return prefixedStyles;
    },

    radium,

    render(component) {
        if (!utils.isUndefined(this.$$app)) {
            this.$$app.forceUpdate();
        } else if (isReactComponent(component)) {
            component.forceUpdate();
        } else {
            utils.forIn(this.$$components, (component) => {
                component.forceUpdate();
            });
        }
    },

    setUserAgent(userAgent) {
        prefix = setPrefixerByUserAgent(userAgent).prefix;
    },

    styles(component, ...styles) {
        if (utils.isUndefined(this.$$app) && this.$$appWarn) {
            console.warn("Warning: You haven't created a root component, which means each component will be managed independently. This is " +
                "unavoidable if you are using a different library as your application base, however if you are using React + Flux then providing " +
                "an application will increase performance of bix and is highly advised. You can do this by running bix.application(this) " +
                "in the componentWillMount() for your root component.");

            this.$$appWarn = false;
        }

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
                    str += key + "{";

                    utils.forIn(style, (value, prop) => {
                        if (utils.isNumber(value) && unitlessValues.indexOf(prop) === -1 && !/px/.test(value)) {
                            style[prop] = value + "px";
                        }
                    });

                    style = prefix(style);

                    utils.forIn(style, (value, prop) => {
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

setProperty.hidden(bix, "$$app");
setProperty.hidden(bix, "$$appWarn", true);
setProperty.readonly(bix, "$$components", {});
setProperty.readonly(bix, "$$stylesheets", {});

export default bix;