import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { UseImageAccordionReturn } from '../types/AccordionTypes';

/**
 * Maneja qué panel de imagen está activo (expandido) y centraliza
 * la navegación del botón CTA hacia otra página con react-router.
 *
 * @param initialActiveId id del panel que aparece expandido al montar.
 */
export function useAccordion(initialActiveId: string): UseImageAccordionReturn {
  const [activeId, setActiveId] = useState(initialActiveId);
  const navigate = useNavigate();

  const setActive = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const goTo = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  return { activeId, setActive, goTo };
}