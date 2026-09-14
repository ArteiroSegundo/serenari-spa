"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      id="back-to-top"
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      style={{ display: visible ? "block" : "none" }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
