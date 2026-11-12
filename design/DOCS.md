# Pandaqi Tutorials

## Usage

How to add new content in the future? How is the website structured?

### New course

-   Create folder
-   Add "\_index.md"
-   Frontmatter: title, type: "course", and a style
-   Content: an introduction/description
-   Place icon with name "icon.svg" in that folder

Once in a while, check the *Roadmap* and see if it needs updating

### New tutorial

-   Create folder inside course.
-   Add "index.md"
-   Frontmatter: title, type: "article", and a **weight** (used for sorting, start at 1)
-   Content: the actual article
-   Always add proper ALT tags to images! (They show up as side notes.)
-   Place all images in the same folder as the *tutorial* itself
-   The first article is called **Introduction**
-   The last article is called **Conclusion** (or **Conclusion: what now?**)

### Writing articles

-   Use **blockquotes** (> ) for simple indentation. (Not an example or remark, but it needs to stand out, like a definition or the main point of the article.)
-   Use **example and remark shortcodes** for those
-   Use **highlight** shortcode (built into Hugo) for code blocks
-   Use **video** shortcode for videos
-   Use **double-view** shortcode for example + image.
    -   Attributes: src (url to image in same folder), lang (highlight language), split (empty, even (50/50), or none (underneath each other))
-   **Tables** use the basic markdown syntax. ("\|" around columns, "\-\--" line to separate heading and content)
    -   Empty **header** cells (th) are autohidden => fill them with a "\\-" dash to keep them visible.

### Custom Tools

-   **LaTeX:** "enableMathJax:true" and "\\\\( some latex math code here \\\\)"\" for that
-   **Midi:** "midi:true" and its shortcode
-   **Daw:** "daw:true" and its shortcode
-   **Bamboo:** "bamboo:true" and its shortcode

### Images

-   *Always* use alt-tag for side-note information.
-   If I want something special, use the **image** shortcode => has no inner, so only needs opening tag
    -   Src = url to image
    -   Alt = alt-text + side-note text
    -   Class = special class (float-left, float-right, float-clear)
-   If I want something to **not be clickable**, add class "no-click"
    -   Otherwise, everything I clickable by default

### Quizzes

Implemented in frontmatter, under the "quiz" param.

The format is:

```
quiz:
  - type: TYPE
    TYPE:
    - option1
    - option2
    options:
    - option1
    - option2
```

Each question can be reversed (asked in the other direction). The options are ordered: the answer top **TYPE:option1** is **option:option1.** The answer to **TYPE:option2** is **option:option2**.

After the correct options, add as much nonsense answers as you like.

Multiquestions are unique:

-   They *cannot* be reversed.
-   Every option is a *list*: **\[option1, option2, option3\]**
-   It adds an extra key: "sentence". This is displayed.
    -   The value "\$1" is replaced by the actual option
    -   The value "\$B" is replaced by a blank line symbol
    -   In the future, I might allow arrays for the first key, and \$2, \$3, etc. replace the other options

There are (currently) 7 different types:

-   **Terms** => gives a term and definition
-   **Actions** => gives something you want to do and how to accomplish that
-   **Tools** => gives a tool and what you accomplish with it
-   **Objects** => gives an object and a property/properties that belong to it
-   **Parts** => gives a sentence and deconstructs what each part means/represents
    a.  Has extra key "sentence", which is the actual sentence.
-   **Blanks (multi)** => gives a blank and options that might fit
-   **General (multi)** => simply displays whatever is given
-   **Images =>** displays images and what they describe/highlight in text (options)

I made myself double-type the TYPE on purpose. This made the code more specific, but also requires me to be more mindful and check it.

Images can have a "sentence" and "sentence_reverse". This is general. Other things can use it, if they want.


## V1 -> V2 Migration Notes (Changelog)

**CODE**

FIND: \`(.+)\`\\{.longsyntax\\}

REPLACE:

{{\< highlight Latex \>}}

\$1

{{\< /highlight \>}}

**LONGER CODE:**

Can't do it at once. I *can* remove the upper and lower part separately.

UPPER

FIND: "::: and stuff after it", use \[\\n+\] for newlines

REPLACE: {{\< double-view src="TO DO" lang="whatever I need now" \>}}

LOWER

FIND: "stuff before it :::"

REPLACE: {{\< /double-view \>}} \$1 (if we select the image URL as well here, haven't found a way yet)

Transfer all content

-   Create new folder with useful name, add **index.md** file
-   Copy the YAML stuff into frontmatter
-   Transfer the post into the content side.
-   Use an HTML to Markdown converter for the rest.
    -   <https://codebeautify.org/html-to-markdown>
-   Replace CODE BLOCK with HUGO SHORTCODE. (Must be done after HTML conversion, because it won't recognize the shortcode as valid HTML.)
    -   Find: "\<pre data-lang=\\\\\"(.+)\\\\\"\>(\[\\s\\S\\n\]+?)\</pre>" (RegExp on)
    -   Replace:\
        {{\< highlight \$1 \>}}\
        \$2\
        {{\< /highlight \>}}
-   Move all images to be within their own folder.
    -   **Modify how Hugo inserts images** to use \<figure>**,** like I did before
    -   **Create another shortcode for inserting video**, check Pandaqi blog
-   Misc:
    -   "NOTE: " and "NOTE 2: " need to be replaced with a *remark shortcode*
    -   Replace "\\\>" with ">"?
    -   Replace any example-like things with the *example shortcode*
    -   Remove the \[Course\] prefix almost all articles have => but **do add it back into the title?** (Must be a great way for people to find the articles through google, and for indexing as well.)
