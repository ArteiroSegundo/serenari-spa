"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import { galleryImages } from "@/lib/data";

export default function AboutGallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightboxSrc ? "hidden" : "auto";
  }, [lightboxSrc]);

  return (
    <>
      <Carousel containerId="about-slider" containerClassName="gallery-container" wrapperClassName="gallery-wrapper">
        {galleryImages.map((image) => (
          <Image
            key={image.img}
            src={image.img}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="gallery-img zoomable-image"
            onClick={() => setLightboxSrc(image.img)}
          />
        ))}
      </Carousel>
      <p className="image-caption">
        <small>(Clique nas imagens para ampliar)</small>
      </p>

      <div
        id="lightbox"
        className="lightbox"
        style={{ display: lightboxSrc ? "flex" : "none" }}
        onClick={() => setLightboxSrc(null)}
      >
        <span className="close-btn">&times;</span>
        {lightboxSrc && (
          // eslint-disable-next-line @next/next/no-img-element -- arbitrary full-res zoom, intentionally unoptimized
          <img id="lightbox-img" src={lightboxSrc} alt="Imagem Ampliada" />
        )}
      </div>
    </>
  );
}
