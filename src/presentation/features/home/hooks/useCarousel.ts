import { useEffect, useRef, useState } from "react";

interface Props {
  total: number;
  interval?: number;
}

export const useCarousel = ({ total, interval = 4000 }: Props) => {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const currentTranslate = useRef(0);

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  // autoplay
  useEffect(() => {
    if (isDragging) return;

    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [current, isDragging]);

  // touch handlers
  const onTouchStart = (x: number) => {
    setIsDragging(true);
    startX.current = x;
  };

  const onTouchMove = (x: number) => {
    currentTranslate.current = x - startX.current;
  };

  const onTouchEnd = () => {
    setIsDragging(false);

    if (currentTranslate.current > 50) prev();
    else if (currentTranslate.current < -50) next();

    currentTranslate.current = 0;
  };

  return {
    current,
    next,
    prev,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};