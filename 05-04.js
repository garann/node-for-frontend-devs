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
      var html = "<!doctype html>" +
        "<html><head><title>Hello " + userName + "</title></head>" +
        "<body><h1>Hello, " + userName + "!</h1></body></html>";
        
      res.end(html);
    });
  }
).listen(8000);