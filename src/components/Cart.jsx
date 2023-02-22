import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';



const Cart = () => {
  const {cartItems, subTotal, shipping, tax, total} = useSelector((state)=> state.cart)

  const dispatch= useDispatch();

  const increment= (id) => {
    dispatch({
    type: "addToCart", 
    payload: {id},
    });

    dispatch({
      type: "calculatePrice",
    })
  }

  const decrement= (id) => {
    dispatch({
      type: "decrement", 
      payload: id,
      })

      dispatch({
        type: "calculatePrice",
      })
  }
  const deleteHandler= (id) => {
    dispatch({
      type: "deleteFromCart", 
      payload: id,
      })

      dispatch({
        type: "calculatePrice",
      })
  }


  return (
    <div className='cart'>
      <main>
        {
          cartItems.length > 0 ? (
            cartItems.map(i=>(
              <CartItem
                imgSrc={i.img1}
                name={i.name}
                price={i.price}
                qty={i.quantity}
                id={i.id}
                key={i.id}
                decrement={decrement}
                increment={increment}
                deleteHandler={deleteHandler}
                />

            ))
          ) : <h1>No Items Found</h1>
        }
        

      </main>
      
      <aside>
        <h2>Subtotal: PKR {subTotal}</h2>
        <h2>Shipping: PKR {shipping}</h2>
        <h2>Tax Charges: PKR {tax}</h2>
        <h2>Total: PKR {total}</h2>
      </aside>
    </div>
  )
}

export default Cart
