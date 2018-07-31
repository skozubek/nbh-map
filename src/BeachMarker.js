import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import pin from './icons/beach.png';
import BeachInfo from './BeachInfo'

class BeachMarker extends Component {
  state = {
    info: false
  }

  clickInfo = () => {
    this.setState({ info: !this.state.info })
  }

  render() {
    const {lat, lng} = this.props.position;
    const name = this.props.name;
    const address = this.props.address.formattedAddress[1];
    const animation = window.google.maps.Animation.DROP;
    const info = this.state.info;

    return(
      <Marker
        position={{
          lat: lat,
          lng: lng
        }}
        animation = { animation }
        icon = { pin }
        onClick={this.clickInfo}>
        {info && (<BeachInfo name={ name } address = { address }/>)}
      </Marker>
    );
  }
}

export default BeachMarker
