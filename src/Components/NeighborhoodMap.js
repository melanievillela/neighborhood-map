import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

class NeighborhoodMap extends Component {

  static defaultProps = {
    center: {
      lat: 29.75,
      lng: -95.35
    },
    zoom: 12,
  }

  /*
  constructor(props) {
    super(props);
    this.showHi = this.showHi.bind(this);
  }
  */

  showHi = () => {
    // This outputs correctly console.log("Works");
    // This outputs correctly console.log(this.props.restaurant[0].country);
    console.log(this)
  }

  render() {
    const Markers = () => {
      return <div><FontAwesomeIcon icon={faUtensils} size="2x" color="#E57200"/></div>
    };

    return (
      <div className="flex map" style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCEoezQTKEDQQzCOv71vNzfu5JrVjomoyo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.restaurant.map(restaurant => (
            <Markers 
              className="marker" 
              key={restaurant.key}
              lat={restaurant.lat}
              lng={restaurant.lng}
              name={restaurant.retaurantName}
              
              onChildClick={this.showHi}
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


                markers.forEach(marker => {
      marker.addEventListener("click", function(){
        alert ("Hello World");
      });
    }

    
  componentDidMount: function() {
    let markers = document.querySelectorAll(".marker");
    markers[0].addEventListener("mouseover", function(){
      console.log("Hello World");
    });
  };
          />*/