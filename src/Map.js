import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import BeachMarker from './BeachMarker';

class Map extends Component {
  render() {
    const beaches = this.props.places;

    return (
      <GoogleMap
        defaultZoom={ this.props.zoom  }
        defaultCenter={ this.props.defaultCenter }
        >
        {beaches.map( beach => <BeachMarker
                                key={ beach.id }
                                id= { beach.id }
                                position={ {lat:beach.location.lat, lng:beach.location.lng} }
                                name = { beach.name }
                                markerClicked = { this.props.markerClicked }
                                address = { beach.location }
                                currentSelected = { this.props.currentSelected }
                                prevSelected = { this.props.prevSelected }
                                markerInfo = { this.props.markerInfo }
                                />) }

      </GoogleMap>
    )
  }
 }

export default withScriptjs(withGoogleMap(Map));
