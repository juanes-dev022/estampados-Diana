import { useDesignEditor } from "../../hooks/useDesignEditor";
import type { EditorColor } from "../../types/design-editor";
import DesignSizeSlider from "./DesignSizeSlider";
import DesignUploader from "./DesignUploader";
import ColorSelector from "./ColorSelector";
import DesignPreview from "./DesignPreview";
import ColorPalette from "./ColorPalette";


interface Props {
  colors: EditorColor[];
  frontImage: string;
  backImage: string;
}

const DesignEditor = ({
  frontImage,
  backImage,
  colors,
}: Props) => {
  const {
    selectedColor,
    setSelectedColor,
    setCustomColor,
    view,
    toggleView,

    currentDesign,

    currentSizeCm,
    setCurrentSizeCm,

    currentPosition,
    setCurrentPosition,

    uploadDesign,
  } = useDesignEditor({
    colors,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <DesignPreview
        frontImage={frontImage}
        backImage={backImage}

        view={view}

        color={selectedColor.color}

        design={currentDesign}

        designSizeCm={
          currentSizeCm
        }

        position={currentPosition}

        onMove={
          setCurrentPosition
        }
      />

      <button onClick={toggleView}>
        Ver{" "}
        {view === "front"
          ? "espalda"
          : "frente"}
      </button>

      <DesignUploader
        onUpload={uploadDesign}
      />

      <DesignSizeSlider
        value={currentSizeCm}
        onChange={
          setCurrentSizeCm
        }
      />

      <ColorSelector
        colors={colors}
        selectedId={
          selectedColor.id
        }
        onSelect={
          setSelectedColor
        }
      />

      <ColorPalette
        color={
          selectedColor.color
        }
        onChange={
          setCustomColor
        }
      />
    </div>
  );
};

export default DesignEditor;