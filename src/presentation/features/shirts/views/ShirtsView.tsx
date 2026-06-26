import DesignEditor from "../../../../shared/components/design-editor/DesignEditor";

import frontImage from "../../../../assets/images/camisaBlancaprueb2.png";
import backImage from "../../../../assets/images/camisaAtras.png";

import { shirtColors } from "../data/shirtColors";

const ShirtsView = () => {
  return (
    <DesignEditor
      frontImage={frontImage}
      backImage={backImage}
      colors={shirtColors}
    />
  );
};

export default ShirtsView;