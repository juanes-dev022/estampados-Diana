interface Props {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: Props) => {
  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 20px",
        background: "#111",
        color: "white",
        boxSizing: "border-box",
      }}
    >
      <button
        onClick={onMenuClick}
        style={{
          fontSize: "20px",
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        ☰
      </button>

      <span
        style={{
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        Estampados Diana
      </span>

      <div style={{ width: "24px" }} />
    </header>
  );
};

export default Navbar;