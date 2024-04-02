// alert('Scripts invoked!!!');
window.addEventListener('scroll', () => {
	let scrolledHeight = window.pageYOffset;
	let navBar = document.querySelector('nav');
	let navBarHeight = navBar.getBoundingClientRect().height;
	if(scrolledHeight > navBarHeight){
		navBar.classList.add('nav-bar-bright');
	}else{
		navBar.classList.remove('nav-bar-bright');
	}
	console.log(`${navBarHeight}`);
});
