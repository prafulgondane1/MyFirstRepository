var express = require('express'),
	app		= express();

	app.get('/',function(req,res){
		res.sendfile('client/content/views/index.html');
	});
	
	//app.use('/js',express.static('client/js'));

	app.listen('3000',function(req,res){
		console.log('im listening');
	});