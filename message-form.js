const scriptURL = 'https://script.google.com/macros/s/AKfycbzSIVEiWpCr359DhPgRaJF-9CYh7qHBAiZaJWMqT4wsL48N-YjTmFsQpQHcO0Tj39oiUQ/exec';
const form = document.getElementById('submit-to-google-sheet');
const loading = document.querySelector('.loading');
const successMessage = document.querySelector('.sent-message');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  loading.style.display = 'block';
  successMessage.style.display = 'none';
  errorMessage.textContent = '';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      loading.style.display = 'none';
      successMessage.style.display = 'block';
      form.reset();
    })
    .catch(error => {
      loading.style.display = 'none';
      errorMessage.textContent = 'There was an error submitting the form. Please try again!';
      console.error('Error!', error.message);
    });
});
