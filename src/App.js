import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import NeighborhoodMap from './Components/NeighborhoodMap';

const restaurants = require('./Components/restaurants');

class App extends Component {
  constructor() {
    super();
    this.state = {restaurants}
  }

  render() {
    return (
      <div className="main flex">
        <Sidebar restaurant={this.state.restaurants}/>
        <NeighborhoodMap restaurant={this.state.restaurants}/>
      </div>
    );
  }
}

export default App;
