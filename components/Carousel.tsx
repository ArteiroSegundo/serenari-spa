"use client";

import React, { useRef, useState, useEffect, useCallback, ReactNode, HTMLAttributes } from "react";

type CarouselProps = {
  containerId: string;
  containerClassName: string;
  wrapperClassName?: string;
  showDots?: boolean;
  showArrows?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function Carousel({
  containerId,
  containerClassName,
  wrapperClassName,
  showDots = true,
  showArrows = true,
  children,
  ...wrapperProps
}: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = React.Children.toArray(children);
  const totalItems = items.length;

  const handleScroll = useCallback(() => {
    const container = ref.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>(":scope > *");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const style = window.getComputedStyle(container);
    const gap = parseFloat(style.columnGap || style.gap || "20");
    const itemSize = cardWidth + (isNaN(gap) ? 0 : gap);

    if (itemSize > 0) {
      const newIndex = Math.round(container.scrollLeft / itemSize);
      const clampedIndex = Math.min(Math.max(0, newIndex), totalItems - 1);
      setActiveIndex(clampedIndex);
    }
  }, [totalItems]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    handleScroll();

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  const scrollToIndex = (index: number) => {
    const container = ref.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>(":scope > *");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const style = window.getComputedStyle(container);
    const gap = parseFloat(style.columnGap || style.gap || "20");
    const itemSize = cardWidth + (isNaN(gap) ? 0 : gap);

    const targetIndex = Math.min(Math.max(0, index), totalItems - 1);

    container.scrollTo({
      left: targetIndex * itemSize,
      behavior: "smooth",
    });
    setActiveIndex(targetIndex);
  };

  const scroll = (direction: number) => {
    scrollToIndex(activeIndex + direction);
  };

  return (
    <div className={["carousel-wrapper", wrapperClassName].filter(Boolean).join(" ")} {...wrapperProps}>
      {showArrows && totalItems > 1 && (
        <button
          type="button"
          className="carousel-btn prev-btn"
          aria-label="Item anterior"
          onClick={() => scroll(-1)}
          disabled={activeIndex === 0}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}

      <div className={containerClassName} id={containerId} ref={ref}>
        {items}
      </div>

      {showArrows && totalItems > 1 && (
        <button
          type="button"
          className="carousel-btn next-btn"
          aria-label="Próximo item"
          onClick={() => scroll(1)}
          disabled={activeIndex === totalItems - 1}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}

      {showDots && totalItems > 1 && (
        <div className="carousel-dots" aria-label="Navegação por slides">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`carousel-dot ${idx === activeIndex ? "active" : ""}`}
              aria-label={`Ir para o item ${idx + 1}`}
              aria-current={idx === activeIndex ? "true" : undefined}
              onClick={() => scrollToIndex(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
