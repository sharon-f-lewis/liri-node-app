// import modules and packages
const request = require("request");

// turn on dotenv to load up environment variales from .ev file
require("dotenv").config;

// load spotify keys
const spotifyKeys = require("./keys.js");

// turn on new spotify app
const spotify = newSpotify(spotifyKeys);