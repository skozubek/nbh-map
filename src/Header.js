import React, { Component } from 'react';
import logo from './icons/logo.svg';

class Header extends Component {

  render() {
    const title = 'Explore the beaches of Western Crete (Greece)';
    return(
      <header className="App-header" role="banner">
        <img src={ logo } className="App-logo" alt="logo" />
        <h1 className="App-title">{ title }</h1>
      </header>
    )
  }
}

export default Header;
