// Get reference to the form
const form = document.forms["submit-to-google-sheet"];

// Your deployed Google Apps Script Web App URL (ends with /exec)
const scriptURL = "https://script.google.com/macros/s/AKfycbziGqoS8HI29edqmJnCWxcr3-Nc7loHwVs49hTn81z_XN7RBeftIOrCUHuKvU6nhVeJMw/exec";

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the default form behavior

  // Show "Loading..." (optional)
  const loading = form.querySelector(".loading");
  const successMessage = form.querySelector(".sent-message");
  const errorMessage = form.querySelector(".error-message");

  loading.style.display = "block";
  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  // Create a FormData object from the form
  const formData = new FormData(form);

  // Send the POST request
  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
    .then(response => {
      loading.style.display = "none";

      if (response.ok) {
        successMessage.style.display = "block";
        form.reset();
      } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Something went wrong. Please try again!";
      }
    })
    .catch(error => {
      loading.style.display = "none";
      errorMessage.style.display = "block";
      errorMessage.textContent = "Error: " + error.message;
    });
});
