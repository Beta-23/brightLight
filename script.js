const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme Event Dynamically
function switchTheme (event) {
	console.log(event.target.checked);
}
// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
