import React from "react";
import { useSelector } from "react-redux";
import ProductCards from "../Component/ProductCards";

const Shop = () => {
  const products = useSelector((state) => state.product);
  return (
    <div className="mt-auto py-12 px-4 md:px-15 lg:px-24 ">
      <div className="mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.map((product) => (
            <ProductCards product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
