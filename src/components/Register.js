import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaReceipt } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!fullName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    // Assuming a successful registration (could be replaced with actual API call)
    setError(""); // Reset error message
    console.log("User registered:", { fullName, email, password });
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <FaReceipt className="text-3xl" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">Create an account</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your information to create an account
        </p>
        {/* Error Message Display */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-gray-800 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
