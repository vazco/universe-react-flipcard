import {classNames} from '{universe:utilities-react}';
const PropTypes = React.PropTypes;

export default React.createClass({
    displayName: 'ReactFlipCard',

    propTypes: {
        type: PropTypes.string,
        flipped: PropTypes.bool,
        disabled: PropTypes.bool,
        onFlip: PropTypes.func,
        onClick: PropTypes.func,
        children(props, propName, componentName) {
            const prop = props[propName];

            if (React.Children.count(prop) !== 2) {
                return new Error(
                    '`' + componentName + '` ' +
                    'should have only two children. ' +
                    'The first child is the front of the card. ' +
                    'The second child is the back of the card.'
                );
            }
        }
    },

    getDefaultProps() {
        return {
            type: 'horizontal',
            flipped: false,
            disabled: false
        };
    },

    getInitialState() {
        return {
            isFlipped: this.props.flipped
        };
    },

    componentDidMount() {
        this._hideFlippedSide();
    },

    componentWillReceiveProps(newProps) {
        this.setState({
            isFlipped: newProps.flipped
        });
    },

    componentWillUpdate(nextProps, nextState) {
        if (this.state.isFlipped !== nextState.isFlipped) {
            this.notifyFlip = true;
        }
    },

    componentDidUpdate() {
        if (this.notifyFlip && typeof this.props.onFlip === 'function') {
            this.props.onFlip(this.state.isFlipped);
            setTimeout(this._hideFlippedSide, 600);
            this.notifyFlip = false;
        }
    },

    handleFocus() {
        if (this.props.disabled) return;
        if (typeof this.props.onFocus === 'function') {
            return this.props.onFocus(e);
        }
    },

    handleClick(e) {
        if (this.props.disabled) return;
        this.setState({isFlipped: !this.state.isFlipped});
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(this.state.isFlipped, e);
        }
    },

    render() {
        return (
            <div className={classNames({
                  'universe-flip-card': true,
                  'vertical': this.props.type === 'vertical',
                  'horizontal': this.props.type !== 'vertical',
                  'flipped': this.state.isFlipped,
                  'disabled': this.props.disabled
                })}
                tabIndex={0}
                onFocus={this.handleFocus}
                onClick={this.handleClick}
            >
                <div
                    className="flipper"
                >
                    <div
                        className="universe-flip-card-front"
                        ref="front"
                        tabIndex={-1}
                        aria-hidden={this.state.isFlipped}
                    >
                        {this.props.children[0]}
                    </div>
                    <div
                        className="universe-flip-card-back"
                        ref="back"
                        tabIndex={-1}
                        aria-hidden={!this.state.isFlipped}
                    >
                        {this.props.children[1]}
                    </div>
                </div>
            </div>
        );
    },

    _showBothSides() {
        this.refs.front.style.display = '';
        this.refs.back.style.display = '';
    },

    _hideFlippedSide() {
        // This prevents the flipped side from being tabbable
        if (this.props.disabled) {
            if (this.state.isFlipped) {
                this.refs.front.style.display = 'none';
            } else {
                this.refs.back.style.display = 'none';
            }
        }
    }
});
