
(function() {
  emailjs.init("YOUR CLIENT ID");
})();

document.addEventListener('DOMContentLoaded', function() {
 

 
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

    
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

     
      emailjs.send("YOUR SERVICE ID", "YOUR TEMPLATE ID", {
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

  
});
