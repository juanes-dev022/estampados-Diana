import ProductGrid from "../../products/components/ProductGrid"
import { thermosData } from "../data/thermosData"

const ThermosPage = () => {
    return(
        <div>
            <ProductGrid products={thermosData}/>
        </div>
    )
}

export default ThermosPage;