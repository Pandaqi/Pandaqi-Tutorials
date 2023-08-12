---
title: "URLs"
weight: 13
type: "article"
codemirror: true
---

Before we can talk about links, I need to explain how a URL works. Most people only know URLs from the long strings of symbols in the address bar of your browser. They might look like black magic then, but they're actually pretty simple.

I almost forgot this chapter, to be honest. If you've been building websites for a while, the way URLs work is second nature. 

But then I realized a true beginner wouldn't know the rules. And they are a few _crucial_ rules! So let's dive in.

## Anatomy of a URL

A URL is a simple way to represent a file structure. (Because a website, in the end, is just a bunch of folders with files for webpages.)

* It starts with a **protocol**: what kind of thing are we looking for? For websites, this will be "http://" or "https://"
* Then you get the **domain**: the name of the website.
* Then you get the **folders**, separated by **slashes** (`/`). Each new part means we go one level deeper.
* Until it ends, with either a folder or a file.

@TODO: IMAGE of a folder structure + the url that results from it

Now comes the golden rule of websites, to remember until the end of time.

> When given a URL to a folder, a server will look for a file called `index` inside it, and serve that

A website can only serve _files_, not _folders_. But visiting folders---and relying on this golden rule of web servers---leads to shorter and cleaner URLs. (Otherwise, if you wanted to visit YouTube, you'd have to type "youtube.com/index.html"!)

## Example

I aim to use simple and minimal website structures. As such, you can simply check the URL for this article to get a good example.

Each element is another folder on my computer: tutorials > programming > websites > html. 

The final one is the chapter folder. Inside it is an `index.html` file. So when you visit the URL of the folder, it serves that index file. (You can visit the file directly by just adding "index.html" at the end of the url! Try it!)

The homepage of a website is, therefore, an `index.html` file at the top-most ("root") folder.

If no such file exists, you get a "404 Not Found" error message.

## Absolute vs Relative

URLs in programming can be **absolute** or **relative**.

* An absolute link is visited directly, as-is. 
* An relative link starts searching from the current page. 

A link is **absolute** if it contains the first parts of a URL. (The domain, protocol, or it starts with a slash (`/`).) 

Otherwise, it defaults to **relative**.

Whenever I've shown you a panda image, in this course, I've used a relative link. That panda image is saved in the same folder as the article. So instead of having to type the _whole URL_, I can just use a simple relative link.

But if I wanted to point you towards my portfolio website, for example, I'd use the full address: `https://rodepanda.com` That's an absolute link.

{{< playful-code lang="html" >}}
<!-- A relative link; it finds the image in the same folder -->
<img src="panda_image.png">
<!-- This tries to find it at the root of my website, where it is not! -->
<img src="/panda_image.png">
{{< /playful-code >}}

Now that you know this, let's look at actually creating hyperlink elements on your web page!