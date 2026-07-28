import { NavLink } from "react-router-dom";
import "./Sidebar.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { to: "/", label: "Home" },
  { to: "/category/shirts", label: "Camisas" },
  { to: "/category/mugs", label: "Vasos" },
  { to: "/category/tote-bags", label: "Tote bag" },
  { to: "/Llaveros", label: "Llaveros" },
  {to: "/Mouse pad", label: "Mouse Pad"},
  {to: "/Calendarios", label: "Agendas"},
  {to: "/Acrilicos", label: "Placa en acrilico"},
  {to: "/Termos", label: "Termos"},
  {to: "/Caramañolas", label: "Caramañolas"},
];

const Sidebar = ({ isOpen, onClose }: Props) => {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      <aside
        className={`sidebar ${isOpen ? "sidebar--open" : "sidebar--closed"}`}
      >
        <div className="sidebar__header">
          <p className="sidebar__title">Menú</p>
          <button
            className="sidebar__close-btn"
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        <nav className="sidebar__nav">
          <ul className="sidebar__list">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;