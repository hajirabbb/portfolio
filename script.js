const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

function openMenu() {
    menuToggle.classList.add('open');
    navLinks.classList.add('open');
    navOverlay.classList.add('open');
    menuToggle.setAttribute('aria-expanded', true);
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    menuToggle.classList.remove('open');
    navLinks.classList.remove('open');
    navOverlay.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
});

/* Close when overlay is clicked */
navOverlay.addEventListener('click', closeMenu);

/* --- Active link highlighting --- */
const navAnchors = navLinks.querySelectorAll('a');
const sections = document.querySelectorAll('section[id], div.hero[id]');

function setActiveLink(id) {
    navAnchors.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
        }
    });
}

/* Close menu AND set active state when a nav link is clicked */
navAnchors.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
        const targetId = link.getAttribute('href').replace('#', '');
        setActiveLink(targetId);
    });
});

/* Highlight automatically based on scroll position */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
        }
    });
}, {
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0
});

sections.forEach(section => observer.observe(section));

const form = document.querySelector(".contact-form");
const notification = document.getElementById("notification");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
    });
    if (response.ok) {
        form.reset();
        notification.style.display = "block";
        setTimeout(() => {
            notification.style.display = "none";
        }, 4000);
    }
});