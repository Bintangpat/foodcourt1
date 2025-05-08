import { useParams } from "react-router-dom";
import { products } from "../data/products.js";

const DetailProductdata = () => {
  const { productid } = useParams();
  const product = products.find((p) => p.id === productid);

  console.log("productId:", productid);

  if (!product) {
    return <p className="p-6 text-red-500">Produk tidak ditemukan.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-black">{product.name}</h1>
      <img
        src={product.imageSrc}
        alt={product.name}
        className="w-[20rem] mt-4"
      />
      <p className="mt-2 text-black">ID Produk: {product.id}</p>
      <p className="mt-2 text-black">{product.description}</p>
      <p className="mt-2 text-black font-semibold">Harga: Rp{product.price}</p>
    </div>
  );
};

export default DetailProductdata;
