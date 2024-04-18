Journal
========
New project! This should be a small one, to match a previous little project I made in C++. This is to be a small website where you choose a number of buttons, and then that amount of buttons appear at random locations on the website. The goal is to click each button once, as quickly as possible.

2024-04-18
-----------
I've now created all the project files. Since this shall be a very small project, I won't need anything more than one .html, one .css, and one .js file. And a .gitignore for good measure (it's empty).

I've now added some code. Some explanational text, and a form. Took me a... while, to get it all centered the way I wanted. But it works now, the way I originally intended. So as I said, I've added a form. It accepts numbers, and is connected to some JS code that is to handle the submitted answer. The player is to be able to submit an answer of 1-10 (the amount of buttons to be generated), which shouldn't be too hard. I was a little surprised initially when I was able to input text in the form, but fortunately, `.value` doesn't seem to accept text - only numbers (since I've added `type="number"` to the `<input>` of the `<form>`). So that should make it a tad easier to deal with regarding dynamically enabling and disabling the button so that no invalid amount of buttons are requested. That would make things a tad more tedious, I think. Currently, not much happens when one edits the input of the form. A 'Hello World! [input.value]' message is logged to the console, but I'll get to fixing the rest tomorrow.