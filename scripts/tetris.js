"use strict";

const DEBUG = false;

const CUSTOM = false;
const CUSSTOM_INDEX = 0;
const CUSSTOM_FIELD = [
	[
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 6, 0, 0, 0, 0, 0, 0, 0, 0],
		[6, 6, 0, 0, 1, 1, 1, 1, 1, 1],
		[6, 0, 0, 0, 1, 1, 1, 1, 1, 1],
		[1, 0, 2, 2, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 2, 1, 1, 1, 1, 1, 1],
		[1, 0, 7, 2, 1, 1, 1, 1, 1, 1],
		[1, 0, 7, 7, 1, 1, 1, 1, 1, 1],
		[2, 0, 0, 7, 1, 1, 1, 1, 1, 1],
		[2, 0, 6, 6, 1, 1, 1, 1, 1, 1],
		[2, 2, 0, 6, 6, 1, 1, 1, 1, 1],
	],
	[
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	],
	[
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
		[1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
	],
];

//テトリミノの形
const MINO_TYPES = [
	[				// 0.ゴーストミノ
	],
	[				// 1.I
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	[				// 2.L
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0],
	],
	[				// 3.J
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0],
	],
	[				// 4.T
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0],
	],
	[				// 5.O
		[1, 1],
		[1, 1],
	],
	[				// 6.Z
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 0],
	],
	[				// 7.S
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0],
	],
];

const DENOMINATOR = 1;

const WIDTH = 1920 / DENOMINATOR;
const HEIGHT = 1080 / DENOMINATOR;

const FIELD_COL = 10;
const FIELD_ROW = 24;

// const BLOCK_SIZE = 40;

const BLOCK_SIZE = WIDTH / 48;

const START_Y = FIELD_ROW % (FIELD_ROW - 2);

//2～60
// let fps = 60;
const DROP_SPEED = 200;//fps * 0.8;

let field;
let mino;

let minoX;
let minoY;
let minoIndex;
let minoAngle;

let next;
let nexts;

let hold;
let holdFlag;
let holdIndex;

let initFlag;
let loop_timer;
let loop_counter;
let lock_down_counter;
let lock_down_time;
let drop_speed;
let animationFlag;
let pause;
let gameover;

let score;
let level;
let lines;
let ren;

let isSingle;
let isDouble;
let isTriple;
let isTETRIS;

let line_flag;

let Tspin;
let TspinMini;
let TspinFlag;
let TspinMiniFlag;

let isPerfect;
let isBack_to_Back;
let btb_counter;

let lineY = [];

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

const fcan = document.createElement("canvas");
const fctx = fcan.getContext("2d");
fcan.width = BLOCK_SIZE * FIELD_COL;
fcan.height = BLOCK_SIZE * FIELD_ROW;

// 0～テトリミノの種類数
let nextMaxNumber;
const ncan = [];
const nctx = [];
for (let num = 0; num < 7; num++) {
	ncan[num] = document.createElement("canvas");
	nctx[num] = ncan[num].getContext("2d");
	ncan[num].width = BLOCK_SIZE * 3;
	ncan[num].height = num == 0 ? BLOCK_SIZE * 3 : BLOCK_SIZE * 2;
}
const NEXT_BLOCK_SIZE = BLOCK_SIZE * 0.5;

const hcan = document.createElement("canvas");
const hctx = hcan.getContext("2d");
hcan.width = BLOCK_SIZE * 3;
hcan.height = BLOCK_SIZE * 3;
const HOLD_BLOCK_SIZE = BLOCK_SIZE * 0.7;

const vcan = document.createElement("canvas");
const vctx = vcan.getContext("2d");
vcan.width = WIDTH;
vcan.height = HEIGHT;
const ROW = BLOCK_SIZE * (FIELD_ROW - 20.3);
const offsetX = vcan.width / 2 - fcan.width / 2;
const offsetY = vcan.height / 2 - (fcan.height - ROW) / 2;
const nextOffsetX = offsetX + fcan.width + BLOCK_SIZE;
const holdOffsetX = offsetX - hcan.width - BLOCK_SIZE;
const MARGIN = {
	left: 0,
	top: 0,
}
let width;
let height;
const minoImg = new Image();
minoImg.src = "imgs/mino/minos01.png";
const bgImg = new Image();
// bgImg.src = "imgs/bg/space/1.jpg";
bgImg.src = "imgs/bg/k-on/2.jpg";

const SE = {
	move: new Audio("sounds/move.mp3"),
	rotate: new Audio("sounds/rotate.mp3"),
	hold: new Audio("sounds/hold.mp3"),
	fix: new Audio("sounds/fix.mp3"),
	line: new Audio("sounds/line.mp3"),
	pauseOn: new Audio("sounds/pause_on.mp3"),
	pauseOff: new Audio("sounds/pause_off.mp3"),
	tspin: new Audio("sounds/t-spin.mp3"),
}
SE.move.volume = 0.3;
SE.rotate.volume = 0.2;
SE.hold.volume = 0.2;
SE.fix.volume = 0.2;
SE.line.volume = 0.2;
SE.pauseOn.volume = 0.2;
SE.pauseOff.volume = 0.2;
SE.tspin.volume = 0.5;

