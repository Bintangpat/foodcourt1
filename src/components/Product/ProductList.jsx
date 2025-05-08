import ProductCard from "./ProductCard";
import { products } from "../../data/products";

const ProductList = () => {
  return (
    <div
      id="product"
      className="relative z-20 mx-auto flex w-full max-w-full flex-wrap items-center justify-center gap-[1rem] overflow-hidden px-[10rem] py-[2rem] md:max-w-[90rem]"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          imageSrc={product.imageSrc}
        />
      ))}
    </div>
  );
};

export default ProductList;
