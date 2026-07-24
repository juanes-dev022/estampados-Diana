import DesignEditor from "../../../../shared/components/design-editor/DesignEditor";

import frontImage from "../../../../assets/images/shirts/camisaBlancaFrente.png";
import backImage from "../../../../assets/images/shirts/camisaBLancaAtras.png";

import { shirtColors } from "../data/shirtColors";
import ProductCarousel from "../components/ShirtsCaroucelComponent";
import { shirtsCarouselData } from "../data/shirtsCarouselData";

const ShirtsView = () => {
  return (

    <div>
      <ProductCarousel products={shirtsCarouselData} />
    
      <DesignEditor
        frontImage={frontImage}
        backImage={backImage}
        colors={shirtColors}
      />
    </div>
  );
};

export default ShirtsView;