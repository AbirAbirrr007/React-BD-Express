import React, { useContext } from 'react'
import {CartContext} from '../context/CartContext'
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import StripeCheckout from 'react-stripe-checkout'

const Cart = () => {
    const {shoppingCart,totalPrice,qty,dispatch} = useContext(CartContext);
    const handleToken = (token)=>{

    }
    
    return (
        <div className='cart-container'>
        <div className="cart-details">
            {shoppingCart.length > 0 ?
              shoppingCart.map((cart)=>{
                  return(
                      <div className="cart" key={cart.id}>
                      <div className="cart-border">
                      <span className='cart-img'>
                          <img src={cart.img} alt='Not Found' />
                      </span>
                      <span className="cart-name">{cart.name}</span>
                      <span className="cart-price">${cart.price}</span>
                      <span className="inc-btn" onClick={() => dispatch({type:'INC',id:cart.id,cart})}><BiPlus/></span>
                      <span className="product-qty">{cart.qty}</span>
                    <span className="dec-btn" onClick={() => dispatch({type:'DEC',id:cart.id,cart})}><BiMinus/></span>
                    <span className="product-totalPrice">${cart.price*cart.qty}.00</span>
                    <span className="product-del-btn" onClick={() => dispatch({type:'DELETE',id:cart.id,cart})}><BsFillTrashFill/></span>
                    </div>
                      </div>
                  )
              })
             :'Sorry Your Cart is Empty'}
        </div>
        {shoppingCart.length > 0 ? <div className='cart-summary'>
            <div className='summary'>
                <h1>Cart Summary</h1>
                <div className='total-item'>
                    <div className='item-title'>Total Items</div>
                    <div className="total-qty">{qty}</div>
                </div>
                <div className="total-price-section">
                    <div className="price-title">Total Price</div>
                    <div className="total-price">${totalPrice}.00</div>
                </div>
                <div className="stripe-section">
                    <StripeCheckout
                     stripeKey='pk_test_51IyG1vEKCzBA3WUKYuAnvlBAqi7RDlIcdJDjvgzgIigRotC7vXIeoJbqwuvQN73iLFYaqcs80FNVYeD0QpHPc1E500peruyGzq'
                     token={handleToken}
                     billingAddress
                     shippingAddress
                     amount={totalPrice * 100}
                     name='All Products'
                    >

                    </StripeCheckout>
                </div>
            </div>
        </div>:""}
            
        </div>
    )
}

export default Cart
