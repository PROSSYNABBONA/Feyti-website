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

// Newsletter page dynamic content
if (window.location.pathname.endsWith('newsletter.html')) {
  // Newsletter Archive
  const archive = [
    {title: 'May 2025: AI in Drug Safety', link: '#', summary: 'How AI is transforming pharmacovigilance.'},
    {title: 'April 2025: Clinical Trials Trends', link: '#', summary: 'Latest trends in global clinical research.'},
    {title: 'March 2025: Regulatory Updates', link: '#', summary: 'Key compliance changes for 2025.'}
  ];
  const archiveDiv = document.getElementById('newsletter-archive');
  if (archiveDiv) {
    archiveDiv.innerHTML = archive.map(a => `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-success">${a.title}</h5>
            <p class="card-text small">${a.summary}</p>
            <a href="${a.link}" class="btn btn-outline-success btn-sm">Read</a>
          </div>
        </div>
      </div>
    `).join('');
  }
  // Featured Articles
  const articles = [
    {title: 'AI for Faster Trials', desc: 'How Feyti uses AI to accelerate clinical research.', link: '#'},
    {title: 'Patient Safety First', desc: 'Best practices in adverse event reporting.', link: '#'}
  ];
  const articlesDiv = document.getElementById('featured-articles');
  if (articlesDiv) {
    articlesDiv.innerHTML = articles.map(a => `
      <div class="col-md-6">
        <div class="card h-100 border-success">
          <div class="card-body">
            <h5 class="card-title text-success">${a.title}</h5>
            <p class="card-text">${a.desc}</p>
            <a href="${a.link}" class="btn btn-success btn-sm">Read More</a>
          </div>
        </div>
      </div>
    `).join('');
  }
  // Upcoming Events
  const events = [
    {date: 'July 2025', name: 'Feyti Webinar: AI in Compliance', desc: 'Join our experts for a live session.'},
    {date: 'August 2025', name: 'Clinical Research Summit', desc: 'Meet us in Nairobi for Africa’s top research event.'}
  ];
  const eventsDiv = document.getElementById('upcoming-events');
  if (eventsDiv) {
    eventsDiv.innerHTML = events.map(e => `
      <div class="col-md-6">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <div class="text-success fw-bold mb-2">${e.date}</div>
            <h5 class="card-title">${e.name}</h5>
            <p class="card-text">${e.desc}</p>
          </div>
        </div>
      </div>
    `).join('');
  }
  // Testimonials
  const testimonials = [
    {text: '“The Feyti newsletter keeps me updated on the latest in clinical research.”', author: '— Dr. Jane'},
    {text: '“I love the practical tips and event invites!”', author: '— Mr. Okello'}
  ];
  const testDiv = document.getElementById('newsletter-testimonials');
  if (testDiv) {
    let idx = 0;
    function showTestimonial(i) {
      testDiv.innerHTML = `
        <div class="col-md-8">
          <div class="card border-success text-center shadow-sm fade-in">
            <div class="card-body">
              <p class="card-text">${testimonials[i].text}</p>
              <h6 class="card-subtitle text-muted">${testimonials[i].author}</h6>
            </div>
          </div>
          <div class="d-flex justify-content-center gap-2 mt-2">
            <button class="btn btn-outline-success btn-sm" id="test-prev">&larr;</button>
            <button class="btn btn-outline-success btn-sm" id="test-next">&rarr;</button>
          </div>
        </div>
      `;
      setTimeout(() => testDiv.querySelector('.fade-in').classList.remove('fade-in'), 500);
      testDiv.querySelector('#test-prev').onclick = () => showTestimonial((i-1+testimonials.length)%testimonials.length);
      testDiv.querySelector('#test-next').onclick = () => showTestimonial((i+1)%testimonials.length);
    }
    showTestimonial(idx);
  }
  // Industry News
  const news = [
    {headline: 'WHO releases new PV guidelines', link: '#'},
    {headline: 'AI adoption in clinical trials up 30%', link: '#'}
  ];
  const newsDiv = document.getElementById('industry-news');
  if (newsDiv) {
    newsDiv.innerHTML = news.map(n => `
      <div class="col-md-6">
        <div class="alert alert-success d-flex align-items-center" role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-newspaper me-2" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1h13a.5.5 0 0 1 .5.5V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V1.5zm1 .5v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2H1zm2 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/></svg>
          <div><a href="${n.link}" class="text-success fw-bold" target="_blank">${n.headline}</a></div>
        </div>
      </div>
    `).join('');
  }
  // FAQ
  const faqs = [
    {q: 'How often is the newsletter sent?', a: 'Monthly, with occasional special editions.'},
    {q: 'Can I unsubscribe anytime?', a: 'Yes, every email has an unsubscribe link.'}
  ];
  const faqDiv = document.getElementById('newsletter-faq');
  if (faqDiv) {
    faqDiv.innerHTML = faqs.map((f, i) => `
      <div class="accordion-item">
        <h2 class="accordion-header" id="faq${i}">
          <button class="accordion-button${i>0?' collapsed':''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="${i===0?'true':'false'}" aria-controls="collapse${i}">
            ${f.q}
          </button>
        </h2>
        <div id="collapse${i}" class="accordion-collapse collapse${i===0?' show':''}" aria-labelledby="faq${i}" data-bs-parent="#newsletter-faq">
          <div class="accordion-body">${f.a}</div>
        </div>
      </div>
    `).join('');
  }
  // Social
  const socials = [
    {icon: 'facebook', link: 'https://www.facebook.com/Feyti256'},
    {icon: 'linkedin', link: 'https://www.linkedin.com/company/feytimedicalgroup/'},
    {icon: 'x', link: 'https://x.com/feytigroup'},
    {icon: 'youtube', link: 'https://www.youtube.com/@FeytiMedicalGroup/videos'}
  ];
  const socialDiv = document.getElementById('newsletter-social');
  if (socialDiv) {
    socialDiv.innerHTML = socials.map(s => `
      <a href="${s.link}" target="_blank" class="btn btn-outline-success d-flex align-items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${s.icon}.svg" alt="${s.icon}" width="24"> ${s.icon.charAt(0).toUpperCase()+s.icon.slice(1)}
      </a>
    `).join('');
  }
  // Poll
  const pollDiv = document.getElementById('newsletter-poll');
  if (pollDiv) {
    pollDiv.innerHTML = `
      <form id="poll-form">
        <div class="mb-2">What topic would you like to see next?</div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="pollOption" id="poll1" value="AI in Clinical Trials">
          <label class="form-check-label" for="poll1">AI in Clinical Trials</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="pollOption" id="poll2" value="Patient Safety">
          <label class="form-check-label" for="poll2">Patient Safety</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="pollOption" id="poll3" value="Regulatory Updates">
          <label class="form-check-label" for="poll3">Regulatory Updates</label>
        </div>
        <button type="submit" class="btn btn-success btn-sm mt-2">Vote</button>
        <div id="poll-result" class="mt-2"></div>
      </form>
    `;
    const pollForm = document.getElementById('poll-form');
    const pollResult = document.getElementById('poll-result');
    if (pollForm) {
      pollForm.onsubmit = function(e) {
        e.preventDefault();
        const val = pollForm.pollOption.value;
        pollResult.innerHTML = `<div class='alert alert-success'>Thank you for voting for <b>${val}</b>!</div>`;
        pollForm.querySelectorAll('input').forEach(inp => inp.disabled = true);
        pollForm.querySelector('button').disabled = true;
      };
    }
  }
  // Modal logic for all info buttons
  let modalDiv = document.getElementById('newsletter-modal');
  if (!modalDiv) {
    modalDiv = document.createElement('div');
    modalDiv.innerHTML = `
      <div class="modal fade" id="newsletter-modal" tabindex="-1" aria-labelledby="newsletterModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="newsletterModalLabel">More Info</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="newsletter-modal-body"></div>
          </div>
        </div>
      </div>`;
    document.body.appendChild(modalDiv);
  }
  const showModal = (title, body) => {
    document.getElementById('newsletterModalLabel').textContent = title;
    document.getElementById('newsletter-modal-body').innerHTML = body;
    const modal = new bootstrap.Modal(document.getElementById('newsletter-modal'));
    modal.show();
  };
  // Archive popups
  if (archiveDiv) {
    archiveDiv.querySelectorAll('.btn').forEach((btn, i) => {
      btn.onclick = e => {
        e.preventDefault();
        showModal(archive[i].title, `<p>${archive[i].summary}</p><p>Full content coming soon.</p>`);
      };
    });
  }
  // Articles popups
  if (articlesDiv) {
    articlesDiv.querySelectorAll('.btn').forEach((btn, i) => {
      btn.onclick = e => {
        e.preventDefault();
        showModal(articles[i].title, `<p>${articles[i].desc}</p><p>Full article coming soon.</p>`);
      };
    });
  }
  // Events popups
  if (eventsDiv) {
    eventsDiv.querySelectorAll('.card').forEach((card, i) => {
      card.style.cursor = 'pointer';
      card.onclick = e => {
        showModal(events[i].name, `<div class='mb-2 text-success fw-bold'>${events[i].date}</div><p>${events[i].desc}</p>`);
      };
    });
  }
}

