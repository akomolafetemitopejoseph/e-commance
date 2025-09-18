import React from "react";

const Register = ({ openLogin }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">sign up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 capitalize">name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 capitalize">email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-3 py-2 border"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 capitalize">password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-3 py-2 border"
          />
        </div>

        <div className="-mb-4">
          <button
            type="submit"
            className="w-full bg-red-600 text-whitepy-2 capitalize"
          >
            sign up
          </button>
        </div>
      </form>
      <div className="text-center  mt-5">
        <span className="text-gray-700 capitalize mr-2">
          already have any account
        </span>
        <button className="text-red-800 capitalize" onClick={openLogin}>
          lognin
        </button>
      </div>
    </div>
  );
};

export default Register;
