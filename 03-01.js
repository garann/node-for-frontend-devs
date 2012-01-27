var http = require("http"),
  querystring = require("querystring"); 
  
http.createServer(function(req, res) {

  var qs = querystring.parse(req.url.split("?")[1]),
    userName = qs.firstName + " " + qs.lastName,
    page = ["<!doctype html>",
      "<html><head><title>Hello " + userName + "</title></head>",
      "<body><h1>Hello, " + userName + "!</h1></body></html>"]
    html = page.join("");
  res.writeHead(200, {
    "Content-Type": "text/html",
    "Content-Length": html.length
  });
  res.end(html);
}).listen(8000, "127.0.0.1");