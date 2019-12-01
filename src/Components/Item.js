import React from 'react';

const Item = props => {
  console.log(props, 'Item.js, line 4');
  return (
    <div>
      <h2><strong>{props.item.name}</strong></h2>
      <li><strong>{props.item.description}</strong></li>
      <li><strong>{props.item.deadline}</strong></li>
    </div>
  )
};

export default Item;