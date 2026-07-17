import DesignEditor from "../../../../shared/components/design-editor/DesignEditor";
import MugTypeCarousel from "../components/MugTypeCarousel";
import { useMugVariant } from "../hooks/useMugVariant";
import { mugVariants } from "../data/mugVariants";

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
        Mugs
      </h1>



      <DesignEditor
        frontImage={selectedVariant.frontImage}
        backImage={selectedVariant.backImage}
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