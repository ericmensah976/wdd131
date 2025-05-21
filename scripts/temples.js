// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Close menu when clicking on a link
navigation.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
    }
});

// Dynamic footer content
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;