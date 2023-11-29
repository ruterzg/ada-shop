import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { useParams } from "react-router-dom";

function Slider({ product }) {
  return (
    <div>
      <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
        {product.images.map((item) => (
          <div className="h-[250px] overflow-hidden">
            <img src={item} alt="" className="w-full h-full" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
