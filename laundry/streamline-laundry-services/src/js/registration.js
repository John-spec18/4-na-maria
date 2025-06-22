// This file contains the logic for the registration page, including form validation and user registration submission.

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorMessage = document.getElementById('error-message');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        errorMessage.textContent = '';

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (!username || !email || !password || !confirmPassword) {
            errorMessage.textContent = 'All fields are required.';
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match.';
            return;
        }

        // Simulate a registration process
        const userData = {
            username: username,
            email: email,
            password: password
        };

        console.log('User registered:', userData);
        alert('Registration successful! You can now log in.');
        registrationForm.reset();
    });
});