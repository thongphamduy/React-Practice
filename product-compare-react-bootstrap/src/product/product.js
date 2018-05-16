import React from 'react';
import styles from './product.css'
var classNames = require('classnames');

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.productContainer}>
        <img className={classNames("card-img-top", {width: "100%"})} src="http://www.wallfizz.com/nature/nuage/6243-couche-nuageuse-WallFizz.jpg" alt="Product 01"></img>
        <div className="card-body">
          <h4 className="card-title">John Doe</h4>
          <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
          <a href="#" className="btn btn-primary">See Profile</a>
        </div>
      </div>
    );
  }

}

export default Product;