const FAQBtn = document.querySelector(".btn--FAQ");
const questions = document.querySelectorAll(".questionList__question");

for (question of questions) {
	question.addEventListener("click", toggleQuestion);
}

FAQBtn.addEventListener("click", FAQBtnClick);

function FAQBtnClick(event) {
	event.preventDefault();
	openPopUp();
}

function toggleQuestion(event) {
	const answer = event.currentTarget.nextElementSibling; 
	console.log(answer.scrollHeight);
	const triangle = event.currentTarget.querySelector("svg"); 
	if (answer.classList.contains("questionList__answer--open")) {
		closeQuestion(answer, triangle);
	} else {
		closeQuestion();
		openQuestion(answer, triangle);
	}
}	

function openQuestion(answer, triangle) {
	answer.classList.add("questionList__answer--open");
	triangle.classList.add("questionList__triangle--open");
	answer.style.height = answer.scrollHeight + "px";
}

function closeQuestion(answer = "", triangle = "") {
	if (answer === "") {
		answer = document.querySelector(".questionList__answer--open");
		triangle = document.querySelector(".questionList__triangle--open");
	}
	if (answer) {
		answer.style.height = "0";
		triangle.classList.remove("questionList__triangle--open");
		setTimeout(() => removeOpenAnswer(answer, triangle), 700);
	}
}

function removeOpenAnswer(answer, triangle) {
	answer.classList.remove("questionList__answer--open");
}