import { useDesignEditor } from "../../hooks/useDesignEditor";
import type { EditorColor } from "../../types/design-editor";
import DesignSizeSlider from "./DesignSizeSlider";
import DesignUploader from "./DesignUploader";
import ColorSelector from "./ColorSelector";
import DesignPreview from "./DesignPreview";
import ColorPalette from "./ColorPalette";

interface Props {
  frontImage: string;
  backImage: string;
  colors?: EditorColor[] | null;   // opcional → controla ColorSelector
  showColorPicker?: boolean;        // opcional → controla ColorPalette
}

const DesignEditor = ({
  frontImage,
  backImage,
  colors,
  showColorPicker = false,
}: Props) => {
  const hasColorSelector = !!colors && colors.length > 0;

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
    colors: colors ?? [],  // el hook recibe array vacío si no hay colores
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
        color={selectedColor?.color ?? "#ffffff"}
        design={currentDesign}
        designSizeCm={currentSizeCm}
        position={currentPosition}
        onMove={setCurrentPosition}
      />

      <button
        style={{
          padding: "14px",
          borderRadius: "14px",
          background: "#222",
          color: "white",
          textAlign: "center",
          cursor: "pointer",
          fontSize: "14px",
        }}
        onClick={toggleView}
      >
        Ver {view === "front" ? "espalda" : "frente"}
      </button>

      <DesignUploader onUpload={uploadDesign} />

      <DesignSizeSlider
        value={currentSizeCm}
        onChange={setCurrentSizeCm}
      />

      {/* Solo se renderiza si se pasaron colores */}
      {hasColorSelector && (
        <ColorSelector
          colors={colors!}
          selectedId={selectedColor?.id ?? 0}
          onSelect={setSelectedColor}
        />
      )}

      {/* Solo se renderiza si showColorPicker es true */}
      {showColorPicker && (
        <ColorPalette
          color={selectedColor?.color ?? "#ffffff"}
          onChange={setCustomColor}
        />
      )}
    </div>
  );
};

export default DesignEditor;