document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filtro-btn');
    const projectCards = document.querySelectorAll('.projeto-card');

    function filterProjects(category) {
        projectCards.forEach(card => {
            const cardCategory = card.dataset.category;
            
            card.style.animation = 'none';
            card.offsetHeight;
            
            if (category === 'todos' || cardCategory === category) {
                card.style.display = 'flex';
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            button.classList.add('active');
            
            const category = button.dataset.filter;
            filterProjects(category);
        });
    });

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        });
    });
}); 