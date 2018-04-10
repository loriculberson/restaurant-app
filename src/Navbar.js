import React from 'react';
import {Route, Link} from 'react-router-dom'; 
import Home from './Home';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'><h3>Penelope's Restaurant</h3></Link></li>
        <li><Link to='/breakfast'>Breakfast </Link></li>
        <li><Link to='/lunch'>Lunch </Link></li>
        <li><Link to='/dinner'>Dinner </Link></li>
      </ul>

      <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/breakfast" component={Breakfast}/>
          <Route path="/lunch" component={Lunch}/>
          <Route path="/dinner" component={Dinner}/>

        </div>
      
    </div>
  );
};

export default Navbar;