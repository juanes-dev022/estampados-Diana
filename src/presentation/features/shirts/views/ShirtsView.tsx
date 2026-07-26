import { shirtscollectionData } from "../data/shirtscollectionData";
import ProductCarousel from "../components/ShirtsCaroucelComponent";
import ProductGrid from "../../products/components/ProductGrid";
import { shirtsCarouselData } from "../data/shirtsCarouselData";
import { Link } from "react-router-dom";


const ShirtsView = () => {
  return (

    <div>
        <Link
          to="/camisa/diseña tu camisa"
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
        Personaliza Tu Camisa
      </Link>

      <div style={{marginBottom: "60px"}}>
              <ProductCarousel products={shirtsCarouselData} />
      
      </div>
      <div style={{marginBottom: "100px"}}>
              <ProductGrid products={shirtscollectionData}/>

      </div>
    </div>
  );
};

export default ShirtsView;