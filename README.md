# bix

bix is a convenient way to manage the styles of your React components. It serves as storage for both application-wide and component-specific styles that you create, and optionally includes defaults to get your application styling started. It also leverages the power of [Radium](https://github.com/FormidableLabs/radium) to give you fully-responsive components.

### Table of Contents
* [Browser support](#browser-support)
* [Basic usage](#basic-usage)
* [Component-specific styles](#component-styles)
* [Combine styles](#combine-styles)
* [Dynamic styles](#dynamic-styles)
* [Creating stylesheets](#creating-stylesheets)
* [Prefixes](#prefixes)
* [normalize.css](#css-normalize)
* [Isomorphic apps](#isomorphic-apps)
* [Defaults](#defaults)
* [Performance tuning](#performance-tuning)
* [TODOS](#todos)

### Browser support

We support current version - 2 for all popular browsers, which translates to the following:
* IE10+
* Chrome
* Firefox
* Safari
* Opera

The methods and a vast majority of the styles will still work just fine in IE9, however there are no polyfills so certain properties (such as flexbox) will not work in those environments. If you are unsure whether or not a property is supported, consult the wonderful resource [caniuse](http://caniuse.com/).

### Basic usage

You can build your styling library for your application by using the *extend* method in the *componentWillMount* function.

```
componentWillMount() {
    bix
        .extend({
            container:{
                backgroundColor:"#ccc"
            },
            ginormousText:{
                fontSize:50
            }
        });
}
```

Usually this method is used for styles used across the entire application, so placing this in your entry JavaScript file (for Webpack / Browserify) or at the top of your closure will ensure that the styles are available to components downstream. 

Also, you can rest easy writing your styles. All styles you store in bix are automatically prefixed using [inline-style-prefixer](https://github.com/rofrischmann/inline-style-prefixer), the same prefixer that Radium uses for it's own autoprefixing, so you can just focus on writing the styles you want.

### Component styles

You can also create component-specific styles that will not pollute your application-wide styles. This is a convenient way to separate your styles by concerns. First, give your component a *displayName* when you create the class:
```
// ES5
React.createClass({
    displayName:"Foo",
    ...
});

// ES2015
class Foo extends React.Component {
    displayName = "Foo";
    ...
}
```
This is required so that bix can identify the component on minification. Then, in your *componentWillMount* function, you can add as many styles to the component as you would like:

```
componentWillMount() {
    bix
        .styles(this,{
            image:{
                borderRadius:4
            },
            greenBackground:{
                backgroundColor:"green"
            }
        });
}
```

Notice that you pass *this* as the first parameter, and the styles object as the second, which associates the styles with this particular component. Then you can retrieve them for use later:

```
render() {
  var styles = bix.styles(this);
  
  return (
    <div style={styles.greenBackground}>
      <img src="some-kitty.png" alt="Cats are cool" style={styles.img} />
    </div>
  );
}
```

### Combine styles

Another thing to note is that you can combine multiple styles to create a new one with the *combine* method. This accepts as many parameters as you'd like. This is especially useful with render-specific styles.

```
render() {
    var styles = bix.styles(this),
        renderStyles = {
            container:bix.combine(bix.container, bix.ginormoustText, {
                backgroundColor:"red"
            });
        };
    
    return <div style={renderStyles.container}>
        Lot's of fun stuff going on with this div!
    </div>;
}
```

### Dynamic styles

Static styles are cool, but what if you want dynamic styles? Leveraging the power of Radium, bix has you covered for:
* :active
* :focus
* :hover
* @media queries

If you just want to create a single element for styling, store it in a variable using the *radium* method:

```
// ReactElement parameter
var Button = bix.radium(<button/>);

// string parameter
var Div = bix.radium("div");

// ReactComponent parameter
var A = bix.radium(MyCustomLink);
```

Then, simply add those styles to your existing styles and they will be automatically applied:

```
componentWillMount() {
    bix
        .styles(this,{
            customButton:{
                backgroundColor:"green",
                ":hover":{
                    backgroundColor:"red"
                }
            }
        });
}

render() {
    return <div style={bix.containerFlex}>
        <Button
            style={bix.customButton}
            type="button">
            I haz de hover
        </Button>
    </div>;
}
```

That said, the far easier and more powerful way to use this is to decorate your entire component class using that same method:

```
//ES5
bix.radium(React.createClass({
    ...
});

//ES2015
class CustomButton extends React.Component {
    ...
}

bix.radium(CustomButton);

//ES2016
@bix.radium
class CustomButton extends React.Component {
    ...
}
```

The decorator used here operates exactly like the Radium decorator, in that it will automatically apply all dynamic styles you set for it and any of the nested sub-components.

One other thing to keep in mind is that any element where you have dynamic styles applied should have either a unique *key* or *ref* attribute value. This is a requirement of Radium, and to aid in this process bix has a guid creator:

```
@bix.radium
class CustomButton extends React.Component {
    static buttonGuid = bix.guid;
    
    render() {
        return <button
            key={CustomButton.buttonGuid}
            style={bix.button}
            type="button">
            I have a unique key!
        </button>;
    }
}
```

Notice that the generated guid is stored, not applied inline ... this is because calling *bix.guid* always returns a unique value, and the key must remain consistent for Radium to make use of it. If you need a deeper level of granularity (like in a map loop, for example), you can build from there:

```
@bix.radium
class CustomButtonGroup extends React.Component {
    static buttonGuid = bix.guid;
    
    render() {
        return <div>
            {this.props.buttons.map((Button, index) => {
                <Button
                    key={CustomButtonGroup.buttonGuid + "_" + index}
                    style={bix.button}
                    type="button">
                    I have a unique key!
                </Button>
            })}
        </div>;
    }
}
```

This is just an example, feel free to use whatever convention you like.

### Creating stylesheets

Just in case you want to create a stylesheet (like if you wanted to have styling on html, for example), you can use the *stylesheet* method to build it. You can build it with the same objects you would build your normal styles with, and give the selectors as the key:

```
componentWillMount() {
    bix.stylesheet(this, {
        "html, body":{
            minHeight:"100vh"
        }
    });
}
```

Your stylesheet will be generated and injected into the document's *head*. Additionally, you can use unitless declarations like you with React (for example, *{width:600}*) and the stylesheet creator will automatically apply the *px* to it when applicable.

### Prefixes

In case you want to prefix a style yourself, bix comes with a *prefix* method that exposes our own internal prefixer.

```
console.log(bix.prefix({
    userSelect:"none"
}));

// {WebkitUserSelect:"none"}
```

This is useful if you are not storing styles or are doing render-specific styles.

### CSS Normalize

Additionally, bix comes with the ability to inject normalize.css into your application using the *normalize* method:
```
bix.normalize();
```

If you are using bix as your sole style manager, or do not already incorporate normalize.css, it is recommended.

### Isomorphic apps

If your application is built server-side but still want to leverage the prefixing capabilities in bix, you can set a custom userAgent with the *setUserAgent* method:
```
bix.setUserAgent("Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:42.0) Gecko/20100101 Firefox/42.0");
```

This will allow your server-side application to prefix based on the userAgent that you pass to it. If you plan to use this method, this needs to run before any other style-related methods (extend, styles, stylesheet, etc) are run.

### Defaults

bix comes with a small library of pre-existing styles that can jumpstart your application. It is not as extensive as something like Bootstrap, but it comes with a solid collection of base styles for items like buttons, form inputs, and grid elements. You can include it in your project by bringing in the file separately, and extending the object with it:
```
import bix from "bix";
import bixDefaults from "bix/lib/defaults";

componentWillMount() {
    bix
        .extend(bixDefaults);
}
```

Or you can just use them straightaway:
```
import bix from "bix";
import bixDefaults from "bix/lib/defaults";

componentWillMount() {
    bix
        .style(this, {
           justOneStyle:bixDefaults.containerFlex
        });
}
```

### Performance tuning

As with anything else, the examples above are enough to get you started, but there are a couple of tips that you can use to make sure that your performance is on point.

First, if you have styles that are dependent on window size and require recalculation on resize, you can add this to your component:
```
componentWillMount() {
    bix.renderOnResize(this);
}
```

This will aide in any re-renders that bix will need to perform. This will also re-render all child components, so keep the number of declarations small and as top-level as possible.

Second, when creating component-specific styles, you can check to see if the component's style already exists before adding them:
```
componentWillMount() {
    if (!bix.styles(this)) {
        bix
            .styles(this, {
                ...
            });
    }
}
```

This prevents you from re-instantiating the same styles every time the component is mounted (which can be many times, for highly-reusable components). Before you ask, the reason this is not default behavior is so that you can override the styles at a later time from when you set them, if you so choose. Keep in mind that if you are also using .renderOnResize() on the component, do not chain renderOnResize inside of this checker.

Third, when creating stylesheets, try to place them outside of the component lifecycle, even if they are specific to a component. Internally bix will prevent you from adding multiple stylesheets with the same ID (it will simply merge them), however unless you want to merge styles with the existing stylesheet you only need it to run once:
```
import bix from "bix";

bix.stylesheet("MyComponent", {
    ".test-class > a":{
        color:"red"
    }
});

class MyComponent extends React.Component {
    ...
}
```

Notice in this usage you pass a string value instead of the *this* object as the first parameter for the naming. You can name it whatever you want, however it is convention to name component-specific stylesheets as the component is named so you can track it.

### TODOS

* Create github.io site that has display of default styles
* Bolster default styles for things like navigation, list groups, etc.
* API updates? Request away!
