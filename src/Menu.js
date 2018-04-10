import React from 'react';

const Menu = (props) => {
  const renderFoods = props.foodList.map((food, index) => (
    <p key={index}>{index+1}. {food.name} ${Number(food.price)}</p>
  ));

  return (
    <div>
      {renderFoods}
    </div>
  );
};

export default Menu;
