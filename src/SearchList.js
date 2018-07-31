import React, { Component } from 'react';

class Header extends Component {

  render() {
    const beaches = this.props.places;

    return(
        <ol className="search-list">
          { beaches.length > 0  ?  beaches.map(beach =>
            <li key= {beach.id} className="list-item">{ beach.name }</li>
          )  : <li>Loading list...</li> }
        </ol>
    )
  }
}

export default Header;
