var http = require("http"),
  connect = require("connect");
      
connect(
  connect.static(__dirname + "/public"),
  connect.bodyParser(),
  function(req, res) {
    var userName = req.body.firstName + " " + req.body.lastName,
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
).listen(8000);