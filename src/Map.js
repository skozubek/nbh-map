import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import pin from './icons/beach.png';

class Map extends Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={ this.props.zoom  }
        defaultCenter={ this.props.defaultCenter }
        >
        <Marker
          position={ this.props.markerPosition }
          animation = { this.props.markerAnimation }
          icon = { pin }
        />
      </GoogleMap>
    )
  }
 }

export default withScriptjs(withGoogleMap(Map));
