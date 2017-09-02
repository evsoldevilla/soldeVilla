var express = require('express');

var app = express();

app.get('/', function(req, res) {
  var name = "Edson";
  res.json("Hi my name is " + name);
});

app.listen(3000, function(err) {
  if (err) throw err;
  console.log("The server is running on port 3000");
});
