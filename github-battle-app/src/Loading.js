import React from 'react';
const spinerSvg = require('./Spinner-1s-200px.svg')
class Loading extends React.Component {

  render() {
    return(
      <div className="loading">
        <img src={spinerSvg} alt="loading" />
      </div>
    );
  }
}
export default Loading;