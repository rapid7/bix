/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import React, {
    Component,
    isValidElement
} from 'react';
import Radium from 'radium';

import isReactComponent from './isReactComponent';
import prefix from './prefixer';

export default function(Element) {
    if (isReactComponent(Element)) {
        return Radium(Element);
    }

    const ValidElement = isValidElement(Element) ? Element.type : Element;

    @Radium
    class RadiumBixElement extends Component {
        render() {
            const {
                children,
                style,
                userAgent,
                ...otherProps
            } = this.props;

            const prefixedStyle = prefix(style);

            switch (ValidElement) {
                case 'area':
                case 'base':
                case 'br':
                case 'col':
                case 'hr':
                case 'img':
                case 'input':
                case 'keygen':
                case 'link':
                case 'menuitem':
                case 'meta':
                case 'param':
                case 'source':
                case 'track':
                case 'wbr':
                    return (
                        <ValidElement
                            radiumConfig={{userAgent}}
                            style={prefixedStyle}
                            {...otherProps}
                        />
                    );

                default:
                    return (
                        <ValidElement
                            radiumConfig={{userAgent}}
                            style={prefixedStyle}
                            {...otherProps}
                        >
                            {children}
                        </ValidElement>
                    );
            }
        }
    }

    return RadiumBixElement;
};
