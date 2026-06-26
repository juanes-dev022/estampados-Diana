const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#111",
        borderTop: "1px solid #333",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 0",
        zIndex: 1000,
        
      }}
    >
      {/* Redes sociales */}
      <div style={{ marginBottom: "16px" }}>
        <p style={{ marginBottom: "8px" }}>Síguenos</p>

        <div style={{ display: "flex", gap: "12px" }}>
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="24" />
          <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" width="24" />
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="24" />
        </div>
      </div>

      {/* Métodos de pago */}
      <div>
        <p style={{ marginBottom: "8px" }}>Métodos de pago</p>

        <div style={{ display: "flex", gap: "12px" }}>
          <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" width="40" />
          <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" width="40" />
          <img src="https://cdn-icons-png.flaticon.com/512/825/825454.png" width="40" />
        </div>
      </div>
    </footer>
  );
};



export default Footer;