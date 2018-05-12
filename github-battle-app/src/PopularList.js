import React from 'react';
import PlayerPreview from './PlayerPreview';

class PopularList extends React.Component {

  render() {
    return(
      <div className="popularContainer">
        {this.props.users.map((user, i) => 
        <div key={i}>
          <div>#{i + 1}</div>
          <PlayerPreview playerAvatar={user.owner.avatar_url} playerName={user.owner.login}/>
          <div>{user.stargazers_count} stars</div>
        </div>)}
      </div>
    );
  };
}

export default PopularList;