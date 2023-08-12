/*
 * BAD
 *
 * The function is called spawnEnemy, 
 * but we're also determining a location (badly), 
 * and determining a type, 
 * and then calling completely different blocks of code based on those values
 *
 */
function spawnEnemy() {
	// determine location
	var x = Math.random()*1000;
	var y = Math.random()*1000;

	// if there's something here, bail out
	if(map[x][y] != 0) {
		return false;
	}

	// determine type (suppose we have enemy types 0-2)
	var type = Math.floor(Math.random()*3);

	// do something different based on the type
	if(type == 0) {
		// lala
	} else if(type == 1) {
		// lala
	} else {
		// lala
	}

	// succesful spawning
	return true;
}



/*
 * BETTER
 *
 * Each function does exactly what it says
 * If we need other functionality, we simply call the existing function that does this data transformation
 * We don't need to make a (last minute) decision within the function itself; what data we need is given to us
 * If-statements are removed, shorter and clearer functions, with great certainty about what they will do
 * 
 */
var enemies = [spawnTroll, spawnOgre, spawnDragon];

function getRandomFreeSpot() {
	var x,y
	do {
		x = Math.random()*1000;
		y = Math.random()*1000;
	} while(map[x][y] != 0);
	return [x,y];
}

function getRandomEnemyType() {
	return Math.floor(Math.random()*3);
}

function spawnEnemy() {
	var pos = getRandomFreeSpot();
	var type = getRandomEnemyType();
	enemies[type](pos);
}

function spawnTroll(pos) {
	// lala
}

function spawnOgre(pos) {
	// lala
}

function spawnDragon(pos) {
	// lala
}
