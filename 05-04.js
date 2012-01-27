var connect = require("connect"),
  fs = require("fs");
      
connect(
  connect.static(__dirname + "/public"),
  connect.bodyParser(),
  function(req, res) {
    var firstName = req.body.firstName,
      lastName = req.body.lastName,
      userName = firstName + " " + lastName,
      stream;
    
    if (firstName || lastName) {
      stream = fs.createWriteStream("user_name.txt");
    } else {
      return;
    }
      
    stream.on("open", function() {
      stream.end((firstName + "," + lastName + "\n"), "utf-8");    
      var page = ["<!doctype html>",
        "<html><head><title>Hello " + userName + "</title></head>",
        "<body><h1>Hello, " + userName + "!</h1></body></html>"],
        html = page.join("");
        
      res.writeHead(200, {
        "Content-Type": "text/html",
        "Content-Length": html.length
      });
      res.end(html);
    });
  }
).listen(8000);