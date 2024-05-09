document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Simple validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    
    // Simulate form submission (replace this with your actual form submission code)
    setTimeout(function() {
      document.getElementById('contactForm').reset();
      document.getElementById('successMessage').style.display = 'block';
      setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
      }, 3000);
    }, 1000);
  });