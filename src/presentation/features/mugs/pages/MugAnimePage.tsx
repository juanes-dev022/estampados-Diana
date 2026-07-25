import ProductGrid from "../../products/components/ProductGrid";
import { mugsAnimeData } from "../data/mugAnimeData";

const MugAnimePage = () => {
    return(
        <div>
            <ProductGrid products={mugsAnimeData}/>
        </div>
    )
}

export default MugAnimePage;