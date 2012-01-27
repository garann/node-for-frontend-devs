var http = require("http"),
  url = require("url"); 
  
http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname.split("/");
  console.log(path);
  if (req.method == "GET" && path[1] == "sayHello") {
    var userName = path[2] + " " + path[3],
      page = ["<!doctype html>",
        "<html><head><title>Hello " + userName + "</title></head>",
        "<body><h1>Hello, " + userName + "!</h1></body></html>"]
      html = page.join("");
      
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": html.length
    });
    res.end(html);
  }
}).listen(8000, "127.0.0.1");