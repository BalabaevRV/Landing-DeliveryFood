"use strict";

const closePopUpIcon = document.querySelector("#closePopUpIcon");
let close;
let	thisContent;
const body = document.querySelector("body");
const popUp = document.querySelector("#popUp"); 
const popUpParagraph = popUp.querySelector(".popUp__paragraph"); 
const closeBtn = popUp.querySelector(".btn--close");
const formOrder = document.querySelector(".formOrder");
closePopUpIcon.addEventListener("click", closePopUp);
closeBtn.addEventListener("click", closePopUp);
window.addEventListener("click", windowClick);
popUp.addEventListener("transitionend", endClosePopUp);

function windowClick(event) {
	if (event.target === popUp) {
		closePopUp();
	}
}

function openPopUp(btn) {
	body.style.overflow = "hidden";
	close = false;
	popUp.style.display = "block";
	popUpParagraph.innerHTML = "Данный раздел не готов";
	setTimeout(() => {
		popUp.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
		popUpWindow.style.right ="0";
	}, 20);
	window.addEventListener("click", windowClick);
}

function closePopUp () {
	body.style.overflow = "auto";
	popUp.style.backgroundColor = "rgba(0, 0, 0, 0)";
	popUpWindow.style.right ="-200%";
	close = true;
	window.removeEventListener("click", windowClick);
}

function endClosePopUp () {
	if (close) {
		popUp.style.display = "none";	
	}
}
