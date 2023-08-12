// this function calculates the sum of numbers 0, 1, 2, ... n
// but under certain conditions, it instead calculates the sum of numbers 0, 2, 4, ..., 2n

/*
 * BAD
 */
function calculateSomething(n) {
	var value = 0;

	for(var i = 0; i < n; i++) {
		if(someConditionIsMet) {
			value += i*2;
		} else {
			value += i;
		}
	}
	return value;
}

/*
 * BETTER
 * Moved conditional outside of the loop and pre-calculated it
 * (Also used mathematic trick to remove boolean.)
 */
function calculateSomething(n) {
	var value = 0;

	var doubler = 1;
	if(someConditionIsMet) {
		doubler = 2;
	}

	for(var i = 0; i < n; i++) {
		value += i*doubler;
	}
	return value;
}

/*
 * EVEN BETTER
 * 
 * Move conditional higher up the chain, so that lower level functions do exactly ONE thing
 * Obviously, these functions look ridiculous now, but in a real-case scenario this would be extremely helpful
 */
function calculateSomething(n) {
	if(someConditionIsMet) {
		return calculateDouble(n);
	}
	return calculateNormal(n);
}

function calculateNormal(n) {
	var value = 0;
	for(var i = 0; i < n; i++) {
		value += i;
	}
	return value;
}

function calculateDouble(n) {
	var value = 0;
	for(var i = 0; i < n; i++) {
		value += i*2;
	}
	return value;
}