// This file generates and displays the invoice for completed bookings, including itemized charges and payment details.

document.addEventListener('DOMContentLoaded', function() {
    const invoiceData = JSON.parse(localStorage.getItem('invoiceData')) || {};
    const invoiceContainer = document.getElementById('invoice-container');

    if (invoiceData) {
        displayInvoice(invoiceData);
    } else {
        invoiceContainer.innerHTML = '<p>No invoice data available.</p>';
    }

    function displayInvoice(data) {
        const { bookingId, services, totalAmount, paymentStatus } = data;

        let servicesList = '';
        services.forEach(service => {
            servicesList += `<li>${service.name}: $${service.price}</li>`;
        });

        invoiceContainer.innerHTML = `
            <h1>Invoice</h1>
            <p>Booking ID: ${bookingId}</p>
            <h2>Services</h2>
            <ul>${servicesList}</ul>
            <h2>Total Amount: $${totalAmount}</h2>
            <p>Payment Status: ${paymentStatus}</p>
        `;
    }
});