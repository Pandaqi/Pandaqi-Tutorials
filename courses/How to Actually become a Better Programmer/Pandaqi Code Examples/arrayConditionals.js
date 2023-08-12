/*
 * BAD
 */

// suppose we have a game where you can stand/click on tiles
// and when you do, it executes an effect
function executeEffect(tileType) {
	switch(tileType) {
		case 'Regular':
			// do something 
			break;

		case 'Water':
			// do something else
			break;

		case 'Fire':
			// another unique situation
			break;

		// ... and so on
	}
}

/*
 * BETTER
 */

function TileRegular() {
	// do something
}

function TileWater() {
	// do something else
}

function TileFire() {
	// another unique situation
}

function executeEffect(tileType) {
	// window[string] is needed to call a function from a string
	window["Tile"+tileType]();
}
