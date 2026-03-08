// Select elements
const input = document.getElementById('new-headline');
const button = document.querySelector('.update-cta-section button');
const headline = document.getElementById('cta-headline');

if (input && button && headline) {
	button.addEventListener('click', function () {
		if (input.value.trim() !== '') {
			headline.textContent = input.value;
		}
	});
}
