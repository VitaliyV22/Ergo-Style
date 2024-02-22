import React from "react";

import { useContext, useEffect, useState } from "react";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="fixed  bg-gradient-to-r from-gray-100 to-gray-300 top-0 w-full shadow-md z-50 border  rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          <div className="flex ">
            <a
              href="./"
              className="text-indigo-700 text-4xl font-extrabold"
            >
              ErgoStyle
            </a>
            <div className="hidden items-center  md:flex  ml-6 space-x-4">
              <a
                href="./desks"
                className="text-gray-900 hover:text-indigo-700 font-bold"
              >
                Desks
              </a>
              <a
                href="./chairs"
                className="text-gray-900 hover:text-indigo-700 font-bold"
              >
                Chairs
              </a>
              <a
                href="./contact"
                className="text-gray-900 hover:text-indigo-700 font-bold"
              >
                Contact Us
              </a>
              <a
                href="./fq"
                className="text-gray-900 hover:text-indigo-700 font-bold"
              >
                F&Q
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
           
            <a
              href=""
              className="text-black font-bold hover:text-indigo-700"
            >
              Login
            </a>
            <a
              href="./cart"
              className="text-black font-bold hover:text-indigo-700"
            >
              Cart
            </a>
        
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={handleClick} className="inline-flex items-center justify-center p-2 rounded-md text-black font-bold hover:text-indigo-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
        </div>
      </div>
    </nav>
  );
};
