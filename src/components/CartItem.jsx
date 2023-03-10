import React from 'react';
import '../styles/cartitem.scss';
import {AiFillDelete}from 'react-icons/ai';


const CartItem = ({
  imgSrc, 
  name, 
  price, 
  qty, 
  decrement, 
  increment, 
  deleteHandler, 
  id
  }) => {

  return (
    <div key={id} className='cartitem'>
      <img src={imgSrc} alt="item" />

      <article>
        <h3>{name}</h3>
        <p>PKR {price}</p>
      </article>

      <div>
        <button onClick={()=> decrement(id)}>-</button>

        <p>{qty}</p>

        <button onClick={()=> increment(id)}>+</button>
      </div>

      <AiFillDelete onClick={()=> deleteHandler(id)}/>
    </div>
  )
}

export default CartItem;
