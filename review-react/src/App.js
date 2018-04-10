import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class ProductFiltering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: "", isChecked: false};
    this.onHandleCheckboxChange = this.onHandleCheckboxChange.bind(this);
    this.onHandleInputChange = this.onHandleInputChange.bind(this);
  }

  onHandleCheckboxChange(){
    const prev = this.state.isChecked;
    this.setState({isChecked: !prev});
  }

  onHandleInputChange(text){
    this.setState({text});
  }
  render(){
    const products = this.props.products;
    const inStock = this.state.isChecked;
    const searchText = this.state.text.toLowerCase();
    let filteredProducts = products;
    if(inStock) {
      filteredProducts = products.filter(product => product.stocked)
    }
    filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().indexOf(searchText) !== -1);
    return (
      <div>
        <FilterProduct 
          onInputChange={this.onHandleInputChange} 
          onCheckboxChange={this.onHandleCheckboxChange}>
        </FilterProduct>
        <ProductTable products={filteredProducts}></ProductTable>
      </div>
    );
  }
}

function ProductTable (props) {
  const products = props.products;
  let lastCategory = "";
  const data = [];
  products.forEach(product => {
    if(lastCategory !== product.category) {
      lastCategory = product.category;
      data.push(<ProductCateGory category={lastCategory} key={lastCategory}></ProductCateGory>)
    }
    data.push(<ProductRow name={product.name} price={product.price} key={product.name}></ProductRow>)
  });
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data}
      </tbody>
    </table>
  );
}

export function ProductCateGory(props) {
  const row = props;
  return (
    <tr>
      <th>{row.category}</th>
    </tr>
  );
}

export function ProductRow (props) {
  const row = props;
  return (
    <tr>
      <td>{row.name}</td>
      <td>{row.price}</td>
    </tr>
  );
}

class FilterProduct extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleInputChange(e){
    this.props.onInputChange(e.target.value);
  }

  handleCheckboxChange(e){
    this.props.onCheckboxChange();
  }

  render() {
    return (
      <form>
        <input type='text' onChange={this.handleInputChange} placeholder="search..."/>
        <br/>
        <label><input type="checkbox" onChange={this.handleCheckboxChange}/>
        Only show products in stock</label>
      </form>
    );
  }
}
