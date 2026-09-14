export const WHATSAPP_BASE = "https://wa.me/551151081983";

export function whatsappLink(text: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export type Service = {
  img: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  description: string;
  whatsappText: string;
};

export const services: Service[] = [
  {
    img: "/massagem-relaxante.png",
    width: 1200,
    height: 1180,
    alt: "Massagem Relaxante",
    title: "Massagem Relaxante",
    description:
      "Desconecte-se da rotina com toques suaves, aliviando o estresse, a ansiedade e renovando suas energias por completo.",
    whatsappText: "Olá, gostaria de saber mais sobre a Massagem Relaxante.",
  },
  {
    img: "/massagem-terapeutica.png",
    width: 900,
    height: 1316,
    alt: "Massagem Terapêutica",
    title: "Massagem Terapêutica",
    description:
      "Focada em aliviar dores musculares crônicas e contraturas, restaurando sua mobilidade, conforto e bem-estar físico.",
    whatsappText: "Olá, gostaria de saber mais sobre a Massagem Terapêutica.",
  },
  {
    img: "/massagem-localizada.png",
    width: 1200,
    height: 1145,
    alt: "Massagem Localizada",
    title: "Massagem Localizada",
    description:
      "Alívio direcionado para áreas específicas de tensão ou dor, como pescoço, ombros ou lombar, proporcionando conforto imediato.",
    whatsappText: "Olá, gostaria de saber mais sobre a Massagem Localizada.",
  },
  {
    img: "/massagem-desportiva.png",
    width: 960,
    height: 844,
    alt: "Massagem Desportiva",
    title: "Massagem Desportiva",
    description:
      "Ideal para atletas, foca na prevenção de lesões e na recuperação muscular, melhorando o desempenho e a flexibilidade.",
    whatsappText: "Olá, gostaria de saber mais sobre a Massagem Desportiva.",
  },
  {
    img: "/drenagem-linfatica-corporal.png",
    width: 928,
    height: 1120,
    alt: "Drenagem Linfática Corporal",
    title: "Drenagem Linfática Corporal",
    description:
      "Estimule o sistema linfático para reduzir a retenção de líquidos, promovendo uma sensação de leveza e bem-estar.",
    whatsappText: "Olá, gostaria de saber mais sobre a Drenagem Corporal.",
  },
  {
    img: "/massagem-com-pedras-quentes.png",
    width: 928,
    height: 1120,
    alt: "Massagem com Pedras Quentes",
    title: "Massagem Pedras Quentes",
    description:
      "Sinta o calor terapêutico das pedras vulcânicas aliviando tensões profundas em um relaxamento incomparável.",
    whatsappText:
      "Olá, gostaria de saber mais sobre a Massagem com Pedras Quentes.",
  },
  {
    img: "/ventosa-terapia.png",
    width: 1149,
    height: 773,
    alt: "Ventosa Terapia",
    title: "Ventosa Terapia",
    description:
      "Alivie tensões e melhore a circulação com a antiga técnica de Vento.saterapia, promovendo bem-estar e alívio muscular.",
    whatsappText: "Olá, gostaria de saber mais sobre a Vento.saterapia.",
  },
  {
    img: "/reflexologia-podal.png",
    width: 326,
    height: 313,
    alt: "Reflexologia Podal",
    title: "Reflexologia Podal",
    description:
      "Estimule pontos de energia nos pés que correspondem a órgãos e sistemas do corpo, promovendo equilíbrio e relaxamento.",
    whatsappText: "Olá, gostaria de saber mais sobre a Reflexologia Podal.",
  },
  {
    img: "/shiatsu.png",
    width: 790,
    height: 418,
    alt: "Shiatsu",
    title: "Shiatsu",
    description:
      "Experimente a tradicional massagem japonesa que utiliza pressão dos dedos para reequilibrar a energia vital do corpo.",
    whatsappText: "Olá, gostaria de saber mais sobre o Shiatsu.",
  },
  {
    img: "/drenagem-linfatica-facial.png",
    width: 468,
    height: 382,
    alt: "Drenagem Linfática Facial",
    title: "Drenagem Linfática Facial",
    description:
      "Reduza inchaços e melhore a circulação facial, promovendo uma pele mais radiante, saudável e com aspecto descansado.",
    whatsappText: "Olá, gostaria de saber mais sobre a Drenagem Facial.",
  },
  {
    img: "/esfoliacao-corporal.png",
    width: 1024,
    height: 1024,
    alt: "Esfoliação Corporal",
    title: "Esfoliação Corporal",
    description:
      "Renove sua pele com uma esfoliação profunda, removendo células mortas e deixando-a macia, suave e luminosa.",
    whatsappText: "Olá, gostaria de saber mais sobre a Esfoliação Corporal.",
  },
  {
    img: "/revitalizacao-facial.png",
    width: 960,
    height: 1088,
    alt: "Revitalização Facial",
    title: "Revitalização Facial",
    description:
      "Proporcione nutrição e hidratação intensa para sua pele, restaurando o brilho natural e a vitalidade do seu rosto.",
    whatsappText: "Olá, gostaria de saber mais sobre a Revitalização Facial.",
  },
  {
    img: "/liberacao-miofascial.png",
    width: 992,
    height: 1056,
    alt: "Liberação Miofascial",
    title: "Liberação Miofascial",
    description:
      "Terapia profunda para liberar tensões e restrições nas fáscias musculares, melhorando a flexibilidade e reduzindo dores.",
    whatsappText: "Olá, gostaria de saber mais sobre a Liberação Miofascial.",
  },
  {
    img: "/limpeza-de-pele-natural.png",
    width: 777,
    height: 707,
    alt: "Limpeza de Pele Natural",
    title: "Limpeza de Pele Natural",
    description:
      "Purifique e hidrate sua pele com produtos naturais, removendo impurezas e promovendo um toque fresco e saudável.",
    whatsappText:
      "Olá, gostaria de saber mais sobre a Limpeza de Pele Natural.",
  },
];

export type Testimonial = {
  img: string;
  width: number;
  height: number;
  alt: string;
  name: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    img: "/cris-santos.png",
    width: 72,
    height: 72,
    alt: "Foto de Cris Santos",
    name: "Cris Santos",
    quote:
      "Tive uma experiência maravilhosa, o Spa tem um ambiente tranquilo, proporcionando assim relaxamento e bem estar. Além da excelente profissional que me atendeu... Com certeza voltarei muitas e muitas vezes.",
  },
  {
    img: "/ermeson-silva.png",
    width: 72,
    height: 72,
    alt: "Foto de Ermeson Silva",
    name: "Ermeson Silva",
    quote:
      "Atendimento excelente, profissionais de primeira qualidade, ja estou na terceira sessão indo para a quarta, preço justo, vale muito a pena, se você tem problemas com ansiedade elas tem técnicas especiais que te ajudam nisso, o local é acolhedor e muito aconchegante.",
  },
  {
    img: "/ivi-coelho.png",
    width: 72,
    height: 72,
    alt: "Foto de Ivi Coelho",
    name: "Ivi Coelho",
    quote:
      "Eu amei o atendimento, a massagem! Um momento de autocuidado que indico para todos. Ambiente acolhedor e aconchegante.",
  },
  {
    img: "/janaina-castro.png",
    width: 72,
    height: 72,
    alt: "Foto de JANAINA CASTRO",
    name: "JANAINA CASTRO",
    quote:
      "Eu amei, fui muito bem atendida. O local muito aconchegante A sala climatizada, ambiente agradável, profissional extremamente capacitada. Foi uma experiência incrível. E em relação a massagem, saí leve como uma pluma, e sem as dores nas quais cheguei aqui. Recomendo muito.",
  },
  {
    img: "/isabella-de-lima.png",
    width: 72,
    height: 72,
    alt: "Foto de ISABELLA DE LIMA OLIVEIRA",
    name: "ISABELLA DE LIMA OLIVEIRA",
    quote:
      "Sensacional. É realmente uma experiência, um tratamento, com destaque para os óleos essenciais que trazem todo um aconchego! Atendimento e entrega incríveis. 💙",
  },
  {
    img: "/clarice-portugal.png",
    width: 72,
    height: 72,
    alt: "Foto de Clarice Portugal",
    name: "Clarice Portugal",
    quote:
      "Lugar aconchegante, atendimento excelente, massoterapeuta muito atenciosa, gentil e competente, gostei muito. Super recomendo.",
  },
  {
    img: "/ana-santos.png",
    width: 72,
    height: 72,
    alt: "Foto de ana santos",
    name: "ana santos",
    quote:
      "Meninas super atenciosas!!! Sai bem relaxada após um dia de serviço cansativo , amei a experiência, super indico..",
  },
  {
    img: "/gilberto-brasilino.png",
    width: 72,
    height: 72,
    alt: "Foto de Gilberto Brasilino Reis",
    name: "Gilberto Brasilino Reis",
    quote:
      "Excelente experiência. Extremamente agradecido pela excelente atendimento e sessão muitíssimo ótima. Até a Próxima. Boa tarde.",
  },
  {
    img: "/giovana-grigorio.png",
    width: 72,
    height: 72,
    alt: "Foto de Giovana Grigorio",
    name: "Giovana Grigorio",
    quote:
      "Maravilhoso, desde o atendimento inicial. Um tratamento cuidadoso e personalizado. Feito para a nossa necessidade. Amei a experiência 😊",
  },
];

export type GalleryImage = {
  img: string;
  width: number;
  height: number;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  { img: "/recepcao.jpg",
    width: 1600,
    height: 900, alt: "Nossa Recepção" },
  { img: "/sala-de-massagem-01.jpg",
    width: 1600,
    height: 900, alt: "Sala de Massagem" },
  { img: "/sala-de-massagem-02.jpg",
    width: 1600,
    height: 900, alt: "Sala de Massagem 02" },
  { img: "/sala-de-massagem-03.jpg",
    width: 1600,
    height: 900, alt: "Sala de Massagem 03" },
];
