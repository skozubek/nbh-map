import React, { Component } from 'react';

class SearchList extends Component {

render() {
    const beaches = this.props.places;

    return(
        <ol className="search-list">
          { (beaches && beaches.length > 0)  ?  beaches.map((beach, index) =>
            <li
              tabIndex= { 0 }
              key={ beach.id }
              id={ beach.id }
              className="list-item"
              onKeyDown={ this.props.handleClick }
              onClick={ this.props.handleClick }>
              { beach.name }
            </li>
          )  :
            <li>Fetching places from Forsquare failed...</li>
          }
        </ol>
    )
  }
}

export default SearchList;
