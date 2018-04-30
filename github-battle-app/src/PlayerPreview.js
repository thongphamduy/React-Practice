import React from 'react';
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
          <img src={this.props.playerAvatar}/>
        </div>
        <div className="player-name">
          {`@${this.props.playerName}`}
        </div>
      </div>
    );
  }
}

export default PlayerPreview;