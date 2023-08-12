id: 220 title: "Complete JavaScript Course" post: "

Unlike HTML and CSS, JavaScript is actually a programming language capable of performing all sorts of functions. You can use it to perform math operations, dynamically create a web page, receive data from servers in real-time, create browser games, and much more. But, unlike languages like C and Java that most software is created with, it is made specifically for browsers and doesn't need to be *compiled*. It's therefore often called a **scripting language**, which simply means that you can just type a script inside an HTML page with a regular text editor, and it will execute without hesitation. If, of course, your script has no errors.

It therefore doesn't require a change of tools, with respect to writing HTML and CSS code, but rather a change of mind-set. Programming languages are *very* different from markup or stylesheet languages. They offer more freedom and possibilities, but have the side effect of creating more errors and increasing the difficulty. Nevertheless, JavaScript is simple enough to be understood in mere days, and a lot of experimentation with it will make you a master in no time.

This course will first show you how to include JavaScript within a page, the global workings of programming statements, and how to debug and see what's going on using your browser. Those are the most important things to understand completely. With that out of the way, I'll continue by introducing new concepts every chapter until we've seen it all. Most of this course is about the core of JS, the inner workings and principles, which means you'll only get to see how to use it to influence the actual webpage about mid-way through the course. Be patient, and you will be rewarded.

## Table of Contents

1.  Including with HTML
2.  Basic Syntax
3.  Debugging
4.  Data Types
5.  Variables
6.  Numbers
7.  Math
8.  Strings
9.  String Manipulation
10. Functions
11. Arrays I
12. Arrays II
13. Objects
14. Scope
15. Classes
16. Booleans & Comparisons
17. Conditions
18. Control Flow & Error Handling
19. Loops I
20. Loops II
21. JSON
22. DOM
23. BOM I
24. BOM II
25. Events
26. Regular Expressions
27. Dates
28. Best Practices
29. Conclusion: What now?

" slug: "complete-javascript-course" cat: "Website" subcat:
"JavaScript" video: "" diff: 1 quiz: "" - id: 221 title:
"\[JavaScript\] Including with HTML" post: "

JavaScript can be written within the HTML page itself (internal), or in a separate file that you link to (external). Either way, the existence of JS is signalled with the ``

## External

First, write all your code in a separate text file, and save it with the extension `.js`. To link to it, leave the ``

## Placement

Theoretically, you can place this tag anywhere within your document. But, the cleanest method is placing it somewhere in the ``

Description

`+`

Addition

`-`

Subtraction

`*`

Multiplication

`/`

Division

`++`

Increment (add 1)

`--`

Decrement (subtract 1)

`%`

Modulus\*

``` {data-lang="javascript"} console.log(5 + 5); //Prints 10 console.log(10 / 2); //Prints 5
```

Just as you normally would, you can put parentheses ( **( )** ) around equations to group them.

``` {data-lang="javascript"} console.log((5 + 5) / 2); //Prints 5 console.log(5 + 5 / 2); //Prints 7.5
```

More complicated math is handled by the Math object, which is the topic of next chapter.

Sometimes, performing operations with floating point numbers doesn't behave as you expect, and the result differs a tiny amount from the actual value. These differences are so small you often won't even notice them, but if they are becoming a problem, it helps to first multiply them to get a whole number, and then divide again to get your answer.

``` {data-lang="javascript"} console.log(0.1+0.2); //Prints 0.30000000000000004, instead of 0.3 console.log((0.1*10+0.2*10)/10); //Prints 0.3, as expected
```

## Assignment

In the real world, people often write something like 4 + 5 = 9. In programming, you can't do this. Everything needs to be statements that assign a value to a variable, where the variable needs to be on the left, and the value on the right. Therefore, the only way to change a value, is by assigning its old value again, plus some computations.

``` {data-lang="javascript"} var x = 5; x = x + 2; // x is now 7 var y = x*2; // y is now 14
```

Of course, this seems tedious, and a shorter and clearer way of writing these types of mathematical assignments is available.

  ---------- ----------- -------------
  Operator   Shorthand   Full
  `+=`       `x += y`    `x = x + y`
  `-=`       `x -= y`    `x = x - y`
  `*=`       `x *= y`    `x = x * y`
  `/=`       `x /= y`    `x = x / y`
  `%=`       `x %= y`    `x = x % y`
  ---------- ----------- -------------

``` {data-lang="javascript"} var x = 5; x += 2; // x is now 7 x *= 2; // x is now 14
```

I think this is a very important concept to understand completely, as you'll need it very often, and it works the exact same way in all programming languages. You just need to remind yourself that you can't have loose data\-\--everything needs to be saved into a variable.

NOTE: Knowing this, we can see that the `++` and `--` operators are just shortcuts for `+= 1` and `-= 1`.

## Conversion

To convert something to a number, use the `parseInt(value)` and
`parseFloat(value)` methods.

``` {data-lang="javascript"} var x = "100"; console.log(parseInt(x)); //Prints x as a number, without quotes
```

It will look for a number in the first characters of the value, but if it can't find it, it will return the value `NaN`. It means "*Not a Number*", which is a value you can't really do anything with, besides check whether something is a number. This is also done with the
`isNaN(value)` method.

``` {data-lang="javascript"} var x = 2 / "JAMES BOND"; isNaN(x); //Should return true.
```

You'll typically run into NaN errors when you (accidentally) perform mathematical operations on values that are not, or only partly, numbers. Like dividing 2 by a String.

## Restrictions

Of course computers can't support infinitely large numbers, which means there are some restrictions and oddities to be aware of. In JS, all numbers are 64-bit floating point numbers, which simply means that any number, regardless of length or type, is stored the same way, which causes some errors down the road.

It can handle integers up to **15 digits** accurately. If longer, it will be off by a small margin.

It can handle a maximum amount of **17 decimals**, but floating point numbers can also be off by a *tiny* margin, as you just saw.

You can find the upper and lower bound by accessing some properties on the global `Number` Object:

  --------------------- ----------------------------------------------
  Property              Description
  `MAX_VALUE`           Largest number possible in JS
  `MIN_VALUE`           Smallest number possible in JS
  `POSITIVE_INFINITY`   Represents numbers higher than JS can handle
  `NEGATIVE_INFINITY`   Represents numbers lower than JS can handle
  --------------------- ----------------------------------------------

``` {data-lang="javascript"} console.log(Number.MAX_VALUE); //Prints 1.7976931348623157e+308
```

NOTE: When JS encounters numbers higher than its maximum, it will set the value to **Infinity**.

## \*Modulus

The **modulus** of x and y simply means the number that remains when you subtract all multiples of y from x.

\> 4%2 equals 0 => 4\-\--2\-\--2 = 0 \> 10%4 equals 2 => 10\-\--4\-\--4
= 2 \> 14%5 equals 4 => 14\-\--5\-\--5 = 4 " slug:
"javascript-numbers" cat: "Website" subcat: "JavaScript" video:
"" diff: 2 quiz: "" - id: 227 title: "\[JavaScript\] Math" post:
"

To finish the part on Numbers, let's have a look at the Math object. It has a great deal of useful methods, like the sine and cosine functions, as well as important mathematical constants.

## How to Use It

Calling it is as simple as writing
`Math.someMethod(arguments)`{.longsyntax}

The Math object is created and maintained by JavaScript itself, which means you don't have to declare it, and it can be accessed from anywhere. Calling such a method doesn't change the actual number(s) you put into it; it simply generates a number using them, and gives it to you to do whatever you want with it.

``` {data-lang="javascript"} var x = 0; var y = Math.cos(x); // y is 1, but x is still zero
```

## Manipulating Numbers

  ----------------- ------------------------------------------
  Method            Description
  `Math.abs(x)`     Absolute value of x
  `Math.round(x)`   Rounds x to the nearest integer
  `Math.floor(x)`   Rounds x **down** to the nearest integer
  `Math.ceil(x)`    Rounds x **up** to the nearest integer
  ----------------- ------------------------------------------

``` {data-lang="javascript"} console.log(Math.floor(1.5)); //Prints 1 console.log(Math.ceil(1.5)); //Prints 2 console.log(Math.round(1.5)); //Prints 2
```

## Finding Values

  ------------------------ --------------------------------------------
  Method                   Description
  `Math.max(x1,x2,…,xn)`   Maximum; returns number with highest value
  `Math.min(x1,x2,…,xn)`   Minimum; returns number with lowest value
  `Math.random()`          Random number between 0 and 1
  `Math.pow(x,y)`          x to the power of y
  `Math.exp(x)`            Returns the value of E^x^
  `Math.log(x)`            Returns the value of ln(x)
  ------------------------ --------------------------------------------

``` {data-lang="javascript"} console.log(Math.min(1,-5,3,10,50)); //Prints -5
```

NOTE: `Math.random()` generates a random number between 0 (inclusive) and 1 (exclusive). If you, for example, want a random value between 0 and 100, simply multiply this value by one hundred.

## Trigonometry

  ------------------- ---------------------------------------------------------------------
  Method              Description
  `Math.sin(x)`       Sine of x
  `Math.cos(x)`       Cosine of x
  `Math.tan(x)`       Tangent of x
  `Math.asin(x)`      Arcsine of x
  `Math.acos(x)`      Arccosine of x
  `Math.atan(x)`      Arctangent of x, as numeric value between\-\--PI/2 and PI/2 radians
  `Math.atan2(x,y)`   Arctangent of the quotient of its arguments
  `Math.sqrt(x)`      Square root of x
  ------------------- ---------------------------------------------------------------------

``` {data-lang="javascript"} var x = Math.sin(0) + Math.cos(0) + Math.sqrt(4); // x is 3
```

NOTE: JavaScript works with **radians**, not degrees!

## Constants

  ---------------- --------------------------------------
  Method           Description
  `Math.E`         Euler's number
  `Math.PI`        PI (π)
  `Math.SQRT2`     Square root of 2
  `Math.SQRT1_2`   Square root of 1/2
  `Math.LN2`       Natural logarithm of 2
  `Math.LN10`      Natural logarithm of 10
  `Math.LOG2E`     Base 2 logarithm of Euler's number
  `Math.LOG10E`    Base 10 logarithm of Euler's number
  ---------------- --------------------------------------

``` {data-lang="javascript"} console.log(Math.PI); //Prints 3.141592653589793
```

" slug: "javascript-math" cat: "Website" subcat: "JavaScript" video: "" diff: 2 quiz: "" - id: 228 title: "\[JavaScript\] Strings" post: "

Strings support any character you want to give it, as it is capable of displaying all kinds of text. But, some of the characters are reserved, like the quotes around the string itself. You can't use them like you normally would, because they would signal the end of the string.

``` {data-lang="javascript"} var someString = "So I said to John,"Hey, what are you doing?!", but he just looked away."; //ERROR
```

## Escaping

To use a special character within a string, you need to **escape** it, which simply means adding a backslash ( ) in front of it. These are all the special characters:

  ------------------ -----------------
  Escape Character   Description
  `\'`              Single quote
  `"`               Double Quote
  `\`             Backslash
  `\n`              New Line
  `\r`              Carriage Return
  `\t`              Tab
  `\b`             Backspace
  `\f`              Form Feed
  ------------------ -----------------

``` {data-lang="javascript"} console.log("Line\nNew Line");
/* Prints: Line New Line
*/
```

NOTE: The last three are not that useful on the web, and you'll probably never need them. Good to know they exist though.

## Converting Numbers to Strings

We've already seen how to convert strings to numbers. The other way around has more methods, as you can decide which notation to use.

  ---------------------- ----------------------------------------------------------------------------------------
  Method                 Description
  `toString()`           Converts full number to a String.
  `toExponential(arg)`   Writes number using scientific notation, using *arg* numbers behind the decimal point.
  `toFixed(arg)`         Writes number using *arg* decimals
  `toPrecision(arg)`     Writes number with length of *arg* numbers
  ---------------------- ----------------------------------------------------------------------------------------

``` {data-lang="javascript"} var x = 100; console.log(x.toString()); //Prints "100" console.log(x.toExponential(0)); //Prints "1e+2" console.log(x.toFixed(4)); //Prints "100.0000" console.log(x.toPrecision(2)); //Prints "1.0e+2"
```

The `toString()` method actually works for all data types, but is most useful for numbers. Also, next chapter will showcase some methods for stringification that are slightly faster for numbers.

## String Length

All strings have one property, which is `length`. It returns the amount of characters within the String\-\--which means including white space.

``` {data-lang="javascript"} var x = "Hello World!"; console.log(x.length); //Prints 12
```

" slug: "javascript-strings" cat: "Website" subcat: "JavaScript" video: "" diff: 2 quiz: "" - id: 229 title: "\[JavaScript\] String Manipulation" post: "

Strings are just as important and fundamental as Numbers, and therefore require the same set of operators. But, because there's nothing such as dividing or multiplying a string, JavaScript offers a wide range of methods to apply to strings. Adding strings together, however, does exist as a natural operation, which can create a lot of confusion (as you'll see).

One important thing to notice is that all string methods don't actually change the arguments you supply, just like the Math methods. They simply use the arguments to return the value you want.

## String Addition

To add together strings, you can use the `+` operator.

``` {data-lang="javascript"} var x = "Hello " + "World!"; //x is "Hello World!"
```

But, this operator is also available for numbers, so what happens if not all values are the same? In that case, all values in the operation are converted to strings and added together.

``` {data-lang="javascript"} var x = "Hello Guest " + 15 + "!"; //x is "Hello Guest 15!"
```

The alternative is the `concat(string1, …, stringn)` method. It adds the strings you give it to the end of the string you perform it on.

``` {data-lang="javascript"} var x = "Hello "; var y = x.concat("Awesome ","World!"); //y is "Hello Awesome World!"
```

## String Subtraction

To remove parts of a string, or select only certain parts, we have 4 methods. One very important thing to notice, is that when it comes to counting characters, we start at index 0. So the first character of a string is said to be at position 0, and the last one at position
(length\-\--1). It might seem odd at first, but you'll get used to it soon.

The method `slice(start, end)` returns the characters of a string between *start* and *end* (both inclusive). If you supply a negative argument, it will count from the end of the string towards the start.

``` {data-lang="javascript"} var x = "Hello World!".slice(1,5); //x is "ello" x = "Hello World!".slice(-6,-1); //x is "World"
```

The method `substring(start, end)` is similar to slice, but doesn't accept negative values. Also, if you don't supply the second parameter, it will slice until it reaches the end of the string.

``` {data-lang="javascript"} var x = "Hello World!".substring(1); //x is "ello World!"
```

The method `substr(start, length)` returns the characters between start and (start + length), both inclusive. It's useful if you know the exact length of the string you want to cut out.

``` {data-lang="javascript"} var x = "Hello World!".substr(0,5); //x is "Hello"
```

The method `trim()` removes all whitespace ("*empty string*") from both ends of a string.

``` {data-lang="javascript"} var x = "     LOVE     ".trim(); //x is "LOVE"
```

## String Multiplication

Multiplying a string means increasing or decreasing the size of all letters. More specifically, this means converting the whole string to uppercase or lowercase.

For this, we have the `toLowerCase()` and `toUpperCase()` methods.

``` {data-lang="javascript"} var x = "Hello World!".toLowerCase(); //x is "hello world!" x = "Hello World!".toUpperCase(); //x is "HELLO WORLD!"
```

## String Division

Dividing strings means chopping it up into a lot of smaller strings, that, combined together, form the original string again. This is done with the `split(separator)` method, which returns an **Array**. We'll look at what those are later, but for now just know that it's a list of values. In this case, it's a list of strings. The *separator* is the string we want to use to determine where one piece stops and another starts.

``` {data-lang="javascript"} var x = "I want an ice cream!".split(" "); //x is split into the strings ['I',"want","an","ice","cream"]
```

## Finding Strings within Strings

Checking whether a certain string contains another one needs to be done very often.

If you know the specific string you're looking for, you can find the position of the first letter of the string you're looking for. Use
`indexOf(string, start)` to find the first occurrence, and
`lastIndexOf(string, start)` to find the last occurrence. The *start* argument specifies from which index to start searching, but can be omitted if you just want to start from the beginning. If the string can't be found, it returns `-1`.

``` {data-lang="javascript"} var x = "I want an ice cream!".indexOf("want"); //x is 2
```

If you want to know the character at a certain position in the string, use `charAt(index)`. Remember that JS starts counting from zero.

``` {data-lang="javascript"} var x = "Hello World!".charAt(2); //x is 'l'
```

If you don't know the literal string you're looking for, you have to use **regular expressions**. Those are, however, far too complex to explain now and will be explained in their own chapter.

The method `search(RegExp, start)` does the same as indexOf, but works with a regular expression. Below is a very simple example:

``` {data-lang="javascript"} var x = "Hello World!".search("Hello"); //x is 0 var x = "Hello World!".search(/Hello/); //x is 0
```

The method `match(RegExp)` doesn't return the position of a match, but a list of the actual matches. (An Array, remember?)

``` {data-lang="javascript"} var x = "Hello hey hey!".match(/\s/i); //this expression matches against all whitespace characters, which means x is [" "] 
```

## Replacing Strings

And finally, you can swap parts of a string with other strings. Use the method `replace(RegExp | String, replacement)`, where the first parameter can be a plain old string, as well as a regular expression. It replaces the first occurrence of the first parameter with the replacement string provided in the second. With a Regular Expression, however, you can make it replace every occurrence (and more).

``` {data-lang="javascript"} var x = "Hello World!".replace("l","z"); //x is "Hezlo World!" x = "Hello World!".replace(/l/g,"z"); //x is "Hezzo Worzd!"
```

" slug: "javascript-string-manipulation" cat: "Website" subcat:
"JavaScript" video: "" diff: 3 quiz: "" - id: 230 title:
"\[JavaScript\] Functions" post: "

Now that you know a few of the great data types, and what you can do with them, it's time to introduce functions. You've been using them whenever I introduced a new method, and now I will explain what is behind all of these. As you'll move further within the world of JavaScript, functions become increasingly important.

Functions are blocks of code with a name

This means that you can execute a group of statements simply by calling its name. The most important use of this is that you only have to write a piece of code once, and are able to re-use it everywhere across your project.

## Declaring Functions

To declare a function, use the `function` keyword. Then, you must supply the name you want to give to your function - which follows the same rules as variable naming - and (optionally) the names of the arguments.

`function someName(param1, param2, param3) {     statements }`{.longsyntax}

If your function doesn't need arguments, you can just leave that part empty. Opening and closing the function properly with braces ( **{ }** ) is very necessary though!

## Calling Functions

A function is only executed if it is called. We've seen that a variable can be accessed by just typing its name, and functions are no different. But, to tell JavaScript we're looking for a function, and be able to supply arguments, we need to add parentheses.

``` {data-lang="javascript"} someName(value1, value2, value3);

