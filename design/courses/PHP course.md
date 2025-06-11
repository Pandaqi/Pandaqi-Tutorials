
" slug: "graphic-design-conclusion" cat: "Design" subcat: "Graphic Design" video: "" diff: 4 quiz: "" - id: 420 title: "The Complete PHP Guide" post: "

PHP never expected to become this big, but nowadays the language is present in nearly every top 10 list of programming languages. Anybody who wants to create dynamic websites (or *web apps*) will at some point require some of PHP's magic. After you've learned the ins and outs of HTML and CSS, and perhaps JavaScript, it's usually time to learn about PHP. Fortunately, the language is easy to learn.

Whereas HTML stood for HyperText Markup Language, **PHP** is a recursive acronym for *PHP: Hypertext Preprocessor*. As the name suggests, it is executed before the HTML is loaded\-\--it pre-processes the HTML.

This means that it's executed on the *server*, and not within the user's browser. Such a language is called a *server-side language*, and has the obvious advantage that it can interact with data on the server. The typical use case for PHP is, therefore, to load data from a server, or upload data to it. This data can be blog posts, files, user login information, comments\-\--anything you want.

![](media/PHPOverview.png)

However simple or complex, however large or small, PHP will probably be able to do the job for you. This guide will teach you the core fundamentals of the language in a way that's as general as possible, so that you can apply it to anything, not just specific examples. Nevertheless, PHP can't do it all on its own, and you'll probably need to learn about *SQL* as well at some point. This is not a bad thing; SQL is another language that is crucial to the world wide web, and it helps a lot if you can use it.

Ultimately, when you've become all excited and want to know more, you can keep reading and move towards the ***Advanced PHP Tutorial***. It's up to you how far you take it. (But I hope you take it very far; the more you know, the better and more secure your code.) Either way, have fun!

## Table of Contents

1.  Installation
2.  Syntax
3.  A Powerful Echo
4.  Data Types
5.  Variables I
6.  Variables II
7.  Numbers & Operators
8.  Strings I
9.  Strings II
10. Conditionals
11. Control Flow I
12. Arrays I
13. Arrays II
14. Loops
15. Control Flow II
16. Functions
17. Scope
18. Objects I
19. Objects II
20. Superglobals
21. Forms & Dynamic Pages
22. Files I
23. Files II
24. Cookies & Sessions
25. Databases (MySQL)
26. Error Handling & Debugging
27. Best Practices
28. Conclusion: what now?

" slug: "complete-php-guide" cat: "Website" subcat: "PHP" video:
"" diff: 1 quiz: "" - id: 421 title: "\[PHP\] Installation" post:
"

Computers don't automatically come with code that runs PHP, as computers aren't servers. Therefore, to test your PHP, you can:

-   Use a free or paid hosting plan that has PHP installed, where you
    host your website on their servers. Almost all hosting has PHP
    pre-installed, so no need for you to worry about it.
-   Turn your own computer into a small server-like environment. This
    can be done by downloading and installing a small piece of software,
    or by doing a manual installation yourself. Fortunately, PHP is
    completely free.

I myself, for example, use both. I host this website on a server so that you can all access it, but when I write and test new code I use software to host the website on my own computer. Not only is this kind of local testing quicker, it's also cheaper and reduces the load on my website's server.

If you're just a novice at PHP, doing a manual installation is unnecessarily complicated, which is why I recommend using software. (On the other hand, if you're already a PHP wizard, manual installation have some advantages for you. For information about that, visit the official [PHP Install Manual](http://php.net/manual/en/install.php)

## Using Software

The most popular software, which is also available on all three platforms (Windows, Mac, Linux), is
[XAMPP](https://www.apachefriends.org/index.html)

Once you've downloaded it, install it. There's no harm in installing all components, but you only really need *Apache*, *PHP* and *MySQL* for this course. The default path (`C:\xampp`) is fine.

## How do I start/stop the Server?

Once installed, you can find the software like any other on your system, and fire it up. The interface might be intimidating, but to **start the server**, simply click *Start* on the Apache module. Similarly, to
**stop the server**, click *Stop*.

## Where do I place my files?

By default, the software will create the folder `C:\xampp\htdocs`. This is where you should place all the files from your website, or at least all the files you want to test. You can simply remember it by the fact that *htdocs* stands for *html documents*.

## How do I view my files?

Just like every other website, you can visit the website on your own server by typing a URL in the browser bar. Because it's a local server that nobody else has access to, you can do so by typing `localhost` or
`127.0.0.1`

Visit it, and you should see a welcome message from XAMPP, which means it was successfully installed. If you see an error, installation was unsuccessful, or the service is not running.

## Let's do a Quick Test

To test if PHP is actually working, let's quickly create our first PHP file. PHP files are essentially no different from HTML, CSS or JavaScript files\-\--you can create and edit them with any text editor of your choice. The only difference is that PHP files\-\--not surprisingly\-\--carry the extension `.php`.

So, fire up your favourite text editor, or the default editor on your operating system (which is probably *Notepad* for Windows, and *Text Editor* for Mac). Create a new file, and type

``` {data-lang="php"}
```

What does this mean? It simply starts a PHP block, and prints the phrase
*Hello World!* to the page. Save the file as `test.php`, and to check if everything works as expected, access it by visiting
`localhost/test.php`.

If it does, congratulations! You've written your first bit of PHP, and you even have a local test environment working perfectly.

If it doesn't, there's a good chance you accidentally unchecked PHP on installation. If you made any type error, XAMPP will automatically throw an error message to let you know what went wrong so you can fix it. Or, you might have forgotten to place the file in the right directory.

" slug: "php-installation" cat: "Website" subcat: "PHP" video:
"" diff: 1 quiz: "" - id: 422 title: "\[PHP\] Syntax" post: "

Like any proper programming language, PHP has a fundamental syntax that is at the basis of *everything*. This chapter will tell you all about it.

## Integration with HTML

As you saw in last chapter, PHP files are simple text files that don't need to be compiled. You can simply write some code within the file, and load it up in the browser to see how it works. This is great, because it allows us to very quickly make changes and update our website. But, websites are always created out of HTML, CSS and JavaScript\-\--what role does PHP play?

Well, it pre-processes the file, which means it inserts HTML into the file *before* it is being sent back to the browser, and rendered. This means that you could let PHP perform something like `echo "`

# A Heading!

", and suddenly you have an extra heading on the page.

Even better: it doesn't stop there. You can let PHP decide whether a certain part of an HTML page is displayed, you can use it to add or remove CSS rules from a page based on certain conditions, you can use it to dynamically add JavaScript code\-\--anything is possible!

## The PHP Block

For the browser to know when we're typing PHP code, and when we're using regular HTML, we need a clear and concise way to tell the browser when a block of PHP code starts and ends. For this, we have the PHP opening and closing tag:

`any php code here ?>`{.longsyntax}

This means that a file with the extension `.php`, is simply a regular
**.html** file but with the added possibility of using PHP blocks. This also means that we can do crazy things with the page using only PHP, such as remove certain parts entirely, as the next example will illustrate.

``` {data-lang="php"} This is a nice paragraph!

```

## Statements & Blocks

Anything you write, will either be a **statement** or a **block**.

-   A *statement* is a line of code that is to be carried out by the
    server. These include things such as printing a certain line, or
    performing some math.
-   A *block* is a set of statements with lines of code that open and
    close the block. These include things such as blocks that should be
    repeated several times, or blocks that should only be executed if a
    certain condition is true.

A statement always uses the following general syntax. Note the semicolon that closes off the statement.

`somestatement;`{.longsyntax}

A block always uses this general syntax.

`someblockopening {   lots of statements }`{.longsyntax}

``` {data-lang="php"}
//BLOCK: If a user is logged in if($userIsLoggedIn) {
    //STATEMENT: Display a welcome message
    echo "Welcome, " . $username;
}
```

NOTE: You *could* leave out the last closing tag or semicolon of a PHP code block, because it will automatically be interpreted as the end of the last statement. But, it's bad practice, and I advise against it.

## Comments

Just like HTML (and CSS, and JavaScript), PHP has the possibility of adding comments within the file. These comments are not executed or parsed by the server, and are merely there for you to remind yourself why you did something or how some part of your code works. As always, the syntax for comments is the only thing in the language that is distinct from the statement or block syntax.

To create comments that span a *single line*, use one of the following two syntaxes

`// this is a comment # this is a comment`{.longsyntax}

To create comments that span *multiple lines*, use

`/* this    is    a    comment */`{.longsyntax}

``` {data-lang="php"}
/* LONG EXPLANATION:
 * The following code does blabla 
 * and some more blabla
 * and finally returns blablabla
 */

//This is a quick remark, and therefore a single-line comment
```

NOTE: PHP discards HTML comments. So, if you created an HTML comment with the regular `<-- -->` syntax, and placed a PHP block inside it, it would still execute.

" slug: "php-syntax" cat: "Website" subcat: "PHP" video: "" diff: 1 quiz: "" - id: 423 title: "\[PHP\] A Powerful Echo" post: "

Because PHP runs on a server, you can't easily check what it's doing from the browser or developer tools. Therefore, when working with PHP, there will be lots of times when your code could execute perfectly fine, but you wouldn't know\-\--and, times when your code is completely wrong, but it doesn't throw any errors.

To see what's going on, and to directly insert the results of your PHP code into an HTML page, we have two methods: **echo** and **print**.

## Echo

You've already seen the syntax for echo statements, which is simply

`echo expression, …, expression;`{.longsyntax}

As you can see, you can choose to echo only one thing, or a multitude of things (as long as they are separated by commas). These expressions can be anything\-\--that's what the rest of this course is all about.

If you're only echo-ing one expression, you can use the alternative
*parenthesis syntax*:

`echo(expression);`{.longsyntax}

``` {data-lang="php"} echo "This is a paragraph that has been dynamically inserted by PHP. How great!";
```

## Print

The print statement does the same as echo statements, but with these differences:

-   It only accepts a single expression.
-   It's marginally slower than **echo**.
-   It returns the value **1**.

Again, it has two equivalent syntaxes:

`print(expression); print expression;`{.longsyntax}

The fact that this function returns value one, simply means that the result of using it is an expression itself (unlike echo statements). This means that you can chain multiple `print` statements, or use them within any complex structure, whilst the `echo` keyword can only be at the start of a line.

``` {data-lang="php"} print 5*5*5;  //Displays 5*5*5 = 125 on the page print(5*5*5); //Does exactly the same.
```

## Why Two Syntaxes?

Because both of these methods are fundamental and crucial to the PHP language. Without them, you wouldn't be able to do anything (and that's no exaggeration). Almost all other functions in PHP, no matter how many parameters they accept, require the parentheses.

To differentiate between those different kinds of functions, we call fundamental functions with those two syntaxes **language constructs**. Language constructs are more than functions; they are the building blocks of the language.

## Functions? Parameters? What?

As you can see, *functions* play a large role in any programming language. Functions are nothing more than blocks (consisting of lots of statements) with a name, so that you can call it from anywhere within the program.

Nearly every statement you will write, will be a call to some function. Lots of these functions are built-in, and allow you to do crucial things such as get the length of a piece of text, connect to a database, or perform complex math operations. (You can also create functions yourself.)

But, those functions usually require some values to work\-\--values which you must provide. For example, to get the length of a piece of text, we need to know which piece of text we want the function to work on. The values a function accepts are called *parameters*. The actual values you give it in a certain instance are called *arguments*. When a function gives you back a value, such as the length of a piece of text, we say that it *returns* that value.

``` {data-lang="php"} echo strlen("PANDA");
/* The word above, strlen(), is a function that determines the length of a piece of text
 * It accepts one parameter, which is the piece of text we want to examine
 * In this case, we give it the argument "PANDA"
 * Then, it returns the length of the word "PANDA", which is 5.
 * This value, 5, is displayed in the browser by echo
*/
```

Don't worry, functions and the like will be discussed in great detail later in the course, I just wanted to get some terminology out of the way.

" slug: "php-a-powerful-echo" cat: "Website" subcat: "PHP" video:
"" diff: 2 quiz: "" - id: 424 title: "\[PHP\] Data Types" post: "

When programming, everything you do is simply *doing stuff with data*. This might sound scary, but hear me out. The purpose of any program is to present information to the user, or upload information from the user to the server. You could, for example, calculate the costs of buying everything inside a shopping cart, or dynamically create an HTML navigation from pieces of data, or load all the text from a blog post.

Therefore, everything your script will work with has to be data of some kind, which is why PHP has several basic *data types*. The eight types I will discuss here are called **primitives**.

Within the primitives category, there's another distinction made between *scalar types*, *compound types* and *special types*.

## Scalar Types

Scalar types contain data with only one value; they are the fundamental building blocks of the programming language. There's nothing smaller than this.

### Integer

An integer is a whole number (positive or negative). It can be entered just like you'd expect: by typing the actual number. Alternatively, you can enter the number in *hexadecimal*, *octal*, or *binary* format.

``` {data-lang="php"}
1234; // Decimal number
-123; // Negative number
0123; // Octal number 
0x1A; // Hexadecimal number 
0b11111111; // Binary number 
```

Of course, integers can't get infinitely large, so there's a maximum value. This is platform-dependant, but usually around two billion. Once you go beyond that, PHP will convert the value to a float.

### Float

A floating point number (or *double*) is any real number, including integers, but also fractions and anything else you can imagine. There are two ways to write them; the *regular notation* (with the decimal point), and *scientific notation*.

``` {data-lang="php"}
1.234; //Regular floating point
1.2e3; //Scientific notation for 1200
7E-2;  //Scientific notation for 0.07 
```

Floating numbers have a maximum as well, which lies around `1.8e308`
(which is a very, very big number).

Also keep in mind, that computers work with a base 2 system, which means that numbers that look nice in our base 10 system (such as **0.1** or
**0.55**), will have very tiny rounding errors when you start working with them. Usually, this won't be a problem, as long as you never exactly compare two floating numbers.

### Boolean

A Boolean is the simplest type of them all. It has only two values:
`true` or `false`. Both are case-insensitive. You can use it like an on-off switch; if a certain condition is true, execute this piece of code, if it's false instead, execute this other piece.

``` {data-lang="php"} true false
```

### String

A string is a sequence of characters, usually used for pieces of text. Strings can get as large as more than two billion characters. There are four ways to create a string: *single quotes*, *double quotes*,
*heredoc* and *nowdoc*.

#### Single Quotes vs Double Quotes

Placing a piece of text between single (`' '`) or double (`" "`) quotes turns it into a string. Don't mix them up, though, or you will meet many errors.

``` {data-lang="php"}
'This is a cool string';
"This is a cool string as well";

"This is a cool string';
//ERROR, single quotes can't close off double quotes
```

#### Heredoc vs Nowdoc

For very long pieces of text, spanning multiple lines, the other two syntaxes come in handy. Instead of quotes, you can choose the delimiters yourself!

The heredoc syntax looks like this

`<< `{.longsyntax}

The nowdoc syntax like this

`<<<'DELIMITER' some long string DELIMITER;`{.longsyntax}

The difference is that the second syntax does *not* parse the string. If you were to add variables or expressions within the string (which you'll learn about soon), they would not be parsed, but simply displayed as text instead.

``` {data-lang="php"}
$panda = 'be';

<<

NOTE: It's very important that the heredoc and nowdoc closing delimiter does not have any other characters on its line---not even spaces or indentation.

Compound Types

Compound types are essentially a collection of scalar types. I'll explain these more in-depth in their respective chapters.

Array

An array is a list of values (of different data types). You could, for example, store all the pages a user has visited as strings in an array.


$grocery_list = ["Bread", "Milk", "Sugar", "Honey", "Cornflakes", "Bicycle", "iPad", "Ferrari"];
```

### Object

An object is an expansion on the array. Instead of only containing values, it can also have functions you can execute. Whereas an array is just a list, an object is used for things that actually represent objects. For example, you could create a single new object for every item a user has in his/her shopping cart, and let that object hold all the information about that item.

``` {data-lang="php"}
//This is just to give you a general idea, you don't need to understand it now
$new_user = new User(); //Create a new user object
$new_user->log_in();    //Call a function on the object
```

## Special Types

Special types are, well, special exceptions.

### NULL

Sometimes you're going to work with data that doesn't have a determined data type (yet), or data that has been removed. For these cases, we say the data is of type null. The only value for this data type, is `null`. (Which is case-insensitive, just as with Booleans.)

``` {data-lang="php"} null;
```

### Resource

A resource is a reference to an external resource. They can only be created by a small list of special functions. Because there's a *huge* amount of different resources you could access and work with in PHP, I won't mention them all in this course. I will discuss only the most important ones: functions that access a database to get some data from it, or upload data to it.

``` {data-lang="php"}
//For example, the following code connects to a database and returns a resource mysqli_connect("localhost", "my_user", "my_password", "my_db");
```

" slug: "php-data-types" cat: "Website" subcat: "PHP" video: "" diff: 2 quiz: "" - id: 425 title: "\[PHP\] Variables I" post: "

Alright, so we've seen all the types of data PHP can handle. But, computers can't just have data flying around\-\--it needs to be
(temporarily) saved somewhere, under a certain name. More importantly, by saving data under a name, we can find it and use it at other places in the code, together with other data. For this, we have *variables*.

\> A variable is a container for storing data

For example, we could perform a complex calculation, and then put the result inside a variable named "result". And then, at some other point in the program, we could use this result again (in another calculation or statement) by calling it by its name. Variables are *super-duper useful*, and you'll be working with them a lot, which is why I will devote two chapters to them.

## Defining Variables

In PHP, variables aren't necessarily created. A variable exists from the moment you assign a value to it. To define a variable, we use the
*dollar syntax* (**\$**) and *assignment operator* (**=**):

`$some_variable_name = value;`{.longsyntax}

This means that, unlike some other programming languages, a variable's data type is not fixed. Any time you want, you can assign a new value to a variable (using the same syntax), even if that value is of completely different data type. Yes, PHP is that flexible.

## Using Variables

To use a variable\-\--which means accessing its value\-\--simply call it by its name. And, don't forget to put the dollar sign in front.

`$some_variable_name`{.longsyntax}

``` {data-lang="php"}
$save_result = 5*5*5; echo $save_result; //Prints 125 in the browser

$username = "Juan"; echo "Welcome, " . $username; //Prints: Welcome, Juan
```

NOTE: If you haven't assigned a value to the variable you're calling, the value will be `null`. You will also probably get a notice or warning by PHP that the variable is undefined.

## Naming Variables

Now, I might have given the impression that you could name variables any way you like, but that's not true. Some rules have been established to make sure PHP reads the code correctly as a variable (and not as a number, or string, or anything else). A variable name

-   Must start with a letter (lowercase or uppercase) or underscore (
    **\_** )
-   May never start with a number
-   Can only contain alpha-numeric characters (that is, letters and
    figures) and underscores

It's good practice to use descriptive names for your variables. It's better to use long variable names that describe exactly what data they hold, instead of short and indecipherable names.

Additionally, PHP variables are usually written in **snake_case**. This means that you only use lowercase characters, and that you separate words by underscores. *Why?* Because all of PHP's built-in functionality also follows this syntax. (For example, the function
`is_string(par)` checks if its parameter has data type string.)

``` {data-lang="php"}
//This will give an error
$3tips = "1) Never buy a snake. 2) Don't burn down your home 3) Don't go to bed without your teddy bear";

//This is fine
$tips = "...";
$_3tips = "...";
$tips_for_you = "...";
```

## References

In case you hadn't figured it out already, we can assign any value to a variable, so we can also assign the value from another variable! For example, if you create variable `$A` that holds a string, you could say
`$B = $A`, and now variable `$B` has the exact same string as value.

When you do this, PHP copies the value from one variable to another. With large values, though, this can add a huge amount of extra load for the server. This can be solved with **references**.

A reference simply points two variables at each other. They take on the same value, and if one of them changes, the other changes with it. A reference is created by putting an *ampersand* ( `&` ) in front of the variable value:

`$somevar = &$othervar;`{.longsyntax}

``` {data-lang="php"}
$some_value = true;
$other_value = &$some_value;

$other_value = false;
//Now both $some_value and $other_value are false.
```

## Dynamic Variables

PHP has even more variable magic in store for us. Not only can we change the value of a variable, we can also change the variable name (and keep the value)! Variables like this are, quite logically, called **variable variables**.

*How does PHP know we want it to use the other variable's value, instead of the other variable's name?* Well, we can force PHP to evaluate an expression by placing it between curly braces ( `{ }` ). In doing so, the syntax for creating variable variables becomes

`${$someothervar}= value;`{.longsyntax}

This isn't restricted to other variables; we could place whole computations between those curly braces to be used as the variable name. If you know you're only going to reference a variable, however, you can use the following shorthand syntax:

`$$someothervar = value;`{.longsyntax}

This isn't even restricted to two dollar signs; you can place as many dollar signs after each other as you want, each referencing another variable (as illustrated in the example). Endless possibilities!

``` {data-lang="php"}
$a = "panda";
$panda = "awesome";
$awesome = "LEGO!";

echo $$$a; //Prints LEGO!

$panda1 = "awesome";
$panda2 = "awesomer";
$panda3 = "awesomest";

echo ${"panda" . (6/2)}; //Prints awesomest 
```

## Case Sensitivity

When I discussed the data types, I mentioned for several types that case doesn't matter. `TRUE`, `True` and `true` are all the same thing. This is true as well for all other built-in PHP functionality (although it's highly recommended to stick to the *snake case*).

