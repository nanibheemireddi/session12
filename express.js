var express = require('express')

var app = express();
var PORT = process.env.PORT || 8080;

app.get('/', function(req, res){
	res.send('this is for postman program');
});

app.listen(PORT, function(){
	console.log('express server is started on ' +PORT);
});