import React, { Component } from 'react';
import { InfoWindow } from 'react-google-maps';

export class BeachInfo extends Component {

  render() {
    const name = this.props.name;
    const address = this.props.address;
    const url = this.props.photoUrl;
    const fetchPhotoError = this.props.forsquareError && this.props.forsquareErrorMsg === `Couldn't fetch photos`;

    return(
      <InfoWindow onCloseClick={this.props.onCloseClick}>
        <div>
          <h3>{ name }</h3>
          <p>{ address }</p>
          {!fetchPhotoError ? (
            <img
              src={ url }
              title={ name }
              alt={ {name} } />
            ) : (
              <p>{`Fetching photo from Forsquare failed`}<br/>
              {`It's an awesome beach, try `}<a href={`http://www.google.com/search?q=${name} + photo`} title={ name } target="_blank">
              {`google photo search `}</a>{`to check it out!`}</p>
              )
          }
        </div>
      </InfoWindow>
    );
  }
}

export default BeachInfo;
