import React, { Component } from 'react';

class Hamburger extends Component {

handleClick = (e) => {
    //hamburger
    let element = e.target;
    let parent = element.parentElement;
    console.log('parent')
    if(element.classList[0].includes('bar')){
      element = parent;
    }
    element.classList.toggle("change");
  }

  render() {
    return (
      <div className="hamburger" onClick={e => this.handleClick(e)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    )
  }
 }

export default Hamburger;
