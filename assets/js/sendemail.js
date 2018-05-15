function sendMail(contactForm) {
    emailjs.init("user_oBxTxcTVqr0MaF5LsK63C");
    emailjs.send("gmail", "ifd_resume_template", {
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
        }
    );
    return false;  // To block from loading a new page
}