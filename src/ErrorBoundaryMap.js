import React, { Component } from 'react';
import apology from './icons/apology.png';

class ErrorBoundaryMap extends Component {

  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return(
      <div className="map-not-loaded">
        <img src={ apology } title="We're sorry, the map failed to load" alt="The guy being sorry" />
        <p>See, sometimes things go wrong.</p>
        <p>{`App couldn't load the Google map, so I've got nothing to display for you this time.`}</p>
        <p>Go grab a coffee and try agaian in a few minutes.</p>
      </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundaryMap;
