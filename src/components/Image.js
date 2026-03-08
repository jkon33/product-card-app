import React from 'react';
import product from '../product';

// Component to display the product image
const Image = () => {
  return (
    <div className="product-image-container">
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
      />
    </div>
  );
};

export default Image;