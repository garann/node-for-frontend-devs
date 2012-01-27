var p = require("./lib/pubsub.js").PubSub,
	pubsub = new p();

pubsub.on("sayHello", function() {
  console.log("Hello, developer.");
});
      
pubsub.emit("sayHello");