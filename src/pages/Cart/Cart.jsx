import React, { useContext } from "react";
import { PRODUCTS } from "../../data";
import { ShopContext } from "../../context/store-context";
import { CartItem } from "../../components/CartItem";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div>
      <div>
        <div>
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
            
          </header>
        </div>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};
