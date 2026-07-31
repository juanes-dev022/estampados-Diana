import Carousel from "./components/Carousel";
import CatalogPreview from "./components/CatalogPreview";
import  imgMichael  from "../../../assets/images/home/combo de vaso + camisa michael jackson.png";
import  imgSublimacion  from "../../../assets/images/home/sublimacion.png";
import { AccordionPage } from "./pages/Accordionpage";


const HomeView = () => {
  return (
    <div style={{ height: "2000px", display: "flex", flexDirection: "column", gap: "20px"  }}>

      <section>
        <img  style={{width: "100%" }} src={imgMichael}  />
      </section>
      <section>
      <Carousel />

    <section>
      <h2>destacados</h2>

      <AccordionPage/>
      
    </section>

      </section>
      <section>
          <img  style={{width: "100%" }} src={imgSublimacion}  />
          <h3>tecnica de sublimacion</h3>
          <h4>usamos DTF como tecnica de sublimacion en camisas, vasos, caramañolas, termos y cuadros.</h4>
      </section>
    </div>
  );
};

export default HomeView;