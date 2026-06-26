import { useCarousel } from "../hooks/useCarousel";

const images = [
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
];

const Carousel = () => {
  const {
    current,
    next,
    prev,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = useCarousel({ total: images.length });

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
      }}
      onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
      onTouchMove={(e) => onTouchMove(e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div
        style={{
          display: "flex",
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 0.4s ease",
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="banner"
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      {/* Botones */}
      <button
        onClick={prev}
        style={arrowStyle("left")}
      >
        ‹
      </button>

      <button
        onClick={next}
        style={arrowStyle("right")}
      >
        ›
      </button>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: i === current ? "white" : "gray",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const arrowStyle = (side: "left" | "right"): React.CSSProperties => ({
  position: "absolute",
  top: "50%",
  [side]: "10px",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.5)",
  border: "none",
  color: "white",
  fontSize: "20px",
  padding: "6px 10px",
  borderRadius: "50%",
  cursor: "pointer",
});

export default Carousel;