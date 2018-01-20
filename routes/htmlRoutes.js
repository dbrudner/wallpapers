const path = require('path');

function hello(app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	app.get("/suggestion", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/suggestion.html"));
	});

	app.get("/view", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/view.html"));
	});

	app.get("/add", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/add.html"));
	});

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
}

module.exports = hello;