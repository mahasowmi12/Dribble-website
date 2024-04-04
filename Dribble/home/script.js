const form = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Handle form submission logic
  console.log('Form submitted!');
});

usernameInput.addEventListener('input', () => {
  if (usernameInput.value === 'John') {
    usernameInput.classList.add('error');
  } else {
    usernameInput.classList.remove('error');
  }
});