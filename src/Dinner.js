import React from 'react';
import Menu from './Menu';

const Dinner = (props) => {
  return (
    <div>
      <h2>Dinner </h2>
      <Menu 
        foodList={props.menu}
      />
    </div>
  );
};

export default Dinner;