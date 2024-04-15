import React, { useState } from 'react';
import CartModal from './CartModal';

import { useData } from '../Context/Context.js';


  
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartElements, addToCart } = useData();
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Music</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Store</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            {/* Add cart button */}

          </ul>

        </div>
        <button className="nav-item ml-auto">
              <button className="nav-link btn btn-link" onClick={toggleCart}>Cart</button>
          </button>
      </div>
      {/* Render the cart modal */}
      <CartModal showCart={showCart} onClose={toggleCart} />
    </nav>
  );
};

export default Header;
