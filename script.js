/* ===================================
   BETÜLAY KABA PORTFOLIO - SCRIPT.JS
   PROFESSIONAL VERSION
   =================================== */

// === DOM ELEMENTS === 
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const typewriter = document.getElementById('typewriter');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const coffeeCard = document.getElementById('coffeeCard');

// === LOADING SCREEN === 
window.addEventListener('load', () => {
    setTimeout(() => {
        if (loader) {
            loader.style.display = 'none';
        }
        document.body.style.overflow = 'visible';
    }, 500); // Daha hızlı yükleme
});

// Mouse Parallax Effect
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const floating = hero.querySelector('.floating');
    if (floating) {
        floating.style.transform = `translate(${mouseX * 20 - 10}px, ${mouseY * 20 - 10}px)`;
    }
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
    
    lastScroll = currentScroll;
});

// === MOBILE MENU === 
if (mobileMenuToggle && mobileMenu) {
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
}

// === TYPEWRITER EFFECT (Simplified) === 
const phrases = [
    "Biyomedikal Mühendis",
    "Kalite Yönetim Uzmanı",
    "MDR Regülasyon Eksperi",
    "ISO 9001 İç Denetçi"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typewriter) return;
    
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
        setTimeout(typeEffect, 300);
    } else {
        setTimeout(typeEffect, isDeleting ? 30 : 70);
    }
}

// Start typewriter effect
if (typewriter) {
    typeEffect();
}

// === SMOOTH SCROLLING === 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Navbar height compensation
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
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
                    const increment = target / 30;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current);
                        }
                    }, 40);
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
                }, index * 50);
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
    if (!detail) return;
    
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

// === COFFEE CARD CLICK === 
if (coffeeCard) {
    coffeeCard.addEventListener('click', () => {
        window.location.href = 'mailto:betulaykaba.work@gmail.com?subject=Kahve Sohbeti';
    });
}

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

// === LAZY LOADING IMAGES === 
const lazyImages = document.querySelectorAll('img[data-src]');
if (lazyImages.length > 0) {
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
}

// === FORM VALIDATION === 
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.length >= 10;
}

// === ACCESSIBILITY IMPROVEMENTS === 
// Keyboard navigation for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// Skip to content link
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !document.querySelector('.skip-to-content')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#home';
        skipLink.className = 'skip-to-content';
        skipLink.textContent = 'Ana içeriğe geç';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background: var(--primary);
            color: white;
            padding: 8px;
            z-index: 100;
            text-decoration: none;
        `;
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '0';
        });
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
});

// === PRINT FUNCTIONALITY === 
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// === ERROR HANDLING === 
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// === INITIALIZE === 
document.addEventListener('DOMContentLoaded', () => {
    console.log('Betülay Kaba Portfolio - Loaded Successfully');
    
    // Check for required elements
    const requiredElements = ['navbar', 'hero', 'projects', 'skills', 'contact'];
    requiredElements.forEach(id => {
        if (!document.getElementById(id) && !document.querySelector(`.${id}`)) {
            console.warn(`Required element missing: ${id}`);
        }
    });
    
    // Initialize AOS or other libraries if needed
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
});

// === COOKIE CONSENT (if needed) === 
function checkCookieConsent() {
    if (!localStorage.getItem('cookieConsent')) {
        // Show cookie consent banner if needed
    }
}

// === GOOGLE ANALYTICS (Optional) === 
// Uncomment and add your GA ID
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
*/
