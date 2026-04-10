import React, { useContext } from "react";
import './Cart.css';
import CartItem from "../Components/CartItem";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
   const buyNow = () => {
    if (cart.length === 0) {
      alert("Cart is empty ❌");
      return;
    }

    alert("✅ Order Placed Successfully!\nThank you for shopping with Sabari Store 🛒");

    // Clear cart after buying
    window.location.href = "/";
  };

  

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty 😔</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem
              key={item._id}
              item={item}
              updateQty={updateQty}
              removeItem={removeItem}
            />
          ))}
            <br />
      <button onClick={buyNow} style={buyBtn}>
        Buy Now
      </button>

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const row = {
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #ccc",
  padding: 10
};

const buyBtn = {
  background: "green",
  color: "white",
  padding: "12px 30px",
  border: 0,
  borderRadius: 5,
  fontSize: 16,
  cursor: "pointer"
};