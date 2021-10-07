"use strict";

let evt;
let posX1;
let posX2;
let thisList;
let thisEl;
let distance = 0;
let distanceFoodSlider =  (window.innerWidth>580) ? foodSliderItem.offsetWidth + 300 : foodSliderItem.offsetWidth + 50;
let distanceReviewSlider = reviewSliderItem.offsetWidth + 100;
let minDistance = 50;
let maxDistance = 0;
let isSwipe = false;

const allfoodSlideItem = document.querySelectorAll(".foodSlider__item");
const allReviewSlideItem = document.querySelectorAll(".reviewsCarousel__item");


for (const item of allfoodSlideItem) {
	item.addEventListener("mousedown", swipeStart);
	item.addEventListener("touchstart", swipeStart);
}	

for (const item of allReviewSlideItem) {
	item.addEventListener("mousedown", swipeStart);
	item.addEventListener("touchstart", swipeStart);
}	

function swipeStart (event) {
	evt = getEvent();	
	evt.target.ondragstart = function() {
  		return false;
	};
	isSwipe = false;
	thisList = event.currentTarget.parentElement;
	thisEl = event.currentTarget;
	thisEl.style.cursor = "grabbing";
	setCurrentDistance(thisList);
  	posX1 = evt.clientX;
  	document.addEventListener("touchmove", moveAt);
  	document.addEventListener("touchend", swipeEnd);
  	document.addEventListener("mousemove", moveAt);
  	document.addEventListener("mouseup", swipeEnd); 
}

function moveAt() {
	evt = getEvent();
	posX2 = evt.clientX - posX1;
  	posX1 = evt.clientX; 
  	distance = distance - posX2;
  	thisList.style.transform = `translateX(-${distance}px)`;
}


function setCurrentDistance () {
	distance = (thisList === reviewsCarousel) ? distanceReviewSlider : distanceFoodSlider;
}

function getEvent() {
	return (event.type.search("touch") !== -1) ? event.touches[0] : event;
  }

function swipeEnd (event) {
	thisEl.style.cursor = "";
  	document.removeEventListener("touchmove", moveAt);
    document.removeEventListener("mousemove", moveAt);
    document.removeEventListener("touchend", swipeEnd);
    document.removeEventListener("mouseup", swipeEnd); 

	if (thisList === reviewsCarousel) {
		if (distance>distanceReviewSlider) {
			moveReviewsSlider("right");
		} else {
			moveReviewsSlider("left");			
		}
		distanceReviewSlider = reviewSlideWidth*currentReviewSliderIndex;		
	} else {
		if (distance>distanceFoodSlider) {
			moveFoodSlider("right");
		} else {
			moveFoodSlider("left");			
		}
		distanceFoodSlider = foodSlideWidth*currentFoodSliderIndex;
	}
}    
