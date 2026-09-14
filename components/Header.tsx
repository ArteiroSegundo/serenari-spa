"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/data";

type HeaderProps = {
  variant: "home" | "legal";
};

const NAV_ITEMS = [
  { label: "HOME", hash: "#hero" },
  { label: "SERVIÇOS", hash: "#servicos" },
  { label: "AVALIAÇÕES", hash: "#avaliacoes", homeOnly: true },
  { label: "SOBRE NÓS", hash: "#sobre" },
  { label: "ENDEREÇO", hash: "#endereco" },
  { label: "CONTATOS", hash: "#contato" },
];

export default function Header({ variant }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const items = NAV_ITEMS.filter((item) => variant === "home" || !item.homeOnly);
  const logo =
    variant === "home"
      ? { src: "/completa-branca.png", width: 1849, height: 911 }
      : { src: "/logo-serenari-header-removebg-preview.png", width: 627, height: 219 };

  return (
    <header className={open ? "open" : undefined}>
      <Link href="/" className="logo-link">
        <Image
          src={logo.src}
          alt="Serenari Spa Logo"
          width={logo.width}
          height={logo.height}
          className="logo"
          priority
        />
      </Link>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.hash}>
              <Link
                href={variant === "home" ? item.hash : `/${item.hash}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={whatsappLink("Olá, vim do site e gostaria de mais informações.")}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
              onClick={() => setOpen(false)}
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>(11) 5108-1983</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={() => setOpen((v) => !v)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
