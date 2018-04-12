import React from 'react';

const MenuItem = (props) => {
  const food = props.location.state;
  return (
    <div>
      {props.location.state.food.name}
      ${props.location.state.food.price.toFixed(2)}
      <img src={props.location.state.food.imageUrl} alt="image" />
    </div>
  )
}
export default MenuItem;