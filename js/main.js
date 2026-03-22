/* =========================================
   Portfolio — Kayky Nery Alcântara Vieira
   main.js
   ========================================= */

// Reveal on scroll + skill bar animation
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-bar').forEach(b => b.classList.add('animate'));
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Trigger for elements already visible on load
reveals.forEach(el => {
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    el.classList.add('visible');
    el.querySelectorAll('.skill-bar').forEach(b => b.classList.add('animate'));
  }
});
