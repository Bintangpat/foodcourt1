const ProductDescription = ({ name, description, price }) => {
  return (
    <div className="">
      <p
        id="Product"
        className="mt-3 text-center text-xl font-semibold md:text-left"
      >
        {name}
      </p>
      <p id="Desc1" className="text-10 text-black md:text-left">
        {description}
      </p>
      <p
        id="Desc2"
        className="mt-3 text-center text-xl font-semibold md:text-left text-black"
      >
        {price} $
      </p>
    </div>
  );
};

export default ProductDescription;
