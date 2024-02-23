import React, { useContext } from "react";
import { PRODUCTS } from "../../data";
import { ShopContext } from "../../context/store-context";
import { CartItem } from "../../components/CartItem";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
