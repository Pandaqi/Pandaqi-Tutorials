---
title: "Input I"
weight: 23
type: "article"
codemirror: true
---

In the previous chapters, I already showed a few ways to use the `<input>` tag. For example, you use it for the _submit_ button of a form, but also a basic empty text field. The only difference? The value of the `type` attribute.

There are _many_ ways to provide input. As time goes on, even more are added to the HTML standard, if people deem them common enough. That's why they chose to use the same `<input>` element for all of them, picking the exact type using the well-named `type` attribute.

As always, you want to be as precise as possible. Use the input tag that _best describes_ the input it should contain. For example, if you want the user to enter an email, you can use a generic text field. But HTML also supports an _email_ input, so use that! Not only does it describe your webpage better, you'll also get help from browsers. They'll automatically restrict input and _check_ whether a valid email was entered.

As always, we move from "big" to "small". This chapter starts with some attributes that apply to _all_ (or most) input elements, changing them in crucial ways. Once you know these, we can dive into every specific type you can create. (And because you've already seen these attributes, you also already know how to manipulate each type to do exactly what you want.)

## Attributes

### Global

Below is a list of global attributes the `<input>` tag can take. This means they are applicable to _all_ types!

Once you see the list, you'll understand why they exist. Minimized attributes have an empty _values_ cell.

Attribute | Values | Description |
--------- | ------ | ----------- |
`value` | Anything | Sets a default value for the input. |
`required` | | Must be filled-in, otherwise the form won't submit. |
`placeholder` | Anything | Shows a default value or instruction, until the user actually provides input. |
`readonly` |  | If added, the input cannot be changed. |
`disabled` |  | If added, the input cannot be changed _and_ isn't included when you send the form. | 
`autocomplete` | | If a user has filled in this element before, the browser autocompletes it. (This works based on the `id` attribute.) | 
`autofocus` | | If added, user automatically focuses on this element after the page has loaded. | 
`list` | Datalist ID | As seen in the previous chapter, this is how you couple a datalist to an input. | 

Try enabling the submit button in the example below. And try submitting the form without filling in the required field(s).

{{< playful-code lang="html" >}}
<form>
    <input type="text" name="usn" placeholder="Please enter a username ...">
    <input type="text" name="joke" placeholder="Tell me a joke!" required>
    <input type="submit" value="Can't click me." disabled>
</form>
{{< /playful-code >}}

{{% remark %}}
If you want to turn off automatic validation of your input by the browser, add the minimized `novalidate` attribute to your `<form>` element.
{{% /remark %}}

### Numeric Attributes

These work on any input field related to _numbers_.

Attribute | Values | Description |
--------- | ------ | ----------- |
`min` | Number | Sets a lower bound for which numbers are allowed. |
`max` | Number | Sets an upper bound for which numbers are allowed. |
`step` | Number | Determines the distance between two subsequent numbers. |

Below is a form for a store that somehow only prices products in multiples of 10.

{{< playful-code lang="html" >}}
<form>
    <label for="price">Please input a price.</label>
    <input type="number" id="price" min="0" max="50" step="10"> 
</form>
{{< /playful-code >}}

### Text Attributes

These work on any input field related to _text_.

Attribute | Values | Description |
--------- | ------ | ----------- |
`maxlength` | Number | Sets a maximum length on the input (only useful for text). |
`pattern` | RegEx | Requires a _regular expression_ and only allows text that matches it. (These are not part of HTML and will be discussed in the JavaScript Course.) |

{{< playful-code lang="html" >}}
<form>
    <label for="usn">Try typing more than 10 characters.</label>
    <input type="text" id="usn" maxlength="10"> 
</form>
{{< /playful-code >}}

## Hidden field

This might actually be the most common input. You just don't know it, because you never see it :p

Remember how forms automatically collect and submit all data within them? Well, sometimes you need data that's not directly _input_ or _seen_ by the user.

For example, the user might input some numbers, and then you calculate something _behind the scenes_. This result should be sent with the form, but you don't want the user to see it.

That's when you use `type="hidden"`. Remember that you can always use the `value` attribute to set a (default) value on an input.

{{< playful-code lang="html" >}}
<form>
    <input type="hidden" id="secret-id" value="81fui31"> 
</form>
{{< /playful-code >}}

{{% example %}}
Another common use case is when you _reply_ to a comment. When it opens the textfield to write your own comment, it adds a few hidden inputs such as the ID of the comment _to which you're replying_. It's just a very easy and natural way to remember information you need, so it is automatically sent with the form.
{{% /example %}}

## Text field

If not the _hidden_ input, then the _text_ input is surely the most common. A simple text field. The input is always on a single line. (If you want something else, remember the existence of the `<textarea>` element.)

Create it using `type="text"`.

{{< playful-code lang="html" >}}
<form>
    <label for="usn">Username? </label>
    <input type="text" id="usn"> 
</form>
{{< /playful-code >}}

## Password field

The second most common input. A text field ... but all characters are changed into dots that don't reveal your password to anybody spying your screen :p

Create it using `type="password"`.

{{< playful-code lang="html" >}}
<form>
    <label for="pwd">Password? </label>
    <input type="password" id="pwd"> 
</form>
{{< /playful-code >}}

## Number field

If the input must be a number, use this one. It allows text input, but also shows little arrows to click on.

Create it using `type="number"`.

{{< playful-code lang="html" >}}
<form>
    <label for="kids">How many kids do you have? </label>
    <input type="number" id="kids" min="0" max="10"> 
</form>
{{< /playful-code >}}

{{% remark %}}
I come from a large family, so 10 kids isn't even such a high maximum ...
{{% /remark %}}

## Slider

The input is still a number, but sometimes it feels much better to use a slider. A slider is less precise (it's harder to place it on some _exact_ number), but faster to use and more intuitive.

Create it using `type="range"`.

{{< playful-code lang="html" >}}
<form>
    <label for="rating">Please tell us how much you enjoy candy (0%->100%)</label>
    <input type="range" id="rating" min="0" max="100"> 
</form>
{{< /playful-code >}}