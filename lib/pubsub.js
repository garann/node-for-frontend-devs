var util = require("util"),
  events = require("events");
  
var PubSub = function() {
  events.EventEmitter.call(this);
  return this;
};

util.inherits(PubSub, events.EventEmitter); 

exports.PubSub = PubSub;