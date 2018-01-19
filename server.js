// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Custom imported Modules
// =============================================================
var htmlRoutes = require('./routes/htmlRoutes')
var apiRoutes = require('./routes/apiRoutes')
var wallpapers = require('./data/wallpapers');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
htmlRoutes(app);
apiRoutes(app, wallpapers);

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
