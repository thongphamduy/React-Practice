import React, { PureComponent } from 'react'
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import PlayerInfo from './PlayerInfo';
import ResetPlayer from './ResetPlayer';
import BattleResult from './BattleResult';
import NotFound from './NotFound';
import Loading from './Loading';

class PlayerContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
    this.handleResetPlayer = this.handleResetPlayer.bind(this);
  }

  handlePlayerSubmit(name){
    this.props.onSubmitPlayerName(name);
  }

  handleResetPlayer() {
    this.props.onResetPlayer();
  }

  render() {
    const player = this.props.playerData;
    return(
      <div className="player-wrapper">
        {this.props.isLoading && <Loading />}
        <label><h2>Player {this.props.playerNum}</h2></label>
        {
          (!player.isResetBtnDisplay && !player.notFound) && <PlayerInput onSubmitPlayerName={(name) => this.handlePlayerSubmit(name)}/>
        }
        {this.props.isBatleStarted && <BattleResult playerScore={player.score} result={player.result}/>}
        {player.notFound ? 
          <NotFound/> : 
          (player.isResetBtnDisplay || this.props.isBatleStarted) ? 
            <PlayerPreview playerAvatar={player.avatarUrl} playerName={player.name}/> : 
            null
        }
        
        {((player.isResetBtnDisplay && !this.props.isBatleStarted) || player.notFound) ? 
          <ResetPlayer onHandleRestPlayer={() => this.handleResetPlayer()}/> : 
          null
        }
        {this.props.isBatleStarted ?
          <PlayerInfo repos={player.numOfRepos} followers={player.followers} following={player.following}/> :
          null
        }
      </div>
    );
  }
}

export default PlayerContainer;