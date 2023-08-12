" slug: "6-phaser-graphics-and-design" cat: "Games" subcat:
"Phaser" video: "" diff: 2 quiz: "" - id: 10 title: "\[Phaser\] Multiple Devices" post: "

The big advantage of HTML5 games is that they can be played on any device. But, to really make the most of it, we also want it to display perfectly on every screen, with every size. Now you could of course go on and create a few different versions of every variable and code snippet for different screen sizes, but that's not really the easiest way to go. No, we're going to use Phaser's Scale Manager!

## Deciding how you want it scaled

So, you've created a game in your own browser, the dimensions were always 1200x900, and every number is adjusted to that. Then it would be a real pain in the ass to make every number dependent of width/height. So, we better use the scale manager to scale the size of the game, while at the same time scaling the game itself, making it work exactly the same everywhere. However, there are different ways you may want to have your game scaled, and there are different methods to achieve that - sadly enough, there's not one best and proven method provided at the moment.

What you probably want though is that your game is resized to fill as much of the screen as possible, but still maintains its own proportions
(so it isn't stretched or distorted). We'll focus on that here.

## Setting your basic requirements

So, the first thing you want to do is add a piece of code in the

## Creating the basics for any HTML5 game

Any HTML5 game has a loop at its core, its heart that keeps beating, that works like this: we tell JavaScript to call a certain function about 60 times per second (depends on the framerate you choose or what your system can handle). Every time the function is called, the complete screen is cleared of all objects, and then the whole game is drawn again with the updated positions/rotations/objects/etc. Luckily, the good people creating JavaScript, have created a function for just that.

    function render()
    {  
        //Loop this render function we're in at 60 frames/second
        //Also, when we're not focussed on this webpage, this pauses our game (useful!)
        requestAnimationFrame(render);

        //All the logic for your game comes here, this is where all the magic happens
        ...

        //And once the magic has happened, we tell THREE.JS to update the scene according to the new standards
        //'renderer' is a variable we'll define in the next part
        renderer.render(scene, camera);
    }

    //And last but not least, don't forget to call the function ONCE
    render();

## Creating the basics of a Three.js 3D scene

Now that the game's webpage is created, and we're sure we're looping our game at a comfortable framerate, we need to initiate Three.js and create a basic scene we can do stuff with later on. As stated earlier, we're going to need a few different things for it to work. Put this just after the

First, instantiate a new DOM Events layer:

``` {data-lang="javascript"}
//Requires the current camera and renderer var domEvents   = new THREEx.DomEvents(camera, renderer.domElement)
```

The extension works just like event listeners: you can add an event on a function, and if you don't need it anymore you can remove it.

``` {data-lang="javascript"}
//Add an event listener for a click on a certain object someMesh.on('click', function(){
    //Execute code block here
    someMesh.scale.x *= 2;
});

//To remove it, simply use... someMesh.off('click', callback);

//Currently supported events: click, dblclick, mouseup, mousedown, mouseover and mouse out
```

##### Keyboard events

Again, download the plugin
[here](http://learningthreejs.com/data/THREEx/THREEx.KeyboardState.js)

Include it with your page's header:

``` {data-lang="html"}
```

Then, instantiate it:

``` {data-lang="javascript"} var keyboard = new THREEx.KeyboardState();
```

Then check whether a key (or combination of keys is pressed)!

``` {data-lang="javascript"}
//Combination of SHIFT and P if(keyboard.pressed("shift+P")) {
     pauseGame();
}

//Just P if(keyboard.pressed("P")) {
    drawPistol();
}

//If you don't need it anymore, destroy the listener keyboard.destroy();
```

##### Trackballcontrols

Trackballcontrols? Trackballcontrols. It's an extra script from the Three.js author himself that you can include, and it enables you to zoom in/out and pan and move around the scene with the camera. It's not enormously useful in most games, but invaluable when debugging.

Get the trackballscript
**[here](https://raw.githubusercontent.com/mrdoob/three.js/master/examples/js/controls/TrackballControls.js) **(and include it, you know the drill)

``` {data-lang="javascript"}
//Create new controls variable containing the trackballcontrols, applied to a certain camera
//Then set some properties, and that's it! controls = new THREE.TrackballControls( camera );

controls.rotateSpeed = 1.0; controls.zoomSpeed = 1.2; controls.panSpeed = 0.8;

controls.noZoom = false; controls.noPan = false;

controls.staticMoving = true; controls.dynamicDampingFactor = 0.3;

controls.addEventListener( 'change', render );
```

### Math

Sprites. Beziercurves and splines. Animations." slug:
"6-three-js-tutorial-for-professionals" cat: "Games" subcat:
"Threejs" video: "" diff: 4 quiz: "" - id: 20 title:
"\[Three.js\] Physics with Physijs!" post: "

There are many great javascript physics engines out there, but PhysiJS was made specifically for Three.js, so I think it's the best fit.

## Setup

First, get the necessary file(s) [on GitHub](http://chandlerprall.github.io/Physijs/)

To add Physijs to a Three.js project, you simply need to follow a few easy steps.

But first of all, don't forget to add a

#####  Create basic tween

``` {data-lang="javascript"}
//Set position and target coordinates var position = { x : 0, y: 300 }; var target = { x : 400, y: 50 };

//Tell it to tween the 'position' parameter
//Make the tween last 2 seconds (=2000 milliseconds) var tween = new TWEEN.Tween(position).to(target, 2000);

//Now update the 3D mesh accordingly tween.onUpdate(function(){
    mesh.position.x = position.x;
    mesh.position.y = position.y;
});

//But don't forget, to start the tween tween.start();

//And also don't forget, to put this into your looping render function tween.update();
```

#####  Do even more awesome stuff

``` {data-lang="javascript"}
//Delay the start of the tween tween.delay(500);

//Set a different tweening (easing) function tween.easing(TWEEN.Easing.Elastic.InOut);

//Create a chain of tweens
//For example: this one loops between firstTween and secondTween firstTween.chain(secondTween); secondTween.chain(firstTween);
```

A list of all the different easing functions can be found here: [31 Easing Functions](http://sole.github.io/tween.js/examples/03_graphs.html)

## Other Types of Animation

//todo" slug: "11-three-js-animationmovement" cat: "Games" subcat:
"Threejs" video: "" diff: 3 quiz: "" - id: 23 title:
"\[Three.js\] Beginners GLSL Tutorial" post: "

GLSL stands for (Open)GL Shading Language. It's the programming language used for OpenGL/WebGL shading, and it's incorporated into the Three.js library. Of course, this language is also applicable anywhere else you intend to use WebGL, but I'm focusing on Three.js here. It's kinda like C, but specialized in shaders (so a lot of functions for vectors).Basically, what you can do with GLSL is determine what the shader does when it is run on a certain geometry. And what a shader does, can be nearly anything.

## The Shading Pipeline

When we're shading a 3D scene, there are multiple different stages in the pipeline. We're able to completely modify two of these stages, the *vertex shader* and the *fragment shader*. This image presents a basic overview of the pipeline:

![](media/ShaderPipeline-01.png)

As you see, first the basic code is loaded on the CPU's part. Then, it passes on the geometries for all objects (and camera/light info) to the GPU.

This GPU receives them, and send each vertex through the **vertex shader**. Here you can modify them in any way you like.

Then the modified vertices are send back, and some operations are performed to determine which object is in front, clipping occurs outside of the camera's view, etc. What's left then, is send to the **fragment shader**, which basically gets a lot of triangles, and has to determine the colors for each pixel in them. These are sent back and properly displayed on the monitor.

## Uniform, varying and attribute

What's also shown in the diagram, are weird types of variables. These are three different types of variables (like local, global, static, etc. - but different) used in GLSL.

-   *Uniform*, is a variable that is the same for both shaders. For
    example, the light's position and color. Therefore, it is also
    read-only.
-   *Varying*, is passed in to the vertex shader, then **modified**, and
    then the new value is passed to the fragment shader. For example, if
    you change the positions of vertices, you also have to change their
    normals (which are given to and used by the fragment shader) so
    shading works correctly.
-   *Attribute*, is only available in the vertex shader, and is
    read-only: they are standard variables for a vertex' position,
    normal, etc.

## A Basic Shader

The most basic shader you can get, simply leaves the vertex positions as they are and gives the whole object one overall color.

***Vertex Shader*** *(gl_Position)****:***

``` {data-lang="glsl"}
//Here's the space for variables

//The built-in main function void main() {
  //Every vertex shader must eventually set 'gl_Position'
  //And in this case, we multiply the vertex position with the camera view and screen matrix to get the final output.
  gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4(position,1.0);
}
```

***Fragment Shader** (gl_FragColor)**:***

``` {data-lang="javascript"}
//Again, space for variables

void main() {
  //Just as vertex shader, fragment shader must in the end set this variable (gl_FragColor)
  //We set it to a pink color.
  gl_FragColor = vec4(1.0,  // R
                      0.0,  // G
                      1.0,  // B
                      1.0); // A
}
```

This shader simply displays the object with a color, nothing more, nothing less. The vertex shader leaves the position as it is, and gives it to the fragment shader. This one gives the fragments their colors and we're done!

## But, where do we put shader code?

Good question! There are multiple possibilities, but the one that's used the most is by putting the shader code into '

//Fragment Shader Code

## And the final bit: add it to the scene

Last but certainly not least: we must add the shaders together into a material Three.js can use.

``` {data-lang="javascript"}
//Create a new Shader Material with our code powering it var itemMaterial = new THREE.ShaderMaterial({
    //Optional, here you can supply uniforms and attributes
    vertexShader: vShader,
    fragmentShader: fShader,
});

//Create a new item with our material var item = new THREE.Mesh(new THREE.CubeGeometry(100, 10, 10), itemMaterial);
```

## That's\...the basics.

You haven't really accomplished much. I'm not saying this to make you feel bad about yourself, I mean: we've just recreated what can also be done with a Three.js standard material. Now, it's time to start adding lots of more fun, and we do exactly that in the next part.

" slug: "9-three-js-complete-glsl-tutorial" cat: "Games" subcat:
"Threejs" video: "" diff: 4 quiz: "" - id: 24 title:
"\[Three.js\] GLSL Advanced Tutorial" post: "

In the previous tutorial, you learned all about setting up GLSL and how it works (the fundamentals). Now, I'll show you how you can do special things with it!

## Define variables

At the top of a shader, above the *main* function, we define the different variable types I mentioned earlier (varying and uniform). If you define a variable in one shader, you have to define it in the exact same way in the other shader as well! When creating a new variable in GLSL outside of the main function you have to state its GLSL-type and its normal/usual type. This sounds weird, but that basically means: uniform/varying/attribute + float/int/vec3/etc. Like this:

``` {data-lang="glsl"}
//This bit is the same in vertex and fragment shader varying vec3 vNormal; uniform vec3 uLightDirection;

void Main() {
    //blabla..
}
```

It's common practice, to put a little 'v' or 'u'  in front of varyings and uniforms respectively, so you know what type something is by looking at the name. If you then define variables inside the Main function, it works the same way, but you just leave out the first bit
(varying/uniform).

**NOTE:** If you create a *float* variable, it wants all its input in float numbers! So don't use a 1 or 0, use 1.0 and 0.0

## Do something with 'em!

I'm just going to show you how this works with an example. This example creates some 'fake' shading on an object. We first pass the normal for every vertex to the fragment shader (this works because interpolation of normals occurs between the two), and then use that and a custom light we set to create shading.

**Vertex Shader:**

``` {data-lang="glsl"}
//This variable will contain the normal varying vec3 vNormal;

void main() {
  // 'normal' is a standard value provided by Three.js for every vertex
  // just as 'position'
  vNormal = normal;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
```

**Fragment Shader:**

``` {data-lang="glsl"}
//Declared in exactly the same way as Vertex Shader varying vec3 vNormal;

void main() {
  //Create a vector to determine where light comes from 
  // (similar to directional light in this case)
  vec3 light = vec3(0.5, 0.2, 1.0);

  //Normalize it 
  light = normalize(light);

  //Calculate 'dot product'
  // and clamp 0->1 instead of -1->1
  float dProd = max(0.0,
                    dot(vNormal, light));

  //And output this color.
  gl_FragColor = vec4(dProd, dProd, dProd, 1.0);  //RGBA

}
```

*What's this **dot product**?* The dot product, is an often used (and therefore built-in) function that calculates the cosine between two vectors. If the normal and light vector are equal (point in same direction), this returns 1 (fully lit). If they are completely opposite, this returns -1 (which we make 0.0, and is completely dark).

*What's the **normalize** for?* Normalize shrinks all three values of the vector down to a value between 0 and 1. This must be done to calculate the dot product. If one of the vectors is not normalized, then the equation does not work properly. Now you should have a nicely shaded
3D object!

## Passing through attributes

Now we've seen some uniforms and varyings in action, but where are those attributes? Well, those are usually passed in from the HTML page - you can also input uniforms from there. First you create a JS Object that will contain all the attributes, then inside that you create another new object for every attribute that holds the type and value. Then, you pass it into the Shader. Like this:

``` {data-lang="javascript"}
//Attributes
//Every element of the array corresponds with the vertex of the same index var attributes = {
  displacement: {
    type: 'f', // a float
    value: [] // an empty array
  }
};

//Uniforms var uniforms = {
  amplitude: {
    type: 'f', // a float
    value: 0
  }
};

//Create final ShaderMaterial var shaderMaterial =
    new THREE.MeshShaderMaterial({
      uniforms:       uniforms,
      attributes:     attributes,
      vertexShader:   vShader,
      fragmentShader: fShader
    });
```

Then of course, you also need to define these variables at the top of the shader(s) so that they are properly received, and then within the Main function you can use them for whatever you want!

## Data Types!

GLSL supports a few basic data types, and a few specifically useful ones when working with 3D graphics:

-   **int** integer (0,1,10,-5,etc.)
-   **float** floating point number (0.2, -0.5, 15.6, 4/3, etc.)
-   **bool** boolean (true or false, 0 or 1)
-   **vec2, vec3, vec4**: vectors of length 2,3,4 respectively
-   **mat2, mat3, mat4:** matrices of 2x2, 3x3, 4x4 respectively

GLSL is optimized for throwing vectors together, so for example a vec4 can be created by saying vec4(someVec3, 4thvalue). Also, you can multiply a vec3 with a single float variable (*scalar*) without the program throwing all sorts of errors. This will simply multiply each component of the vector seperately.

*How could there ever be a 4-dimensional vector?*

Well, any vec4 in GLSL has the properties RGBA or XYZW you can get/set, depending on your interpretation.

RGBA works for colors: a red, green and blue channel, and an *alpha*
(opacity) channel).

XYZW works for actual points and vectors: the x, y, z coordinate, and the fourth W value decides what type it is (because something with an x, y and z could be both  a vector and a point). Vectors have 0, points have 1. And then you might think 'why didn't they just create different functions for vectors and points?' Because using this fourth value helps a lot when it comes to using *matrices* (which is what the computer does a lot)..

## Built-in methods

All the usual methods are built into GLSL: if/else statements, for loops, do while loops, etc. However, I recommend you try to avoid if/else statements as much as possible. They are (relatively) heavy on the GPU, and as seen that for now performance/steady FPS is the major bottleneck in most 3D web apps, you'll want to optimize performance as much as possible. It also has the other standard (math) functions:

-   **sin, cos, tan, atan**
-   **pow, exp, log, exp2, log2, sqrt, inversesqrt**
-   **abs, floor, ceil, mod, sign, min, max, clamp**

(if you don't know some of these, look them up, they can really help you out sometimes.)

Next to that, there are ***GLSL-specific (vector) functions***. You've already seen **normalize** and **dot product**, and here's the rest:

-   **Length** (length()): Returns the length of the vector that's put
    into it.
-   **Distance** (distance()): Returns the distance between two points
    put into it.
-   **Cross product** (cross()): Returns the axis of rotation between
    two vectors, i.e. the vector that is perpendicular to both vectors.
-   **Reflect** (reflect()): Reflects a vector (needs the incoming
    vector, and a vector representing the normal of the surface).
-   **Refract** (refract()): Refracts a vector (needs the incoming
    vector, normal of surface, and ratio or refraction).

## Textures!

To add textures to your shader, are multiple steps are required. First. you must use Three.js to load a texture to a variable. Then you pass this data as a uniform variable to the shader. Then within the shader you must pass the UV coordinates of every vertex to the fragment shader, so that the latter can use both variables (texture and UV) to access the correct part of the texture to display. Sounds complicated? Not really, just look at this code:

**For the main page/javascript:**

``` {data-lang="javascript"} var tex = THREE.ImageUtils.loadTexture('/path/to/texture.png');
//optionally set some settings for it
//tex.magFilter = THREE.NearestFilter;

//Create the material, pass in the texture as a uniform with type 't' var mat = new THREE.ShaderMaterial({
    uniforms: {
        theTexture: {type: 't', value: tex}
    },
    vertexShader:vShader,
    fragmentShader:fShader,
    //Set transparent to true if your texture has some regions with alpha=0
    transparent: true
});
```

**Vertex Shader:**

``` {data-lang="glsl"}
//A varying that gets the UV coordinates and gives them to the FS varying vec2 vUv;

void main() {
    //Get UV coordinates
    vUv = uv;
    //As always, keep position as is
    gl_Position = projectionMatrix *
                  modelViewMatrix * vec4(position, 1.0 );
}
```

**Fragment Shader:**

``` {data-lang="glsl"}
//Same varying to retrieve UV coordinates  varying vec2 vUv;
//A uniform of type 'sampler2D' with the same name as was used in Three.js uniform sampler2D theTexture;
  void main() {
    //Get the color from the texture by using texture2D()
    //And as always, set it to the fragment's color
    gl_FragColor = texture2D(theTexture, vUv);
}
```

It's that simple! Well, for simple textures. If you want to go crazy, I suggest you pick up a good book on the math behind 3D computer graphics.

## And now?

Now you've learned the basics of GLSL. But of course, there's much more! You could animate the uniforms you put into the shader, add normal and bump maps, create awesome materials, anything you like!

However, I must leave you on your own here. Experiment yourself and create inspiring 3D graphics and shaders!

" slug: "10-three-js-glsl-advanced-tutorial" cat: "Games" subcat:
"Threejs" video: "" diff: 5 quiz: "" 