var connect = require("connect"),
  fs = require("fs"),
  mustache = require("mustache"),
  requirejs = require("requirejs");

requirejs.config({ nodeRequire: require });
      
connect(
  connect.bodyParser(),
  function(req, res) {
    var userName = {
        firstName: "Garann",
        lastName: "Means"
      },
      html;
      
    requirejs(["text!public/edit.html"],
      function(template) {
        html = mustache.to_html(template, userName);
        
        res.writeHead(200, {
          // testing!!
          "Content-Type": "text/html",
          "Content-Length": html.length
        });
        res.end(html);
    });
  }
).listen(8000);