import React, { Component } from 'react';

class SearchList extends Component {

  itemClicked = (event) => {
    console.log('item clicked');
  }

  render() {
    const beaches = this.props.places;

    return(
        <ol className="search-list">
          { beaches.length > 0  ?  beaches.map((beach, index) =>
            <li
              tabIndex= { 0 }
              key={ beach.id }
              id={ beach.id }
              className="list-item"
              onKeyDown={ this.props.handleClick }
              onClick={ this.props.handleClick }>
              { beach.name }
            </li>
          )  : <li>Loading list...</li> }
        </ol>
    )
  }
}

export default SearchList;
