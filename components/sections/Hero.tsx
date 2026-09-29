import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
          <div className="hero-badge">
            <i className="fa-solid fa-leaf"></i>
            <span>Spa Urbano em Suzano / SP</span>
          </div>
          <h1>
            Seja bem-vindo(a) ao <span className="hero-highlight">Serenari SPA</span>
          </h1>
          <p>
            Aqui nós transformamos o toque em bem-estar, e entregamos reconexão, presença e leveza através de
            experiências exclusivas de cuidado com o corpo e com a mente.
          </p>
          <div className="hero-actions">
            <a href="#servicos" className="btn btn-primary" id="hero-button">
              <span>Conheça Nossas Terapias</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href="https://wa.me/551151081983?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20experi%C3%AAncia%20no%20Serenari%20SPA."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>Agendar no WhatsApp</span>
            </a>
          </div>

          <div className="hero-trust-bar">
            <div className="trust-stars">★★★★★</div>
            <div className="trust-text">
              <strong>4.9 / 5.0</strong> em mais de 130 avaliações no Google
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
          <div className="hero-window-frame">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title-bar">
                <i className="fa-solid fa-shield-halved window-lock"></i>
                <span>serenari-spa.com.br</span>
              </div>
              <div className="window-action-icon">
                <i className="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
            <div className="window-content">
              <Image
                src="/background-hero.jpg"
                alt="Serenari SPA - Ambiente de Cuidado e Bem-estar"
                width={600}
                height={400}
                className="window-image"
                priority
              />
              <div className="window-floating-card">
                <div className="card-icon">
                  <i className="fa-solid fa-spa"></i>
                </div>
                <div className="card-text">
                  <span className="card-title">Sua Pausa Merecida</span>
                  <span className="card-sub">Experiência Única de Spa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

