---
title: Bags II
weight: 14
type: "article"
bamboo: true
---

Last chapter teased the idea of _naming_ the elements inside your bag. Like we give names to things in the real world. Or like putting a label / tag on it.

Most will read that sentence and immediately think: "that's way more useful than giving them numbers!" But it's actually a tie. Sometimes you want the elements numbered, sometimes you want them named.

Why? 

* Naming things is extra work. If not needed, save yourself that work
* Numbers are easier to loop through (just use the iterator!)
* Numbers can be ordered/sorted.

For example, say your bag holds a list of people in your company, sorted by how long they've worked there. You want to get the person who has been at your company the longest. That's the first one of the bag! If it's numbered, the code is easy: `peopleBag's 0`. But if you used names ... what's the first one? Pieces of string don't allow that sorting.

Nevertheless, there are situations where names _are_ a godsend.

* They make your code more natural to read.
* When order doesn't matter, it provides more information at no cost.

So how do we give names? 

> Give a name to an element with `NAME means ELEM`

{{< bamboo >}}
bag shoppingList holds
  Pizza means 1.50
  Shirt means 7.50
  Smartphone means 150.00
&nbsp;
say "Pizza costs: " + shoppingList's Pizza
{{< /bamboo >}}

In this shopping list, order is irrelevant. The price doesn't change whether you added that T-shirt first or second. Instead, we're just interested in _what_ is inside. And its properties: in this case, the price of each element.

With a setup like this, code becomes easy to read.

{{% remark %}}
Many languages split these two things: a numbered bag and a named bag. For most, these are called an `array` or an `object`. Sometimes a `list` and a `dictionary`.
{{% /remark %}}

{{% remark %}}
In my simple language, this means your element labels follow the same rules as variables: no spaces, no weird symbols, etcetera. Many languages allow _some way_ to overrule this and give any names you want.
{{% /remark %}}

## Looping through bags II

Because bags and loops go hand in hand, most languages have easier ways to loop through all of the bag.

Now that you know about named bags, you'll see there are _two_ ways to loop through one.

* You can loop through its _names_ (or _indices_, or _labels_)
* You can loop through its _values_ (or _elements_, or _items_)

Whichever you want depends on the use case. But I can't count how many times code failed spectacularly (for me or new coders) because they picked the wrong thing over which to iterate.

> To get a bag's labels, use `BAGNAME's labels`

> To get a bag's items, use `BAGNAME's items`

{{% data-trans from="Bag" to="Bag" %}}

But let's think about this. We just received another _list of values_. Because, well, the bag has multiple items/labels! So we just received another bag. 

What's the difference? This bag is always numbered. It's a "simpler bag" if you will. One that's 100% _ready_ to be used in a loop!

You can do this the usual way.

{{< bamboo >}}
bag shoppingList holds
  Pizza means 1.50
  Shirt means 7.50
  Smartphone means 150.00
&nbsp;
now numItems means shoppingList's size
now itemNames means shoppingList's labels
&nbsp;
repeat numItems times
  say itemNames's (bamboo iterator)
{{< /bamboo >}}

However, as you know by now, most languages provide quicker ways. A fancier syntax for this very common use case. 

> To loop through a numbered bag, use `search BAGNAME`

> The value is available as `bamboo value`.

Remember that we're now going over a numbered bag. We've prepared it for our loop! So the _index_ (or the "label") is just your same old `bamboo iterator`.

{{< bamboo >}}
bag shoppingList holds
  Pizza means 1.50
  Shirt means 7.50
  Smartphone means 150.00
&nbsp;
now numItems means shoppingList's size
now itemNames means shoppingList's labels
&nbsp;
search itemNames
  say bamboo value
{{< /bamboo >}}

## About notation

Hopefully, you see my reasoning for picking my syntax. 

I call these things _bags_, because they are a container that can hold anything. Any number of elements, any size, any shape. 

I use the possessive syntax (`'s`) because it leads to a readable, English sentence.

{{< bamboo >}}
bag backpack holds
  Jacket means "Optional"
  SleepingBag means "Necessary"
  Toothbrush means "Necessary"
  TeddyBear means "Nope"
&nbsp;
say "My jacket is ... " + backpack's Jacket
{{< /bamboo >}}

In other languages, these examples would be littered with symbols and syntax. This isn't _bad_. Once you do more programming, you will understand why this is the case. (They make coding faster, more precise and less verbose.)

But it _is_ bad for someone new to programming. This course aims to explain the underlying intuition for programming, without overwhelming you.

If you really want to know, here's how you'd write the above in JavaScript. (A language that, all things considered, is also relatively accessible and readable.)

{{< highlight javascript >}}
const backpack = {
  "jacket": "Optional",
  "sleeping bag": "Necessary",
  "toothbrush": "Necessary",
  "teddy bear": "Nope"
}

console.log("My jacket is ... " + backpack["jacket"]);
// or: console.log("My jacket is ... " + backpack.jacket);
{{< /highlight >}}

## Turtles all the way down

Now remember that a bag just holds _other values_. These can be anything. They can be a complex calculation, another variable---another _bag_.

Slowly, as you learn these advanced parts of coding, you'll see the framework upon which complex programs are built. In a _real_ web shop, a shopping list isn't just item names + their price. Of course not---there's way more going on! 

Yes, the names are still the items. (Why change that? It leads to human readable code.)

But the values are _other bags_ holding all sorts of information. The price of the item, but also how many are in stock, features, reviews, special discounts, statistics (like how many have been bought the past month), etcetera.

All code is built from tiny elements. Tiny pieces of data. But these elements are collected inside bags, inside bigger bags, inside even bigger bags, until you have a complex program doing a lot.

{{% remark %}}
In many languages, such structures would be called `structs`, or `objects`, or `classes`. I won't cover these in this course, as it's advanced coding that you'll learn once you _need_ it for a project. But at its core, those are nothing more than a fancy way to create bags within bags.
{{% /remark %}}

## Exercises

As you do these exercises, always go one step further. After writing your code (that works for this specific list), _change_ the list. Add entries, remove entries, change names. Your code should still work. Otherwise, it's not general/logical enough.

### Exercise 1

Create a bag that holds all 5 users of your app. Now loop through them and print their names.

{{% data-trans from="Bag" to="Output" %}}

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" fbvalue="false" fbresult="false" >}}
bag users holds
  "Jessy"
  "Timmy"
  "Lindy"
  "Jamey"
  "Carry"
&nbsp;
search users's items
  say (bamboo value)
{{< /bamboo >}}

### Exercise 2

Create that same bag of users, but now attach some info to each user: how many hours a week they use your app. Loop through it and only print those that spend at least 5 hours a week on your app.

{{% data-trans from="Bag" to="Bool & Output" %}}

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" fbvalue="false" fbresult="false" >}}
bag users holds
  Jessy means 1
  Timmy means 10
  Lindy means 7
  Jamey means 5
  Carry means 3
&nbsp;
search users's labels
  now name means (bamboo value)
  now hours means users's name 
  if hours below 5
    skip
  say "Power user! " + name
{{< /bamboo >}}