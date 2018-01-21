//Declare letibales to list all keys on the keyboard.
let keys = document.getElementsByClassName("key");
let selectBox = document.getElementsByTagName("select")[0];
let colorScheme = 'Default'
let keystrokes = [];

//Define an array to hold objects that map out keys to keycodes
let specialKeys = [
	{keyCode:192,keyName:"`"},
	{keyCode:9,keyName:"tab"},
	{keyCode:20,keyName:"caps lock"},
	{keyCode:16,keyName:"shift"},
	{keyCode:189,keyName:"-"},
	{keyCode:187,keyName:"="},
	{keyCode:219,keyName:"["},
	{keyCode:221,keyName:"]"},
	{keyCode:220,keyName:"\\"},
	{keyCode:186,keyName:";"},
	{keyCode:222,keyName:"'"},
	{keyCode:188,keyName:","},
	{keyCode:190,keyName:"."},
	{keyCode:191,keyName:"/"},
	{keyCode:8,keyName:"delete"},
	{keyCode:13,keyName:"return"},
	{keyCode:32,keyName:""}
];

//Set all the event listeners.
document.addEventListener("keydown", function(event) {press(getKeyPressed(event.keyCode));})
document.addEventListener("keyup", function(event) {depress(getKeyPressed(event.keyCode));})
selectBox.addEventListener("change", function(event) {changeColors();})

function getKeyPressed(keyCode) {
	let keyPressed;
	for (let i = 0; i < specialKeys.length; i++) {
		if (specialKeys[i].keyCode === keyCode) {
			keyPressed = specialKeys[i].keyName.toUpperCase();
			break;
		}
		else {
			keyPressed = String.fromCharCode(keyCode);
		}
	}
	return keyPressed;
}

function press(key) {
	for (let i = 0; i < keys.length; i++) {
		if (keys[i].getElementsByClassName("primary")[0].innerText === key) {
			if (keys[i].classList.contains(colorScheme.toLowerCase()+'2') === true) {
				keys[i].classList.add('pressed'+colorScheme+'2');
			}
			else if (keys[i].classList.contains(colorScheme.toLowerCase()+'3') === true) {
				keys[i].classList.add('pressed'+colorScheme+'3');
			}
			else {
				keys[i].classList.add('pressed'+colorScheme+'1');
			}
			break;
		}
	}
}

function depress(key) {
	for (let i = 0; i < keys.length; i++) {
		if (keys[i].getElementsByClassName("primary")[0].innerText === key) {
			if (keys[i].classList.contains(colorScheme.toLowerCase()+'2') === true) {
				keys[i].classList.remove('pressed'+colorScheme+'2');
			}
			else if (keys[i].classList.contains(colorScheme.toLowerCase()+'3') === true) {
				keys[i].classList.remove('pressed'+colorScheme+'3');
			}
			else {
				keys[i].classList.remove('pressed'+colorScheme+'1');
			}
			break;
		}
	}
}

function changeColors() {
	selectedColor = selectBox.options[selectBox.selectedIndex].value;
	for (let i = 0; i < keys.length; i++) {
		if (keys[i].classList.contains(colorScheme.toLowerCase()+'1')) {
			keys[i].classList.remove(colorScheme.toLowerCase()+'1');
			keys[i].classList.add(selectedColor.toLowerCase()+'1');
		}
		else if (keys[i].classList.contains(colorScheme.toLowerCase()+'2')) {
			keys[i].classList.remove(colorScheme.toLowerCase()+'2');
			keys[i].classList.add(selectedColor.toLowerCase()+'2');
		}
		else if (keys[i].classList.contains(colorScheme.toLowerCase()+'3')) {
			keys[i].classList.remove(colorScheme.toLowerCase()+'3');
			keys[i].classList.add(selectedColor.toLowerCase()+'3');
		}
		else {
			keys[i].classList.remove(colorScheme.toLowerCase()+'Case');
			keys[i].classList.add(selectedColor.toLowerCase()+'Case');
		}
	}
	document.getElementsByTagName("body")[0].classList.remove(colorScheme.toLowerCase());
	document.getElementsByTagName("body")[0].classList.add(selectedColor.toLowerCase());
	document.getElementsByClassName("keyboard-case")[0].classList.remove(colorScheme.toLowerCase()+'Case');
	document.getElementsByClassName("keyboard-case")[0].classList.add(selectedColor.toLowerCase()+'Case');
	colorScheme = selectedColor;
	selectBox.blur();
}

//initialize the default color scheme
changeColors();