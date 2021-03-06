// turn on dotenv to load up environment variales from .env file
require("dotenv").config();

// import modules and packages
const request = require("request");
const inquirer = require("inquirer");
const moment = require("moment");
const Spotify = require("node-spotify-api");

// load spotify keys
// import keys from "./keys.js";

// turn on new spotify app
// const spotify = new Spotify(keys);

// Function to search for concerts
function concertThis(band) {
  console.log('concertThis');
  // URL to call bands in town
  let queryURL = 'https://rest.bandsintown.com/artists/' + band + '/events?app_id=codingbootcamp';
  console.log(queryURL);

  // Call bands in town
  request(queryURL, function (error, response, body) {
    if (error) {
      console.log('Call Failed');
      return false;
    }
    if (response.statusCode === 200) {
      console.log('successful');
    }
    console.log('error:', error);
    console.log('Status Code:', response && response.statusCode);
    console.log('Body:', body);
    console.log(typeof(body));
    const text = JSON.parse(body);
    console.log('Text:', text);
    console.log(typeof(text));
    for (x in text) {
      console.log(text[x].venue.name);
      console.log(text[x].venue.city + ', ' + text[x].venue.region);
      console.log(text[x].datetime);
      const date = moment(text[x].datetime, moment.ISO_8601).format('MM/DD/YYYY');
      console.log(date);

            
    }
  })
}

// Call spotify for songs
function spotifySong(song) {
  console.log(song);
}

// Call OMDB
function movieThis(movie) {
  console.log(movie);
}

function doWhatItSays() {
  console.log("do what it says");
}

// Create a prompt to select option
inquirer
  .prompt([
    {
      type: "list"
      , name: "option"
      , message: "Pick your search?"
      , choices: ['concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says']
    },
    {
      type: "input"
      , name: "searchItem"
      , message: "Search for?"
    }
  ])
  .then(function (option) {
    console.log(option);
    
    if (option.option === 'concert-this') {
      concertThis(option.searchItem);
    }
    else if (option.option === 'spotify-this-song') {
      spotifySong(option.searchItem);
    }
    else if (option.option === 'movie-this') {
      movieThis(option.searchItem);
    }
    else {
      doWhatItSays();
    }
  })

