// Mobile navigation
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    });
  });
}

// Header shadow on scroll
const siteHeader = document.querySelector('.site-header');
const updateHeader = () => {
  if (siteHeader) siteHeader.classList.toggle('scrolled', window.scrollY > 10);
};
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// Active navigation link
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.site-nav a')];
if ('IntersectionObserver' in window && navLinks.length) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((section) => navObserver.observe(section));
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}

// Offline / installable app support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Rate request -> WhatsApp
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('qName').value.trim();
    const phone = document.getElementById('qPhone').value.trim();
    const product = document.getElementById('qProduct').value;
    const message = document.getElementById('qMessage').value.trim();

    const text = [
      'Hi National Trading Company!',
      `Naam: ${name}`,
      `Phone: ${phone}`,
      `Saman: ${product}`,
      message ? `Requirement: ${message}` : 'Requirement: rate batayein',
    ].join('\n');

    const status = document.getElementById('formStatus');
    if (status) status.textContent = 'WhatsApp khul raha hai…';
    window.open(`https://wa.me/918968925799?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}
