import React, { Component } from 'react';
import Displaying from './displaying';
import NumPad from './numpad';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {value: "", result: 0};
    this.num1 = null;
    this.num2 = null;
    this.operator = null;
  }

  handleClick(val){
    const prevState = this.state.value;
    if(/[0-9]|\./.test(val)) {
      this.setState({value: `${prevState}${val}`});
      return;
    }
    if(/\+|-|\*|\/|mod/.test(val)) {
      console.log(val);
      this.num1 = this.state.value || this.state.result;
      this.setState({value: "", result: 0});
      this.operator = val;
      return;
    }
    if(/=/.test(val)){
      this.num2 = this.state.value;
      const result = this.handleEqual(this.num1, this.num2, this.operator);
      this.setState({value: "", result: result});
      this.num1 = null;
      this.num2 = null;
    }
    if(/AC/.test(val)){
      this.handleAC();
    }
  }

  handleAC(){
    this.setState({value: "", result: 0});
    this.num1 = null;
    this.num2 = null;
    this.operator = null;
  }

  handleEqual(num1, num2, operator) {
    let res = 0;
    const n1 = Number(num1);
    const n2 = Number(num2);
    console.log(operator);
    switch (operator) {
      case '+': 
        res = n1 + n2;
        break;
      case '-':
       res = n1 - n2;
       break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        n2 !== 0? res = (n1 / n2) : res = 0;
        break;
      case "mod":
        res = n1 % n2;
        break;
      default: 
    }
    return res;  
  }

  render() {
    return (
      <div className='container'>
        <div className="displaying">
          <Displaying value={this.state.value} result={this.state.result}/>
        </div>
        <div className="numpad">
          <NumPad onHandleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;