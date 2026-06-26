import DesignEditor from "../../../../shared/components/design-editor/DesignEditor";
import { mugColors } from "../data/mugColors";
import MugTypeCarousel from "../components/MugTypeCarousel";

import { mugVariants } from "../data/mugVariants";

import { useMugVariant } from "../hooks/useMugVariant";

const MugPage = () => {
  const {
    selectedVariant,
    setSelectedVariant,
  } = useMugVariant();
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
        Personaliza tu Mug
      </h1>



      <DesignEditor
        frontImage={selectedVariant.frontImage}
        backImage={selectedVariant.backImage}
        colors={mugColors}
      />

      <MugTypeCarousel 
        variants={mugVariants}
        selectedId={
          selectedVariant.id
        }
        onSelect={
          setSelectedVariant
        }
      />
    </div>
  );
};

export default MugPage;