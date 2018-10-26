import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import NeighborhoodMap from './Components/NeighborhoodMap';

class App extends Component {
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
