/* ============================================================
   NAVBAR — scroll effect
============================================================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ============================================================
   BURGER MENU
============================================================ */
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});

// Close on any nav link click
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  });
});

// Close on outside click
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
  }
});

/* ============================================================
   TYPED.JS — hero subtitle
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Typed !== 'undefined') {
    new Typed('#typed', {
      strings: [
        'Data Scientist',
        'ML Engineer',
        'AI Automation Engineer',
        'Analytics Expert',
        'Python · SQL · n8n · LLM',
      ],
      typeSpeed: 58,
      backSpeed: 32,
      backDelay: 2200,
      startDelay: 500,
      loop: true,
      cursorChar: '▋',
    });
  }
});

/* ============================================================
   AOS — scroll animations
============================================================ */
AOS.init({
  duration: 680,
  easing: 'ease-out-cubic',
  once: true,
  offset: 70,
});

/* ============================================================
   ACTIVE NAV LINK on scroll
============================================================ */
const sections    = document.querySelectorAll('section[id]');
const navAnchors  = document.querySelectorAll('#navLinks a[href^="#"]');

function updateActiveNav() {
  const y = window.scrollY + 120;
  sections.forEach(sec => {
    const top    = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const id     = sec.getAttribute('id');
    const link   = document.querySelector(`#navLinks a[href="#${id}"]`);
    if (link) link.classList.toggle('active', y >= top && y < bottom);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

/* ============================================================
   SMOOTH SCROLL for anchor links
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href   = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-h')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ============================================================
   HERO stats — count-up animation
============================================================ */
function countUp(el, target, suffix, decimals) {
  const duration = 1600;
  const step     = 16;
  const steps    = duration / step;
  let   current  = 0;
  const increment = target / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = decimals
      ? current.toFixed(2) + suffix
      : Math.floor(current) + suffix;
  }, step);
}

// Trigger when hero is visible
const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const stats = [
        { el: document.querySelector('.stat:nth-child(1) .stat-num'), val: 80,   suffix: 'k+', dec: false },
        { el: document.querySelector('.stat:nth-child(2) .stat-num'), val: 0.76, suffix: '',   dec: true  },
        { el: document.querySelector('.stat:nth-child(3) .stat-num'), val: 20,   suffix: '×',  dec: false, prefix: '×' },
      ];
      stats.forEach(({ el, val, suffix, dec }) => {
        if (el) countUp(el, val, suffix, dec);
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);