This is **not** true, however, for variables. If you declare a variable, you can only reference it by typing the exact same name. Thus, for example, `$somevar` and `$someVar` are not the same. Lots of errors are the result of people carelessly changing the case of their variables\-\--don't be that person, stick to the same syntax!

NOTE: Any other user-defined things you'll learn about later, such as classes, are also case sensitive.

## Deleting Variables

Last but not least, how would you go about deleting a variable you don't need anymore? There are two ways, but you should use the first one:

-   Set a variable to value `null`
-   Call `unset($variable)`

The second doesn't just set a variable to null again, it actually completely removes the variable from the program. Usually, this is a much heavier process to execute, and you don't really need it.

Once you use a variable that is not set, however, PHP will throw all sorts of errors and hell breaks loose. Therefore, in some cases where you're unsure, it's useful to check whether a variable is set or not. This is done with

`isset($var);`{.longsyntax}

NOTE: When a variable is set to null, it's also set. A variable is only not set if it has no defined value.

``` {data-lang="php"}
//If the username is set, which it is in this case, welcome the user
$username = "Ginty";

if(isset($username)) {
    echo "Welcome, " . $username;
}

//Now we remove the variable, and the code will NOT welcome the user a second time unset($username);

if(isset($username)) {
    echo "Welcome, " . $username;
}
```

" slug: "php-variables-I" cat: "Website" subcat: "PHP" video:
"" diff: 2 quiz: "" - id: 426 title: "\[PHP\] Variables II" post:
"

Now that you know how to create any variable you can dream of, and assign it any value you can dream of, there's one huge problem left:
*incompatible data types*. It's nice that we have all these different data types, but because they are different, we can't easily mix them together. How can you add an integer to a string? How can you divide a Boolean by a float? How can you compare an array of different values with another array of different values?

This chapter will talk about how PHP automatically converts data types to make them compatible, and what you can do to change or aid this process.

## Type Juggling

PHP is a nice guy. When you give him several data of different type, he will try to convert them so they match together, and he won't even tell you the bother he went through. The result is that you can mindlessly mash together variables of differing data type without errors, but the results can be unexpected. This is called *type juggling*.

If you put together two types, they will both be converted to the data type with highest importance. The order of type importance is:

\> *Null => Boolean => String => Integer => Float*

So, for example,

-   Executing `0.5 + 1` will result in a float of value `1.5`.
-   Executing `3 + "7 dwarfs"` will result in an integer with value
    `10`.
-   The integer value of `null`, `false` and `""` (empty string) is `0`.
-   The integer value of `true` is `1`.

*What about arrays, objects and resources?* Well, because there's many different ways to combine two of them, there's no predefined behaviour. How do you add an array to an array? Add all values separately, or simply append the other array to the back? Putting together values of these data types will result in an error, unfortunately.

NOTE: Either way, remember that type juggling only converts a variable to a certain data type *in that specific expression*. The data type of the variable itself will remain untouched.

``` {data-lang="php"}
$variable_uno = 15;
$variable_duo = true; 

//Integer has highest importance, so true is converted to 1
//And the following statement will print 16 echo $variable_uno + $variable_duo;
```

## Type Casting

There's two problems with type juggling: we have no control over how it converts the values, and the conversion isn't permanent. Luckily, we can force PHP to convert a variable to a certain type with *type casting*. Two alternative syntaxes exist:

`$variable = (type) value; settype($variable, "type");`{.longsyntax}

They do exactly the same\-\--you can use what you like best. These type keywords are available:

  --------------------------- ---------------------------------
  Keyword(s)                  Description
  `int`, `integer`            Casts to integer
  `bool`, `boolean`           Casts to Boolean
  `float`, `double`, `real`   Casts to float
  `string`                    Casts to string
  `array`                     Casts to array
  `object`                    Casts to object
  `unset`                     Casts to null
  `binary`                    Casts a string to binary string
  --------------------------- ---------------------------------

``` {data-lang="php"}
$username = "Ginty";

//The username has now become an integer with value 0
$username = (int) $username; 

//The username has now become a boolean with value false settype($username, "bool");
```

## Debugging Variables

Now, we're in a bit of a quandary here. If we were to `echo` a variable, we would see its converted value. With all this type juggling and wizarding, how could we ever know the type of a variable?

Well, to retrieve the type of a variable (as a string), use

`gettype($var);`{.longsyntax}

