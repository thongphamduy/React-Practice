import React from 'react';
import Product from '../product/product';

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Product/>
        <Product/>
        <Product/>
      </div>
    );
  }
}

export default ProductContainer;