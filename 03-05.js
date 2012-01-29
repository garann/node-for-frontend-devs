var connect = require("connect");
      
connect(
  connect.static(__dirname + "/public"),
  connect.bodyParser(),
  function(req, res) {
    var userName = req.body.firstName + " " + req.body.lastName,
      html = "<!doctype html>" +
        "<html><head><title>Hello " + userName + "</title></head>" +
        "<body><h1>Hello, " + userName + "!</h1></body></html>";
      
    res.end(html);
  }
).listen(8000);