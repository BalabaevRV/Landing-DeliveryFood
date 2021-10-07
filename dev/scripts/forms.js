"use strict";

const numOfWeek = document.querySelector("#numOfWeek");
const numOfDishes = document.querySelector("#numOfDishes");
const priceDerDish = 195; 
const paragraphsForm = document.querySelectorAll(".captionForm__paragraph span");
const orderBtn = document.querySelector(".orderForm button");
const emailInputs = document.querySelectorAll(".inputForm--email");

for (let input of emailInputs) {
	input.addEventListener("input", validationEmail);
}

numOfWeek.addEventListener("input", () => {
	if (numOfWeek.value === "0" || numOfWeek.value === "") {
		numOfWeek.value = 1
	};
	changeTotal();
})

numOfDishes.addEventListener("change", changeTotal);

orderBtn.addEventListener("click", orderBtnClick);

function orderBtnClick(event) {
	event.preventDefault();
	openPopUp();
}

function validationEmail(event) {
	const re = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+/;
	const currentEl = event.currentTarget;
	// let errorArray = arrayByForm(this.closest("form"));

	if (currentEl.value == "") {
		addError (currentEl, currentEl.nextElementSibling, "Укажите email");
	} else if (!re.test(currentEl.value)) {
		addError (currentEl , currentEl.nextElementSibling, "Укажите корректный email"); 
	}  else {
		removeError(currentEl, currentEl.nextElementSibling);
	};
}

function addError(input, paragraph, text) {
	input.classList.add("inputForm--error");
	paragraph.innerHTML = text;
}

function removeError(input, paragraph)  {
	input.classList.remove("inputForm--error");
	paragraph.innerHTML = "";
} 

function changeTotal() {
	let total = priceDerDish * numOfWeek.value * 7 * numOfDishes.value;
	paragraphsForm[1].innerHTML = addSpace(total) +" ₽"; 
	paragraphsForm[2].innerHTML = addSpace(Math.round(total*70/100)) +" ₽"; 
}

function addSpace(num) {
	let newNum = "";
	let numSTR = String(num);
	let i=3;
	let j=3;
	let length = numSTR.length; 
	do {
		newNum =numSTR.substr(-i, j) +" " + newNum;  
		length=length-i;
		if (length % 3 !== 0) {
			j = length;  
		} 
		i=i+3;
	} while (length>0);
	return newNum; 
}