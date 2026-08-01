import type { ImageAccordionItem } from '../../../../domain/entities/AccordionTypes';

interface AccordionItemProps {
  item: ImageAccordionItem;
  active: boolean;
  onActivate: (id: string) => void;
  onNavigate: (path: string) => void;
}

export function AccordionItem({
  item,
  active,
  onActivate,
  onNavigate,
}: AccordionItemProps) {
  return (
    <div
      className={`image-accordion__panel ${active ? 'is-active' : ''}`}
      data-panel-id={item.id}
      onFocus={() => onActivate(item.id)}
      onClick={() => onActivate(item.id)}
      role="button"
      tabIndex={0}
      aria-pressed={active}
      aria-label={`${item.name}, ${item.role}`}
    >
      <img
        className="image-accordion__img"
        src={item.imageUrl}
        alt={item.name}
        loading="lazy"
        draggable={false}
      />
      <div className="image-accordion__overlay">
        <p className="image-accordion__name">{item.name}</p>
        <p className="image-accordion__role">{item.role}</p>
        <button
          type="button"
          className="image-accordion__cta"
          tabIndex={active ? 0 : -1}
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(item.path);
          }}
        >
          {item.ctaLabel ?? 'Ver más'}
        </button>
      </div>
    </div>
  );
}