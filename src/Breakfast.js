import React from 'react';
import Menu from './Menu';

const Breakfast = (props) => {
  return (
    <div>
      <h2>Breakfast </h2>
      <Menu 
        foodList={props.menu}
      />
    </div>
  );
};

export default Breakfast;