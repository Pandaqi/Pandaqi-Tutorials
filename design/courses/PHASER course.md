--- lang: en-US title: Professional Panda viewport: user-scalable=no, initial-scale=1, maximum-scale=1,
  minimum-scale=1, width=device-width, height=device-height,
  target-densitydpi=device-dpi
---

%YAML 1.1 \-\-- \# u4302d8117_main.articles - id: 2 title: "\[Phaser\] A Beginners Guide" post: "

Phaser is a JavaScript library, developed by Photonstorm (check him out, he's done cool things). It's completely free, and will always be. It's particularly good for simplifying the basics of creating an HTML5 game for you, and then creating a simple 2D game with physics. And the whole library is just a small .js (JavaScript extension) file. Amazing for the starters!

## Basic needs for every game

A **.html** file\-\--this is the game's page, this is where we bring together all the code in the end and the game is played.

The **phaser.min.js** file\-\--included in the html file

A **.js** (javascript) file for every screen or scene in your game

Perhaps some folders for your media, graphics, scenes, etc., if you're keen on keeping stuff organized.

## The .html template

``` {data-lang="html"}
 
 
     
         
        A title---displayed in the tab 
         
         
         
         
         
         
     

      
     
    //When the page loads, do the following 
    window.onload = function() { 
        //Create a new Phaser game Object with properties: 
        //(width,height,displayMethod (WebGL or Canvas),appendToHTMLElement,setPreservedFunctions 
        var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create }); 

         //Add all the states to the game we just created 
        game.state.add('Menu', Scenes.MenuScreen) 
        game.state.add('Main', Scenes.MainGame) 
        game.state.add('GameOver', Scenes.GameOver); 

         //And start off with the first one 
        game.state.start('Menu'); 
    }; 
     
     

```

It's a very basic html page (comments with explanation in the code itself).

NOTE: In the 'appendToHTMLElement' property you can give the ID of an HTML element where you'd like the game to be created in. If you don't set anything, it's just created right after the

tag. The 'setPreservedFunctions' property allows you to set your own custom functions for the ones Phaser uses (preload, create and update are the only essentials to a Phaser game).

## A JavaScript file containing a scene (template):

``` {data-lang="javascript"} Scenes.MainGame = function(game) {
    //set all your variables for this scene here (LOCAL)
    this.time = 0;
    this.playerSize = 200;
};

Scenes.MainGame.prototype = {

preload: function() {
   //This function is called first, and must contain every image/spritesheet/etc. to be loaded for this scene
},

create: function() {
  //In this function then every object with its properties is created
},

update: function() {
  //Finally, this function runs at 60 FPS and is used to update everything and play the actual game.
},

};
```

Above is the basic template for every scene. Remember when defining your variables, that you put **this**. before everything, to ensure the variable is part of the object and only available in this scene (and destroyed afterwards). However, you might have noticed we're putting objects into a certain 'master object' called 'Scenes'. You're right, we still need to define it! This is done at the top of the very
**first scene that is loaded**, like this:

``` {data-lang="javascript"} var globalVar = 20; var anotherGlobalOne = 30;

var Scenes = {};
```

Any **global variables**, to be used throughout the complete game (and not only this particular scene), can be set before defining this object that holds all the states (as you see). As you saw earlier, the **local variables** are created as part of the states' object. This means you need to put **this.** before a local variable when using it, and nothing in front of a global variable.

## Creating an actual game

Due to the fact that everything in the game is inside an object which is linked to the Phaser Game Object (created in the html page), we need to put the magical words **this.** in front of nearly everything we type
(without different states we would just use 'game' to refer to the game object).

##### Loading the media

First, you need to load all your media inside the preload function at the top. For example, loading images would be like this:

``` {data-lang="javascript"}
// Properties: ('name for reference', 'path to image to load') this.load.image('star', 'star.jpg');
```

Inside the create function we setup our scene to be used and manipulated in the update function later on. If we for example want to create a sprite from our image we just loaded (including physics):

``` {data-lang="javascript"}
//Initiate the physics system Arcade (There's also Ninja and p2 available) this.physics.startSystem(Phaser.Physics.ARCADE);

//Make our player into a sprite (xPosition, yPosition, 'referenceName of image')
//Remember: 'player' must be loaded in the preload function this.player = this.add.sprite(50,50,'player');

//Scale our player so he's 2 times as big this.player.scale.setTo(2,2);

//Enable physics on our player (must be done after it has become a sprite) this.physics.arcade.enable(this.player);

//Make the player collide with the edges of the game this.player.body.collideWorldBounds = true;

//Make the player move 40px/s in the x-direction this.player.body.velocity.x = 40;

//Give the guy a 20% bounce off of other objects this.player.body.bounce.setTo(0.2,0.2);
```

##### Updating and playing

The update function is run 60 times per second, and is used for animating/moving/interacting - the game itself. Before we move on, let's first set our variables in the top of the file before we forget

``` {data-lang="javascript"} this.time = 0; this.player = null;
```

We're going to use the **time** variable to make our player move slower every 3 seconds. This is what we put into the update function:

``` {data-lang="javascript"}
//Make time increment equal to the actual time (1 extra per 1 second) this.time += (1/60);

//If the value of time modula 3 equals zero, decrease player's velocity if(this.time%3 === 0) {
   this.player.body.velocity.x -= 6;
}

//(modula = the remainder when x can't be divided by y anymore,
// e.g. 10%3 = 1, 12%3 = 0)
```

Done! Now you have your first HTML5 scene moving. Now go create awesome games (but first, follow the advanced tutorial!).

" slug: "phaser-a-beginners-guide" cat: "Games" subcat: "Phaser" video: "" diff: 2 quiz: "" - id: 3 title: "\[Phaser\] An advanced guide" post: "

Assuming you've read the beginners tutorial and want to know more\...you've come to the right place! In this post I'll cover the more advanced possibilities of Phaser (which are still pretty basic and fundamental really). Nevertheless, if you want to create a nice game, you better know these things.

## Grouping

Phaser has created lots of support for **grouping** of objects, and for a good reason. Grouping objects (for example all the coins, platforms or enemies in a level) makes it easy for you to go through all the objects of a group and check for something. It also makes it possible to move, rotate, scale, destroy, etc. the complete group all at once. And next to that, it makes your code simpler and easier to read for yourself!

``` {data-lang="javascript"}
//First define it var platforms = null;

//Add this in the create function platforms = game.add.group();

//Enable physics bodies for all members (current and to be added in the future) platforms.enableBody = true;

//Create a sprite in it (or remove it); platforms.create(xPos,yPos, someThing); platforms.remove(someThing);
```

NOTE: Groups don't have a physics body themselves. They're just an
'empty' container object, containing all it's children's bodies.

## Game vs World

In Phaser, a distinction is made between game and world. **Game** is the size of the canvas, the size of that rectangle you are viewing throughout the game. **World** is the size of the game world. This can be as big as you want, but you can give it a size with the
**width/height** properties, and optionally boundaries by setting the
**bounds** property (nothing can go beyond these boundaries). By default its starting point is at (0,0) and it's as wide as the game is. But, if you for example made a sidescroller game, you would make the world a lot wider than the game.

## Tips & Tricks

For Phaser-specific tips & tricks to improve your workflow and make things just a bit easier go to this tutorial: [**Phaser Tips & Tricks**](http://thehtml5guide.net84.net/3-phaser-tips-tricks/ "#3 Phaser – Tips & Tricks")

## Physics all the way!

For an explanation of all physics systems in Phaser and how they work, see this overview: [**Phaser Physics Systems**](http://thehtml5guide.net84.net/4-phaser-physics/ "#4 Phaser – Physics!")

## Nice Preloader

Another useful thing to know when your game grows bigger, is how to add a nice preloader: [**Phaser Preloaders**](http://thehtml5guide.net84.net/5-phaser-awesome-preloaders/ "#5 Phaser – Awesome Preloaders")

## Different (Graphical) Possibilities

Whether you just want to test if something works, or you really want the fastest way to the best possible graphics: [**Phaser Graphics**](http://thehtml5guide.net84.net/6-phaser-graphics-and-design/ "#6 Phaser – Graphics and Design")

" slug: "2-phaser-an-advanced-guide" cat: "Games" subcat:
"Phaser" video: "" diff: 2 quiz: "" - id: 4 title: "\[Phaser\] Tips & Tricks" post: "

When you've just started learning Phaser, there a few things you don't know. It's once you really start using it for creating something, that you run into problems and learn that most of the time Phaser has a cool, easy way to do it\...or that there's a certain workaround or different approach that is favourable. Anyway, here's the sequel to the advanced guide, the professional tips & tricks!

NOTE: For some parts I assume you use different states in your game. If you don't, that's fine, you'll just have to adapt the examples a bit to your specific situation.

## Common mistakes and debugging

Here's a list of things that often go wrong with horrible results, without you realizing what the heck you did wrong this time. I'll also show you some ways to debug your code to find what causes the errors.

##### Common Mistakes

###### Declaring and referencing functions

If you're using states, often you'll get an error a certain function is undefined. This can have two reasons: the function is defined incorrectly, or it is called upon incorrectly. Let's say we call the function 'doStuff' in the standard 'update' function, it'd go like this:

``` {data-lang="javascript"} update: function() {
    this.doStuff(aParameter);
},

doStuff: function(aParameter) {
    
},
```

###### Declaring and referencing variables

In the same way, there can be some trouble with variables. If a variable isn't defined or of the correct type/value, it often throws vague errors or doesn't run your program at all. Remember this:

``` {data-lang="javascript"}
//GLOBAL VARIABLES
//Either in index.html var globalThing = value; var game = new Phaser.Game(blablabla);

//Or at the top of your first state, outside of the states object var Scenes = {}; var globalTime = 0;

//They are used as you'd expect! For example: globalTime = 2;


//LOCAL VARIABLES
//Set inside the object class of the state Scenes.Main = function(game) {
   this.aVar = value;
   this.anotherOne = false;
}

//They are used with 'this.' in front. Always. Like this: this.anotherOne = true;
```

NOTE: If you somehow forget to put 'var' in front of your variables\...It's actually no big deal, according to the JS compiler. What happens is: JS reads the variable, and thinks it has been declared earlier (because it has no var before it). However, it will not find this declaration, and will then continue to assign the variable to the highest level in the hierarchy of the game (which is the browser
*window* in this case). So you've basically created a global variable, without it really being a global variable. It can even be useful, but I highly recommend you just don't use it, for it can cause weird errors that are very hard to debug (and you should learn proper programming, of course).

##### Mixing up syntax

Another error that can happen often, is that you're just in a flow, coding fast and happily, and without you realizing it you mix up different systems/syntaxes. You for example mix the syntax of a while-loop with the one of a for-loop, you mix the syntax for setting properties of an object with the one for setting variables, you call an object and use it's paramaters while you forget to pass any to it, etc. This kind of error is very hard to realize yourself, once you've made the mistake. So, now you know it, check it!

##### Forgetting some words

Especially when working with JS libraries, like Phaser, there's a very long line of code needed sometimes. You might forget to put a word in there, you might add one dot too much, you might forget that this one actually calls a function and does not return a boolean, etc. For example, a few of the mistakes I often made at the beginning:

``` {data-lang="javascript"}
//Adding a body to the player...WRONG game.physics.enable(player);
//It's like this game.physics.arcade.enable(player);

//Or forgetting the player already had a body...WRONG player.velocity.x = 20;
//It's like this player.body.velocity.x = 20;

//Or you might think you can quickly push a new object into an array...WRONG var blockContainer = []; var newBlock = this.add.sprite(50,50,'block'); blockContainer.push();
//You forgot to actually push something into it.. blockContainer.push(newBlock);
```

##### Resetting variables when switching states

The Phaser's stateManager is quite powerful, and removes almost everything from a seen, but there might be some variables that are left over and remembered. If you need to come back to the same state within the same game (for example a Main Menu), you need to reset variables to the value they need to start with. For this, Phaser has a **shutdown** standard function (yes, next to preload, create and update). Within this function you can just set the variables you really need set to a certain value at the beginning of the scene.

##### Debugging

###### Logging to the console

If you're on chrome, hitting F12 will bring up the developer tools, and at the top you should see a few tabs, and the last of them is
**Console**. This will display any errors it encounters loading your game, but it's also the place you can send information to test things. It's a simple as this:

``` {data-lang="javascript"} console.log("I'm loggin' this!"); console.log("Player's x position: " + player.x);
```

###### Phaser's built in debugging system

However, Phaser also has it's own built-in debugging system, to simplify matters a bit. It's basically the same as the console.log(), but it displays the result on the screen and updates in realtime. Just do:

``` {data-lang="javascript"}
//Debug functions must be put inside a special render function that is called just before Phaser renders the game to the screen render: function() {
    game.debug.text(xPosition, yPosition, "Our player's speed is " + player.velocity.x);
}
```

So, now you know how everything's running the show, but you still can't find where the error is in those 30 new lines of code you just wrote? Well, the simplest method to find the culprit, is to simply comment out parts of your code, until you don't have the error anymore. This approach works better if you divide the block of code in two halves every time, instead of taking for example 5 lines every time.

##### Display your game's FPS

One thing you might need to display, is the FPS (Frames per Second) of your game. This shows you when or whether the game is lagging a bit, which can help you in making your game faster and your code more efficient. It goes like this:

``` {data-lang="javascript"}
//Set this flag to true in the create function this.time.advancedTiming = true;

//Then read the FPS in the update function this.time.fps

//For example: display it with Phaser's debugging system game.debug.text(50,100,this.time.fps);
```

## Phaser's useful properties/attributes and functions added to (almost) everything

Everything in Phaser has a bunch of properties you can read and set, which are pretty mandatory for creating anything.

``` {data-lang="javascript"} var player = this.add.sprite(100,100,'playerImage');

//The x and y position player.x, player.y

//The rotation player.rotation

//The anchor (center point), (0 -> 1) in percentages of complete sprite player.anchor.x, player.anchor.y

//The scale player.scale.x, player.scale.y

//The width and height player.width, player.height

//The name  player.name

//Check if it exists
//If false, it is invisible. If true, it is visible player.exists

//Check if it's alive
//If false, the game pretends it's not there. If true, it does affect gameplay like usual player.alive

//Fix it to the camera (boolean) player.fixedToCamera

//Check if it's in the game camera or game world (boolean, readonly) player.inCamera, player.inWorld

//Kill it when it's outside of the game world's bounds player.checkWorldBounds = true; player.outOfBoundsKill = true;

//For controlling something's health player.health

//Set a lifespan (in ms) until something's killed player.lifespan

//Check whether it is being destroyed (boolean, readonly) player.destroyPhase
```

NOTE: Because phaser sprites are objects, you can always attach your own custom properties to it. Like **player.roleInTeam,**
**player.bulletsLeft**, etc.

NOTE2: With any property that has an **x** and **y** value, you can also just use the following: **.setTo(xVal, yVal);** Next to this (yes, there is more, more awesomeness!) there are also some standard methods useful for a lot of things.

``` {data-lang="javascript"}
//Crop the player's sprite into the rectangle specified player.crop(rect);

//If the player's health property is set, the specified amount will be substracted from it player.damage(amount);

//Destroy the sprite. This completely removes the sprite, never to be seen again.
// The destroyChildren boolean determines whether or not the sprite's children (if it were a group or container) should be destroyed too player.destroy(destroyChildren);

//Kill the sprite. This simply makes the sprite invisible, frozen and indetectable, but it can be revived player.kill();

//Check if this sprite overlaps with the 'someObject' player.overlap(someObject);

//Completely reset something, giving it only a new x,y position and health value to start again with player.reset(x,y,health);

//If a player was killed, you can revive it this way!
//(and setting an health along the way, but that's purely optional) player.revive(health);
```

So, one important thing to remember is, that killing and destroying something is a different activity. Killing a sprite, will set
'**alive**' to false and '**exists**' to false (and therefore
'**visible**' to false). But, the sprite will live on, and can be revived at any time. However, destroying a sprite, will remove all of it, forever, never to be seen again.

## About efficiency and CPU-friendliness

This brings us to our next topic: efficiency of resources. The fact is: HTML5 games are not as powerful as PC or console games. We have to be extra careful with how we use our resources. Therefore, it's a good idea to look at what you really need, and what not. If you need something the first time, you of course need to create it. But if you for example need lots and lots of instances of bullets, but the bullets often fly off screen, you can reuse the bullets flying off screen as new ones. This can be done by **kill()**ing it, and later **revive()**ing it. If you don't need something anymore, you're better off completely
**destroy()**ing it so it doesn't take up any more CPU.

## Input: mouse, keyboard, touch, watever you like

We've actually got a nice seperate tutorial on all the input possibilities! **[Check it out](http://thehtml5guide.net84.net/8-phaser-input-mouse-keyboard-touschreen/ "#8 Phaser – Input (mouse, keyboard, touschreen!)")**

" slug: "3-phaser-tips-tricks" cat: "Games" subcat: "Phaser" video: "" diff: 2 quiz: "" - id: 5 title: "\[Phaser\] Physics!" post: "

In the beginners tutorial, you've seen the Arcade physics system in action (only a tiny little bit, though). Phaser however takes physics to a whole new level, and brings 2 different systems with it: *Arcade, p2*.

**Arcade:** the arcade physics system is the easiest of them all (which also means the most limited), and as you might have guessed: best suitable for arcade games. It has simple collision and overlap checks for rectangle bodies (called AABB), and features like giving bodies velocity, gravity, friction, bounce, etc.

Learn all about it in the [**Arcade Physics Tutorial**](http://thehtml5guide.net84.net/phaser-physics-arcade-system/)

**p2:** the p2 physics system is the most advanced system. It does everything arcade does too, but can do a whole lot extra. It's very realistic yet easy to implement. The p2 system is well suited for the complex physics in a game (realistic falling/bouncing of objects, chains, thrusts, springs, constraints, etc.).

Learn all about it in the [**p2 Physics Tutorial**](http://thehtml5guide.net84.net/phaser-physics-p2-system/)

" slug: "4-phaser-physics" cat: "Games" subcat: "Phaser" video:
"" diff: 2 quiz: "" - id: 6 title: "\[Phaser\] Physics ARCADE System" post: "

The Arcade system was the first system implemented by Phaser, because it is the most basic and simple one, and will do perfectly for any 'arcade games'. This tutorial will teach you how to initiate the system and use it for some very useful tasks.

## Starting the system

Initiating the system is as simple as putting this at the top of the create function:

``` {data-lang="javascript"} game.physics.startSystem(Phaser.Physics.ARCADE);
```

## Adding bodies to the system

If you want something to be part of the system, and thus have a body and physics applied, you need to tell it to Arcade yourself.

``` {data-lang="javascript"}
//INDIVIDUAL SPRITES game.physics.arcade.enable(sprite1); game.physics.arcade.enable([sprite2,sprite3,sprite4]);

//FOR GROUPS
//For example, a group that holds all the platforms in a platformer var platforms = game.add.group(); platforms.enableBody = true;
```

Remember, only sprites can be made part of the physics system!

## Manipulating the bodies

Now, you can do all sorts of things with the bodies. Below are the ones you'll use the most (but not all):

``` {data-lang="javascript"}
//The player's velocity in either direction in px/s
//maxVelocity and minVelocity are also available, using the same syntax player.body.velocity.setTo(x, y);

//The player's gravity (downwards on y, to the left on x) in px/s player.body.gravity.setTo(x, y);

//The player's drag or friction in either direcion in px/s player.body.drag.setTo(x, y);

//How much the body is bounced off of objects (0 -> 1, in percentages of collisionforce) player.body.bounce.setTo(x, y);

//Whether or not the body moves when hit by something (boolean) wall.body.immovable = true;

//Whether or not the body can move out of the world (otherwise it just stops at the edges) player.body.collideWorldBounds = true;

//Acceleration of the object in either direction in px/s player.body.acceleration.setTo(x, y);

//Setting an angularVelocity (again, px/s), with angular drag player.body.allowRotation = true; player.body.angularVelocity = someRadianValue; player.body.angularDrag = someRadianValue;

//Some useful READONLY values
//For getting speed, position, previous position, where the body is facing player.body.speed, player.body.position, player.body.prev, player.body.facing
```

## Checking for collisions!

Now that everything has a body which behaves in its own way, we want to make sure the right things collide with each other, and we do actions based on that at the right time.

NOTE: For this, we move out of the create function, and into the update function!

First, although you've set the bodies up, nothing seems to hit anything. To make it do so, we need to tell objects to **collide** with each other.

``` {data-lang="javascript"}
//Making stuff collide (2 sprites, sprite+group, 2 groups, whatever you like)
//collide(object1, object2, collideCallback, processCallback, callbackContext) game.physics.arcade.collide(player, platforms, hitPlatform(), isPlatformSolid(), this);

/*collideCallback: the function you specify here is executed every moment the objects collide processCallback: the function you specify here, must return true for the collision to work. 
        If the function returns false, the two objects will not collide callbackContext: forget about this, either omit it or set it to 'this'

NOTE: Both the collideCallback and processCallback functions are passed two parameters, the first object and the second respectively.
*/
```

Simple enough. However, sometimes we want objects that don't collide, but still detect whether or not they overlap. For this we have **overlap**.

``` {data-lang="javascript"}
//overlap(object1, object2, collideCallback, processCallback, callbackContext) game.physics.arcade.overlap(player, coins, collectCoin(), null);
```

Now that we know that, we can get even more funky, and check what side of a certain object is hitting/**touching** something. This is for example useful if you want your player to jump only if it's touching something beneath it.

``` {data-lang="javascript"}
//Is the player touching anything? player.body.touching
//Was the player just touching anything? player.body.wasTouching

//(this can be applied to both) Is it touching up/right/down/left? player.body.touching.up, player.body.touching.right, player.body.touching.down, player.body.touching.left
```

## Useful functions of the Arcade system

Last, but not least, the arcade has some fancy built-in functions to simplify some tasks for you! Below are the ones I use most:

``` {data-lang="javascript"}
//Accelerate object to certain x and y coordinates game.physics.arcade.accelerateToXY(object, x, y, speed, maxSpeedX, maxSpeedY);

//Move the object to the x and y coordinates
//maxTime: the maximum amount of time it should take the object to reach the destination,
//the speed is adjusted by the system to achieve this! game.physics.arcade.moveToXY(object, x, y, speed, maxTime);

//Get the angle between an object and x,y coordinates game.physics.arcade.angleToXY(object, x, y);

//Get the distance between an object and x,y coordinates game.physics.arcade.distanceToXY(object, x, y);

//Automatically set x and y velocity according to the angle you want to move in (velocityFromRotation also available) game.physics.arcade.velocityFromAngle(angle, speed);

//A simple check for if two bodies intersect - it returns a boolean value (true/false) game.physics.arcade.intersects(body1, body2)
```

" slug: "phaser-physics-arcade-system" cat: "Games" subcat:
"Phaser" video: "" diff: 3 quiz: "" - id: 7 title: "\[Phaser\] Physics P2 System" post: "

The p2 system implemented in Phaser, is the most powerful and broad one. It allows for very realistic collisions, has some useful extras (like chains, constraints, springs, thrust, etc.), and all of this without it being too hard to understand. However, due to the great size of this system, I will not cover all of it, just the fundamentals.

## Initiating the P2 system

This is the syntax for initiating the system, and below that the syntax for enabling physics to be used on a certain sprite.

``` {data-lang="javascript"}
// adding P2 physics to the game game.physics.startSystem(Phaser.Physics.P2JS);

// Enabling a body (=making physics available) on a certain sprite game.physics.p2.enable(sprite1);
```

## Creating different bodies

Now that you know this, you want to create the bodies for your game. By default P2 will simply create a rectangle around your sprite, but that's not always what you want. You can tell P2 to draw a certain shape as a body for your sprite like this:

``` {data-lang="javascript"}
//All shapes are added to the anchor point of the body, which is automatically set to (0.5,0.5) = the exact center.

//Add a capsule shape (you know, a mix between an ellipse and a (rounded) rectangle) someSprite.body.addCapsule(length, radius, offsetX, offsetY, rotation);

//Add a circle someSprite.body.addCircle(radius, offsetX, offsetY, rotation);

//Add a line (running from [-length/2,0] to [length/2, 0]) someSprite.body.addLine(length, offSetX, offsetY, rotation);

//Add a rectangle someSprite.body.addRectangle(width, height, offsetX, offsetY, rotation);

//Add a polygon someSprite.body.addPolygon(options, points);

/*'options' is an object (optionally) asking for three things: optimalDecomp (boolean): whether or not to optimally calculate physics (increases CPU load) skipSimpleCheck (boolean): set to true if you want to skip checking if the polygon intersects itself removeCollinearPoints (boolean): set to true if you want to remove them
        collinear points is the middle point when three points lie in a straight line, and is basically useless

*/

/*'points' is an array containing arrays with x,y values, like this:
[[0,2],[2,3],[4,1],[6,6]]

and it of course represents the points/vertices/corners of this polygon
*/

//The function for clearing all shapes from the body, use it when you want to add a single different body than the default rectangle that's added to it
//Because, you might have noticed, every method above 'adds' to the body. someSprite.body.clearShapes();
```

## Useful body attributes

Now that you've initiated the system and enabled a body with the correct shape(s) on your sprite, you want to do stuff with them (I think, I can't read your mind).

``` {data-lang="javascript"}
//Set damping (friction), velocity and force someSprite.body.damping, someSprite.body.force, someSprite.body.velocity
//This can also be applied to object's rotation, simply:  angularDamping, angularVelocity, angularForce

//But, you can also tell it to just never rotate: someSprite.body.fixedRotation = true;

//Set the gravity someSprite.body.gravity = someValue;

//Make the body collide with the world bounds someSprite.body.collideWorldBounds = true;

//Set the mass someSprite.body.mass = someValue;

//set the angle (same as rotation, but set in radians, which is more efficient) someSprite.body.angle = someValue;

//Allow sleep on a body
//Sleepingstate is turned on when a body is not/barely (see sleepSpeedLimit) doing anything. This helps save resources, because a lot of checks and functions don't need to be called by the system someSprite.body.allowSleep(); someSprite.body.sleepSpeedLimit = someValue;

//Make a body kinematic or static (default is dynamic)
//Kinematic: general physics don't apply (e.g. gravity), but it still can collide someSprite.body.kinematic = true;

//Static: the body just cannot move, but everything else can bump into it someSprite.body.static = true;
```

Knowing that, you can do pretty much everything. But, to simplify matters, there's a few standard functions:

``` {data-lang="javascript"}
//Moving backward, forward, left, right, up, down moveBackward(speed), moveForward(speed) moveLeft(speed), moveRight(speed) moveUp(speed), moveUp(down)

//Rotate left or right rotateLeft(speed), rotateRight(speed)

//Thrust and reverse (move forward or backward in the direction you're looking at) thrust(speed); reverse(speed);
```

## Mighty Methods and Easy Events

In P2, there's a lot of events you can listen for. Most of them keep track of when things are added/removed or when something begins/ends. Therefore, unlike the other systems, there are no 'global' collide and overlap functions available where you give the function two objects and they collide. This time, this functionality exists on a body itself. But, another thing p2 handles differently, is the fact that you can only collide objects with one or multiple **collision groups**. This means that everything you want the physics world to interact with, must be part of a certain collision group. This might seem unnecessary some times, but this helps speed up p2 and might even help you organize your game/code. So, basic collision detection goes like this:

``` {data-lang="javascript"}
//A script for colliding a ship (our player) with rocks var ship;

function create() {
    //  Enable P2
    game.physics.startSystem(Phaser.Physics.P2JS);

    //  Turn on impact events for the world, without this we get no collision callbacks
    game.physics.p2.setImpactEvents(true);

    //  Create our collision groups. One for the player, one for the rocks
    var playerCollisionGroup = game.physics.p2.createCollisionGroup();
    var rockCollisionGroup = game.physics.p2.createCollisionGroup();

    //Create rocks at random positions
    var rocks = game.add.group();
    rocks.enableBody = true;
    rocks.physicsBodyType = Phaser.Physics.P2JS;

    for (var i = 0; i < 8; i++)
    {
        var rock = rocks.create(game.world.randomX, game.world.randomY, 'rock');
        //  Tell the rock to use the rockCollisionGroup 
        rock.body.setCollisionGroup(rockCollisionGroup);

        //  Make the rocks collide with other rocks, and the player
        rock.body.collides([rockCollisionGroup, playerCollisionGroup]);
    }

    //  Create our ship sprite (give it a circle as collision body, don't allow it to rotate
    ship = game.add.sprite(200, 200, 'ship');
    game.physics.p2.enable(ship, false);
    ship.body.setCircle(28);
    ship.body.fixedRotation = true;

    //  Set the ships collision group
    ship.body.setCollisionGroup(playerCollisionGroup);

    // When our player/ship hits one of the rocks, a function is fired (hitrock)
    // And if it happens, reduce the rock's alpha value
    ship.body.collides(rockCollisionGroup, hitrock, this);

}

function hitrock(body1, body2) {

    //  body1 is the body that owns the callback (the ship)
    //  body2 is the body it impacted with (our rock)
    //  As body2 is a Phaser.Physics.P2.Body object, you access its owner (the sprite) via the sprite property:
    body2.sprite.alpha *= 0.9;

}
```

You might think that's an awful lot of code for such a simple thing. But, I've included some extras here to give you a better idea of how this works, because it's very important to understand that.

Now that you know this, you might have noticed that the possibility to check if two things overlap (which is equally important as the collide() function) isn't discussed. Well, that's because that is hidden between the Phaser Signals /  Event Listeners you can call on the P2 system.

This is discussed more thoroughly in another post, but a short summary: Phaser has built in methods that create so called 'phaser signals' when a certain event happens. All you have to do then, is pick up these signals and hand them a function to execute.

``` {data-lang="javascript"}
//Basic syntax for listening for events
//The context parameter is optional, and determines what defines the word 'this' game.physics.p2..add(functionToCall, context);

//These are all the possible events to listen for onBeginContact, onEndContact onBodyAdded, onBodyRemoved, onContactMaterialAdded, onContactMaterialRemoved onConstraintAdded, onConstraintRemoved, onSpringAdded, onSpringRemoved
```

However, although I said that those simple 'collide'/'overlap' functions don't exist here, there is an alternative that can be used sometimes, that checks if there's any body under a certain point in the world (most common use: checking all the bodies under your mouse pointer).

``` {data-lang="javascript"} game.physics.p2.hitTest(worldPoint, bodies, precision, skipStatic);
//Worldpoint: the point (x,y) in this world we'll check against
//Bodies (optional, array): a list of bodies to check against, if not set, it checks for all the bodies in the world
//Precision (optional, number): for checking very small objects (like lines)
//skipStatic (optional,boolean): whether or not to include static bodies when hitTesting

//This function returns an array of bodies that hit that point in the world. To access the sprites attached to them, use .parent.sprite
```

## Extra possibilities

Next to almost pixel-perfect collision, p2 offers some extra features to help speed up your game making process.

##### ContactMaterials

ContactMaterials are what p2 uses for calculating what happens when two materials collide. With the system, you can create several materials, and assign them to objects. Then, you can say 'hey, if this material and that one collide, I want this to happen'. An implementation:

``` {data-lang="javascript"} function create() {

    //  Enable p2 physics
    game.physics.startSystem(Phaser.Physics.P2JS);

    //Set overall world gravity
    game.physics.p2.gravity.y = 300;

    //  Add a sprite
    var player = game.add.sprite(200, 200, 'dude');
    game.physics.p2.enable(player);
    player.body.fixedRotation = true;

    //Create a material for the player (second paramater tells the game to automatically assign this material to the player's body)
    var spriteMaterial = game.physics.p2.createMaterial('spriteMaterial', player.body);
    //Create another material
    var worldMaterial = game.physics.p2.createMaterial('worldMaterial');

    // And assign this one to the world (4 trues for left/right/top/bottom faces)
    game.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);

    //Create a contact material and set it to the two materials we created earlier
    // Whenever the player touches the world's edges, the following happens
    var contactMaterial = game.physics.p2.createContactMaterial(spriteMaterial, worldMaterial);

    contactMaterial.friction = 0.0;     // Friction to use in the contact of these two materials.
    contactMaterial.restitution = 0.0;  // Restitution (i.e. how bouncy it is!) to use in the contact of these two materials.
    contactMaterial.stiffness = 1e7;    // Stiffness of the resulting ContactEquation that this ContactMaterial generate.
    contactMaterial.relaxation = 0;     // Relaxation of the resulting ContactEquation that this ContactMaterial generate.
    contactMaterial.frictionStiffness = 1e7;    // Stiffness of the resulting FrictionEquation that this ContactMaterial generate.
    contactMaterial.frictionRelaxation = 3;     // Relaxation of the resulting FrictionEquation that this ContactMaterial generate.
    contactMaterial.surfaceVelocity = 0.0;        // Will add surface velocity to this material. If bodyA rests on top if bodyB, and the surface velocity is positive, bodyA will slide to the right.

}
```

##### Springs

Adding a spring, is as easy as coding gets:

``` {data-lang="javascript"}
//  The parameters are: createSpring(sprite1, sprite2, restLength, stiffness, damping) var spring = game.physics.p2.createSpring(sprite1, sprite2, 150, 5, 1);
```

##### Constraints

A constraint basically defines a relation between two bodies: either a fixed distance, limits to their movement or rotation, fixing them to a certain point(/body) in space, reverse rotation between them (for gears for example), etc. This can't be done with one constraint function, therefore there are multiple ones covering all of the above:
**LockConstraint, DistanceConstraint, GearConstraint, PrismaticConstraint, RevoluteConstraint.**

###### LockConstraint

This is the most simple one: simply puts a fixed x and y offset between two bodies. It's almost the same as adding a body as a child of another body, so it moves in the exact same way, but the advantage of the lockconstraint is that you can keep the seperate bodies and easily specify distance.

``` {data-lang="javascript"} game.physics.p2.createLockConstraint(bodyA, bodyB, offset, angle, maxForce);
//BodyA and BodyB = the two bodies being constraint
//offset: The offset between 'em
//angle: The angle between 'em
//maxForce (optional): the maximum force the physics system is allowed to use when pulling them together. Too low: constraining takes too long, too high: you get some supernatural speeds in your game
```

###### DistanceConstraint

A distanceConstraint keeps two bodies at the same distance from each other, but allows all other types of movement. This means that for example one body can circle around the other, staying at the same distance the whole time.

``` {data-lang="javascript"} game.physics.p2.createDistanceConstraint(bodyA, bodyB, distance, maxForce);
```

###### GearConstraint

A gear constraint doesn't constrain distance, but rotation/angle. This type sets the relative rotation between two bodies (so, if one body would rotate 180 degrees, and the relative rotation would be 0.5, the other one would rotate 90 degrees).

``` {data-lang="javascript"} game.physics.p2.createGearConstraint(bodyA, bodyB, relativeAngle);
```

###### RevoluteConstraint

A revolute constraint is a more difficult one to understand. It connects two bodies at given points, and let's them rotate relative to each other around this point. Sounds complicated, but you can better think of these as a hinge or pivot joint. One body is the hinge itself of which the center represents the pivot point of the second body. The second body then has all the physics applied, but can only rotate around this fixed point.

``` {data-lang="javascript"} game.physics.p2.createRevoluteConstraint(bodyA, pivotA, bodyB, pivotB, maxForce);
//bodyA & bodyB = the two bodies being constrained
//pivotA, pivotB -> the point relative to the center of the body which it is constrained to
     //In case of a hinge, the first body could be a circle with it's pivot point at its center (so pivotA = (0,0))
     //The second one is the body (let's say rectangle) to rotate around that spot, which has it's pivotB set to the upper corner ( (-width/2, -height))
```

###### Prismatic Constraint

This one's even harder to understand (well, at least I thought it was difficult). Basically, a prismatic constraint forbids bodies any movement along one axis, and makes it able to freely translate along the other.

``` {data-lang="javascript"} game.physics.p2.createPrismaticConstraint(bodyA, bodyB, lockRotation, anchorA, anchorB, axis, maxForce)
//bodyA, bodyB = the two bodies being constrained
//NOTE: the rest of the parameters is completely optional
//lockRotation (boolean) = whether or not the bodies are allowed to rotate
//anchorA, anchorB = the bodies' anchor point (set relative to its own local frame)
```

##### Limits to constraints

If you've managed to figure out the type of constraint you want, and you applied it perfectly, you sometimes want to limit their behavior. This goes the same for all types, like this:

``` {data-lang="javascript"} someConstraint.upperLimit = someValue; someConstraint.lowerLimit = someValue;

//You can add a motor to constraints:
//Set the speed someConstraint.setMotorSpeed(12);

//Enable it: this makes the motor do its job someConstraint.enableMotor() 

//Disable it: motor falls quiet, object follows gravity and all other basic physics rules again someConstraint.disableMotor()
```

##### Chains

P2 doesn't have an easy function for creating chains, but using some revoluteConstraints we can easily simulate them. And as seen that chains are something you often need in physics games, I'll elaborate a bit on it! (the code below is for a big part taken from Phaser's Examples page, and only a bit modified to make it easier to understand (I hope))

``` {data-lang="javascript"} function preload() {
    //Load a spritesheet here
    //Two frames: first with one link of the chain from the front, second with one link of the chain from the side
    game.load.spritesheet('chain','./assets/sprites/chain.png',16,26);
}


function create() {
   //Start physics system, apply world gravity
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.gravity.y = 1200;

    //Call the createRope function we're going to create below
    createRope(40,400,100);  // (length, xAnchor, yAnchor)
};



function createRope(length, xAnchor,yAnchor){
    //Variable containing the last link, so we can fix the new one to it
    var lastRect;
    //Width and height of the physics body (height is less than the actual image, to make it look better)
    var height = 20;
    var width = 16;
    //The force that holds this chain together
    var maxForce =20000;
    //Create as many links as the length variable demands
    for(var i=0; i<=length; i++){
        //Set x and y anchor: the rope is straight down, so x doesn't change, y does with 'height' amount
        var x = xAnchor;
        var y = yAnchor+(i*height);
        //Switch between frame 0 and 1 (and bring the last created piece on top, for prettier visuals)
        if (i%2==0) {
            newRect = game.add.sprite(x, y, 'chain',1)
        } else {
            newRect = game.add.sprite(x, y, 'chain',0); 
            lastRect.bringToTop();
        } 
        //Enable a body on the new rectangle
        game.physics.p2.enable(newRect,false);
        //Set a custom rectangle for the body (for same reason that height is less than the actual image)
        newRect.body.setRectangle(width,height);

        //If this piece is the first one, make it static => anchor it to the xAnchor and yAnchor provided.
        if (i==0) {
            newRect.body.static=true; 
        } else {  
            //If not, give the piece a push (just to show you the effect of the rope)
            newRect.body.velocity.x = 100;
            //Reduce mass for every element (why? because the lower you get, the less gravitational energy is applied)
            newRect.body.mass =  length/i;
        }
        //From our second element on, we want to create a constraint between this one and the last one
        if(lastRect) {
            //Top of the new rectangle (0,-10), locks in with the bottom of the last rectangle (0,10)
            game.physics.p2.createRevoluteConstraint(newRect, [0,-10], lastRect, [0,10], maxForce);
        }
        //Update the last rectangle created!
        lastRect = newRect;
    }; 
}
```

" slug: "phaser-physics-p2-system" cat: "Games" subcat: "Phaser" video: "" diff: 4 quiz: "" - id: 8 title: "\[Phaser\] Awesome Preloaders" post: "

As your game reaches larger and larger sizes (due to more media and lots of code added), it's going to take a while to load. However, you don't want to wait 10 seconds, watching a black screen doing nothing, before a new screen loads. Therefore, implementing a preloader can be nice!

When implementing this preloader, you actually want 2 states before the main menu: **Boot **and **Preloader**.

**Boot.js**: this state loads the images needed for the preloader (the loadingBar, shouldn't take more than a second).

**Preloader.js:** this state displays the loadingBar, while loading the media for the game.

## Boot.js

In Boot.js, you can do the following:

``` {data-lang="javascript"} var Scenes = {};

//Receiving the game variable
//Another option: set the game variable as a global variable in the main html file Scenes.Boot = function (game) {
    this.game = game;
};

Scenes.Boot.prototype = {

    preload: function () {
        //Load images for a full loader and the empty one
        this.load.image('loaderFull', 'assets/UI/loaderFull.png');
        this.load.image('loaderEmpty', 'assets/UI/loaderEmpty.png');
    },

    create: function () {
        //Start the preloader-state
        this.game.state.start('preloader',Scenes.Preloader);
    },
    
}
```

NOTE: This would also be the place to adapt (scale) your game to which device is using it. Learn about that in the [**Phaser Multiple Devices Tutorial**](http://thehtml5guide.net84.net/7-phaser-multiple-devices/ "#7 Phaser – Multiple Devices")

NOTE2: Learn about all the media (image, spritesheet, audio, etc.) you can load in the [**Phaser Graphics/Design Tutorial** ](http://thehtml5guide.net84.net/6-phaser-graphics-and-design/ "#6 Phaser – Graphics and Design")

## Preloader.js

Then, in Preloader.js:

``` {data-lang="javascript"} Scenes.Preloader = function (game) {
    this.game = game;
};

Scenes.Preloader.prototype = {
    preloadBar: Phaser.Sprite,
    loaderEmpty: Phaser.Sprite,

    preload: function () {
        //Display an empty loader
        this.loaderEmpty = this.add.sprite(300, 300, 'loaderEmpty');

        //Create the full loader
        this.preloadBar = this.add.sprite(300, 300, 'loaderFull');
        //And let Phaser adjust it's size according to the loading progress
        this.load.setPreloadSprite(this.preloadBar);
    },
    
    create: function () {
        //Start the main menu once done loading        
        this.game.state.start('mainMenu', Main.MainMenu);
    },

}
```

And now you should have a well working preload-system. The user knows it's loading, how much is already loaded, and it looks great. Well, assuming you use great-looking art work, obviously

" slug: "5-phaser-awesome-preloaders" cat: "Games" subcat:
"Phaser" video: "" diff: 2 quiz: "" - id: 9 title: "\[Phaser\] Graphics and Design" post: "

There are multiple ways to load or display something, each with their own advantages and disadvantages

## Graphics

With Phaser, you can (dynamically) create simple shapes/drawings (like rectangles, lines, points, circles, arcs, etc.). These shapes can't be made into a sprite or given physics, so all you they do is just stand tall and proud in your game.

However, these graphics can be dynamically created, destroyed and in a few clever ways altered. This makes them the ideal candidate for some game design that doesn't have much interactivity, for they are faster to create, more dynamic and more efficient than creating images and putting them into sprites for every piece of your design.

``` {data-lang="javascript"} function create() {

    var graphics = game.add.graphics(0, 0);

    // set a fill (color,alpha)
    graphics.beginFill(0xFF3300,1);
    // and a line style (width, color,alpha)
    graphics.lineStyle(10, 0xffd900, 1);
    
    // draw any shape
    //moveTo: defines first/starting point of the shape
    graphics.moveTo(0,50);

    //every lineTo: defines the next point
    graphics.lineTo(250, 50);
    graphics.lineTo(100, 100);
    graphics.lineTo(0, 50);

    //end this fill = end the shape
    graphics.endFill();
    
    // draw a rectangle
    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.drawRect(50, 250, 100, 100);
    
    // draw a circle
    graphics.lineStyle(0);
    graphics.beginFill(0xFFFF0B, 0.5);
    graphics.drawCircle(470, 200,100);
    
    //draw a line
    graphics.lineStyle(20, 0x33FF00);
    graphics.moveTo(30,30);
    graphics.lineTo(600, 300);

}
```

## BitmapData

When something is of the type bitmapData, it basically means "we have this rectangle, and you can have control over every pixel inside of it, and you can either paint 'em or leave 'em alone".

So, it's basically the same as the graphics discussed before, but we now only have a certain field to work in, and we have limited options. So what's the upside of this? We can make them into a sprite!

``` {data-lang="javascript"}
//A Square
//Create a piece of bitmapData of 20x20 var aSquare = game.add.bitmapData(20,20);
//Create a rectangle in there, from (0,0) to (20,20)   (relative to the (0,0) of the bitmapData piece, not those of the game world) aSquare.rect(0,0,20,20,'rgba(100, 255, 100,0.6)');

//A Circle var aStar = game.add.bitmapData(20,20);
//Create a circle with center (10,10) aStar.circle(10,10,10,'rgba(255, 255, 100,0.6)');

//Create a sprite from the square var ourPlayer = game.add.sprite(50,50,aSquare);
```

This is great and all, but there's also an alternative method of drawing in a bitmapData, and this requires knowledge of traditional JavaScript canvas-drawing methods. Here's a square with a stroke, created by using the bitmapData's context:

``` {data-lang="javascript"} var smth = this.add.bitmapData(100,100); smth.context.fillStyle = 'blue'; smth.context.strokeStyle = 'green'; smth.context.rect(0,0,100,100); smth.context.fill(); smth.context.stroke(); game.add.sprite(50,50,smth);
```

## Different Media Types

But, next to that, there are also a few types of media you can load in the preloader function:

``` {data-lang="javascript"}
//Images game.load.image('name (for reference)','path (to file)');

//Audio
//Note: you can set an array of paths to the same audio file with different extensions, for not every browser supports the same type of file game.load.audio('name','path');

//BitmapFont
//The two parameters set to null are not very useful (they're for loading XML for your font game.load.bitmapFont('name','path',null,null, xSpacing, ySpacing);

//Spritesheets game.load.spritesheet('name','path','width of one frame','height of one frame','amount of frames','margin between frames','spacing between frames');

//atlas, JSON and tilemaps are also supported, but not important enough right now to talk about here.
```

## Spritesheets

Spritesheets are an incredibly useful way to animate characters/objects in your game.

A spritesheet is basically a long image (horizontally), with all the different frames or states of the character pasted next to each other. Every frame is of the same width and height and represents the character as idle, walking, jumping, crawling, exploding, watever.

Once you've loaded your spritesheet, you have to create animations out of it. Then you assign those to the player, and then (at the appropriate moment) you play them\...like this:

``` {data-lang="javascript"} player = game.add.spritesheet(x, y, 'reference to loaded spritesheet');

//Add animations to player for walking left and right
//add("name", [frames to display after each other], how many frames to play per second, whether to loop the animation or not) player.animations.add('left', [0, 1, 2, 3], 10, true); player.animations.add('right', [5, 6, 7, 8], 10, true);

//Then, at any time, you can start and stop them. player.animations.play('left'); player.animations.stop();

//Or pick one frame for the moment player.frame = 4;
```

## Fonts and Text!

Having text in your game is of course very important for the menus, buttons, score and health displayer, game over screen, and what not.

``` {data-lang="javascript"}
//Add text to the screen - (xPosition, yPosition, textToDisplay, fontToUse);
//A bitmapFont you loaded earlier game.add.text(50,50,"GAME OVER",'namehere');

//A font you specified in your CSS game.add.text(50,50,"Game Over",{ font: '30px GaramondPro'});

//The same font, with more properties: game.add.text(50,50,"GameOver", {
                font: "128px GaramondPro",
                fill: "#ff0044",
                align: "center"
            });
//Other properties include:
//fontWeight, lineSpacing, shadowBlur, shadowColor, shadowOffsetX, shadowOffsetY, stroke, strokeThickness
```

What's a bitmap font, you say? A bitmap font, is just an image of letters. The font can 't be scaled (which is why it doesn't require a size when initializing it), but has the advantage that it loads much much faster.