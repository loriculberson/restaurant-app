import React from 'react';
import { NavLink } from 'react-router-dom'; 


const Navbar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to='/' activeClassName="active"><h3>Penelope's Restaurant</h3></NavLink></li>
        <li><NavLink to='/breakfast' activeClassName="active">Breakfast </NavLink></li>
        <li><NavLink to='/lunch' activeClassName="active">Lunch </NavLink></li>
        <li><NavLink to='/dinner' activeClassName="active">Dinner </NavLink></li>
      </ul>

<NavLink to="/" activeClassName="active">Home</NavLink>
      
    </div>
  );
};

export default Navbar;

