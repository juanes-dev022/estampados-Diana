import ProductGrid from "../components/ProductGrid";
import { mugsData } from "../../mugs/data/mugsData";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const MugsView = () => {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>
        Mugs personalizados
      </h2>

      <Link
        to="/mug"
        style={{
          display: "inline-block",
          padding: "14px 20px",
          borderRadius: "14px",
          background: "#222",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
          fontFamily: "Arial, sans-serif",
          boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        personaliza tu mug
      </Link>

      <ProductGrid products={mugsData} />

      <ProductGrid products={[]} />

      
    </div>
  );
};

export default MugsView;