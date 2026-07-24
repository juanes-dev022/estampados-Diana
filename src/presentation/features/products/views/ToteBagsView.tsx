import ProductGrid from "../components/ProductGrid"
import { toteBagsData } from "../../tote-bags/data/toteBagsData"
import { Link } from "react-router-dom";

const ToteBagsView = () =>{
    return(
        <div>
            <h2 style={ {marginBottom: "20px"}}>
                tote bag
            </h2>

            <button style={{marginBottom: "20px"}}>
                <Link to="/tote-bags">perosnalizar tote bag</Link>
            </button>
            
            <ProductGrid products={toteBagsData}/>
        </div>
    );
}

export default ToteBagsView;