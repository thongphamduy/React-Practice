import React from 'react';
import './index.css';

class PlayerInfo extends React.Component {

  render () {
    const data = this.props;
    return (
      <div className="player-info">
          <div>Followers: {data.followers}</div>
          <div>Followings: {data.following}</div>
          <div>Public Repos: {data.repos}</div>
      </div>
    );
  }
}

export default PlayerInfo;