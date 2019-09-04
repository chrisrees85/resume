
function sendEmail(contactForm) {
    emailjs.send("gmail", "chris_resume_request", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            });
            return false;
}

function clearFormData() {
    document.getElementById("request-form").reset();
}