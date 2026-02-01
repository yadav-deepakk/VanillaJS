let simple_colors = ["red", "green", "blue", "pink", "violet"];
let hex_digits = ['0', '1', "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];


function colorChangeSimple() {
	console.log("Simple button was clicked!");
	let color = simple_colors[Math.floor(Math.random() * simple_colors.length)];
	document.querySelector("body").style.backgroundColor = color;
	console.log("color picked: " + color);
	document.querySelector(".hex-code").innerHTML = color.toUpperCase();
}


function colorChangeHex() {
	console.log("Hex button was clicked!");
	color_code = "#";
	for (var i=0; i<6; i++) {
		index = Math.floor(Math.random() * hex_digits.length);
		color_code += hex_digits[index];
	}
	document.querySelector("body").style.backgroundColor = color_code;
	console.log("color code generated: " + color_code);
	document.querySelector(".hex-code").innerHTML = color_code;

}

