Journal
========
New project! This should be a small one, to match a previous little project I made in C++. This is to be a small website where you choose a number of buttons, and then that amount of buttons appear at random locations on the website. The goal is to click each button once, as quickly as possible.

2024-04-18
-----------
I've now created all the project files. Since this shall be a very small project, I won't need anything more than one .html, one .css, and one .js file. And a .gitignore for good measure (it's empty).

I've now added some code. Some explanational text, and a form. Took me a... while, to get it all centered the way I wanted. But it works now, the way I originally intended. So as I said, I've added a form. It accepts numbers, and is connected to some JS code that is to handle the submitted answer. The player is to be able to submit an answer of 1-10 (the amount of buttons to be generated), which shouldn't be too hard. I was a little surprised initially when I was able to input text in the form, but fortunately, `.value` doesn't seem to accept text - only numbers (since I've added `type="number"` to the `<input>` of the `<form>`). So that should make it a tad easier to deal with regarding dynamically enabling and disabling the button so that no invalid amount of buttons are requested. That would make things a tad more tedious, I think. Currently, not much happens when one edits the input of the form. A 'Hello World! [input.value]' message is logged to the console, but I'll get to fixing the rest tomorrow.

2024-04-19
-----------
I did indeed continue on fixing the rest tomorrow. So I added a class, some functions, and I don't really know what I'm doing. All of this is subject to change - generating buttons that won't overlap with each other's going to be a tad more tedious than I'd anticipated. I'll continue on it tomorrow and see if I can get something more extravagant going. Right now, I can generate one button (or well, several, but they're all in the same, overlapping spot) that logs `Hello, World!` and is disabled when clicked.

2024-04-20
-----------
Alrrrright. The game is on, and the website is up. Locally, anyway. So it all works now, as I originally intended (at least I think it does). You can select any number of buttons between 2-30, and then click 'Submit'. When you do, x amount of buttons are generated at random positions on the screen. I'll have to thank ChatGPT for helping me make sure they don't overlap each other or the instructions, hehe. And for adding a timer. Though it didn't work initially, since it just said 'Timer: NaN.NaN.NaN.NaN', but I got it working eventually. So anyway the timer starts when you click the first generated button, and stops when you click the final button. Each button is disabled (and turns red) when clicked. Also, the form and its button for submitting a number of buttons to generate are both disabled when you click 'Submit', and they are both reenabled when you click the final generated button.

I've now been testing the website (playing the game) for a bit, to see how fast I could do it. My current best time for clicking the maximum number of buttons, 30, is as follows: 00:00:00.443. Yes, that's .443 seconds (443 milliseconds). And no, I did not cheat by manipulating the time or any of the buttons. What I did do, however, is run a C++ program that I wrote the other day, which saves click locations and then clicks at those locations. So I saved the locations of the thirty buttons, and then let the C++ program do the rest. Did I cheat? Absolutely. Am I going to do it again? Absolutely. Am I going to pretend like I'm simply really really fast at moving the cursor at some point? Probably.