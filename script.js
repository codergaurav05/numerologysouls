// Function to check if the user is logged in
function isLoggedIn() {
  // Replace this with your actual login check logic
  return localStorage.getItem('isLoggedIn') === 'true'; 
}

// Get references to necessary elements
const toolsButton = document.getElementById('toolsButton');
const loginModal = document.querySelector('.login-modal');
const closeModalButton = document.querySelector('.close-modal');
const loginForm = document.querySelector('.login-modal form');
const logoutLink = document.querySelector('a[href="logout.html"]'); 

// Initially hide the Logout button
logoutLink.style.display = "none"; 

// Handle click event for the Tools button
toolsButton.addEventListener('click', () => {
  if (!isLoggedIn()) {
    loginModal.style.display = 'flex';
  } else {
    // Redirect to the tools section or display the tools content
    window.location.href = "tools.html"; 
  }
});

// Handle click event for the close button in the login modal
closeModalButton.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Handle form submission in the login modal
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('[type="email"]').value;
  const password = document.querySelector('[type="password"]').value;

  // **Important:** Replace this with your actual server-side authentication logic. 
  // This should include sending a request to your server, validating credentials, 
  // and receiving a response to determine successful login.

  if (validateCredentials(email, password)) { 
    localStorage.setItem('isLoggedIn', 'true');
    loginModal.style.display = 'none';
    window.location.href = "/"; 

    // Show the Logout button after successful login
    logoutLink.style.display = "inline-block"; 
  } else {
    alert('Invalid email or password.');
  }
});

// Handle logout functionality
logoutLink.addEventListener('click', () => {
  localStorage.removeItem('isLoggedIn'); 
  window.location.href = "login.html"; 

  // Hide the Logout button after logout (optional)
  logoutLink.style.display = "none"; 
});

// Example of a simple validation function (Replace with your actual server-side logic)
function validateCredentials(email, password) {
  // Basic validation (replace with your server-side checks)
  if (email === 'user@example.com' && password === 'password123') {
    return true; 
  } else {
    return false;
  }
}