window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    // Autenticación placeholder
    window.location.href = '../html/index.html';
  });
});