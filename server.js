// Dependencies
var http = require("http");
var fs = require("fs");

// PORT
var PORT = 3000;

// Response on localhost:3000
function handleRequest(request, response) {
  response.end("Path hit:" + request.url);
}

// Log for terminal
var server = http.createServer(handleRequest);
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
