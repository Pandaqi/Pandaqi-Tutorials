/* 
 * BAD
 */
function sumLives(a,b) {
	var newLives = a + b;
	player.lives = newLives;
	gui.livesText.text = newLives;
}

/* 
 * BETTER
 *
 * Each function does exactly what it says
 * sumLives => sums the two values
 * player.updateLives => updates the lives value on the player
 * gui.updateLives => updates the lives counter on the graphical user interface
 */
function updateLives(b) {
	var newLives = sumLives(player.lives, b);
	player.updateLives(newLives);
	gui.updateLives(newLives);
}

function sumLives(a,b) {
	return a + b;
}

//
//
//

/* 
 * BAD
 */
function appendString(a,b) {
	return a + ' ' + b;
}

// especially not this!
function appendString(a, b, whiteSpace) {
	if(whiteSpace) {
		return a + ' ' + b;
	} else {
		return a + b;
	}
}

/* 
 * BETTER
 */
function appendString(a,b) {
	return a + b;
}

function appendStringWithWhitespace(a,b) {
	return a + ' ' + b;
}