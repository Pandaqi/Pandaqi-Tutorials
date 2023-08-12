
 id: 380 title: "The Guide to SASS" post: "

With CSS you can already do amazing things, but some crucial features are missing. Have you ever typed the same values for something ten times in a row, and wished you could have just saved it once in a variable? Have you ever wished you could take an existing value and dynamically add 10 pixels to it? Well, all of that (and more) can be done with
**SASS**.

SASS stands for *Syntactically Awesome Style Sheets*, and it's a so-called *CSS pre-processor*. This simply means that you can write something in SASS-syntax, and then *compile* or output the file to regular CSS. This way, you can use very powerful variables and extra functions that SASS provides while you're editing the stylesheet\-\--simplifying your life. Additionally, you can choose how to compile the stylesheet to save space and bandwidth.

![](media/SASSWorkflowOverview.png)

So, unless you're a beginner and don't know anything about CSS yet, there's no reason *not* to learn SASS! It will make your life easier. And more fun. I promise. I really do.

## Table of Contents

1.  Installation
2.  Compiling
3.  Variables
4.  Mixins
5.  Operators
6.  Import & Extend
7.  Nesting
8.  Functions
9.  Control Flow

" slug: "guide-to-sass" cat: "Website" subcat: "SASS" video: "" diff: 1 quiz: "" - id: 381 title: "\[SASS\] Installation" post: "

To be able to use SASS, unlike CSS, we need to install it on the computer. Don't worry; the package is very small and easy to install. The installation, however, works via something called *gems*, which is a cool feature of the *Ruby* language. So, what do we do? We install Ruby, then we install SASS.

## Installing Ruby

How the Ruby installation works depends on your operating system.

### Linux

