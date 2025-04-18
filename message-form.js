const form = document.forms["submit-to-google-sheet"];
const scriptURL = "https://script.google.com/macros/s/AKfycbwRxvSRiGgbOK9Z0rfxjO5QM7cske_CeNZgH9zf_4sAxGWYEyHtUDa5_IsT9je0xIT2GQ/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();  // prevent the default form behavior

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
    .then(response => response.json())  // Parse JSON response
    .then(data => {
      loading.style.display = "none";

      if (data.result === "success") {
        successMessage.style.display = "block";
        form.reset();  // Reset form after successful submission
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
