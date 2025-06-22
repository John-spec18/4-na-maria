document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submit');
    const messageContainer = document.getElementById('message');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            sendResetInstructions(email);
        } else {
            displayMessage('Please enter a valid email address.', 'error');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function sendResetInstructions(email) {
        // Simulate sending reset instructions
        setTimeout(() => {
            displayMessage('Reset instructions have been sent to ' + email, 'success');
            emailInput.value = ''; // Clear the input field
        }, 1000);
    }

    function displayMessage(message, type) {
        messageContainer.textContent = message;
        messageContainer.className = type; // 'success' or 'error'
    }
});