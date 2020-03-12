// Dependencies
var http = require("http");
var fs = require("fs");
var express = require("express");

var app = express();

// PORT
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Response on localhost:3000
function handleRequest(request, response) {
  response.end("Path hit:" + request.url);
}

// Log for terminal
var server = http.createServer(handleRequest);
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

var guestList = []

// function Guest(name, number, amount, id){
//   this.name = name,
//   this.number = number,
//   this.amount = amount,
//   this.id = id
// }


// Create New Guests
app.post("/api/reservations", function(req, res) {
  var newGuest = req.body;

  newGuest.routeName = newGuest.name.replace(/\s+/g, "").toLowerCase();

  console.log(newGuest);

  guestList.push(newGuest);

  res.json(newGuest);
});