// Dark/Light mode toggle
const toggleModeBtn = document.getElementById('toggleModeBtn');
const modeIcon = document.getElementById('modeIcon');
function setMode(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        if (modeIcon) modeIcon.className = 'fas fa-sun me-2';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        if (modeIcon) modeIcon.className = 'fas fa-moon me-2';
        localStorage.setItem('theme', 'light');
    }
}
if (toggleModeBtn) {
    toggleModeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        setMode(isDark ? 'light' : 'dark');
    });
    setMode(localStorage.getItem('theme') || 'light');
}
// Let's Chat button - show custom popup
const chatBtn = document.getElementById('chatBtn');
const chatPopup = document.getElementById('chatPopup');
const closeChatPopup = document.getElementById('closeChatPopup');
if (chatBtn && chatPopup) {
    chatBtn.addEventListener('click', () => {
        chatPopup.style.display = 'block';
        setTimeout(() => {
            chatPopup.querySelector('textarea').focus();
        }, 100);
    });
}
if (closeChatPopup && chatPopup) {
    closeChatPopup.addEventListener('click', () => {
        chatPopup.style.display = 'none';
    });
}
// Chat form submission
const chatForm = document.getElementById('chatForm');
const chatAlert = document.getElementById('chatAlert');
if (chatForm) {
    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const message = document.getElementById('chatMessage').value.trim();
        if (!message) {
            chatAlert.innerHTML = '<div class="alert alert-danger">Please enter a message.</div>';
            return;
        }
        chatAlert.innerHTML = '<div class="alert alert-success">Thank you for your message! We will get back to you soon.</div>';
        chatForm.reset();
        setTimeout(() => {
            chatAlert.innerHTML = '';
            chatPopup.style.display = 'none';
        }, 2000);
    });
}
