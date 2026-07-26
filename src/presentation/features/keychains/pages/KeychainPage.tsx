import ProductGrid from "../../products/components/ProductGrid";
import { keychainsData } from "../data/keychainsData";

const KeychainPage = () => {
    return(
        <div>
            <h1>Llaveros</h1>
            <ProductGrid products={keychainsData}/>
        </div>
    )   
}

export default KeychainPage;