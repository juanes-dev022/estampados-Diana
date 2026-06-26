interface Props {
  value: number;
  onChange: (size: number) => void;
}

const DesignSizeSlider = ({
  value,
  onChange,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        Tamaño del diseño: {value} cm
      </p>

      <input
        type="range"
        min="5"
        max="30"
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        style={{
          width: "100%",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default DesignSizeSlider;