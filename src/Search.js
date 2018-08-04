import React, { Component } from 'react';

class Search extends Component {

  handleSubmit = (event) => {
    //alert(this.state.query);
    event.preventDefault();
  }

  render() {
    return (
      <div className="filter">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" aria-label="Beach locations filter"
              placeholder={ 'Find the beach' }
              value={ this.props.filterString }
              onChange={ this.props.onFilterInput }
              tabIndex={ 0 }
              arialabel={ 'dupa' }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
