document.addEventListener('DOMContentLoaded', () => {

    // Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Newsletter Popup
    const newsletterModal = document.getElementById('newsletter-modal');
    const closeModal = document.getElementById('close-modal');
    const newsletterForm = document.getElementById('newsletter-form');

    // Show modal after 5 seconds if not already seen
    if (!localStorage.getItem('newsletter_seen')) {
        setTimeout(() => {
            newsletterModal.style.display = 'flex';
        }, 5000);
    }

    closeModal.addEventListener('click', () => {
        newsletterModal.style.display = 'none';
        localStorage.setItem('newsletter_seen', 'true');
    });

    newsletterModal.addEventListener('click', (e) => {
        if (e.target === newsletterModal) {
            newsletterModal.style.display = 'none';
            localStorage.setItem('newsletter_seen', 'true');
        }
    });

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Merci pour votre inscription ! Vous recevrez bientôt nos actualités.');
        newsletterModal.style.display = 'none';
        localStorage.setItem('newsletter_seen', 'true');
    });

    // Scroll Reveal Animation (Simple)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation styles to elements we want to animate
    const animatedElements = document.querySelectorAll('.product-card, .section-title, .section-subtitle, p');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // WhatsApp Order Functionality
    const whatsappButtons = document.querySelectorAll('.js-whatsapp-order');
    const phoneNumber = '221785970085';

    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productName = btn.getAttribute('data-product');
            const message = `Bonjour AMKO Parfumerie, je souhaite commander le produit : ${productName}`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    });
});
