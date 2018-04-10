import React from 'react';
import {Link} from 'react-router-dom'; 


const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'><h3>Penelope's Restaurant</h3></Link></li>
        <li><Link to='/breakfast'>Breakfast </Link></li>
        <li><Link to='/lunch'>Lunch </Link></li>
        <li><Link to='/dinner'>Dinner </Link></li>
      </ul>


      
    </div>
  );
};

export default Navbar;

