import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {

  // Selected states from redux store
  const { cartItems, subtotal, shipping, tax, total } = useSelector(state => state.cart);

  // Dispatching reducers from store
  const dispatch = useDispatch();

  // Increment quantity in cart (method)
  const increment = (id) => {
    dispatch({
      type: 'addToCart',
      payload: {id}
    })

    // Final price details
    dispatch({
      type: 'calculatePrice',
    })
  }

  // Decrement quantity in cart (method)
  const decrement = (id) => {
    dispatch({
      type: 'decrement',
      payload: id
    })

    // Final price details
    dispatch({
      type: 'calculatePrice',
    })
  }

  // Delete item from cart (method)
  const deleteHandler = (id) => {
    dispatch({
      type: 'deleteFromCart',
      payload: id
    })

    // Final price details
    dispatch({
      type: 'calculatePrice',
    })
  }

  return (
    <div className='cart'>
      <main>
        {
          cartItems.length <= 0 ? <h1>No Items in Cart</h1> :
          cartItems.map(item => (
            <CartItem key={item.id} name={item.name} id={item.id} qty={item.quantity} price={item.price} imgSrc={item.imgSrc} increment={increment} decrement={decrement} deleteHandler={deleteHandler} /> 
          ))
        }
      </main>
      <aside>
        <h2>Subtotal: ${subtotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  )
}

export default Cart;
