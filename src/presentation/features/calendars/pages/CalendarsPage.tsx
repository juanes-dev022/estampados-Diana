import ProductGrid from "../../products/components/ProductGrid"
import { calendarsData } from "../data/calendarsData"

const CalendarsPage = () => {
    return(
        <div>
            <ProductGrid products={calendarsData}/>
        </div>
    )
}

export default CalendarsPage;