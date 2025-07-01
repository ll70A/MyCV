// script.js
// Back to top button functionality
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      nav.style.display = 'none';
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Animation on scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// تحقق من التفضيل المخزن في localStorage
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  }
});


