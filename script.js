// Initialize WOW.js for animations
new WOW().init();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Update URL without jumping
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                window.location.hash = targetId;
            }
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Testimonial carousel interval
const testimonialCarousel = document.getElementById('testimonialCarousel');
if (testimonialCarousel) {
    const carousel = new bootstrap.Carousel(testimonialCarousel, {
        interval: 5000,
        pause: 'hover'
    });
}

// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
document.querySelectorAll('.card-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
// Initialize AOS (Animate On Scroll)
// Initialize AOS with smooth settings
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out-sine',
        mirror: false
    });

    // Add hover flip effect
    document.querySelectorAll('.single-features').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'perspective(1000px) rotateY(10deg)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});
document.querySelectorAll('.single-features').forEach(card => {
    let timeout;

    const flipWithFade = () => {
        card.classList.remove('flipped');
        card.classList.add('touch-active');

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            card.classList.remove('touch-active');
            card.classList.add('flipped');
        }, 400); // Match fadeBlue duration
    };

    // For mouse hover
    card.addEventListener('mouseenter', flipWithFade);

    // For touch on mobile
    card.addEventListener('touchstart', flipWithFade);
});

// Flip + Fade Animation Trigger
document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.flip-fade-box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay * 1000);
            }
        });
    }, { 
        threshold: 0.25,
        rootMargin: '0px 0px -100px 0px' 
    });

    boxes.forEach(box => observer.observe(box));
});
