document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Perform login authentication
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Dummy authentication logic (replace with your own)
    if (username === "a" && password === "a") {
        // Redirect to the disease predictor page
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password");
    }
});
