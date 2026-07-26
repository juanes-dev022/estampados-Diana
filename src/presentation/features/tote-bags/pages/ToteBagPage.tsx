import DesignEditor from "../../../../shared/components/design-editor/DesignEditor";

import frontImage from "../../../../assets/images/tote-bags/image-removebg-preview.png";
import backImage from "../../../../assets/images/tote-bags/image-removebg-preview.png";

import { toteBagColors } from "../data/toteBagColors";

const ToteBagPage = () => {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Personaliza Tu Tote Bag
      </h1>

      <DesignEditor
        frontImage={frontImage}
        backImage={backImage}
        colors={toteBagColors}
        showColorPicker={true}
      />
    </div>
  );
};

export default ToteBagPage;