const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Fetch form data
    const formData = new FormData(loginForm);

    // You can access form values using formData.get('field_name')
    const username = formData.get('username');
    const password = formData.get('password');

    // Now you can send this data to your server for authentication or perform other actions
    // Example: Send the data to the server via an API

    // Replace this with your actual login logic
    console.log("Login data:", {
        username,
        password,
    });

    // Clear the form or redirect the user as needed
    loginForm.reset();
});
