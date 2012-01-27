var http = require("http"),
  querystring = require("querystring"),
  redis = require("redis"),
  db = redis.createClient(6379, "127.0.0.1"); 

http.createServer(function(req, res) {
  var qs = querystring.parse(req.url.split("?")[1]),
    firstName = qs.firstName;
  
  db.get(firstName, function(err, lastName) {
    var userName = firstName + " " + lastName,
      page = ["<!doctype html>",
        "<html><head><title>Hello " + userName + "</title></head>",
        "<body><h1>Hello, " + userName + "!</h1></body></html>"]
      html = page.join("");
    
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": html.length
    });
    res.end(html);
    
  });
}).listen(8000, "127.0.0.1");