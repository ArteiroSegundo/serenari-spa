"use client";

import { useRef, ReactNode, HTMLAttributes } from "react";

type CarouselProps = {
  containerId: string;
  containerClassName: string;
  wrapperClassName?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function Carousel({
  containerId,
  containerClassName,
  wrapperClassName,
  children,
  ...wrapperProps
}: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);

  function scroll(direction: number) {
    const container = ref.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>(":scope > *");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const style = window.getComputedStyle(container);
    const gap = parseFloat(style.columnGap || style.gap || "20");
    const itemSize = cardWidth + (isNaN(gap) ? 0 : gap);

    const currentIndex = Math.round(container.scrollLeft / itemSize);
    const nextIndex = currentIndex + direction;

    container.scrollTo({
      left: nextIndex * itemSize,
      behavior: "smooth",
    });
  }

  return (
    <div className={["carousel-wrapper", wrapperClassName].filter(Boolean).join(" ")} {...wrapperProps}>
      <button className="carousel-btn prev-btn" aria-label="Anterior" onClick={() => scroll(-1)}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className={containerClassName} id={containerId} ref={ref}>
        {children}
      </div>

      <button className="carousel-btn next-btn" aria-label="Próximo" onClick={() => scroll(1)}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}
