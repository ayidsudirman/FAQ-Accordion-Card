const questions = document.querySelectorAll(".question");
const details = document.querySelectorAll(".detail");

questions.forEach((question) => {
	question.addEventListener("click", () => {

		const showDetail = question.nextElementSibling;
		question.classList.toggle("active");
		showDetail.classList.toggle("active");
	});

});
