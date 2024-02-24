import React from "react";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
        <header className="text-center">
        <h2 className="text-center text-4xl font-bold tracking-tight text-indigo-700 sm:text-5xl">
          Shop our new collection!
        </h2>

        
        </header>

        <ul className="mt-8 grid grid-cols-2 content-between gap-8 lg:grid-cols-2">
          <li>
            <a href="../chairs" className="group relative block">
              <img
                src="https://images.unsplash.com/photo-1688578735997-32626d2babd4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Ergonomic Chairs
                </h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>

          

          <li className="">
            <a href="../desks" className="group relative block">
              <img
                src="https://images.unsplash.com/photo-1622579522120-85a1669d76b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Standing Desks
                </h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                 <Link to="/desks">Shop Now</Link> 
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
