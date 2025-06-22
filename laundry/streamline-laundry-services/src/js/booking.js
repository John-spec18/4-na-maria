// This file manages the booking process, including selecting services, scheduling, and submitting the booking.

document.addEventListener('DOMContentLoaded', function() {
    const serviceSelect = document.getElementById('service-select');
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');
    const bookingForm = document.getElementById('booking-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Populate service options
    const services = [
        { id: 1, name: 'Wash and Dry', price: 170 },
        { id: 2, name: 'Wash Dry and Fold', price: 220 },
        { id: 3, name: 'Wash', price: 120}
    ];

    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.id;
        option.textContent = `${service.name} - $${service.price}`;
        serviceSelect.appendChild(option);
    });

    // Handle form submission
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedService = serviceSelect.options[serviceSelect.selectedIndex].text;
        const selectedDate = dateInput.value;
        const selectedTime = timeInput.value;

        if (selectedDate && selectedTime) {
            confirmationMessage.textContent = `Booking confirmed for ${selectedService} on ${selectedDate} at ${selectedTime}.`;
            confirmationMessage.style.display = 'block';
            bookingForm.reset();
        } else {
            confirmationMessage.textContent = 'Please select a date and time.';
            confirmationMessage.style.display = 'block';
        }
    });
});