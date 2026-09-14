import { whatsappLink } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div data-aos="fade-up">
        <h2>Agende Seu Momento</h2>
        <p>
          Entre em contato agora mesmo e descubra como podemos cuidar de você. Sua jornada de bem-estar começa aqui!
        </p>
      </div>
      <div className="contact-cards">
        <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
          <h3>
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </h3>
          <p>(11) 5108-1983</p>
          <a
            href={whatsappLink("Olá, vim do site e gostaria de mais informações.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Agendar Agora!
          </a>
        </div>
        <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
          <h3>
            <i className="fa-brands fa-instagram"></i> Instagram
          </h3>
          <p>Siga nosso perfil e inspire-se.</p>
          <a href="https://www.instagram.com/serenarispa" target="_blank" rel="noopener noreferrer" className="btn">
            Seguir Agora!
          </a>
        </div>
        <div className="contact-card" data-aos="fade-up" data-aos-delay="300">
          <h3>
            <i className="fa-brands fa-facebook-f"></i> Facebook
          </h3>
          <p>Curta nossa página no Facebook.</p>
          <a
            href="https://www.facebook.com/profile.php?id=61571599336923"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Curtir Página
          </a>
        </div>
      </div>
    </section>
  );
}
