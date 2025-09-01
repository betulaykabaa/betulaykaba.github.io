/* ===================================
   BETÜLAY KABA PORTFOLIO - SCRIPT.JS
   =================================== */

// === DOM ELEMENTS === 
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const typewriter = document.getElementById('typewriter');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const hiddenDrone = document.getElementById('hiddenDrone');
const coffeeCard = document.getElementById('coffeeCard');

// === LOADING SCREEN === 
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.display = 'none';
        document.body.style.overflow = 'visible';
    }, 2000);
});

// === NAVBAR SCROLL EFFECT === 
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for navbar styling
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Parallax effect for background
    const parallax = document.querySelector('.bg-animation');
    if (parallax) {
        parallax.style.transform = `translateY(${currentScroll * 0.5}px)`;
    }
    
    lastScroll = currentScroll;
});

// === MOBILE MENU === 
mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu-item').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// === TYPEWRITER EFFECT === 
const phrases = [
    "Biyomedikal Mühendisi 🧬",
    "Kalite Yönetim Uzmanı 📋",
    "MDR Regülasyon Eksperi 📑",
    "3 Projede Ekip Lideri 👑",
    "ISO 9001 İç Denetçi ✅"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Start typewriter effect
typeEffect();

// === SMOOTH SCROLLING === 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// === STATS COUNTER ANIMATION === 
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

// Stats counter
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                if (target) {
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target + '+';
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + '+';
                        }
                    }, 30);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe stats section
const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// === SKILLS PROGRESS ANIMATION === 
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, index) => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, index * 100);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// === PROJECT CARDS INTERACTION === 
function toggleProjectDetail(projectId) {
    const detail = document.getElementById(projectId + '-detail');
    const card = detail.parentElement;
    const allDetails = document.querySelectorAll('.project-detail');
    const allCards = document.querySelectorAll('.project-card');
    
    // Close all other details
    allDetails.forEach(d => {
        if (d.id !== projectId + '-detail') {
            d.classList.remove('active');
        }
    });
    
    allCards.forEach(c => {
        if (c !== card) {
            c.classList.remove('expanded');
        }
    });
    
    // Toggle current detail
    detail.classList.toggle('active');
    card.classList.toggle('expanded');
}

// Add click event to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't toggle if clicking on the coming soon card
        if (this.classList.contains('coming-soon')) {
            alert('Yakında yeni projelerle karşınızda olacağım! 🚀');
            return;
        }
        
        const projectId = this.getAttribute('data-project');
        if (projectId) {
            toggleProjectDetail(projectId);
        }
    });
});

// === FADE IN ANIMATION ON SCROLL === 
const fadeElements = document.querySelectorAll('.timeline-item, .project-card, .skill-item, .cert-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    element.classList.add('fade-in');
    fadeObserver.observe(element);
});

// === EASTER EGGS === 

// Hidden Drone Click
hiddenDrone.addEventListener('click', () => {
    alert('🎉 Gizli Drone\'u Buldun! 3 projede ekip liderliği yapan bir mühendisim! 🚁');
    
    // Make the drone fly away
    hiddenDrone.style.animation = 'flyAway 2s ease-out forwards';
    setTimeout(() => {
        hiddenDrone.style.animation = 'fly 5s ease-in-out infinite';
    }, 2000);
});

// Coffee Card Click
coffeeCard.addEventListener('click', () => {
    alert('☕ Kahve davetiniz için betulaykaba.work@gmail.com adresine mail atabilirsiniz!');
});

// Konami Code Easter Egg
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateKonamiCode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateKonamiCode() {
    document.body.style.animation = 'rotate 2s linear';
    
    // Create confetti effect
    createConfetti();
    
    setTimeout(() => {
        alert('🎮 Konami Code Activated! You found the secret! 🎉\n\nYou\'re now a certified portfolio explorer!');
        document.body.style.animation = '';
    }, 2000);
}

// === CONFETTI EFFECT === 
function createConfetti() {
    const colors = ['#FF6B35', '#0080FF', '#FFD700', '#FF1493', '#00CED1'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            top: -10px;
            opacity: ${Math.random()};
            transform: rotate(${Math.random() * 360}deg);
            animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
            z-index: 9999;
        `;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Add confetti animation to head if not exists
if (!document.querySelector('#confetti-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-style';
    style.textContent = `
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        @keyframes flyAway {
            to {
                transform: translate(200px, -500px) rotate(360deg);
                opacity: 0;
            }
        }
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// === DYNAMIC YEAR === 
const yearElements = document.querySelectorAll('.current-year');
const currentYear = new Date().getFullYear();
yearElements.forEach(element => {
    element.textContent = currentYear;
});

// === PERFORMANCE OPTIMIZATION === 
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScroll = debounce(() => {
    // Handle any scroll-based animations here
}, 100);

window.addEventListener('scroll', optimizedScroll);

// === ANALYTICS EVENTS (Optional) === 
// Track project card clicks
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectTitle = card.querySelector('.project-title')?.textContent;
        console.log('Project viewed:', projectTitle);
        // Add your analytics tracking here
        // gtag('event', 'project_view', { project_name: projectTitle });
    });
});

// Track contact card clicks
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('click', () => {
        const contactMethod = card.querySelector('.contact-title')?.textContent;
        console.log('Contact method clicked:', contactMethod);
        // Add your analytics tracking here
        // gtag('event', 'contact_click', { method: contactMethod });
    });
});

// === FORM HANDLING (for future contact form) === 
function handleContactForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    // Add your form submission logic here
    
    alert('Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım. 📧');
    event.target.reset();
}

// === LAZY LOADING IMAGES (for future implementation) === 
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// === INITIALIZE === 
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Betülay Kaba Portfolio - Ready!');
    console.log('💡 Hint: Try the Konami Code! (↑↑↓↓←→←→BA)');
});
