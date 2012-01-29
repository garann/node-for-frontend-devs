var http = require("http");  
        
http.createServer(function(req, res) {
  var html = "<!doctype html>" +
      "<html><head><title>Hello world</title></head>" +
      "<body><h1>Hello, world!</h1></body></html>";
  
  res.writeHead(200, {
  	"Content-Type": "text/html",
  	"Content-Length": html.length
  });
    
  res.end(html);
}).listen(8000);