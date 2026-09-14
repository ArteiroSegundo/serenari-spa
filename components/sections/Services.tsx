import Image from "next/image";
import Carousel from "@/components/Carousel";
import { services, whatsappLink } from "@/lib/data";

export default function Services() {
  return (
    <main id="servicos" className="services-section">
      <div data-aos="fade-up">
        <h2>Nossas Terapias</h2>
        <p className="section-subtitle">
          Oferecemos um portfólio completo de massagens e terapias corporais para atender suas necessidades de
          bem-estar, relaxamento e cuidado.
        </p>
      </div>

      <Carousel
        containerId="services-slider"
        containerClassName="services-container"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <Image
              src={service.img}
              alt={service.alt}
              width={service.width}
              height={service.height}
              className="service-card-img"
            />
            <div className="service-card-content">
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href={whatsappLink(service.whatsappText)} className="btn" target="_blank" rel="noreferrer">
                Saiba Mais
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </main>
  );
}
