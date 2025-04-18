document.addEventListener('DOMContentLoaded', () => {
    // Lightbox
    const lb = document.getElementById('lightbox'),
          img = document.getElementById('lightboxImg');
  
    if (lb && img) {
      document.querySelectorAll('img.img-fluid, img.facility-img, img.vision-mission-img, img.activity-img, img.result-image').forEach(i => {
        i.style.cursor = 'zoom-in';
        i.onclick = () => {
          sessionStorage.setItem('scrollY', window.scrollY);
          img.src = i.src;
          lb.classList.remove('d-none');
        };
      });
  
      lb.onclick = () => {
        lb.classList.add('d-none');
        img.src = '';
        history.back();
      };
    }
  
    // Scroll restore
    const y = sessionStorage.getItem('scrollY');
    if (y) {
      window.scrollTo(0, +y);
      sessionStorage.removeItem('scrollY');
    }
  });
  