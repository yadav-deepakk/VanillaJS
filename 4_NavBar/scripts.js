// alert("Hello world!");

function makeActiveLink(domElement){
	console.log(domElement.classList);
	if(domElement.classList.contains("active")) return;
	else{
		let children = domElement.parentNode.children;
		console.log(children);
		for (var i=children.length -1; i>=0; i--) {
			if ( children[i].classList.contains("active") ){
				children[i].classList.remove("active");
			}
		}
		domElement.classList.add("active");
	}
}