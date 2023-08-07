

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
    const errorIcon = document.getElementById("error-icon");
    const submitBtn = document.getElementById("submit-btn");
  
    // Function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault();
      const email = emailInput.value;
      if (!isValidEmail(email)) {
        errorMessage.textContent = "Please provide a valid email.";
        emailInput.classList.add("error");
        errorIcon.style.display = "inline";
      } else {
        errorMessage.textContent = "";
        emailInput.classList.remove("error");
        errorIcon.style.display = "none";
        // Perform form submission or other actions here
      }
    }
  
    // Add event listener for form submission
    const form = document.querySelector(".input-form");
    form.addEventListener("submit", handleSubmit);
  
    // Add event listener for button click
    submitBtn.addEventListener("click", function () {
      if (!isValidEmail(emailInput.value)) {
        errorMessage.textContent = "Please provide a valid email.";
        emailInput.classList.add("error");
        errorIcon.style.display = "inline";
      }
    });
  });
  