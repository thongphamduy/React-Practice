import React from 'react';
import './filteredList.css';
function FilteredList (props) {
  return (
    <ul>
      {props.filteredList.map((item, index) => 
        <li key={index}>
          <div className="icon">{item.symbol}</div>
          <div className="description"> 
            <div className="title">{item.title}</div>
            <div>{item.keywords}</div>
          </div>
        </li>)}
    </ul>
  );
}

export default FilteredList;