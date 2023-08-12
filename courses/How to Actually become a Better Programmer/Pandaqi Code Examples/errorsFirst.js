/*
 * BAD
 */
function attemptLogin(username, password, database) {
	if(validString(username) && validString(password)) {
		if(validConnection(database)) {
			if(userExists(usn, database)) {
				login(username, password, database)
			}
		}
	}
}

/*
 * BETTER
 */
function attemptLogin(username, password, database) {
	// 
	// checking all errors + generating meaningful error messages
	//
	if(!validString(username)) {
		console.log("Error! Invalid username.");
		return;
	}

	if(!validString(password)) {
		console.log("Error! Invalid password.");
		return;
	}

	if(!validConnection(database)) {
		console.log("Error! Couldn't establish database connection.");
		return;
	}

	if(!userExists(usn, database)) {
		console.log("Error! Couldn't establish database connection.");
		return;
	}

	//
	// now simply execute what you wanted to execute
	//
	login(username, password, database);
}