
var http = require('http');
var express = require('express');

var app = express();

app.listen(3000);

app.get('/', function(req,res){
	res.send("Work!");
})

console.log("Ready!");
