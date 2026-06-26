import { useRef } from "react";
import type { RefObject } from "react";

interface Position { x: number; y: number; }
interface Params {
  containerRef: RefObject<HTMLDivElement | null>;
  onMove: (position: Position) => void;
}

export const usePointerDrag = ({ containerRef, onMove }: Params) => {
  const pointerIdRef = useRef<number | null>(null);

  const clamp = (v: number, min = 0, max = 100) =>
    Math.max(min, Math.min(max, v));

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerIdRef.current = e.pointerId;
    try {
      (e.currentTarget as Element).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (pointerIdRef.current !== null && pointerIdRef.current !== event.pointerId) return;
    if (event.buttons === 0) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = clamp(((event.clientX - rect.left) / rect.width) * 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100);

    onMove({ x, y });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    try {
      (e.currentTarget as Element).releasePointerCapture(e.pointerId);
    } catch {}
    pointerIdRef.current = null;
  };

  return { handlePointerDown, handlePointerMove, handlePointerUp };
};