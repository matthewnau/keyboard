# Keyboard
This on-screen-keyboard mirrors the keys that the user presses on their physical keyboard. I made this after being inspired by [u/zhengc](https://www.reddit.com/user/zhengc)'s keyboard made with Adobe Illustrator. The original post can be viewed [here](https://www.reddit.com/r/MechanicalKeyboards/comments/79ir7h/made_this_in_illustrator_today_thought_you_guys/).

To use the keyboard, simply begin pressing keys on your keyboard. You will see the keys become pressed in on the virtual keyboard. Keys can be held down, or pressed briefly. When the keyboard detects that you have pressed down on a key, it adds the `pressed` class to that specific key. Once your finger has lifted from the key, the `pressed` class is then removed.

<p align="center">
<img src="https://media.giphy.com/media/xT0xeIzRPRA8Y1dOJG/giphy.gif">
</p>

Keys can also be pressed by clicking on each one with a mouse. This achieves the same effect as pressing that key on the keyboard. When the mouse is hovered over a key on the virtual keyboard, a colored outline shows up on the edges of the key to let users know which key is about to be pressed.

<p align="center">
<img src="https://media.giphy.com/media/3o6fIS9ukDAoz8mv8A/giphy.gif">
</p>

In addition to key highlighting, this keyboard offers users the ability to change between the different color schemes included. To do this, simply click the `select` box located above the keyboard, and choose the option that best suits you. Each option represents the name of that specific color scheme.

<p align="center">
<img src="https://media.giphy.com/media/3ohs7KhjMnY4UdVvDa/giphy.gif">
</p>

---
## Customization

This keyboard can be customized very easily. To change the color of the main keys, simply edit the `.key` class in `main.css`. The `background-color` and `box-shadow` properties compose the colors associated with each key. To change the color of the blue and red keys, simply modify the same properties for the `.color2` and `.color3` classes.
