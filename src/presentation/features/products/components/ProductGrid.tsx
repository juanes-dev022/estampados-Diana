import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface Props {
  products: Product[];
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
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductGrid;