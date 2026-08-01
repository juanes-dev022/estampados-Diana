import { useProductCarousel } from "../hooks/Useproductcarousel";
import type { ShirtsCaroucelType } from "../../../../domain/entities/entities-shirt/ShirtsCaroucelType";
import "./ShirtsCaroucelComponent.css";

interface ShirtsCarouselProps {
  products: ShirtsCaroucelType[];
}

function ProductCarousel({ products }: ShirtsCarouselProps) {
  const { scrollRef, activeIndex, activeProduct, handleScroll, scrollToIndex } =
    useProductCarousel(products);

  const isAtStart = activeIndex === 0;
  const isAtEnd = activeIndex === products.length - 1;

  const goPrev = () => {
    if (!isAtStart) scrollToIndex(activeIndex - 1);
  };

  const goNext = () => {
    if (!isAtEnd) scrollToIndex(activeIndex + 1);
  };

  return (
    <div className="product-carousel">
      <div className="product-carousel__viewport">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="product-carousel__track"
        >
          {products.map((product) => (
            <div key={product.id} className="product-carousel__slide">
              <img
                src={product.image}
                alt={product.description}
                className="product-carousel__image"
              />
            </div>
          ))}
        </div>

        <button
          onClick={goPrev}
          disabled={isAtStart}
          aria-label="Imagen anterior"
          className="product-carousel__arrow product-carousel__arrow--prev"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={goNext}
          disabled={isAtEnd}
          aria-label="Siguiente imagen"
          className="product-carousel__arrow product-carousel__arrow--next"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="product-carousel__dots">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            aria-label={`Ir a imagen ${index + 1}`}
            className={`product-carousel__dot ${
              index === activeIndex ? "product-carousel__dot--active" : ""
            }`}
          />
        ))}
      </div>

      <div className="product-carousel__info">
        <p className="product-carousel__price">{activeProduct?.price}</p>
        <p className="product-carousel__description">
          {activeProduct?.description}
        </p>
      </div>
    </div>
  );
}

export default ProductCarousel;