document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}, for reaching out to us! We will get back to you shortly.`);
        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
