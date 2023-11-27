import ProductCard from "../ProductCard/ProductCard";

function ProductList() {
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between">
        <h1 className="text-4xl">New Arrivals</h1>
        <button className="btn hidden md:block">More products →</button>
      </div>

      <div className="flex flex-wrap justify-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <button className="btn md:hidden">More products →</button>
    </div>
  );
}

export default ProductList;
