import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setpaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const cart = useSelector((state) => state.cart);
  const [shippingIfor, setShippingInfo] = useState({
    shipping: "",
    zip: "",
  });

  return (
    <div>
      <div className="mx-auto py-8 min-h-96 px-16 lg:px-24">
        <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
        <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
          <div className="md:w-2/3">
            <div className="border border-gray-300 p-2 mb-6">
              <div
                className="flex items-center justify-between"
                onClick={() => setBillingToggle(!billingToggle)}
              >
                <h3 className="capitalize text-lg font-semibold mb-2">
                  Billing information
                </h3>
                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                <div className="space-y-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="border border-gray-300 w-full p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="name"
                    placeholder="Enter Email"
                    className="border border-gray-300 w-full p-2"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    className="border border-gray-300 w-full p-2"
                  />
                </div>
              </div>
            </div>
            {/* SHOPPING */}
            <div className="border border-gray-300 p-2 mb-6">
              <div
                className="flex items-center justify-between"
                onClick={() => setShippingToggle(!shippingToggle)}
              >
                <h3 className="capitalize text-lg font-semibold mb-2">
                  Shipping information
                </h3>
                {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                <div className="space-y-4">
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Address"
                    className="border border-gray-300 w-full p-2"
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingIfor,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="email"
                    name="name"
                    placeholder="Enter City"
                    className="border border-gray-300 w-full p-2"
                                        onChange={(e) =>
                      setShippingInfo({
                        ...shippingIfor,
                        city: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-gray-700"> Zip code</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter zip code"
                    className="border border-gray-300 w-full p-2"
                                        onChange={(e) =>
                      setShippingInfo({
                        ...shippingIfor,
                        zip: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            {/* PAYMENT METHOD */}
            <div className="border border-gray-300 p-2 mb-6">
              <div
                className="flex items-center justify-between"
                onClick={() => setpaymentToggle(!paymentToggle)}
              >
                <h3 className="capitalize text-lg font-semibold mb-2">
                  payment method
                </h3>
                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                <div className="flex items-center mb-2 ">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label className="block text-gray-700 ml-2">
                    Cash on delivary
                  </label>
                </div>
                <div className="flex items-center mb-2 ">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  />
                  <label className="block text-gray-700 ml-2">
                    {" "}
                    Debit Card{" "}
                  </label>
                </div>
                {paymentMethod === "dc" && (
                  <div className="bg-gray-300 p-2 rounded-lg">
                    <h3
                      className="
                      rounded-lg mb-4"
                    >
                      Debit Card Information
                    </h3>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Card Number"
                        className="border p-2 w-full rounded border-gray-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded bg-white border-gray-300"
                      />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="w-1/2 mr-2">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Expire Date
                        </label>
                        <input
                          type="text"
                          placeholder="NM/YY"
                          className="border p-2 w-full rounded bg-white border-gray-300"
                        />
                      </div>
                      <div>
                        <label>CW</label>
                        <input
                          type="text"
                          placeholder="CW"
                          className="border p-2 w-full rounded bg-white border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:w-1/3 bg-white p-6 rounded shadow-md border border-gray-300">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cart.products.map((product) => (
                <div key={product.id} className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                    />

                    <div className="ml-4">
                      <h4 className="text-md font-semibold">{product.name}</h4>
                      <p className="text-gray-600">
                        ${product.price} * {product.quantity}
                      </p>
                    </div>
                    <div className="text-gray-800">
                      ${product.price * product.quantity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4">
            <div className="flex justify-between">
              <span className="capitalize">total price</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800">
            Place Oder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
