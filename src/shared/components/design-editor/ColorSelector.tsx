import type { EditorColor } from "../../types/design-editor";

interface Props {
  colors: EditorColor[];
  selectedId: number;
  onSelect: (color: EditorColor) => void;
}

const ColorPalette = ({ colors, selectedId, onSelect }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          opacity: 0.8,
        }}
      >
        <h3>personaliza tu Color</h3>
      </p>


      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onSelect(color)}
            style={{
              background: color.color,
              width: 40,
              height: 40,
              border:
                selectedId === color.id ? "2px solid black" : "1px solid #ccc",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;