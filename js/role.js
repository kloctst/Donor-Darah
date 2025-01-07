// Function to show login forms based on role
function showLoginForm(role) {
    document.getElementById("role-selection").style.display = "none";

    if (role === 'user') {
        document.getElementById("user-login").style.display = "block";
    } else if (role === 'admin') {
        document.getElementById("admin-login").style.display = "block";
    }
}

// User login validation
document.getElementById("user-login").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting directly

    // Input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Predefined credentials
    const validUsername = "andy";
    const validEmail = "andyfa@gmail.com";
    const validPassword = "andy123";

    // Check credentials
    if (username === validUsername && email === validEmail && password === validPassword) {
        alert("Login successful! Welcome, " + username);
        window.location.href = "index.html"; // Redirect to the homepage
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

// Admin login validation
document.getElementById("admin-login").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting directly

    // Input values
    const adminUsername = document.getElementById("admin-username").value;
    const adminPassword = document.getElementById("admin-password").value;

    // Predefined admin credentials
    const validAdminUsername = "admin";
    const validAdminPassword = "admin123";

    // Check credentials
    if (adminUsername === validAdminUsername && adminPassword === validAdminPassword) {
        alert("Admin login successful! Welcome, Admin.");
        window.location.href = "index.html"; // Redirect to the homepage
    } else {
        alert("Invalid admin credentials. Please try again.");
    }
});