window.onload = () => {
	document.body.appendChild(canvas);
	vctx.drawImage(bgImg, 0, 0, bgImg.width, bgImg.height, 0, 0, vcan.width, vcan.height);
	vctx.font = "bold " + (BLOCK_SIZE * 2) + "px 'ＭＳ　ゴシック'";
	let s = "クリック or Enter でスタート！";
	let w = vctx.measureText(s).width;
	let x = vcan.width / 2 - w / 2;
	let y = vcan.height / 2 + BLOCK_SIZE;

	setShadow(vcan);

	vctx.lineWidth = BLOCK_SIZE / 4;
	vctx.strokeStyle = "white";
	vctx.strokeText(s, x, y);

	clearShadow(vcan);

	vctx.fillStyle = "black";
	vctx.fillText(s, x, y);
	resize();
	window.addEventListener("resize", resize);
	window.addEventListener("pressedA", init);
	document.onclick = () => {
		init();
	}
	document.onkeydown = (e) => {
		if (e.key == "Enter") init();
	}
}

function resize() {
	MARGIN.left = 0;
	width = window.innerWidth;
	height = window.innerWidth / (vcan.width / vcan.height);
	MARGIN.top = (window.innerHeight - height) / 2;
	if (MARGIN.top <= 0) {
		MARGIN.top = 0;
		height = window.innerHeight;
		width = window.innerHeight / (vcan.height / vcan.width);
		MARGIN.left = (window.innerWidth - width) / 2;
	}
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	draw(canvas, vcan, MARGIN, width, height);
}

function draw(can, image, margin, width, height) {
	const con = can.getContext("2d");
	con.fillStyle = "black";
	con.fillRect(0, 0, can.width, can.height);
	con.drawImage(image, 0, 0, image.width, image.height, margin.left, margin.top, width, height);
}

function setShadow(can, x = 5, y = 5, color = "rgba(0,0,0,1)", blur = 6) {
	let con = can.getContext("2d");
	con.shadowOffsetX = x;
	con.shadowOffsetY = y;
	con.shadowColor = color;
	con.shadowBlur = blur;
}

function clearShadow(can) {
	let con = can.getContext("2d");
	con.shadowOffsetX = 0;
	con.shadowOffsetY = 0
	con.shadowColor = "rgba(0,0,0,0)";
	con.shadowBlur = 0;
}

function init() {
	vctx.drawImage(bgImg, 0, 0, bgImg.width, bgImg.height, 0, 0, vcan.width, vcan.height);
	clearTimeout(loop_timer);
	setGameController();
	initFlag = true;
	nextMaxNumber = 6;
	btb_counter = 0;
	loop_counter = 0;
	score = 0;
	level = 1;
	lines = level * 10 - 10;
	ren = 0;
	isSingle = false;
	isDouble = false;
	isTriple = false;
	isTETRIS = false;
	isPerfect = false;
	isBack_to_Back = false;
	line_flag = false;
	Tspin = false; TspinFlag = false;
	TspinMini = false; TspinMiniFlag = false;
	gameover = false;
	animationFlag = false;
	pause = false;
	holdFlag = true;
	hold = null;
	nextMaxNumber = nextMaxNumber < MINO_TYPES.length ? nextMaxNumber : MINO_TYPES.length - 1;
	// fps = fps < 2 ? 2 : fps > 60 ? 60 : fps;
	// fps = (fps >> 1) << 1;
	drop_speed = DROP_SPEED;
	// lock_down_time = fps / 2;
	field = [];
	if (!CUSTOM) {
		for (let y = 0; y < FIELD_ROW; y++) {
			field[y] = new Array(FIELD_COL).fill(0);
		}
	} else {
		for (let y = 0; y < FIELD_ROW; y++) {
			field[y] = [];
			for (let x = 0; x < FIELD_COL; x++) {
				field[y][x] = CUSSTOM_FIELD[CUSSTOM_INDEX][y][x];
			}
		}
	}
	nexts = [];
	nexts[0] = getNextArr();
	nexts[1] = getNextArr();
	next = nexts[0].pop(0);
	setMino();
	gameLoop();
	drawLoop();
}

function gameLoop() {
	// loop_timer = setTimeout(gameLoop, 1000 / fps);
	loop_timer = setTimeout(gameLoop, 0);
	if (gameover) {
		clearTimeout(loop_timer);
		return;
	}

	let speed_level = level * 10;
	if (!checkMove(0, 1)) {
		drop_speed = DROP_SPEED;
	} else if (level == 1) {
		drop_speed = DROP_SPEED;
	} else if (speed_level <= DROP_SPEED) {
		drop_speed = DROP_SPEED - speed_level;
	}
	else {
		drop_speed = 0;
	}

	loop_counter++;
	if (!drop_speed || lock_down_counter >= 15 || !(loop_counter % drop_speed)) {
		dropMino();
	}
	// drawGame();
}

function drawLoop() {
	requestAnimationFrame(drawLoop);
	drawGame();
}

