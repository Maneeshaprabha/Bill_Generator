import React from 'react';
import { Link } from 'react-router-dom';
import { FaReceipt } from 'react-icons/fa';

const Login = () => {
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <FaReceipt className="text-3xl" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">Welcome back</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email and password to login to your account
        </p>
        <form  className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              defaultValue="name@example.com"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Link to="#" className="text-sm text-gray-600 hover:underline">
                Forget password?
              </Link>
            </div>
            <input
              type="password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-gray-800 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;