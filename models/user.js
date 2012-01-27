var redis = require("redis"),
  db = redis.createClient(6379, "127.0.0.1"),
  userFunctions = {
    add: function(firstName, lastName, cb) {
      db.incr("userCount", function(err, id) {
        if (err) 
          throw err;
        db.hmset("users:" + id, {"firstName": firstName, "lastName": lastName}, function(err) {
          if (!err && cb)
            cb(id);
        });
      });
    },
    change: function(id, firstName, lastName, cb) {
      db.hmset("users:" + id, {"firstName": firstName, "lastName": lastName}, function(err) {
        if (!err && cb)
          cb(id);
      });
    },
    getUser: function(id, cb) {
      db.hgetall("users:" + id, function(err, user) {
        if (!err) 
          cb(user);
      });
    },
    getUserName: function(id, cb) {
      db.hgetall("users:" + id, function(err, user) {
        if (!err) 
          cb(user.firstName + " " + user.lastName);
      });
    },
    delete: function(id, cb) {
      db.del("users:" + id, function(err) {
        if (!err && cb) 
          cb();
      });
    }
  };

exports.userFunctions = userFunctions;