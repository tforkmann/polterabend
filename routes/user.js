
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

/*
app.get('/users/:userId', function(req, res){
	res.send("<h1>Hello User #" + req.params.userId + "!");
});*/


app.post('/users', function(req, res){
	res.send("Creating a new user with the name " + req.body.username + ".");
})


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
});