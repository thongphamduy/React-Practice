import React from 'react';
import './index.css';
import { getUserInfo, calculateScore, calculateWinner } from './utils';
import Loading from './Loading';
import PlayerContainer from './PlayerContainer';

class BattleContainer extends React.Component {
  constructor(props){
    super(props);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
    this.handleResetPlayer = this.handleResetPlayer.bind(this);
    this.handleStartBatle = this.handleStartBatle.bind(this);
    this.state = {
      isBatleStarted: false,
      player1: {
        isLoading: false
      },
      player2: {
        isLoading: false
      },
      notFound: false,
      isLoading: false,
    };
  }

  async handlePlayerSubmit(playerName, key) {
    let updateState={isLoading: true};
    if(key === 'player1') {
      this.setState({player1: updateState});
    } else {
      this.setState({player2: updateState});
    }
    if(playerName) {
      let userInfo = await getUserInfo(playerName);
      if(userInfo.avatar_url) {
        updateState = {
          name: playerName, 
          isResetBtnDisplay: true, 
          avatarUrl: userInfo.avatar_url,
          numOfRepos: userInfo.public_repos,
          followers: userInfo.followers,
          followings: userInfo.following,
          isLoading: false
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
    this.setState({isLoading: true});
    const player1State = Object.assign({}, this.state.player1);
    const player2State = Object.assign({}, this.state.player2);
    const player1Score = await calculateScore(this.state.player1.name);
    const player2Score = await calculateScore(this.state.player2.name);
    const result1 = {
      ...player1State,
      score: player1Score, 
      result: calculateWinner(player1Score, player2Score) ? "Winner" : "Looser"
    }
    const result2 = {
      ...player2State,
      score: player2Score,
      result: calculateWinner(player2Score, player1Score) ? "Winner" : "Looser"
    }
    this.setState({isBatleStarted: true, player1: result1, player2: result2, isLoading: false});
  }

  render () {
    return (
      <div>
        {this.state.isLoading ? 
          <Loading/> :
          <div className="battle-wrraper">
            <div className="container">
              <PlayerContainer 
                onSubmitPlayerName={(name)=>this.handlePlayerSubmit(name, 'player1')}
                onResetPlayer={()=>this.handleResetPlayer('player1')}  
                playerData={this.state.player1}
                isBatleStarted={this.state.isBatleStarted}
                playerNum="One"
                isLoading={this.state.player1.isLoading}
              />
              <PlayerContainer
                onSubmitPlayerName={(name)=>this.handlePlayerSubmit(name, 'player2')}
                onResetPlayer={()=>this.handleResetPlayer('player2')}  
                playerData={this.state.player2}
                isBatleStarted={this.state.isBatleStarted}  
                playerNum="Two"
                isLoading={this.state.player2.isLoading}
                />
          </div>
        <div className="start-battle">
          {(this.state.player1.isResetBtnDisplay && this.state.player2.isResetBtnDisplay && !this.state.isBatleStarted) ? 
            <button onClick={this.handleStartBatle}>Let the Battle begin</button> : 
            null
          }
        </div>
        </div>
      }
      </div>
    );
  }
}

export default BattleContainer;