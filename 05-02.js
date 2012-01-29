var http = require("http"),
  querystring = require("querystring"),
  redis = require("redis"),
  db = redis.createClient(6379, "127.0.0.1"); 
  
//db.hset("users", "Jaime", "Developer", function(){}); 
  
http.createServer(function(req, res) {
  var qs = querystring.parse(req.url.split("?")[1]),
    firstName = qs.firstName,
    userName,
    page;
    
  db.hget("users", firstName, function(err, value) {
    if (err) {
      throw err;
    } 
    userName = firstName + " " + value;
    html = "<!doctype html>" +
      "<html><head><title>Hello " + userName + "</title></head>" +
      "<body><h1>Hello, " + userName + "!</h1></body></html>";
    
    res.end(html);
  });
}).listen(8000);