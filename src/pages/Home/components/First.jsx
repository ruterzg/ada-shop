import Header from "../../../components/Header/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import HeroImg1 from "../../../assets/hero-img-1.png";
import HeroImg2 from "../../../assets/hero-img-2.png";
import HeroImg3 from "../../../assets/hero-img-3.png";

function First() {
  return (
    <div className="container mx-auto">
      <Header />
      {/* TODO: НАДО ИСПРАВИТЬ МАКСИМАЛЬЬНУЮ ВЫСОТУ */}
      <Carousel showThumbs={false} showStatus={false}>
        <img src={HeroImg1} alt="" className="h-full" />
        <img src={HeroImg2} alt="" className="h-full" />
        <img src={HeroImg3} alt="" className="h0full" />
      </Carousel>
    </div>
  );
}

export default First;
