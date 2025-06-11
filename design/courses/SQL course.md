
" slug: "php-conclusion-what-now" cat: "Website" subcat: "PHP" video: "" diff: 4 quiz: "" - id: 449 title: "A Guide to SQL" post:
"

Databases are everywhere. When I say database, people often think about websites gathering lots of data about something, so they can use the results to optimize or learn something about their users. That's data analysis, and while you can use databases for that, they can do so much more.

For example, blogs load their posts and comments from a database, user accounts are saved inside a database, online games save game data inside a database, web shops save their products in a database, and so on. Whatever you're working on, if it's going to be even a little complex or dynamic, you'll need a database.

Therefore, we need a way of communicating with databases, a way of telling it to do what we want. Luckily, just like HTML and CSS, there's a single standardized language we can use: **SQL**, which stands for
*Structured Query Language*. Basically, it lets us query the database
(such as request specific data from it) following a structured syntax. So, it helps the database understand us better, and it helps us not lose our minds in the complexity of the world of databases.

Just like HTML and CSS, however, SQL on its own isn't enough. A browser is needed to interpret HTML and display it as something meaningful, and in the same way, a database management system is needed to process SQL queries and do something meaningful with it. We call these systems
**RDBMS**: *Relational Database Management Systems*.

You can view SQL as the native tongue of these RDBMS. Generally, they all speak it in nearly the exact same way. The only difference is that each RDBMS has its own dialect; they add and remove some of the functionality of basic SQL in favour of their own system.

![](media/SQLIntroduction.png)

Therefore, whichever RDBMS you choose, there will be some differences with the (advanced) syntax and functionality. Most systems add their own functions, change some keywords here and there, or remove things they think they have a better alternative for.

In this course, I will discuss the standardized SQL language, and if necessary mention some RDBMS specific information for the popular databases. Otherwise, you should be fine, or you should be able to find the differences in the documentation of your particular system.

Have fun!

NOTE: There's one alternative to SQL, which are NoSQL databases that mainly use JavaScript or JavaScript-like syntax. No one is strictly better than the other, and I think you should take a look at both if you plan on doing a lot of work with databases. Both systems are applicable to different use cases.

## Table of Contents

1.  Installation
2.  Relational Databases
3.  Syntax & Queries
4.  Creating
5.  Reading
6.  Updating
7.  Deleting
8.  Structure
9.  Keys & Constraints
10. Data Types
11. Operators & Conditions
12. Aliases & Variables
13. Aggregators
14. Sorting
15. Grouping
16. Filtering
17. Joins I
18. Joins II
19. Searching
20. Functions
21. Subqueries
22. Security & Optimization
23. Conclusion: what now?

" slug: "guide-to-sql" cat: "Website" subcat: "SQL" video: "" diff: 1 quiz: "" - id: 450 title: "\[SQL\] Installation" post: "

Before we start, you obviously need to have a way of testing the SQL you're going to write. You have two options:

-   Install a database system on your own computer via some software
-   Buy hosting. The system you want could already be pre-installed, or
    you can put it on the server yourself.

If you're learning SQL for (your) business, you probably already have a server and system, and it's wise to stick with learning that particular system for now. If you're here for any other reason, I suggest keeping an open mind and trying out multiple systems!

## Meet the Systems

There are many systems out there, and it's certainly not needed to learn all of them. The most popular and powerful systems are:

-   **SQLite:** For learning how SQL works, this might be your best
    option. It's not actually a system; it's a small piece of software
    that allows you to have a local database on your computer. This
    means that it doesn't play with the official SQL syntax, and that
    it's very fast. The only downside is that you can't really use it
    in websites, as it only allows one user at a time to write data into
    it.
-   **MySQL:** The most commonly used system across the world wide web.
    It's free, beginner-friendly, and can handle very large data sets.
    Very good at handling simple operations, not so good at handling
    complex operations.
-   **PostgreSQL:** A relatively new system that is quickly gaining
    ground. It's free, adheres to the official SQL syntax the most, and
    has a rich feature set. Very good at handling complex operations,
    not so good at handling simple operations.
-   **Oracle:** Used by some large businesses, a mature and heavyweight
    system. But, that also means that it isn't free, and there's quite
    a learning curve.
-   **Microsoft SQL Server:** Also used by some large business (and most
    companies that use Microsoft), a mature and big system. However, it
    also isn't free, and it deviates a lot from the official SQL
    syntax.
-   **Microsoft Access:** Essentially a spin-off of SQL server, but
    meant to be used locally, as a database replacement for Excel.
    Because of that, some features have been left out, but it still has
    the same quality as other Microsoft products. It also isn't free.

## Getting Started

Systems change, versions change, documentation changes. I don't think I can do a better job explaining how to install a certain database system than the system itself, which is why I will only give a quick explanation and a link to a how-to-install page for every system.

NOTE: If you don't want to get into the database installing business now, find a hosting service that has the system pre-installed for you, so that you can immediately start trying out.

### SQLite

SQLite comes as a downloadable package, but it doesn't have an interface. This means that queries are submitted to the system via a nifty command line tool.

