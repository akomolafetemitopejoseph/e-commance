import React, { useState } from "react";

const ChangeAddress = ({setAddress, setModelopen}) => {
  const [newAddress, setNewAddress] = useState("");
  const onClose = () => {
    setAddress(newAddress);
    setModelopen(false);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter new address"
        className="border outline-gray-400 p-2 w-full mb-2"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-700 text-white py-2 px-4 rounded mr-2"
          onClick={() => setModelopen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-700 ml-2 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
