import { Link } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: Props) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        />
      )}

      {/* Sidebar */}
      <aside
  style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px",
          height: "100%",
          background: "#222",
          color: "white",
          padding: "20px",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          zIndex: 1000,
        }}
      >
        <button onClick={onClose}>✕</button>

        <nav style={{ marginTop: "20px" }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/" onClick={onClose}>Home</Link>
            </li>
            <li>
              <Link to="/category/shirts" onClick={onClose}>
                Camisas
              </Link>
            </li>
            <li>
              <Link to="/category/mugs" onClick={onClose}>
                Vasos
              </Link>
            </li>
            {/* <li>
              <Link to="/category/frames" onClick={onClose}>
                Cuadros
              </Link>
            </li> */}
            <li>
              <Link to="/category/tote-bags" onClick={onClose}>
                Tote bag
              </Link>
            </li>
            <li>
              <Link to="/Llaveros" onClick={onClose}>
                Llaveros
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;