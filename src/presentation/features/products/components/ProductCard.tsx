interface Props {
  name: string;
  price: string;
  image: string;
}

const ProductCard = ({ name, price, image }: Props) => {
  return (
    <div
      style={{
        background: "#1e1e1e",
        borderRadius: "16px",
        overflow: "hidden",
        color: "white",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.02)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "12px" }}>
        <p style={{ fontSize: "14px", marginBottom: "6px" }}>
          {name}
        </p>

        <strong>{price}</strong>
      </div>
    </div>
  );
};

export default ProductCard;