import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { addToCard } from "../Redus/CartSlice";
import { useDispatch } from "react-redux";

const ProductCards = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCard = (e, product) => {
    e.stopPrpagation();
    e.preventDefault();
    dispatch(addToCard(product));
    alert("Product Added Sucessfully!");
  };
  return (
    <div className="bg-white p-4  shadow rounded relative border-gray-9333q1q`1``00 transform transition-transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt="productImage"
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg capitalize font-semibold">{product.name}</h3>
      <p className="text-gray-500 ">${product.price}</p>
      <div className="flex items-centermt-2">
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
      </div>
      <div
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all"
        onClick={(e) => handleAddToCard(e, product)}
      >
        <span className="group-hover:hidden">+</span>
        <span className="hidden group-hover:block">Add to cards</span>
      </div>
    </div>
  );
};

export default ProductCards;
