// Initialize EmailJS with your user ID
(function() {
  emailjs.init("Gvu3f2O--F1lmsHNL");
})();

document.addEventListener('DOMContentLoaded', function() {
  // ... other code ...

  // Form submission with EmailJS
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Send email using EmailJS
      emailjs.send("service_0crihzk", "template_lgd1t9e", {
          from_name: name,
          from_email: email,
          message: message
      })
      .then(function(response) {
          console.log("Email sent successfully", response);
          contactForm.reset();
          successMessage.classList.remove('hidden');
          setTimeout(() => {
              successMessage.classList.add('hidden');
          }, 5000);
      }, function(error) {
          console.log("Failed to send email", error);
          alert("Failed to send email. Please try again later.");
      });
  });

  // ... rest of your code ...
});