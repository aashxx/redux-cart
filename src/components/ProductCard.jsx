import React from 'react';

const ProductCard = ({name, id, price, imgSrc, handler}) => {
  return (
    <div className='productCard'>
        <img src={imgSrc} alt="product" />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler({name, id, price, imgSrc, quantity: 1})}>Add to Cart</button>
    </div>
  )
}

export default ProductCard;
