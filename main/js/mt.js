// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Variáveis
    const mainTitle = document.getElementById('mainTitle');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    
    // Efeito simples ao passar o mouse no título
    mainTitle.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    mainTitle.addEventListener('mouseout', function() {
        this.style.transform = '';
    });
    
    mainTitle.addEventListener('click', function() {
        // Pequena animação ao clicar no título
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
    
    // Navegação interativa
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adiciona active class ao link clicado
            this.classList.add('active');
            
            // Esconde todas as seções
            sections.forEach(section => section.classList.remove('active'));
            
            // Mostra a seção correspondente
            const targetSection = document.getElementById(`${this.dataset.section}-section`);
            targetSection.classList.add('active');
            
            // Efeito de clique
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                icon.style.transform = '';
            }, 300);
        });
        
        // Efeito de hover nos ícones
        link.addEventListener('mouseover', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseout', function() {
            const icon = this.querySelector('i');
            icon.style.transform = '';
        });
    });
    
    // Adiciona classe para animação do cabeçalho
    const header = document.querySelector('.main-header');
    header.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    header.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
    
    // Badges de tecnologia interativas
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach(badge => {
        badge.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
        });
        
        badge.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Tooltips nos recursos
    const tooltip = document.getElementById('tooltip');
    
    // Animar barras de progresso quando visíveis
    const progressBars = document.querySelectorAll('.progress-fill');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = parseFloat(bar.style.width);
            bar.style.setProperty('--fill-width', `${width}%`);
        });
    }
    
    // Executar a animação quando a página carrega
    setTimeout(animateProgressBars, 500);
    
    // Adicionar efeito de pulso aos ícones das tecnologias
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.animation = 'pulse 1s infinite';
        });
        
        icon.addEventListener('mouseout', function() {
            this.style.animation = '';
        });
    });
    
    // Animações de efeito hover para os itens de contato
    const contatoItems = document.querySelectorAll('.contato-item');
    const cleanTitle = document.querySelector('.clean-title');
    const contatoHeaderP = document.querySelector('.contato-header p');
    
    if (cleanTitle) {
        cleanTitle.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
        });
        
        cleanTitle.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.textShadow = '';
        });
    }
    
    if (contatoHeaderP) {
        contatoHeaderP.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.color = '#cbd5e1';
        });
        
        contatoHeaderP.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.color = '';
        });
    }
    
    contatoItems.forEach(item => {
        // Efeito de gradiente deslizante
        item.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
            
            // Move o gradiente para cima
            const before = this;
            before.style.setProperty('--before-top', '0');
            
            // Muda a cor do ícone baseado no tipo de link
            const iconWrapper = this.querySelector('.icon-wrapper');
            if (iconWrapper) {
                if (this.classList.contains('email-link')) {
                    iconWrapper.style.background = 'rgba(234, 67, 53, 0.7)';
                } else if (this.classList.contains('github-link')) {
                    iconWrapper.style.background = 'rgba(36, 41, 46, 0.7)';
                } else if (this.classList.contains('linkedin-link')) {
                    iconWrapper.style.background = 'rgba(0, 119, 181, 0.7)';
                } else {
                    iconWrapper.style.background = 'rgba(79, 142, 247, 0.8)';
                }
                iconWrapper.style.transform = 'scale(1.2)';
            }
        });
        
        item.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            // Reseta o gradiente
            const before = this;
            before.style.setProperty('--before-top', '-100%');
            
            // Reseta o ícone
            const iconWrapper = this.querySelector('.icon-wrapper');
            if (iconWrapper) {
                iconWrapper.style.background = '';
                iconWrapper.style.transform = '';
            }
        });
    });
});
