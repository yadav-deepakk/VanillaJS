window.onscroll = function windowScroll() { 
	// console.log(document.documentElement.scrollTop);
	let navBar = document.querySelector('.nav-bar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50){
        navBar.classList.add("nav-bar-bright");
    }else {
        navBar.classList.remove("nav-bar-bright");
    }
};