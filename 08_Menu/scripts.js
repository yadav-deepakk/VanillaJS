const activateBtn = function(btn) {
	console.log(btn.classList);
	let children = btn.parentNode.children;
	console.log(children);
	for (var i=children.length -1; i>=0; i--) {
		if ( children[i].classList.contains("btn-active") ){
			children[i].classList.remove("btn-active");
		}
	}
	btn.classList.add("btn-active");
}

const createMenuItems = function(tagOnBtn){
	const menuItemList = [
		{imageSrc: "badam-milkshake.png",itemName: "Badam Milkshake", itemPrice: "80.00", itemDesc: "", tags:"dinner"}, 
		{imageSrc: "dosa.png",itemName: "Dosa", itemPrice: "110.00", itemDesc: "", tags:"breakfast,lunch"}, 
		{imageSrc: "fried-rice.png",itemName: "Fried Rice", itemPrice: "120.00", itemDesc: "", tags:"lunch"}, 
		{imageSrc: "fruit-juice.png",itemName: "Mixed Fruit Juice", itemPrice: "100.00", itemDesc: "", tags:"breakfast"}, 
		{imageSrc: "full-meal.png",itemName: "Full Meal", itemPrice: "150.00", itemDesc: "", tags:"lunch,dinner"}, 
		{imageSrc: "matar-paneer.png",itemName: "Matar Paneer", itemPrice: "140.00", itemDesc: "", tags:"dinner"}, 
		{imageSrc: "noodles.png",itemName: "Noodles", itemPrice: "125.00", itemDesc: "", tags:"lunch"}, 
		{imageSrc: "orange-juice.png",itemName: "Orange Juice", itemPrice: "90.00", itemDesc: "", tags:"breakfast,lunch"}, 
		{imageSrc: "rice-plate.png",itemName: "Rice Plate", itemPrice: "160.00", itemDesc: "", tags:"dinner"}, 
		{imageSrc: "spring-roll.png",itemName: "Spring Roll", itemPrice: "114.00", itemDesc: "", tags:""}, 
		{imageSrc: "watermelon-juice.png",itemName: "Watermelon Juice", itemPrice: "70.00", itemDesc: "", tags:"lunch"}, 
	];

	console.log("filter based on: " + tagOnBtn);
	let items = ""; 
	menuItemList.filter( (item) => {
		return tagOnBtn.toLowerCase() !== 'all' ? item.tags.match(tagOnBtn.toLowerCase()):item;
	}).forEach( (menuItem) => {
		console.log(`tagOnBtn=${tagOnBtn}, menuItem.tags=${menuItem.tags}, menuItem.itemName=${menuItem.itemName}`);
		items += `
		<article class="menu-item">
			<img class="item-img" src="./img/${menuItem.imageSrc}" alt="${menuItem.itemName}">
			<div class="item-header">
				<p class="item-name">${menuItem.itemName}</p>
				<p class="item-price">${menuItem.itemPrice}</p>
			</div>
			<div class="item-description">
				Lorem Ipsdum Dolor Sit ametorem Ipsdum Dolor Sit ametorem Ipsdum Dolor Sit ametorem Ipsdum Dolor Sit amet Ipsdum Dolorolor Sit ametorem Ipsdum.
			</div>
		</article>`;
	});

	document.querySelector('.menu-items').innerHTML = items; 
}

// when page loads this function is called.
createMenuItems('all');

const btns = document.querySelectorAll('.btn-group .btn');
btns.forEach(btn => btn.addEventListener('click', () => filterMenuItems(btn)) );

function filterMenuItems(btn){
	if(btn.classList.contains("btn-active")) {
		console.log('Already active button was again clicked!');
		return; 
	}
	// 1) make clicked button active
	activateBtn(btn);

	// 2) create menuItems based on clicked button's tag
	createMenuItems(btn.innerHTML);
	
}