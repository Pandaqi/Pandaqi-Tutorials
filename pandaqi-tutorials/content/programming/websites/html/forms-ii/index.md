---
title: "Forms II"
weight: 22
type: "article"
codemirror: true
---

Last chapter taught you the overall structure of a form: how to create one, how to label inputs, and how to submit the data. But I haven't taught you many specific input elements yet.

That changes now!

This chapter talks about all the interactive elements that _don't_ use the `<input>` tag. Why? Because the `<input>` tag is so powerful, that I wanted to put it into its own chapter, once you were ready for it.

## Textarea

The `<textarea>` element provides a big area for typing text. By default, it can be resized (by clicking and dragging the bottom right). This is a regular element, not a _void_ element, which means that its default value is just its content.

It takes a few special attributes

* `cols`: its width in columns (number)
* `rows`: its height in rows (number)

Unfortunately, there's no HTML attribute to turn off resizing. It must be done through CSS.

Remember, from previous chapter, to give the textarea a `name` if you want to submit its data.

{{< playful-code lang="html" >}}
<form>
  <textarea name="quote" cols="40" rows="5">
    To be, or not to be ...
  </textarea>
</form>
{{< /playful-code >}}

## Dropdown

A dropdown list is ...

* A list of options
* That only appears when you click it. (When clicked, the list of options "drops down")
* Allowing you to pick one of the options

It's a common, efficient way to ask a user: "which of these X options do you want?"

It requires two elements.

* A `<select>` element
* Which contains any number of `<option>` elements (one for each option)

The `name` should be set on the `<select>` element (once), not every option. 

Each option needs a `value` attribute that contains the actual value. 

_Why not just use the content for that?_ To split _meaning_ and _visuals_, as always. You can present a certain text to the user, but set a different (more useful/meaningful) value behind the scenes. Additionally, the `value` attribute is used by almost all input elements in that way. It's nice and consistent.

This is also illustrated in the example below. (Try to add or remove options!)

{{< playful-code lang="html" >}}
<form>
  <label for="pets">What's your favorite pet?</label>
  <select name="pets" id="pets">
    <option value="dog">Doggo!</option>
    <option value="cat">Catsie!</option>
    <option value="rabbit">Bunbun!</option>
  </select>
</form>
{{< /playful-code >}}

The first element is displayed by default. To pick another one, set the minimized `selected` attribute on the `<option>`. (Try adding it to the cat or the rabbit!)

## Datalist

The datalist is a more flexible implementation of a dropdown list. It merely defines a list of _options_, which can be used by other input elements in different ways.

How it's displayed, depends on which input element uses the list. Below, I will give one common and simple example: using a _text_ input field.

To create a datalist,

* Use a `<datalist>` element
* Containing `<option>` elements like before. These can be _void_ elements. (They need no content, for they're not displayed.)

To _use_ it, create any form element and set its `list` attribute to the `id` of the datalist.

{{< playful-code lang="html" >}}
<form>
  <!-- We define the list of options -->
  <datalist id="pet-options">
    <option value="Dog">
    <option value="Cat">
    <option value="Rabbit">
  </datalist>
&nbsp;
  <!-- Then we use it in some other element -->
  <label for="pets">What's your favorite pet?</label>
  <input list="pet-options" id="pets" name="pets">  
</form>
{{< /playful-code >}}

In case it isn't clear: try typing one of the options in the text input.

## Output

Sometimes, the form combines multiple of its elements into a new element. For example, say somebody is filling in their tax returns. They fill in their income, their insurance, maybe more, and the form immediately _combines_ that information into some output at the bottom: the amount of money you have to pay.

For this, we have the `<output>` tag.

It needs a `for` attribute which holds the ids of _all_ elements that go into the calculation, separated by a space.

{{< playful-code lang="html" >}}
<form>
  <input type="number" id="num1" value="10">
  +<input type="number" id="num2" value="20">
  =<output name="calculation-output" for="num1 num2">
</form>
{{< /playful-code >}}

You'll notice this doesn't actually do the _calculations_. Because, as always, HTML doesn't _do_ anything. You'd have to write JavaScript to actually extract these values, perform the calculation, and put the result into that `<output>` tag.

This element therefore mostly has semantic value. It clearly states its meaning and purpose.

## Button

To create a button, simply use the `<button>` element. Alternatively, use an `<input>` tag, with `type="button"` attribute. Buttons are pretty common on webpages, that's why we have two ways to create them.

It has no automatic behavior. If you want it to do something, you'll have to attach JavaScript to it. That's why we can be quick about it and move on to next chapter!

{{< playful-code lang="html" >}}
<button>Click me! It does nothing!</button>
<input type="button" value="What? Another button?">
{{< /playful-code >}}

{{% remark %}}
By now, you're hopefully itching to try those other languages: CSS and JavaScript. Good. You're almost done with HTML, after which you can dive into those amazing worlds :)
{{% /remark %}}

{{% remark %}}
Although, these days, many just use a link (`<a>`) and style it to _look_ like a button. If the purpose of the button is indeed to link to another page, then this is fine. If the button does something else, this is semantically wrong!
{{% /remark %}}

## Conclusion

I suggest inventing a reason to create a form, to practice these elements. A login form is nice, an email form, a fake "tweet" interface perhaps, a fake "search engine" form.

Create a few of these to get the hang of forms. The next two chapters will be about the `<input>` element, which you'll probably need a lot while doing this exercise.

Let's continue!