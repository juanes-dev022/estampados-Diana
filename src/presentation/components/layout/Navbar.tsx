import logo from "../../../assets/images/logoestampadosDiana.png";

interface Props {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: Props) => {
  return (
    <header
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "16px 20px",
        background: "rgb(5, 3, 0)",
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
          justifySelf: "start",
        }}
      >
        ☰
      </button>

      <img
        src={logo}
        alt="Logo"
        style={{
          height: "100px",
          borderRadius: "20px",
          objectFit: "contain",
          justifySelf: "center",
        }}
      />

      <div />
    </header>
  );
};

export default Navbar;

