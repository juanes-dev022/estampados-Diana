const mockProducts = [
  {
    id: 1,
    name: "Camiseta estampada",
    price: "$20",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400",
  },
  {
    id: 2,
    name: "Vaso personalizado",
    price: "$15",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400",
  },
  {
    id: 3,
    name: "Cuadro decorativo",
    price: "$30",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400",
  },
];

const CatalogPreview = () => {
    
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Catálogo</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginTop: "10px",
        }}
      >
        {mockProducts.map((product) => (
          <div
            key={product.id}
            style={{
              padding: "12px",
              borderRadius: "12px",
              background: "#1e1e1e",
              color: "white",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
            }
          >
            
                <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "8px",
                }}
                />


                <p style={{ fontSize: "14px" }}>{product.name}</p>
                <strong>{product.price}</strong>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPreview;