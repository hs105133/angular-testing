var express = require("express"),
	app = express(),
	cors = require("cors"),
	port = process.env.port || 5000;

app.use(cors());

app.get("/contacts", function(req, res){
	res.json([
			{name: "hemant kumar singh", age: 30},
			{name: "varun gupta", age: 22},
			{name: "vinay", age: 44}
		]);
});

app.listen(port, function(){
	console.log("app running on port "+port);
});