import React, { Component } from 'react';
import Header from './Header';
import Hamburger from './Hamburger';
import Search from './Search';
import SearchList from './SearchList';
import './App.css';
import Map from './Map';
import escapeRegExp from 'escape-string-regexp';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  state = {
    itemSelected: undefined,
    filterString: '',
    zoom: 10,
    places: [],
    photos: [],
    filteredplaces: [],
    position: {
      //location of Chania town, Crete
      lat: 35.51124,
      lng: 24.02921
    },
    markerInfo: ''
    }

  //Using Forsquare API fetch beaches in western Crete based on center in Chania City
  fetchPlaces = () => {
    //Fetch data about the beaches near our center location (Chania, Crete island)
    fetch(`https://api.foursquare.com/v2/venues/search?ll=${this.state.position.lat},${this.state.position.lng}&query=beach&v=20180323&limit=2&intent=browse&radius=150000&client_id=EC3IMTOJOJ05F0L00MJSK0IHOEWXX4YWQCZCDDKLROGYU10N&client_secret=GF1XG3HNSTOL2JGSZNVVUZLVFVBLHFPKVV52DA5BQIFMZSG2`)
      .then((response) => {
        return response.json();
      })
      .then((Json) => {
        this.setState({ places: Json.response.venues });
      })
      .catch(err => alert(err));
  }

  fetchPhotos = (places) => {
    //Fetch data about the beaches near our center location (Chania, Crete island)
    places.map( place => {
      fetch(`https://api.foursquare.com/v2/venues/${place.id}?client_id=EC3IMTOJOJ05F0L00MJSK0IHOEWXX4YWQCZCDDKLROGYU10N&client_secret=GF1XG3HNSTOL2JGSZNVVUZLVFVBLHFPKVV52DA5BQIFMZSG2&v=20180323`)
      .then((response) => {
        return response.json();
      })
      .then((Json) => {
        return Json.response.venue.photos.count}
      )
      .catch(err => alert(err));
    })
  }

  //We fetch places when component did mount
  componentDidMount(){
    this.fetchPlaces();
    setTimeout(() => {
      const places = this.state.places;
      this.fetchPhotos(places); }, 3000);
  }
  //***** LiSt related stuff ********//

  //When list item is clicked set current item selected in state
  //and highlight the element on the list
  handleListItemClicked = (event) => {
    //based on id get the selected beach and set the state apropriately
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

  handleFilterInput = (event) => {
    const filter = event.target.value;
    const places = this.state.places;
    this.setState({ filterString: event.target.value });
    //based on search functionality in Udacity lessons (Contacts App)
    let showingLocations;
    if (filter) {
      const match = new RegExp(escapeRegExp(filter), 'i')
      showingLocations = places.filter((place) => match.test(place.name))
    } else {
      showingLocations = places;
    }
    this.setState( {filteredplaces: showingLocations})
  }

  //***** Markers related stuff ********//

  markerClicked = (beach) => {

    this.setState({
      markerInfo: beach.name,
      itemSelected: beach.id
    })

    //highlited cliced item on the list
    this.highlightListItem();
  }

  markerInfoClicked = () => {
    this.setState({ markerInfo: '' });
  }

  render() {
    const { lat, lng } = this.state.position;
    const zoom = this.state.zoom;
    const places = this.state.filteredplaces.length > 0 ? this.state.filteredplaces : this.state.places


    return (
      <ErrorBoundary>
      <div className="App">
        <Header />
        <div className="search-bar">
          <Hamburger />
          <Search
            filter={ this.state.filterString }
            onFilterInput={ this.handleFilterInput }
            />
        </div>
        <main role="main">
          <div className="flex-container">
            <SearchList
              places={ places }
              handleClick = { this.handleListItemClicked }
              />
            <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEe8hH_EmGU_py7z8VkxRprOP8_5-s9YU&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={ <div id="loading-element" style={{  height: '100%' }} /> }
                containerElement={ <div className="map-container"/> }
                mapElement={ <div id="map-element" style={{ width: '100%', height: '100%' }} /> }
                defaultCenter={{ lat: lat, lng: lng }}
                places={ places }
                zoom={ zoom }
                markerClicked={ this.markerClicked }
                markerInfoClicked={ this.markerInfoClicked }
                markerInfo={ this.state.markerInfo }
                itemSelected={ this.state.itemSelected }
                getPictureUrl={ this.getPictureUrl }
              />
            </div>
        </main>
      </div>
    </ErrorBoundary>);
  }
}

export default App;
