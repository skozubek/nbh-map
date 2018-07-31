import React, { Component } from 'react';

class Header extends Component {

  render() {
    const places = this.props.places.map(place => place.name)
    return(
        <ol className="search-list">
          { places.length > 0  ?  places.map(place =>
            <li>{ place }</li>
          )  : <li>Nothing to display</li> }
      </ol>
    )
  }
}

export default Header;
