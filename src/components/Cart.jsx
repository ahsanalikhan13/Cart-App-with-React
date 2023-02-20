import React from 'react'
import CartItem from './CartItem';

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";



const Cart = () => {
  return (
    <div className='cart'>
      <main>
        <CartItem
          imgSrc={img1}
          name={"Mac Book"}
          price={100000}
          qty={1}
          id={"13abc"}/>

      </main>
      
      <aside>
        <h2>Subtotal: PKR {2000}</h2>
        <h2>Shipping: PKR {500}</h2>
        <h2>Tax Charges: PKR {100}</h2>
        <h2>Total: PKR {2600}</h2>
      </aside>
    </div>
  )
}

export default Cart
