var http = require("http");

function start() {
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Goodnight Lotties!");
    response.end();
  }

  var port = process.env.PORT || 8888;
  http.createServer(onRequest).listen(port);
  console.log("Server has started.");
}

start();

//exports.start = start;
