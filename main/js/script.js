document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    
    heroContent.style.opacity = '0';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease-out';
        heroContent.style.opacity = '1';
    }, 200);
});

const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aparecer');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.projeto-card').forEach(card => {
    card.classList.add('fade-in');
    observador.observe(card);
});