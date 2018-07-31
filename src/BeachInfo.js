import React, { Component } from 'react';
import { InfoWindow } from 'react-google-maps';

export class BeachInfo extends Component {
  render() {
    const name = this.props.name;

    return(
      <InfoWindow>
        <div>
          <h3>{name}</h3>
        </div>
      </InfoWindow>
    );
  }
}

export default BeachInfo;
