import React from 'react';
import Menu from './Menu';

const Lunch = (props) => (
  <div>
    <h2>Lunch </h2>
    <Menu 
      {...props}
    />
  </div>
);

export default Lunch;