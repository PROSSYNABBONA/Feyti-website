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

// Animate about page hero title on load
if (window.location.pathname.endsWith('about.html')) {
    const aboutHero = document.getElementById('about-hero-title');
    if (aboutHero) {
        aboutHero.style.opacity = 0;
        aboutHero.style.transform = 'translateY(40px)';
        setTimeout(() => {
            aboutHero.style.transition = 'all 1s cubic-bezier(.4,2,.3,1)';
            aboutHero.style.opacity = 1;
            aboutHero.style.transform = 'translateY(0)';
        }, 300);
    }
}

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

// Why Choose Feyti dynamic features with slide-up animation
const whyChooseFeatures = document.getElementById('why-choose-features');
if (whyChooseFeatures) {
    const features = [
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#198754" class="bi bi-cpu me-2" viewBox="0 0 16 16"><path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h.5A2.5 2.5 0 0 1 13 4.5V5h1.5a.5.5 0 0 1 0 1H13v1h1.5a.5.5 0 0 1 0 1H13v1h1.5a.5.5 0 0 1 0 1H13v.5A2.5 2.5 0 0 1 10.5 13H10v1.5a.5.5 0 0 1-1 0V13H8v1.5a.5.5 0 0 1-1 0V13H6v1.5a.5.5 0 0 1-1 0V13h-.5A2.5 2.5 0 0 1 3 10.5V10H1.5a.5.5 0 0 1 0-1H3V8H1.5a.5.5 0 0 1 0-1H3V6H1.5a.5.5 0 0 1 0-1H3v-.5A2.5 2.5 0 0 1 5.5 2H6V.5A.5.5 0 0 1 5 0zm1 3A1.5 1.5 0 0 0 4.5 4.5v7A1.5 1.5 0 0 0 6 13h4a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 10 3H6z"/></svg>',
            title: 'AI & Automation in Drug Safety',
            desc: 'We leverage artificial intelligence and automation to enhance drug safety monitoring and reporting.'
        },
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#198754" class="bi bi-globe2 me-2" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0 0 14A7 7 0 0 0 8 1z"/><path d="M8 1a7 7 0 0 0 0 14A7 7 0 0 0 8 1z"/></svg>',
            title: 'Global Clinical Research',
            desc: 'Our team partners with organizations worldwide to deliver innovative, data-driven clinical research.'
        },
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#198754" class="bi bi-file-earmark-check me-2" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3.646 4.646a.5.5 0 0 0-.708 0L7.5 11.293l-1.146-1.147a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"/></svg>',
            title: 'Regulatory Consultancy',
            desc: 'Expert guidance for regulatory compliance and approvals in the healthcare and pharmaceutical sectors.'
        },
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#198754" class="bi bi-pencil-square me-2" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706l-1 1a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 0-.707l1-1a.5.5 0 0 1 .708 0l1 1zm-1.75 2.456-1-1L4.939 11.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l7.813-7.813z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-7a.5.5 0 0 0-1 0v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>',
            title: 'Medical Writing & Editing',
            desc: 'Professional writing and editing services for scientific and medical documents.'
        }
    ];
    whyChooseFeatures.innerHTML = features.map((f, i) => `
        <div class="col-12 col-md-6 d-flex align-items-start why-choose-feature" style="opacity:0;transform:translateY(60px);transition:all 0.7s cubic-bezier(.4,2,.3,1) ${i * 120}ms;">
            <div class="me-3">${f.icon}</div>
            <div>
                <h5 class="mb-1 text-success">${f.title}</h5>
                <p class="mb-2 small">${f.desc}</p>
            </div>
        </div>
    `).join('');
    // Animate features on scroll into view
    function animateWhyChooseFeatures() {
        const elements = whyChooseFeatures.querySelectorAll('.why-choose-feature');
        const windowHeight = window.innerHeight;
        elements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < windowHeight - 40) {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            }
        });
    }
    window.addEventListener('scroll', animateWhyChooseFeatures);
    setTimeout(animateWhyChooseFeatures, 200); // initial check
}

// Interactive Testimonials Section
const testimonials = [
    {
        text: `"Feyti Medical Group's expertise in clinical research and regulatory affairs helped us launch our product faster and with confidence."`,
        author: '— Dr. Jane, Pharma CEO'
    },
    {
        text: `"Their AI-powered pharmacovigilance solutions are a game changer for our safety monitoring."`,
        author: '— Mr. Okello, Clinical Manager'
    },
    {
        text: `"The team at Feyti is responsive, knowledgeable, and truly cares about our success."`,
        author: '— Ms. Amina, Research Director'
    },
    {
        text: `"We trust Feyti Medical Group for all our regulatory and compliance needs."`,
        author: '— Dr. Samuel, Hospital Administrator'
    }
];
let testimonialIndex = 0;
const testimonialText = document.getElementById('testimonial-text');
const testimonialAuthor = document.getElementById('testimonial-author');
const testimonialPrev = document.getElementById('testimonial-prev');
const testimonialNext = document.getElementById('testimonial-next');
const testimonialCard = document.getElementById('testimonial-card');

function showTestimonial(idx) {
    if (!testimonialText || !testimonialAuthor) return;
    testimonialCard.classList.remove('fade-in');
    setTimeout(() => {
        testimonialText.textContent = testimonials[idx].text;
        testimonialAuthor.textContent = testimonials[idx].author;
        testimonialCard.classList.add('fade-in');
    }, 150);
}
if (testimonialPrev && testimonialNext) {
    testimonialPrev.addEventListener('click', () => {
        testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(testimonialIndex);
    });
    testimonialNext.addEventListener('click', () => {
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        showTestimonial(testimonialIndex);
    });
}
// Add fade-in animation CSS
if (testimonialCard) {
    const style = document.createElement('style');
    style.innerHTML = `.fade-in {animation: fadeInTestimonial 0.5s;}
    @keyframes fadeInTestimonial {from {opacity: 0;} to {opacity: 1;}}`;
    document.head.appendChild(style);
    testimonialCard.classList.add('fade-in');
}

// About page section reveal animation
function revealOnScroll(selector, animation = 'fadeInUp') {
    const elements = document.querySelectorAll(selector);
    function reveal() {
        const windowHeight = window.innerHeight;
        elements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < windowHeight - 60) {
                el.classList.add('animated', animation);
            }
        });
    }
    window.addEventListener('scroll', reveal);
    reveal();
}
if (window.location.pathname.endsWith('about.html')) {
    // Add animation classes to about page sections
    const style = document.createElement('style');
    style.innerHTML = `
    .animated {opacity:1;transition:all 0.8s cubic-bezier(.4,2,.3,1);}
    .fadeInUp {opacity:0;transform:translateY(40px);}
    .animated.fadeInUp {opacity:1;transform:translateY(0);}
    #vision-box, #mission-box, #market-box, #ai-journey-box, #milestones-box, #impact-box, #commitment-box {opacity:0;}
    `;
    document.head.appendChild(style);
    revealOnScroll('#vision-box, #mission-box, #market-box, #ai-journey-box, #milestones-box, #impact-box, #commitment-box');
}
