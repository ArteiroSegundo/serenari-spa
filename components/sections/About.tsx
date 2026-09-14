import Image from "next/image";
import AboutGallery from "@/components/AboutGallery";

export default function About() {
  return (
    <section id="sobre" className="about-us-section">
      <div className="about-us-content" data-aos="fade-up" data-aos-duration="1000">
        <Image
          src="/logo-about-us.png"
          alt="Serenari Spa Logo"
          width={1566}
          height={1239}
          className="about-us-logo"
        />
        <p>
          O Serenari Spa nasceu com um propósito claro: transformar o toque em bem-estar. Somos um espaço de
          massoterapia humanizada em Suzano–SP, criado para oferecer mais do que um momento de alívio —
          proporcionamos experiências completas de cuidado com o corpo e com a mente.
          <br />
          <br />
          Acreditamos que autocuidado é um direito, não um luxo. Cada detalhe importa: o ambiente sensorial, o
          acolhimento respeitoso, os aromas terapêuticos e a escuta atenta das necessidades de cada corpo. No
          Serenari, não oferecemos apenas massagens. Entregamos reconexão, presença e leveza.
        </p>

        <AboutGallery />

        <blockquote className="acrostico">
          <strong>S</strong>antuário de paz onde o corpo encontra alívio,
          <br />
          <strong>E</strong>quilíbrio entre mente, espírito e energia ativa.
          <br />
          <strong>R</strong>enascimento em cada toque, liberação de tensões,
          <br />
          <strong>E</strong>ssência de serenidade em cada sessão.
          <br />
          <strong>N</strong>utrição da alma, espaço acolhedor e sagrado,
          <br />
          <strong>A</strong>colhimento ao presente, na consciência focado.
          <br />
          <strong>R</strong>econexão com o ser, presença plena e liberta,
          <br />
          <strong>I</strong>ntegração de harmonia, onde a cura é certa.
        </blockquote>
      </div>
    </section>
  );
}
