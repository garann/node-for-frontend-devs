var express = require("express"),
  app = express.createServer(),
  user = require("./routes/users");
  
// boilerplate, installed by Express
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.get("/profile/:id", user.show);
app.get("/edit", user.add);
app.get("/edit/:id", user.edit);
app.post("/save", user.save);
app.post("/delete/:id", user.delete);
app.get("/", function(req, res) {
  res.render("index",{title:"Hello world"});
});

app.listen(8000);