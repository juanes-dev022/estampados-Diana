import ProductGrid from "../components/ProductGrid";
import { mugsData } from "../data/mugsData";
import { Link } from "react-router-dom";
import { useState } from "react";

const MugsView = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>
        Mugs personalizados
      </h2>

      <button  

          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsActive(false);
          }}
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
          style={{
            padding: "14px 20px",
            borderRadius: "14px",
            background: isHovered ? "#3a3a3a" : "#222",
            border: "none",
            cursor: "pointer",
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
            boxShadow: isHovered
              ? "0 6px 12px rgba(0,0,0,0.25)"
              : "0 4px 6px rgba(0,0,0,0.15)",
            transform: isActive ? "scale(0.95)" : "scale(1)",
            transition: "all 0.2s ease",}}
      >
        <Link  style={{
              color: "#fff",
              fontFamily: "Arial, sans-serif",
              textDecoration: "none",
            }} 
          to="/mug">personaliza tu mug
        </Link>
      </button>

      <ProductGrid products={mugsData} />
    </div>
  );
};

export default MugsView;