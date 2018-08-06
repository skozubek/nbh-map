This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Table of Contents

- [About the App](#about-the-app)
- [Starting the App](#how-to-use-tha-app)
- [Running the app](#running-the-app)
- [Dependencies](#dependencies)

# About the app

Explore the beaches of Western Crete (Greece) - inspired by the holidays spent on this wonderful Island.
It's a final project for Udacity FEND nano degree.

# How to use the app

Application fetches the list of Western Crete beaches from Foursquare, loads their locations on the list and shows them on the map.

You can select the beach you're interested in either on the list or on the map. Once selected - additional information is displayed in map's marker info window - address and image. Again - images are fetched from Foursquare.
It's possible to filter locations. Typing in "Find the beach" input box will dynamically update the list and map with filtered locations.

# Running the app

## Developement mode on local machine

1. clone or download this repo
2. cd to the directory you stored the repo
3. install dependencies with npm install
4. start the server with npm start
5. enjoy the App visiting http://localhost:3000

## ProductionProduction mode

Build mode provides additional benefits as it utilizes service worker and make the app functional with network issues

Tu build and run the app in Production mode:

1. cd to the project's directory
2. install dependencies with npm install if you not yet didn't.
3. build the app with npm-run-build
4. install server with npm-install -g server
5. cd into "build" directory and run serve -s command
6. enjoy the App visiting http://localhost:5000

# Dependencies

1. react-google-maps https://tomchentw.github.io/react-google-maps/
which provides a set of React components wrapping the underlying Google Maps JavaScript API v3 instances.
2. escape-string-regexp for locations filtering functionality
3. Foursquare API to find places and fetch additional data about them.
