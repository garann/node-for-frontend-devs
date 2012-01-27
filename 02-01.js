var http = require("http");  
        
http.createServer(function(req, res) {
  var page = ["<!doctype html>",
      "<html><head><title>Hello world</title></head>",
      "<body><h1>Hello, world!</h1></body></html>"]
    html = page.join("");
    
  res.end(html);
}).listen(8000);