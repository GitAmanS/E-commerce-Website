import React from 'react';
import { useData } from '../Context/Context.js';

const ProductGrid = () => {
  const { cartElements } = useData();
  return (
    <div className="row justify-content-center">
      {cartElements.map((product, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card h-100">
            <img src={product.imageUrl} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">Price: ${product.price}</p>
              <p className="card-text">Quantity: {product.quantity}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
