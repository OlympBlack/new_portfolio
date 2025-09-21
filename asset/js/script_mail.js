

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  sendMail();
});

function sendMail() {
  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  // 1) Silence temporaire des alert() (empêche la popup native d'EmailJS)
  const originalAlert = window.alert;
  window.alert = function(){}; // on masque toutes les alertes pendant l'envoi

  // 2) Affiche un loader propre
  Swal.fire({
    title: 'Envoi en cours…',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading()
  });

  // 3) Envoi
  emailjs.send("service_i5v5xvi", "template_0ek68rm", params)
    .then(function(response) {
      // restaure alert
      window.alert = originalAlert;
      Swal.close();

      // affichage du message
      Swal.fire({
        icon: 'success',
        title: 'Merci !',
        text: 'Je vous répondrai dans les plus brefs délais.',
        confirmButtonText: 'OK'
      });

      document.getElementById('contactForm').reset();
    })
    .catch(function(error) {
      // restaure alert
      window.alert = originalAlert;
      Swal.close();

      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Impossible d’envoyer le message. Vérifiez votre connexion et réessayez.',
        confirmButtonText: 'OK'
      });
      console.error('EmailJS error:', error);
    });
}
