import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import pin from './icons/beach.png';

class Map extends Component {
   render() {


   const MyMap= withScriptjs(withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 35, lng: 25 } }
        defaultZoom = { 9 }
      >
        <Marker
          position = { { lat: 35, lng: 25} }
          icon = { pin }
          animation = { window.google.maps.Animation.DROP }
        />
      </GoogleMap>
   )));
   return(
        <MyMap
          googleMapURL = { 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAEe8hH_EmGU_py7z8VkxRprOP8_5-s9YU&v=3.exp&libraries=geometry,drawing,places' }
				  loadingElement = { <div style={{ height: '100%' }} /> }
          containerElement = { <div className='map-container' style={{ height: '1000px', width: '100%' }} /> }
          mapElement = { <div style = { { height: '100%' } } /> }>
        </MyMap>
   );
   }
};
export default Map;
