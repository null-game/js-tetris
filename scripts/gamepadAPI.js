const makeCounter = function () {
	let privateCounter = 0;
	function changeBy(val) {
		privateCounter += val;
	}
	return {
		increment: function () {
			changeBy(1);
		},
		decrement: function () {
			changeBy(-1);
		},
		clear: function () {
			privateCounter = 0;
		},
		value: function () {
			return privateCounter;
		}
	}
};

const gamepadAPI = {
	active: false,
	waitTime: 300,
	repeatInterval: 30,
	connect: function (e) {
		gamepadAPI.active = true;
		for (let i = 0, len = e.gamepad.buttons.length; i < len; i++) {
			gamepadAPI.buttons.counter.push(makeCounter());
			gamepadAPI.buttons.eventname.pressed[i] = "pressed" + gamepadAPI.buttons.name[i];
			gamepadAPI.buttons.eventname.released[i] = "released" + gamepadAPI.buttons.name[i];
			gamepadAPI.buttons.eventname.repeat[i] = "repeat" + gamepadAPI.buttons.name[i];
			const pressed = new CustomEvent(gamepadAPI.buttons.eventname.pressed[i]);
			const repeat = new CustomEvent(gamepadAPI.buttons.eventname.repeat[i]);
			const released = new CustomEvent(gamepadAPI.buttons.eventname.released[i])
			gamepadAPI.buttons.pressed.push(pressed);
			gamepadAPI.buttons.repeat.push(repeat);
			gamepadAPI.buttons.released.push(released);
			gamepadAPI.buttons.dispatchRepeat.push(function (i) {
				gamepadAPI.buttons.timeout[i] = setTimeout(gamepadAPI.buttons.dispatchRepeat[i], gamepadAPI.repeatInterval, i);
				window.dispatchEvent(repeat);
			});
		}
		gamepadAPI.autoupdate();
	},
	disconnect: function (e) {
		gamepadAPI.active = false;
	},
	update: function () {
		for (const pad of navigator.getGamepads()) {
			if (pad) {
				for (let i = 0, len = pad.buttons.length; i < len; i++) {
					if (pad.buttons[i].pressed) {
						gamepadAPI.buttons.counter[i].increment();
						if (gamepadAPI.buttons.counter[i].value() === 1) {
							window.dispatchEvent(gamepadAPI.buttons.pressed[i]);
							gamepadAPI.buttons.timeout[i] = setTimeout(gamepadAPI.buttons.dispatchRepeat[i], gamepadAPI.waitTime, i);
						}
						// else if (gamepadAPI.buttons.counter[i].value() >= gamepadAPI.waitTime) {
						// 	// window.dispatchEvent(gamepadAPI.buttons.repeat[i]);
						// }
					} else {
						if (gamepadAPI.buttons.counter[i].value()) {
							gamepadAPI.buttons.counter[i].clear();
							clearTimeout(gamepadAPI.buttons.timeout[i]);
							window.dispatchEvent(gamepadAPI.buttons.released[i]);
						}
					}
				}
			}
		}
	},
	autoupdate: function () {
		requestAnimationFrame(gamepadAPI.autoupdate);
		gamepadAPI.update();
	},
	buttons: {
		name: ["A", "B", "X", "Y", "L1", "R1", "L2", "R2", "SELECT", "START", "L3", "R3", "UP", "DOWN", "LEFT", "RIGHT", "HOME"],
		eventname: {
			pressed: [],
			released: [],
			repeat: [],
		},
		counter: [],
		timeout: [],
		pressed: [],
		released: [],
		repeat: [],
		dispatchRepeat: [],
	},
	testAlladdEventListener: function () {
		for (const name of gamepadAPI.buttons.eventname.pressed) {
			window.addEventListener(name, () => {
				console.log(name);
			})
		}
		for (const name of gamepadAPI.buttons.eventname.repeat) {
			window.addEventListener(name, () => {
				console.log(name);
			})
		}
		for (const name of gamepadAPI.buttons.eventname.released) {
			window.addEventListener(name, () => {
				console.log(name);
			})
		}
	},
};

window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);