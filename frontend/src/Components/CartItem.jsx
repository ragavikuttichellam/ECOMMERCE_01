import React from "react";
import "./CartItem.css";

export default function CartItem({ item, updateQty, removeItem }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-details">
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>

        <div className="cart-controls">
          <button onClick={() => updateQty(item._id, item.qty - 1)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => updateQty(item._id, item.qty + 1)}>+</button>
        </div>
      </div>

      <button className="remove-btn" onClick={() => removeItem(item._id)}>
        ✕
      </button>
    </div>
  );
}
