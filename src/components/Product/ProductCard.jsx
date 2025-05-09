import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import ViewDetailButton from "./ViewDetailButton";

const ProductCard = ({ imageSrc, name, description, price, id }) => {
  return (
    <div className="group h-fit w-[15rem] transform rounded-md bg-white p-[0.3rem] transition duration-500 ease-out hover:scale-110 hover:shadow-xl">
      <ProductImage imageSrc={imageSrc} />
      <ProductDescription name={name} description={description} price={price} />
      <ViewDetailButton productid={id} />
    </div>
  );
};

export default ProductCard;