-   To download the package: [SQLite
    Download](https://www.sqlite.org/download.html)
-   To get started: [SQLite Getting
    Started](https://www.sqlite.org/cli.html)

NOTE: A good, complete tutorial on SQLite specifically can be found here: [Guru99 SQLite Tutorial](https://www.guru99.com/download-install-sqlite.html)

### MySQL

MySQL does have an interface, and can be set up on any system you like.

-   To read about installing MySQL: [MySQL
    Documentation](http://dev.mysql.com/doc/refman/5.7/en/installing.html)

### PostgreSQL

PostgreSQL has very nice documentation. (So, if you're ever in doubt about something, go read their docs!)

-   To read about installing PostgreSQL: [PostgreSQL
    Documentation](https://www.postgresql.org/docs/9.3/static/tutorial-install.html)

### Oracle

To be honest, Oracle's documentation is very complete, but that also makes it complex for beginners. Nevertheless, if you really want to make the best choice, read through the whole page.

-   To read about installing Oracle: [Oracle
    Documentation](https://docs.oracle.com/cd/E11882_01/server.112/e10897/install.htm#ADMQS0212)

### SQL Server

It's an official Microsoft product, so it has an installation wizard. And the documentation is fine.

-   To read about installing SQL Server: [SQL Server
    Documentation](https://msdn.microsoft.com/en-us/library/ms143219.aspx)

### MS Access

Microsoft Access is just a piece of software (it comes bundled with the Office Suite), so installing it just means *installing it*.

" slug: "sql-installation" cat: "Website" subcat: "SQL" video:
"" diff: 2 quiz: "" - id: 451 title: "\[SQL\] Relational Databases" post: "

To make the most use out of learning SQL, I think it's very useful to examine these questions:

-   What exactly is a database?
-   What's the difference with a relational database?
-   Why should I care about databases at all?

## What's a Database?

It's exactly what it says: the base where all your data resides. More importantly, it's *nothing but data*. It doesn't have a layout, or programmed behaviour, or whatever\-\--it's only data. It's the reason that you need other systems and languages to do something with databases, but it's also the reason why they are so fast, and can hold huge amounts of data.

This "data" can be anything: numbers, pieces of text, prices, passwords, even huge strings that make up an image.

To store the data, we use the best method known to mankind: **tables**. Every row within the table is a single entry, while the columns of the table designate the different properties of that entry. For example, one entry could be a specific user account, with the columns "username",
"password" and "email".

![](media/SQLDefinitionTables.png)

## What's a Relational Database?

Essentially, a relational database is one that consists of **multiple tables** that can be related. These tables can reference rows from other tables, and therefore create useful relationships between data.

For example, say you have an online gaming website, where you can win achievements if you finish a game. You have one table containing all users, and one table containing the achievements per game.

Now, one way to store this information, is by adding the username to the string of users that got a certain achievement. With a relational database, however, you can simply reference the corresponding row in the users table. This way, if the username is changed some day, all data is still correct.

![](media/SQLRelationalDatabases.png)

*If it's so useful, what other databases could there possibly be?* As I mentioned in the introduction, NoSQL database systems also exist. One of the huge differences between them and SQL systems, is that all SQL systems work with relational databases, while NoSQL doesn't necessarily work that way.

For example, you could have a *hierarchical database* that is one big table, which has lots of "children tables" that contain data on one specific aspect of the parent. With such a system, data becomes more like a tree structure. Which is useful if you have, you know, data that is connected more like a tree. Don't worry though, we won't be doing anything with that in this course.

## What can a Database do?

A database is the best possible way to handle data\-\--and data is everywhere. Data can be large, such as a complete blog post or subtitles for a video, or very small, such as a username or the amount of credits in somebody's account. Databases not only store this data in a sensible manner, SQL also provides numerous ways to select exactly the data that you want. You want to show the last 10 comments made? Easily done. You want to find all blog posts with the word "panda"? Done. You want to send a "thank you" message to every user that has been registered for more than a year? You get the idea.

## CRUD

Every (proper) database has 4 fundamental operations, known as **CRUD**:

-   **Create**: Creating a new database, table, or entry.
-   **Read**: Requesting certain information from the database
-   **Update**: Changing a certain entry, or the columns of a table
-   **Delete**: Deleting entries or columns from a table, or deleting a
    whole table or database

With fundamental, I mean that you really can't do anything else. And that's fine, because you won't ever need more than this.

Of these 4 operations, the first two are by far the most complex. First of all, there are many different settings you can use when creating a table. You can set a column to allow only integer numbers, or to allow only strings of text, or to automatically increment every time you add a new entry.

Secondly, there are even more ways to select data. You can select all existing entries, or all entries within a certain category, or all entries with a username that starts with the letter "P"\-\--the list goes on and on.

On the other hand, there aren't many ways to change an already existing entry, or to delete data from a table.

I will, therefore, start the course by explaining the CRUD syntax in short, and then use all of the remaining chapters to talk about
*creating* and *reading* data. From now on, I will also call the columns of a table its **structure**, and one specific value (e.g., row 2 column
2) a **field**. I might also call entries **rows** or **records**, because it's more intuitive sometimes.

![](media/SQLTheCRUDOperations.png)

" slug: "sql-relational-databases" cat: "Website" subcat: "SQL" video: "" diff: 2 quiz: "" - id: 452 title: "\[SQL\] Syntax & Queries" post: "

Like every computer language, SQL has a basic syntax that it uses for everything. Because SQL is so specific to databases, however, this syntax is very simple and you can actually only do one thing: write
**queries**.

## Queries

A query is nothing more than a single request from the database. As we saw in last chapter, this request can be any of the four CRUD operations. For example, you can *request* the five newest entries in a table, which means you *query* the table for the five newest entries. So, every time you do something with your database, you're providing a list of queries that should be executed one after the other. Just as with other programming languages, one query is not executed until the previous one finishes.

All we need now, is to have a way to tell the database when one query ends and another begins. For this, we use the **semicolon** ( `;`).

``` {data-lang="sql"}
-- Both of these queries do exactly the same INSERT INTO users (username, bio, gender) VALUES ("Gandalf", "Use the force, Harry!", "male"); SELECT (username, signup_date, bio) FROM users WHERE gender="female"; 


INSERT INTO 
    users (username, bio, gender)  VALUES 
    ("Gandalf", "Use the force, Harry!", "male"); 

SELECT 
    (username, signup_date, bio)  FROM 
    users  WHERE 
    gender="female"; 
```

It's important to note that SQL disregards extra white space and newlines. This means that you can display the query in a way that you can easily understand it, without breaking something. It also means that if you forget a semicolon, errors will pop up all over the place.

## Comments

When developing anything, it's often useful to include comments telling you what exactly a certain query is trying to do. These comments are removed when the query is sent to the database and actually executed. Don't worry though, they do not make a query slower.

To create a single-line comment, use

`-- Some nice comment here`{.longsyntax}

To create a multi-line comment, *if your RDBMS supports it*, use

`/* A MULTILINE COMMENT */`{.longsyntax}

## Keywords, Functions & Names

Every query is built out of three components: *keywords*, *functions* and *names*.

**Keywords** are words provided by SQL that, well, do something if you include them in the query. For example, the `SELECT` keyword starts a query that reads things from a database.

**Functions** transform the data of a query. For example, the
`AVG(column)` function takes the average of all values of the specified column.

**Names** are the names of your columns, tables, databases\-\--anything that you've given a name.

``` {data-lang="sql"}
-- SELECT, FROM and WHERE are keywords
-- COUNT(*) is a function that counts the amount of entries
-- users is a table name we decided ourselves

SELECT 
    COUNT(*)  FROM 
    users  
```

## Case Insensitivity

Everything in SQL is case insensitive. This means that you can write
`select`, or `SELECT`, or `Select`, or whatever spelling you want. Writing the words differently every time, however, is not a good idea.

It's best practice to write your keywords and functions in *all uppercase*, and to choose your column and table names *all lowercase*. If needed, separate words are connected with an underscore ( `_` ).

``` {data-lang="sql"}
-- All queries do exactly the same, but I think you can see which one reads better;

SELECT COUNT(*) FROM users;

select Count(*) from USERS;

Select count(*) From users;
```

NOTE: The names you decide yourself are **not** case insensitive. For example, you could have a column named `user_id`, and one named
`USER_ID`, and they would be completely different.

## Dynamic Queries

Most RDBMS have an interface that allows you directly put in queries. While this can be very useful to do some database maintenance, such as remove some garbage or replace things that need to be updated, it's not that useful to most applications. Usually, you want to execute an SQL query when users load a page, and you want that query to change depending on certain variables.

For example, most blogs use only a single file for displaying all posts. When a user visits a URL, there is usually some information about the post in the URL (such as `/News/05-06-2016/hello-world`). You must use a programming language (not SQL) to get these variables, and put them into a query that selects the right blog post. That programming language then sends the query to the database, retrieves the results, and displays them in a sensible manner.

![](media/SQLDynamicQueries.png)

Therefore, if you haven't done so already, it's wise to also learn a server-side language (such as PHP or ASP.NET) that can interact with SQL and databases. Remember, SQL is for databases, not for layout or websites.

" slug: "sql-syntax-queries" cat: "Website" subcat: "SQL" video:
"" diff: 2 quiz: "" - id: 453 title: "\[SQL\] Creating" post: "

When it comes to a relational database, we can create three things: a database, a table, and a specific entry. The commands for these operations are all quite straightforward\-\--the real complexity comes when you learn about the best settings for your structure.

To clarify this statement, say you have a database containing all user accounts. Creating the database is easy (make up a name and run a single command), as well as inserting a row (provide data and run a single command). But, the structure of the table must be constrained\-\--for example, it should not be possible that a user has no username, or no password, or that his email address is a number instead of text.

## Creating a Database

Let's start very, very simple. To create a new database, use

`CREATE DATABASE someDatabaseName;`{.longsyntax}

``` {data-lang="sql"}
-- Creates a database called users, with nothing in it (yet) CREATE DATABASE users;
```

## Creating a Table

To create a table, we must first navigate to the correct database. (If we don't, SQL doesn't know in which database to place the table.)

-   If you have an interface to work with, you can simply click on the
    database and perform the query there.
-   If you're working with a programming language (such as PHP), you
    should be able to connect to the right database with some function,
    and all will be fine.
-   Otherwise, you can select the database with `USE someDatabaseName`

Now that the right database is selected, we can create a table with

`CREATE TABLE someTableName     (column_name_1 type attributes,      column_name_2 type attributes,             |      column_name_n type attributes);`{.longsyntax}

The *type* parameter specifies the type of data the column will hold, and is required. Examples of data types are `INTEGER` and `TEXT`.

The *attributes* parameter is optional, and can set properties for a certain column. Examples of attributes are `NOT NULL` (it's never allowed to have an empty value) and `AUTO INCREMENT` (the value of this column is automatically incremented with 1 every time a new entry is added).

::: sideImagePreview
``` {data-lang="sql"} USE users;

/*  Creates a table to hold usernames and corresponding email address INT(11) just tells it to hold an integer of at most 11 digits VARCHAR(255) means the column should hold strings of at most 255 characters
*/ CREATE TABLE accounts 
    (id       INT(11) PRIMARY KEY,
     username VARCHAR(255),
     email    VARCHAR(255)       );
```

<div>

  ----------------- ---------- -------
  id                username   email
  No entries yet.              
  ----------------- ---------- -------

</div>
:::

NOTE: As promised, you'll learn all about structure, constraints and data types in later chapters.

## Creating a new Entry

When we create a new entry, we usually call it **inserting** an entry. It's a more intuitive way of looking at it, as we're not really creating anything, we're just inserting data in an already existing table. Not surprisingly, the command for inserting an entry is

`INSERT INTO someTableName      (column_1, …, column_n) VALUES      (value_1, …, value_n);`{.longsyntax}

As you can see, you don't necessarily have to insert values for all columns. If you leave out some columns, they will be set to the default value you specified when you created the table structure. This saves time and effort from your side.

Additionally, if you don't specify any columns at all, SQL is going to assume you want to insert data into all columns.

::: sideImagePreview
``` {data-lang="sql"} INSERT INTO accounts (id, username, email) 
       VALUES (1,"Panda","panda@pandaqi.com"); 

INSERT INTO accounts VALUES (2,"Ginty",""); 

INSERT INTO accounts VALUES ("Juan","juaniscool@gmail.com");

INSERT INTO accounts VALUES ("Gandalf");  
```

<div>

  ---- ---------- -----------------------
  id   username   email
  1    Panda      panda\@pandaqi.com
  2    Ginty      
  3    Juan       juaniscool\@gmail.com
  4    Gandalf    
  ---- ---------- -----------------------

</div>
:::

" slug: "sql-creating" cat: "Website" subcat: "SQL" video: "" diff: 2 quiz: "" - id: 454 title: "\[SQL\] Reading" post: "

The most important operation you can perform on databases is reading data from it. The whole reason you need a database in the first place, is so that you can do something useful with the information it provides. Because you're usually not reading everything within the database, we call this process **selecting**. You select the information you're looking for from the database, and then you use some other programming language to do whatever you want with it. In this chapter I will provide the very basic syntax for reading from a database, in the rest of this course many additions and variations will be discussed.

## Syntax

The very basic syntax for selecting entries from a table is

`SELECT column_1, …, column_n FROM someTableName;`{.longsyntax}

This selects the columns you specified of *all* the rows in the table
*someTableName*.

If you want to select all columns as well, use the asterisk ( `*` ) character:

`SELECT * FROM someTableName;`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Selects the columns username and email from every entry in the table SELECT username, email FROM accounts;  
```

<div>

  ---------- -----------------------
  username   email
  Panda      panda\@pandaqi.com
  Ginty      
  Juan       juaniscool\@gmail.com
  Gandalf    
  ---------- -----------------------

</div>
:::

## Finding Rows

You usually don't need all the rows. Instead, you're looking for rows that fulfil a certain condition; for example, rows that belong to the same category, or all rows that were inserted by a certain user.

To modify our selection to find only the entries that we want, use

`SELECT __ FROM __ WHERE condition;`{.longsyntax}

Again, SQL always tries to make queries feel like a real English sentence. "Select these columns, from this table, where this condition is true" is a simple way to remember the syntax.

::: sideImagePreview
``` {data-lang="sql"}
-- Selects all accounts with an email address set SELECT * FROM accounts WHERE email NOT IS NULL;  
```

<div>

  ---- ---------- -----------------------
  id   username   email
  1    Panda      panda\@pandaqi.com
  2    Ginty      
  3    Juan       juaniscool\@gmail.com
  4    Gandalf    
  ---- ---------- -----------------------

</div>
:::

" slug: "sql-reading" cat: "Website" subcat: "SQL" video: "" diff: 2 quiz: "" - id: 455 title: "\[SQL\] Updating" post: "

Once you've created your tables, and inserted lots of entries, there will come a time when you want to change some things. More specifically, you can: change the *structure* of a table, or change the *values* of an entry.

## Altering the Structure

When it comes to updating or changing the structure, we call it
*altering* instead. Not surprisingly, every query related to this starts with the `ALTER` keyword.

### Adding Columns

To add a column to a table, use

`ALTER TABLE tableName ADD column_name type attributes;`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Adds a new column, on top of id, username and email ALTER TABLE accounts ADD password VARCHAR(255); 
```

<div>

  ---- ---------- ----------------------- -------------
  id   username   email                   password
  1    Panda      panda\@pandaqi.com      1234
  2    Ginty                              pikapika
  3    Juan       juaniscool\@gmail.com   butterfree
  4    Gandalf                            flyyoufools
  ---- ---------- ----------------------- -------------

</div>
:::

### Removing Columns

To remove a column from a table, use

`ALTER TABLE tableName DROP COLUMN column_name;`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- We noticed users don't like giving us their email, so we remove that column ALTER TABLE accounts DROP COLUMN email; 
```

<div>

  ---- ---------- -------------
  id   username   password
  1    Panda      1234
  2    Ginty      pikapika
  3    Juan       butterfree
  4    Gandalf    flyyoufools
  ---- ---------- -------------

</div>
:::

### Modifying\-\--Changing Column Type

To modify an already existing column means two things: changing the
*type*, or changing the *name*. Unfortunately, the syntax is slightly different across different database systems.

`ALTER TABLE tableName ALTER column_name SET type attributes;SQLitePostgreSQL`{.longsyntax}
`ALTER TABLE tableName ALTER COLUMN column_name type attributes;SQL ServerMS Access`{.longsyntax}
`ALTER TABLE tableName MODIFY COLUMN column_name type attributes;MySQLOracle (<10G)`{.longsyntax}
`ALTER TABLE tableName MODIFY column_name type attributes;Oracle (>=10G)`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Additionally, we noticed users started taking unnecessarily long usernames, so we're going to change that column to only accept shorter strings. ALTER TABLE accounts MODIFY COLUMN username VARCHAR(12);
```

<div>

  ---- -------------- -------------
  id   username       password
  1    Panda          1234
  2    Ginty          pikapika
  3    Juan           butterfree
  4    GandalfTheGr   flyyoufools
  ---- -------------- -------------

</div>
:::

### Modifying\-\--Changing Column Name

Changing the name of an already existing column is much easier, simply use

`ALTER TABLE tableName RENAME old_column TO new_column;`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- And we thought the word secret_spy_name sounded cooler than username ALTER TABLE accounts RENAME username TO secret_spy_name;
```

<div>

  ---- ----------------- -------------
  id   secret_spy_name   password
  1    Panda             1234
  2    Ginty             pikapika
  3    Juan              butterfree
  4    GandalfTheGr      flyyoufools
  ---- ----------------- -------------

</div>
:::

## Updating Entries

Changing entries, as opposed to altering table structure, is usually called *updating* an entry. Therefore, such queries always start with the **UPDATE** keyword.

The syntax for updating entries\-\--you can update multiple entries at the same time\-\--is

`UPDATE tableName SET (column_name = new_value, …, column_name = new_value) WHERE condition;`{.longsyntax}

Including the `WHERE` clause is very important, because if you don't, SQL will just update *all* the entries with the new information. For the rest, it works exactly the same as in the `SELECT` statement\-\--"Update this table by setting these columns to these values, where a row meets a certain condition"

::: sideImagePreview
``` {data-lang="sql"}
-- User Panda forgot his password, again, so we send him a password reset email, and temporarily reset his password to "whatislovebabydonthurtme"; UPDATE
    accounts SET
    (password = "whatislovebabydonthurtme") WHERE
    secret_spy_name = "Panda";
```

<div>

  ---- ----------------- --------------------------
  id   secret_spy_name   password
  1    Panda             whatislovebabydonthurtme
  2    Ginty             pikapika
  3    Juan              butterfree
  4    GandalfTheGr      flyyoufools
  ---- ----------------- --------------------------

</div>
:::

" slug: "sql-updating" cat: "Website" subcat: "SQL" video: "" diff: 2 quiz: "" - id: 456 title: "\[SQL\] Deleting" post: "

Last but not least, instead of updating something, you might just want to delete it altogether. This can be useful if entries are not needed anymore; for example, when a user closes her account on a website, or if you want to automatically remove obsolete data that's more than 5 years old. Again, a distinction has to be made between multiple types of deletion: deleting a *database*, deleting a *table*, and deleting an
*entry*.

## Deleting Databases

To delete a complete database, use

`DROP DATABASE someDatabaseName;`{.longsyntax}

I must strongly urge you to always make sure you don't create a program that might accidentally remove something, or that might allow users to remove something. SQL doesn't send you a warning message to confirm if you really want to delete the database\-\--once you've issued the command, the database is gone.

## Deleting Tables

To delete a table, use

`DROP TABLE someTableName;`{.longsyntax}

## Deleting Entries

To delete one or multiple entries, use

`DELETE FROM someTableName WHERE condition;`{.longsyntax}

Again, do not forget to include the `WHERE` clause, or all entries within the table will be deleted. Always make sure you have the proper condition for deleting an entry. This mostly means that the condition should not return true in unexpected cases\-\--make sure every entry has something that makes it unique, so you don't accidentally remove more rows than you intended.

::: sideImagePreview
``` {data-lang="sql"}
-- Juan's cover has been compromised, and his secret spy name leaked, so he needs to remove all traces of him on the interwebs DELETE FROM accounts WHERE (id = 3 && secret_spy_name = "Juan");
```

<div>

  ---- ----------------- --------------------------
  id   secret_spy_name   password
  1    Panda             whatislovebabydonthurtme
  2    Ginty             pikapika
  4    GandalfTheGr      flyyoufools
  ---- ----------------- --------------------------

</div>
:::

## Truncation

If you want to remove all entries, however, there's a quicker and better way. Erasing all the data within a table, but *not* erasing the table itself, is called **truncating**. The syntax is

`TRUNCATE TABLE someTableName;`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Oh boy, our enemies tortured Juan to find out the names of his comrads, and he gave in to the pressure! We need to remove all traces of all spies. TRUNCATE TABLE accounts;
```

<div>

  ------------- ----------------- ----------
  id            secret_spy_name   password
  No entries.                     
  ------------- ----------------- ----------

</div>
:::

" slug: "SQL-deleting" cat: "Website" subcat: "SQL" video: "" diff: 2 quiz: "" - id: 457 title: "\[SQL\] Structure" post: "

Databases from professional grade applications usually contain thousands and thousands of rows. For example, imagine the sheer amount of users that Twitter has, or the amount of videos uploaded to Youtube. In order to quickly create new entries, and select the exact entries you want from such huge databases, you will need to be smart about your table structure.

More specifically, you want to have the least data possible stored in the database, and you need to tell the database system exactly what type of data it's holding, so that working with it becomes much faster. This is done with two things: **constraints** and **keys**. This chapter will mainly talk about things that *must* be done for every table.

## Primary Keys

The first thing that must be true for every table, is that *every entry must be unique*. If multiple entries are identical, which means the value for every column is exactly the same, you can't select only one of them\-\--which is a problem.

For example, say we have a table containing user accounts. When a user logs in, we fetch its profile information from the database and display it. If we had two identical entries, however, we would always select more than one row, and our script wouldn't know what to do! It expects one row and wants to deal with that, but now it will always have two, which it can't distinguish in any way whatsoever.

So, to make every entry unique, every table must have exactly one
**primary key**. A column that is a primary key must contain **unique values** and may never contain no value (so-called `NULL`). If you try to insert a value that already exists, SQL will throw an error and your query will not be executed.

NOTE: It is possible to create a table without primary key, but that's only recommended if you're storing lots and lots of data for personal use (as you don't need it then, and it saves time). Otherwise, even when highly in doubt, use a primary key.

Usually, a column called `id` is used to assign a numeric id to every entry. This way, even if all the other values are the same, the id will be different, and can be used to uniquely identify every entry.

To set a column to be primary key, use

`column_name type, PRIMARY KEY (column_name)MySQL`{.longsyntax}
`column_name type PRIMARY KEYOthers`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"} CREATE TABLE users
    (id  INT(11) PRIMARY KEY,
     usn VARCHAR(50));

INSERT INTO users VALUES (1,"Panda"); INSERT INTO users VALUES (2,"Juan");
-- This is not allowed. INSERT INTO users VALUES (1,"Gandalf");
```

<div>

  ---- -------
  id   usn
  1    Panda
  2    Juan
  ---- -------

</div>
:::

## Advanced Primary Keys

It's also possible to create a primary key out of multiple columns, in which case you need to give it a special name yourself. Remember that this is still just one, unique primary key column\-\--it's just created by adding together several other columns.

`CONSTRAINT primaryKeyName PRIMARY KEY (column_1, …, column_n)`{.longsyntax}

The query above creates a primary key called *primaryKeyName* which holds the result of *column_1 + ... + column_n* for every entry. Obviously, this value should be unique for each entry.

::: sideImagePreview
``` {data-lang="sql"}
-- This table stores courses. However, a course is given multiple times a year, so we need a second id to distinguish each one of them. CREATE TABLE courses
    (id        INT(11),
     second_id INT(11),
     name      VARCHAR(50),
     CONSTRAINT primKey PRIMARY KEY (id, signup_date));

-- Has primKey 2 INSERT INTO courses VALUES (1,1,"Calculus");
-- Has primKey 3 INSERT INTO courses VALUES (1,2,"Calculus");
```

<div>

  ---- ----------- ----------
  id   second_id   course
  1    1           Calculus
  1    2           Calculus
  ---- ----------- ----------

</div>
:::

## Defaults

The second thing that must be true for every table, is that *every field must have a value*. Even if you don't know the value yet, or the value has somehow (accidentally) disappeared, there has to be *some* value.

It is, therefore, wise to set a default for such columns. If you don't do so, columns will default to the value `NULL` if you don't specify a value yourself. (More on that in the next section.)

To set a default for a column, use

`column_name type DEFAULT default_value`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- If a user leaves a comment, but isn't logged in, set the name to "Anonymous" by default CREATE TABLE comments
    (id      INT(11),
     name    VARCHAR(50) DEFAULT "Anonymous",
     comment VARCHAR(255));

INSERT INTO comments VALUES (1,"Panda","Nice article!"); INSERT INTO comments VALUES (2, NULL  ,"This article is garbage. I'm cool because I anonymously leave hateful comments online.");
```

<div>

  ---- ----------- -----------------------------------------------------------------------------------------
  id   name        comment
  1    Panda       Nice article!
  2    Anonymous   This article is garbage. I'm cool because I anonymously leave hateful comments online.
  ---- ----------- -----------------------------------------------------------------------------------------

</div>
:::

## Null

The `NULL` value is a special one. It represents *missing* or *unknown*
*data*, which means it's useful if you don't know a field's value yet, but also that you can't really perform any meaningful operations with it.

To forbid a column from having `NULL` values, use the following constraint

`column_name type NOT NULL`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- But, anonymous users don't leave very nice comments on our website, so we decide it's not allowed anymore.  ALTER TABLE comments ALTER name SET VARCHAR(50) NOT NULL;

-- This is not allowed anymore INSERT INTO users (id, comment) VALUES (3,"Thanks for sharing!");

-- However, this works fine; an empty string, or 0, is NOT the same as NULL INSERT INTO users VALUES (3,"", "No problemo!");
```

<div>

  ---- ----------- -----------------------------------------------------------------------------------------
  id   name        comment
  1    Panda       Nice article!
  2    Anonymous   This article is garbage. I'm cool because I anonymously leave hateful comments online.
  3                No problemo!
  ---- ----------- -----------------------------------------------------------------------------------------

</div>
:::

NOTE: This is a constraint you'll need very often, and I advise you to use it on every column that is critical to your application.

## Best Relational Practices

At the start of this course, I listed all the advantages of relational database systems. But, you might be wondering, how do I actually use this in the best way possible?

Well, we use something called **normalization**. Normalization is a process where you minimize redundancy and dependency\-\--in other words, you make sure there's no duplicate data in your table.

For example, say you have a table containing your blog *posts*, and a table containing all the *categories* and brief descriptions of whatever that category is about. What you could do, is create a column in the
*posts* table that holds the exact name of the category a post was put in. What's better, however, is to let that column hold references to the entries in the *categories* table.

This has two huge benefits:

-   If the name of the category ever changes, everything is
    automatically updated
-   The table needs to store less data, which saves space and makes
    queries faster.

![](media/SQLNormalization.png)

In conclusion, try to make sure you never repeat yourself. Think about which tables you need (and their structure) upfront, and make sure they reference each other in a meaningful way. Make sure you never store more data than needed, because it would waste valuable space and resources. More about this, and about setting other important constraints and data types, is covered in next chapters.

" slug: "sql-structure" cat: "Website" subcat: "SQL" video: "" diff: 3 quiz: "" - id: 458 title: "\[SQL\] Keys & Constraints" post:
"

Continuing on last chapter, we'll be talking about the rest of the
(more advanced) keys and constraints. These are: *auto increment*,
*unique*, *check* and *foreign keys*.

## Auto Increment

The auto increment constraint is typically used on the primary key. It does exactly what it says: it automatically increments the value of a certain column for you. Whenever you insert a new entry, it checks the last value of the auto increment column, and inserts (*last_value + 1*) for the new entry.

This saves you lots of time and energy, as you don't need to keep track of the last value of the column yourself, and all values in the column are automatically unique.

NOTE: Most database systems also let you set the starting value of the column, and allow larger increments than 1. For example, you could add
1000 every time, if that's what you needed.

The syntax is:

`column_name type AUTO_INCREMENT ALTER TABLE someTable AUTO_INCREMENT=startMySQL`{.longsyntax}
`column_name type AUTOINCREMENT(start, interval)SQLitePostgreSQLMS Access`{.longsyntax}
`column_name type IDENTITY(start, interval)SQL Server`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"} CREATE TABLE posts
    (id    INT(11) PRIMARY KEY AUTO INCREMENT,
     title VARCHAR(255),
     post  LONGTEXT);

-- Notice how we don't insert an id INSERT INTO posts (title, post) VALUES ("Panda captured.", "Today, we captured a panda. He is safe now."); INSERT INTO posts (title, post) VALUES ("PANDA ESCAPED!", "Oh no, our pet panda has escaped and is now wreaking havoc in our cities!"); INSERT INTO posts (title, post) VALUES ("Tiger captured.", "Today, we captured a tiger. it is safe now. What can go wrong?");
```

<div>

  ---- ----------------- ---------------------------------------------------------------------------
  id   title             post
  1    Panda captured.   Today, we captured a panda. He is safe now.
  2    PANDA ESCAPED!    Oh no, our pet panda has escaped and is now wreaking havoc in our cities!
  3    Tiger captured.   Today, we captured a tiger. it is safe now. What can go wrong?
  ---- ----------------- ---------------------------------------------------------------------------

</div>
:::

NOTE: Oracle doesn't support a simple auto increment feature\-\--instead, you can emulate it using sequences, which will be discussed later.

## Unique

As the name suggests, the `UNIQUE` keyword forces a column to only contain unique values\-\--no two values may be the same, and if you try to insert an entry with an already existing value, it will throw errors and crash.

`column_name type attributes, UNIQUE (column_name)MySQL`{.longsyntax}
`column_name type UNIQUEOthers`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- We demand every user has a username, and that username is unique CREATE TABLE users
    (id       INT(11) PRIMARY KEY AUTO INCREMENT,
     username VARCHAR(255) UNIQUE NOT NULL);

INSERT INTO posts (username) VALUES("Juan"); INSERT INTO posts (username) VALUES("Panda");

-- Not allowed. INSERT INTO posts (username) VALUES("Juan");
```

<div>

  ---- ----------
  id   username
  1    Juan
  2    Panda
  ---- ----------

</div>
:::

You can also create a unique constraint over multiple columns. This means that the combination of values must be unique across the table, not that those values itself must be different. For example, if one entry has values (2,2,3) and another has (2,3,2), they will be unique. If they both have (2,2,3), they are not.

The syntax is:

`CONSTRAINT someName UNIQUE (column_1, …, column_n)`{.longsyntax}

## Check

The `CHECK` constraint simply *checks* whether a certain condition is true when inserting a new entry. If it's true, everything's fine. If not, the entry is rejected. You can use this, for example, to make sure somebody can't place a negative amount of orders on your web shop.

The syntax is:

`column_name type attributes, CHECK (condition)MySQL`{.longsyntax}
`column_name type CHECK (condition)Others`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Our website has games with violence, so only people over 18 are allowed! CREATE TABLE users
    (id       INT(11) PRIMARY KEY AUTO INCREMENT,
     username VARCHAR(255) UNIQUE NOT NULL,
     age      INT(3) CHECK (age >= 18));

INSERT INTO posts (username) VALUES("Juan", 20); INSERT INTO posts (username) VALUES("Panda", 24);

-- Not allowed. INSERT INTO posts (username) VALUES("Ginty", 16);
```

<div>

  ---- ---------- -----
  id   username   age
  1    Juan       20
  2    Panda      24
  ---- ---------- -----

</div>
:::

Again, to place a check on multiple columns at the same time, use

`CONSTRAINT someName CHECK (condition_1 AND condition_2 AND …);`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- After numerous complaints, we added a kids section to our website. Now people who are over 18, or who are a kid, can register. CREATE TABLE users
    (id       INT(11) PRIMARY KEY AUTO INCREMENT,
     username VARCHAR(255) UNIQUE NOT NULL,
     type     VARCHAR(10),
     age      INT(3),
     CONSTRAINT ageCheck CHECK (age >= 18 OR type = 'Kid'));

INSERT INTO posts (username) VALUES("Juan","Adult",20); INSERT INTO posts (username) VALUES("Panda","Adult",24);

-- Now it is allowed INSERT INTO posts (username) VALUES("Ginty","Kid",16);
```

<div>

  ---- ---------- ------- -----
  id   username   type    age
  1    Juan       Adult   20
  2    Panda      Adult   24
  3    Ginty      Kid     16
  ---- ---------- ------- -----

</div>
:::

NOTE: I will explain the `AND` and `OR` operators, and many more things about conditions, in the later chapters about reading from the database.

## Foreign Keys

As you might have noticed by now, keywords and concepts in SQL are named quite intuitively. If you know the name, you know the syntax and the idea behind it. Foreign keys are no different.

A column that is set to be a foreign key, only contains references to the primary key of another table. In other words, such a column contains the primary keys from a foreign table.

Foreign keys are useful for *normalizing* your database (remember I introduced that term at the end of last chapter?). Instead of inserting all the actual data inside a table, you simply insert the primary key value of an entry from another table. Then, if you need the actual data, just select the right entry from the other table (with another query).

Because foreign keys reference primary keys, they are automatically never `NULL`, and they always reference exactly one entry (because of uniqueness). They do not, however, need to be unique themselves. For example, say you have a table (for a web shop) that holds the orders that have been placed, and a table that holds all users. It's perfectly possible, then, that one user places multiple orders, and thus the orders table has multiple identical values for the user column.

The syntax for foreign keys is:

`column_name type attributes, FOREIGN KEY (column_name) REFERENCES Table(foreign_column)MySQL`{.longsyntax}
`column_name type FOREIGN KEY REFERENCES Table(foreign_column)Others`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Our post_id references the primary key of the posts table (used at the start of this chapter), so that we know which post a certain comment belongs to. CREATE TABLE comments
    (id       INT(11) PRIMARY KEY AUTO INCREMENT,
     comment  VARCHAR(255),
     post_id  INT(11) FOREIGN KEY REFERENCES posts(id));

INSERT INTO comments (comment, post_id) VALUES ("Dude, you really need to keep those pandas from escaping.", 2); INSERT INTO comments (comment, post_id) VALUES ("Cool, a tiger!", 3); INSERT INTO comments (comment, post_id) VALUES ("Your panda ate my crops!", 2);
```

<div>

  ---- ----------------------------------------------------------- ---------
  id   comment                                                     post_id
  1    Dude, you really need to keep those pandas from escaping.   2
  2    Cool, a tiger!                                              3
  3    Your panda ate my crops!                                    2
  ---- ----------------------------------------------------------- ---------

</div>
:::

Again, you can define a foreign key on multiple columns at the same time. This is needed if your primary key was also created out of multiple columns. The syntax is:

`CONSTRAINT someName FOREIGN KEY (column_1, …, column_n) REFERENCES Table(foreign_column_1, …, foreign_column_n);`{.longsyntax}" slug: "sql-keys-constraints" cat: "Website" subcat: "SQL" video:
"" diff: 3 quiz: "" - id: 459 title: "\[SQL\] Data Types" post: "

When defining keys and constraints, and creating tables in general, you've seen me include the *type* in the syntax. You've probably already guessed what it is used for, but I haven't had the time to properly introduce these **data types**. This changes now!

Every column *must* be set to a certain data type. This data type will determine what kinds of values are allowed to be stored for that column. For example, a column that holds usernames can be set to data type
`TEXT` with a maximum length of 100 characters, while the column that stores how many credits each user has in their account could be an
`INTEGER`.

*Why do I need to use these data types?* Efficiency and good organization. If the database knows exactly what kinds of values it will have in a certain column, it needs to perform less operations and can execute your queries faster. Additionally, by forcing every column to only contain values of one data type, you force your tables to be organized correctly and logically.

*Alright, tell me the data types already!* Not so fast, my friend. As usual, every database system was being egocentric, and implemented their own version of data types. Every system borrowed some data types from the official SQL standard, threw some of them out, and perhaps added one or two itself.

Therefore, I will provide the official SQL data types, and include links to the documentation for each system. There, you will find the peculiarities regarding data types for each system, and which data types it does or doesn't support.

## The Data Types

Don't worry trying to learn and remember all of these. The list is here to give a general sense of how data types work and which categories exist. You can just look at the types your specific system provides when you start creating your own database system.

+-----------------------------------+-----------------------------------+
| Data Type                         | Description                       |
+-----------------------------------+-----------------------------------+
| `CHARACTER(n)`                    | String of characters, with a      |
|                                   | fixed length of *n*               |
+-----------------------------------+-----------------------------------+
| `VARCHAR(n)`                      | String of characters, with a      |
|                                   | maximum length of *n*             |
+-----------------------------------+-----------------------------------+
| `BINARY(n)`                       | Binary string\*, with a fixed     |
|                                   | length of *n*                     |
+-----------------------------------+-----------------------------------+
| `VARBINARY(n)`                    | Binary string, with a maximum     |
|                                   | length of *n*                     |
+-----------------------------------+-----------------------------------+
| `BOOLEAN`                         | A *true* or *false* value         |
+-----------------------------------+-----------------------------------+
| `SMALLINT`                        | Integer of at most 5 digits       |
+-----------------------------------+-----------------------------------+
| `INTEGER`                         | Integer of at most 10 digits      |
+-----------------------------------+-----------------------------------+
| `BIGINT`                          | Integer of at most 19 digits      |
+-----------------------------------+-----------------------------------+
| `INTEGER(p)`                      | Integer of at most *p* digits     |
+-----------------------------------+-----------------------------------+
| `DECIMAL(p, s)`                   | Decimal number, of at most *p*    |
|                                   | digits, of which *s* are in front |
| `NUMERIC(p, s)`                   | of the decimal.                   |
+-----------------------------------+-----------------------------------+
| `REAL`                            | Approximate decimal number,       |
|                                   | mantissa precision\*\* 7          |
+-----------------------------------+-----------------------------------+
| `FLOAT`                           | Approximate decimal number,       |
|                                   | mantissa precision 16             |
| `DOUBLE PRECISION`                |                                   |
+-----------------------------------+-----------------------------------+
| `FLOAT(p)`                        | Approximate decimal number,       |
|                                   | mantissa precision *p*            |
+-----------------------------------+-----------------------------------+
| `DATE`                            | Year, month, and day values       |
+-----------------------------------+-----------------------------------+
| `TIME`                            | Hour, minute, and second values   |
+-----------------------------------+-----------------------------------+
| `TIMESTAMP`                       | Year, month, day, hour, minute,   |
|                                   | and second values                 |
+-----------------------------------+-----------------------------------+
| `ARRAY`                           | An ordered collection of values,  |
|                                   | with a fixed length               |
+-----------------------------------+-----------------------------------+
| `MULTISET`                        | An unordered collection of        |
|                                   | values, with a variable length    |
+-----------------------------------+-----------------------------------+
| `INTERVAL`                        | Contains integer fields\*\*\*,    |
|                                   | usually representing a period of  |
|                                   | time.                             |
+-----------------------------------+-----------------------------------+
| `XML`                             | Raw XML data                      |
+-----------------------------------+-----------------------------------+

Let me clarify some of the terms used:

-   \*Binary strings are simply strings of `0`s and `1`s.
-   \*\*Mantissa precision refers to the number of digits in a certain
    base notation. In the case of SQL, this means that any number can be
    written as *m* \* *10\^n*, where mantissa precision is the amount of
    digits that *m* has.
-   \*\*\*An integer field is something that has a starting point, and
    an end point, and contains every number between start and end.

Even though the actual name for a type may differ, the syntax remains the same across systems. Simply type the name of the data type in capital letters, and if needed, provide the parameters between parentheses.

::: sideImagePreview
``` {data-lang="sql"}
-- id is an integer of at most 11 digits, primary key and auto increment are additional attributes or constraints we put on it
-- name of the video is a string of at most 255 characters long
-- video_id is used to access the video, like Youtube's ?v=ZMtNyG5OPqM, and is a fixed length string
-- time_uploaded holds the time at which the video was first uploaded CREATE TABLE videos
    (id            INT(11) PRIMARY KEY AUTO INCREMENT,
     name          VARCHAR(255),
     video_id      CHAR(11),
     time_uploaded TIMESTAMP);
```

<div>

  ------------- ------ ---------- ---------------
  id            name   video_id   time_uploaded
  No entries.                     
  ------------- ------ ---------- ---------------

</div>
:::

## Data Types per System

-   [PostgreSQL](https://www.postgresql.org/docs/9.3/static/datatype.html)
-   [SQLite](https://www.sqlite.org/datatype3.html)
    -   SQLite actually doesn't force your columns into specific data
        types. Instead, it just supports a few general data types and
        changes the column based on whatever data you throw into it.
-   [MySQL](http://dev.mysql.com/doc/refman/5.7/en/data-types.html)
    -   Their documentation page is quite unorganized at the time of
        speaking. So, know that its data types are divided into three
        categories: *numeric* (integers and decimal numbers), *strings*
        (text and even more text), and *date and time*. Click each one
        to get the full overview for the category.
-   [SQL Server](https://msdn.microsoft.com/nl-nl/library/ms187752.aspx)
-   [MS
    Access](https://msdn.microsoft.com/en-us/library/ms714540(v=vs.85).aspx)
-   [Oracle](https://docs.oracle.com/cd/B28359_01/server.111/b28318/datatype.htm)

## Best Practices

It's generally best to make the data type constraint as tight and accurate as possible. If you expect to use strings of at most 10 characters for now, set the data type to be `VARCHAR(10)`. If you can make something into a string of fixed length, do so.

If you can store something as a number instead of a string, go for it! We already saw this with foreign keys, but it can also be applied in many other cases. For example, say you have a column *email_confirmed* in your *users* table. Then, you could use the values `"yes"` and
`"no"`, but you can also just use `1` and `0`, which is shorter.

On the other hand, you don't want to be surprised by your own constraints. For example, say you have a primary key *id* in your
*users* table, which has `AUTO INCREMENT` set on it. If you have thousands of users signing up every hour, this *id* will grow larger and larger very quickly. In these cases, you want to give yourself some breathing space, and set it to be an integer of, say, at most 10 digits.

" slug: "sql-data-types" cat: "Website" subcat: "SQL" video: "" diff: 3 quiz: "" - id: 460 title: "\[SQL\] Operators & Conditions" post: "

Earlier in this course, you've seen me mention *conditions* several times. When selecting entries from a database, we saw that we can choose only the entries for which a specified condition is true\-\--for example, only select articles that were posted in the month of January, or select all users with a username longer than 20 characters.

While some of those conditions could be used when creating the table structure, such as with the `CHECK` constraint, they will become much more important when reading data from a database. When selecting data, we usually don't want all of it, and using conditions is the only way to (logically) specify exactly which entries we want. Remember this:

\> An entry in an SQL query is selected only if the corresponding condition is *true*

## Arithmetic Operators

Conditions make heavy use of **operators**, but before we dive into conditional operators, I want to show the other type of operator: basic arithmetic.

The five arithmetic operators are:

  ---------- -----------------------------------------------
  Operator   Description
  `+`        Addition
  `-`        Subtraction
  `*`        Multiplication
  `/`        Division
  `%`        Modulus ( = remainder after integer division)
  ---------- -----------------------------------------------

As usual, they require two values around it (one on the left, one on the right), which we call its **operands**. As you'd also expect, you can use parentheses to determine the execution order. You could use these operators, for example, to transform a fixed value into percentages.

::: sideImagePreview
``` {data-lang="sql"}
-- Select the name of each product, and the multiplication of the price and discount columns (which is their final price) SELECT name, price*discount FROM products;
```

<div>

  ------------- -----------------
  name          price\*discount
  LEGO          18.67
  Plush Panda   56.77
  ------------- -----------------

</div>
:::

## Conditional Operators

These operators are also called *comparison operators*, and for a good reason: they compare the operands. Then, they return *true* if the comparison was true, and *false* otherwise. For example, you could compare if the *signup date* of a certain user is later than the *signup date* of another user. Or, you could compare if the amount of points a certain user has scored in your game is less than that of another user.

The conditional operators are:

+-----------------------------------+-----------------------------------+
| Operator                          | Description                       |
+-----------------------------------+-----------------------------------+
| `=`                               | Returns true if operands are      |
|                                   | equal                             |
+-----------------------------------+-----------------------------------+
| `!=`\                             | Returns true if operands are      |
| `<>`                              | *not* equal                       |
+-----------------------------------+-----------------------------------+
| `> `                              | Returns true if the left operand  |
|                                   | *is greater than* the right       |
|                                   | operand                           |
+-----------------------------------+-----------------------------------+
| `>=`\                             | Returns true if the left operand  |
| `!<`                              | *is greater than or equal to* the |
|                                   | right operand                     |
+-----------------------------------+-----------------------------------+
| `< `                              | Returns true if the left operand  |
|                                   | *is less than* the right operand  |
+-----------------------------------+-----------------------------------+
| `<=`\                             | Returns true if the left operand  |
| `!>`                              | *is less than or equal to* the    |
|                                   | right operand                     |
+-----------------------------------+-----------------------------------+

::: sideImagePreview
``` {data-lang="sql"}
-- Selects all products that cost at most 20 euros SELECT name, price FROM products WHERE price <= 20;
```

<div>

  ------------- -------
  name          price
  LEGO          12.50
  Plush Panda   75.00
  Playmobil     18.50
  Playstation   80.00
  Keychain      5.00
  ------------- -------

</div>
:::

## Logical Operators

We've seen how to create a single condition, and we've seen how to transform the values with some arithmetic\-\--but what if we want to use multiple conditions? For that, we use *logical operators*.

### General Logic

Essentially, logical operators chain together multiple conditions. With general logic operators, you can glue together any amount and any type of conditions.

+-----------------------------------+-----------------------------------+
| Operator                          | Description                       |
+-----------------------------------+-----------------------------------+
| `AND`                             | Returns true if both conditions   |
|                                   | are true                          |
+-----------------------------------+-----------------------------------+
| `OR`                              | Returns true if at least one of   |
|                                   | the conditions is true            |
+-----------------------------------+-----------------------------------+
| `NOT`                             | Returns true if the condition is  |
|                                   | false                             |
|                                   |                                   |
|                                   | It inverses your condition, and   |
|                                   | is often called the *negate       |
|                                   | operator*.                        |
+-----------------------------------+-----------------------------------+

Again, parentheses will help you out with grouping your conditions.

::: sideImagePreview
``` {data-lang="sql"}
-- Juan wants to buy a present for his kids, but doesn't want to spend more than 20 euros. SELECT name, price FROM products WHERE price <= 20 AND (age='kids' OR age='all');

-- Looks like it's going to be LEGO then!
```

<div>

  ------------------- ------- -----------
  name                price   age
  LEGO                12.50   all
  Plush Panda         75.00   kids
  Small Plush Panda   25.00   kids
  Playmobil           28.50   all
  Playstation         80.00   teenagers
  Keychain            5.00    adults
  ------------------- ------- -----------

</div>
:::

### NULL Logic

As we've seen before, the `NULL` value is common yet very special, and that's why it isn't so friendly towards our other operators. It requires its own syntax.

  --------------- --------------------------------------------------
  Operator        Description
  `IS NULL`       Returns true if the value is indeed `NULL`
  `NOT IS NULL`   Returns true if the value is indeed *not* `NULL`
  --------------- --------------------------------------------------

::: sideImagePreview
``` {data-lang="sql"}
-- Ginty, on the other hand, wants to read reviews first, before buying a product SELECT name, price, reviews FROM products WHERE reviews NOT IS NULL;
```

<div>

  ------------------- ------- ---------
  name                price   reviews
  LEGO                12.50   4.6
  Plush Panda         75.00   5.0
  Small Plush Panda   25.00   
  Playmobil           28.50   3.8
  Playstation         80.00   4.1
  Keychain            5.00    
  ------------------- ------- ---------

</div>
:::

### Fast Logic

Writing lots of `AND` and `OR` operators is exhausting. Therefore, SQL provides several shorthand ways to perform logic you'll commonly need.

For example, say you have 10 administrators working on the website, and when somebody logs in you want to check the username to see if they are an admin. Then, you need to check the username against 10 different names. This is a pain with only general operators, but would be easy with the `IN` operator.

![](media/SQLLogicOperators.png)

The fast and useful logic operators are:

+-----------------------------------+-----------------------------------+
| Operator                          | Description                       |
+-----------------------------------+-----------------------------------+
| `ALL (value_1, …, value_n)`       | Returns true if the comparison is |
|                                   | true for all values in the given  |
|                                   | set\*                             |
+-----------------------------------+-----------------------------------+
| `ANY (value_1, …, value_n)`\      | Returns true if the comparison is |
| `SOME (value_1, …, value_n)`      | true for at least one value in    |
|                                   | the given set                     |
+-----------------------------------+-----------------------------------+
| `BETWEEN x AND y`                 | Returns true if the left operand  |
|                                   | is between *x* and *y*            |
+-----------------------------------+-----------------------------------+
| `IN (value_1, …, value_n)`        | Returns true if the left operand  |
|                                   | is also somewhere within the      |
|                                   | given set                         |
+-----------------------------------+-----------------------------------+

NOTE: \*Sets are those comma-separated lists of values. Sets can also be the result of another query, but that's discussed in the *Subqueries* chapter.

::: sideImagePreview
``` {data-lang="sql"}
-- Select all items that are not LEGO, Playmobil or Duplo SELECT brand, price FROM products WHERE brand NOT IN ("LEGO", "Playmobil", "Duplo");
```

<div>

  ----------- -------
  brand       price
  LEGO        12.50
  WWF         75.00
  999 Games   25.00
  Playmobil   28.50
  Duplo       80.00
  Sony        55.00
  ----------- -------

</div>
:::

" slug: "sql-operators-conditions" cat: "Website" subcat: "SQL" video: "" diff: 3 quiz: "" - id: 461 title: "\[SQL\] Aliases & Variables" post: "

We've seen in all the previous chapters, that we can use the value inside a certain column by simply typing the column's name. For example, when selecting a user entry from a database based on the
*username* column, we can just use a condition like
`WHERE username = "PANDA"`.

Being able to easily access these values is great, but we want more. Instead of focusing on a single row at a time, we often want to see how the data is related across rows. For example, perhaps we want to count the amount of users that are female, or get the average age of all users. How to do all those fancy things will be discussed in later chapters, but in this chapter I want to introduce a tool you can use to simplify your life: **aliases**.

## Aliases

An alias is an alternative name you can give to some data. For example, once we've counted the amount of female users in our table, we want to save that result in a name we can easily remember\-\--such as
*female_count*. While it's not mandatory, I recommend to always use aliases, as they make queries much clearer and faster (because you don't need to recalculate things).

To create an alias, use

`some_expression AS some_alias_name`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Saves the value of price*discount under the alias of final_price SELECT name, price*discount AS final_price FROM products;
```

<div>

  ------------- -------------
  name          final_price
  LEGO          18.67
  Plush Panda   56.77
  ------------- -------------

</div>
:::

Note that these aliases are only defined and available in that specific query. You can't create an alias for a certain expression, and expect it to still work with a new query a few days later. You're really just renaming a certain part of a query so that you can use it more easily elsewhere within the same query.

## Special Aliases

Instead of merely saving a column or certain expression as an alias, we can also save a complete table under a different name. Now, you haven't actually seen ways to use multiple tables within the same query *yet*, but you will soon enough. For now, just remember that you can give a better name to such table with the following syntax:

`some_table some_alias_name`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Example: Now we want to select all items from "products", plus the description of the category they belong to (which is saved in another table "categories") SELECT prod.name, prod.price*prod.discount AS final_price, cat.description FROM products prod INNER JOIN categories cat ON prod.cat_id = cat.id
```

<div>

  ------------- ------------- ----------------------------------------------------------
  name          final_price   description
  LEGO          18.67         LEGO is a brand of blocks from Norway\...
  Plush Panda   56.77         WWF has been making plush toys of high quality since\...
  ------------- ------------- ----------------------------------------------------------

</div>
:::

NOTE: If you ever encounter an SQL query in the wild that you don't understand, it's more than likely there's multiple tables being renamed. Because the syntax is so easy and quick, it's also easy to overlook it.

Do not, however, fall into the trap of giving your tables the shortest names imaginable (such as `a` or `b`). Try to always provide clear and descriptive names for aliases that actually *help* you understand and write the query, not ones that merely make it shorter.

## Variables

Instead of renaming data we already have, SQL, like any proper computer language, can also save new data inside **variables**! Variables are nothing more than data containers\-\--you choose a name and data type, and assign a certain value to the variable. This way, if needed, we can create and save strings of text, numbers, anything you want.

To create a variable, use

`DECLARE @variable_name type;`{.longsyntax}

Yes, this *type* can be any of the data types your particular database system supports. So, for example, if you set it to `varchar(10)`, you can save any piece of text of at most 10 characters inside this variable.

To set a variable to the value you want, use

`SET @variable_name = desired_value;`{.longsyntax}

To use the variable, simply type the name wherever you want to insert the variable's value.

::: sideImagePreview
``` {data-lang="sql"}
-- Our boss has gone mad and wants to increase all our prices by a different random factor every day! DECLARE @random_num FLOAT(5,3); SET @random_num = 2.25;

SELECT name, price*discount*random_num AS final_price FROM products;
```

<div>

  ------------- -------------
  name          final_price
  LEGO          42.0075
  Plush Panda   127.7325
  ------------- -------------

</div>
:::

If you have never used any other programming language before, this babble about variables may seem like bogus. In this case, I suggest you do not worry about this, as it is quite an advanced feature you won't regularly need. Nevertheless, I also suggest you learn about programming languages and variables as soon as possible, as they are the cornerstone of computer science! (Or, well, one of the big building blocks, at least.)

" slug: "sql-aliases-variables" cat: "Website" subcat: "SQL" video: "" diff: 3 quiz: "" - id: 462 title: "\[SQL\] Aggregators" post: "

Now that we know how to create aliases for complex expressions, we of course need to work on creating those complex expressions. In the last chapter, I mentioned the example of counting the total amount of rows a certain query returned. When SQL does so, it essentially looks at all entries, and reduces their values to a single value\-\--the total amount of rows, which is just one number. In other words, functions like these
*aggregate* a set of rows into one value.

Not surprisingly, they are called **aggregators**, or aggregate functions. The five aggregators are: *count*, *sum*, *average*,
*maximum*, and *minimum*. Most databases also add a few aggregators of their own, but you'll need those far less often than the five fundamental aggregators.

## Count

The **count** aggregator counts the amount of entries that you've selected. You can, however, slightly modify how it will count those rows.

To count *all* the rows, use

`COUNT(*)`{.longsyntax}

To count the amount of rows of a certain column that have a meaningful value, which just means it does *not* count `NULL` values, use

`COUNT(column_name)`{.longsyntax}

Additionally, you can tell SQL to only count rows that are *different*. In other words, to only count the amount of rows with distinct values, use

`COUNT(DISTINCT column_name)`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Counts the amount of users SELECT username, COUNT(*) AS user_amount FROM users;

-- Notice how the username column also has only on value - with an aggregate function, this is always the value of the last column that was counted.
```

<div>

  ---------- -------------
  username   user_amount
  Juan       43
  ---------- -------------

</div>
:::

NOTE: This `DISTINCT` keyword can also be used with all the other aggregators, and at some other places, which I'll discuss later.

## Sum

The **sum** aggregator calculates the sum of all values in a certain column. Again, `NULL` values are omitted. (In a sense, they have the value `0` in the summation.) The syntax is

`SUM(column_name) SUM(DISTINCT column_name)`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Returns the sum of all the points scored by user Panda SELECT username, SUM(points) AS points_total FROM users WHERE username = "Panda";
```

<div>

  ---------- --------
  username   points
  Panda      50
  Juan       15
  Panda      50
  Panda      25
  ---------- --------

  ---------- --------------
  username   points_total
  Panda      125
  ---------- --------------

</div>
:::

## Average

The **average** aggregator returns the average of all values in a certain column. The syntax is

`AVG(column_name) AVG(DISTINCT column_name)`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Calculate the average points earned per day by Panda SELECT username, AVG(points) AS points_avg FROM users WHERE username = "Panda";
```

<div>

  ---------- ------------
  username   points_avg
  Panda      41.67
  ---------- ------------

</div>
:::

NOTE: Essentially, this is a shorthand method for calculating the total
*sum* of the values, and dividing that by the *count*. Because, if you remember from math classes, average = sum/(amount of items).

## Minimum

The **minimum** aggregator returns the minimum of a column\-\--the smallest value of all values. The syntax is

`MIN(column_name) MIN(DISTINCT column_name)`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Since this year, students are not allowed to have any grade below 4.0. Let's check if Panda and Juan are allowed to pass! SELECT username, MIN(grade) AS min_grade FROM users GROUP BY username;

-- The GROUP BY statement at the end simply groups the results, don't worry about it for now
```

<div>

  ---------- -------
  username   grade
  Panda      6.7
  Juan       8.2
  Panda      5.8
  Juan       3.8
  ---------- -------

  ---------- -----------
  username   min_grade
  Panda      5.8
  Juan       3.8
  ---------- -----------

</div>
:::

## Maximum

The **maximum** aggregator returns the maximum of a column\-\--the largest value of all values. The syntax is

`MAX(column_name) MAX(DISTINCT column_name)`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- To ease the pain, professor Qi decided to reward the username with the highest grade with candy. SELECT username, MAX(grade) AS max_grade FROM users GROUP BY username;
```

<div>

  ---------- -----------
  username   max_grade
  Panda      6.7
  Juan       8.2
  ---------- -----------

</div>
:::

" slug: "sql-aggregators" cat: "Website" subcat: "SQL" video:
"" diff: 3 quiz: "" - id: 463 title: "\[SQL\] Sorting" post: "

Let's say you've crafted a nifty select statement that returns all the rows you want\-\--how do you go about creating order out of this perhaps huge set of entries? Well, the way any structured person would organize his stuff. You collect everything you want to go through, divide it into groups, put them in a sensible order, and throw out everything you don't need.

For example, say you want to select the 10 latest blog posts from a table. In that case, you first *sort* the table by date (so that the latest posts come first in the results), and then tell SQL to ignore all entries that come after the first 10.

## Regular Ordering

Sorting or *ordering* results in this way is not only useful when it comes to displaying the data in a sensible manner, it's also often necessary for performing certain queries. To order results of a select statement, use

`ORDER BY expression [ASC | DESC]`{.longsyntax}

The expression, as always, can contain any column names or aliases you have. You need to put either the keyword `ASC` *or* `DESC` behind the expression. The first one orders results *ascending* (low to high), the second does so *descending* (high to low).

::: sideImagePreview
``` {data-lang="sql"}
-- This sorts the grades DESCENDING (from highest to lowest). SELECT * FROM grades ORDER BY grade DESC;

-- Note how this only influences the results we selected; the original table still has the same "order", namely the primary key id
```

<div>

  ---- ------------ -------
  id   username     grade
  3    Panda        8.5
  2    Juan         7.6
  4    Ginty        7.1
  1    Fluffykins   5.9
  ---- ------------ -------

</div>
:::

## Lexicographical Ordering

Lexicographical ordering simply refers to the type of ordering used in dictionaries. First, words are ordered based on the first letter. Then, if the first letter is the same, words are ordered based on the second letter. If the second letter is also the same, they are ordered based on the third letter\-\--and so on.

Instead of supplying only a single expression, we can supply as many as we want. SQL will first order based on the first expression, but if multiple entries have the same value, it will order based on the second expression. To do so, simply use

`ORDER BY expression [ASC | DESC], …, expression [ASC | DESC]`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- This sorts the grades DESCENDING, and if the grade is the same, the usernames ASCENDING (which is just alphabetical order) SELECT * FROM grades ORDER BY grade DESC, username ASC;
```

<div>

  ---- -------------- -------
  id   username       grade
  2    Juan           8.5
  3    Panda          8.5
  4    Ginty          7.1
  1    Jean Valjean   5.9
  5    Aladin         5.6
  6    Tigres         5.6
  ---- -------------- -------

</div>
:::

## Advanced Ordering

Additionally, you can also use those *aggregators* from last chapter within the expression. However, the main feature of aggregators was that they reduce to a single value\-\--and how do you order a single value?

We will look into that more intensively in a few chapters, but the main idea is that you can let SQL divide the results into groups before you start ordering. So, you can group the results based on some condition, and then order the *groups* instead of all individual entries. This way, using aggregators makes sense. You could, for example, divide a table containing blog posts into groups based on category, and then order these groups based on how many posts are within that category.

::: sideImagePreview
``` {data-lang="sql"}
-- Quick Example: This result isn't so interesting... (the ORDER BY has no function whatsoever) SELECT COUNT(*) AS high_grades FROM grades WHERE grade > 7 ORDER BY grade DESC;

-- ...but this is. It shows the amount of students that got the same grade, ordered from high to low SELECT grade, COUNT(*) AS group_num FROM grades GROUP BY grade ORDER BY grade DESC;
```

<div>

  -------------
  high_grades
  3
  -------------

  ------- -----------
  grade   group_num
  8.5     2
  7.1     1
  5.9     1
  5.6     2
  ------- -----------

</div>
:::

" slug: "sql-sorting" cat: "Website" subcat: "SQL" video: "" diff: 3 quiz: "" - id: 464 title: "\[SQL\] Grouping" post: "

Now that we know how to select entries based on conditions and expressions, and how to establish some order amongst them, we can start
*grouping* the results. Notice that grouping is very different from
*filtering* (discussed in next chapter). When grouping results, we're collecting all the results and putting them into larger or smaller groups. When filtering results, we're simply throwing out all the information we don't need.

We'll also see in this chapter that the order of the keywords is, in fact, very important in SQL. Intuitively, we understand that you can't place an `ORDER BY` statement at the start of a `SELECT` statement, because there would be nothing to order yet. But, for example, we will also see that there's a good reason that the `GROUP BY` keyword must come before the `ORDER BY` keyword.

## Group By

The `GROUP BY` keyword is extremely powerful, especially when used in combination with aggregators. Not only does it group entries for you, based on certain conditions, it's also smart enough to apply the aggregator function per group. Essentially, it compresses multiple entries from the same group, into one entry containing relevant information about the whole group.

The syntax is

`GROUP BY expression, …, expression`{.longsyntax}

It will group entries together if they have the same value for all the expressions. For example, you could group entries in a *movies* table if the average rating *and* genre are the same. Usually though, one expression is more than enough.

::: sideImagePreview
``` {data-lang="sql"}
-- Count the amount of users, grouped by gender SELECT gender, COUNT(*) AS amount FROM users GROUP BY gender;
```

<div>

  ---- ---------- --------
  id   username   gender
  1    Panda      male
  2    Ginty      female
  3    Juan       male
  4    Gandalf    male
  ---- ---------- --------

  -------- --------
  gender   amount
  male     3
  female   1
  -------- --------

</div>
:::

The `GROUP BY` keyword directly follows the `WHERE` statement of a query. The reason for this, is that you want to group the results immediately\-\--you can't order the results first, and then group them, because grouping undoes the ordering.

## Union

Alternatively, instead of chopping up results into smaller groups, we can combine results into bigger groups! Instead of only selecting data from one table, we can chain as many small `SELECT` statements as we want, and combine the results before we group them, or sort them, or do anything else with them. In other words, we can unite different results from several places with the `UNION` keyword.

I say *small* select statements, because you're only allowed to use the simplest form of the select query before the `UNION` keyword; the SELECT-FROM-WHERE format. Therefore, the general syntax is:

`SELECT __ FROM __ WHERE __ UNION SELECT __ FROM __ WHERE __ other keywords or operations here`{.longsyntax}

You can create a union from as many select statements as you want, as long as you adhere to the SELECT-FROM-WHERE format. (Or, you can use subqueries, but those are so powerful that I've given them their own huge chapter near the end of the course.)

::: sideImagePreview
``` {data-lang="sql"}
-- Say we have an online game where each game world has its own table. Then we can count all the users SELECT username, points FROM world_one

UNION

SELECT username, points FROM world_two

ORDER BY points DESC
```

<div>

  ---- ---------- --------
  id   username   points
  1    Panda      255
  2    Ginty      125
  ---- ---------- --------

  ---- ---------- --------
  id   username   points
  1    Juan       60
  2    Gandalf    1000
  ---- ---------- --------

  ---------- --------
  username   points
  Gandalf    1000
  Panda      255
  Ginty      125
  Juan       60
  ---------- --------

</div>
:::

*Why can't I use other keywords before the `UNION` keyword?* Because, in every SQL query, you first need to select all your data before you can perform any special actions on it (such as grouping, sorting, and more). So, just as with grouping, you first need to unite all the data you could possibly need, and only later in the query can you sort them.

## Union All

The regular `UNION` keyword, by default, only combines distinct rows. In other words, if it finds two entries that are the same, it will throw out one of them. This is often what you want\-\--remember, *identical rows are evil!*\-\--however, if you want to keep those duplicate rows, use

`SELECT __ FROM __ WHERE __ UNION ALL SELECT __ FROM __ WHERE __ other keywords or operations here`{.longsyntax}
" slug: "sql-grouping" cat: "Website" subcat: "SQL" video: "" diff: 3 quiz: "" - id: 465 title: "\[SQL\] Filtering" post: "

Continuing in the spirit of last chapter, we will now look at ways to limit your data set. Often, a query returns more results than you need, and there's no way to change that with a simple condition. Instead, even more awesome keywords can be used to filter out the right results!

## Intersect & Except

As opposed to combining data sets using the `UNION` keyword (discussed in last chapter), we can also reduce the amount of entries by checking them against another set. This means that we *compare* entries from multiple `SELECT` statements, and keep an entry only if some condition is satisfied.

-   To keep an entry only if it appears in both tables, use the
    `INTERSECT` keyword.
-   To keep an entry only if it *doesn't* appear in both tables, use
    the `EXCEPT` keyword.

![](media/SQLIntersectExcept.png)

::: sideImagePreview
``` {data-lang="sql"}
-- Looking at our online game again, we want to select all users that have explored both worlds SELECT username FROM world_one

INTERSECT

SELECT username FROM world_two
```

<div>

  ---- ---------- --------
  id   username   points
  1    Panda      255
  2    Ginty      125
  3    Gandalf    50
  ---- ---------- --------

  ---- ---------- --------
  id   username   points
  1    Juan       60
  2    Panda      300
  3    Gandalf    1000
  ---- ---------- --------

  ----------
  username
  Gandalf
  Panda
  ----------

</div>
:::

NOTE: These keywords are available in all systems, except for MySQL. Do not fret, however, as you can recreate how they work with some *joins* magic (explained in a later chapter).

## Distinct

Up until now, the `SELECT` keyword has been quite lonely in all our queries, with no keywords near it. You might have silently accepted that this is just the way the syntax works, but, surprise surprise, it can actually have the `DISTINCT` keyword after it!

Without it, the default behaviour is that the statement selects all information, as you've seen. With the `DISTINCT` keyword after it, the select statement only selects *unique* rows, no matter what query magic comes after it. So, the general syntax becomes:

`SELECT DISTINCT __ FROM __ WHERE __ other operations here`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- We want to show all the different cheap products in our store. However, lots of items have multiple versions (such as a black and a white laptop case), but we want to count those as only one. SELECT DISTINCT name FROM products WHERE price <= 100
```

<div>

  ---- ------------ --------
  id   name         price
  1    LEGO         20.50
  2    LEGO         15.50
  3    Laptop       599.99
  4    The Hobbit   12.99
  5    Laptop       499.99
  ---- ------------ --------

  ------------
  name
  LEGO
  The Hobbit
  ------------

</div>
:::

## Having

Many, many times we've used the powerful `WHERE` keyword to filter our results. Now that we can also group the results, however, we need another keyword to filter the *groups*. To avoid confusion, SQL doesn't use the same keyword again, but instead uses the `HAVING` keyword.

For example, say you have a web shop with a table containing products, and you want to provide a list of the best-rated categories. Therefore, you only want to display the categories with a rating higher than 90%. To do so, you select everything from the database, group them by the average rating, and then remove all groups that have a rating that's too low.

The `HAVING` keyword must always follow a `GROUP BY` statement, and provides conditions that determine which groups are kept and which are thrown away. Therefore, the syntax is:

`SELECT __ FROM __ WHERE __  GROUP BY __ HAVING conditions`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Alternatively, we could do this (to also count the amount of versions we have per product) SELECT name, COUNT(*) AS amount, MIN(price) AS min_price FROM products  GROUP BY name

HAVING min_price < 100
```

<div>

  ---- ------------ --------
  id   name         price
  1    LEGO         20.50
  2    LEGO         15.50
  3    Laptop       599.99
  4    The Hobbit   12.99
  5    Laptop       499.99
  ---- ------------ --------

  ------------ -------- -----------
  name         amount   min_price
  LEGO         2        15.50
  The Hobbit   1        12.99
  ------------ -------- -----------

</div>
:::

So, instead of filtering results upfront (like `WHERE`), it filters the groups after they've been formed.

## Limiting

Last but certainly not least, we can throw out entries based on their position in the results. Once we've ordered our results, we can say things like "pick only the first 10 rows" or "pick rows 10-20". A very common application of limiting is selecting the latest 5 or 10 blog posts from a database.

Unfortunately, ideas about how to implement this differ vastly across systems. The syntax for selecting the first *X* amount of rows is:

`… ORDER BY __ LIMIT XSQLiteMySQLPostgreSQL`{.longsyntax}
`SELECT TOP X __ FROM …SQL ServerMS Access`{.longsyntax}
`FROM __ WHERE ROWNUM <= XOracle`{.longsyntax}

NOTE: As you can see, besides the keyword itself, the placement of the keyword is also different.

::: sideImagePreview
``` {data-lang="sql"}
-- Select the titles from the latest 3 blog posts SELECT title FROM posts ORDER BY id DESC LIMIT 3
```

<div>

  ---- -------------------- -------------------
  id   title                post
  1    Hello World!         Hi\...
  2    Test.                Just testing\...
  3    Test Again.          Grumpf\...
  4    Finally, it works.   Yay!\...
  5    Blog Post #1         Welcome every\...
  ---- -------------------- -------------------

  --------------------
  title
  Blog Post #1
  Finally, it works.
  Test Again.
  --------------------

</div>
:::

### Pagination

Another common application for limiting is creating a paginated website. Once the user has reached the bottom of the page, he can click on a button to go to the next page, which will display the next 10 posts or results from the database. (Of course, there are many more uses for this SQL technique.)

Essentially, you want to select the first *X* rows, starting from position *Y*. The syntax is:

`LIMIT X OFFSET Y LIMIT X, YSQLiteMySQLPostgreSQL`{.longsyntax}
`OFFSET Y ROWS FETCH NEXT X ROWS ONLYSQL Server, MS Access`{.longsyntax}
`(ROWNUM >= Y AND ROWNUM <= (X+Y))Oracle`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- On page 2, select the titles from the latest 3-6 blog posts SELECT title FROM posts ORDER BY id DESC LIMIT 3,3
```

<div>

  ---- -------------------- -------------------
  id   title                post
  1    Hello World!         Hi\...
  2    Test.                Just testing\...
  3    Test Again.          Grumpf\...
  4    Finally, it works.   Yay!\...
  5    Blog Post #1         Welcome every\...
  5    Blog Post #2         Today I want\...
  ---- -------------------- -------------------

  --------------
  title
  Test Again.
  Test.
  Hello World!
  --------------

</div>
:::

NOTE: As you can see, the syntax for pagination is extremely easy in MySQL and the like, but not in the other systems. Therefore, you can usually achieve much better performance by implementing this in another way, using subqueries. Again. Really, subqueries are important.

" slug: "sql-filtering" cat: "Website" subcat: "SQL" video: "" diff: 3 quiz: "" - id: 466 title: "\[SQL\] Joins I" post: "

All the queries and fancy keywords we've used thus far, were mainly used on single tables. Sure, we learnt how to combine select statements to get much larger data sets from multiple tables. That's only one of many ways, however, to create queries that work with multiple tables. Instead of mixing *everything* together, it's far more common to only combine data sets on rows that have something in common, or only include extra entries based on a certain condition, and so on.

For working with many entries from many different places, we use
**joins**. Many different types of joins exist, and I will explain them from simplest to most complex.

## Cross Join

The **cross join** simply joins *every* row from one table, with *every* row from another table. If you remember anything from mathematics, you might know this as a *Cartesian product*, commonly denoted with a cross
(×). Not surprisingly, it's also called the **Cartesian join**.

So, if you have one table with 10 rows and 2 columns, and another with 5 rows and 2 columns, the result will be a data set with 50 rows and 4 columns.

![](media/SQLCrossJoin.png)

To create a cross join, use one of these syntaxes

`SELECT * FROM table1, table2 SELECT * FROM table1 CROSS JOIN table2`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Say we're writing a program that randomly combines sentences, just for fun
-- CONCAT simply puts the strings together, don't worry about it for now SELECT CONCAT(front, back) AS sentence

FROM front_sentences 

CROSS JOIN back_sentences
```

<div>

  ------------------------
  front
  Mike went swimming\...
  He borrowed a duck\...
  ------------------------

  -----------------------------
  back
  because he was lonely.
  because it was his mission.
  -----------------------------

  ---------------------------------------------------
  sentence
  Mike went swimming\...because he was lonely.
  Mike went swimming\...because it was his mission.
  He borrowed a duck\...because he was lonely.
  He borrowed a duck\...because it was his mission.
  ---------------------------------------------------

</div>
:::

Usually, this join is a bit over the top\-\--you'll likely only need a small set of those rows you're selecting. Either way, it's the simplest join there is if you want to play around with joins.

## Inner Join

An **inner join** is essentially a cross join with conditions added. It doesn't combine *all* rows, but only rows that fulfil a certain condition. So, it selects a subset of the cross join, or an *inner part* of the full data set\-\--hence the name.

![](media/SQLInnerJoin.png)

An inner join can be performed *implicitly*, which means you're playing with rows from multiple tables at the same time and trusting SQL to do the right thing, or *explicitly*, by using a keyword.

### Implicit

One powerful feature of SQL, is that we can easily access anything from any table within the database. This is done with the **dot notation**:

`someTable.someColumn`{.longsyntax}

We can use this notation to work with data from multiple tables at the same time, without having to explicitly join anything. All we need to do is include a `WHERE` clause, using the dot notation, that states which rows we should combine.

::: sideImagePreview
``` {data-lang="sql"}
-- Combine comments with information about the user SELECT users.username AS usn, 
       comments.comment AS cmt FROM users, comments

WHERE usn = comments.user_id
```

<div>

  ---- ----------
  id   username
  1    Panda
  2    Ginty
  3    Juan
  ---- ----------

  --------- ----------------------------
  user_id   comment
  1         I like to move it, move it
  3         This is a test comment.
  4         Dragons are awesome!
  --------- ----------------------------

  ------- ----------------------------
  usn     cmt
  Panda   I like to move it, move it
  Juan    This is a test comment.
  ------- ----------------------------

</div>
:::

NOTE: This notation can also be used at any other place within the query, because it isn't really any different from the column names we've been using thus far. It simply selects a column from a foreign table, nothing more, nothing less.

### Explicit

The alternative syntax for inner joins, which is less flexible but often makes the query more readable, is:

`SELECT __ FROM table1 INNER JOIN table2 ON conditions`{.longsyntax}

Note that we must still use the dot notation\-\--it's just that the join itself and the corresponding condition have their own syntax.

::: sideImagePreview
``` {data-lang="sql"}
-- This does exactly the same as the previous example SELECT users.username AS usn, 
       comments.comment AS cmt FROM users INNER JOIN comments ON usn = comments.user_id
```

<div>

  ------- ----------------------------
  usn     cmt
  Panda   I like to move it, move it
  Juan    This is a test comment.
  ------- ----------------------------

</div>
:::

## Biased Joins

We've seen the cross join that selects *everything*, and the inner join that only selects rows if they match a certain condition in *both tables*. That's nice and fair, but what if we want the query to be biased, and select results from one table differently than from the other? We can use what I call **biased joins**.

![](media/SQLBiasedJoins.png)

### Left Join

The **left join** selects *all* rows from the first table, but only the rows that match the conditions from the second table. Therefore, there will be rows from the first table that don't have a matching row in the second. If that's the case, it fills in `NULL` values for those columns. Use one of these syntaxes:

`SELECT __ FROM table1 LEFT JOIN table2 SELECT __ FROM table1 LEFT OUTER JOIN table2`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Using the same tables as previous examples, a left join instead of inner join would give these results SELECT users.username AS usn, 
       comments.comment AS cmt FROM users

LEFT JOIN comments ON usn = comments.user_id
```

<div>

  ------- ----------------------------
  usn     cmt
  Panda   I like to move it, move it
  Ginty   
  Juan    This is a test comment.
  ------- ----------------------------

</div>
:::

### Right Join

The **right join** selects only the rows that match the conditions from the first table, but *all* rows from the second table. So, it's a reversed left join. Use one of these syntaxes:

`SELECT __ FROM table1 RIGHT JOIN table2 SELECT __ FROM table1 RIGHT OUTER JOIN table2`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- If we turn around the table order, a right join would do exactly the same as the previous left join SELECT users.username AS usn, 
       comments.comment AS cmt FROM comments

RIGHT JOIN users ON usn = comments.user_id
```

<div>

  ------- ----------------------------
  usn     cmt
  Panda   I like to move it, move it
  Ginty   
  Juan    This is a test comment.
  ------- ----------------------------

</div>
:::

### Full Join

The **full join** is a combination of the left and right join.

*What's the difference with a cross join or inner join?* The full join uses *every* row from the first table, and *every* row from the right table (like a cross join). However, if it finds two rows that match the provided conditions, it will combine them (just like an inner join). If it can't find a matching row from the other table, it will fill in
`NULL` values for all the other columns (like left and right joins).

So, it will include every row from the first table *only once*, and every row from the second table *only once*. And, if possible, it will combine rows.

`SELECT __ FROM table1 FULL OUTER JOIN table2`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Combine comments with information about the user SELECT users.username AS usn, 
       comments.comment AS cmt FROM users

FULL JOIN comments ON usn = comments.user_id
```

<div>

  ------- ----------------------------
  usn     cmt
  Panda   I like to move it, move it
  Ginty   
  Juan    This is a test comment.
          Dragons are awesome!
  ------- ----------------------------

</div>
:::

" slug: "sql-joins-I" cat: "Website" subcat: "SQL" video: "" diff: 4 quiz: "" - id: 467 title: "\[SQL\] Joins II" post: "

Joins are so powerful and important, that they deserve a second chapter! The previous chapter outlined all the types of joins\-\--there is no other way to combine two data sets. So, this chapter will look at what to do if you don't have two data sets, but only one or more than two.

If a table joins on itself, we call it a **self join**. If you chain more than one join, so that at least three tables are being joined, I like to call it a **multi join**.

*When would I use this advanced joining wizardry?* Well, say you're running a university, and you have a system with tables *students*,
*grades*, and *courses*. You want to get the amount of ECTS ("study points") that a certain student has earned, and email her this information. Then you need the email address from the students table, the grade from the grades table, *and* the amount of study points the course gives from the courses table.

## Self Join

Joining a table with itself might seem obvious\-\--just use an inner join with the same table. While that is indeed how a self join can be made, there's one problem: how do you distinguish the first instance of the table with the second one, if they both have the same name?

That's where those handy table aliases come into play! When working with self joins, always make sure you give useful and distinct names to your tables and expressions. Otherwise, you quickly lose focus of what you're trying to do, and SQL will lose focus too.

NOTE: In fact, it's always best to properly name the components of your query in joins, or any situation you're working with data from lots of different places.

So, to get the full picture, look at the following example. It demonstrates a typical use case of self joins: when a table references data within itself.

::: sideImagePreview
``` {data-lang="sql"}
-- Say we have a categories table that uses multiple levels; one category can be the subcategory of another. This is how we could get the name of the parent category of every subcategory. SELECT first.name AS parent, second.name AS category FROM categories first

INNER JOIN categories second ON second.subcat_id = first.id

-- the WHERE statement, and other keywords, come after the joining process
```

<div>

  ---- ------- -----------
  id   name    subcat_id
  1    News    
  2    Local   1
  3    Blog    1
  ---- ------- -----------

  -------- ----------
  parent   category
  News     Local
  News     Blog
  -------- ----------

</div>
:::

## Multi Join

Similarly, chaining multiple joins is nothing more than using the same syntax over and over.

The only thing that might create problems, is the placement and usage of the `ON` keyword. With multiple joins, you can't separate the `JOIN` keyword and the `ON` keyword. Instead, the syntax for one join needs to stay together, like this:

`SELECT __ FROM table1 JOIN table2 ON condition JOIN table3 ON condition lots of other keywords and expressions here`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- We have three tables: movie titles, actors linked to movie titles, and actor names SELECT 
    movies.id AS movie_id, 
    movies.title AS title,
    CONCAT(actors.firstname,' ',actors.lastname) AS name FROM movies

INNER JOIN movie_actors ON movies.id = movie_actors.movie_id

INNER JOIN actors ON actors.id = movie_actors.actor_id
```

<div>

  ---- -------------------------------------
  id   title
  1    Inception
  2    Harry Potter and the Goblin on Fire
  3    Lord of the Rings
  ---- -------------------------------------

  ---------- ----------
  actor_id   movie_id
  3          1
  2          2
  1          3
  ---------- ----------

  ---- ----------- -----------
  id   firstname   lastname
  1    Ian         McKellen
  2    Daniel      Radcliffe
  3    Leonardo    diCaprio
  ---- ----------- -----------

  ---------- ------------------------------------- -------------------
  movie_id   title                                 name
  1          Inception                             Leonardo diCaprio
  2          Harry Potter and the Goblin on Fire   Daniel Radcliffe
  3          Lord of the Rings                     Ian McKellen
  ---------- ------------------------------------- -------------------

</div>
:::

It's also important to note that the *condition* you use theoretically has no problem with using data from tables you'll be joining later. As long as you use the dot notation, you could use something from *table3* in the condition for *table2*. However, I don't see how this could ever be put to practice (without making the code a complete mess), so I suggest you really keep joins separate. A single join should add rows from a new table, based on a condition using the new table and all previous tables.

## A Note on Joins

Joins have many uses, but that also makes them prone to abuse.

First of all, check if you really need to use a join. Sometimes a simple
`WHERE` statement or something else we've learned can replace it, and is much simpler and faster. On the other hand, if you're writing a complex query, check if you can't use a join instead. For example, subqueries can take over all the functionality of joins, but they are more tedious to write and much slower to execute.

Secondly, check if you really need that many rows or columns. Most developers are lazy, and they just select everything and forget that they're not going to use half of it. Don't be that kind of guy (or girl). Most databases need to perform lots of complex queries during the day\-\--if you can reduce the complexity and increase the speed, you're doing yourself a big favour.

" slug: "sql-joins-II" cat: "Website" subcat: "SQL" video: "" diff: 4 quiz: "" - id: 468 title: "\[SQL\] Searching" post: "

I don't think I need to explain the importance of this topic to you. Search engines. Searching through a website. There will be times when you don't know *exactly* where you can find the entries you need, and in those cases, you want to write conditions to "vaguely match" against entries in your database. I say vaguely match, because searching is nothing more than checking if values from the database look somewhat like a search value the user provided. It's up to you how lenient your database is, what it searches through, and how it assigns importance to the results.

## Simple Search

The simplest type of searching is simply checking if the value of a column matches a certain pattern. For example, if we want to find all blog posts that have the tag *"news"*, we can perform a simple search for entries where the column *tags* contains the string "*news"*.

For this, we use the `LIKE` operator. Notice that it's an operator, not a keyword, so it is used in conditions, and can be inverted:

`SELECT __ FROM __ WHERE column LIKE some_pattern SELECT __ FROM __ WHERE column NOT LIKE some_pattern `{.longsyntax}

However, notice that I'm using the word *pattern* here. If we knew the exact value we were looking for, we wouldn't need the `LIKE` operator\-\--instead, we could have just used the `=` operator. So, in our example, we're not looking for the exact string "*news*", but rather for any string that *contains* the word "news". To accomplish this, we use **wildcards**.

A wildcard is a symbol that stands for *everything that resembles what I'm looking for*. We've already seen one wildcard character, the asterisk ( `*` ), which was used to select *all rows from this table*. Within searches, we can use two more wildcards:

  ---------- --------------------------------------------------------------
  Wildcard   Description
  `_`        Matches any *single* character
  `%`        Matches any *sequence* of characters\-\--zero, one, or more.
  ---------- --------------------------------------------------------------

::: sideImagePreview
``` {data-lang="sql"}
-- Select all posts with a title that talks about cats SELECT id, title FROM posts WHERE title LIKE "%cat%" OR title LIKE "%Cat%"
```

<div>

  ---- ---------------------------------
  id   title
  1    Big cats you are beautiful.
  2    Another panda has been rescued!
  3    Warning: storm at sea.
  4    Look at this cute cat!
  5    Cats; what we know about them.
  ---- ---------------------------------

</div>
:::

NOTE: As you can see, you can use as many wildcards as you want, or none at all.

## Regular Expressions

If that is not enough for your searching needs, you can use **regular expressions**. These are extremely flexible and powerful, and will be able to do just about anything you'd ever want. They are also complicated, however, and I will not explain how regular expressions themselves work. Their syntax is the same across all programming languages, so there's no need to go in-depth in this SQL tutorial.

Nevertheless, I do need to tell you the syntax for using a regular expression in SQL. Instead of the `LIKE` operator, you can simply use a different operator (mostly `REGEXP`):

`WHERE column REGEXP some_regular_expressionMySQLSQLite`{.longsyntax}
`WHERE column SIMILAR TO some_regular_expressionPostgreSQL`{.longsyntax}
`WHERE REGEXP_LIKE(column, some_regular_expression)Oracle`{.longsyntax}

*SQL Server* and *MS Access* already support regular expressions using the `LIKE` operator.

::: sideImagePreview
``` {data-lang="sql"}
-- Select all posts with a title that does not contain any numbers SELECT id, title FROM posts WHERE title REGEXP "[^0-9]+"
```

<div>

  ---- -----------------------------------------------------------
  id   title
  1    Big cats you are beautiful.
  2    Panda #11 has been rescued!
  3    Warning: sea storm level at 10.
  4    Look at this cute cat!
  5    Cats; what we know about them, and why they have 9 lives.
  ---- -----------------------------------------------------------

</div>
:::

## Full text Search

Even though simple searches, with wildcards and regular expressions, are very powerful, they also lack a lot of useful features. For example, when we find an entry that matches, we can't really determine the relevance of the match. Or, when we're searching through extremely large pieces of text, the queries can become very slow.

To solve this, databases have something called **full text search**. The problem is that it's implemented almost completely differently in every system, so I'll try to explain the concept here, and you should be able to find specific syntax or functions for full text search in your particular system.

A full text search works in two steps:

1.  The database indexes the words within the columns you're looking
    for. This works just like an index in a regular book\-\--it creates
    a list of every word and in what entries it occurs. Additionally, in
    this step, you can use some functions or keywords to tell your
    database to be smart. For example, you could tell it to group
    related or similar words together, such as "mice" and "mouse".
2.  With the index created, searching for certain expressions is quick
    and easy. All you need to do is provide the expression you're
    searching for, and perhaps provide ways to rank the results of how
    lenient you want to be. The database then looks in the index, finds
    every word that fits, selects every entry that is connected to it,
    and returns that.

![](media/SQLFulltextSearch.png)

NOTE: You'll learn later how to create these kinds of indexes yourself\-\--they can really save your life.

As said earlier, how systems implement this differs vastly. Some systems have an easy general syntax:

`WHERE MATCH(col_1, …, col_n) AGAINST (search expressions, etcetera)MySQLSQLite`{.longsyntax}
`WHERE CONTAINS(search expressions, conditions, functions, etcetera)SQL ServerOracle`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- Searches all the posts, and selects the ones that mention something related to javascript objects
-- It also orders the results based on relevance SELECT id, title FROM articles

WHERE MATCH(post) AGAINST('javascript objects')

ORDER BY MATCH(post) AGAINST('javascript objects')
```

<div>

  ---- ------------------------------------------
  id   title
  4    \[JavaScript\] Objects II
  3    \[JavaScript\] Objects I
  7    Object-Oriented Programming
  2    Introduction to JavaScript
  1    The Pandas and their Whereabouts; Part 2
  ---- ------------------------------------------

</div>
:::

NOTE: *MS Access* doesn't support full text search, *PostgreSQL* does but requires a lot more advanced SQL knowledge to pull off.

" slug: "sql-searching" cat: "Website" subcat: "SQL" video: "" diff: 4 quiz: "" - id: 469 title: "\[SQL\] Functions" post: "

One of the most important aspects of any programming language, is number and string manipulation. Every language has lots of functionality for extracting the information you want from a number or string, and SQL is no different. For example, one day you might decide that you want to replace all occurrences of the word "client" with "user" across the whole database. Or, you might change the system of your movie website to store ratings as integers between 0 and 10, instead of decimal numbers between 1 and 5. Obviously, you don't want to spend countless days changing every single entry\-\--luckily, functions allow you to execute a single query and be done with it.

Again, however, the available functions differ across systems, and there's only a handful of really useful functions that is supported by all. Needless to say, I will discuss those and leave the rest to you.

## Numeric

Functions for numbers aren't necessarily very applicable in a website environment, but are insanely useful if you're analysing data from a database, or if you're running a game or other system that depends heavily on correct and precise numbers.

### General

+-----------------------------------+-----------------------------------+
| Function                          | Description                       |
+-----------------------------------+-----------------------------------+
| `RAND()`                          | Returns a random number between 0 |
|                                   | and 1. By multiplying it, and     |
|                                   | adding/subtracting from it, you   |
|                                   | can achieve random numbers within |
|                                   | any range.                        |
+-----------------------------------+-----------------------------------+
| `STD(x)`\                         | Calculates the standard deviation |
| `STDDEV(x)`                       | for a certain expression *x*.     |
+-----------------------------------+-----------------------------------+

### Rounding & Formatting

+-----------------------------------+-----------------------------------+
| Function                          | Description                       |
+-----------------------------------+-----------------------------------+
| `ROUND(x)`                        | Rounds a number *x* to the        |
|                                   | nearest integer                   |
+-----------------------------------+-----------------------------------+
| `FLOOR(x)`                        | Rounds a number *x* *down* to the |
|                                   | nearest integer                   |
+-----------------------------------+-----------------------------------+
| `CEIL(x)`                         | Rounds a number *x* *up* to the   |
|                                   | nearest integer                   |
| `CEILING(x)`                      |                                   |
+-----------------------------------+-----------------------------------+
| `ABS(x)`                          | Calculates the absolute value of  |
|                                   | *x*. (That is, if *x* is          |
|                                   | negative, it is turned positive.) |
+-----------------------------------+-----------------------------------+
| `TRUNCATE(x, y)`                  | Rounds the number *x* to *y*      |
|                                   | number of decimal places. If *y*  |
|                                   | is 0, the decimal point is simply |
|                                   | removed. If *y* is negative, it   |
|                                   | removes that amount of values     |
|                                   | from the integer part of the      |
|                                   | number.                           |
+-----------------------------------+-----------------------------------+

::: sideImagePreview
``` {data-lang="sql"}
-- Fetch a random quote from our database SELECT quote FROM quotes WHERE id = ROUND(RAND()*4+1)

-- In my case, it was 5.
```

<div>

  ---- ---------------------------------------
  id   quote
  1    To be, or not to be.
  2    A life you don't live is still lost.
  3    Every moment matters.
  4    The best way out is always through.
  5    Do it with passion or not at all.
  ---- ---------------------------------------

</div>
:::

## String

String functions, unlike numbers, are more applicable in the day-to-day situations you'll encounter when making a (simple) website. Typical uses are working with blog posts, descriptions, tags, comments, etcetera.

NOTE: In SQL, oddly enough, string indices start at 1. So, the first character in an SQL string has position 1. (Unlike other programming languages, which all start at 0).

### General

+-----------------------------------+-----------------------------------+
| Function                          | Description                       |
+-----------------------------------+-----------------------------------+
| `CHAR_LENGTH(x)`\                 | Returns the length of a string    |
| `CHARACTER_LENGTH(x)`             | measured in characters.           |
|                                   |                                   |
|                                   | This means that symbols made out  |
|                                   | of multiple bytes are counted as  |
|                                   | 1.                                |
+-----------------------------------+-----------------------------------+
| `LENGTH(x)`\                      | Returns the length of a string    |
| `LEN(x)`                          | measured in bytes.                |
|                                   |                                   |
|                                   | This means that it will return a  |
|                                   | longer string length if your      |
|                                   | strong consists of complex        |
|                                   | symbols made out of multiple      |
|                                   | bytes.                            |
+-----------------------------------+-----------------------------------+
| `CONCAT(str_1, …, str_n)`         | Concatenates all strings, which   |
|                                   | means it places all of them after |
|                                   | each other to create one string.  |
+-----------------------------------+-----------------------------------+
| `CONCAT_WS(sep, str, …, str)`     | Concatenates all strings, but     |
|                                   | places a separator *sep* between  |
|                                   | each of them.                     |
+-----------------------------------+-----------------------------------+

::: sideImagePreview
``` {data-lang="sql"}
-- Create a full name from user's first and last names SELECT 
    first, 
    last, 
    CONCAT(first, ' el ', last, 'o') AS full FROM users
```

<div>

  ------- ---------- --------------------
  first   last       full
  Juan    Dragon     Juan el Dragono
  Panda   Pettisan   Panda el Pettisano
  Ginty   Bon        Ginty el Bono
  ------- ---------- --------------------

</div>
:::

### Formatting

  ------------ --------------------------------------------------------------------------
  Function     Description
  `LTRIM(x)`   Removes all whitespace characters from the start of the string.
  `RTRIM(x)`   Removes all whitespace characters from the end of the string.
  `TRIM(x)`    Removes all whitespace characters from both the start and end of string.
  `LOWER(x)`   Makes the string lowercase
  `UPPER(x)`   Makes the string uppercase
  ------------ --------------------------------------------------------------------------

### Substrings

+-----------------------------------+-----------------------------------+
| Function                          | Description                       |
+-----------------------------------+-----------------------------------+
| `SUBSTRING(str, pos, len)`        | Returns the part of *str* that    |
|                                   | starts at position *pos* and ends |
|                                   | at position (*pos + len*)         |
+-----------------------------------+-----------------------------------+
| `LOCATE(substr, str, pos)`        | Returns the position of the first |
|                                   | occurrence of *substr* in *str*,  |
|                                   | and starts looking from position  |
|                                   | *pos*.                            |
+-----------------------------------+-----------------------------------+
| `FIELD(substr, str, …, str)`      | Returns the position of *substr*  |
|                                   | in the set of strings.            |
|                                   |                                   |
|                                   | Returns 0 if it can't be found.  |
+-----------------------------------+-----------------------------------+
| `FI                               | Same as the previous function,    |
| ND_IN_SET(substr, "str, …, str")` | but the set of strings is         |
|                                   | provided as a string itself.      |
+-----------------------------------+-----------------------------------+
| `INSERT(str, pos, len, newstr)`   | Removes all characters in *str*   |
|                                   | between *pos* and *len*, and      |
|                                   | replaces them with the new string |
|                                   | *newstr*.                         |
|                                   |                                   |
|                                   | Of course, if you only want to    |
|                                   | remove characters from the        |
|                                   | string, you can make the new      |
|                                   | string empty.                     |
+-----------------------------------+-----------------------------------+

::: sideImagePreview
``` {data-lang="sql"}
-- Some old (and weird) database system stores every username with the tags  around it. We don't want those when selecting SELECT 
    username, 
    SUBSTR(username, 6, LENGTH(username)-7) AS better_usn FROM users
```

<div>

  -------------------- --------------------
  username             better_usn
  Juan el Dragono      Juan el Dragono
  Panda el Pettisano   Panda el Pettisano
  Ginty el Bono        Ginty el Bono
  -------------------- --------------------

</div>
:::

### Comparing & Replacing

+-----------------------------------+-----------------------------------+
| Function                          | Description                       |
+-----------------------------------+-----------------------------------+
| `REPLACE(str, old, new)`          | Replaces all occurrences of *old* |
|                                   | with *new*, in the string *str*.  |
+-----------------------------------+-----------------------------------+
| `REVERSE(str)`                    | Simply reverses the string        |
+-----------------------------------+-----------------------------------+
| `REPEAT(str, count)`              | Creates a new string that simply  |
|                                   | consists of *str* repeated        |
|                                   | *count* number of times.          |
+-----------------------------------+-----------------------------------+
| `STRCMP(str1, str2)`              | Compares two strings. Returns 0   |
|                                   | if both are *equal*, returns -1   |
|                                   | if the first argument is          |
|                                   | *smaller*, and returns 1 if the   |
|                                   | first argument is *greater*.      |
+-----------------------------------+-----------------------------------+
| `SOUNDEX(str)`                    | Can be used to check if two       |
|                                   | strings *sound* alike. If that is |
| `SOUNDS LIKE`                     | the case, the *soundex* strings   |
|                                   | should be identical. Especially   |
|                                   | useful in searching or databases  |
|                                   | working with sound files.         |
+-----------------------------------+-----------------------------------+

::: sideImagePreview
``` {data-lang="sql"}
-- Oh no, something went wrong when updating our database, so now all users have the word FLUFFY randomly placed in their name! We want to remove it. UPDATE users SET username = REPLACE(username, "FLUFFY", "");
```

<div>

  --------------------------
  username
  FLUFFYJuan el Dragono
  Panda el FLUFFYPettisano
  Ginty el BonoFLUFFY
  --------------------------

  --------------------
  username
  Juan el Dragono
  Panda el Pettisano
  Ginty el Bono
  --------------------

</div>
:::

" slug: "sql-functions" cat: "Website" subcat: "SQL" video: "" diff: 3 quiz: "" - id: 470 title: "\[SQL\] Subqueries" post: "

I've mentioned subqueries quite a few times in this course, but I needed to explain other SQL concepts first, before subqueries would make sense to you. You might have already, from their name, made up some ideas about what they do, and you're probably right.

\> Subqueries are queries within queries

Woah! Within a query, we can use the results of another query\-\--a so-called **subquery**. The best thing is that this subquery doesn't require any alternative syntax, and you can nest them as deep as you like. If you wanted, you could place a subquery, within a subquery, within the main query.

![](media/SQLSubqueries.png)

*When would I use subqueries?* Typically, a subquery is used to get a single result from another table, so that we can use that in our main query.

For example, we might have a table *blog_posts* and another table
*comments*. If we wanted to find all blog posts that received a higher than average amount of comments this month, we would need to do two things: calculate the average amount of comments this month from the
*comments* table, and use that value to find all *blog_posts* with the amount of comments higher than that value. For the first step, we would need a subquery!

Subqueries, however, are more powerful than that, and can also be used to return a list of results\-\--a **data set**. We saw in the
*Operators* chapter that some operators (such as `IN`) require a data set instead of a specific value. Well, you can use a subquery for that too!

## The Syntax

As I said earlier, subqueries use the exact same syntax as regular queries. However, we *do* need a way to tell SQL when our subquery ends and our main query continues. Because, if we don't, how does SQL know if a certain keyword belongs to the subquery or the main query?

Subqueries must, therefore, *always* be enclosed within **parentheses**. So, for example, the syntax of a simply subquery conditional is:

`SELECT __ FROM __ WHERE some_val > (subquery)`{.longsyntax}

::: sideImagePreview
``` {data-lang="sql"}
-- For our movie night, we want to select all movies with a higher than average rating SELECT title, rating FROM movies WHERE rating > (SELECT AVG(rating) FROM movies)

-- Essentially, with the current table, this reads WHERE rating > 3.65
```

<div>

  -------------------- --------
  title                rating
  Inception            4.8
  Her                  2.4
  Harry Potter (all)   4.4
  Bridge of Spies      4.2
  Fantastic Four       3.3
  Mean Girls           2.8
  -------------------- --------

</div>
:::

## Rules for Subqueries

Subqueries are very flexible and can be just as complex as the main query, but there are some rules you must follow. More specifically, those rules must be followed if you don't want your whole program to break.

-   A subquery can only have, at most, the same amount of columns as the
    main query. This means that if you, for example, selected three
    columns in the main query, you can't select ten columns from
    another table with a subquery.
-   The `ORDER BY` keyword cannot be used in subqueries, simply because
    the order of the results does not matter.
-   Subqueries that return a single result can only be used with
    operators that expect a single value. Subqueries that return
    multiple results can only be used with operators that expect
    multiple values. For example, I can't compare a list of rows with a
    single number 5.
-   Subqueries can't be too big, or the query will explode. This means
    that your subquery is not allowed to work with the largest data
    types your system has. (For example, for MySQL this means BLOB, or
    *Binary Large Object*.)

## Types of Subqueries

We typically distinguish two types of subqueries: *correlated* and
*non-correlated*.

A **correlated** subquery contains values that depend on the main query. This means that the result of the subquery depends on which row is being evaluated in the main query.

A **non-correlated** subquery does *not* depend on values from the main query. It executes independently, and returns the same set of results for all entries.

As you can see, there's no difference in the syntax, it's just a difference in terminology and usage that I wanted to point out. When writing a subquery, simply know whether it should be correlated or not. Because, if the subquery depends on the main query, if one of them has a mistake or gives an error, the whole query blows up.

::: sideImagePreview
``` {data-lang="sql"}
-- The previous example was a non-correlated subquery. This one is correlated. It selects all users with more points than the average number of points, *depending* on their level.

SELECT * FROM users AS u
    WHERE points >= 
        (SELECT AVG(points) 
         FROM users 
         WHERE level = u.level)
```

<div>

  ------------- -------- -------
  username      points   level
  Juan          15       2
  Panda         10       2
  Ginty         25       2
  Gandalf       35       2
  Walt Disney   0        1
  ------------- -------- -------

</div>
:::

## Examples for the Confused

Let me illustrate some more subquery magic, in case you're still not convinced of their importance, or it's still too abstract and complex for you.

::: sideImagePreview
``` {data-lang="sql"}
-- Some hackers thought it would be fun to point out the bad players in our game, so they changed the bad user's names into NOOB. UPDATE users SET username = 'NOOB' WHERE points <= (SELECT AVG(points) FROM users)
```

<div>

  ---------- -------- -------
  username   points   level
  NOOB       15       2
  NOOB       10       2
  Ginty      25       2
  Gandalf    35       2
  NOOB       0        1
  ---------- -------- -------

</div>
:::

I told you subqueries can be used for everything, and as you can see, that really means everything. You can use subqueries with all four CRUD operations, and instead of only using them with the `WHERE` keyword, you could also, for example, use them after the `SELECT` keyword.

" slug: "sql-subqueries" cat: "Website" subcat: "SQL" video: "" diff: 4 quiz: "" - id: 471 title: "\[SQL\] Security & Optimization" post: "

I already scattered pieces of optimization wisdom throughout the course, because I think it's useful to start getting into that optimization habit early on. I, however, left out one very important aspect:
**security**.

How do we make sure people don't hack into our databases? How do we make sure the passwords of millions of users are not stolen? Or that users don't "accidentally" change an SQL query to request information that's private? Lots of questions, lots of answers.

If you're the only one who's going to be accessing the database, you're fine as far as security goes\-\--well, as long as you don't give other people the link to the database and your password.

If you are one of multiple administrators of the database, you can use
*permissions* and set *user accounts* to control who can do what. (More on that in the advanced SQL course.)

However, if your users are going to be interacting with the database, you could be in a lot of trouble. And with interacting with the database, I mean that they could potentially modify any SQL query. For example, when a user logs into his or her account, the input he provides is used in the query\-\--thus modifying the query. Or, when a user requests a certain blog post, he is modifying a general query to select only that particular post from the database.

All of this is pretty harmless, but if a user has malicious intent, they could do something called **SQL injection**\-\--with devastating consequences!

## SQL Injection

Imagine you have a site with users. Every user account is an entry in your *users* table, and users can log in via a simple form. So, to be able to check whether a username and password are correct, you'd do something like:

`SELECT * FROM users WHERE username=inputName AND password=inputPass;`{.longsyntax}

This query works fine, *until* somebody with good SQL knowledge decides to play with it. Instead of typing his password, he types (in the username field): `"" OR 1=1 --`

Now, the query reads:

`SELECT * FROM users WHERE username="" OR 1=1;`{.longsyntax}

Oh no, the password check has been removed! To make it worse, the condition `1=1` is always true, so the query returns *all* entries. Outrageous! Now the hacker knows all the usernames and passwords, and maybe has even more sensitive information.

This is SQL injection at its finest. An evil user might inject SQL code in a place where normal input is expected, and in doing so hack your system (without actually doing anything illegal).

To protect against this, people tried sanitizing the inputs. Before sending the query, the website checks whether the input contains any words or characters that are not allowed. But, this has two problems:

-   It takes a lot of work, and there will always be some cases you
    didn't think of.
-   It heavily restricts the website's functionality. For example, to
    prevent against SQL injection commenting out parts of the query
    (with `--`), you could forbid hyphens. But, hyphens are quite
    essential to most (English) texts.

Therefore, the only way to *really* protect your database, is using
**pre-processed queries**.

## Pre-processed Queries

A *pre-processed query* is a query whose general form has been saved, and only needs a few variables to be filled in. These variables also have a fixed type, such as a number or string of length 5.

![](media/SQLPreparedStatements.png)

This way, all you need to do is replace the variables in the query with the user input, and send the query. If the user tries to give you illegal input, the query is simply not executed. Additionally, because the general form of the query is already determined beforehand, input can *never* mess with the SQL.

However, any web application that uses some kind of user interaction or input, also has to use a server-side language (such as the famous PHP). Pre-processing queries needs to be done with this server-side programming language, and can *not* be done with SQL only. Because I don't know what language you'll be using, I suggest you look up pre-processed queries in the documentation of your language to see how they work.

Nevertheless, to show you how they ought to work, I will give an example using the most popular server-side language (PHP):

::: sideImagePreview
``` {data-lang="php"}
//This prepares the statement; it declares what is fixed, and where our variables (?) are
$statement = $mysqli->prepare("SELECT * FROM users WHERE username = ? AND password = ?");

//This fills in ("binds") the variables
$statement->bind_param("ss", $inputName, $inputPass);

$inputName = "Juan";
$inputPass = "juaniscool";

//This actually executes the query
$statement->execute()
```

<div>

  ---------- --------------
  username   password
  Juan       juaniscool
  Panda      1234
  Ginty      fluffybuffly
  Gandalf    eagles
  Juan       dinikskan
  ---------- --------------

</div>
:::

## Database & Query Tuning

Last but not least, some last tips on tuning your queries and databases for optimal performance. Most of these will probably be familiar to you, except for the first. I will explain it in detail after the list.

-   Use 3NF database design.
-   Avoid type conversions, especially number-to-character (or vice
    versa).
-   Create *indexes* for extremely large tables, or tables you need to
    search through very often. If that's not the case, avoid indexes.
-   Avoid pattern matching/searching and wildcards as much as you can.
    They often match too many rows, and are too slow.
-   Avoid using the `OR`operator as much as you can. It slows down
    queries against any table of substantial size.
-   Name your constraints, instead of directly attaching them to a
    specific column. It makes it easier to drop or alter it if needed,
    and it's more descriptive.
-   Choose `JOIN`s over subqueries, and `WHERE` or `HAVING` clauses over
    `JOIN`s. When in doubt, simply test multiple versions of a query to
    see which one performs best.
-   You're only allowed to discard 3NF database design (and therefore
    avoid database normalization and indexes), when working with bulk
    loads of data that need not be searched often (or at all).

That odd acronym, **3NF**, stands for *third normal form*. As you expect, there's also a **1NF** (*first normal form*) and **2NF**
(*second normal form*), from which it has been derived. Their definition is as follows:

-   **1NF:** All the data depends on the (primary) key. This means that
    columns are allowed to have duplicate values, as long as the entries
    are not exactly the same (which is the case if they all have a
    unique primary key value).
-   **2NF:** First normal form, plus the fact that all data depends on
    the *whole* primary key. For example, if your primary key is made up
    of two columns, a change in any of the two columns should mean a
    change in the column value.
-   **3NF:** Second normal form, plus the fact that all data depends on
    *nothing but* the primary key. This means that columns with
    identical values are not allowed, if the information can be derived
    from other columns that are not the key. Instead, those fields
    should reference a primary key from another table.

So, essentially, you've finally learned the terminology and theory behind that database normalization I mentioned so often.

" slug: "sql-security-optimization" cat: "Website" subcat: "SQL" video: "" diff: 4 quiz: "" - id: 472 title: "\[SQL\] Conclusion: what now?" post: "

You've seen all the fundamental features of SQL, lots of advanced ones, and how to keep your databases fast and secure. Have you seen everything there is? No, certainly not. Is this already more than enough to get you going on your first projects? Yes, definitely.

I hope this course taught you what databases are, how insanely useful they are, and how you can create awesome things with them as well. Here and there I explained some advanced functionality, because I think you'll need it often, or because it helps understand some important concept of SQL. Nevertheless, I also created an ***Advanced SQL*** course to outline everything this course has ignored. It mainly provides lots of concepts that could dramatically improve your database system one day, but nothing a beginner would need.

I therefore recommend you first try a few projects of your own, before reading the advanced course. Once you have the basics down, the more complex parts start to make sense, and should be easy as pie.

Good luck with the rest of your database adventures!

" slug: "sql-conclusion-what-now" cat: "Website" subcat: "SQL" video: "" diff: 4 quiz: ""
