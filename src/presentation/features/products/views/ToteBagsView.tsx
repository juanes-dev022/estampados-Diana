import ProductGrid from "../components/ProductGrid"
import { toteBagsData } from "../../tote-bags/data/toteBagsData"
import { Link } from "react-router-dom";

const ToteBagsView = () =>{
    return(
        <div>
            <h1 style={ {marginBottom: "20px"}}>
                Tote bag
            </h1>

            <Link 

            style={{
                display: "inline-block",
                padding: "14px 20px",
                borderRadius: "14px",
                background: "#222",
                border: "none",
                cursor: "pointer",
                marginBottom: "20px",
                fontFamily: "Arial, sans-serif",
                boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
                color: "#fff",
                textDecoration: "none",
            }}

            to="/tote-bags">
                perosnalizar tote bag
            </Link>
            
            
            <ProductGrid products={toteBagsData}/>
        </div>
    );
}

export default ToteBagsView;