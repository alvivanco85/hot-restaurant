// Dependencies
var http = require("http");
var fs = require("fs");
var express = require("express");
var path = require("path");
// PORT
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var tables = [];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all characters
app.get("/tables", function(req, res) {
  return res.json(tables);
});

app.post("/tables", function(req, res) {
var newReservation = req.body;
  console.log(newReservation);
  tables.push(newReservation);
  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var guestList = []

// function Guest(name, number, amount, id){
//   this.name = name,
//   this.number = number,
//   this.amount = amount,
//   this.id = id
// }


// Create New Guests
app.post("/api/waitlist", function(req, res) {
  var newGuest = req.body;

  newGuest.routeName = newGuest.name.replace(/\s+/g, "").toLowerCase();

  console.log(newGuest);

  guestList.push(newGuest);

  res.json(newGuest);
});

var reservList = [];

app.post("/api/reservations", function(req, res) {
  var newGuest = req.body;

  newGuest.routeName = newGuest.name.replace(/\s+/g, "").toLowerCase();

  console.log(newGuest);

  reservList.push(newGuest);

  res.json(newGuest);
});