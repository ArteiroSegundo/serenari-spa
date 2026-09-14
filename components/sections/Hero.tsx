export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className=".hero-background-fade-overlay"></div>
      <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
        <h1>Seja bem vindo(a) ao Serenari SPA</h1>
        <p>
          Aqui nós transformamos o toque em bem-estar, e entregamos reconexão, presença e leveza através de
          experiências de cuidado com o corpo e com a mente.
        </p>
        <a href="#servicos" className="btn" id="hero-button">
          Conheça Nossas Terapias
        </a>
      </div>
    </section>
  );
}
