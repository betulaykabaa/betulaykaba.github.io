/* =====================================
   BETÜLAY KABA - PROFESSIONAL PORTFOLIO
   JavaScript with Fixed Click Events
   ===================================== */

// === GLOBAL VARIABLES ===
let isScrolling = false;
let lastScrollTop = 0;

// === PROJECT DETAILS DATA ===
const projectDetails = {
    drone: {
        title: 'Otonom Kargo Drone',
        year: '2022',
        description: `
            <h3><i class="fas fa-helicopter" style="color: #6366f1;"></i> Otonom Kargo Taşımacılığı Projesi</h3>
            
            <h4><i class="fas fa-clipboard" style="color: #6366f1;"></i> Proje Amacı:</h4>
            <p>Bu projenin amacı, önceden tanımlanmış kentsel alanlarda kurye ve kargo hizmetleri sunabilen otonom bir drone tasarlamak ve geliştirmektir. Proje, verimli, zamanında ve uygun maliyetli teslimat hizmetleri için drone teknolojisinden yararlanarak lojistik sektöründe yenilik yapmayı hedeflemektedir.</p>
            
            <h4><i class="fas fa-building" style="color: #6366f1;"></i> Drone İstasyonu:</h4>
            <p>Drone istasyonu, şarj, bakım ve sevkiyat dahil olmak üzere drone operasyonları için merkezi üs görevi görür. Droneların anında konuşlandırılmaya hazır olmasını sağlar ve drone teslimat sisteminin lojistik yönlerini yönetir.</p>
            
            <h4><i class="fas fa-box" style="color: #6366f1;"></i> Yük Kapasitesi:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Maksimum yük kapasitesi: 3000 gram</li>
            </ul>
            
            <h4><i class="fas fa-cogs" style="color: #6366f1;"></i> Drone Özellikleri:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Gövde:</strong> Karbon fiber ve HDPE gibi yüksek mukavemetli malzemelerden üretilmiştir</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Batarya bölmesi:</strong> Yaz ve kış kullanımı için tasarlanmış, çeşitli hava koşullarında optimum performans sağlar</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Güvenlik özellikleri:</strong> Arıza durumunda etkiyi en aza indirmek için paraşüt sistemi ile donatılmıştır</li>
            </ul>
            
            <h4><i class="fas fa-laptop-code" style="color: #6366f1;"></i> Kullanılan Yazılımlar:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>SolidWorks:</strong> Drone'un mekanik bileşenlerini tasarlamak ve simüle etmek için</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>MATLAB:</strong> Sensör verilerini işlemek, hesaplamalar yapmak ve uçuş dinamiklerini simüle etmek için</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>e-Calc:</strong> Uçuş performansını ve batarya dayanıklılığı hesaplamalarını doğrulamak için</li>
            </ul>
            
            <h4><i class="fas fa-robot" style="color: #6366f1;"></i> Kullanılan Yapay Zeka Algoritmaları:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Makine Öğrenmesi:</strong> Uçuş yollarını optimize etmek ve otonom navigasyonu geliştirmek için</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Bilgisayarlı Görü:</strong> Gerçek zamanlı nesne tespiti ve engelden kaçınma için</li>
            </ul>
            
            <h4><i class="fas fa-user-tie" style="color: #6366f1;"></i> Proje Yöneticisi Rolü:</h4>
            <p>Proje yöneticisi olarak, ilk konseptten nihai test ve konuşlandırmaya kadar tüm proje yaşam döngüsünü denetlemekten sorumluydum. Bu, tasarım ve geliştirme süreçlerini koordine etmeyi, zamanında ilerlemeyi sağlamayı ve proje ekibini yönetmeyi içeriyordu.</p>
        `
    },
    sleep: {
        title: 'Uyku Evrelerinin Sınıflandırılması',
        year: '2021',
        description: `
            <h3><i class="fas fa-bed" style="color: #6366f1;"></i> Bitirme Projesi - Uyku Analizi</h3>
            
            <h4><i class="fas fa-bullseye" style="color: #6366f1;"></i> Proje Amacı:</h4>
            <p>Bu projenin amacı, yapay sinir ağları ile EEG (Elektroensefalografi) ve EMG (Elektromiyografi) sinyallerini kullanarak uyku evrelerini sınıflandırmak ve bu sınıflandırmanın doğruluğunu değerlendirmektir.</p>
            
            <h4><i class="fas fa-chart-line" style="color: #6366f1;"></i> İşlem Adımları:</h4>
            
            <h5>1. Veri Toplama:</h5>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Physiobank ATM veritabanından 47 yaşındaki kadın hastadan alınan veriler kullanıldı</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Yaklaşık 9 saatlik EEG ve EMG verisi işlendi</li>
            </ul>
            
            <h5>2. Veri Ön İşleme:</h5>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Toplanan ham veriler işlendi ve analiz için hazırlandı</li>
            </ul>
            
            <h5>3. Epoch Bölümlemesi:</h5>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Sinyaller uyku evrelemesi için otuz saniyelik epoch'lara bölündü</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Toplam 1079 epoch elde edildi</li>
            </ul>
            
            <h5>4. Özellik Çıkarımı:</h5>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Hem zaman alanı hem de zaman-frekans (hibrit) alanı kullanılarak özellikler çıkarıldı</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Hesaplanan özellikler: ortalama, standart sapma, varyans, ortalama enerji, ortalama eğri uzunluğu ve ortalama Teager enerjisi</li>
            </ul>
            
            <h5>5. Sınıflandırma:</h5>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> K-En Yakın Komşu (KNN) algoritması kullanılarak veriler uyanıklık (W), NREM (N1, N2, N3) ve REM (R) evrelerine sınıflandırıldı</li>
            </ul>
            
            <h5>6. Performans Değerlendirmesi:</h5>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Doğruluk, duyarlılık, özgüllük, F-ölçüsü ve AUC (Eğri Altındaki Alan) hesaplanarak performans değerlendirildi</li>
            </ul>
            
            <h4><i class="fas fa-signal" style="color: #6366f1;"></i> Kullanılan Sinyaller:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>EEG Sinyalleri:</strong> Beynin elektriksel aktivitesini ölçer</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>EMG Sinyalleri:</strong> Kasların elektriksel aktivitesini ölçer</li>
            </ul>
            
            <h4><i class="fas fa-laptop-code" style="color: #6366f1;"></i> Kullanılan Yazılım:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>MATLAB:</strong> Veri işleme, özellik çıkarımı ve sınıflandırma görevleri için</li>
            </ul>
            
            <h4><i class="fas fa-robot" style="color: #6366f1;"></i> Kullanılan Yapay Zeka Algoritmaları:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Yapay Sinir Ağları (YSA):</strong> Uyku evrelerinin sınıflandırılması için</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>K-En Yakın Komşu (KNN) Algoritması:</strong> Veri sınıflandırması için</li>
            </ul>
            
            <h4><i class="fas fa-chart-bar" style="color: #6366f1;"></i> Sonuçlar:</h4>
            <p>EEG ve EMG sinyalleri kullanılarak uyku evrelerinin sınıflandırılması, zaman alanında Ağırlıklı KNN algoritması ile en iyi performansı verdi. Bu çalışmanın sonuçları, uyku evrelerinin doğru bir şekilde sınıflandırılabileceğini göstermektedir. Doğruluk, duyarlılık, özgüllük, F-ölçüsü ve AUC için hesaplanan değerlerle yüksek performans elde edildi. Bu, yapay sinir ağlarının ve KNN algoritmalarının uyku evrelerinin sınıflandırılması için etkili bir şekilde kullanılabileceğini göstermektedir.</p>
        `
    },
    uav: {
        title: 'Çok Amaçlı İHA Geliştirme',
        year: 'TEKNOFEST 2020',
        description: `
            <h3><i class="fas fa-helicopter" style="color: #6366f1;"></i> TÜBİTAK Destekli İHA Projesi</h3>
            
            <h4><i class="fas fa-bullseye" style="color: #6366f1;"></i> Görev Tanımı:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Belirlenen görevlerde uçuş ve manevra kabiliyeti</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Otonom uçuş</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Belirtilen konumdan 250 gram su toplama, iniş yapma ve konteyneri doldurma</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Toplanan suyu belirlenen hedef konumuna taşıma ve boşaltma</li>
            </ul>
            
            <h4><i class="fas fa-map-marker-alt" style="color: #6366f1;"></i> Yer - Tarih:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Yarışma:</strong> Gaziantep Alleben Göleti (15-20 Eylül 2020)</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Ödül Töreni:</strong> Gaziantep TEKNOFEST (26-27 Eylül 2020)</li>
            </ul>
            
            <h4><i class="fas fa-graduation-cap" style="color: #6366f1;"></i> Üniversite Drone Projesi:</h4>
            <p>TÜBİTAK tarafından düzenlenen Uluslararası İnsansız Hava Aracı (İHA) Yarışması kapsamında üniversitemizde bir drone takımı kuruldu. Bu projenin takım kaptanı olarak görev aldım.</p>
            
            <h4><i class="fas fa-cogs" style="color: #6366f1;"></i> Tasarım ve Üretim Süreci:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Drone'un tasarım ve üretim süreçleri SolidWorks kullanılarak gerçekleştirildi</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Tüm parçalar ekibimiz tarafından 3D yazıcı kullanılarak üretildi</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Drone'un ağırlık kaldırma kapasitesi, rüzgar direnci, uçuş süresi ve manevra kabiliyeti için mühendislik hesaplamaları titizlikle yapıldı</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Elektronik devrelerin tasarımı ve yazılımın geliştirilmesi ekip üyelerimiz tarafından başarıyla tamamlandı</li>
            </ul>
            
            <h4><i class="fas fa-trophy" style="color: #6366f1;"></i> Başarı:</h4>
            <p>Bu bağlamda, gerekli tüm görevleri verimli bir şekilde yerine getirebilen bir drone geliştirdik. Takım çalışması ve teknik yetkinliklerimizle TEKNOFEST 2020'de başarılı bir performans sergiledik.</p>
        `
    },
    sumo: {
        title: 'Sumo Yarışma Robotu',
        year: '2018',
        description: `
            <h3><i class="fas fa-robot" style="color: #6366f1;"></i> Sumo Robot Projesi</h3>
            
            <h4><i class="fas fa-bullseye" style="color: #6366f1;"></i> Projenin Amacı ve İşlevi:</h4>
            <p>Bu projenin amacı, sumo güreşi arenasında yarışmak üzere tasarlanmış bir sumo robotu inşa etmekti. Robotun hedefi, beyaz çizgi ile işaretlenmiş sınırı olan dairesel bir ringden rakibini dışarı itmektir.</p>
            
            <h4><i class="fas fa-clipboard" style="color: #6366f1;"></i> Temel Özellikler:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Robot belirli bir ağırlık ve yükseklik sınırını aşmamalıdır</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Proje Arduino mikrodenetleyici kullanılarak yapıldı</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Robotun şasisi SolidWorks'te tasarlandı ve 3D olarak basıldı</li>
            </ul>
            
            <h4><i class="fas fa-cogs" style="color: #6366f1;"></i> Ana Bileşenler ve İşlevleri:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Arduino Mikrodenetleyici:</strong> Robotun beyni olarak görev yapar, tüm hareketleri ve sensörleri kontrol eder</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Motorlar ve Tekerlekler:</strong> Gerekli hareketi ve manevra kabiliyetini sağlar</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Sensörler:</strong> Ringin kenarını ve rakibin konumunu algılar</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Şasi:</strong> Robot için sağlam ve hafif bir çerçeve sağlamak üzere 3D basılmıştır</li>
            </ul>
            
            <h4><i class="fas fa-gears" style="color: #6366f1;"></i> Çalışma Prensibi:</h4>
            <p>Robot, beyaz sınır çizgisini algılamak ve onu geçmekten kaçınmak için sensörlerini kullanır. Ayrıca rakibi bulmak ve ringden dışarı itmek için sensörler kullanır. Arduino mikrodenetleyici, sensör girişlerini işler ve motorları buna göre kontrol eder.</p>
            
            <h4><i class="fas fa-palette" style="color: #6366f1;"></i> Tasarım ve İmalat:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Robotun tasarımı SolidWorks'te oluşturuldu ve 3D yazıcı kullanılarak basıldı</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Arduino kodu yazıldı ve robotun ringi etkili bir şekilde gezebilmesini ve rakiple mücadele edebilmesini sağlamak için test edildi</li>
            </ul>
            
            <h4><i class="fas fa-tasks" style="color: #6366f1;"></i> Proje Yürütme:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Tasarım:</strong> Robotun şasisi, yarışmanın gereksinimlerini karşılayabilmesini sağlamak için güç ve ağırlığı dengeleyecek şekilde dikkatle tasarlandı</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>3D Baskı:</strong> Tasarlanan parçalar 3D yazıcı kullanılarak basıldı</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Montaj:</strong> Bileşenler monte edildi ve Arduino robotun eylemlerini kontrol edecek şekilde programlandı</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Test:</strong> Robot, performansını iyileştirmek ve başarıyla rekabet edebilmesini sağlamak için çeşitli senaryolarda test edildi</li>
            </ul>
        `
    },
    power: {
        title: 'VersaVolt - Ayarlanabilir Güç Kaynağı',
        year: '2017',
        description: `
            <h3><i class="fas fa-bolt" style="color: #6366f1;"></i> Ayarlanabilir Güç Kaynağı Projesi</h3>
            
            <h4><i class="fas fa-bullseye" style="color: #6366f1;"></i> Projenin Amacı ve İşlevi:</h4>
            <p>Bu proje, farklı elektronik uygulamalar için gereken çeşitli voltaj seviyelerini sağlayabilen ayarlanabilir bir güç kaynağı geliştirmeyi amaçlamaktadır. 0-30V ayarlanabilirlik aralığı, bu güç kaynağını laboratuvarlarda, araştırma ve geliştirme projelerinde ve hobi elektroniğinde kullanım için çok yönlü hale getirir.</p>
            
            <h4><i class="fas fa-plug" style="color: #6366f1;"></i> Ana Bileşenler ve İşlevleri:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Transformatör (TR1):</strong> Elektrik şebekesinden gelen yüksek voltajı devrenin işleyebileceği daha düşük, daha güvenli bir seviyeye dönüştürür</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Köprü Diyot (BR1):</strong> AC (Alternatif Akım) voltajını DC (Doğru Akım) voltajına dönüştürür</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Kapasitör (C1 - 2200uF):</strong> Diyot köprüsünden gelen dalgalı DC voltajını düzleştirir ve filtreler</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Voltaj Regülatörü (Q1, Q2, Q3, Q4):</strong> Ayarlanabilir bir çıkış voltajı sağlar. Q2 ve Q3 transistörleri voltaj yükseltme ve yüksek akım taşıma kabiliyetini artırırken, Q1 voltaj regülasyonunu kontrol eder</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Potansiyometre (RV1 - 0.25k):</strong> Çıkış voltajını ayarlamak için kullanılır</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Dirençler ve Diğer Bileşenler:</strong> Devrenin doğru çalışmasını sağlamak için akımı ve voltajı sınırlar</li>
            </ul>
            
            <h4><i class="fas fa-gears" style="color: #6366f1;"></i> Çalışma Prensibi:</h4>
            <p>Transformatörden gelen azaltılmış voltaj, köprü diyot tarafından doğrultulur ve ardından kapasitör tarafından filtrelenir. Potansiyometre, çıkış voltajını kontrol etmek için baz transistöründen geçen akımı ayarlar. Ayarlanabilir voltaj, çıkış transistörleri tarafından yüke uygulanır.</p>
            
            <h4><i class="fas fa-laptop-code" style="color: #6366f1;"></i> Tasarım ve Simülasyon:</h4>
            <p>Proteus yazılımı kullanılarak yapılan simülasyon, devre elemanlarının doğru bir şekilde monte edilip edilmediğini, devrenin beklenen işlevini yerine getirip getirmediğini kontrol eder ve erken aşamada hataları tanımlar ve düzeltir. Simülasyon, gerçek bir devre kurmadan önce teorik tasarımları doğrulamada çok önemli bir rol oynar.</p>
            
            <h4><i class="fas fa-star" style="color: #6366f1;"></i> Özellikler:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> 0-30V ayarlanabilir çıkış voltajı</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Kısa devre koruması</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Aşırı akım koruması</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> %1'den düşük ripple oranı</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Elektronik devreler için güvenilir test ortamı</li>
            </ul>
        `
    }
};

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
        'Biyomedikal Mühendisi',
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
    
    /* Modal İçerik Stilleri - Daha İyi Okunabilirlik */
    .modal-body {
        font-size: 16px;
        line-height: 1.8;
        color: #2d3748;
    }
    
    .modal-body h2 {
        font-size: 2.5rem !important;
        color: #1a202c !important;
        margin-bottom: 20px !important;
        padding-bottom: 15px !important;
        border-bottom: 3px solid #6366f1 !important;
    }
    
    .modal-body h3 {
        font-size: 1.8rem !important;
        color: #2d3748 !important;
        margin-top: 35px !important;
        margin-bottom: 20px !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
        padding: 15px 20px !important;
        border-radius: 10px !important;
    }
    
    .modal-body h4 {
        font-size: 1.3rem !important;
        color: #4a5568 !important;
        margin-top: 25px !important;
        margin-bottom: 15px !important;
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
        padding: 10px 0 !important;
        border-left: 4px solid #6366f1 !important;
        padding-left: 15px !important;
    }
    
    .modal-body h5 {
        font-size: 1.1rem !important;
        color: #718096 !important;
        margin-top: 20px !important;
        margin-bottom: 12px !important;
        font-weight: 600 !important;
    }
    
    .modal-body p {
        font-size: 16px !important;
        line-height: 1.8 !important;
        color: #4a5568 !important;
        margin-bottom: 18px !important;
        text-align: justify !important;
    }
    
    .modal-body ul {
        margin: 15px 0 !important;
        padding-left: 0 !important;
        list-style: none !important;
    }
    
    .modal-body ul li {
        font-size: 15px !important;
        line-height: 1.8 !important;
        color: #4a5568 !important;
        margin-bottom: 12px !important;
        padding: 10px 15px !important;
        background: #f8f9fa !important;
        border-radius: 8px !important;
        display: flex !important;
        align-items: flex-start !important;
        gap: 12px !important;
        transition: all 0.3s ease !important;
    }
    
    .modal-body ul li:hover {
        background: #e9ecef !important;
        transform: translateX(5px) !important;
    }
    
    .modal-body ul li i {
        flex-shrink: 0 !important;
        margin-top: 3px !important;
    }
    
    .modal-body strong {
        color: #2d3748 !important;
        font-weight: 600 !important;
    }
    
    .modal-content {
        max-width: 1000px !important;
        width: 95% !important;
        max-height: 90vh !important;
        padding: 30px 40px !important;
    }
    
    .modal-body .project-year {
        display: inline-block !important;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
        color: white !important;
        padding: 8px 20px !important;
        border-radius: 25px !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        margin-bottom: 25px !important;
    }
    
    /* Scroll Bar Özelleştirme */
    .modal-content::-webkit-scrollbar {
        width: 8px;
    }
    
    .modal-content::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }
    
    .modal-content::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 10px;
    }
    
    .modal-content::-webkit-scrollbar-thumb:hover {
        background: #4f46e5;
    }
    
    /* Mobil Responsive */
    @media (max-width: 768px) {
        .modal-content {
            padding: 20px !important;
            width: 100% !important;
            height: 100vh !important;
            max-height: 100vh !important;
            border-radius: 0 !important;
        }
        
        .modal-body h2 {
            font-size: 1.8rem !important;
        }
        
        .modal-body h3 {
            font-size: 1.4rem !important;
        }
        
        .modal-body h4 {
            font-size: 1.1rem !important;
        }
        
        .modal-body p,
        .modal-body ul li {
            font-size: 14px !important;
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