import React, { useContext } from "react";
import { ShopContext } from "../context/store-context";
export const CartItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount,  } = useContext(ShopContext);
  return (
    <div className="mt-8">
      <ul className="space-y-4">
        <li className="flex items-center gap-4 bg-gray-200 p-2 rounded-lg shadow-md">
          <img
            src={image}
            alt={name}
            className="size-16 rounded object-cover"
          />

          <div>
            <h3 className="text-sm text-gray-900">{name}</h3>

            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
             

              <div>
                <dt className="inline text-center"> ${price}.00 </dt>
              </div>
            </dl>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2">
            <button onClick={() => removeFromCart(id)} className="font-bold bg-white w-8 h-8 rounded text-lg p-0 text-center  text-black ">
              {" "}
              -
            </button>
            <input className="w-10  h-8 text-center border shadow-md border-gray rounded-md" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} type="number" />
            <button onClick={() => addToCart(id)} className="font-bold bg-white w-8 h-8 rounded text-lg p-0 text-center  text-black ">
              {" "}
              +
            </button>
            

           
          </div>
        </li>
      </ul>
    </div>
  );
};
