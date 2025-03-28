document.addEventListener('DOMContentLoaded', () => {
    // Referencias al menú y overlay
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
  
    // Abrir sidebar
    menuToggle.addEventListener('click', () => {
      sidebar.classList.add('open');
      overlay.classList.add('open');
    });
  
    // Cerrar sidebar al hacer clic en el overlay
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  
    // Carrusel
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      const slides = carousel.querySelectorAll('.slide');
      let currentSlide = 0;
      const totalSlides = slides.length;
      const nextBtn = document.getElementById('nextBtn');
      const prevBtn = document.getElementById('prevBtn');
  
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.classList.remove('active');
          if (i === index) slide.classList.add('active');
        });
      }
  
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          currentSlide = (currentSlide + 1) % totalSlides;
          showSlide(currentSlide);
        });
      }
  
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
          showSlide(currentSlide);
        });
      }
  
      // Cambio automático cada 5 segundos (opcional)
      setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
      }, 5000);
    }
  });
  