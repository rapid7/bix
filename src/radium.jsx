/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import React from "react";
import Radium from "radium";

import isReactComponent from "./isReactComponent";
import {
    default as getPrefixer
} from "./prefixer";

let prefix = getPrefixer();

export default function(Element) {
    if (isReactComponent(Element)) {
        return Radium(Element);
    }

    if (React.isValidElement(Element)) {
        Element = Element.type;
    }

    @Radium
    class RadiumBixElement extends React.Component {
        displayName = "RadiumBixElement";

        constructor(props) {
            super(props);
        }

        render() {
            var {
                children,
                style,
                ...otherProps
                } = this.props;

            style = prefix(style);

            switch (Element) {
                case "area":
                case "base":
                case "br":
                case "col":
                case "hr":
                case "img":
                case "input":
                case "keygen":
                case "link":
                case "menuitem":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                    return <Element
                        style={[style]}
                        {...otherProps}
                    />;
                default:
                    return <Element
                        style={[style]}
                        {...otherProps}>
                        {children}
                    </Element>;
            }
        }
    }

    return RadiumBixElement;
};