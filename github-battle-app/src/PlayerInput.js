import React, { Component } from 'react';
import './index.css';

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state={value: ""};
  }

  handleInputChange(e){
    this.setState({value: e.target.value});
  }

  handleSubmit(e){  
    e.preventDefault();
    this.props.onSubmitPlayer(this.state.value);
    this.setState({value: ""});
  }

  render() {
    const inputData = this.state.value;

    return (
      <div className="player-input">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={inputData} onChange={this.handleInputChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default PlayerInput;