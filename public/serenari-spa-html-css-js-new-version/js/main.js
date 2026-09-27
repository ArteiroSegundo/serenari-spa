// SERENARI SPA - Pure JS Interactive System
const SERVICES_DATA = [{"id": "massagem-relaxante", "img": "services/massagem-relaxante/01.jpg", "title": "Massagem Relaxante", "description": "Desconecte-se da rotina com toques suaves, aliviando o estresse, a ansiedade e renovando suas energias por completo.", "whatsappText": "Olá, gostaria de saber mais sobre a Massagem Relaxante.", "gallery": [{"src": "services/massagem-relaxante/02.jpg"}, {"src": "services/massagem-relaxante/03.jpg"}, {"src": "services/massagem-relaxante/04.jpg"}, {"src": "services/massagem-relaxante/05.jpg"}]}, {"id": "massagem-terapeutica", "img": "services/massagem-terapeutica/01.jpg", "title": "Massagem Terapêutica", "description": "Focada em aliviar dores musculares crônicas e contraturas, restaurando sua mobilidade, conforto e bem-estar físico.", "whatsappText": "Olá, gostaria de saber mais sobre a Massagem Terapêutica.", "gallery": [{"src": "services/massagem-terapeutica/02.jpg"}, {"src": "services/massagem-terapeutica/03.jpg"}, {"src": "services/massagem-terapeutica/04.jpg"}, {"src": "services/massagem-terapeutica/05.jpg"}, {"src": "services/massagem-terapeutica/06.jpg"}]}, {"id": "massagem-localizada", "img": "services/massagem-localizada/01.jpg", "title": "Massagem Localizada", "description": "Alívio direcionado para áreas específicas de tensão ou dor, como pescoço, ombros ou lombar, proporcionando conforto imediato.", "whatsappText": "Olá, gostaria de saber mais sobre a Massagem Localizada.", "gallery": [{"src": "services/massagem-localizada/02.jpg"}, {"src": "services/massagem-localizada/03.jpg"}, {"src": "services/massagem-localizada/04.jpg"}, {"src": "services/massagem-localizada/05.jpg"}, {"src": "services/massagem-localizada/06.jpg"}]}, {"id": "massagem-desportiva", "img": "services/massagem-desportiva/01.jpg", "title": "Massagem Desportiva", "description": "Ideal para atletas, foca na prevenção de lesões e na recuperação muscular, melhorando o desempenho e a flexibilidade.", "whatsappText": "Olá, gostaria de saber mais sobre a Massagem Desportiva.", "gallery": [{"src": "services/massagem-desportiva/02.jpg"}, {"src": "services/massagem-desportiva/03.jpg"}]}, {"id": "drenagem-corporal", "img": "services/drenagem-corporal/01.jpg", "title": "Drenagem Linfática Corporal", "description": "Estimule o sistema linfático para reduzir a retenção de líquidos, promovendo uma sensação de leveza e bem-estar.", "whatsappText": "Olá, gostaria de saber mais sobre a Drenagem Corporal.", "gallery": [{"src": "services/drenagem-corporal/02.jpg"}, {"src": "services/drenagem-corporal/03.jpg"}, {"src": "services/drenagem-corporal/04.jpg"}, {"src": "services/drenagem-corporal/05.jpg"}, {"src": "services/drenagem-corporal/06.jpg"}, {"src": "services/drenagem-corporal/07.jpg"}, {"src": "services/drenagem-corporal/08.jpg"}, {"src": "services/drenagem-corporal/09.jpg"}, {"src": "services/drenagem-corporal/10.jpg"}, {"src": "services/drenagem-corporal/11.jpg"}]}, {"id": "pedras-quentes", "img": "services/pedras-quentes/01.jpg", "title": "Massagem Pedras Quentes", "description": "Sinta o calor terapêutico das pedras vulcânicas aliviando tensões profundas em um relaxamento incomparável.", "whatsappText": "Olá, gostaria de saber mais sobre a Massagem com Pedras Quentes.", "gallery": [{"src": "services/pedras-quentes/02.jpg"}, {"src": "services/pedras-quentes/03.jpg"}]}, {"id": "ventosa-terapia", "img": "services/ventosa-terapia/01.jpg", "title": "Ventosa Terapia", "description": "Alivie tensões e melhore a circulação com a antiga técnica de Ventosaterapia, promovendo bem-estar e alívio muscular.", "whatsappText": "Olá, gostaria de saber mais sobre a Ventosaterapia.", "gallery": [{"src": "services/ventosa-terapia/02.jpg"}, {"src": "services/ventosa-terapia/03.jpg"}, {"src": "services/ventosa-terapia/04.jpg"}, {"src": "services/ventosa-terapia/05.jpg"}, {"src": "services/ventosa-terapia/06.jpg"}, {"src": "services/ventosa-terapia/07.jpg"}, {"src": "services/ventosa-terapia/08.jpg"}]}, {"id": "reflexologia-podal", "img": "services/reflexologia-podal/01.jpg", "title": "Reflexologia Podal", "description": "Estimule pontos de energia nos pés que correspondem a órgãos e sistemas do corpo, promovendo equilíbrio e relaxamento.", "whatsappText": "Olá, gostaria de saber mais sobre a Reflexologia Podal.", "gallery": [{"src": "services/reflexologia-podal/02.jpg"}]}, {"id": "shiatsu", "img": "services/shiatsu/01.jpg", "title": "Shiatsu", "description": "Experimente a tradicional massagem japonesa que utiliza pressão dos dedos para reequilibrar a energia vital do corpo.", "whatsappText": "Olá, gostaria de saber mais sobre o Shiatsu.", "gallery": [{"src": "services/shiatsu/02.jpg"}, {"src": "services/shiatsu/03.jpg"}, {"src": "services/shiatsu/04.jpg"}, {"src": "services/shiatsu/05.jpg"}, {"src": "services/shiatsu/06.jpg"}, {"src": "services/shiatsu/07.jpg"}]}, {"id": "drenagem-facial", "img": "services/drenagem-facial/01.jpg", "title": "Drenagem Linfática Facial", "description": "Reduza inchaços e melhore a circulação facial, promovendo uma pele mais radiante, saudável e com aspecto descansado.", "whatsappText": "Olá, gostaria de saber mais sobre a Drenagem Facial.", "gallery": [{"src": "services/drenagem-facial/02.jpg"}, {"src": "services/drenagem-facial/03.jpg"}, {"src": "services/drenagem-facial/04.jpg"}]}, {"id": "esfoliacao-corporal", "img": "esfoliacao-corporal.png", "title": "Esfoliação Corporal", "description": "Renove sua pele com uma esfoliação profunda, removendo células mortas e deixando-a macia, suave e luminosa.", "whatsappText": "Olá, gostaria de saber mais sobre a Esfoliação Corporal.", "gallery": []}, {"id": "revitalizacao-facial", "img": "services/revitalizacao-facial/03.jpg", "title": "Revitalização Facial", "description": "Proporcione nutrição e hidratação intensa para sua pele, restaurando o brilho natural e a vitalidade do seu rosto.", "whatsappText": "Olá, gostaria de saber mais sobre a Revitalização Facial.", "gallery": [{"src": "services/revitalizacao-facial/01.jpg"}, {"src": "services/revitalizacao-facial/02.jpg"}, {"src": "services/revitalizacao-facial/04.jpg"}]}, {"id": "liberacao-miofascial", "img": "services/liberacao-miofascial/01.jpg", "title": "Liberação Miofascial", "description": "Terapia profunda para liberar tensões e restrições nas fáscias musculares, melhorando a flexibilidade e reduzindo dores.", "whatsappText": "Olá, gostaria de saber mais sobre a Liberação Miofascial.", "gallery": [{"src": "services/liberacao-miofascial/02.jpg"}, {"src": "services/liberacao-miofascial/03.jpg"}, {"src": "services/liberacao-miofascial/04.jpg"}, {"src": "services/liberacao-miofascial/05.jpg"}, {"src": "services/liberacao-miofascial/06.jpg"}, {"src": "services/liberacao-miofascial/07.jpg"}]}, {"id": "limpeza-de-pele-natural", "img": "limpeza-de-pele-natural.png", "title": "Limpeza de Pele Natural", "description": "Purifique e hidrate sua pele com produtos naturais, removendo impurezas e promovendo um toque fresco e saudável.", "whatsappText": "Olá, gostaria de saber mais sobre a Limpeza de Pele Natural.", "gallery": []}];
const TESTIMONIALS_DATA = [{"name": "Thauani Cris", "img": "avatars/thauani-cris.png", "quote": "Eu amei a experiência! Foi incrível, sem dúvidas voltarei mais vezes, recomendo muito. Ambiente super agradável, fui muito bem atendida."}, {"name": "Dyana Dyh", "img": "avatars/dyana-dyh.png", "quote": "Tive uma experiência maravilhosa no spa! O ambiente é extremamente agradável, limpo e acolhedor, transmitindo uma sensação de tranquilidade desde a chegada. A massagem foi simplesmente excelente, muito atenciosa e profissional. Saí renovada e com certeza voltarei mais vezes. Recomendo de olhos fechados!"}, {"name": "Gabrielle Fernandes", "img": "avatars/gabrielle-fernandes.png", "quote": "Serenari experiência incrível, recomendo demais! O atendimento foi impecável, atencioso e com aquele cuidado que faz a gente se sentir especial. O ambiente é lindo, tranquilo e muito aconchegante. Fiz uma massagem relaxante e saí sem sentir absolutamente nada das dores. Com certeza voltarei e já indiquei para amigos e familiares."}, {"name": "Junior Nascimento", "img": "avatars/junior-nascimento.png", "quote": "Se você está em dúvida sobre ir ou não ir, quero deixar minha avaliação positivíssima para a Serenari. Atendimento impecável, muito atencioso, educado e extremamente competente. A sessão foi ao mesmo tempo relaxante e revigorante. Recomendo sem medo!"}, {"name": "Amanda Fernandes", "img": "avatars/amanda-fernandes.png", "quote": "Sem dúvidas, o lugar mais aconchegante e acolhedor que já estive em toda a minha vida! Profissionais extremamente qualificados, tratamento ímpar, ambiente aconchegante e lindo! Experiência excelente! Sucesso!"}, {"name": "Maxwell da Cruz Santos", "img": "avatars/maxwell-santos.png", "quote": "Local aconchegante, ótimo atendimento e serviço super profissional."}, {"name": "Fernando Comitre", "img": "avatars/fernando-comitre.png", "quote": "Ótima experiência. A massagem foi certeira nos pontos de tensão e ajudou demais a aliviar a dor nas costas. Com certeza retornarei."}];
const GALLERY_PHOTOS = [{"src": "sobre-nos/01.jpg", "alt": "Lounge de espera do Serenari Spa"}, {"src": "sobre-nos/02.jpg", "alt": "Recepção do Serenari Spa"}, {"src": "sobre-nos/03.jpg", "alt": "Estação de café e boas-vindas"}, {"src": "sobre-nos/04.jpg", "alt": "Espaço de espera com logo Serenari Spa"}, {"src": "sobre-nos/05.jpg", "alt": "Sala de massagem preparada"}, {"src": "sobre-nos/06.jpg", "alt": "Detalhe da bandeja de boas-vindas"}, {"src": "sobre-nos/07.jpg", "alt": "Sala de massagem individual"}, {"src": "sobre-nos/08.jpg", "alt": "Óleos essenciais e flores"}, {"src": "sobre-nos/09.jpg", "alt": "Bandeja de boas-vindas com frutas"}, {"src": "sobre-nos/10.jpg", "alt": "Sala de massagem individual preparada"}, {"src": "sobre-nos/11.jpg", "alt": "Sala de massagem dupla, vista com espelho"}, {"src": "sobre-nos/12.jpg", "alt": "Sala de massagem dupla preparada"}];
const VIDEOS_DATA = [{"id": "ritual", "title": "Ritual Terapêutico & Toque Humano", "badge": "RITUAL DE CUIDADO", "description": "Sinta a atmosfera de paz e acolhimento em cada toque de nossas massoterapeutas.", "src": "videos/Massagem-01.mp4", "whatsappMessage": "Olá! Vi o vídeo do Ritual Terapêutico no site e gostaria de agendar uma sessão."}, {"id": "sensorial", "title": "Alívio de Tensões & Presença", "badge": "SENSORIAL", "description": "Técnicas profundas para liberar restrições musculares e renovar suas energias.", "src": "videos/Massagem-02.mp4", "whatsappMessage": "Olá! Vi o vídeo de Alívio de Tensões no site e gostaria de agendar uma sessão."}, {"id": "como-funciona", "title": "Como Funciona Sua Experiência", "badge": "ACOLHIMENTO", "description": "Conheça o passo a passo da sua recepção, avaliação personalizada e momento de pausa.", "src": "videos/Como funciona a massagem.mp4", "whatsappMessage": "Olá! Vi o vídeo sobre Como Funciona a Sessão no site e gostaria de mais informações."}];

