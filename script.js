const questions = document.querySelectorAll(".question");
const details = document.querySelectorAll(".detail");

questions.forEach((question) => {
	question.addEventListener("click", () => {

		const showDetail = question.nextElementSibling;
		question.classList.toggle("active");
		showDetail.classList.toggle("active");
	});

});































// function initAccordion(accordionElem) {

//     function handlePanelClick(event) {
//         showPanel(event.currentTarget);
//     } 


// function showPanel(panel) {
//     var expandedPanel = accordionElem.querySelector('.active');
//     if (expandedPanel) {
//         expandedPanel.classList.remove('active');
//     }

//     panel.classList.add('active');

// }

// var allPanelElems = accordionElem.querySelectorAll('.panel');
// for (var i = 0, len = allPanelElems.length; i < len; i++) {
//     allPanelElems[i].addEventListener('click', handlePanelClick);
// }

// showPanel(allPanelElems[0])

// }

// initAccordion(document.getElementById('accordion'));
