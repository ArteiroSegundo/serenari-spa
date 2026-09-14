export default function Purpose() {
  return (
    <section id="proposito" className="purpose-section">
      <div data-aos="fade-up">
        <h2>NOSSO PROPÓSITO</h2>
        <p>Os pilares que guiam nosso trabalho diário e fortalecem nossa relação com clientes e parceiros.</p>
      </div>
      <div className="purpose-cards-container">
        <div className="purpose-card" data-aos="fade-up" data-aos-delay="100">
          <div className="purpose-card-content">
            <div className="purpose-icon">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h3 className="purpose-title">Missão</h3>
            <p className="purpose-description">
              Transformar o toque em bem‑estar, proporcionando experiências acolhedoras de autocuidado e equilíbrio
              entre corpo e mente para cada pessoa que nos visita.
            </p>
          </div>
        </div>
        <div className="purpose-card" data-aos="fade-up" data-aos-delay="200">
          <div className="purpose-card-content">
            <div className="purpose-icon">
              <i className="fa-solid fa-eye"></i>
            </div>
            <h3 className="purpose-title">Visão</h3>
            <p className="purpose-description">
              Ser o espaço de referência no Alto Tietê para quem busca não apenas massagem, mas pausa consciente,
              cuidado integral e reconexão consigo mesmo.
            </p>
          </div>
        </div>
        <div className="purpose-card" data-aos="fade-up" data-aos-delay="300">
          <div className="purpose-card-content">
            <div className="purpose-icon">
              <i className="fa-solid fa-gem"></i>
            </div>
            <h3 className="purpose-title">Valores</h3>
            <p className="purpose-description">
              Presença e Escuta
              <br />
              Cuidado Humano
              <br />
              Qualidade Contínua
              <br />
              Parceria Local
              <br />
              Autenticidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
