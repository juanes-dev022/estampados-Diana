import { useProductCarousel } from "../hooks/Useproductcarousel";
import type { ShirtsCaroucel } from "../types/ShirtsCaroucel";
import "./ShirtsCaroucelComponent.css";

interface ShirtsCarouselProps {
  products: ShirtsCaroucel[];
}

function ProductCarousel({ products }: ShirtsCarouselProps) {
  const { scrollRef, activeIndex, activeProduct, handleScroll, scrollToIndex } =
    useProductCarousel(products);

  return (
    <div className="product-carousel">
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