Lots of times, however, you simply want to check if a variable is of a certain type. For example, if the user inputs a string, do this, but if not, do that. For this, we have a collection of so-called *is_type* functions, which returns true if a variable is indeed of type *type*, and false otherwise.

  ----------------- ---------------------------------------------------------------------------------------
  Function          Description
  `is_int()`        Checks if variable is an integer
  `is_float()`      Checks if variable is a float
  `is_numeric()`    Checks if variable is an integer or float
  `is_bool()`       Checks if variable is a Boolean
  `is_string()`     Checks if variable is a string
  `is_scalar()`     Checks if variable is a scalar (integer / float / string / Boolean)
  `is_array()`      Checks if variable is an array
  `is_object()`     Checks if variable is an object
  `is_resource()`   Checks if variable is a resource
  `is_null()`       Checks if variable is null
  `is_callable()`   Checks if variable is callable (which means it's a function\-\--more on that later).
  ----------------- ---------------------------------------------------------------------------------------

``` {data-lang="php"}
$username = "Ginty";

echo gettype($username); //Prints "string"

$is_username_valid = is_string($username); //Returns true, so yes the username is valid!
```

## A Programmer's Echo

But, there's one last problem here. (Last one, I promise.) Because it's impossible to convert an array or object, we can't even use
`echo` to see its value. It would just give us an error. It would, therefore, be nice if we had some functions that would print our variables in a more readable, programmer-friendly way.

Fortunately, PHP has just the thing for you. To print any variable in a readable way, use

`print_r($var)`{.longsyntax}

If you want to take it one step further, and print all the information about a variable (type, contents, size, etcetera), use one of the following two

`var_dump($var); var_export($var, true);`{.longsyntax}

NOTE: The difference is that the second function outputs information about the variable as valid PHP code. So, you could save that information inside a new variable and do something with it if you want.

``` {data-lang="php"}
$player = "Ginty";
$items = ["Potion", "Sword", "Gun", "Smartphone"];
$player_has_a_sword = true;

var_dump($player); //Prints string(5) "Ginty"

//It also helps display variables that can't be converted to meaningful strings var_dump($player_has_a_sword); //Prints bool(true)

print_r($items); 
/* Prints the array in readable format;
    Array
    (
          [0] => Potion
          [1] => Sword
          [2] => Gun
          [3] => Smartphone
    )
*/
```

" slug: "php-variables-II" cat: "Website" subcat: "PHP" video:
"" diff: 3 quiz: "" - id: 427 title: "\[PHP\] Numbers & Operators" post: "

Now that we know how to create lots of different variables of lots of different types, it's time to actually start doing something with them. Computers are, at their core, number crunching machines, performing complex math the whole time. Math, however simple or complex, will always play a big part in your programs as well, which is we need an easy and quick way to perform those math operations. Not surprisingly, for this we can use **operators**.

NOTE: Some other data types have very important operators as well, which I will discuss when their chapter arrives. Also, the syntax used for type casting also used *casting operators*.

## Arithmetic Operators

The four basic arithmetic operators you've known all your life are available, plus a few more.

  ---------- ----------------
  Operator   Description
  `+`        Addition
  `-`        Subtraction
  `*`        Multiplication
  `/`        Division
  `%`        Modulus\*
  `**`       Exponentiation
  ---------- ----------------

``` {data-lang="php"}
$a = 1 + 2 - 2; //$a is 1
$b = 2 * 2 / 4; //$b is 1
$c = 2**4       //$c is 2^4 = 2*2*2*2 = 16
```

## Incrementing/Decrementing

Adding exactly one to a number, or subtracting one from it, is such a common operation that it has its own operators. Be sure to notice, however, that placing this operator before or after the variable makes a huge difference.

  ---------- ----------------------------------------
  Operator   Description
  `$x++`     Adds 1 to \$x, then returns \$x.
  `$x--`     Subtracts 1 from \$x, then returns \$x
  `++$x`     Returns \$x, then adds 1 to \$x
  `--$x`     Returns \$x, then subtracts 1 from \$x
  ---------- ----------------------------------------

``` {data-lang="php"}
$a = 0;
$b = $a++; //$b is 1, $a is 1
$b = ++$a; //$b is 1, $a is 2
```

## Assignment Operators

Not so long ago I told you: "computers can't have loose data flying around". Similar to how we store temporary results in our head when performing mental arithmetic, computers always need to store the results of a certain computation somewhere. In real life, people could say things like *1 + 1 = 2* or *1 \* 2 \* 3 = 6*. Not in the computer world.

Every statement where you assign a value, you **must** have a variable on the left hand side, and all the values and operators on the right hand side. So, every time you want to update a variable, you simply assign its old value *plus* some additional computations.

``` {data-lang="php"}
$a = 5;
$a = $a + 5; //$a is 10
$a + 5; //ERROR.
```

NOTE: For those that don't know: we've seen in the beginning that we can use the *assignment operator* ( `=` ) to assign a value to a variable; everything on the left of that operator is called the *left hand side*, and everything on the right the *right hand side*. Also, every value or variable around an operator is called an *operand*.

This seems tedious and verbose, so you'll be happy to hear there's a much shorter and easier way to write these assignments.

  ---------- ----------- -------------
  Operator   Shorthand   Full
  `+=`       `x += y`    `x = x + y`
  `-=`       `x -= y`    `x = x - y`
  `*=`       `x *= y`    `x = x * y`
  `/=`       `x /= y`    `x = x / y`
  `%=`       `x %= y`    `x = x % y`
  `**=`      `x **= y`   `x = x**y`
  ---------- ----------- -------------

I think this is a very important concept to understand completely, as you'll need it very often, and it works the exact same way in all programming languages. You just need to remind yourself that you can't have loose data\-\--everything needs to be saved into a variable. (Or put into a function.)

NOTE: Knowing this, we can see that the `++` and `--` operators are just shortcuts for `+= 1` and `-= 1`.

``` {data-lang="php"}
$a = 10; 
$a += 5; //$a is 15
$a *= 2; //$a is 30
```

## Not a Number

What would happen if we were to (accidentally) use these operators with other data types than floats or integers? In most cases, it would just throw an error. There are three special cases though:

-   **Booleans**: the value `true` resolves to the integer 1, while
    `false` resolves to 0.
-   **Strings**: When converting strings to integers, PHP expects the
    number to be at the start of the string. It tries to make the number
    as large as possible. So, if a string doesn't contain a number at
    the start, it will always resolve to `0`.
-   **Special Floats**: There are some floating point numbers that can
    be written down or calculated with PHP, but can't be written
    exactly as a number. (Sounds weird, I know.) We call these *not a
    number*.

Among those special floats are infinity ( `INF` ) and values that can't be calculated (such as `sqrt(-1.0)`, the square root of minus one). To check if a float is special, and therefore not a number we can perform calculations with, we use

`is_nan($float);`{.longsyntax}

To merely check whether a value is infinite or not, which also means we can't really do anything with it, use

`is_infinite($float);`{.longsyntax}

``` {data-lang="php"} echo "7 dwarves" + "1 snow white";   //Prints 8 echo "Dwarves, 7" + "Snow white, 1"; //Prints 0

$a = is_nan(true);       //$a is false
$a = is_nan(acos(1.1));  //$a is true
```

## Operator Precedence

The precedence of operators is just like you're used to.

-   The `**` operator is evaluated first
-   The `*`, `/` and `%` are evaluated second
-   The `+` and `---` are evaluated third

If you want to change this order, by grouping certain terms together, you can use the familiar parentheses ( `( )` ).

``` {data-lang="php"} echo 5 + 5 * 3;   //Prints 5 + 15 = 20 echo (5 + 5) * 3; //Prints 10 * 3 = 30
```

## \*Modulus

The *modulus* of x and y is simply the remainder after dividing x by y. For example:

16 % 6 = 4 (because 16 / 6 = 2 with remainder 4)\
18 % 3 = 0 (because 18 = 3 \* 6, so there's no remainder)\
4 % 3 = 1 (because 4 / 3 = 1 with remainder 1)

" slug: "php-numbers-operators" cat: "Website" subcat: "PHP" video: "" diff: 2 quiz: "" - id: 428 title: "\[PHP\] Strings I" post: "

Now that we've discussed what to do with floats and integers, it's time to move on to the next scalar type: *strings*. PHP heavily relies on pieces of text being downloaded from servers, or uploaded to them. The famous `echo` statement can in the end only insert strings into the HTML page. That's why there's a lot of ways to alter, modify, and play with strings\-\--and this chapter will tell you all about them.

## Variable Expansion

You would expect that if you were to write a variable within a string, it would simply print the variable's name instead of its value. With the *single-quoted* and *nowdoc* syntax that is the case\-\--but, the
*double-quoted* and *heredoc* syntax can do something special. When you write a variable, it will *expand* it and display its value instead.

``` {data-lang="php"}
$username = "Panda";

echo 'Last log in: $username at 2PM'; //Prints: Last log in: $username at 2PM echo "Last log in: $username at 2PM"; //Prints: Last log in: Panda at 2PM
```

## Escape Characters

Both the single-quoted and double-quoted syntax have a problem; what should I do if I want to add an actual quote as a character? If you would just type the quote character, PHP would think the string ended and the results wouldn't be pretty. We can solve this by **escaping** the characters\-\--which simply means that we add a **backslash** ( `\`
) in front of it.

Single-quoted strings support only one escape sequence: `\'` (to use single quotes in your text)

Double-quoted strings support a bunch of escape sequence:

  ---------- ----------------------------------------------------------------------------------------------
  Sequence   Meaning
  `\n`      Newline (goes to start of a new line)
  `\r`      Carriage return (goes to end of newline, and moves back until it finds first character stop)
  `\t`      Horizontal tab
  `\v`      Vertical tab
  `\e`      Escape
  `\f`      Form feed
  `\\`     Backslash
  `\$`      Dollar sign
  `\"`      Double quote
  ---------- ----------------------------------------------------------------------------------------------

``` {data-lang="php"}
//This prints a warning that the variable $password is undefined echo "Your password has been saved in the $password variable";

//This prints the sentence as you intended it echo "Your password has been saved in the \$password variable";

//This throws an error echo 'The meeting is scheduled at 2 o'clock';

//This prints what you want echo 'The meeting is scheduled at 2 o\'clock';
```

NOTE: Most of these only show themselves when you start working with HTML forms and input. Also, because the newline character differs across operating systems, it's a custom on the internet to use `\r\n` for newlines. Just to be safe.

## String Operators

We've seen that PHP converts strings to numbers (in a rather rude way) when we try to add them together using the mathematical operators. So, how should we combine strings? Well, we use another operator for
"string addition", which is called the **concatenation operator** (
`.` ).

`$combinedstring = $string1 . $string2;`{.longsyntax}

``` {data-lang="php"} echo "Welcome, " + "my friend!"; //Prints 0, as both strings as interpreted as integers

echo "Welcome, " . "my friend!"; //Prints: Welcome, my friend!
```

## Operator Precedence

Just as with the math operators, the concatenation operator has its own rank of importance. It has the same precedence as the `+` and `---` operator, which is great most of the time, but can lead to some nasty errors (see the example).

``` {data-lang="php"} echo "Total Costs: \$" + 50 + " USD"; //Prints: 50 echo "Total Costs: \$" + 50 . " USD"; //Prints: 50 USD echo "Total Costs: \$" . 50 . " USD"; //Prints: Total Costs: $50 USD
```

## Accessing Characters

Before I bestow upon you a large amount of useful string functions, I have one last special string syntax to explain. If you want to access a single *character* of string, you can do so with

`$string[index];`{.longsyntax}

Here, the *index* is the position of the character within the string. Computers start counting at 0, so the first character will have index 0, the second character index 1, and so on. (This counting system is important to never ever forget, as it can save you a lot of trouble.)

``` {data-lang="php"}
$tweet = "@pandaqi You really do like pandas, don't you?";

//If the first letter of the tweet is an at-sign
//and the second letter is NOT an empty space... if($tweet[0] == "@" && $tweet[1] != " ") {
    //Classify the tweet as a response to somebody
    echo "The tweet is a response!";
    ...
}
```

" slug: "php-strings-I" cat: "Website" subcat: "PHP" video: "" diff: 2 quiz: "" - id: 429 title: "\[PHP\] Strings II" post: "

I think a practical example is in order here\-\--all this theoretical talk about numbers and strings might start to feel a bit useless at the moment, and the last thing I want you to do is quit learning!

On this website, there's lots of things going on. When you access a page, it takes the URL (which is a string), and chops it up into little pieces. Based on those, it finds the article that belongs with it, and loads that post (which is one huge string) from the database. I don't like writing large bits of HTML to insert code examples, images, or other special things\-\--so I use a much easier system. I simply invented my own special tags (such as `[more]` or `#LINKHERE#`), and I replace those tags by their complex HTML counterparts, to create a page that is dynamically created when you load it! It saves me work, it saves you work.

This, is the power of strings. We can extract all sorts of information from them, and without them, PHP and the world wide web would probably not exist. This chapter will discuss the most fundamental functions you can call on strings to make them dance.

## Changing Case

Let's start simple. Sometimes you have a string where the letters are lowercase, where they should be uppercase (or vice versa). To change case, we have these functions:

  -------------------- ---------------------------------------------------
  Function             Description
  `lcfirst($str)`      Makes the first character of the string lowercase
  `ucfirst($str)`      Makes the first character of the string uppercase
  `strtolower($str)`   Makes all characters of the string lowercase
  `strtoupper($str)`   Makes all characters of the string uppercase
  -------------------- ---------------------------------------------------

``` {data-lang="php"}
$mail_goodbye = "kiND reGArdS, PANDaqi";

//Let's fix this ugly sentence by making it all lowercase,
//and the first letter uppercase echo ucfirst(strtolower($mail_goodbye));
```

NOTE: As you can see, function names in PHP are quite self-descriptive. Sometimes this is a good thing, sometimes this makes function names unnecessarily complicated and type-error prone.

## Searching

We can search strings to check whether they contain certain substrings
(and their position or amount of occurrences). For example, if we wanted to check if users entered a valid email address, we could check whether the string contains the "@" character.

NOTE: All of these functions will, if they can't find what you're looking for, or something else goes wrong, return the value `false`.

To search for the first occurrence of a substring, use one of these functions:

`strstr($haystack, $needle [, $before_needle]); stristr($haystack, $needle [, $before_needle]);`{.longsyntax}

This searches the string *\$haystack* for the substring *\$needle*, and returns everything that comes after it. The *\$before_needle* parameter is optional. If you set it to true, the function will instead return everything that comes *before* the substring.

The difference between the first and second function is that little `i` in the middle. It means that the second function performs a case-insensitive search. Most functions have this variation, and I will point them out.

NOTE: I'll be using this way of describing syntax for the rest of the course, as the PHP manual (and most other programming manuals) do so as well.

``` {data-lang="php"}
$user_email = "thatawesomeguy@gmail.com";

echo strstr($user_email, "@");       //Prints @gmail.com echo strstr($user_email, "@", true); //Prints thatawesomeguy

$x = stristr($user_email, "girl");   //$x is false (thatawesomeguy is not thatawesomegirl)
```

To search for the position of a substring, use one of these functions:

`strpos($haystack, $needle [, $offset]); strrpos($haystack, $needle [, $offset]); strripos($haystack, $needle [, $offset]);`{.longsyntax}

This returns the index of the substring *\$needle* in string
*\$haystack*. The optional *\$offset* is an integer that determines from what index it starts looking; normally it starts at the first letter
(index 0), but you can set it to start searching later.

The function `strpos` returns the first occurrence, `strrpos` the last occurrence (note the second 'r'), and `strripos` does so case-insensitively.

``` {data-lang="php"}
$user_emails = "thatawesomegirl@gmail.com | thatawesomeguy@gmail.com";

echo strpos($user_emails, "@");  //Prints 15 echo strrpos($user_emails, "@"); //Prints 42
```

## Substrings

If you don't know the substring you're looking for, but you *do* know at what index it should be, use

`substr($haystack, $start [, $length]);`{.longsyntax}

It returns the string starting from index *\$start* until the end of the string. If you set *\$length*, it will only return that amount of characters.

If you use a negative integer for *\$start*, it will start that amount of characters from the *end* of the string (the same is the case for
*\$length*).

``` {data-lang="php"}
$video_url = "http://youtube.com/watch?v=BH-wP2TDUBQ";

//For example, if all the videos we reference on our website are 
//from youtube, all we need is to store the ID (BH-wP2TDUBQ).

//Two identical ways to do so are:
$video_id = substr($video_url, -11);
$video_id = substr($video_url, 27);
```

You can also just count how many times a substring occurs in a string. For this, use

`substr_count($haystack, $needle, [$offset, $length]);`{.longsyntax}

The *\$length* parameter specifies how many characters to check after the *\$offset* index. If omitted, the length is the same as the length of the whole string, which means it searches through the whole string and counts all the occurrences.

``` {data-lang="php"}
$achievements = "Got 1000 subscribers | Got 1000 views on a single day | Chose an awesome password | Invited 5 friends to the website";

//To know the total amount of achievements this user has, simply count the amount of seperators echo substr_count($achievements, " | ") + 1;
```

## Cutting

Now that we can find certain substrings within strings, it would be nice if we could cut them out of there, or at least divide the string into multiple substrings. For example, after having checked that the `@` character is present in a string, we would like to select the domain name to see if it is valid. We don't want *panda\@panda* to resolve as a valid email address, but we do want *panda\@gmail.com* to be seen as valid.

Let's start simple. To remove useless whitespace from a string use

  --------------- -------------------------------------------------------------
  Function        Description
  `trim($str)`    Trim whitespace from both beginning and end
  `ltrim($str)`   Trim whitespace only from the beginning ("from the left")
  `rtrim($str)`   Trim whitespace only from the end ("from the right")
  --------------- -------------------------------------------------------------

``` {data-lang="php"}
//Oh no, somebody accidentally added spaces in front of their 
//answer for our very, very important price quiz
$quiz_answer = "  RED  ";

//Fixed it. echo trim($quiz_answer); //Prints RED
```

To cut a string into many substrings, you can split it into an array. For example, you could have a long string of data separated by a certain character, and then use that character to retrieve every individual piece again. For this, use

`explode($delimiter, $haystack);`{.longsyntax}

Note that it splits the whole string at every point it finds the delimiter, but it removes all occurrences of the delimiter itself.

``` {data-lang="php"}
//Oh no, the new blogger insisted on using his own syntax for storing blog post information
$post_information = "Hello dear readers, thanks for reading my blog!#22 January 2203#News#10 comments";

//Luckily, we can just split the string to get the information seperated; print_r(explode("#", $post_information));
/*
    Array
    (
        [0] => Hello dear readers, thanks for reading my blog!
        [1] => 22 January 2203
        [2] => News
        [3] => 10 comments
    )
*/
```

## Replacing

Last, but certainly not least, we might want to replace a piece of a string. (Instead of violently cutting it away.) (Or, you know, setting off explosions on the string.)

To replace *all* occurrences of a search string with a replacement string, use one of these

`str_replace($search, $replace, $haystack [, $count]); str_ireplace($search, $replace, $haystack [, $count]);`{.longsyntax}

The last parameter, if you set it, requires a *variable* to be put into it. After the function has executed, this variable will then hold the amount of replacements that have been made.

``` {data-lang="php"}
$post = "Great news! Peanut butter sales are increasing, so buy stock now!";

//Our boss read somewhere that the word Peanut makes potential customers feels uncomfortable
//Now we need to change every instance of the word with the friendlier sounding Apple
$post = str_replace("Peanut", "Apple", $post, $count_var);

echo $post;      //Prints: Great news! Apple butter sales are increasing, so buy stock now! echo $count_var; //Prints: 1    (because we've made one replacement)
```

Just as before, it's possible that we don't know the exact string, but we do know the index where it starts and ends. To perform a replacement in these cases, use

`substr_replace($haystack, $replace, $start [, $length]);`{.longsyntax}

``` {data-lang="php"}
//Let's say our comment system allows users to make their comments red
//To enable this fancy functionality, they need to start their comment with the word PANDA
$comment = "PANDAWow, this post was very informative!";

//Replace the first five characters with an opening HTML tag
$comment = substr_replace($comment, '', 0, 5);

//Then add a closing tag at the end
$comment .= "";

echo $comment;
//Prints a red comment reading "Wow, this post was very informative!"
```

" slug: "php-strings-II" cat: "Website" subcat: "PHP" video: "" diff: 3 quiz: "" - id: 430 title: "\[PHP\] Conditionals" post: "

After all this talk about floats, integers, and strings, you might start to think\-\--*Booleans can only be true or false, how important could they possibly be?* Well, extremely important. And that's an understatement.

To computers, the world is binary and exact. Computers can't "sorta execute this", or "just try to do this or that". They either do it, or they don't. Something is either executed exactly as it was written, or it isn't executed at all. Therefore, we must use Booleans to tell the computer when to execute which pieces of code.

For example, we could check whether a user is logged in. If the check returns *true*, we can execute a piece of code that welcomes him and throws confetti into his face. If the check returns *false*, we display a login page. A user can't be "sort of logged in"\-\--he either is, or he isn't.

Similarly, we could check whether a search query was successful, by checking the amount of results it returned. We could write a piece of code that checks whether or not that amount is greater than 0. If the check returns *true*, we have results and we should display them. If the check returns *false*, we have no results and we should suggest a different query to the user. A query can't have more than zero results, yet zero results\-\--either there are results, or there aren't.

Not surprisingly, we have another set of operators at our disposable for this important aspect of PHP; the **comparison operators** and **logical operators**. Both of these are *conditional operators*, and using them creates a *conditional*\-\--a certain condition under which the program should or shouldn't do something.

## Comparison Operators

In our examples above, we already saw how we could compare two values to get a truth value. As it turns out, comparison is the best and only way to do so; is this greater than that? Or is this less than that? Or is this equal to that?

Therefore, if you place any of the following comparison operators between two operands, PHP will not perform some arithmetic operation\-\--instead, it will check whether the comparison is true or false, and return that.

+-----------------------+-----------------------+-----------------------+
| Operator              | Name                  | Description           |
+-----------------------+-----------------------+-----------------------+
| `==`                  | Equal                 | Returns true if both  |
|                       |                       | operands are equal    |
|                       |                       | (after type           |
|                       |                       | conversion)           |
+-----------------------+-----------------------+-----------------------+
| `===`                 | Identical             | Returns true if both  |
|                       |                       | operands are equal,   |
|                       |                       | and of the same data  |
|                       |                       | type                  |
+-----------------------+-----------------------+-----------------------+
| `!=`\                 | Not Equal             | Returns true if both  |
| `<>`                  |                       | operands are not      |
|                       |                       | equal (after type     |
|                       |                       | conversion)           |
+-----------------------+-----------------------+-----------------------+
| `!==`                 | Not Identical         | Returns true if both  |
|                       |                       | operands are not      |
|                       |                       | equal, or not of the  |
|                       |                       | same data type        |
+-----------------------+-----------------------+-----------------------+
| `<`                   | Less than             | Returns true if the   |
|                       |                       | left hand side is     |
|                       |                       | less than the right   |
|                       |                       | hand side             |
+-----------------------+-----------------------+-----------------------+
| `>`                   | Greater than          | Returns true if the   |
|                       |                       | left hand side is     |
|                       |                       | greater than the      |
|                       |                       | right hand side       |
+-----------------------+-----------------------+-----------------------+
| `<=`                  | Less than or equal to | Returns true if the   |
|                       |                       | left hand side is     |
|                       |                       | less than or equal to |
|                       |                       | the right hand side   |
+-----------------------+-----------------------+-----------------------+
| `>=`                  | Greater than or equal | Returns true if the   |
|                       | to                    | left hand side is     |
|                       |                       | greater than or equal |
|                       |                       | to the right hand     |
|                       |                       | side                  |
+-----------------------+-----------------------+-----------------------+

``` {data-lang="php"}
//This is true, because "2" and 2 have the same integer value
$cond = (2 == "2");

//This is false, because "2" and 2 are not identical (one is integer, one is string)
$cond = (2 === "2");

//This is true, because "Panda" is equal to "Panda"
$cond = ("Panda" <= "Panda");

//This is false, because true is the same as true
$cond = (true != true);
```

## Logical Operators

Performing one comparison is great, but it's usually not enough. For example, if a user logs in we want to check whether the username matches the password. In other words, only if our check for the username returns true, *and* our check for the password returns true as well, we can log the user in. To combine conditionals, we can use the following logical operators:

+-----------------------+-----------------------+-----------------------+
| Operator              | Name                  | Description           |
+-----------------------+-----------------------+-----------------------+
| `and`\                | Logical AND           | Returns true if both  |
| `&&`                  |                       | operands are true     |
+-----------------------+-----------------------+-----------------------+
| `or`\                 | Logical OR            | Returns true if       |
| `||`                  |                       | either the left *or*  |
|                       |                       | the right operand is  |
|                       |                       | true, or both         |
+-----------------------+-----------------------+-----------------------+
| `xor`                 | Logical XOR           | Returns true if       |
|                       |                       | either the left *or*  |
|                       |                       | the right operand is  |
|                       |                       | true, but *not* both  |
+-----------------------+-----------------------+-----------------------+
| `!`                   | Logical NOT           | Returns true if the   |
|                       |                       | operand is not true.  |
|                       |                       | (It negates the       |
|                       |                       | value.)               |
+-----------------------+-----------------------+-----------------------+

``` {data-lang="php"}
$password = "1234";
$username = "Ginty";

//This is true, because both password and username are correct
$cond = ($password === "1234" && $username === "Ginty");

//This is false, because both are true, so the inversion is false
$cond = (!($password === "1234" && $username === "Ginty"));

//This is not secure; it already returns true if only one of the two is correct!
$cond = ($password === "1234" || $username === "Ginty");

//If a user has at least 10 credits, or it is a new user, return true
//(so that we can level up the user, or give him bonus credits, or whatever)
$cond = ($credits_total >= 10 || $new_user);
```

NOTE: Even though the function of `and` and `&&` is exactly the same, just as `or` and `||`, there's a difference in precedence. The shorthand operators `&&` and `||` have a higher precedence than `and` and `or`, which means they are evaluated first.

" slug: "php-conditionals" cat: "Website" subcat: "PHP" video:
"" diff: 3 quiz: "" - id: 431 title: "\[PHP\] Control Flow" post:
"

Now that we've seen how to create conditionals, we can look at how to actually use them. The name of this chapter\-\--Control Flow\-\--is just a fancy name for controlling which parts of the code the program executes, and which it doesn't. You can use the result of conditionals to control the flow of a program; does it go into this direction, or that direction?

To do so, we have *if statements* (and its related brothers and sisters). They are quite intuitive actually; if a certain condition is true, do that. Because you'll be using some kinds of if statements a lot, PHP also provides a few special *conditional operators* again to make our lives easier.

## The if Statement

To execute a certain block of code only **if** a certain condition is true, we use

`if(condition) { lots of statements }`{.longsyntax}

``` {data-lang="php"}
$logged_in = ($password === "1234" && $username === "Ginty");

//If the username and password entered are correct... if($logged_in) {
    //...welcome the logged in user
    echo "Welcome, $username!";
}
```

## The else Statement

Once upon a time, there was a game that changed its settings based on what time it was. If it was night, it would display a dark background, if it was day, it would display a light background. Undoubtedly, this game used an **else** statement.

An **else** statement is executed if the condition within the preceding if statement returns false. In normal language you would say: if this condition is true, do this, else do that. The syntax is

`else { lots of statements }`{.longsyntax}

``` {data-lang="php"}
$hours = 20;

//If it's morning or afternoon... if($hours <= 18) {
    echo "Good day!";
//Else if it's night ($hours > 18)
} else {
    echo "Good night!";
}
```

## The else if Statement

Now, suppose that game wanted to be more dynamic and display three different backgrounds. Night would mean a black background, daylight a bright background, and morning a neutral background. This would be the perfect situation for an **else if** statement!

The else if statement is executed when the previous condition is false,
*and* checks for a new condition. In normal language: if this condition is true, do this, else if this other condition is true, do that. The syntax is

`else if(condition) { lots of statements }`{.longsyntax}

You can put as many of these after each other as you need. The first must, however, always follow an `if` statement.

``` {data-lang="php"}
$hours = 20;

if($hours < 12) {
    echo "Good morning!";
} else if($hours <= 18){
    echo "Good day!";
} else {
    echo "Good night!";
}
```

The `else` statement, if you decide to include it, must always be put at the end of such an if\-\--elseif construction. In any case, it only executes if *all* the other conditions have returned false.

NOTE: It's highly recommended to always use `else` as the last statement in the construction, and not `else if`. That's because the latter requires another condition, which requires more work from you to type, and if anything changes within the program, you have to change that condition as well.

## The Ternary Operator

By far the most common conditional structure you'll use is: if this condition is true, set a variable to that value, else set it to another value. That's why the **ternary operator** was invented to reduce the amount of work! The syntax is:

`$variable = condition ? value if true : value if false;`{.longsyntax}

``` {data-lang="php"}
// A simple piece of code to make a player in a game
// face in the direction he's running
$player_velocity = -20;

//LONG syntax if($player_velocity > 0) {
    $player_direction = 1;
} else {
    $player_direction = -1;
}

//SHORT syntax
$player_direction = ($player_velocity > 0) ? 1 : -1;
```

## The Spaceship Operator

Another common conditional structure, is where you want to check whether two values are the same, or if one is less/greater than the other. You could do this with an if-elseif-else statement, but the **spaceship operator** (dumdumdumduuuum) makes this much easier.

It compares the two operands, and

-   Returns `0` if both operands are equal
-   Returns `1` if the left operand is greater
-   Returns `-1` if the right operand is greater.

The syntax is:

`x <=> y`{.longsyntax}

``` {data-lang="php"}
$points_player_1 = 160;
$points_player_2 = 240;

$result = $points_player_1 <=> $points_player_2;

if($result === 0) {
    echo "It's a tie";
} else if($result === 1) {
    echo "Player 1 won!";
} else {
    echo "Player 2 won!";
}
```

## Null Coalescing

The last common conditional structure, is one where you want to check whether some variable is null before you start doing anything with it. Because, if you don't, you'll likely run into lots of errors because the variable isn't properly set. To easily set a default value for a variable if it happens to be null, use the **null coalescing** operator. The syntax is

`x ?? y`{.longsyntax}

Because it's an operator, you can chain it as many times as you want. In that case, it will return the first value that is not null.

``` {data-lang="php"}
//Say a user requested a blog post.

//If, for some reason, the post can't be found and the request returns null..
//display the newest post to satisfy the user - if that returns null as well...
//display an error page saying that the post could not be found
$post = $requested ?? $newest ?? $error_404_page;
```

## Integration with HTML

Here I just want to point out the very important property of PHP we also saw at the beginning\-\--it integrates seamlessly with HTML. So, we don't have to restrict our control structures to PHP statements only. We can place an if statement, then break out of PHP mode and write some regular HTML/CSS/JavaScript, and then get into PHP mode again to close the if statement. This way, we let PHP decide whether whole chunks of HTML are displayed or not, based on certain conditions.

``` {data-lang="php"}

  Give us a moment, and we will search our database for what you were looking for!



  Welcome to awesomewebsite.com! I hope you enjoy your stay.

```

" slug: "php-control-flow" cat: "Website" subcat: "PHP" video:
"" diff: 3 quiz: "" - id: 432 title: "\[PHP\] Arrays I" post: "

Having looked intensively at the four scalar data types, it's time to move on to compound types; arrays and objects.

\> An array is nothing more than a list of values.

They are incredibly useful for grouping huge amounts of related data. Once saved inside an array, you can perform all sorts of operations on it - such as sorting or combining the data. For example, I could retrieve all the usernames of users that are currently in a chat room, put them inside an array, sort them alphabetically, and then display them to all other users with some HTML markup around them.

NOTE: The values of an array are called its *elements*.

## Types of Arrays

There are many types of lists in the real world\-\--grocery lists, step-by-step lists, definition-explanation lists\-\--which means we need versatile arrays. That's why PHP arrays can, unlike some other programming languages, store values of different data type. For example, some elements can be integers while others are strings.

Additionally, we need to be able to retrieve the *value* of an element by accessing its *key*. For example, we could save a value "5 dollars" under the key "price". There are three different types of arrays, based on how they use these key-value pairs:

-   **Indexed Arrays:** The key of an element is a numeric index. Just
    as with strings, the first element of the array has index 0, the
    next one has index 1, and so on.
-   **Associative Arrays:** The key of an element is a string or
    integer. In this case, the keys can be anything you like. (But they
    can't be other data types, such as float or Boolean.)
-   **Multidimensional Arrays:** The values are arrays! By placing an
    array inside an array, we basically create a table with rows and
    columns of data. (And, by adding even more arrays, we could make it
    three-dimensional and higher.) But, all of this is advanced stuff
    that will be discussed later.

## Creating an Array

Arrays are flexible. Based on what syntax you use to define its elements, the array changes its type for you. To create an *indexed array*, use one of the following two syntaxes

`array(value1, …, valuen); [value1, …, valuen];`{.longsyntax}

This could only create an indexed array, because we've only provided values and no keys.

To create an *associative array*, use one of these two syntaxes

`array(key1 => value1, …, keyn => valuen); [key1 => value1, …, keyn => valuen];`{.longsyntax}

``` {data-lang="php"}
$shopping_cart = ["Bicycle", "Plush Toy", "Table Tennis Table"]; print_r($shopping_cart);
/* Prints: Array
(
    [0] => Bicycle
    [1] => Plush Toy
    [2] => Table Tennis Table
)
*/

$bicycle_info = ["price" => 10, "colour" => "red", "gears" => 5, "forsale" => true]; print_r($bicycle_info);
/* Prints: Array
(
    [price] => 10
    [colour] => red
    [gears] => 5
    [forsale] => 1
)
*/
```

NOTE: PHP will automatically try to cast strings to integers, if possible, because indexed arrays are easier and faster to handle than associative ones. So, don't add numbers enclosed in quotes as keys
(like `"1"`), because they will be converted to numeric indexes\-\--and you will be confused.

## Accessing Elements

We've now seen how to set an array's values when you define it, but what if we want to add/remove or get/set a value later on? We can use the bracket-syntax\-\--which we also used for accessing characters of a string\-\--to refer to a single element of the array:

`$somearray[key];`{.longsyntax}

Note that this key can be an integer index, or a string\-\--the syntax is the same. Also note that we can use the assignment operator (just as we would with variables) to assign a new value.

``` {data-lang="php"}
$shopping_cart = ["Bicycle", "Plush Toy", "Table Tennis Table"]; echo $shopping_cart[1]; //Prints: Plush Toy
```

When you assign a value to a key that doesn't exist within the array, PHP will be nice and add this new key-value pair to the array for you. On the other hand, to remove an element, you need to use `unset()` again
(just as with regular variables).

``` {data-lang="php"}
$shopping_cart = ["Bicycle", "Plush Toy", "Table Tennis Table"]; echo $shopping_cart[5]; //Prints error that no element exists with index 5

$shopping_cart[5] = "Laptop"; echo $shopping_cart[5]; //Prints Laptop

unset($shopping_cart[5]); //Now it's been removed from the array again
```

## Array Operators

Arrays, just like the other datatypes, support operators as well. Because it's a list of things, however, they change their meaning if both operands are arrays. If only one operand is an array, these will throw an error.

+-----------------------+-----------------------+-----------------------+
| Operator              | Name                  | Result                |
+-----------------------+-----------------------+-----------------------+
| `+`                   | Union                 | Combines two arrays,  |
|                       |                       | and removes duplicate |
|                       |                       | elements              |
+-----------------------+-----------------------+-----------------------+
| `==`                  | Equality              | Returns true if both  |
|                       |                       | arrays have the same  |
|                       |                       | key/value pairs       |
+-----------------------+-----------------------+-----------------------+
| `===`                 | Identity              | Returns true if both  |
|                       |                       | arrays have the same  |
|                       |                       | key/value pairs, in   |
|                       |                       | the same order, and   |
|                       |                       | of the same data type |
+-----------------------+-----------------------+-----------------------+
| `!=`\                 | Inequality            | Returns true if both  |
| `<>`                  |                       | arrays don't have    |
|                       |                       | the exact same        |
|                       |                       | key/value pairs       |
+-----------------------+-----------------------+-----------------------+
| `!==`                 | Non-identity          | Returns true if both  |
|                       |                       | arrays don't have    |
|                       |                       | the exact same        |
|                       |                       | key/value pairs, or   |
|                       |                       | in a different order, |
|                       |                       | or values of          |
|                       |                       | different data types  |
+-----------------------+-----------------------+-----------------------+

``` {data-lang="php"}
$user_login = ["usn" => "Ginty", "pwd" => "1234"];
$user_profile = ["pet" => "Panda", "gender" => "Girl"];

$user = $user_login + $user_profile; //Contains all information on the user

$user_login_1 = ["usn" => "Ginty", "pwd" => "1234"];
$user_login_2 = ["pwd" => "1234", "usn" => "Ginty"];

//Prints bool(false), because key-value pairs are exactly the same var_dump($user_login_1 <> $user_login_2); 

//Prints bool(true), because the order is different var_dump($user_login_1 !== $user_login_2);
```

NOTE: Even though it's not possible to cast an array onto some other type, it *is* possible to cast scalar types to arrays. The result will be an array with a single element at index 0, with the scalar as its value.

## Retrieving the Length

You'll be retrieving the length of an array quite often, because you either want to display how many items are in a list, or want to go through all the elements of the array. (Which we'll discuss in the chapters on *Loops*.) To do so, use one of these:

`sizeof($array); count($array);`{.longsyntax}

They do exactly the same (they are called *aliases*)\-\--just pick the one you're most likely to remember. Also keep in mind that, in the case of indexed arrays, the last element of the array has index (*length-1*), because we start counting from 0.

``` {data-lang="php"}
$users = ["Ginty", "Juan", "Mark", "Avocado", "BATMAN"]; echo sizeof($users); //Prints 5
```

## Glue

Just as we could explode a string into an array, we can glue all the elements of an array together into a string. To do so, use one of these
(again, they do exactly the same):

`implode(separator, $array); join(separator, $array);`{.longsyntax}

``` {data-lang="php"}
//Suppose we want to thank all our users for their contribution in a single sentence
$users = ["Ginty", "Juan", "Mark", "Avocado", "BATMAN"];

echo "Thanks to " . implode(", ", $users) . "!";
//Prints Thanks to Ginty, Juan, Mark, Avocado, Batman!
```

## Adding/Removing Elements

For the quizzing system on this website, I dynamically create an array full of random, wrong answers and one right answer I fetch from my question database. It would be a pain to have to shift all the current elements one position to the right so I can add a new one at the start. Fortunately, PHP has some nice methods for adding/removing elements from the start/end of arrays.

To add elements at the *start* of the array (and therefore shift all the other elements one position to the right), use

`array_unshift($array, value1, …, valuen);`{.longsyntax}

To add elements at the *end* of an array, use

`array_push($array, value1, …, valuen);`{.longsyntax}

To remove the *first* element of an array (and therefore shift all the other elements one position to the left), use

`array_shift($array);`{.longsyntax}

To remove the *last* element of an array, use

`array_pop($array);`{.longsyntax}

``` {data-lang="php"}
$users_in_chatroom = ["Ginty", "Juan", "Mark", "Avocado", "BATMAN"];

//Hey, Laura just came into the chatroom! array_push($users_in_chatroom, "Laura");

//But, Ginty hates Laura, so she leaves array_shift($users_in_chatroom);

//Now Laura is upset as well, so she leaves array_pop($users_in_chatroom);

/*Now the array is  Array
(
    [0] => Juan
    [1] => Mark
    [2] => Avocado
    [3] => BATMAN
)
*/
```

" slug: "php-arrays-I" cat: "Website" subcat: "PHP" video: "" diff: 3 quiz: "" - id: 433 title: "\[PHP\] Arrays II" post: "

Last chapter discussed the most important functions and operators you can use with arrays, but they still can't do everything. Just as I did with strings, I want to use this chapter to outline other extremely useful functions to use with arrays\-\--such as *cutting a subarray*,
*searching for specific keys or values*, and *sorting* the array.

## Subarrays

We've already seen how we can select a single element of the array, but what if we want to select multiple elements? Well, then your selection is a list, which means it is a subarray! (Just as with substrings.)

To get part of an array, use

`array_slice($array, offset [, length, preserve_keys]);`{.longsyntax}

The slice starts at index *offset*, and takes *length* amount of elements. If it's not set, it will end the slice at the end of the array. Note that this does not alter the original array; it simply returns the slice so you can use it.

If you're working with indexed arrays, PHP will automatically reorder the keys of the slice so that they start at index 0. Set *preserve_keys* to true if you want to prevent this.

``` {data-lang="php"}
//Oh no, somehow, some wrong information entered the array
$tweet_information = ["just setting up my twttr", "21 March 2006", "Jack", "250 retweets", "PANDAS ARE COOL", "CRISPS ARE DELICIOUS"];

//Luckily, we can slice out the right information
$tweet_information = array_slice($tweet_information, 0, 4);

//The result is ["just setting up my twttr", "22 January 2016", "Jack", "250 retweets"];
```

Alternatively, you can use the following syntax to remove a portion of the array and perhaps replace it:

`array_splice($array, offset [, length, $replacement_array]);`{.longsyntax}

The elements from the *\$replacement_array* are inserted at the *offset* index. Note that it only replaces the elements it removes\-\--so, if you remove say five elements, and the replacement array contains ten, it will only insert the first five.

The function itself returns the elements that have been removed, but it also alters the original array (unlike the `array_slice()` function).

``` {data-lang="php"}
$user = ["downvotes received" => 24, "upvotes received" => 7, "comments" => 5, "forum posts" => 15];

//If we only care about his/her votes, we could remove the other two elements array_splice($user, 2);

//Or we can replace them with other information regarding votes array_splice($user, 2, 2, ["downvotes given" => 3, "upvotes given" => 8]);

//Or we can do something with the elements we've removed
$comments_and_posts = array_splice($user, 2);
```

## Searching

To check if a value exists in an array, use

`in_array($needle, $haystack [, $strict]);`{.longsyntax}

This searches for the value *\$needle* in the array *\$haystack*. If you set the third parameter to *true*, it also requires that the data type is the same. The functions returns `true` if it finds the value, and
`false` otherwise.

``` {data-lang="php"}
$grocery_list = ["Butter", "Pizza", "Chocolate", "Milk"];

//If there's milk on our grocery list... if(in_array("Milk", $grocery_list)) {
    //...notify the milk man!
}
```

Sometimes, though, you want to get the key that belongs to a certain value. For that, use

`array_search($needle, $haystack [, $strict]);`{.longsyntax}

If it can't find the value, and therefore can't find the key, it returns `false`.

``` {data-lang="php"}
$grocery_list = ["Butter", "Pizza", "Chocolate", "Milk"];

var_dump( array_search("Milk", $grocery_list) ); //Prints int(3) var_dump( array_search("Pancakes", $grocery_list) ); //Prints bool(false). Aww, no pancakes today.
```

Lastly, to check if a certain key is within an array, use

`array_key_exists($needle, $haystack);`{.longsyntax}

``` {data-lang="php"}
$comment = ["message" => "Hey Juan, nice holiday photos! Really dig your beard.", 
            "timestamp" => "May 30 2016, 2PM",
            "from" => "Ginty",
            "reply" => true];

if(array_key_exists("reply", $comment)){
    //notify Juan that he has a reply to his fabulous holiday photographs.
}
```

## Compare & Replace

The following functions can be used for performing certain operations between multiple arrays:

  --------------------------------- -------------------------------------------------------------------------------------------------------------------
  Function                          Description
  `array_diff($arr1, $arr2)`        Returns the values from *\$arr1* that are not present in *\$arr2*
  `array_intersect($arr1, $arr2)`   Returns the values from *\$arr1* that are also present in *\$arr2*
  `array_combine($keys, $values)`   Returns an array with the elements from *\$keys* as keys, and elements from *\$values* as values.
  `array_merge($arr1, $arr2)`       Appends the elements from *\$arr2* to the end of *\$arr1*. Duplicate keys will be set to the value from *\$arr2*.
  `array_replace($arr1, $arr2)`     Replaces values from *\$arr1* with values from *\$arr2*, if they have the same key.
  --------------------------------- -------------------------------------------------------------------------------------------------------------------

``` {data-lang="php"}
//Say we're writing a system for Santa Claus to manage his presents
$wishlist_papa = ["Beer", "Television", "Cat"];
$wishlist_mama = ["Lipstick", "Mirror", "Cat"];

//Result: [Beer, Television, Lipstick, Mirror] array_diff($wishlist_papa, $wishlist_mama); 

//Result: [Cat] array_intersect($wishlist_papa, $wishlist_mama); 

//Result: [Beer => Lipstick, Television => Mirror, Cat => Cat] array_combine($wishlist_papa, $wishlist_mama); 

//Result: [Beer, Television, Lipstick, Mirror, Cat] array_merge($wishlist_papa, $wishlist_mama); 

//Result: [Lipstick, Mirror, Cat] array_replace($wishlist_papa, $wishlist_mama); 

//Obviously, Santa Claus is going to use the intersection to minimize his costs
```

NOTE: All methods, except for combine, can actually accept as many arrays as you want, as long as you provide at least two.

## Sorting

Up until now, the order of an array is simply the order in which you put in the values, and it hasn't really mattered much. There are many cases imaginable, however, where sorting an array is a crucial action. Obvious cases are when you want to display lists in alphabetical order, but you also need it to display blog posts from newest to oldest or display comments ordered on how many upvotes they have.

To do so, PHP has these functions available to us:

  ----------------- -------------------------------------------------------------------
  Function          Description
  `sort($arr)`      Sort an array in ascending order
  `rsort($arr)`     Sort an array in descending order
  `asort($arr)`     Sort an associative array in ascending order, according to value
  `ksort($arr)`     Sort an associative array in ascending order, according to key
  `arsort($arr)`    Sort an associative array in descending order, according to value
  `krsort($arr)`    Sort an associative array in descending order, according to key
  `shuffle($arr)`   Randomly orders the elements of an array.
  ----------------- -------------------------------------------------------------------

*How does PHP sort values?* First it sorts alphabetically (strings), then numerically (integers, floats, Booleans). For sorting alphabetically, it uses *lexicographical* ordering, which simply means that it uses the same ordering as dictionaries\-\--first check the first character, then the next one, then the next one, and so on. For sorting numerically, the order is the same as the one you're used to\-\--0, 1,
2, and so on.

``` {data-lang="php"}
$users = ["Ginty", "Juan", "Mark", "Avocado", "BATMAN"];

sort($users);  //Results in ["Avocado", "BATMAN", "Ginty", "Juan", "Mark"]; rsort($users); //Results in ["Mark", "Juan", "Ginty", "BATMAN", "Avocado"];
```

NOTE: Only lowercase characters are supported for string ordering.

Lastly, PHP also has an easy function to reverse the current order of an array:

`array_reverse($arr [, $preserve_keys]);`{.longsyntax}

The *\$preserve_keys* parameter, if set to true, will preserve numeric indexes. String keys are always preserved.

``` {data-lang="php"}
$users = ["Ginty", "Juan", "Mark", "Avocado", "BATMAN"];

array_reverse($users); 
//Results in ["BATMAN", "Avocado", "Mark", "Juan", "Ginty"];

array_reverse($users, true); 
/* Results in 
   Array (
      ["4"] => "BATMAN", 
      ["3"] => "Avocado", 
      ["2"] => "Mark", 
      ["1"] => "Juan", 
      ["0"] => "Ginty", 
  )
*/
```

" slug: "php-arrays-II" cat: "Website" subcat: "PHP" video: "" diff: 4 quiz: "" - id: 434 title: "\[PHP\] Loops" post: "

Sometimes you want a piece of code to be executed a lot of times
(especially with arrays). For example, say you wanted to calculate the total price of all items in a shopping cart. Then you could access each item separately, and add that to the total sum, and copy that line of code dozens of times. But, a much easier way would be to put all prices in an array, and execute a single line of code (that accesses the next element in the array and adds the value to the total) lots of times. For this, *loops* have been invented.

\> A loop allows you to easily execute the same block of code as many times as you want.

Arrays are the typical use case, but they are applicable everywhere\-\--I promise you, you'll be writing lots of loops in your programming life. Loops can run indefinitely, or a fixed amount of iterations. And, of course, you can use variables in the loop to slightly change the block of code that's being executed every time.

## While

The *while loop* is the easiest, and simply keeps looping a block as long as a certain condition returns true. Just as with if statements, it's rather intuitive: while this condition is true, keep doing this.

`while(condition) {     lots of statements }`{.longsyntax}

``` {data-lang="php"}
//SCRIPT: Find all the divisors of a number
$x = 52;
$divisors = [];
$i = 2;

//As long as the following condition is true while($i <= $x*0.5) {
    //Check if the current number ($i) can divide $x
    if(is_integer($x / $i)) {
        //If so, add it to the divisors array
        array_push($divisors, $i);
    }
    $i++;
}

//The result should be [2,4,13,26], which are all the divisors of 52, so it works!
```

This loop, however, can keep going on *forever*\-\--which will freeze the computer or lead to other unpleasant consequences. Therefore, you must make sure that there's always a possibility that the condition returns false, and you break out of the loop.

## Do-While

Another problem with the while loop, is that there's the possibility that it never runs\-\--not even once\-\--if the condition is false to begin with. To execute a block of statements once with certainty, and then enter a while loop, we use a *do-while loop*.

`do {     lots of statements } while (condition);`{.longsyntax}

``` {data-lang="php"}
//Say we want to display a random quote on the homepage, but we don't want the quote to be the same as one we've used the past 3 days
$old_quotes = ["To be or not to be", "Never stop dreaming", "C'est la Vie"];


do {
    $new_quote = //get a new quote from the database...;
} while (in_array($new_quote, $old_quotes));
//... and keep trying for as long as the quote we've chosen is one of the 3 old quotes
```

NOTE: As you can see, had the loop from the example been a simple while loop, the variable `$new_quote` would not exist, so it wouldn't have worked out.

## For

When you know exactly how many times you want the loop to run, a *for loop* is usually better. For example, for loops are typically used to go through elements of an indexed array and do something with them. You know the length of the array, so you know exactly how many iterations you're going to need. The syntax is

`for(initializer; condition; updater){     lots of statements }`{.longsyntax}

The **initializer** is run once at the start of the loop, and declares a variable and its starting value. This variable is called the *iterator*, and usually denoted with a simple `$i`.

The **condition** is checked at the end of every loop. If it's still true, it will do another round, if not, it breaks out of the loop.

The **updater** is called at the end of every loop, and updates one or multiple variables. Usually, it simply increments the iterator (by one).

``` {data-lang="php"}
$shopping_cart = ["Playmobil", "LEGO", "Candy"];

//Loop through all the items within the shopping cart for($i = 0; $i";
}

/*The loop should print
    Item 0: Playmobil
    Item 1: LEGO
    Item 2: Candy
*/
```

NOTE: You can declare multiple variables in the initializer, as long as you separate them by a comma.

## For-Each

The for loop is great for going through indexed arrays, or doing anything else related with numbers, but what if we have an associative array? We use the *for-each loop* instead. This loop was made specifically for arrays and objects, and goes through all the key-value pairs. There are two syntaxes:

`foreach($array as $value) {     lots of statements }`{.longsyntax}
`foreach($array as $key => $value) {     lots of statements }`{.longsyntax}

In the first syntax, you can only use the value of the current element. In the second syntax, you can use both the key and the value.

``` {data-lang="php"}
//Say we want to send every user a "personalized" email
$user_list = ["Ginty", "Juan", "Juan's Brother", "Juan's Guineapig", "BATMAN"];

foreach($user_list as $user) {
    $message = "Hello, $user. Thanks for using our service. Regards, the team.";
}

//Now suppose we want to tell the user how many others have signed up for the service before him/her foreach($user_list as $rank => $user) {
    $message = "Hello, $user. Thanks for using our service. $rank people have gone before you, and are still happy! Regards, the team.";
}
```

## The break Keyword

Sometimes you want to break out of a loop prematurely. For example, if you use a loop on an array to find a certain combination of values, you can stop the loop once it has been found. To exit the current loop, use the `break` keyword.

NOTE: If you want to break out of multiple loops at once, you can supply an integer behind the keyword.

``` {data-lang="php"}
$comments = ["Ginty" => "Great post!", "BATMAN" => "I'M BATMAN.", "Juan" => "Wow, I'm never looking at turtles the same way again", "Gandalf" => "Fly, you fools!"];

//We think batman is a very valuable customer, so we want to know if he left a comment
//If so, we don't need to go through the rest of the loop, so we can break out to save resources foreach($comments as $user => $message) {
    if($user === 'BATMAN') {
        echo "Found him.";
        break;
    }
}
```

## The continue Keyword

Instead of completely breaking out of a loop, you can also choose to go to the next iteration prematurely. For example, you could accidentally have some null values in your array, and if that's the case you don't want the rest of the loop code to run (as it will probably throw some errors). To continue to the next iteration, use the `continue` keyword.

NOTE: If you want to skip multiple iterations, you can supply an integer behind the keyword.

``` {data-lang="php"}
//Our super secret spy agency seems to have picked up some weird signal that is going through our servers
$signal = "Kthe liSJo7VnC FJhas0 beeEn2Z6 cONoVmpA0HJrComiYsed. i 93rYepOZeaEHt,6 tPhH52HYe lioVTn hasXJ BPbeeTTnK V2cKLomIpr7Y3TSom85ised.";

//Juan thinks that we can retrieve the original message by cutting away all numbers and capital letters
$actual_message = ""; for($i = 0;$i
"
  slug: "php-loops"
  cat: "Website"
  subcat: "PHP"
  video: ""
  diff: 3
  quiz: ""
-
  id: 435
  title: "[PHP] Control Flow II"
  post: "Last chapters introduced lots of useful blocks we can use to control the flow of a system, and before we go on to more exciting stuff, I want to provide some alternative syntaxes that might come in handy someday. I'd also like to introduce a very useful feature: inserting the contents of other PHP files into the current file.

The switch Statement

Suppose that we have a system that checks for multiple states in a sign up process. If a user clicks sign up, we start at state 0, where he can choose a name. When finished, we go to state 1, where the user can input his email. This goes on until we've reached state 20.

Now, we could use an if---elseif---else block to check for all those states, but I wouldn't like to be in your position if you had to write that out. Instead, for checking the same expression against different values, we can use the more readable switch statement. The syntax is:

switch(expression) {
    case value1:
        code
    case valuen:
        code
}

This checks the expression against the different cases, and executes the code underneath a case if it matches. So, in normal language: in case the expression is this value, execute the code underneath it.


//A system for leveling up users if they do something awesome on your website
$level = 2;
$status = "";

//OLD CODE if($level == 0) {
    $status = "Beginner";
} else if($level == 1) {
    $status = "Professional";
} else {
    $status = "Wizard";
}

//NEW CODE switch($level) {
    case 0:
        $status = "Beginner";
    case 1:
        $status = "Professional";
    case 2:
        $status = "Wizard";
}
```

The switch statement, however, by default executes *everything* underneath a certain case\-\--which is called falling through cases. This can be useful if you want to execute multiple blocks of code on certain occasions, but more often than not you don't want it. To break out of the statement we\-\--not surprisingly\-\--use the `break` keyword again.

``` {data-lang="php"}
$result = 0;

switch($value) {
    case 0:
        $result++;
        break;
    case 1:
        $result += 5;
    case 2:
        $result -= 5;
        break;
}

//If $value is 0, $result will be 1
//If $value is 1, $result will be 0
//If $value is 2, $result will be -5
```

Lastly, just as the *else statement*, we would like to have a default block of code that should be executed if all the other cases are not matched. For this, we use the `default` keyword.

``` {data-lang="php"}
$search_query = "Panda";

switch(strtolower($search_query)) {
    case "tiger":
        //Display the page about tigers
    case "panda":
        //Display the page about pandas
    default:
        //Display the page with an overivew of all animal species
}
```

## The Alternative Syntax

For most of its control structures, PHP offers an alternative syntax that you may or may not like better. This alternative syntax only replaces the opening and closing braces ( `{ }` ). It can be applied to the *if, else if, else, for, foreach*, and *switch* statements.

The opening brace is replaced with a colon ( `:` ). The closing brace is replaced by a word that depends on the control structure: *endif*,
*endfor*, *endforeach*, and *endwhile*.

``` {data-lang="php"}
//Regular syntax if($post_category == "") {
    echo "This post was unassigned";
} else {
    echo "Category: $post_category";
}

//Alternative syntax if($post_category == ""):
    echo "This post was unassigned"; else:
    echo "Category: $post_category"; endif;
```

The rest of the syntax is the same, and their function is identical. So, it's mostly a matter of preference.

NOTE: Do not, however, mix braces and this alternative syntax in one code block.

## The goto Keyword

Ye be warned! The `goto` keyword is powerful, but evil. With it, you can jump to any other part of the program any time you want. This can save your life, but it also makes code unreadable and can easily lead to indecipherable errors. If you're in a situation you feel you should use this keyword, you should first check with yourself: is there really no way to restructure this program to solve all my problems?

Let's see how it works. To be able to specify where we want to jump to, we need to *label* a certain position in the code. This is done with the simple colon syntax:

`some_label:`{.longsyntax}

Note that this label is *not* a string, and doesn't need quotes around it. The syntax for going to that label is then

`goto some_label;`{.longsyntax}

``` {data-lang="php"}
$x = 0; my_label: $x++; if($x < 10) {
    echo $x;
    goto my_label;
}
//Prints 123456789

//But please, just use loops (or functions) instead.
```

## Including Code

As promised, PHP allows you to easily import the contents from another PHP file. For example, most websites import the same PHP file containing the header/navigation at the top of every page. This way, if they ever were to change the navigation, they can just edit that single PHP file and everything will be fine.

Because this functionality so important, it's a *language construct*
(just as `echo`), and uses functions that don't need parentheses around the parameter. In fact, PHP is faster without the parentheses. There are four functions for including code, all with slight differences:

  ----------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------
  Function                      Description
  `include "pathtofile"`        Includes the file. If it can't find the file at the path specified, it will search the current file's directory. If that fails, it emits a warning.
  `require "pathtofile"`        Same as include, but if it can't find the file, it throws an errors and halts further execution.
  `include_once "pathtofile"`   Same as include, but checks if the file has already been included somewhere. If that's the case, it doesn't do anything.
  `require_once "pathtofile"`   Same as require, but checks if the file has already been included somewhere. If that's the case, it doesn't do anything.
  ----------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------

So, if your program strictly depends on a file, use `require`. Otherwise, use `include`.

``` {data-lang="php"}
/** content of header.php **/


/** content of footer.php **/


/** Every other page on the website **/

  lots of HTML code
```

" slug: "php-control-flow-II" cat: "Website" subcat: "PHP" video:
"" diff: 3 quiz: "" - id: 436 title: "\[PHP\] Functions" post: "

Before we can start talking about the God of all data types (Objects), I want to talk about functions and variable scope first. Not only are they insanely useful to learn and use early on, they also play a large role in understanding Objects.

We've already seen many of PHP's built-in functions (although there are many more to come), and this chapter will explain how you can create your own such functions.

\> A function is a block of statements that can be used repeatedly by calling it

*Hmm, repeating a set of statements\-\--what's the difference with a loop?* The difference is huge. A function can be defined anywhere within the program, but the code inside will only be executed once you call it. Furthermore, you can call the function from anywhere, anytime you want, whilst loops are rooted to the spot and can't be called.

## Creating a Function

To define your own function, use the **function** keyword (ain't programming straightforward, eh?):

`function some_function_name() {     code }`{.longsyntax}

Naming your own functions follows the same rules as naming variables. Just as built-in PHP functions, the name is case-insensitive.

Then, to call the function from anywhere, simply use the syntax you're already used to:

`some_function_name();`{.longsyntax}

NOTE: Yes, even when a function takes no parameters, you still need to use the parentheses to tell PHP we're looking for a function with that name. We'll look at functions with parameters next.

``` {data-lang="php"} function print_welcome() {
    echo "Welcome everybody!";
}

print_welcome();
```

## Parameters & Arguments

Like we saw with the built-in ones, functions work at their best when they take a few parameters. You already know how to pass arguments to the function, namely with

`some_function_name(arg1, …, argn);`{.longsyntax}

But, how do we program the function to be able to accept these arguments and do something with them? For that we use the following syntax:

`function some_function_name($par1, …, $parn) {     code }`{.longsyntax}

Remember that when *calling* the function we pass in actual values
(arguments), while in the function *definition* we only define variable names (parameters) to hold those values.

``` {data-lang="php"}
//Here we define the function and its parameters function print_welcome($name, $time) {
    echo "Welcome $name on this lovely $time.";
}

//Here we can pass in the arguments for every parameter print_welcome("Juan", "afternoon"); //Prints: Welcome Juan on this lovely afternoon. print_welcome("Batman", "night");   //Prints: Welcome Batman on this lovely night.
```

## Defaults

Times will come when you have a crucial function that can't be allowed to fail. In those cases, you can supply a *default* value for parameters. If no argument is passed in when the function is called, the function will use the defined default value instead. The syntax is what you'd expect:

`function some_function_name($par1 = default_value) {     code }`{.longsyntax}

``` {data-lang="php"} function print_welcome($name, $time = "day") {
    echo "Welcome $name on this lovely $time.";
}

print_welcome("Juan", "afternoon"); //Prints: Welcome Juan on this lovely afternoon. print_welcome("Batman");    //Prints: Welcome Batman on this lovely day.
```

## The return Statement

All these functions are nice, but you might struggle to find a use for them. Well, remember that nearly all built-in PHP functions *returned* something? For example, the `in_array()` function returned a value
`true` (if the element was in the specified array) or `false` (if not).

We can do that with our own functions as well. In fact, it's so important, that it has become a *language construct* again. The syntax for returning something is

`return value;`{.longsyntax}

When a return statement is executed, the function returns the value after it, and immediately stops executing the rest of the function. This can be useful, because you don't want to waste resources on executing other code (or even returning other values) when you've already found your value.

``` {data-lang="php"} function find_highest($x, $y, $z) {
    $current_highest = $x;
    if($y > $current_highest) {
        $current_highest = $y;
    }
    if($z > $current_highest) {
        $current_highest = $z;
    }
    return $current_highest;
}

$max_number = find_highest(4,10,-2);    //$max_number is 10
$max_number = find_highest(0, 0, 1000); //$max_number is 1000
```

## Variable Functions

There's an alternative syntax for creating functions. Instead of defining a function separately from the rest of the code, you can put a function inside a variable. The variable is then said to be *callable*, and the syntax is:

`$some_function_name = function () { code };`{.longsyntax}

Its functionality is identical to the other syntax, and the other syntax is usually regarded as more easily readable and maintainable. *Then why would I want to do this?* Because this way, you can change functions on the fly! You can assign a different function to the same variable name any time you want, and from that moment on every call made to that variable will use the new function.

NOTE: The dollar sign is part of the function name, don't forget to include it.

``` {data-lang="php"}
$greeting = function() {
    echo "Welcome everybody!";
};

$greeting(); //Prints: Welcome everybody!


$greeting = function() {
    echo "Goodbye my friends!";
};

$greeting(); //Prints: Goodbye my friends!
```

## Return Types & Type Hinting

Because functions usually contain important functionality, it's common to check whether the parameters are of the right data type, and whether the returned value is of the right data type. It would be a pain to have to write lots of if-statements to check those data types, which is why PHP has **return types** and **type hinting**.

To tell PHP that a function should return a value of a certain data type, use:

`function some_function() : type { code };`{.longsyntax}

If the returned value is not of that type, PHP throws an error and quits. If your function shouldn't return anything, use return type
**void**.

``` {data-lang="php"}
//Signing in the user should return true if succeeded, false if not (thus, a boolean value) function sign_in_user() : bool {
    //This line will be explained next chapter
    global $username_correct, $password_correct;
    
    if($username_correct && $password_correct) {
        return true;
    } else {
        return "SOMETHING WENT WRONG";
    }
}

$username_correct = true;
$password_correct = true;
$login = sign_in_user(); //$login is true

$username_correct = true;
$password_correct = false;
$login = sign_in_user(); //PHP throws an error and quits executing, because we returned a string.
```

To tell PHP that certain parameters should be of certain data types, use

`function some_function(type $par1, …, type $parn) { code };`{.longsyntax}

Again, if these conditions are not met, PHP throws an error and kills a kitten. As you can see, using these return types and type hinting is completely optional\-\--functions would work just fine without them\-\--but it's generally recommended to use them, as it makes your code clearer and less error prone.

``` {data-lang="php"} function find_highest(int $x, int $y, int $z) {
    $current_highest = $x;
    if($y > $current_highest) {
        $current_highest = $y;
    }
    if($z > $current_highest) {
        $current_highest = $z;
    }
    return $current_highest;
}

$max_number = find_highest(4,10,-2);    //$max_number is 10
$max_number = find_highest(0, "two and a half", 1000); //ERROR
```

" slug: "php-functions" cat: "Website" subcat: "PHP" video: "" diff: 3 quiz: "" - id: 437 title: "\[PHP\] Scope" post: "

Last chapter proved to use that functions kind of live in their own world; they coexist with the rest of the code in a file, but they are only executed once called, and have their own set of parameters. So, the questions that begs asking is: can functions interact with the rest of the code, and if so, how?

For example, what happens if one of our parameters has the same name as a variable declared somewhere else? We could frantically start adding random letters behind parameter names to make them distinct, but that's not the best way to go. Instead, PHP uses *scope*.

\> Scope refers to the part of a program where a certain variable is available

A variable's scope can be *global*, *local*, or *static*.

## Global

Any variable declared *outside* of a function is automatically global. It can be accessed from anywhere within the program, except from within functions.

``` {data-lang="php"} function multiply() {
    $x *= 2;
}

$x = 5;
$x += 5;    //Refers to the same $x, $x is no 10 multiply(); //Gives an ERROR, as the function doesn't know the global variable $x
```

## Local

Any variable declared *inside* of a function is automatically local. It can be accessed only from within that specific function.

This is usually what you want, but sometimes you want to be able to change or use global variables within the function. To do so, you can tell PHP to use the global versions of a variable, with the `global` keyword:

`global $var1, …, $varn;`{.longsyntax}

``` {data-lang="php"} function multiply() {
    global $x, $y;
    $x *= 2;
    $y *= 4;
}

$x = 4;
$y = 2; multiply(); //$x and $y are now 8
```

If you intend on using both local and global versions of a variable
(which can be confusing), there's an alternative syntax. PHP automatically stores all global variables in an array called `$GLOBALS`, and we can access elements of that array if we want the global version of a variable.

``` {data-lang="php"} function multiply() {
        //Here, $x is 16
    $x = 16;
    $GLOBALS['x'] *= 2;
}

$x = 4; multiply(); //Here, in global scope, $x is 8
```

## Static

Lastly, to bridge the gap between local and global scope, there's static scope. If you define a static variable within a function, it will only be usable within that function *but* it won't be deleted when the function ends. To do so, simply use the `static` keyword:

`static $var = value;`{.longsyntax}

It is important to note that static variables are only assigned a value if they don't have a value yet. This is useful, for you can call the same function multiple times, but only the first time is a variable initialized/reset. You can only initialize static variables to a literal value though, not an expression (such as another variable).

``` {data-lang="php"}
//You'd think that the $count variable would be reset each time, but it's only set to zero the first time it's called function counter() {
    static $count = 0;
    $count++;
    if($count >= 3) {
        echo "GO!";
    }
}

counter(); counter(); counter(); //Prints: GO!

echo $count; //Prints an undefined variable warning
```

NOTE: Static variables are still local to that particular function\-\--you can't mindlessly use them in other functions.

## Constants

This is great, but what if we want like a *super-static variable*\-\--one that is accessible anywhere? Well, we can't easily do that. (They do exist, and are called *superglobals*, but we can't define them ourselves.) PHP does provide the ability, however, to define a *constant* that can be used and accessed anywhere.

A constant is nothing more than a variable that can't be changed. So it's simply a value that is the same for the entire program, which you can access any place, any time.

To define a constant, use

`define("name", value [, case_insensitivity]); const name = value;`{.longsyntax}

If the last parameter is set to `true`, the constant is case-insensitive. (It's case-sensitive by default.) Also, the `const` keyword can only be used in global scope.

To use a constant, you simply call it by its name (*without* quotes).

``` {data-lang="php"} function define_my_constant($name, $value) {
    define($name, $value);
    echo "Created constant $name with value $value";
}

//Even though the constant is created within the function, it's accessible anywhere define_my_constant("PANDA", "I'll Bamboo You!");

echo PANDA; //Prints: I'll Bamboo You!

PANDA = "No, you won't"; //Will give a syntax ERROR - you can't change a constant
```

NOTE: Again, constants follow the same naming rules as variables and functions.

## References

The only thing that is really tricky when it comes to scope, is applying it to references. We've seen that references are a great way to point one variable to another, and they are a great way to bridge the gap between scopes and code blocks. But there's good and bad things.

*The Good*: You can pass a variable by reference to automatically make it act in the same scope. To do so, simply place the familiar ampersand
( `&` ) in front of the parameter name.

``` {data-lang="php"}
//This works fine function echo_user_count(&$count) {
    echo "There are $count users online at the moment";
}

$user_count = 10; echo_user_count($user_count);
```

*The Bad*: Say we declare a variable inside a function (local scope), and assign it a reference to a variable elsewhere (global scope). Well, when the function ends, the local variable would be removed, in which case the global variable would be removed as well. PHP doesn't want this happening, which means changing referenced variables in a function has *no* effect.

``` {data-lang="php"}
//This does not work fine. It doesn't give an error, it just does nothing. function add_user() {
    $count = &$user_count;
    $count++;
}

$user_count = 10; add_user($user_count);

echo $user_count; //Prints: 10
```

" slug: "php-scope" cat: "Website" subcat: "PHP" video: "" diff: 4 quiz: "" - id: 438 title: "\[PHP\] Objects I" post: "

Finally, finally, finally we arrive at the big guns. The whole course has been building up to this moment, and now we can use all our knowledge to start performing some object magic.

I've briefly mentioned them a few times already, especially in relation with arrays and loops, but *what are objects*? Objects are, essentially, an intuitive and easy way of programming. Instead of using a lot of separate functions, we can group together related information inside one object\-\--just as in the real world. If you want work with multiple blog posts (with lots of metadata attached to them), turn every blog post into a single object. If you want to create collectible items for a browser game, turn every item into an object.

*What's the difference with arrays*? For starters, objects can store key-value pairs as well as functions. Additionally, objects can inherit from or extend other objects\-\--so, for example, you could use one
"master object" to hold all the data that all objects will have in common.

![](media/PHPObjectsClasses.png)

## Classes

Remember this: an object is a single, specific instance of a certain
**class**. Within PHP, you must first define a class, and once that's done you can instance as many objects of that class as you want. Think of classes as blueprints for objects\-\--within them you can define what you want a certain class of objects to look like, but nothing is actually created until you create a new object of that type.

To create a new class, use

`class SomeClass {     code }`{.longsyntax}

``` {data-lang="php"} class User {
    //code that provides all sorts of information about this User
}
```

It's a custom to write classes with capital letters starting each word. This is to make sure you can easily see the difference between creating an object and calling a function later on.

NOTE: Classes follow the same naming rules as variables.

## Creating Objects

To create a new object from an already defined class, use the `new` keyword:

`$var = new SomeClass();`{.longsyntax}

I think the fact that you need to use the *new* word is a good reminder of how objects work; every object you create is unique, even though it shares the same class with other objects. Two cars might be exactly the same, but it's still two separate cars.

``` {data-lang="php"} class User {
    //code that provides all sorts of information about this User
}

//$user_1 and $user_2 are two seperate objects, instantiated from the same class
$user_1 = new User();
$user_2 = new User();
```

## Defining Properties & Methods

As I said, objects can contain key-value pairs and functions. In the case of objects, we call them **properties** and **methods** instead.
(This is to differentiate it from regular variables and functions.)

To create a *property*, one simply defines a variable within the class definition. It's important to note, though, that you can only assign values to the variable\-\--expressions are not allowed. To create a
*method*, one simply defines a function within the class definition.

PHP, however, requires you to say something about the *visibility* of the properties and methods. For safety reasons, we sometimes don't want other parts of the code lurking around in our properties. We have three keywords for that:

-   `public`: the property/method is accessible from anywhere
-   `protected`: the property/method is accessible only from within the
    class itself and inherited classes
-   `private`: the property/method is accessible only from within the
    class itself

``` {data-lang="php"}
/* The user has three properties (username, favrite pet, and password)
   The user has one method (that prints a message) */ class User {
    public $username = "Ginty";
    public $favorite_pet = "Rabbits";
    private $password = "gintyisawesomeyeah";

    public function print_message() {
        echo "Hey there, I am Ginty!";
    }
}
```

NOTE: You can also define constants with the familiar `const` keyword. These are automatically public and need no visibility keyword in front of them.

## Accessing Properties & Methods

To access a property or method, we use the *arrow syntax* ( `->` ):

`$some_object->property; $some_object->method();`{.longsyntax}

``` {data-lang="php"} class User {
    public $username = "Ginty";
    public $favorite_pet = "Rabbits";
    private $password = "gintyisawesomeyeah";

    public function print_message() {
        echo "Hey there, I am Ginty!";
    }
}

$user = new User(); echo $user->username; //Prints: Ginty echo $user->password; //Prints: ERROR cannot access private property 

$user->print_message(); //Prints: Hey there, I am Ginty!
```

NOTE: Leave out the dollar sign when accessing a property. If you do include the dollar sign, PHP will use the *value* of that variable to access a property.

## The \$this Pseudo-variable

The arrow syntax I just introduced isn't just for accessing properties/methods from outside of the object\-\--it's also the only way to access one from within the object. However, how do we access the current object from within the class definition? I mean, is there any way we could access the current object that we're in? Well, we can do so using the `$this` pseudo-variable!

This variable can be used in a class definition to reference the current object, and therefore allows us to access its own properties and methods. You're going to need it a lot.

``` {data-lang="php"} class User {
    public $username = "Juan";
    public $favorite_pet = "Rabbits";
    private $password = "juanisawesomeyeah";

    //Returns true only if $password and $pwd match
    public function check_password($pwd) {
        return ($this->password === $pwd) ? true : false;
    }

    public function print_message() {
        echo "Hey, I am $this->username, and I like $this->favorite_pet.";
    }
}

$user = new User();

$is_password_correct = $user->check_password("juanisawesomeyeah"); //Returns true

$user->print_message(); //Prints: Hey I am Juan, and I like rabbits.

/* As you can see, we can't access the password directly, but we can check if the password we entered is correct (which is more secure than if anyone were to just get the password) */
```

NOTE: I call it a pseudo-variable, as it is a variable\-\--but we can't change it ourselves. It automatically adapts itself to the object in which we're currently executing a function.

## Object Operators

Because objects are so complex, they only allow two operators:

  ---------- ----------------------------------------------------------------------------------------------------------------
  Operator   Description
  `==`       Returns true if both objects have the same properties/methods and values, and are instances of the same class.
  `===`      Returns true if both objects refer to the exact same instance of the same class.
  ---------- ----------------------------------------------------------------------------------------------------------------

How the second (strict) operator works has everything to do with how objects are assigned and copied, which next section is about.

``` {data-lang="php"} class User {
    public $username = "Juan";
    public $favorite_pet = "Tree Kangaroos";
}

$user_1 = new User();
$user_2 = new User();

var_dump($user_1 == $user_2);  //Prints: bool(true) var_dump($user_1 === $user_2); //Prints: bool(false)
```

## Object Assignment

With all the other data types, if you assign one variable to another, the value is simply *copied*. If you wanted to avoid that, you could use a *reference* to make two variables identical.

With objects, it works a little differently. If you assign a variable containing an object to a new variable, an address *pointing* to the object is passed on. This means that both variables will point to the same object and both will edit the same object. But, it's not a reference, as changing one variable will *not* automatically update the other. So, it's a middle-ground between copying and referencing.

``` {data-lang="php"} class User {
    public $username = "Juan";
    public $favorite_pet = "Tree Kangaroos";
}

$user_1 = new User();
$user_2 = $user_1;

$user_2->username = "HE WHO MUST NOT BE NAMED";

//Both $user_1 and $user_2 are now exactly the same object var_dump($user_1); var_dump($user_2);
/* Both print
    object(User)#1 (2) {
      ["username"]=>
        string(24) "HE WHO MUST NOT BE NAMED"
      ["favorite_pet"]=>
        string(14) "Tree Kangaroos"
    }
*/

$user_2 = 0;

//Now $user_1 will contain the original object, but $user_2 is 0. If it were a reference, $user_1 and $user_2 should both have been 0 by now. But objects are not passed by reference.
```

*But, what do I do if I actually want to copy the object?* Well, because objects are supposed to be unique, we call it **cloning**. To do so, use

`$var = clone $obj;`{.longsyntax}

``` {data-lang="php"} class User {
    public $username = "Juan";
    public $favorite_pet = "Tree Kangaroos";
}

$user_1 = new User();
$user_2 = clone $user_1;

var_dump($user_1); var_dump($user_2);
/* Prints
    object(User)#1 (2) {
      ["username"]=>
        string(4) "Juan"
      ["favorite_pet"]=>
        string(14) "Tree Kangaroos"
    }
    
    object(User)#2 (2) {
      ["username"]=>
        string(4) "Juan"
      ["favorite_pet"]=>
        string(14) "Tree Kangaroos"
    }
*/
```

## Object Iteration

We've already seen (in the *Loops* chapter) that you must use the
`foreach` loop to iterate through all the properties and methods of an object. But, there's a subtle difference to be aware of\-\--it will only loop through all the *visible* elements.

So, if the loop is somewhere outside of the class, it will only go through all the *public* properties. But, if it's inside the class definition, it will go through *all* properties.

``` {data-lang="php"} class User {
    public $username = "Juan";
    public $favorite_pet = "Tree Kangaroos";
    private $password = "treesareawesomeyeah";

    public function iterate() {
        foreach($this as $value) {
            echo $value . " | ";
        }
    }
}

$user = new User();

//This prints: Juan | Tree Kangaroos | foreach($user as $value) {
    echo $value . " | ";
}

//This prints: Juan | Tree Kangaroos | treesareawesomeyeah |
$user->iterate();
```

" slug: "php-objects-I" cat: "Website" subcat: "PHP" video: "" diff: 3 quiz: "" - id: 439 title: "\[PHP\] Objects II" post: "

Now that we know how to create objects from our template class, all we really need to do is upgrade the template class to achieve more complex or sophisticated objects.

## Auto-loading

As a project grows in size (as it often does), you're going to be working with lots of classes. It's a custom, therefore, to put every class into its own separate PHP file. So, for example, the class *User* is put in the file *User.php*. This way you can easily keep track of all classes, and simply `include` all the classes you're going to need at the top of a file.

But, it's a lot of hard work to copy around these includes from file to file, which is why PHP allows you to auto-load all your classes. To do so, use

`spl_autoload_register(function($name) {     include ; });`{.longsyntax}

``` {data-lang="php"}
//Say we have classes saved inside the files User.php, Comment.php, BlogPost.php spl_autoload_register(function($name) {
    include "$name.php";
});

//The autoload will automatically load the User.php file when we try to create an object from it.
$user = new User();

//The other two files are not loaded, as we don't need them. Saves time!
```

## Inheritance

One of the best things about objects and classes, is that you can use
*inheritance*. This means that you can create a class that is a child of another class (a "subclass"), and therefore automatically inherits all the properties and methods of its parent. Using this, you can create huge classes that contain some general functionality and variables, and then create subclasses that automatically inherit this general functionality and add their own special bag of tricks.

To create a subclass, simply *extend* another class:

`class SomeSubClass extends SomeParentClass`{.longsyntax}

``` {data-lang="php"} class Product {
    public $price = 10;
    public $manufacturer = "LEGO";
    public $reviews = 9.6;
}

//A product on sale extends the general product class, and adds a discount class SaleProduct extends Product {
    public $discount = 0.8;
}

$new_item = new SaleProduct(); echo "The final price is " . ($new_item->discount * $new_item->price) . " euros.";

//Prints: The final price is 8 euros.
```

NOTE: The parent class must be defined first in the file, otherwise PHP doesn't know what to extend.

## Traits

Instead of inheriting from complete classes, we can also just save a bunch of methods and properties under a certain name, and copy this code around inside other classes. In other words, we let multiple classes share the same *traits*. To create a trait, use

`trait SomeTraitName { code }`{.longsyntax}

To include or *use* it inside some other class, use (not surprisingly)

`use SomeTraitName;`{.longsyntax}

``` {data-lang="php"} class Product {
    public $price = 10;
    public $manufacturer = "LEGO";
    public $reviews = 9.6;
}

trait Discount {
    public $discount = 0.8;
    function calculate_price() {
        return ($this->discount * $this->price);
    }
} 

class SaleProduct extends Product {
    use Discount;
}

$new_item = new SaleProduct(); echo "The final price is " . $new_item->calculate_price() . " euros.";

//Prints: The final price is 8 euros.
```

## Abstract Classes

Remember when I told you about the huge classes and the subclasses? (You should, I *just* told you.) Well, in most cases, you aren't going to create an object from the huge class\-\--you'll only be creating objects from the subclasses.

For example, you could have a general class called "vehicle", and lots of smaller classes called "car" and "truck" that extend this general class. If you were to attach functions to the vehicle class such as
"accelerate" and "brake", all vehicles would inherit this functionality and add their own functionality (such as colour or maximum speed). Now, you can instantiate lots of car and truck objects, but you will never create an object from the vehicle class as it is too general.

In these cases, it's best to make that vehicle class an *abstract class*. To do so, simply use

`abstract class SomeAbstractClass { code }`{.longsyntax}

You can't instantiate such a class, but you can *extend* it. Additionally, you can use the `abstract` keyword in front of methods and properties to force the extending class to define it. (This is useful if subclasses share the same method name but with slightly different functionality.)

``` {data-lang="php"}
//An abstract Item class that contains no real information (it's too general) abstract class Item {
    abstract public $price;
    abstract public $item_id;
}

//A specific LegoItem class that is forced to define the price and item_id properties. In addition, it adds some more information to help the customer. class LegoItem extends Item {
    public $price = 250;
    public $manufacturer = "LEGO";
    public $item_id = 1234
    public $description = "LEGO is fun for all ages! Buy it now, or buy something else. As long as you buy from our webshop.";
}
```

## Anonymous Classes

Lastly, if you only need a simple, one-off object, you can use an anonymous class to create it. This simply means that, instead of placing a call to an existing class after the `new` keyword, you simply type the whole class definition.

``` {data-lang="php"}
$object = new class { public $username = "Ginty"; public $dating_profile = "Looking for a man that likes to dance."; };

echo $object->username; //Prints Ginty, as expected.
```

## Constructors & Destructors

Constructors are very important, as they are what make every object truly unique. For example, say we're making an online chatroom, and we create an object for every user that is currently logged in. This object would then be instantiated from the User class, which means every user would be identical\-\--but they're not, so how do we fix that by giving every object its own ID or username? **Constructors**.

Just after PHP has created a new object, it automatically makes a call to the `__construct()` method on that object. If you haven't defined it, no worries, PHP just goes on with its life.

If you *do* define it, you can use that method to construct the object and tweak its settings. Moreover, did you ever wonder why we need parentheses after the class name when instantiating a new object (like
`new Class()`)? Well, it's because we can pass arguments to that constructor method, just like with any function!

``` {data-lang="php"} class User { 
    public $username; 
    public $favorite_movie;

    //BEHOLD THE POWER OF THE CONSTRUCTOR
    function __construct($usn, $movie) {
        $this->username = $usn;
        $this->favorite_movie = $movie;
    }
};

$user_1 = new User("Juan", "Inception"); //Creates a User object, and sets username and movie echo $user_1->username; //Prints: Juan


$user_2 = new User("BATMAN", "The Dark Knight. Duh."); echo $user_2->favorite_movie; //Prints: The Dark Knight. Duh.;
```

On the other hand, PHP also automatically calls the `__destruct()` method when an object is deleted. There's some subtlety involved here; an object is deleted only if all references to it are gone. So, if two variables hold the reference to the same object, they *both* need to be deleted in order to delete the object.

``` {data-lang="php"} class User { 
    public $username; 
    
    function __construct($usn) {
        $this->username = $usn;
    }

    //BEHOLD THE MIGHTY DESTRUCTOR
    function __destruct() {
        echo "User $this->username has been removed from chat.";
    }
};

$user_1 = new User("Juan"); unset($user_1);

//Prints: User Juan has been removed from chat.
```

## Magic Methods

The methods from last section aren't the only ones that are automatically called by PHP on some occasions\-\--they are part of a larger group called the **magic methods**. All magic methods start with those two underscores ( `__` ). (Which means that you shouldn't use it for non-magic methods.)

Here's a nice overview of all the other magic methods (although, the constructor is by far the most important):

+-----------------------------------+-----------------------------------+
| Magic Method                      | Description                       |
+-----------------------------------+-----------------------------------+
| `__call($name, $arg)`             | Is executed when you try to       |
|                                   | access inaccessible methods.\     |
|                                   | *\$name* holds the name of the    |
|                                   | method\                           |
|                                   | *\$arg* holds an array with the   |
|                                   | arguments you provided            |
+-----------------------------------+-----------------------------------+
| `__callStatic($name, $arg)`       | Is executed when you try to       |
|                                   | access inaccessible static        |
|                                   | methods (more on that later).     |
+-----------------------------------+-----------------------------------+
| `__get($name)`                    | Is executed when you try to       |
|                                   | access an inaccessible property   |
+-----------------------------------+-----------------------------------+
| `__set($name, $val)`              | Is executed when you try to set   |
|                                   | an inaccessible property.         |
+-----------------------------------+-----------------------------------+
| `__isset($name)`                  | Is executed when you check if an  |
|                                   | inaccessible property is set      |
|                                   | (with the `isset()` function)     |
+-----------------------------------+-----------------------------------+
| `__unset($name)`                  | Is executed when you delete an    |
|                                   | inaccessible property (with the   |
|                                   | `unset()` function)               |
+-----------------------------------+-----------------------------------+
| `__sleep()`                       | Is executed just before an object |
|                                   | is serialized (more on that       |
|                                   | later).                           |
+-----------------------------------+-----------------------------------+
| `__wakeup()`                      | Is executed just after an object  |
|                                   | is unserialized.                  |
+-----------------------------------+-----------------------------------+
| `__invoke($arg1, …, $argn)`       | Is executed when you try to call  |
|                                   | an object like a function (like   |
|                                   | `$obj()`)                         |
+-----------------------------------+-----------------------------------+
| `__clone()`                       | Is executed after you've cloned  |
|                                   | an object                         |
+-----------------------------------+-----------------------------------+
| `__toString()`                    | Is executed when you try to cast  |
|                                   | an object to a string.            |
|                                   | (Basically, you can use it to     |
|                                   | define how you want the object to |
|                                   | be cast to a string.)             |
+-----------------------------------+-----------------------------------+
| `__debugInfo()`                   | Is executed when you display      |
|                                   | information about an object (with |
|                                   | `var_dump()`), and returns how    |
|                                   | that information should be        |
|                                   | displayed.                        |
+-----------------------------------+-----------------------------------+
| `__set_state($properties)`        | Is called when a class is         |
|                                   | exported with `var_export()`.\    |
|                                   | *\$properties* holds an array     |
|                                   | containing the properties that    |
|                                   | should be exported.               |
+-----------------------------------+-----------------------------------+

``` {data-lang="php"} class User { 
    private $password = "pinkelephant"; 
    
    function __get($prop) {
        echo "Denied access to $prop. Threat has been removed.";
        
        //Reveal password only if current user is administrator
        if($current_user == "Administrator") {
            echo $this->$prop;
        }
    }

    function __clone() {
        echo "Somebody tried to clone this object.";
    }
};

$user_1 = new User();

$user_copy = clone $user_1;
//Prints: Somebody tried to clone this object (but cloning continues anyway)

$user_password = $user_copy->password;
//Prints: Denied access to password. Threat has been removed.
```

" slug: "php-objects-II" cat: "Website" subcat: "PHP" video: "" diff: 4 quiz: "" - id: 440 title: "\[PHP\] Superglobals" post: "

We have, so far, been fairly on the PHP side of things\-\--create all sorts of variables and functions, and do stuff with them. However, how do we relate this to HTML and the user? How do we send input from HTML to the server? How do we retrieve data from the server and do something with it in the HTML? How do we create and upload files?

These questions won't get a definitive answer in this chapter, as it will take much more time than that to explain it, but we will start with something that lies at the basis of all of them: **superglobals**.

Superglobals are variables (usually associative arrays) that can be accessed from *anywhere* within the program, and which are automatically set by PHP to the right value. For example, a superglobal could contain the current URL of the page you're on.

There's 8 superglobal variables available (and you've already seen the first one):

