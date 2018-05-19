import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductContainer from './product-containter/product-container';
import ComparationTable from './comparation-container/comparation-container';
import { SIGPIPE } from 'constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: data};
    this.handleSelectProduct = this.handleSelectProduct.bind(this);
  }

  handleSelectProduct(id){
    const updatedList = this.state.data;
    updatedList.forEach(product => {
      if(product.id === id) {
        product.isSelected = !product.isSelected;
      }
      return product;
    });
    // console.log(updatedList);
    this.setState({data: updatedList})
  }

  render() {
    return (
      <div className="container">
        <ProductContainer data={this.state.data} onSelectProduct={this.handleSelectProduct}/>
        <ComparationTable data={this.state.data}/>
      </div>
    );
  }
}

export default App;

const data = [
  {
    name: "Chair",
    id: 0,
    description: "old chair",
    imgUrl: "https://www.ikea.com/PIAimages/0516596_PE640434_S5.JPG",
    price: "$39",
    colors: "black",
    condition: "used",
    isSelected: false
  },
  {
    name: "Camera",
    id: 1,
    description: "old camera",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdq-JZ5MCz8P85HgS_M7ghC9XX7QTTF9mMUpHJfnwtZHEJrSnwQ",
    price: "$39",
    colors: "black",
    condition: "new",
    isSelected: false
  },{
    name: "Back pack",
    id: 2,
    description: "hihi",
    imgUrl: "https://zshop.vn/images/companies/1/bai-viet/balo-sony-hinh.png?1500350863552",
    price: "$100",
    colors: "grey",
    condition: "new",
    isSelected: false
  },{
    name: "Women bag",
    id: 3,
    description: "day la women bag",
    imgUrl: "https://s7d2.scene7.com/is/image/Coach/f57613_svbdx_a0?$efs_r_main_product$",
    price: "$329",
    colors: "green",
    condition: "new",
    isSelected: false
  }
];