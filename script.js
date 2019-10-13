// var user = {
// 	username: ["Dan", "Maria", "Anto"],
// 	password: ["123", "pass", "pass123"]
// }

var database = [
	{
		user: "samir",
		password: "toto"
	},
	{
		user: "sally",
		password: "123"
	},
	{
		user: "Maia",
		password: "456"
	}
];

var newsfeed = [
	{
		username: "Bobby", 
		timeline: "Tired of learning"
	},
	{
		username: "Sally",
		timeline: "Js is sooo much fun!!!"
	},
	{
		username: "Mira",
		timeline: "I love math!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

// function signIn(userna, pass) {
// 	if (userna == database[0].user
// 		&& pass == database[0].password) {
// 		console.log(newsfeed);
// 	} else {
// 		alert("Sorry wrong username and password!");
// 	}
// }



/*LOOPS*/

function isUserValid(userna, pass) {
	for (var i=0; i < database.length; i++) {
		if (userna == database[i].user &&
				pass == database[i].password ) {
					return true;
				}
		} return false; // trebuie pus aici si cu else if sau dupa if, fiindca doar asa a al 2lea loop nu iese din fucntie dupa return
}

function signIn(userna, pass) {
	if (isUserValid(userna, pass)) {
		console.log(newsfeed);
	} else {
		alert("Sorry wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);