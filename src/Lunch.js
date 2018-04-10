import React from 'react';
import Menu from './Menu';

const Lunch = (props) => {
  return (
    <div>
      <h2>Lunch </h2>
      <Menu 
        foodList={props.menu}
      />
    </div>
  );
};

export default Lunch;