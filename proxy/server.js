var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get("/a",(req,res)=>{
  res.json({
    a:'xx'
  })
});

app.listen(5002, function () {
  console.log('Example app listening on port 5002!');
});
