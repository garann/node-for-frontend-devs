var connect = require("connect"),
  redis = require("redis"),
  db = redis.createClient(6379, "127.0.0.1");
      
connect(
  connect.static(__dirname + "/public"),
  connect.bodyParser(),
  function(req, res) {
    var firstName = req.body.firstName,
      lastName = req.body.lastName,
      userName = firstName + " " + lastName;
    
    db.hset("users", firstName, lastName, function(err, response) {
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