function setMino() {
	mino = next;
	nexts[0].push(nexts[1].shift());
	next = nexts[0].shift();
	if (nexts[1].length === 0) {
		nexts[1] = getNextArr();
	}
	//位置を初期値にする
	if (mino.length == 3) {
		minoX = FIELD_COL / 2 - mino.length / 3 - 1;
	} else {
		minoX = FIELD_COL / 2 - mino.length / 2;
	}
	minoY = START_Y;
	minoIndex = MINO_TYPES.indexOf(mino);
	minoAngle = 0;
	TspinFlag = TspinMiniFlag = false;
	holdFlag = true;
	lock_down_counter = 0;
	if (!checkMove(0, 0)) {
		gameover = true;
	}
}

//ネクストミノの配列をランダムで返す
function getNextArr() {
	let arr = [];
	let nextArr = [];
	for (let i = 0; i < MINO_TYPES.length - 1; i++) {
		arr[i] = i + 1;
	}
	for (let j = 0, len = arr.length; j < MINO_TYPES.length - 1; j++, len--) {
		let rndNum = Math.floor(Math.random() * len);
		nextArr.push(MINO_TYPES[arr[rndNum]]);
		arr[rndNum] = arr[len - 1];
	}
	return nextArr;
}

function drawInfo() {
	let s;
	let w;
	let x;
	let y;
	let fontsize = BLOCK_SIZE * 1.25;
	// vctx.lineWidth = BLOCK_SIZE / 4;
	vctx.fillStyle = "white";

	if (DEBUG) {
		vctx.font = fontsize + "px impact";
		s = drop_speed - loop_counter;
		w = vctx.measureText(s).width;
		x = BLOCK_SIZE * 2 - w;
		y = BLOCK_SIZE * 2
		vctx.fillText(s, x, y);
	}

	setShadow(vcan);

	vctx.font = "bold " + fontsize + "px impact";
	s = score;
	w = vctx.measureText(s).width;
	x = offsetX + fcan.width * 1.03 - w;
	y = offsetY + (fcan.height - ROW) + BLOCK_SIZE * 1.5;
	vctx.fillText(s, x, y);

	s = "HOLD"
	w = vctx.measureText(s).width;
	x = holdOffsetX + hcan.width / 2 - w / 2;
	y = offsetY - BLOCK_SIZE / 2;
	vctx.fillText(s, x, y);
	s = "NEXT"
	w = vctx.measureText(s).width;
	x = nextOffsetX + ncan[0].width / 2 - w / 2;
	y = offsetY - BLOCK_SIZE / 2;
	vctx.fillText(s, x, y);

	vctx.font = "italic " + vctx.font;
	s = "LINES";
	w = vctx.measureText(s).width;
	x = offsetX - BLOCK_SIZE - w;
	y = offsetY + hcan.height + fontsize + BLOCK_SIZE * 1.5;
	vctx.fillText(s, x, y);
	s = lines;
	w = vctx.measureText(s).width;
	x = offsetX - BLOCK_SIZE - w;
	y += fontsize;
	vctx.fillText(s, x, y);

	s = "LEVEL";
	w = vctx.measureText(s).width;
	x = offsetX - BLOCK_SIZE - w;
	y += fontsize * 1.5;
	vctx.fillText(s, x, y);
	s = level;
	w = vctx.measureText(s).width;
	x = offsetX - BLOCK_SIZE - w;
	y += fontsize;
	vctx.fillText(s, x, y);

	s = "REN";
	w = vctx.measureText(s).width;
	x = offsetX - BLOCK_SIZE - w;
	y += fontsize * 1.5;
	vctx.fillText(s, x, y);
	s = ren;
	w = vctx.measureText(s).width;
	x = offsetX - BLOCK_SIZE - w;
	y += fontsize;
	vctx.fillText(s, x, y);

	vctx.fillStyle = "yellow";
	if (Tspin) {
		s = "T-Spin";
		w = vctx.measureText(s).width;
		x = offsetX - BLOCK_SIZE - w;
		y += fontsize * 1.5;
		vctx.fillText(s, x, y);
		if (isSingle) s = "Single";
		else if (isDouble) s = "Double";
		else if (isTriple) s = "Triple";
		if (s != "T-Spin") {
			w = vctx.measureText(s).width;
			x = offsetX - BLOCK_SIZE - w;
			y += fontsize;
			vctx.fillText(s, x, y);
		}
	}
	if (TspinMini) {
		s = "T-Spin Mini";
		w = vctx.measureText(s).width;
		x = offsetX - BLOCK_SIZE - w;
		y += fontsize * 1.5;
		vctx.fillText(s, x, y);
		if (isSingle) s = "Single";
		else if (isDouble) s = "Double";
		if (s != "T-Spin Mini") {
			w = vctx.measureText(s).width;
			x = offsetX - BLOCK_SIZE - w;
			y += fontsize;
			vctx.fillText(s, x, y);
		}
	}
	if (isBack_to_Back) {
		s = "BACK to BACK";
		w = vctx.measureText(s).width;
		x = offsetX - BLOCK_SIZE - w;
		y += fontsize * 1.5;
		vctx.fillText(s, x, y);
	}

	clearShadow(vcan);

	if (isTETRIS) {
		fctx.font = "bold " + (BLOCK_SIZE * 2) + "px impact";
		s = "TETRIS";
		w = fctx.measureText(s).width;
		x = fcan.width / 2 - w / 2;
		y = lineY[0] * BLOCK_SIZE + offsetY - BLOCK_SIZE / 2;
		fctx.fillStyle = "white";
		fctx.fillText(s, x, y);
	}
	if (isPerfect) {
		fctx.font = "bold " + (BLOCK_SIZE * 2) + "px impact";
		s = "PERFECT";
		w = fctx.measureText(s).width;
		x = fcan.width / 2 - w / 2;
		y = offsetY + BLOCK_SIZE * 8;
		fctx.fillStyle = "white";
		fctx.fillText(s, x, y);
		s = "CLEAR";
		w = fctx.measureText(s).width;
		x = fcan.width / 2 - w / 2;
		y += BLOCK_SIZE * 2
		fctx.fillStyle = "white";
		fctx.fillText(s, x, y);
	}
	vctx.drawImage(fcan, 0, ROW, fcan.width, fcan.height - ROW, offsetX, offsetY, fcan.width, fcan.height - ROW);

	if (pause) {
		vctx.font = "bold " + (vcan.width / 20) + "px 'ＭＳ　ゴシック'";
		s = "PAUSE";
		w = vctx.measureText(s).width;
		x = vcan.width / 2 - w / 2;
		y = vcan.height / 2 + BLOCK_SIZE;
		vctx.lineWidth = BLOCK_SIZE / 8;
		vctx.strokeStyle = "red";
		vctx.strokeText(s, x, y);
		vctx.fillStyle = "white";
		vctx.fillText(s, x, y);
	}
	if (gameover) {
		vctx.font = "bold " + (vcan.width / 35) + "px 'ＭＳ　ゴシック'";
		s = "GAME OVER";
		w = vctx.measureText(s).width;
		x = vcan.width / 2 - w / 2;
		y = vcan.height / 2 + BLOCK_SIZE;
		vctx.lineWidth = BLOCK_SIZE / 8;
		vctx.strokeStyle = "white";
		vctx.strokeText(s, x, y);
		vctx.fillStyle = "red";
		vctx.fillText(s, x, y);
	}
}

