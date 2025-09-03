import React, { useState } from "react";
import { useSelector } from "react-redux";
import emptyBox from "../assets/emptyBox.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "../Component/Modal";
import ChangeAddress from "../Component/ChangeAddress";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main stret, 0012");
  const [isModelopen, setModelopen] = useState(false);
  return (
    <div className="mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-2 text-xs font-bold">
                <p>PRODUCT</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product}
                    className="flex items-center justify-between p-3 shadow"
                  >
                    <div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-30 h-30 object-contain rounded"
                      />
                    </div>
                    <div className="flex ml-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                    <div className="flex space-x-12 items-center">
                      <p>{product.price}</p>
                      <div className="flex items-center justify-center border-r">
                        <button className="text-xl font-bold px-1.5 border">
                          -
                        </button>
                        <p className="text-xl  border px-2">
                          {product.quantity}
                        </p>
                        <button className="text-xl px-1 border">+</button>
                      </div>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button className="text-red-500 hover:text-red-700">
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md h-80">
              <h1 className="text-sm font-semibold mb-5">CART TOTAL</h1>
              <div className="flex justify-between mb-5 border-b border-gray-200 pb-1">
                <span>Total items</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b border-gray-200 pb-2">
                <p>Shopping</p>
                <p className="ml-2">Shippimg to :</p>
                <span className="text-xs font-bold">{address}</span>
                <button
                  className="text-blue-500 hover:underline mt-l ml-12"
                  onClick={() => setModelopen(true)}
                >
                  Change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total price</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800">
                Proced checkout
              </button>
            </div>
          </div>

          <Modal isModelopen={isModelopen} setModelopen={setModelopen}>
            <ChangeAddress setAddress={setAddress} setModelopen= {setModelopen} />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={emptyBox} alt="" className=" h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
