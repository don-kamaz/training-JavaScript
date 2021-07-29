const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const btnOpen = document.getElementById('btn-open');
const modal = document.getElementById('wrapper-modal');

const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      slidesWrap = document.querySelectorAll('.slider-wrapper');

const tabsElement = Array.from(document.querySelectorAll('.tab'));

function changeClass(el){
  for(let i = 0; i < tabs.children.length; i++){
      tabs.children[i].classList.remove('active');
  }
  el.classList.add('active');
}
for (let index = 0; index < tabsElement.length; index++){
	tabsElement[index].addEventListener('click',function(e){
		let currTab = event.target.dataset.btn;
		changeClass(event.target);
		for(let i = 0; i < content.length; i++){
			content[i].classList.remove('active');
			if(content[i].dataset.content === currTab){
				content[i].classList.add('active');
			}
		}
	})
}

btnOpen.addEventListener('click',function(){
  modal.classList.add('active');
});

function closeModal(){
  modal.classList.remove('active');
}

overlay.addEventListener('click',closeModal);
btnClose.addEventListener('click',closeModal);

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    }else{
        index++;
        prepareCurrentSlide(index);
    }
};
const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
        clearInterval(interval);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 2500);
