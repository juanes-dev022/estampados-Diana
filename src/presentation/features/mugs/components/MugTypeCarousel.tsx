import type { MugVariant } from "../data/mugVariants";

interface Props {
  variants: MugVariant[];

  selectedId: number;

  onSelect: (variant: MugVariant) => void;
}

const MugTypeCarousel = ({
  variants,
  selectedId,
  onSelect,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h3
        style={{
          margin: 0,
          textAlign: "center",
        }}
      >
        Escoge tu tipo de mug
      </h3>

      <div
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",

          paddingBottom: "10px",
        }}
      >
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() =>
              onSelect(variant)
            }
            style={{
              minWidth: "120px",

              border: "none",

              borderRadius: 0,

              padding: 0,

              background: "transparent",

              cursor: "pointer",

              transition: "0.2s",
            }}
          >
            <img
              src={variant.preview}
              alt={variant.name}
              style={{
                width: "100%",
                height: "100px",
                objectFit: "contain",

                borderRadius: "16px",

                border:
                  selectedId === variant.id
                    ? "2px solid #111"
                    : "1px solid #ddd",

                background: "transparent",

                transition: "0.2s",
              }}
            />

            <p
              style={{
                marginTop: "8px",
                fontSize: "14px",
              }}
            >
              {variant.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MugTypeCarousel;