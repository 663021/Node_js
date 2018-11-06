var express = require('express');

var app = express();

app.use('/css',express.static('css'));

app.get('/', function(req,res){
	if (req.body){
		console.log(req.body);
	}

	res.sendFile( __dirname + '/index.html');
})