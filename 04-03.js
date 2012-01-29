var connect = require("connect"),
  fs = require("fs"),
  mustache = require("mustache"),
  requirejs = require("requirejs");
      
requirejs.config({ nodeRequire: require });
      
connect(
  connect.static(__dirname + "/public"),
  connect.bodyParser(),
  connect.router(function(app) {
    app.post("/theme", function(req, res) {
      var theme = {
        main: req.body.mainColor,
        secondary: req.body.secondaryColor,
        border: req.body.borderStyle,
        corners: req.body.borderRadius
      };
      requirejs(["text!public/css/theme.css"], function(tmpl) {
        var css = mustache.to_html(tmpl, theme);
        res.writeHead(200, {
          "Content-Type": "text/css",
          "Content-Length": css.length
        });
        res.end(css);
      });
    });
    app.post("/builder", function(req, res) {
      var options = {
        shim: req.body.html5shim,
        flash: req.body.useFlash,
        sockets: req.body.useWebSockets,
        jsonp: req.body.useJsonp
      };
      requirejs(["text!public/js/builder.js"], function(tmpl) {
        var js = mustache.to_html(tmpl, options);
        res.writeHead(200, {
          "Content-Type": "application/javascript",
          "Content-Length": js.length
        });
        res.end(js);
      });
    });
  })
).listen(8000);