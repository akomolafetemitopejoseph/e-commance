import React from "react";
import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto p-3 md:px-16 lg:px-2 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">
            <h1>e-Shop</h1>
          </Link>
        </div>

        <div className="relative flex-1 mx-4">
          <form action="">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border rounded-2xl shadow-white border-gray-400 py-2 px-4"
            />
            <LuSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <FaShoppingCart className="text-lg" />
          </Link>
          <button className="hidden md:block capitalize">
            login | register
          </button>
          <button className="block md:hidden">
            <IoPeopleSharp />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-black capitalize">
        <Link to="/" className="hover:underline">
          {" "}
          home
        </Link>
        <Link to="/" className="hover:underline">
          {" "}
          shop
        </Link>
        <Link to="/" className="hover:underline">
          {" "}
          contact
        </Link>
        <Link to="/" className="hover:underline">
          {" "}
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
