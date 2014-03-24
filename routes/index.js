
/*
 * GET home page.
 */

app =	require('../app');

/*
app.get('/', function(req, res){
	res.send('Polterabend!');
})*/

app.get('/api', function(req, res){
	res.send('Hello Express!');
	res.send({name: 'Tim', age: 36});
})

app.get('/hi', function(req, res){
	var message = [
		"<h1> Hallo Polterabendgäste</h1>",
		"<p> Willkommen auf der Polterabendseite von Sarah und Tim</p>",
		"<ul><li>schnell</li>",
		"<li>lustig</li>",
		"<li>flexibel</li></ul>"].join("\n");
	res.send(message);
})

app.get('/name/:name?', function(req, res){
	res.send(req.param('name', 'default value'));
})

app.get('/setup', function(req, res){
	res.format({
		html: function () { res.send("<h1> Body </h1>"); },
		json: function () { res.json({message: "Body"}); },
		text: function () { res.send("body"); }
	});
});

app.get('/', function(req, res){
	res.render("home", { title: "Having fun with Express"});
})

app.get('/home', function(req, res){
	res.status(302).redirect("/");
})

require('./user');