var connect = require("connect"),
  fs = require("fs"),
  mustache = require("mustache"),
  requirejs = require("requirejs"),
  parentTmpl;
      
requirejs.config({ nodeRequire: require });

connect(
  connect.static(__dirname + "/public"),
  connect.router(function(app) {
    app.get("/show/:tmpl/:firstName/:lastName", function(req, res) {
      var userName = {
          firstName: req.params.firstName,
          lastName: req.params.lastName
        };

      requirejs(["text!public/parent.html"], function(_parentTmpl) {
        parentTmpl = _parentTmpl;
        render(res, req.params.tmpl + ".html", userName);
      });
    });
  })
).listen(8000);
    
function render(res, filename, data, style, script, callback) {
  requirejs(["text!public/" + filename], function(tmpl) {
    if (callback) {
      callback(res, tmpl, data, style, script);
    } else {
      var html = mustache.to_html(
        parentTmpl, 
        {content: data}, 
        {content: tmpl, stylesheets: style || "", scripts: script || ""}
      );
      res.end(html);
    }
  });
}