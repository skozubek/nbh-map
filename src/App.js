import React, { Component } from 'react';
import logo from './icons/logo.svg';
import Hamburger from './Hamburger'
import './App.css';
import Map from './Map';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header" role="banner">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">The most beautifull beaches on Crete (Greece)</h1>
          <Hamburger />

            <p className="App-intro">Explore the most beautiful beaches on Crete</p>


        </header>
        <main role="main">

          <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEe8hH_EmGU_py7z8VkxRprOP8_5-s9YU&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%`}}  />}
              mapElement={<div style={{ height: `100%` }} />}
              defaultCenter={{ lat: 35, lng: 25 }}
              markerPosition={{ lat: 35, lng: 25 }}
              //markerAnimation={ window.google.maps.Animation.DROP }
              zoom={ 10 }

            />
        </main>
      </div>
    );
  }
}

export default App;
