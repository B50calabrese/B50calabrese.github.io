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
on their respective platforms. Once done and you run your program, you should see an X output to
the terminal you are in. Congratulations!!! You have taken your first steps towards being a
curses user, but what does this all mean. Okay, let's walk through the code one line at a time.

The first two lines in the file are include statements, used to actually include the code that
is the curses library. From there we jump straight into our main function. To actually use curses
the program needs to take control of output away from the terminal itself, and to do so we call
the function initscr. This function will take control and set up various parameters to help us
with our cause. After that is a pair of commands noecho and curs_set. Noecho is a function that
stops the input from the user being sent to standard out as well. The curs_set function sets the
visibility of the cursor depending on the parameter that is passed in, in this case we are setting
the visibility to FALSE thereby removing the cursor. Next we have the clear command which, as the
name implies, is to clear the display so that we have a blank slate to work with. To actually
start drawing things on the screen we use the move function to move the cursor to where we want
to display things, and then call addch with the character we want to display as a parameter to 
actually display it. Once we have prepared what we want to draw, we call refresh to update everything
at one time. The next function call, usleep, is very important simply because without it the 
program would terminate before you could ever see anything. Usleep is used to stop the program
for a certain amount of time, in this case 3 seconds. Finally, once we are done with our mischief
we want to return control back to the terminal and set everything back to do so by calling the
function endwin.

So now that we know the basics, let us make a simple game shall we! The idea for this game will
be very simple, a maze-like game where the user will try to navigate a simple ASCII maze. We
will start with a simple square like maze, which we know how to display now using the knowledge
from the previous example.

We will start out by drawing a simple maze, which the full source code can be found at the link
located at the bottom of this tutorial (TODO MAKE SURE TO ADD THIS LINK). We will use a 2D array
of characters to represent the maze. From there we can do similar to the previous example by
initializing the screen, turning off certain features, clearing the display and then displaying 
the maze. To display the maze, we can simply use a for loop within another for loop to move the
cursor to a new spot indicated by the counters in the for loop, and then adding the character
located in the 2D array at the given counter positions. Once we have added all of those characters
we can refresh the display, sleep for a determined amount of time, and then end the window to 
return back to normal. Once done my maze looks like so:

<div class="codeSnip">
	<img src="/images/techtalks/curses/simple_maze.png"
		alt="Simple Maze" />
</div>