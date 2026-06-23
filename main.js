// ============================================
// KALIMAS GROUP — Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initForm();
});

// Navigation scroll behavior
function initNavigation() {
    const nav = document.getElementById('nav');
    const toggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // Scroll effect on nav
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile toggle
    toggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // Close mobile menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            toggle.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}

// Scroll animations with Intersection Observer
function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.section-header, .product-info, .product-visual, ' +
        '.solution-card, .value-card, .cta-content, .cta-form-wrapper'
    );

    elements.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    elements.forEach(el => observer.observe(el));
}

// Contact form handling
function initForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Show success feedback
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '¡Mensaje enviado!';
        btn.style.background = '#059669';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
        }, 3000);

        // Log for development — replace with actual API call
        console.log('Form submitted:', data);
    });
}
