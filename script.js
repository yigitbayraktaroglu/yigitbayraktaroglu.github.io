const currentYearElement = document.getElementById('current-year');

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

const revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    }
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('.reveal').forEach((element, index) => {
    element.style.transitionDelay = `${index * 80}ms`;
    revealObserver.observe(element);
});