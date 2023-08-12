---
title: "Forms I"
weight: 21
type: "article"
codemirror: true
---

Forms in HTML are used to collect user input (and submit it). Interactivity is a _huge_ part of webpages and the internet, which is why we'll spend several chapters on this topic.

For example, when you log into a website, you probably go through a form. 

* A text field for your _username_
* A text field for your _password_
* A button to submit this information and login

Your email client also uses forms. (Text fields for the subject, recipient and content, then a button to submit.) They're everywhere! In many shapes and sizes!

Always remember, though, that HTML is merely a _markup_ language. It defines which elements go into the page; which input the page wants to collect. Actually _doing_ something with that input, is the responsibility of another language (like JavaScript).

For that reason, learning about forms might feel a bit boring for now. I promise to keep it short and practical!

## The form element

To create a form, use the `<form>` element. 

This is not just great for semantics, it also tells browsers to activate a few bonus features. 

Such as ...

* Asking the user if they want to _save_ the username + password they just entered
* Allowing users to navigate the form with keyboard controls
* The form acts as a container. When you click a _submit_ button inside the form, it will automatically submit all data inside the form! (No need to collect or group them manually.)
* The form still works, even if the user has an older browser or has disabled many other features. (That's why many websites still use this form element, instead of doing everything through JavaScript.)
* Clicking on a label will automatically focus on the interactive element associated with it.
* And more.

## The general structure

As always, HTML wants to add _structure_. It wants to subdivide the form into smaller and smaller parts. These are ...

* `<fieldset>` for a group of related inputs
* `<legend>` to provide a title for a fieldset
* **Pairs** of input elements and a title/name for such element.
* And finally, a submit button. (There's no point collecting data if there's no way to use it afterward!)

As such, the general structure will be something like this.

{{< playful-code lang="html" >}}
<form>
  <fieldset>
    <legend>Info</legend>
    <!-- Name + Input pair here -->
    <!-- Name + Input pair here -->
  </fieldset>
  <!-- Submit button -->
</form>
{{< /playful-code >}}

{{% remark %}}
As you see, the default style is pretty sensible. The fieldset gets a border around it, and the legend is placed on top of that border.
{{% /remark %}}

## Input pairs

As stated, input should always come in pairs.

* A `<label>` that contains a description for the input.
* The actual input element.

How are these connected?

* The label needs a `for="someid"` attribute.
* And the input element needs an `id="someid"` attribute.

They are connected through the _id_ you give it. This also means the label doesn't _have_ to be close to the input element, although it usually is. (It just makes more sense.)

See the example for a barebones login screen, which contains two of such "pairs".

{{< playful-code lang="html" >}}
<form>
  <fieldset>
    <legend>Login</legend>
    <label for="username">Username: </label>
    <input id="username" type="text">
    &nbsp;
    <label for="password">Password: </label>
    <input id="password" type="password">
  </fieldset>
</form>
{{< /playful-code >}}

An alternative is to add the input _inside_ the `<label>`. In that case, you don't need the `for` and `id` attributes. I don't like this, however, as it makes no semantic sense: you created a _label_ element ... and the content is **actually** a label _and_ some other input element? That's confusing.

{{% remark %}}
Even if your _design_ hides the labels or doesn't need them, they should still be added in the HTML. Semantics, semantics, semantics. Keep the visuals and the underlying data separate.
{{% /remark %}}

## Submit button

Next chapters will tell you about _all_ the things that the `<input>` element can do. For now, you will only learn one: how to create a submit button with it.

To do so, create an `<input>` element, and set its `type` attribute to `submit`. 

The input element is a _void_ element. To set the text on the submit button, set the `value` attribute. (If left out, the browser automatically translates the word "submit" to the user's language. Try it!)

{{< playful-code lang="html" >}}
<form>
  <input type="submit" value="Submitto!">
</form>
{{< /playful-code >}}

If you _click_ the button ... it will probably do nothing, or give an error. Why?

Because we haven't told the form where to go or what to do.

## Actually submitting

As said, HTML is **not** meant for doing stuff. All it has to do is _hand the data over to something else_---another page or another script.

To set this other page, use the `action` attribute. It takes any URL. (Even another website, if you know how to send information to it.)

{{< playful-code lang="html" >}}
<form action="some_other_page.html">
  <input type="submit">
</form>
{{< /playful-code >}}

At the other page, the submitted form data will be available. 

But how? In what format? 

Unfortunately, currently, we need a second attribute to deal with this: `name`. (In the future, I imagine this isn't needed anymore, and it will take the `id` by default.)

Give each input element a name. Now the submitted data will be a list of those _pairs_ we created!

* The name of each pair comes from that attribute
* The value of each pair is whatever value your input element had when submitted

{{< playful-code lang="html" >}}
<form action="some_other_page.html">
  <label for="username">Username? </label>
  <input id="username" name="usn" type="text">
  <label for="password">Password? </label>
  <input id="password" name="pwd" type="password">
  <input type="submit">
</form>
&nbsp;
<!-- At the other page, we will have a list of (usn => value, pwd => value) -->
{{< /playful-code >}}

Only data from within its own `<form>` element is submitted. If another form also had an input named `usn`, for example, it wouldn't matter.

Generally, don't use the same name for multiple form elements. In the upcoming chapters, however, you'll learn about some rare elements that _require_ you to use the same name multiple times.

## GET vs POST

The details of this process aren't important now. Just know that there are two ways to pass form information: `get` or `post`. You can set your method using the `method` attribute.

* GET = puts the data into the _url_. This makes it faster and easier to use, but also makes the data public. Do not use for sensitive information.
* POST = hides the data behind the scenes. Slower and harder to access, but suited for sensitive information

The example below creates a form that hands its data to _Google_ for a search! If you check the URL, you'll see the data is added to the end (`?q=yoursearchterm`), because we used the GET method.

{{< playful-code lang="html" >}}
<form action="https://www.google.com/search" method="get" target="_blank">
 <label>Google: <input type="search" name="q"></label> 
 <input type="submit" value="Search">
</form>
{{< /playful-code >}}