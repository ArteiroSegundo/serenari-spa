import Image from "next/image";
import Carousel from "@/components/Carousel";
import { testimonials, GOOGLE_REVIEWS_URL } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="testimonials-section">
      <div data-aos="fade-up">
        <h2>O que Nossos Clientes Dizem</h2>
        <p className="section-subtitle">A satisfação de quem confia em nosso trabalho é nossa maior motivação.</p>
      </div>

      <Carousel
        containerId="testimonials-slider"
        containerClassName="testimonials-container"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.name}>
            <div className="testimonial-header">
              <Image
                src={testimonial.img}
                alt={testimonial.alt}
                width={testimonial.width}
                height={testimonial.height}
                className="testimonial-avatar"
              />
              <div className="testimonial-author">
                <h3>{testimonial.name}</h3>
              </div>
            </div>
            <div className="testimonial-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <blockquote>
              <p>&quot;{testimonial.quote}&quot;</p>
            </blockquote>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="google-verified-badge"
            >
              <i className="fa-brands fa-google"></i>
              Avaliação verificada no Google
            </a>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
