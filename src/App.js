import React, { Component } from 'react';
import Header from './Header'
import Hamburger from './Hamburger'
import Search from './Search'
import './App.css';
import Map from './Map';

class App extends Component {
  state = {
    zoom: 9,
    center: {
      lat: 35,
      lng: 25
      }
    }

  render() {
    const { lat, lng } = this.state.center;
    const zoom = this.state.zoom;

    return (
      <div className="App">
        <Header />
        <div className="search-bar">
          <Hamburger />
          <Search />
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
