var express = require("express");
//var exphbs = require("express-handlebars");

var app = express();

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/saved", (req, res) => {
	res.render("saved");
});


// app.use ('/Articles', require('models/Articles'));
// app.use('/Notes', require('models/Notes'));
module.exports = app;