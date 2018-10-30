import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import NeighborhoodMap from './Components/NeighborhoodMap';

const restaurants = require('./Components/restaurants');

class App extends Component {
  state = { 
    name: restaurants.retaurantName,
    country: restaurants.country   
  }

  render() {
    return (
      <div className="flex">
        <Sidebar />
        <NeighborhoodMap />
      </div>
    );
  }
}

export default App;
