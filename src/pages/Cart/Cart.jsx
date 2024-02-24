import React, { useContext } from "react";
import { PRODUCTS } from "../../data";
import { ShopContext } from "../../context/store-context";
import { CartItem } from "../../components/CartItem";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
  

          <div className="mt-8">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end border-t border-gray-100 pr-5">
        <div className="w-screen max-w-lg space-y-4">
          <dl className="space-y-0.5 text-sm text-gray-700">
            
        
            <div className="flex justify-end gap-8  font-medium">
            
              <dt>Total</dt>
              <dd>${totalAmount} </dd>
            </div>
          
          </dl>
          <div className="flex justify-end">
            <a
              href="#"
              className="block rounded bg-indigo-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-indigo-600"
            >
              Checkout
            </a>
          </div>
        </div>
        
      </div>
      
    </section>
  );
};