Linux installs Ruby (and lots of other things) through package management systems. The Ruby website has an excellent page explaining how to do so for every Linux system; [Ruby Installation](https://www.ruby-lang.org/en/documentation/installation/#package-management-systems)

### Mac

Yay, Ruby is installed on Macintosh computers by default! You can skip to the next step.

### Windows

For Windows, you need to download the [Ruby Installer](http://rubyinstaller.org), and then simply run it and perform a few clicks.

Make sure the option *Add Ruby executables to your PATH* is checked.

### Check if it Worked

To really make sure installation was successful, open the command line tool on your system. This is (probably) *Command Prompt* for Windows,
*Terminal* for Mac, and *Bash* for Linux. Then type

``` {data-lang="ruby"} ruby---v
```

And it should return your current Ruby version.

## Installing Sass

Now, with Ruby installed, getting SASS is quick and the same line across all systems. Again, in your command line tool, type

``` {data-lang="ruby"} gem install sass
```

It should show you the steps it's taking (downloading, installing, parsing, ...) and say something like "*1 gem installed*" when finished. If it fails, you will need to use

``` {data-lang="ruby"} sudo gem install sass
```

All this does is access the command line as an administrator of your system, which gives you more rights for installing and modifying the system. That's it! You can check if installation was successful by typing

``` {data-lang="ruby"} sass -v
```

Again, it should return he the current version of SASS.

" slug: "sass-installation" cat: "Website" subcat: "SASS" video:
"" diff: 1 quiz: "" - id: 382 title: "\[SASS\] Compiling" post: "

Just as CSS, you can write SASS code in any regular text editor. (You can also write it in fancy expensive text editors, don't worry.) What's really important to understand, are two things: the *file formats* and *how to compile*.

## File Formats

In the early days of SASS, files\-\--not surprisingly\-\--carried the extension `.sass`. While cool, it had to change when the language changed a lot and became bigger and better.

Nowadays, files that contain SASS code carry the extension `.scss`

So, all you need to do is create a text file, and change the extension. You can do this in the default text editor of your system, or you can use a text editor made specifically for CSS and all its brothers and sisters. (There are more pre-processing languages, but they are smaller and more specific than SASS.)

## Compiling

Compilation can be done through the command line tool, or by using software.

### Command Line

If you only want to compile a file once, use:

``` {data-lang="ruby"} sass inputfile.scss outputfile.css
```

But, as it so often happens, you're probably making continuous small changes to the stylesheet and want some files to compile automatically. For that, we can *watch* a file or folder for changes, and if a file is saved with changes, our computer will automatically compile it.

To watch a single file, use

``` {data-lang="ruby"} sass --watch inputfile.scss:outputfile.css
```

To watch all the files within a folder, use

``` {data-lang="ruby"} sass --watch inputfolder:outputfolder
```

NOTE: You need to keep the command line tool open to keep watching. It will probably tell you that.

If you're unfamiliar with the command line tool, this might be hard to understand. In the code above, I assume you've navigated your command line tool to the directory that contains your SASS files or folders.

If you haven't, or don't know how to do that, you can use *absolute paths*, such as

``` {data-lang="ruby"} C:\Users\yourusername\somefolder\somesassfile.scss
```

### Software

I personally like the free and open source
[Koala](http://koala-app.com), but the paid
[CodeKit](http://incident57.com/codekit/) and
[Compass.app](http://compass.handlino.com) are also popular and contain more features. Compiling with software usually amounts to selecting the file, and clicking *compile* somewhere.

## Compilation Options

There are four styles to use for compilation: *expanded*, *nested*,
*compact*, and *compressed*. The second one is selected by default. To override the current compilation settings on a file, use

``` {data-lang="ruby"} sass --update somefile.scss --style expanded sass --update somefile.scss --style nested sass --update somefile.scss --style compact sass --update somefile.scss --style compressed
```

These compilation styles go from large to small. The expanded style gives all properties and selectors their own lines and indents them properly, while the compressed style places everything immediately behind each other. The first one's easier to read, understand and work with, while the last one's small and fastest to load.

![](media/SASSCompilationOptions.png)

So, I suggest you use one of the first two when developing, testing, and checking if everything works as expected. I suggest you use one of the last two when deploying to an actual live website.

" slug: "sass-compiling" cat: "Website" subcat: "SASS" video:
"" diff: 2 quiz: "" - id: 383 title: "\[SASS\] Variables" post: "

Perhaps the greatest advantage of using SASS, is being able to use
*variables*. Instead of copying or retyping similar or exactly the same bits of code, we can save it inside a variable name once, and use that. To declare a variable, use the following dollar syntax:

`$some-variable-name: value;`{.longsyntax}

A variable can be one of six different types:

-   **String**: Any piece of text. Usually enclosed within quotes, but
    not necessary.
-   **Number**: Any number (with and without unit).
-   **Colour**: Any colour.
-   **Boolean**: Either *true* or *false.*
-   **List**: A list of properties of varying types. This can be a
    spaced list, or one with commas.
-   **Maps**: A mapping of values to other values.
-   **Null**

``` {data-lang="scss"}
$a-cool-string: "Juan is a cool guy";
$a-number: 350;
$some-colour: #FFAA22;
$boolean: true;
$a-fancy-list: 5px solid grey;
$an-intricate-map: (text: green, header: red, remark: grey);
$null-variable: null;
```

NOTE: As you can see, maps are created with a syntax that is quite peculiar for CSS. The general form is `(key1: value1, key2: value2, …)`. Nevertheless, maps can be extremely useful sometimes.

When you use a variable, it just inserts the literal value of that variable into the CSS code. This makes it very easy and intuitive to use, and allows for great flexibility. I suggest you put anything that is likely to be used more than once inside a variable.

I also suggest giving the variables descriptive names, and working with scales. For example, `$font-stack-body` and `$font-stack-headers`, is better than `$font-stack-one` and `$font-stack-two`

The naming convention is to place dashes between words, just as regular CSS does with its properties. This is, however, not necessary if you prefer your own methods.

## Variables in Selectors

Variables are typically used to insert a value somewhere, but we can also use them in selectors or property names. To do so, we need to wrap the variable name inside the *interpolation syntax*. Sounds difficult, but it simply looks like

`#{$some-variable-name}`{.longsyntax}

``` {data-lang="scss"} p.#{someclassname} {
    font-size: $paragraph-size;
    color: $paragraph-colour;
}
```

" slug: "sass-variables" cat: "Website" subcat: "SASS" video:
"" diff: 2 quiz: "" - id: 384 title: "\[SASS\] Mixins" post: "

We've seen how to store values and lists of values, but what if we want to store a bunch of declarations? That's when we use *mixins*.

To create a mixin, we need to make up a name and determine the variables it will use. Then, we use the following syntax

`@mixin some-function-name(variable1, …, variablen) {     declarations }`{.longsyntax}

Now we've created our mixin, but how do we use it? For this, we need to
*include* it somewhere with the following syntax

`@include some-function-name(value1, …, valuen);`{.longsyntax}

``` {data-lang="scss"}
@mixin set-border-radius($radius) {
    border-top-left-radius:$radius;
    border-top-right-radius:$radius;
    border-bottom-left-radius:$radius;
}

//Now paragraphs have border radius of 10px on all corners, except bottom right p {
    @include set-border-radius(10px);
}
```

As you can see, not only can you easily copy the same set of declarations around, you can also change the parameters every time you include it. If you know you're going to use the same parameters every time, you can of course ditch the variables and just use fixed values within the mixin.

Mixins are especially useful when working with vendor-prefixes. Instead of retyping the same property for all browsers, just put it inside a mixin.

" slug: "sass-mixins" cat: "Website" subcat: "SASS" video: "" diff: 3 quiz: "" - id: 385 title: "\[SASS\] Operators" post: "

Now that we know how to save values and declarations, wouldn't it be nice if we could make those values dynamic? For example, instead of setting something to a fixed number, we could let SASS calculate the number (based on other variables) when it compiles.

To do so, we can use the standard math operators: `+`, `-`, `*`, `/`,
`%`

We can use numerical variables, as well as regular numbers, to perform those mathematical operations. What's also important to notice, is that SASS can convert between several different units. If you use a number without unit, it will automatically take on the value of the other units. If you multiply the value by percentages, it will turn into a percentage.

Additionally, we can concatenate strings with the plus symbol, and add colours together. Adding colours goes piecewise; it adds the Red, Green, and Blue channel separately.

``` {data-lang="scss"} h2 {
    font-size:$font-size-h1 / 1.618px;
    color: #FFAA22 + #0055DD; //#FFFFFF
}

#main {
    width: 800px / 1200px * 100%; //66.667%
}

#sidebar {
    width: 400px / 1200px * 100%; //33.333%
}
```

## Comments

Besides the default multiline CSS comments (created with `/* */`), SASS also supports single line comments. These are created with the standard double slash, `//`, and are removed from the file when compiled.

``` {data-lang="scss"}
/* I AM 
   A
   MULTILINE
   COMMENT 
*/

// I'm a single line comment
```

## Shorthand Properties

Within CSS, some shorthand properties exist that already use the slash. When SASS encounters two fixed values with a slash between them (and no space), it will assume you want to use the shorthand property and doesn't apply division. In all other cases, such as with variables, SASS performs division.

So, if you want to divide fixed values, leave spaces around the slash. But, if you want to use the shorthand property with variables, use the interpolation syntax.

``` {data-lang="scss"} font-size: 12px/18px; //Interpreted by regular CSS as 12px font size, 18px line height font-size: 12px / 18px; //Calculated by SASS font-size: $some-var/$another-var; //Calculated by SASS font-size: #{$some-var}/#{$another-var}; //Shorthand again
```

## Parentheses

Lastly, you can force SASS to perform division, and to group numbers together, by placing parentheses around it. Additionally, this can be used to make sure a negation operator is associated with the corresponding number.

``` {data-lang="scss"} font-size: 20px - (5px + 5px); //10px font-size: 20px (-5px) + 5px; //Error font-size: 20px - 5px + 5px; //20px
```

" slug: "sass-operators" cat: "Website" subcat: "SASS" video:
"" diff: 3 quiz: "" - id: 386 title: "\[SASS\] Nesting" post: "

One of the reasons HTML is so simple and easy to use, is its clear nesting structure\-\--which CSS unfortunately lacks. Again, SASS comes to the rescue!

We can nest selectors inside other selectors, simply by placing them within each other. This way we can create styles for different elements within the same parent element, without having to retype the path to the parent every time.

`selector {     otherselector {         styles     }      anotherselector {         styles     }      general styles }`{.longsyntax}

``` {data-lang="scss"}
#nav {
    a {
        background-color: lightblue;
    }

    background-color: blue;
}

/*** OUTPUTS TO ***/
#nav {
    background-color: blue;
}

#nav a {
    background-color: lightblue;
}
```

Be aware, though, that overly nested rules create overqualified CSS, unnecessarily increasing file size and complexity. If you don't necessarily need to specify something in a selector, by all means, leave it out. Keep things simple, keep things short.

## Parents

Sometimes when you're nested, you want to access your parent. For example, if you want to add pseudo-elements or pseudo-classes. This is done with the `&` symbol.

``` {data-lang="scss"}
#nav {
    //Executed when user hovers over #nav element
    &:hover {
        background-color: lightblue;
    }
}
```

## Media Queries

Media queries work exactly like in regular CSS, but with SASS you can also nest them inside other selectors. This way, you can put media queries close to the element they belong to, and make them more specific.

``` {data-lang="scss"}
#nav {
    width:600px;
    margin:auto;

    //Special styles for #nav for certain maximum screen size
    @media screen and (max-width:600px) {
        width:100%;
        margin:0;
    }
}
```

" slug: "sass-nesting" cat: "Website" subcat: "SASS" video: "" diff: 3 quiz: "" - id: 387 title: "\[SASS\] Import & Extend" post:
"

With mixins, we've seen how to save a set of declarations in a function with parameters. However, if you don't require parameters, there's an easier way. You can copy *all* the declarations from inside another selector to somewhere else by using

`@extend selector;`{.longsyntax}

``` {data-lang="scss"}
.specialParagraphs {
    color:brown;
    font-size:10px;
}

.specialLinks {
    @extend .specialParagraphs;

    text-decoration:none;
    border-bottom:2px solid brown;
}

/*** OUTPUTS TO ***/
.specialParagraphs {
    color:brown;
    font-size:10px;
}

.specialLinks {
    color:brown;
    font-size:10px;
    text-decoration:none;
    border-bottom:2px solid brown;
}
```

Note, though that this selector needs to be *single element* (perhaps with pseudo-class or pseudo-element added to it). More complex selectors won't work.

Additionally, SASS provides an extra type of selector called the
*placeholder selector*. It looks like a regular *class* or *id* selector, except that the `#` or `.` is replaced by a `%`. These placeholder selectors will be ignored and not rendered, *unless* they are extended somewhere. This allows you to create styles that you know will only be extended in some stylesheets, and never used directly in your HTML\-\--which saves space and avoids naming collisions.

``` {data-lang="scss"}
%specialParagraphs {
    color:brown;
    font-size:10px;
}

.specialLinks {
    @extend %specialParagraphs;

    text-decoration:none;
    border-bottom:2px solid brown;
}

/*** OUTPUTS TO ***/
.specialLinks {
    color:brown;
    font-size:10px;
    text-decoration:none;
    border-bottom:2px solid brown;
}
```

## Importing

And lastly, we can modularize our CSS even more by splitting it into multiple files. SASS allows us to place snippets of code inside separate files, and then import those into multiple other big files.

Such a snippet is called a *partial*, and requires the filename to start with an underscore (e.g., `_partial.scss`).

To import the snippet, we use

`@import 'partial';`{.longsyntax}

The underscore and extension can be left behind; SASS knows what you mean and will figure it out.

CSS already has a native import option, but it has one large drawback; CSS creates another HTTP request for every import. Therefore, it increases server load and page load time. SASS, on the other hand, can put everything in a single file as it compiles. Yay!

NOTE: The special file naming and importing syntax in SASS is, therefore, used to bypass the native importing function.

" slug: "sass-import-extend-partials" cat: "Website" subcat:
"SASS" video: "" diff: 3 quiz: "" - id: 388 title: "\[SASS\] Functions" post: "

When we created mixins, we already learnt how to create our own
*functions*. By simply choosing a name and filling in the variables, we could insert lots of rules in lots of places. Fortunately, our life can become even easier\-\--we don't even need to create some of the mixins, as SASS has a huge amount of *built-in functions*!

There are way too much of them to cover here, and you probably won't ever need most of them, but some of them are too useful to pass up. You can find a list of all functions in the [SASS Documentation](http://sass-lang.com/documentation/Sass/Script/Functions.html)

As usual, functions are executed with the following syntax:

`some-function-name(value1, …, valuen)`{.longsyntax}

Alternatively, if you don't like to remember the order of the parameters, you can pass the values by keyword:

`some-function-name(param: val, …, param: val)`{.longsyntax}

Here's an example using some of the colour functions, useful for dynamic colour palettes.

``` {data-lang="scss"}
$main-colour: #995511;

body {
    background: darken($main-colour, 80%);
}

h1, h2 {
    color: lighten($main-colour, 40%);
}

p {
    color: $main-colour;
}

.logo {
    background: saturate($main-colour, 20%)
}

.metadata {
    color: desaturate($main-colour, 40%);
}
```

## Returning

Like any proper programming language, you can also create your own functions that don't create any rules, but instead return a value
(after some complicated calculations). To do so, use the following syntax:

`@function some-function-name(variable1, …, variablen) {     stuff      @return value; }`{.longsyntax}

As expected, you can use multiple return statements to return different values based on certain conditions. And, once such a statement is executed, the compiler immediately stops going through the function and continues compiling the rest of the stylesheet.

``` {data-lang="scss"}
@function mix-text-colour($colour-one, $colour-two) {
  $new-colour: $colour-one + $colour-two;
  @return $new-colour;
}

p {
    color: mix-text-colour(green, blue);
}
```

" slug: "sass-functions" cat: "Website" subcat: "SASS" video:
"" diff: 3 quiz: "" - id: 389 title: "\[SASS\] Control Flow" post:
"

This chapter's title is just a fancy name for controlling how the stylesheet is compiled. More specifically, it's about controlling which parts are ultimately going to be rendered, and how often. The program determines this based on certain conditions and expressions you provide. If you've done any sort of programming work, you should be familiar with these.

I'll give you a quick overview about *if-else* and *loops*. If you want to know more, I suggest you check out the *JavaScript* course. It uses the same principles, and if you're learning advanced CSS stuff, you'll probably also like (and need) JavaScript.

## If-Else

To create a simple **if-else** statement, that adds one value if the condition is true, and another if it's false or null, use

`if(condition, value if true, value if false)`{.longsyntax}

``` {data-lang="scss"} p {
  color: if(lightness($background-color) > 50, #000, #fff); //Set text colour dark/light based on background colour
}
```

To create more complex statements that add a certain set of styles based on multiple conditions, we use

` @if condition {     styles } @else if condition {     styles } @else {     styles }`{.longsyntax}

Of course you can use as many `@else if` statements as you like, which means you can also omit them entirely.

``` {data-lang="scss"} p {
  @if (lightness($background-color) > 50) {
    color: #000000; // Light background, make text colour dark
  } @else {
    color: #ffffff; // Dark background, make text colour light
  }
}
```

## Loops

To repeat a set of styles, without having to retype it yourself, we can use a loop. To create a **for loop**, use one of these two syntaxes:

`@for $var from  through  @for $var from  to `{.longsyntax}

Note that the first syntax *includes* the `` value, while the second syntax doesn't.

``` {data-lang="scss"}
//Set first nine children to gradually darker background colours p {
    @for $i from 1 to 10 {
        &:nth-child($i) {
            background-color: darken($main-colour, ($i*5)%);
        }
    }
}
```

To create a **for each loop** through a list or map, use

`@each $var in `{.longsyntax}

``` {data-lang="scss"}
$map = (cat1: "Panda", cat2: "Jaguar", cat3: "Koala", cat4: "Bushdog");

//Sets elements with classes cat1, cat2, cat3, cat4 to their respective animal
@each $cat, $name in $map {
    .#{$cat}::after {
        content: $name;
    }
}
```

To create a **while loop**, which keeps looping as long as a condition is true, use

`@while condition`{.longsyntax}

Note that this is rarely necessary, and also make sure you don't create infinite loops. Check if there's always a way for the condition to return false and exit the loop.

## Debugging

Last, but certainly not least, it can be very useful to debug your SASS code in case there's an error. If something doesn't go as planned, but you don't know why, it's helpful to debug. This means letting the compiler spit out the values of certain variables or functions or whatever, while it's compiling. This way you can check if everything actually is going like it should be.

To print out a value to the standard error stream\-\--which is the command line tool if you use that, or part of the software if you use that\-\--we use

`@debug expression`{.longsyntax}

``` {data-lang="scss"}
$some-variable: 20px;
$some-other-variable: 30px;
@debug $some-variable + $some-other-variable; //Should print 50px
```

" slug: "sass-control-flow" cat: "Website" subcat: "SASS" video:
"" diff: 4 quiz: "" - id: 390 
