import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(true);
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
          </div>
          <div className="md:w-1/3 bg-white p-6 rounded shadow-md border border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
