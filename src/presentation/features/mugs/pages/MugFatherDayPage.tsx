import ProductGrid from "../../products/components/ProductGrid";
import { mugsFatherDay } from "../data/mugFatherDay";

const MugFatherDayPage = () => {
    return(
        <div>
            <ProductGrid products={mugsFatherDay}/>
        </div>
    )
}

export default MugFatherDayPage;