var express = require('express')

var app = express();
var PORT = process.env.PORT || 8080;

var todos = [{
	id:1,
	description:'haiiii',
	completed:false
},{
	id:2,
	description:'haiii2',
	completed:false
},{
	id:3,
	description:'haiii3',
	completed:false
}]

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
	res.send('asking todo for id  ' +req.params.id);
});

app.listen(PORT, function(){
	console.log('express server is started on ' +PORT);
});