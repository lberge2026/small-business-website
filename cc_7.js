function updateHeadline() {
	const input = document.getElementById('new-headline');
	const headline = document.getElementById('cta-headline');
	if (input.value.trim() !== '') {
		headline.textContent = input.value;
	}
}

// Make sure the function is available globally
window.updateHeadline = updateHeadline;
