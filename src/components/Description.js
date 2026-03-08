import React from 'react';
import product from '../product';

// Component to display the product description
const Description = () => {
  return (
    <div className="product-description">
      <p>{product.description}</p>
    </div>
  );
};

export default Description;