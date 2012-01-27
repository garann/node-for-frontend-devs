var connect = require("connect"),
  io = require("socket.io").listen(1337);
      
connect(connect.static(__dirname + "/public")).listen(8000);

io.sockets.on("connection", function(socket) {
  socket.on("setName", function(data) {
    var userName = data.firstName + " " + data.lastName;
    socket.emit("nameSet", {userName: userName});
  });
});