document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Prepare form data
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    // Send form data using FormSubmit
    fetch("https://formsubmit.co/73c16d75fc61318d2b852f672b537f73", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("contactForm").reset();
            document.getElementById("successMessage").style.display = "block";
        } else {
            alert("Something went wrong. Please try again.");
        }
    })
    .catch(error => alert("Error: " + error));
});