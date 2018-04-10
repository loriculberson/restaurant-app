import React from 'react';

const Menu = (props) => {
  const renderFoods = props.foodList.map((food, index) => (
    <p key={index}>{index+1}. {food.name} ${food.price.toFixed(2)}</p>
  ));

  return (
    <div>
      {renderFoods}
    </div>
  );
};

export default Menu;
