import React from 'react';
import product from '../product';

// Component to display the product price
const Price = () => {
  return (
    <div className="product-price">
      <span className="price-tag">{product.price}</span>
    </div>
  );
};

export default Price;