function drawFrame(can, rgba, col, row) {
	const con = can.getContext("2d");
	con.fillStyle = "rgba(" + rgba + ")";
	con.fillRect(0, 0, can.width, can.height);

	if (col) {
		con.lineWidth = BLOCK_SIZE / 40;
		con.strokeStyle = "rgba(255, 255, 255, 0.1)";
		for (let x = 1; x < col; x++) {
			con.beginPath();
			con.moveTo(BLOCK_SIZE * x, 0);
			con.lineTo(BLOCK_SIZE * x, can.height);
			con.closePath();
			con.stroke();
		}
		for (let y = 1; y < row; y++) {
			con.beginPath();
			con.moveTo(0, BLOCK_SIZE * y);
			con.lineTo(can.width, BLOCK_SIZE * y);
			con.closePath();
			con.stroke();
		}
	}
}

function drawFrameOutline(dx, dy, width, height, outlineWidth = 1) {
	vctx.strokeStyle = "#fff";
	vctx.lineWidth = outlineWidth;
	vctx.strokeRect(dx - vctx.lineWidth / 2, dy - vctx.lineWidth / 2, width + vctx.lineWidth, height + vctx.lineWidth);
}

function drawBlock(can, x, y, index, alpha = 1, size, flag = false) {
	let dx = 0;
	let dy = 0;
	if (size == undefined) {
		size = BLOCK_SIZE;
	} else {
		let cntY1 = 0;
		let cntY2 = 0;
		for (let y = 0; y < MINO_TYPES[index].length; y++) {
			let flag = MINO_TYPES[index][y].some((val, idx, obj) => {
				return val != 0;
			});
			if (flag)
				break;
			else cntY1++;
		}
		for (let y = MINO_TYPES[index].length - 1; y >= 0; y--) {
			let flag = MINO_TYPES[index][y].some((val, idx, obj) => {
				return val != 0;
			});
			if (flag)
				break;
			else cntY2++;
		}
		let nx = size * MINO_TYPES[index].length;
		let ny = size * (MINO_TYPES[index][0].length - (cntY1 + cntY2));
		if (ny == size) ny = size * (cntY2 + 1);
		dx = can.width / 2 - nx / 2;
		dy = can.height / 2 - ny / 2;
	}
	const con = can.getContext("2d");
	con.globalAlpha = alpha;
	if (flag) {
		setShadow(can);
	}
	let px = x * size + dx;
	let py = y * size + dy;
	if (index == 999) {
		con.fillStyle = "rgba(255,255,0,0.5)";
		con.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
		return;
	}
	con.drawImage(minoImg, index * minoImg.height - minoImg.height, 0, minoImg.height, minoImg.height, px, py, size, size);

	clearShadow(can);
}

