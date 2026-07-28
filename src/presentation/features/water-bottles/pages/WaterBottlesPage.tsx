import ProductGrid from "../../products/components/ProductGrid";
import { waterBottlesData } from "../data/waterBottlesData";

const WaterBottlesPage = () => {
  return (
    <div>
      <ProductGrid products={waterBottlesData} />
    </div>
  );
};

export default WaterBottlesPage;