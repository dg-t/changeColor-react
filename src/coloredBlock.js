import React from 'react';
import ChangeColorButton from './changeColorButton.js'

class ColoredBlock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: "red"
        };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor() {
        this.setState((prevState) => {
        let newColor = this.state.color === "red" ? "blue" : "red";
        return {
            color: newColor
        };
        });
    }
    render() {
        return (
            <div style={{height: "200px", width: "200px", backgroundColor: this.state.color}}>
                <ChangeColorButton clickHandler={this.changeColor} currentColor={this.state.color}></ChangeColorButton>
            </div>
        )
    }
}

export default ColoredBlock;