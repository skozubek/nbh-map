import React, { Component } from 'react';
import Header from './Header'
import Hamburger from './Hamburger'
import Search from './Search'
import './App.css';
import Map from './Map';

class App extends Component {
  state = {
    filterString: '',
    zoom: 9,
    places: [],
    center: {
      lat: 35,
      lng: 25
      }
    }

  fetchPlaces = () => {
    //Let's use to fetch data about the beaches near our center location (Crete island)
    fetch('https://api.foursquare.com/v2/venues/search?ll=35,25&query=beach&v=20180323&limit=20&intent=browse&radius=50000&client_id=EC3IMTOJOJ05F0L00MJSK0IHOEWXX4YWQCZCDDKLROGYU10N&client_secret=GF1XG3HNSTOL2JGSZNVVUZLVFVBLHFPKVV52DA5BQIFMZSG2&X-RateLimit-Remaining')
      .then((response) => {
        return response.json();
      })
      .then((Json) => {
        debugger
        Json.meta.code === 400 ? console.log(Json.meta.errorDetail) : this.setState({ places: Json.response.venues })
      });
  }

  componentDidMount(){

    this.fetchPlaces();
  }

  handleFilterInput = (event) => {
    this.setState({query: event.target.value});
  }

  render() {
    const { lat, lng } = this.state.center;
    const zoom = this.state.zoom;

    return (
      <div className="App">
        <Header />
        <div className="search-bar">
          <Hamburger />
          <Search
            filter={ this.state.filterString }
            onFilterInput={ this.handleFilterInput }
            />
        </div>
        <main role="main">
          <div className="flex-container">
            <div className="search-list">
              <ul>
                <li>slahfdsja</li>
                <li>slahfdsja</li>
              </ul>
            </div>
            <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEe8hH_EmGU_py7z8VkxRprOP8_5-s9YU&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div id="loading-element" style={{  height: '100%' }} />}
                containerElement={<div className="map-container"/>}
                mapElement={<div id="map-element" style={{ width: '100%', height: '100%' }} />}
                defaultCenter={{ lat: lat, lng: lng }}
                markerPosition={{ lat: lat, lng: lng }}
                zoom={ zoom }
              />
            </div>
        </main>
      </div>
    );
  }
}

export default App;
