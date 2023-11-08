// the email function is from Code institute and adapted for my needs
function sendMmail (contactForm) {
    let submitBtn = document.getElementById("tip-btn");
    let startButton = document.getElementById("start-button");
    let confirmationParagraph = document.createElement("p");
    confirmationParagraph.style.display = "none"; 
    startButton.parentNode.appendChild(confirmationParagraph);
    // Disable the submit button to prevent multiple submissions
    submitBtn.disabled = true;

    emailjs.send("service_1paqb38", "template_78ha4ee", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })


}  