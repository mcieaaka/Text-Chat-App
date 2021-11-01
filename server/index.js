const express = require('express');
var app = express();

app.get('/', function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
})

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Text Chat Sever at 3000");
})