var http = require("http"),
  querystring = require("querystring"); 
  
http.createServer(function(req, res) {
  var qs = querystring.parse(req.url.split("?")[1]),
    username = qs.firstName + " " + qs.lastName,
    json;
    console.log(username);
  if (qs.callback) {
    json = qs.callback + "({username:'" + username + "'});";
  } else {
    json = JSON.stringify({"username":username});
  }
  console.log(json);
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Content-Length": json.length
  });
  res.end(json);
}).listen(8000, "127.0.0.1");