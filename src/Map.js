import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import pin from './icons/beach.png';

class Map extends Component {

  render() {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
        <Marker
          position={{ lat: -34.397, lng: 150.644 }}
          animation = { window.google.maps.Animation.DROP }
          icon = {pin}
        />
      </GoogleMap>
    )
  }
 }

export default withScriptjs(withGoogleMap(Map));
