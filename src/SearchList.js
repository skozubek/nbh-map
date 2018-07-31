import React, { Component } from 'react';

class SearchList extends Component {

  itemClicked = (event) => {
    console.log('item clicked');
  }

  render() {
    const beaches = this.props.places;

    return(
        <ol className="search-list">
          { beaches.length > 0  ?  beaches.map(beach =>
            <li
              key={ beach.id }
              id={ beach.id }
              className="list-item"
              onClick= { this.props.handleClick }>
              { beach.name }
            </li>
          )  : <li>Loading list...</li> }
        </ol>
    )
  }
}

export default SearchList;
