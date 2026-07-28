import ProductGrid from "../../products/components/ProductGrid";
import { acrylicPlatesData } from "../data/acrylicPlatesData";

const AcrylicPlatesPage = () => {
    return(
        <div>
            <ProductGrid products={acrylicPlatesData}/>
        </div>
    )
}

export default AcrylicPlatesPage;