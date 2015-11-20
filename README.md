#Universe React Flipcard

React flip card component

## Installation

```sh
meteor add universe:react-flipcard
```
## Examples

         
```
import FlipCard from '{universe:react-flipcard}';
export default React.createClass({
    displayName: 'FlipedCheckbox',
    getInitialState() {
        return {
            isFlipped: false
        };
    },
    handleOnClick() {
        if (this.state.isFlipped) {
            return this.setState({isFlipped: false});
        }
        this.setState({isFlipped: true});
    },
    render () {
        return (
            <FlipCard 
                {/* horizontal is default */}
              type="vertical" 
              onClick={this.handleOnClick}
              {/* current state */}
              flipped={true}
              onFocus={()=>console.log} 
              onFlip={()=>console.log}
              >
                <i className="ui huge icon checkmark box" />
                <i className="ui huge icon square outline"/>
            </FlipCard>
        );
    }
});
```

## License

This package is released under the MIT license.
