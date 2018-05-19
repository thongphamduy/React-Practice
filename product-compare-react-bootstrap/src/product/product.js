import React from 'react';
import styles from './product.css'
import CssModules from 'react-css-modules';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick(id){
    this.props.handleClickProduct(id);
  }

  render() {
    const product = this.props.data;
    return (
      <div className={`card col ${styles.cardWrapper}`}>
        <img className={"card-img-top"} src={product.imgUrl} alt="Product"></img>
        <div className="card-body row">
          <div className="col-sm-8">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.description}</p>
          </div>
          <h4 className="col-sm-4">{product.price}</h4>
        </div>
        <div className={`d-flex flex-row justify-content-center align-items-center ${styles.overlay} ${product.isSelected? styles.selected : null}`}>
          <button className={`btn ${product.isSelected? "btn-outline-danger" : "btn-outline-dark"}`} onClick={() => this.onHandleClick(product.id)}>{product.isSelected? "Remove": "Compare"}</button>
        </div>
      </div>
    );
  }

}

// export default CssModules(Product, styles)
export default Product;
