import { Link } from "react-router-dom";

const ViewDetailButton = ({ productid }) => {
  return (
    <div
      id="buttonproduk"
      className="my-3 flex w-full flex-wrap gap-12 text-black"
    >
      <Link
        id="buttonproduct"
        className="h-32 w-full rounded-md bg-amber-300 text-center font-semibold text-black hover:bg-yellow-400"
      >
        Buy
      </Link>
      <Link
        to={`/product/${productid}`}
        id="buttonproduct"
        className="h-32 w-full rounded-md border-2 border-amber-950 bg-white text-center font-semibold text-black hover:shadow-xl"
      >
        Details product
      </Link>
    </div>
  );
};

export default ViewDetailButton;