//Calls to... function someName(param1, param2, param3) {
    /* Code block here ... */
}
```

## Execution Order

When a function is called, it first executes all statements within, before it continues executing all the statements that appear after it in the script that called it.

``` {data-lang="javascript"} function setX(what) {
    x = what;
}

var x = 5; setX(10); console.log(x); //Prints 10
```

But this should be no surprise to you, because we've been using all these methods all along, which are also executed right on the spot.

## Parameters & Arguments

There's a subtle difference between the two.

-   **Arguments** are the actual values passed into a function, like
    `2000` or `"John"`.
-   **Parameters** are the names you give to these arguments, like
    `someNumber` and `username`. These behave as variables that only
    exist within that function

The order in which you supply arguments matches the order of the parameters in the function definition, but you don't necessarily have to provide them all. You can supply less arguments, and everything executes fine, but the parameters you didn't set will be
`undefined`\-\--which can cause errors.

## The return Keyword

You're probably wondering now: what about all those methods we've seen that return values? Well, they are just functions that execute some code, and then at the end return the result. This is done with the
`return` keyword.

``` {data-lang="javascript"} function doSomething() {
    return 10;
}

console.log(doSomething()); //Prints 10
```

When JavaScript encounters a return statement, it returns the value and stops executing the function. If you don't want to leave the function early, you should of course always put the return statement at the end of the function. Saving the returned value is as simple as:

``` {data-lang="javascript"} function doSomething() {
    return 10;
}

var x = doSomething(); //x is 10
```

## Recursive Functions

One of the most powerful features of functions, is the fact that you can use them recursively. You can call a function within a function, and do that as many times as you want. This way, for example, you can very easily create a function that computes the factorial of a number.

``` {data-lang="javascript"}
/* Accepts a parameter n.  If n is greater than 1, multiply n times the factorial of (n-1) Else, if n is 1, we've reached the bottom (as factorials don't go lower than 1), and simply return 1
*/ function fac(n) {
    if(n > 1) {
        return n*fac(n-1);
    } else {
        return 1;
    }
}

var x = fac(7); //x is 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040
```

Using a recursive function will often allow you to do otherwise very complex or impossible computations with only a single function. Don't worry about understanding them completely now though, because there's still a lot you haven't learned (yet).

## Alternative Syntax

The way we've discussed functions now, they are global. They can be accessed from anywhere within the script, which is of course nice, but requires more of the computer and can cause security problems. One way of solving this, is by saving a function inside a variable. All we have to do is switch around the order of the `function` keyword and the
**name**:

``` {data-lang="javascript"} var x = function(a,b) {
    return a*b;
}

console.log(x(2,2)); //Prints 4
```

Such a function is called an **anonymous** function, as it doesn't have a name, but can only be invoked using variables that contain it. When we look at objects, we'll see that methods work roughly the same way\-\--they are anonymous, assigned to property names of the object, and don't exist outside of it.

" slug: "javascript-functions" cat: "Website" subcat:
"JavaScript" video: "" diff: 2 quiz: "" - id: 231 title:
"\[JavaScript\] Arrays I" post: "

Even though arrays have their own notation, possibilities and methods, they are not a data type in itself.

\> Arrays are ordered lists of values

Instead of assigning one value to a variable, we can assign a list of values to a single variable. It's also allowed to put values of different data types in the same list, but I discourage that. Arrays are typically used to group a collection of values that belong together, like scores from a test or all the different products in a shop's assortment. Using all sorts of data types alongside each other creates a mess and makes your code highly error prone.

Just like strings, arrays start at index 0, and count upwards. Unlike some other languages, the length of the array is not fixed, which means you can add and remove items from the list any time you want.

## Defining Arrays

For arrays, brackets ( **\[ \]** ) are your main special characters. Defining an array literal is done this way:

`var someArray = [value1, …, valuen]`{.longsyntax}

You can supply it as many values as you want (arrays can get very large), and if you leave it empty it just creates an empty array. That's somewhat similar to an empty string ( **""** ) or 0.

``` {data-lang="javascript"} var x = [1,1,2,3,5,8]; //x holds six numbers
```

## Accessing Elements

Every value of an array is called an **element**, or sometimes (list)
**item**. We can only get or set a single value of the list in one statement, which is done with

`arrayName[position]`{.longsyntax}

``` {data-lang="javascript"} var x = [1,2,3,4,5]; console.log(x[3]); //Prints 4
```

NOTE: If you access an element that's not in the array, which means it has no assigned value, it will return `undefined`. This can easily cause your program to break, so always use the right indices.

## False Elements

Because in JavaScript arrays have a dynamic size, it's possible to assign values to an element of the array that didn't exist yet. This creates problems, because arrays are ordered lists, and we now have a lot of items with a value of `undefined` within the array. I call these
*false elements*, and I recommend you stay away from them. Always build your array from the bottom to the top, without skipping any positions.

``` {data-lang="javascript"} var x = [1,1,1,1]; x[5] = 100; console.log(x[4]); //Prints undefined
```

## Array Length

Just as with strings, the `length` property returns the length of the array. But, it takes shortcuts, and simply takes the last position that has a value, plus 1.

If you don't have false elements, that's okay. Your first element will have index 0, and your last element index (length\-\--1), so the array indeed holds *length* amount of values.

If you *do* have false elements, this goes wrong. The actual amount of elements is lower than the length this gives you. Another reason to prevent this from happening!

``` {data-lang="javascript"} var x = [1,1,1,1]; console.log(x.length); //Prints 4

var y = []; y[0] = 0; y[3] = 5;  console.log(y.length); //Prints 4, but there's only two elements!
```

## Modifying Arrays

To prevent creating false elements, or accessing undefined values, we need to use standard methods that add or remove items in a clean way. It's very important to understand that, unlike strings, these methods
**modify** the array they are applied to.

##### Adding Elements

The `push(element1, …, elementn)` method adds elements to the *end* of the array.

``` {data-lang="javascript"} var x = [1,2]; x.push(3); //x is now [1,2,3]
```

The `unshift(element1, …, elementn)` method adds elements to the *start* of the array. This means it doesn't replace elements; it simply pushes all existing elements a few positions further.

``` {data-lang="javascript"} var x = [1,2]; x.unshift(3); //x is now [3,1,2]
```

Both methods increase the length, and return the new length.

``` {data-lang="javascript"} var x = [1,2]; console.log(x.push(6)); //Prints 3
```

##### Removing Last and First Element

The `pop()` method removes the *last* element of an array.

``` {data-lang="javascript"} var x = [1,2,3]; x.pop(); //x is now [1,2]
```

The `shift()` method removes the *first* element of an array.

``` {data-lang="javascript"} var x = [1,2,3]; x.shift(); //x is now [2,3]
```

##### Removing Multiple Elements

The `splice(start, length, element1, …, elementn)` method removes elements from an array. It starts from position *index*, and removes
*length* amount of values after that. If you supply a negative index, it starts counting from the end of the array. After the length argument, you *can* supply elements to be added to the end of the array, but that is not required.

``` {data-lang="javascript"} var x = [1,2,3,4,5]; x.splice(0,2); //x is now [1,2]
```

The `slice(start, end)` method works the other way around, and selects only certain elements from an array. It starts from position *start*, and selects everything up to, but not including, *end*. This is the only method that **doesn't** alter the original array!

``` {data-lang="javascript"} var x = [1,2,3,4,5]; var y = x.slice(0,3); //x is still the same, but y is [1,2,3]
```

" slug: "javascript-arrays-I" cat: "Website" subcat: "JavaScript" video: "" diff: 3 quiz: "" - id: 232 title: "\[JavaScript\] Arrays II" post: "

Because arrays are such an important part of every programming language, I split up all information into two chapters. This one will continue explaining the last few array methods, and tell you some things to watch out for.

## Changing the Order

Sorting arrays is sometimes an invaluable tool, for example if you need to get the ten highest values in a high score list. We use the
`sort(function)` method for that, where the *function* is optional.

``` {data-lang="javascript"} var x = ['a','b',true,1,2]; x.sort(); //x is now [1,2,'a','b',true]
```

If you don't supply a function, it will sort the array lexicographically. First it will sort the numbers, then the strings
(based on the order of the alphabet), then the boolean values.

Using a function enables all kinds of sorting methods. This sort function compares pairs of two values next to each other, and returns

-   A **negative** number if the first value should be before the second
-   A **positive** number if the second value should be before the first
-   A **zero** if both values are considered equal and need not be
    switched.

It will continue to do so until none of the pairs need to be switched - that means everything is in the right order.

``` {data-lang="javascript"} var x = [[1,2],[5,4],[8,2]]; x.sort(function(a,b) { return a[1]-b[1]; }); //x is now [[1,2],[8,2],[5,4]]
```

If you simply want the array reversed, use the `reverse()` method.

``` {data-lang="javascript"} var x = ["Hello","World"]; x.reverse(); //x is now ["World", "Hello"]
```

## Searching Values

Just as with strings, we can use `indexOf(value, start)` to find the position of the first occurrence, and `lastIndexOf(value, start)` to find the position of the last occurrence. If there is no match, they return a value of `-1`.

``` {data-lang="javascript"} var x = [1,2,3,4]; var y = x.indexOf(4); //y is 3
```

## Joining Arrays

Also like strings, the `concat(array1, …, arrayn)` method adds the arrays you supply, to the end of the array this is applied to.

``` {data-lang="javascript"} var x = [1,2,3,4,5,6]; var y = x.concat([5,4,3,2,1]); //y is [1,2,3,4,5,6,5,4,3,2,1]
```

## Converting to Strings

In the chapter on strings, we've seen how to chop up a string into an array containing smaller strings. The opposite is also possible\-\--converting an array (of strings) to one single string.

The `join(separator)` method joins all elements of an array, with the
*separator* connecting them. If omitted, all elements have a comma between them.

``` {data-lang="javascript"} var x = [1,2,3]; var y = x.join("/"); //y is "1/2/3"
```

## Copying Arrays

Copying an array is done quite often when we want to work with an array, but not modify the original one. JavaScript, however, doesn't automatically copy an array when we assign it to a variable. Instead, it simply saves a reference to the array.

``` {data-lang="javascript"} var x = [1,2,3]; var y = x; y[0] = "EDITED"; console.log(x); //Prints ["EDITED",2,3]
```

This little difference is often the cause of errors; when you modify an array without intending to. The proper way to actually copy an array, or part of an array, is by means of the *slice* method. This is the only method that doesn't modify the original array, but returns a new one, and now you know why it does that.

``` {data-lang="javascript"} var x = [1,2,3]; var y = x.slice(0); y[0] = "EDITED"; console.log(x); //Prints [1,2,3] console.log(y); //Prints ["EDITED",2,3]
```

" slug: "javascript-arrays-II" cat: "Website" subcat:
"JavaScript" video: "" diff: 3 quiz: "" - id: 233 title:
"\[JavaScript\] Objects" post: "

Finally, we've arrived at the big guns. The last of the great data types, which represents everything that JavaScript is.

\> Objects are unordered lists of values and functions

At first look, this seems like an upgrade to arrays. *Why is this its own data type and an array isn't?* Because it's actually the other way around\-\--an array is just a simplified version of an object.

Arrays only represent lists of numbers with corresponding values. Objects can also link strings with values, and can contain those functions we've been calling methods.

This means that objects in JavaScript are exactly like objects in the real world; they have a certain set of properties and functions. Objects of the same kind have the same properties, but with different values, and the same methods, but executed at different times.

For example, a computer, as an object, has properties like *brand*,
*screen size*, *operating system*, *memory*. Two computers can have different values for screen size, but a computer will always have a screen. A computer also has functions like *starting up* and *shutting down*, but computers don't all have to shut down at the same time, and the way they shut down depends on its *operating system* property.

Knowing this, we can define objects we can copy easily and use in numerous ways.

## Declaring Objects

The literal syntax for declaring an object is

`{ property: value, property: value, … }`{.longsyntax}

``` {data-lang="javascript"} var user = {
    username:"Johnny",
    password:"DucksAreAwesome",
    credits:250,
    updateCredits: function() {
        return "You can't.";
    }
}
```

The properties follow the same naming rules as variables. Values can be anything.

## Accessing Properties & Methods

There are two ways to access properties or methods:

-   **Dot notation**: `object.property`
-   **Array notation**: `object["property"]`

They both do exactly the same, but the second is more secure. With the first one, you might run into problems when your property is a reserved word (like, for example, *length*).

``` {data-lang="javascript"} var x = user["username"]; //x is "Johnny" x = user.username; //x stays the asme

