import React from 'react'
import { PRODUCTS } from '../data';


export const CartItem = (props) => {
    const { id, name, price, image } = props.data;
  return (
    <div>CartItem
        <img src={image} alt="" />
        <div> {name} </div>
        <div> {name} </div>
        <div> {price} </div>
        <div> {name} </div>
        <div> {price} </div>
        <div> {name} </div>
        <div> {price} </div>
        <div> {price} </div>
    </div>
  )
}