"use strict";

const reviewSliderItem = document.querySelector(".reviewsCarousel__item"); 
const reviewSlideWidth = reviewSliderItem.offsetWidth + 100;
const reviewsCarousel = document.querySelector(".reviewsCarousel");
const reviewsCarouselItems =  document.querySelectorAll(".reviewsCarousel__item");  
let currentReviewSliderIndex = 1;

translateReviewsSlider();
addCurrentReviewSlide(currentReviewSliderIndex);

function moveReviewsSlider(direction) {
	removeCurrentReviewSlide(currentReviewSliderIndex);
	if (direction === "right") { 
		currentReviewSliderIndex++;
		currentReviewSliderIndex = (currentReviewSliderIndex < reviewsCarouselItems.length-1) ? currentReviewSliderIndex : reviewsCarouselItems.length-1;
	} else {
		currentReviewSliderIndex--;
		currentReviewSliderIndex = (currentReviewSliderIndex > 0) ? currentReviewSliderIndex : 0;
	}
	addCurrentReviewSlide(currentReviewSliderIndex);
	translateReviewsSlider();
}

function translateReviewsSlider () {
	reviewsCarousel.style.transform = `translateX(-${reviewSlideWidth*currentReviewSliderIndex}px)`;
}

function addCurrentReviewSlide(index) {
	reviewsCarouselItems[index].classList.add("reviewsCarousel__item--current");
}

function removeCurrentReviewSlide(index) {
	reviewsCarouselItems[index].classList.remove("reviewsCarousel__item--current");
}