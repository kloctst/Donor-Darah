function adminLogin(event) {
    document.addEventListener('DOMContentLoaded', () => {
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'none';
    });
    
    event.preventDefault(); // Prevent form submission

    // Reset error message visibility
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';

    // Hardcoded credentials for admin
    const validUsername = 'admin';
    const validPassword = 'admin123';

    // Get input values
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        window.location.href = 'home.html'; // Redirect to Home page
    } else {
        errorMessage.style.display = 'block'; // Show error message
    }
}

