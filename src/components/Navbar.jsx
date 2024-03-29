import React from "react";
import { Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="fixed  bg-gradient-to-r from-gray-100 to-gray-300 top-0 w-full shadow-md z-50 border  rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          <div className="flex ">
            <Link to="./" className="text-indigo-700 text-4xl font-extrabold">
              ErgoStyle
            </Link>

            <div className="hidden items-center  md:flex  ml-6 space-x-4">
              <Link
                to="/desks"
                className="text-gray-900 hover:text-indigo-700 font-bold"
              >
                Desks
              </Link>
              <Link
                to="/chairs"
                className="text-gray-900 hover:text-indigo-700 font-bold"
              >
                Chairs
              </Link><Link
                to="/contact"
                className="text-gray-900 hover:text-indigo-700 font-bold"
              >
                Contact US
              </Link><Link
                to="/faq"
                className="text-gray-900 hover:text-indigo-700 font-bold"
              >
                FAQ
              </Link>
              
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="" className="text-indigo-700 font-bold hover:text-indigo-400">
              Login
            </a>

            <Link
              className="text-indigo-700 font-bold hover:text-indigo-400"
              to={"/cart"}
            >
              Cart
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleClick}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-700 font-bold hover:text-indigo-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={(nav ? "block" : "hidden") + " md:hidden"}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
         
          <a
            href="./desks"
            className="block px-3 py-2 rounded-md text-base font-bold text-gray-900 hover:text-indigo-700 hover:bg-gray-100"
          >
            Desks
          </a>
          <a
            href="./chairs"
            className="block px-3 py-2 rounded-md text-base font-bold text-gray-900 hover:text-indigo-700 hover:bg-gray-100"
          >
            Chairs
          </a>
          <a
            href="./contact"
            className="block px-3 py-2 rounded-md text-base font-bold text-gray-900 hover:text-indigo-700 hover:bg-gray-100"
          >
            Contact Us
          </a>
          <a
            href="./fq"
            className="block px-3 py-2 rounded-md text-base font-bold text-gray-900 hover:text-indigo-700 hover:bg-gray-100"
          >
            F&Q
          </a>
          <Link
            className=""
            to={"/cart"}
          >
            <a href="" className="block px-3 py-2 rounded-md text-base font-bold text-gray-900 hover:text-indigo-700 hover:bg-gray-100">Cart</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
