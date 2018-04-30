import React from 'react';
import PlayerInput from './PlayerInput';
import './index.css';
import PlayerPreview from './PlayerPreview';
import { getUserInfo, calculateScore } from './utils';
import PlayerInfo from './PlayerInfo';
import ResetPlayer from './ResetPlayer';
import BattleResult from './BattleResult';
import NotFound from './NotFound';

class BattleContainer extends React.Component {
  constructor(props){
    super(props);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
    this.handleResetPlayer = this.handleResetPlayer.bind(this);
    this.handleStartBatle = this.handleStartBatle.bind(this);
    this.calculateWinner = this.calculateWinner.bind(this);
    this.state = {
      isBatleStarted: false,
      player1: {},
      player2: {},
      notFound: false,
    };
  }

  async handlePlayerSubmit(playerName, key) {
    let updateState;
    if(playerName) {
      let userInfo = await getUserInfo(playerName);
      if(userInfo.avatar_url) {
        updateState = {
          name: playerName, 
          isResetBtnDisplay: true, 
          avatarUrl: userInfo.avatar_url,
          numOfRepos: userInfo.public_repos,
          followers: userInfo.followers,
          followings: userInfo.following
        };
      }  else {
        updateState = {notFound: true};
      } 
      if(key === 'player1') {
        this.setState({player1: updateState});
      } else {
        this.setState({player2: updateState});
      }
    }
  }
  
  handleResetPlayer(key){
    if(key === 'player1') {
      this.setState({player1: {}, isBatleStarted: false, notFound: false});
    } else {
      this.setState({player2: {}, isBatleStarted: false, notFound: false});
    }
  }

  async handleStartBatle(e){
    e.preventDefault();
    const player1State = Object.assign({}, this.state.player1);
    const player2State = Object.assign({}, this.state.player2);
    const player1Score = await calculateScore(this.state.player1.name);
    const player2Score = await calculateScore(this.state.player2.name);
    const result1 = {
      ...player1State,
      score: player1Score, 
    }
    const result2 = {
      ...player2State,
      score: player2Score,
    }
    this.setState({isBatleStarted: true, player1: result1, player2: result2});
  }

  calculateWinner(score1, score2) {
    if(score1 >= score2) {
      return 'Winner';
    } else {
      return "Losser";
    }
  }

  render () {
    const player1 = this.state.player1;
    const player2 = this.state.player2;
    return (
      <div className="battle-wrraper">
        <div className="container">
          <div className="player-wrapper">
            <label><h2>Player One</h2></label>
            {(player1.isResetBtnDisplay || player1.notFound)? 
              null : 
              <PlayerInput onSubmitPlayerName={(name) => this.handlePlayerSubmit(name, 'player1')}/>
            }
            {this.state.isBatleStarted ? 
              <BattleResult playerScore={player1.score} result={this.calculateWinner(player1.score, player2.score)}/> : 
              null
            }
            {player1.notFound ? 
              <NotFound/> : 
              (player1.isResetBtnDisplay || this.state.isBatleStarted) ? 
                <PlayerPreview playerAvatar={player1.avatarUrl} playerName={player1.name}/> : 
                null
            }
            
            {(player1.isResetBtnDisplay && !this.state.isBatleStarted || player1.notFound) ? 
              <ResetPlayer onHandleRestPlayer={() => this.handleResetPlayer('player1')}/> : 
              null
            }
            {this.state.isBatleStarted ?
              <PlayerInfo repos={player1.numOfRepos} followers={player1.followers} following={player1.following}/> :
              null
            }
          </div>
          <div className="player-wrapper">
            <label><h2>Player Two</h2></label>
            {(player2.isResetBtnDisplay || player2.notFound)? 
              null : 
              <PlayerInput onSubmitPlayerName={(name) => this.handlePlayerSubmit(name, 'player2')}/>
            }
            {this.state.isBatleStarted ? 
              <BattleResult playerScore={player2.score} result={this.calculateWinner(player2.score, player1.score)}/> : 
              null
            }
            {player2.notFound ? 
              <NotFound/> : 
              (player2.isResetBtnDisplay || this.state.isBatleStarted) ? 
                <PlayerPreview playerAvatar={player2.avatarUrl} playerName={player2.name}/> : 
                null
            }
            
            {(player2.isResetBtnDisplay && !this.state.isBatleStarted || player2.notFound) ? 
              <ResetPlayer onHandleRestPlayer={() => this.handleResetPlayer('player2')}/> : 
              null
            }
            {this.state.isBatleStarted ?
              <PlayerInfo repos={player2.numOfRepos} followers={player2.followers} following={player2.following}/> :
              null
            }
          </div>
        </div>
        <div className="start-battle">
          {(player1.isResetBtnDisplay && player2.isResetBtnDisplay && !this.state.isBatleStarted) ? 
            <button onClick={this.handleStartBatle}>Let the Battle begin</button> : 
            null
          }
        </div>
      </div>
    );
  }
}

export default BattleContainer;