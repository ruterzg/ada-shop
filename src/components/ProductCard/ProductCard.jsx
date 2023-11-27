import ProductImage from "../../assets/product-2.png";
import { Heart, Star } from "lucide-react";

function ProductCard() {
  return (
    <div className="">
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

        <div className="">
          <img src={ProductImage} className="h-full w-full" alt="" />
        </div>

        <button className="btn bg-black text-white px-6 py-2 rounded-lg">
          Add to Cart
        </button>
      </div>

      <div className="flex flex-col gap-y-1 mt-3">
        <div className="flex gap-x-0.5 ">
          <Star enableBackground={true} size={16} color="#000" fill="#000" />
          <Star enableBackground={true} size={16} color="#000" fill="#000" />
          <Star enableBackground={true} size={16} color="#000" fill="#000" />
          <Star enableBackground={true} size={16} color="#000" fill="#000" />
          <Star enableBackground={true} size={16} color="#000" fill="#000" />
        </div>

        <h4>Loveseat Sofa</h4>
        <div className="flex gap-x-2">
          <span>$199.00</span>
          <span className="text-[#6C7275] line-through">$400.00</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
