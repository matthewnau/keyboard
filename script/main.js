var keys = document.getElementsByClassName("key");
var specialKeys = [{keyCode:192,keyName:"`"},{keyCode:9,keyName:"tab"},{keyCode:20,keyName:"caps lock"},{keyCode:16,keyName:"shift"},{keyCode:189,keyName:"-"},{keyCode:187,keyName:"="},{keyCode:219,keyName:"["},{keyCode:221,keyName:"]"},{keyCode:220,keyName:"\\"},{keyCode:186,keyName:";"},{keyCode:222,keyName:"'"},{keyCode:188,keyName:","},{keyCode:190,keyName:"."},{keyCode:191,keyName:"/"},{keyCode:8,keyName:"delete"},{keyCode:13,keyName:"return"},{keyCode:32,keyName:""}];

function getKeyPressed(keyCode) {
	var keyPressed;
	for (var i = 0; i < specialKeys.length; i++) {
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
	for (var i = 0; i < keys.length; i++) {
		if (keys[i].getElementsByClassName("primary")[0].innerText === key) {
			if (keys[i].classList.contains('color2') === true) {
				keys[i].classList.add("pressed2");
			}
			else if (keys[i].classList.contains('color3') === true) {
				keys[i].classList.add("pressed3");
			}
			else {
				keys[i].classList.add("pressed");
			}
			break;
		}
	}
}

document.addEventListener("keydown", function(event) {press(getKeyPressed(event.keyCode));})
document.addEventListener("keyup", function(event) {depress(getKeyPressed(event.keyCode));})

function depress(key) {
	for (var i = 0; i < keys.length; i++) {
		if (keys[i].getElementsByClassName("primary")[0].innerText === key) {
			if (keys[i].classList.contains('color2') === true) {
				keys[i].classList.remove("pressed2");
			}
			else if (keys[i].classList.contains('color3') === true) {
				keys[i].classList.remove("pressed3");
			}
			else {
				keys[i].classList.remove("pressed");
			}
			break;
		}
	}
}