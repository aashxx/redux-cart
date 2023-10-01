import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Navbar = () => {

  // Selected states from redux store
  const { cartItems } = useSelector(state => state.cart);

  return (
    <nav>
      <div className="logo">
        <Link to={'/'}>Apptronics</Link>
      </div>
      <div className="nav-items">
        <Link to={'/'}>Products</Link>
        <Link to={'/cart'}>
            <FiShoppingBag />
            <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
