// Contact Form: Open email client with form data (works on contact-us.html)
(function() {
    // Select the form inside the contact-us section (supports multiple classes)
    const form = document.querySelector('.contact-us form, .contact-us-2 form');
    if (!form) {
        console.log('Contact form not found on this page.');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Stop page reload

        // Get form values
        const name = form.querySelector('input[placeholder="Name"]')?.value.trim() || '';
        const email = form.querySelector('input[placeholder="Email"]')?.value.trim() || '';
        const message = form.querySelector('textarea')?.value.trim() || '';

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields before sending.');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address.');
            return;
        }

        // Build the email body
        const subject = `Contact from ${name}`;
        const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${encodeURIComponent(message)}`;

        // Recipient email (Johannes)
        const recipient = 'johannesvihavainen@outlook.com';

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Optional: show success message
        alert('Your email client will open. Please send the message from there.');

        // Optional: reset the form after sending (uncomment if desired)
        // form.reset();
    });
})();