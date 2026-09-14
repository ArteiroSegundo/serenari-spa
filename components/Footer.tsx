import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-links">
        <Link href="/termos" target="_blank">Termos de Uso</Link> | <Link href="/privacidade" target="_blank">Política de Privacidade</Link>
      </div>
      <p>CNPJ: 59.668.646/0001-94</p>
      <p>RAZÃO SOCIAL: SERENARI SPA LTDA</p>
      <p>© <span>{year}</span> Serenari Spa. Todos os direitos reservados.</p>
      <a href="mailto:atendimento@serenarispa.com.br" className="footer-link-email">
        Email: atendimento@serenarispa.com.br
      </a>
    </footer>
  );
}
