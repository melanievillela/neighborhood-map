import React, { Component } from 'react';

const restaurants = require('./restaurants');

class Sidebar extends Component {
  restaurants = this.state;

  render() {
    return (
      <div className="flex-column sidebar">
        <div className="flex-column">
          <h1>Global Eats</h1>
          <h2>-Houston-</h2>
        </div>
        <div>
          <ul>
            {restaurants.map(restaurant => (
              <li key={restaurant.key}>{restaurant.country}</li>
            ))}
          </ul>
          </div>
      </div>
    );
  }
}
export default Sidebar;
