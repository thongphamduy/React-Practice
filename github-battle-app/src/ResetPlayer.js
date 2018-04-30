import React from 'react';

class ResetPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset=this.handleReset.bind(this);
  }

  handleReset(){
    this.props.onHandleRestPlayer();
  }

  render() {
    return (
      <a onClick={this.handleReset} href="#" className="link-reset">Reset</a>
    );
  }

}
export default ResetPlayer;