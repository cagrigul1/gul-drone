// Smooth navigation for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Nav highlight on scroll
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section[id]').forEach(section => {
    if (pageYOffset >= section.offsetTop - 200) current = section.id;
  });
  document.querySelectorAll('.nav-menu a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href').slice(1) === current);
  });
});

// Email form submission (mailto)
function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const mailtoLink = `mailto:gulziraat1@gmail.com?subject=MG Aero - ${encodeURIComponent(name || 'İsimsiz')} adlı kişiden mesaj&body=${encodeURIComponent(`İsim: ${name}\nE-Mail: ${email}\n\nMesaj:\n${message}`)}`;
  window.location.href = mailtoLink;

  setTimeout(() => {
    const form = document.getElementById('msg-form');
    if (form) form.reset();
  }, 500);
}

// Video modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('video-modal');
  const body = modal ? modal.querySelector('.modal-body') : null;
  const closeBtn = modal ? modal.querySelector('.modal-close') : null;
  const overlay = modal ? modal.querySelector('.overlay') : null;

  function openVideo(id) {
    if (!modal || !body) return;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay';
    iframe.allowFullscreen = true;
    body.innerHTML = '';
    body.appendChild(iframe);
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeVideo() {
    if (!modal || !body) return;
    modal.setAttribute('aria-hidden', 'true');
    body.innerHTML = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.thumb[data-video-id]').forEach(btn => {
    const id = btn.getAttribute('data-video-id');
    btn.addEventListener('click', () => openVideo(id));
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openVideo(id); }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeVideo);
  if (overlay) overlay.addEventListener('click', closeVideo);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideo(); });

  // Reveal-on-scroll animations
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ensureRevealClass = (selector) => {
    document.querySelectorAll(selector).forEach(el => el.classList.add('reveal'));
  };

  // Add reveal class to common blocks if not already marked
  ensureRevealClass('.section-head, .card, .media-card, .g-item, .two-col .col, .info-item, .form');

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    // If animations are disabled or unsupported, show everything
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }
});
