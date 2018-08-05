import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import pin from './icons/beach.png';
import BeachInfo from './BeachInfo';

class Map extends Component {
  render() {
    const beaches = this.props.places;
    const bounce = window.google.maps.Animation.BOUNCE;
    const none = window.google.maps.Animation.NONE;
    //console.log(this.props.center)

    return (
      <GoogleMap
        defaultZoom={ this.props.zoom  }
        defaultCenter={ this.props.defaultCenter }
        >
        {beaches.map( beach =>
          //Add markers to the map
          //Map through the locations and generate Marker element for each element
          //if currently being mapped element happens to match the one selected
          //(selected means - one stored in App state) set it's animation prop to "bounce"
          //and add BeachInfo component which isresponisble for displaying
          //InfoWindow with places name and address
          //
          //Set up icon animation if id matches id of the current place
          //
          //onClick will call the function which will update state with
          //new selected place Id and place's name for markerInfo string
          //
          //Add infoWindow if id matches the id of current place
          //and if markerInfo has value (is not empty string)
          //
          //onCloseClick will call the function which will set markerInfo
          //to empty string when we close the infoWindow

          <Marker
            key={ beach.id }
            id={ beach.id }
            position={ {lat:beach.location.lat, lng:beach.location.lng} }
            name = { beach.name }
            address = { beach.location }
            markerInfo = { this.props.markerInfo }
            icon = { pin }

            animation={(this.props.itemSelected === beach.id) ? bounce : none }

            onClick={ () => this.props.markerClicked(beach) }
            >

            {(this.props.markerInfo && this.props.itemSelected === beach.id) &&
              (<BeachInfo
                  name={ beach.name }
                  address={ beach.name }
                  photoUrl={ beach.photoUrl }
                  onCloseClick={ this.props.markerInfoClicked }
                  getPictureUrl={ this.props.getPictureUrl }
                />)}
          </Marker>)
          }

      </GoogleMap>
    )
  }
 }

export default withScriptjs(withGoogleMap(Map));
