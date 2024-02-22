import React from 'react'



export const CartItem = (props) => {
    const { id, name, price, image } = props.data;

    
  return (
    <div>CartItem
        <div>
        <img
              src= {image}
              alt= {name}
              className="size-16 rounded object-cover"
            />
        </div>
        <h3 className="text-sm text-gray-900">{name}</h3>
        <h3 className="text-sm text-gray-900">{price}</h3>

        
    </div>
  )
}