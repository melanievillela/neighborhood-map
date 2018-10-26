import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

const restaurants = require('./restaurants');

class NeighborhoodMap extends Component {
  static defaultProps = {
    center: {
      lat: 29.75,
      lng: -95.35
    },
    zoom: 11,
  };

  render() {
    const Marker = ({ text }) => <div><FontAwesomeIcon icon={faUtensils} />{text}</div>;

    return (
      <div className="flex map" style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCEoezQTKEDQQzCOv71vNzfu5JrVjomoyo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={29.75}
            lng={-95.35}
            text={restaurants[0].retaurantName}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default NeighborhoodMap;

// AIzaSyCEoezQTKEDQQzCOv71vNzfu5JrVjomoyo
