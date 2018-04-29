import React, { Component } from 'react';
import './index.css';

class PlayerInfo extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    const data = this.props.playerInfo;
    return (
      <div>
        <div className="score">Score: {this.props.playerScore}</div>
        <div>
          <div>Followers: {data.followers}</div>
          <div>Followings: {data.following}</div>
          <div>Public Repos: {data.repos}</div>
        </div>
      </div>
    );
  }
}

export default PlayerInfo;