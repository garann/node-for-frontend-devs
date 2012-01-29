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
      var html = "<!doctype html>" +
        "<html><head><title>Hello " + userName + "</title></head>" +
        "<body><h1>Hello, " + userName + "!</h1></body></html>";
        
      res.end(html);
    });
  }
).listen(8000);