// Contact Form: Open email client with form data
(function() {
    const form = document.querySelector('.contact-us form');
    if (!form) return;

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

        // Recipient email (as requested)
        const recipient = 'johannesvihavainen@outlook.com';

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Optional feedback
        alert('Your email client will open. Please send the message from there.');
    });
})();