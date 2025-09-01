/* =====================================
   BETÜLAY KABA - PROFESSIONAL PORTFOLIO
   JavaScript with Fixed Click Events
   ===================================== */

// === GLOBAL VARIABLES ===
let isScrolling = false;
let lastScrollTop = 0;

// === DOM CONTENT LOADED ===
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initPreloader();
    initNavigation();
    initTypewriter();
    initScrollEffects();
    initAnimations();
    initProjects();
    initSkills();
    initContactForm();
    initBackToTop();
    initAOS();
    
    console.log('✅ Portfolio initialized successfully!');
});

// === PRELOADER ===
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('hide');
                document.body.style.overflow = 'visible';
            }, 800);
        });
    }
}

// === NAVIGATION ===
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Hamburger menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

// === TYPEWRITER EFFECT ===
function initTypewriter() {
    const typedText = document.getElementById('typed-text');
    if (!typedText) return;
    
    const roles = [
        'Biyomedikal Mühendis',
        'Kalite Yönetim Uzmanı',
        'MDR Regülasyon Eksperi',
        'ISO 9001 İç Denetçi',
        'Ürün ve Kalite Müdürü'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typedText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before new word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// === SCROLL EFFECTS ===
function initScrollEffects() {
    const progressBar = document.getElementById('progressBar');
    
    window.addEventListener('scroll', () => {
        // Update progress bar
        if (progressBar) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollProgress + '%';
        }
    });
}

// === ANIMATIONS ===
function initAnimations() {
    // Animate stats numbers
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-count'));
                    if (target) {
                        animateNumber(stat, target);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe stats section
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// === NUMBER ANIMATION ===
function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// === PROJECTS ===
function initProjects() {
    // Make project buttons work
    window.openProjectModal = function(projectId) {
        const modal = document.getElementById('projectModal');
        const modalContent = document.getElementById('modalContent');
        
        if (!modal || !modalContent) return;
        
        // Project details data
        const projectDetails = {
            drone: {
                title: 'Otonom Kargo Drone',
                year: '2022',
                description: `
                    <h3>🚁 Proje Detayları</h3>
                    <p><strong>Otonom Kargo Taşımacılığı Projesi</strong></p>
                    <h4>📋 Özellikler:</h4>
                    <ul>
                        <li>✅ Önceden belirlenmiş rota optimizasyonu</li>
                        <li>✅ Maksimum yük kapasitesi: 3000 gram</li>
                        <li>✅ Kargo taşımacılığı için özel tasarım</li>
                        <li>✅ Otonom navigasyon sistemi</li>
                        <li>✅ Gerçek zamanlı konum takibi</li>
                        <li>✅ Güvenli iniş ve kalkış protokolleri</li>
                    </ul>
                    <h4>🔧 Teknolojiler:</h4>
                    <p>Python ile rota optimizasyonu algoritmaları, MATLAB ile simülasyonlar, 
                    makine öğrenmesi ile engel tespiti ve kaçınma sistemleri.</p>
                    <h4>💡 İnovasyon:</h4>
                    <p>Kentsel alanlarda hızlı ve verimli teslimat için tasarlanan bu sistem, 
                    lojistik sektöründe devrim yaratmayı hedefliyor.</p>
                `
            },
            sleep: {
                title: 'Uyku Evresi Sınıflandırma',
                year: '2021',
                description: `
                    <h3>😴 Bitirme Projesi</h3>
                    <p><strong>Makine Öğrenmesi ile Uyku Analizi</strong></p>
                    <h4>📊 Veri İşleme:</h4>
                    <ul>
                        <li>✅ Physiobank ATM veritabanından EEG/EMG sinyalleri</li>
                        <li>✅ 9 saatlik kayıt, 1079 epoch</li>
                        <li>✅ Zaman ve frekans domeninde özellik çıkarımı</li>
                        <li>✅ KNN algoritması ile sınıflandırma</li>
                        <li>✅ %92 doğruluk oranı</li>
                    </ul>
                    <h4>🎯 Başarı:</h4>
                    <p>Yüksek accuracy ile uyku laboratuvarlarında kullanılabilir düzeyde 
                    bir sistem geliştirildi. Uyku bozukluklarının tespitinde önemli katkı sağlıyor.</p>
                `
            },
            uav: {
                title: 'Çok Amaçlı İHA',
                year: 'TEKNOFEST 2020',
                description: `
                    <h3>🚁 TÜBİTAK Destekli Proje</h3>
                    <p><strong>TEKNOFEST Uluslararası İHA Yarışması</strong></p>
                    <h4>🏆 Başarılar:</h4>
                    <ul>
                        <li>✅ TÜBİTAK Uluslararası İnsansız Hava Aracı Yarışması</li>
                        <li>✅ Ekip kaptanı olarak proje liderliği</li>
                        <li>✅ Su taşıma görevini başarıyla gerçekleştirme</li>
                        <li>✅ Otonom uçuş ve hassas manevra kabiliyeti</li>
                        <li>✅ TEKNOFEST 2020'de başarılı performans</li>
                    </ul>
                    <h4>👥 Liderlik Deneyimi:</h4>
                    <p>Üniversite takımının kaptanı olarak tüm proje yaşam döngüsünü yönettim. 
                    15 kişilik ekibin koordinasyonunu sağladım.</p>
                `
            },
            sumo: {
                title: 'Sumo Yarışma Robotu',
                year: '2018',
                description: `
                    <h3>🤖 Yarışma Robotu Projesi</h3>
                    <p><strong>Rekabetçi Sumo Robot Tasarımı</strong></p>
                    <h4>⚙️ Teknik Özellikler:</h4>
                    <ul>
                        <li>✅ Arduino Mega mikrodenetleyici</li>
                        <li>✅ 3D printer ile üretilen dayanıklı şasi</li>
                        <li>✅ QTR sensörleri ile hassas çizgi algılama</li>
                        <li>✅ HC-SR04 ultrasonik sensörler (360° kapsama)</li>
                        <li>✅ Yüksek torklu DC motorlar</li>
                        <li>✅ Stratejik algoritma geliştirme</li>
                    </ul>
                    <h4>🏆 Başarı:</h4>
                    <p>Üniversite robot yarışmasında finale kalan tasarım! 
                    Agresif strateji ve dayanıklı mekanik yapı ile rakiplerini yendi.</p>
                `
            },
            power: {
                title: 'Ayarlanabilir Güç Kaynağı',
                year: '2017',
                description: `
                    <h3>⚡ Elektronik Laboratuvar Projesi</h3>
                    <p><strong>0-30V Değişken Voltaj Sistemi</strong></p>
                    <h4>🔌 Ana Bileşenler:</h4>
                    <ul>
                        <li>✅ Transformatör: 220V AC → 24V AC</li>
                        <li>✅ Köprü Diyot: AC → DC dönüşüm</li>
                        <li>✅ Filtre Kapasitörü (2200μF)</li>
                        <li>✅ LM317 Voltaj Regülatör</li>
                        <li>✅ 10-turn Potansiyometre</li>
                        <li>✅ Dijital Voltmetre</li>
                    </ul>
                    <h4>✨ Özellikler:</h4>
                    <p>Kısa devre koruması, aşırı akım koruması, %1'den düşük ripple oranı. 
                    Elektronik devreler için güvenilir test ortamı sağlıyor.</p>
                `
            }
        };
        
        // Set modal content
        const project = projectDetails[projectId];
        if (project) {
            modalContent.innerHTML = `
                <h2>${project.title}</h2>
                <span class="project-year">${project.year}</span>
                ${project.description}
            `;
            
            // Show modal
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    };
    
    // Close modal function
    window.closeProjectModal = function() {
        const modal = document.getElementById('projectModal');
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'visible';
        }
    };
    
    // Close modal when clicking outside
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
}

// === SKILLS ANIMATION ===
function initSkills() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
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
}

// === CONTACT FORM ===
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const mailtoLink = `mailto:betulaykaba.work@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Ad: ${name}\nEmail: ${email}\n\nMesaj:\n${message}`)}`;
            
            // Open mail client
            window.location.href = mailtoLink;
            
            // Reset form
            contactForm.reset();
            
            // Show success message (optional)
            showNotification('Mesajınız için teşekkürler! En kısa sürede dönüş yapacağım.');
        });
    }
}

// === NOTIFICATION ===
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideInRight 0.5s ease;
        z-index: 3000;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// === BACK TO TOP ===
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        // Show/hide button based on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        // Scroll to top when clicked
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// === AOS INITIALIZATION ===
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }
}

// === PARALLAX EFFECT ===
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.animated-shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const xPos = (x - 0.5) * speed;
        const yPos = (y - 0.5) * speed;
        
        shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// === SMOOTH REVEAL ON SCROLL ===
const revealElements = document.querySelectorAll('.fade-in-up');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
    revealObserver.observe(element);
});

// === KEYBOARD NAVIGATION ===
document.addEventListener('keydown', (e) => {
    // Press '1-6' to navigate sections
    const sections = ['#home', '#about', '#experience', '#projects', '#skills', '#contact'];
    const key = parseInt(e.key);
    
    if (key >= 1 && key <= 6) {
        const target = document.querySelector(sections[key - 1]);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// === PERFORMANCE OPTIMIZATION ===
// Debounce function
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

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// === EASTER EGG ===
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s linear infinite';
    showNotification('🎉 Gizli özelliği buldunuz! Tebrikler! 🎉');
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

// === RAINBOW ANIMATION FOR EASTER EGG ===
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// === ERROR HANDLING ===
window.addEventListener('error', (e) => {
    console.error('Bir hata oluştu:', e.error);
});

// === PAGE VISIBILITY API ===
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = 'Geri dönün! - Betülay Kaba';
    } else {
        document.title = 'Betülay Kaba | Biyomedikal Mühendisi & Kalite Yönetim Uzmanı';
    }
});

console.log('🚀 Betülay Kaba Portfolio - v2.0 Professional');
console.log('💻 Developed with passion and precision');
console.log('📧 Contact: betulaykaba.work@gmail.com');