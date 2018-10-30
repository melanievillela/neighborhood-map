import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

const restaurants = require('./restaurants');

class NeighborhoodMap extends Component {
  restaurants = this.state;
  
  static defaultProps = {
    center: {
      lat: 29.75,
      lng: -95.35
    },
    zoom: 12,
  };

  render() {
    const Markers = (props) => {
      return <div><FontAwesomeIcon icon={faUtensils} size="2x" color="#E57200" /><h1>{}</h1></div>
    };

    return (
      <div className="flex map" style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCEoezQTKEDQQzCOv71vNzfu5JrVjomoyo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {restaurants.map(restaurant => (
            <Markers key={restaurant.key}
              name={restaurant.restaurantName}
              lat={restaurant.lat}
              lng={restaurant.lng}
            />
          ))}
        </GoogleMapReact>
      </div>
    )
  }
}

export default NeighborhoodMap;

// AIzaSyCEoezQTKEDQQzCOv71vNzfu5JrVjomoyo  

//const Marker = ({ text }) => <div><FontAwesomeIcon icon={faUtensils} />{text}</div>;

/*<Marker
            lat={29.75}
            lng={-95.35}
            text={restaurants[0].retaurantName}
          />*/