// Your server.js file should require the basic npm packages we"ve used in class: express, body-parser and path.

// DEPENDANCIES
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// EXPRESS APP SETUP
// =============================================================
const app = express();
var PORT = process.env.PORT || 8080;

// DATA PARSING
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTING
// =============================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// START SERVER - CONSOLE LOG SUCCESS.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});