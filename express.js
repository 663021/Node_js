var express = require('express');

var app = express();

app.get('/', function(req,res){
	if (req.body){
		console.log(req.body);
	}

	res.sendFile( __dirname + '/index.html');
})