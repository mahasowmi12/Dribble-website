// Get necessary DOM elements
const avatarPlaceholder = document.querySelector('.avatar-placeholder');
const chooseImageBtn = document.querySelector('button:nth-of-type(1)');
const locationInput = document.querySelector('input[type="text"]');
const nextBtn = document.querySelector('button:nth-of-type(2)');

// Function to handle avatar image upload or selection
function handleAvatarUpload() {
  // Code to open file picker or display default avatar options
  // Then update the avatarPlaceholder element with the selected image
}

// Function to handle the "Next" button click
function handleNextClick() {
  const location = locationInput.value.trim();

  // Validate the location input
  if (location === '') {
    alert('Please enter your location');
    return;
  }

  // Code to save the user's profile data (avatar and location)
  // and proceed to the next step in the signup process
}

// Event listeners
chooseImageBtn.addEventListener('click', handleAvatarUpload);
nextBtn.addEventListener('click', handleNextClick);