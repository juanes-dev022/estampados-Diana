import { useState, type ReactNode } from "react";
import "./CollapsibleSection.css";

interface Props {
  eyebrow: string;
  title: string;
  preview: ReactNode;
  children: ReactNode;
}

const CollapsibleSection = ({ eyebrow, title, preview, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="collapsible">
      <button
        type="button"
        className="collapsible__header"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <div className="collapsible__header-text">
          <p className="collapsible__eyebrow">{eyebrow}</p>
          <h2 className="collapsible__title">{title}</h2>
        </div>

        <svg
          className={`collapsible__chevron ${
            isOpen ? "collapsible__chevron--open" : ""
          }`}
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="collapsible__preview">{preview}</div>

      <div
        className={`collapsible__content-wrapper ${
          isOpen ? "collapsible__content-wrapper--open" : ""
        }`}
        aria-hidden={!isOpen}
      >
        <div className="collapsible__content-inner">
          <div className="collapsible__content">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default CollapsibleSection;