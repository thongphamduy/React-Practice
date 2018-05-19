import React from 'react';
import Product from '../product/product';
import product from '../product/product';

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickProduct = this.handleClickProduct.bind(this);
  }

  handleClickProduct(id) {
    console.log(id);
    this.props.onSelectProduct(id);
  }

  render() {
    return (
      <div className="d-flex">
        {this.props.data.map(item => <Product data={item} key={item.id} 
          handleClickProduct={this.handleClickProduct}>
        </Product>)}
      </div>
    );
  }
}

export default ProductContainer;