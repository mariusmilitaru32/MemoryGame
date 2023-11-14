function redirectToHomePage() {
    var seconds = 10;
    // Display a countdown message before redirecting
    var countdown = setInterval(function() {
        document.getElementById("countdown").innerHTML = "Redirecting you to home page in " + seconds + " seconds...";
        seconds--;

        // When the countdown is over, redirect to the home page
        if (seconds < 0) {
            clearInterval(countdown);
            window.location.href = "index.html";
        }
    }, 1000);
}

// Call the function when the page loads
window.onload = redirectToHomePage;
