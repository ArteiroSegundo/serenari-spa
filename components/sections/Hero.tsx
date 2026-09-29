import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
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
        </div>

        <div className="hero-image-wrapper" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
          <div className="hero-arch-wrapper">
            <div className="hero-arch-frame">
              <Image
                src="/background-hero.jpg"
                alt="Serenari SPA - Recepção"
                width={500}
                height={600}
                className="hero-arch-img"
                priority
              />
            </div>
            <div className="hero-sub-card">
              <Image
                src="/background-hero-mobile.jpg"
                alt="Serenari SPA - Sala de Massagem"
                width={250}
                height={300}
                className="hero-sub-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

