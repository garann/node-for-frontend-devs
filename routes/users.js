var user = require("../models/user").userFunctions,
  emptyUser = {
    id: "",
    firstName: "",
    lastName: ""
  };

exports.show = function(req, res) {
  user.getUserName(req.params.id, function(username) {
    res.render("user", {username: username, user: emptyUser});
  });
}

exports.add = function(req, res) {
  res.render("user", {username: "", user: emptyUser});
}

exports.edit = function(req, res) {
  var id = req.params.id;
  user.getUser(id, function(user) {
    user.id = id;
    res.render("user", {username: "", user: user});
  });
}

exports.save = function(req, res) {
  var id = req.body.hdnId,
    firstName = req.body.txtFirstName,
    lastName = req.body.txtLastName,
    callback = function(id) {
      res.render("user", {username: "", user:
        {id: id,
          firstName: firstName,
          lastName: lastName}
      });
    };
  if (id) {
    user.change(id, firstName, lastName, callback);
  } else {
    user.add(firstName, lastName, callback);
  }
}

exports.delete = function(req, res) {
  user.delete(req.params.id, function() {
    res.render("index");
  });
}