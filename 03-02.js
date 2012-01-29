var http = require("http"),
  url = require("url"); 
  
http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname.split("/");
  
  if (req.method == "GET" && path[1] == "sayHello") {
    var userName = path[2] + " " + path[3],
      html = "<!doctype html>" +
        "<html><head><title>Hello " + userName + "</title></head>" +
        "<body><h1>Hello, " + userName + "!</h1></body></html>";
      
    res.end(html);
  }
}).listen(8000);