
/*
 * GET users listing.
 */
/*
var users =['tim', 'sarah', 'evelin', 'uwe', 'steffen', 'kati'];
*/

var users =[
	{name: "Tim"},
	{name: "Sarah"},
	{name: "Evelin"},
	{name: "Uwe"},
	{name: "Steffen"},
	{name: "Kati"}
];


exports.list = function(req, res){
  res.send("respond with a resource");
};

/*
app.get('/users/:userId', function(req, res){
	res.send("<h1>Hello User #" + req.params.userId + "!");
});*/

/*
app.post('/users', function(req, res){
	res.send("Creating a new user with the name " + req.body.username + ".");
})
*/


/*
app.get(/\/users\/(\d*)\/?(edit)?/, function(req, res){
	// /users/10
	// /users/10/
	// /users/10/edit
	
	var message = "user #" + req.params[0] + "'s profile";
	
	if (req.params[1] === 'edit') {
		message = "Editing " + message;
	} else {
		message = "Viewing " + message;
	}
	res.send(message);
});*/


function loadUser (req, res, next) {
	req.user = users[parseInt(req.params.userId, 10)]
	next();
}

app.get("/users/:userId", loadUser, function (req, res){
	//get user
	res.json(req.user)
	
})

/*
app.param('from', function (req, res, next, from) {
	req.from = parseInt(from, 10),
	next();
});

app.param('to', function (req, res, next, to) {
	req.to = parseInt(to, 10),
	next();
});

app.get('/users/:from-:to', function (req, res) {

	res.json(users.slice(req.from, req.to +1));
	
});
*/