function drawField() {
	fctx.drawImage(vcan, offsetX, offsetY, fcan.width, fcan.height - ROW, 0, ROW, fcan.width, fcan.height - ROW);
	drawFrame(fcan, "0, 0, 0, 0.7", FIELD_COL, FIELD_ROW);
	drawFrameOutline(offsetX, offsetY, fcan.width, fcan.height - ROW, BLOCK_SIZE / 6.66666667);
	if (!pause) {
		for (let y = 0; y < FIELD_ROW; y++) {
			for (let x = 0; x < FIELD_COL; x++) {
				if (field[y][x]) {
					drawBlock(fcan, x, y, field[y][x]);
				}
			}
		}
	}
}

function drawMino() {
	if (gameover || pause || mino == null) return;
	let plus = 0;
	while (checkMove(0, plus + 1)) plus++;
	for (let y = 0; y < mino.length; y++) {
		for (let x = 0; x < mino.length; x++) {
			if (mino[y][x]) {
				drawBlock(fcan, minoX + x, minoY + y + plus, minoIndex, 0.3);
				drawBlock(fcan, minoX + x, minoY + y, minoIndex);
			}
		}
	}
}

function drawNext() {
	for (let i = 0; i < nextMaxNumber; i++) {
		if (i == 0) {
			nctx[i].drawImage(vcan, nextOffsetX, offsetY, ncan[i].width, ncan[i].height, 0, 0, ncan[i].width, ncan[i].height);
			drawFrame(ncan[i], "0, 0, 0, 0.5");
			if (!pause && !gameover) {
				for (let y = 0; y < next.length; y++) {
					for (let x = 0; x < next.length; x++) {
						if (next[y][x]) {
							drawBlock(ncan[i], x, y, MINO_TYPES.indexOf(next), 1, HOLD_BLOCK_SIZE, true);
						}
					}
				}
			}
			drawFrameOutline(nextOffsetX, offsetY, ncan[i].width, ncan[i].height, 4);
			vctx.drawImage(ncan[i], 0, 0, ncan[i].width, ncan[i].height, nextOffsetX, offsetY, ncan[i].width, ncan[i].height);
		} else {
			nctx[i].drawImage(vcan, nextOffsetX, offsetY * (i + 1) + BLOCK_SIZE, ncan[i].width, ncan[i].height, 0, 0, ncan[i].width, ncan[i].height);
			drawFrame(ncan[i], "0, 0, 0, 0.5");
			if (!pause && !gameover) {
				for (let y = 0; y < nexts[0][i - 1].length; y++) {
					for (let x = 0; x < nexts[0][i - 1].length; x++) {
						if (nexts[0][i - 1][y][x]) {
							drawBlock(ncan[i], x, y, MINO_TYPES.indexOf(nexts[0][i - 1]), 1, NEXT_BLOCK_SIZE, true);
						}
					}
				}
			}
			drawFrameOutline(nextOffsetX, offsetY * (i + 1) + BLOCK_SIZE, ncan[i].width, ncan[i].height, 2);
			vctx.drawImage(ncan[i], 0, 0, ncan[i].width, ncan[i].height, nextOffsetX, offsetY * (i + 1) + BLOCK_SIZE, ncan[i].width, ncan[i].height);
		}
	}
}

function drawHold() {
	drawFrameOutline(holdOffsetX, offsetY, hcan.width, hcan.height, 4);
	hctx.drawImage(vcan, holdOffsetX, offsetY, hcan.width, hcan.height, 0, 0, hcan.width, hcan.height);
	drawFrame(hcan, "0, 0, 0, 0.5");
	if (!pause && !gameover) {
		if (hold) {
			for (let y = 0; y < hold.length; y++) {
				for (let x = 0; x < hold.length; x++) {
					if (hold[y][x]) {
						drawBlock(hcan, x, y, holdIndex, 1, HOLD_BLOCK_SIZE, true);
					}
				}
			}
		}
	}
	vctx.drawImage(hcan, 0, 0, hcan.width, hcan.height, holdOffsetX, offsetY, hcan.width, hcan.height);
}

function drawGame() {
	vctx.drawImage(bgImg, 0, 0, bgImg.width, bgImg.height, 0, 0, vcan.width, vcan.height);
	drawField();
	drawMino();
	drawNext();
	drawHold();
	drawInfo();
	draw(canvas, vcan, MARGIN, width, height);
}

function checkMove(dx, dy, dummy) {
	if (dummy == undefined) dummy = mino;
	for (let y = 0; y < dummy.length; y++) {
		for (let x = 0; x < dummy[y].length; x++) {
			if (dummy[y][x]) {
				let nx = minoX + dx + x;
				let ny = minoY + dy + y;
				if (nx < 0 ||
					ny >= FIELD_ROW ||
					nx >= FIELD_COL ||
					field[ny][nx]) {
					return false;
				}
			}
		}
	}
	return true;
}

