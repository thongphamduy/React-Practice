import React from 'react';
import styles from './comparation-container.css'

class ComparationTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.data;
    const selectedList = products.filter(product => product.isSelected);
    return(
      <div className="container">
      {(selectedList.length >= 2) && 
      <table className={`table table-borderless table-hover ${styles.table}`}>
        <thead className="thead-light">
          <tr>
            <th className="col-xs-2"></th>
            {selectedList.map(product => <th key={product.id} className="col-md-">{product.name}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="col-xs-2">Price</td>
            {selectedList.map(product => <td key={product.id} className="col-md-">{product.price}</td>)}
          </tr>
          <tr>
            <td className="col-xs-2">Colors</td>
            {selectedList.map(product => <td key={product.id} className="col-md-">{product.colors}</td>)}
          </tr>
          <tr>
            <td className="col-xs-2">Condition</td>
            {selectedList.map(product => <td key={product.id} className="col-md-">{product.condition}</td>)}
          </tr>
        </tbody>
      </table>}
        
      </div>
    );
  }
}

export default ComparationTable;

