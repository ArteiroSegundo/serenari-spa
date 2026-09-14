import Carousel from "@/components/Carousel";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

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
          <ServiceCard service={service} key={service.title} />
        ))}
      </Carousel>
    </main>
  );
}
