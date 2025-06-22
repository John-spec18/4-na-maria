document.addEventListener('DOMContentLoaded', function() {
    const resetPasswordForm = document.getElementById('reset-password-form');
    const newPasswordInput = document.getElementById('new-password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const messageBox = document.getElementById('message-box');

    resetPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (newPassword === '' || confirmPassword === '') {
            displayMessage('Please fill in all fields.', 'error');
            return;
        }

        if (newPassword !== confirmPassword) {
            displayMessage('Passwords do not match.', 'error');
            return;
        }

        // Simulate password reset process
        resetPassword(newPassword);
    });

    function resetPassword(newPassword) {
        // Here you would typically make an API call to reset the password
        // For demonstration, we'll just simulate a successful reset
        setTimeout(() => {
            displayMessage('Password has been successfully reset!', 'success');
            resetPasswordForm.reset();
        }, 1000);
    }

    function displayMessage(message, type) {
        messageBox.textContent = message;
        messageBox.className = type === 'error' ? 'error-message' : 'success-message';
    }
});