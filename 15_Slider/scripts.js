// alert("Scripts invoked!!!");
let activeSlide = 0;
let slides = document.querySelectorAll('.slide');
let indicators = document.querySelectorAll('.slide-indicator span');
let prevBtn = document.querySelector('#prev-btn');
let nextBtn = document.querySelector('#next-btn');

slides.forEach((slide,index) =>	slide.style.left = `${index * 100}%`);

function moveSlide(direction){

	direction.toLowerCase()==='left' ? activeSlide-=1 : activeSlide+=1;

	if(activeSlide<0) 
		activeSlide = slides.length -1;
	else if (activeSlide == slides.length)
		activeSlide = 0;

	slides.forEach((slide,index) => {
		slide.style.transform = `translate(-${activeSlide * 100}%, 0px)`;
	});

	indicators.forEach((indicator,index) => {
		if(index==activeSlide) 
			indicator.classList.add('active-slide');
		else if(index!==activeSlide && indicator.classList.contains('active-slide')) 
			indicator.classList.remove('active-slide');
	});

	console.log(`active slide is: ${activeSlide +1}`)
}

prevBtn.addEventListener('click', () => moveSlide('left'));
nextBtn.addEventListener('click', () => moveSlide('right'));