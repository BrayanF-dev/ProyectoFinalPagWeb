window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Mensaje enviado. ¡Muchas gracias por contactarnos!');
    form.reset();
  });
});
