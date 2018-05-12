import React from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

  render() {
    return (
      <header>
        <nav>
          <ul className="router">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/battle">Battle</NavLink></li>
            <li><NavLink to="/popular">Popular</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  };
}

export default Header;