// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars wallpapers (DATA)
// =============================================================
var wallpapers = [
  {
    routeName: "juno",
    name: "Juno",
    textured: 7,
    aggression: 3,
    playfulness: 7,
    activeness: 7,
    contrast: 7,
    geometricIntegrity: 9,
    patterned: 9,
    novelty: 3,
    colorfulness: 4,
    sourceImage: 'https://dty8d8u6se0an.cloudfront.net/media/image/thumbnail/juno_50254_2000x700.jpg',
    link: 'https://www.wallpaperfromthe70s.com/wallpaper-patterns/geometric-wallpaper/437/juno?c=81'
  },
  {
    routeName: "tintalousa",
    name: "Tinta Lousa",
    textured: 1,
    aggression: 9,
    playfulness: 7,
    activeness: 5,
    contrast: 6,
    geometricIntegrity: 9,
    patterned: 1,
    novelty: 9,
    colorfulness: 1,
    sourceImage: 'https://dty8d8u6se0an.cloudfront.net/media/image/thumbnail/Tinta-Lousa-Wallpaper-A_863161_2000x700.jpg',
    link: 'https://www.wallpaperfromthe70s.com/wallpaper-patterns/novelty-wallpaper/1693/tinta-lousa-wallpaper?c=81'
  },
  {
    routeName: "hirolanit",
    name: "Hirolanit",
    textured: 4,
    aggression: 3,
    playfulness: 2,
    activeness: 3,
    contrast: 3,
    geometricIntegrity: 9,
    patterned: 10,
    novelty: 3,
    colorfulness: 2,
    sourceImage: 'https://dty8d8u6se0an.cloudfront.net/media/image/thumbnail/hirolanit_820602_2000x700.jpg',
    link: 'https://www.wallpaperfromthe70s.com/wallpaper-patterns/geometric-wallpaper/1240/hirolanit?c=81'

  },
  {
    routeName: "kassandra",
    name: "Kassandra",
    textured: 7,
    aggression: 7,
    playfulness: 5,
    activeness: 9,
    contrast: 6,
    geometricIntegrity: 9,
    patterned: 7,
    novelty: 7,
    colorfulness: 6,
    sourceImage: 'https://dty8d8u6se0an.cloudfront.net/media/image/thumbnail/820751_Kassandra_2000x700.jpg',
    link: 'https://www.wallpaperfromthe70s.com/wallpaper-patterns/novelty-wallpaper/1487/kassandra'

  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/suggestion", function(req, res) {
  res.sendFile(path.join(__dirname, "suggestion.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// // Get all wallpapers
// app.get("/all", function(req, res) {
//   res.json(wallpapers);
// });

// Search for Specific Character (or all wallpapers) - provides JSON
app.get("/api/:wallpapers?", function(req, res) {
  var papers = req.params.wallpapers;

  if (papers) {
    papers;

    for (var i = 0; i < wallpapers.length; i++) {
      if (papers === wallpapers[i].routeName) {
        res.json(wallpapers[i]);
      }
    }
    res.json(false);
  }
  res.json(wallpapers);
});

// Create New wallpapers - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newwallpaper = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newwallpaper.routeName = newwallpaper.name.replace(/\s+/g, "").toLowerCase();

  console.log(newwallpaper);

  wallpapers.push(newwallpaper);

  res.json(newwallpaper);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
