import React, { Component } from 'react';
import PlayerInput from './PlayerInput';
import './index.css';
import PlayerPreview from './PlayerPreview';
import { getUserInfo, calculateScore } from './utils';
import PlayerInfo from './PlayerInfo';

class BattleContainer extends React.Component {
  constructor(props){
    super(props);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
    this.handleResetPlayer = this.handleResetPlayer.bind(this);
    this.handleStartBatle = this.handleStartBatle.bind(this);
    this.state = {player1: null, player2: null, isBatleStart: false};
  }

  async handlePlayerSubmit(playerName, key) {
    const playerData = await getUserInfo(playerName);
    const playerInfo = {
      name: playerData.login,
      avatarUrl: playerData.avatar_url,
      repos: playerData.public_repos,
      followers: playerData.followers,
      following: playerData.following,
    }
    if(key === 'player1') {
      this.setState({player1: playerInfo});
    } else {
      this.setState({player2: playerInfo});
    }
  }
  
  handleResetPlayer(key){
    if(key === 'player1') {
      this.setState({player1: null, isBatleStart: false});
    } else {
      this.setState({player2: null, isBatleStart: false});
    }
  }

  async handleStartBatle(e){
    e.preventDefault();
    const player1Score = await calculateScore(this.state.player1.name);
    const player2Score = await calculateScore(this.state.player2.name);
    this.setState({isBatleStart: true, player1Score, player2Score});
  }

  render () {
    return (
      <div>
        <div className="container">
          <div>
            <label>Player One</label>
            {this.state.player1 ? 
              <PlayerPreview onHandleReset={() => this.handleResetPlayer('player1')} playerInfo={this.state.player1}/> : 
              <PlayerInput onSubmitPlayer={(playerName) => this.handlePlayerSubmit(playerName, 'player1')}/>
            }
            {this.state.isBatleStart ? <PlayerInfo playerInfo={this.state.player1} playerScore={this.state.player1Score}/> : null}
          </div>
          <div>
            <label>Player Two</label>
            {this.state.player2 ? 
              <PlayerPreview onHandleReset={() => this.handleResetPlayer('player2')} playerInfo={this.state.player2}/> : 
              <PlayerInput onSubmitPlayer={(playerName) => this.handlePlayerSubmit(playerName, 'player2')}/>
            }
            {this.state.isBatleStart ? <PlayerInfo playerInfo={this.state.player2} playerScore={this.state.player2Score}/> : null}
          </div>
        </div>
        <div className="start-battle">
          {(this.state.player1 && this.state.player2 && !this.state.isBatleStart) ? <button onClick={this.handleStartBatle}>Let the Battle begin</button> : null}
        </div>
      </div>
    );
  }
}

export default BattleContainer;