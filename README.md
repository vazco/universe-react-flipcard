<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe React Flipcard
</h1>

&nbsp;

<h3 align="center">
  -- Abandonware. This package is deprecated! --
</h3>

&nbsp;

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

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe React Flipcard is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**
