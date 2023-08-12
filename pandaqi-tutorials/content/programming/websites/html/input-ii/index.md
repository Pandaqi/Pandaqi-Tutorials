---
title: "Input II"
weight: 24
type: "article"
codemirror: true
---

Continuing on last chapter, let's talk about some more types you can set on the `<input>` element. These are less common, with the most specific (and thus least common) ones all the way at the end.

## Selection

HTML distinguishes two ways to select something.

* Only _one_ option is allowed (out of all possible options)
* Any number of options is allowed

The first is called a **radio select** and the second a **checkbox select**

### Radio

By default, these show up as little circles. When selected, they have a dot inside. Otherwise, they're empty.

How do you tell HTML that radio options belong together? By giving them the same `name` and `id`. 

* When you select a new one, the browser automatically deselects the other. (As, remember, a radio select only has exactly ONE option selected at all times.)
* When the form is send off, the browser only sends the value that was actually selected.

Create it using `type="radio"`.

It is common to group all the radio buttons inside a `<fieldset>` element, using the `<legend>` as the general label.

{{< playful-code lang="html" >}}
<form>
    <fieldset>
        <legend>What is your favorite food?</legend>
    </fieldset>
    <input type="radio" id="option-veg" name="favorite-food"><label for="option-veg">Vegetables</label>
    <input type="radio" id="option-fruit" name="favorite-food"><label for="option-fruit">Fruit</label>
    <input type="radio" id="option-other" name="favorite-food"><label for="option-other">Other</label>
</form>
{{< /playful-code >}}

### Checkbox

Checkboxes don't care how many are selected. As such, they are not "connected". In a sense, a checkbox doesn't care about any other checkboxes that exist. They are toggled on/off individually.

It is up to _you_ to give them sensible names, so you can use them properly once you receive the form data. (As always,this isn't HTML, this is JavaScript.)

Create it using `type="checkbox"`.

To keep the HTML clean and obvious, it's also recommended to group these inside a `<fieldset>`.

{{< playful-code lang="html" >}}
<form>
    <fieldset>
        <legend>Please choose all food that you like.</legend>
    </fieldset>
    <input type="checkbox" id="option-crisps" name="option-crisps"><label for="option-crisps">Crisps</label>
    <input type="checkbox" id="option-banana" name="option-banana"><label for="option-banana">Banana</label>
    <input type="checkbox" id="option-cake" name="option-cake"><label for="option-cake">Cake</label>
    <input type="checkbox" id="option-icecream" name="option-icecream"><label for="option-icecream">Ice Cream</label>
</form>
{{< /playful-code >}}

{{% remark %}}
It might be tempting to use checkboxes for everything. Less work, less restricted, right? I will answer the same thing I always do. It loses its meaning. Making something a radio button clearly signals that it's a type of input that requires precisely ONE thing selected. Both to the user and to the computer reading the webpage. Don't throw away these advantages: pick your elements wisely.
{{% /remark %}}

## File

This input holds a _file_. For example, when a user registers an account, you allow them to upload a profile picture as well.

Use the `multiple` attribute to allow multiple files. Use the `accept` attribute to tell the browser which file types you accept. This is a comma-separated list.

{{< playful-code lang="html" >}}
<label for="profilepic">Upload a profile picture?</label>
<input type="file"
       id="profilepic" name="profilepic"
       accept="image/png, image/jpeg">
{{< /playful-code >}}

## Reset

This one is straightforward. It creates a button that, when clicked, automatically _resets_ the whole form to their default values.

Try it in the example. Type something, click the reset.

{{< playful-code lang="html" >}}
<form>
    <label for="usn">Username:</label>
    <input type="text" id="usn" name="usn">
    <input type="reset" value="Reset">
</form>
{{< /playful-code >}}

## Dates

Dates are always nasty, in any programming language. There are so many ways to enter them. Timezones exist. That's why we have many types with subtle differences.

It's highly recommended to use one of these, instead of a blank text field in which your user types. It will surely lead to confusion and users entering dates in the wrong format. When you use the right type, the browser will help you. It validates the input and usually displays an agenda or "date picker".

Attribute | Description |
--------- | ----------- |
`date` | Requires a date. |
`datetime` | Requires a date _and_ a time (with timezone). |
`datetime-local` | Requires a date _and_ a time (without timezone). |
`month` | Requires a month and a year. |
`week` | Requires a week. |
`time` | Requires a time (no timezone). |

{{< playful-code lang="html" >}}
<label for="birthday">Date of Birth?</label>
<input type="date" id="birthday" name="birthday">
{{< /playful-code >}}

{{% remark %}}
Why is there no "year"? Because a year picker is nothing more than a _number_ picker, or more commonly a dropdown list with the last 100 or so years.
{{% /remark %}}

## Other

Finally, we have the last set of input types, for very specific use cases.

Attribute | Description |
--------- | ----------- |
`color` | Requires a color. |
`email` | Requires a valid email address. |
`tel` | Requires a valid telephone number. |
`url` | Requires a valid URL. |
`search` | Means this input will be used for searching. |

{{< playful-code lang="html" >}}
<label for="email">Email Address?</label>
<input type="email" id="email" name="email">
&nbsp;
<label for="website">Personal Website?</label>
<input type="url" id="website" name="website">
{{< /playful-code >}}