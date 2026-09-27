"use client";

import { useEffect, useRef } from "react";
import { whatsappLink } from "@/lib/data";

type VideoModalProps = {
  isOpen: boolean;
  videoSrc: string | null;
  title: string;
  whatsappMessage?: string;
  onClose: () => void;
};

export default function VideoModal({
  isOpen,
  videoSrc,
  title,
  whatsappMessage = "Olá, vi o vídeo no site e gostaria de agendar um horário.",
  onClose,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen, videoSrc]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoSrc) return null;

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="video-modal-close" onClick={onClose} aria-label="Fechar vídeo">
          &times;
        </button>

        <h3 className="video-modal-title">{title}</h3>

        <div className="video-modal-player-wrapper">
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            playsInline
            controlsList="nodownload"
            className="video-modal-player"
          />
        </div>

        <div className="video-modal-footer">
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn video-modal-cta"
          >
            <i className="fa-brands fa-whatsapp"></i> Agendar Sessão no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
