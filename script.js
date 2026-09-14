document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // 1. INICIALIZAÇÃO DA BIBLIOTECA DE ANIMAÇÃO (AOS)
    // ===================================================================
    AOS.init({
        once: true, // A animação acontece apenas uma vez ao descer
        offset: 120, // Começa a animar um pouco antes do elemento aparecer
    });

    // ===================================================================
    // 2. LÓGICA DO MENU MOBILE (HAMBÚRGUER)
    // ===================================================================
    const menuToggle = document.getElementById('menu-toggle');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('header nav a');

    if (menuToggle && header) {
        menuToggle.addEventListener('click', () => {
            header.classList.toggle('open');
        });
    }

    // Fecha o menu mobile ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (header.classList.contains('open')) {
                header.classList.remove('open');
            }
        });
    });

    // ===================================================================
    // 3. LÓGICA DO BANNER DE CONSENTIMENTO (LGPD/COOKIES)
    // ===================================================================
    const consentBanner = document.getElementById('consent-banner');
    const acceptBtn = document.getElementById('accept-consent-btn');

    if (consentBanner && acceptBtn) {
        const consentGiven = localStorage.getItem('serenariSpaConsent');

        if (!consentGiven) {
            setTimeout(() => {
                consentBanner.classList.remove('hidden');
            }, 1500);
        }

        acceptBtn.addEventListener('click', () => {
            consentBanner.classList.add('hidden');
            localStorage.setItem('serenariSpaConsent', 'true');
        });
    }

    // ===================================================================
    // 4. ATUALIZAÇÃO DINÂMICA DO ANO NO RODAPÉ
    // ===================================================================
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ===================================================================
    // 5. BOTÃO VOLTAR AO TOPO (BACK TO TOP)
    // ===================================================================
    const backToTopBtn = document.getElementById("back-to-top");

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        // Mostra o botão se descer mais de 300px
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    // Ação de clique para voltar ao topo suavemente
    if(backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
// ===================================================================
// 6. LÓGICA DO CARROSSEL (ATUALIZADA)
// ===================================================================

function scrollCarousel(containerId, direction) {
    const container = document.getElementById(containerId);
    
    if (container) {
        // CORREÇÃO AQUI: Adicionei ', .gallery-img' para ele reconhecer as fotos da galeria
        const card = container.querySelector('.service-card, .testimonial-card, .gallery-img');
        
        if (card) {
            const cardWidth = card.offsetWidth;
            const style = window.getComputedStyle(container);
            const gap = parseFloat(style.columnGap || style.gap || 20); // Pega o espaçamento se houver
            
            // Se for a galeria (gap costuma ser 0), garante o movimento correto
            const itemSize = cardWidth + (isNaN(gap) ? 0 : gap);
            
            const currentIndex = Math.round(container.scrollLeft / itemSize);
            const nextIndex = currentIndex + direction;

            container.scrollTo({
                left: nextIndex * itemSize,
                behavior: 'smooth'
            });
        } else {
            console.log("Nenhum item encontrado dentro do carrossel para medir o tamanho.");
        }
    } else {
        console.log("Container do carrossel não encontrado: " + containerId);
    }
}

// ===================================================================
// 7. LÓGICA DO LIGHTBOX (ZOOM NA IMAGEM)
// ===================================================================
function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if(lightbox && lightboxImg) {
        lightbox.style.display = "flex";
        lightboxImg.src = imgElement.src;
        // Desabilita rolagem do body enquanto o modal está aberto
        document.body.style.overflow = "hidden";
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if(lightbox) {
        lightbox.style.display = "none";
        // Reabilita rolagem
        document.body.style.overflow = "auto";
    }
}