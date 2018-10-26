import React, { Component } from 'react';
const restaurants = require('./restaurants')

/*const countries = restaurants.map((restaurant) => {
  return restaurant.country
})

console.log(countries);*/

class Sidebar extends Component {
  //Create drop down selections
  constructor() {
    super();
    this.state = {restaurants}
  }

  render() {
    let countries = this.state;

    return (
      <div className="flex-column sidebar">
        <div className="flex-column">
          <h1>Global Eats</h1>
          <h2>-Houston-</h2>
        </div>
        <div className="dropdown">
          /*<select id="restaurant-select">
            {country.forEach((item) => {
              `<option>${item}</option>`
            })
          </select>*/
          <ul>
            {countries.map(country => (
              <li>{country.country}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Sidebar;