var y = user.updateCredits(); //y is "You can't." y = user["updateCredits"](); //y stays the same
```

## Copying Objects

Just like Arrays, when you assign an object to a new variable, it simply creates a reference. Arrays had the solution of using *slice*, but objects don't have such a method. Instead, if you want to copy an object, you'll have to create a new object and transfer all properties. This is quite complex, and you'll learn about it later.

" slug: "javascript-objects" cat: "Website" subcat: "JavaScript" video: "" diff: 3 quiz: "" - id: 234 title: "\[JavaScript\] Scope" post: "

I brought you the wonderful news that you could access variables from anywhere. Well, I lied.

JavaScript uses something called **function scope**, which means that variables declared inside *functions* have **local** scope. Variables declared anywhere else have **global** scope. In both cases, however, you still need to declare a variable before you're able to access it.

Global scope variables can be accessed from anywhere. Local scope variables disappear as soon as the function is done executing, and can't be accessed from anywhere outside of it.

\> Scope is the set of variables, objects and functions you have access to in a certain code block

It's recommended to keep your variables local as much as possible. This prevents name collisions, and is faster to execute. *Why?* Because, when JavaScript encounters a variable name, it starts looking at the function that contains this piece of code. If it can't find the variable declaration there, it looks at the function or code block that contains it, one level up the hierarchy. It keeps moving levels upwards, until it reaches the point where the variable is declared. The more local your variables, the shorter you keep this lookup distance, and the faster it will execute.

NOTE: If it doesn't find the variable declaration, it will just assume the variable to be global. This means that you can declare global variables everywhere by not using the `var` keyword, but I don't recommend doing this very often. This also means that you can access variables that haven't been declared yet, which is called **variable hoisting**, and should be ignored as well.

## The let Keyword

Sometimes, function scope isn't what you want, but **block scope** is: variables declared inside a code block, have local scope with respect to that. In practice, this means that a variable declared between two braces ( **{ }** ), doesn't exist anywhere outside of these. To make a variable block scope, we don't use the *var* keyword, but the `let` keyword.

``` {data-lang="javascript"} if(true) {
    let x = 5;
} console.log(x); //Prints undefined
```

## The this Keyword

The keyword `this` refers to the current scope. More specifically, it returns the Object that owns the scope you're in. If you're in global scope, it returns the Global Object, which is the browser window. If you're in a function, it returns whatever object called the function. The value of **this** is automatically kept track of by JavaScript, which is often what you want, but you can override it when calling functions.

The methods

`call(thisObject, argument1, …, argumentn)apply(thisObject, arguments)`{.longsyntax}

both call the function they are attached to, and use *thisObject* as the value for `this` within the function. The only difference is that the second one allows you to pass in the arguments as one array, while the first one requires all arguments be listed explicitly.

``` {data-lang="javascript"} function someFunc() {
    return this.a;
}

console.log( someFunc.apply({a:10}) ); //Prints 10 console.log( someFunc() ); //Prints undefined, because the root this object doesn't have a property a to access
```

Within block scope, you can simply save the object you want to perform the function of `this` in another variable, and use that.

``` {data-lang="javascript"} var that = this;
// Somehow, the value of this is changed within this block someBlock {
    //But luckily, we can just access the root this here with the that variable
    that.doSomething();
}
```

## Closures

Because of this scoping mechanic, JavaScript has a feature called
**closures**, which is a fancy name for something very simple. Say you have a function B nested inside another function A. Then B has access to everything inside of A, but A does *not* have access to whatever's inside of B. If you let A **return** the function B, the latter will contain a reference to its environment at the moment function A was called. This allows you to work with variables that are untouchable from the outside, which is good for security and performance reasons.

``` {data-lang="javascript"}
/* Subtract returns another function The subtract function is only run once, initalizing the counter variable. But, the function it returns, has a memory of its environment on creation,  which enables it to subtract 2 from the running counter, instead of resetting it and subtracting from 100 every time.
*/

var subtract = (function () {
    var counter = 100;
    return function () {
        return counter -= 2;
    }
})();

subtract(); subtract(); console.log(subtract()); //Prints 94
```

" slug: "javascript-scope" cat: "Website" subcat: "JavaScript" video: "" diff: 3 quiz: "" - id: 235 title: "\[JavaScript\] Classes" post: "

Now that we've learned about objects and scope, we can finally piece them together to create the building blocks of most JavaScript programs: Classes. A class is a function that creates an object with predetermined properties, but dynamically generated values. Then you can call the function, supply the right arguments, and you have a new, fully capable object.

## Defining Classes

Classes are essentially just functions, which means it's common practice to start them with a capital letter to distinguish them from non-class functions. Such a function is usually called a **constructor function**.

Within the function, we can use the `this` keyword to refer to the object it will create, and define all its properties.

``` {data-lang="javascript"} function Animal(name,type,age) {
    this.name = name;
    this.type = type;
    this.age = age;
}
```

## Creating Objects from Classes

For this we call the function, but with the `new` keyword in front. This tells JavaScript that we want a new object created from the constructor function, and not just execute the function.

``` {data-lang="javascript"} var newAnimal = new Animal("Debby","Cow",4);
```

## Prototype

It's great that we can create objects with methods included at the same time, but what if we want to add a method to all instances of this object later on? That's when prototypes kick in! Every type of object has a `prototype`, from which it inherits all properties and methods. We can access it using the dot notation we're used to, and use it to add a new method.

``` {data-lang="javascript"} var newAnim = new Animal("Laura");

Animal.prototype.changeName = function(a) {
    this.name = a
}

bla.changeName("Juan"); console.log(bla.name); //Prints "Juan"
```

The great thing about this, is that we can also add our own methods to JavaScript's standard objects, like `Math` or `String`. For example, we could write a function that returns the amount of times a certain letter occurs within a string, add that to the prototype, and we're able to perform this method on every string!

``` {data-lang="javascript"}
//This function accepts a one-character string, and counts how often it occurs in a string String.prototype.countThem = function(a) {
    var s = this;
    var count = 0;
    for(var i=0;i
"
  slug: "javascript-classes"
  cat: "Website"
  subcat: "JavaScript"
  video: ""
  diff: 3
  quiz: ""
-
  id: 236
  title: "[JavaScript] Booleans & Comparisons"
  post: "We've discussed all data types in depth, except for Boolean values. That's okay, because they are going to be the main topic of conversation from now on! Up until now we only wrote scripts that just blast through all the statements after each other until they're finished. That's not how most scripts work. 

Programs check whether something is true or false, and decide, based on that information, what parts to execute (and when). For example, when a user logs into his account on a website, the script performs a check to see if his username and password match. If the outcome is true, he is logged in. If its false, a message is returned that something went wrong. There are no other states, because a computer can't semi-execute statements, which means Booleans are the perfect (and only) way to do this.

The Boolean Object

Just as everything else, the Boolean data type is an object. We can use it as a function, which takes any value as input, and returns whether it is true or false. Using it, you can determine which values are automatically true or false.

Standard false Values

These values always spit back false: 0, -0, "", undefined, null, false, NaN


console.log(Boolean(NaN)); //Prints false
```

##### Standard true Values

Everything else!

``` {data-lang="javascript"} console.log(Boolean(-40)); //Prints true console.log(Boolean("false")); //Prints true as well
```

## Comparisons

Comparisons are used to check whether not values, but statements are true; is x equal to y? Is x greater than y? Is this string exactly the same as another string? We can only compare two values at once, and to do so we place one of these operators between them:

  ---------- ------------------------------------
  Operator   Description
  `==`       equal value
  `===`      equal value and equal type
  `!=`       not equal value
  `!==`      not equal value and not equal type
  `> `       greater than
  `< `       less than
  `>=`       greater than or equal
  `<=`       less than or equal
  ---------- ------------------------------------

``` {data-lang="javascript"} console.log( Boolean(5 <= 5) ); //Prints true console.log( Boolean(7 > 10) ); //Prints false
```

The difference between `==` and `===`, and `!=` and `!==`, is that the first one attempts to coerce the value. If one of the operands is a number, JS tries to convert the other to a number to see if the values match. If one of the operands is a Boolean, JS tries to convert the other to a Boolean. Sometimes this works just fine, sometimes this goes terribly wrong and doesn't work at all like you want to. They are therefore often seen as the lazy alternative to `===` or `!==`, and should be avoided as much as possible.

``` {data-lang="javascript"} console.log(Boolean(5 === "5")); //Prints false console.log(BOolean(5 == "5")); //Prints true
```

For the operators with *greater than* and *less than*, only numbers and strings make sense, as they have a defined order. Therefore, for Boolean values, false is converted to 0, and true to 1. If one of the operands is a number, the other one is converted to a number as well.

``` {data-lang="javascript"} console.log(Boolean(false == 0)); //Prints true console.log(Boolean(false === 0)); //Prints false
```

NOTE: You **can't** compare arrays or objects. There's just no way to do it. Comparison operators check value and type, and what value does a list of values have? Therefore, if you want to determine equality between arrays or objects, you'll need to check every item/property
(with a loop, which you'll learn about later).

## Logical Operators

To be able to compare multiple values, we can combine such comparison statements using logical operators.

  ---------- ------ ----------------------------------------------
  Operator   Name   Description
  `&&`       and    Returns true if both comparisons are true
  `||`       or     Returns true if at least one of them is true
  `!`        not    Returns true if the comparison is not true
  ---------- ------ ----------------------------------------------

``` {data-lang="javascript"} console.log( Boolean(5 === 5 && 4 === 4) ); //Prints true console.log( Boolean(5 === 2 || 1 === 1) ); //Prints true
```

Using this, we can chain together comparisons, and optionally group them within parentheses. A word of warning though: your code can become messy very quickly this way, which is why I suggest splitting up the statement once in a while. You'll learn ways to do that quickly.

``` {data-lang="javascript"} console.log( Boolean((5 === 5 || 4 === 2) && 1 == 1) ); //Prints true console.log( Boolean(5 === 4 || (4 === 2 && 1 == 1)) ); //Prints false
```

## Short-Circuit Evaluation

With the `&&` operator, if the first statement is already false, it won't bother checking the other one, because the condition will return false anyway.

With the `||` operator, if the first statement is already true, it won't check the other one, because the condition will return true anyway.

This is called **short-circuit evaluation**, and choosing the order of your statements carefully can speed up performance *a lot*.

" slug: "javascript-booleans-comparisons" cat: "Website" subcat:
"JavaScript" video: "" diff: 3 quiz: "" - id: 237 title:
"\[JavaScript\] Conditions" post: "

Last chapter discussed how to compare things, this one will show you how to use that to determine which blocks of code to execute. For this, we use **conditions**: if a certain condition is met, perform this task.

In more familiar terms: if this comparison is true, perform this task. Not surprisingly, the `if` keyword plays a big role here.

## The if Statement

The if keyword needs to be followed by a **comparison** between parentheses, which is the condition it checks against. Then, we open a code block with the familiar braces, and the if-statement is complete.

`if(condition) { statements }`{.longsyntax}

Now, if at the time of executing this code the condition returns true, the block of code inside is executed. Otherwise it is completely ignored.

``` {data-lang="javascript"} if(5 > 3) {
    console.log("Yay! Five is still greater than 3!");
}
```

## The else if Statement

Often, you want to try a new condition if your first one is false. For example, if a user has over 1000 points in his account, display a Gold User badge, but if he has between 500 and 1000, display a Silver User badge. In that case, you can follow up the if statement with an
`else if` statement. If the first condition isn't true, it checks if this one is true. It's a way of chaining multiple if statements, which also means that you can put as many *else if* statements after each other as you want.

``` {data-lang="javascript"} if(5 > 5) {
    console.log("Five seems to be greater than five");
} else if(5 == 5) {
    console.log("Five seems to be equal to five"); //Only this one is executed
}
```

## The else Statement

Any (else) if statement can be closed off with the `else` statement. It doesn't require a new condition, because it simply checks whether all previous conditions where false. You could view it as a default option\-\--if all else fails, use this. For example, if the temperature outside is above zero, display a red background, and display a blue background otherwise.

``` {data-lang="javascript"} if(5 > 6) {
    console.log("Five seems to be greater than six");
} else if(5 == 6) {
    console.log("Five seems to be equal to six");
} else {
    console.log("Five seems to be less than six");  //Only this one is executed
}
```

NOTE: You can have only one else statement, and it should always be the last one in the chain.

## The Ternary Operator

Sometimes, you don't know for certain which value you want to assign to a variable, but it depends on a certain condition. For this, a very useful shorthand was invented, which is called the **ternary operator** or sometimes even referred to as `?:`. The syntax is:

`variable = (condition) ? value1 : value2`{.longsyntax}

If *condition* is true, it assigns value~1~ to the variable, if it's false, it assigns value~2~.

``` {data-lang="javascript"} var x = (5 > 4) ? 1 : 0; //x is 1
```

## The switch Statement

These if statements are great, but quite tedious to write out when we're checking against the same expression every time. In the example I gave with the Gold and Silver badge for the user, we'd be checking against the same variable - his points total - every time. If we had like 20 different badges, I don't think you'd like writing out that massive if statement.

For this, we have the `switch` statement. It evaluates the expression you give it once, at the start, and then checks it against every `case` you provide. When it finds a match, it executes the code block within the case.

``` {data-lang="javascript"} var x = 2;

switch(x) {
    case 0:
        doSomething();
    case 1:
        doSomethingElse();
    case 2:
        doAnotherThing(); //This one is executed
}
```

This way, however, it keeps executing everything below it after it's already found one match. To exit out of the statement, use the `break` keyword.

``` {data-lang="javascript"} var x = 1;

switch(x) {
    case 0:
        doSomething();
        break;
    case 1:
        doSomethingElse(); //This one is executed
        break;
    case 2:
        doAnotherThing(); //This one isn't
        break;
}
```

Just as with if statements, we would like to have a default code block to execute when everything else fails. For this, use the `default` keyword. It's best placed at the end, but can be placed anywhere.

``` {data-lang="javascript"} var x = 3;

switch(x) {
    case 0:
        doSomething();
        break;
    case 1:
        doSomethingElse();
        break;
    default:
        console.log("Yay, defaults!"); //This one is executed
        break;
}
```

One bonus feature you receive with the switch statement, is the possibility to **fall through** cases. You can assign the same code block to multiple cases, and multiple code blocks to a single case. As long as you don't *break* out, it just keeps falling through the code until it reaches the end.

``` {data-lang="javascript"} var x = 1;

switch(x) {
    case 0:
        doSomething();
        break;
    case 1:
        doSomethingElse(); //This one is executed
    case 2:
        console.log("Yay, defaults!"); //This one as well
        break;
}
```

" slug: "javascript-conditions" cat: "Website" subcat:
"JavaScript" video: "" diff: 3 quiz: "" - id: 238 title:
"\[JavaScript\] Control Flow & Error Handling" post: "

With *if* and *switch* statements we can largely control the flow of the program, but not entirely. If anything goes wrong, JavaScript just completely stops executing and raises an exception or throws an error. In most cases, these errors will be vague and general, and not really tell you what's going on, because JavaScript doesn't understand the ideas behind your script.

Therefore, it's good to be able to generate your own custom error messages, and be able to continue the program when something goes wrong.

## The try ... catch Statement

If there's code you're not certain about, or that has a chance of producing fatal errors, you can first `try` it, and then `catch` any possible errors. If an errors occurs, you'll be able to display it, and the program just continues execution.

``` {data-lang="javascript"} try {
    //statements...
} catch(err) {
    //error handling...
}
```

You can choose the name of the variable that contains the error yourself, but sticking with `e` or `err` is usually wise.

## The throw Keyword

This way you're still using the standard JavaScript error messages, but you can use the `throw` keyword to throw your own error messages. You can throw an error message as a number, string, Boolean or object. But it's recommended you choose something descriptive that really gives you insight into what went wrong. Custom errors, in this case, need to be thrown within the `try` part of the try-catch statement, but they are also allowed anywhere outside of such an environment.

``` {data-lang="javascript"} try {
    var x = 5;
    if(x === undefined) {
        throw "Assigning x failed miserably!";
    }
} catch(err) {
    console.log(err); 
    //If, somehow, assigning x failed in the try part, this will print the message "Assigning x failed miserably!"
}
```

## The finally Statement

Using such a construction already prevents JavaScript from completely stopping execution when the slightest error occurs, but you can use the
`finally` statement to neatly close it off. Whatever happens, the code within finally is executed. This code is mostly used to clean up the mess made by this error. For example, if the error is that we're trying to assign a value that doesn't exist to a variable, we need to somehow make sure we assign a valid (default) value before actually continuing with the code.

``` {data-lang="javascript"} try {

} catch(err) {

} finally {
    //This code runs anyhow
}
```

## A Final Note

This is great and all, but it's of course better to solve every bug in your program and write clean code, than just list all the errors and let them happen. These kinds of error handling practices should only be used on critical parts of the code that you really can't have breaking down, or parts you know have a chance of failing, but can't (at the moment) do something about.

" slug: "javascript-control-flow-error-handling" cat: "Website" subcat: "JavaScript" video: "" diff: 3 quiz: "" - id: 239 title:
"\[JavaScript\] Loops I" post: "

Lots of ways to make your life easier have already been raised, but the last one hasn't been: **loops**. With functions we can call the same set of statements with a single line\-\--but if we wanted to perform that function many times, we would still have to type lots of duplicate lines. That's when loops come in, which, as the name suggest, loop through the same piece of code a certain amount of times. And just as with functions, we can change the parameters every time. Typically, loops are used to loop through all elements of an array, or all properties of an object.

There are multiple kinds of loops, of which some are general ones
(applicable to anything), and some are specific (methods applicable to only certain data types). I want to start off with the general ones, as you'll use them most often, and they introduce the concept of loops very well.

## The for Loop

A `for` loop executes a code block a predetermined amount of times. It needs three statements as arguments, split by a semicolon.

`for(statement1; statement2; statement3) {     code }`{.longsyntax}

Statement 1 is the **initializer**. It declares a variable (the
**iterator**) and sets it to an initial value.

Statement 2 is the **condition**, where one of the operands is the initializer. As long as the condition is true, the loop keeps running.

Statement 3 is the **updater**. Whatever statements are inside are performed every time a loop ends. Usually, this simply increments the iterator.

``` {data-lang="javascript"} for(var i=0;i<10;i++) {
    console.log("Current iteration is " + i); //Prints 10 statements, each with the current value of i
}
```

If you want, you can declare more variables to be used within the for loop in the *initializer*. Nevertheless, it's best to keep the other two statements as simple as possible.

## The break & continue keywords

There will be times when you want to exit out of a for loop early, or skip some of the iterations. For example, if a *for loop* loops through an array to find a certain value, once it has found that value it doesn't need to continue searching and can exit the loop.

The `break` keyword exits the current loop.

``` {data-lang="javascript"} for(var i=0;i<10;i++) {
    //If the iterator is a multiple of three, stop looping
    if(i%3 === 0) {
        break;
    }
}
```

The `continue` keyword continues to the next iteration of the loop.

``` {data-lang="javascript"} for(var i=0;i<10;i++) {
    /*If the iterator is an even number, skip this iteration and go to the next value:
    nothing will be logged */
    if(i%2 === 0) {
        continue;
    }
    console.log("Current value is " + i);
}
```

## The while Loop

A `while` loop is simpler, but requires you to be more careful. It requires a condition, any condition, and runs as long as this condition is true. It's up to you to ensure the condition is correct, and is at some point going to be false, otherwise you get an *infinite loop*\-\--which causes everything to crash.

``` {data-lang="javascript"} var x = 0;

//This loop runs 10 times while(x < 10) {
    x++;
}
```

## The do ... while Loop

One downside of the while loop, is that you don't know how often it will run, and therefore don't know if it will run *at all*. Usually you want a piece of code to execute at least once, which is when you use the
`do … while` loop. It runs whatever is inside the do block once, and only after that starts checking the condition and looping if necessary.

``` {data-lang="javascript"} var x = 0;

