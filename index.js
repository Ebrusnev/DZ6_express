var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

var newReq = function(req, res, next){
	console.log("New Request!");
	next();
};

var reqInfo = function(req, res, next){
	console.log('Request Method is: ' + req.method);
	console.log('Request Protocol is: ' + req.protocol);
	var ifAjax = req.xhr;
	if(ifAjax){
		console.log('This is AJAX Request');
	}
	else{
		console.log('This is not AJAX Request');
	}
	next();
};


var infoFile = function(req, res, next){
	
}
	app.use(newReq);
	app.use(reqInfo);

app.listen(3030, function() {
	console.log('App listening on port 3030!');
});