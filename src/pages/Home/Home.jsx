import First from "./components/First";
import HeroText from "./components/HeroText";
import Services from "./components/Services";
import Footer from "../../components/Footer/Footer";
import ProductsList from "../../components/ProductList/ProductList";

function Home() {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <First />

      <HeroText />
      <ProductsList />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
