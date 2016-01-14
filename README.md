# Universe React Flipcard

React flip card component

## Installation

```sh
meteor add universe:react-flipcard
```
## Usage
Components of this package use universe:modules package for import/export.
So you can import it by es6 import api `import FlipCard from '{universe:react-flipcard}`
or by `System.import('universe:react-flipcard').then(function(module){/* your code */})` in regular js.

In CoffeeScript you can use package [universe:modules-for-coffee](https://atmospherejs.com/universe/modules-for-coffee)
      
```
import FlipCard from '{universe:react-flipcard}';
export default React.createClass({
    displayName: 'FlipedCheckbox',

    getDefaultProps () {
        return {
            onChange () {}
        };
    },

    render () {
        return (
            <FlipCard onFlip={this.props.onChange} flipped={this.props.checked}>
                <i className="ui huge icon square outline"/>
                <i className="ui huge icon checkmark box" />
            </FlipCard>
        );
    }
});
```

## License

This package is released under the MIT license.
