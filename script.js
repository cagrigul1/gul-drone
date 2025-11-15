// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Scroll to form function
function scrollToForm() {
    const form = document.getElementById('email-form');
    if (form) {
        form.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        form.querySelector('input[type="text"]').focus();
    }
}

// Email form submission
function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create mailto link
    const mailtoLink = `mailto:gulziraat1@gmail.com?subject=GÜL Zirai Drone - ${encodeURIComponent(name)} adlı kişiden mesaj}&body=${encodeURIComponent(`
İsim: ${name}
E-Mail: ${email}

Mesaj:
${message}
    `)}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    setTimeout(() => {
        document.getElementById('email-form').reset();
        showNotification('E-mail istemciniz açılacak. Lütfen mesajı gözden geçirin ve gönderin.');
    }, 500);
}

// Notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Add animation for slide out
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Navigation highlight on scroll
window.addEventListener('scroll', () => {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active class styling
const styleActive = document.createElement('style');
styleActive.textContent = `
    .nav-menu a.active {
        border-bottom: 2px solid white;
        padding-bottom: 5px;
    }
`;
document.head.appendChild(styleActive);

// Lazy loading for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Add animation styles for cards
const cardStyle = document.createElement('style');
cardStyle.textContent = `
    .service-card {
        opacity: 0;
        animation: fadeInUp 0.6s ease forwards;
    }

    .service-card:nth-child(1) { animation-delay: 0.1s; }
    .service-card:nth-child(2) { animation-delay: 0.2s; }
    .service-card:nth-child(3) { animation-delay: 0.3s; }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .service-card.animate {
        animation: none;
        opacity: 1;
    }
`;
document.head.appendChild(cardStyle);

// Mobile menu toggle (if needed in future)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sayfası başarıyla yüklendi!');
    console.log('İletişim: +90 542 723 1753');
    console.log('E-Mail: gulziraat1@gmail.com');
});
