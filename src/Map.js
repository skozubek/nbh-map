import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import pin from './icons/beach.png';

class Map extends Component {

state  = {
  themap: {}
}

  mapMoved = () => {
    console.log('mapMoved: ' + this.state.themap.keys);
  }

  mapLoaded = (map) => {
    console.log('mapLoaded: ' + map.getCenter());
    this.setState({ themap: map });

  }

  render() {
    return (
      <GoogleMap
        onDragEnd={this.mapMoved}
        ref={this.mapLoaded}
        defaultZoom={ this.props.zoom  }
        defaultCenter={ this.props.defaultCenter }
        >
        <Marker
          position={ this.props.markerPosition }
          animation = { this.props.markerAnimation }
          icon = {pin}
        />
      </GoogleMap>
    )
  }
 }

export default withScriptjs(withGoogleMap(Map));
