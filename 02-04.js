var http = require("http"),
  connect = require("connect");
      
connect(connect.static(__dirname + "/public")).listen(8000);