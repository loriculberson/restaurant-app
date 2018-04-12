import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'; 
import MenuItem from './MenuItem';

const Menu = (props) => {
  const renderFoods = props.menu.map((food, index) => {
    return (
      <p key={index}>{index+1}. 
        <Link to={{ pathname:`${props.match.url}/${food.name}`, state: { food: food }}}> {food.name} </Link> 
        ${food.price.toFixed(2)}
      </p>
    )
 });

  return (
    <div>
      {renderFoods}
        <Route path={`${props.match.url}/:food`} 
          component={MenuItem}
        />
    </div>
  );
};

export default Menu;