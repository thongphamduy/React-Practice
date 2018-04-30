import React, { Component } from 'react';
import './App.css';
import SearchBar from './search-bar';
import FilteredList from './filtered-list';
import emojiList from './emojiList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
  }

  handleOnChangeInput(value) {
    this.setState({value: value});
  }
  render() {
    const searchText = this.state.value.toLowerCase();
    const data = emojiList.filter(item => item.title.toLowerCase().indexOf(searchText) !== -1 || item.keywords.toLowerCase().indexOf(searchText) !== -1);
    return (
      <div className="App">
        <SearchBar onChangeInput={this.handleOnChangeInput} value={this.state.value}/>
        <FilteredList filteredList={data.slice(0,20)}/>
      </div>
    );
  }
}

export default App;
