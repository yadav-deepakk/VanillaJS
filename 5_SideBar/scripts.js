document.querySelector(".close-side-bar").addEventListener("click", () => sideBarToggler("none"));
document.querySelector(".hamburger-menu").addEventListener("click", () => sideBarToggler("block"));
const sideBarToggler = (displayProp) => document.querySelector(".side-bar-bg").style.display = displayProp;

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