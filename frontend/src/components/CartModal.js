import React from 'react';
import "./CartModal.css"
import { useData } from '../Context/Context.js';
const CartModal = ({ showCart, onClose }) => {
    const { cart } = useData();
  return (
    <div className={`cart-modal ${showCart ? 'show' : ''}`}>
      <div className="cart-content">
        <div className="modal-header">
          <h5 className="modal-title">Shopping Cart</h5>
          <button type="button" className="close" onClick={onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
            {/* {cart.length>0?(<h1>No item in cart</h1>):(cart.map((item)=>{
                return <h1>{item}</h1>
            }))} */}
            {cart.map((item, index) => (
            <div key={index} className="cart-item border p-4 rounded">
                
                <div className="item-details">
                <h5>{item.title}</h5>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                </div>
            </div>
            ))}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          <button type="button" className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