-   `$GLOBALS`
-   `$_SERVER`
-   `$_POST`
-   `$_GET`
-   `$_FILES`
-   `$_ENV`
-   `$_COOKIE`
-   `$_SESSION`

As you can see, superglobals have uppercase names starting with `$_`. I recommend you keep this naming system for the superglobals, and don't use it on your own variables, to avoid confusion.

As you can also see, there's a lot of them with lots of different things they can do\-\--and all of it's important. Therefore, I will cover the simpler superglobals in this chapter, and the others subsequently in their own chapters. If you want to know *all* the things you can do with a superglobal, check the [PHP Manual](http://php.net/manual/en/language.variables.superglobals.php)

## \$\_SERVER

This superglobal contains information about the server\-\--more specifically, the host you're on, its settings, and the filename you're currently accessing. Its most important keys are:

  --------------- -----------------------------------------------
  Key             Description
  `PHP_SELF`      The *relative* path to the current file
  `SCRIPT_NAME`   The *absolute* path to the current file
  `SERVER_ADDR`   The IP address of the server
  `SERVER_NAME`   The name of the server
  `REMOTE_ADDR`   The IP address of the user accessing the page
  `REQUEST_URI`   The URL used to access the page
  --------------- -----------------------------------------------

``` {data-lang="php"}
$get_url = $_SERVER["SCRIPT_NAME"];

//If we're on the article page of our blog... if($get_url == '/blogArticles.php') {
    //...display the article
} else {
    //...display the homepage
}
```

## \$\_ENV

This superglobal is used for managing *environmental variables*. These are simply variables that are only available within a certain environment. Which data it holds, however, depends on the server and of course environment, which means I won't say anything more about it.

It can also be used to pass variables between files, but I recommend using the `$_SESSION` superglobal for that, which is discussed in the
*Cookies & Sessions* chapter.

## Magic Constants

A slightly downplayed version of the superglobals, are the **magic constants**. They are the regular constants that you're used to, with one difference: PHP changes their value based on where you call the constant from. They are constants, but they're not necessarily constant. Magic, right?

So, instead of being a superglobal *variable*, they are superglobal
*constants* that you can access, but automatically change for you. For example, one of the magic constants contains the current line number that is being executed when you call it. They are usually used together with superglobals, but they can also stand on their own.

The 8 magical constants are:

  ----------------- -----------------------------------------------------------------------------
  Magic Constant    Description
  `__LINE__`        The current line number of the current file
  `__FILE__`        The full path and filename of the current file
  `__DIR__`         The directory of the current file.
  `__FUNCTION__`    The function that's currently being executed
  `__CLASS__`       The class name of the object
  `__TRAIT__`       The trait name of the object
  `__METHOD__`      The method that's currently being executed
  `__NAMESPACE__`   The name of the current namespace (more on that in the Advanced PHP course)
  ----------------- -----------------------------------------------------------------------------

``` {data-lang="php"} class Post {
    public $content;
    public $time;
    public $category;

    function __construct($a, $b, $c) {
        $this->content = $a;
        $this->time = $b;
        $this->category = $c;
        echo "Created object of class " . __CLASS__ . " at line " . __LINE__;
    }
}

$new_post = new Post("Hello world!", "31 May 2016", "Test Posts");
//Prints: Created object of class Post at line 11
```

NOTE: You can define more if you want, but that's for another time.

" slug: "php-superglobals" cat: "Website" subcat: "PHP" video:
"" diff: 3 quiz: "" - id: 441 title: "\[PHP\] Forms & Dynamic Pages" post: "

The only way to let the user send data to a server (such as login information or a search query) is by using forms. Sometimes these forms may be disguised as something else\-\--such as a zone where you can drop files to upload them\-\--but in the end they will always work like a form.

And if you remember from learning HTML, forms have two methods for sending data: `GET` and `POST`. (You can set this on a form by setting the `method="GET"` or `method="POST"` attribute.)

Both methods are a way of sending extra data towards a file you're requesting from the server\-\--basically, it's a way to use *cross-file variables*. For example, when I login with my username and password, I am sending the input as two variables towards another page that checks whether they are correct and then logs me in. Both methods have their advantages and disadvantages, and you'll typically use them in different situations.

![](media/PHPGETvsPOST.png)

## \$\_GET

You've probably come across URLs that look something like

*file.php?id=blabla&name=vlavla*

Even though it may look odd, there's nothing wrong about it. The question mark behind the file name ( `?` ) signals PHP that there's some variables to come. Each variable is passed using `name=value`, and every subsequent variable definition separated by an ampersand ( `&` ).

This way, we can pass as many values as we want to another file. The great thing is, though, that this is just a URL you can access. So, we can let a form pass that data for us, or we can just provide links to URLs with the variables attached.

For example, we could create an anchor tag with the `href` attribute set to `"file.php?id=blabla"`, to create a link that automatically goes to the file *file.php* and passes along the *blabla* value.

The `$_GET` superglobal works by "getting" these variables from the URL. To do so, simply use

`$_GET["variablename"];`{.longsyntax}

``` {data-lang="php"}
//Say we're accessing the URL item.php?id=25&name=LEGO

echo $_GET['id'];   //Prints 25 echo $_GET['name']; //Prints LEGO
//Using this information, we can load the information on the right product and display it to the user
```

This method is typically used for dynamic pages. For example, every tutorial on this website is loaded by a single file! All I have to do is pass the right ID to the file using the syntax described above, get the value of that variable from within the file, and use that to load the right information from my database. I don't have to create a separate file for every tutorial. (Which would, frankly, be a very, very bad thing to do.)

NOTE: The reason you're not seeing any of this in your browser bar is because I'm rewriting my URLs using Mod Rewrite. But that's beyond the scope of this tutorial.

## \$\_POST

Alternatively, you can pass variables to a file without making the URLs look ridiculous. Additionally, the *POST* method is safer to use, as users can't see or temper with the data being passed on. This may seem like it's always the better option, but the downside is that you can only use them with forms. Essentially, you can remember that the form
"*posts*" the variables to the other page.

*How does PHP know which variables to post?* PHP posts all variables within a form that have the `name` attribute set. This means that you can't have colliding names, or PHP wouldn't know which one to send.

To access a cross-file variable using the `$_POST` superglobal, use

`$_POST["variablename"];`{.longsyntax}

``` {data-lang="php"}
//Say we're accessing the URL login.php, with variable username and password posted to it

if($_POST['username'] === "Juan" && $_POST['password'] === "1234") {
    //sign in the user
} else {
    //tell the user the username/password is incorrect
}
```

## A Simple Form

Here's a simple form to show you how superglobals and HTML come together.

``` {data-lang="php"}
//Code from the home page

  
  
  


//Code from actionPage.php
```

## Some Additional Notes

Passing data between files can be a tricky business, especially if that data is sensitive. The number one rule to PHP security is to *never pass sensitive data using the GET method*.

Besides that, however, there are numerous ways that a user can
(consciously or not) play with your system by trying to input stuff you didn't expect. If you're going to use the variables in a harmless way, there's no reason to worry much about security.

On the other hand, if you're working with user information or interacting with your server, there's surely going to be hackers trying to get access to your server. And you don't want that.

The first thing you usually want to do is make sure those cross-file variables are actually set, and set to the right type. This is normally done with `isset()`.

``` {data-lang="php"}
//If no username or no password is set if(!isset($_POST['usn']) || !isset($POST['pwd'])) {
    //return to the homepage with an error
}
```

Then, you could use string operations to cut out any words or characters you don't want. There are better ways, however, and I will explain much more about internet security in the ***Advanced PHP*** course.

My last note is about another superglobal I intentionally didn't mention: `$_REQUEST`. It holds both the *GET* and *POST* variables. I don't think you should ever use it, as it's just redundant and unsafe. Nevertheless, I wanted you to know it's out there in case you ever encounter it in the wild.

" slug: "php-forms-dynamic-pages" cat: "Website" subcat: "PHP" video: "" diff: 3 quiz: "" - id: 442 title: "\[PHP\] Files I" post: "

Everything on a server is a file. The PHP programs we've been executing all the time are files, images are files, CSS stylesheets are files, and so on. So, it's not unreasonable to expect that PHP might have to deal with other files at some time. A typical use case is, for example, uploading files to a server, or displaying the contents of a text file.

I must warn you though. Just as with dynamic pages, users can
(accidentally or not) do things with files you don't want. Because files are actually stored on a server, and therefore somewhat permanent, you should make sure they don't get extremely large and don't get erased. That said, let's start looking at files.

## File Creation/Opening

Before we can start doing anything with a file, we need to *open* it. This is done with

`$file = fopen("path/to/file.ext", permissions);`{.longsyntax}

The *permissions* parameter is a string that determines what we intend to do with the file (read the contents, overwrite it, etcetera). More on that in next section.

*What if the file doesn't exist?* Fortunately, PHP is a real go-getter. If it can't find the file you're looking for, it **creates** the file for you, and then opens it! This is only the case, however, if you've set the permissions to anything but reading the file.

``` {data-lang="php"}
//This opens the file user_settings.txt for reading its contents
$file = fopen("user_settings.txt", "r");
```

## Permissions

As promised, here's a table of all the permissions we can give ourselves for a file:

  ------------- -------- ----------------------------------------------------------------------------------------------------
  Type          Symbol   Description
  Read          `"r"`    Only read the contents of a file, from the start.
  Write         `"w"`    Erase all data, and start writing in the file from the start. (This is also called *overwriting*.)
  Append        `"a"`    Write data to a file, from the end. (So it doesn't overwrite anything.)
  Read/Write    `"r+"`   Allows you to read and write into a file (a combination of *r* and *a*), from the start
  Write/Read    `"w+"`   Allows you to read and overwrite a file (a combination of *r* and *w*)
  Read/Append   `"a+"`   Allows you to read and write into a file (a combination of *r* and *a*), from the end.
  ------------- -------- ----------------------------------------------------------------------------------------------------

``` {data-lang="php"}
//This opens the file user_settings.txt and erases all contents
$file = fopen("user_settings.txt", "w");

//This simply opens the file user_settings.txt, and will let you append extra information at the end
$file = fopen("user_settings.txt", "a");

//If the file user_settings.txt didn't exist, both would first create the file and then open it
```

## Reading

There's two ways of reading from a file: *load a certain amount of characters once* or *line by line*.

The syntax for the first method is

`fread($file, length);`{.longsyntax}

The *file* parameter always points to an opened file, whilst the
*length* parameter specifies the amount of characters to load. If you want to load all the characters within the file, simply set the length to:

`filesize("path/to/file.ext");`{.longsyntax}

``` {data-lang="php"}
/* Content of user_settings.txt:
    maximum_upload_size=10;maximum_download_size=100;
*/

$file = fopen("user_settings.txt", "r"); echo fread($file, filesize("user_settings.txt"));

//Prints: maximum_upload_size=10;maximum_download_size=100;
```

The syntax for the second method is

`fget($file);`{.longsyntax}

The first time you call it, this gets you the first line of the file. The second time you call it, it returns the second line, and so on.

``` {data-lang="php"}
/* Content of user_settings.txt:
    maximum_upload_size=10;
    maximum_download_size=100;
*/

$file = fopen("user_settings.txt", "r"); echo fget($file); //Prints maximum_upload_size=10; echo fget($file); //Prints maximum_download_size=100;
```

## Writing/Appending

To write into a file, all you have to do is use a single function

`fwrite($file, $new_data);`{.longsyntax}

This works for both the `w` and `a` permissions, as both write into a file, but the first one just erases the content before it starts writing.

``` {data-lang="php"}
/* Content of user_settings.txt:
    maximum_upload_size=10;\n
*/

$file = fopen("user_settings.txt", "a"); fwrite($file, "maximum_download_size=100;"); 
/* Now user_settings.txt contains:
      maximum_upload_size=10;
      maximum_download_size=100;
*/

$file = fopen("user_settings.txt", "w"); fwrite($file, "THE USER SETTINGS HAVE BEEN HACKED"); 
/* Now user_settings.txt contains: 
      THE USER SETTINGS HAVE BEEN HACKED
*/
```

NOTE: If all you want to do is erase a file, without writing in it, you can of course just open the file using the **w** permission and don't write anything in it. This is called *truncating*.

## Deleting

If you want to delete a file, you don't have to open it first. You can make it vanish with

`unlink("path/to/file.ext");`{.longsyntax}

NOTE: Of course, when using the unlink function somewhere, always make sure you are deleting the right file.

## Closing

When you're done playing with a file, you should always close it. This is to prevent security issues, save memory, and make sure you're always opening the right file before writing/reading. To do so, use

`fclose($file);`{.longsyntax}

## File Functions

As stated earlier, file security is a big thing. Before you do any dangerous file operation, you often want to check if the file you're looking for is already there or not, whether the type of file is correct, and whether you even have permission to change the file. For this, we have several file functions, which will also play a big role in next chapter.

To check if a file has a certain property, you can use the following functions.

+-----------------------------------+-----------------------------------+
| Function                          | Description                       |
+-----------------------------------+-----------------------------------+
| `is_file(path)`                   | Returns true if the path leads to |
|                                   | a file, false if it's a          |
|                                   | directory or doesn't exist.      |
+-----------------------------------+-----------------------------------+
| `is_readable(path)`               | Returns true you have permissions |
|                                   | to read the file                  |
+-----------------------------------+-----------------------------------+
| `is_writeable(path)`\             | Returns true if you have          |
| `is_writable(path)`               | permissions to write to the file  |
+-----------------------------------+-----------------------------------+
| `is_uploaded_file(path)`          | Returns true if a file has been   |
|                                   | uploaded by the script            |
+-----------------------------------+-----------------------------------+
| `is_executable(path)`             | Returns true if the file is       |
|                                   | executable                        |
+-----------------------------------+-----------------------------------+
| `is_dir(path)`                    | Returns true if the path is a     |
|                                   | directory, false if it's a file  |
|                                   | or doesn't exist.                |
+-----------------------------------+-----------------------------------+

``` {data-lang="php"}
//If a settings file exists... if(is_file("user_settings.txt")) {
    //...update some of the settings
} else {
    //...if not, tell the user something went wrong
}
```

To get specific information about a certain file, use

  --------------------- ---------------------------------------------------------------------------------------------------
  Function              Description
  `filesize(path)`      Returns the size of the file ( = the amount of bytes/characters)
  `file_exists(path)`   Returns true if the file exists, false otherwise.
  `filetype(path)`      Returns the type; file or directory
  `basename(path)`      Returns the last element of the path (which is usually the current file or directory you're in).
  --------------------- ---------------------------------------------------------------------------------------------------

``` {data-lang="php"} if(filetype($user_uploaded_file) == "image/png") {
    //it's an image, upload it to our images folder
} else {
    //abort mission, the user tricked us!
}
```

## Shorthand Functions

Lastly, if you're planning on reading/writing a file only once, there are easier ways to do so (instead of having to open and close it every time).

To read a file and automatically put all the lines of a file inside an array, use

`$arr = file(path);`{.longsyntax}

To get all the characters between position offset and (offset + maxlen), use

`file_get_contents(path [, false, null, $offset, $maxlen]);`{.longsyntax}

To write data to a file, use

`file_put_contents(path, $data);`{.longsyntax}

``` {data-lang="php"}
//If new data arrives... if($new_data) {
    //...immediately write it into the data.txt file
    file_put_contents("data.txt", $new_data);
}
```

NOTE: I've glossed over lots of functions and optional parameters here, but they don't make sense until you are reading the ***Advanced PHP*** course, so you can find them there!

" slug: "php-files-I" cat: "Website" subcat: "PHP" video: "" diff: 3 quiz: "" - id: 443 title: "\[PHP\] Files II" post: "

Last chapter discussed pretty elementary file operations\-\--creating, reading, writing, deleting. In this chapter, we'll be putting those to good use by looking at *downloading*, *uploading*, and *directories*
(and all functions that come with it). This is also the moment we get to see the `$_FILES` superglobal in action.

## Downloading

Some file types (such as `.zip`) are automatically downloaded by the browser, but most are just opened or ignored. This isn't very useful, especially when downloading is a big deal for your website (e.g., if you're running an online file service or want to allow users to download something they created in your web app). It would therefore be nice if we could force PHP to download a file, and as you might have expected, we can!

The trick is to not go to the file's URL, but instead use a PHP script to fetch the file and push it to the browser. For this, we have the function

`readfile("path/to/file.ext");`{.longsyntax}

But, simply reading the file isn't enough\-\--as we've seen in last chapter, that alone doesn't download anything. So, we need to tell the browser that we want the data to be treated as a file to be downloaded, and to do so we use **headers**. For now I'll just show you how to use them without an in-depth explanation, but be sure to check out all the cool stuff you can do with them once you feel like it.

``` {data-lang="php"}
$file = 'awesomeImage.png';

//If the image exists... if (file_exists($file)) {
    //...force the browser to download it instead of display it
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="'.basename($file).'"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));

    //...and actually request the file and download it
    readfile($file);
    exit;
}
```

## Uploading

To upload files we need to use forms, again. HTML has a special element that allows you to select a file, and by using the POST method, we can give this file to PHP to upload it.

![](media/PHPUploadingFiles.png)

A simple form that allows uploading looks like this:

``` {data-lang="html"}
  
  
```

When you submit the form, PHP automatically uploads the file under a temporary name to a temporary directory. It's your job to check if the file fits your requirements, and then move it to where you want.

All the information related to file uploads is saved in the `$_FILES` superglobal. Just as with the *GET* and *POST* method, you can access the file by name with

`$_FILES["name"]`{.longsyntax}

This returns another array with these 5 properties:

  ------------ ---------------------------------------------------------------------------------------------------------------------
  Syntax       Description
  `name`       Path to the original file
  `tmp_name`   Path to the temporary file on the server
  `type`       The type of the file (image/jpeg, image/png, and so on)
  `size`       The size of the file (in bytes)
  `error`      An error code. If this is 0, everything went fine. If it's not, something went wrong during the uploading process.
  ------------ ---------------------------------------------------------------------------------------------------------------------

``` {data-lang="php"}
//Say we need to check whether the upload was an image, and whether its size isn't too large if($_FILES["file"]["type"] == "image/jpeg" || $_FILES["file"]["type"] == "image/png") {
    if($_FILES["file"]["size"] <= 1024) {
        //the file is good!
    } else {
        echo "Sorry, the file is too large";
    }
} else {
    echo "Sorry, the file is not an image";
}
```

Knowing this, we have to take one last step: moving the temporary file to the place we want it to be. From that moment on, it will permanently stay there unless we move it again. To do so, use:

`move_uploaded_file($tmp_file, $target_file);`{.longsyntax}

``` {data-lang="php"}
$upload_dir = "/images";

if($_FILES["file"]["type"] == "image/jpeg") {
    if($_FILES["file"]["size"] <= 1024) {
        //The file is good, save it permanently
        $temporary_name = $_FILES["file"]["tmp_name"];
        $original_name = $_FILES["file"]["name"]
        move_uploaded_file($temporary_name, "$upload_dir/$original_name");
    }
}
```

## Directories

Once a file is on a server, the story of course doesn't end there. We can dynamically add and remove directories, rename files, or copy them around. For example, a website that allows photo storage could allow you to create "albums" to which to upload your photos. Then, for every album a user creates, it simply creates a new folder on the server with the name you've chosen, and this way the billions of photos on the website's server stay neatly organized.

To make a new directory, use

`mkdir($pathname [, $mode = 0777, $recursive = false]);`{.longsyntax}

The default *\$mode* allows the widest possible access\-\--you can both read, write and execute the directory. (Read more on
[chmod](http://php.net/manual/en/function.chmod.php).) The *\$recursive* parameter, if set to true, can create multiple nested directories at once if you specify them in the *\$pathname*.

To remove an existing directory, use

`rmdir($dirname);`{.longsyntax}

``` {data-lang="php"}
// Desired folder structure
$folders = '/images/Ginty/FamilyPhotos/';

if (mkdir($folders, 0777, true)) {
    echo "Succesfully created folders!";
} else {
    echo "Folder creation failed :(";
}
```

## Renaming

To rename a file or directory, use

`rename($oldname, $newname);`{.longsyntax}

Note that this function allows you to input paths, which means it also allows you to move the file to somewhere else.

``` {data-lang="php"}
// User requested to change the album name to OldFamilyPhotos rename("/images/Ginty/FamilyPhotos", "/images/Ginty/OldFamilyPhotos");
```

## Copying

To copy a file or directory, use:

`copy($source, $destination);`{.longsyntax}

Again, the file can be copied to any other place. If the file is copied to a place where there's already another file with the same name, that old file is overwritten.

``` {data-lang="php"}
// Juan, Ginty's Husband, requested a copy of the family photos for himself as well copy("/images/Ginty/OldFamilyPhotos", "/images/Juan/OldFamilyPhotos");
```

## Path Information

To get the path to the *parent directory* of a certain file/directory, use

`dirname($path [, $levels]);`{.longsyntax}

The *\$levels* parameter specifies how many levels to go upwards. The default value is 1, which means it access the direct parent. A value of
2, for example, would access the parent of the parent.

``` {data-lang="php"} echo dirname("/images/Ginty/OldFamilyPhotos/IMG_0002.png"); //Prints OldFamilyPhotos echo dirname("/images/Ginty/OldFamilyPhotos/IMG_0002.png", 3); //Prints images
```

To access lots of different information about a path, use

`pathinfo($path [, $options]);`{.longsyntax}

The *\$options* parameter can have one of four values:

-   `PATHINFO_DIRNAME`: Returns the parent directory
-   `PATHINFO_BASENAME`: Returns the last element (directory or file) of
    the path
-   `PATHINFO_EXTENSION`: Returns the extension of the last file of the
    path
-   `PATHINFO_FILENAME`: Returns the name of the last file of the path

If it isn't set, the function returns all elements.

``` {data-lang="php"} echo pathinfo("/images/Ginty/OldFamilyPhotos/IMG_0002.png", PATHINFO_BASENAME); //Prints IMG_0002.png
```

" slug: "php-files-II" cat: "Website" subcat: "PHP" video: "" diff: 4 quiz: "" - id: 444 title: "\[PHP\] Cookies & Sessions" post:
"

If you thought the other superglobals were all-powerful and extremely useful, you're in for a treat. The two topics of this chapter, cookies and sessions, can be viewed as *ultra-superglobals*. They aren't just available within the complete program, they are also available *across all files*.

## What are cookies?

I'm sure you've seen cookie notifications or at least heard about them before. **Cookies** are everywhere, and they are used to save information within a user's web browser. A website can simply tell the browser to store certain data, under a certain name, for a certain amount of time.

*Why are they called cookies*? Well, let's look at an example. Say you're running a an online store, which lets users place items they like into their "shopping cart", and at the end of the day pay for all products inside the cart at once. The way most sites do this, is by creating cookies that hold the items you've selected thus far. So, essentially, as you're browsing the site, the website's placing
*cookie crumbs* along the path you're taking.

## Creating Cookies

To create a cookie, use

`setcookie("name", $value [, $expiration_date});`{.longsyntax}

The *expiration_date* parameter determines how long the cookie will be kept by the browser. If set to 0 or omitted, the cookie is removed when the browser closes. Otherwise, you can set it to expire at a specific date, which we'll discuss in the advanced course.

``` {data-lang="php"}
//Sets a cookie that keeps the user logged in for a day, so that he doesn't have to sign in again every time. setcookie("login", true, time()+60*60*24);
```

If you want to **modify** an existing cookie, all you have to do is call this function again, with the same *name*, but different parameters. Essentially, it overwrites the old cookie with the new one.

``` {data-lang="php"}
//Everytime the user logs in, update the cookie again to last another day. setcookie("login", true, time()+60*60*24);
```

Of course, some people don't like having stuff saved into their browser, no matter how tiny. Therefore, cookies can be disabled. To check if cookies are working, you can simply set a cookie, and then check if it was successful. This is done by checking whether the
`$_COOKIE` superglobal holds any elements:

``` {data-lang="php"} setcookie("login", true, time()+60*60*24);

if(count($COOKIE) > 0) {
    //Cookies are enabled, let's do this!
}
```

## Retrieving Cookies

To retrieve a cookie's value, simply use

`$_COOKIE["name"];`{.longsyntax}

``` {data-lang="php"} setcookie("login", true, time()+60*60*24); setcookie("username", "Juan", time()+60*60*24);

if($_COOKIE['login']) {
    //user is logged in, display welcome message
    echo "Welcome dear $_COOKIE['username']!";
}
```

## Deleting cookies

Because cookies are saved in the browser and across files, you can't use functions like `unset()` on it. Instead, you can simply overwrite the cookie to an expiration date in the past. The browser will set the cookie, check the data, see it should have already expired, and delete it.

``` {data-lang="php"}
//If the user logs out, remove the cookie setcookie("login", false, time()-1);
```

## What are Sessions?

The cookies we've just seen are on the *user-side* of an application. The very same cookie you set with PHP could also be created or edited by JavaScript, for example, or deleted right from the browser.

Sometimes\-\--particularly, when working with sensitive information\-\--we don't want that, and we want the *server-side* to keep track of certain variables for a particular user. For this we can use **sessions**.

For example, when a user starts a sign up process we can start a session. Now we can easily keep track of the current state of the process that a user is in (and perhaps some other variables), even if he decides to switch pages or take a temporary break from signing up. And then, when the user is done, we just stop the session.

A session can be started on the server with a single function. From that moment on, PHP scripts can save any data they want within the session, and use it everywhere across the application\-\--until the session is closed or deleted.

## Starting Sessions

To start a session, use

`session_start();`{.longsyntax}

This must be placed *before* any HTML is written into the file, so it's often best to place it as the first line of the file. Unlike cookies, we can't set a specific expiration date\-\--the session will keep working until the user either closes the browser, or we delete the sessions ourselves.

``` {data-lang="php"}

  ...
```

*If all of this is stored on the server, how does the server recognize a user?* Well, when a session is started, PHP simply plants a small user ID into the browser. If, later on, your scripts want to access session variables, the server will match the user ID it saved with the one on the server, and return the right variables for that specific user.

## Getting & Setting Session Variables

To get and set a session variable, you can use it like any other variable:

`$get_var = $_SESSION["name"]; $_SESSION["name"] = $some_value;`{.longsyntax}

``` {data-lang="php"}
//At some page, a sign up process is initialized... session_start();

$_SESSION["username"] = "John Dorian";
$_SESSION["state"] = 0;

//At another page, the user goes through the process... if($_SESSION["state"] == 0) {
    echo "Welcome $_SESSION['username'], please choose your password";
} else if($_SESSION["state"] == 1) {
    echo "Please provide your email address";
} else if($_SESSION["state"] == 2) {
    echo "Please tell us a bit about yourself";
} else {
    echo "Thank you! You should receive an email confirmation soon!";
}
```

## Destroying Sessions

To explicitly destroy a session, it's best to unset all associated variables first and then perform some session destruction. To do so, use

`session_unset(); session_destroy();`{.longsyntax} " slug:
"php-cookies-sessions" cat: "Website" subcat: "PHP" video: "" diff: 3 quiz: "" - id: 445 title: "\[PHP\] Databases (MySQL)" post:
"

Last chapter looked at storing relatively small pieces of data, for a small period of time. If the size of the data grows, or we want data to be permanently available to *all* users, it's best to save it inside a
**database**.

As the name suggests, they are the basis for your data; the command centre from which you retrieve, store, and transport all the data. It has, therefore, no certain layout or structure or anything attached to it\-\--it's just raw data stored in tables. And that's exactly when PHP jumps onto the stage. It has to tell the database which parts of the data it wants, and upon retrieving it has to do meaningful things with the data, such as placing it between certain HTML tags and creating a nice layout around them.

![](media/PHPDatabasesOverview.png)

## SQL

Databases are extremely powerful and behind most products that work with data in any way. But, as I just illustrated, a database works completely separate from PHP, which you also need another *language* to work with them. For this, there's **SQL**: Structured Query Language. It lets you perform all sorts of queries on databases, such as "load all posts with category X" or "load the 10 newest posts".

If you want to learn SQL (and you certainly should), I advise you to read the ***SQL Course***. I will now just continue explaining how to connect to databases with PHP, assuming you know some SQL. You don't need to be an SQL master, you just need to have a slight sense of the beast I'm talking about here.

## MySQL

There are many different systems that have implemented SQL. I will explain how to work with the most popular one that most beginners automatically use, MySQL, but the concepts can easily be adapted to other systems. Usually, this simply means changing some letters of the function here and there. (Also, MySQL is free.)

PHP, however, didn't always have support for those powerful *Objects* we've discussed earlier. This means that the first versions of MySQL worked without objects, and an object-oriented system was implemented much later. It's now recommended, though, to use this object-oriented version, which is called **MySQLi**. So, we'll be talking about that.

## Connecting to the Database

To connect a database, use:

`$conn = new mysqli($server_name, $username, $password, $database_name);`{.longsyntax}

If you're running PHP locally (with software on your computer), the server is most likely `localhost`. If you have a website hosted somewhere, you should be able to find information about your databases in the control panel.

If something goes wrong, the error will be attached to the connection object, and you can get it with

`$conn->connect_error`{.longsyntax}

``` {data-lang="php"}
//Connects to the database holding data for a blog
$conn = new mysqli("localhost", "administrator", "admin_password", "blog");

if($conn->connect_error) {
    echo "Sorry, something went wrong. Try waiting a few minutes, and then reloading.";
    echo "The error was: " . $conn->connect_error;
}
```

## Performing a Query

Once a connection has been established, you can perform queries. To do so, use

`$result = $conn->query("SQL QUERY HERE");`{.longsyntax}

Note that the query returns something\-\--the results\-\--so you need to save that in a variable. Even if your query inserts new data into the database (and doesn't "get" anything), it will return the results of that operation.

To check how many results the query returned, or whether it returned anything at all, use

`$result->num_rows`{.longsyntax}

``` {data-lang="php"}
$conn = new mysqli("localhost", "administrator", "admin_password", "blog");

//This requests the last 10 rows from the table "articles"
$result = $conn->query("SELECT * FROM `articles` ORDER BY id DESC LIMIT 10");

if($result->num_rows > 0) {
    //display the posts to the user
} else {
    //tell the user we couldn't find anything
}
```

## Fetching the Data

Even if you've successfully executed a query, PHP isn't sure how to interpret the data, as it can interpret it in numerous ways. Usually, though, the best way is to put the data into an associative array.

PHP, however, has an odd way of dealing with query results. Instead of first saving the results inside an array, and then looping through that, it wants to do both *at the same time*. So, to loop through all the data you've fetched, use

`while($row = $result->fetch_assoc()) {     do something with current row }`{.longsyntax}

This saves the next row inside the `$row` variable, as an associative array, every time the loop runs again. Because it's an associative array, you can access the data in each column with

`$row["some_column_name"];`{.longsyntax}

``` {data-lang="php"}
$result = $conn->query("SELECT * FROM `articles` ORDER BY id DESC LIMIT 10");

if($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    //Displays the post title
    echo "" . $row["post_title"] . "";

    //Displays the actual post
    echo $row["post"];

    //A "footer" added to the end of every post
    echo "Thanks for reading! Please leave a comment below with your thoughts!";
  }
} else {
  echo "Sorry, your search had no results. Perhaps try the homepage?";
}
```

## Closing the Connection

Once you're done with your business, it's best to close the connection. It's also automatically closed when the user closes the tab, but it's usually wise to save resources wherever you can.

To close it, simply use

`$conn->close();`{.longsyntax} " slug: "php-databases-mysql" cat:
"Website" subcat: "PHP" video: "" diff: 4 quiz: "" - id: 446 title: "\[PHP\] Error Handling & Debugging" post: "

Congratulations, you've seen almost all the cool things PHP has to offer! Now, it's time for the other 50% of the programming job\-\--fixing your errors, or **debugging**. Humans aren't perfect (no matter how much we'd like to be that), which means spelling errors slip in, we forget the occasional semicolon here and there, and we lose oversight when projects grow large. Things don't always work the way you expected them to work, but if that happens you can't just quit working on the project. Instead, you need to learn how to find out what went wrong specifically, and how to fix it.

## A Word on Debugging

I wasn't just throwing hyperboles at you in the introduction; debugging really is a very important aspect of programming. When you write a program, you want it to work exactly like you intended. There's billions of ways things can go wrong, and most of them are easily fixed\-\--however, you can't look inside a computer's head to see what exactly happened. Therefore, when it comes to debugging, *the more errors the better*.

Every time you write a crucial line of code, or something that is too complex to grasp at first glance, try to make the program throw an error if anything goes wrong.

PHP will automatically throw errors if it finds something wrong with your *syntax*, but it can't find problems with your *logic*. If you expect some variable to have the value 2, but it keeps returning value 3 all the time, you clearly did something wrong, but PHP will not throw an error.

So, this chapter will look at the error types PHP automatically throws, and how to implement your own safety mechanisms.

## Errors

PHP can throw many different types of errors (also called *error report levels*). These are usually separated into two categories: **fatal errors** that make the program crash and stop executing, and
**non-fatal** errors that simply warn you about something but let the program continue.

  ------- ----------------------- ---------------------------------------------------------------------------------------
  Value   Constant                Description
  1       `E_ERROR`               A fatal error, which can't be recovered from.
  2       `E_WARNING`             A non-fatal warning that something might go wrong if you keep using the current code.
  8       `E_NOTICE`              A non-fatal notice that there *might* be an error somewhere, but it's not sure.
  256     `E_USER_ERROR`          A fatal error generated by the user.
  512     `E_USER_WARNING`        A non-fatal warning generated by the user
  1024    `E_USER_NOTICE`         A non-fatal notice generated by the user
  2048    `E_STRICT`              A non-fatal error that merely *suggests* code improvements.
  4096    `E_RECOVERABLE_ERROR`   A fatal error that can be solved by the user, so it's recoverable
  8191    `E_ALL`                 All errors and warnings.
  ------- ----------------------- ---------------------------------------------------------------------------------------

``` {data-lang="php"}
//This emits a notice telling me that $some_var is undefined, but continues anyway echo $some_var;

//This prints INF (infinity), but emits a warning that I'm dividing something by zero (which isn't really a possible math operation) echo 10/0;

//This emits a fatal error which crashes the program echo 1 << -1;

//Which means this isn't executed anymore echo "HEY!";
```

There are even more error report levels, but they don't occur often, unless something went very, very wrong with setting up PHP or your server. Nevertheless, you can find them all in the List of [Error Function Constants](http://php.net/manual/en/errorfunc.constants.php)

## Reporting Errors

To tell PHP which errors you want to see, and which you don't, use

`error_reporting(ERROR_CONSTANT1 | … | ERROR_CONSTANTN);`{.longsyntax}

``` {data-lang="php"}
//Everything is reported error_reporting(E_ALL);

//Only warnings and notices are reported error_reporting(E_WARNING | E_NOTICE);
```

Usually, when developing something you want *all* errors to turn op, whilst if your program is online and in production, you only want to show the fatal errors.

## Exceptions

Exceptions are a lot like errors, but there's a clear distinction that needs to be clarified. Errors are built-in rules for checking whether something went wrong, while exceptions are created by the *programmer*. The programmer decides whether something is allowed or not, and writes code to handle these *exceptions* or special cases.

There's nothing inherently wrong with those special cases when it comes to syntax, there's just something wrong with the logic. For example, it's perfectly logical to forbid users from entering birth dates in the future when signing up, even though PHP could perfectly store that date and perform calculations with it.

To throw an exception, use

`throw new Exception("some custom error message");`{.longsyntax}

If you don't deal with this exception, it will result in a fatal error. I will talk about handling errors carefully with satin gloves in the next section.

## Catching Errors & Exceptions

When something goes wrong, we say the program *throws* an error. Using the same metaphor, we can display any error messages by *catching* them.

For this, we use a **try-catch block**. When working with crucial or error-prone code, you first *try* it, and if anything goes wrong, you can let it throw an understandable error instead of wildly crashing. And, perhaps even more importantly, the program continues even if the error was fatal.

The syntax is:

`try {     code } catch(Throwable $error) {     do something with the error } finally {     code }`{.longsyntax}

First, you *try* a piece of code. Then, you *catch* any error that might have occurred and display it in a readable way, and perhaps do something about it. The last piece, the *finally* block, is optional and contains code that is executed either way; it doesn't matter if an error occurred. This is useful for checking what the code before it did, and for cleaning up after it or solving the problem.

That word before the variable, `Throwable`, simply means that it should catch both errors and exceptions. You can also set it to `Error` or
`Exception` if you want only one type. Either way, the variable will be an object that has the `getMessage()` method that retrieves the message from the error/exception.

``` {data-lang="php"}
//This prints "Bit shift by negative number", which is a fatal error message telling us exactly what's wrong. But, the program continues without problems, because we've caught it in a try-catch block try {
    $x = 1 << -1;
} catch(Throwable $e) {
    echo $e->getMessage();
}

//This will tell us that the input number is wrong, so we know exactly why something went wrong in our script try {
    $x = 15;
    if($x > 1) {
        throw new Exception("Please provide input between 0 and 10");
    } else {
        echo "Thanks for rating this product!";
    }
} catch(Throwable $e) {
    echo $e->getMessage();
}
```

## Triggering Errors

We've seen the many types of errors that can be forgiving (warnings and notices) or fatal, and we've seen exceptions that must always use a try-catch statement to be solved. These are two ends of a very broad error spectrum, and sometimes you want something in between, which lead to the creation of *error triggering*\-\--forcing PHP to throw an error of the type we want.

At the start of the chapter, we saw that there were three special user error types: `E_USER_ERROR`, `E_USER_WARNING` and `E_USER_NOTICE`. We can trigger any one of them with

`trigger_error("some error message", ERROR_CONSTANT);`{.longsyntax}

``` {data-lang="php"}
//If the ID of the blog post we want is not set in the URL, we want to warn the programmers that something is wrong if(!isset($_GET['post_id'])) {
    trigger_error("Watch out, the ID is not set!", E_WARNING);
}
```

Last but not least, there's a shorthand for calling a fatal error with a custom message, which is

`die("some error message");`{.longsyntax}

It's quite intuitive actually; you try to do something very important, but if it doesn't work, let the program die!

``` {data-lang="php"}
//Safety mechanism to make sure we handle it right if connecting to a database went wrong.
$conn = new mysqli("localhost", "Juan", "Juanisawesomeyeah", "Items");

if($conn->error_message) {
    die("Couldn't connect to database. The error was: " . $conn->error_message);
}

//Any code here will not be executed anymore...
```

" slug: "php-error-handling-debugging" cat: "Website" subcat:
"PHP" video: "" diff: 4 quiz: "" - id: 447 title: "\[PHP\] Best Practices" post: "

So, you're starting to feel like a real PHP wizard by now? Great! Even wizards, however, need to optimize their workflow. There's always more than one way to do something in PHP, and sometimes even multiple "best ways" of doing something. To make sure your scripts stay well organized and as quick and efficient as possible, I want to dedicate this last chapter to programming best practices. Some of it is applicable to all programming languages, some of it is PHP specific.

## Be Consistent

The first rule is: be consistent and clear with your names\-\--for variables, constants, functions, classes, and so on. Decide on a system, and stick with it. This way, you can easily see what a certain name belongs to and what it does, which saves time and reduces errors.

``` {data-lang="php"}
//An example of naming conventions: class SomeClassName {
    
}

function some_function_name() {
    $_local_var = 5;
}

$global_var = 10; const SOME_CONSTANT = 15;
```

Also, use the same PHP tags all the time. I haven't told you this, but there are many other ways to start a PHP block (instead of the regular
``). My advice, however, is to ignore them when you see them and just stick with the simplest and clearest one.

## Write Readable Code

Almost all errors are a result of code that isn't readable, and therefore can't easily be grasped or understood.

The first step to readable code is using proper indentation. If lines of code are not on the same level in the hierarchy, let them have a different indentation!

``` {data-lang="php"}
//Bad indentation function some_func() {
$x = 10; for($i=0;$i<10;$i++) { echo "The number is $i";
}
}

//Good indentation function some_func() {
    $x = 10;
    for($i=0;$i<10;$i++) {
        echo "The number is $i";
    }
}
```

The next step is adding comments everywhere. And by that I mean:
*everywhere*. Anytime you write a new function, take time to make a comment above it about what parameters it accepts, and exactly what it does. Anytime you write a new class, write about the properties and methods it has and their functionality. Anytime you write a line of code that seems like it could provide problems in the further, make an insightful comment about it.

``` {data-lang="php"}
/* FUNCTION: Returns the sum of two numbers
 *
 * @param $a (integer) = first number
 * @param $b (integer) = second number
 */ function sum(int $a, int $b) : int {
    return $a + $b;
}
```

Lastly, there's a balance to be found between the length of the lines and the amount of lines. You don't want lines to be too long (in width), but neither do you want to have a document with thousands of lines. Break strings over multiple lines if you can, and try to only save something inside a variable when you absolutely must.

``` {data-lang="php"}
//An overly complex and long line
$a = (($x > 5 && !($y < 5)) || $x <> $y) ? 5/10 * (5 + $x*$y + $y + $x) : "PANDAS ARE AWESOME AND THEY SHOULD ALWAYS HAVE ENOUGH BAMBOO TO EAT";

//Can sometimes be refactored to be more readable, which also allows you to add comments
$xy_correct = ($x > 5 && (!$y < 5));
$condition = ($xy_correct || $x <> $y);

$value_1 = 0.5 * (5 + $x*$y + $y + $x);
$value_2 = "PANDAS ARE AWESOME AND THEY SHOULD \
            ALWAYS HAVE ENOUGH BAMBOO TO EAT";

$a = $condition ? $value_1 : $value_2;
```

## Don't Repeat Yourself

The DRY-principle\-\--*Don't Repeat Yourself*\-\--is very important in all programming. You don't want to write any piece of code more than once, which is exactly why classes, objects and functions were invented. Not only does this save a tremendous amount of time and effort, it also makes it much easier to change the program at a late stage or to spot problems.

So, any time you think there's a chance you'll need some functionality more than once, turn it into a function or class! Beware, however, of breaking up your program into too many tiny pieces.

In general, functions should accept no more than three parameters. If you find one that needs to do that, rewrite the code and perhaps use more functions. They're called *functions* for a reason\-\--they should provide a single core *functionality*, not try to do many things at once that could also be handled by many more specific functions.

Objects, on the other hand, can have as many properties and methods as they need, as long as it seems logical for the object. For example, if you have multiple classes related to animals (*Fish*, *Panda*, *Bird*,
...), it's logical that each of them has a different method for the sound they make, but things like pooping and moving are general functions that you could move into an abstract parent class.

``` {data-lang="php"}
/* WRONG: This function tries to do too many things at once:
 *   - calculate the final grade
 *   - assign that grade to the correct course
 *   - assign the right amount of points to the student (if he failed the course, none)
 */ function grading($grades, $weights, $course, $study_points, $student) {

}

// BETTER: function grading() {
    $grade = calculate_grade([7.6, 9.5], [0.4, 0.6]);
    add_to_course($grade, "Linear Algebra");
    $points = determine_points($grade, 5);
    update_points("Juan", $points);
}

function calculate_grade($grades, $weights) {
    $total = 0;
    for($i=0;$i= 5.5) ? $points : 0;
}

function update_points($student, $points) {
    //update the row containing the student's information in the database
}
```

## Optimize

It's always good to have a faster website that consumes less bandwidth. Therefore, some small optimizations can make a big difference, and can generally do no harm.

Firstly, optimize your loops. A loop can call a block of code many, many times, which means that it can take quite a bit of processing power from the server if that block of code is too complex. Try to reduce the amount of loops, and especially reduce the complexity of the code within them.

``` {data-lang="php"}
//For example, this loop searches an array for the first sequence of two zeros
$arr = [0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0];

for($i = 0;$i<(sizeof($arr)-1);$i++) {
    if($arr[$i] == 0 && $arr[$i+1] == 0) {
        echo "Found it at position $i!";
    }
}

//What's wrong? The code runs more often than it should (it should end after we've found what we're looking for), and it calculates the size of the array every time. Better is:

$size = (sizeof($arr)-1); for($i = 0;$i<$size;$i++) {
    if($arr[$i] == 0 && $arr[$i+1] == 0) {
        echo "Found it at position $i!";
        break;
    }
}
```

Secondly, PHP is actually quite lenient when it comes to syntax. Unlike lots of other big programming languages, variables don't need to be declared before you can use them, you can switch between data types any time you want, function names are case-insensitive, and so on. Although this is nice and programmer-friendly, it's also a subtle invitation to be sloppy with your code. Don't.

Write PHP using as many good coding practices and methods as you can. PHP frameworks, such as the popular [Laravel](https://laravel.com/), can help with this by forcing you to write clean PHP code.

Thirdly, scripts working with databases (which they often do) can also ask quite a lot of resources and bandwidth from the server. You'll want to reduce the amount of SQL queries as much as possible, so choose your SQL query wisely, and use smart PHP code to handle the rest.

Lastly, when it comes to defining constants, it's preferred to use
`define()` over the `const` keyword. The first defines the constant at runtime, which saves time and resources. Use the latter only when you absolutely need it from the start.

## Provide Backup & Security

Security is extremely important when it comes to your servers. PHP has lots of special functionality to help you be as secure as possible, which I will talk about in the ***Advanced PHP*** course. In the meantime, there's some things you can and should always apply.

First of all, always set *default values*, and check if a variable is actually set and set to the right type. You don't want to run into errors or bigger problems by working with undefined variables.

Secondly, when testing and debugging, set as many *breakpoints* as you can. A breakpoint is a place where you echo information from the last piece of code to the browser, so that you can see what was going on in that block of code. Make it a habit to use `echo` and `var_dump` to check variables and functionality often.

``` {data-lang="php"} if(!isset($_GET["password"])) {
    echo "Note to self: Somehow, the password is not being set here";
    $password = "defaultpass";
} else {
    $password = $_GET["password"];
}

$a = ($password_correct && $username_correct); echo $a; //Will print nothing, as $a is either true or false, and both aren't converted to strings var_dump($a); //Will print useful information, namely bool(true) or bool(false)
```

" slug: "php-best-practices" cat: "Website" subcat: "PHP" video:
"" diff: 4 quiz: "" - id: 448 title: "\[PHP\] Conclusion: what now?" post: "

After reading this course, you should have a solid understanding of how PHP works, its basic functionality, what you can do with it, and even some advanced functionality. It should be enough to create any moderately complex web application; a blog, a system where users can sign up and log in, a game, anything you want!

In the 28 chapters of this course, however, I couldn't possibly explain every single bit of PHP. If you want to know more, or you're stuck and
*need* to know more, I have made the ***Advanced Course*** for that. I can't promise it will be as easy and as much fun as this introductory course, but at least it will turn you from PHP wizard into a PHP god ;)

If that's not your cup of tea, you can already start looking into databases now, especially ***SQL***. Anyone that works with computer systems is going to need databases, also when working with other languages than PHP, so it's generally wise to learn it.

If that still doesn't interest you, then I just wish you good luck on your PHP journey! I hope this course taught you what you wanted to know, and made the huge world of PHP more friendly and comfortable.
