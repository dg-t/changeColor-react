import React from 'react';

class ChangeColorButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.clickHandler();
    }
    render() {
        return (
            <button style={{border: "1px"}} onClick={this.handleClick}>I dont like {this.props.currentColor}</button>
        );
    }
}

export default ChangeColorButton;