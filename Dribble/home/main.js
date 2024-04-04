// Get the "resend email" link
const resendEmailLink = document.getElementById('resendEmail');

// Add an event listener to the "resend email" link
resendEmailLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior

  // Display an alert to confirm email resend
  alert('Confirmation email resent. Please check your inbox.');
});