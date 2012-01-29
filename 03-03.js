var connect = require("connect");
      
connect(
  connect.static(__dirname + "/public"),
  connect.router(function(app) {
    app.get("/sayHello/:firstName/:lastName", function(req, res) {
      var userName = req.params.firstName + " " + req.params.lastName,
        html = "<!doctype html>" +
          "<html><head><title>Hello " + userName + "</title></head>" +
          "<body><h1>Hello, " + userName + "!</h1></body></html>";
        
      res.end(html);
    });
  })
).listen(8000);