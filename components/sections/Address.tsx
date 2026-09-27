"use client";

import { useState } from "react";
import VideoModal from "@/components/VideoModal";

export default function Address() {
  const [showHowToArriveVideo, setShowHowToArriveVideo] = useState(false);

  return (
    <section id="endereco" className="address-section">
      <div data-aos="fade-up">
        <h2>Venha nos Fazer uma Visita!</h2>
        <p className="section-subtitle">
          Estamos prontos para acolher você no coração de Suzano/SP.
        </p>
      </div>

      <div className="address-grid" data-aos="fade-up">
        <div className="address-unit">
          <h3>Nosso Espaço em Suzano/SP</h3>
          <a
            href="https://maps.app.goo.gl/J1rNn4WwhbDD5uqx9"
            target="_blank"
            rel="noreferrer"
            className="address-link"
          >
            <i className="fa-solid fa-location-dot"></i> R. Mal. Rondon, 192 - Jardim Santa Helena, Suzano/SP
          </a>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6041738319855!2d-46.319880727688655!3d-23.546735014200387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7bd80060d1db%3A0xeff5eecc8a2157e1!2sSERENARI%20SPA%20-%20MASSAGENS!5e0!3m2!1sen!2sbr!4v1761682751052!5m2!1sen!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="how-to-arrive-card">
          <div
            className="how-to-arrive-preview"
            role="button"
            tabIndex={0}
            onClick={() => setShowHowToArriveVideo(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setShowHowToArriveVideo(true);
              }
            }}
          >
            <video
              src="/videos/Como chegar no Serenari.mp4#t=0.001"
              muted
              loop
              playsInline
              preload="auto"
              className="how-to-arrive-video"
              onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0.001;
              }}
            />
            <div className="video-play-overlay">
              <div className="video-play-button">
                <i className="fa-solid fa-play"></i>
              </div>
              <span>Vídeo Guia de Acesso</span>
            </div>
          </div>
          <div className="how-to-arrive-info">
            <h3><i className="fa-solid fa-video"></i> Veja Como Chegar</h3>
            <p>Assista ao vídeo da fachada, acesso e recepção para sua chegada tranquila.</p>
            <button
              type="button"
              className="btn how-to-arrive-btn"
              onClick={() => setShowHowToArriveVideo(true)}
            >
              <i className="fa-solid fa-play"></i> Ver Vídeo de Acesso
            </button>
          </div>
        </div>
      </div>

      <div className="operating-hours" data-aos="fade-up">
        <h3>Horário de Funcionamento</h3>
        <ul>
          <li>
            <strong>Segunda a Sábado:</strong> 09:00hr - 19:00hr
          </li>
          <li>
            <strong>Domingo:</strong> Fechado
          </li>
        </ul>
      </div>

      <VideoModal
        isOpen={showHowToArriveVideo}
        videoSrc="/videos/Como chegar no Serenari.mp4"
        title="Como Chegar no Serenari Spa"
        whatsappMessage="Olá! Gostaria de tirar uma dúvida sobre como chegar ao Serenari Spa."
        onClose={() => setShowHowToArriveVideo(false)}
      />
    </section>
  );
}
