import React, { use, useEffect } from "react";
import { Categories } from "../assets/MockData";
import heroimage from "../assets/heroimage.jpg";
import InforSection from "../Component/InforSection";
import CategorySection from "../Component/CategorySection";
import { setProducts } from "../Redus/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { mackData } from "../Component/MackData";
import ProductCards from "../Component/ProductCards";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mackData));
  }, []);

  return (
    <>
      <div className="bg-white  mt-2 px-4 md:px-16 lg:px-24 ">
        <div className="mx-auto py-4 flex flex-col md:flex-row space-x-2">
          <div className="w-full md:w-3/12">
            <div className="bg-red-600 text-white text-small font-bold uppercase px-2.5 ">
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-4 bg-gray-200 p-3  border-0">
              {Categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium"
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-full md:w-10/12 mt-8 md:mt-0 h-96 relative">
            <img src={heroimage} alt="image" className="h-full w-full" />

            <div className="absolute top-16 left-8">
              <p className="text-gray-600 mb-4 capitalize">
                shop for your self
              </p>
              <h2 className="text-2xl font-bold uppercase">
                welcome to e-shop
              </h2>
              <p className="text-xl mt-2.5 font-bold text-gray-800 uppercase">
                millions+ products
              </p>
              <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 uppercase">
                shop now
              </button>
            </div>
          </div>
        </div>
        <InforSection />
        <CategorySection />

        <div className="mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {products.products.slice(0, 5).map((product) => (
              <ProductCards product={product} />
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </>
  );
};

export default Home;
