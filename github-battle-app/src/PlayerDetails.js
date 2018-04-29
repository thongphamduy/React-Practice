import React, { Component } from 'react';
import PlayerPreview from './PlayerPreview';
import PlayerInfo from './PlayerInfo';

class PlayerDetails extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="score"></div>
        <PlayerPreview/>
        <PlayerInfo/>
      </div>
    );
  }
}

export default PlayerDetails;