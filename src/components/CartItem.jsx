import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const CartItem = ({imgSrc, name, price, id, qty, increment, decrement, deleteHandler}) => {
  return (
    <div className='cartItem'>
      <img src={imgSrc} alt="item" />
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>
      <div>
        <button onClick={() => increment(id)}>+</button>
        <p>{qty}</p>
        <button onClick={() => decrement(id)}>-</button>
      </div>
      <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
  )
}

export default CartItem;
