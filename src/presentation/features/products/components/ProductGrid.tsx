import ProductCard from "./ProductCard";
import ClickableWrapper from "../../mugs/components/ClickableWrapper";
import type { mugType } from "../../mugs/types/mugType";

interface Props {
  products: mugType[];
}

const ProductGrid = ({ products }: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "12px",
      }}
    >
      {products.map((product) => (
        <ClickableWrapper key={product.id} to={product.to}>
          <ProductCard
            name={product.name}
            price={product.price}
            image={product.image}
          />
        </ClickableWrapper>
      ))}
    </div>
  );
};

export default ProductGrid;