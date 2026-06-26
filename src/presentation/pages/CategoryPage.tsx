import { useParams } from "react-router-dom";
import MugsView from "../features/products/views/MugsView";
import ToteBagsView from "../features/products/views/ToteBagsView";
import ShirtsView from "../features/shirts/views/ShirtsView";

const CategoryPage = () => {
  const { type } = useParams();
  if (type == "mugs") {
      return <MugsView/>
  }
  if (type == "tote-bags") {
    return <ToteBagsView/>
  }
  if (type === "shirts") {
  return <ShirtsView />;
  }
  

  return <h2>categorias no encontrada</h2>;
};

export default CategoryPage;