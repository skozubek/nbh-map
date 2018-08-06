import React, { Component } from 'react';
import Header from './Header';
import Hamburger from './Hamburger';
import Search from './Search';
import SearchList from './SearchList';
import './App.css';
import Map from './Map';
import escapeRegExp from 'escape-string-regexp';
import ErrorBoundaryMap from './ErrorBoundaryMap';
import apology from './icons/apology.png';
import { GOOGLE_MAP_KEY } from './Keys';
import { FSQ_ID } from './Keys';
import { FSQ_SECRET } from './Keys';

class App extends Component {
  state = {
    itemSelected: undefined, //currently selected item on the list and map
    filterString: '', //user entered filter for itemSelected
    mapError: false,  //flag for maps error handling
    forsquareError: false, //flag for forsquare error handling
    forsquareErrorMsg: '', //to use with error message in error handler
    zoom: 10,   //map's zoom
    places: [], //the list of places
    photos: [], //the list of foto urls for places
    filteredplaces: [], //array with filtered places (based on filterString
    position: {
      //Initial position of Chania town, Crete
      //Than position of selected place
      lat: 35.51124,
      lng: 24.02921
    },
    markerInfo: '' //Text displayed on markerInfo
    }

  //Using Forsquare API fetch beaches in western Crete based on center in Chania City
  fetchPlaces = () => {
    //Fetch data about the beaches near our center location (Chania, Crete island)
    fetch(`https://api.foursquare.com/v2/venues/search?ll=
      ${this.state.position.lat},${this.state.position.lng}
      &query=beach&v=20180323&limit=8&intent=browse&radius=150000&client_id=
      ${FSQ_ID}&client_secret= ${FSQ_SECRET}`)
      .then((response) => {
        return response.json();
      })
      .then((Json) => {
        this.setState({ places: Json.response.venues });
        return Json.response.venues;
      })
      .then((places) => this.fetchPhotos(places))
      .then((urls) => this.setState({ photos: urls }))
      .catch(err => this.setState({ forsquareError: true, forSquareErrorMsg: `Couldn't fetch places` }))
    };

  //Using Forsquare API fetch photos of the places loaded with fetchPlaces
  //It is a Promise as it performes async stuff in a loop
  fetchPhotos = (places) => {
    return new Promise((resolve, reject) => {

      let photosUrls =[];

      for (let i=0; i < places.length; i++){
      //Fetch data about the beaches near our center location (Chania, Crete island)
        fetch(`https://api.foursquare.com/v2/venues/${places[i].id}?client_id=${FSQ_ID}&client_secret=${FSQ_SECRET}&v=20180323`)
        .then((response) => {
          return response.json();
        })
        .then((Json) => {
          let url = `${Json.response.venue.photos.groups[1].items[1].prefix}250x300${Json.response.venue.photos.groups[1].items[1].suffix}`;
          photosUrls.push(url);
          places[i]['photoUrl'] = url;
        })
        .catch(err => this.setState({ forsquareError: true,  forsquareErrorMsg: `Couldn't fetch photos` }))
      }
      resolve(photosUrls);
      reject('Something went wrong while fetching photo url...');
    });
  }

  //We fetch places when component did mount
  componentDidMount(){
    this.fetchPlaces();
  }

  //***** LiSt related stuff ********//

  //When list item is clicked set current item selected in state
  //and highlight the element on the list
  handleListItemClicked = (event) => {
    //based on id get the selected beach and set the state apropriately
    if((event.type === 'keydown' && event.keyCode === 13) || event.type === 'click'){
    const index = this.state.places.findIndex((element) => element.id === event.target.id);
    const beach = this.state.places[index];
    this.setState({
      position: {lat: beach.location.lat, lng: beach.location.lng},
      markerInfo: beach.name,
      itemSelected: beach.id
    })

    //visualy update the list highlighting clicked item if not highlighted already
    const highlightedItems = document.querySelectorAll(".list-item-highlight");
    //if element highlighted already then un-highlight it
    if(highlightedItems.length > 0){
      highlightedItems[0].classList.toggle('list-item-highlight');
    }
    //highlight an element
    event.target.classList.toggle('list-item-highlight');
  }
}

