import React from "react";

const Checkout = () => {
  return (
    <div>
      <div className="mx-auto py-8 min-h-96 md:px-16 lg:px-24">
        <h3 className="text-2xl font-semibold mb-4"> CHECKOUT</h3>
        <div className="flex flex-col md:flex-row justify-between space-x-10 -mt-80"></div>
        <div className="md:w-2/3 bg-white"></div>
        <div className="md:1/3 bg-white p-6 rounded-lg shadow-md border"></div>
      </div>
    </div>
  );
};

export default Checkout;
