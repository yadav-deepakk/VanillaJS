index=0;
const reviews = [
	{
		"imgSrc": "./img/avatar01.png",
		"name" : "Orlando King",
		"jobRole": "DATA SCIENTIST",
		"reviewText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisi eros, fringilla eget eleifend sit amet, finibus id diam. \
		Donec sed lacus nisl. Cras ac maximus velit. Nulla rutrum ex sed maximus cursus. Duis tellus diam, aliquam in placerat finibus, tincidunt ut \
		urna. Curabitur id vulputate libero. Suspendisse eu dui sem. Sed a congue odio, eget volutpat massa. Integer sit amet nisl accumsan, tempor \
		leo eget, rhoncus elit. Suspendisse a lacinia magna. Curabitur id sem elit." 
	},
	{
		"imgSrc": "./img/avatar02.png",
		"name" : " Alison Arnold",
		"jobRole": "SYSTEM ENGINEER",
		"reviewText": "Pellentesque pretium lectus elit, at bibendum augue fringilla id. Praesent pulvinar ut est quis tincidunt. Curabitur et \
		luctus magna, vel laoreet ipsum. Aenean nec aliquet enim. Phasellus in ligula lectus. Vivamus luctus ante nisi, eget fringilla sem lobortis \
		commodo. Cras condimentum libero vel lacinia imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	},
	{
		"imgSrc": "./img/avatar03.png",
		"name" : "Susan Smith",
		"jobRole": "WEB DEVELOPER",
		"reviewText": "Etiam imperdiet dui nibh, id vulputate magna scelerisque a. Nunc a leo nec sapien laoreet dapibus. Ut semper lorem orci, \
		eleifend malesuada metus tristique mattis. Sed in diam ac risus rhoncus tincidunt tincidunt vitae sem. Proin ac lorem ante. Etiam malesuada \
		tellus orci, id commodo orci ullamcorper non. Vestibulum consectetur id nisl ac tempus."
	},
	{
		"imgSrc": "./img/avatar04.png",
		"name" : "Meghan Hanson",
		"jobRole": "DB ADMIN",
		"reviewText": "Leo eget, rhoncus elit. Suspendisse a lacinia magna. Curabitur id sem elit aximus cursus. Duis tellus diam, finibus. \
		Donec sed lacus nisl. Cras ac maximus velit. Nulla rutrum ex sed maximus cursus. Duis tellus diam, aliquam in placerat finibus, tincidunt ut \
		urna. Curabitur id vulputate libero. Suspendisse eu dui sem. Sed a congue odio, eget volutpat massa. Integer sit amet nisl accumsan, tempor \
		leo eget, rhoncus elit. Suspendisse a lacinia magna. Curabitur id sem elit." 
	}
];

window.onLoad = onWindowLoad();


function onWindowLoad() {
	console.log("Window has been loaded...");
	setReview(index);
}

document.querySelector('.previous').addEventListener('click', () => {
	console.log("Previous button was clicked!!!");
	if(index == 0) index = reviews.length - 1;
	else index--;
	setReview(index);
});

document.querySelector('.next').addEventListener('click', () => {
	console.log("Next button was clicked!!!");
	if(index == reviews.length - 1) index = 0;
	else index++;
	setReview(index);
});

document.querySelector('.random').addEventListener('click', () => {
	console.log("Random button was clicked!!!");
	index = Math.floor( Math.random() * reviews.length );
	setReview(index);
});



function setReview(i){

	// console.log(i + " " + reviews[i]);

	document.querySelector(".card-header img").src = reviews[i]["imgSrc"];
	document.querySelector(".person-name").innerHTML = reviews[i]["name"];
	document.querySelector(".job-role").innerHTML = reviews[i]["jobRole"];
	document.querySelector(".review-text").innerHTML = reviews[i]["reviewText"];

}