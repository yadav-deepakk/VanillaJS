let increaseButton = document.querySelector("#incr-btn");
let resetButton = document.querySelector("#reset-btn");
let decreaseButton = document.querySelector("#decr-btn");
let count = 0;


increaseButton.addEventListener("click", function() {
	console.log("increase button was clicked!!!");
	updateCounter(++count);
});

resetButton.addEventListener("click", function() {
	console.log("reset button was clicked!!!");
	if(count != 0) updateCounter(count=0);
});

decreaseButton.addEventListener("click", function() {
	console.log("decrease button was clicked!!!");
	updateCounter(--count);
});


// handles value as well as color change 
function updateCounter(c){
	console.log(c);
	let count = document.querySelector("#count");
	count.innerHTML = c;
	count.style.color = c<0 ? "red" : c>0 ? "green": "#333";
}