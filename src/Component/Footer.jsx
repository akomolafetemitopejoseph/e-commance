import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGit } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">e-Shop</h3>
          <p mt-4>
            Your one-step for all your needs. shop with use and experience the
            best online shopping experiences.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 capitalize">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-lg font-semibold">
          <h4 className="text-lg font-semibold capitalize">follown us :</h4>
          <div className="flex space-x-4 mt-4 mb-10">
            <a href="" className="hover:text-gray-400">
              <FaFacebookF />
            </a>

            <a href="" className="hover:text-gray-400">
              <FaXTwitter />
            </a>

            <a href="" className="hover:text-gray-400">
              <FaGit />
            </a>

            <a href="" className="hover:text-gray-400">
              <GrLinkedinOption />
            </a>
          </div>

          <form className="flex items-center justify-centermt-mt-8">
            <input
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
              type="email"
              placeholder="Enter Email :"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600 ">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t bordre-gray-400 pt-4">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 e-shop All right reserved</p>

          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="" className="hover:underline capitalize">privacy policy</a>
            <a href="" className="hover:underline capitalize">terms & conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
