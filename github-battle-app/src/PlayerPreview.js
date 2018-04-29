import React, { Component } from 'react';
import './index.css';

class PlayerPreview extends React.Component {
  constructor(props){
    super(props);
    this.handleReset=this.handleReset.bind(this);
  }

  handleReset(e){
    e.preventDefault();
    this.props.onHandleReset();
  }
  render() {
    return (
      <div>
        <div className="avatar">
          <img src={this.props.playerInfo.avatarUrl}/>
        </div>
        <div className="player-name">
          {`@${this.props.playerInfo.name}`}
        </div>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default PlayerPreview;