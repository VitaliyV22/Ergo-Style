
import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data";
export const ShopContext = createContext(null);

// gets the cart products by looping through products data
const getDefaultCart = () => {
  let cart = {};
  for (let i = []; i < PRODUCTS.length +1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());


  // logic for finding the total amount in the cart
  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0){
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        totalAmount +=  cartItems[item] * itemInfo.price 
     }
     
    }
    return totalAmount
  }
  // add to cart logi to add or remove items
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  
 
// updates item count when added to cart 
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount };



  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
