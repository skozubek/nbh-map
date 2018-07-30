import React, { Component } from 'react';

class Search extends Component {
  state = {
    query: ''
  }

  handleChange = (event) => {
    this.setState({query: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.query);
    event.preventDefault();
  }

  render() {
    return (
      <div className="filter">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder={ 'Find the beach' } value={this.state.query} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
