var connect = require("connect");
      
connect(connect.static(__dirname + "/public")).listen(8000);