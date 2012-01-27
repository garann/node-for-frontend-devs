var http = require("http"),
  fs = require("fs"),
  querystring = require("querystring");  
  
http.createServer(function(req, res) {
  var data = "",
    params,
    userName;

  if (req.method == "GET") {
    getFile(__dirname + "/public/dumbForm.html", res);
  }
    
  if (req.method == "POST") {
    req.on("data", function(chunk) {
      data += chunk;
    });
    req.on("end", function() {
      params = querystring.parse(data);
      userName = params.firstName + " " + params.lastName,
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
  }
}).listen(8000, "127.0.0.1");

function getFile(localPath, res) {
  fs.readFile(localPath, function(err, contents) {
    if (!err) {
      res.writeHead(200, {
        "Content-Type": "text/html",
        "Content-Length": contents.length
      });
      res.end(contents);
    } else {
      res.writeHead(500);
      res.end();
    }
  });
}