// Non closure example

// Declare and initialize score variables.  Declared globally.  
let homeScore = 0; // All updates to score reflected, here.
let visitorScore = 0; // All updates to score reflected, here.

function updateScore(gameId, isHome) { // Include parameters.  
	if (isHome) {
		homeScore++; // Note - Every homeScore increments, as intended.
	} else {
		visitorScore++; // Note - Every visitorScore increments, as intended.
	}
	// Update scores.
	document.getElementById("earthEarthScore").textContent = homeScore;  
	document.getElementById("earthVisitorScore").textContent = visitorScore;

	document.getElementById("footballHomeScore").textContent = homeScore;
	document.getElementById("footballVisitorScore").textContent = visitorScore;
	
	document.getElementById("tennisHomeScore").textContent = homeScore;
	document.getElementById("tennisVisitorScore").textContent = visitorScore;
	
	document.getElementById("baseballHomeScore").textContent = homeScore;
	document.getElementById("baseballVisitorScore").textContent = visitorScore;
	
    // Apply glow effect to the specific game's container and browser border
	const scoreContainer = document.getElementById("earth").querySelector('.scores-container');
	scoreContainer.parentElement.classList.add('glow');
	document.getElementById('browser-border').classList.add('glow');

	// Remove glow effect.
	setTimeout(() => {
		scoreContainer.parentElement.classList.remove('glow');
		document.getElementById('browser-border').classList.remove('glow');
	}, 2000); // Lasts for 2 seconds.
}

// Attach click event listeners to buttons
document.getElementById("earthHomeBtn").addEventListener("click", () => updateScore("earth", true)); // Set parameters.  True for home.
document.getElementById("earthVisitorBtn").addEventListener("click", () => updateScore("earth", false)); // False for visitor.

document.getElementById("footballHomeBtn").addEventListener("click", () => updateScore("football", true)); // Set parameters.  True for home.
document.getElementById("footballVisitorBtn").addEventListener("click", () => updateScore("football", false)); // False for visitor.

document.getElementById("tennisHomeBtn").addEventListener("click", () => updateScore("tennis", true)); // Set parameters.  True for home.
document.getElementById("tennisVisitorBtn").addEventListener("click", () => updateScore("tennis", false)); // False for visitor.

document.getElementById("baseballHomeBtn").addEventListener("click", () => updateScore("baseball", true)); // Set parameters.  True for home.
document.getElementById("baseballVisitorBtn").addEventListener("click", () => updateScore("baseball", false)); // False for visitor.