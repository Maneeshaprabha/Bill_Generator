import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-5 shadow-md bg-white">
      <h1 className="text-2xl font-bold">BillEase</h1>
      <div className="flex items-center space-x-4">
        <Link to="/dashboard" className="px-4 py-2">
          Dashboard
        </Link>
        <Link to="/dashboard/create-bill" className="px-4 py-2">
          Create Bill
        </Link>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src=""
              alt="User Avatar"
              className="w-10 h-10 rounded-full border"
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <div className="px-4 py-3 border-b">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">john@example.com</p>
              </div>
              <ul className="py-2">
                <li>
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/create-bill" className="block px-4 py-2 hover:bg-gray-100">
                    Create Bill
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
