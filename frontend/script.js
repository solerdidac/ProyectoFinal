document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos el icono de hamburguesa y la lista de enlaces
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Al hacer clic en el ícono, se despliega o se oculta el menú
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
