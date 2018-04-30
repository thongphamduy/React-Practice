import React from 'react';
import './search-bar.css';
 
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChangeInput(e.target.value);
  }
  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChange} value={this.props.value}/>
      </form>
    );
  }
}

export default SearchBar;