var http = require("http"),
  connect = require("connect"),
  shared = require("./public/js/shared");
      
connect(connect.static(__dirname + "/public")).listen(8000);

shared.modul();