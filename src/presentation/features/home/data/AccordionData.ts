import type { ImageAccordionItem } from '../types/AccordionTypes';
 
/**
 * Datos de ejemplo (placeholders de randomuser.me, pensados solo
 * para desarrollo). Reemplaza imageUrl, name, role y path por tu
 * contenido y rutas reales.
 */



export const accordionData: ImageAccordionItem[] = [
  {
    id: 'marcos',
    name: 'Marcos Ibáñez',
    role: 'Diseñador UX',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    path: '/equipo/marcos-ibanez',
    ctaLabel: 'Ver perfil',
  },
  {
    id: 'sydney',
    name: 'Sydney Flores',
    role: 'Diseñadora de producto',
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    path: '/equipo/sydney-flores',
    ctaLabel: 'Ver perfil',
  },
  {
    id: 'julian',
    name: 'Julián Torres',
    role: 'Desarrollador Frontend',
    imageUrl: 'https://randomuser.me/api/portraits/men/54.jpg',
    path: '/equipo/julian-torres',
    ctaLabel: 'Ver perfil',
  },
  {
    id: 'valentina',
    name: 'Valentina Ruiz',
    role: 'Desarrolladora Backend',
    imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    path: '/equipo/valentina-ruiz',
    ctaLabel: 'Ver perfil',
  },
];
 