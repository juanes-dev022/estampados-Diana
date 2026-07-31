import { useCarousel } from "../hooks/useCarousel";
import { useNavigate } from "react-router-dom";
import combo1 from "../../../../assets/images/home/camisa + termo espartano.png";

interface CarouselItem {
  src: string;
  href: string;
}

const images: CarouselItem[] = [
  { src: combo1, href: "" },
  { src: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad", href: "/promocion-2" },
  { src: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519", href: "/promocion-3" },
];

const Carousel = () => {
  const navigate = useNavigate();
  const {
    current,
    next,
    prev,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onItemClick,
  } = useCarousel({ total: images.length });

  const handleClick = (e: React.MouseEvent, href: string) => {
    const wasSwipe = onItemClick(e);
    if (!wasSwipe) navigate(href);
  };

  return (
    <div
      style={{ position: "relative", overflow: "hidden", borderRadius: "12px" }}
      onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
      onTouchMove={(e) => onTouchMove(e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
      <div
        style={{
          display: "flex",
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 0.4s ease",
        }}
      >
        {images.map((item, i) => (
          <div
            key={i}
            role="button"
            tabIndex={0}
            onClick={(e) => handleClick(e, item.href)}
            onKeyDown={(e) => {
              if (e.key === "Enter") navigate(item.href);
            }}
            style={{ width: "100%", flexShrink: 0, cursor: "pointer" }}
          >
            <img
              src={item.src}
              alt="banner"
              draggable={false}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      <button onClick={prev} style={arrowStyle("left")}>‹</button>
      <button onClick={next} style={arrowStyle("right")}>›</button>

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