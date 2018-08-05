import React, { Component } from 'react';
import { InfoWindow } from 'react-google-maps';

export class BeachInfo extends Component {

  render() {
    const name = this.props.name;
    const address = this.props.address;
    const url = this.props.photoUrl;

    return(
      <InfoWindow onCloseClick={this.props.onCloseClick}>
        <div>
          <h3>{ name }</h3>
          <p>{ address }</p>
          <img
          src={ url }
          title={ name }
          alt={ {name} } />
        </div>
      </InfoWindow>
    );
  }
}

export default BeachInfo;
