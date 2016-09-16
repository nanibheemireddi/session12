var express = require('express');

var bodyParser = require('body-parser');

var app = express();
var PORT = 8080;

var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('this is for postman program');
});

app.get('/todos', function(req,res){
	res.json(todos);
});

app.get('/todos/:id', function(req, res){
	var todoId = parseInt(req.params.id, 10);
	var ismatch = false;
	var matched;

	todos.forEach(function(obj){

		if(ismatch){
			return;
		}
		if(todoId === obj.id)
		{
			matched = obj;
			ismatch = true;
		}

	});

	if(matched){
		res.json(matched);
	}else{
		res.status(404).send();
	}
	//res.send('asking todo for id  ' +req.params.id);
});

app.post('/todos', function(req, res){

	var body = req.body;

	body.id = todoNextId++;

	todos.push(body);
	//console.log('descrition :'+body.description);

	res.json(body);

});

app.listen(PORT, function(){
	console.log('express server is started on ' +PORT);
});