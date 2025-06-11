/* 
 * BAD
 */
function doSomething(a, b, c, d) {
	if(c <= d) 
	{
		return a+b;
	}
}

/*
 * BETTER
 *
 * Shorter function declaration = less noise
 * You know what kinds of data a,b,c,d should be, as you know they are properties of a given object
 * And you can increase/decrease the number of parameters at any time, without changing anything
 *
 */
function doSomething(obj) {
	if(obj.c <= obj.d) 
	{
		return obj.a + obj.b;
	}
}