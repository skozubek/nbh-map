import React, { Component } from 'react';
import logo from './icons/logo.svg';
import './App.css';
import Map from './Map';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header" role="banner">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The most beautifull beaches on Crete (Greece)</h1>
        </header>
        <main role="main">
          <p className="App-intro">Explore the most beautiful beaches on Crete</p>
          <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEe8hH_EmGU_py7z8VkxRprOP8_5-s9YU&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%`}}  />}
              mapElement={<div style={{ height: `100%` }} />}
            />
        </main>
      </div>
    );
  }
}

export default App;
