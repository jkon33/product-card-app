import React from 'react';
import product from '../product';

// Component to display the product name
const Name = () => {
  return (
    <div className="product-name">
      <h2>{product.name}</h2>
    </div>
  );
};

export default Name;