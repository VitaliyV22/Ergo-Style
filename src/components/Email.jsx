import React, { useState } from "react";

export const Email = () => {
  const [newItem, setNewItem] = useState("");
  const [showThanks, setShowThanks] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setNewItem("");
    setShowThanks(!showThanks);
    setTimeout(setShowThanks, 3000);
  }

  return (
    <section>
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Join our newsletter for discounts and future product updates
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Never SPAM, we promise :)
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                id="email"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Email address"
                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-indigo-400 "
                required
              />
            </div>

            <button
              id="email"
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-indigo-400 sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium"> Sign Up </span>

              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
        {showThanks && (
          <div className="text-center  pt-4 text-indigo-500 text-sm">
            <h1>Thanks! Check your email for a confirmation</h1>
          </div>
        )}
      </div>
      <hr className="border-slate-300 p-4 " />
    </section>
  );
};
