import React from 'react';
import  { useContext } from "react";
import { PRODUCTS } from '../product';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-Item';
import './cart.css'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount  } = useContext( ShopContext );
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate()
  return (
    <div className='cart' >
      <div>
        <h1>
          Your Cart Items
        </h1>
      </div>
      <div className="cartItems">
        { PRODUCTS.map((product)=>{
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        }) }
      </div>
      {totalAmount > 0 ? (
      <div className="checkout">
        <p>SubTotle: $ {totalAmount}</p>
        <button onClick={()=>navigate("/")} >Continue Shopping</button>
        <button>Check Out</button>
      </div>) 
      : <h1>Your Cart is Empty!!</h1>
      }
    </div>
  )
}

export default Cart
