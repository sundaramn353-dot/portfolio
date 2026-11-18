'use strict';
// ================================================================
// PORTFOLIO — Main JS
// Apple · Tesla · Linear inspired interactions
// ================================================================

// ----------------------------------------------------------------
// 1. NAVBAR — Scroll + Active Link + Mobile
// ----------------------------------------------------------------
const navWrap  = document.getElementById('nav-wrap');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const mobileBtn = document.getElementById('nav-mobile-btn');
const mobileOverlay = document.getElementById('mobile-overlay');

window.addEventListener('scroll', () => {
  // Frosted glass on scroll
  navWrap.classList.toggle('scrolled', window.scrollY > 48);

  // Active nav highlight
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));

  // Scroll-to-top
  document.getElementById('scroll-top').classList.toggle('visible', window.scrollY > 600);
}, { passive: true });

// Mobile menu toggle
mobileBtn.addEventListener('click', () => {
  const open = mobileOverlay.classList.toggle('open');
  mobileBtn.setAttribute('aria-expanded', open);
  mobileOverlay.setAttribute('aria-hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close mobile overlay on link click
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => {
  mobileOverlay.classList.remove('open');
  mobileBtn.setAttribute('aria-expanded', 'false');
  mobileOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}));

// Scroll to top
document.getElementById('scroll-top').addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

// ----------------------------------------------------------------
// 2. HERO CANVAS — Subtle grid mesh (Tesla-style)
// ----------------------------------------------------------------
(function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, animId;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  const dots = Array.from({ length: 60 }, () => ({
    x: Math.random(), y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0003,
    vy: (Math.random() - 0.5) * 0.0003,
  }));

  let t = 0;
  function draw() {
    t += 0.004;
    ctx.clearRect(0, 0, W, H);

    // Grid lines
    const gridSize = 80;
    ctx.strokeStyle = 'rgba(255,255,255,0.025)';
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += gridSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += gridSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Moving dots and connections
    dots.forEach(d => {
      d.x = (d.x + d.vx + 1) % 1;
      d.y = (d.y + d.vy + 1) % 1;
    });

    for (let i = 0; i < dots.length; i++) {
      const ax = dots[i].x * W, ay = dots[i].y * H;
      ctx.beginPath();
      ctx.arc(ax, ay, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(56,189,248,0.35)';
      ctx.fill();

      for (let j = i + 1; j < dots.length; j++) {
        const bx = dots[j].x * W, by = dots[j].y * H;
        const dx = ax - bx, dy = ay - by;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
          ctx.strokeStyle = `rgba(56,189,248,${0.08 * (1 - dist / 140)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(draw);
  }

  const ro = new ResizeObserver(() => { resize(); });
  ro.observe(canvas);
  resize();
  draw();

  // Pause when not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(animId);
    else draw();
  });
})();

// ----------------------------------------------------------------
// 3. SCROLL REVEAL — IntersectionObserver
// ----------------------------------------------------------------
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

document.querySelectorAll('.reveal-up').forEach(el => revealObs.observe(el));

// ----------------------------------------------------------------
// 4. ANIMATED COUNTERS
// ----------------------------------------------------------------
function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      el.textContent = Math.round(easeOutQuart(progress) * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + '+';
    }
    requestAnimationFrame(tick);
    counterObs.unobserve(el);
  });
}, { threshold: 0.6 });

document.querySelectorAll('.stat-n').forEach(el => counterObs.observe(el));

// ----------------------------------------------------------------
// 5. SMOOTH ANCHOR SCROLL
// ----------------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const offset = 72; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
