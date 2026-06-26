interface Props {
  color: string;
  onChange: (color: string) => void;
}

const ColorPalette = ({ color, onChange }: Props) => {
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

      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "70px",
          height: "70px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default ColorPalette;