// Closure example
// Outter function to enclose and create "privacy" of variables.
function createScoreboard(homeScoreElementId, visitorScoreElementId, pointsPerIncrement, maxScore) { // Pass parameters. 
	let homeScore = 0; // Initialize homeScore.  
	let visitorScore = 0; // Initialize visitorScore.  
  
  // Create variables for updating scores.
	const homeElement = document.getElementById(homeScoreElementId);
	const visitorElement = document.getElementById(visitorScoreElementId);
  
  // Inner function with access to outter function variables.  It will update home score.
	function updateHomeScore() {
	  homeScore += pointsPerIncrement; // Account for different point increments when updating scores.
    if (homeScore > maxScore) {  // Account for max score which is applied to tennis to simulate match. 
      homeScore = 0; // Reset homeScore.
    }
    // Update homeScore.
	  homeElement.textContent = homeScore;
    // Add validation glow effect for user experience.  For each score increment. 
    homeElement.closest('.score-item').parentElement.parentElement.classList.add('glow');
    // Remove glow effect.
    setTimeout(() => {
        homeElement.closest('.score-item').parentElement.parentElement.classList.remove('glow');
    }, 1000); // Lasts for 1 second.
	}
  
  // Inner function with access to outter function variables.  It will update visitor score.
	function updateVisitorScore() {
	  visitorScore+= pointsPerIncrement; // Account for different point increments when updating scores.
	  if (visitorScore > maxScore) { // Account for max score which is applied to tennis to simulate match.
      visitorScore = 0; // Reset visitorScore.
    } 
    // Update visitorScore. 
    visitorElement.textContent = visitorScore;
    // Add validation glow effect for user experience.  For each score increment. 
    visitorElement.closest('.score-item').parentElement.parentElement.classList.add('glow');
    // Remove glow effect.
    setTimeout(() => {
        visitorElement.closest('.score-item').parentElement.parentElement.classList.remove('glow');
    }, 1000); // Lasts for 1 second.
	}
  // Return scores.
	return { // Use of return object due to multiple returns.
	  updateHomeScore,
	  updateVisitorScore,
	};
}

/* Create scoreboards for each game. Initial score = 0.
/  This is like creating four separate crayon boxes, each with its own crayons.  Each box will keep track of its own crayons.  
/  In this case, the boxes are the scoreboards and home and visitor points are the crayons. */
const earthScoreboard = createScoreboard("earthEarthScore", "earthVisitorScore", 100); // Increment by 100.
const footballScoreboard = createScoreboard("footballHomeScore", "footballVisitorScore", 7); // Increment by 7.
const tennisScoreboard = createScoreboard("tennisHomeScore", "tennisVisitorScore", 15, 45); // Increment by 15 max of 45.
const baseballScoreboard = createScoreboard("baseballHomeScore", "baseballVisitorScore", 1); // Increment by 1.

// Attach click event listeners to buttons and execute inner functions. 
document.getElementById("earthHomeBtn").addEventListener("click", earthScoreboard.updateHomeScore);
document.getElementById("earthVisitorBtn").addEventListener("click", earthScoreboard.updateVisitorScore);

document.getElementById("footballHomeBtn").addEventListener("click", footballScoreboard.updateHomeScore);
document.getElementById("footballVisitorBtn").addEventListener("click", footballScoreboard.updateVisitorScore);

document.getElementById("tennisHomeBtn").addEventListener("click", tennisScoreboard.updateHomeScore);
document.getElementById("tennisVisitorBtn").addEventListener("click", tennisScoreboard.updateVisitorScore);

document.getElementById("baseballHomeBtn").addEventListener("click", baseballScoreboard.updateHomeScore);
document.getElementById("baseballVisitorBtn").addEventListener("click", baseballScoreboard.updateVisitorScore);

