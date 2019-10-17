//Dependencies
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");


// Requiring Comment and Article models
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");

// Requiring routing controllers
var htmlRouter = require("./controllers/htmlRoutes.js");
var articleRouter = require("./controllers/articleRoutes.js");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
//var db = require("./models");



// Initialize Express
var PORT = process.env.PORT ||3001;
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Initialize Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routing
app.use("/", htmlRouter);
app.use("/", articleRouter);

// Make public a static folder
app.use(express.static("public"));

// Database configuration with mongoose
var URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/news-scraper'; 
mongoose.connect(URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
 });
var db = mongoose.connection;


db.on("open", function () {
    console.log("Mongoose connection successful.");
// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
 });
});
