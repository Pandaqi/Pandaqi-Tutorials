---
title: Bags I
weight: 13
type: "article"
bamboo: true
---

Loops really start to shine when you combine it with repeated data: a **bag** full of values. They're like twins. A loop repeats code, the bag provides a new element every iteration.

A bag is nothing more than a _group_ of booleans, numbers or strings. It contains multiple "literals" under one name. You might also call it a **list**, and everything inside an **element**.

Yes, a shopping list is probably a good first example. Maybe you're coding a web shop. When the customer checks out, you want to create a list of everything in their shopping cart.

You _could_ do this with what I taught so far.

{{< bamboo caption="That's quite the shopping list somebody has." >}}
now item1 means "T-shirt"
now item2 means "Smartphone"
now item3 means "Pizza"
{{< /bamboo >}}

But this feels repetitive, doesn't it? And I repeat: we---coders---do not like repeating ourselves!

Additionally, you don't know _how many_ things people will put in their cart. Maybe you only coded 10 items, do you really want to push away customers that want to buy more things from you?

Enter the **bag**! It holds as many or as few items as you want, under a single name.

> To create a new bag, use `bag NAME holds`, then type each element on a new line after it.

{{% data-trans from="Values" to="Bag" %}}

{{< bamboo >}}
bag shoppingList holds
  "T-shirt"
  "Smartphone"
  "Pizza"
{{< /bamboo >}}

Try it! Add some more elements to the shopping list, or remove a few. It doesn't matter: that one name (`shoppingList`) will hold everything for us.

{{% remark %}}
Other languages call this a `list` or an `array`. But I asked around, and most people around me (who are quite proficient at English) did not know what "array" meant. A list, on the other hand, isn't entirely correct for my purposes. Hence I dubbed it a bag.
{{% /remark %}}

## Getting the size

Okay, we've grouped it, nice. But we want to know _how many_ items are in the shopping cart. So we can display that on the web site, like most shops do.

> To get a bag's size, use `BAGNAME's size`

{{% data-trans from="Bag" to="Number" %}}

Yes, the same syntax and word that you used for [Strings](../strings/). In that chapter, I told you that strings were basically lists of characters. In other words, a string is a _bag_ of symbols, right? Most languages, therefore, use the same syntax for getting a string size as for getting a list size. 

It also helps, in my view, to think of them as similar. A string is much more like a bag, than a number or boolean.

{{< bamboo >}}
bag shoppingList holds
  "LEGO"
  "Banana"
&nbsp;
say "You have " + shoppingList's size + " items in your cart"
{{< /bamboo >}}

## Getting an element

Okay, we have a bag and we know how big it is. But now we want to check one specific element. Maybe we're running a discount on pizzas and want to check if somebody has a pizza in their shopping cart.

The following principle is good to remember when it comes to _any_ programming.

> Lists, loops, counters, _everything_ starts at `0`. (Such a position of an element is called its **index**.)

There are many good reasons for this. They're outside of the scope of this tutorial---look it up if you're interested. Just remember that everything starts at `0`, not `1`.

This means we can get the **first** element of a bag by requesting index **0**. The second one by requesting index 1. And so forth.

> To get an element from a bag, use `BAGNAME's INDEX`

{{% data-trans from="Bag & Number" to="Value" %}}

Let's see if we can get that discount going.

{{< bamboo >}}
bag shoppingList holds
  "T-shirt"
  "Smartphone"
  "Pizza"
&nbsp;
if (shoppingList's 0) is "Pizza"
  say "Discount!"
{{< /bamboo >}}

Hmm. It doesn't say anything. Why?

Ah yes, we only check the first element. But pizza is the third ( = index `2`). 

No, we don't want to _repeat_ that if statement for all values. Remember the two rules:

* Don't Repeat Yourself
* Bags and loops are twins

Maybe we can ... use a loop!

## Looping a bag

What do we want? We want to check for _every_ element if it's a pizza. This means we need one general block of code that we can _repeat_ for every element.

Let's consider our data transformations again.

* Input = a bag and current iteration of the loop
* Change = turn that into the element name
* Output = whether the element name is equal to Pizza

Try writing this code.

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
bag shoppingList holds
  "T-shirt"
  "Smartphone"
  "Pizza"
&nbsp;
now numElements means shoppingList's size
repeat numElements times
  now elem means shoppingList's (bamboo iterator)
  if elem is "Pizza"
    say "Discount!"
{{< /bamboo >}}

Ah, that's better. And all that with just a few lines of code! This works for _any_ bag. Add more elements. Add more pizzas, if you want, or remove them altogether. The only thing that changes is the bag. The other code will continue to work, whatever is inside, no matter how big it is.

That's the power of loops and bags. Given _any_ data, of _any_ size, it will continue to work. It just repeats the same code as much as needed.

For that to work, though, the code needs to be general. That's one of the steps that makes programming hard---a puzzle, an exercise in "problem solving". Because you need to figure out how to solve a problem for _any_ input. How to solve it in a general way.

### Exercise 1

Rewrite the code above to give a discount on anything _but_ a smartphone.

Remember those "guard clauses" from previous chapter.

{{% data-trans from="Bag & Number" to="Bool & Output" %}}

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
bag shoppingList holds
  "T-shirt"
  "Smartphone"
  "Pizza"
&nbsp;
now numElements means shoppingList's size
repeat numElements times
  now elem means shoppingList's (bamboo iterator)
  if not (elem is "Pizza")
    skip
  say "Discount!"
{{< /bamboo >}}

### Exercise 2

Pad the shopping list with a few extra items. Now rewrite the code to give a discount on every _third_ element. (Like some "2 + 1 free" action.)

Remember the _modulo_ operator I explained in the chapters on [Loops](../loops-i/).

{{% data-trans from="Bag & Numbers" to="Bool & Output" %}}

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
bag shoppingList holds
  "T-shirt"
  "Smartphone"
  "Pizza"
  "LEGO"
  "Banana"
  "Bottle"
&nbsp;
now numElements means shoppingList's size
repeat numElements times
  now i means bamboo iterator
  now isThird means (i mod 3) is 0
  if not isThird
    skip
  say "Discount!"
{{< /bamboo >}}

## Conclusion

Bags (or lists/arrays) are powerful. With little code, you can make the computer do _a lot_. I have only given one _very simple_ example. In the upcoming chapters, you'll see way more practical use cases for bags.

But most of all, there's another thing you can do with elements in the real world. Instead of numbering them ... you might want to _name_ them.