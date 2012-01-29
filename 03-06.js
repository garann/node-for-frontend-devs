var http = require("http"),
  querystring = require("querystring"); 
  
http.createServer(function(req, res) {
  var qs = querystring.parse(req.url.split("?")[1]),
    username = qs.firstName + " " + qs.lastName,
    json;
    
  if (qs.callback) {
    json = qs.callback + "({username:'" + username + "'});";
  } else {
    json = JSON.stringify({"username":username});
  }
  
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Content-Length": json.length
  });
  res.end(json);
}).listen(8000);