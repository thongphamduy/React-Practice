import React from 'react';
import './numpad.css';

export default class NumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onHandleClick(e.target.value);
  }

  render() {
    return (
      <div className="numpadContainer">
        <div className="row">
          <button value="AC" onClick={this.handleClick}>AC</button>
          <button value="neg" onClick={this.handleClick}>+/-</button>
          <button value="mod" onClick={this.handleClick}>%</button>
          <button value="/" onClick={this.handleClick}>/</button>
        </div>
        <div className="row">
          <button value="7" onClick={this.handleClick}>7</button>
          <button value="8" onClick={this.handleClick}>8</button>
          <button value="9" onClick={this.handleClick}>9</button>
          <button value="*" onClick={this.handleClick}>x</button>
        </div>
        <div className="row">
          <button value="4" onClick={this.handleClick}>4</button>
          <button value="5" onClick={this.handleClick}>5</button>
          <button value="6" onClick={this.handleClick}>6</button>
          <button value="-" onClick={this.handleClick}>-</button>
        </div>
        <div className="row">
          <button value="1" onClick={this.handleClick}>1</button>
          <button value="2" onClick={this.handleClick}>2</button>
          <button value="3" onClick={this.handleClick}>3</button>
          <button value="+" onClick={this.handleClick}>+</button>
        </div>
        <div className="row">
          <button value="0" onClick={this.handleClick} className="button-0">0</button>
          <button value="." onClick={this.handleClick}>.</button>
          <button value="=" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}