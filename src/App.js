import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import Navbar from './Navbar';
import menuData from './data.js';
import Home from './Home';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import MenuItem from './MenuItem';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu: menuData
    }
  }

  render() {
    const [breakfast, lunch, dinner] = this.state.menu
    
    return (
      <div className="App">
       <Navbar />
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/breakfast/:food" component={ MenuItem } />
          <Route exact path="/breakfast" render = { 
            routeProps => <Breakfast {...routeProps} menu={breakfast.items} />
          } />
          <Route path="/lunch/:food" component={ MenuItem } />
          <Route exact path="/lunch" render= { 
            routeProps => <Lunch {...routeProps} menu={lunch.items} />
          } />
          <Route path="/dinner/:food" component={ MenuItem } />
          <Route exact path="/dinner" render= { 
            routeProps => <Dinner {...routeProps} menu={dinner.items} />
          } />
        </div>
      </div>
    );
  }
}

export default App;


