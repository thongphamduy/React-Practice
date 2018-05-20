import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductContainer from './product-containter/product-container';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ProductContainer/>
      </div>
    );
  }
}

export default App;