  //Function to highlight list element from outside (MarkerClicked)
  highlightListItem = () => {

    const selectedId = this.state.itemSelected;
    const highlightItem = document.querySelectorAll(".list-item");

    highlightItem.forEach(item => {
      if ([...item.classList].includes('list-item-highlight')){
        item.classList.remove('list-item-highlight');
      }
      if (item.id === selectedId){
        item.classList.add('list-item-highlight');
      }
    });
  }

  //Filter locations with user's input
  handleFilterInput = (event) => {
    const filter = event.target.value;
    const places = this.state.places;
    this.setState({ filterString: event.target.value });
    //DOM elements
    const list = document.querySelector('.search-list');
    const hamburger = document.querySelector('.hamburger');

    //based on search functionality in Udacity lessons (Contacts App)
    let showingLocations;
    if (filter) {
      const match = new RegExp(escapeRegExp(filter), 'i');
      list.classList.add('search-list-open');
      hamburger.classList.add('change');

      showingLocations = places.filter((place) => match.test(place.name))

    } else {
      list.classList.remove('search-list-open');
      hamburger.classList.remove('change');
      showingLocations = places;
    }
    this.setState( {filteredplaces: showingLocations})
  }

  //***** Maps related stuff ********//
  onMapMounted = (map) => {
    //listen for google maps authorisation error
    window.gm_authFailure = () => {
    this.setState({ mapError: true });
    };
  }

  markerClicked = (beach) => {
    this.setState({
      markerInfo: beach.name,
      itemSelected: beach.id
    })

    //highlited clicked item on the list
    this.highlightListItem();
  }

  markerInfoClicked = () => {
    this.setState({ markerInfo: '' });
  }

  render() {
    const { lat, lng } = this.state.position;
    const zoom = this.state.zoom;
    const places = this.state.filteredplaces.length > 0 ? this.state.filteredplaces : this.state.places
    const errorFsq = this.state.forsquareError;
    const errorFsqMsg = this.state.forsquareErrorMsg;
    const errorMap = this.state.mapError;

    return (
      <div className="App">
        <Header />
        <div className="search-bar">
          <Hamburger />
          <Search
            aria-label={ `Filter list of beaches` }
            filter={ this.state.filterString }
            onFilterInput={ this.handleFilterInput }
            />
        </div>
        <main role="main">
          <div className="flex-container">
            <SearchList
              role={ `navigation` }
              places={ places }
              handleClick = { this.handleListItemClicked }
              handleEnter = { this.handleListItemEntered }
              forsquareError={ errorFsq }
              forsquareErrorMsg={ errorFsqMsg }
              />
            <ErrorBoundaryMap>
            { !errorMap ? (<Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={ <div id="loading-element"/> }
                containerElement={ <div className="map-container"/> }
                ref={ this.onMapMounted }
                errorMap={ errorMap }
                mapElement={ <div id="map-element" role="application"/> }
                defaultCenter={{ lat: lat, lng: lng }}
                places={ places }
                zoom={ zoom }
                markerClicked={ this.markerClicked }
                markerInfoClicked={ this.markerInfoClicked }
                markerInfo={ this.state.markerInfo }
                itemSelected={ this.state.itemSelected }
                forsquareError={ errorFsq }
                forsquareErrorMsg={ errorFsqMsg }
              />) : (<div className="map-not-loaded">
                <img src={ apology } title="We're sorry, the map failed to load" alt="The guy being sorry" />
                <p>See, sometimes things go wrong.</p>
                <p>{`Google map authorisation stuff failed, so I've got nothing to display for you this time.`}</p>
                <p>Go grab a coffee and try agaian in a few minutes.</p>
              </div>)
            }
            </ErrorBoundaryMap>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
