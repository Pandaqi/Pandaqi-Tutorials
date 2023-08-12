// the "clamp" function ensures that a value is within a certain range
// for example, clamp(1, 2, 8) returns 2 and clamp(12, 2, 8) returns 8

/*
 * BAD
 */
function clamp(val, low, high) {
	if(val <= low) {
		return low;
	} else if(val >= high) {
		return high;
	} else {
		return val;
	}
}

/*
 * BETTER
 */
function clamp(val, low, high) {
	return Math.max( Math.min(val, high), low);
}

//
// suppose we have a two-player game with player 0 and 1 alternating turns
//

/*
 * BAD
 */
function nextTurn() {
	if(currentPlayer == 0) {
		currentPlayer = 1;
	} else {
		currentPlayer = 0;
	}
}

/*
 * BETTER
 */
function nextTurn() {
	currentPlayer = (currentPlayer + 1) % 2;
}