// alert("Scripts invoked!!!");
let activeSlide = 0;
let slides = document.querySelectorAll('.slide');
let indicators = document.querySelectorAll('.slide-indicator span');
let prevBtn = document.querySelector('#prev-btn');
let nextBtn = document.querySelector('#next-btn');

slides.forEach((slide,index) =>	slide.style.left = `${index * 100}%`);
indicators.forEach((indicator,index) => {
	indicator.addEventListener('click', () => moveSlide(direction=null, indicatorIndex=index));
});

function moveSlide(direction=null, indicatorIndex=null){
	if(direction!==null)
		direction.toLowerCase()==='left' ? activeSlide-=1:activeSlide+=1;
	else activeSlide = indicatorIndex;

	if(activeSlide>=indicators.length) activeSlide=0;
	else if(activeSlide<0) activeSlide=indicators.length-1;

	// console.log(`Direction:${direction}, IndicatorIndex:${indicatorIndex}, ActiveSlide:${activeSlide +1}`);

	slides.forEach((slide, index) => {
		slide.style.transform = `translateX(-${activeSlide * 100}%)`
	});
	indicators.forEach((indicator, index) => {
		if(index===activeSlide){
			indicator.classList.add('active-slide');
		}else{
			indicator.classList.remove('active-slide');
		}
	});
}

prevBtn.addEventListener('click', () => moveSlide(direction='left', indicatorIndex=null));
nextBtn.addEventListener('click', () => moveSlide(direction='right', indicatorIndex=null));