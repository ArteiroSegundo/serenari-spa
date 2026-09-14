import { whatsappLink } from "@/lib/data";

export default function SocialBar() {
  return (
    <div className="social-bar">
      <a
        href={whatsappLink("Olá, vim do site e gostaria de mais informações.")}
        target="_blank"
        rel="noopener noreferrer"
        title="Fale conosco no WhatsApp"
        aria-label="Abra nosso WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
