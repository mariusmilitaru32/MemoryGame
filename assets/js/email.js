// the code is from code institute and adapted for email message confirmation and countdown
function sendMail(contactForm) {
    let submitBtn = document.getElementById("tip-btn");
    let startButton = document.getElementById("start-button");
    let confirmationParagraph = document.createElement("p");
    confirmationParagraph.style.display = "none";
    startButton.insertAdjacentElement("afterend", confirmationParagraph);

    // Disable the submit button to prevent multiple submissions
    submitBtn.disabled = true;

    emailjs.send("service_1paqb38", "template_78ha4ee", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            confirmationParagraph.textContent = "Email has been sent successfully! Thank you";
            confirmationParagraph.style.display = "block";

            // Wait for 3 seconds before starting the countdown
            setTimeout(function() {
                // Set up a countdown timer to automatically redirect to the home page after 10 seconds
                let countdown = 10;
                let countdownTimer = setInterval(function() {
                    if (countdown === 0) {
                        clearInterval(countdownTimer);
                        window.location.href = "./index.html";
                    } else {
                        confirmationParagraph.textContent = `Redirecting you to home page in ${countdown} seconds!`;
                        countdown--;
                    }
                }, 1000);
            }, 3000);  // 3 seconds delay before the countdown is starting
        },
        function(error) {
            console.log("FAILED", error);
            submitBtn.disabled = false;
        });

    return false;
}
