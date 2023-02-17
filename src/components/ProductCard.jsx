import React from 'react';
import '../styles/productcard.scss';

    const ProductCard = ({ name, id, price, handler, imgSrc }) => (
        <div className="productCard">
            <img src={imgSrc} alt={name} />
            <p>{name}</p>
            <h4>PKR {price}</h4>
            <button onClick={() => handler({ name, price, id, quantity: 2, imgSrc })}>
            Add to Cart
            </button>
        </div>    
  );

export default ProductCard