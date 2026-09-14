import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";
import BackToTop from "@/components/BackToTop";
import ConsentBanner from "@/components/ConsentBanner";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Purpose from "@/components/sections/Purpose";
import Address from "@/components/sections/Address";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Serenari Spa | Massoterapia Humanizada em Suzano/SP",
  description:
    "Espaço de massoterapia humanizada em Suzano/SP. Oferecemos experiências de bem-estar com acolhimento, presença e cuidado para transformar o toque em saúde e equilíbrio.",
  openGraph: {
    title: "Serenari Spa | Sua Pausa Consciente",
    description: "Experiências completas de cuidado com o corpo e a mente. Transformamos o toque em bem-estar.",
  },
  twitter: {
    title: "Serenari Spa | Sua Pausa Consciente",
    description: "Experiências completas de cuidado com o corpo e a mente. Transformamos o toque em bem-estar.",
  },
};

export default function Home() {
  return (
    <>
      <link rel="preload" href="/background-hero.jpg" as="image" />
      <link rel="preload" href="/background-hero-mobile.jpg" as="image" media="(max-width: 768px)" />
      <Header variant="home" />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Purpose />
      <Address />
      <Contact />
      <SocialBar />
      <BackToTop />
      <Footer />
      <ConsentBanner />
    </>
  );
}
