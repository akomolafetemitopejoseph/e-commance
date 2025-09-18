import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setsearchterm } from "../Redus/ProductSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isLogin, setIsLogin] = useState(true);
  const [isModelopen, setModelopen] = useState(false);
  const openSignUp = () => {
    setIsLogin(false);
    setModelopen(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setModelopen(true);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setsearchterm(search));
    navigate("/filter-data")
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto p-3 md:px-16 lg:px-24 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">
            <h1>e-Shop</h1>
          </Link>
        </div>

        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border rounded-2xl shadow-white border-gray-400 py-2 px-4"
              onChange={(e) => setSearch(e.target.value)}
            />
            <LuSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block capitalize"
            onClick={() => setModelopen(true)}
          >
            login | register
          </button>
          <button className="block md:hidden">
            <IoPeopleSharp />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-black capitalize">
        <Link to="/" className="hover:underline">
          home
        </Link>
        <Link to="/shop" className="hover:underline">
          shop
        </Link>
        <Link to="/" className="hover:underline">
          contact
        </Link>
        <Link to="/" className="hover:underline">
          About
        </Link>
      </div>
      <Modal isModelopen={isModelopen} setModelopen={setModelopen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
