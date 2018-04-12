import React from 'react';
import Menu from './Menu';

const Dinner = (props) => (
  <div>
    <h2> Dinner </h2>
    <Menu 
      {...props}
    />
  </div>
);

export default Dinner;