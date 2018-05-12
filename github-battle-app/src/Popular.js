import React from 'react';
import LangBar from './LangBar';
import PopularList from './PopularList';
import { getPopularUsersByLang } from './utils';
import Loading from './Loading';

class PopularContainer extends React.Component {
  constructor(props) {
    super(props);
    this.selectLang = this.selectLang.bind(this);
    this.state={users: [], isLoading: false};
  }

  async selectLang(lang){
    this.setState({isLoading: true});
    const users = await getPopularUsersByLang(lang);
    this.setState({users: users, isLoading: false});
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    const users = await getPopularUsersByLang('all');
    this.setState({users: users, isLoading: false});
  }

  render() {
    return(
      <div>
        <LangBar langList={langList} selectLang={this.selectLang}/>
        {this.state.isLoading && <Loading/>}
        <PopularList users={this.state.users}/>
      </div>
    );
  };
}

const langList = ["All", "JavaScript", "Ruby", "Java", "Python"];

export default PopularContainer;
