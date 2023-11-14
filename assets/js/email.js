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
        },
        function(error) {
            console.log("FAILED", error);
            submitBtn.disabled = false;
        });

    return false;
}
