import React, { Component } from 'react';

class Hamburger extends Component {

handleClick = (event) => {
    //hamburger
    let element = event.target;
    const parent = element.parentElement;
    const list = document.querySelector('.search-list');

    if(element.classList[0].includes('bar')){
      element = parent;
    }
    element.classList.toggle('change');
    list.classList.toggle('search-list-open');
  }

  render() {
    return (
      <div className="hamburger" onClick={event => this.handleClick(event)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    )
  }
 }

export default Hamburger;