function checkLine() {
	lineY = [];
	line_flag = true;
	for (let y = 0; y < FIELD_ROW; y++) {
		let flag = true;
		for (let x = 0; x < FIELD_COL; x++) {
			if (!field[y][x]) {
				flag = false;
				break;
			}
		}
		if (flag) {
			lineY.push(y);
			lines++;
		}
	}

	if (lineY.length) {
		ren++;
		switch (lineY.length) {
			case 1:
				isSingle = true;
				if (TspinFlag || TspinMiniFlag) btb_counter++;
				else btb_counter = 0;
				break;
			case 2:
				isDouble = true;
				if (TspinFlag || TspinMiniFlag) btb_counter++;
				else btb_counter = 0;
				break;
			case 3:
				isTriple = true;
				if (TspinFlag || TspinMiniFlag) btb_counter++;
				else btb_counter = 0;
				break;
			case 4:
				isTETRIS = true;
				btb_counter++;
				break;
		}
		isPerfect = true;
		outerLoop:
		for (let y = 0; y < FIELD_ROW; y++) {
			for (let ly of lineY) { if (y == ly) continue outerLoop; }
			for (let x = 0; x < FIELD_COL; x++) {
				if (field[y][x]) {
					isPerfect = false;
					break;
				}
			}
		}

		if (btb_counter >= 2) isBack_to_Back = true;
		else isBack_to_Back = false;

		let point = lineY.length * lineY.length * level * ren * 100;
		if (isPerfect) {
			point *= 10;
		}
		if (isBack_to_Back) {
			point *= 6;
		}
		if (TspinFlag) {
			score += point * 8;
			Tspin = true;
		} else if (TspinMiniFlag) {
			score += point * 4;
			TspinMini = true;
		} else {
			score += point;
		}
		level = Math.floor(lines / 10 + 1);
		setTimeout(() => {
			Tspin = TspinFlag;
			TspinMini = TspinMiniFlag;
			isSingle = false;
			isDouble = false;
			isTriple = false;
			isBack_to_Back = false;
		}, 1000);
		TspinFlag = TspinMiniFlag = false;
		deleteLine();
	} else {
		if (TspinMiniFlag) {
			TspinMini = true;
			setTimeout(() => {
				TspinMini = TspinMiniFlag;
				isSingle = false;
				isDouble = false;
			}, 1000);
		}
		TspinMiniFlag = false;
		line_flag = false;
		ren = 0;
		setMino();
	}
}

function deleteLine() {
	animationFlag = true;
	clearTimeout(loop_timer);
	SE.line.currentTime = 0;
	SE.line.play();
	for (let y of lineY) {
		for (let x = 0; x < FIELD_COL; x++) {
			field[y][x] = 999;
		}
	}
	drawGame();
	let interval = isTETRIS || isPerfect ? 800 : 500;
	setTimeout(() => {
		for (let y of lineY) {
			for (let ny = y; ny > 0; ny--) {
				for (let nx = 0; nx < FIELD_COL; nx++) {
					field[ny][nx] = field[ny - 1][nx];
				}
			}
		}
		setMino();
		isTETRIS = false;
		isPerfect = false;
		animationFlag = false;
		gameLoop();
	}, interval);
}

function fixMino() {
	gameover = true;
	for (let y = 0; y < mino.length; y++) {
		for (let x = 0; x < mino.length; x++) {
			if (mino[y][x]) {
				field[minoY + y][minoX + x] = minoIndex;
				if (FIELD_ROW - 20 <= minoY + y) gameover = false;
			}
		}
	}
	if (TspinFlag) {
		score += level * 500;
	}
	if (TspinMiniFlag) {
		score += level * 100;
	}
	mino = null;
	SE.fix.currentTime = 0;
	SE.fix.play();
}

function rotate(dir) {
	if (gameover || pause || animationFlag) return;
	let dummy = [];
	for (let y = 0; y < mino.length; y++) {
		dummy[y] = [];
		for (let x = 0; x < mino.length; x++) {
			if (dir == "Left") {//左回転　反時計回り
				dummy[y][x] = mino[x][mino.length - y - 1];
			} else if (dir == "Right") {//右回転　時計回り
				dummy[y][x] = mino[mino.length - x - 1][y];
			}
		}
	}
	srs(dummy, dir);
}

