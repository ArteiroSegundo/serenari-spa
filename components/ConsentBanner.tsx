"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ConsentBanner() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const consentGiven = localStorage.getItem("serenariSpaConsent");
    if (!consentGiven) {
      const timer = setTimeout(() => setHidden(false), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    setHidden(true);
    localStorage.setItem("serenariSpaConsent", "true");
  }

  return (
    <div id="consent-banner" className={hidden ? "hidden" : undefined}>
      <p className="consent-text">
        Nós utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com
        nossos <Link href="/termos" target="_blank">Termos de Uso</Link> e nossa{" "}
        <Link href="/privacidade" target="_blank">Política de Privacidade</Link>.
      </p>
      <button id="accept-consent-btn" className="btn" onClick={accept}>
        Aceitar e Fechar
      </button>
    </div>
  );
}
