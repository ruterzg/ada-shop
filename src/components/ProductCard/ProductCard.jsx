import ProductImage from "../../assets/product-2.png";
import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/products/" + product.id);
  }

  return (
    <div
      className="hover:shadow-2xl hover:scale-[1.05] duration-500 rounded-2xl p-3 hover:cursor-pointer"
      onClick={handleClick}
    >
      <div
        style={{ "--image-url": `url(${ProductImage})` }}
        className="bg-[#F3F5F7] h-[300px] bg-no-repeat bg-contain max-w-[260px] p-4 flex flex-col justify-between"
      >
        {/* bg-[image:var(--image-url)] */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="uppercase font-bold bg-white px-3 py-1 rounded">
              new
            </span>
            <div className="bg-white p-1.5 rounded-full shadow-xl">
              <Heart strokeWidth={1} />
            </div>
          </div>

          <span className="bg-[#38CB89] text-white rounded px-3 py-1 font-bold">
            -50%
          </span>
        </div>

        <div className="overflow-hidden">
          <img src={product.thumbnail} className="h-full w-full" alt="" />
        </div>

        <button className="btn bg-black text-white px-6 py-2 rounded-lg">
          Add to Cart
        </button>
      </div>

      <div className="flex flex-col gap-y-1 mt-3">
        <div className="flex gap-x-0.5 ">
          <Star size={16} color="#000" fill="#000" />
          <Star size={16} color="#000" fill="#000" />
          <Star size={16} color="#000" fill="#000" />
          <Star size={16} color="#000" fill="#000" />
          <Star size={16} color="#000" fill="#000" />
        </div>

        <h4>{product.title}</h4>
        <div className="flex gap-x-3">
          <span className="font-bold text-sm">
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(0)}
            $
          </span>
          <span className="text-sm font-normal line-through text-gray-500">
            {product.price}$
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
