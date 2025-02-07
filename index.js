const http = require("http");
const server = http.createServer((req, res) => {
  let method = req.method;
  if (method === "GET") {
    res.end("GET method called");
  }
  if (method === "POST") {
    res.end("POST method called");
  }
  if (method === "PUT") {
    res.end("PUT method called");
  }
  if (method === "DELETE") {
    res.end("DELETE method called");
  }
});

server.listen(6060, function () {
  console.log("Server is running on port 6060");
});
