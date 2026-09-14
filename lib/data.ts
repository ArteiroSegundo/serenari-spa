export const WHATSAPP_BASE = "https://wa.me/551151081983";

export function whatsappLink(text: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
};

export type Service = {
  img: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  description: string;
  whatsappText: string;
  gallery?: GalleryPhoto[];
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
    gallery: [
      { src: "/services/massagem-relaxante/01.jpg", width: 1600, height: 1667 },
      { src: "/services/massagem-relaxante/02.jpg", width: 1600, height: 1794 },
      { src: "/services/massagem-relaxante/03.jpg", width: 1600, height: 2027 },
      { src: "/services/massagem-relaxante/04.jpg", width: 1600, height: 1792 },
      { src: "/services/massagem-relaxante/05.jpg", width: 1600, height: 1828 },
    ],
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
    gallery: [
      { src: "/services/massagem-terapeutica/01.jpg", width: 1600, height: 2133 },
      { src: "/services/massagem-terapeutica/02.jpg", width: 1600, height: 1667 },
      { src: "/services/massagem-terapeutica/03.jpg", width: 1600, height: 1794 },
      { src: "/services/massagem-terapeutica/04.jpg", width: 1600, height: 2027 },
      { src: "/services/massagem-terapeutica/05.jpg", width: 1600, height: 1792 },
      { src: "/services/massagem-terapeutica/06.jpg", width: 1600, height: 1828 },
    ],
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
    gallery: [
      { src: "/services/massagem-localizada/01.jpg", width: 1600, height: 1947 },
      { src: "/services/massagem-localizada/02.jpg", width: 1600, height: 2066 },
      { src: "/services/massagem-localizada/03.jpg", width: 1600, height: 1911 },
      { src: "/services/massagem-localizada/04.jpg", width: 1600, height: 1840 },
      { src: "/services/massagem-localizada/05.jpg", width: 1600, height: 1917 },
      { src: "/services/massagem-localizada/06.jpg", width: 1600, height: 2021 },
    ],
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
    gallery: [
      { src: "/services/massagem-desportiva/01.jpg", width: 1600, height: 2133 },
      { src: "/services/massagem-desportiva/02.jpg", width: 1600, height: 1827 },
      { src: "/services/massagem-desportiva/03.jpg", width: 1600, height: 1850 },
    ],
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
    gallery: [
      { src: "/services/drenagem-corporal/01.jpg", width: 1600, height: 2296 },
      { src: "/services/drenagem-corporal/02.jpg", width: 1600, height: 1927 },
      { src: "/services/drenagem-corporal/03.jpg", width: 1600, height: 2252 },
      { src: "/services/drenagem-corporal/04.jpg", width: 1600, height: 1990 },
      { src: "/services/drenagem-corporal/05.jpg", width: 1600, height: 2026 },
      { src: "/services/drenagem-corporal/06.jpg", width: 1600, height: 2133 },
      { src: "/services/drenagem-corporal/07.jpg", width: 1600, height: 2133 },
      { src: "/services/drenagem-corporal/08.jpg", width: 1600, height: 2133 },
      { src: "/services/drenagem-corporal/09.jpg", width: 1600, height: 1840 },
      { src: "/services/drenagem-corporal/10.jpg", width: 1600, height: 1917 },
      { src: "/services/drenagem-corporal/11.jpg", width: 1600, height: 2021 },
    ],
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
    gallery: [
      { src: "/services/pedras-quentes/01.jpg", width: 1600, height: 1544 },
      { src: "/services/pedras-quentes/02.jpg", width: 1600, height: 2133 },
      { src: "/services/pedras-quentes/03.jpg", width: 1600, height: 1544 },
    ],
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
    gallery: [
      { src: "/services/ventosa-terapia/01.jpg", width: 1600, height: 2133 },
      { src: "/services/ventosa-terapia/02.jpg", width: 1600, height: 2133 },
      { src: "/services/ventosa-terapia/03.jpg", width: 1600, height: 2133 },
      { src: "/services/ventosa-terapia/04.jpg", width: 1600, height: 2133 },
      { src: "/services/ventosa-terapia/05.jpg", width: 1600, height: 2133 },
      { src: "/services/ventosa-terapia/06.jpg", width: 1600, height: 2133 },
      { src: "/services/ventosa-terapia/07.jpg", width: 1600, height: 2133 },
      { src: "/services/ventosa-terapia/08.jpg", width: 1600, height: 2133 },
    ],
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
    gallery: [
      { src: "/services/reflexologia-podal/01.jpg", width: 1215, height: 1295 },
      { src: "/services/reflexologia-podal/02.jpg", width: 1600, height: 1888 },
    ],
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
    gallery: [
      { src: "/services/shiatsu/01.jpg", width: 1600, height: 2133 },
      { src: "/services/shiatsu/02.jpg", width: 1600, height: 2133 },
      { src: "/services/shiatsu/03.jpg", width: 1600, height: 1840 },
      { src: "/services/shiatsu/04.jpg", width: 1600, height: 1667 },
      { src: "/services/shiatsu/05.jpg", width: 1600, height: 1794 },
      { src: "/services/shiatsu/06.jpg", width: 1600, height: 1792 },
      { src: "/services/shiatsu/07.jpg", width: 1600, height: 1828 },
    ],
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
    gallery: [
      { src: "/services/drenagem-facial/01.jpg", width: 1600, height: 1612 },
      { src: "/services/drenagem-facial/02.jpg", width: 1600, height: 2133 },
      { src: "/services/drenagem-facial/03.jpg", width: 1600, height: 1934 },
      { src: "/services/drenagem-facial/04.jpg", width: 1600, height: 1880 },
    ],
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
    gallery: [
      { src: "/services/revitalizacao-facial/01.jpg", width: 1600, height: 1612 },
      { src: "/services/revitalizacao-facial/02.jpg", width: 1600, height: 2133 },
      { src: "/services/revitalizacao-facial/03.jpg", width: 1600, height: 1934 },
      { src: "/services/revitalizacao-facial/04.jpg", width: 1600, height: 1880 },
    ],
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
    gallery: [
      { src: "/services/liberacao-miofascial/01.jpg", width: 1600, height: 2046 },
      { src: "/services/liberacao-miofascial/02.jpg", width: 1600, height: 2512 },
      { src: "/services/liberacao-miofascial/03.jpg", width: 1600, height: 2497 },
      { src: "/services/liberacao-miofascial/04.jpg", width: 1600, height: 2624 },
      { src: "/services/liberacao-miofascial/05.jpg", width: 1600, height: 1631 },
      { src: "/services/liberacao-miofascial/06.jpg", width: 1600, height: 1670 },
      { src: "/services/liberacao-miofascial/07.jpg", width: 1600, height: 2133 },
    ],
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
  {
    img: "/avatars/thauani-cris.png",
    width: 144,
    height: 144,
    alt: "Foto de Thauani Cris",
    name: "Thauani Cris",
    quote:
      "Eu amei a experiência! Foi incrível, sem dúvidas voltarei mais vezes, recomendo muito. Ambiente super agradável, fui muito bem atendida.",
  },
  {
    img: "/avatars/dyana-dyh.png",
    width: 144,
    height: 144,
    alt: "Foto de Dyana Dyh",
    name: "Dyana Dyh",
    quote:
      "Tive uma experiência maravilhosa no spa! O ambiente é extremamente agradável, limpo e acolhedor, transmitindo uma sensação de tranquilidade desde a chegada. A massagem foi simplesmente excelente, muito atenciosa e profissional. Saí renovada e com certeza voltarei mais vezes. Recomendo de olhos fechados!",
  },
  {
    img: "/avatars/gabrielle-fernandes.png",
    width: 144,
    height: 144,
    alt: "Foto de Gabrielle Fernandes",
    name: "Gabrielle Fernandes",
    quote:
      "Serenari experiência incrível, recomendo demais! O atendimento foi impecável, atencioso e com aquele cuidado que faz a gente se sentir especial. O ambiente é lindo, tranquilo e muito aconchegante. Fiz uma massagem relaxante e saí sem sentir absolutamente nada das dores. Com certeza voltarei e já indiquei para amigos e familiares.",
  },
  {
    img: "/avatars/junior-nascimento.png",
    width: 144,
    height: 144,
    alt: "Foto de Junior Nascimento",
    name: "Junior Nascimento",
    quote:
      "Se você está em dúvida sobre ir ou não ir, quero deixar minha avaliação positivíssima para a Serenari. Atendimento impecável, muito atencioso, educado e extremamente competente. A sessão foi ao mesmo tempo relaxante e revigorante. Recomendo sem medo!",
  },
  {
    img: "/avatars/amanda-fernandes.png",
    width: 144,
    height: 144,
    alt: "Foto de Amanda Fernandes",
    name: "Amanda Fernandes",
    quote:
      "Sem dúvidas, o lugar mais aconchegante e acolhedor que já estive em toda a minha vida! Profissionais extremamente qualificados, tratamento ímpar, ambiente aconchegante e lindo! Experiência excelente! Sucesso!",
  },
  {
    img: "/avatars/maxwell-santos.png",
    width: 144,
    height: 144,
    alt: "Foto de Maxwell da Cruz Santos",
    name: "Maxwell da Cruz Santos",
    quote: "Local aconchegante, ótimo atendimento e serviço super profissional.",
  },
  {
    img: "/avatars/fernando-comitre.png",
    width: 144,
    height: 144,
    alt: "Foto de Fernando Comitre",
    name: "Fernando Comitre",
    quote:
      "Ótima experiência. A massagem foi certeira nos pontos de tensão e ajudou demais a aliviar a dor nas costas. Com certeza retornarei.",
  },
];

