require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./key.js");
var spotify = new Spotify(keys.spotify);
// var concert = new Concert();
// var Concert = require();

var command = process.argv[2];
var search = process.argv.slice(3).join(" ");

console.log(command, ":", search);

if (command === "spotify-this-song") {
  spotify.search({ type: "track", query: search }, function (err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log(data.tracks);
    console.log(
      (url =
        "https://rest.bandsintown.com/artists/weezer/events?app_id=codingbootcamp")
    );
  });
}

if (command === "concert-this") {
  concert.search({ type: "track", query: search }, function (err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log(data.tracks);
  });
}

if (command === "movie-this") {
  spotify.search({ type: "track", query: search }, function (err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log(data);
  });
}

if (command === "do-what-it-says") {
  spotify.search({ type: "track", query: search }, function (err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log(data);
  });
}
