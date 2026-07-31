/**
 * Un enlace individual dentro de una sección del acordeón.
 * Al hacer click, redirige a `path` usando react-router-dom.
 */
export interface AccordionLinkItem {
  id: string;
  label: string;
  description?: string;
  path: string;
}


/**
 * Un panel de imagen del acordeón. Al tocarlo se expande y muestra
 * el overlay con nombre, rol y un botón (CTA) que redirige a `path`.
 */
export interface ImageAccordionItem {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  path: string;
  ctaLabel?: string;
}


/**
 * Contrato que expone el hook useAccordion a los componentes.
 */
export interface UseImageAccordionReturn {
  activeId: string;
  setActive: (id: string) => void;
  goTo: (path: string) => void;
}

/**
 * Una sección colapsable del acordeón (el "título" clickeable
 * que expande/colapsa su contenido).
 */
export interface AccordionSection {
  id: string;
  title: string;
  items: AccordionLinkItem[];
}

/**
 * Contrato que expone el hook useAccordion a los componentes.
 * Mantener esto separado permite tipar props sin acoplar los
 * componentes a la implementación interna del hook.
 */
export interface UseAccordionReturn {
  isOpen: (sectionId: string) => boolean;
  toggleSection: (sectionId: string) => void;
  goTo: (path: string) => void;
}