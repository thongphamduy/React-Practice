import React from 'react';

class BatleResult extends React.Component {

  render() {
    return (
      <div>
        <div className="result">{this.props.result}</div>
        <div className="score">Score: {this.props.playerScore}</div>
      </div>
    );
  }
}

export default BatleResult;