//This loop runs one time do {
    x++;
} while(x < -5);
```

## The for ... in Loop

This is great and all, but we can't use a standard *for loop* to loop through all properties of an object, as the properties are not numerically indexed. That's when we use the `for … in` loop. It uses the for keyword you just learnt about, but needs only one statement, which makes the syntax:

`for(propertyName in Object) { statements } `{.longsyntax}

Then, within the loop, you can access the value of each property.

``` {data-lang="javascript"} var obj = {a:0, b:1, c:2};

for(var prop in obj) {
    console.log(prop);
}

/* This prints
    a
    b
    c
*/
```

## Nested Loops & Labels

Loops can be nested. Nothing special here, just make sure you assign a different variable name to the different iterators. What is special, is that we can use the *break* or *continue* keywords on parent loops. For example, say we had three loops nested inside each other, this allows us to break out of them all at the same time with one statement.

We can't save a loop inside a variable, as it isn't a data type, but we can **label** it. This is done by typing any name, followed by a colon.

``` {data-lang="javascript"} someLabel: for(var i=0;i<10;i++) {
    console.log(i);
}
```

Now we can add a label name after the *break* or *continue* keyword to specify which loop we are referring to.

``` {data-lang="javascript"} someLabel: for(var i=0;i<10;i++) {
                for(var j=10;j>5;j--) {
                    //If i and j are the same, break out of both loops at once
                    if(i == j) {
                        break someLabel;
                    }
                }
           }
```

" slug: "javascript-loops-I" cat: "Website" subcat: "JavaScript" video: "" diff: 3 quiz: "" - id: 240 title: "\[JavaScript\] Loops II" post: "

Now that you (hopefully) understand the concept of loops, we can revisit arrays and objects, and discuss the methods I've left out earlier. These methods loop over arrays or objects, and perform certain basic and useful functions. They could, therefore, be replicated with your regular
*for loop*, but that would be more complex and more work.

## Objects

The `hasOwnProperty(propertyName)` method returns true if an object has the property *propertyName*, and false otherwise. The `keys()` method returns an array with all properties that an object has.

``` {data-lang="javascript"} var obj = {a:0, b:1, c:2} obj.hasOwnProperty("a"); //true var x = Object.keys(obj); //x is ["a","b",""c] 
```

I think it's a good exercise to see if you can simulate these methods using your knowledge of *for ... in loops*!

## Arrays

##### Reduction

The `reduce(function, initial)` method is able to reduce an array to a single value, which it does by looping through all values and performing a function. This function determines how all elements are combined together. It is automatically given four arguments:

-   **previousValue**: the value from all previous elements combined
-   **currentValue**: the value of the current element being processed
-   **currentIndex**: the index of the current element being processed
-   **array**: the array the method was called upon

This reduced value starts from the value provided in the second
*initial* parameter, which means that *previousValue = initial* when processing the first element of the array.

``` {data-lang="javascript"} var x = [1,2,3,4,5];

var y = x.reduce(function(previousValue,currentValue,currentIndex,array) { return previousValue+currentValue; }, 0); //y is 15, simply all elements added together
```

The `reduceRight(function, initial)` method does the same, but starts at the end and works towards the start.

##### Creating

The `map(function, thisObject)` method creates a new array, which contains the results of calling the provided *function* on every element of the original array.

The function you provide is automatically given three arguments:

-   **currentValue**: the value of the current element
-   **index**: the index of the current element
-   **array**: the array the method was called upon

The second parameter is used to set what `this` refers to inside the
*function*, but is optional.

``` {data-lang="javascript"} var x = [1,2,3,4,5];

var y = x.map(function(currentValue,currentIndex,array) { return currentValue/(currentIndex+1); }); //y is [1,1,1,1,1]
```

The `filter(function, thisObject)` method creates a new array which includes all values that pass the test in *function*. In other words, it preserves only the values which make the *function* return true. It receives the same arguments as the *map* method.

``` {data-lang="javascript"} var x = [1,2,3,4,5];

function someFunc(currentValue,currentIndex,array) { 
    if(currentValue%2 === 0) { 
        return true; 
    } else { 
        return false; 
    }
}

var y = x.filter(someFunc); //y is [2,4]
```

##### Testing

The `every(function, thisObject)` method tests whether every element within the array makes the *function* return true. If at least one time the *function* returns false, it returns false.

The `some(function, thisObject)` method checks whether at least one element of the array passes the test. Only if all of them fail, it returns false.

``` {data-lang="javascript"} var x = [1,2,3,4,5];

function someFunc(currentValue,currentIndex,array) { 
    if(currentValue%2 === 0) { 
        return true; 
    } else { 
        return false; 
    }
}

var y = x.every(someFunc); //y is false

var z = x.some(someFunc); //z is true
```

Both *function*s receive the same arguments as the *map* method.

##### Searching

The `find(function, thisObject)` method returns the *value* of the element in the array that passes the test. In other words, if a value makes the *function* return true, that value is returned by this method.

The `findIndex(function, thisObject)` method does the same, but returns the *index* of the matching element.

``` {data-lang="javascript"} var x = [1,2,3,4,5];

function someFunc(currentValue,currentIndex,array) { 
    if(currentValue%2 === 0) { 
        return true; 
    } else { 
        return false; 
    }
}

var y = x.find(someFunc); //y is 2

var z = x.findIndex(someFunc); //z is 1
```

##### Filling Up

The `fill(value, start, end)` method fills all elements with an index between *start* and *end* with the provided *value*.

``` {data-lang="javascript"} var x = [1,2,3,4,5];

var y = x.fill(10,1,3); //y is [1,10,10,4,5]
```

##### The forEach Method

The `forEach(function, thisObject)` method executes *function* for every element in the array. This function receives the same arguments as the
*map* method.

``` {data-lang="javascript"} function logElements(currentValue, currentIndex, array) {
  console.log("Current value is " + currentValue);
}

[1,2].forEach(logElements);

