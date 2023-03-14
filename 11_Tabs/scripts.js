var tabList = document.querySelectorAll('.tab-bar .tab');
var tabContentList = document.querySelectorAll('.tab-contents .tab-content');
var tabView = document.querySelector('.tab-view');

tabView.addEventListener('click', (e) => {
	// console.log(e.target);
	// console.log(e.target.dataset.id);
	if(e.target.dataset.id) {
		var tab = e.target;
		var id = e.target.dataset.id; 
		for (var i=tabList.length -1; i>=0; i--) {
			tabList[i].classList.remove('active-tab');
			tabContentList[i].classList.remove('active-content');
		}
		tab.classList.add('active-tab');
		document.querySelector('#'+id).classList.add('active-content');
		// console.log ('if ends...');
	}
});