
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
});

app.get('/name/:name', function(req, res){
	res.cookie('name', req.params.name).send('<p>To see the cookie in action, <a href="/name"> Go Here</a> </p>');
});

app.get('/name', function(req, res){
	res.clearCookie('name').send(req.cookies.name);
});

app.get('/about', function(req, res){
	res.format({
		html: function () { res.send("<h1> Body </h1>"); },
		json: function () { res.json({message: "Body"}); },
		text: function () { res.send("body"); }
	});
});

app.get('/', function(req, res){
	res.render("index", { title: "Polterabend"});
});

app.get('/index', function(req, res){
	res.status(302).redirect("/");
})

app.get('/contact', function(req, res){
	res.render("contact", { title: "Kontakt"});
})

app.get('/location', function(req, res){
	res.render("location", { title: "Unterkunft"});
});

app.get('/playlist', function(req, res){
	res.render("playlist", { title: "Playlist - Musikwünsche"});
});

app.get('/unterkunft', function(req, res){
	res.render("unterkunft", { title: "Mögliche Unterkünfte"});
});

app.get('/activities', function(req, res){
	res.render("activities", { title: "Aktivitäten"});
});

app.get('/anmeldung', function(req, res){
	res.render("anmeldung", { title: "Freiwillige Anmeldung"});
});

app.get('/essensliste', function(req, res){
	res.render("essensliste", { title: "Essensliste"});
});

var count = 0;

app.get('/hello.txt', function(req, res, next){
	count++;
	next();
});

app.get('/count', function(req, res){
	res.send("" + count + " Views");
});

require('./user');