function srs(dummy, dir) {
	let dx;
	let dy;
	if (minoIndex != 1) {
		switch (minoAngle) {
			case 0:
				if (dir == "Left") {
					dx = [0, 1, 1, 0, 1];
					dy = [0, 0, -1, 2, 2];
				} else if (dir == "Right") {
					dx = [0, -1, -1, 0, -1];
					dy = [0, 0, -1, 2, 2];
				}
				break;
			case 90:
				if (dir == "Left") {
					dx = [0, 1, 1, 0, 1];
					dy = [0, 0, 1, -2, -2];
				} else if (dir == "Right") {
					dx = [0, 1, 1, 0, 1];
					dy = [0, 0, 1, -2, -2];
				}
				break;
			case 180:
				if (dir == "Left") {
					dx = [0, -1, -1, 0, -1];
					dy = [0, 0, -1, 2, 2];
				} else if (dir == "Right") {
					dx = [0, 1, 1, 0, 1];
					dy = [0, 0, -1, 2, 2];
				}
				break;
			case 270:
				if (dir == "Left") {
					dx = [0, -1, -1, 0, -1];
					dy = [0, 0, 1, -2, -2];
				} else if (dir == "Right") {
					dx = [0, -1, -1, 0, -1];
					dy = [0, 0, 1, -2, -2];
				}
				break;
		}
	} else {
		switch (minoAngle) {
			case 0:
				if (dir == "Left") {
					dx = [0, -1, 2, -1, 2];
					dy = [0, 0, 0, -2, 1];
				} else if (dir == "Right") {
					dx = [0, -2, 1, -2, 1];
					dy = [0, 0, 0, 1, -2];
				}
				break;
			case 90:
				if (dir == "Left") {
					dx = [0, 2, -1, 2, -1];
					dy = [0, 0, 0, -1, 2];
				} else if (dir == "Right") {
					dx = [0, -1, 2, -1, 2];
					dy = [0, 0, 0, -2, 1];
				}
				break;
			case 180:
				if (dir == "Left") {
					dx = [0, 1, -2, 1, -2];
					dy = [0, 0, 0, 2, -1];
				} else if (dir == "Right") {
					dx = [0, 2, -1, 2, -1];
					dy = [0, 0, 0, -1, 2];
				}
				break;
			case 270:
				if (dir == "Left") {
					dx = [0, 1, -2, -2, 1];
					dy = [0, 0, 0, 1, -2];
				} else if (dir == "Right") {
					dx = [0, -2, 1, 1, -2];
					dy = [0, 0, 0, 2, -1];
				}
				break;
		}
	}
	for (let i = 0; i < dx.length; i++) {
		if (checkMove(dx[i], dy[i], dummy)) {
			minoX += dx[i];
			minoY += dy[i];
			mino = dummy;
			if (dir == "Left") {
				if (minoAngle == 0) minoAngle = 270;
				else minoAngle -= 90;
			} else if (dir == "Right") {
				if (minoAngle == 270) minoAngle = 0;
				else minoAngle += 90;
			}
			if (minoIndex == 4) {
				checkTspin(i != 4);
			}

			if (!checkMove(0, 1)) {
				lock_down_counter++;
				loop_counter = 0;
				// drop_speed = lock_down_time;
			} else {
				drop_speed = DROP_SPEED;
			}
			SE.rotate.currentTime = 0.08;
			SE.rotate.play();
			break;
		}
	}
}

function checkTspin(miniFlag) {
	let counter = 0;
	let flag = false;
	for (let y = 0; y < mino.length; y++) {
		for (let x = 0; x < mino[y].length; x++) {
			if (x == 0 && y == 0 || x == 2 && y == 0 || x == 0 && y == 2 || x == 2 && y == 2) {
				if (minoX + x < 0 || minoY + y >= FIELD_ROW || minoX + x >= FIELD_COL || field[minoY + y][minoX + x]) {
					counter++;
				}
			}
			if (miniFlag) {
				switch (minoAngle) {
					case 0:
						if (x == 0 && y == 0 || x == 2 && y == 0) {
							if (!field[minoY + y][minoX + x]) {
								flag = true;
							}
						}
						break;
					case 90:
						if (x == 2 && y == 0 || x == 2 && y == 2) {
							if (!field[minoY + y][minoX + x]) {
								flag = true;
							}
						}
						break;
					case 180:
						if (x == 2 && y == 2 || x == 0 && y == 2) {
							if (!field[minoY + y][minoX + x]) {
								flag = true;
							}
						}
						break;
					case 270:
						if (x == 0 && y == 2 || x == 0 && y == 0) {
							if (!field[minoY + y][minoX + x]) {
								flag = true;
							}
						}
						break;
				}
			}
		}
	}
	if (counter >= 3) {
		if (flag) TspinMiniFlag = true;
		else TspinFlag = true;
		SE.tspin.currentTime = 0.12;
		SE.tspin.play();
	}
}

function holdMino() {
	if (gameover || pause || animationFlag) return;
	if (hold == undefined) {
		SE.hold.currentTime = 0;
		SE.hold.play();
		holdIndex = minoIndex;
		hold = MINO_TYPES[minoIndex];
		loop_counter = 0;
		setMino();
	} else if (holdFlag) {
		SE.hold.currentTime = 0;
		SE.hold.play();
		let dummy = hold;
		holdIndex = minoIndex;
		hold = MINO_TYPES[minoIndex];
		mino = dummy;
		minoIndex = MINO_TYPES.indexOf(mino);
		if (mino.length % 3 == 0) minoX = FIELD_COL / 2 - mino.length / 3;
		else minoX = FIELD_COL / 2 - mino.length / 2;
		minoY = START_Y;
		minoAngle = 0;
		TspinFlag = TspinMiniFlag = false;
		loop_counter = 0;
		lock_down_counter = 0;
	}
	holdFlag = false;
}

function dropMino() {
	if (checkMove(0, 1)) {
		minoY++;
		TspinFlag = TspinMiniFlag = false;
		// drop_speed = checkMove(0, 1) ? DROP_SPEED : lock_down_time;
	} else {
		fixMino();
		checkLine();
	}
	loop_counter = 0;
}

function moveLeft() {
	if (gameover || pause || animationFlag) return;
	if (checkMove(-1, 0)) {
		if (!checkMove(0, 1)) {
			lock_down_counter++;
			loop_counter = 0;
		}
		minoX--;
		TspinFlag = TspinMiniFlag = false;
		SE.move.currentTime = 0;
		SE.move.play();
		drawGame();
	}
}

