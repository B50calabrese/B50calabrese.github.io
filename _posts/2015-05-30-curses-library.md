---
layout: post
title: "The Curses Library"
date: 2015-05-30
---

This talk revolves around the curses library, specifically the ncurses library. Ncurses, or
new curses, is a library that is used to make graphics user interfaces, or GUIs, using the
C language. The GUIs are text based, and though they might look ancient, can actually be
fairly complex and run on machines that might not have a way of displaying windows. 

A big question you are probably asking is why would I want to you use this? This library
seems difficult to use and not worth my time seeing as it doesn't supply me with the power
to create a beautiful GUI. In my opinion, it is always to look at how computing was done in
the past to gain an appreciation for the technologies now, and of course it looks really cool!
During this talk I will show you how to use the curses library and make a simple game with
it. From there you are free to use your knowledge to create a more complex game, like 
Dwarf Fortress or Rogue!

The first step to being a curses library ninja is to install the correct library files. To do
so on Linux you just need to execute the command:

sudo apt-get install libncurses5-dev

On other operating systems, such as Windows or Mac, I am unsure on how to do so, though there
are several tutorials online that will show you which files to install.

Once we have the headers installed, we can start by making a simple game. To do so you are going
to want to create a simple file like so:

<div class="codeSnip">
	<img src="/images/techtalks/curses/first_window_pic.png"
		alt="Basic Curses Output" />
</div>

Once you have that file created, we need to compile it. To do so we can run the command:

gcc file_name.c -lncurses -o output_file_name

Note that this will work on Linux, but Windows and Mac users should look into how they can do it
on their respective platforms. Once done, you should see an X output to the terminal you are in.
Congratulations!!! You have taken your first steps towards being a curses user, but what does
this all mean. Okay, let's walk through the code one line at a time.