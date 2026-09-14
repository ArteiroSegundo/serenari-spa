"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { whatsappLink, type Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);
  const gallery = service.gallery ?? [];
  const hasGallery = gallery.length > 0;
  const images = [
    { src: service.img, width: service.width, height: service.height },
    ...gallery,
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="service-card">
      <div
        className={hasGallery ? "service-card-img-wrapper has-gallery" : "service-card-img-wrapper"}
        onClick={() => hasGallery && setOpen(true)}
      >
        <Image
          src={service.img}
          alt={service.alt}
          width={service.width}
          height={service.height}
          className="service-card-img"
        />
        {hasGallery && (
          <span className="service-gallery-badge">
            <i className="fa-solid fa-images"></i> {images.length}
          </span>
        )}
      </div>
      <div className="service-card-content">
        <h3>{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <a href={whatsappLink(service.whatsappText)} className="btn" target="_blank" rel="noreferrer">
          Saiba Mais
        </a>
      </div>

      {open &&
        createPortal(
          <div className="service-modal" onClick={() => setOpen(false)}>
            <span className="close-btn" onClick={() => setOpen(false)}>
              &times;
            </span>
            <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
              <h3 className="service-modal-title">{service.title}</h3>
              <Carousel
                containerId={`service-modal-${service.title}`}
                containerClassName="service-modal-carousel"
                wrapperClassName="service-modal-wrapper"
              >
                {images.map((img, i) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={`${service.alt} - foto ${i + 1}`}
                    width={img.width}
                    height={img.height}
                    className="service-modal-img"
                  />
                ))}
              </Carousel>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
