const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

function openMenu() {
    menuToggle.classList.add('open');
    navLinks.classList.add('open');
    navOverlay.classList.add('open');
    menuToggle.setAttribute('aria-expanded', true);
    document.body.style.overflow = 'hidden';  /* stops page scrolling behind sidebar */
}

function closeMenu() {
    menuToggle.classList.remove('open');
    navLinks.classList.remove('open');
    navOverlay.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';        /* restores scrolling */
}

menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
});

/* Close when overlay is clicked */
navOverlay.addEventListener('click', closeMenu);

/* Close when a nav link is clicked */
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});