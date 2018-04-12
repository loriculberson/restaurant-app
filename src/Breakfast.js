import React from 'react';
import Menu from './Menu';

const Breakfast = (props) => (
    <div>
      <h2>Breakfast </h2>
      <Menu 
        {...props}
      />
    </div>
);

export default Breakfast;