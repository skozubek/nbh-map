import React, { Component } from 'react';
import logo from './logo.svg';
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
        <main className="App-intro" role="main">
          <p>Explore the most beautiful beaches on Crete</p>
        </main>
          <Map />
      </div>
    );
  }
}

export default App;

//we use  async script loader for google map API as recommended in react-google-maps documentation
// export default scriptLoader(
//     [`https://maps.googleapis.com/maps/api/js?key=AIzaSyAEe8hH_EmGU_py7z8VkxRprOP8_5-s9YU}`]
// )(App);
