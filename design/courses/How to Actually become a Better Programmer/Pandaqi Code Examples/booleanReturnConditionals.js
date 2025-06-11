/*
 * BAD
 */
function isUserUnderage(user) {
	if(user.age < 18) {
		return true;
	} else {
		return false;
	}
}

/*
 * BETTER
 */
function isUserUnderage(user) {
	return (user.age < 18);
}