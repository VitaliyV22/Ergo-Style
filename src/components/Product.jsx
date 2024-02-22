import React, { useContext } from "react";
import { ShopContext } from "../context/store-context";

export const Product = (props) => {
  const { id, name, price, image } = props.data;
  const {addToCart, cartItems} = useContext(ShopContext)
  
  const cartItemAmount = cartItems[id]
  return <div>
     <div className="flex-shrink-0 mr-6">
            <div className="group block">
              <img
                src={image}
                alt={name}
                className="aspect-square w-full rounded object-cover"
              />
              <div className="mt-3 text-center">
                <a
                  href="#"
                  className="font-semibold text-2xl text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  {name}
                </a>
              </div>
              <div className="flex items-center justify-center mt-5 gap-2">
                <p className="mt-1 text-m text-gray-700 font-bold">
                  {price}
                </p>
                <button onClick={() => addToCart(id) }
                  
                  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600"
                
                >
                 Buy {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
                </button>
              </div>
            </div>
          </div>
  </div>;
};