function getWhatsappLink(message) {
  return "https://wa.me/551151081983?text=" + encodeURIComponent(message);
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true });
  }

  const header = document.querySelector('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navOverlay = document.querySelector('.nav-overlay');
  const navLinks = document.querySelectorAll('header nav a');

  function toggleMenu() {
    const isOpen = header.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    if (navOverlay) navOverlay.classList.toggle('active', isOpen);
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', () => {
      header.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      navOverlay.classList.remove('active');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      if (navOverlay) navOverlay.classList.remove('active');
    });
  });

  function setupCarousel(wrapperId, containerId) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;

    const container = document.getElementById(containerId);
    const prevBtn = wrapper.querySelector('.prev-btn');
    const nextBtn = wrapper.querySelector('.next-btn');
    const dotsContainer = wrapper.querySelector('.carousel-dots');
    
    if (!container) return;

    const cards = Array.from(container.children);
    const totalItems = cards.length;
    let activeIndex = 0;

    if (dotsContainer && totalItems > 1) {
      dotsContainer.innerHTML = '';
      cards.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = "carousel-dot " + (idx === 0 ? "active" : "");
        dot.setAttribute('aria-label', "Ir para o slide " + (idx + 1));
        dot.addEventListener('click', () => scrollToIndex(idx));
        dotsContainer.appendChild(dot);
      });
    }

    function updateControls() {
      const card = cards[0];
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const gap = parseFloat(window.getComputedStyle(container).columnGap || window.getComputedStyle(container).gap || '20');
      const itemSize = cardWidth + (isNaN(gap) ? 0 : gap);

      if (itemSize > 0) {
        activeIndex = Math.round(container.scrollLeft / itemSize);
        activeIndex = Math.min(Math.max(0, activeIndex), totalItems - 1);
      }

      if (prevBtn) prevBtn.disabled = activeIndex === 0;
      if (nextBtn) nextBtn.disabled = activeIndex === totalItems - 1;

      if (dotsContainer) {
        const dots = Array.from(dotsContainer.children);
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === activeIndex);
        });
      }
    }

    function scrollToIndex(idx) {
      const card = cards[0];
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const gap = parseFloat(window.getComputedStyle(container).columnGap || window.getComputedStyle(container).gap || '20');
      const itemSize = cardWidth + (isNaN(gap) ? 0 : gap);
      const targetIndex = Math.min(Math.max(0, idx), totalItems - 1);

      container.scrollTo({
        left: targetIndex * itemSize,
        behavior: 'smooth'
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => scrollToIndex(activeIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => scrollToIndex(activeIndex + 1));
    }

    container.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls, { passive: true });
    updateControls();
  }

  setupCarousel('services-wrapper', 'services-slider');
  setupCarousel('testimonials-wrapper', 'testimonials-slider');
  setupCarousel('videos-wrapper', 'video-gallery-slider');

  const videoModal = document.getElementById('video-modal');
  const videoPlayer = document.getElementById('video-modal-player');
  const videoModalTitle = document.getElementById('video-modal-title');
  const videoModalCta = document.getElementById('video-modal-cta');
  const videoModalClose = document.getElementById('video-modal-close');

  function openVideoModal(src, title, whatsappMessage) {
    if (!videoModal || !videoPlayer) return;
    const cleanSrc = src.split('#')[0];
    videoPlayer.src = cleanSrc;
    if (videoModalTitle) videoModalTitle.textContent = title;
    if (videoModalCta) {
      videoModalCta.href = getWhatsappLink(whatsappMessage || 'Olá, gostaria de agendar uma sessão.');
    }
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    videoPlayer.currentTime = 0;
    videoPlayer.play().catch(() => {});
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    if (videoPlayer) {
      videoPlayer.pause();
      videoPlayer.src = '';
    }
  }

  if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  document.querySelectorAll('.video-card').forEach((card, idx) => {
    const videoObj = VIDEOS_DATA[idx];
    if (videoObj) {
      card.addEventListener('click', () => {
        openVideoModal(videoObj.src, videoObj.title, videoObj.whatsappMessage);
      });
    }
  });

  const howToArriveCard = document.querySelector('.how-to-arrive-preview');
  const howToArriveBtn = document.querySelector('.how-to-arrive-btn');
  const howToArriveMsg = 'Olá! Gostaria de tirar uma dúvida sobre como chegar ao Serenari Spa.';
  const howToArriveSrc = 'videos/Como chegar no Serenari.mp4';
  const howToArriveTitle = 'Como Chegar no Serenari Spa';

  if (howToArriveCard) {
    howToArriveCard.addEventListener('click', () => openVideoModal(howToArriveSrc, howToArriveTitle, howToArriveMsg));
  }
  if (howToArriveBtn) {
    howToArriveBtn.addEventListener('click', () => openVideoModal(howToArriveSrc, howToArriveTitle, howToArriveMsg));
  }

  const serviceModal = document.getElementById('service-modal');
  const serviceModalTitle = document.getElementById('service-modal-title');
  const serviceModalDesc = document.getElementById('service-modal-desc');
  const serviceModalMainImg = document.getElementById('service-modal-main-img');
  const serviceModalGalleryGrid = document.getElementById('service-modal-gallery-grid');
  const serviceModalCta = document.getElementById('service-modal-cta');
  const serviceModalClose = document.getElementById('service-modal-close');

  function openServiceModal(service) {
    if (!serviceModal) return;
    if (serviceModalTitle) serviceModalTitle.textContent = service.title;
    if (serviceModalDesc) serviceModalDesc.textContent = service.description;
    if (serviceModalMainImg) {
      serviceModalMainImg.src = service.img;
      serviceModalMainImg.alt = service.title;
    }
    if (serviceModalCta) {
      serviceModalCta.href = getWhatsappLink(service.whatsappText);
    }
    if (serviceModalGalleryGrid) {
      serviceModalGalleryGrid.innerHTML = '';
      if (service.gallery && service.gallery.length > 0) {
        service.gallery.forEach(item => {
          const thumb = document.createElement('img');
          thumb.src = item.src;
          thumb.alt = service.title;
          thumb.className = 'service-modal-thumb';
          thumb.style.width = '70px';
          thumb.style.height = '70px';
          thumb.style.objectFit = 'cover';
          thumb.style.borderRadius = '4px';
          thumb.style.cursor = 'pointer';
          thumb.addEventListener('click', () => {
            if (serviceModalMainImg) serviceModalMainImg.src = item.src;
          });
          serviceModalGalleryGrid.appendChild(thumb);
        });
      }
    }
    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeServiceModal() {
    if (!serviceModal) return;
    serviceModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (serviceModalClose) serviceModalClose.addEventListener('click', closeServiceModal);
  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) closeServiceModal();
    });
  }

  document.querySelectorAll('.service-card').forEach((card, idx) => {
    const srv = SERVICES_DATA[idx];
    if (srv) {
      const btn = card.querySelector('.btn-details');
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          openServiceModal(srv);
        });
      }
    }
  });

  const imageModal = document.getElementById('image-modal');
  const imageModalImg = document.getElementById('image-modal-img');
  const imageModalClose = document.getElementById('image-modal-close');
  const imageModalPrev = document.getElementById('image-modal-prev');
  const imageModalNext = document.getElementById('image-modal-next');
  let currentAboutIdx = 0;

  function openAboutLightbox(idx) {
    if (!imageModal || !imageModalImg) return;
    currentAboutIdx = idx;
    const photo = GALLERY_PHOTOS[currentAboutIdx];
    if (photo) {
      imageModalImg.src = photo.src;
      imageModalImg.alt = photo.alt;
    }
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeAboutLightbox() {
    if (!imageModal) return;
    imageModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (imageModalClose) imageModalClose.addEventListener('click', closeAboutLightbox);
  if (imageModal) {
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) closeAboutLightbox();
    });
  }
  if (imageModalPrev) {
    imageModalPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      currentAboutIdx = (currentAboutIdx - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
      openAboutLightbox(currentAboutIdx);
    });
  }
  if (imageModalNext) {
    imageModalNext.addEventListener('click', (e) => {
      e.stopPropagation();
      currentAboutIdx = (currentAboutIdx + 1) % GALLERY_PHOTOS.length;
      openAboutLightbox(currentAboutIdx);
    });
  }

  document.querySelectorAll('.about-gallery-item').forEach((item, idx) => {
    item.addEventListener('click', () => openAboutLightbox(idx));
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideoModal();
      closeServiceModal();
      closeAboutLightbox();
    }
  });

  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const consentBanner = document.getElementById('consent-banner');
  const consentBtn = document.getElementById('consent-accept-btn');
  if (consentBanner && consentBtn) {
    if (!localStorage.getItem('cookie_consent')) {
      consentBanner.classList.add('visible');
    }
    consentBtn.addEventListener('click', () => {
      localStorage.setItem('cookie_consent', 'accepted');
      consentBanner.classList.remove('visible');
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = contactForm.querySelector('[name="nome"]').value || '';
      const email = contactForm.querySelector('[name="email"]').value || '';
      const mensagem = contactForm.querySelector('[name="mensagem"]').value || '';

      const msg = "Olá! Meu nome é " + nome + " (" + email + "). " + mensagem;
      window.open(getWhatsappLink(msg), '_blank');
      contactForm.reset();
    });
  }
});
