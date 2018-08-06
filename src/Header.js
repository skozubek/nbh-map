import React, { Component } from 'react';
import logo from './icons/logo.svg';
import fsqIcon from './icons/foursquare-icon.png';

class Header extends Component {

  render() {
    const title = 'Explore the beaches of Western Crete (Greece)';
    const attribution = 'Powerd by Foursquare ';
    return(
      <header className="App-header" role="banner" aria-label="Application Header">
        <img src={ logo } className="App-logo" alt="logo" />
        <h1 className="App-title">{ title }</h1>
        <h2 className="attribution">{ attribution }
          <a href="https://foursquare.com" title="link to foursquare.com" rel="noopener noreferrer" target="_blank">
            <img src={ fsqIcon } className="fsq-logo" title="Powered by Foursquare" alt="Foursquare logo" />
          </a>
        </h2>
      </header>
    )
  }
}

export default Header;
