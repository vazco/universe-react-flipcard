# Universe React Flipcard

React flip card component

## Installation

```sh
meteor add universe:react-flipcard
```
## Usage
   
```
import FlipCard from 'meteor/universe:react-flipcard';
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
