import { useCallback } from 'react';
import type { ImageAccordionItem } from '../types/AccordionTypes';
import { useAccordion } from '../hooks/Useaccordion';
import { AccordionItem } from './Accordionitem';
import './Accordion.css';

interface AccordionProps {
  items: ImageAccordionItem[];
  /** id del panel que aparece expandido al montar. Default: el primero. */
  initialActiveId?: string;
}

export function Accordion({ items, initialActiveId }: AccordionProps) {
  const { activeId, setActive, goTo } = useAccordion(
    initialActiveId ?? items[0]?.id ?? ''
  );

  /**
   * Busca qué panel hay bajo unas coordenadas de pantalla (mouse o dedo)
   * y lo activa. Así el acordeón se despliega con el simple movimiento
   * del puntero/dedo, sin necesidad de hacer click o tap.
   */
  const activateFromPoint = useCallback(
    (x: number, y: number) => {
      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      const panel = el?.closest<HTMLElement>('[data-panel-id]');
      const id = panel?.dataset.panelId;
      if (id) setActive(id);
    },
    [setActive]
  );

  const handlePointerActivity = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      // pointerType 'mouse' -> se dispara con el simple hover.
      // pointerType 'touch' -> se dispara mientras el dedo se desliza.
      activateFromPoint(e.clientX, e.clientY);
    },
    [activateFromPoint]
  );

  return (
    <div
      className="image-accordion"
      onPointerMove={handlePointerActivity}
      onPointerDown={handlePointerActivity}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          active={item.id === activeId}
          onActivate={setActive}
          onNavigate={goTo}
        />
      ))}
    </div>
  );
}