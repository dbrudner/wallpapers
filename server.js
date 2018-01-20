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
var port = process.env.PORT || 3000;;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
apiRoutes(app, wallpapers);
htmlRoutes(app);


// // Get all wallpapers
// app.get("/all", function(req, res) {
//   res.json(wallpapers);
// });


// Create New wallpapers - takes in JSON input


// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
