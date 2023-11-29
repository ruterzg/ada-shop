import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import Slider from "./components/Slider";
import { useEffect, useState } from "react";
import axios from "axios";

function Details() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  console.log("product:", product);

  async function getSingleProduct() {
    const response = await axios.get(
      "https://dummyjson.com/products/" + params.id
    );

    setProduct(response.data);
  }

  useEffect(() => {
    getSingleProduct();
  }, []);

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        L O A D I N G . . .
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="container mx-auto px-8">
        <Header />
        <BreadCrumbs />
        <Slider product={product} />
      </div>
    </div>
  );
}
export default Details;
