/*
 * BAD
 */
function applyRandomEffect() {
	var rand = Math.random();

	if(rand <= 0.95) {
		var effect = 0;
		player.myEffect = createEffect(effect);
		doSomethingSpecial()
	} else {
		var effect = 1;
		player.myEffect = createEffect(effect);
	}
}

/*
 * BETTER
 *
 * We simplified the conditional and stopped repeating ourselves
 * We initialized things with a default value (which makes code more robust and predictable)
 *
 * This extremely simplified example might in some cases make performance worse, of course, 
 * but if you had many conditionals and code blocks (which did different things), it would matter
 *
 */
function applyRandomEffect() {
	// default value
	player.myEffect = createEffect(0);

	// only rarely, change the default value after creation
	// and don't do something special
	if(Math.random() <= 0.05) {
		updateEffect(player.myEffect, 1);
		return;
	}

	doSomethingSpecial();
}