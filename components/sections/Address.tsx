export default function Address() {
  return (
    <section id="endereco" className="address-section">
      <h2 data-aos="fade-up">Venha nos Fazer uma Visita!</h2>
      <div className="address-unit" data-aos="fade-up">
        <h3>Nosso Espaço em Suzano/SP</h3>
        <a href="https://maps.app.goo.gl/J1rNn4WwhbDD5uqx9" target="_blank" rel="noreferrer">
          R. Mal. Rondon, 192 - Jardim Santa Helena, Suzano/SP
        </a>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6041738319855!2d-46.319880727688655!3d-23.546735014200387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7bd80060d1db%3A0xeff5eecc8a2157e1!2sSERENARI%20SPA%20-%20MASSAGENS!5e0!3m2!1sen!2sbr!4v1761682751052!5m2!1sen!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="operating-hours" data-aos="fade-up">
        <h3>Horário de Funcionamento</h3>
        <ul>
          <li>
            <strong>Segunda a Sábado:</strong> 09:00hr - 19:00hr
          </li>
          <li>
            <strong>Domingo:</strong> Fechado
          </li>
        </ul>
      </div>
    </section>
  );
}
