import React, { Component } from 'react';

class Sidebar extends Component {

  render() {
    return (
      <div className="flex-column sidebar">
        <div className="flex-column">
          <h1>Global Eats</h1>
          <h2>-Houston-</h2>
        </div>
        <div>
          <ul>
            {this.props.restaurant.map(restaurant => (
              <li key={restaurant.key} onClick={this.props.greet}>{restaurant.country}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Sidebar;
