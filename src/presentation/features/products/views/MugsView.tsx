import ProductGrid from "../components/ProductGrid";
import { mugsData } from "../data/mugsData";
import { Link } from "react-router-dom";

const MugsView = () => {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>
        Mugs personalizados
      </h2>

      <button style={{marginBottom: "20px"}}>
        <Link to="/mug">perosnalizar tu mug</Link>
      </button>

      <ProductGrid products={mugsData} />
    </div>
  );
};

export default MugsView;