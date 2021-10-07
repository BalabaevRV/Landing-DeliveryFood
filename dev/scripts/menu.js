"use strict";

const burgerMenu = document.querySelector("#burgerMenu");
const mainNav = document.querySelector("#mainNav");
const navigationList = document.querySelector("#navigationList");
const navigationListLinks = navigationList.querySelectorAll("a");
let closeMenu = false;

for (let link of navigationListLinks) {
	link.addEventListener("click", () => {
		if (menuOpen()) {
	 		closeMobileMenu();
		};
	})		
}

burgerMenu.addEventListener ("click", burgerMenuClick);
mainNav.addEventListener ("transitionend", endCloseMobile);

function menuOpen() {
	return mainNav.classList.contains("header__navigation--mobile")	
}

function burgerMenuClick() {
	if (menuOpen()) {
		closeMobileMenu();
	} else {
		OpenMobileMenu();
	};
}

function closeMobileMenu () {
	body.style.overflow = "auto";
	closeMenu = true;
	burgerMenu.classList.toggle("openMenu");
	mainNav.style.backgroundColor = "rgba(0, 0, 0, 0)";
	navigationList.style.right = "-100%";
}

function OpenMobileMenu() {
	body.style.overflow = "hidden";
	burgerMenu.classList.toggle("openMenu");
	toggleMenu ();
	setTimeout(() => mainNav.style.backgroundColor = "rgba(0, 0, 0, 0.9)", 10);
	setTimeout(() => navigationList.style.right = "0", 10);
} 

function toggleMenu () {
	closeMenu = false;	
	mainNav.style.display = (mainNav.style.display !== "block") ? "block" : "none";
	mainNav.classList.toggle("header__navigation--mobile");
	navigationList.classList.toggle("header__links--mobile");
}

function endCloseMobile () {
	if (closeMenu) {
		toggleMenu ();
	};
}

