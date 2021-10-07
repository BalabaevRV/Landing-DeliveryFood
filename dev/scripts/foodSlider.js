"use strict";

const foodToggles = document.querySelectorAll(".foodGallery__toggles .radioButtons__input");
const foodSliders = document.querySelectorAll(".foodGallery__slider");
const foodSliderItem = document.querySelector(".foodSlider__item"); 
const foodSlideWidth = (window.innerWidth>580) ? foodSliderItem.offsetWidth + 300 : foodSliderItem.offsetWidth + 50;
const foodSlidersArrows = document.querySelectorAll(".foodSlider__nav .arrow");
let currentFoodSlider;
let currentFoodSliderItems;
let activeFoodSlider;
let currentFoodSliderIndex = 1;

setCurrentFoodSlider();

for (const toggle of foodToggles) {
	toggle.addEventListener("change", () => {
		removeCurrentSlider(currentFoodSliderIndex);
		foodSliders[0].classList.toggle("foodGallery__slider--hidden");
		foodSliders[1].classList.toggle("foodGallery__slider--hidden");
		setCurrentFoodSlider();
		currentFoodSliderIndex = 1;
		translateFoodSlider(currentFoodSlider);
		addCurrentSlider(currentFoodSliderIndex);
		toggleArrows();
	});

}

for (const foodSlider of foodSliders) {
	translateFoodSlider(foodSlider);	
}

for (const arrow of foodSlidersArrows) {
	arrow.addEventListener("click", arrowFoodClick);
}

function setCurrentFoodSlider() {
	currentFoodSlider = (foodSliders[0].classList.contains("foodGallery__slider--hidden")) ? foodSliders[1] : foodSliders[0]; 
	currentFoodSliderItems = currentFoodSlider.querySelectorAll(".foodSlider__item");
} 

function arrowFoodClick(event) {
	if (event.currentTarget.classList.contains("arrow--disabled")) {
		return;
	};

	if (event.currentTarget.classList.contains("arrow--right")) {	
		moveFoodSlider("right");
	} else {
		moveFoodSlider("left");
	}	
}

function moveFoodSlider (direction) { 
	removeCurrentSlider(currentFoodSliderIndex);
	if (direction === "right") {
		currentFoodSliderIndex++;
		currentFoodSliderIndex = (currentFoodSliderIndex < currentFoodSliderItems.length-1) ? currentFoodSliderIndex : currentFoodSliderItems.length-1;
	} else {
		currentFoodSliderIndex--;
		currentFoodSliderIndex = (currentFoodSliderIndex > 0) ? currentFoodSliderIndex : 0;
	};
	addCurrentSlider(currentFoodSliderIndex);
	translateFoodSlider(currentFoodSlider);
	toggleArrows(currentFoodSliderIndex, event.currentTarget);
}

function translateFoodSlider(slider) {
	slider.style.transform = `translateX(-${foodSlideWidth*currentFoodSliderIndex}px)` 
}

function removeCurrentSlider(index) {
	currentFoodSliderItems[index].classList.remove("foodSlider__item--current");
}


function addCurrentSlider(index) {
	currentFoodSliderItems[index].classList.add("foodSlider__item--current");
}

function toggleArrows() {
	if (currentFoodSliderIndex === 0) {
		foodSlidersArrows[0].classList.add("arrow--disabled");
	} else if (currentFoodSliderIndex === currentFoodSliderItems.length-1) {
		foodSlidersArrows[1].classList.add("arrow--disabled");
	} else {
		foodSlidersArrows[0].classList.remove("arrow--disabled");
		foodSlidersArrows[1].classList.remove("arrow--disabled");		
	};
}