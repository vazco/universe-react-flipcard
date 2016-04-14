import React from 'react';
import classNames from 'classnames';
const PropTypes = React.PropTypes;

export default React.createClass({
    displayName: 'ReactFlipCard',
    propTypes: {
        type: PropTypes.string,
        flipped: PropTypes.bool,
        disabled: PropTypes.bool,
        onFlip: PropTypes.func,
        children (props, propName, componentName) {
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

    getDefaultProps () {
        return {
            type: 'horizontal',
            flipped: false,
            disabled: false,
            onFlip () {}
        };
    },

    componentDidMount () {
        this._hideFlippedSide();
    },

    componentDidUpdate () {
        setTimeout(this._hideFlippedSide, 600);
    },

    handleFocus (event) {
        if (this.props.disabled) return;
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    },

    handleClick (event) {
        if (this.props.disabled) return;
        if (this.props.onFlip) {
            this.props.onFlip(!this.props.flipped, event);
        }
    },

    shouldComponentUpdate ({flipped}) {
        return this.props.flipped !== flipped;
    },

    render () {
        return (
            <div
                className={classNames({
                    'universe-flip-card': true,
                    'vertical': this.props.type === 'vertical',
                    'horizontal': this.props.type !== 'vertical',
                    'flipped': this.props.flipped,
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
                        aria-hidden={this.props.flipped}
                    >
                        {this.props.children[0]}
                    </div>
                    <div
                        className="universe-flip-card-back"
                        ref="back"
                        tabIndex={-1}
                        aria-hidden={!this.props.flipped}
                    >
                        {this.props.children[1]}
                    </div>
                </div>
            </div>
        );
    },

    _showBothSides () {
        if (this.isMounted()) {
            this.refs.back.style.display = '';
            this.refs.front.style.display = '';
        }
    },

    _hideFlippedSide () {
        // This prevents the flipped side from being tabbable
        if (this.props.disabled && this.isMounted()) {
            if (this.props.flipped) {
                this.refs.front.style.display = 'none';
            } else {
                this.refs.back.style.display = 'none';
            }
        }
    }
});
