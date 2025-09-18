import React from "react";

const Login = ({ openSignUp }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 capitalize">email</label>
          <input
            type="email"
            placeholder="Enter Email"
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
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700 capitalize">remember me</span>
          </label>
          <a href="#" className="text-red-800 capitalize">
            forgot pasword
          </a>
        </div>
        <div className="-mb-4">
          <button
            type="submit"
            className="w-full bg-red-600 text-whitepy-2 capitalize"
          >
            login
          </button>
        </div>
      </form>
      <div className="text-center mt-5">
        <button className="text-red-800 capitalize mr-2" onClick={openSignUp}>
          sign up
        </button>
        <span className="text-gray-700 capitalize">don't have any account</span>
      </div>
    </div>
  );
};

export default Login;
