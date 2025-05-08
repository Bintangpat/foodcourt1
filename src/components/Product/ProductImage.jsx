const ProductImage = ({ imageSrc }) => {
  return (
    <div className="h-[15rem] w-full">
      <img
        alt="Product"
        className="h-full w-full rounded-xl object-cover border-2 border-amber-950"
        height="100px"
        src={imageSrc}
        width="100px"
      />
    </div>
  );
};

export default ProductImage;
