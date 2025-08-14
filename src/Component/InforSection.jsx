import React from "react";
import { MdOutlineMinorCrash } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { FaUnlockKeyhole } from "react-icons/fa6";

const InforSection = () => {
  const information = [
    {
      icon: <MdOutlineMinorCrash className="text-3xl text-red-600" />,
      title: "free shipping",
      description: "Get your orders delivered with no extral cost",
    },
    {
      icon: <FaHandshakeAngle className="text-3xl text-red-600" />,
      title: "support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "100% money back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <FaUnlockKeyhole className="text-3xl text-red-600" />,
      title: "your payment",
      description: "your payment information is safe with us",
    },
    {
      icon: <CiDiscount1 className="text-3xl text-red-600" />,
      title: "discount",
      description: "Enjoy the best prices on our products",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12 ">
      <div className="my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {information.map((items, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 rounded-lg shadow  transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {items.icon}
            <h3 className="mt-4 text-xl font-semibold uppercase">
              {items.title}
            </h3>
            <p className="mt-2 text-gray-600">{items.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InforSection;