function moveRight() {
	if (gameover || pause || animationFlag) return;
	if (checkMove(1, 0)) {
		if (!checkMove(0, 1)) {
			lock_down_counter++;
			loop_counter = 0;
		}
		minoX++;
		TspinFlag = TspinMiniFlag = false;
		SE.move.currentTime = 0;
		SE.move.play();
		drawGame();
	}
}

function moveDown() {
	if (gameover || pause || animationFlag) return;
	if (checkMove(0, 1)) {
		minoY++;
		TspinFlag = TspinMiniFlag = false;
		// drop_speed = checkMove(0, 1) ? DROP_SPEED : lock_down_time;
		loop_counter = 0;
		SE.move.currentTime = 0;
		SE.move.play();
		drawGame();
	}
}

function hardDrop() {
	if (gameover || pause || animationFlag) return;
	if (checkMove(0, 1)) TspinFlag = TspinMiniFlag = false;
	while (checkMove(0, 1)) minoY++;
	loop_counter = 0;
	fixMino();
	checkLine();
	drawGame();
}

// function pauseLoop() {
// 	loop_timer = setTimeout(pauseLoop, 1000 / fps);
// 	if (gamepadAPI.active) {
// 		gamepadAPI.update();
// 	}
// }

function pauseGame() {
	if (gameover || animationFlag) return;
	if (!pause) {
		clearTimeout(loop_timer);
		SE.pauseOn.currentTime = 0;
		SE.pauseOn.play();
		pause = true;
		drawGame();
	} else {
		SE.pauseOff.currentTime = 0;
		SE.pauseOff.play();
		pause = false;
		gameLoop();
	}
}

let keyFlag = {
	Harddrop: false,
	Left: false,
	Right: false,
	Pause: false,
};

const initCounter = makeCounter();
const bgImgCounter = makeCounter();

function setGameController() {
	window.removeEventListener("pressedA", init);
	document.onclick = null;
	document.onkeydown = (e) => {
		if (!initFlag && e.key != "Escape") return;
		if (gameover && e.key != "Escape") return;
		if (pause && e.key != "Backspace") return;
		if (animationFlag) return;
		switch (e.key) {
			case "ArrowLeft":
			case "a":
				moveLeft();
				return;
			case "ArrowRight":
			case "d":
				moveRight();
				return;
			case "ArrowUp":
			case "w":
				if (keyFlag["Harddrop"]) return;
				keyFlag["Harddrop"] = true;
				hardDrop();
				break;
			case "ArrowDown":
			case "s":
				moveDown();
				return;
			case "q":
				if (keyFlag["Left"]) return;
				keyFlag["Left"] = true;
				rotate("Left");
				break;
			case "e":
				if (keyFlag["Right"]) return;
				keyFlag["Right"] = true;
				rotate("Right");
				break;
			case "Enter":
				holdMino();
				break;
			case "Backspace":
				if (keyFlag["Pause"]) return;
				keyFlag["Pause"] = true;
				pauseGame();
				break;
			case "Escape":
				clearTimeout(loop_timer);
				init();
				break;
			case "-":
				if (0 < nextMaxNumber) nextMaxNumber--;
				break;
			case "+":
				if (nextMaxNumber < ncan.length) nextMaxNumber++;
				break;
		}
		drawGame();
	}

	document.onkeyup = () => {
		keyFlag["Harddrop"] = false;
		keyFlag["Left"] = false;
		keyFlag["Right"] = false;
		keyFlag["Pause"] = false;
	}

	if (initCounter.value()) return;
	window.addEventListener("pressedLEFT", moveLeft);
	window.addEventListener("repeatLEFT", moveLeft);
	window.addEventListener("pressedRIGHT", moveRight);
	window.addEventListener("repeatRIGHT", moveRight);
	window.addEventListener("pressedDOWN", moveDown);
	window.addEventListener("repeatDOWN", moveDown);
	window.addEventListener("pressedUP", hardDrop);
	window.addEventListener("pressedA", () => { rotate("Right") });
	window.addEventListener("pressedB", () => { rotate("Left") });
	window.addEventListener("pressedY", () => { rotate("Right") });
	window.addEventListener("pressedX", () => { rotate("Left") });
	window.addEventListener("pressedL1", holdMino);
	window.addEventListener("pressedR1", holdMino);
	window.addEventListener("pressedL2", holdMino);
	window.addEventListener("pressedR2", holdMino);
	window.addEventListener("pressedSTART", pauseGame);
	window.addEventListener("pressedSELECT", pauseGame);
	window.addEventListener("pressedL3", () => { clearTimeout(loop_timer); init(); });
	window.addEventListener("pressedR3", () => {
		bgImgCounter.increment();
		if (bgImgCounter.value() === 1) {
			bgImg.src = "imgs/bg/space/1.jpg";
		}
		if (bgImgCounter.value() === 2) {
			bgImgCounter.clear();
			bgImg.src = "imgs/bg/k-on/2.jpg";
		}
	})
	initCounter.increment();
}