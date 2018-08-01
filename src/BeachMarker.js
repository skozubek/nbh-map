import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import pin from './icons/beach.png';
import BeachInfo from './BeachInfo'

class BeachMarker extends Component {

  render() {
    const {lat, lng} = this.props.position;
    const name = this.props.name;
    const address = this.props.address.formattedAddress[1];
    let animation = window.google.maps.Animation.DROP;
    const info = this.props.markerInfo;
    const id = this.props.id;

    if(info){
      animation = window.google.maps.Animation.BOUNCE;
    }

    return(
      <Marker
        position={{
          lat: lat,
          lng: lng
        }}
        animation = { animation }
        icon = { pin }
        onClick={ () => this.props.markerClicked(id) }>
        {info && (<BeachInfo
                  name={ name }
                  address={ address }
                  onCloseClick={ () => this.props.markerClicked(id) } />)}
      </Marker>
    );
  }
}

export default BeachMarker