/* Prints Current value is 1 Current value is 2
*/
```

" slug: "javascript-loops-II" cat: "Website" subcat: "JavaScript" video: "" diff: 4 quiz: "" - id: 241 title: "\[JavaScript\] JSON" post: "

Before we can finally begin working on changing actual webpages, I have one last small thing to explain. JSON is an acronym for JavaScript Object Notation, which is a fancy term for working exclusively with objects.

\> JSON is a way to save and load JavaScript objects.

The idea is, that you create one master object, which holds every bit of data you want saved. Usually this means even more objects with even more properties.

Then, use `JSON.stringify(masterObject)` to transform it into a string, which you can just save in a text file or copy-paste anywhere you like. To transform it back into objects later on, use `JSON.parse(string)`.

``` {data-lang="javascript"} var userData = { name : "Bert", score : 1200, } var x = JSON.stringify(userData); //x is '{ "name":"Bert", "score":1200}' var y = JSON.parse(x); //y is the same as userData again
```

That's all! Do keep in mind though, that this is a very simple example, and you'll probably be using much bigger objects in real-life cases.

Also notice that stringifying a JSON object does two things: it places double quotes around all strings (single quotes are not allowed), and it removes trailing commas. If you're ever thinking of integrating JSON with some other language, know that a string that doesn't comply with these two rules will throw an error, as it isn't valid JSON notation.

" slug: "javascript-JSON" cat: "Website" subcat: "JavaScript" video: "" diff: 3 quiz: "" - id: 242 title: "\[JavaScript\] DOM" post: "

DOM stands for Document Object Model, which is the system that relates JavaScript to HTML. Within this system, every HTML element is regarded as an object, and has certain properties and methods we can call. We like to call them **nodes**, as they're not entirely the same as objects, but we'll get to that later. For now, just know that everything you've learnt thus far is applicable and ready to be used in the DOM!

The object that contains all these nodes is the `document`, and every call to the DOM starts with accessing a property or method on this object.

## Accessing Elements

Elements can be accessed via their **id**, **class**, **tag** or a custom **CSS selector**.

  ------------------------------------------ ------------------------------------------------------------
  Method                                     Description
  `document.getElementById(id)`              Returns the element with id = *id*
  `document.getElementsByClassName(class)`   Returns all elements with class = *class*
  `document.getElementsByTagName(tag)`       Returns all *tag* elements
  `document.querySelector(selector)`         Returns the first element found that fits the CSS selector
  ------------------------------------------ ------------------------------------------------------------

``` {data-lang="javascript"} var x = document.getElementById('main'); //x holds the element with id "main"
```

All of these can just be saved into a variable, so you don't have to write these long methods every time.

## Changing Elements

There's three things that can be changed on an HTML element: the content, the attributes, and the CSS styles.

+-----------------------------------+-----------------------------------+
| Property                          | Description                       |
+-----------------------------------+-----------------------------------+
| `elem.innerHTML = content`        | Changes the content of the        |
|                                   | element to *content*.             |
+-----------------------------------+-----------------------------------+
| `elem.attribute = value`          | Sets attribute to *value*         |
|                                   |                                   |
| `ele                              |                                   |
| m.setAttribute(attribute, value)` |                                   |
+-----------------------------------+-----------------------------------+
| `elem.style.property = value`     | Sets property to *value*          |
+-----------------------------------+-----------------------------------+

``` {data-lang="javascript"} document.getElementById('main').style.backgroundColor = 'red'; //changes the background colour of the element with id "main" to red
```

## Adding and Removing Elements

Instead of just changing existing elements, we can also add our own and remove some!

  ------------------------------------------ -------------------------------------------------------
  Method                                     Description
  `document.createElement(element)`          Creates an HTML element
  `elem.removeChild(element)`                Removes *element*
  `elem.appendChild(element)`                Adds *element* as the last child to *elem*
  `elem.insertBefore(element, child)`        Adds *element* to *elem*, right before *child*.
  `elem.replaceChild(element, oldElement)`   Replaces *oldElement* with *element* inside of *elem*
  ------------------------------------------ -------------------------------------------------------

``` {data-lang="javascript"} var x = document.createElement('p'); document.getElementById('main').appendChild(x); //adds a paragraph tag, as a child, to the element with id "main"
```

## Navigating Nodes

All these nodes are connected to each other, which enables you to pick a starting point and travel to wherever you want using node relationships. But, one important difference between HTML elements and nodes, is that the text within an element is also a node\-\--more specifically, it's a
**text node**. Attributes of elements are also nodes\-\--**attribute nodes**.

The value of these text or attribute nodes can be accessed by calling the `innerHTML` or `nodeValue` property on the element node.

Other properties to navigate nodes are:

+-----------------------------------+-----------------------------------+
| Property                          | Description                       |
+-----------------------------------+-----------------------------------+
| `parentNode`                      | The parent node                   |
+-----------------------------------+-----------------------------------+
| `childNodes[number]`              | The child with index *number*     |
+-----------------------------------+-----------------------------------+
| `firstChild`                      | The first child ( = index 0)      |
+-----------------------------------+-----------------------------------+
| `lastChild`                       | The last child                    |
+-----------------------------------+-----------------------------------+
| `nextSibling`                     | The first node right after it     |
+-----------------------------------+-----------------------------------+
| `previousSibling`                 | The first node right before it    |
+-----------------------------------+-----------------------------------+
| `nodeName`                        | For element nodes, this is the    |
|                                   | tag name.                         |
|                                   |                                   |
|                                   | For attribute nodes, this is the  |
|                                   | attribute name                    |
|                                   |                                   |
|                                   | For text nodes, this is *#text*   |
|                                   |                                   |
|                                   | For the root document node, this  |
|                                   | is *#document*                    |
+-----------------------------------+-----------------------------------+

``` {data-lang="javascript"} var x = document.getElementById('main').parentNode; //selects the parent element of the element with id "main"
```

## Node Lists

DOM methods that could potentially select a group of elements, like
`getElementsByClassName()` and `getElementsByTagName()`, return a **node list**. This is essentially an array, but very restricted. Node lists have a `length` property, and every index can be accessed like you're used to\-\--but it stops there.

``` {data-lang="javascript"} var x = document.getElementsByClassName("coolButton"); for(var i=0;i

Changing CSS

The DOM only touches HTML, so changing CSS means setting an inline style on an element. In addition, CSS properties often contain hyphens ( - ) which JavaScript can't handle. Therefore, property names need to have the hyphen removed, and the first letter of each word capitalized. For example: border-width becomes borderWidth, list-style-type becomes listStyleType. Values are provided just like you're used to, but don't forget to type them as strings.


var x = document.getElementById('main').marginLeft = '100px';
```

## Dynamic Writing

If you want, you can write text within a document as it is being loaded. To do so, use `document.write(message)` or `document.writeln(message)` within the body part of the document. If you place them in the head, they are executed *after* the page has finished loading, which means they overwrite everything that's inside. The only difference between the two is that the second one automatically inserts a new line after it.

``` {data-lang="javascript"} document.writeln("This is a cool line of text");
```

" slug: "javascript-DOM" cat: "Website" subcat: "JavaScript" video: "" diff: 3 quiz: "" - id: 243 title: "\[JavaScript\] BOM I" post: "

BOM stands for Browser Object Model. It's not an officially recognized model, but everybody just kind of agrees on it and has implemented it, which means it's safe to use it. In het DOM we saw that the HTML markup was transformed into a network of nodes, with the *document* being the root node. The BOM goes one step further, and represents a parent node for the document, which is the thing that contains every document: the browser `window`. The window has access to a large set of useful features that the document couldn't possibly know of, and you'll probably need to do something with the BOM in every project of yours.

## Window Size

To access the size of the browser *window*, use `window.innerWidth` and
`window.innerHeight`

``` {data-lang="javascript"} document.getElementById('bigScreen').style.width = window.innerWidth; document.getElementById('bigScreen').style.height = window.innerHeight;
```

NOTE: All methods and properties of the window object you'll encounter below, can also be accessed without the word `window` prefixed. It's shorter.

## Screen Size

To access the user's *screen*, use `window.screen`. These properties are available:

  --------------- --------------------------------------------------------------------------------------------------------------
  Property        Description
  `width`         The width of the screen
  `height`        The height of the screen
  `availWidth`    The width of the screen *minus* space taken up by interfaces (like windows task bar)
  `availHeight`   The height of the screen *minus* space taken up by interfaces
  `colorDepth`    Returns the number of bits used to display one colour (24 or 32 bits is usual these days).
  `pixelDepth`    Returns the number of bits used for one pixel. For modern computers, colorDepth and pixelDepth are the same.
  --------------- --------------------------------------------------------------------------------------------------------------

``` {data-lang="javascript"} console.log("Screen dimensions are " + window.screen.width + 'x' + window.screen.height);
```

## Window Methods

There are two methods available you can call on the window object:

  ----------------- -----------------------------------------------------
  Method            Description
  `open(URL)`       Opens a new window which links to *URL*
  `close(window)`   Closes a window. Can only close windows you opened.
  ----------------- -----------------------------------------------------

``` {data-lang="javascript"} window.open("http://google.com");
```

## Window Location

The `location` property is used to refer to the current URL the window or tab is pointing to. We can use it to get or redirect the current page. These properties are available:

  ------------------------------------ -----------------------------------------------------
  Property                             Description
  `href`                               Returns the complete URL of the current page
  `hostname`                           Returns the domain name
  `pathname`                           Returns the path and filename of the current page
  `protocol`                           Returns the web protocol used (http:// or https://)
  `assign                          `   Loads a new document
  ------------------------------------ -----------------------------------------------------

``` {data-lang="javascript"} console.log(window.location.href); //Prints the current URL
```

## Window History

Of course we can't go sniffing around other people's history, which means the `history` property can only *move* back and forward between history of the current window.

  ----------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Method                                    Description
  `forward()`                               Does the same as clicking the Forward button in the browser
  `backward()`                              Does the same as clicking the Back button in the browser
  `go(index)`                               Moves *index* amount of steps. A negative number will move backward, a positive number forward.
  `pushState(stateObject, title, url)`      Inserts the *url* into the user's history. The first argument is a regular object which can be used to add data to this state. The *title* is mostly ignored by browsers.
  `replaceState(stateObject, title, url)`   Works the same as the previous method, but replaces the current URL you're on, instead of adding a new one at the end of your history stack.
  ----------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

``` {data-lang="javascript"} window.history.go(-2); //Go two pages backward in history (if possible)
```

## Popup Boxes

You might think of popup boxes as being the most annoying things on the internet, which is partly true, but they are great for two purposes: debugging/testing your code, and preventing users from doing stupid things. For example, if somebody has been typing an article for an hour, it would be a shame if they accidentally hit the back button and everything was gone\-\--popup boxes can interrupt that and ask the user if they really want to leave. There are three flavours available:

+-----------------------------------+-----------------------------------+
| Type/Method                       | Description                       |
+-----------------------------------+-----------------------------------+
| `alert(someText)`                 | An alert box with *someText* pops |
|                                   | up, and disappears when the user  |
|                                   | clicks OK.                        |
+-----------------------------------+-----------------------------------+
| `confirm(someText)`               | A confirm box with *someText*,    |
|                                   | but if the user presses OK it     |
|                                   | returns *true*, and if he presses |
|                                   | Cancel it returns *false*         |
+-----------------------------------+-----------------------------------+
| `prompt(someText, initialValue)`  | A prompt box with *someText*, and |
|                                   | a text input field.               |
|                                   |                                   |
|                                   | If the user presses OK it returns |
|                                   | the value the user typed, if he   |
|                                   | presses Cancel it returns *null*. |
+-----------------------------------+-----------------------------------+

``` {data-lang="javascript"} var a = prompt("What's your name?", "Juan"); if(a !== null) {
    console.log("Welcome " + a + "!");
}
```

" slug: "javascript-BOM-I" cat: "Website" subcat: "JavaScript" video: "" diff: 3 quiz: "" - id: 244 title: "\[JavaScript\] BOM II" post: "

This second chapter on the BOM contains maybe two of the most valuable aspects: timing and cookies.

## Timing

The browser window has a sense of timing, which means you can time functions to execute after a certain period or at regular intervals.

The `setTimeout(function, time)` method executes *function* after waiting for *time* **milliseconds**. It executes it only once, and you can even prevent it from happening by calling `clearTimeout(timeout)`.

``` {data-lang="javascript"} setTimeout(callback, 1000);

function callback() {
    console.log("1 second passed!");
}
```

The `setInterval(function, time)` method executes *function* every
*time* milliseconds\-\--which means it continues calling the function at regular intervals until infinity. To stop it, there's the
`clearInterval(interval)` method.

``` {data-lang="javascript"} function callback() {
    counter++;
}

var counter = 0;
//Increments the counter every second setInterval(callback, 1000);
```

## Cookies

Cookies are a property of the `document` object, even though they are saved by the browser. And the confusion doesn't stop there: JavaScript has a very odd way of dealing with cookies, which I will try to explain.

All cookies are stored as a string within the `document.cookie` property. This means that if you want to access the value of a certain cookie, you have to split this string into an array and loop through it. This also means that if you want to create a new cookie, you need to add it to the string.

##### Adding Cookies

This addition, however, doesn't work with the `+` like you're used to, but without it. The syntax for adding a new cookie is

`document.cookie = "name = value;"`{.longsyntax}

one cookie at a time. If you provide more than one, it *does* overwrite all the previous cookies.

``` {data-lang="javascript"} document.cookie = "username=Juan;"; document.cookie = "lastVisit=Sunday;";
//Now two cookies are stored
```

##### Accessing Cookies

This simple for loop can be used to loop through all the cookies. Not only can you access the values of certain cookies, you can also change or remove them. To save your changes you simply have to join the array into a string again, and assign that to the cookie property.

``` {data-lang="javascript"} var keyValuePairs = document.cookie.split(';'); for(var i = 0; i < keyValuePairs.length; i++) {
    console.log(keyValuePairs[i]);
}
/* Prints
    username=Juan
    lastVisit=Sunday
*/
```

##### Expiration Date

Optionally, when creating a new cookie, you can assign an expiration date (in UTC time) with the syntax

`expires = Date;`{.longsyntax}

``` {data-lang="javascript"} document.cookie = "username=Juan;expires=Thu, 17 Dec 2015 12:00:00 UTC"
```

NOTE: You'll learn about Date notation in the *Dates* chapter.

## Navigator

The `window.navigator` property refers to the kind of browser that is accessing the page. Every browser's implementation is slightly different though, which means using it doesn't always give the right results, so be careful. It has these properties:

  ----------------- -------------------------------------------------------
  Property          Description
  `appCodeName`     Code name of the browser
  `appName`         Actual name of the browser
  `appVersion`      Version information of the browser
  `cookieEnabled`   Determines whether cookies are enabled in the browser
  `language`        Language of the browser
  `online`          Determines whether the browser is online
  `platform`        Which platform the browser is compiled for
  `product`         Engine name of the browser
  `userAgent`       User-agent header sent by the browser to the server
  ----------------- -------------------------------------------------------

It also has one method, `javaEnabled()`, which returns true if Java is enabled within the browser.

``` {data-lang="javascript"} console.log(window.navigator.appName); //Prints the name of the browser, in my case "Netscape"
```

" slug: "javascript-BOM-II" cat: "Website" subcat: "JavaScript" video: "" diff: 3 quiz: "" - id: 245 title: "\[JavaScript\] Events" post: "

The very last concept that needs to be explained now, is the one that is most important in creating a dynamic web page. *Why didn't you talk about it sooner then?!* Because it combines a lot of ingredients I had to introduce first. This makes it sound very complex, but it's really simple actually.

\> Events are specific things that happen within the web page

For example, hovering over an element is an event, as well as typing something in an input text field or clicking a button.

## Event Listeners

In order to know when an event happens, we need an element to *listen* for it. By adding a so-called **event listener** to elements, they are notified when an event happens, and can act accordingly\-\--which is executing a certain function.

The syntax is

`addEventListener(event, function, capturing)`{.longsyntax}

When *event* occurs, *function* is called. The third parameter will be explained shortly. These *events* are fixed names, like `"click"` or
`"hover"`, you can look up in a reference table. To remove this specific event listener, use:

`removeEventListener(event, function)`{.longsyntax}

``` {data-lang="javascript"} function performOnClick() {
    console.log("Clicked it!");
}


var x = document.getElementById('main'); x.addEventListener("click",performOnClick); x.addEventListener("click",anotherFunction); x.removeEventListener("click",anotherFunction);
//Now every time x is clicked, "Clicked it!" will be logged
```

You can add as many event listeners as you want to the same element.

## Event Functions

There's nothing really special about the functions that are called when an event happens, except for the fact that they automatically receive one argument: the **event** itself. The `this` keyword within the function refers to the element the event happened on. Using these two together, you know everything you need. For example, if you listen to the event that a user presses a key, it has a property `keyCode` that tells you exactly which key has been pressed.

``` {data-lang="javascript"} function performOnClick(e) {
    console.log("Pressed " + e.keyCode);
}

var x = document.getElementById('main'); x.addEventListener("keydown",performOnClick);
/*Every time the user presses a key while x is selected,  it will print "Pressed " + */
```

## Event Propagation

There are two ways JavaScript can deal with events happening on **nested elements**. Say we have a `` inside a ``

tag, and both listen for click events. If the user clicks on the `span` tag, which of the two click events should be executed first? There's two answers:

-   **Bubbling**: Events bubble up the hierarchy; the *span* is handled
    first, and then its parents.
-   **Capturing**: Events capture things down the hierarchy; the
    *paragraph* is handled first, then its children.

If you set the third parameter of an event listener to *false*, it will use bubbling, if you set it to *true*, it will use capturing.

## Alternative Syntax

If you don't like a lot of typing, there are shorter ways.

First of all, we can listen for events with **event attributes** integrated within the HTML. By simply adding `on` in front of an event name, with no space between, we can add it as an attribute to any element, which will listen for that particular event and execute the code you supply.

``` {data-lang="html"} Click this div to fire someFunc!
```

To add or remove event listeners this way, we can use JavaScript's ability to access element's properties:

``` {data-lang="javascript"} document.getElementById('main').onclick = function() { console.log("Clicked it!"); };
```

NOTE: The function you supply here has to be without parentheses! We don't care about the outcome of the function, but want a reference to the function, so we know what to execute when the event occurs.

## Common Events

There are *a lot* of events, and listing them all would do nobody any good, which is why I'll just show you the most common events.

  ------------- --------------------------------------------
  Event         Description
  `click`       User clicks on an element
  `mouseover`   User moves the mouse over an element
  `mouseout`    User moves the mouse away from an element
  `mousedown`   User is pressing a mouse button
  `mouseup`     User just released a mouse button
  `keydown`     User pushes a keyboard key
  `change`      An element has been changed
  `input`       User inputs something in form/ input field
  `load`        An element has finished loading
  `scroll`      The user scrolls an element
  `focus`       An (input) element receives focus
  ------------- --------------------------------------------

The `load` event is often used on the body tag to check when the page has finished loading. That's often necessary, because you can't perform operations on elements that haven't been loaded yet, so you want your script to start running only after everything is done loading.

" slug: "javascript-events" cat: "Website" subcat: "JavaScript" video: "" diff: 4 quiz: "" - id: 246 title: "\[JavaScript\] Regular Expressions" post: "

They have already been mentioned a few times in the chapters on Strings, but nowhere else. That's because they are specifically made for strings, and, even though their name seems scary, not that big of a deal.

\> Regular Expressions are search patterns to find strings within strings

When you know the exact string you're looking for, you can just use a simple string method. But, if you only know the general pattern of the string, you need to use a regular expression. For example, we could be searching a string for every number. The numbers are not the same, so we can't look for them specifically, but they all follow the same pattern; they are numbers!

## Syntax

The syntax is

`/pattern/modifiers`{.longsyntax}

Notice that this is not a string, and should not be put between quotes! The forward slash signals JavaScript that a regular expression is to come.

## Testing

The `test` method tests whether a certain regular expression gives a match (returns *true* or *false*), the `exec` method returns any match(es) or *null* if there was no match.

``` {data-lang="javascript"}
/hello/i.test("Hello world!"); //Returns true - it searches for hello, and the i tells it to be case-insensitive
/hello/.exec('Hello hello world!'); //Returns ["hello"], because it's the only match
```

## Modifiers

The modifiers change how it will look for the pattern.

  ---------- ----------------------------------------------------------------------------------
  Modifier   Description
  `i`        Perform case-insensitive matching
  `g`        Perform a global match\-\--find all matches instead of stopping at the first one
  `m`        Perform multiline matching
  ---------- ----------------------------------------------------------------------------------

``` {data-lang="javascript"}
"Hello world!".replace(/l/g, "z"); //Returns "Hezzo worzd!", because the g tells it tu replace every instance, not just the first one
```

## Pattern

Besides letters, there are three things you can put in a pattern:
**ranges**, **metacharacters** and **quantifiers**.

##### Range

These search for everything within a certain specified range:

+-----------------------------------+-----------------------------------+
| Pattern                           | Description                       |
+-----------------------------------+-----------------------------------+
| `[abcxyz]`                        | Find any of the characters        |
|                                   | between the brackets              |
+-----------------------------------+-----------------------------------+
| `[^abcxyz]`                       | Find any of the characters        |
|                                   |                                   |
|                                   | not between the brackets          |
+-----------------------------------+-----------------------------------+
| `[0-9]`                           | Find any of the digits between    |
|                                   | the brackets                      |
+-----------------------------------+-----------------------------------+
| `[^0-9]`                          | Find any of the digits *not*      |
|                                   | between the brackets              |
+-----------------------------------+-----------------------------------+
| `(x1 | … | xn)`                   | Find any of the alternatives      |
|                                   | provided, separated with `|`      |
+-----------------------------------+-----------------------------------+

``` {data-lang="javascript"}
/[0-5]/.test("I have 4 chickens"); //Returns true
```

##### Metacharacters

These search for one character of a certain kind:

  --------- ---------------------------------------------------------------
  Pattern   Description
  `.`       Find any single character (except newline or line terminator)
  `\w`     Find a word character (letters, digits and underscore)
  `\W`     Find a non-word character
  `\d`     Find a digit
  `\D`     Find a non-digit
  `\s`     Find a whitespace character
  `\S`     Find a non-whitespace character
  `\b`    Find a match at the beginning or end of a word
  `\B`    Find a match *not* at the beginning or end of a word
  --------- ---------------------------------------------------------------

``` {data-lang="javascript"}
/\s/.test("I have 4 chickens"); //Returns true
/\s\s/.test("I have 4 chickens"); //Returns false
```

##### Quantifiers

Quantifiers search strings based on how many times a certain character occurs:

  ---------- ------------------------------------------------------------------
  Pattern    Description
  `x+`       Matches any string that contains at least one *x*
  `x*`       Matches any string that contains zero or more occurrences of *x*
  `x?`       Matches any string that contains zero or one occurrence of *x*
  `x{n}`     Matches any string that contains a sequence of *n x's*
  `x{n-m}`   Matches any string that contains a sequence of *n* to *m x's*
  `x{n,}`    Matches any string that contains a sequence of at least *n x's*
  `x$`       Matches any string with *x* at the end
  `^x`       Matches any string with *x* at the start
  `?=x`      Matches any string that is followed by *x*
  `?!x`      Matches any string that is not followed by *x*
  ---------- ------------------------------------------------------------------

``` {data-lang="javascript"}
/z+/.test("I have 4 chickens"); //Returns false
```

## RegExp Methods

Within the *String Manipulation* chapter we've seen a few methods for searching and replacing strings that use Regular Expressions. Now that we know how these work, I can showcase their true power.

When using the `replace()` method, we can not only search for different/multiple strings at the same time using regular expressions, we can also replace these matches with different strings. For this, we use a slightly different syntax:

`somestring.replace(RegExp,          function($1, …, $n) { return replacementString });`{.longsyntax}

As you can see, we can call a function on every match that can do lots of calculations, and then return a custom string. The only problem here is: where do those parameters with dollar signs come from? Well, within a regular expression we can group certain parts using parentheses, and each of these sends their value as an argument to the function we provide. So, for example if we're looking for all strings ending in a number, and want to remove the number, we'd group everything besides the number, and simply return that argument as the replacement string. The variables don't *necessarily* need to start with dollar signs, but it's the notation used for regular expressions in all other languages as well, so I suggest you stick with it.

``` {data-lang="javascript"} var x = "I 11love 22you 33very 44VERY 55much"; x = x.replace(/(\d+)/g,""); //x is "I love you very VERY much"

x = x.replace(/(\w+)/g, function($1) { 
                            if($1=="VERY") { 
                                return ""; 
                            } else { 
                                return $1; 
                            } 
} ); //x is I love you very  much
```

" slug: "javascript-regular-expressions" cat: "Website" subcat:
"JavaScript" video: "" diff: 3 quiz: "" - id: 247 title:
"\[JavaScript\] Dates" post: "

Just like everything in JavaScript, Dates are objects with certain properties and methods we can use. The Date object can retrieve the current date, convert between different date notations, and do arithmetic with dates. The Date constructor, by default, works within the time zone your computer is in.

## Date Notation

Dates can be written as a string, or as a number.

As a string, it mostly follows the notation you're used to, and looks like this:

`Mon Dec 14 2015 14:30:16 GMT+0100`{.longsyntax}

As a number, it counts the amount of milliseconds passed since January
1, 1970, 00:00:00. This is called the **zero time**, and some other programming languages use it as well.

## Creating a Date

The `Date()` constructor can take four different parameter sets:

  --------------------------------------------------------------------- ----------------------------------------------
  Constructor                                                           Description
  `new Date()`                                                          Sets it to the current date
  `new Date(milliseconds)`                                              Sets it to zero time + *milliseconds*
  `new Date(dateString)`                                                Sets it to the date provided with the string
  `new Date(year, month, day, hours, minutes, seconds, milliseconds)`   Sets the date using all the parameters
  --------------------------------------------------------------------- ----------------------------------------------

``` {data-lang="javascript"} var x = new Date(5000); 
/*x is 5000 millisecond after zero time, in my case Thu Jan 01 1970 01:00:05 GMT+0100 (W. Europe Standard Time) */
```

NOTE: Months count from 0 to 11\-\--January is 0, December is 11.

NOTE 2: Once such a date object is created, it is fixed\-\--it doesn't change with time if you keep the website open.

## Getter Methods

If you want to access not the whole date, but only a part, use these methods on the Date object.

  --------------------- --------------------------------------------------
  Method                Description
  `getDate()`           Get the day as a number (1\-\--31)
  `getDay()`            Get the weekday as a number (0\-\--6)
  `getFullYear()`       Get the year in 4 digits (yyyy)
  `getHours()`          Get the hour (0\-\--23)
  `getMilliseconds()`   Get the milliseconds within a second (0\-\--999)
  `getMinutes()`        Get the minutes (0\-\--59)
  `getMonth()`          Get the month (0\-\--11)
  `getSeconds()`        Get the seconds (0\-\--59)
  `getTime()`           Get the milliseconds since zero time
  --------------------- --------------------------------------------------

``` {data-lang="javascript"} var x = new Date(); console.log(x.getDay()); //Prints the current day, as a number
```

NOTE: If you add **UTC** after *get*, the function returns your answer in Universal Time Zone form, otherwise known as Greenwich Mean Time.

## Setter Methods

The other way around works just as well\-\--setting a specific part of a Date.

  ------------------------ --------------------------------------------------
  Method                   Description
  `setDate(arg)`           Set the day as a number (1\-\--31)
  `setFullYear(arg)`       Set the year in 4 digits (yyyy)
  `setHours(arg)`          Set the hour (0\-\--23)
  `setMilliseconds(arg)`   Set the milliseconds within a second (0\-\--999)
  `setMinutes(arg)`        Set the minutes (0\-\--59)
  `setMonth(arg)`          Set the month (0\-\--11)
  `setSeconds(arg)`        Set the seconds (0\-\--59)
  `setTime(arg)`           Set the milliseconds since zero time
  ------------------------ --------------------------------------------------

``` {data-lang="javascript"} var x = new Date(); var y = x.setDay(0); //y is the current month, year and time, but with the day set to Sunday
```

## Converting

JavaScript automatically converts your Date to a string if you want to display it. If you, however, want to display it in UTC form you can use the `toUTCString()` method. If you only want the year, month and day, use the `toDateString()` method. If you want to convert a *string* date to its equivalent in milliseconds, use `Date.parse()`.

``` {data-lang="javascript"} var x = new Date(); console.log(Date.parse(x)); //Prints, at the moment, 1450436325000
```

## A Note on String Notation

Basically, any notation you like works for date strings. You can use numbers for months and days, but also names. You can separate year, day and month with a space, `/` or `-`. You can put them in any order you like. Really, everything works!

``` {data-lang="javascript"} var x = new Date("25 Mar 2015"); var y = new Date("25-March-2015"); //y is exactly the same as x 
```

NOTE: Names of months can be written in full (January) or abbreviated by taking the first three characters (Jan). Names of days are always abbreviated (Wednesday => Wed)

" slug: "javascript-dates" cat: "Website" subcat: "JavaScript" video: "" diff: 3 quiz: "" - id: 248 title: "\[JavaScript\] Best Practices" post: "

Throughout the course I've already given hints, tips and advice\-\--such as how to name your variables or keeping your variables as local as possible\-\--but there's still a lot of ways you can improve code readability and performance.

## Breaking Long Lines

For readability, it's often preferred to move parts of a statement to the next line if it becomes too long. Because JavaScript depends on semicolons to see when a line ends, you can just break the line at any spot you'd normally place a white space.

``` {data-lang="javascript"} var x =
    5 + 5;
```

If you have a very long string, however, you must use concatenation and break the line around the `+` symbol.

``` {data-lang="javascript"} var x = "I am a very long string that doesn't want to be put onto another line and therefore " +
    "I split myself with a plus operator!"
```

NOTE: Keyword statements, such as *return* or *break*, may **never** be split. But, those are the shortest statements on earth, so I don't see why you would ever want to do that.

## Fast Variables

It's recommended, for performance as well as code simplicity, to
**assign** a value at the same time you **declare** a variable. Otherwise, JavaScript would have to execute statements instead of one
(declaring and assigning), and there's a possibility that you accidentally use the variable before it has a value.

``` {data-lang="javascript"} var x = 10; //Is better than var x;

x = 10;
```

Also, try to avoid creating variables if you intend to use them only once. Instead of creating a new variable, you can often just input the value immediately wherever it is needed.

``` {data-lang="javascript"}
//WRONG var y = 5 + 5; var x = "Your score is " + y;

//RIGHT var x = "Your score is " + (5 + 5);
```

## Fast Loops

What usually has the biggest impact on performance, are loops, because they execute a set of statements *many times*. It's best to optimize loops as much as possible. This is true for the code block inside, but also for the loop statement itself. For example, the for loop has a condition it checks against every loop, and it's best to simplify it as much as possible.

``` {data-lang="javascript"}
//WRONG for(i=0;i

On Literals

Because everything's an object, you can create numbers and strings as objects as well. That's great, but never do it.

The literal values you've learned to use are clearer and faster.


var x = "Juan"; //Is better than var x = new String("Juan");
```

## Reduce DOM Calls

Every time JavaScript touches something from the DOM, the page refreshes itself to lay out the new elements or new style rules. It's therefore recommended to make as little calls as possible. For example, instead of inserting content line by line, combine it into one string and assign it with a single statement.

``` {data-lang="javascript"}
//WRONG document.getElementById('main').innerHTML = ''; document.getElementById('main').innerHTML += ''; document.getElementById('main').innerHTML += 'Some Text'; document.getElementById('main').innerHTML += ''; document.getElementById('main').innerHTML += '';

//RIGHT document.getElementById('main').innerHTML = 'Some Text';
```

## Set Defaults

Even though you did your best to ensure all values you use in your script exist, there's always something that can go wrong. If your code depends heavily on certain values, check, before using them, if they are set. If not, set them to a default value that will make everything work.

``` {data-lang="javascript"} function veryImportantFunc(a) {
    if(a === undefined || a >= someArray.length) {
        a = 0;
    }
    return someArray[a];
}

var x = veryImportantFunc(); //Doesn't crash, but returns the first element of the array
```

NOTE: This is true for everything, but especially true for functions. It's not mandatory to supply *all* arguments, which can lead to some of the parameters being `undefined`.

## Enforcing Best Practices

Normally, JavaScript executes everything in normal mode. By typing
`"use strict";` at the top of the document, you can enter strict mode, which means JavaScript doesn't allow all of your trickery and hacks\-\--instead, it will throw errors and stop executing when you do something even slightly bothersome. You can write good code without it, but turning it on will help you improve your coding style and best practices.

" slug: "javascript-best-practices" cat: "Website" subcat:
"JavaScript" video: "" diff: 4 quiz: "" - id: 249 title:
"\[JavaScript\] Conclusion: What now?" post: "

Now it is time for you to build great web apps! But, of course, it isn't that simple\-\--you'll need lots of practice, and some other languages. I haven't even discussed *everything* that JavaScript can do. I decided that some things were a bit too advanced, and the course was already very full, so I created an **Advanced JavaScript Course** to deal with everything I left out.

If you want to do anything with servers, which I think you do, I recommend you now continue with the **PHP Tutorial**. If you don't want to, that's okay, then I'll just wish you good luck on your developing journeys!

" slug: "javascript-conclusion" cat: "Website" subcat:
"JavaScript" video: "" diff: 4 quiz: "" - id: 250 title:
"Advanced JavaScript" post: "

The majority of the JavaScript language is quite simple, and can easily be understood with a few examples. All of these are discussed in the basic JavaScript course. There are, however, more advanced concepts that need some thought and clever insights to understand\-\--and those are exactly the ones I'll discuss in this (small) advanced course. Don't worry too much though, as I will also discuss simple, small leftover parts of the language that I wasn't able to place in the basic course.

## Table of Contents

1.  HTML5 APIs
2.  Advanced Operators
3.  Keywords & Arrow Functions
4.  Objects & Symbols
5.  Keyed Collections
6.  Iterators & Generators
7.  Promises
8.  AJAX

" slug: "advanced-javascript" cat: "Website" subcat: "Advanced Javascript" video: "" diff: 3 quiz: "" - id: 251 title:
"\[JavaScript\] HTML5 APIs" post: "

As part of the new HTML5 standard, 6 very useful APIs were added to JavaScript. These are somewhat specific, as they were invented for a few exact purposes, and therefore perfect if one of those purposes is your goal. With careful implementation though, you can build great things out of them!

## Geolocation

The `geolocation` property of the browser window `navigator` is used to retrieve the user's location. Since this is privacy related, the user has to approve. To get this location, we use the

`getCurrentPosition(success, failure)`{.longsyntax}

method. It takes the names of two functions, of which the first one is called when geolocation was successful, and the second when it wasn't. The success function automatically receives one argument, which is the
*position*, and the failure function receives the error.

``` {data-lang="javascript"} function suc(pos) {
    console.log("Your position is " + pos);
} function fail() {
    console.log("Everything Failed!");
} navigator.geolocation.getCurrentPosition(suc,fail);
```

Such a *position* is an object with the following properties:

  --------------------------- ---------------------------------------------------------------------
  Property                    Description
  `coords.latitude`           Latitude as a decimal number
  `coords.longitude`          Longitude as a decimal number
  `coords.accuracy`           Accuracy of the position (depends on accuracy of GPS within device)
  `coords.altitude`           Altitude in meters above the mean sea level
  `coords.altitudeAccuracy`   Accuracy of the altitude
  `coords.heading`            Orientation as degrees clockwise from North
  `coords.speed`              Speed in meters per second
  `timestamp`                 The date ( = time) of the response
  --------------------------- ---------------------------------------------------------------------

``` {data-lang="javascript"} function suc(pos) {
    console.log("Your altitude is " + pos.coords.altitude);
} function fail() {
    console.log("Everything Failed!");
} navigator.geolocation.getCurrentPosition(suc,fail);
```

Other methods available are `watchPosition(success, failure)` to keep updating the user's position as it moves, and `clearWatch()` to stop watching.

## Drag & Drop

The ability to drag and drop elements can be simulated, but with this API it's built right into JavaScript. First, you need to set the
`draggable=true` attribute on the element you want to drag, and add a
`dragstart` event. Then, you need to tell your dropping element to react to `drop` and `dragover` events.

All these events share a property, which is `dataTransfer`, and you can use `setData(name, data)` to set which data to transfer, and
`getData(name)` to retrieve it as you drop something.

``` {data-lang="javascript"} function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
```

``` {data-lang="html"}

```

NOTE: Because by default, elements can't just be dragged and dropped around, we need to use `preventDefault()` to prevent this default behaviour when we *do* want drag-n-drop abilities.

## Local Storage

Cookies provide a way to store very small bits of data. Local storage expands on this, and makes it much easier to save large amounts of data within the browser. This data is not tied to a certain URL, but rather to a certain name you give it.

To add an entry to the local storage, use

`localStorage.setItem(name, value)`{.longsyntax}

To retrieve one, use

`localStorage.getItem(name)`{.longsyntax}

These have no expiration date\-\--which means it remains saved until you decide to remove it. If you only want to save data for one session, use
`sessionStorage` instead. A session begins when a browser tab is opened, and ends when it is closed.

``` {data-lang="javascript"} localStorage.setItem("Username","Juan");
//Some time later... var x = localStorage.getItem("Username"); //x is Juan
```

## App Cache

App Cache allows us to *cache* a web app, which means saving an offline version, which means it can be accessed and used without internet connection. Not only does this allow users to work with it when there's no internet around, it also increases speed and reduces server load.

The parts you want the browser to cache are saved in a **cache manifest** file. Such a file can simply be created in your text editor, and required the extension `.appcache`.

Then, within the HTML tag, you need to set the `manifest` attribute to point to your file.

``` {data-lang="html"}
```

Manifest files contain three sections, which need to be named explicitly to tell the browser it's in that section now.

-   **CACHE MANIFEST**: Underneath it, specify the files you want to be
    cached after they are downloaded the first time
-   **NETWORK**: Underneath it, specify the files you never want to be
    cached.
-   **FALLBACK**: Underneath it, specify which file to serve instead of
    others if an internet connection cannot be established.

``` {data-lang="php"}
# Manifest of 18 December 2015 CACHE MANIFEST
/someFile.js

NETWORK
/neverCacheThis.html

NETWORK:
/someFolder/ /defaultPage.html
```

Once cached, the browser will load the offline version. To tell it to update, change the manifest file by adding a random new comment. Comments are made with the syntax `# comment`

NOTE: To select all files, use the familiar asterisk ( `*` )

NOTE 2: There are size limits, but they depend on the browser, which means you shouldn't go wild with app caches.

## Web Workers

Web workers are scripts running in the background, without influencing the rest of the page. This means that it doesn't halt execution of the main script, nor affect performance. Great!

To create a new web worker, use the constructor:

`new Worker("pathtofile.js")`{.longsyntax}

As soon as it's created, it executes the code within the file you referenced. Such an external file and the script it was created in communicate by means of *messages*.

Within the external file, you can use `postMessage(message)` to post a message. This message can be acted on by adding an event listener for the `message` event, which, as usual, takes the *event* as argument. Using the `data` property we can access the message that was sent by the web worker.

``` {data-lang="javascript"}
//Inside external web worker file function timedCount() {
    i++;
    postMessage(i);
}

var i = 0; setInterval(timedCount,1000);
```

``` {data-lang="javascript"}
//Main script var w = new Worker("externalFile.js"); w.onmessage = function(event){
    console.log(event.data); //Prints the current count to the console, every second
};
```

To terminate a web worker, simply call the `terminate()` method.

NOTE: Because Web Workers are essentially external scripts running, they can't access the `window`, `document` or `parent` object.

## Server-Sent Events

Server-Sent Events, or SSEs, are messages sent from a server. It's one way traffic, as the web page automatically receives updates from the server, but doesn't send anything back.

To create a new SSE, use

`new EventSource("pathtofile.php")`{.longsyntax}

You can use any server language you want, but this example will use the most common one, PHP. Just as with web workers, the communication works via *messages*, and JavaScript uses the `message` event to listen for them.

``` {data-lang="javascript"} var someSource = new EventSource("externalFile.php"); someSource.onmessage = function(event) {
   console.log(event.data);
};
```

Sending the messages, however, works a bit different. Within the PHP file, we need to specify what type of content is coming, and then echo our message with `data:` in front. Finally, the `flush()` command sends whatever's on the page at that moment back to the script.

``` {data-lang="php"}
```

NOTE: Additionally, the `open` event fires when a server connection has been opened, and the `error` event occurs when opening such connection failed.

" slug: "advanced-javascript-HTML5-APIs" cat: "Website" subcat:
"Advanced Javascript" video: "" diff: 4 quiz: "" - id: 252 title:
"\[JavaScript\] Advanced Operators" post: "

We've already seen the basic operators `+ - / * %`, which is often all that you need, but there are certain bitwise operators that can simplify your life. We'll also look at operators that work on only one value, not two.

## Bitwise Operators

To be able to use a bitwise operator, JavaScript converts your operands to 32-bit **integer** numbers, consisting of only **zeros** and
**ones**. Each bit in the first operand is paired with the corresponding bit in the second one, and the operator is applied. This means that the result is again a 32-bit number.

  ----------------------- ---------------------------------------------------- ---------------------------------------------------------------------------------------------------------
  Name                    [Symbol ]{.donthyphenate style="white-space:pre;"}   Description
  Bitwise AND             a `&` b                                              Returns one if corresponding bits are both ones
  Bitwise OR              a `|` b                                              Returns zero if corresponding bits are both zeros
  Bitwise XOR             a `^` b                                              Returns a zero if corresponding bits are the same, returns a one if they are different.
  Bitwise NOT             `~` a                                                Inverts the bits of its operand (zeros become ones, and vice versa)
  Left Shift              a `<<` b                                             Shifts *a* to the left with *b* bits, shifting in zeros from the right
  Right Shift             a `>>` b                                             Shifts *a* tot the right with *b* bits, discarding bits shifted off
  Zero-fill Right Shift   a `>>>` b                                            Shifts *a* to the right with *b* bits, discarding bits shifted off, and shifting in zeros from the left
  ----------------------- ---------------------------------------------------- ---------------------------------------------------------------------------------------------------------

``` {data-lang="javascript"} var x = 10;     //x is 00000000000000000000000000001010 var y = x << 2; //y is 00000000000000000000000000101000, or 40 var z = ~y;     //z is 11111111111111111111111111010111, or -41
```

NOTE: In JavaScript binary representation, if the left-most bit is set to one, it's a negative number.

If you can't immediately see any use for these, I suggest you look a bit into binary numbers. If you know how they work, you can often find ways to simplify your life by using these binary operators. For example,
`~~a` is the same as `Math.floor(a)`, but faster and less typing.

## Relational Operators

The `in` operator checks whether a certain *property* or *index* exists within an object or array. The syntax is

`if(propNameOrNumber in objectName) { statements }`{.longsyntax}

``` {data-lang="javascript"} var obj = {name:"Juan",color:"Red"}; if("age" in obj) {
    //This will not execute
}
```

The `instanceof` operator checks whether a specific object is of a certain object type. The syntax is

`if(objectName instanceof objectType) { statements } `{.longsyntax}

``` {data-lang="javascript"} if([1,2,3] instanceof Array) {
    console.log("Yes it is!"); //This one will execute
} else {
    console.log("Fail!");
}
```

## Spread Operator

The **spread operator** allows an expression with multiple values to be expanded wherever multiple arguments (function calls) or multiple elements (array literals) are expected. The syntax is `…expression`.

``` {data-lang="javascript"} var arrUno = [2,3,4]; var arrDuo = [1,...arrUno,5]; //arrDuo is [1,2,3,4,5]
```

" slug: "advanced-javascript-operators" cat: "Website" subcat:
"Advanced Javascript" video: "" diff: 5 quiz: "" - id: 253 title:
"\[JavaScript\] Keywords & Arrow Functions" post: "

The basic course already talked about nearly every keyword there is, but there are still four of them left. I also want to introduce a nifty little feature that actually has to do with typing as little keywords as possible.

## Keywords

The `debugger` keyword stops the execution of JavaScript\-\--so no code beyond that point will run\-\--and opens the browser's debugger (if available).

``` {data-lang="javascript"} console.log("Executed A"); debugger; console.log("Executed B"); //Won't run.
```

The `typeof` keyword is used to find the type of a certain value.

``` {data-lang="javascript"} console.log(typeof "Juan"); //Prints string (types are lowercase, and without quotes)
```

The `super` keyword is used to call functions on an object's *parent*. It is typically used with classes to call the parent constructor, or a specific method.

``` {data-lang="javascript"} super(arguments); //Calls the parent constructor super.functionOnParent(arguments);
```

The `delete` keyword deletes an object's property, an entire object, or an element from an array.

``` {data-lang="javascript"} var obj = {a:0, b:1, c:2}; delete obj.a; console.log(obj.a); //Prints undefined
```

NOTE: It can't delete values from a variable declared with `var`, or pre-defined properties such as `Math.PI`

## Arrow Functions

Very often, you write functions that you simply want to return a certain value, given a few parameters. You could do this with the regular function syntax, but writing that *function* keyword over and over can become a bit of a bore, and that's why a shorter expression has been invented: the **arrow function**.

The syntax is

`(param1, … paramn) => { returnStatements }`{.longsyntax}

If you have only a single parameter, you can ditch the parentheses. If you have no parameters, you can just leave that space empty. Likewise, if you have only a single statement, you don't have to use the braces.

``` {data-lang="javascript"}
//These are all the same var x = (a) => { 5*a }; var x = a => {5*a}; var x = a => 5*a;

console.log(x(15)); //Prints 5*15 = 75
```

If you want the arrow function to return an object, you have a problem, because objects are also created using braces. To solve this, parenthesize the statement(s).

``` {data-lang="javascript"} var x = (a,b,c) => ({ firstProp:a, secondProp:b, thirdProp:c });
```

" slug: "advanced-javascript-keywords-arrow-functions" cat:
"Website" subcat: "Advanced Javascript" video: "" diff: 4 quiz:
"" - id: 254 title: "\[JavaScript\] Objects & Symbols" post: "

We've already discussed objects in great detail, but not so long ago two new concepts were introduced which I would like to talk about.

## Immutable Objects

Sometimes, you want to prevent the user (or yourself) from editing an object once it has been created. You can, to some extent, do this with
**immutable objects**, which has two implementations:

-   **Frozen Objects:** You can't add/remove properties, nor change any
    existing properties, unless they are objects.
-   **Sealed Objects:** You can't add/remove properties, but you *can*
    edit existing properties

To freeze an object, use `Object.freeze(obj)`. You can check if an object is frozen with `Object.isFrozen(obj)`.

To seal an object, use `Object.seal(obj)`. You can check if an object is sealed with `Object.isSealed(obj)`.

``` {data-lang="javascript"} var obj = {a:0, b:1 }; Object.freeze(obj); obj.c = 2; console.log(obj); //Prints {a:0, b:1}
```

## Symbols

A special type of immutable data, is a **symbol**, which is actually its own data type and part of the *primitives*. Once you create a symbol, it is unique, even if you create a new one with the same description. Symbols in itself have no function and can't be altered after creation, but you can use them as a property for an object. Now, because symbols are unique, the *only way* to access that particular property is if you have a reference to the original symbol. You **can't** find the property by means of `hasOwnProperty()` or looping through the object. This, of course, is mainly useful for security reasons.

To create a symbol, use `Symbol("description")`. The description is optional.

``` {data-lang="javascript"} var obj = {}; var sym = Symbol("desc"); var sym2 = Symbol("desc"); obj[sym] = "Yes!"; console.log(obj[sym2]); //Prints undefined console.log(obj[sym]); //Prints "Yes!"
```

NOTE: Do *not* type the keyword `new` in front of a symbol declaration. Symbols are not Objects.

" slug: "javascript-objects-symbols" cat: "Website" subcat:
"Advanced Javascript" video: "" diff: 4 quiz: "" - id: 255 title:
"\[JavaScript\] Keyed Collections" post: "

Until now, Objects have been somewhat regarded as the biggest collections within JavaScript. With the latest version, however, the new keyed collections **Maps** and **Sets** have been introduced, along with their siblings **WeakMaps** and **WeakSets**

## Maps

Maps are used to *map* values to values. A map can, unlike objects, link any key to any value. They are created using the `new Map()` constructor.

``` {data-lang="javascript"} var someMap = new Map();
```

To set and get values, use the `set(key, value)` and `get(key)` methods. To completely delete a key, use the `delete(key)` method. To delete all keys at once, use `clear()`.

``` {data-lang="javascript"} var someMap = new Map(); someMap.set(true,15); console.log(someMap.get(true)); //Prints 15 someMap.clear(); console.log(someMap); //Prints Map {}, an empty map
```

If you want to check whether a map has a certain key, use the `has(key)` method. To retrieve the size of the map, use the `size` property.

``` {data-lang="javascript"} var someMap = new Map(); someMap.set("Juan","Cool Guy"); var x = someMap.has("Juan"); //x is true x = someMap.size; //x is 1
```

## WeakMaps

WeakMaps are the same as maps, but with two big differences. Firstly, it can only use Objects as the keys. Secondly, if there is no other reference left in the program to such Object, it is removed from memory, and thus also from the WeakMap.

``` {data-lang="javascript"} var map = new WeakMap();
```

## Sets

Sets, created with `new Set()`, are collections of values, much like arrays. What makes them different, is that they have two important properties from sets as defined in mathematics:

-   Every value may only occur **once**
-   All values are in no particular order

Because of this uniqueness, you can delete elements by *value* using the
`delete(value)` method. You can add values to the set with the
`add(value)` method. But, because the order isn't defined, you can't access one particular element\-\--you have to loop through them all, in insertion order, to access them. Nevertheless, just like *Maps*, it also has the `has(value)` and `clear()` methods, and the `size` property.

``` {data-lang="javascript"} var someSet = new Set(); someSet.add(1); someSet.add(1); console.log(someSet); //Prints Set {1}

//Or create a set from an array var someSet = new Set([1,4,5,6,4,5,1]); //someSet is Set {1,4,5,6}
```

## WeakSets

WeakSets are the same as sets, but with the same two big differences as between *Map* and *WeakMap*. If no other reference to an object within the set is present, the object is removed from the program. There is, therefore, *no* `size` property.

``` {data-lang="javascript"} var weakSet = new WeakSet();
```

## Iteration

You must iterate over *Maps* and *Sets* using a `for … of` loop. This happens in the order of insertion.

``` {data-lang="javascript"} var someSet = new Set([1,4,7,8]);

for(var value of someSet) {
    console.log(value);
}

/* Prints
    1
    4
    7
    8
*/
```

NOTE: The `forEach(callback, thisObject)` method, which you know from Arrays, is also available for both *Maps* and *Sets*.

On top of that, there are three methods that return a list of what's inside such a map or set.

-   The `keys()` method returns all *keys*. For sets, which only collect
    values, this is the same as the next method.
-   The `values()` method returns all *values*.
-   The `entries()` method returns all *key/value* pairs.

The lists they return are not Arrays\-\--actually, they are not of a type you've ever seen before. They return **iterators**, which is what next chapter is all about.

" slug: "advanced-javascript-keyed-collections" cat: "Website" subcat: "Advanced Javascript" video: "" diff: 4 quiz: "" - id: 256 title: "\[JavaScript\] Iterators & Generators" post: "

When something has a defined iteration behaviour, we call it
**iterable**. Nearly everything has a defined iterator method, and is therefore a built-in iterable\-\--the only exception are Objects. For example, when you use a `for … in` loop to iterate over an array, it iterates over all indices in order starting from zero, and ends after it has reached the last index. This may seem very trivial, but this process is also defined in an iterator function somewhere. And now, you'll learn how to define your own custom functions to iterate over iterables!

The iteration behaviour of an iterable is saved within the
`Symbol.iterator` property. We are going to use it to assign our own iteration behaviour.

## Iterators

An iterator is a type of *closure*, which means it's a function which returns another function. The outer function is run once, at the start of iteration, and is used for initializing variables you need. The inner function needs to be called `next`, and is run every time the iteration is finished with the previous item and wants to go the next one.

This *next function* should return an object with two properties:
`value` and `done`. The first property is the value we get from iterating, the second property tells us whether we're done iterating or not. This should return false on all items, except for the last one\-\--which should return true.

``` {data-lang="javascript"} var arr = [5,4,3,2,1,0];
/* This iterator mimics the default iteration behaviour of arrays It starts at index 0, and runs until it reaches the last index, returning the current index every time*/ arr[Symbol.iterator] = function() { 
    var index=-1;
    var that = this;

    return {
        next: function() { 
            index++;
            return { value: index, done: index>=that.length } 
        } 
    }
};

for(var index of arr) { console.log(arr[index]); }
```

## Generators

With these iterators we just learnt to create, we need to maintain the internal state ourselves; at any given moment, we need to know at what index we are, and whether we're done yet. If we don't want this, we can use a powerful variation on iterators called **generators**.

Normally, when we execute a function, it runs through all statements, and only continues executing the rest of the script once it's finished. With generators, we can *pause* a function. We can tell a function to stop at a given moment, and later tell it to continue until it stops again.

To create a generator function, use the `function*` keyword. It's nothing different from the functions you're used to, but the asterisk is there to tell JavaScript it's a generator function. To pause such a function, use the `yield` keyword inside of it. To tell a generator to continue, we use the `next()` method.

*Awesome, but what does it have to do with iterators?* Well, the *yield* statement can be followed by an expression. When you tell a generator to continue, it starts by resolving that expression and *returning* the value that comes out of it. Therefore, if we call `next()` on a generator function, it actually returns an object with two familiar properties: value and done.

The *value* property is set to whatever was after the yield keyword. The
*done* property is false, until the generator function reaches its end\-\--then it's set to true.

``` {data-lang="javascript"} function* generatorMaker() {
    yield 1;
    yield 2;
    yield 3;
}

var generator = generatorMaker();

console.log(gen.next().value); //Prints 1 console.log(gen.next().value); //Prints 2 console.log(gen.next().done); //Prints true
```

To keep a generator function running forever, a `while(true)` loop is usually employed.

``` {data-lang="javascript"} function* genMaker(){
  var index = 0;
  while(true) {
    index += 5;
    yield index;
  }
}

var gen = genMaker();

console.log(gen.next().value); //Prints 5
```

NOTE: **Never** use this outside of a generator function!

Until now I've talked about generators a being a one-way street; they send you values when you call the *next* function. But, in reality, you can send a value to the generator! This is done using the
`next(argument)` method. This argument is treated as the result of the last `yield` expression that paused the generator, which means you can save yield expressions within the generator, and do something with the values you receive.

``` {data-lang="javascript"}
//Generator to easily create a fibonacci sequence function* fibonacci(){
  var fn1 = 1;
  var fn2 = 1;
  while (true){  
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    var reset = yield current;
    if (reset){
        fn1 = 1;
        fn2 = 1;
    }
  }
}

var sequence = fibonacci(); console.log(sequence.next().value);     //Prints 1 console.log(sequence.next().value);     //Prints 1 console.log(sequence.next().value);     //Prints 2 console.log(sequence.next().value);     //Prints 3 console.log(sequence.next(true).value); //Prints 1 console.log(sequence.next().value);     //Prints 1 console.log(sequence.next().value);     //Prints 2 console.log(sequence.next().value);     //Prints 3
```

" slug: "advanced-javascript-iterators-generators" cat: "Website" subcat: "Advanced Javascript" video: "" diff: 5 quiz: "" - id: 257 title: "\[JavaScript\] Promises" post: "

One of the big issues within programming, is asynchronous code. Code is meant to be executed synchronously, one statement after each other, in a logical order. So, what do we do if we have to wait for something to finish? What if we have to wait for the server to respond before we can load a page?

In the old days, we'd use a long and complex chain of callbacks, which is often referred to as *callback hell*. We'd put functions inside functions inside functions, which all had to wait for some event to occur before they could execute another part. With **promises**, we can climb out of this hell!

A promise has four states:

-   **Pending:** The promise hasn't been fulfilled or rejected yet
-   **Fulfilled:** The action relating to the promise succeeded.
-   **Rejected:** The action relating to the promise failed.
-   **Settled:** The promise has been fulfilled or rejected

One very important thing to understand, is that once a promise is settled, it will never change. A promise can only be fulfilled once or rejected once, and that's where it ends.

Essentially, a promise is a reference or link to a certain action. Once that action has finished, it goes looking for the promise again itself, and communicates whether it succeeded or failed. The promise will act on that accordingly. The name, therefore, comes from the fact that the action you're executing promises you that it will tell you if it receives a value sooner or later.

The syntax for creating one is

`new Promise(function(resolve, reject) { statements } )`{.longsyntax}

Within the function body you can perform whatever action you want to do. If everything worked out fine, you can call `resolve(message)`. If not, call `reject(message)`.

``` {data-lang="javascript"} var promise = new Promise(
    function(resolve, reject) {
        //Do some things, possibly asynchronous

        if(x === undefined) {
            //Things went wrong
            reject("x was undefined!");
        } else {
            resolve("The value is " + x);           
        }

});
```

NOTE: If you're only looking at what to do when a promise is fulfilled, you can simply use `return` for your *message*.

## Reacting to Promises

Such a promise is great, but it is meaningless now, as we've only used a constructor. If we want to use it, we need to call the

`then(succesFunction, failureFunction)`{.longsyntax}

method on it. If the promise is resolved, it executes the first function, if it failed, the second one. The *messages* you wrote when you constructed your promise are supplied as the only parameter for these functions.

``` {data-lang="javascript"} promise.then(function(result) {
    console.log(result); //Will print "The value is " + x 
}, function(error) {
    console.log(error); //Will print "x was undefined!"
});
```

## Chaining Promises

Instead of simply resolving to a value, we can also resolve a promise to
*another promise*. With the `then()` method now available to us, we can simply **chain** these promises, which shows their real power.

``` {data-lang="javascript"} function someFunction(resolve, reject) {
    resolve(10);
}

var promise = new Promise(function(resolve, reject) {
  resolve(new Promise(someFunction));
});

promise.then(function(val) {
  return val;
}).then(function(val) {
  console.log(val); // 10
});
```

NOTE: You can also chain values, but that would completely destroy the whole purpose of promises, as there is no time delay.

If this syntax still seems convoluted to you, it's possible to use
`then()` only for successes, and `catch()` for failures.

``` {data-lang="javascript"} promise.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});
```

" slug: "advanced-javascript-promises" cat: "Website" subcat:
"Advanced Javascript" video: "" diff: 5 quiz: "" - id: 258 title:
"\[JavaScript\] AJAX" post: "

AJAX stands for Asynchronous Javascript and XML. The last part of this name is quite misleading\-\--you don't need to know anything about XML to make this work. This first part of the name, however, is right on point. Whereas last chapter talked about asynchronous JavaScript mostly within the script itself, AJAX is a way of sending and receiving data
*without reloading the page*.

Essentially, AJAX works via an object that can connect with the server to get a certain file, and has certain events you can listen for once it has established this connection (or failed to establish one).

To create an AJAX object, use

`new XMLHttpRequest()`{.longsyntax}

## Opening a Connection

To open a connection, use the `open(method, URL, async)` method.

-   **method**: Specifies the type of request; GET or POST. More on that
    later.
-   **URL**: The URL we want to establish a link with
-   **async**: Whether we want this connection to be asynchronous or
    not. Of course we do, so just always set this to *true* (or omit
    it).

``` {data-lang="javascript"} var con = new XMLHttpRequest(); con.open("GET","someFile.php",true);
```

## Sending Requests

Once a connection has been opened, you still need to send a request if you want to get a response. How you should send this request, depends on the method you use.

The **GET** method is faster than POST, and can be used in most cases. To send a request, simply use `send()`. If you want to send arguments along with the request, add those to your URL.

``` {data-lang="javascript"} var con = new XMLHttpRequest();
//No parameters con.open("GET","someFile.php",true);
//With parameters con.open("GET","someFile.php?a=2&b=4",true);

//This stays the same in both cases con.send();
```

The **POST** method is better if you're sending large amounts of characters, or user input\-\--POST has no size limitations and is more secure. To send a request, use `send(string)`. In this case, the
*string* contains the arguments you want to send along. If you want to send special data, however, like an HTML form, you need to specify what type of data is coming with the request (before you send it), which is done with a header

``` {data-lang="javascript"} var con = new XMLHttpRequest(); con.open("POST", "someFile.php", true); con.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

con.send("a=2&b=4");
```

## Receiving Feedback

As the AJAX object is trying to get your data, it goes through several stages, which we call **readyStates**. These stages are:

  ------------ ----------------------------------------
  Readystate   Description
  `0`          Request not initialized
  `1`          Server connection established
  `2`          Request received
  `3`          Processing request
  `4`          Request finished and response is ready
  ------------ ----------------------------------------

To check when such a *readyState* changes, use the `readystatechange` event.

Once the request has reached stage 4, it either succeeded or failed. This is saved in the `status` property, which returns `200` if everything is fine, and `404` if the URL could not be found.

``` {data-lang="javascript"} var con = new XMLHttpRequest();
 con.onreadystatechange = function() {
    if (con.readyState == 4 && con.status == 200) {
     //Do stuff, cause connection was successful!
    }
  };
   con.open("GET", "someFile.php", true); con.send();
```

## Receiving Data

And now, the big moment, we can do something with the received data! The
`responseText` property holds everything that was on the page we requested. Even if the request didn't turn out fine, we can hope for a sensible (error) message.

``` {data-lang="javascript"} var con = new XMLHttpRequest();
 con.onreadystatechange = function() {
    if (con.readyState == 4 && con.status == 200) {
        console.log(con.responseText); //Prints whatever was sent back by the server
    }
  };
```

NOTE: Optionally, we can send back XML data and receive (and parse) it with the `responseXML` property\-\--hence the *XML* in AJAX.

## Now with Promises

To demonstrate the power of promises again, I just want to show you how the whole AJAX handler code could also be written using a promise.

``` {data-lang="javascript"} function getURL(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

//Accessing someFile.php asynchronously... getURL('someFile.php').then(function(response) {
  console.log("Success!", response);
}, function(error) {
  console.error("Failed!", error);
});
```

" slug: "advanced-javascript-AJAX" cat: "Website" subcat:
"Advanced Javascript" video: "" diff: 5 quiz: ""  


