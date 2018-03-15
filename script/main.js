//Declare letibales to list all keys on the keyboard.
let keys = document.getElementsByClassName("key");
let selectBox = document.getElementsByTagName("select")[0];
let colorScheme = 'Default'
let keystrokes = [];
let text = document.getElementsByTagName('input')[0];
let clearButton = document.getElementsByTagName("button")[0];
let saveButton = document.getElementsByTagName("button")[1];
let hiddenSave = document.getElementsByClassName("hidden")[0];
let googleButton = document.getElementsByTagName("button")[2];
let hiddenGoogle = document.getElementsByClassName("hidden")[1];

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
document.addEventListener("click", function(event) {type(event.target);})
clearButton.addEventListener("click", function() {clear();})
saveButton.addEventListener("click", function() {save();})
googleButton.addEventListener("click", function() {google();})
selectBox.addEventListener("change", function(event) {changeColors();})

let timer;
document.addEventListener("mousedown", function(event){
     timer=setInterval(function(){
          type(event.target);
     }, 100); // the above code is executed every 100 ms
});
document.addEventListener("mouseup", function(){
    if (timer) clearInterval(timer)
});
let shift = false;
let capslock = false;

function save() {
	hiddenSave.href = "data:text/plain;charset=utf-8,";
	hiddenSave.href += encodeURIComponent(text.value);
	let filename = prompt("Type a name for your file");
	if (filename !== null) {
		hiddenSave.download = filename + ".txt";
		hiddenSave.click();
	}
}

function write(character) {
	pos = text.selectionStart;
	posend = text.selectionEnd;
	if (pos === posend) {
		text.value = text.value.slice(0,pos)+character+text.value.slice(pos);
	}
	else {
		text.value = text.value.slice(0,pos)+character+text.value.slice(posend);
	}
	text.selectionStart = pos+1;
	text.selectionEnd = pos+1;
}

function google() {
	let query = text.value.split(" ").join("+");
	if (query !== "" && query !== null) {
		hiddenGoogle.href = "https://www.google.com/search?q=" + query;
		hiddenGoogle.click();
	}
}

function clear() {
	text.value = "";
}

function backspace() {
	pos = text.selectionStart;
	posend = text.selectionEnd;
	if (pos === posend) {
		text.value = text.value.slice(0,pos-1)+text.value.slice(pos);
		text.selectionStart = pos-1;
		text.selectionEnd = pos-1;
	}
	else {
		text.value = text.value.slice(0,pos)+text.value.slice(posend);
		text.selectionStart = pos;
		text.selectionEnd = pos;
	}
}

function type(key) {
	if (!key.classList.contains("smallFont")) {
		if (key.classList.contains("key")) {
			let chars = key.children;
			if (chars.length < 2) {
				if (shift === true && capslock === false) {
					write(chars[0].innerText.toUpperCase());
				}
				else if (shift === true && capslock === true) {
					write(chars[0].innerText.toLowerCase());
				}
				else if (shift === false && capslock === true) {
					write(chars[0].innerText.toUpperCase());
				}
				else {
					write(chars[0].innerText.toLowerCase());
				}
			}
			else {
				if (shift === true) {
					write(chars[0].innerText);
				}
				else {
					write(chars[1].innerText);
				}
			}
		}
		else if (key.classList.contains("primary")) {
			type(key.parentElement);
		}
		else if (key.classList.contains("special")) {
			type(key.parentElement);
		}
		if (shift === true) {
			shift = false;
		}
	}
	else {
		if (key.children[0].textContent.includes("shift")) {
			shift = !shift;
		}
		if (key.children[0].textContent.includes("caps lock")) {
			capslock = !capslock;
		}
		if (key.children[0].textContent === "") {
			write(" ");
		}
		if (key.children[0].textContent.includes("return")) {
			write("\n\n");
		}
		if (key.children[0].textContent.includes("delete")) {
			backspace();
		}
		if (key.children[0].textContent.includes("tab")) {
			for (var i = 0; i < 4; i++) {
				write(" ");
			}
		}
	}
}

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