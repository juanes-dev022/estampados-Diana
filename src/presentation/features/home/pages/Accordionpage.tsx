import { Accordion } from '../components/Accordion';
import { accordionData } from '../data/AccordionData';

/**
 * Página mínima que solo monta el acordeón de imágenes (sin hero,
 * títulos ni contenido extra). Debe renderizarse dentro de un
 * <BrowserRouter> para que la navegación del botón CTA funcione.
 */
export function AccordionPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 16px' }}>
      <Accordion items={accordionData} initialActiveId="sydney" />
    </div>
  );
}