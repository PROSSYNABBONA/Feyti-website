// Contact form validation and alert
const contactForm = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        if (!name.value || !email.value || !message.value) {
            formAlert.innerHTML = '<div class="alert alert-danger">Please fill in all fields.</div>';
            contactForm.classList.add('shake');
            setTimeout(() => contactForm.classList.remove('shake'), 500);
            return;
        }
        formAlert.innerHTML = '<div class="alert alert-success">Thank you for contacting us! We will get back to you soon.</div>';
        contactForm.reset();
    });
}

// Newsletter form validation and alert
const newsletterForm = document.getElementById('newsletterForm');
const newsletterAlert = document.getElementById('newsletterAlert');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail');
        if (!email.value) {
            newsletterAlert.innerHTML = '<div class="alert alert-danger">Please enter your email.</div>';
            newsletterForm.classList.add('shake');
            setTimeout(() => newsletterForm.classList.remove('shake'), 500);
            return;
        }
        newsletterAlert.innerHTML = '<div class="alert alert-success">You have subscribed to our newsletter!</div>';
        newsletterForm.reset();
    });
}

// Newsletter form on home page
const newsletterFormHome = document.getElementById('newsletterFormHome');
const newsletterAlertHome = document.getElementById('newsletterAlertHome');
if (newsletterFormHome) {
    newsletterFormHome.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('newsletterEmailHome');
        if (!email.value) {
            newsletterAlertHome.innerHTML = '<div class="alert alert-danger">Please enter your email.</div>';
            newsletterFormHome.classList.add('shake');
            setTimeout(() => newsletterFormHome.classList.remove('shake'), 500);
            return;
        }
        newsletterAlertHome.innerHTML = '<div class="alert alert-success">You have subscribed to our newsletter!</div>';
        newsletterFormHome.reset();
    });
}

// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Animate hero text on load
window.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero h1');
    if (hero) {
        hero.style.opacity = 0;
        hero.style.transform = 'translateY(40px)';
        setTimeout(() => {
            hero.style.transition = 'all 1s cubic-bezier(.4,2,.3,1)';
            hero.style.opacity = 1;
            hero.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Card hover effect (lift up)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.03)';
        card.style.boxShadow = '0 8px 32px rgba(33, 150, 83, 0.15)';
        card.style.transition = 'all 0.3s';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
    });
});
