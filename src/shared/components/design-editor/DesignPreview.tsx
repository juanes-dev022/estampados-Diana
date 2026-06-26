import { usePointerDrag } from "../../hooks/usePointerDrag";
import { useRef} from "react";

interface Props {
  frontImage: string;
  backImage: string;
  color: string;
  view: "front" | "back";

  design?: string | null;
  designSizeCm: number;
  position: {
    y: number;
    x: number;
  }
  onMove: (
    position: {
      y: number;
      x: number;
  }
  ) => void;
}

const DesignPreview = ({
  frontImage,
  backImage,
  color,
  view,
  design,
  designSizeCm,
  position,
  onMove
}: Props) => {
  const shirtImage = view === "front" ? frontImage : backImage;

  const designSizePx = designSizeCm * 10;

  const containerRef = useRef<HTMLDivElement>(null);

  const { handlePointerDown, handlePointerMove, handlePointerUp } =
  usePointerDrag({
    containerRef,
    onMove,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          touchAction: "none"
        }}
      >
        {/* Color */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: color,

            maskImage: `url(${shirtImage})`,
            WebkitMaskImage: `url(${shirtImage})`,

            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",

            maskPosition: "center",
            WebkitMaskPosition: "center",

            maskSize: "contain",
            WebkitMaskSize: "contain",

            zIndex: 1,
          }}
        />

        {/* Camisa */}
        <img
          src={shirtImage}
          alt="shirt"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",

            mixBlendMode: "multiply",

            zIndex: 2,
          }}
        />

        {/* Diseño */}
        {design && (
          <img
            src={design}
            draggable={false}
            alt="design"
            style={{
              position: "absolute",
              top: `${position.y}%`,
              left: `${position.x}%`,
              transform: "translate(-50%, -50%)",
              width: `${designSizePx}px`,
              height: `${designSizePx}px`,
              objectFit: "contain",
              zIndex: 3,
              cursor: "grab",
              touchAction: "none"
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          />
        )}
      </div>
    </div>
  );
};

export default DesignPreview;