export type GalleryImage = {
  img: string;
  width: number;
  height: number;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  { img: "/sobre-nos/01.jpg", width: 1086, height: 1448, alt: "Lounge de espera do Serenari Spa" },
  { img: "/sobre-nos/02.jpg", width: 1201, height: 1309, alt: "Recepção do Serenari Spa" },
  { img: "/sobre-nos/03.jpg", width: 1600, height: 2133, alt: "Estação de café e boas-vindas" },
  { img: "/sobre-nos/04.jpg", width: 1600, height: 2181, alt: "Espaço de espera com logo Serenari Spa" },
  { img: "/sobre-nos/05.jpg", width: 1600, height: 2133, alt: "Sala de massagem preparada" },
  { img: "/sobre-nos/06.jpg", width: 1600, height: 2133, alt: "Detalhe da bandeja de boas-vindas" },
  { img: "/sobre-nos/07.jpg", width: 1600, height: 2133, alt: "Sala de massagem individual" },
  { img: "/sobre-nos/08.jpg", width: 1600, height: 2134, alt: "Óleos essenciais e flores" },
  { img: "/sobre-nos/09.jpg", width: 1600, height: 2133, alt: "Bandeja de boas-vindas com frutas" },
  { img: "/sobre-nos/10.jpg", width: 1600, height: 2134, alt: "Sala de massagem individual preparada" },
  { img: "/sobre-nos/11.jpg", width: 1600, height: 1717, alt: "Sala de massagem dupla, vista com espelho" },
  { img: "/sobre-nos/12.jpg", width: 1600, height: 2133, alt: "Sala de massagem dupla preparada" },
];
