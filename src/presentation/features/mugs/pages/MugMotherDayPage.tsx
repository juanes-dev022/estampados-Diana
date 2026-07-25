import ProductGrid from "../../products/components/ProductGrid";
import { mugsMotherDay } from "../data/mugsMotherDay";
const MugMotherDayPage = () => {
    return(
        <div>
            <ProductGrid products={mugsMotherDay}/>
        </div>
    )
}

export default MugMotherDayPage;