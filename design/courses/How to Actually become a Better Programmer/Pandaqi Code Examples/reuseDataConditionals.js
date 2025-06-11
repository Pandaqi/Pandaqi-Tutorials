/*
 * BAD
 */
function updateHealth(damage) {
	player.health -= damage;

	checkGameOver();
	checkShield();
}

function checkGameOver() {
	if(player.health < 2) {
		displayWarning();
		if(player.health <= 0) {
			gameOver();
		}
	}
}

function checkShield() {
	if(player.health < 1) {
		activateShield();
	}
}


/*
 * BETTER
 *
 * I do hesitate to call this "better", because it makes the code slightly more difficult to read
 * and requires a bit more intimate knowledge of the language/codebase
 *
 * Nevertheless, it removes conditionals or separates them, reuses values, and only runs necessary code
 *
 */
function updateHealth(damage) {
	// update health and save latest value
	var h = (player.health -= damage);

	// check health status against latest value
	// if shield needs no activation, we automatically return
	if(checkHealthStatus(h) != 'damaged') {
		return;
	}

	activateShield();
}

function checkHealthStatus(h) {
	// removed nested conditionals
	// returned meaningful values (not always necessary/wanted, though)
	if(h <= 0) {
		gameOver();
		return 'dead';
	}

	if(h < 2) {
		displayWarning();
		return 'damaged';
	}

	return 'healthy';
}