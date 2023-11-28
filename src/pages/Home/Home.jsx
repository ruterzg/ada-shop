import First from "./components/First";
import HeroText from "./components/HeroText";
import Services from "./components/Services";
import Footer from "../../components/Footer/Footer";
import ProductsList from "../../components/ProductList/ProductList";
import Categories from "./components/Categories";
import Discounts from "./components/Discounts";
import Articles from "./components/Articles";
import JoinUs from "./components/JoinUs";

function Home() {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <First />

      <HeroText />
      <Categories />
      <ProductsList />
      <Services />
      <Discounts />
      <Articles />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default Home;
