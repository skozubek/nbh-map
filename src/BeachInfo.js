import React, { Component } from 'react';
import { InfoWindow } from 'react-google-maps';

export class BeachInfo extends Component {
  render() {
    const name = this.props.name;
    const address = this.props.address;

    return(
      <InfoWindow>
        <div>
          <h3>{ name }</h3>
          <p>{ address }</p>
        </div>
      </InfoWindow>
    );
  }
}

export default BeachInfo;
