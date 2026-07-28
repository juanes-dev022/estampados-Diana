

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Redes sociales */}
      <div className="footer__section">
        <p>Síguenos</p>
        <div className="footer__icons">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            width={24}
            alt="Facebook"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
            width={24}
            alt="Instagram"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            width={24}
            alt="Twitter"
          />
        </div>
      </div>

      {/* Métodos de pago */}
      <div className="footer__section">
        <p>Métodos de pago</p>
        <div className="footer__icons">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNh2e91dXaM5hu4293ShJ5W38czBdYexS1gaW_y9R4kw&s=10"
            width={40}
            alt="Método de pago 1"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNhfmzSAexZkwDnH3gpNb2dc_CjTB2nYDw1vR0LHiDUg&s=10"
            width={40}
            alt="Método de pago 2"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmY125kI-_bR9ptOw1kzCbwtGi0p51ifdXyKqZeut_w&s=10"
            width={40}
            alt="Método de pago 3"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;