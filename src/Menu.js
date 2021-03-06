import React from 'react';
import { NavLink, Route } from 'react-router-dom'; 
import MenuItem from './MenuItem';

const Menu = (props) => {
  const renderFoods = props.menu.map((food, index) => {
    return (
      <p key={index}>{index+1}. 
        <NavLink to={{ pathname:`${props.match.url}/${food.name}`, state: { food: food }}} activeClassName="active"> {food.name} </NavLink> 
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