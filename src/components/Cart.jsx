import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <div className='cart'>
      <main>
        <CartItem/>;
      </main>
      
      <aside>
        <h2>Subtotal: ${2000}</h2>
        <h2>Shipping: ${500}</h2>
        <h2>Tax Charges: ${100}</h2>
        <h2>Total: ${2600}</h2>
      </aside>
    </div>
  )
}

export default Cart
