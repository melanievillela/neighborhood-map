import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class NeighborhoodMap extends Component {
  static defaultProps = {
    center: {
      lat: 29.75,
      lng: -95.35
    },
    zoom: 11
  };

  render() {

    return (
      <div className="flex" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCEoezQTKEDQQzCOv71vNzfu5JrVjomoyo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Global Eats Houston'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default NeighborhoodMap;

// AIzaSyCEoezQTKEDQQzCOv71vNzfu5JrVjomoyo
