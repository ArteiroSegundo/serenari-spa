"use client";

import { useState } from "react";
import Carousel from "@/components/Carousel";
import VideoModal from "@/components/VideoModal";

type VideoItem = {
  id: string;
  title: string;
  badge: string;
  description: string;
  src: string;
  whatsappMessage: string;
};

const VIDEO_LIST: VideoItem[] = [
  {
    id: "ritual",
    title: "Ritual Terapêutico & Toque Humano",
    badge: "RITUAL DE CUIDADO",
    description: "Sinta a atmosfera de paz e acolhimento em cada toque de nossas massoterapeutas.",
    src: "/videos/Massagem-01.mp4",
    whatsappMessage: "Olá! Vi o vídeo do Ritual Terapêutico no site e gostaria de agendar uma sessão.",
  },
  {
    id: "sensorial",
    title: "Alívio de Tensões & Presença",
    badge: "SENSORIAL",
    description: "Técnicas profundas para liberar restrições musculares e renovar suas energias.",
    src: "/videos/Massagem-02.mp4",
    whatsappMessage: "Olá! Vi o vídeo de Alívio de Tensões no site e gostaria de agendar uma sessão.",
  },
  {
    id: "como-funciona",
    title: "Como Funciona Sua Experiência",
    badge: "ACOLHIMENTO",
    description: "Conheça o passo a passo da sua recepção, avaliação personalizada e momento de pausa.",
    src: "/videos/Como funciona a massagem.mp4",
    whatsappMessage: "Olá! Vi o vídeo sobre Como Funciona a Sessão no site e gostaria de mais informações.",
  },
];

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section id="videos" className="video-gallery-section">
      <div data-aos="fade-up">
        <h2>Sua Pausa Consciente em Vídeo</h2>
        <p className="section-subtitle">
          Veja de perto a atmosfera sensorial, a dedicação e o cuidado humanizado que preparamos para você.
        </p>
      </div>

      <Carousel
        containerId="video-gallery-slider"
        containerClassName="video-cards-container"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {VIDEO_LIST.map((video) => (
          <div
            key={video.id}
            className="video-card"
            onClick={() => setActiveVideo(video)}
          >
            <div className="video-card-preview">
              <video
                src={video.src}
                muted
                loop
                playsInline
                preload="metadata"
                className="video-card-element"
                onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />
              <span className="video-badge">{video.badge}</span>
              <div className="video-play-overlay">
                <div className="video-play-button">
                  <i className="fa-solid fa-play"></i>
                </div>
                <span>Assistir Vídeo</span>
              </div>
            </div>

            <div className="video-card-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </Carousel>

      <VideoModal
        isOpen={Boolean(activeVideo)}
        videoSrc={activeVideo?.src || null}
        title={activeVideo?.title || ""}
        whatsappMessage={activeVideo?.whatsappMessage}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}
