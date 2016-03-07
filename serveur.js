var express = require('express');
var app     = express();

app.get('/serveur', function(req, res){
	res.sendFile( __dirname  + '/Web.html');
});

app.post('/serveur', function(req, res){
	res.sendFile( __dirname  + '/Web.html');
	console.log("result ! ");
})

app.listen('8081');
console.log("The server is listening");
