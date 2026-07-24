import { useRef, useState } from "react";
import type { ShirtsCaroucel } from "../types/ShirtsCaroucel";

export function useProductCarousel(products: ShirtsCaroucel[]) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Calcula qué imagen está visible según la posición del scroll
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const itemWidth = container.clientWidth;
    const index = Math.round(container.scrollLeft / itemWidth);
    setActiveIndex(index);
  };

  // Permite saltar a una imagen específica (ej. al tocar un punto indicador)
  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({
      left: index * container.clientWidth,
      behavior: "smooth",
    });
  };

  const activeProduct = products[activeIndex];

  return {
    scrollRef,
    activeIndex,
    activeProduct,
    handleScroll,
    scrollToIndex,
  };
}