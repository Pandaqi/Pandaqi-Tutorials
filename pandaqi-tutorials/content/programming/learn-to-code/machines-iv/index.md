---
title: Machines IV
weight: 19
type: "article"
bamboo: true
---

This is the last chapter with exercises / examples for machines. As you noticed, machines get more chapters than any other topic! This reflects how important they are. How, in the end, all your programs will be built from many tiny machines that _do one specific thing_.

At [Bags III](../bags-iii/) I explained the CRUD system. How every bag of data should support the four operations: Create, Read, Update and Delete. If you research how to do those in your language---or write it yourself---you can solve any problem. Because you can manipulate data any way!

Hey, that's a good idea: _writing it ourselves_. Let's write a very simple CRUD system :)

## The task

We have a list of items in that shopping cart again. We want to support the four basic actions:

* Create: create a new bag
* Read: read what's inside the bag.
* Update: add a new element
* Delete: remove an element

These are four individual, separate actions. So what do we do? We write _four machines_: one to do each action.

## Create

Write a machine that creates a new bag, given its first element as input.

{{% data-trans from="Value & Machine" to="Bag" %}}

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" fbvalue="false" fbresult="false" >}}
machine createCart wants elem
  bag cart holds
    elem
  cart
&nbsp;
say "New shopping cart: "
say (give "Pizza" to createCart)
{{< /bamboo >}}

## Read

Write a machine that accepts a bag as input and prints what is inside. To keep things simple, let's say we only want to print the last element.

{{% data-trans from="Bag & Machine" to="Value" %}}

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
machine readCart wants cart
  now lastIndex means (cart's size minus 1)
  say "Last element is: " + cart's lastIndex
&nbsp;
bag cart holds
  "Toilet Paper"
  "Paper"
&nbsp;
give cart to readCart
{{< /bamboo >}}

## Update

Write a machine that accepts two inputs: a bag and a new element. It should add the element to the bag, but only if it _doesn't exist yet_!

{{% data-trans from="Value, Bag & Machine" to="Changed Bag" %}}

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
machine updateCart wants cart and newElement
  now elemExists means false
  search cart's items
    now elemExists means (bamboo value) is newElement
    if elemExists
      unplug
  &nbsp;
  add newElement to cart
&nbsp;
bag cart holds
  "Toilet Paper"
  "Paper"
&nbsp;
give cart and "Toothbrush" to updateCart
say cart
{{< /bamboo >}}

## Delete

Write a machine that deletes the last item from a cart. However, if the cart is already empty, it shouldn't try to do anything! (That would crash, as there's nothing to delete)

{{% data-trans from="Bag & Machine" to="Changed Bag" %}}

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
machine deleteLastFromCart wants cart
  now cartSize means cart's size
  if cartSize below 1
    unplug
  take out of cart
&nbsp;
bag cart holds
  "Toilet Paper"
  "Paper"
&nbsp;
give cart to deleteLastFromCart
say cart
{{< /bamboo >}}

## Conclusion

With these four simple machines, you've created a whole system to work with your "shopping cart". With some additions, this is the basis for an online shop.

Because what else is there to do? Besides creation, reading, updating and deleting?

This extends to any "data structure" you invent yourself. This works the same way for a list of players, or a bag holding a game world, or a table with highscores. The more complex your code, the more you have to invent your own structure and write some simple CRUD operations for it.

Doing these exercises, you also saw the "gotchas" with each type. For example, deleting an element from a bag should be forbidden if the bag is empty. Or adding something new should be forbidden if it already exists.

Also notice how I enabled that "scope blocking" again in this chapter. We have to _give_ our cart to the machine. It doesn't know about the bag that exists outside of it.

This is _good_. Now our code says exactly what it needs and what it does. We will never be surprised because a bag has changed out of nowhere, nor will a machine struggle to find a bag. Because we have _given_ the thing it needs, and nothing else.

Programming this way---"functional programming"---will always lead to clean and error-free code. All it takes is a tutorial that teaches you these good habits right from the start 😉

{{% remark %}}
Many tutorials will teach you lots of things about "objects" and "classes". While certainly useful and something to study, it starts new coders off with bad habits. Because for 99% of problems, you don't need that complexity, and it actually gets in the way. Just simple machines based on what they _do_ is fine for most coding problems.
{{% /remark %}}

And when in doubt, always start with the CRUD.