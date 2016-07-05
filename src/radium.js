/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

import React, {
    Component,
    isValidElement,
    PropTypes
} from 'react';
import Radium from 'radium';

import isReactComponent from './isReactComponent';
import prefix from './prefixer';

const getConfiguredRadiumElement = (Element, config, props) => {
    @Radium(config)
    class RadiumElement extends Component {
        render() {
            return (
                <Element {...props}/>
            );
        }
    }

    return RadiumElement;
};

const getBixElement = (Element) => {
    if (isReactComponent(Element)) {
        return Radium(Element);
    }

    const ValidElement = isValidElement(Element) ? Element.type : Element;

    @Radium
    class BixElement extends Component {
        static propTypes = {
            children: PropTypes.node,
            style: PropTypes.object,
            userAgent: PropTypes.string
        };

        static defaultProps = {
            style: {}
        };

        render() {
            const {
                children,
                style,
                userAgent,
                ...otherProps
            } = this.props;

            const prefixedStyle = prefix(style);
            const config = {
                userAgent
            };

            let props = {
                style: prefixedStyle,
                ...otherProps
            };

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
                    break;

                default:
                    props = {
                        ...props,
                        children
                    };
            }

            const ConfiguredRadiumElement = getConfiguredRadiumElement(ValidElement, config, props);

            return (
                <ConfiguredRadiumElement/>
            );
        }
    }

    return BixElement;
};

export default getBixElement;
