import ProductGrid from "../../products/components/ProductGrid";
import { mousePadData } from "../data/mousePadData";

const   MousePadPage = () => {
    return(
        <div>
            <ProductGrid products={mousePadData}/>
        </div>
    )

} 

export default MousePadPage;